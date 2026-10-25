/* FluentPath — screens for the account, the weekly league and classes (teacher mode). Data comes from cloud.js. */
window.FP_CLOUD_UI = (() => {
  const C = window.FP_CLOUD;
  const FP = () => window.FP;
  const t = (k) => FP().t(k);
  const fmt = (s, v) => FP().fmt(s, v);
  const esc = (s) => FP().escapeHtml(s);
  const $ = (s, root = document) => root.querySelector(s);
  const $all = (s, root = document) => [...root.querySelectorAll(s)];

  const ERR = {
    network: "cloud_err_network",
    rate_limited: "cloud_err_rate",
    bad_code: "cloud_err_code",
    class_not_found: "cloud_err_class",
    push_denied: "push_err_denied",
    push_unsupported: "push_err_unsupported",
    signed_out: "cloud_err_signed_out",
  };
  const errText = (code) => t(ERR[code] || "cloud_err_server");

  // Assignment kinds: icon and the screen where the student does the work.
  const KINDS = {
    lesson: ["📗", "learn"],
    review: ["🧠", "review"],
    story: ["📖", "stories"],
    reading: ["📰", "reading"],
    listening: ["🎧", "listening"],
    writing: ["✍️", "writing"],
    speaking: ["🎤", "speaking"],
    mock: ["🎓", "mock"],
    unt: ["🇰🇿", "unt"],
    other: ["📌", null],
  };
  const RESEND_WAIT = 60;

  const login = { email: "", step: "email", busy: false, error: null, sentAt: 0 };
  let league = null; // { rows, at, busy, error }
  let classes = null; // { teacher, student, at, busy, error }
  const details = {}; // class id → { members, assignments, subs, mine, busy, error }
  let tab = null; // student | teacher
  let openId = null;
  let pushOn = null;
  let pushBusy = false;
  // A teacher's invite link (?join=CODE) survives the e-mail sign-in round trip.
  let joinCode = (() => {
    const fromUrl = (new URLSearchParams(location.search).get("join") || "").toUpperCase().slice(0, 6);
    try {
      if (fromUrl) sessionStorage.setItem("fp_join", fromUrl);
      return fromUrl || sessionStorage.getItem("fp_join") || "";
    } catch {
      return fromUrl;
    }
  })();
  const setJoinCode = (v) => {
    joinCode = v;
    try {
      if (v) sessionStorage.setItem("fp_join", v);
      else sessionStorage.removeItem("fp_join");
    } catch {
      /* ignore */
    }
  };
  let resendTimer = null;

  const active = (name) => document.getElementById(`view-${name}`)?.classList.contains("active");
  const initial = (name) => esc((String(name || "?").trim()[0] || "?").toUpperCase());
  const myName = () => FP().state.profileName || "";

  function daysAgo(day) {
    if (!day) return "—";
    const n = Math.round((Date.parse(FP().localDay()) - Date.parse(day)) / 864e5);
    if (n <= 0) return t("cl_today");
    if (n === 1) return t("cl_yesterday");
    return fmt(t("cl_days_ago"), { n });
  }

  // 2026-10-27 → 27.10 (browsers often lack Kazakh month names).
  const dueText = (due) => (due ? due.slice(8, 10) + "." + due.slice(5, 7) : "");

  const joinLink = (code) => `${location.origin}${location.pathname}?join=${encodeURIComponent(code)}#class`;

  /* ---------- chrome: entry points appear only when the site has accounts configured ---------- */
  function updateChrome() {
    const on = C.enabled();
    $all(".cloud-only").forEach((el) => el.classList.toggle("hidden", !on));
    const btn = $("#accountBtn");
    if (btn) {
      const u = C.user();
      btn.classList.toggle("is-in", !!u);
      btn.innerHTML = u ? `<span class="avatar avatar-xs">${initial(myName())}</span>` : "👤";
      btn.setAttribute("aria-label", t(u ? "nav_account" : "auth_title"));
      btn.title = t(u ? "nav_account" : "auth_title");
    }
  }

  function refresh() {
    updateChrome();
    ["account", "league", "class"].forEach((v) => active(v) && render(v));
  }

  function render(name) {
    updateChrome();
    if (name === "account") renderAccount();
    if (name === "league") renderLeague();
    if (name === "class") renderClass();
  }

  const offCard = () => `<div class="cloud-card glass cloud-off"><span class="cloud-off-ico">☁️</span><p>${esc(t("cloud_off"))}</p></div>`;

  const signInCta = (textKey) => `<div class="cloud-card glass cta-card">
      <span class="cta-ico">🔐</span>
      <p>${esc(t(textKey))}</p>
      <button type="button" class="btn-3d" data-nav="account">${esc(t("auth_title"))}</button>
    </div>`;

  /* =====================================================================
     Account
     ===================================================================== */
  function renderAccount() {
    const host = $("#accountMain");
    if (!host) return;
    if (!C.enabled()) {
      host.innerHTML = offCard();
      return;
    }
    const u = C.user();
    host.innerHTML = u ? accountIn(u) : accountOut();
    bindAccount(host);
    if (u && pushOn === null && C.pushSupported()) {
      C.currentPush()
        .then((sub) => {
          pushOn = !!sub;
          if (active("account")) renderAccount();
        })
        .catch(() => (pushOn = false));
    }
  }

  function accountOut() {
    const L = login;
    const err = L.error ? `<p class="form-err" role="alert">${esc(errText(L.error))}</p>` : "";
    const linkErr = C.linkError() ? `<p class="form-err" role="alert">${esc(t("cloud_err_link"))}</p>` : "";
    const wait = Math.max(0, RESEND_WAIT - Math.floor((Date.now() - L.sentAt) / 1000));
    const body =
      L.step === "code"
        ? `<p class="auth-sent">${esc(fmt(t("auth_sent"), { email: L.email }))}</p>
          <form class="auth-form" id="authCodeForm" novalidate>
            <input type="text" id="authCode" class="code-input" inputmode="numeric" autocomplete="one-time-code" maxlength="10" placeholder="••••••" aria-label="${esc(
              t("auth_code")
            )}" />
            <button type="submit" class="btn-3d btn-3d-block" ${L.busy ? "disabled" : ""}>${esc(L.busy ? t("auth_checking") : t("auth_verify"))}</button>
          </form>
          ${err}
          <p class="muted small">${esc(t("auth_or_link"))}</p>
          <div class="auth-links">
            <button type="button" class="link-btn" id="authResend" ${wait ? "disabled" : ""}>${esc(
              wait ? fmt(t("auth_resend_in"), { n: wait }) : t("auth_resend")
            )}</button>
            <button type="button" class="link-btn" id="authChange">${esc(t("auth_change"))}</button>
          </div>`
        : `<form class="auth-form" id="authEmailForm" novalidate>
            <label for="authEmail" class="muted small">${esc(t("auth_email"))}</label>
            <input type="email" id="authEmail" autocomplete="email" inputmode="email" placeholder="name@mail.kz" value="${esc(L.email)}" />
            <button type="submit" class="btn-3d btn-3d-block" ${L.busy ? "disabled" : ""}>${esc(L.busy ? t("auth_sending") : t("auth_send"))}</button>
          </form>
          ${err}${linkErr}
          <p class="muted small">${esc(t("auth_no_password"))}</p>`;
    return `<div class="cloud-card glass auth-card">
        <div class="auth-ico">☁️</div>
        <h2>${esc(t("auth_title"))}</h2>
        <ul class="auth-perks">
          <li>🔄 ${esc(t("auth_perk_sync"))}</li>
          <li>🏆 ${esc(t("auth_perk_league"))}</li>
          <li>👥 ${esc(t("auth_perk_class"))}</li>
        </ul>
        ${body}
      </div>`;
  }

  function syncLine() {
    const s = C.status();
    if (s.state === "syncing") return `<p class="sync-line is-busy"><span class="spinner"></span>${esc(t("acc_syncing"))}</p>`;
    if (s.state === "error") return `<p class="sync-line is-bad">⚠ ${esc(errText(s.error))}</p>`;
    if (!s.at) return `<p class="sync-line">—</p>`;
    const time = new Date(s.at).toLocaleTimeString(FP().locale(), { hour: "2-digit", minute: "2-digit" });
    return `<p class="sync-line is-ok">✓ ${esc(fmt(t("acc_synced_at"), { time }))}</p>`;
  }

  function pushBlock() {
    if (!C.pushSupported()) {
      const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.navigator.standalone;
      return `<p class="muted small">${esc(t(ios ? "push_ios" : "push_err_unsupported"))}</p>`;
    }
    const denied = window.Notification && Notification.permission === "denied";
    if (denied && !pushOn) return `<p class="muted small">${esc(t("push_err_denied"))}</p>`;
    return `<button type="button" class="btn ${pushOn ? "btn-ghost" : "btn-secondary"} btn-sm" id="pushToggle" ${
      pushBusy || pushOn === null ? "disabled" : ""
    }>${esc(pushOn ? t("push_off") : t("push_on"))}</button>`;
  }

  function accountIn(u) {
    const name = myName();
    return `<div class="account-grid">
        <div class="cloud-card glass profile-card">
          <div class="profile-top">
            <span class="avatar">${initial(name)}</span>
            <div class="profile-id"><strong>${esc(name || "—")}</strong><span class="muted small">${esc(u.email)}</span></div>
          </div>
          <form class="name-form" id="nameForm">
            <label for="nameInput" class="muted small">${esc(t("acc_name"))}</label>
            <div class="name-row">
              <input type="text" id="nameInput" maxlength="40" autocomplete="nickname" value="${esc(name)}" />
              <button type="submit" class="btn btn-secondary btn-sm">${esc(t("ai_key_save"))}</button>
            </div>
          </form>
          <p class="muted small">${esc(t("acc_name_hint"))}</p>
        </div>

        <div class="cloud-card glass">
          <h3>🔄 ${esc(t("acc_sync"))}</h3>
          ${syncLine()}
          <p class="muted small">${esc(t("acc_sync_hint"))}</p>
          <button type="button" class="btn btn-ghost btn-sm" id="syncNow" ${C.status().state === "syncing" ? "disabled" : ""}>↻ ${esc(
            t("acc_sync_now")
          )}</button>
        </div>

        <div class="cloud-card glass">
          <h3>🔔 ${esc(t("push_title"))}</h3>
          <p class="muted small">${esc(t("push_sub"))}</p>
          ${pushBlock()}
        </div>

        <div class="account-tiles">
          <button type="button" class="pc-card" data-nav="league" style="--c:#fbbf24">
            <span class="pc-ico">🏆</span><strong>${esc(t("nav_league"))}</strong><span class="pc-desc">${esc(t("lg_sub"))}</span>
          </button>
          <button type="button" class="pc-card" data-nav="class" style="--c:#34d399">
            <span class="pc-ico">👥</span><strong>${esc(t("nav_class"))}</strong><span class="pc-desc">${esc(t("cl_sub"))}</span>
          </button>
        </div>

        <button type="button" class="btn btn-ghost btn-sm sign-out" id="signOut">${esc(t("acc_signout"))}</button>
      </div>`;
  }

  function tickResend() {
    clearInterval(resendTimer);
    resendTimer = setInterval(() => {
      const b = $("#authResend");
      if (!b || login.step !== "code") {
        clearInterval(resendTimer);
        return;
      }
      const wait = Math.max(0, RESEND_WAIT - Math.floor((Date.now() - login.sentAt) / 1000));
      b.disabled = wait > 0;
      b.textContent = wait ? fmt(t("auth_resend_in"), { n: wait }) : t("auth_resend");
      if (!wait) clearInterval(resendTimer);
    }, 1000);
  }

  async function send(email) {
    login.email = email;
    login.busy = true;
    login.error = null;
    C.clearLinkError();
    renderAccount();
    try {
      await C.sendCode(email);
      login.step = "code";
      login.sentAt = Date.now();
      tickResend();
    } catch (e) {
      login.error = e.code;
    }
    login.busy = false;
    renderAccount();
    $("#authCode")?.focus();
  }

  function bindAccount(host) {
    $("#authEmailForm", host)?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = $("#authEmail", host).value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        login.error = null;
        login.email = email;
        renderAccount();
        const msg = document.createElement("p");
        msg.className = "form-err";
        msg.textContent = t("auth_bad_email");
        $("#authEmailForm").after(msg);
        $("#authEmail").focus();
        return;
      }
      send(email);
    });
    $("#authCodeForm", host)?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const code = $("#authCode", host).value.replace(/\s/g, "");
      if (code.length < 6) {
        $("#authCode", host).focus();
        return;
      }
      login.busy = true;
      login.error = null;
      renderAccount();
      try {
        await C.verifyCode(login.email, code);
        Object.assign(login, { step: "email", busy: false, error: null });
        classes = null;
        league = null;
      } catch (err) {
        login.busy = false;
        login.error = err.code;
      }
      renderAccount();
    });
    $("#authResend", host)?.addEventListener("click", () => send(login.email));
    $("#authChange", host)?.addEventListener("click", () => {
      Object.assign(login, { step: "email", error: null });
      renderAccount();
      $("#authEmail")?.focus();
    });
    if (login.step === "code" && !login.busy) tickResend();

    $("#nameForm", host)?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const v = $("#nameInput", host).value.trim();
      if (!v) return;
      try {
        await C.setName(v);
        FP().toast(t("acc_name_saved"));
      } catch (err) {
        FP().toast(errText(err.code));
      }
      league = null;
      renderAccount();
    });
    $("#syncNow", host)?.addEventListener("click", () => C.sync());
    $("#pushToggle", host)?.addEventListener("click", async () => {
      pushBusy = true;
      renderAccount();
      try {
        if (pushOn) {
          await C.disablePush();
          pushOn = false;
          FP().toast(t("push_off_done"));
        } else {
          saveLang();
          await C.enablePush();
          pushOn = true;
          FP().toast(t("push_on_done"));
        }
      } catch (err) {
        FP().toast(errText(err.code));
      }
      pushBusy = false;
      renderAccount();
    });
    $("#signOut", host)?.addEventListener("click", async () => {
      const ok = await FP().confirm(t("acc_signout_q"), { yes: t("acc_signout") });
      if (!ok) return;
      await C.signOut();
      classes = null;
      league = null;
      pushOn = null;
      renderAccount();
      FP().toast(t("acc_signed_out"));
    });
  }

  /* =====================================================================
     Weekly league
     ===================================================================== */
  function daysLeft() {
    return 7 - ((new Date().getDay() + 6) % 7);
  }

  async function loadLeague() {
    league = { ...(league || {}), busy: true, error: null };
    try {
      await C.sync();
      league = { rows: await C.leaderboard(), at: Date.now(), busy: false, error: null };
    } catch (e) {
      league = { ...(league || {}), busy: false, error: e.code, at: Date.now() };
    }
    if (active("league")) renderLeague();
  }

  function renderLeague() {
    const host = $("#leagueMain");
    if (!host) return;
    const mine = C.weekXp();
    const head = `<div class="league-head glass">
        <div><span class="muted small">${esc(t("lg_week"))}</span><strong>${esc(fmt(t("lg_days_left"), { n: daysLeft() }))}</strong></div>
        <div class="lg-mine"><span>⚡ ${mine}</span><em>${esc(FP().xp(mine).replace(/^\S+\s/, ""))}</em></div>
      </div>`;
    if (!C.enabled()) {
      host.innerHTML = head + offCard();
      return;
    }
    const u = C.user();
    if (!u) {
      host.innerHTML = head + signInCta("lg_signin");
      return;
    }
    if (!league || (!league.busy && Date.now() - league.at > 30000)) {
      loadLeague();
    }
    const L = league || {};
    let body;
    if (!L.rows && L.busy) body = `<div class="ai-loading"><span class="spinner"></span>${esc(t("cloud_loading"))}</div>`;
    else if (!L.rows && L.error) body = `<p class="form-err">${esc(errText(L.error))}</p>`;
    else if (!L.rows || !L.rows.length) body = `<div class="cloud-card glass empty-card"><span>🌱</span><p>${esc(t("lg_empty"))}</p></div>`;
    else {
      const medals = ["🥇", "🥈", "🥉"];
      const inList = L.rows.some((r) => r.id === u.id);
      body = `<ol class="league-list">${L.rows
        .map((r, i) => {
          const me = r.id === u.id;
          return `<li class="lg-row${me ? " is-me" : ""}${i < 3 ? ` top${i + 1}` : ""}">
            <span class="lg-rank">${medals[i] || i + 1}</span>
            <span class="avatar avatar-sm">${initial(r.name)}</span>
            <span class="lg-name">${esc(r.name)}${me ? ` <em>· ${esc(t("lg_you"))}</em>` : ""}</span>
            <span class="lg-streak">🔥 ${r.streak || 0}</span>
            <strong class="lg-xp">${esc(FP().xp(r.week_xp))}</strong>
          </li>`;
        })
        .join("")}</ol>${
        inList
          ? ""
          : `<div class="lg-row is-me lg-out"><span class="lg-rank">—</span><span class="avatar avatar-sm">${initial(
              myName()
            )}</span><span class="lg-name">${esc(myName())} <em>· ${esc(t("lg_you"))}</em></span><strong class="lg-xp">${esc(FP().xp(mine))}</strong></div>
            <p class="muted small center">${esc(t("lg_join_hint"))}</p>`
      }`;
    }
    host.innerHTML = `${head}${body}
      <div class="lg-foot">
        <button type="button" class="btn btn-ghost btn-sm" id="lgRefresh" ${L.busy ? "disabled" : ""}>↻ ${esc(t("cloud_refresh"))}</button>
        <span class="muted small">${esc(t("lg_rule"))}</span>
      </div>`;
    $("#lgRefresh", host)?.addEventListener("click", loadLeague);
  }

  /* =====================================================================
     Classes: students join with a code, teachers see progress and set work
     ===================================================================== */
  async function loadClasses() {
    classes = { ...(classes || {}), busy: true, error: null };
    try {
      const [teacher, student] = await Promise.all([C.teacherClasses(), C.studentClasses()]);
      classes = { teacher: teacher || [], student: student || [], at: Date.now(), busy: false, error: null };
      if (!tab) tab = classes.teacher.length && !classes.student.length && !joinCode ? "teacher" : "student";
      if (openId && !classes.teacher.some((c) => c.id === openId)) openId = null;
    } catch (e) {
      classes = { ...(classes || {}), busy: false, error: e.code, at: Date.now() };
    }
    if (active("class")) renderClass();
  }

  async function loadDetail(c, role) {
    details[c.id] = { ...(details[c.id] || {}), busy: true, error: null };
    try {
      const assignments = (await C.assignments(c.id)) || [];
      if (role === "teacher") {
        const [members, subs] = await Promise.all([C.classMembers(c.id), C.classSubmissions(assignments.map((a) => a.id))]);
        details[c.id] = { members, assignments, subs, at: Date.now(), busy: false };
      } else {
        details[c.id] = { assignments, mine: await C.mySubmissions(), at: Date.now(), busy: false };
      }
    } catch (e) {
      details[c.id] = { ...(details[c.id] || {}), busy: false, error: e.code, at: Date.now() };
    }
    if (active("class")) renderClass();
  }

  const needLoad = (d) => !d || (!d.busy && Date.now() - (d.at || 0) > 30000);

  function renderClass() {
    const host = $("#classMain");
    if (!host) return;
    if (!C.enabled()) {
      host.innerHTML = offCard();
      return;
    }
    if (!C.user()) {
      host.innerHTML = signInCta("cl_signin");
      return;
    }
    if (needLoad(classes)) loadClasses();
    const tabs = `<div class="seg" role="tablist">
        <button type="button" role="tab" class="seg-btn${tab !== "teacher" ? " active" : ""}" data-tab="student" aria-selected="${tab !== "teacher"}">🎒 ${esc(
          t("cl_tab_student")
        )}</button>
        <button type="button" role="tab" class="seg-btn${tab === "teacher" ? " active" : ""}" data-tab="teacher" aria-selected="${tab === "teacher"}">🧑‍🏫 ${esc(
          t("cl_tab_teacher")
        )}</button>
      </div>`;
    let body;
    if (!classes || (!classes.teacher && classes.busy)) body = `<div class="ai-loading"><span class="spinner"></span>${esc(t("cloud_loading"))}</div>`;
    else if (!classes.teacher && classes.error) body = `<p class="form-err">${esc(errText(classes.error))}</p>`;
    else body = tab === "teacher" ? teacherBody() : studentBody();
    host.innerHTML = tabs + body;
    bindClass(host);
  }

  /* ----- student ----- */
  function studentBody() {
    const list = classes.student || [];
    const form = `<form class="cloud-card glass join-card" id="joinForm">
        <h3>🔑 ${esc(t("cl_join"))}</h3>
        <p class="muted small">${esc(t("cl_join_hint"))}</p>
        <div class="name-row">
          <input type="text" id="joinCode" class="code-input" maxlength="6" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="ABC123" value="${esc(
            joinCode
          )}" aria-label="${esc(t("cl_code"))}" />
          <button type="submit" class="btn-3d btn-3d-sm">${esc(t("cl_join_btn"))}</button>
        </div>
      </form>`;
    if (!list.length) return form + `<div class="cloud-card glass empty-card"><span>🎒</span><p>${esc(t("cl_none_student"))}</p></div>`;
    return (
      form +
      list
        .map((c) => {
          const d = details[c.id];
          if (needLoad(d)) loadDetail(c, "student");
          let tasks = `<div class="ai-loading"><span class="spinner"></span>${esc(t("cloud_loading"))}</div>`;
          if (d && d.assignments) {
            tasks = d.assignments.length
              ? `<ul class="task-list">${d.assignments.map((a) => studentTask(a, d.mine)).join("")}</ul>`
              : `<p class="muted small">${esc(t("cl_no_tasks"))}</p>`;
          } else if (d && d.error) tasks = `<p class="form-err">${esc(errText(d.error))}</p>`;
          const done = d && d.assignments ? d.assignments.filter((a) => d.mine.has(a.id)).length : 0;
          return `<section class="cloud-card glass class-card">
            <div class="class-top">
              <div><h3>👥 ${esc(c.name)}</h3><span class="muted small">${esc(fmt(t("cl_teacher"), { name: (c.profiles && c.profiles.name) || "—" }))}</span></div>
              ${d && d.assignments && d.assignments.length ? `<span class="pill soft">${done} / ${d.assignments.length}</span>` : ""}
            </div>
            ${tasks}
            <button type="button" class="link-btn danger" data-leave="${c.id}">${esc(t("cl_leave"))}</button>
          </section>`;
        })
        .join("")
    );
  }

  function studentTask(a, mine) {
    const [ico, view] = KINDS[a.kind] || KINDS.other;
    const done = mine.has(a.id);
    const late = !done && a.due && a.due < FP().localDay();
    return `<li class="task${done ? " is-done" : ""}${late ? " is-late" : ""}">
      <label class="task-check"><input type="checkbox" data-done="${a.id}" ${done ? "checked" : ""} /><span aria-hidden="true"></span></label>
      <span class="task-ico">${ico}</span>
      <div class="task-body"><strong>${esc(a.title)}</strong><span class="muted small">${esc(t(`kind_${a.kind}`) || a.kind)}${
        a.due ? ` · ${esc(fmt(t("cl_due"), { d: dueText(a.due) }))}` : ""
      }</span></div>
      ${view && !done ? `<button type="button" class="btn btn-secondary btn-sm" data-nav="${view}">${esc(t("cl_do"))}</button>` : ""}
    </li>`;
  }

  /* ----- teacher ----- */
  function teacherBody() {
    const list = classes.teacher || [];
    const form = `<form class="cloud-card glass" id="newClassForm">
        <h3>➕ ${esc(t("cl_new"))}</h3>
        <div class="name-row">
          <input type="text" id="newClassName" maxlength="60" placeholder="${esc(t("cl_new_ph"))}" aria-label="${esc(t("cl_new"))}" />
          <button type="submit" class="btn-3d btn-3d-sm">${esc(t("cl_create"))}</button>
        </div>
      </form>`;
    if (!list.length) return form + `<div class="cloud-card glass empty-card"><span>🧑‍🏫</span><p>${esc(t("cl_none_teacher"))}</p></div>`;
    if (!openId || !list.some((c) => c.id === openId)) openId = list[0].id;
    const chips = `<div class="class-chips">${list
      .map((c) => `<button type="button" class="chip-btn${c.id === openId ? " active" : ""}" data-open="${c.id}">${esc(c.name)}</button>`)
      .join("")}</div>`;
    const c = list.find((x) => x.id === openId);
    return form + chips + teacherClass(c);
  }

  function teacherClass(c) {
    const d = details[c.id];
    if (needLoad(d)) loadDetail(c, "teacher");
    const codeCard = `<div class="cloud-card glass code-card">
        <div><span class="muted small">${esc(t("cl_code"))}</span><strong class="class-code">${esc(c.code)}</strong></div>
        <p class="muted small">${esc(t("cl_code_hint"))}</p>
        <div class="code-actions">
          <button type="button" class="btn btn-secondary btn-sm" data-copy="${esc(joinLink(c.code))}">🔗 ${esc(t("cl_copy_link"))}</button>
          <button type="button" class="link-btn danger" data-delclass="${c.id}">${esc(t("cl_delete"))}</button>
        </div>
      </div>`;
    if (!d || (!d.members && d.busy)) return codeCard + `<div class="ai-loading"><span class="spinner"></span>${esc(t("cloud_loading"))}</div>`;
    if (!d.members && d.error) return codeCard + `<p class="form-err">${esc(errText(d.error))}</p>`;

    const total = d.assignments.length;
    const doneBy = {};
    const doneFor = {};
    d.subs.forEach((s) => {
      doneBy[s.user_id] = (doneBy[s.user_id] || 0) + 1;
      doneFor[s.assignment_id] = (doneFor[s.assignment_id] || 0) + 1;
    });
    const members = [...d.members].sort((a, b) => b.week_xp - a.week_xp || b.xp - a.xp);
    const today = FP().localDay();
    const table = members.length
      ? `<div class="table-wrap glass"><table class="data-table class-table">
          <thead><tr><th>${esc(t("cl_student"))}</th><th>⚡ ${esc(t("cl_week"))}</th><th>🔥</th><th>${esc(t("cl_last"))}</th><th>${esc(
            t("cl_lessons")
          )}</th><th>${esc(t("cl_words"))}</th>${total ? `<th>✓ ${esc(t("cl_tasks"))}</th>` : ""}</tr></thead>
          <tbody>${members
            .map(
              (m) => `<tr class="${m.last_active === today ? "is-today" : ""}">
                <td><span class="avatar avatar-xs">${initial(m.name)}</span> ${esc(m.name)}</td>
                <td><strong>${m.week_xp}</strong></td>
                <td>${m.streak}</td>
                <td>${esc(daysAgo(m.last_active))}</td>
                <td>${m.lessons_done}</td>
                <td>${m.words}</td>
                ${total ? `<td>${doneBy[m.id] || 0} / ${total}</td>` : ""}
              </tr>`
            )
            .join("")}</tbody>
        </table></div>`
      : `<div class="cloud-card glass empty-card"><span>📭</span><p>${esc(t("cl_no_students"))}</p></div>`;

    const kinds = Object.keys(KINDS)
      .map((k) => `<option value="${k}">${KINDS[k][0]} ${esc(t(`kind_${k}`))}</option>`)
      .join("");
    const tasks = `<section class="cloud-card glass">
        <h3>📋 ${esc(t("cl_assignments"))}</h3>
        ${
          total
            ? `<ul class="task-list">${d.assignments
                .map((a) => {
                  const [ico] = KINDS[a.kind] || KINDS.other;
                  return `<li class="task">
                    <span class="task-ico">${ico}</span>
                    <div class="task-body"><strong>${esc(a.title)}</strong><span class="muted small">${esc(t(`kind_${a.kind}`) || a.kind)}${
                      a.due ? ` · ${esc(fmt(t("cl_due"), { d: dueText(a.due) }))}` : ""
                    }</span></div>
                    <span class="pill soft" title="${esc(t("cl_done_by"))}">${doneFor[a.id] || 0} / ${members.length}</span>
                    <button type="button" class="icon-btn" data-deltask="${a.id}" aria-label="${esc(t("cl_delete"))}">🗑</button>
                  </li>`;
                })
                .join("")}</ul>`
            : `<p class="muted small">${esc(t("cl_no_tasks"))}</p>`
        }
        <form class="task-form" id="taskForm">
          <input type="text" id="taskTitle" maxlength="120" placeholder="${esc(t("cl_task_ph"))}" aria-label="${esc(t("cl_task_ph"))}" />
          <select id="taskKind" aria-label="${esc(t("cl_task_kind"))}">${kinds}</select>
          <input type="date" id="taskDue" min="${today}" aria-label="${esc(t("cl_task_due"))}" />
          <button type="submit" class="btn-3d btn-3d-sm">${esc(t("cl_task_add"))}</button>
        </form>
      </section>`;

    return `${codeCard}
      <div class="class-sec-head"><h3>🎒 ${esc(fmt(t("cl_students_n"), { n: members.length }))}</h3>
        <button type="button" class="btn btn-ghost btn-sm" data-reload="${c.id}">↻ ${esc(t("cloud_refresh"))}</button></div>
      ${table}
      ${tasks}`;
  }

  async function act(fn, okKey) {
    try {
      const out = await fn();
      if (okKey) FP().toast(t(okKey));
      return out;
    } catch (e) {
      FP().toast(errText(e.code));
      return undefined;
    }
  }

  function bindClass(host) {
    $all("[data-tab]", host).forEach((b) =>
      b.addEventListener("click", () => {
        tab = b.dataset.tab;
        renderClass();
      })
    );
    $("#joinForm", host)?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const code = $("#joinCode", host).value.trim().toUpperCase();
      if (code.length < 4) return;
      const c = await act(() => C.joinClass(code));
      if (!c) return;
      setJoinCode("");
      FP().toast(fmt(t("cl_joined"), { name: c.name }));
      classes = null;
      loadClasses();
    });
    $("#joinCode", host)?.addEventListener("input", (e) => setJoinCode(e.target.value.toUpperCase()));
    $all("[data-done]", host).forEach((box) =>
      box.addEventListener("change", async () => {
        const id = box.dataset.done;
        const c = (classes.student || []).find((x) => details[x.id]?.assignments?.some((a) => a.id === id));
        const ok = await act(() => C.markDone(id, box.checked).then(() => true));
        if (ok && c) {
          if (box.checked) {
            details[c.id].mine.add(id);
            FP().sfx("ok");
          } else details[c.id].mine.delete(id);
        } else box.checked = !box.checked;
        renderClass();
      })
    );
    $all("[data-leave]", host).forEach((b) =>
      b.addEventListener("click", async () => {
        if (!(await FP().confirm(t("cl_leave_q"), { yes: t("cl_leave"), danger: true }))) return;
        await act(() => C.leaveClass(b.dataset.leave));
        delete details[b.dataset.leave];
        classes = null;
        loadClasses();
      })
    );

    $("#newClassForm", host)?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = $("#newClassName", host).value.trim();
      if (!name) {
        $("#newClassName", host).focus();
        return;
      }
      const c = await act(() => C.createClass(name), "cl_created");
      if (!c) return;
      openId = c.id;
      classes = null;
      loadClasses();
    });
    $all("[data-open]", host).forEach((b) =>
      b.addEventListener("click", () => {
        openId = b.dataset.open;
        renderClass();
      })
    );
    $all("[data-reload]", host).forEach((b) =>
      b.addEventListener("click", () => {
        delete details[b.dataset.reload];
        renderClass();
      })
    );
    $all("[data-copy]", host).forEach((b) =>
      b.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(b.dataset.copy);
          FP().toast(t("cl_copied"));
        } catch {
          FP().toast(b.dataset.copy);
        }
      })
    );
    $all("[data-delclass]", host).forEach((b) =>
      b.addEventListener("click", async () => {
        if (!(await FP().confirm(t("cl_delete_q"), { yes: t("cl_delete"), danger: true }))) return;
        await act(() => C.deleteClass(b.dataset.delclass), "cl_deleted");
        delete details[b.dataset.delclass];
        openId = null;
        classes = null;
        loadClasses();
      })
    );
    $("#taskForm", host)?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = $("#taskTitle", host).value.trim();
      if (!title) {
        $("#taskTitle", host).focus();
        return;
      }
      const ok = await act(
        () => C.addAssignment(openId, { title, kind: $("#taskKind", host).value, due: $("#taskDue", host).value || null }),
        "cl_task_added"
      );
      if (ok === undefined) return;
      delete details[openId];
      renderClass();
    });
    $all("[data-deltask]", host).forEach((b) =>
      b.addEventListener("click", async () => {
        if (!(await FP().confirm(t("cl_deltask_q"), { yes: t("cl_delete"), danger: true }))) return;
        await act(() => C.deleteAssignment(b.dataset.deltask));
        delete details[openId];
        renderClass();
      })
    );
  }

  /* ---------- start ---------- */
  // The service worker shows reminder text in the interface language.
  function saveLang() {
    if (!("caches" in window)) return;
    caches
      .open("fluentpath-meta")
      .then((c) => c.put("lang", new Response(FP().state.lang || "kk")))
      .catch(() => {});
  }

  function init() {
    C.onChange(refresh);
    $("#langSelect")?.addEventListener("change", () => setTimeout(() => {
      saveLang();
      refresh();
    }));
    if (location.search.includes("join=")) {
      tab = "student";
      try {
        history.replaceState({ view: "class" }, "", `${location.pathname}#class`);
      } catch {
        /* ignore */
      }
      FP().showView("class", { push: false });
    } else if (joinCode) tab = "student";
    updateChrome();
    C.init().then(() => C.enabled() && saveLang());
  }

  return { init, render };
})();
