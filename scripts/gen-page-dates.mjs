// Generates src/_data/pageDates.json: real "published" / "modified" dates per page template,
// read from git history, for machine-readable (JSON-LD only) freshness signals.
// Why a file: the Docker build copies only src/ and public/ (no .git), so git cannot be read at build time.
// Run after committing content changes:   npm run dates   (then commit the updated JSON).
// A template or data file with uncommitted changes is dated today, so dates are never older than the edit.
import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const git = (cmd) => execSync(`git ${cmd}`, { encoding: "utf8" }).trim();
const today = new Date().toISOString().slice(0, 10);

// Pages whose visible content also comes from data files: the page counts as modified when those change.
const DEPS = [
  [/^src\/pages\/homepage-v2\.njk$/, ["src/_includes/partials/homepage"]],
  [/^src\/pages\/solutions\/[^/]+\.njk$/, ["src/_data/servicesDetails.json", "src/_data/servicesFaq.json", "src/_data/servicesStories.json"]],
  [/^src\/pages\/industries\//, ["src/_data/industries.js"]],
  [/^src\/compare\//, ["src/_data/comparisons.js"]],
  [/^src\/pages\/products\//, ["src/_data/platformProducts.js", "src/_data/productsDetails.json", "src/_data/products.json", "src/_data/productsFaq.json"]],
  [/^src\/glossary\//, ["src/_data/glossary.js"]],
];
// Listing pages whose content is the posts themselves: a file date would be misleading.
const SKIP = [/^src\/blog\//, /\/blog\//];

function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (/^src\/(_includes|_data|_lib|assets|blog)/.test(p)) continue;
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith(".njk")) out.push(p);
  }
  return out;
}

const dateOf = (paths) => {
  const list = paths.map((p) => `"${p}"`).join(" ");
  if (git(`status --porcelain -- ${list}`)) return today;
  const d = git(`log -1 --format=%cI -- ${list}`);
  return d ? d.slice(0, 10) : null;
};
const firstOf = (p) => {
  const d = git(`log --diff-filter=A --format=%cI -- "${p}"`).split("\n").filter(Boolean).pop();
  return d ? d.slice(0, 10) : null;
};

const out = {};
for (const f of walk("src")) {
  if (SKIP.some((r) => r.test(f))) continue;
  const deps = DEPS.find(([re]) => re.test(f))?.[1] ?? [];
  const modified = dateOf([f, ...deps]);
  if (!modified) continue; // not in git yet: no claim
  out["./" + f] = { published: firstOf(f) || modified, modified };
}
writeFileSync("src/_data/pageDates.json", JSON.stringify(out, null, 2) + "\n");
console.log(`pageDates.json: ${Object.keys(out).length} pages`);
