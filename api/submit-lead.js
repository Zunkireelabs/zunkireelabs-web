// Server-side proxy for lead-form submissions (contact.njk, get-a-quote.njk,
// apply.njk). See the original comment history for why this exists: the CRM
// bearer token used to be hardcoded in browser-shipped JS, publicly readable
// via view-source. It now lives only as the EDGEX_CRM_TOKEN environment
// variable, and this function is the only thing that ever talks to
// edgex.zunkireelabs.com directly.
//
// This Vercel function only ever runs on PR preview deployments — production
// (zunkireelabs.com) is a static site served by nginx on a VPS with no
// serverless runtime, so it's served instead by the Node sidecar at
// server/submit-lead-server.js (same shared proxy logic, imported from
// server/lead-proxy-core.js so the two never drift apart).
//
// Body parsing is disabled and the raw request forwarded as-is (same
// Content-Type header, unmodified body) so this works for both the JSON
// payloads contact.njk/get-a-quote.njk send AND the multipart/form-data a
// resume upload on apply.njk requires — no separate file-upload endpoint
// needed, and no manual multipart parsing/re-serialization that could
// corrupt a binary file.
//
// Which EdgeX form a submission goes to is selected by a `form` query param
// (?form=careers-application), checked against the allowlist in
// lead-proxy-core.js so this can never become an open relay to an arbitrary
// EdgeX form/endpoint.
export const config = {
  api: { bodyParser: false }
};

import { proxyLeadSubmission, resolveFormKey } from '../server/lead-proxy-core.js';

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

  const formKey = resolveFormKey(req.query.form);

  try {
    const rawBody = await readRawBody(req);
    const result = await proxyLeadSubmission({
      formKey,
      contentType: req.headers['content-type'],
      rawBody,
      token: process.env.EDGEX_CRM_TOKEN
    });
    res.status(result.status);
    res.setHeader('Content-Type', result.contentType);
    return res.send(result.body);
  } catch (err) {
    if (err.configError) {
      console.error('[submit-lead] EDGEX_CRM_TOKEN is not configured');
      return res.status(500).json({ error: 'Lead submission is not configured' });
    }
    console.error('[submit-lead] proxy error', err);
    return res.status(502).json({ error: 'Failed to reach CRM' });
  }
}
