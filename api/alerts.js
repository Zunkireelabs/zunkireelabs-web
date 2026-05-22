import { createClient } from '@supabase/supabase-js';

const MOCK_MODE = !process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY;

const supabase = MOCK_MODE
  ? null
  : createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const VALID_TYPES = ['price_drop', 'festive', 'rate_change', 'stock'];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET /api/alerts?plan_id=SHORT_ID
  if (req.method === 'GET') {
    const { plan_id } = req.query;
    if (!plan_id) return res.status(400).json({ error: 'plan_id is required' });

    if (MOCK_MODE) {
      return res.status(200).json([]);
    }

    const { data, error } = await supabase
      .from('alerts')
      .select('id, alert_type, phone_number, is_active, last_triggered, created_at')
      .eq('plan_id', plan_id.toUpperCase())
      .order('created_at', { ascending: true });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data || []);
  }

  // POST /api/alerts — upsert: create or toggle on an alert
  // body: { plan_id, alert_type, phone_number }
  if (req.method === 'POST') {
    const { plan_id, alert_type, phone_number } = req.body || {};
    if (!plan_id || !alert_type || !phone_number) {
      return res.status(400).json({ error: 'plan_id, alert_type, phone_number are required' });
    }
    if (!VALID_TYPES.includes(alert_type)) {
      return res.status(400).json({ error: `alert_type must be one of: ${VALID_TYPES.join(', ')}` });
    }

    if (MOCK_MODE) {
      return res.status(200).json({
        id: 'mock-' + Math.random().toString(36).slice(2),
        plan_id: plan_id.toUpperCase(),
        alert_type,
        phone_number,
        is_active: true,
        mock: true
      });
    }

    // Upsert: if same plan+type already exists, re-activate it
    const { data, error } = await supabase
      .from('alerts')
      .upsert(
        {
          plan_id: plan_id.toUpperCase(),
          alert_type,
          phone_number,
          is_active: true
        },
        { onConflict: 'plan_id,alert_type', ignoreDuplicates: false }
      )
      .select('id, alert_type, phone_number, is_active')
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // PATCH /api/alerts — toggle is_active
  // body: { id, is_active }
  if (req.method === 'PATCH') {
    const { id, is_active } = req.body || {};
    if (!id || typeof is_active !== 'boolean') {
      return res.status(400).json({ error: 'id and is_active (boolean) required' });
    }

    if (MOCK_MODE) return res.status(200).json({ id, is_active });

    const { error } = await supabase
      .from('alerts')
      .update({ is_active })
      .eq('id', id);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ id, is_active });
  }

  // DELETE /api/alerts — remove an alert
  // body: { id }
  if (req.method === 'DELETE') {
    const { id } = req.body || {};
    if (!id) return res.status(400).json({ error: 'id is required' });

    if (MOCK_MODE) return res.status(200).json({ deleted: true });

    const { error } = await supabase
      .from('alerts')
      .delete()
      .eq('id', id);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ deleted: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
