/* FluentPath — premium app logic */
(() => {
  const DATA = window.FP_DATA;
  const STORAGE_KEY = "fluentpath_v2";

  const defaultState = () => ({
    xp: 0,
    streak: 0,
    lastActive: null,
    dailyDone: 0,
    dailyDate: null,
    known: {},
    learning: {},
    lessonDone: {},
    quizHistory: [],
    drafts: {},
    theme: "dark",
    lang: "kk",
  });

  let state = loadState();
  let vocabQueue = [];
  let vocabIndex = 0;
  let flashFlipped = false;
  let quiz = null;
  let listenTrack = null;
  let listenRate = 1;
  let listenShowText = false;
  let utter = null;
  let speakTimer = null;
  let listenSentences = [];
  let listenSentIndex = 0;
  let listenPlayingAll = false;
  let vocabMode = "all"; // all | weak | known
  let speakTimerId = null;
  let speakLeft = 0;
  let speakPhase = null; // prep | talk
  let writeTimerId = null;
  let writeLeft = 0;
  let writeRunning = false;
  let focusTimerId = null;
  let focusLeft = 25 * 60;
  let focusRunning = false;
  let currentSpeak = null;
  let currentWrite = null;

  function t(key) {
    const pack = (window.FP_I18N && window.FP_I18N[state.lang]) || {};
    const fallback = (window.FP_I18N && window.FP_I18N.kk) || {};
    return pack[key] || fallback[key] || key;
  }

  function applyI18n() {
    document.documentElement.lang =
      state.lang === "zh" ? "zh" : state.lang === "es" ? "es" : state.lang === "ru" ? "ru" : "kk";
    $all("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    $all("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(key));
    });
    $all("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key) el.setAttribute("title", t(key));
    });
    const sel = $("#langSelect");
    if (sel) sel.value = state.lang;
    // refresh dynamic bits
    updateChrome();
    if ($("#view-vocab")?.classList.contains("active")) initVocab();
    if ($("#view-listening")?.classList.contains("active")) {
      if (listenTrack) openListening(listenTrack.id, true);
      else initListeningList();
    }
    if ($("#view-speaking")?.classList.contains("active")) initSpeaking();
    if ($("#view-writing")?.classList.contains("active")) initWriting();
    if ($("#view-phrases")?.classList.contains("active")) initPhrases();
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("fluentpath_v1");
      if (!raw) return defaultState();
      return { ...defaultState(), ...JSON.parse(raw) };
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function refreshDaily() {
    const t = todayStr();
    if (state.dailyDate !== t) {
      if (state.lastActive) {
        const prev = new Date(state.lastActive);
        const now = new Date(t);
        const diff = Math.round((now - prev) / 86400000);
        if (diff === 1) state.streak += 1;
        else if (diff > 1) state.streak = 0;
      }
      state.dailyDate = t;
      state.dailyDone = 0;
      saveState();
    }
  }

  function markActivity(xp = 5) {
    refreshDaily();
    state.xp += xp;
    state.lastActive = todayStr();
    if (state.streak === 0) state.streak = 1;
    saveState();
    updateChrome();
  }

  function completeDailyTask() {
    refreshDaily();
    if (state.dailyDone < 3) {
      state.dailyDone += 1;
      state.xp += 10;
      saveState();
      toast(`${t("toast_task")} · ${state.dailyDone}/3 · +10 XP`);
      if (state.dailyDone >= 3) burstConfetti();
    }
    updateChrome();
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.add("hidden"), 2400);
  }

  function $(sel) {
    return document.querySelector(sel);
  }
  function $all(sel) {
    return [...document.querySelectorAll(sel)];
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Confetti */
  function burstConfetti() {
    const c = $("#fxCanvas");
    if (!c) return;
    const ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    const parts = Array.from({ length: 90 }, () => ({
      x: c.width * 0.5 + (Math.random() - 0.5) * 80,
      y: c.height * 0.35,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -9 - 3,
      g: 0.18 + Math.random() * 0.08,
      s: 4 + Math.random() * 6,
      color: ["#7c9bff", "#a78bfa", "#22d3ee", "#34d399", "#fbbf24"][
        (Math.random() * 5) | 0
      ],
      life: 70 + (Math.random() * 30) | 0,
    }));
    let frame = 0;
    function tick() {
      frame++;
      ctx.clearRect(0, 0, c.width, c.height);
      parts.forEach((p) => {
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        ctx.globalAlpha = Math.max(0, p.life / 80);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.s, p.s * 0.6);
      });
      if (frame < 90) requestAnimationFrame(tick);
      else {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.globalAlpha = 1;
      }
    }
    tick();
  }

  const DOCK_MAIN = new Set(["home", "learn", "vocab", "listening", "quiz"]);

  function closeMoreSheet() {
    $("#moreSheet")?.classList.add("hidden");
  }

  function openMoreSheet() {
    $("#moreSheet")?.classList.remove("hidden");
  }

  /* Navigation */
  function showView(name) {
    $all(".view").forEach((v) => v.classList.remove("active"));
    const view = document.getElementById(`view-${name}`);
    if (view) view.classList.add("active");
    $all(".nav button").forEach((b) => {
      b.classList.toggle("active", b.dataset.nav === name);
    });
    // bottom dock active state
    $all(".dock-item[data-nav]").forEach((b) => {
      b.classList.toggle("active", b.dataset.nav === name);
    });
    const moreBtn = $("#dockMoreBtn");
    if (moreBtn) {
      moreBtn.classList.toggle("active", !DOCK_MAIN.has(name));
    }
    closeMoreSheet();
    $("#mainNav")?.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (name === "vocab") initVocab();
    if (name === "grammar") initGrammar();
    if (name === "reading") initReadingList();
    if (name === "listening") {
      stopListening();
      initListeningList();
    }
    if (name === "speaking") initSpeaking();
    if (name === "writing") initWriting();
    if (name === "phrases") initPhrases();
    if (name === "progress") renderProgress();
    if (name === "learn" || name === "home") updateChrome();
    if (name === "quiz") resetQuizUI();
    if (name !== "listening") stopListening();
  }

  function applyTheme() {
    document.documentElement.setAttribute(
      "data-theme",
      state.theme === "light" ? "light" : "dark"
    );
  }

  /* Word of day */
  function initWotd() {
    const day = new Date().getDate();
    const pool = DATA.wordOfDayPool || [];
    const item = pool[day % pool.length] || {
      word: "crucial",
      ipa: "",
      meaning: "",
      example: "",
    };
    $("#wotdWord").textContent = item.word;
    $("#wotdIpa").textContent = item.ipa;
    $("#wotdMeaning").textContent = item.meaning;
    $("#wotdExample").textContent = item.example;
    $("#wotdSave").onclick = () => {
      const found = DATA.vocab.find(
        (w) => w.en.toLowerCase() === item.word.toLowerCase()
      );
      if (found) {
        state.learning[found.id] = true;
        delete state.known[found.id];
      }
      markActivity(3);
      toast(`“${item.word}” ${t("toast_saved")} ✨`);
      saveState();
    };
  }

  /* Vocab */
  function filteredVocab() {
    const level = $("#vocabLevel")?.value || "all";
    const topic = $("#vocabTopic")?.value || "all";
    const q = ($("#vocabSearch")?.value || "").trim().toLowerCase();
    return DATA.vocab.filter((w) => {
      if (level !== "all" && w.level !== level) return false;
      if (topic !== "all" && w.topic !== topic) return false;
      if (vocabMode === "weak" && !state.learning[w.id]) return false;
      if (vocabMode === "known" && !state.known[w.id]) return false;
      if (q) {
        const hay = `${w.en} ${w.kk} ${w.topic} ${w.example}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function setVocabMode(mode) {
    vocabMode = mode;
    $all(".vocab-modes .chip-btn").forEach((b) => b.classList.remove("active"));
    if (mode === "all") $("#modeAll")?.classList.add("active");
    if (mode === "weak") $("#modeWeak")?.classList.add("active");
    if (mode === "known") $("#modeKnown")?.classList.add("active");
    initVocab();
    if (mode === "weak" && !filteredVocab().length) toast(t("empty_weak"));
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildTopicChips() {
    const box = $("#topicChips");
    if (!box) return;
    const topics = DATA.topics || [{ id: "all", label: "Барлығы" }];
    const current = $("#vocabTopic")?.value || "all";
    box.innerHTML = topics
      .map(
        (t) =>
          `<button type="button" data-topic="${t.id}" class="${
            t.id === current ? "active" : ""
          }">${escapeHtml(t.label)}</button>`
      )
      .join("");
    box.querySelectorAll("button").forEach((btn) => {
      btn.onclick = () => {
        $("#vocabTopic").value = btn.dataset.topic;
        initVocab();
      };
    });
  }

  function initVocab() {
    buildTopicChips();
    const list = filteredVocab();
    vocabQueue = shuffle(list.length ? list : DATA.vocab);
    vocabIndex = 0;
    flashFlipped = false;
    $("#flashCard")?.classList.remove("flipped");
    renderFlash();
    renderVocabTable();
    const n = list.length;
    if ($("#vocabStats")) {
      $("#vocabStats").textContent = `${DATA.vocab.length} · ${n}`;
    }
    if ($("#listCount")) $("#listCount").textContent = String(n);
  }

  function renderFlash() {
    const w = vocabQueue[vocabIndex];
    if (!w) return;
    $("#flashMeta").textContent = `${w.level} · ${w.topic}`;
    $("#flashWord").textContent = w.en;
    $("#flashTr").textContent = w.kk;
    $("#flashEx").textContent = w.example;
    $("#flashCount").textContent = `${vocabIndex + 1} / ${vocabQueue.length}`;
  }

  function nextFlash() {
    flashFlipped = false;
    $("#flashCard").classList.remove("flipped");
    vocabIndex = (vocabIndex + 1) % vocabQueue.length;
    renderFlash();
  }

  function renderVocabTable() {
    const tbody = $("#vocabTable tbody");
    if (!tbody) return;
    const rows = filteredVocab().slice(0, 200);
    tbody.innerHTML = rows
      .map((w) => {
        let status = "new";
        let label = t("status_new");
        if (state.known[w.id]) {
          status = "known";
          label = t("status_known");
        } else if (state.learning[w.id]) {
          status = "learning";
          label = t("status_learning");
        }
        return `<tr>
          <td><strong>${escapeHtml(w.en)}</strong></td>
          <td>${escapeHtml(w.kk)}</td>
          <td>${w.level}</td>
          <td>${escapeHtml(w.topic)}</td>
          <td><span class="badge badge-${status}">${label}</span></td>
        </tr>`;
      })
      .join("");
  }

  /* Grammar */
  function initGrammar() {
    const list = $("#lessonList");
    list.innerHTML = DATA.lessons
      .map(
        (l, i) =>
          `<button type="button" data-i="${i}">${
            state.lessonDone[l.id] ? "✓ " : ""
          }${escapeHtml(l.title)} <span class="muted">· ${l.level}</span></button>`
      )
      .join("");
    list.querySelectorAll("button").forEach((btn) => {
      btn.onclick = () => openLesson(+btn.dataset.i);
    });
    openLesson(0);
  }

  function openLesson(i) {
    const l = DATA.lessons[i];
    $all("#lessonList button").forEach((b, idx) =>
      b.classList.toggle("active", idx === i)
    );
    const body = $("#lessonBody");
    const p = l.practice;
    body.innerHTML = `
      ${l.body}
      <div class="mini-q">
        <h3>${escapeHtml(t("mini_practice"))}</h3>
        <p><strong>${escapeHtml(p.q)}</strong></p>
        <div class="options" id="lessonOptions">
          ${p.options
            .map(
              (o, idx) =>
                `<button type="button" class="option" data-i="${idx}">${escapeHtml(
                  o
                )}</button>`
            )
            .join("")}
        </div>
        <p class="explain hidden" id="lessonExplain"></p>
      </div>
    `;
    body.querySelectorAll(".option").forEach((btn) => {
      btn.onclick = () => {
        const choice = +btn.dataset.i;
        const correct = choice === p.answer;
        body.querySelectorAll(".option").forEach((b) => {
          b.disabled = true;
          if (+b.dataset.i === p.answer) b.classList.add("correct");
          else if (+b.dataset.i === choice) b.classList.add("wrong");
        });
        const exp = $("#lessonExplain");
        exp.textContent = (correct ? t("correct") + " " : t("wrong") + " ") + p.explain;
        exp.classList.remove("hidden");
        if (correct && !state.lessonDone[l.id]) {
          state.lessonDone[l.id] = true;
          markActivity(15);
          completeDailyTask();
          initGrammar();
          openLesson(i);
        } else if (correct) markActivity(5);
      };
    });
  }

  /* Quiz */
  function resetQuizUI() {
    $("#quizSetup").classList.remove("hidden");
    $("#quizPlay").classList.add("hidden");
    $("#quizResult").classList.add("hidden");
    quiz = null;
  }

  function startQuiz(mode) {
    let bank = [];
    if (mode === "placement") bank = DATA.quizBanks.placement;
    else if (mode === "vocab") bank = DATA.quizBanks.vocab;
    else if (mode === "grammar") bank = DATA.quizBanks.grammar;
    else {
      bank = shuffle([
        ...DATA.quizBanks.vocab,
        ...DATA.quizBanks.grammar,
        ...DATA.quizBanks.placement.slice(0, 5),
      ]);
    }
    const questions = shuffle(bank).slice(
      0,
      mode === "placement" ? 15 : mode === "mixed" ? 12 : 10
    );
    quiz = { mode, questions, i: 0, score: 0, answered: false };
    $("#quizSetup").classList.add("hidden");
    $("#quizResult").classList.add("hidden");
    $("#quizPlay").classList.remove("hidden");
    renderQuizQ();
  }

  function renderQuizQ() {
    const item = quiz.questions[quiz.i];
    quiz.answered = false;
    $("#quizProgress").textContent = `${quiz.i + 1} / ${quiz.questions.length}`;
    $("#quizFill").style.width = `${(quiz.i / quiz.questions.length) * 100}%`;
    $("#quizQuestion").textContent = item.q;
    $("#quizExplain").classList.add("hidden");
    $("#quizNext").classList.add("hidden");
    const box = $("#quizOptions");
    box.innerHTML = item.options
      .map(
        (o, idx) =>
          `<button type="button" class="option" data-i="${idx}">${escapeHtml(
            o
          )}</button>`
      )
      .join("");
    box.querySelectorAll(".option").forEach((btn) => {
      btn.onclick = () => answerQuiz(+btn.dataset.i);
    });
  }

  function answerQuiz(choice) {
    if (quiz.answered) return;
    quiz.answered = true;
    const item = quiz.questions[quiz.i];
    const correct = choice === item.a;
    if (correct) quiz.score += 1;
    $all("#quizOptions .option").forEach((b) => {
      b.disabled = true;
      if (+b.dataset.i === item.a) b.classList.add("correct");
      else if (+b.dataset.i === choice) b.classList.add("wrong");
    });
    const exp = $("#quizExplain");
    exp.textContent = item.exp || "";
    exp.classList.remove("hidden");
    $("#quizNext").classList.remove("hidden");
    $("#quizNext").textContent =
      quiz.i + 1 >= quiz.questions.length
        ? t("quiz_result") + " 🎉"
        : t("quiz_next");
  }

  function nextQuiz() {
    if (quiz.i + 1 >= quiz.questions.length) {
      finishQuiz();
      return;
    }
    quiz.i += 1;
    renderQuizQ();
  }

  function finishQuiz() {
    const total = quiz.questions.length;
    const pct = Math.round((quiz.score / total) * 100);
    $("#quizPlay").classList.add("hidden");
    $("#quizResult").classList.remove("hidden");
    $("#quizScore").textContent = `${pct}%`;
    let hint = `${quiz.score} / ${total} дұрыс. `;
    if (quiz.mode === "placement") {
      if (pct >= 85) hint += "Деңгей: B2-ге жақын 💪";
      else if (pct >= 70) hint += "Деңгей: B1";
      else if (pct >= 50) hint += "Деңгей: A2";
      else hint += "Деңгей: A1 — academic сөзден баста!";
    } else if (pct >= 80) hint += "Керемет! IELTS vocabulary сенікі.";
    else if (pct >= 60) hint += "Жақсы — weak сөздерді қайтала.";
    else hint += "Сөздік + грамматикаға орал.";
    $("#quizLevelHint").textContent = hint;

    state.quizHistory.unshift({
      mode: quiz.mode,
      score: pct,
      date: todayStr(),
      detail: `${quiz.score}/${total}`,
    });
    state.quizHistory = state.quizHistory.slice(0, 20);
    markActivity(Math.max(10, Math.round(pct / 4)));
    completeDailyTask();
    saveState();
    if (pct >= 70) burstConfetti();
  }

  /* Speaking */
  function fmtTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function clearSpeakTimer() {
    clearInterval(speakTimerId);
    speakTimerId = null;
  }

  function initSpeaking() {
    const list = $("#speakList");
    const items = DATA.speaking || [];
    list.innerHTML = items
      .map(
        (s) =>
          `<button type="button" data-id="${s.id}"><strong>${escapeHtml(
            s.part
          )}</strong><br/><span class="muted">${escapeHtml(s.title)}</span></button>`
      )
      .join("");
    list.querySelectorAll("button").forEach((b) => {
      b.onclick = () => {
        list.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        openSpeak(b.dataset.id);
      };
    });
  }

  function openSpeak(id) {
    const s = (DATA.speaking || []).find((x) => x.id === id);
    if (!s) return;
    currentSpeak = s;
    clearSpeakTimer();
    speakPhase = null;
    const panel = $("#speakPanel");
    panel.innerHTML = `
      <span class="pill">${escapeHtml(s.part)}</span>
      <h2>${escapeHtml(s.title)}</h2>
      <p class="muted" data-dyn="speak_tip">${escapeHtml(t("speak_tip"))}</p>
      <ul class="cue-list">
        ${s.cue.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}
      </ul>
      <div class="timer-box">
        <div class="timer-labels">
          <span>${escapeHtml(t("speak_prep"))}: ${s.prep}s</span>
          <span>${escapeHtml(t("speak_talk"))}: ${s.speak}s</span>
        </div>
        <div class="timer-display" id="speakClock">${fmtTime(s.prep)}</div>
        <p class="muted" id="speakPhaseLabel">—</p>
        <div class="focus-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="speakPrepBtn">${escapeHtml(
            t("speak_start_prep")
          )}</button>
          <button type="button" class="btn btn-primary btn-sm" id="speakTalkBtn">${escapeHtml(
            t("speak_start_talk")
          )}</button>
          <button type="button" class="btn btn-ghost btn-sm" id="speakResetBtn">${escapeHtml(
            t("speak_reset")
          )}</button>
          <button type="button" class="btn btn-success btn-sm" id="speakDoneBtn">${escapeHtml(
            t("speak_done")
          )}</button>
        </div>
      </div>
    `;
    $("#speakPrepBtn").onclick = () => startSpeakPhase("prep", s.prep);
    $("#speakTalkBtn").onclick = () => startSpeakPhase("talk", s.speak);
    $("#speakResetBtn").onclick = () => {
      clearSpeakTimer();
      speakPhase = null;
      $("#speakClock").textContent = fmtTime(s.prep);
      $("#speakPhaseLabel").textContent = "—";
    };
    $("#speakDoneBtn").onclick = () => {
      clearSpeakTimer();
      markActivity(20);
      completeDailyTask();
      toast(t("speak_done"));
    };
  }

  function startSpeakPhase(phase, seconds) {
    clearSpeakTimer();
    speakPhase = phase;
    speakLeft = seconds;
    $("#speakClock").textContent = fmtTime(speakLeft);
    $("#speakPhaseLabel").textContent =
      phase === "prep" ? t("speak_prep") : t("speak_talk");
    speakTimerId = setInterval(() => {
      speakLeft -= 1;
      if (speakLeft <= 0) {
        clearSpeakTimer();
        $("#speakClock").textContent = "00:00";
        toast(phase === "prep" ? t("speak_start_talk") : "✓");
        if (phase === "prep" && currentSpeak) {
          // auto-suggest starting talk
          $("#speakPhaseLabel").textContent = t("speak_talk");
        }
        burstConfetti();
        return;
      }
      $("#speakClock").textContent = fmtTime(speakLeft);
    }, 1000);
  }

  /* Writing */
  function clearWriteTimer() {
    clearInterval(writeTimerId);
    writeTimerId = null;
    writeRunning = false;
  }

  function initWriting() {
    const list = $("#writeList");
    const items = DATA.writing || [];
    list.innerHTML = items
      .map(
        (w) =>
          `<button type="button" data-id="${w.id}"><strong>${escapeHtml(
            w.task
          )}</strong><br/><span class="muted">${escapeHtml(w.title)}</span></button>`
      )
      .join("");
    list.querySelectorAll("button").forEach((b) => {
      b.onclick = () => {
        list.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        openWrite(b.dataset.id);
      };
    });
  }

  function countWords(text) {
    return (text.trim().match(/\S+/g) || []).length;
  }

  function openWrite(id) {
    const w = (DATA.writing || []).find((x) => x.id === id);
    if (!w) return;
    currentWrite = w;
    clearWriteTimer();
    writeLeft = (w.minutes || 40) * 60;
    const saved = (state.drafts && state.drafts[w.id]) || "";
    const panel = $("#writePanel");
    panel.innerHTML = `
      <span class="pill">${escapeHtml(w.task)}</span>
      <h2>${escapeHtml(w.title)}</h2>
      <p class="prompt-box">${escapeHtml(w.prompt)}</p>
      <div class="write-meta">
        <span id="writeClock">${fmtTime(writeLeft)}</span>
        <span id="writeWordCount">0 / ${w.minWords} ${escapeHtml(t("write_words"))}</span>
      </div>
      <div class="focus-actions">
        <button type="button" class="btn btn-primary btn-sm" id="writeStart">${escapeHtml(
          t("write_start")
        )}</button>
        <button type="button" class="btn btn-ghost btn-sm" id="writePause">${escapeHtml(
          t("write_pause")
        )}</button>
        <button type="button" class="btn btn-ghost btn-sm" id="writeReset">${escapeHtml(
          t("write_reset")
        )}</button>
        <button type="button" class="btn btn-secondary btn-sm" id="writeSave">${escapeHtml(
          t("write_save")
        )}</button>
        <button type="button" class="btn btn-success btn-sm" id="writeDone">${escapeHtml(
          t("write_done")
        )}</button>
      </div>
      <textarea id="writeArea" class="write-area" rows="12" placeholder="Write your answer here...">${escapeHtml(
        saved
      )}</textarea>
      <div class="tips-box">
        <h3>${escapeHtml(t("write_tips"))}</h3>
        <ul>${w.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}</ul>
      </div>
    `;
    const area = $("#writeArea");
    const updateCount = () => {
      const n = countWords(area.value);
      const el = $("#writeWordCount");
      el.textContent = `${n} / ${w.minWords} ${t("write_words")}`;
      el.classList.toggle("ok", n >= w.minWords);
    };
    area.addEventListener("input", updateCount);
    updateCount();

    $("#writeStart").onclick = () => {
      if (writeRunning) return;
      writeRunning = true;
      writeTimerId = setInterval(() => {
        writeLeft -= 1;
        if (writeLeft <= 0) {
          clearWriteTimer();
          $("#writeClock").textContent = "00:00";
          toast("Time!");
          burstConfetti();
          return;
        }
        $("#writeClock").textContent = fmtTime(writeLeft);
      }, 1000);
    };
    $("#writePause").onclick = () => clearWriteTimer();
    $("#writeReset").onclick = () => {
      clearWriteTimer();
      writeLeft = (w.minutes || 40) * 60;
      $("#writeClock").textContent = fmtTime(writeLeft);
    };
    $("#writeSave").onclick = () => {
      if (!state.drafts) state.drafts = {};
      state.drafts[w.id] = area.value;
      saveState();
      toast(t("write_saved"));
    };
    $("#writeDone").onclick = () => {
      if (!state.drafts) state.drafts = {};
      state.drafts[w.id] = area.value;
      saveState();
      markActivity(25);
      completeDailyTask();
      toast(t("write_done"));
    };
  }

  /* Phrases */
  function initPhrases() {
    const grid = $("#phraseGrid");
    const items = DATA.phrases || [];
    grid.innerHTML = items
      .map(
        (p) => `
      <article class="phrase-card glass">
        <p class="phrase-en">${escapeHtml(p.en)}</p>
        <p class="muted">${escapeHtml(p.kk)}</p>
        <p class="phrase-use">${escapeHtml(p.use)}</p>
        <button type="button" class="btn btn-secondary btn-sm" data-copy="${escapeHtml(
          p.en
        )}">${escapeHtml(t("phrase_copy"))}</button>
      </article>`
      )
      .join("");
    grid.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(btn.dataset.copy);
          toast(t("phrase_copied"));
        } catch {
          toast(btn.dataset.copy);
        }
      };
    });
  }

  /* Focus pomodoro */
  function updateFocusClock() {
    if ($("#focusClock")) $("#focusClock").textContent = fmtTime(focusLeft);
  }

  function clearFocus() {
    clearInterval(focusTimerId);
    focusTimerId = null;
    focusRunning = false;
  }

  /* Export / import */
  function exportProgress() {
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `fluentpath-progress-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast(t("export_ok"));
  }

  function importProgress(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        state = { ...defaultState(), ...data };
        saveState();
        applyTheme();
        applyI18n();
        renderProgress();
        toast(t("import_ok"));
      } catch {
        toast(t("import_fail"));
      }
    };
    reader.readAsText(file);
  }

  /* Listening (Web Speech API TTS) — sentence-by-sentence */
  function splitSentences(text) {
    return text
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function stopListening() {
    listenPlayingAll = false;
    if (window.speechSynthesis) speechSynthesis.cancel();
    utter = null;
    clearInterval(speakTimer);
    $("#eqAnim")?.classList.remove("playing");
    if ($("#listenFill")) $("#listenFill").style.width = "0%";
  }

  function pickEnglishVoice() {
    const voices = speechSynthesis.getVoices() || [];
    return (
      voices.find((v) => /en(-|_)GB/i.test(v.lang)) ||
      voices.find((v) => /en(-|_)US/i.test(v.lang)) ||
      voices.find((v) => /^en/i.test(v.lang)) ||
      null
    );
  }

  function updateListenProgress() {
    const total = listenSentences.length || 1;
    const p = Math.min(100, (listenSentIndex / total) * 100);
    if ($("#listenFill")) $("#listenFill").style.width = `${p}%`;
    if ($("#listenSentInfo")) {
      $("#listenSentInfo").textContent = `Sentence ${Math.min(
        listenSentIndex + 1,
        total
      )} / ${total}`;
    }
    const cur = $("#listenCurrentSent");
    if (cur && listenSentences[listenSentIndex]) {
      cur.classList.remove("hidden");
      cur.textContent = listenSentences[listenSentIndex];
    }
  }

  function renderTranscriptHighlight() {
    const el = $("#listenTranscript");
    if (!el || !listenSentences.length) return;
    el.innerHTML = listenSentences
      .map((s, i) => {
        const cls = i === listenSentIndex ? "sent active" : i < listenSentIndex ? "sent done" : "sent";
        return `<span class="${cls}">${escapeHtml(s)}</span> `;
      })
      .join("");
  }

  function initListeningList() {
    const box = $("#listeningPick");
    if (!box) return;
    box.classList.remove("hidden");
    $("#listeningActive")?.classList.add("hidden");
    const tracks = DATA.listening || [];
    box.innerHTML = tracks
      .map(
        (tr, i) => `
      <button type="button" data-id="${tr.id}">
        <span><strong>🎧 ${i + 1}. ${escapeHtml(tr.title)}</strong></span>
        <span class="track-meta">${escapeHtml(tr.level)} · ${escapeHtml(
          tr.duration || ""
        )}</span>
      </button>`
      )
      .join("");
    box.querySelectorAll("button").forEach((b) => {
      b.onclick = () => openListening(b.dataset.id);
    });
  }

  function openListening(id, keepLangOnly = false) {
    const tr = (DATA.listening || []).find((x) => x.id === id);
    if (!tr) return;
    listenTrack = tr;
    listenSentences = splitSentences(tr.text);
    if (!keepLangOnly) {
      listenShowText = false;
      listenSentIndex = 0;
      stopListening();
    }
    $("#listeningPick").classList.add("hidden");
    $("#listeningActive").classList.remove("hidden");
    $("#listenTitle").textContent = tr.title;
    $("#listenMeta").textContent = `${tr.level} · ${tr.duration || ""} · ${
      listenSentences.length
    } sentences`;
    renderTranscriptHighlight();
    $("#listenTranscript").classList.toggle("hidden", !listenShowText);
    const tog = $("#listenToggleText");
    if (tog) tog.textContent = listenShowText ? t("listen_hide") : t("listen_show");
    $("#listenScore")?.classList.add("hidden");
    updateListenProgress();
    $("#listenQs").innerHTML = tr.questions
      .map(
        (qq, qi) => `
      <div class="rq">
        <p>${qi + 1}. ${escapeHtml(qq.q)}</p>
        ${qq.options
          .map(
            (o, oi) =>
              `<label><input type="radio" name="lq${qi}" value="${oi}" /> ${escapeHtml(
                o
              )}</label>`
          )
          .join("")}
      </div>`
      )
      .join("");
  }

  function speakSentence(index, thenNext) {
    if (!listenTrack || !window.speechSynthesis) {
      toast(t("speek_unsupported"));
      return;
    }
    if (index < 0 || index >= listenSentences.length) {
      listenPlayingAll = false;
      $("#eqAnim")?.classList.remove("playing");
      if ($("#listenFill")) $("#listenFill").style.width = "100%";
      return;
    }
    speechSynthesis.cancel();
    listenSentIndex = index;
    updateListenProgress();
    renderTranscriptHighlight();

    utter = new SpeechSynthesisUtterance(listenSentences[index]);
    utter.lang = "en-GB";
    utter.rate = listenRate;
    utter.pitch = 1;
    const voice = pickEnglishVoice();
    if (voice) utter.voice = voice;

    utter.onstart = () => $("#eqAnim")?.classList.add("playing");
    utter.onend = () => {
      if (thenNext && listenPlayingAll) {
        speakSentence(index + 1, true);
      } else {
        $("#eqAnim")?.classList.remove("playing");
      }
    };
    utter.onerror = () => {
      $("#eqAnim")?.classList.remove("playing");
      listenPlayingAll = false;
    };
    speechSynthesis.speak(utter);
  }

  function playListening() {
    if (!listenTrack) return;
    if (!window.speechSynthesis) {
      toast(t("speek_unsupported"));
      return;
    }
    // resume if paused
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      $("#eqAnim")?.classList.add("playing");
      return;
    }
    listenPlayingAll = true;
    const startAt =
      listenSentIndex >= listenSentences.length - 1 && !speechSynthesis.speaking
        ? 0
        : listenSentIndex;
    speakSentence(startAt, true);
  }

  function pauseListening() {
    if (!window.speechSynthesis) return;
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      $("#eqAnim")?.classList.remove("playing");
      listenPlayingAll = false;
    } else if (speechSynthesis.paused) {
      speechSynthesis.resume();
      $("#eqAnim")?.classList.add("playing");
      listenPlayingAll = true;
    }
  }

  function replaySentence() {
    listenPlayingAll = false;
    speakSentence(listenSentIndex, false);
  }

  function checkListening() {
    if (!listenTrack) return;
    let score = 0;
    listenTrack.questions.forEach((qq, qi) => {
      const picked = document.querySelector(`input[name="lq${qi}"]:checked`);
      if (picked && +picked.value === qq.a) score += 1;
    });
    const el = $("#listenScore");
    el.classList.remove("hidden");
    el.textContent = `${t("result_score")}: ${score} / ${listenTrack.questions.length}`;
    markActivity(score * 6 + 8);
    completeDailyTask();
    if (score === listenTrack.questions.length) burstConfetti();
  }

  /* Reading */
  function initReadingList() {
    $("#readingPick").classList.remove("hidden");
    $("#readingActive").classList.add("hidden");
    $("#readingPick").innerHTML = DATA.readings
      .map(
        (r) =>
          `<button type="button" data-id="${r.id}">
            <strong>${escapeHtml(r.title)}</strong>
            <span class="muted"> · ${r.level}</span>
          </button>`
      )
      .join("");
    $all("#readingPick button").forEach((b) => {
      b.onclick = () => openReading(b.dataset.id);
    });
  }

  function openReading(id) {
    const r = DATA.readings.find((x) => x.id === id);
    if (!r) return;
    $("#readingPick").classList.add("hidden");
    $("#readingActive").classList.remove("hidden");
    $("#readingScore").classList.add("hidden");
    $("#passageText").innerHTML = `<h2>${escapeHtml(
      r.title
    )}</h2><p>${escapeHtml(r.text).replace(/\n\n/g, "</p><p>")}</p>`;
    $("#readingQs").innerHTML = r.questions
      .map(
        (qq, qi) => `
      <div class="rq">
        <p>${qi + 1}. ${escapeHtml(qq.q)}</p>
        ${qq.options
          .map(
            (o, oi) =>
              `<label><input type="radio" name="rq${qi}" value="${oi}" /> ${escapeHtml(
                o
              )}</label>`
          )
          .join("")}
      </div>`
      )
      .join("");
    $("#readingCheck").onclick = () => {
      let score = 0;
      r.questions.forEach((qq, qi) => {
        const picked = document.querySelector(`input[name="rq${qi}"]:checked`);
        if (picked && +picked.value === qq.a) score += 1;
      });
      const el = $("#readingScore");
      el.classList.remove("hidden");
      el.textContent = `${t("result_score")}: ${score} / ${r.questions.length}`;
      markActivity(score * 5 + 5);
      completeDailyTask();
      if (score === r.questions.length) burstConfetti();
    };
  }

  /* Progress */
  function renderProgress() {
    $("#pXp").textContent = state.xp;
    $("#pStreak").textContent = state.streak;
    $("#pKnown").textContent = Object.keys(state.known).length;
    if (state.quizHistory.length) {
      const avg = Math.round(
        state.quizHistory.reduce((s, h) => s + h.score, 0) /
          state.quizHistory.length
      );
      $("#pQuiz").textContent = `${avg}%`;
    } else $("#pQuiz").textContent = "—";

    const hist = $("#quizHistory");
    if (!state.quizHistory.length) {
      hist.innerHTML = `<li class="muted">${escapeHtml(t("no_quiz"))}</li>`;
    } else {
      hist.innerHTML = state.quizHistory
        .map(
          (h) =>
            `<li><span>${escapeHtml(h.mode)} · ${h.date}</span><strong>${
              h.score
            }% <span class="muted">(${h.detail})</span></strong></li>`
        )
        .join("");
    }
  }

  function updateChrome() {
    refreshDaily();
    const n = DATA.vocab?.length || 0;
    if ($("#statWords")) $("#statWords").textContent = `${n}+`;
    if ($("#statLessons"))
      $("#statLessons").textContent = String(DATA.lessons?.length || 0);
    if ($("#statStreak")) $("#statStreak").textContent = String(state.streak);
    if ($("#heroStreak"))
      $("#heroStreak").textContent = `${state.streak} ${t("days")}`;
    if ($("#xpChip")) $("#xpChip").textContent = String(state.xp);
    if ($("#xpLabel")) $("#xpLabel").textContent = String(state.xp);

    const goal = 3;
    const done = state.dailyDone || 0;
    if ($("#dailyDone")) $("#dailyDone").textContent = String(done);
    if ($("#dailyGoal")) $("#dailyGoal").textContent = String(goal);
    if ($("#dailyFill"))
      $("#dailyFill").style.width = `${Math.min(100, (done / goal) * 100)}%`;
    // ring: circumference ~ 100 with path design using dasharray percent
    const ring = $("#dailyRing");
    if (ring) {
      const pct = Math.min(100, (done / goal) * 100);
      ring.setAttribute("stroke-dasharray", `${pct}, 100`);
    }
  }

  function bind() {
    $all("[data-nav]").forEach((el) => {
      el.addEventListener("click", (e) => {
        const name = el.getAttribute("data-nav");
        if (name) {
          e.preventDefault();
          showView(name);
        }
      });
    });

    $("#dockMoreBtn")?.addEventListener("click", (e) => {
      e.preventDefault();
      const sheet = $("#moreSheet");
      if (sheet?.classList.contains("hidden")) openMoreSheet();
      else closeMoreSheet();
    });
    $("#moreBackdrop")?.addEventListener("click", closeMoreSheet);
    $("#moreClose")?.addEventListener("click", closeMoreSheet);

    $("#burger")?.addEventListener("click", () => {
      $("#mainNav").classList.toggle("open");
    });

    $("#themeToggle")?.addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      applyTheme();
      saveState();
    });

    $("#langSelect")?.addEventListener("change", (e) => {
      state.lang = e.target.value || "kk";
      saveState();
      applyI18n();
    });

    // Listening controls
    $("#listenPlay")?.addEventListener("click", playListening);
    $("#listenPause")?.addEventListener("click", pauseListening);
    $("#listenStop")?.addEventListener("click", () => {
      stopListening();
      listenSentIndex = 0;
      updateListenProgress();
      renderTranscriptHighlight();
    });
    $("#listenReplaySent")?.addEventListener("click", replaySentence);
    $("#listeningBack")?.addEventListener("click", () => {
      stopListening();
      initListeningList();
    });
    $("#listenCheck")?.addEventListener("click", checkListening);
    $("#listenToggleText")?.addEventListener("click", () => {
      listenShowText = !listenShowText;
      $("#listenTranscript")?.classList.toggle("hidden", !listenShowText);
      if (listenShowText) renderTranscriptHighlight();
      const tog = $("#listenToggleText");
      if (tog) tog.textContent = listenShowText ? t("listen_hide") : t("listen_show");
    });
    $all("[data-rate]").forEach((btn) => {
      btn.addEventListener("click", () => {
        listenRate = parseFloat(btn.dataset.rate) || 1;
        $all("[data-rate]").forEach((b) =>
          b.classList.toggle("active", b === btn)
        );
        if (speechSynthesis.speaking || speechSynthesis.pending) {
          listenPlayingAll = true;
          speakSentence(listenSentIndex, true);
        }
      });
    });

    // Chrome/Safari load voices async
    if (window.speechSynthesis) {
      speechSynthesis.onvoiceschanged = () => pickEnglishVoice();
    }

    $("#flashCard")?.addEventListener("click", () => {
      flashFlipped = !flashFlipped;
      $("#flashCard").classList.toggle("flipped", flashFlipped);
    });

    $("#flashEasy")?.addEventListener("click", () => {
      const w = vocabQueue[vocabIndex];
      if (w) {
        state.known[w.id] = true;
        delete state.learning[w.id];
        saveState();
        markActivity(4);
        toast(`✓ ${w.en}`);
      }
      nextFlash();
      renderVocabTable();
    });

    $("#flashHard")?.addEventListener("click", () => {
      const w = vocabQueue[vocabIndex];
      if (w) {
        state.learning[w.id] = true;
        delete state.known[w.id];
        saveState();
        markActivity(2);
      }
      nextFlash();
      renderVocabTable();
    });

    $("#flashSkip")?.addEventListener("click", nextFlash);

    $("#modeAll")?.addEventListener("click", () => setVocabMode("all"));
    $("#modeWeak")?.addEventListener("click", () => setVocabMode("weak"));
    $("#modeKnown")?.addEventListener("click", () => setVocabMode("known"));

    // Flashcard keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (!$("#view-vocab")?.classList.contains("active")) return;
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.code === "Space") {
        e.preventDefault();
        flashFlipped = !flashFlipped;
        $("#flashCard")?.classList.toggle("flipped", flashFlipped);
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        $("#flashHard")?.click();
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        $("#flashEasy")?.click();
      }
    });

    // Focus timer
    $("#focusStart")?.addEventListener("click", () => {
      if (focusRunning) return;
      if (focusLeft <= 0) focusLeft = 25 * 60;
      focusRunning = true;
      focusTimerId = setInterval(() => {
        focusLeft -= 1;
        updateFocusClock();
        if (focusLeft <= 0) {
          clearFocus();
          toast(t("focus_done"));
          markActivity(30);
          completeDailyTask();
          burstConfetti();
          focusLeft = 25 * 60;
          updateFocusClock();
        }
      }, 1000);
    });
    $("#focusPause")?.addEventListener("click", () => clearFocus());
    $("#focusReset")?.addEventListener("click", () => {
      clearFocus();
      focusLeft = 25 * 60;
      updateFocusClock();
    });

    // Export / import
    $("#exportProgress")?.addEventListener("click", exportProgress);
    $("#importProgress")?.addEventListener("change", (e) => {
      const f = e.target.files && e.target.files[0];
      if (f) importProgress(f);
      e.target.value = "";
    });

    let searchT;
    $("#vocabSearch")?.addEventListener("input", () => {
      clearTimeout(searchT);
      searchT = setTimeout(initVocab, 120);
    });
    $("#vocabLevel")?.addEventListener("change", initVocab);
    $("#vocabTopic")?.addEventListener("change", initVocab);

    $all("[data-quiz]").forEach((btn) => {
      btn.addEventListener("click", () => startQuiz(btn.dataset.quiz));
    });
    $("#quizNext")?.addEventListener("click", nextQuiz);
    $("#quizRetry")?.addEventListener("click", resetQuizUI);
    $("#readingBack")?.addEventListener("click", initReadingList);

    $("#resetProgress")?.addEventListener("click", () => {
      if (confirm("Барлық прогресс өшеді. Жалғастырасың ба?")) {
        state = defaultState();
        saveState();
        applyTheme();
        updateChrome();
        renderProgress();
        toast(t("toast_reset"));
      }
    });

    // scroll top progress
    window.addEventListener("scroll", () => {
      const el = $("#scrollProgress");
      if (!el) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      el.style.width = `${p}%`;
    });
  }

  function init() {
    if (!DATA || !DATA.vocab) {
      console.error("FP_DATA missing");
      return;
    }
    if (!["kk", "ru", "es", "zh"].includes(state.lang)) state.lang = "kk";
    refreshDaily();
    applyTheme();
    bind();
    initWotd();
    applyI18n();
    updateFocusClock();
    showView("home");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
