/**
 * Daily alert cron job — runs once per day via Vercel Cron.
 *
 * Schedule: "0 3 * * *" = 3 AM UTC = 8:45 AM NPT (Nepal +5:45)
 *
 * Vercel invokes this with an Authorization: Bearer header containing
 * the value of CRON_SECRET. Any other caller gets 401.
 *
 * Checks performed:
 *   1. price_drop  — current product price dropped ≥2% since plan was saved
 *   2. festive     — a major festival is within the next 30 days
 *   3. rate_change — the bank's interest rate dropped since the plan was saved
 *   4. stock       — (placeholder, extend when stock data is available)
 *
 * Respects last_triggered: won't re-send the same alert type for the same
 * plan within 23 hours (prevents double-sending if cron fires slightly early).
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { sendAlert } from '../../lib/alert-sender.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');

const MOCK_MODE = !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY;

const supabase = MOCK_MODE
  ? null
  : createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// ─── Data loaders ────────────────────────────────────────────────────────────

function loadProducts() {
  return JSON.parse(readFileSync(join(ROOT, 'data/products.json'), 'utf-8'));
}

function loadBankRates() {
  return JSON.parse(readFileSync(join(ROOT, 'src/_data/bank_rates.json'), 'utf-8'));
}

function loadFestivals() {
  return JSON.parse(readFileSync(join(ROOT, 'data/festivals.json'), 'utf-8'));
}

// ─── Check helpers ───────────────────────────────────────────────────────────

function priceDrop(savedPrice, currentPrice) {
  if (!savedPrice || !currentPrice) return null;
  const drop = (savedPrice - currentPrice) / savedPrice;
  return drop >= 0.02 ? { drop, saving: savedPrice - currentPrice, currentPrice } : null;
}

function upcomingFestival(festivals, windowDays = 30) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() + windowDays);

  return festivals.find(f => {
    const d = new Date(f.date);
    return d >= today && d <= cutoff;
  }) || null;
}

function rateDrop(savedRate, currentRate) {
  if (!savedRate || !currentRate) return null;
  return currentRate < savedRate ? { savedRate, currentRate, diff: savedRate - currentRate } : null;
}

function cooldownOk(lastTriggered, hours = 23) {
  if (!lastTriggered) return true;
  return (Date.now() - new Date(lastTriggered).getTime()) > hours * 3_600_000;
}

// ─── Message builders ─────────────────────────────────────────────────────────

const SITE = process.env.SITE_URL || 'https://zunkireelabs.com';

function buildPriceDropMessage(plan, drop) {
  return (
    `Good news! ${plan.product_name} price dropped to ` +
    `Rs. ${Math.round(drop.currentPrice).toLocaleString('en-IN')} — ` +
    `Rs. ${Math.round(drop.saving).toLocaleString('en-IN')} less than when you saved it.\n` +
    `View your plan: ${SITE}/plan/${plan.short_id}`
  );
}

function buildFestiveMessage(plan, festival) {
  const days = Math.ceil((new Date(festival.date) - new Date()) / 86400000);
  const savingMin = Math.round(plan.product_price * (festival.discount_min_pct || 5) / 100);
  const savingMax = Math.round(plan.product_price * (festival.discount_max_pct || 15) / 100);
  return (
    `🎉 ${festival.name} is ${days} days away! ` +
    `Expect ${festival.discount_min_pct || 5}–${festival.discount_max_pct || 15}% discounts — ` +
    `that's Rs. ${savingMin.toLocaleString('en-IN')}–Rs. ${savingMax.toLocaleString('en-IN')} off your ${plan.product_name} plan.\n` +
    `View your plan: ${SITE}/plan/${plan.short_id}`
  );
}

function buildRateChangeMessage(plan, rate) {
  return (
    `Good news! ${plan.bank_name}'s interest rate dropped from ${rate.savedRate}% to ` +
    `${rate.currentRate}% p.a. — your EMI on ${plan.product_name} could be lower now.\n` +
    `View your updated plan: ${SITE}/plan/${plan.short_id}`
  );
}

// ─── Main handler ─────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  // Vercel passes CRON_SECRET in the Authorization header automatically.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = (req.headers['authorization'] || '').replace('Bearer ', '');
    if (auth !== secret) return res.status(401).json({ error: 'Unauthorized' });
  }

  const dryRun = req.query.dry === '1';
  const results = { checked: 0, sent: 0, skipped: 0, errors: [] };

  // ── Load static data ──────────────────────────────────────────────────────
  const products  = loadProducts();
  const bankRates = loadBankRates();
  const festivals = loadFestivals();

  const productMap  = Object.fromEntries(products.map(p => [p.id, p]));
  const bankRateMap = Object.fromEntries(bankRates.map(b => [b.bank_name, b.interest_rate]));
  const todayFestival = upcomingFestival(festivals);

  // ── Mock mode ────────────────────────────────────────────────────────────
  if (MOCK_MODE) {
    return res.status(200).json({
      mode: 'mock',
      message: 'No Supabase configured — nothing to check.',
      todayFestival: todayFestival ? `${todayFestival.name} on ${todayFestival.date}` : null
    });
  }

  // ── Fetch all active alerts with their plans ──────────────────────────────
  const { data: alerts, error: alertsErr } = await supabase
    .from('alerts')
    .select(`
      id,
      alert_type,
      phone_number,
      is_active,
      last_triggered,
      saved_plans (
        short_id,
        product_id,
        product_name,
        product_price,
        bank_name,
        bank_interest_rate,
        tenure_months,
        emi_amount,
        down_payment_pct
      )
    `)
    .eq('is_active', true);

  if (alertsErr) {
    return res.status(500).json({ error: alertsErr.message });
  }

  // ── Process each alert ────────────────────────────────────────────────────
  for (const alert of (alerts || [])) {
    results.checked++;
    const plan = alert.saved_plans;
    if (!plan) continue;

    let message = null;

    try {
      switch (alert.alert_type) {

        case 'price_drop': {
          if (!cooldownOk(alert.last_triggered)) { results.skipped++; continue; }
          const product = plan.product_id ? productMap[plan.product_id] : null;
          if (!product) { results.skipped++; continue; }
          const drop = priceDrop(plan.product_price, product.price);
          if (!drop) { results.skipped++; continue; }
          message = buildPriceDropMessage(plan, drop);
          break;
        }

        case 'festive': {
          if (!todayFestival) { results.skipped++; continue; }
          if (!cooldownOk(alert.last_triggered, 23 * 7)) { results.skipped++; continue; }
          message = buildFestiveMessage(plan, todayFestival);
          break;
        }

        case 'rate_change': {
          if (!cooldownOk(alert.last_triggered)) { results.skipped++; continue; }
          const currentRate = bankRateMap[plan.bank_name];
          const drop = rateDrop(plan.bank_interest_rate, currentRate);
          if (!drop) { results.skipped++; continue; }
          message = buildRateChangeMessage(plan, drop);
          break;
        }

        case 'stock':
          // Placeholder — implement when stock tracking is available
          results.skipped++;
          continue;

        default:
          results.skipped++;
          continue;
      }

      if (!message) { results.skipped++; continue; }

      // Send
      const result = await sendAlert({ to: alert.phone_number, message, dryRun });

      if (result.ok) {
        results.sent++;
        if (!dryRun) {
          await supabase
            .from('alerts')
            .update({ last_triggered: new Date().toISOString() })
            .eq('id', alert.id);
        }
      } else {
        results.errors.push({ alert_id: alert.id, error: result.error });
      }

    } catch (err) {
      results.errors.push({ alert_id: alert.id, error: err.message });
    }
  }

  return res.status(200).json({
    dryRun,
    ...results,
    provider: process.env.ALERT_PROVIDER || 'log',
    todayFestival: todayFestival ? `${todayFestival.name} on ${todayFestival.date}` : null
  });
}
