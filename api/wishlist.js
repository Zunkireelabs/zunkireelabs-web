import { createClient } from '@supabase/supabase-js';

const MOCK_MODE = !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY;

const supabase = MOCK_MODE
  ? null
  : createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET /api/wishlist?email=... — fetch all plans for a user
  if (req.method === 'GET') {
    const { email } = req.query;
    if (!email) return res.status(400).json({ error: 'email is required' });

    if (MOCK_MODE) {
      return res.status(200).json([
        {
          short_id: 'ABC123',
          product_name: 'OnePlus 12',
          product_price: 95000,
          down_payment_pct: 15,
          bank_name: 'Nepal Bank Ltd.',
          tenure_months: 24,
          emi_amount: 3800,
          status: 'saved',
          created_at: new Date().toISOString(),
          mock: true
        }
      ]);
    }

    const { data, error } = await supabase
      .from('saved_plans')
      .select('*')
      .eq('user_email', email.toLowerCase())
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data || []);
  }

  // PATCH /api/wishlist — update plan status
  if (req.method === 'PATCH') {
    const { short_id, status } = req.body || {};
    if (!short_id || !status) return res.status(400).json({ error: 'short_id and status required' });
    if (!['saved', 'shared', 'approved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    if (MOCK_MODE) return res.status(200).json({ short_id, status });

    const { error } = await supabase
      .from('saved_plans')
      .update({ status })
      .eq('short_id', short_id.toUpperCase());

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ short_id, status });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
