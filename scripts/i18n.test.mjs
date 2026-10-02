import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { hreflangFor, languageSwitcher, localDate, LOCALES } from '../src/_lib/i18n.js';
import i18n from '../src/_data/i18n.js';
import { checkPosts, checkRedirects, detectLang, parseNginxRedirects, COLLECTIONS } from './check-i18n.mjs';

const page = (url, data = {}) => ({ url, data });
const EN = COLLECTIONS.find((c) => c.lang === 'en');
const DE = COLLECTIONS.find((c) => c.lang === 'de');
const CH = COLLECTIONS.find((c) => c.lang === 'de-CH');
const NL = COLLECTIONS.find((c) => c.lang === 'nl');
const GERMAN = 'Die Zukunft der Entwicklung für Unternehmen ist nicht einfach und wir sind mit der Technik von morgen bei Ihnen. Das ist eine Chance für die Unternehmen und der Weg ist klar und ein Ziel für alle die mit uns arbeiten.';
const DUTCH = 'De toekomst van ontwikkeling voor bedrijven is niet eenvoudig en wij zijn met de techniek van morgen bij u. Het is een kans voor het bedrijf en de weg is duidelijk en een doel voor allen die met ons werken.';
const ENGLISH = 'The future of development for companies is not simple and we are with the technology of tomorrow for your team. This is a chance for the business and the path is clear and a goal for all of the people that work with us.';
const post = (collection, file, body, front = { title: 't', description: 'd', date: '2026-10-02' }) => ({ collection, file, front, body });

describe('hreflangFor — pairing and reciprocity', () => {
  const all = [
    page('/blog/a/', { translationKey: 'a' }), page('/de/blog/a/', { translationKey: 'a', lang: 'de' }), page('/nl/blog/a/', { translationKey: 'a', lang: 'nl' }),
    page('/de-ch/blog/a/', { translationKey: 'a', lang: 'de-CH' }),
    page('/de/blog/solo/', { translationKey: 'solo', lang: 'de' }),
  ];
  test('every page in a group lists the same full set (reciprocal, self-referencing) plus x-default → English', () => {
    const alts = hreflangFor('a', all);
    assert.deepEqual(alts.map((a) => a.lang), ['en', 'de', 'de-CH', 'nl', 'x-default']);
    assert.equal(alts.find((a) => a.lang === 'x-default').url, '/blog/a/');
    assert.equal(alts.find((a) => a.lang === 'de-CH').url, '/de-ch/blog/a/');
  });
  test('a localized page with no counterpart gets no alternates', () => {
    assert.deepEqual(hreflangFor('solo', all), []);
  });
  test('no translationKey → none', () => assert.deepEqual(hreflangFor(undefined, all), []));
  test('without an English version there is no x-default', () => {
    const alts = hreflangFor('b', [page('/de/blog/b/', { translationKey: 'b', lang: 'de' }), page('/nl/blog/b/', { translationKey: 'b', lang: 'nl' })]);
    assert.deepEqual(alts.map((a) => a.lang), ['de', 'nl']);
  });
});

describe('language switcher', () => {
  const alts = [{ lang: 'en', url: '/blog/a/' }, { lang: 'de', url: '/de/blog/a/' }, { lang: 'x-default', url: '/blog/a/' }];
  test('links to the counterpart when one exists, otherwise to that language home', () => {
    const links = languageSwitcher('en', alts, { 'de-CH': false });
    assert.equal(links.find((l) => l.code === 'de').url, '/de/blog/a/');
    assert.equal(links.find((l) => l.code === 'nl').url, LOCALES.nl.home);
  });
  test('marks the current language and hides the Swiss tree until it has posts', () => {
    const links = languageSwitcher('de', alts, { 'de-CH': false });
    assert.equal(links.find((l) => l.current).code, 'de');
    assert.equal(links.some((l) => l.code === 'de-CH'), false);
    assert.equal(languageSwitcher('en', [], { 'de-CH': true }).some((l) => l.code === 'de-CH'), true);
  });
  test('x-default is never offered as a language', () => {
    assert.equal(languageSwitcher('en', alts, {}).some((l) => l.code === 'x-default'), false);
  });
});

describe('locale strings and dates', () => {
  test('English strings are exactly the text the templates had before localization', () => {
    assert.equal(i18n.en.onThisPage, 'On this page');
    assert.equal(i18n.en.moreFromBlog, 'More from the blog');
    assert.equal(i18n.en.minRead, 'min read');
    assert.equal(i18n.en.discuss, "Let's discuss how AI can transform your business.");
  });
  test('every locale defines every string English defines', () => {
    for (const l of ['de', 'de-CH', 'nl']) assert.deepEqual(Object.keys(i18n[l]).sort(), Object.keys(i18n.en).sort(), l);
  });
  test('Swiss German UI strings contain no eszett', () => {
    assert.equal(Object.values(i18n['de-CH']).filter((v) => typeof v === 'string').some((v) => v.includes('ß')), false);
  });
  test('dates are formatted in the page language', () => {
    assert.match(localDate('2026-10-02', 'de'), /2\. Oktober 2026/);
    assert.match(localDate('2026-10-02', 'nl'), /2 oktober 2026/);
    assert.equal(localDate('nonsense', 'de'), '');
  });
});

describe('check-i18n — the failures a real batch produced', () => {
  test('German and Dutch posts in the English collection are flagged', () => {
    const p = checkPosts([post(EN, 'de.md', GERMAN), post(EN, 'nl.md', DUTCH), post(EN, 'en.md', ENGLISH)]);
    assert.equal(p.length, 2);
    assert.match(p[0], /looks German/);
    assert.match(p[1], /looks Dutch/);
  });
  test('English text in a locale collection is flagged; matching language is not', () => {
    assert.equal(checkPosts([post(DE, 'ok.md', GERMAN)]).length, 0);
    assert.equal(checkPosts([post(NL, 'ok.md', DUTCH)]).length, 0);
    assert.match(checkPosts([post(DE, 'x.md', ENGLISH)])[0], /reads as English/);
    assert.match(checkPosts([post(NL, 'x.md', GERMAN)])[0], /reads as de/);
  });
  test('eszett in Swiss German is flagged', () => {
    assert.match(checkPosts([post(CH, 'seite-eins.md', `${GERMAN} Straße`)])[0], /Swiss German writes "ss"/);
    assert.equal(checkPosts([post(CH, 'seite-zwei.md', `${GERMAN} Strasse`)]).length, 0);
  });
  test('a slug with a stripped umlaut is flagged', () => {
    assert.match(checkPosts([post(DE, 'ki-f-r-unternehmen.md', GERMAN)])[0], /single-letter segment/);
    assert.equal(checkPosts([post(DE, 'ki-fuer-unternehmen.md', GERMAN)]).length, 0);
  });
  test('two pages for the same language in one translation group are flagged', () => {
    const p = checkPosts([
      post(DE, 'erste-seite.md', GERMAN, { title: 't', description: 'd', date: 'x', translationKey: 'k' }),
      post(DE, 'zweite-seite.md', GERMAN, { title: 't', description: 'd', date: 'x', translationKey: 'k' }),
    ]);
    assert.match(p[0], /one page per language per group/);
  });
  test('locale posts need title, description and date', () => {
    assert.equal(checkPosts([post(DE, 'ohne-metadaten.md', GERMAN, {})]).length, 3);
  });
  test('short or ambiguous text is never guessed at', () => {
    assert.equal(detectLang('Zunkiree Labs'), 'unknown');
    assert.deepEqual(checkPosts([post(EN, 'short.md', 'Kurz.')]), []);
  });
});

describe('check-i18n — redirects', () => {
  const m = (o) => new Map(Object.entries(o));
  test('production/preview drift is flagged in both directions', () => {
    const p = checkRedirects({ nginx: m({ '/a': '/x/' }), vercel: m({ '/b': '/y/' }) });
    assert.equal(p.length, 2);
    assert.ok(p.some((x) => /in nginx \(production\) but not vercel/.test(x)));
    assert.ok(p.some((x) => /missing from nginx, so it 404s in production/.test(x)));
  });
  test('a differing destination is flagged', () => {
    assert.match(checkRedirects({ nginx: m({ '/a': '/x/' }), vercel: m({ '/a': '/y/' }) })[0], /nginx → \/x\/ but vercel\.json → \/y\//);
  });
  test('chains and self-redirects are flagged', () => {
    const both = m({ '/a': '/b/', '/b/': '/c/' });
    assert.ok(checkRedirects({ nginx: both, vercel: both }).some((x) => /is a chain/.test(x)));
    const self = m({ '/a/': '/a/' });
    assert.ok(checkRedirects({ nginx: self, vercel: self }).some((x) => /redirects to itself/.test(x)));
  });
  test('a redirect into a blog post that does not exist is flagged; an existing one is not', () => {
    const r = m({ '/old/': '/blog/new/' });
    assert.match(checkRedirects({ nginx: r, vercel: r, existingPages: new Set() })[0], /no such blog post/);
    assert.deepEqual(checkRedirects({ nginx: r, vercel: r, existingPages: new Set(['/blog/new/']) }), []);
  });
  test('parses the nginx redirect lines', () => {
    assert.equal(parseNginxRedirects('location = /a { return 301 https://zunkireelabs.com/b/; }').get('/a'), '/b/');
  });
});

test('blog listings switch to the matching language listing, not to a home page', async () => {
  const { languageSwitcher } = await import('../src/_lib/i18n.js');
  const urls = (cur, url) => Object.fromEntries(languageSwitcher(cur, [], { 'de-CH': true }, url).map((l) => [l.code, l.url]));
  assert.deepEqual(urls('en', '/blog/'), { en: '/blog/', de: '/de/blog/', 'de-CH': '/de-ch/blog/', nl: '/nl/blog/' });
  assert.equal(urls('en', '/blog/page/3/').nl, '/nl/blog/');
  assert.equal(urls('de', '/de/blog/').en, '/blog/');
  assert.equal(urls('nl', '/nl/blog/page/2/')['de-CH'], '/de-ch/blog/');
  // any other page without a counterpart still falls back to that language's home
  assert.equal(urls('en', '/about/').de, '/de/');
});

test('translated pages keep their links inside the language', async () => {
  const { rewriteLinks, localeOf } = await import('../src/_lib/locale-links.js');
  const posts = { 'what-is-flow-ai': { de: 'was-ist-flow-ai' } };
  const run = (html, url = '/de/services/x/') => rewriteLinks(html, url, posts);
  assert.equal(localeOf('/de-ch/about/'), 'de-CH');
  assert.equal(localeOf('/about/'), null);
  // English page: untouched
  assert.equal(rewriteLinks('<a href="/careers/">x</a>', '/about/', posts), '<a href="/careers/">x</a>');
  // retargeted
  assert.equal(run('<a class="a" href="/contact/">C</a>'), '<a class="a" href="/de/contact/">C</a>');
  assert.equal(run('<a href="/blog/what-is-flow-ai/">F</a>'), '<a href="/de/blog/was-ist-flow-ai/">F</a>');
  assert.equal(run('<a href="/">H</a>'), '<a href="/de/">H</a>');
  // English-only page: link removed, text kept
  assert.equal(run('<a href="/blog/untranslated-post/">P</a>'), 'P');
  // a styled link (a card or button) keeps its element and classes, only the link goes
  assert.equal(run('<p><a href="/industries/education/" class="x" target="_blank"><span>Edu</span></a></p>'), '<p><span class="x"><span>Edu</span></span></p>');
  assert.equal(run('<a href="/products/orca/" class="card"><div>Orca</div></a>'), '<div class="card"><div>Orca</div></div>');
  // kept: language tree, assets, legal, language switcher, external
  for (const keep of ['<a href="/de/blog/">b</a>', '<a href="/assets/x.pdf">f</a>', '<a href="/privacy/">p</a>', '<a href="/" hreflang="en">English</a>', '<a href="https://example.com/">e</a>']) assert.equal(run(keep), keep);
});
