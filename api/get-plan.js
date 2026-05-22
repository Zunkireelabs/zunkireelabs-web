import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const MOCK_MODE = !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY;

const supabase = MOCK_MODE
  ? null
  : createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const __dirname = dirname(fileURLToPath(import.meta.url));
const shopProducts = JSON.parse(readFileSync(join(__dirname, '../data/products.json'), 'utf-8'));

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'id is required' });

  if (MOCK_MODE) {
    // Return a realistic mock plan for UI testing
    const product = shopProducts.find(p => p.id === 13) || shopProducts[0];
    return res.status(200).json({
      short_id: id,
      product_name: product.name,
      product_price: product.price,
      down_payment_pct: 15,
      bank_name: 'Nepal Bank Ltd.',
      tenure_months: 24,
      monthly_income: 80000,
      emi_amount: 1818,
      status: 'saved',
      created_at: new Date().toISOString(),
      mock: true
    });
  }

  const { data, error } = await supabase
    .from('saved_plans')
    .select('*')
    .eq('short_id', id.toUpperCase())
    .single();

  if (error || !data) return res.status(404).json({ error: 'Plan not found' });

  return res.status(200).json(data);
}
