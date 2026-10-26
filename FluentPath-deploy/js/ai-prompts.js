/* FluentPath — AI tasks for Gemini: chat scenarios, prompts, response schemas and the API call.
   Shared by the browser (window.FP_AI_PROMPTS) and the Netlify function (require). */
(function (root) {
  const DEFAULT_MODEL = "gemini-flash-latest";
  const API = "https://generativelanguage.googleapis.com/v1beta/models";

  const LIMITS = { essay: 12000, transcript: 6000, message: 600, turns: 24, prompt: 1500 };

  const SCENARIOS = [
    {
      id: "cafe",
      icon: "coffee",
      level: "A2",
      role: "a friendly barista in a café in Almaty. The learner is a customer ordering drinks and food. Ask what they want, the size, whether to eat here or take away, and the payment.",
    },
    {
      id: "airport",
      icon: "plane",
      level: "A2",
      role: "an airline check-in agent at Almaty airport. The learner is a passenger flying to London. Ask for the passport, luggage, seat preference and give the gate number.",
    },
    {
      id: "shop",
      icon: "shopping-bag",
      level: "A2",
      role: "a shop assistant in a clothes shop. The learner wants to buy something. Ask about size, colour, price and trying it on.",
    },
    {
      id: "interview",
      icon: "briefcase",
      level: "B1",
      role: "an HR manager interviewing the learner for a job at an international company. Ask typical interview questions one at a time.",
    },
    {
      id: "ielts1",
      icon: "graduation-cap",
      level: "B2",
      role: "an IELTS Speaking examiner running Part 1. Ask one short question at a time about familiar topics (home town, studies or work, hobbies, food, technology) and follow up naturally.",
    },
    {
      id: "free",
      icon: "message-circle",
      level: "B1",
      role: "a friendly English tutor having a relaxed conversation about the learner's day, interests and plans.",
    },
  ];

  const LEVELS = ["A1", "A2", "B1", "B2"];

  const clip = (s, n) => String(s == null ? "" : s).slice(0, n);
  const words = (s) => (String(s).trim().match(/\S+/g) || []).length;

  const S = (description) => ({ type: "STRING", description });
  const N = (description) => ({ type: "NUMBER", description });
  const MISTAKES = {
    type: "ARRAY",
    description: "Most important mistakes first, at most 8.",
    items: {
      type: "OBJECT",
      properties: {
        wrong: S("The learner's exact words that contain the mistake."),
        right: S("The corrected English version."),
        why: S("Short explanation in the explanation language."),
      },
      required: ["wrong", "right", "why"],
    },
  };
  const CRITERIA = {
    type: "ARRAY",
    items: {
      type: "OBJECT",
      properties: {
        name: S("Criterion name in English, e.g. Task Response."),
        band: N("Band 0–9 in steps of 0.5."),
        comment: S("1–2 sentences in the explanation language: what is good and what to improve."),
      },
      required: ["name", "band", "comment"],
    },
  };

  const SCHEMAS = {
    writing: {
      type: "OBJECT",
      properties: {
        overall: N("Overall band 0–9 in steps of 0.5."),
        criteria: CRITERIA,
        summary: S("2–3 sentence overall feedback in the explanation language."),
        mistakes: MISTAKES,
        improved: S("The learner's weakest paragraph rewritten better, in English."),
        tips: { type: "ARRAY", items: S("A concrete next step in the explanation language."), description: "3 tips." },
      },
      required: ["overall", "criteria", "summary", "mistakes", "improved", "tips"],
    },
    speaking: {
      type: "OBJECT",
      properties: {
        overall: N("Estimated band 0–9 in steps of 0.5."),
        criteria: CRITERIA,
        summary: S("2–3 sentence overall feedback in the explanation language."),
        mistakes: MISTAKES,
        phrases: {
          type: "ARRAY",
          description: "3–5 natural phrases the learner could use for this topic.",
          items: {
            type: "OBJECT",
            properties: { phrase: S("English phrase."), use: S("When to use it, in the explanation language.") },
            required: ["phrase", "use"],
          },
        },
        tips: { type: "ARRAY", items: S("A concrete next step in the explanation language.") },
      },
      required: ["overall", "criteria", "summary", "mistakes", "phrases", "tips"],
    },
    chat: {
      type: "OBJECT",
      properties: {
        reply: S("Your next message in English, 1–3 short sentences, ending with a question."),
        reply_kk: S("Translation of reply into the explanation language."),
        has_mistake: { type: "BOOLEAN", description: "True if the learner's last message had a mistake or was not in English." },
        original: S("The learner's last message, or empty."),
        corrected: S("Natural corrected English version of the learner's last message, or empty."),
        explanation: S("Short explanation of the correction in the explanation language, or empty."),
        suggestions: { type: "ARRAY", items: S("A short English reply the learner could send next."), description: "Exactly 2." },
      },
      required: ["reply", "reply_kk", "has_mistake", "original", "corrected", "explanation", "suggestions"],
    },
  };

  // The explanation language follows the learner's interface language (Kazakh by default).
  const LANGUAGE = (lang) =>
    `The explanation language is ${lang === "ru" ? "Russian" : "Kazakh (Cyrillic script)"}: write every explanation, comment, summary, tip and translation in it. Keep English examples, corrections and phrases in English.`;
  const BEGINNER = new Set(["A1", "A2"]);

  // Returns { error } or { system, contents, schema, temperature }.
  function buildRequest(task, p) {
    p = p || {};
    if (task === "writing") {
      const text = clip(p.text, LIMITS.essay);
      const beginner = BEGINNER.has(p.level);
      if (words(text) < (beginner ? 20 : 30)) return { error: "too_short" };
      const n = words(text);
      const rules = beginner
        ? [
            `You are a kind English teacher for a learner from Kazakhstan at CEFR level ${p.level}. This is a short beginner text, not an IELTS task.`,
            "Use four criteria named exactly Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.",
            `Score each from 0 to 9 in steps of 0.5 for how well it meets the task at level ${p.level}: 9 means an excellent ${p.level} text, not IELTS band 9. The overall score is the average, rounded to the nearest 0.5.`,
            "Praise what is right, correct only the most useful mistakes, and rewrite the weakest part as a short, correct, simple text the learner can understand.",
          ]
        : [
            "You are a certified IELTS Writing examiner and a supportive teacher for learners from Kazakhstan.",
            "Assess strictly with the official IELTS Writing band descriptors: Task Response (Task Achievement for Task 1), Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.",
            "Give each criterion a band in steps of 0.5. The overall band is the average of the four, rounded to the nearest 0.5.",
            "Rewrite the weakest paragraph at band 7+.",
          ];
      return {
        temperature: 0.3,
        schema: SCHEMAS.writing,
        system: [
          ...rules,
          "If the text is shorter than the minimum word count, lower Task Response and say so.",
          "Quote the learner's exact words in each mistake. Do not invent mistakes that are not in the text.",
          LANGUAGE(p.lang),
        ].join(" "),
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Task type: ${clip(p.task, 40) || "Task 2"}\nQuestion: ${clip(p.prompt, LIMITS.prompt)}\nMinimum words: ${
                  Number(p.minWords) || 250
                }\nWord count: ${n}\n\nEssay:\n${text}`,
              },
            ],
          },
        ],
      };
    }

    if (task === "speaking") {
      const text = clip(p.transcript, LIMITS.transcript);
      const beginner = BEGINNER.has(p.level);
      if (words(text) < (beginner ? 10 : 15)) return { error: "too_short" };
      const rules = beginner
        ? [
            `You are a kind English teacher for a learner from Kazakhstan at CEFR level ${p.level}.`,
            "You receive a speech-recognition transcript of a short beginner talk (under a minute), not an IELTS test.",
            `Use the criteria Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, each scored 0–9 in steps of 0.5 for level ${p.level} (9 = excellent for ${p.level}), and give the overall score.`,
            "Suggest very simple, useful phrases.",
          ]
        : [
            "You are an IELTS Speaking examiner and a supportive teacher for learners from Kazakhstan.",
            "You receive a speech-recognition transcript of a Part 2 long turn (target 1–2 minutes).",
            "Assess Fluency and Coherence, Lexical Resource, and Grammatical Range and Accuracy, each in steps of 0.5, and estimate an overall band.",
          ];
      return {
        temperature: 0.3,
        schema: SCHEMAS.speaking,
        system: [
          ...rules,
          "Ignore punctuation, capitalisation and small recognition errors. You cannot hear the learner, so do not grade pronunciation; mention that once in the summary.",
          LANGUAGE(p.lang),
        ].join(" "),
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Topic: ${clip(p.topic, 200)}\nCue card: ${clip((p.cue || []).join("; "), 600)}\nSpeaking time: ${
                  Number(p.seconds) || 0
                } seconds\n\nTranscript:\n${text}`,
              },
            ],
          },
        ],
      };
    }

    if (task === "chat") {
      const sc = SCENARIOS.find((s) => s.id === p.scenario) || SCENARIOS[SCENARIOS.length - 1];
      const level = LEVELS.includes(p.level) ? p.level : sc.level;
      const history = (Array.isArray(p.history) ? p.history : [])
        .slice(-LIMITS.turns)
        .map((m) => ({
          role: m && m.role === "model" ? "model" : "user",
          parts: [{ text: clip(m && m.text, LIMITS.message) || "…" }],
        }));
      if (!history.length || history[history.length - 1].role !== "user") {
        history.push({ role: "user", parts: [{ text: "(Start the conversation now: greet me and ask the first question.)" }] });
      }
      return {
        temperature: 0.8,
        schema: SCHEMAS.chat,
        system: [
          `You are an English conversation partner for a learner from Kazakhstan at CEFR level ${level}.`,
          `Role-play: you are ${sc.role}`,
          `Stay in character. Use vocabulary and grammar suitable for ${level}${level === "A1" || level === "A2" ? " (very simple, short sentences)" : ""}.`,
          "Reply with 1–3 short sentences and end with a question so the learner can answer.",
          "Check only the learner's LAST message. If it has a grammar or vocabulary mistake, or is written in Kazakh or Russian, set has_mistake to true, copy it to original, give a natural English version in corrected and a short explanation. Otherwise set has_mistake to false and leave those fields empty.",
          "A message that starts with '(' is an instruction from the app, not from the learner: never correct it.",
          "Give exactly two short suggestions the learner could reply with next.",
          LANGUAGE(p.lang),
        ].join(" "),
        contents: history,
      };
    }

    return { error: "bad_task" };
  }

  function clampBand(x) {
    const n = Math.round(Number(x) * 2) / 2;
    return Number.isFinite(n) ? Math.min(9, Math.max(0, n)) : 0;
  }

  function normalize(task, data) {
    const arr = (x) => (Array.isArray(x) ? x : []);
    if (task === "chat") {
      return {
        reply: String(data.reply || ""),
        reply_kk: String(data.reply_kk || ""),
        has_mistake: !!data.has_mistake && !!data.corrected,
        original: String(data.original || ""),
        corrected: String(data.corrected || ""),
        explanation: String(data.explanation || ""),
        suggestions: arr(data.suggestions).map(String).slice(0, 2),
      };
    }
    return {
      overall: clampBand(data.overall),
      criteria: arr(data.criteria).map((c) => ({ name: String(c.name || ""), band: clampBand(c.band), comment: String(c.comment || "") })),
      summary: String(data.summary || ""),
      mistakes: arr(data.mistakes)
        .slice(0, 8)
        .map((m) => ({ wrong: String(m.wrong || ""), right: String(m.right || ""), why: String(m.why || "") })),
      improved: String(data.improved || ""),
      phrases: arr(data.phrases).map((x) => ({ phrase: String(x.phrase || ""), use: String(x.use || "") })),
      tips: arr(data.tips).map(String).slice(0, 5),
    };
  }

  function parseJson(text) {
    const cleaned = String(text)
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/```\s*$/, "");
    return JSON.parse(cleaned);
  }

  // Calls Gemini and returns { ok: true, data } or { ok: false, status, error }.
  async function callGemini({ key, model, task, payload, fetchImpl }) {
    const req = buildRequest(task, payload);
    if (req.error) return { ok: false, status: 400, error: req.error };
    const doFetch = fetchImpl || fetch;
    let res;
    try {
      res = await doFetch(`${API}/${encodeURIComponent(model || DEFAULT_MODEL)}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: req.system }] },
          contents: req.contents,
          generationConfig: {
            temperature: req.temperature,
            responseMimeType: "application/json",
            responseSchema: req.schema,
          },
        }),
      });
    } catch {
      return { ok: false, status: 502, error: "network" };
    }
    if (res.status === 429) return { ok: false, status: 429, error: "rate_limited" };
    if (res.status === 400 || res.status === 403 || res.status === 401) {
      const body = await res.text().catch(() => "");
      const bad = /API key|API_KEY|PERMISSION/i.test(body);
      return { ok: false, status: res.status, error: bad ? "bad_key" : "bad_request" };
    }
    if (!res.ok) return { ok: false, status: 502, error: "upstream" };
    try {
      const json = await res.json();
      const cand = json.candidates && json.candidates[0];
      const parts = (cand && cand.content && cand.content.parts) || [];
      const text = parts
        .filter((x) => !x.thought && typeof x.text === "string")
        .map((x) => x.text)
        .join("");
      if (!text) return { ok: false, status: 502, error: cand && cand.finishReason === "SAFETY" ? "blocked" : "empty" };
      return { ok: true, data: normalize(task, parseJson(text)) };
    } catch {
      return { ok: false, status: 502, error: "bad_output" };
    }
  }

  const api = { DEFAULT_MODEL, LIMITS, SCENARIOS, LEVELS, buildRequest, callGemini, normalize };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.FP_AI_PROMPTS = api;
})(typeof self !== "undefined" ? self : this);
