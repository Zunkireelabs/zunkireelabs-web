// Locale helpers shared by .eleventy.js filters and scripts/check-i18n tests.
// Pure on purpose. UI strings live in src/_data/i18n.js (default export only).

export const LOCALES = {
  en: { hreflang: 'en', ogLocale: 'en_US', label: 'English', home: '/', order: 0 },
  de: { hreflang: 'de', ogLocale: 'de_DE', label: 'Deutsch', home: '/de/', order: 1 },
  'de-CH': { hreflang: 'de-CH', ogLocale: 'de_CH', label: 'Deutsch (CH)', home: '/de-ch/', order: 2 },
  nl: { hreflang: 'nl', ogLocale: 'nl_NL', label: 'Nederlands', home: '/nl/', order: 3 },
};

// ---- hreflang --------------------------------------------------------------

const localeOf = (data) => (data && data.lang) || 'en';
const hreflangCode = (lang) => (LOCALES[lang] ? LOCALES[lang].hreflang : lang);

// The language alternates of a page: every page that shares its translationKey,
// itself included (hreflang must be reciprocal AND self-referencing), plus
// x-default pointing at the English version when there is one. A page with no
// counterpart gets none: a lone localized page needs only its own canonical.
//   allPages: Eleventy's collections.all  ({ url, data })
export function hreflangFor(translationKey, allPages) {
  if (!translationKey) return [];
  const byLang = new Map();
  for (const p of allPages || []) {
    if (!p || !p.url || !p.data || p.data.translationKey !== translationKey) continue;
    const code = hreflangCode(localeOf(p.data));
    if (!byLang.has(code)) byLang.set(code, p.url); // first wins; check-i18n.mjs fails the build on duplicates
  }
  if (byLang.size < 2) return [];
  const order = (code) => Object.values(LOCALES).find((l) => l.hreflang === code)?.order ?? 99;
  const alternates = [...byLang].map(([lang, url]) => ({ lang, url })).sort((a, b) => order(a.lang) - order(b.lang));
  const en = byLang.get('en');
  if (en) alternates.push({ lang: 'x-default', url: en });
  return alternates;
}

// ---- language switcher -----------------------------------------------------

// What the footer language links should point at. For each locale that has
// content: the counterpart of THIS page when one exists, otherwise that
// locale's own home. `available` says which locales have anything to link to
// (the Swiss tree has no home page, only a blog index, so it appears only once
// it has posts).
// Blog listing pages (/blog/, /blog/page/2/, /de/blog/ ...) have no per-page translation pairing,
// but every language has its own listing, so the switcher sends a reader from one listing to the
// matching listing instead of to that language's home page.
const BLOG_LISTING = { en: '/blog/', de: '/de/blog/', 'de-CH': '/de-ch/blog/', nl: '/nl/blog/' };
export const isBlogListing = (url) => /^\/(?:(?:de|nl|de-ch)\/)?blog\/(?:page\/\d+\/)?$/.test(url || '');

export function languageSwitcher(currentLang, alternates, available = {}, pageUrl = '') {
  const current = currentLang || 'en';
  const byLang = new Map((alternates || []).filter((a) => a.lang !== 'x-default').map((a) => [a.lang, a.url]));
  return Object.entries(LOCALES)
    .filter(([code]) => code === 'en' || code === current || available[code] !== false)
    .map(([code, l]) => ({
      code, label: l.label, hreflang: l.hreflang, current: code === current,
      url: byLang.get(l.hreflang) || (isBlogListing(pageUrl) ? BLOG_LISTING[code] : l.home),
    }));
}

// ---- dates -----------------------------------------------------------------

const INTL = { en: 'en-US', de: 'de-DE', 'de-CH': 'de-CH', nl: 'nl-NL' };
export function localDate(date, locale) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(INTL[locale] || locale || 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
