/* FluentPath — optional visit counter with GoatCounter (free, no cookies, no personal data).
   It loads only when the site owner sets GOATCOUNTER_CODE in Netlify (see netlify/functions/config.js). */
(() => {
  const view = () => `/${location.hash.slice(1).split("?")[0] || "home"}`;

  function start(code) {
    window.goatcounter = { no_onload: true };
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
    s.onload = () => {
      const count = () => window.goatcounter?.count?.({ path: view() });
      count();
      window.addEventListener("hashchange", count);
    };
    document.head.appendChild(s);
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.FP_CLOUD?.config().then((c) => {
      const code = c && c.goatcounter;
      if (code && /^[a-z0-9-]{2,40}$/.test(code)) start(code);
    });
  });
})();
