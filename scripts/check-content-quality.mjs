#!/usr/bin/env node
// Catches the broken output the SEO generator has produced in blog posts, so it
// is found before deploy instead of by a reader:
//   - empty card wrappers (render as a blank bordered strip)
//   - JSON-LD built from scraped site navigation ("Skip to main content ...")
//   - a "Review" schema that reviews the site's own article
//   - tables with no header row, or with empty cells
//   - FAQ / JSON-LD blocks that are not valid JSON
//
//   node scripts/check-content-quality.mjs      (exit 1 on any problem)
import fs from 'node:fs';
import path from 'node:path';

const DIRS = ['src/blog', 'src/de/blog', 'src/de-ch/blog', 'src/nl/blog'];
const problems = [];

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const file = path.join(dir, name);
    const text = fs.readFileSync(file, 'utf8');
    const flag = (msg) => problems.push(`${file}: ${msg}`);

    if (/<div class="[^"]*\bbg-gray-50\b[^"]*">\s*<\/div>/.test(text)) flag('empty bg-gray-50 card wrapper');
    if (/<section\b[^>]*>\s*<\/section>/.test(text)) flag('empty <section>');

    for (const m of text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      let data;
      try { data = JSON.parse(m[1]); } catch { flag('JSON-LD is not valid JSON'); continue; }
      const blob = JSON.stringify(data);
      if (/Skip to main content/i.test(blob)) flag('JSON-LD contains scraped site navigation text');
      const types = [].concat(data['@type'] || []);
      if (types.includes('Review')) flag('Review schema on a blog post (self-reviewing the article)');
    }

    for (const t of text.matchAll(/<table\b[\s\S]*?<\/table>/g)) {
      if (!/<thead\b/.test(t[0])) flag('HTML table without <thead>');
      if (/<t[dh][^>]*>\s*<\/t[dh]>/.test(t[0])) flag('HTML table with an empty cell');
    }
    // Markdown tables: parse row by row so the |---|---| separator row is skipped.
    // An empty first header cell is normal (row-label column); an empty header
    // elsewhere, or a row with no text at all, is a broken table.
    const rows = text.split('\n').filter((l) => /^\|.*\|\s*$/.test(l) && !/^\|[\s:|-]+\|\s*$/.test(l));
    for (const [i, line] of rows.entries()) {
      const cells = line.trim().slice(1, -1).split(/(?<!\\)\|/);
      const isHeader = i === 0 || !/^\|/.test(rows[i - 1] || '');
      if (cells.every((c) => c.trim() === '') || (isHeader && cells.slice(1).some((c) => c.trim() === ''))) {
        flag('Markdown table with an empty header cell or empty row'); break;
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Regular pages must not embed comparison blocks.
// Comparisons belong on /compare/ (src/_data/companyComparisons.js, rendered by
// layouts/comparison-company.njk); a source page only links to it with a small
// `compareCard`. Blog posts (src/blog) may contain comparisons and are not scanned.
// This catches the generator-written "Comparison Table" / "X vs Y" HTML that used to
// be pasted into the middle of location pages.
// ---------------------------------------------------------------------------
const REGULAR_PAGE_ROOTS = ['src/_data', 'src/pages', 'src/_includes/layouts'];
// Structured comparison data (no pasted HTML) and hand-built pages whose whole purpose is a comparison.
const COMPARISON_ALLOWLIST = [
  'src/_data/comparisons.js',
  'src/_data/companyComparisons.js',
  'src/pages/agentic-as-a-service.njk', // GaaS vs SaaS, hand-built
  'src/pages/resources/what-is-gaas.njk', // GaaS vs SaaS, hand-built
  'src/pages/resources/ai-vs-traditional-software-kathmandu.njk', // article whose topic is the comparison
  'src/_includes/layouts/comparison.njk',
  'src/_includes/layouts/comparison-company.njk',
];
// <h2>/<h3> whose text is "Comparison Table" or contains "vs" / "versus" (as pasted into page content)
const COMPARISON_HEADING = /<h[23][^>]*>\s*[^<]*(?:comparison table|\bvs\.?\s|\sversus\s)[^<]*<\/h[23]>/i;

function walkFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walkFiles(p, out);
    else if (/\.(js|json|njk)$/.test(name)) out.push(p);
  }
  return out;
}

for (const root of REGULAR_PAGE_ROOTS) {
  for (const file of walkFiles(root)) {
    if (COMPARISON_ALLOWLIST.includes(file.replace(/\\/g, '/'))) continue;
    const text = fs.readFileSync(file, 'utf8');
    if (COMPARISON_HEADING.test(text) && /<table\b/i.test(text)) {
      problems.push(`${file}: comparison table embedded in a regular page; move it to src/_data/companyComparisons.js and link with compareCard`);
    }
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem(s)`);
  process.exit(1);
}
console.log('content quality OK');
