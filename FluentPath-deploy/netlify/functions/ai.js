/* FluentPath — server-side proxy to the Gemini API.
   Set GEMINI_API_KEY (and optionally GEMINI_MODEL) in Netlify → Site configuration → Environment variables. */
const { callGemini, DEFAULT_MODEL } = require("../../js/ai-prompts.js");

const TASKS = new Set(["writing", "speaking", "chat"]);
const MAX_BODY = 40000;

const json = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { error: "method" });
  const key = process.env.GEMINI_API_KEY;
  if (!key) return json(503, { error: "not_configured" });
  if (!event.body || event.body.length > MAX_BODY) return json(413, { error: "too_large" });

  let req;
  try {
    req = JSON.parse(event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body);
  } catch {
    return json(400, { error: "bad_json" });
  }
  if (!req || !TASKS.has(req.task)) return json(400, { error: "bad_task" });

  const out = await callGemini({
    key,
    model: process.env.GEMINI_MODEL || DEFAULT_MODEL,
    task: req.task,
    payload: req.payload,
  });
  if (!out.ok) {
    // Never leak upstream details or the key; the client maps these codes to Kazakh messages.
    const status = out.error === "bad_key" ? 503 : out.status;
    return json(status, { error: out.error === "bad_key" ? "not_configured" : out.error });
  }
  return json(200, out.data);
};
