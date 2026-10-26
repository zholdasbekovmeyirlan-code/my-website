// Netlify build step (netlify.toml → [build] command): link previews need absolute URLs, and only the
// build knows the site's address. Writes it into index.html's og:image / og:url / canonical tags.
// Without URL (a local build) the page is left as it is.
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const site = (process.env.URL || "").replace(/\/$/, "");
if (!/^https?:\/\//.test(site)) {
  console.log("prepare-deploy: no site URL, nothing to do");
  process.exit(0);
}
const file = join(dirname(fileURLToPath(import.meta.url)), "..", "index.html");
const html = readFileSync(file, "utf8")
  .replace('content="/icons/og-image.jpg"', `content="${site}/icons/og-image.jpg"`)
  .replace("<!-- og:url -->", `<meta property="og:url" content="${site}/" />\n  <link rel="canonical" href="${site}/" />`);
writeFileSync(file, html);
console.log(`prepare-deploy: link previews point to ${site}`);
