// Server-side proxy for lead-form submissions (contact.njk, get-a-quote.njk,
// apply.njk). See the original comment history for why this exists: the CRM
// bearer token used to be hardcoded in browser-shipped JS, publicly readable
// via view-source. It now lives only as the EDGEX_CRM_TOKEN environment
// variable (set in Vercel project settings, never committed to git), and
// this function is the only thing that ever talks to edgex.zunkireelabs.com
// directly.
//
// Body parsing is disabled and the raw request forwarded as-is (same
// Content-Type header, unmodified body) so this works for both the JSON
// payloads contact.njk/get-a-quote.njk send AND the multipart/form-data a
// resume upload on apply.njk requires — no separate file-upload endpoint
// needed, and no manual multipart parsing/re-serialization that could
// corrupt a binary file.
//
// Which EdgeX form a submission goes to is selected by a `form` query param
// (?form=careers-application), checked against the allowlist below so this
// can never become an open relay to an arbitrary EdgeX form/endpoint.
// FORM_SLUGS.apply is a placeholder — update it to match whatever the
// careers-application form is actually named once it's created in EdgeX.
export const config = {
  api: { bodyParser: false }
};

const CRM_BASE = 'https://edgex.zunkireelabs.com/api/public/submit/zunkireelabs-crm';
const FORM_SLUGS = {
  contact: 'contact-us',
  apply: 'careers-application', // <- confirm/update this once the form exists in EdgeX
  resource: 'resource-download' // <- confirm/update this once the form exists in EdgeX
};

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const formKey = FORM_SLUGS[req.query.form] ? req.query.form : 'contact';
  const slug = FORM_SLUGS[formKey];

  const token = process.env.EDGEX_CRM_TOKEN;
  if (!token) {
    console.error('[submit-lead] EDGEX_CRM_TOKEN is not configured');
    return res.status(500).json({ error: 'Lead submission is not configured' });
  }

  try {
    const rawBody = await readRawBody(req);
    const crmRes = await fetch(`${CRM_BASE}/${slug}`, {
      method: 'POST',
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: rawBody
    });

    const text = await crmRes.text();
    res.status(crmRes.status);
    res.setHeader('Content-Type', crmRes.headers.get('content-type') || 'application/json');
    return res.send(text);
  } catch (err) {
    console.error('[submit-lead] proxy error', err);
    return res.status(502).json({ error: 'Failed to reach CRM' });
  }
}
