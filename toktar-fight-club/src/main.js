import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { initHero } from "./hero3d.js";
import { initBag } from "./bag3d.js";

gsap.registerPlugin(ScrollTrigger);

window.__tfcBooted = true;
document.documentElement.classList.remove("boot-failed");
document.documentElement.classList.add("booted");

const cfg = window.TFC_CONFIG || {};
const dict = window.TFC_I18N;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const wait = ms => new Promise(r => setTimeout(r, ms));
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(pointer: fine)").matches;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
};

let lang = "kk";
let lenis = null;
let hero = null;

// Shows the page; called by the intro timeline, and by a safety timer if anything goes wrong
let revealed = false;
function revealPage() {
  if (revealed) return;
  revealed = true;
  document.body.classList.remove("is-loading");
  const loader = document.getElementById("loader");
  if (loader) loader.remove();
  if (lenis) lenis.start();
  if (hero) hero.intro();
  ScrollTrigger.refresh();
}
setTimeout(revealPage, 7000);
const t = key => {
  const v = dict[lang] && dict[lang][key];
  return v !== undefined ? v : dict.kk[key] !== undefined ? dict.kk[key] : "";
};

/* ---------- config-driven content ---------- */
$$("[data-href]").forEach(el => {
  const url = cfg[el.dataset.href];
  if (url) el.href = url; else el.hidden = true;
});

function renderContacts() {
  const addr = cfg.address && cfg.address[lang];
  $("#cAddress").textContent = addr || t("contact_tba");
  const phoneEl = $("#cPhone");
  phoneEl.textContent = "";
  if (cfg.phone) {
    const a = document.createElement("a");
    a.href = "tel:" + cfg.phone.replace(/[^\d+]/g, "");
    a.textContent = cfg.phone;
    phoneEl.appendChild(a);
  } else {
    phoneEl.textContent = t("contact_tba");
  }
}

if (cfg.mapEmbed) {
  const f = document.createElement("iframe");
  f.src = cfg.mapEmbed;
  f.loading = "lazy";
  f.title = "Map";
  $("#map").appendChild(f);
  $("#map").hidden = false;
}
if (cfg.whatsapp) {
  $("#waFloat").href = "https://wa.me/" + cfg.whatsapp.replace(/\D/g, "");
  $("#waFloat").hidden = false;
}
$("#year").textContent = new Date().getFullYear();

/* ---------- schedule ---------- */
let schDay = 0;
function renderSchedule() {
  const tabs = $("#schTabs"), slots = $("#schSlots");
  tabs.textContent = "";
  t("sch_days").forEach((d, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(i === schDay));
    b.className = i === schDay ? "is-active" : "";
    b.textContent = d;
    b.addEventListener("click", () => { schDay = i; renderSchedule(); });
    tabs.appendChild(b);
  });
  slots.textContent = "";
  (cfg.schedule || [])
    .filter(s => s.days.includes(schDay))
    .sort((a, b) => a.time.localeCompare(b.time))
    .forEach((s, i) => {
      const row = document.createElement("div");
      row.className = "slot";
      row.style.animationDelay = i * 60 + "ms";
      row.innerHTML = '<b class="slot__time"></b><div class="slot__name"><h3></h3><span></span></div><a href="#join" class="btn btn--ghost btn--sm"></a>';
      row.querySelector(".slot__time").textContent = s.time;
      row.querySelector("h3").textContent = t(s.p);
      row.querySelector("span").textContent = t("sch_min");
      row.querySelector("a").textContent = t("sch_book");
      slots.appendChild(row);
    });
}

/* ---------- countdown ---------- */
if (cfg.openingDate) {
  const target = new Date(cfg.openingDate).getTime();
  const box = $("#countdown");
  const pad = n => String(n).padStart(2, "0");
  const tick = () => {
    const d = target - Date.now();
    if (isNaN(target) || d <= 0) { box.hidden = true; return false; }
    box.hidden = false;
    $("#cdD").textContent = pad(Math.floor(d / 864e5));
    $("#cdH").textContent = pad(Math.floor(d / 36e5) % 24);
    $("#cdM").textContent = pad(Math.floor(d / 6e4) % 60);
    $("#cdS").textContent = pad(Math.floor(d / 1e3) % 60);
    return true;
  };
  if (tick()) { const id = setInterval(() => { if (!tick()) clearInterval(id); }, 1000); }
}

/* ---------- statement word reveal ---------- */
let statementTween = null;
function setupStatement() {
  const el = $("#statement");
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = "";
  words.forEach((w, i) => {
    const s = document.createElement("span");
    s.className = "w";
    s.textContent = w;
    el.appendChild(s);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
  });
  if (statementTween) { statementTween.scrollTrigger && statementTween.scrollTrigger.kill(); statementTween.kill(); }
  statementTween = gsap.fromTo($$(".w", el), { opacity: 0.14 }, {
    opacity: 1, stagger: 0.1, ease: "none",
    scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 50%", scrub: true }
  });
}

/* ---------- bag UI ---------- */
const bagState = { hits: 0, best: Number(store.get("tfc_best")) || 0, level: "" };
function levelKey(pct) {
  return pct < 40 ? "bag_lvl_1" : pct < 70 ? "bag_lvl_2" : pct < 90 ? "bag_lvl_3" : "bag_lvl_4";
}
function renderBagUi() {
  $("#hitCount").textContent = bagState.hits;
  $("#hitBest").textContent = bagState.best + "%";
  $("#powerLevel").textContent = bagState.level ? t(bagState.level) : t("bag_hint");
}

/* ---------- language ---------- */
function applyLang(l) {
  lang = dict[l] ? l : "kk";
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  $$(".lang button").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
  $("#cursorLabel").textContent = t("cursor_punch");
  renderContacts();
  renderSchedule();
  renderBagUi();
  setupStatement();
  store.set("tfc_lang", lang);
  ScrollTrigger.refresh();
}
$$(".lang button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));

/* ---------- smooth scroll ---------- */
if (!reduceMotion) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}

const nav = $("#nav");
$$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const id = a.getAttribute("href");
  const target = id === "#" || id === "#top" ? 0 : $(id);
  if (target === null) return;
  e.preventDefault();
  nav.classList.remove("is-open");
  if (lenis) lenis.scrollTo(target, { offset: target === 0 ? 0 : -60, duration: 1.4 });
  else if (target === 0) scrollTo({ top: 0, behavior: "smooth" });
  else target.scrollIntoView({ behavior: "smooth" });
}));
// Schedule rows are rendered later, so delegate their links too
$("#schSlots").addEventListener("click", e => {
  const a = e.target.closest('a[href="#join"]');
  if (!a) return;
  e.preventDefault();
  if (lenis) lenis.scrollTo($("#join"), { offset: -60, duration: 1.2 }); else $("#join").scrollIntoView({ behavior: "smooth" });
});

$("#menuBtn").addEventListener("click", () => nav.classList.toggle("is-open"));
const bar = $("#progress");
function onScroll() {
  nav.classList.toggle("is-scrolled", scrollY > 20);
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = "scaleX(" + (max > 0 ? scrollY / max : 0) + ")";
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- hero 3D ---------- */
const heroCanvas = $("#heroCanvas");
try { hero = initHero(heroCanvas); } catch (e) { hero = null; }
if (!hero) { heroCanvas.remove(); $("#heroFallback").hidden = false; }

/* ---------- programs: pinned horizontal scroll (desktop) ---------- */
const mm = gsap.matchMedia();
mm.add("(min-width: 901px)", () => {
  const track = $("#hTrack");
  const dist = () => Math.max(0, track.scrollWidth - innerWidth);
  gsap.to(track, {
    x: () => -dist(),
    ease: "none",
    scrollTrigger: { trigger: "#programs", start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.8, invalidateOnRefresh: true }
  });
});

ScrollTrigger.create({
  trigger: ".hero", start: "top top", end: "bottom top",
  onUpdate: s => {
    if (!hero) return;
    hero.setScroll(s.progress);
    hero.setActive(s.progress < 0.995);
    heroCanvas.style.visibility = s.progress < 0.995 ? "visible" : "hidden";
  }
});
// the fixed gym photo behind the hero: slow zoom while leaving, hidden once covered
ScrollTrigger.create({
  trigger: ".hero", start: "top top", end: "bottom top",
  onUpdate: s => { $("#heroBg").style.visibility = s.progress < 0.995 ? "visible" : "hidden"; }
});
if (!reduceMotion) {
  gsap.to(".hero-bg__img", { scale: 1.16, yPercent: 4, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.fromTo(".about-photo__img", { yPercent: -10 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: ".about-photo", start: "top bottom", end: "bottom top", scrub: true } });
}
gsap.to("#heroIn", {
  yPercent: -18, opacity: 0, ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
});

/* ---------- bag 3D ---------- */
const ring = $("#cursorRing");
let bag = null;
try { bag = initBag($("#bagCanvas"), {
  onHover(on) { ring.classList.toggle("is-punch", on); $("#cursor").classList.toggle("is-off", on); },
  onHit(p) {
    const pct = Math.round(p * 100);
    bagState.hits++;
    bagState.level = levelKey(pct);
    if (pct > bagState.best) { bagState.best = pct; store.set("tfc_best", String(pct)); }
    $("#bagHint").classList.add("is-gone");
    const num = $("#powerNum"), o = { v: Number(num.textContent) || 0 };
    gsap.to(o, { v: pct, duration: 0.5, ease: "power3.out", onUpdate: () => { num.textContent = Math.round(o.v); } });
    $("#powerBar").style.width = pct + "%";
    renderBagUi();
    gsap.fromTo("#powerLevel", { scale: 1.25 }, { scale: 1, duration: 0.4, ease: "back.out(3)" });
    if (pct >= 90) {
      const ko = $("#bagKo");
      ko.classList.remove("is-show");
      void ko.offsetWidth;
      ko.classList.add("is-show");
    }
  }
}); } catch (e) { bag = null; }
if (!bag) { $("#bagCanvas").remove(); $("#bagFallback").hidden = false; $("#bagHint").hidden = true; }

/* ---------- marquee skew by scroll velocity ---------- */
if (!reduceMotion) {
  const skewTo = gsap.quickTo(".marquee__row", "skewX", { duration: 0.4, ease: "power3" });
  let rest;
  ScrollTrigger.create({
    onUpdate: self => {
      skewTo(gsap.utils.clamp(-10, 10, self.getVelocity() / -300));
      clearTimeout(rest);
      rest = setTimeout(() => skewTo(0), 120);
    }
  });
}

/* ---------- reveals ---------- */
$$(".reveal").forEach(el => {
  gsap.from(el, {
    y: 60, opacity: 0, duration: 1.1, ease: "power3.out", clearProps: "transform,opacity",
    scrollTrigger: { trigger: el, start: "top 90%", once: true }
  });
});

/* ---------- counters ---------- */
$$("[data-count]").forEach(el => {
  const end = parseFloat(el.dataset.count), dec = Number(el.dataset.decimals || 0), suf = el.dataset.suffix || "";
  const fmt = v => v.toFixed(dec).replace(".", ",") + suf;
  const o = { v: 0 };
  el.textContent = fmt(0);
  ScrollTrigger.create({
    trigger: el, start: "top 92%", once: true,
    onEnter: () => gsap.to(o, { v: end, duration: 2, ease: "power2.out", onUpdate: () => { el.textContent = fmt(o.v); } })
  });
});

/* ---------- tilt + magnetic + cursor (desktop) ---------- */
if (finePointer && !reduceMotion) {
  $$("[data-tilt]").forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 12}deg)`;
      el.style.setProperty("--mx", x * 100 + "%");
      el.style.setProperty("--my", y * 100 + "%");
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });

  $$("[data-magnetic]").forEach(el => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.3);
      yTo((e.clientY - r.top - r.height / 2) * 0.4);
    });
    el.addEventListener("pointerleave", () => { xTo(0); yTo(0); });
  });

  document.documentElement.classList.add("has-cursor");
  const dot = $("#cursor");
  gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });
  const dx = gsap.quickTo(dot, "x", { duration: 0.08 }), dy = gsap.quickTo(dot, "y", { duration: 0.08 });
  const rx = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" }), ry = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });
  addEventListener("pointermove", e => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); }, { passive: true });
  document.addEventListener("pointerover", e => {
    ring.classList.toggle("is-hover", !!e.target.closest("a, button, summary, [data-tilt], input, select"));
  });
}

/* ---------- early-signup form (Netlify Forms) ---------- */
const form = $("#joinForm"), msg = $("#formMsg");
if (!cfg.demo) $("#footerDemo").hidden = true;
form.addEventListener("submit", e => {
  e.preventDefault();
  if (cfg.demo) {
    msg.className = "form__msg";
    msg.textContent = t("form_demo");
    return;
  }
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString()
  })
    .then(r => {
      if (!r.ok) throw new Error(String(r.status));
      msg.className = "form__msg ok";
      msg.textContent = t("form_ok");
      form.reset();
    })
    .catch(() => {
      msg.className = "form__msg err";
      msg.textContent = t("form_err");
    });
});

/* ---------- boot: language, loader, intro ---------- */
const urlLang = new URLSearchParams(location.search).get("lang");
applyLang(urlLang || store.get("tfc_lang") || ((navigator.language || "").slice(0, 2) === "ru" ? "ru" : "kk"));

function splitChars(el) {
  const text = el.textContent;
  el.textContent = "";
  return Array.from(text).map(ch => {
    const s = document.createElement("span");
    s.className = "ch";
    s.textContent = ch === " " ? " " : ch;
    el.appendChild(s);
    return s;
  });
}

const loaderNum = $("#loaderNum");
const lp = { v: 0 };
gsap.to(lp, { v: 100, duration: reduceMotion ? 0.3 : 1.9, ease: "power2.inOut", onUpdate: () => { loaderNum.textContent = Math.round(lp.v); } });
const fontsReady = document.fonts ? Promise.race([document.fonts.ready, wait(2500)]) : Promise.resolve();

Promise.all([fontsReady, wait(reduceMotion ? 300 : 2000)]).then(() => {
  const chars = $$(".hero__title .split").flatMap(splitChars);
  const tl = gsap.timeline();
  if (!revealed) tl.to("#loader", { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "power4.inOut" });
  tl.add(revealPage, revealed ? 0 : "-=0.55")
    .from(".hero__wordmark", { clipPath: "inset(0 100% 0 0)", opacity: 0, duration: 1.3, ease: "power3.inOut", clearProps: "clipPath,opacity" }, "-=0.5")
    .from(chars, { yPercent: 115, rotate: 6, duration: 1, stagger: 0.03, ease: "power4.out" }, "-=0.9")
    .from(".hero__fade", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out", clearProps: "transform,opacity" }, "-=0.75")
    .from("#nav", { yPercent: -100, duration: 0.8, ease: "power3.out", clearProps: "transform" }, "<");
});
