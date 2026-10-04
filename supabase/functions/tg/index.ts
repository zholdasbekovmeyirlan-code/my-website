// deno-lint-ignore-file no-explicit-any
// EntryX — Telegram bot (Supabase Edge Function). No imports: paste into the dashboard editor and Deploy.
// Secrets (Supabase → Edge Functions → Secrets):
//   TELEGRAM_BOT_TOKEN        from @BotFather
//   TELEGRAM_WEBHOOK_SECRET   any long random string you make up (letters/digits only)
//   GEMINI_API_KEY            already set for the AI coach (optional: GEMINI_MODEL, AI_MONTHLY_LIMIT)
//   APP_URL                   optional, default https://entryxx.netlify.app
// Settings → "Verify JWT" must be OFF (Telegram calls it without a Supabase token).
// One-time setup: open  https://<project>.supabase.co/functions/v1/<slug>?setup=<TELEGRAM_WEBHOOK_SECRET>

const SB_URL = Deno.env.get("SUPABASE_URL") ?? "";
const TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN") ?? "";
const SECRET = Deno.env.get("TELEGRAM_WEBHOOK_SECRET") ?? "";
const GEMINI_KEY = Deno.env.get("GEMINI_API_KEY") ?? "";
const AI_LIMIT = Number(Deno.env.get("AI_MONTHLY_LIMIT") ?? "100");
const APP_URL = (Deno.env.get("APP_URL") ?? "https://entryxx.netlify.app").replace(/\/$/, "");
const GEMINI_MODELS = [...new Set([Deno.env.get("GEMINI_MODEL"), "gemini-flash-latest", "gemini-flash-lite-latest", "gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-2.0-flash"].filter(Boolean) as string[])];

const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { "Content-Type": "application/json" } });

/* ---------------- Supabase (service role) ---------------- */
function serviceHeaders(): Record<string, string> {
  let key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (!key) {
    try { key = String(Object.values(JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") ?? "{}"))[0] ?? ""); } catch { /* none */ }
  }
  const h: Record<string, string> = { apikey: key, "Content-Type": "application/json" };
  if (!key.startsWith("sb_secret_")) h.Authorization = `Bearer ${key}`;
  return h;
}
async function db(path: string, init: RequestInit = {}): Promise<any> {
  const res = await fetch(`${SB_URL}/rest/v1/${path}`, { ...init, headers: { ...serviceHeaders(), ...(init.headers ?? {}) } });
  const text = await res.text();
  if (!res.ok) throw new Error(`db ${path.split("?")[0]} ${res.status}: ${text.slice(0, 200)}`);
  return text ? JSON.parse(text) : null;
}
const rpc = (fn: string, args: Record<string, unknown>) => db(`rpc/${fn}`, { method: "POST", body: JSON.stringify(args) });

/* ---------------- Telegram ---------------- */
async function tg(method: string, payload: Record<string, unknown>): Promise<any> {
  const res = await fetch(`https://api.telegram.org/bot${TOKEN}/${method}`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!data.ok) console.error("tg", method, JSON.stringify(data).slice(0, 300));
  return data;
}
const esc = (s: unknown) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
async function send(chat: number, text: string, keyboard?: any[][]) {
  // Telegram caps messages at 4096 chars
  const parts: string[] = [];
  let rest = text;
  while (rest.length > 3900) { const cut = rest.lastIndexOf("\n", 3900); parts.push(rest.slice(0, cut > 1000 ? cut : 3900)); rest = rest.slice(cut > 1000 ? cut : 3900); }
  parts.push(rest);
  for (let i = 0; i < parts.length; i++) {
    await tg("sendMessage", {
      chat_id: chat, text: parts[i], parse_mode: "HTML", disable_web_page_preview: true,
      ...(keyboard && i === parts.length - 1 ? { reply_markup: { inline_keyboard: keyboard } } : {}),
    });
  }
}

/* ---------------- i18n ---------------- */
const L: Record<string, Record<string, string>> = {
  kk: {
    welcome: "👋 <b>EntryX ботына қош келдіңіз!</b>\n\nМен сіздің трейдинг журналыңызды білемін: P&L, сетаптар, эмоциялар, тәуекел және AI коуч — бәрі Telegram-да.\n\n<b>Қосу үшін:</b> сайтта <b>Баптаулар → Telegram → Қосу</b> батырмасын басыңыз.",
    linked: "✅ <b>Аккаунт қосылды!</b>\n\nЕнді журналыңыз осында. Төмендегі мәзірді қолданыңыз немесе маған кез келген сұрақ жазыңыз — AI коуч жауап береді.",
    bad_code: "⚠️ Сілтеменің мерзімі өтіп кеткен. Сайтта <b>Баптаулар → Telegram → Қосу</b> батырмасын қайта басыңыз.",
    not_linked: "🔗 Алдымен аккаунтты қосыңыз: сайтта <b>Баптаулар → Telegram → Қосу</b>.",
    not_pro: "🔒 Бот — <b>Pro</b> мүмкіндігі. Pro мерзіміңіз аяқталған. Сайтта Pro-ны ұзартыңыз.",
    no_cloud: "☁️ Журналыңыз бұлтта әлі жоқ. Сайтты бір рет ашыңыз — ол автоматты синхрондалады.",
    menu: "📋 <b>Мәзір</b> — не көргіңіз келеді?",
    today: "Бүгін", week: "7 күн", month: "Осы ай", all: "Барлық уақыт",
    b_today: "📊 Бүгін", b_week: "📅 Апта", b_month: "🗓 Ай", b_setups: "🎯 Сетаптар", b_last: "🧾 Соңғы мәмілелер",
    b_risk: "🛡 Тәуекел", b_prop: "🏆 Prop", b_insights: "💡 Инсайттар", b_ask: "✨ AI сұрақ", b_remind: "⏰ Еске салу", b_open: "🌐 Журналды ашу",
    pnl: "P&L", trades: "Мәміле", wr: "Ұтыс", pf: "PF", avgr: "Орт. R", best: "Ең жақсы", worst: "Ең нашар", fees: "Комиссия",
    open_pos: "Ашық позиция", empty: "Бұл кезеңде жабық мәміле жоқ.", streak_w: "🔥 Ұтыс сериясы", streak_l: "🧊 Шығын сериясы",
    setups_t: "🎯 <b>Сетаптар</b> (соңғы 90 күн)", top: "Ең табысты", bottom: "Ең шығынды", no_setup: "(сетапсыз)",
    last_t: "🧾 <b>Соңғы мәмілелер</b>",
    risk_t: "🛡 <b>Бүгінгі тәуекел</b>", risk_off: "Тәуекел қорғаушысы өшірулі. Сайтта <b>Ережелер</b> бетінде қосыңыз.",
    loss_today: "Бүгінгі шығын", limit: "лимит", trades_today: "Бүгінгі мәміле", stop: "⛔ <b>ТОҚТАҢЫЗ.</b> Бүгінгі лимитке жеттіңіз. Ертең жалғастырыңыз.", near: "⚠️ Лимитке жақындадыңыз — абай болыңыз.", ok: "✅ Бәрі ережеге сай.",
    prop_t: "🏆 <b>Prop челлендж</b>", prop_off: "Prop трекер өшірулі. Сайтта <b>Ережелер</b> бетінде қосыңыз.",
    profit: "Пайда", target: "Мақсат", maxdd: "Макс. шығын", days: "Сауда күндері", passed: "🎉 Мақсатқа жеттіңіз!", failed: "❌ Шектен асып кеттіңіз.",
    ins_t: "💡 <b>Инсайттар</b> (соңғы 90 күн)", ins_day: "Ең табысты күн", ins_badday: "Ең шығынды күн", ins_hour: "Ең жақсы сағат", ins_badhour: "Ең нашар сағат",
    ins_emo: "Ең қымбат эмоция", ins_mk: "Ең қымбат қате", ins_side: "Long / Short",
    ask_hint: "✨ Сұрағыңызды жай жазыңыз, мысалы:\n<i>«Неге осы аптада шығынға кеттім?»</i>\n<i>«Қай сағатта сауда жасамауым керек?»</i>",
    thinking: "🤔 Журналыңызды талдап жатырмын…", ai_limit: "Осы айдағы AI сұрақ лимиті бітті.", ai_busy: "AI қазір бос емес. Бір минуттан кейін қайталаңыз.", ai_off: "AI коуч әлі бапталмаған.",
    remind_on: "⏰ Күн сайын <b>{h}:00</b>-де күндік есеп жіберемін.", remind_off: "🔕 Күндік есеп өшірілді.", remind_help: "⏰ Күндік есеп уақыты: <b>{h}</b>.\nӨзгерту: <code>/remind 20</code> · Өшіру: <code>/remind off</code>",
    unlinked: "👋 Аккаунт ажыратылды.",
    eve_t: "🌙 <b>Күн қорытындысы</b>", eve_none: "Бүгін мәміле болған жоқ. Демалыс та — стратегия 🙂", eve_journal: "📝 Бүгінгі күнделікті жабуды ұмытпаңыз: не жақсы болды, не сабақ алдыңыз?",
    help: "<b>Командалар</b>\n/today — бүгін\n/week — 7 күн\n/month — осы ай\n/all — барлық уақыт\n/setups — сетаптар\n/insights — инсайттар\n/last — соңғы мәмілелер\n/risk — тәуекел\n/prop — prop челлендж\n/remind — күндік есеп\n/ask — AI коуч\n/unlink — ажырату\n\nНемесе жай сұрақ жазыңыз — AI жауап береді.",
    unknown: "Түсінбедім 🤔 /menu басыңыз немесе сұрағыңызды толығырақ жазыңыз.",
    wd: "Жс,Дс,Сс,Ср,Бс,Жм,Сб",
  },
  en: {
    welcome: "👋 <b>Welcome to the EntryX bot!</b>\n\nI know your trading journal: P&L, setups, emotions, risk and an AI coach — all in Telegram.\n\n<b>To connect:</b> on the website open <b>Settings → Telegram → Connect</b>.",
    linked: "✅ <b>Account connected!</b>\n\nYour journal is here now. Use the menu below or just ask me anything — the AI coach will answer.",
    bad_code: "⚠️ That link has expired. Press <b>Settings → Telegram → Connect</b> on the website again.",
    not_linked: "🔗 Connect your account first: <b>Settings → Telegram → Connect</b> on the website.",
    not_pro: "🔒 The bot is a <b>Pro</b> feature and your Pro period has ended. Renew Pro on the website.",
    no_cloud: "☁️ Your journal isn't in the cloud yet. Open the website once — it syncs automatically.",
    menu: "📋 <b>Menu</b> — what would you like to see?",
    today: "Today", week: "7 days", month: "This month", all: "All time",
    b_today: "📊 Today", b_week: "📅 Week", b_month: "🗓 Month", b_setups: "🎯 Setups", b_last: "🧾 Last trades",
    b_risk: "🛡 Risk", b_prop: "🏆 Prop", b_insights: "💡 Insights", b_ask: "✨ Ask AI", b_remind: "⏰ Reminder", b_open: "🌐 Open journal",
    pnl: "P&L", trades: "Trades", wr: "Win rate", pf: "PF", avgr: "Avg R", best: "Best", worst: "Worst", fees: "Fees",
    open_pos: "Open positions", empty: "No closed trades in this period.", streak_w: "🔥 Win streak", streak_l: "🧊 Loss streak",
    setups_t: "🎯 <b>Setups</b> (last 90 days)", top: "Most profitable", bottom: "Costliest", no_setup: "(no setup)",
    last_t: "🧾 <b>Last trades</b>",
    risk_t: "🛡 <b>Today's risk</b>", risk_off: "Risk guard is off. Turn it on in <b>Rules</b> on the website.",
    loss_today: "Loss today", limit: "limit", trades_today: "Trades today", stop: "⛔ <b>STOP.</b> You hit today's limit. Come back tomorrow.", near: "⚠️ You're close to your limit — careful.", ok: "✅ All within your rules.",
    prop_t: "🏆 <b>Prop challenge</b>", prop_off: "Prop tracker is off. Turn it on in <b>Rules</b> on the website.",
    profit: "Profit", target: "Target", maxdd: "Max loss", days: "Trading days", passed: "🎉 Target reached!", failed: "❌ Limit breached.",
    ins_t: "💡 <b>Insights</b> (last 90 days)", ins_day: "Best weekday", ins_badday: "Worst weekday", ins_hour: "Best hour", ins_badhour: "Worst hour",
    ins_emo: "Costliest emotion", ins_mk: "Costliest mistake", ins_side: "Long / Short",
    ask_hint: "✨ Just type your question, e.g.:\n<i>“Why did I lose money this week?”</i>\n<i>“Which hours should I avoid?”</i>",
    thinking: "🤔 Reading your journal…", ai_limit: "You've used this month's AI questions.", ai_busy: "The AI is busy. Try again in a minute.", ai_off: "The AI coach isn't configured yet.",
    remind_on: "⏰ I'll send your daily report every day at <b>{h}:00</b>.", remind_off: "🔕 Daily report turned off.", remind_help: "⏰ Daily report time: <b>{h}</b>.\nChange: <code>/remind 20</code> · Turn off: <code>/remind off</code>",
    unlinked: "👋 Account disconnected.",
    eve_t: "🌙 <b>Day wrap-up</b>", eve_none: "No trades today. Rest is a strategy too 🙂", eve_journal: "📝 Don't forget to close today's journal: what went well, what did you learn?",
    help: "<b>Commands</b>\n/today — today\n/week — 7 days\n/month — this month\n/all — all time\n/setups — setups\n/insights — insights\n/last — last trades\n/risk — risk\n/prop — prop challenge\n/remind — daily report\n/ask — AI coach\n/unlink — disconnect\n\nOr just type a question — the AI will answer.",
    unknown: "I didn't get that 🤔 Tap /menu or ask your question in more detail.",
    wd: "Sun,Mon,Tue,Wed,Thu,Fri,Sat",
  },
};
const EMO: Record<string, [string, string]> = { calm: ["Сабырлы", "Calm"], confident: ["Сенімді", "Confident"], fomo: ["FOMO", "FOMO"], fear: ["Қорқыныш", "Fear"], greed: ["Ашкөздік", "Greed"], revenge: ["Кек", "Revenge"], bored: ["Жалығу", "Bored"] };
const MK: Record<string, [string, string]> = { early_exit: ["Ерте шығу", "Early exit"], late_entry: ["Кеш кіру", "Late entry"], moved_stop: ["Стопты жылжыту", "Moved stop"], oversize: ["Үлкен көлем", "Oversized"], no_plan: ["Жоспарсыз", "No plan"], chased: ["Бағаны қуу", "Chased price"] };

/* ---------------- journal maths (mirrors js/store.js + app.js) ---------------- */
const num = (v: unknown) => { if (v === "" || v == null) return null; const n = Number(v); return isFinite(n) ? n : null; };
function calc(t: any) {
  const entry = num(t.entry), exit = num(t.exit), qty = num(t.qty), stop = num(t.stop);
  const fees = num(t.fees) ?? 0, mult = num(t.mult) || 1, dir = t.side === "short" ? -1 : 1;
  const closed = entry != null && exit != null && qty != null;
  let net: number | null = null, r: number | null = null;
  if (closed) net = (exit! - entry!) * qty! * mult * dir - fees;
  const risk = entry != null && stop != null && qty != null && stop !== entry ? Math.abs(entry - stop) * qty * mult : null;
  if (closed && risk) r = net! / risk;
  const status = !closed ? "open" : Math.abs(net!) < 0.005 ? "be" : net! > 0 ? "win" : "loss";
  const whenStr = String(t.closedAt || t.openedAt || "");
  const openStr = String(t.openedAt || "");
  const day = whenStr.slice(0, 10);
  const hour = /T\d\d/.test(openStr) ? Number(openStr.slice(11, 13)) : null;
  const wd = /^\d{4}-\d\d-\d\d/.test(openStr || day) ? new Date((openStr || day).slice(0, 10) + "T12:00:00Z").getUTCDay() : null;
  return { ...t, net, r, risk, closed, status, day, hour, wd, sortKey: whenStr };
}
const sum = (a: number[]) => a.reduce((s, x) => s + x, 0);
function stats(list: any[]) {
  const c = list.filter((x) => x.closed).sort((a, b) => (a.sortKey < b.sortKey ? -1 : 1));
  const wins = c.filter((x) => x.status === "win"), losses = c.filter((x) => x.status === "loss");
  const gw = sum(wins.map((x) => x.net)), gl = Math.abs(sum(losses.map((x) => x.net)));
  const rs = c.filter((x) => x.r != null).map((x) => x.r);
  let cw = 0, cl = 0;
  c.forEach((x) => { if (x.status === "win") { cw++; cl = 0; } else if (x.status === "loss") { cl++; cw = 0; } else { cw = 0; cl = 0; } });
  const dec = wins.length + losses.length;
  return {
    closed: c.length, wins: wins.length, losses: losses.length, net: sum(c.map((x) => x.net)),
    fees: sum(c.map((x) => num(x.fees) ?? 0)),
    winRate: dec ? wins.length / dec : null, pf: gl ? gw / gl : gw > 0 ? Infinity : null,
    avgR: rs.length ? sum(rs) / rs.length : null,
    best: c.length ? c.reduce((a, b) => (b.net > a.net ? b : a)) : null,
    worst: c.length ? c.reduce((a, b) => (b.net < a.net ? b : a)) : null,
    streak: cw >= 2 ? { n: cw, w: true } : cl >= 2 ? { n: cl, w: false } : null, list: c,
  };
}
function todayKey(tz: string, offsetDays = 0) {
  let d = new Date(Date.now() - offsetDays * 864e5);
  let k: string;
  try { k = new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(d); }
  catch { k = d.toISOString().slice(0, 10); }
  return k;
}
function localHour(tz: string) {
  try { return Number(new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", hourCycle: "h23" }).format(new Date())); }
  catch { return new Date().getUTCHours(); }
}

/* ---------------- per-user context ---------------- */
type Ctx = { chat: number; link: any; data: any; lang: "kk" | "en"; T: (k: string, v?: Record<string, unknown>) => string; trades: any[] };
function money(v: number | null, cur: string, sign = false) {
  if (v == null || !isFinite(v)) return "—";
  const body = Math.abs(v).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const sym: Record<string, string> = { USD: "$", EUR: "€", GBP: "£", KZT: "₸", RUB: "₽" };
  const s = sym[cur] ? (cur === "KZT" || cur === "RUB" ? body + " " + sym[cur] : sym[cur] + body) : body + " " + cur;
  return (v < 0 ? "−" : sign && v > 0 ? "+" : "") + s;
}
const pct = (v: number | null, d = 0) => (v == null || !isFinite(v) ? "—" : (v * 100).toFixed(d) + "%");
const rf = (v: number | null) => (v == null || !isFinite(v) ? "—" : (v < 0 ? "−" : "+") + Math.abs(v).toFixed(2) + "R");
const dot = (v: number) => (v > 0 ? "🟢" : v < 0 ? "🔴" : "⚪️");

function isProProfile(p: any) {
  if (!p) return false;
  const now = Date.now();
  const paid = p.plan === "pro" && (!p.plan_until || new Date(p.plan_until).getTime() > now);
  return paid || (p.trial_until && new Date(p.trial_until).getTime() > now);
}

async function loadCtx(chat: number, langHint?: string): Promise<{ ctx?: Ctx; error?: string; lang: "kk" | "en" }> {
  const links = await db(`telegram_links?chat_id=eq.${chat}&select=*`);
  const lang0: "kk" | "en" = langHint === "en" ? "en" : "kk";
  if (!links?.length) return { error: "not_linked", lang: lang0 };
  const link = links[0];
  const [profiles, journals] = await Promise.all([
    db(`profiles?id=eq.${link.user_id}&select=plan,plan_until,trial_until`),
    db(`journals?user_id=eq.${link.user_id}&select=data`),
  ]);
  const data = journals?.[0]?.data;
  const lang: "kk" | "en" = data?.settings?.lang === "en" ? "en" : data?.settings?.lang === "kk" ? "kk" : lang0;
  if (!isProProfile(profiles?.[0])) return { error: "not_pro", lang };
  if (!data) return { error: "no_cloud", lang };
  const T = (k: string, v?: Record<string, unknown>) => (L[lang][k] ?? k).replace(/\{(\w+)\}/g, (_, n) => String(v?.[n] ?? ""));
  const trades = (data.trades || []).map(calc);
  return { ctx: { chat, link, data, lang, T, trades }, lang };
}

/* ---------------- views ---------------- */
function menuKb(T: Ctx["T"]) {
  return [
    [{ text: T("b_today"), callback_data: "today" }, { text: T("b_week"), callback_data: "week" }, { text: T("b_month"), callback_data: "month" }],
    [{ text: T("b_setups"), callback_data: "setups" }, { text: T("b_insights"), callback_data: "insights" }],
    [{ text: T("b_last"), callback_data: "last" }, { text: T("b_risk"), callback_data: "risk" }, { text: T("b_prop"), callback_data: "prop" }],
    [{ text: T("b_ask"), callback_data: "ask" }, { text: T("b_remind"), callback_data: "remind" }],
    [{ text: T("b_open"), url: `${APP_URL}/app.html#/dashboard` }],
  ];
}
function inRange(c: Ctx, period: string) {
  const tz = c.link.tz || "Asia/Almaty";
  const today = todayKey(tz);
  const from = period === "today" ? today : period === "week" ? todayKey(tz, 6) : period === "month" ? today.slice(0, 8) + "01" : period === "90" ? todayKey(tz, 89) : "";
  return c.trades.filter((x) => !from || (x.day && x.day >= from));
}
function summary(c: Ctx, period: string) {
  const cur = c.data.settings?.currency || "USD";
  const list = inRange(c, period);
  const s = stats(list);
  const label = c.T(period === "all" ? "all" : period);
  const open = c.trades.filter((x) => !x.closed).length;
  if (!s.closed) return `📊 <b>${label}</b>\n\n${c.T("empty")}` + (open ? `\n${c.T("open_pos")}: ${open}` : "");
  const lines = [
    `📊 <b>${label}</b>`,
    "",
    `${dot(s.net)} ${c.T("pnl")}: <b>${money(s.net, cur, true)}</b>`,
    `${c.T("trades")}: <b>${s.closed}</b> (${s.wins}W · ${s.losses}L) · ${c.T("wr")} <b>${pct(s.winRate)}</b>`,
    `${c.T("pf")} <b>${s.pf === Infinity ? "∞" : s.pf == null ? "—" : s.pf.toFixed(2)}</b> · ${c.T("avgr")} <b>${rf(s.avgR)}</b>`,
    s.fees ? `${c.T("fees")}: ${money(-s.fees, cur)}` : "",
    "",
    s.best ? `🏅 ${c.T("best")}: ${esc(s.best.symbol)} <b>${money(s.best.net, cur, true)}</b>` : "",
    s.worst && s.worst !== s.best ? `🩸 ${c.T("worst")}: ${esc(s.worst.symbol)} <b>${money(s.worst.net, cur, true)}</b>` : "",
    s.streak ? `${c.T(s.streak.w ? "streak_w" : "streak_l")}: <b>${s.streak.n}</b>` : "",
    open ? `${c.T("open_pos")}: ${open}` : "",
  ];
  return lines.filter((x, i, a) => x || (a[i - 1] && a[i + 1])).join("\n");
}
function groupBy(list: any[], key: (x: any) => string | string[] | null) {
  const m = new Map<string, any[]>();
  list.forEach((x) => [].concat(key(x) as any).filter((k: any) => k != null && k !== "").forEach((k: any) => { if (!m.has(k)) m.set(k, []); m.get(k)!.push(x); }));
  return [...m].map(([k, a]) => ({ k, s: stats(a) })).filter((g) => g.s.closed);
}
function setupsView(c: Ctx) {
  const cur = c.data.settings?.currency || "USD";
  const g = groupBy(inRange(c, "90"), (x) => x.setup || c.T("no_setup")).sort((a, b) => b.s.net - a.s.net);
  if (!g.length) return `${c.T("setups_t")}\n\n${c.T("empty")}`;
  const row = (x: any) => `${dot(x.s.net)} <b>${esc(x.k)}</b> — ${money(x.s.net, cur, true)} · ${x.s.closed} · ${pct(x.s.winRate)}`;
  const top = g.slice(0, 3), bottom = g.slice(-3).reverse().filter((x) => !top.includes(x) && x.s.net < 0);
  return [c.T("setups_t"), "", `<b>${c.T("top")}</b>`, ...top.map(row), ...(bottom.length ? ["", `<b>${c.T("bottom")}</b>`, ...bottom.map(row)] : [])].join("\n");
}
function insightsView(c: Ctx) {
  const cur = c.data.settings?.currency || "USD";
  const list = inRange(c, "90");
  if (!stats(list).closed) return `${c.T("ins_t")}\n\n${c.T("empty")}`;
  const wdn = c.T("wd").split(",");
  const out = [c.T("ins_t"), ""];
  const byWd = groupBy(list, (x) => (x.wd == null ? null : String(x.wd))).sort((a, b) => b.s.net - a.s.net);
  if (byWd.length) {
    out.push(`📅 ${c.T("ins_day")}: <b>${wdn[+byWd[0].k]}</b> ${money(byWd[0].s.net, cur, true)}`);
    const w = byWd[byWd.length - 1]; if (w.s.net < 0) out.push(`📉 ${c.T("ins_badday")}: <b>${wdn[+w.k]}</b> ${money(w.s.net, cur, true)}`);
  }
  const byH = groupBy(list, (x) => (x.hour == null ? null : String(x.hour).padStart(2, "0") + ":00")).filter((g) => g.s.closed >= 2).sort((a, b) => b.s.net - a.s.net);
  if (byH.length) {
    out.push(`⏰ ${c.T("ins_hour")}: <b>${byH[0].k}</b> ${money(byH[0].s.net, cur, true)}`);
    const w = byH[byH.length - 1]; if (w.s.net < 0) out.push(`🕳 ${c.T("ins_badhour")}: <b>${w.k}</b> ${money(w.s.net, cur, true)}`);
  }
  const li = c.lang === "en" ? 1 : 0;
  const emo = groupBy(list, (x) => x.emotion || null).sort((a, b) => a.s.net - b.s.net)[0];
  if (emo && emo.s.net < 0) out.push(`😤 ${c.T("ins_emo")}: <b>${esc(EMO[emo.k]?.[li] ?? emo.k)}</b> ${money(emo.s.net, cur, true)} (${emo.s.closed})`);
  const mk = groupBy(list, (x) => (Array.isArray(x.mistakes) ? x.mistakes : [])).sort((a, b) => a.s.net - b.s.net)[0];
  if (mk && mk.s.net < 0) out.push(`🧨 ${c.T("ins_mk")}: <b>${esc(MK[mk.k]?.[li] ?? mk.k)}</b> ${money(mk.s.net, cur, true)} (${mk.s.closed})`);
  const L2 = stats(list.filter((x) => x.side !== "short")), S2 = stats(list.filter((x) => x.side === "short"));
  if (L2.closed && S2.closed) out.push(`↕️ ${c.T("ins_side")}: ${money(L2.net, cur, true)} / ${money(S2.net, cur, true)}`);
  return out.join("\n");
}
function lastView(c: Ctx) {
  const cur = c.data.settings?.currency || "USD";
  const list = stats(c.trades).list.slice(-7).reverse();
  if (!list.length) return `${c.T("last_t")}\n\n${c.T("empty")}`;
  return [c.T("last_t"), "", ...list.map((x) => `${dot(x.net)} ${esc(x.day)} · <b>${esc(x.symbol)}</b> ${x.side === "short" ? "S" : "L"} · ${money(x.net, cur, true)}${x.r != null ? " · " + rf(x.r) : ""}${x.setup ? " · " + esc(x.setup) : ""}`)].join("\n");
}
function riskView(c: Ctx) {
  const r = c.data.settings?.risk || {};
  if (!r.on) return `${c.T("risk_t")}\n\n${c.T("risk_off")}`;
  const cur = c.data.settings?.currency || "USD";
  const today = todayKey(c.link.tz || "Asia/Almaty");
  const s = stats(c.trades.filter((x) => x.day === today));
  const loss = Math.max(0, -s.net), lim = num(r.dailyLoss), maxT = num(r.maxTrades);
  const hitLoss = lim != null && lim > 0 && loss >= lim, hitT = maxT != null && maxT > 0 && s.closed >= maxT;
  const near = (lim && loss >= lim * 0.7) || (maxT && s.closed >= maxT - 1);
  return [
    c.T("risk_t"), "",
    `${c.T("loss_today")}: <b>${money(loss ? -loss : 0, cur)}</b>${lim ? ` / ${c.T("limit")} ${money(lim, cur)}` : ""}`,
    `${c.T("trades_today")}: <b>${s.closed}</b>${maxT ? ` / ${maxT}` : ""}`, "",
    hitLoss || hitT ? c.T("stop") : near ? c.T("near") : c.T("ok"),
  ].join("\n");
}
function propView(c: Ctx) {
  const p = c.data.settings?.prop || {};
  if (!p.on) return `${c.T("prop_t")}\n\n${c.T("prop_off")}`;
  const cur = c.data.settings?.currency || "USD";
  const size = num(p.size) || 0;
  const list = c.trades.filter((x) => x.closed && (!p.start || x.day >= String(p.start).slice(0, 10)));
  const s = stats(list);
  let eq = 0, peak = 0, dd = 0;
  s.list.forEach((x: any) => { eq += x.net; peak = Math.max(peak, eq); dd = Math.max(dd, peak - eq); });
  const target = size * (num(p.target) || 0) / 100, maxLoss = size * (num(p.max) || 0) / 100;
  const days = new Set(s.list.map((x: any) => x.day)).size;
  const bar = (v: number) => { const n = Math.max(0, Math.min(10, Math.floor(v * 10))); return "▰".repeat(n) + "▱".repeat(10 - n); };
  return [
    `${c.T("prop_t")} · ${esc(p.name || "")}`, "",
    `${c.T("profit")}: <b>${money(s.net, cur, true)}</b> / ${c.T("target")} ${money(target, cur)}`,
    target ? `${bar(s.net / target)} ${pct(target ? s.net / target : null)}` : "",
    `${c.T("maxdd")}: <b>${money(-dd, cur)}</b> / ${money(-maxLoss, cur)}`,
    `${c.T("days")}: <b>${days}</b>${p.minDays ? ` / ${p.minDays}` : ""}`, "",
    maxLoss && dd >= maxLoss ? c.T("failed") : target && s.net >= target && (!p.minDays || days >= +p.minDays) ? c.T("passed") : "",
  ].filter(Boolean).join("\n");
}

/* ---------------- AI coach ---------------- */
const SYSTEM = `You are the EntryX AI coach inside the EntryX Telegram bot. The trader's own journal is provided in <journal> tags.
- Ground every answer in the journal: quote concrete numbers (P&L, win rate, R, counts, dates, setups, hours, emotions, mistakes).
- Be a candid, encouraging performance coach: what costs money, what works, 2-4 specific changes to their process.
- Never give buy/sell/hold calls, entry/exit levels, price predictions or investment advice; redirect to process and risk.
- If unrelated to trading, say in one sentence that you are a trading coach.
- If data is marked as demo, mention once that it is sample data.
- Reply in the language of the <lang> tag (kk = Kazakh, en = English) unless the trader writes in another language.
- This is Telegram: short paragraphs, bullet lists with "-", **bold** for key numbers, no tables, no headings, under 180 words.`;
function aiContext(c: Ctx) {
  const d = c.data, s = d.settings || {};
  const all = stats(c.trades);
  const g = (label: string, key: (x: any) => any) => groupBy(c.trades, key).sort((a, b) => b.s.net - a.s.net)
    .map((x) => `- ${x.k}: trades ${x.s.closed}, win ${pct(x.s.winRate)}, net ${x.s.net.toFixed(2)}, avgR ${x.s.avgR == null ? "-" : x.s.avgR.toFixed(2)}`).join("\n");
  const out = [
    s.demo ? "NOTE: DEMO sample data." : "",
    `Currency ${s.currency || "USD"}. Starting balance ${s.balance || 0}. Today ${todayKey(c.link.tz || "Asia/Almaty")}.`,
    `Overall: trades ${all.closed}, win ${pct(all.winRate)}, net ${all.net.toFixed(2)}, PF ${all.pf == null ? "-" : all.pf === Infinity ? "inf" : all.pf.toFixed(2)}, avgR ${all.avgR == null ? "-" : all.avgR.toFixed(2)}`,
    "## By month\n" + g("m", (x) => (x.day ? x.day.slice(0, 7) : null)),
    "## By setup\n" + g("s", (x) => x.setup || "(none)"),
    "## By symbol\n" + g("y", (x) => x.symbol),
    "## By weekday (0=Sun)\n" + g("w", (x) => (x.wd == null ? null : String(x.wd))),
    "## By hour\n" + g("h", (x) => (x.hour == null ? null : String(x.hour))),
    "## By emotion\n" + g("e", (x) => x.emotion || "(none)"),
    "## By mistake\n" + g("k", (x) => (Array.isArray(x.mistakes) ? x.mistakes : [])),
    s.risk?.on ? `Risk rules: daily loss ${s.risk.dailyLoss}, max trades ${s.risk.maxTrades}, risk/trade ${s.risk.riskPct}%` : "",
    s.prop?.on ? `Prop: ${s.prop.name}, size ${s.prop.size}, target ${s.prop.target}%, max loss ${s.prop.max}%, start ${s.prop.start}` : "",
    "## Recent trades\ndate,symbol,side,setup,net,R,emotion,mistakes,note",
    ...all.list.slice(-60).map((x: any) => [x.day, x.symbol, x.side, x.setup || "", x.net.toFixed(2), x.r == null ? "" : x.r.toFixed(2), x.emotion || "", (x.mistakes || []).join("|"), String(x.notes || "").replace(/[\n,]+/g, " ").slice(0, 80)].join(",")),
  ];
  const days = Object.keys(d.journal || {}).sort().slice(-10);
  if (days.length) out.push("## Journal notes", ...days.map((k) => { const j = d.journal[k] || {}; return `- ${k}${j.mood ? " mood " + j.mood : ""}${j.plan ? " | plan: " + String(j.plan).slice(0, 140) : ""}${j.review ? " | review: " + String(j.review).slice(0, 140) : ""}${j.lessons ? " | lessons: " + String(j.lessons).slice(0, 100) : ""}`; }));
  return out.filter(Boolean).join("\n").slice(0, 60000);
}
function mdToHtml(md: string) {
  return esc(md).split("\n").map((l) => l.replace(/^\s*[-*•]\s+/, "• ").replace(/^#{1,4}\s+(.*)$/, "<b>$1</b>"))
    .join("\n").replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\n{3,}/g, "\n\n").trim();
}
async function askAI(c: Ctx, question: string) {
  if (!GEMINI_KEY) return send(c.chat, c.T("ai_off"));
  const used = await rpc("ai_take_for", { p_user: c.link.user_id, p_limit: AI_LIMIT });
  if (used === -2) return send(c.chat, c.T("not_pro"));
  if (used === -1) return send(c.chat, c.T("ai_limit"));
  await tg("sendChatAction", { chat_id: c.chat, action: "typing" });
  const payload = JSON.stringify({
    systemInstruction: { parts: [{ text: `${SYSTEM}\n\n<lang>${c.lang}</lang>\n<journal>\n${aiContext(c)}\n</journal>` }] },
    contents: [{ role: "user", parts: [{ text: question.slice(0, 2000) }] }],
    generationConfig: { maxOutputTokens: 4096, temperature: 0.6 },
  });
  let res: Response | null = null;
  for (const model of GEMINI_MODELS) {
    res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": GEMINI_KEY }, body: payload,
    });
    if (![404, 429, 503].includes(res.status)) break;
    console.error("gemini", model, res.status);
  }
  const data = res && res.ok ? await res.json().catch(() => null) : null;
  const text = (data?.candidates?.[0]?.content?.parts ?? []).filter((p: any) => typeof p.text === "string" && !p.thought).map((p: any) => p.text).join("").trim();
  if (!text) {
    await rpc("ai_refund_for", { p_user: c.link.user_id }).catch(() => {});
    return send(c.chat, c.T("ai_busy"));
  }
  return send(c.chat, "✨ " + mdToHtml(text), [[{ text: c.T("b_today"), callback_data: "today" }, { text: c.T("b_insights"), callback_data: "insights" }]]);
}

/* ---------------- daily wrap-up ---------------- */
async function eveningReport(c: Ctx) {
  const today = todayKey(c.link.tz || "Asia/Almaty");
  const s = stats(c.trades.filter((x) => x.day === today));
  const j = c.data.journal?.[today];
  const parts = [c.T("eve_t"), ""];
  parts.push(s.closed ? summary(c, "today").split("\n").slice(2).join("\n") : c.T("eve_none"));
  if (!j || !(j.review || j.lessons)) parts.push("", c.T("eve_journal"));
  const r = c.data.settings?.risk;
  if (r?.on && s.closed) { const rv = riskView(c).split("\n").pop()!; if (!rv.startsWith("✅")) parts.push("", rv); }
  await send(c.chat, parts.join("\n"), [[{ text: c.T("b_open"), url: `${APP_URL}/app.html#/journal/${today}` }], [{ text: c.T("b_insights"), callback_data: "insights" }]]);
}
async function runReminders() {
  const links = await db("telegram_links?remind_hour=not.is.null&select=*");
  let sent = 0;
  for (const link of links || []) {
    const tz = link.tz || "Asia/Almaty";
    const today = todayKey(tz);
    if (localHour(tz) !== link.remind_hour || link.last_remind === today) continue;
    try {
      const { ctx } = await loadCtx(link.chat_id);
      if (!ctx) continue; // not Pro / not synced: stay quiet
      await eveningReport(ctx);
      await db(`telegram_links?user_id=eq.${link.user_id}`, { method: "PATCH", body: JSON.stringify({ last_remind: today }) });
      sent++;
    } catch (e) { console.error("remind", link.user_id, e); }
  }
  return sent;
}

/* ---------------- update router ---------------- */
async function handle(update: any) {
  const msg = update.message, cb = update.callback_query;
  const chat: number | undefined = msg?.chat?.id ?? cb?.message?.chat?.id;
  if (!chat || (msg && msg.chat.type !== "private")) return;
  const from = msg?.from ?? cb?.from;
  const hint = String(from?.language_code || "").startsWith("en") ? "en" : "kk";
  if (cb) await tg("answerCallbackQuery", { callback_query_id: cb.id });
  let cmd = cb ? String(cb.data || "") : "";
  let arg = "";
  const text = String(msg?.text ?? "").trim();
  if (msg) {
    const m = /^\/(\w+)(?:@\w+)?(?:\s+([\s\S]*))?$/.exec(text);
    if (m) { cmd = m[1].toLowerCase(); arg = (m[2] || "").trim(); } else { cmd = "ask"; arg = text; }
  }
  const T0 = (k: string) => L[hint][k];

  if (cmd === "start") {
    if (arg && /^[0-9a-f]{32}$/.test(arg)) {
      const u = await rpc("tg_claim", { p_code: arg, p_chat: chat, p_username: from?.username ?? null });
      if (!u) return send(chat, T0("bad_code"), [[{ text: L[hint].b_open, url: `${APP_URL}/app.html#/settings` }]]);
      const { ctx, lang } = await loadCtx(chat, hint);
      const T = (k: string) => L[lang][k];
      return send(chat, T("linked"), ctx ? menuKb(ctx.T) : [[{ text: T("b_open"), url: `${APP_URL}/app.html#/dashboard` }]]);
    }
    const { ctx, error, lang } = await loadCtx(chat, hint);
    if (ctx) return send(chat, ctx.T("menu"), menuKb(ctx.T));
    return send(chat, L[lang][error === "not_linked" ? "welcome" : error!], [[{ text: L[lang].b_open, url: `${APP_URL}/app.html#/settings` }]]);
  }
  if (cmd === "help") return send(chat, T0("help"));
  if (cmd === "unlink") {
    await db(`telegram_links?chat_id=eq.${chat}`, { method: "DELETE" });
    return send(chat, T0("unlinked"));
  }

  const { ctx, error, lang } = await loadCtx(chat, hint);
  if (!ctx) return send(chat, L[lang][error!], [[{ text: L[lang].b_open, url: `${APP_URL}/app.html#/settings` }]]);
  const c = ctx;
  switch (cmd) {
    case "menu": return send(chat, c.T("menu"), menuKb(c.T));
    case "today": case "week": case "month": case "all":
      return send(chat, summary(c, cmd), [[{ text: c.T("b_today"), callback_data: "today" }, { text: c.T("b_week"), callback_data: "week" }, { text: c.T("b_month"), callback_data: "month" }, { text: c.T("all"), callback_data: "all" }]]);
    case "setups": return send(chat, setupsView(c));
    case "insights": return send(chat, insightsView(c));
    case "last": return send(chat, lastView(c));
    case "risk": return send(chat, riskView(c));
    case "prop": return send(chat, propView(c));
    case "remind": {
      if (!arg) return send(chat, c.T("remind_help", { h: c.link.remind_hour == null ? "off" : String(c.link.remind_hour).padStart(2, "0") + ":00" }),
        [[{ text: "19:00", callback_data: "remind19" }, { text: "21:00", callback_data: "remind21" }, { text: "23:00", callback_data: "remind23" }, { text: "🔕", callback_data: "remindoff" }]]);
      const off = /^(off|0ff|жоқ|өшір)/i.test(arg), h = Number(arg.replace(/\D/g, ""));
      if (!off && !(h >= 0 && h <= 23)) return send(chat, c.T("unknown"));
      await db(`telegram_links?user_id=eq.${c.link.user_id}`, { method: "PATCH", body: JSON.stringify({ remind_hour: off ? null : h }) });
      return send(chat, off ? c.T("remind_off") : c.T("remind_on", { h: String(h).padStart(2, "0") }));
    }
    case "remind19": case "remind21": case "remind23": case "remindoff": {
      const off = cmd === "remindoff", h = off ? null : Number(cmd.slice(6));
      await db(`telegram_links?user_id=eq.${c.link.user_id}`, { method: "PATCH", body: JSON.stringify({ remind_hour: h }) });
      return send(chat, off ? c.T("remind_off") : c.T("remind_on", { h: String(h).padStart(2, "0") }));
    }
    case "report": return eveningReport(c);
    case "ask":
      if (!arg) return send(chat, c.T("ask_hint"));
      return askAI(c, arg);
    default: return send(chat, c.T("unknown"));
  }
}

const COMMANDS = {
  kk: [["menu", "Мәзір"], ["today", "Бүгінгі нәтиже"], ["week", "Соңғы 7 күн"], ["month", "Осы ай"], ["setups", "Сетаптар"], ["insights", "Инсайттар"], ["last", "Соңғы мәмілелер"], ["risk", "Бүгінгі тәуекел"], ["prop", "Prop челлендж"], ["ask", "AI коучқа сұрақ"], ["remind", "Күндік есеп уақыты"], ["help", "Көмек"]],
  en: [["menu", "Menu"], ["today", "Today's results"], ["week", "Last 7 days"], ["month", "This month"], ["setups", "Setups"], ["insights", "Insights"], ["last", "Last trades"], ["risk", "Today's risk"], ["prop", "Prop challenge"], ["ask", "Ask the AI coach"], ["remind", "Daily report time"], ["help", "Help"]],
};

Deno.serve(async (req) => {
  const url = new URL(req.url);
  if (!TOKEN || !SECRET) return json({ error: "not_configured" }, 500);

  // One-time setup from the browser: registers the webhook and the command menu.
  if (req.method === "GET") {
    if (url.searchParams.get("setup") !== SECRET) return json({ ok: true });
    const self = `${SB_URL}/functions/v1/${url.pathname.split("/").filter(Boolean).pop()}`;
    const hook = await tg("setWebhook", { url: self, secret_token: SECRET, allowed_updates: ["message", "callback_query"], drop_pending_updates: true });
    const toCmds = (l: string[][]) => l.map(([command, description]) => ({ command, description }));
    await tg("setMyCommands", { commands: toCmds(COMMANDS.kk) });
    await tg("setMyCommands", { commands: toCmds(COMMANDS.en), language_code: "en" });
    await tg("setMyDescription", { description: "EntryX — трейдинг журналыңыз Telegram-да: P&L, сетаптар, тәуекел, күндік есеп және AI коуч." });
    await tg("setMyShortDescription", { short_description: "EntryX трейдинг журналы · AI коуч" });
    const me = await tg("getMe", {});
    return json({ webhook: hook.ok === true, url: self, bot: me.result?.username ?? null, error: hook.ok ? undefined : hook.description, token_ok: me.ok === true });
  }
  if (req.method !== "POST") return json({ ok: true });

  // Hourly cron (pg_cron → pg_net): daily wrap-ups at each user's chosen hour.
  if (req.headers.get("x-entryx-cron") === SECRET) {
    try { return json({ ok: true, sent: await runReminders() }); } catch (e) { console.error(e); return json({ error: "cron_failed" }, 500); }
  }

  if (req.headers.get("x-telegram-bot-api-secret-token") !== SECRET) return json({ error: "forbidden" }, 401);
  try { await handle(await req.json()); } catch (e) { console.error("update", e); }
  return json({ ok: true }); // always 200 so Telegram doesn't retry forever
});
