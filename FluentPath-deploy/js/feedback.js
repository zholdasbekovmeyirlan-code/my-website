/* FluentPath — "write to us": learners report a mistake in a lesson or send an idea.
   The form in index.html is a Netlify form ("feedback"): submissions appear in Netlify → Forms and can be
   e-mailed to the site owner. Nothing is sent anywhere else. */
(() => {
  const FP = () => window.FP;
  const t = (k) => FP().t(k);
  const $ = (s) => document.querySelector(s);
  let lastFocus = null;

  // context: what the learner was looking at (an exercise, a page), sent with the message.
  function open(context = "") {
    const box = $("#fbk");
    if (!box) return;
    lastFocus = document.activeElement;
    const ctx = String(context).slice(0, 600);
    $("#fbkContextField").value = ctx;
    $("#fbkContext").textContent = ctx;
    $("#fbkContext").classList.toggle("hidden", !ctx);
    $("#fbkErr").classList.add("hidden");
    box.classList.remove("hidden");
    setTimeout(() => $("#fbkMsg").focus(), 30);
  }

  function close() {
    $("#fbk")?.classList.add("hidden");
    lastFocus?.focus?.();
  }

  async function send(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const msg = $("#fbkMsg").value.trim();
    if (msg.length < 3) {
      $("#fbkMsg").focus();
      return;
    }
    $("#fbkPage").value = location.hash.slice(1) || "home";
    $("#fbkLang").value = FP().state.lang;
    const btn = $("#fbkSend");
    btn.disabled = true;
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      close();
      FP().toast(t("fbk_thanks"));
    } catch {
      $("#fbkErr").classList.remove("hidden");
    } finally {
      btn.disabled = false;
    }
  }

  function init() {
    $("#fbkForm")?.addEventListener("submit", send);
    $("#fbkClose")?.addEventListener("click", close);
    $("#fbkBackdrop")?.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#fbk")?.classList.contains("hidden")) close();
    });
    document.querySelectorAll("[data-feedback]").forEach((b) =>
      b.addEventListener("click", () => {
        $("#moreSheet")?.classList.add("hidden");
        open();
      })
    );
  }

  window.FP_FEEDBACK = { open, close };
  document.addEventListener("DOMContentLoaded", init);
})();
