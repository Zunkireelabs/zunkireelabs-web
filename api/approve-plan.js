import { createClient } from '@supabase/supabase-js';
import { sendNotification } from '../lib/notify.js';

const MOCK_MODE = !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY;

const supabase = MOCK_MODE
  ? null
  : createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { short_id, approver_name } = req.body || {};
  if (!short_id) return res.status(400).json({ error: 'short_id is required' });

  const approver = (approver_name || 'Someone').trim();

  if (MOCK_MODE) {
    return res.status(200).json({
      short_id,
      status: 'approved',
      notified: false,
      mock: true,
      message: `Mock: plan ${short_id} approved by ${approver}`
    });
  }

  // 1. Fetch the plan (need product_name + user_phone for notification)
  const { data: plan, error: fetchErr } = await supabase
    .from('saved_plans')
    .select('short_id, product_name, user_phone, status')
    .eq('short_id', short_id.toUpperCase())
    .single();

  if (fetchErr || !plan) {
    return res.status(404).json({ error: 'Plan not found' });
  }

  if (plan.status === 'approved') {
    return res.status(200).json({ short_id, status: 'approved', already: true });
  }

  // 2. Mark approved
  const { error: updateErr } = await supabase
    .from('saved_plans')
    .update({ status: 'approved', approved_at: new Date().toISOString() })
    .eq('short_id', short_id.toUpperCase());

  if (updateErr) return res.status(500).json({ error: updateErr.message });

  // 3. Notify the plan creator if they left a phone number
  let notified = false;
  if (plan.user_phone) {
    const message =
      `✅ ${approver} approved your plan for ${plan.product_name}! ` +
      `View it at: ${process.env.SITE_URL || 'https://zunkireelabs.com'}/plan/${plan.short_id}`;

    try {
      const result = await sendNotification({ to: plan.user_phone, message });
      notified = result.ok;
    } catch (_) {
      // Notification failure must not block the approval response
    }
  }

  return res.status(200).json({ short_id, status: 'approved', notified });
}
