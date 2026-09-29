// EntryX — AI coach (lite). No imports: paste into the Supabase dashboard editor and Deploy.
// Uses the free Google Gemini API. Secret: GEMINI_API_KEY (optional: GEMINI_MODEL, AI_MONTHLY_LIMIT).
// For Claude, deploy supabase/functions/coach/index.ts instead.

const SB_URL = Deno.env.get("SUPABASE_URL") ?? "";
const GEMINI_KEY = Deno.env.get("GEMINI_API_KEY") ?? "";
// Model names change over time: try the configured one, then current aliases, skipping any that 404.
const GEMINI_MODELS = [...new Set([Deno.env.get("GEMINI_MODEL"), "gemini-flash-latest", "gemini-2.5-flash", "gemini-2.0-flash"].filter(Boolean) as string[])];
async function geminiFetch(key: string, payload: string): Promise<Response> {
  let res: Response | null = null;
  for (const model of GEMINI_MODELS) {
    res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: payload,
    });
    if (res.status !== 404) return res;
    console.error("gemini model not found:", model);
  }
  return res!;
}
const LIMIT = Number(Deno.env.get("AI_MONTHLY_LIMIT") ?? "100");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const SYSTEM = `You are the EntryX AI coach, built into the EntryX trading journal.
The trader's own journal data is provided below inside <journal> tags: summary statistics, breakdowns, recent trades and journal notes.
- Ground every answer in the trader's journal. Quote concrete numbers (P&L, win rate, R, counts, dates, setups, hours, emotions, mistakes) and name the pattern behind them.
- Be a candid, encouraging performance coach: diagnose what is costing money, what is working, and give 2-4 specific, actionable changes to their process (rules, sizing, schedule, checklists).
- General trading education questions (risk, R-multiples, position sizing, psychology, prop firm rules, journaling) are welcome; relate them to the trader's data when possible.
- Never give buy/sell/hold calls, entry or exit levels for specific assets, price predictions, or personalised investment advice; redirect to process and risk.
- If a question is unrelated to trading or EntryX, say in one sentence that you are a trading coach.
- If the journal has too little data, say what is missing and how to log it. If the data is marked as demo data, mention once that insights are based on sample trades.
- Reply in the language given by the <lang> tag (kk = Kazakh, en = English) unless the trader writes in another language.
- Short paragraphs and bullet lists, **bold** for key numbers, no tables, no code blocks, under 250 words unless asked for a full review.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  const auth = req.headers.get("Authorization") ?? "";
  const apikey = req.headers.get("apikey") ?? "";
  const sbHeaders = { Authorization: auth, apikey, "Content-Type": "application/json" };

  const userRes = await fetch(`${SB_URL}/auth/v1/user`, { headers: sbHeaders });
  if (!userRes.ok) return json({ error: "unauthorized" }, 401);

  let body: { messages?: { role?: unknown; content?: unknown }[]; context?: unknown; lang?: unknown };
  try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  const lang = body.lang === "en" ? "en" : "kk";
  const context = String(body.context ?? "").slice(0, 80000);
  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .slice(-16)
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && (m.content as string).trim())
    .map((m) => ({ role: m.role as string, content: (m.content as string).slice(0, 4000) }));
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return json({ error: "bad_request" }, 400);

  if (!GEMINI_KEY) return json({ error: "server_key" }, 500);

  const rpc = (fn: string, args: Record<string, unknown> = {}) =>
    fetch(`${SB_URL}/rest/v1/rpc/${fn}`, { method: "POST", headers: sbHeaders, body: JSON.stringify(args) });
  const takeRes = await rpc("ai_take", { p_limit: LIMIT });
  if (!takeRes.ok) return json({ error: "quota_unavailable", status: takeRes.status }, 500);
  const used = Number(await takeRes.json());
  if (used === -2) return json({ error: "not_pro" }, 403);
  if (used === -1) return json({ error: "limit", limit: LIMIT }, 429);

  try {
    const res = await geminiFetch(GEMINI_KEY, JSON.stringify({
      systemInstruction: { parts: [{ text: `${SYSTEM}\n\n<lang>${lang}</lang>\n<journal>\n${context}\n</journal>` }] },
      contents: messages.map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] })),
      generationConfig: { maxOutputTokens: 8192, temperature: 0.6 },
    }));
    if (!res.ok) {
      console.error("gemini", res.status, (await res.text()).slice(0, 500));
      await rpc("ai_refund");
      const code = res.status === 429 || res.status === 503 ? "busy" : res.status === 400 || res.status === 403 ? "server_key" : "upstream";
      return json({ error: code, status: res.status }, code === "busy" ? 503 : 502);
    }
    // deno-lint-ignore no-explicit-any
    const data: any = await res.json();
    const cand = data?.candidates?.[0];
    if (data?.promptFeedback?.blockReason || !cand || cand.finishReason === "SAFETY" || cand.finishReason === "PROHIBITED_CONTENT") {
      return json({ reply: null, refused: true, used, limit: LIMIT });
    }
    // deno-lint-ignore no-explicit-any
    const reply = (cand.content?.parts ?? []).filter((p: any) => typeof p.text === "string" && !p.thought).map((p: any) => p.text).join("").trim();
    return json({ reply, truncated: cand.finishReason === "MAX_TOKENS", used, limit: LIMIT });
  } catch (e) {
    console.error(e);
    await rpc("ai_refund");
    return json({ error: "internal" }, 500);
  }
});
