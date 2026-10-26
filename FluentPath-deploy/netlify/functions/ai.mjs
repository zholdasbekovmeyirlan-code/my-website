/* FluentPath — server-side proxy to the Gemini API (Netlify Functions 2.0).
   Set GEMINI_API_KEY (and optionally GEMINI_MODEL) in Netlify → Site configuration → Environment variables.
   Netlify lets each visitor make 20 requests a minute (config.rateLimit), so nobody can drain the key. */
import P from "../../js/ai-prompts.js";

const TASKS = new Set(["writing", "speaking", "chat"]);
const MAX_BODY = 40000;

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

// Browsers send Origin with every POST; only this site's own pages may use the key.
function foreignOrigin(req) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  const hosts = [req.headers.get("host"), req.headers.get("x-forwarded-host"), new URL(req.url).host].filter(Boolean);
  try {
    return !hosts.includes(new URL(origin).host);
  } catch {
    return true;
  }
}

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "method" });
  if (foreignOrigin(req)) return json(403, { error: "forbidden" });
  const key = process.env.GEMINI_API_KEY;
  if (!key) return json(503, { error: "not_configured" });
  const raw = await req.text();
  if (!raw || raw.length > MAX_BODY) return json(413, { error: "too_large" });

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { error: "bad_json" });
  }
  if (!body || !TASKS.has(body.task)) return json(400, { error: "bad_task" });

  const out = await P.callGemini({
    key,
    model: process.env.GEMINI_MODEL || P.DEFAULT_MODEL,
    task: body.task,
    payload: body.payload,
  });
  if (!out.ok) {
    // Never leak upstream details or the key; the client maps these codes to its own messages.
    const status = out.error === "bad_key" ? 503 : out.status;
    return json(status, { error: out.error === "bad_key" ? "not_configured" : out.error });
  }
  return json(200, out.data);
};

export const config = {
  rateLimit: { windowLimit: 20, windowSize: 60, aggregateBy: ["ip", "domain"] },
};
