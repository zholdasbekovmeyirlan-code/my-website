/* FluentPath — accounts and cloud sync on Supabase (REST, no SDK): email code sign-in, progress merge across
   devices, weekly leaderboard, classes and push subscriptions. Everything stays hidden until the site has a
   Supabase project configured (see netlify/functions/config.js). */
window.FP_CLOUD = (() => {
  const FP = () => window.FP;
  const AUTH_KEY = "fluentpath_auth";
  const SYNC_KEY = "fluentpath_sync";
  // Magic-link sign-in lands with tokens in the hash; read it before the router rewrites the URL.
  const landingHash = location.hash;

  const read = (k) => {
    try {
      return JSON.parse(localStorage.getItem(k) || "null");
    } catch {
      return null;
    }
  };
  const write = (k, v) => {
    try {
      if (v == null) localStorage.removeItem(k);
      else localStorage.setItem(k, JSON.stringify(v));
    } catch {
      /* storage blocked */
    }
  };

  let cfg = null;
  let cfgPromise = null;
  let started = false;
  let linkError = false;
  let session = read(AUTH_KEY);
  let meta = read(SYNC_KEY) || {};
  let status = { state: "idle", at: meta.at || 0, error: null };
  let pushT = null;
  let syncing = null;
  const listeners = new Set();

  class CloudError extends Error {
    constructor(code, status) {
      super(code);
      this.code = code;
      this.status = status;
    }
  }

  function config() {
    if (cfg) return Promise.resolve(cfg);
    if (!cfgPromise) {
      cfgPromise = fetch("/.netlify/functions/config")
        .then((r) => (r.ok && (r.headers.get("content-type") || "").includes("json") ? r.json() : {}))
        .then((c) => (cfg = c || {}))
        .catch(() => {
          cfgPromise = null; // offline: try again when the connection is back
          return {};
        });
    }
    return cfgPromise;
  }

  const enabled = () => !!(cfg && cfg.supabaseUrl && cfg.supabaseKey);
  const user = () => (session && session.user) || null;
  const emit = () => listeners.forEach((fn) => fn());

  function setStatus(state, error = null) {
    status = { state, at: state === "ok" ? Date.now() : status.at, error };
    emit();
  }

  function mapError(httpStatus, msg) {
    if (httpStatus === 429) return "rate_limited";
    if (/class_not_found/.test(msg)) return "class_not_found";
    if (httpStatus === 401 || httpStatus === 403) return /otp|token|expired|invalid/i.test(msg) ? "bad_code" : "signed_out";
    if (httpStatus >= 400 && httpStatus < 500 && /otp|token|expired|invalid/i.test(msg)) return "bad_code";
    return "server";
  }

  async function request(path, { method = "GET", body, auth = true, prefer } = {}) {
    const headers = { apikey: cfg.supabaseKey, "Content-Type": "application/json" };
    if (auth) {
      const tok = await token();
      if (!tok) throw new CloudError("signed_out");
      headers.Authorization = `Bearer ${tok}`;
    }
    if (prefer) headers.Prefer = prefer;
    let res;
    try {
      res = await fetch(cfg.supabaseUrl.replace(/\/$/, "") + path, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
      });
    } catch {
      throw new CloudError("network");
    }
    const text = await res.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = null;
    }
    if (!res.ok) {
      const msg = (data && (data.msg || data.message || data.error_description || data.error_code || data.error)) || "";
      throw new CloudError(mapError(res.status, String(msg)), res.status);
    }
    return data;
  }

  /* ---------- auth ---------- */
  function decodeJwt(tok) {
    try {
      const part = tok.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(decodeURIComponent(escape(atob(part))));
    } catch {
      return {};
    }
  }

  function setSession(d) {
    const claims = decodeJwt(d.access_token);
    const u = d.user || { id: claims.sub, email: claims.email };
    session = {
      access_token: d.access_token,
      refresh_token: d.refresh_token,
      expires_at: d.expires_at ? d.expires_at * 1000 : Date.now() + (Number(d.expires_in) || 3600) * 1000,
      user: { id: u.id, email: u.email || "" },
    };
    write(AUTH_KEY, session);
  }

  async function token() {
    if (!session) return null;
    if (Date.now() < session.expires_at - 60000) return session.access_token;
    try {
      const d = await request("/auth/v1/token?grant_type=refresh_token", {
        method: "POST",
        auth: false,
        body: { refresh_token: session.refresh_token },
      });
      setSession(d);
      return session.access_token;
    } catch (e) {
      if (e.code !== "network") signOutLocal();
      return null;
    }
  }

  async function sendCode(email) {
    await config();
    const back = `${location.origin}${location.pathname}`;
    await request(`/auth/v1/otp?redirect_to=${encodeURIComponent(back)}`, {
      method: "POST",
      auth: false,
      body: { email: String(email).trim(), create_user: true },
    });
  }

  async function verifyCode(email, code) {
    const d = await request("/auth/v1/verify", {
      method: "POST",
      auth: false,
      body: { type: "email", email: String(email).trim(), token: String(code).replace(/\s/g, "") },
    });
    setSession(d);
    await afterLogin();
  }

  function signOutLocal() {
    session = null;
    write(AUTH_KEY, null);
    setStatus("idle");
  }

  async function signOut() {
    try {
      await request("/auth/v1/logout", { method: "POST" });
    } catch {
      /* the local sign-out is what matters */
    }
    signOutLocal();
    emit();
  }

  function takeRedirect() {
    if (!/access_token=/.test(landingHash)) return false;
    const p = new URLSearchParams(landingHash.slice(1));
    if (!p.get("refresh_token")) return false;
    setSession({ access_token: p.get("access_token"), refresh_token: p.get("refresh_token"), expires_in: p.get("expires_in") });
    try {
      history.replaceState({ view: "account" }, "", `${location.pathname}#account`);
    } catch {
      /* ignore */
    }
    return true;
  }

  /* ---------- profile & progress ---------- */
  function mondayKey(d = new Date()) {
    return FP().localDay(window.FP_QUESTS ? window.FP_QUESTS.weekStart(d) : d);
  }

  function weekXp(st) {
    const start = window.FP_QUESTS ? window.FP_QUESTS.weekStart() : new Date();
    let xp = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      xp += (st.xpLog || {})[FP().localDay(d)] || 0;
    }
    return xp;
  }

  function profileRow(st) {
    return {
      id: user().id,
      name: (st.profileName || defaultName()).slice(0, 40),
      xp: st.xp || 0,
      week_xp: weekXp(st),
      week_start: mondayKey(),
      streak: st.streak || 0,
      last_active: st.lastActive || null,
      lessons_done: st.lessonsDone || 0,
      words: Object.keys(st.srs || {}).length,
      updated_at: new Date().toISOString(),
    };
  }

  // Never derive the public name from the e-mail address.
  const defaultName = () => `${FP().t("cloud_default_name")} ${((user() && user().id) || "").slice(0, 4).toUpperCase()}`.trim();

  async function ensureName() {
    const st = FP().state;
    if (st.profileName) return;
    const rows = await request(`/rest/v1/profiles?id=eq.${user().id}&select=name`);
    st.profileName = (rows && rows[0] && rows[0].name) || defaultName();
  }

  // Combine two saves so progress from either device is never lost.
  function merge(a, b) {
    const out = { ...a };
    const maxNum = (k) => (out[k] = Math.max(a[k] || 0, b[k] || 0));
    ["xp", "bestStreak", "lessonsDone", "perfectLessons", "freezes"].forEach(maxNum);
    if ((b.lastActive || "") > (a.lastActive || "")) {
      out.lastActive = b.lastActive;
      out.streak = b.streak;
    }
    const perKey = (k, pickFn) => {
      const x = a[k] || {};
      const y = b[k] || {};
      const r = { ...x };
      Object.keys(y).forEach((id) => (r[id] = id in x ? pickFn(x[id], y[id]) : y[id]));
      out[k] = r;
    };
    perKey("xpLog", (x, y) => Math.max(x, y));
    perKey("srs", (x, y) => ((y.last || 0) > (x.last || 0) ? y : x));
    perKey("path", (x, y) => ({ ...x, ...y, done: x.done || y.done, stars: Math.max(x.stars || 0, y.stars || 0), acc: Math.max(x.acc || 0, y.acc || 0) }));
    perKey("known", (x, y) => x || y);
    perKey("learning", (x, y) => x || y);
    perKey("lessonDone", (x, y) => x || y);
    perKey("drafts", (x, y) => (String(y).length > String(x).length ? y : x));
    perKey("storiesDone", (x, y) => Math.max(x, y));
    perKey("readDone", (x, y) => Math.max(x, y));
    perKey("writeBands", (x, y) => Math.max(x, y));
    perKey("speakBands", (x, y) => Math.max(x, y));
    Object.keys(out.known || {}).forEach((id) => delete (out.learning || {})[id]);
    const listMerge = (k, keyFn, limit, sortKey) => {
      const seen = new Set();
      out[k] = [...(a[k] || []), ...(b[k] || [])]
        .filter((h) => {
          const key = keyFn(h);
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        })
        .sort((p, q) => String(q[sortKey]).localeCompare(String(p[sortKey])))
        .slice(0, limit);
    };
    listMerge("quizHistory", (h) => `${h.date}|${h.mode}|${h.score}|${h.detail}`, 20, "date");
    listMerge("mockHistory", (h) => `${h.date}|${h.overall}|${h.l}|${h.r}`, 10, "date");
    listMerge("untHistory", (h) => `${h.date}|${h.points}`, 10, "date");
    if (b.quests && (!a.quests || b.quests.date > a.quests.date)) out.quests = b.quests;
    if ((b.weeklyClaimed || "") > (a.weeklyClaimed || "")) out.weeklyClaimed = b.weeklyClaimed;
    if (!a.profileName && b.profileName) out.profileName = b.profileName;
    // Device settings (theme, language, goal, sound) stay as they are on this device.
    return out;
  }

  async function pull() {
    const rows = await request(`/rest/v1/progress?user_id=eq.${user().id}&select=state,updated_at`);
    return rows && rows[0] ? rows[0] : null;
  }

  async function upload(st) {
    await request("/rest/v1/progress?on_conflict=user_id", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: { user_id: user().id, state: st, updated_at: new Date().toISOString() },
    });
    await request("/rest/v1/profiles?on_conflict=id", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: profileRow(st),
    });
    meta = { uid: user().id, at: Date.now() };
    write(SYNC_KEY, meta);
  }

  // Full sync: pull, merge into this device, push the result.
  function sync() {
    if (!enabled() || !user()) return Promise.resolve();
    if (syncing) return syncing;
    syncing = (async () => {
      setStatus("syncing");
      try {
        await ensureName();
        const row = await pull();
        let st = FP().state;
        if (row && row.state) {
          const merged = merge(st, row.state);
          if (JSON.stringify(merged) !== JSON.stringify(st)) {
            FP().replaceState(merged);
            st = FP().state;
          }
        }
        await upload(st);
        setStatus("ok");
      } catch (e) {
        if (e.code === "signed_out") signOutLocal();
        setStatus("error", e.code);
      } finally {
        syncing = null;
      }
    })();
    return syncing;
  }

  // After local changes: push, unless another device wrote since our last sync (then merge first).
  function onLocalChange() {
    if (!enabled() || !user()) return;
    clearTimeout(pushT);
    pushT = setTimeout(async () => {
      try {
        const rows = await request(`/rest/v1/progress?user_id=eq.${user().id}&select=updated_at`);
        const cloudAt = rows && rows[0] ? Date.parse(rows[0].updated_at) : 0;
        if (cloudAt > (meta.at || 0) + 2000 || meta.uid !== user().id) await sync();
        else {
          await upload(FP().state);
          setStatus("ok");
        }
      } catch (e) {
        setStatus("error", e.code);
      }
    }, 4000);
  }

  async function afterLogin() {
    await sync();
    FP().toast(FP().t("cloud_signed_in"));
    emit();
  }

  async function setName(name) {
    const clean = String(name).trim().slice(0, 40);
    if (!clean) return;
    FP().state.profileName = clean;
    FP().save();
    if (user()) await upload(FP().state);
    emit();
  }

  /* ---------- leaderboard & classes ---------- */
  async function leaderboard() {
    return (
      (await request(
        `/rest/v1/profiles?week_start=eq.${mondayKey()}&week_xp=gt.0&select=id,name,week_xp,streak&order=week_xp.desc&limit=50`
      )) || []
    );
  }

  async function classMembers(classId) {
    const rows =
      (await request(
        `/rest/v1/class_members?class_id=eq.${classId}&select=user_id,profiles(id,name,xp,week_xp,week_start,streak,last_active,lessons_done,words)`
      )) || [];
    const wk = mondayKey();
    return rows
      .map((r) => r.profiles)
      .filter(Boolean)
      .map((p) => ({ ...p, week_xp: p.week_start === wk ? p.week_xp : 0 }));
  }

  const teacherClasses = () =>
    request(`/rest/v1/classes?teacher_id=eq.${user().id}&select=id,name,code,created_at&order=created_at.desc`);

  async function studentClasses() {
    const rows = (await request(`/rest/v1/class_members?user_id=eq.${user().id}&select=class_id,classes(id,name,code,teacher_id,profiles(name))`)) || [];
    return rows.map((r) => r.classes).filter((c) => c && c.teacher_id !== user().id);
  }

  async function createClass(name) {
    const rows = await request("/rest/v1/classes", {
      method: "POST",
      prefer: "return=representation",
      body: { name: String(name).trim().slice(0, 60), teacher_id: user().id },
    });
    return rows && rows[0];
  }

  const deleteClass = (id) => request(`/rest/v1/classes?id=eq.${id}`, { method: "DELETE" });
  const joinClass = (code) => request("/rest/v1/rpc/join_class", { method: "POST", body: { p_code: String(code).trim() } });
  const leaveClass = (id) => request(`/rest/v1/class_members?class_id=eq.${id}&user_id=eq.${user().id}`, { method: "DELETE" });

  const assignments = (classId) =>
    request(`/rest/v1/assignments?class_id=eq.${classId}&select=id,title,kind,due,created_at&order=due.asc.nullslast`);

  const addAssignment = (classId, a) =>
    request("/rest/v1/assignments", {
      method: "POST",
      prefer: "return=representation",
      body: { class_id: classId, title: String(a.title).trim().slice(0, 120), kind: a.kind || "other", due: a.due || null },
    });

  const deleteAssignment = (id) => request(`/rest/v1/assignments?id=eq.${id}`, { method: "DELETE" });

  async function mySubmissions() {
    const rows = (await request(`/rest/v1/submissions?user_id=eq.${user().id}&select=assignment_id`)) || [];
    return new Set(rows.map((r) => r.assignment_id));
  }

  async function classSubmissions(ids) {
    if (!ids.length) return [];
    return (await request(`/rest/v1/submissions?assignment_id=in.(${ids.join(",")})&select=assignment_id,user_id`)) || [];
  }

  const markDone = (assignmentId, done) =>
    done
      ? request("/rest/v1/submissions", {
          method: "POST",
          prefer: "resolution=ignore-duplicates,return=minimal",
          body: { assignment_id: assignmentId, user_id: user().id },
        })
      : request(`/rest/v1/submissions?assignment_id=eq.${assignmentId}&user_id=eq.${user().id}`, { method: "DELETE" });

  /* ---------- push reminders ---------- */
  const pushSupported = () =>
    !!(cfg && cfg.vapidKey && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window);

  function b64ToBytes(b64) {
    const pad = "=".repeat((4 - (b64.length % 4)) % 4);
    const raw = atob((b64 + pad).replace(/-/g, "+").replace(/_/g, "/"));
    return Uint8Array.from(raw, (c) => c.charCodeAt(0));
  }

  async function currentPush() {
    if (!pushSupported()) return null;
    const reg = await navigator.serviceWorker.getRegistration();
    return reg ? reg.pushManager.getSubscription() : null;
  }

  async function enablePush() {
    if (!pushSupported()) throw new CloudError("push_unsupported");
    const perm = await Notification.requestPermission();
    if (perm !== "granted") throw new CloudError("push_denied");
    const reg = await navigator.serviceWorker.ready;
    const sub =
      (await reg.pushManager.getSubscription()) ||
      (await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToBytes(cfg.vapidKey) }));
    await request("/rest/v1/push_subscriptions?on_conflict=endpoint", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      body: { endpoint: sub.endpoint, user_id: user().id, sub: sub.toJSON() },
    });
    FP().state.pushOn = true;
    FP().save();
  }

  async function disablePush() {
    const sub = await currentPush();
    if (sub) {
      try {
        await request(`/rest/v1/push_subscriptions?endpoint=eq.${encodeURIComponent(sub.endpoint)}`, { method: "DELETE" });
      } catch {
        /* the browser side is unsubscribed below either way */
      }
      await sub.unsubscribe();
    }
    FP().state.pushOn = false;
    FP().save();
  }

  /* ---------- start ---------- */
  async function init() {
    if (!started) {
      window.addEventListener("online", () => !enabled() && init());
    }
    await config();
    if (!enabled() || started) {
      emit();
      return;
    }
    started = true;
    if (takeRedirect()) {
      FP().showView("account", { push: false });
      await afterLogin();
    } else if (/error_code=|error=/.test(landingHash)) {
      // An expired or already used e-mail link.
      linkError = true;
      FP().showView("account", { push: false });
    } else if (user()) {
      sync();
    }
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && user()) sync();
    });
    emit();
  }

  return {
    init,
    config,
    enabled,
    user,
    status: () => status,
    linkError: () => linkError,
    clearLinkError: () => (linkError = false),
    weekXp: () => weekXp(FP().state),
    onChange: (fn) => listeners.add(fn),
    sendCode,
    verifyCode,
    signOut,
    sync,
    onLocalChange,
    setName,
    merge,
    leaderboard,
    classMembers,
    teacherClasses,
    studentClasses,
    createClass,
    deleteClass,
    joinClass,
    leaveClass,
    assignments,
    addAssignment,
    deleteAssignment,
    mySubmissions,
    classSubmissions,
    markDone,
    pushSupported,
    currentPush,
    enablePush,
    disablePush,
    mondayKey,
  };
})();
