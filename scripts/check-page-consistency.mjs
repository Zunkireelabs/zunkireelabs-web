#!/usr/bin/env node
// Built-output check: a page must not say anything twice or contradict its own
// structured data. Run it after `npm run build`:
//
//   node scripts/check-page-consistency.mjs [distDir]      (exit 1 on any problem)
//
// It reads the real rendered HTML and fails on:
//   - FAQ schema that lists a question the page does not show (schema must
//     describe what visitors can read);
//   - more than one FAQPage, Article-type or WebPage schema block for a page
//     (two blocks for one URL conflict);
//   - the same FAQ heading shown twice on a page, or two related-links
//     sections (e.g. a generated block plus the layout's related cards);
//   - a visible FAQ that is neither the grey card nor the accordion (the only
//     two FAQ designs; see "FAQ design" in CLAUDE.md).
//
// Zero dependencies (Node builtins only). Pages with noindex are skipped.
import fs from 'node:fs';
import path from 'node:path';

const dist = process.argv[2] || 'dist';
if (!fs.existsSync(dist)) { console.error(`check-page-consistency: "${dist}" not found. Build first.`); process.exit(1); }

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&apos;': "'", '&nbsp;': ' ' };
const decode = (t) => t.replace(/&(?:amp|lt|gt|quot|#39|apos|nbsp);|&#(\d+);/g, (m, n) => (n ? String.fromCodePoint(+n) : ENTITIES[m]));
const squash = (t) => decode(t).replace(/\s+/g, ' ').trim();

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (name === 'index.html') out.push(p);
  }
  return out;
}

function schemaItems(html) {
  const items = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try { data = JSON.parse(m[1]); } catch { continue; }
    for (const it of Array.isArray(data) ? data : data['@graph'] || [data]) items.push(it);
  }
  return items;
}

const RELATED = /<h[23][^>]*>\s*(?:Related Insights|Related Reading|Related Resources|More from the blog|More Insights|Related articles|Keep reading)\s*<\/h[23]>/gi;
const FAQ_HEADING = /<h[23][^>]*>\s*(?:FAQs?|Frequently asked questions)\s*<\/h[23]>/gi;

const problems = [];
let pages = 0;
for (const file of walk(dist)) {
  const html = fs.readFileSync(file, 'utf8');
  if (/name="robots" content="noindex/i.test(html.slice(0, 6000))) continue;
  pages++;
  const url = '/' + path.relative(dist, path.dirname(file)).replace(/\\/g, '/');
  const flag = (msg) => problems.push(`${url}: ${msg}`);

  const items = schemaItems(html);
  const count = (...types) => items.filter((i) => types.includes(i['@type'])).length;
  if (count('FAQPage') > 1) flag('more than one FAQPage schema block');
  if (count('Article', 'TechArticle', 'BlogPosting', 'NewsArticle') > 1) flag('more than one Article-type schema block');
  if (count('WebPage') > 1) flag('more than one WebPage schema block');

  const questions = items.filter((i) => i['@type'] === 'FAQPage').flatMap((i) => (i.mainEntity || []).map((e) => squash(e.name || '')));
  if (questions.length) {
    const visible = squash(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' '));
    const hidden = questions.filter((q) => q && !visible.includes(q));
    if (hidden.length) flag(`FAQ schema lists ${hidden.length} of ${questions.length} question(s) not shown on the page (e.g. "${hidden[0].slice(0, 60)}")`);
  }

  const body = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  if ((body.match(FAQ_HEADING) || []).length > 1) flag('FAQ section appears more than once');
  // Only two FAQ designs exist: the grey card (blogs, resources, glossary) and the
  // click-to-open accordion (home, contact, pricing, products, locations, compare,
  // solutions). Anything else is a third look and fails.
  for (const m of body.matchAll(FAQ_HEADING)) {
    const before = body.slice(Math.max(0, m.index - 320), m.index);
    const after = body.slice(m.index + m[0].length, m.index + m[0].length + 4000);
    const isCard = /bg-gray-50/.test(before) && /rounded-lg/.test(before);
    const isAccordion = /<details|x-show|aria-expanded|aria-controls|activeIndex/.test(after);
    if (!isCard && !isAccordion) flag('FAQ uses an unapproved design (use the grey card or the accordion)');
  }
  if ((body.match(RELATED) || []).length > 1) flag('more than one related-links section');
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem(s) across ${pages} page(s)`);
  process.exit(1);
}
console.log(`page consistency OK (${pages} pages)`);
