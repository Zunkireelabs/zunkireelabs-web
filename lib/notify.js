/**
 * Swappable notification provider.
 *
 * Set NOTIFICATION_PROVIDER env var to select a provider:
 *   twilio  — Twilio SMS or WhatsApp Business (default)
 *   none    — silently skip (useful in dev / mock mode)
 *
 * Required env vars per provider:
 *
 *   Twilio SMS:
 *     TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM (+977xxxxxxxx)
 *
 *   Twilio WhatsApp:
 *     TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM (whatsapp:+14155238886)
 *     Set TWILIO_USE_WHATSAPP=true to use WhatsApp channel instead of SMS.
 */

export async function sendNotification({ to, message }) {
  const provider = process.env.NOTIFICATION_PROVIDER || 'twilio';

  if (provider === 'none') return { ok: true, skipped: true };
  if (provider === 'twilio') return sendViaTwilio({ to, message });

  throw new Error(`Unknown NOTIFICATION_PROVIDER: "${provider}"`);
}

async function sendViaTwilio({ to, message }) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;

  if (!sid || !token) {
    return { ok: false, error: 'Twilio credentials not configured' };
  }

  const useWhatsApp = process.env.TWILIO_USE_WHATSAPP === 'true';
  const from = useWhatsApp
    ? process.env.TWILIO_WHATSAPP_FROM
    : process.env.TWILIO_FROM;

  if (!from) {
    return { ok: false, error: 'TWILIO_FROM (or TWILIO_WHATSAPP_FROM) not set' };
  }

  const toFormatted = useWhatsApp ? `whatsapp:${to}` : to;

  const { default: twilio } = await import('twilio');
  const client = twilio(sid, token);

  const msg = await client.messages.create({
    body: message,
    from,
    to: toFormatted
  });

  return { ok: true, sid: msg.sid };
}
