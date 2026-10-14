#!/usr/bin/env node
// Validates locale content and redirects WITHOUT building the site.
//
//   node scripts/check-i18n.mjs        (exit 1 on any problem)
//
// These are the failures a real generated batch produced, turned into checks:
//   - German/Dutch posts sitting in the English /blog/ collection (rendered
//     lang="en", no alternates, indistinguishable from English by URL)
//   - "ß" in Swiss German (de-CH) pages, which write "ss"
//   - slugs damaged by stripped umlauts ("...-l-sungen-f-r-...")
//   - two pages claiming the same language in one translation group
//   - nginx (production) and vercel.json (previews) redirect lists drifting apart,
//     redirect chains/loops, and redirects to blog posts that do not exist
//
// Locale layout (see src/_data/i18n.js):
//   src/blog -> en   src/de/blog -> de   src/de-ch/blog -> de-CH   src/nl/blog -> nl
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const COLLECTIONS = [
  { dir: 'src/blog', lang: 'en', urlBase: '/blog/' },
  { dir: 'src/de/blog', lang: 'de', urlBase: '/de/blog/' },
  { dir: 'src/de-ch/blog', lang: 'de-CH', urlBase: '/de-ch/blog/' },
  { dir: 'src/nl/blog', lang: 'nl', urlBase: '/nl/blog/' },
];

// ---- parsing ---------------------------------------------------------------

export function parseFrontMatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!m) return { front: {}, body: text };
  const front = {};
  for (const line of m[1].split(/\r?\n/)) {
    const k = /^([A-Za-z][\w]*):\s*(.*)$/.exec(line);
    if (k) front[k[1]] = k[2].replace(/\s+#.*$/, '').replace(/^["']|["']$/g, '');
  }
  return { front, body: m[2] };
}

// ---- language --------------------------------------------------------------

const MARKERS = {
  de: ['und', 'der', 'die', 'das', 'für', 'mit', 'ist', 'nicht', 'ein', 'eine', 'von', 'zu', 'auf', 'sich', 'wir', 'ihre', 'unternehmen', 'entwicklung', 'bei'],
  nl: ['het', 'een', 'voor', 'van', 'met', 'niet', 'ook', 'zijn', 'wij', 'uw', 'bedrijven', 'ontwikkeling', 'bij', 'naar', 'oplossingen'],
  en: ['the', 'and', 'for', 'with', 'is', 'of', 'to', 'in', 'that', 'this', 'are', 'your', 'our', 'can', 'from', 'on'],
};

// Stopword scoring over the visible text. Returns 'de' | 'nl' | 'en' | 'unknown';
// 'unknown' unless one language wins clearly, so it only flags what is obvious.
export function detectLang(html) {
  const words = String(html || '').replace(/<[^>]+>/g, ' ').toLowerCase().match(/[\p{L}]+/gu) || [];
  if (words.length < 30) return 'unknown';
  const score = Object.fromEntries(Object.entries(MARKERS).map(([l, list]) => {
    const set = new Set(list);
    return [l, words.filter((w) => set.has(w)).length / words.length];
  }));
  const ranked = Object.entries(score).sort((a, b) => b[1] - a[1]);
  const [best, second] = ranked;
  if (best[1] < 0.03) return 'unknown';
  return best[1] >= second[1] * 1.6 ? best[0] : 'unknown';
}

// ---- post checks -----------------------------------------------------------

const baseLang = (l) => String(l).split('-')[0];

// posts: [{ collection: {dir, lang, urlBase}, file, front, body }]
export function checkPosts(posts) {
  const problems = [];
  const add = (p, msg) => problems.push(`${p.collection.dir}/${p.file}: ${msg}`);
  const seen = new Map(); // `${translationKey}|${lang}` -> file
  const permalinks = new Map();

  for (const p of posts) {
    const { collection: c, file, front, body } = p;
    const slug = file.replace(/\.md$/, '');
    const detected = detectLang(body);

    if (c.lang === 'en') {
      if (detected === 'de' || detected === 'nl') add(p, `looks ${detected === 'de' ? 'German' : 'Dutch'} but sits in the English blog collection — it would render lang="en" with no alternates. Move it under src/${detected}/blog/ (or src/de-ch/blog/).`);
    } else {
      if (detected === 'en') add(p, `sits in the ${c.lang} blog but reads as English.`);
      if (detected !== 'unknown' && detected !== 'en' && detected !== baseLang(c.lang)) add(p, `sits in the ${c.lang} blog but reads as ${detected}.`);
      // A single-letter segment is the signature of a stripped umlaut/eszett (f-r, l-sungen, ma-geschneiderte).
      // Digits ("gemini-4") and the Dutch pronoun "u" are legitimate one-character segments.
      if (slug.split('-').some((seg) => /^[a-z]$/.test(seg) && !(c.lang === 'nl' && seg === 'u'))) add(p, `slug "${slug}" has a single-letter segment — an umlaut or ß was stripped. Transliterate (ä→ae, ö→oe, ü→ue, ß→ss).`);
    }
    if (c.lang === 'de-CH' && /ß/.test(`${front.title || ''} ${front.description || ''} ${body}`)) add(p, 'contains "ß"; Swiss German writes "ss".');
    if (c.lang !== 'en') {
      for (const need of ['title', 'description', 'date']) if (!front[need]) add(p, `missing front matter "${need}".`);
    }
    if (front.translationKey) {
      const key = `${front.translationKey}|${c.lang}`;
      if (seen.has(key)) add(p, `translationKey "${front.translationKey}" is already used by ${seen.get(key)} for ${c.lang} — one page per language per group.`);
      else seen.set(key, `${c.dir}/${file}`);
    }
    const url = `${c.urlBase}${slug}/`;
    if (permalinks.has(url)) add(p, `permalink ${url} collides with ${permalinks.get(url)}.`);
    else permalinks.set(url, `${c.dir}/${file}`);
  }
  return problems;
}

// ---- redirects -------------------------------------------------------------

export function parseNginxRedirects(conf) {
  const out = new Map();
  for (const m of conf.matchAll(/location = (\S+) \{ return 301 (\S+?); \}/g)) {
    out.set(m[1], m[2].replace(/^https:\/\/zunkireelabs\.com/, ''));
  }
  return out;
}

export function parseVercelRedirects(json) {
  return new Map((json.redirects || []).map((r) => [r.source, r.destination]));
}

// blogSlugs: Set of existing /blog/... URLs (any locale) a redirect may point at.
export function checkRedirects({ nginx, vercel, existingPages = new Set() }) {
  const problems = [];
  for (const [src, dest] of nginx) {
    if (!vercel.has(src)) problems.push(`redirect ${src}: in nginx (production) but not vercel.json (previews).`);
    else if (vercel.get(src) !== dest) problems.push(`redirect ${src}: nginx → ${dest} but vercel.json → ${vercel.get(src)}.`);
  }
  for (const src of vercel.keys()) if (!nginx.has(src)) problems.push(`redirect ${src}: in vercel.json but missing from nginx, so it 404s in production.`);

  const all = new Map([...vercel, ...nginx]);
  for (const [src, dest] of all) {
    const bare = dest.split('#')[0];
    if (bare === src) problems.push(`redirect ${src}: redirects to itself.`);
    // A destination that is itself redirected is a chain (two hops, and a loop if it points back).
    if (all.has(bare) && bare !== src) problems.push(`redirect ${src} → ${dest} is a chain: ${bare} is itself redirected to ${all.get(bare)}. Point it at the final URL.`);
    if (/^\/(de\/|nl\/|de-ch\/)?blog\/[^/]+\/$/.test(bare) && !existingPages.has(bare)) problems.push(`redirect ${src} → ${dest}: no such blog post.`);
  }
  return problems;
}

// ---- repo scan -------------------------------------------------------------

export function loadPosts(root) {
  const posts = [];
  for (const c of COLLECTIONS) {
    const dir = path.join(root, c.dir);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()) {
      const { front, body } = parseFrontMatter(fs.readFileSync(path.join(dir, file), 'utf8'));
      posts.push({ collection: c, file, front, body });
    }
  }
  return posts;
}

export function runAll(root) {
  const posts = loadPosts(root);
  const existing = new Set(posts.map((p) => `${p.collection.urlBase}${p.file.replace(/\.md$/, '')}/`));
  const nginx = parseNginxRedirects(fs.readFileSync(path.join(root, 'nginx/static.conf'), 'utf8'));
  const vercel = parseVercelRedirects(JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8')));
  return {
    posts: posts.length,
    redirects: nginx.size,
    problems: [...checkPosts(posts), ...checkRedirects({ nginx, vercel, existingPages: existing })],
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { posts, redirects, problems } = runAll(process.cwd());
  console.log(`checked ${posts} blog post(s) and ${redirects} redirect(s)`);
  if (problems.length) { console.error(`\n${problems.length} problem(s):\n- ${problems.join('\n- ')}`); process.exit(1); }
  console.log('OK');
}
