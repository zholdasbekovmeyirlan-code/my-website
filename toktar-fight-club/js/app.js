(function () {
  const cfg = window.TFC_CONFIG || {};
  const dict = window.TFC_I18N;
  let lang = "kk";

  function readLang() {
    try { return localStorage.getItem("tfc_lang"); } catch (e) { return null; }
  }
  function saveLang(l) {
    try { localStorage.setItem("tfc_lang", l); } catch (e) { /* ignore */ }
  }

  function t(key) { return (dict[lang] && dict[lang][key]) || dict.kk[key] || ""; }

  function applyLang(l) {
    lang = dict[l] ? l : "kk";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
    renderContacts();
    saveLang(lang);
  }

  // Links from config: hide the element when the value is empty
  document.querySelectorAll("[data-href]").forEach(el => {
    const url = cfg[el.dataset.href];
    if (url) el.href = url; else el.hidden = true;
  });
  document.querySelectorAll("[data-text]").forEach(el => {
    const v = cfg[el.dataset.text];
    if (v) el.textContent = v; else el.hidden = true;
  });

  function renderContacts() {
    const addr = cfg.address && cfg.address[lang];
    document.getElementById("cAddress").textContent = addr || t("contact_tba");
    const phoneEl = document.getElementById("cPhone");
    if (cfg.phone) {
      phoneEl.innerHTML = "";
      const a = document.createElement("a");
      a.href = "tel:" + cfg.phone.replace(/[^\d+]/g, "");
      a.textContent = cfg.phone;
      phoneEl.appendChild(a);
    } else {
      phoneEl.textContent = t("contact_tba");
    }
  }

  if (cfg.mapEmbed) {
    const map = document.getElementById("map");
    const f = document.createElement("iframe");
    f.src = cfg.mapEmbed;
    f.loading = "lazy";
    f.title = "Map";
    map.appendChild(f);
    map.hidden = false;
  }

  if (cfg.whatsapp) {
    const wa = document.getElementById("waFloat");
    wa.href = "https://wa.me/" + cfg.whatsapp.replace(/\D/g, "");
    wa.hidden = false;
  }

  // Countdown
  if (cfg.openingDate) {
    const target = new Date(cfg.openingDate).getTime();
    const box = document.getElementById("countdown");
    const pad = n => String(n).padStart(2, "0");
    const tick = () => {
      const d = target - Date.now();
      if (isNaN(target) || d <= 0) { box.hidden = true; return false; }
      box.hidden = false;
      document.getElementById("cdD").textContent = pad(Math.floor(d / 864e5));
      document.getElementById("cdH").textContent = pad(Math.floor(d / 36e5) % 24);
      document.getElementById("cdM").textContent = pad(Math.floor(d / 6e4) % 60);
      document.getElementById("cdS").textContent = pad(Math.floor(d / 1e3) % 60);
      return true;
    };
    if (tick()) { const id = setInterval(() => { if (!tick()) clearInterval(id); }, 1000); }
  }

  // Nav
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  document.getElementById("menuBtn").addEventListener("click", () => nav.classList.toggle("is-open"));
  document.querySelectorAll(".nav__links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("is-open")));
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));

  // Reveal on scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add("is-in"));
  }

  // Early-signup form (Netlify Forms)
  const form = document.getElementById("joinForm");
  const msg = document.getElementById("formMsg");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const body = new URLSearchParams(new FormData(form)).toString();
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body })
      .then(r => {
        if (!r.ok) throw new Error(r.status);
        msg.className = "form__msg ok";
        msg.textContent = t("form_ok");
        form.reset();
      })
      .catch(() => {
        msg.className = "form__msg err";
        msg.textContent = t("form_err");
      });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  const urlLang = new URLSearchParams(location.search).get("lang");
  applyLang(urlLang || readLang() || (navigator.language || "").slice(0, 2) === "ru" && "ru" || "kk");
})();
