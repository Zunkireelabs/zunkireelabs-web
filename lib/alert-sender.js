/**
 * Alert sender — swappable provider for background price/festival/rate alerts.
 *
 * ALERT_PROVIDER env var (default: "log"):
 *   log       — console.log only, no real send (dev / dry-run mode)
 *   twilio    — Twilio SMS
 *               Required: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM
 *   whatsapp  — Twilio WhatsApp Business API
 *               Required: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM
 *               Note: TWILIO_WHATSAPP_FROM must be in "whatsapp:+1XXXXXXXXXX" format.
 *               Recipients must have messaged your sandbox/business number first
 *               (Twilio sandbox) or your WA Business number must be verified.
 *
 * ⚠️  wa.me links are click-based URLs that open WhatsApp in a browser.
 *     They CANNOT be used for server-side automated sends.
 *     Use "twilio" or "whatsapp" providers for real background notifications.
 */

export async function sendAlert({ to, message, dryRun = false }) {
  const provider = process.env.ALERT_PROVIDER || 'log';

  if (dryRun || provider === 'log') {
    console.log(`[alert-sender:${provider}] → ${to}\n${message}`);
    return { ok: true, provider, dryRun: true };
  }

  if (provider === 'twilio')    return sendTwilioSMS({ to, message });
  if (provider === 'whatsapp')  return sendTwilioWhatsApp({ to, message });

  throw new Error(`Unknown ALERT_PROVIDER: "${provider}"`);
}

async function sendTwilioSMS({ to, message }) {
  const { sid, token, from } = getTwilioCreds('TWILIO_FROM');
  if (!sid || !token || !from) return missingCreds('TWILIO_FROM');

  const { default: twilio } = await import('twilio');
  const msg = await twilio(sid, token).messages.create({ body: message, from, to });
  return { ok: true, provider: 'twilio', sid: msg.sid };
}

async function sendTwilioWhatsApp({ to, message }) {
  const { sid, token, from } = getTwilioCreds('TWILIO_WHATSAPP_FROM');
  if (!sid || !token || !from) return missingCreds('TWILIO_WHATSAPP_FROM');

  const { default: twilio } = await import('twilio');
  const waTo = to.startsWith('whatsapp:') ? to : `whatsapp:${to}`;
  const msg = await twilio(sid, token).messages.create({ body: message, from, to: waTo });
  return { ok: true, provider: 'whatsapp', sid: msg.sid };
}

function getTwilioCreds(fromEnv) {
  return {
    sid:   process.env.TWILIO_ACCOUNT_SID,
    token: process.env.TWILIO_AUTH_TOKEN,
    from:  process.env[fromEnv]
  };
}

function missingCreds(envKey) {
  const msg = `Alert skipped — missing TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN / ${envKey}`;
  console.warn(msg);
  return { ok: false, error: msg };
}
