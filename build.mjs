/* SchoolFit Quest — build script
   Concatenates src/ into a single self-contained index.html.

   Run:  node build.mjs
   Then commit BOTH the src/ files you changed AND index.html,
   because GitHub Pages serves index.html, not the sources.
*/

import { readFileSync, writeFileSync } from "node:fs";

<<<<<<< HEAD
/* Bump this on every release you push. It is what lets a visitor
   holding a cached copy notice they are out of date. */
const VERSION = "4.4.0";

const read = f => readFileSync(new URL(f, import.meta.url), "utf8");

/* Runs before anything else. Fetches version.json with caching
   disabled and, if the live version differs from the one baked into
   this page, navigates to a new URL. A changed URL is the only
   reliable way to make a browser discard a cached page.
   The ?v= guard prevents a reload loop if the check ever misfires. */
const VERSION_CHECK = `
const APP_VERSION = ${JSON.stringify(VERSION)};
(async () => {
  try {
    const r = await fetch("version.json?t=" + Date.now(), { cache: "no-store" });
    if (!r.ok) return;
    const { version } = await r.json();
    if (!version || version === APP_VERSION) return;
    const url = new URL(location.href);
    if (url.searchParams.get("v") === version) return;
    url.searchParams.set("v", version);
    location.replace(url.toString());
  } catch (e) {
    /* offline, opened from disk, or blocked — just run this copy */
  }
})();`;

=======
const read = f => readFileSync(new URL(f, import.meta.url), "utf8");

>>>>>>> 315cfa5ec93e50ce3fd8adfb96f781b75adcf0fc
/* Order matters. questions -> schools -> engine -> app. */
const JS_FILES = [
  "src/questions.js",   // dimensions + child and parent question banks
  "src/schools.js",     // the 21 school profiles and their sources
<<<<<<< HEAD
  "src/programs.js",    // sport and music sub-domain data
=======
>>>>>>> 315cfa5ec93e50ce3fd8adfb96f781b75adcf0fc
  "src/engine.js",      // scoring, confidence, matching, alignment narrative
  "src/app.js"          // flow and rendering
];

const html = `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="An exploratory school-fit tool for Perth families. Not a ranking, not an assessment of any school." />
<title>SchoolFit Quest — Perth School Fit</title>
<style>
${read("src/styles.css").trim()}
</style>
</head>
<body>
${read("src/body.html").trim()}
<script>
<<<<<<< HEAD
/* ===== version check ===== */
${VERSION_CHECK.trim()}

=======
>>>>>>> 315cfa5ec93e50ce3fd8adfb96f781b75adcf0fc
${JS_FILES.map(f => `/* ===== ${f} ===== */\n${read(f).trim()}`).join("\n\n")}
</script>
</body>
</html>
`;

/* Fail loudly rather than shipping a broken page. */
try {
  new Function(html.split("<script>")[1].split("</scr" + "ipt>")[0]);
} catch (e) {
  console.error("Build aborted — JavaScript syntax error:\n  " + e.message);
  process.exit(1);
}

writeFileSync(new URL("index.html", import.meta.url), html);
<<<<<<< HEAD
writeFileSync(new URL("version.json", import.meta.url), JSON.stringify({ version: VERSION }) + "\n");
console.log(`Built index.html — ${(html.length / 1024).toFixed(0)}KB — version ${VERSION}`);
console.log("Commit index.html AND version.json together, or the version check will misfire.");
=======
console.log(`Built index.html — ${(html.length / 1024).toFixed(0)}KB`);
>>>>>>> 315cfa5ec93e50ce3fd8adfb96f781b75adcf0fc
