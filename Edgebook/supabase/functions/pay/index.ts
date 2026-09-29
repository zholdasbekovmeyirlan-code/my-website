// EntryX — Pro payments via Cryptomus (crypto). No imports: paste into the Supabase dashboard editor and Deploy.
// One function, two jobs:
//   1. POST from the app (signed-in user, { plan: "monthly" | "yearly", returnUrl }) → creates an invoice, returns { url }.
//   2. POST from Cryptomus (payment webhook) → re-checks the payment with Cryptomus and grants Pro via pay_grant().
// Secrets (Supabase → Edge Functions → Secrets):
//   CRYPTOMUS_MERCHANT   Merchant UUID (Cryptomus → Business → your merchant → Settings)
//   CRYPTOMUS_API_KEY    Payment API key of that merchant
//   PRICE_MONTHLY        optional, USD, default 12
//   PRICE_YEARLY         optional, USD, default 99
// Settings → "Verify JWT" must be OFF for this function (Cryptomus calls it without a Supabase token).

const SB_URL = Deno.env.get("SUPABASE_URL") ?? "";
const MERCHANT = Deno.env.get("CRYPTOMUS_MERCHANT") ?? "";
const API_KEY = Deno.env.get("CRYPTOMUS_API_KEY") ?? "";
const PRICES: Record<string, number> = {
  monthly: Number(Deno.env.get("PRICE_MONTHLY") ?? "12"),
  yearly: Number(Deno.env.get("PRICE_YEARLY") ?? "99"),
};
const PAID = ["paid", "paid_over"];

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

// Service key for pay_grant(): legacy JWT key if present, otherwise the new sb_secret_ key.
function serviceHeaders(): Record<string, string> {
  let key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (!key) {
    try { key = String(Object.values(JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") ?? "{}"))[0] ?? ""); } catch { /* none */ }
  }
  const h: Record<string, string> = { apikey: key, "Content-Type": "application/json" };
  if (!key.startsWith("sb_secret_")) h.Authorization = `Bearer ${key}`;
  return h;
}

// ---------- MD5 (Web Crypto has no MD5; Cryptomus signs with md5(base64(body) + apiKey)) ----------
function md5(str: string): string {
  const bytes = new TextEncoder().encode(str);
  const len = bytes.length;
  const words = new Uint32Array((((len + 8) >>> 6) + 1) * 16);
  for (let i = 0; i < len; i++) words[i >> 2] |= bytes[i] << ((i % 4) * 8);
  words[len >> 2] |= 0x80 << ((len % 4) * 8);
  words[words.length - 2] = (len * 8) >>> 0;
  words[words.length - 1] = Math.floor(len / 0x20000000);
  const S = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  const K = Array.from({ length: 64 }, (_, i) => Math.floor(Math.abs(Math.sin(i + 1)) * 2 ** 32) >>> 0);
  let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
  for (let o = 0; o < words.length; o += 16) {
    let a = a0, b = b0, c = c0, d = d0;
    for (let i = 0; i < 64; i++) {
      let f: number, g: number;
      if (i < 16) { f = (b & c) | (~b & d); g = i; }
      else if (i < 32) { f = (d & b) | (~d & c); g = (5 * i + 1) % 16; }
      else if (i < 48) { f = b ^ c ^ d; g = (3 * i + 5) % 16; }
      else { f = c ^ (b | ~d); g = (7 * i) % 16; }
      const tmp = d; d = c; c = b;
      const x = (a + f + K[i] + words[o + g]) >>> 0;
      const s = S[(i >> 4) * 4 + (i % 4)];
      b = (b + ((x << s) | (x >>> (32 - s)))) >>> 0;
      a = tmp;
    }
    a0 = (a0 + a) >>> 0; b0 = (b0 + b) >>> 0; c0 = (c0 + c) >>> 0; d0 = (d0 + d) >>> 0;
  }
  return [a0, b0, c0, d0].map((n) => Array.from({ length: 4 }, (_, i) => ((n >>> (i * 8)) & 255).toString(16).padStart(2, "0")).join("")).join("");
}
const b64 = (s: string) => btoa(String.fromCharCode(...new TextEncoder().encode(s)));

async function cryptomus(path: string, payload: Record<string, unknown>) {
  const body = JSON.stringify(payload);
  const res = await fetch(`https://api.cryptomus.com/v1/${path}`, {
    method: "POST",
    headers: { merchant: MERCHANT, sign: md5(b64(body) + API_KEY), "Content-Type": "application/json" },
    body,
  });
  // deno-lint-ignore no-explicit-any
  const data: any = await res.json().catch(() => ({}));
  if (!res.ok || data.state !== 0) throw new Error(`cryptomus ${path} ${res.status}: ${JSON.stringify(data).slice(0, 300)}`);
  return data.result;
}

// order_id = <plan>-<user id without dashes>-<time>; Cryptomus allows [a-zA-Z0-9_-]
const ORDER_RE = /^(monthly|yearly)-([0-9a-f]{32})-[0-9a-z]+$/;
const toUuid = (h: string) => `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  if (!MERCHANT || !API_KEY) return json({ error: "not_configured" }, 500);

  // deno-lint-ignore no-explicit-any
  let body: any;
  try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }

  // ---------- 2. Cryptomus webhook ----------
  if (body && (body.sign || body.type === "payment") && (body.uuid || body.order_id)) {
    try {
      // Never trust the webhook body: ask Cryptomus for the payment with our own key.
      const info = await cryptomus("payment/info", body.uuid ? { uuid: body.uuid } : { order_id: body.order_id });
      const status = info.payment_status ?? info.status;
      const m = ORDER_RE.exec(String(info.order_id ?? ""));
      if (!PAID.includes(status) || !m) return json({ ok: true, ignored: status });
      const plan = m[1];
      const amount = Number(info.amount);
      if (String(info.currency).toUpperCase() !== "USD" || !(amount >= PRICES[plan])) {
        console.error("amount mismatch", info.order_id, info.amount, info.currency);
        return json({ ok: true, ignored: "amount" });
      }
      const res = await fetch(`${SB_URL}/rest/v1/rpc/pay_grant`, {
        method: "POST",
        headers: serviceHeaders(),
        body: JSON.stringify({ p_order: info.order_id, p_user: toUuid(m[2]), p_plan: plan, p_amount: amount, p_currency: "USD" }),
      });
      if (!res.ok) {
        console.error("pay_grant", res.status, (await res.text()).slice(0, 300));
        return json({ error: "grant_failed" }, 500); // non-2xx → Cryptomus retries
      }
      return json({ ok: true, granted: await res.json() });
    } catch (e) {
      console.error(e);
      return json({ error: "webhook_failed" }, 500);
    }
  }

  // ---------- 1. Create an invoice for the signed-in user ----------
  const userRes = await fetch(`${SB_URL}/auth/v1/user`, {
    headers: { Authorization: req.headers.get("Authorization") ?? "", apikey: req.headers.get("apikey") ?? "" },
  });
  if (!userRes.ok) return json({ error: "unauthorized" }, 401);
  const user = await userRes.json();

  const plan = body.plan === "yearly" ? "yearly" : "monthly";
  const back = typeof body.returnUrl === "string" && /^https:\/\//.test(body.returnUrl) ? body.returnUrl : "";
  const self = `${SB_URL}/functions/v1/${new URL(req.url).pathname.split("/").filter(Boolean).pop()}`;
  const orderId = `${plan}-${String(user.id).replace(/-/g, "")}-${Date.now().toString(36)}`;
  try {
    const inv = await cryptomus("payment", {
      amount: PRICES[plan].toFixed(2),
      currency: "USD",
      order_id: orderId,
      url_callback: self,
      ...(back ? { url_return: back, url_success: back + (back.includes("?") ? "&" : "?") + "paid=1" } : {}),
      lifetime: 7200,
      additional_data: String(user.email ?? ""),
    });
    return json({ url: inv.url, order_id: orderId });
  } catch (e) {
    console.error(e);
    return json({ error: "invoice_failed", detail: String((e as Error).message).slice(0, 200) }, 502);
  }
});
