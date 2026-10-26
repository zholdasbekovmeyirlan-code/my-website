/* FluentPath — exam practice: full IELTS mock test (4 sections) and a UNT-style English test (40 questions, 50 points). */
(() => {
  const D = window.FP_DATA;
  const FP = () => window.FP;
  const t = (k) => FP().t(k);
  const fmt = (s, v) => FP().fmt(s, v);
  const esc = (s) => FP().escapeHtml(s);
  const ic = (name, cls) => window.FP_IC(name, cls);
  const $ = (s, root = document) => root.querySelector(s);
  const $all = (s, root = document) => [...root.querySelectorAll(s)];
  const shuffle = (a) => FP().shuffle(a);
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const words = (s) => (String(s).trim().match(/\S+/g) || []).length;
  const fmtTime = (sec) => `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
  const UPPER = new Set(["B1", "B1–B2", "B2", "A2–B1"]);

  function optionOrder(q) {
    const order = shuffle(q.options.map((_, i) => i));
    return { ...q, options: order.map((i) => q.options[i]), a: order.indexOf(q.a) };
  }

  /* ---------- section timers: one per exam; they pause while the learner is on another page ---------- */
  const timers = {};
  function tick(key) {
    const tm = timers[key];
    const draw = () => {
      const el = tm.el();
      if (!el) return;
      el.textContent = fmtTime(Math.max(0, tm.left));
      el.classList.toggle("is-low", tm.left <= 60);
    };
    draw();
    tm.id = setInterval(() => {
      tm.left -= 1;
      draw();
      if (tm.left <= 0) {
        stopTimer(key);
        tm.onEnd();
      }
    }, 1000);
  }
  function startTimer(key, seconds, el, onEnd) {
    stopTimer(key);
    const tm = { total: seconds, left: seconds, el, onEnd, id: null, paused: false };
    timers[key] = tm;
    tick(key);
    return () => tm.total - tm.left;
  }
  function stopTimer(key) {
    if (timers[key]) clearInterval(timers[key].id);
    delete timers[key];
  }
  function pauseTimer(key) {
    const tm = timers[key];
    if (!tm || tm.paused) return;
    clearInterval(tm.id);
    tm.paused = true;
  }
  function resumeTimer(key) {
    const tm = timers[key];
    if (!tm || !tm.paused) return;
    tm.paused = false;
    tick(key);
  }

  /* ---------- sentence-by-sentence audio (long utterances get cut off in some browsers) ---------- */
  let playToken = 0;
  function playText(text, onState, voice) {
    const token = ++playToken;
    const parts = text.split(/(?<=[.!?])\s+/).filter(Boolean);
    let i = 0;
    const step = () => {
      if (token !== playToken) return;
      if (i >= parts.length) {
        onState(false);
        return;
      }
      const next = parts[i + 1];
      FP().speak(parts[i++], { voice, onend: step, onstart: () => next && window.FP_VOICE.preload(voice, next) });
    };
    onState(true);
    step();
  }
  function stopAudio() {
    playToken += 1;
    FP().stopSpeech();
  }

  /* =====================================================================
     IELTS mock test
     ===================================================================== */
  const MOCK_TIME = { listening: 10 * 60, reading: 20 * 60, writing: 40 * 60 };
  let mock = null;

  // Raw percentage → approximate IELTS band (based on the usual 40-question conversion tables).
  function pctToBand(p) {
    const steps = [[0.975, 9], [0.925, 8.5], [0.875, 8], [0.8, 7.5], [0.75, 7], [0.65, 6.5], [0.575, 6], [0.475, 5.5], [0.4, 5], [0.325, 4.5], [0.25, 4]];
    for (const [min, band] of steps) if (p >= min) return band;
    return 3.5;
  }

  function newMock() {
    const tracks = shuffle((D.listening || []).filter((x) => UPPER.has(x.level))).slice(0, 4);
    const texts = shuffle((D.readings || []).filter((r) => UPPER.has(r.level) && r.questions.length >= 4)).slice(0, 2);
    const task = pick((D.writing || []).filter((w) => /Task 2/.test(w.task)));
    const topic = pick((D.speaking || []).filter((s) => s.part === "Part 2"));
    return {
      step: "intro",
      tracks: tracks.map((tr) => ({ ...tr, questions: tr.questions.map(optionOrder) })),
      texts: texts.map((r) => ({ ...r, questions: r.questions.map(optionOrder) })),
      task,
      topic,
      answers: {},
      essay: "",
      transcript: "",
      talkSeconds: 0,
      bands: {},
    };
  }

  function renderMock() {
    const host = $("#mockMain");
    if (!host) return;
    if (!mock) mock = newMock();
    const sections = ["listening", "reading", "writing", "speaking"];
    const idx = sections.indexOf(mock.step);
    const head =
      idx >= 0
        ? `<div class="exam-head glass">
            <div><span class="muted small">${esc(fmt(t("mock_section_n"), { n: idx + 1 }))}</span><strong>${esc(t(`mock_${mock.step}`))}</strong></div>
            <span class="exam-clock" id="examClock">--:--</span>
          </div>`
        : "";
    host.innerHTML = head + mockBody();
    bindMock(host);
    resumeTimer("mock");
    if (mock.resumeRec) {
      mock.resumeRec = false;
      startRec();
    }
  }

  function radios(prefix, questions, offset = 0) {
    return questions
      .map(
        (q, qi) => `<div class="rq">
          <p>${offset + qi + 1}. ${esc(q.q)}</p>
          ${q.options
            .map(
              (o, oi) =>
                `<label><input type="radio" name="${prefix}${qi}" value="${oi}" ${
                  mock.answers[`${prefix}${qi}`] === oi ? "checked" : ""
                } /> ${esc(o)}</label>`
            )
            .join("")}
        </div>`
      )
      .join("");
  }

  function mockBody() {
    const m = mock;
    if (m.step === "intro") {
      const hist = (FP().state.mockHistory || []).slice(0, 5);
      return `<div class="exam-intro glass">
        <div class="exam-badge">${ic("graduation-cap")}</div>
        <h2>${esc(t("mock_title"))}</h2>
        <p class="muted">${esc(t("mock_intro"))}</p>
        <ol class="exam-steps">
          <li><strong>${esc(t("mock_listening"))}</strong><span>${m.tracks.length} ${esc(t("mock_tracks"))} · 10 ${esc(t("write_min"))}</span></li>
          <li><strong>${esc(t("mock_reading"))}</strong><span>${m.texts.length} ${esc(t("mock_texts"))} · 20 ${esc(t("write_min"))}</span></li>
          <li><strong>${esc(t("mock_writing"))}</strong><span>${esc(t("mock_w_desc"))} · 40 ${esc(t("write_min"))}</span></li>
          <li><strong>${esc(t("mock_speaking"))}</strong><span>${esc(t("mock_s_desc"))} · 3 ${esc(t("write_min"))}</span></li>
        </ol>
        <p class="muted small">${esc(t("mock_note"))}</p>
        <button type="button" class="btn-3d btn-3d-lg" id="mockStart">${esc(t("mock_start"))}</button>
        ${
          hist.length
            ? `<h3>${esc(t("mock_history"))}</h3><ul class="history">${hist
                .map(
                  (h) =>
                    `<li><span>${h.date}</span><strong>Band ${h.overall} <span class="muted">(L ${h.l} · R ${h.r} · W ${h.w ?? "—"} · S ${h.s ?? "—"})</span></strong></li>`
                )
                .join("")}</ul>`
            : ""
        }
      </div>`;
    }
    if (m.step === "listening") {
      let n = 0;
      return `<p class="muted">${esc(t("mock_listen_hint"))}</p>${m.tracks
        .map((tr, ti) => {
          const block = `<div class="exam-block glass">
            <div class="exam-block-head"><strong>${ic("headphones")}${esc(fmt(t("mock_track_n"), { n: ti + 1 }))}</strong>
              <button type="button" class="btn btn-secondary btn-sm" data-play="${ti}">${esc(t("listen_play"))}</button></div>
            ${radios(`l${ti}_`, tr.questions, n)}
          </div>`;
          n += tr.questions.length;
          return block;
        })
        .join("")}<button type="button" class="btn-3d" id="mockNext">${esc(t("mock_next"))}</button>`;
    }
    if (m.step === "reading") {
      let n = 0;
      return `${m.texts
        .map((r, ri) => {
          const block = `<div class="exam-block glass">
            <article class="passage"><h3>${esc(r.title)}</h3><p>${esc(r.text).replace(/\n\n/g, "</p><p>")}</p></article>
            ${radios(`r${ri}_`, r.questions, n)}
          </div>`;
          n += r.questions.length;
          return block;
        })
        .join("")}<button type="button" class="btn-3d" id="mockNext">${esc(t("mock_next"))}</button>`;
    }
    if (m.step === "writing") {
      return `<div class="exam-block glass">
        <p class="prompt-box">${esc(m.task.prompt)}</p>
        <textarea id="mockEssay" class="write-area" rows="14" placeholder="${esc(t("write_ph"))}">${esc(m.essay)}</textarea>
        <p class="muted small" id="mockWords"></p>
      </div><button type="button" class="btn-3d" id="mockNext">${esc(t("mock_next"))}</button>`;
    }
    if (m.step === "speaking") {
      return `<div class="exam-block glass">
        <h3>${esc(m.topic.title)}</h3>
        <ul class="cue-list">${m.topic.cue.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
        <p class="phase-label" id="mockPhase">${esc(t(m.talking ? "speak_talk" : "speak_prep"))}</p>
        <div class="speak-actions${m.talking ? " hidden" : ""}"><button type="button" class="btn-3d" id="mockTalk">${esc(t("speak_start_talk"))}</button></div>
        <p class="speak-live hidden" id="mockLive"></p>
        <label class="muted small" for="mockTranscript">${esc(t(FP().hasSpeechRec() ? "speak_transcript" : "speak_type"))}</label>
        <textarea id="mockTranscript" class="write-area" rows="5" placeholder="${esc(t("speak_text_ph"))}">${esc(m.transcript)}</textarea>
      </div><button type="button" class="btn-3d" id="mockNext">${esc(t("mock_finish"))}</button>`;
    }
    if (m.step === "result") return mockResult();
    return "";
  }

  function score(prefix, groups) {
    let right = 0;
    let total = 0;
    groups.forEach((g, gi) =>
      g.questions.forEach((q, qi) => {
        total += 1;
        if (mock.answers[`${prefix}${gi}_${qi}`] === q.a) right += 1;
      })
    );
    return { right, total };
  }

  function overallBand(b) {
    const vals = ["l", "r", "w", "s"].map((k) => b[k]).filter((v) => typeof v === "number");
    if (!vals.length) return null;
    return Math.round((vals.reduce((a, c) => a + c, 0) / vals.length) * 2) / 2;
  }

  function mockResult() {
    const m = mock;
    const b = m.bands;
    const cell = (key, label, extra = "") => {
      const v = b[key];
      return `<div class="band-cell"><span>${esc(label)}</span><strong>${v == null ? "…" : v}</strong>${extra}</div>`;
    };
    const selfPick = (key) =>
      b[key] == null && m.aiFailed && m.aiFailed[key]
        ? `<div class="self-pick" data-self="${key}">${[5, 5.5, 6, 6.5, 7, 7.5]
            .map((v) => `<button type="button" class="chip-btn" data-band="${v}">${v}</button>`)
            .join("")}</div>`
        : "";
    const overall = overallBand(b);
    return `<div class="exam-result glass">
      <h2>${esc(t("mock_result"))}</h2>
      <div class="band-badge big" style="--p:${((overall || 0) / 9) * 100}%"><strong>${overall ?? "…"}</strong><span>${esc(t("mock_overall"))}</span></div>
      <div class="band-grid">
        ${cell("l", t("mock_listening"), `<em>${m.raw.l.right}/${m.raw.l.total}</em>`)}
        ${cell("r", t("mock_reading"), `<em>${m.raw.r.right}/${m.raw.r.total}</em>`)}
        ${cell("w", t("mock_writing"), selfPick("w"))}
        ${cell("s", t("mock_speaking"), selfPick("s"))}
      </div>
      ${m.aiPending ? `<div class="ai-loading"><span class="spinner"></span>${esc(t("ai_wait"))}</div>` : ""}
      ${m.aiNote ? `<p class="muted small">${esc(m.aiNote)}</p>` : ""}
      <div id="mockFb"></div>
      <p class="fb-disclaimer">${esc(t("mock_disclaimer"))}</p>
      <button type="button" class="btn-3d" id="mockAgain">${ic("rotate-ccw")}<span>${esc(t("mock_again"))}</span></button>
    </div>`;
  }

  async function gradeMock() {
    const m = mock;
    m.raw = { l: score("l", m.tracks), r: score("r", m.texts) };
    m.bands.l = pctToBand(m.raw.l.right / Math.max(1, m.raw.l.total));
    m.bands.r = pctToBand(m.raw.r.right / Math.max(1, m.raw.r.total));
    m.aiFailed = {};
    m.step = "result";
    m.aiPending = true;
    renderMock();
    const jobs = [];
    if (words(m.essay) >= 30) {
      jobs.push(
        window.FP_AI.ask("writing", { text: m.essay, prompt: m.task.prompt, minWords: m.task.minWords, task: m.task.task })
          .then((d) => {
            m.bands.w = d.overall;
            m.feedback = m.feedback || [];
            m.feedback.push(["writing", d]);
          })
          .catch((e) => {
            m.aiFailed.w = true;
            m.aiNote = t(window.FP_AI.errorKey(e.code)) + " " + t("mock_self");
          })
      );
    } else m.bands.w = 0;
    if (words(m.transcript) >= 15) {
      jobs.push(
        window.FP_AI.ask("speaking", { topic: m.topic.title, cue: m.topic.cue, transcript: m.transcript, seconds: m.talkSeconds || 120 })
          .then((d) => {
            m.bands.s = d.overall;
          })
          .catch((e) => {
            m.aiFailed.s = true;
            m.aiNote = t(window.FP_AI.errorKey(e.code)) + " " + t("mock_self");
          })
      );
    } else m.bands.s = 0;
    await Promise.all(jobs);
    m.aiPending = false;
    saveMock();
    if (mock === m) renderMock();
  }

  function saveMock() {
    const m = mock;
    const b = m.bands;
    if ([b.l, b.r, b.w, b.s].some((v) => v == null)) return;
    const st = FP().state;
    st.mockHistory = [{ date: FP().localDay(), l: b.l, r: b.r, w: b.w, s: b.s, overall: overallBand(b) }, ...(st.mockHistory || [])].slice(0, 10);
    if (!m.paid) {
      m.paid = true;
      FP().awardOnce("mock", 40);
    }
    FP().save();
  }

  function bindMock(host) {
    const m = mock;
    $all('input[type="radio"]', host).forEach((inp) =>
      inp.addEventListener("change", () => {
        m.answers[inp.name] = +inp.value;
      })
    );
    $("#mockStart", host)?.addEventListener("click", () => go("listening"));
    $("#mockAgain", host)?.addEventListener("click", () => {
      stopTimer("mock");
      mock = newMock();
      renderMock();
    });
    $all("[data-play]", host).forEach((b) =>
      b.addEventListener("click", () => {
        const tr = m.tracks[+b.dataset.play];
        if (b.classList.contains("is-playing")) {
          stopAudio();
          b.classList.remove("is-playing");
          b.textContent = t("listen_play");
          return;
        }
        $all("[data-play]", host).forEach((x) => {
          x.classList.remove("is-playing");
          x.textContent = t("listen_play");
        });
        const voice = window.FP_VOICE.trackVoice(Math.max(0, D.listening.findIndex((x) => x.id === tr.id)));
        playText(
          tr.text,
          (on) => {
            b.classList.toggle("is-playing", on);
            b.textContent = on ? t("listen_pause") : t("listen_play");
          },
          voice
        );
      })
    );
    const essay = $("#mockEssay", host);
    if (essay) {
      const upd = () => {
        m.essay = essay.value;
        $("#mockWords").textContent = `${words(essay.value)} / ${m.task.minWords} ${t("write_words")}`;
      };
      essay.addEventListener("input", upd);
      upd();
    }
    const tr = $("#mockTranscript", host);
    if (tr) tr.addEventListener("input", () => (m.transcript = tr.value));
    $("#mockTalk", host)?.addEventListener("click", () => startTalk());
    $("#mockNext", host)?.addEventListener("click", () => {
      const order = ["listening", "reading", "writing", "speaking"];
      const i = order.indexOf(m.step);
      if (i < order.length - 1) go(order[i + 1]);
      else finishSpeaking();
    });
    $all("[data-self] [data-band]", host).forEach((b) =>
      b.addEventListener("click", () => {
        m.bands[b.closest("[data-self]").dataset.self] = +b.dataset.band;
        saveMock();
        renderMock();
      })
    );
  }

  let rec = null;
  // Recognised speech is appended to whatever is already in the transcript (e.g. after a pause).
  function startRec() {
    const m = mock;
    const live = $("#mockLive");
    const area = $("#mockTranscript");
    const base = m.transcript.trim() ? `${m.transcript.trim()} ` : "";
    rec = FP().startSpeechRec((final, interim) => {
      const text = (base + final).trim();
      area.value = text;
      m.transcript = text;
      live.textContent = `${text} ${interim}`.trim() || "…";
    });
    live.classList.toggle("hidden", !rec);
    if (rec) live.textContent = t("speak_listening");
  }

  function stopRec() {
    if (!rec) return;
    try {
      rec.stop();
    } catch {
      /* ignore */
    }
    rec = null;
  }

  function startTalk() {
    const m = mock;
    stopTimer("mock");
    m.talking = true;
    $("#mockTalk").closest(".speak-actions").classList.add("hidden");
    $("#mockPhase").textContent = t("speak_talk");
    startRec();
    m.elapsed = startTimer("mock", m.topic.speak || 120, () => $("#examClock"), () => finishSpeaking());
  }

  function finishSpeaking() {
    const m = mock;
    stopTimer("mock");
    stopRec();
    m.talking = false;
    if (m.elapsed) m.talkSeconds = m.elapsed();
    const area = $("#mockTranscript");
    if (area) m.transcript = area.value;
    gradeMock();
  }

  function go(step) {
    stopAudio();
    stopTimer("mock");
    mock.step = step;
    renderMock();
    window.scrollTo({ top: 0 });
    const next = { listening: "reading", reading: "writing", writing: "speaking" }[step];
    if (MOCK_TIME[step]) {
      startTimer("mock", MOCK_TIME[step], () => $("#examClock"), () => {
        FP().toast(t("mock_time_up"));
        go(next);
      });
    } else if (step === "speaking") {
      startTimer("mock", mock.topic.prep || 60, () => $("#examClock"), () => startTalk());
    }
  }

  /* =====================================================================
     UNT-style English test
     ===================================================================== */
  const UNT_TIME = 60 * 60;
  let unt = null;

  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const meaning = (kk) =>
    String(kk)
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .split(/[,;/]/)
      .map((s) => s.trim())
      .filter(Boolean);
  const sameMeaning = (a, b) => a.en.toLowerCase() === b.en.toLowerCase() || meaning(b.kk).some((x) => meaning(a.kk).includes(x));

  function fillQuestion(w) {
    const re = new RegExp(`(^|[^\\p{L}'])(${escRe(w.en)})(?![\\p{L}'])`, "iu");
    const m = w.example.match(re);
    if (!m) return null;
    const start = m.index + m[1].length;
    const pool = shuffle(D.vocab.filter((x) => x.level === w.level && x.topic !== w.topic && !sameMeaning(w, x)));
    const ds = [];
    for (const x of pool) {
      if (ds.length >= 3) break;
      if (!ds.some((d) => sameMeaning(d, x))) ds.push(x);
    }
    const opts = shuffle([w, ...ds]);
    return {
      kind: "single",
      q: `${w.example.slice(0, start)}___${w.example.slice(start + m[2].length)}`,
      options: opts.map((o) => o.en),
      a: opts.indexOf(w),
    };
  }

  function newUnt() {
    const grammar = [];
    D.lessons.forEach((l) => {
      (l.drills || []).forEach((d) => d.type === "mcq" && grammar.push(d));
      if (l.practice) grammar.push({ q: l.practice.q, options: l.practice.options, a: l.practice.answer });
    });
    [...(D.quizBanks.grammar || []), ...(D.quizBanks.placement || [])].forEach((q) => grammar.push(q));
    const single = shuffle(grammar)
      .slice(0, 15)
      .map((q) => ({ kind: "single", ...optionOrder({ q: q.q, options: q.options, a: q.a }) }));
    const vocab = shuffle(D.vocab.filter((w) => w.level === "B1" || w.level === "B2"));
    for (const w of vocab) {
      if (single.length >= 25) break;
      const q = fillQuestion(w);
      if (q) single.push(q);
    }
    const text = pick(D.readings.filter((r) => UPPER.has(r.level) && r.questions.length >= 5));
    const context = text.questions.slice(0, 5).map((q) => ({ kind: "single", context: true, ...optionOrder(q) }));
    const multi = shuffle(D.untMulti || [])
      .slice(0, 10)
      .map((q) => {
        const order = shuffle(q.options.map((_, i) => i));
        return { kind: "multi", q: q.q, options: order.map((i) => q.options[i]), answers: q.answers.map((a) => order.indexOf(a)) };
      });
    return { questions: [...shuffle(single), ...context, ...multi], text, answers: {}, submitted: false };
  }

  // Multi-answer: 2 points if exactly right, 1 point with one mistake (a missed or an extra option), else 0.
  function untPoints(q, ans) {
    if (q.kind === "single") return ans === q.a ? 1 : 0;
    const got = new Set(ans || []);
    const want = new Set(q.answers);
    let diff = 0;
    got.forEach((x) => !want.has(x) && diff++);
    want.forEach((x) => !got.has(x) && diff++);
    return diff === 0 ? 2 : diff === 1 && got.size ? 1 : 0;
  }

  function renderUnt() {
    const host = $("#untMain");
    if (!host) return;
    if (!unt) {
      const hist = (FP().state.untHistory || []).slice(0, 5);
      host.innerHTML = `<div class="exam-intro glass">
        <div class="exam-badge">${ic("clipboard-check")}</div>
        <h2>${esc(t("unt_title"))}</h2>
        <p class="muted">${esc(t("unt_intro"))}</p>
        <ol class="exam-steps">
          <li><strong>1–25</strong><span>${esc(t("unt_part1"))}</span></li>
          <li><strong>26–30</strong><span>${esc(t("unt_part2"))}</span></li>
          <li><strong>31–40</strong><span>${esc(t("unt_part3"))}</span></li>
        </ol>
        <p class="muted small">${esc(t("unt_note"))}</p>
        <button type="button" class="btn-3d btn-3d-lg" id="untStart">${esc(t("unt_start"))}</button>
        ${
          hist.length
            ? `<h3>${esc(t("mock_history"))}</h3><ul class="history">${hist
                .map((h) => `<li><span>${h.date}</span><strong>${h.points} / 50</strong></li>`)
                .join("")}</ul>`
            : ""
        }
      </div>`;
      $("#untStart").onclick = () => {
        unt = newUnt();
        renderUnt();
        window.scrollTo({ top: 0 });
        startTimer("unt", UNT_TIME, () => $("#untClock"), () => {
          FP().toast(t("mock_time_up"));
          submitUnt();
        });
      };
      return;
    }
    const u = unt;
    const answered = u.questions.filter((_, i) => {
      const a = u.answers[i];
      return Array.isArray(a) ? a.length : a != null;
    }).length;
    let total = 0;
    if (u.submitted) total = u.questions.reduce((s, q, i) => s + untPoints(q, u.answers[i]), 0);
    const items = u.questions
      .map((q, i) => {
        const pre =
          q.context && !u.questions[i - 1]?.context
            ? `<article class="passage glass unt-text"><p class="muted small">${esc(t("unt_read"))}</p><h3>${esc(u.text.title)}</h3><p>${esc(
                u.text.text
              ).replace(/\n\n/g, "</p><p>")}</p></article>`
            : "";
        const multiNote = q.kind === "multi" ? `<span class="unt-tag">${esc(t("unt_multi"))}</span>` : "";
        const pts = u.submitted ? untPoints(q, u.answers[i]) : null;
        const max = q.kind === "multi" ? 2 : 1;
        const opts = q.options
          .map((o, oi) => {
            const chosen = q.kind === "multi" ? (u.answers[i] || []).includes(oi) : u.answers[i] === oi;
            const right = q.kind === "multi" ? q.answers.includes(oi) : q.a === oi;
            const cls = u.submitted ? (right ? " is-right" : chosen ? " is-wrong" : "") : "";
            return `<label class="unt-opt${cls}"><input type="${q.kind === "multi" ? "checkbox" : "radio"}" name="u${i}" value="${oi}" ${
              chosen ? "checked" : ""
            } ${u.submitted ? "disabled" : ""}/> <span>${String.fromCharCode(65 + oi)}) ${esc(o)}</span></label>`;
          })
          .join("");
        return `${pre}<div class="rq unt-q${u.submitted ? (pts === max ? " q-ok" : pts ? " q-half" : " q-bad") : ""}" data-q="${i}">
          <p>${i + 1}. ${esc(q.q).replace(/_{3}/g, '<span class="blank">&nbsp;</span>')} ${multiNote}${
            u.submitted ? `<em class="unt-pts">${pts}/${max}</em>` : ""
          }</p>${opts}</div>`;
      })
      .join("");
    host.innerHTML = `<div class="exam-head glass sticky">
        <div><span class="muted small">${esc(t("unt_title"))}</span><strong>${
          u.submitted ? `${total} / 50` : fmt(t("unt_answered"), { n: answered, total: u.questions.length })
        }</strong></div>
        ${u.submitted ? "" : `<span class="exam-clock" id="untClock">--:--</span>`}
        ${
          u.submitted
            ? `<button type="button" class="btn-3d btn-3d-sm" id="untAgain">${ic("rotate-ccw")}<span>${esc(t("mock_again"))}</span></button>`
            : `<button type="button" class="btn-3d btn-3d-sm" id="untSubmit">${esc(t("unt_submit"))}</button>`
        }
      </div>
      ${u.submitted ? untSummary(total) : ""}
      <div class="unt-list">${items}</div>
      ${u.submitted ? "" : `<button type="button" class="btn-3d" id="untSubmit2">${esc(t("unt_submit"))}</button>`}`;

    $all("input", host).forEach((inp) =>
      inp.addEventListener("change", () => {
        const i = +inp.name.slice(1);
        if (inp.type === "checkbox") {
          const set = new Set(u.answers[i] || []);
          if (inp.checked) set.add(+inp.value);
          else set.delete(+inp.value);
          u.answers[i] = [...set];
        } else u.answers[i] = +inp.value;
        const head = $(".exam-head strong", host);
        const n = u.questions.filter((_, k) => (Array.isArray(u.answers[k]) ? u.answers[k].length : u.answers[k] != null)).length;
        if (head) head.textContent = fmt(t("unt_answered"), { n, total: u.questions.length });
      })
    );
    const ask = async () => {
      const n = u.questions.filter((_, k) => (Array.isArray(u.answers[k]) ? u.answers[k].length : u.answers[k] != null)).length;
      if (n < u.questions.length && !(await FP().confirm(fmt(t("unt_confirm"), { n: u.questions.length - n }), { yes: t("unt_submit"), no: t("c_cancel") }))) return;
      submitUnt();
    };
    resumeTimer("unt");
    $("#untSubmit")?.addEventListener("click", ask);
    $("#untSubmit2")?.addEventListener("click", ask);
    $("#untAgain")?.addEventListener("click", () => {
      unt = null;
      renderUnt();
    });
  }

  function untSummary(total) {
    const u = unt;
    const part = (from, to) => u.questions.slice(from, to).reduce((s, q, k) => s + untPoints(q, u.answers[from + k]), 0);
    return `<div class="exam-result glass">
      <div class="band-badge big" style="--p:${(total / 50) * 100}%"><strong>${total}</strong><span>/ 50</span></div>
      <div class="band-grid">
        <div class="band-cell"><span>1–25</span><strong>${part(0, 25)} / 25</strong></div>
        <div class="band-cell"><span>26–30</span><strong>${part(25, 30)} / 5</strong></div>
        <div class="band-cell"><span>31–40</span><strong>${part(30, 40)} / 20</strong></div>
      </div>
      <p class="muted small">${esc(t("unt_review"))}</p>
    </div>`;
  }

  function submitUnt() {
    if (!unt || unt.submitted) return;
    stopTimer("unt");
    unt.submitted = true;
    const total = unt.questions.reduce((s, q, i) => s + untPoints(q, unt.answers[i]), 0);
    const st = FP().state;
    st.untHistory = [{ date: FP().localDay(), points: total }, ...(st.untHistory || [])].slice(0, 10);
    FP().save();
    FP().awardOnce("unt", 30);
    FP().sfx("done");
    if (total >= 40) FP().confetti();
    renderUnt();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Leaving an exam page pauses its clock (and the microphone) until the learner comes back.
  function leave(view) {
    stopAudio();
    if (view === "unt") {
      pauseTimer("unt");
      return;
    }
    pauseTimer("mock");
    if (rec) {
      stopRec();
      if (mock) mock.resumeRec = true;
    }
  }

  window.FP_EXAMS = { renderMock, renderUnt, leave, pctToBand, untPoints };
})();
