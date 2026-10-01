// EntryX — Pro payments via NOWPayments (crypto). No imports: paste into the Supabase dashboard editor and Deploy.
// One function, two jobs:
//   1. POST from the app (signed-in user, { plan: "monthly" | "yearly", returnUrl }) → creates an invoice, returns { url }.
//   2. POST from NOWPayments (IPN) → re-checks the payment with the NOWPayments API and grants Pro via pay_grant().
// Secrets (Supabase → Edge Functions → Secrets):
//   NOWPAYMENTS_API_KEY      Settings → Payments → API keys
//   NOWPAYMENTS_IPN_SECRET   Settings → Payments → Instant payment notifications (IPN secret key)
//   PRICE_MONTHLY            optional, USD, default 12
//   PRICE_YEARLY             optional, USD, default 99
// Settings → "Verify JWT" must be OFF for this function (NOWPayments calls it without a Supabase token).

const SB_URL = Deno.env.get("SUPABASE_URL") ?? "";
const API_KEY = Deno.env.get("NOWPAYMENTS_API_KEY") ?? "";
const IPN_SECRET = Deno.env.get("NOWPAYMENTS_IPN_SECRET") ?? "";
const API = "https://api.nowpayments.io/v1";
const PRICES: Record<string, number> = {
  monthly: Number(Deno.env.get("PRICE_MONTHLY") ?? "12"),
  yearly: Number(Deno.env.get("PRICE_YEARLY") ?? "99"),
};

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

// NOWPayments signs IPNs with HMAC-SHA512(JSON of the body with keys sorted recursively, IPN secret).
// deno-lint-ignore no-explicit-any
function sortObject(o: any): any {
  if (Array.isArray(o)) return o.map(sortObject);
  if (o && typeof o === "object") return Object.keys(o).sort().reduce((r: Record<string, unknown>, k) => { r[k] = sortObject(o[k]); return r; }, {});
  return o;
}
async function hmacSha512(secret: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-512" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(msg));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function now(path: string, init: RequestInit = {}) {
  const res = await fetch(`${API}/${path}`, { ...init, headers: { "x-api-key": API_KEY, "Content-Type": "application/json", ...(init.headers ?? {}) } });
  // deno-lint-ignore no-explicit-any
  const data: any = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`nowpayments ${path} ${res.status}: ${JSON.stringify(data).slice(0, 300)}`);
  return data;
}

// order_id = <plan>-<user id without dashes>-<time>
const ORDER_RE = /^(monthly|yearly)-([0-9a-f]{32})-[0-9a-z]+$/;
const toUuid = (h: string) => `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  if (!API_KEY) return json({ error: "not_configured" }, 500);

  const raw = await req.text();
  // deno-lint-ignore no-explicit-any
  let body: any;
  try { body = JSON.parse(raw); } catch { return json({ error: "bad_json" }, 400); }

  // ---------- 2. NOWPayments IPN ----------
  if (body && body.payment_id && body.payment_status) {
    try {
      const sig = req.headers.get("x-nowpayments-sig") ?? "";
      if (IPN_SECRET && sig !== await hmacSha512(IPN_SECRET, JSON.stringify(sortObject(body)))) {
        console.error("ipn signature mismatch", body.payment_id);
        return json({ error: "bad_signature" }, 401);
      }
      // Never trust the IPN body alone: ask NOWPayments for the payment with our own key.
      const info = await now(`payment/${encodeURIComponent(String(body.payment_id))}`);
      const m = ORDER_RE.exec(String(info.order_id ?? ""));
      if (info.payment_status !== "finished" || !m) return json({ ok: true, ignored: info.payment_status });
      const plan = m[1];
      const amount = Number(info.price_amount);
      if (String(info.price_currency).toLowerCase() !== "usd" || !(amount >= PRICES[plan])) {
        console.error("amount mismatch", info.order_id, info.price_amount, info.price_currency);
        return json({ ok: true, ignored: "amount" });
      }
      const res = await fetch(`${SB_URL}/rest/v1/rpc/pay_grant`, {
        method: "POST",
        headers: serviceHeaders(),
        body: JSON.stringify({ p_order: info.order_id, p_user: toUuid(m[2]), p_plan: plan, p_amount: amount, p_currency: "USD" }),
      });
      if (!res.ok) {
        console.error("pay_grant", res.status, (await res.text()).slice(0, 300));
        return json({ error: "grant_failed" }, 500); // non-2xx → NOWPayments retries
      }
      return json({ ok: true, granted: await res.json() });
    } catch (e) {
      console.error(e);
      return json({ error: "ipn_failed" }, 500);
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
    const inv = await now("invoice", {
      method: "POST",
      body: JSON.stringify({
        price_amount: PRICES[plan],
        price_currency: "usd",
        order_id: orderId,
        order_description: `EntryX Pro (${plan})`,
        ipn_callback_url: self,
        ...(back ? { success_url: back + (back.includes("?") ? "&" : "?") + "paid=1", cancel_url: back } : {}),
      }),
    });
    return json({ url: inv.invoice_url, order_id: orderId });
  } catch (e) {
    console.error(e);
    return json({ error: "invoice_failed", detail: String((e as Error).message).slice(0, 200) }, 502);
  }
});
