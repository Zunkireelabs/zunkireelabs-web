// Shared core logic for proxying lead-form submissions to the EdgeX CRM's
// public submit API. Used by both api/submit-lead.js (a Vercel function,
// which only ever runs on PR preview deployments) and
// server/submit-lead-server.js (the Node sidecar that actually serves
// production/staging — those run on a plain nginx-static VPS with no
// serverless runtime of its own; see nginx/static.conf's /api/ proxy_pass
// and docker-compose.yml's `api` service). Kept as one module so the two
// entry points can never drift apart on the actual proxying behavior.
const CRM_BASE = 'https://edgex.zunkireelabs.com/api/public/submit/zunkireelabs-crm';
const FORM_SLUGS = {
  contact: 'contact-us',
  apply: 'careers-application', // <- confirm/update this once the form exists in EdgeX
  resource: 'resource-download' // <- confirm/update this once the form exists in EdgeX
};

export function resolveFormKey(formQueryValue) {
  return FORM_SLUGS[formQueryValue] ? formQueryValue : 'contact';
}

export async function proxyLeadSubmission({ formKey, contentType, rawBody, token }) {
  if (!token) {
    throw Object.assign(new Error('Lead submission is not configured'), { status: 500, configError: true });
  }

  const slug = FORM_SLUGS[formKey] || FORM_SLUGS.contact;

  const crmRes = await fetch(`${CRM_BASE}/${slug}`, {
    method: 'POST',
    headers: {
      'Content-Type': contentType || 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: rawBody
  });

  const text = await crmRes.text();
  return {
    status: crmRes.status,
    contentType: crmRes.headers.get('content-type') || 'application/json',
    body: text
  };
}
