/* SchoolFit Quest — build script
   Concatenates src/ into a single self-contained index.html.

   Run:  node build.mjs
   Then commit BOTH the src/ files you changed AND index.html,
   because GitHub Pages serves index.html, not the sources.
*/

import { readFileSync, writeFileSync } from "node:fs";

const read = f => readFileSync(new URL(f, import.meta.url), "utf8");

/* Order matters. questions -> schools -> engine -> app. */
const JS_FILES = [
  "src/questions.js",   // dimensions + child and parent question banks
  "src/schools.js",     // the 21 school profiles and their sources
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
console.log(`Built index.html — ${(html.length / 1024).toFixed(0)}KB`);
