/* FluentPath — short dialogue stories: lines appear one by one with audio, translation on tap and checkpoints. */
(() => {
  const FP = () => window.FP;
  const t = (k) => FP().t(k);
  const esc = (s) => FP().escapeHtml(s);
  const ic = (name, cls) => window.FP_IC(name, cls);
  const $ = (s, root = document) => root.querySelector(s);
  const $all = (s, root = document) => [...root.querySelectorAll(s)];
  const STORY_XP = 12;

  let run = null; // { story, shown, correct, asked, waiting, voices }

  const stories = () => window.FP_DATA.stories || [];

  function renderList() {
    const box = $("#storyList");
    if (!box) return;
    const done = FP().state.storiesDone || {};
    box.innerHTML = stories()
      .map(
        (s) => `<button type="button" class="story-card${done[s.id] ? " is-done" : ""}" data-story="${s.id}">
          <span class="story-ico">${ic(s.icon)}</span>
          <span class="story-lvl">${s.level}</span>
          <strong>${esc(s.title)}</strong>
          <span class="muted small">${esc(FP().fmt(t("st_meta"), { n: s.lines.length }))}${done[s.id] ? ` · ${ic("check")} ${done[s.id]}/${s.checks.length}` : ""}</span>
        </button>`
      )
      .join("");
    $all("[data-story]", box).forEach((b) => b.addEventListener("click", () => open(b.dataset.story)));
  }

  function render() {
    if (run) draw();
    else {
      $("#storyPlayer")?.classList.add("hidden");
      $("#storyList")?.classList.remove("hidden");
      renderList();
    }
  }

  function open(id) {
    const story = stories().find((s) => s.id === id);
    if (!story) return;
    // Each character keeps one voice: girls and women female, boys and men male.
    const voices = window.FP_VOICE.storyVoices(story);
    run = { story, shown: 0, correct: 0, asked: new Set(), waiting: null, voices, finished: false };
    $("#storyList").classList.add("hidden");
    $("#storyPlayer").classList.remove("hidden");
    next();
  }

  function close() {
    run = null;
    FP().stopSpeech();
    render();
  }

  const voiceOf = (who) => (who && run.voices[who]) || "nar";

  function say(line) {
    const [who, en] = line;
    const next = run.story.lines[run.shown];
    FP().speak(en, { voice: voiceOf(who), onstart: () => next && window.FP_VOICE.preload(voiceOf(next[0]), next[1]) });
  }

  // Advance: show the next line, or the checkpoint question attached to the last shown line.
  function next() {
    if (!run || run.waiting) return;
    const s = run.story;
    const check = s.checks.find((c) => c.after === run.shown - 1 && !run.asked.has(c.after));
    if (check) {
      run.waiting = check;
      draw();
      return;
    }
    if (run.shown >= s.lines.length) {
      finish();
      return;
    }
    run.shown += 1;
    draw();
    say(s.lines[run.shown - 1]);
  }

  function answer(i) {
    const c = run.waiting;
    if (!c || c.picked != null) return;
    c.picked = i;
    const ok = i === c.a;
    if (ok) run.correct += 1;
    FP().sfx(ok ? "ok" : "bad");
    draw();
  }

  function continueAfterCheck() {
    if (!run.waiting) return;
    run.asked.add(run.waiting.after);
    delete run.waiting.picked;
    run.waiting = null;
    next();
  }

  function finish() {
    const s = run.story;
    run.finished = true;
    const st = FP().state;
    if (!st.storiesDone) st.storiesDone = {};
    st.storiesDone[s.id] = Math.max(st.storiesDone[s.id] || 0, run.correct);
    FP().save();
    const paid = FP().awardOnce(`story:${s.id}`, STORY_XP);
    window.FP_QUESTS?.bump("story");
    FP().sfx("done");
    if (run.correct === s.checks.length) FP().confetti();
    run.paid = paid;
    draw();
  }

  function draw() {
    const box = $("#storyPlayer");
    if (!box || !run) return;
    const s = run.story;
    const total = s.lines.length + s.checks.length;
    const progress = run.shown + run.asked.size + (run.finished ? 0 : 0);
    const lines = s.lines
      .slice(0, run.shown)
      .map(([who, en, kk], i) => {
        const me = who && Object.keys(s.cast).indexOf(who) % 2 === 1;
        if (!who) {
          return `<div class="st-line st-narr" data-line="${i}"><p>${esc(en)}</p><p class="st-kk hidden">${esc(kk)}</p></div>`;
        }
        return `<div class="st-line${me ? " st-right" : ""}" data-line="${i}">
          <span class="st-avatar is-${(window.FP_VOICE.VOICES[run.voices[who]] || {}).g || "f"}" aria-hidden="true">${esc(who[0])}</span>
          <div class="st-bubble">
            <span class="st-who">${esc(who)}</span>
            <p>${esc(en)}</p>
            <p class="st-kk hidden">${esc(kk)}</p>
          </div>
        </div>`;
      })
      .join("");
    let tail = "";
    if (run.waiting) {
      const c = run.waiting;
      const answered = c.picked != null;
      tail = `<div class="st-check glass">
        <p class="st-q">${ic("circle-help")}<span>${esc(c.q)}</span></p>
        <div class="choices">${c.options
          .map((o, i) => {
            const cls = answered ? (i === c.a ? " is-ok" : i === c.picked ? " is-bad" : "") : "";
            return `<button type="button" class="choice${cls}" data-opt="${i}" ${answered ? "disabled" : ""}><span class="choice-key">${
              i + 1
            }</span><span class="choice-txt">${esc(o)}</span></button>`;
          })
          .join("")}</div>
        ${answered ? `<button type="button" class="btn-3d btn-3d-block" id="stCont">${esc(t("c_continue"))}</button>` : ""}
      </div>`;
    } else if (run.finished) {
      tail = `<div class="st-end glass">
        <div class="summary-emoji">${ic(run.correct === s.checks.length ? "trophy" : "book-open")}</div>
        <h3>${esc(t("st_done"))}</h3>
        <p class="muted">${esc(FP().fmt(t("st_score"), { n: run.correct, total: s.checks.length }))}${
          run.paid ? ` · +${FP().xp(STORY_XP)}` : ""
        }</p>
        <div class="st-end-btns">
          <button type="button" class="btn btn-ghost" id="stAgain">${ic("rotate-ccw")}<span>${esc(t("st_again"))}</span></button>
          <button type="button" class="btn-3d" id="stBack">${esc(t("st_more"))}</button>
        </div>
      </div>`;
    } else {
      tail = `<button type="button" class="btn-3d btn-3d-block st-next" id="stNext">${esc(
        run.shown === 0 ? t("st_start") : t("st_next")
      )}</button>`;
    }
    box.innerHTML = `<div class="st-head">
        <button type="button" class="icon-btn" id="stClose" aria-label="Back">${ic("arrow-left")}</button>
        <div class="st-title">${ic(s.icon)}<span>${esc(s.title)}</span><em>${s.level}</em></div>
      </div>
      <div class="progress-bar slim"><div class="progress-fill" style="width:${Math.min(100, (progress / total) * 100)}%"></div></div>
      <p class="muted small st-hint">${esc(t("st_hint"))}</p>
      <div class="st-lines">${lines}</div>
      ${tail}`;

    $("#stClose").onclick = close;
    $("#stNext")?.addEventListener("click", next);
    $("#stCont")?.addEventListener("click", continueAfterCheck);
    $("#stAgain")?.addEventListener("click", () => open(s.id));
    $("#stBack")?.addEventListener("click", close);
    $all("[data-opt]", box).forEach((b) => b.addEventListener("click", () => answer(+b.dataset.opt)));
    $all("[data-line]", box).forEach((el) =>
      el.addEventListener("click", () => {
        el.querySelector(".st-kk")?.classList.toggle("hidden");
        say(s.lines[+el.dataset.line]);
      })
    );
    const last = box.querySelector(".st-check, .st-end, #stNext");
    if (last && run.shown > 1) last.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  document.addEventListener("keydown", (e) => {
    if (!run || !$("#view-stories")?.classList.contains("active")) return;
    if (document.body.classList.contains("ask-open")) return;
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (run.waiting && run.waiting.picked != null) continueAfterCheck();
      else if (!run.waiting && !run.finished) next();
    } else if (/^[1-4]$/.test(e.key) && run.waiting && run.waiting.picked == null) {
      answer(+e.key - 1);
    }
  });

  window.FP_STORIES = { render, count: () => stories().length };
})();
