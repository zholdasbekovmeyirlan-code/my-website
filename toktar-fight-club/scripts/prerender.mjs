// Writes the default (Kazakh) texts from js/i18n.js straight into index.html,
// so the page is readable even before / without JavaScript. Idempotent.
import fs from "node:fs";
import vm from "node:vm";

const root = new URL("..", import.meta.url).pathname;
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(root + "js/i18n.js", "utf8"), ctx);
const kk = ctx.window.TFC_I18N.kk;

const file = root + "index.html";
let html = fs.readFileSync(file, "utf8");
let count = 0;
html = html.replace(
  /<([a-z][a-z0-9]*)(\s[^>]*?)?\sdata-i18n="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g,
  (m, tag, pre = "", key, post, inner) => {
    const v = kk[key];
    if (typeof v !== "string") return m;
    count++;
    return `<${tag}${pre} data-i18n="${key}"${post}>${v}</${tag}>`;
  }
);
fs.writeFileSync(file, html);
console.log(`prerender: ${count} texts written into index.html`);
