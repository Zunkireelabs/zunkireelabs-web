// Standalone Node server for the lead-form submission proxy — this is what
// actually runs in production/staging. zunkireelabs.com is a static site
// served by nginx on a VPS (see nginx/static.conf), which has no Node
// runtime of its own, so api/submit-lead.js's Vercel-function form only ever
// works on Vercel PR preview deployments. This sidecar runs as its own
// Docker container (see docker-compose.yml's `api` service) on the same
// internal Docker network as the nginx container, which proxy_passes
// requests under /api/ here.
import http from 'node:http';
import { proxyLeadSubmission, resolveFormKey } from './lead-proxy-core.js';

const PORT = process.env.PORT || 3001;
const TOKEN = process.env.EDGEX_CRM_TOKEN;

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // Docker healthcheck target (docker-compose.yml) — no auth/CRM dependency,
  // just confirms the process is alive and accepting connections.
  if (url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }

  if (url.pathname !== '/api/submit-lead') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Not found' }));
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json', 'Allow': 'POST' });
    return res.end(JSON.stringify({ error: 'Method not allowed' }));
  }

  const formKey = resolveFormKey(url.searchParams.get('form'));

  try {
    const rawBody = await readRawBody(req);
    const result = await proxyLeadSubmission({
      formKey,
      contentType: req.headers['content-type'],
      rawBody,
      token: TOKEN
    });
    res.writeHead(result.status, { 'Content-Type': result.contentType });
    return res.end(result.body);
  } catch (err) {
    if (err.configError) {
      console.error('[submit-lead-server] EDGEX_CRM_TOKEN is not configured');
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Lead submission is not configured' }));
    }
    console.error('[submit-lead-server] proxy error', err);
    res.writeHead(502, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Failed to reach CRM' }));
  }
});

server.listen(PORT, () => {
  console.log(`[submit-lead-server] listening on port ${PORT}`);
});
