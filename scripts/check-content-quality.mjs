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

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem(s)`);
  process.exit(1);
}
console.log('content quality OK');
