/* FluentPath — AI screens: the conversation partner and band feedback cards (writing, speaking). */
(() => {
  const FP = () => window.FP;
  const AI = () => window.FP_AI;
  const t = (k) => FP().t(k);
  const esc = (s) => FP().escapeHtml(s);
  const $ = (s, root = document) => root.querySelector(s);
  const $all = (s, root = document) => [...root.querySelectorAll(s)];
  const CHAT_XP_PER_DAY = 10; // messages that earn +2 XP each day

  let chat = null; // { scenario, level, msgs: [{ role, text, kk, fix }], suggestions, busy, error }
  let micRec = null;

  const level = () => FP().state.aiLevel || "A2";
  const voiceOn = () => FP().state.chatVoice !== false;

  /* ---------- Feedback card (writing & speaking) ---------- */
  function feedbackHtml(d) {
    const list = (items, fn) => items.map(fn).join("");
    return `<div class="fb-card glass">
      <div class="fb-head">
        <div class="band-badge" style="--p:${(d.overall / 9) * 100}%"><strong>${d.overall}</strong><span>Band</span></div>
        <div><h3>${esc(t("ai_result"))}</h3><p>${esc(d.summary)}</p></div>
      </div>
      <div class="fb-crit">${list(
        d.criteria,
        (c) => `<div class="crit">
          <div class="crit-top"><span>${esc(c.name)}</span><strong>${c.band}</strong></div>
          <div class="progress-bar slim"><div class="progress-fill" style="width:${(c.band / 9) * 100}%"></div></div>
          <p>${esc(c.comment)}</p>
        </div>`
      )}</div>
      ${
        d.mistakes.length
          ? `<h4>${esc(t("ai_mistakes"))}</h4><ul class="fb-mistakes">${list(
              d.mistakes,
              (m) => `<li><div><span class="fb-wrong">${esc(m.wrong)}</span><span class="fb-arrow">→</span><span class="fb-right">${esc(
                m.right
              )}</span></div><p>${esc(m.why)}</p></li>`
            )}</ul>`
          : ""
      }
      ${
        d.phrases && d.phrases.length
          ? `<h4>${esc(t("ai_phrases"))}</h4><ul class="fb-phrases">${list(
              d.phrases,
              (p) => `<li><button type="button" class="say small" data-say="${esc(p.phrase)}" aria-label="Play">🔊</button><div><strong>${esc(
                p.phrase
              )}</strong><span>${esc(p.use)}</span></div></li>`
            )}</ul>`
          : ""
      }
      ${d.improved ? `<details class="fb-improved"><summary>${esc(t("ai_improved"))}</summary><p>${esc(d.improved)}</p></details>` : ""}
      ${d.tips.length ? `<h4>${esc(t("ai_tips"))}</h4><ul class="fb-tips">${list(d.tips, (x) => `<li>${esc(x)}</li>`)}</ul>` : ""}
      <p class="fb-disclaimer">${esc(t("ai_disclaimer"))}</p>
    </div>`;
  }

  function errorHtml(code) {
    return `<div class="ai-error glass" role="alert">
      <strong>⚠️ ${esc(t(AI().errorKey(code)))}</strong>
      ${code === "not_configured" ? `<p class="muted small">${esc(t("ai_setup_hint"))}</p>` : ""}
    </div>`;
  }

  async function runFeedback(task, payload, host, btn) {
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = t("ai_checking");
    host.innerHTML = `<div class="ai-loading glass"><span class="spinner" aria-hidden="true"></span>${esc(t("ai_wait"))}</div>`;
    try {
      const data = await AI().ask(task, payload);
      host.innerHTML = feedbackHtml(data);
      $all("[data-say]", host).forEach((b) => b.addEventListener("click", () => FP().speak(b.dataset.say)));
      FP().sfx("done");
      host.scrollIntoView({ behavior: "smooth", block: "start" });
      return data;
    } catch (e) {
      host.innerHTML = errorHtml(e.code);
      return null;
    } finally {
      btn.disabled = false;
      btn.textContent = label;
    }
  }

  /* ---------- Conversation partner ---------- */
  function render() {
    const grid = $("#scenarioGrid");
    if (!grid) return;
    $all(".chat-levels [data-level]").forEach((b) => b.classList.toggle("active", b.dataset.level === level()));
    grid.innerHTML = AI()
      .scenarios.map(
        (sc) => `<button type="button" class="scenario-card" data-sc="${sc.id}">
          <span class="sc-ico">${sc.icon}</span>
          <strong>${esc(t(`chat_sc_${sc.id}`))}</strong>
          <span class="muted small">${esc(t(`chat_sc_${sc.id}_d`))}</span>
        </button>`
      )
      .join("");
    $all("[data-sc]", grid).forEach((b) => b.addEventListener("click", () => start(b.dataset.sc)));
    $("#chatMic")?.classList.toggle("hidden", !FP().hasSpeechRec());
    updateVoiceBtn();
    showRoom(!!chat);
    if (chat) drawLog();
  }

  function showRoom(on) {
    $("#chatSetup").classList.toggle("hidden", on);
    $("#chatRoom").classList.toggle("hidden", !on);
    document.body.classList.toggle("chat-open", on);
  }

  function start(id) {
    const sc = AI().scenarios.find((s) => s.id === id);
    chat = { scenario: id, level: level(), msgs: [], suggestions: [], busy: false, error: null };
    $("#chatTitle").innerHTML = `<span>${sc.icon}</span> ${esc(t(`chat_sc_${id}`))} <em>${esc(chat.level)}</em>`;
    showRoom(true);
    drawLog();
    requestReply();
  }

  function stop() {
    chat = null;
    stopMic();
    FP().stopSpeech();
    showRoom(false);
  }

  function drawLog() {
    const log = $("#chatLog");
    if (!log || !chat) return;
    const bubbles = chat.msgs
      .map((m, i) => {
        if (m.role === "model") {
          return `<div class="msg msg-ai">
            <div class="bubble">
              <p>${esc(m.text)}</p>
              <div class="msg-tools">
                <button type="button" class="say small" data-say="${esc(m.text)}" aria-label="Play">🔊</button>
                ${m.kk ? `<button type="button" class="kk-toggle" data-kk="${i}">${esc(t("chat_translate"))}</button>` : ""}
              </div>
              ${m.kk ? `<p class="msg-kk${m.showKk ? "" : " hidden"}">${esc(m.kk)}</p>` : ""}
            </div>
          </div>`;
        }
        return `<div class="msg msg-me">
          <div class="bubble"><p>${esc(m.text)}</p></div>
          ${
            m.fix
              ? `<div class="msg-fix"><span>✏️ ${esc(t("chat_better"))}</span><strong>${esc(m.fix.corrected)}</strong>${
                  m.fix.why ? `<p>${esc(m.fix.why)}</p>` : ""
                }</div>`
              : ""
          }
        </div>`;
      })
      .join("");
    const typing = chat.busy ? `<div class="msg msg-ai"><div class="bubble typing" aria-label="…"><i></i><i></i><i></i></div></div>` : "";
    const error = chat.error
      ? `<div class="msg-error">${errorHtml(chat.error)}<button type="button" class="btn btn-secondary btn-sm" id="chatRetry">${esc(
          t("chat_retry")
        )}</button></div>`
      : "";
    log.innerHTML = bubbles + typing + error;
    $all("[data-say]", log).forEach((b) => b.addEventListener("click", () => FP().speak(b.dataset.say)));
    $all("[data-kk]", log).forEach((b) =>
      b.addEventListener("click", () => {
        const m = chat.msgs[+b.dataset.kk];
        m.showKk = !m.showKk;
        drawLog();
      })
    );
    $("#chatRetry")?.addEventListener("click", () => {
      chat.error = null;
      requestReply();
    });
    log.scrollTop = log.scrollHeight;

    const sug = $("#chatSuggest");
    sug.innerHTML = chat.busy
      ? ""
      : (chat.suggestions || [])
          .map((x, i) => `<button type="button" class="chip-btn" data-sug="${i}">💡 ${esc(x)}</button>`)
          .join("");
    $all("[data-sug]", sug).forEach((b) =>
      b.addEventListener("click", () => {
        const input = $("#chatText");
        input.value = chat.suggestions[+b.dataset.sug];
        input.focus();
      })
    );
    $("#chatSend").disabled = chat.busy;
  }

  async function requestReply() {
    const session = chat;
    chat.busy = true;
    chat.error = null;
    drawLog();
    try {
      const data = await AI().ask("chat", {
        scenario: chat.scenario,
        level: chat.level,
        history: chat.msgs.map((m) => ({ role: m.role, text: m.text })),
      });
      if (session !== chat) return;
      const lastUser = [...chat.msgs].reverse().find((m) => m.role === "user");
      if (lastUser && data.has_mistake) lastUser.fix = { corrected: data.corrected, why: data.explanation };
      chat.msgs.push({ role: "model", text: data.reply, kk: data.reply_kk });
      chat.suggestions = data.suggestions;
      if (voiceOn()) FP().speak(data.reply);
    } catch (e) {
      if (session !== chat) return;
      chat.error = e.code || "upstream";
    } finally {
      if (session === chat) {
        chat.busy = false;
        drawLog();
      }
    }
  }

  function awardChatXp() {
    const s = FP().state;
    const today = FP().localDay();
    if (!s.chatCount || s.chatCount.date !== today) s.chatCount = { date: today, n: 0 };
    if (s.chatCount.n >= CHAT_XP_PER_DAY) return;
    FP().awardOnce(`chat:${s.chatCount.n}`, 2);
    s.chatCount.n += 1;
    FP().save();
  }

  function send(text) {
    const value = String(text || "").trim();
    if (!chat || !value || chat.busy) return;
    stopMic();
    chat.msgs.push({ role: "user", text: value.slice(0, 500) });
    chat.suggestions = [];
    $("#chatText").value = "";
    awardChatXp();
    requestReply();
  }

  function stopMic() {
    if (micRec) {
      try {
        micRec.stop();
      } catch {
        /* ignore */
      }
    }
    micRec = null;
    $("#chatMic")?.classList.remove("is-rec");
  }

  function toggleMic() {
    if (micRec) {
      stopMic();
      return;
    }
    FP().stopSpeech();
    const input = $("#chatText");
    micRec = FP().startSpeechRec(
      (final, interim) => {
        input.value = `${final} ${interim}`.trim();
      },
      { continuous: false }
    );
    if (!micRec) return;
    $("#chatMic").classList.add("is-rec");
    micRec.addEventListener("end", () => {
      micRec = null;
      $("#chatMic")?.classList.remove("is-rec");
    });
  }

  function updateVoiceBtn() {
    const b = $("#chatVoice");
    if (!b) return;
    b.textContent = voiceOn() ? "🔊" : "🔇";
    b.setAttribute("aria-pressed", String(voiceOn()));
  }

  function bind() {
    $all(".chat-levels [data-level]").forEach((b) =>
      b.addEventListener("click", () => {
        FP().state.aiLevel = b.dataset.level;
        FP().save();
        render();
      })
    );
    $("#chatForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      send($("#chatText").value);
    });
    $("#chatBack")?.addEventListener("click", stop);
    $("#chatRestart")?.addEventListener("click", () => chat && start(chat.scenario));
    $("#chatMic")?.addEventListener("click", toggleMic);
    $("#chatVoice")?.addEventListener("click", () => {
      FP().state.chatVoice = !voiceOn();
      FP().save();
      if (!voiceOn()) FP().stopSpeech();
      updateVoiceBtn();
    });
  }

  window.FP_AIUI = { render, runFeedback };
  document.addEventListener("DOMContentLoaded", bind);
})();
