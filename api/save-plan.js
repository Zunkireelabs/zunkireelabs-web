import { createClient } from '@supabase/supabase-js';

const MOCK_MODE = !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY;

const supabase = MOCK_MODE
  ? null
  : createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

function generateShortId() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    product_id, product_name, product_price,
    down_payment_pct, bank_name, bank_interest_rate,
    product_category, tenure_months, monthly_income,
    emi_amount, user_email, user_phone
  } = req.body || {};

  if (!product_name || !bank_name || !emi_amount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const short_id = generateShortId();

  if (MOCK_MODE) {
    return res.status(200).json({
      short_id,
      url: `/plan/${short_id}`,
      mock: true,
      message: 'Mock mode: add SUPABASE_URL and SUPABASE_ANON_KEY to persist plans'
    });
  }

  const { data, error } = await supabase
    .from('saved_plans')
    .insert({
      short_id,
      product_id,
      product_name,
      product_price,
      down_payment_pct,
      bank_name,
      bank_interest_rate: bank_interest_rate || null,
      product_category: product_category || null,
      tenure_months,
      monthly_income,
      emi_amount,
      status: 'saved',
      user_email: user_email || null,
      user_phone: user_phone || null
    })
    .select('short_id')
    .single();

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({
    short_id: data.short_id,
    url: `/plan/${data.short_id}`
  });
}
