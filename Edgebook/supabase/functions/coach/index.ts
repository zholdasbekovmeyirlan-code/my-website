// EntryX — AI coach (Supabase Edge Function, Deno).
// Secrets (Supabase → Edge Functions → Secrets) — set ONE provider key:
//   ANTHROPIC_API_KEY   Claude (paid, best quality). Used when present.
//   GEMINI_API_KEY      Google Gemini free tier (aistudio.google.com). Used when no Anthropic key is set.
//   AI_MODEL            optional, default "claude-opus-5-5" (e.g. "claude-haiku-4-5" to cut cost)
//   GEMINI_MODEL        optional; falls back to gemini-flash-latest / gemini-2.5-flash / gemini-2.0-flash
//   AI_MONTHLY_LIMIT    optional, default 100 questions per user per month
// Never put either key in the browser.
// SUPABASE_URL and SUPABASE_ANON_KEY are provided by Supabase automatically.
import Anthropic from "npm:@anthropic-ai/sdk";
import { createClient } from "npm:@supabase/supabase-js@2";

const MODEL = Deno.env.get("AI_MODEL") ?? "claude-opus-5-5";
const MONTHLY_LIMIT = Number(Deno.env.get("AI_MONTHLY_LIMIT") ?? "100");
// Server-side refusal fallback ("default" form) and effort are only accepted on these models.
const FALLBACK_MODELS = ["claude-fable-5-1", "claude-opus-5-5", "claude-opus-5", "claude-sonnet-5-5"];
const EFFORT_MODELS = [...FALLBACK_MODELS, "claude-fable-5", "claude-opus-4-8", "claude-opus-4-7", "claude-opus-4-6", "claude-sonnet-5", "claude-sonnet-4-6"];

const ANTHROPIC_KEY = Deno.env.get("ANTHROPIC_API_KEY");
const GEMINI_KEY = Deno.env.get("GEMINI_API_KEY");
// Model names and free-tier quotas change over time: try the configured model, then current aliases,
// moving on when one is missing (404), out of free quota (429) or overloaded (503).
const GEMINI_MODELS = [...new Set([Deno.env.get("GEMINI_MODEL"), "gemini-flash-latest", "gemini-flash-lite-latest", "gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-2.0-flash"].filter(Boolean) as string[])];
async function geminiFetch(key: string, payload: string): Promise<Response> {
  let res: Response | null = null;
  for (const model of GEMINI_MODELS) {
    res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: payload,
    });
    if (![404, 429, 503].includes(res.status)) return res;
    console.error("gemini", model, res.status, (await res.clone().text()).slice(0, 300));
  }
  return res!;
}
const anthropic = ANTHROPIC_KEY ? new Anthropic({ apiKey: ANTHROPIC_KEY }) : null;

type Answer = { reply: string; truncated: boolean; refused: boolean };
class UpstreamError extends Error {
  constructor(public code: "busy" | "server_key" | "bad_model_request" | "upstream", public status = 0, detail = "") { super(detail || code); }
}

async function askGemini(system: string, journal: string, messages: { role: "user" | "assistant"; content: string }[]): Promise<Answer> {
  const res = await geminiFetch(GEMINI_KEY!, JSON.stringify({
    systemInstruction: { parts: [{ text: system + "\n\n" + journal }] },
    contents: messages.map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] })),
    generationConfig: { maxOutputTokens: 8192, temperature: 0.6 },
  }));
  if (!res.ok) {
    const raw = await res.text();
    let detail = raw.slice(0, 200);
    try { detail = JSON.parse(raw).error.message.slice(0, 200); } catch { /* not json */ }
    if (res.status === 429 || res.status === 503) throw new UpstreamError("busy", res.status, detail);
    if (res.status === 401 || res.status === 403) throw new UpstreamError("server_key", res.status, detail);
    if (res.status === 400 || res.status === 404) throw new UpstreamError("bad_model_request", res.status, detail);
    throw new UpstreamError("upstream", res.status, detail);
  }
  // deno-lint-ignore no-explicit-any
  const data: any = await res.json();
  const cand = data?.candidates?.[0];
  if (data?.promptFeedback?.blockReason || !cand || cand.finishReason === "SAFETY" || cand.finishReason === "PROHIBITED_CONTENT") {
    return { reply: "", truncated: false, refused: true };
  }
  // deno-lint-ignore no-explicit-any
  const reply = (cand.content?.parts ?? []).filter((p: any) => typeof p.text === "string" && !p.thought).map((p: any) => p.text).join("").trim();
  return { reply, truncated: cand.finishReason === "MAX_TOKENS", refused: false };
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const SYSTEM = `You are the EntryX AI coach, built into the EntryX trading journal.
The trader's own journal data is provided below inside <journal> tags: summary statistics, breakdowns, recent trades and journal notes.

How to help:
- Ground every answer in the trader's journal. Quote concrete numbers (P&L, win rate, R, counts, dates, setups, hours, emotions, mistakes) and name the pattern behind them.
- Be a candid, encouraging performance coach: diagnose what is costing money, what is working, and give 2-4 specific, actionable changes the trader can apply to their process (rules, sizing, schedule, checklists).
- General trading education questions (risk management, R-multiples, position sizing, psychology, prop firm rules, journaling habits) are welcome; answer them clearly and relate them to the trader's data when possible.
- Do not give buy/sell/hold calls, entry or exit levels for specific assets, price predictions, or personalised investment advice. If asked, explain briefly that you analyse their own trading, and redirect to process and risk.
- If a question is unrelated to trading, markets, or using EntryX, answer in one short sentence that you are a trading coach, and offer a relevant alternative.
- If the journal has too little data to answer, say what is missing and how to log it.
- If the data is marked as demo data, mention once that insights are based on sample trades.
- Reply in the language given by the <lang> tag (kk = Kazakh, en = English) unless the trader writes in another language, in which case use theirs.
- Keep answers focused: short paragraphs and bullet lists, use **bold** for key numbers, no tables, no code blocks. Aim for under 250 words unless the trader asks for a full review.`;

type InMsg = { role?: unknown; content?: unknown };

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  // Act as the signed-in user so RLS and auth.uid() apply.
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
  });
  const { data: auth } = await sb.auth.getUser();
  if (!auth?.user) return json({ error: "unauthorized" }, 401);

  let body: { messages?: InMsg[]; context?: unknown; lang?: unknown };
  try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }

  const lang = body.lang === "en" ? "en" : "kk";
  const context = String(body.context ?? "").slice(0, 80000);
  const messages: Anthropic.Beta.Messages.BetaMessageParam[] = (Array.isArray(body.messages) ? body.messages : [])
    .slice(-16)
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .map((m) => ({ role: m.role as "user" | "assistant", content: (m.content as string).slice(0, 4000) }));
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return json({ error: "bad_request" }, 400);

  const { data: used, error: quotaError } = await sb.rpc("ai_take", { p_limit: MONTHLY_LIMIT });
  if (quotaError) return json({ error: "quota_unavailable" }, 500);
  if (used === -2) return json({ error: "not_pro" }, 403);
  if (used === -1) return json({ error: "limit", limit: MONTHLY_LIMIT }, 429);

  if (!anthropic && !GEMINI_KEY) {
    await sb.rpc("ai_refund");
    return json({ error: "server_key" }, 500);
  }
  const journal = `<lang>${lang}</lang>\n<journal>\n${context}\n</journal>`;

  try {
    let answer: Answer;
    if (anthropic) {
      const params: Anthropic.Beta.Messages.MessageCreateParamsNonStreaming = {
        model: MODEL,
        max_tokens: 16000,
        system: [
          { type: "text", text: SYSTEM },
          // The journal snapshot is identical for every question in a chat session → cache it.
          { type: "text", text: journal, cache_control: { type: "ephemeral" } },
        ],
        messages,
      };
      if (EFFORT_MODELS.includes(MODEL)) params.output_config = { effort: "medium" };
      if (FALLBACK_MODELS.includes(MODEL)) {
        params.betas = ["server-side-fallback-2026-07-01"];
        params.fallbacks = "default";
      }
      const response = await anthropic.beta.messages.create(params);
      answer = {
        refused: response.stop_reason === "refusal",
        truncated: response.stop_reason === "max_tokens",
        reply: response.content
          .filter((b): b is Anthropic.Beta.Messages.BetaTextBlock => b.type === "text")
          .map((b) => b.text)
          .join("\n")
          .trim(),
      };
    } else {
      answer = await askGemini(SYSTEM, journal, messages as { role: "user" | "assistant"; content: string }[]);
    }
    if (answer.refused) return json({ reply: null, refused: true, used, limit: MONTHLY_LIMIT });
    return json({ reply: answer.reply, truncated: answer.truncated, used, limit: MONTHLY_LIMIT });
  } catch (error) {
    await sb.rpc("ai_refund");
    console.error(error);
    if (error instanceof UpstreamError) return json({ error: error.code, status: error.status, detail: error.message }, error.code === "busy" ? 503 : 502);
    if (error instanceof Anthropic.RateLimitError) return json({ error: "busy" }, 503);
    if (error instanceof Anthropic.AuthenticationError) return json({ error: "server_key" }, 500);
    if (error instanceof Anthropic.BadRequestError) return json({ error: "bad_model_request", detail: error.message }, 500);
    if (error instanceof Anthropic.APIError) return json({ error: "upstream", status: error.status }, 502);
    return json({ error: "internal" }, 500);
  }
});
