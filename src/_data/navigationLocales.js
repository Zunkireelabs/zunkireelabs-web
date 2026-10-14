// Localized copies of navigation.json for the German, Swiss German and Dutch
// pages. Built from the English file at load time by translating each text
// leaf; URLs, icons and structure are never touched, and any string without a
// translation stays English (so adding an item to navigation.json cannot
// break a locale). Keyed by the page's `lang` front matter. English pages do
// not use this: header.njk falls back to navigation itself.
//
// (Used by the legacy header/footer on pages such as /global-delivery/.)
// Titles of linked blog posts / reports stay as they are: they link to
// English pages, and a translated title would promise a translated page.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { T, swiss } from '../_lib/navTranslations.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const en = JSON.parse(fs.readFileSync(path.join(here, 'navigation.json'), 'utf8'));

const NON_TEXT = new Set(['dropdownType', 'type', 'icon', 'url', 'href', 'id']);
// Locale prefix for the pages that exist per language (the contact and quote forms).
const LOCAL_PAGES = { '/contact/': 'contact/', '/get-a-quote/': 'get-a-quote/' };
const BASE = { de: '/de/', 'de-CH': '/de-ch/', nl: '/nl/' };

function translate(node, idx, ch, base) {
  if (Array.isArray(node)) return node.map((n) => translate(n, idx, ch, base));
  if (node && typeof node === 'object') {
    // Translated pages only link "see more" to the services listing; the other "see all" links lead to
    // English-only listings, so they are left out of the localized menus.
    return Object.fromEntries(Object.entries(node).filter(([k, v]) => !(k === 'seeAll' && v && v.url !== '/services/')).map(([k, v]) => [k, (k === 'url' || k === 'href') && typeof v === 'string' && (LOCAL_PAGES[v] || v.startsWith('/services/')) ? base + (LOCAL_PAGES[v] || v.slice(1)) : NON_TEXT.has(k) ? v : translate(v, idx, ch, base)]));
  }
  if (typeof node === 'string' && T[node]) return ch ? swiss(T[node][idx]) : T[node][idx];
  return node;
}

// Translated pages only offer pages that exist in the visitor's language, so their menu is a short
// flat list (the full English menus lead almost entirely to English-only pages).
const flat = (idx, ch, base, template) => {
  const t = (k) => (ch ? swiss(T[k][idx]) : T[k][idx]);
  const item = (label, url) => ({ ...template, label, url });
  return { ...template.__nav, main: [item(t('Services'), base + 'services/'), item('Blog', base + 'blog/'), item(t('About Us'), base + 'about/')] };
};
const tmpl = (() => { const { label, url, ...rest } = en.main.find((m) => !m.dropdownType && m.url) || {}; return { ...rest, __nav: en }; })();
const clean = (o) => { const { __nav, ...rest } = o; return rest; };
const build = (idx, ch, base) => { const r = flat(idx, ch, base, tmpl); return { ...r, main: r.main.map(clean) }; };

export default {
  de: build(0, false, BASE.de),
  'de-CH': build(0, true, BASE['de-CH']),
  nl: build(1, false, BASE.nl),
};
