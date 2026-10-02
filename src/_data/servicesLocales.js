// Localized services data for the German, Swiss German and Dutch pages.
//
// The translated copy lives in src/_lib/services-i18n/<de|nl>/ (one JSON file per service plus
// _catalog.json for the services listing, FAQ, customer stories and listing-page text), mirroring
// the structure of servicesDetails.json / services.json / servicesFaq.json / servicesStories.json.
// This file only loads them and points internal links at the localized pages where they exist;
// links to pages that have no translation (projects, resources, ...) are left untouched.
// Swiss German is the German text with "ss" for "ß", «» quotes and ’ as the thousands separator.
//
// Keep this file's ONLY export the default one (named exports would make Eleventy expose the
// whole module namespace as the data object).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '_lib', 'services-i18n');
const BASE = { de: '/de/', 'de-CH': '/de-ch/', nl: '/nl/' };
const LOCALIZED = /^\/(services\/|contact\/|get-a-quote\/)/;

const read = (lang, file) => {
  try { return JSON.parse(fs.readFileSync(path.join(root, lang, file), 'utf8')); } catch { return null; }
};

const swissText = (s) => s.replace(/ß/g, 'ss')
  .replace(/„([^“”\n]*)[“”]/g, '«$1»')
  .replace(/(?<=\d)\.(?=\d{3}\b)/g, '’');

// Walk the data: swissify text, and rewrite url-ish values that have a localized page.
function transform(node, base, ch) {
  if (Array.isArray(node)) return node.map((n) => transform(n, base, ch));
  if (node && typeof node === 'object') {
    return Object.fromEntries(Object.entries(node).map(([k, v]) => {
      if ((k === 'url' || k === 'href' || k === 'ctaButtonUrl' || k === 'ctaUrl') && typeof v === 'string' && LOCALIZED.test(v)) return [k, base + v.slice(1)];
      return [k, transform(v, base, ch)];
    }));
  }
  if (typeof node === 'string' && ch && !/^(\/|https?:)/.test(node)) return swissText(node);
  return node;
}

function build(lang, locale) {
  const catalog = read(lang, '_catalog.json');
  if (!catalog) return null;
  const details = {};
  let ids = [];
  try { ids = fs.readdirSync(path.join(root, lang)).filter((f) => f.endsWith('.json') && !f.startsWith('_')).map((f) => f.replace(/\.json$/, '')); } catch { /* none yet */ }
  for (const id of ids) details[id] = read(lang, `${id}.json`);
  const ch = locale === 'de-CH';
  return transform({ details, services: catalog.services, faq: catalog.faq, stories: catalog.stories, page: catalog.page }, BASE[locale], ch);
}

export default {
  de: build('de', 'de'),
  'de-CH': build('de', 'de-CH'),
  nl: build('nl', 'nl'),
};
