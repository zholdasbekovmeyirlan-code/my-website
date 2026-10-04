// Builds one self-contained HTML file (fonts, css, js, images inlined) for sending as a file.
// Usage: node scripts/single-file.mjs [out.html]
import fs from "node:fs";
import path from "node:path";

const root = new URL("..", import.meta.url).pathname;
const out = process.argv[2] || path.join(root, "dist", "Toktar-Fight-Club.html");
const read = f => fs.readFileSync(path.join(root, f));
const mime = { ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".woff2": "font/woff2" };
const dataUri = f => `data:${mime[path.extname(f)]};base64,${read(f).toString("base64")}`;

let html = read("index.html").toString();
let fonts = read("css/fonts.css").toString().replace(/url\(\.\.\/(fonts\/[\w.-]+)\)/g, (_, f) => `url(${dataUri(f)})`);
let css = read("css/style.css").toString().replace(/url\(\.\.\/(img\/[\w./-]+)\)/g, (_, f) => `url(${dataUri(f)})`);

html = html.replace(/\s*<link rel="preload"[^>]*>/g, "");
html = html.replace('<link rel="stylesheet" href="css/fonts.css">', () => `<style>\n${fonts}</style>`);
html = html.replace('<link rel="stylesheet" href="css/style.css">', () => `<style>\n${css}</style>`);
for (const f of ["config", "i18n", "bundle"]) {
  const js = read(`js/${f}.js`).toString().replace(/<\/script/gi, "<\\/script");
  html = html.replace(`<script src="js/${f}.js"></script>`, () => `<script>\n${js}\n</script>`);
}
// images referenced from HTML attributes (skip ones that do not exist, e.g. optional founder photo)
html = html.replace(/(src|href|srcset)="(img\/[\w./-]+)"/g, (m, attr, f) =>
  fs.existsSync(path.join(root, f)) && mime[path.extname(f)] ? `${attr}="${dataUri(f)}"` : m);
// images referenced from config.js / js strings
html = html.replace(/(["'])(img\/[\w./-]+\.(?:jpg|jpeg|png|webp|svg))\1/g, (m, q, f) =>
  fs.existsSync(path.join(root, f)) ? `${q}${dataUri(f)}${q}` : m);

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
const left = html.match(/(?:src|href)="(?:js|css|fonts)\/[^"]+"/g) || [];
console.log(`single-file: ${out} (${Math.round(html.length / 1024)} KB)${left.length ? " — unresolved: " + left.join(", ") : ""}`);
