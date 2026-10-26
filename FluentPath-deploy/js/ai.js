/* FluentPath — browser client for the AI tasks.
   Uses the Netlify function by default; a personal Gemini key (saved on this device) is used instead when set. */
window.FP_AI = (() => {
  const P = window.FP_AI_PROMPTS;
  const ENDPOINT = "/.netlify/functions/ai";
  const KEY_STORE = "fluentpath_gemini_key";
  const MODEL_STORE = "fluentpath_gemini_model";

  const read = (k) => {
    try {
      return localStorage.getItem(k) || "";
    } catch {
      return "";
    }
  };
  const write = (k, v) => {
    try {
      if (v) localStorage.setItem(k, v);
      else localStorage.removeItem(k);
    } catch {
      /* storage blocked */
    }
  };

  class AiError extends Error {
    constructor(code) {
      super(code);
      this.code = code;
    }
  }

  async function viaServer(task, payload) {
    let res;
    try {
      res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, payload }),
      });
    } catch {
      throw new AiError(navigator.onLine === false ? "offline" : "network");
    }
    // Netlify's per-visitor limit (see netlify/functions/ai.mjs) answers 429 with its own page.
    if (res.status === 429) throw new AiError("rate_limited");
    // A static host without the function answers 404 (or the SPA page with 200 HTML).
    const type = res.headers.get("content-type") || "";
    if (res.status === 404 || !type.includes("json")) throw new AiError("not_configured");
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new AiError(body.error || "upstream");
    return body;
  }

  async function ask(task, payload) {
    if (navigator.onLine === false) throw new AiError("offline");
    // Explanations come back in the interface language.
    payload = { lang: window.FP?.state?.lang === "ru" ? "ru" : "kk", ...payload };
    const key = read(KEY_STORE);
    if (!key) return viaServer(task, payload);
    const out = await P.callGemini({ key, model: read(MODEL_STORE) || P.DEFAULT_MODEL, task, payload });
    if (!out.ok) throw new AiError(out.error);
    return out.data;
  }

  // Kazakh/RU/ES/ZH message key for an error code.
  function errorKey(code) {
    return (
      {
        offline: "ai_err_offline",
        network: "ai_err_offline",
        not_configured: "ai_err_setup",
        bad_key: "ai_err_key",
        rate_limited: "ai_err_limit",
        too_short: "ai_err_short",
        blocked: "ai_err_blocked",
      }[code] || "ai_err_generic"
    );
  }

  return {
    ask,
    errorKey,
    scenarios: P.SCENARIOS,
    levels: P.LEVELS,
    defaultModel: P.DEFAULT_MODEL,
    getKey: () => read(KEY_STORE),
    setKey: (v) => write(KEY_STORE, String(v || "").trim()),
    getModel: () => read(MODEL_STORE),
    setModel: (v) => write(MODEL_STORE, String(v || "").trim()),
  };
})();
