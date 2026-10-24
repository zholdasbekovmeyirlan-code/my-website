/* FluentPath — daily streak reminder (Netlify scheduled function, see netlify.toml).
   Sends an empty Web Push to everyone with reminders on who has not practised today; the service worker
   shows the notification text. Empty pushes need no payload encryption, only a VAPID signature.
   Needs SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY and VAPID_SUBJECT. */
const crypto = require("crypto");

const b64url = (buf) => Buffer.from(buf).toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
const fromB64url = (s) => Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64");

// Today in Kazakhstan (UTC+5), the same calendar day the app writes into last_active.
const localToday = () => new Date(Date.now() + 5 * 3600e3).toISOString().slice(0, 10);

function vapidKey(publicKey, privateKey) {
  const pub = fromB64url(publicKey); // 65 bytes: 0x04 || x || y
  return crypto.createPrivateKey({
    key: { kty: "EC", crv: "P-256", d: b64url(fromB64url(privateKey)), x: b64url(pub.subarray(1, 33)), y: b64url(pub.subarray(33, 65)) },
    format: "jwk",
  });
}

function vapidJwt(endpoint, key, subject) {
  const header = b64url(JSON.stringify({ typ: "JWT", alg: "ES256" }));
  const claims = b64url(
    JSON.stringify({ aud: new URL(endpoint).origin, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: subject })
  );
  const sig = crypto.sign("sha256", Buffer.from(`${header}.${claims}`), { key, dsaEncoding: "ieee-p1363" });
  return `${header}.${claims}.${b64url(sig)}`;
}

async function supabase(path, opts = {}) {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const res = await fetch(process.env.SUPABASE_URL.replace(/\/$/, "") + path, {
    ...opts,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", ...(opts.headers || {}) },
  });
  if (!res.ok) throw new Error(`supabase ${res.status}`);
  return res.status === 204 ? null : res.json();
}

exports.handler = async () => {
  const env = process.env;
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY || !env.VAPID_PUBLIC_KEY || !env.VAPID_PRIVATE_KEY) {
    return { statusCode: 503, body: "not_configured" };
  }
  const key = vapidKey(env.VAPID_PUBLIC_KEY, env.VAPID_PRIVATE_KEY);
  const subject = env.VAPID_SUBJECT || "mailto:admin@example.com";
  const today = localToday();

  const subs = (await supabase("/rest/v1/push_subscriptions?select=endpoint,user_id,profiles(last_active)")) || [];
  const due = subs.filter((s) => !s.profiles || s.profiles.last_active !== today);
  let sent = 0;
  let removed = 0;

  await Promise.all(
    due.map(async (s) => {
      try {
        const res = await fetch(s.endpoint, {
          method: "POST",
          headers: {
            TTL: "43200",
            Urgency: "normal",
            "Content-Length": "0",
            Authorization: `vapid t=${vapidJwt(s.endpoint, key, subject)}, k=${env.VAPID_PUBLIC_KEY}`,
          },
        });
        if (res.status === 404 || res.status === 410) {
          await supabase(`/rest/v1/push_subscriptions?endpoint=eq.${encodeURIComponent(s.endpoint)}`, { method: "DELETE" });
          removed += 1;
        } else if (res.ok) sent += 1;
      } catch {
        /* one bad endpoint must not stop the rest */
      }
    })
  );

  return { statusCode: 200, body: JSON.stringify({ checked: subs.length, sent, removed }) };
};
