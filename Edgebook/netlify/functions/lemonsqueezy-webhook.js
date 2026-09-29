/* Edgebook — Lemon Squeezy webhook → sets the user's plan in Supabase.
   Netlify env vars required:
     LEMONSQUEEZY_WEBHOOK_SECRET  (Lemon Squeezy → Settings → Webhooks → signing secret)
     SUPABASE_URL                 (https://xxxx.supabase.co)
     SUPABASE_SERVICE_ROLE_KEY    (Supabase → Project Settings → API → service_role; never put this in the browser)
   Webhook URL: https://<your-site>/.netlify/functions/lemonsqueezy-webhook
   Events: subscription_created, subscription_updated, subscription_cancelled,
           subscription_resumed, subscription_expired, subscription_paused, subscription_unpaused */
'use strict';

const crypto = require('crypto');

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const ACTIVE = ['active', 'on_trial', 'past_due'];

function reply(statusCode, body) {
  return { statusCode, headers: { 'Content-Type': 'text/plain' }, body };
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return reply(405, 'method not allowed');

  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret || !url || !key) return reply(500, 'server not configured');

  const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : (event.body || '');
  const signature = String(event.headers['x-signature'] || event.headers['X-Signature'] || '');
  const digest = crypto.createHmac('sha256', secret).update(raw).digest('hex');
  if (signature.length !== digest.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest))) {
    return reply(401, 'invalid signature');
  }

  let payload;
  try { payload = JSON.parse(raw); } catch (e) { return reply(400, 'invalid json'); }

  const eventName = (payload.meta && payload.meta.event_name) || '';
  if (!eventName.startsWith('subscription_')) return reply(200, 'ignored');

  const userId = payload.meta.custom_data && payload.meta.custom_data.user_id;
  if (!userId || !UUID.test(userId)) return reply(200, 'no user id');

  const a = (payload.data && payload.data.attributes) || {};
  const until = a.ends_at || a.renews_at || null;
  const stillPaid = a.status === 'cancelled' && until && new Date(until) > new Date();
  const pro = ACTIVE.includes(a.status) || stillPaid;

  const res = await fetch(url.replace(/\/$/, '') + '/rest/v1/profiles?id=eq.' + encodeURIComponent(userId), {
    method: 'PATCH',
    headers: {
      apikey: key,
      Authorization: 'Bearer ' + key,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify({
      plan: pro ? 'pro' : 'free',
      plan_until: pro ? until : null,
      ls_customer_id: a.customer_id != null ? String(a.customer_id) : null,
      ls_subscription_id: payload.data && payload.data.id != null ? String(payload.data.id) : null,
      updated_at: new Date().toISOString()
    })
  });

  if (!res.ok) return reply(502, 'supabase error: ' + res.status);
  return reply(200, 'ok');
};
