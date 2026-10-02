// Keeps translated pages inside their own language.
//
// On a page under /de/, /de-ch/ or /nl/, every internal link is one of:
//   - already in that language tree, an asset/file, a language-switcher link (has hreflang) or a
//     legal page  -> left alone;
//   - an English page that has a translation (home, blog listing, services, contact, about, or a
//     blog post with a translationKey)  -> pointed at the translated page;
//   - anything else (an English-only page)  -> the link is removed and its text stays.
// English pages are never touched. Pure and filesystem-light so scripts/i18n.test.mjs can test it.
import fs from 'node:fs';
import path from 'node:path';

const LOCALES = { '/de/': 'de', '/de-ch/': 'de-CH', '/nl/': 'nl' };
const DIRS = { de: 'de', 'de-CH': 'de-ch', nl: 'nl' };
// Legal pages stay reachable from every page (they exist in English only).
const LEGAL = new Set(['/privacy/', '/terms/', '/cookie-policy/', '/gdpr/', '/privacy-choices/', '/cookie-preferences/', '/accessibility/']);
const SECTIONS = /^\/(services\/|contact\/|get-a-quote\/|about\/)/;

export function localeOf(url) {
  for (const [prefix, code] of Object.entries(LOCALES)) if (String(url || '').startsWith(prefix)) return code;
  return null;
}

// { '<english slug>': { de: '<slug>', 'de-CH': '<slug>', nl: '<slug>' } } from the translated posts' translationKey.
export function scanTranslatedPosts(srcDir) {
  const map = {};
  for (const [code, dir] of Object.entries(DIRS)) {
    const folder = path.join(srcDir, dir, 'blog');
    let files = [];
    try { files = fs.readdirSync(folder).filter((f) => f.endsWith('.md')); } catch { continue; }
    for (const f of files) {
      const m = /^translationKey:\s*"?([^"\n]+)"?/m.exec(fs.readFileSync(path.join(folder, f), 'utf8').slice(0, 2000));
      if (m) (map[m[1].trim()] ||= {})[code] = f.replace(/\.md$/, '');
    }
  }
  return map;
}

// Returns the target for an English path in a locale: a path, '' to unwrap, or null to leave unchanged.
export function mapLink(pathname, code, posts) {
  const base = `/${DIRS[code]}/`;
  if (Object.values(LOCALES).length && Object.keys(LOCALES).some((p) => pathname.startsWith(p))) return null;
  if (/\.[A-Za-z0-9]{2,5}$/.test(pathname) || /^\/(assets|images|api|fonts)\//.test(pathname)) return null;
  if (LEGAL.has(pathname)) return null;
  if (pathname === '/') return base;
  if (pathname === '/blog/' || /^\/blog\/page\/\d+\/$/.test(pathname)) return `${base}blog/`;
  if (SECTIONS.test(pathname)) return base + pathname.slice(1);
  const post = /^\/blog\/([^/]+)\/$/.exec(pathname);
  if (post && posts[post[1]] && posts[post[1]][code]) return `${base}blog/${posts[post[1]][code]}/`;
  return '';
}

// Remove only the link, keep the element: an <a> often IS the card or button (its classes carry the
// background, padding and rounding), so dropping the tag would unstyle the whole block. A link with no
// styling just leaves its text; a styled one becomes a <div> (block content inside) or <span>.
const BLOCK_INSIDE = /<(?:div|p|h[1-6]|ul|ol|li|section|article|img|figure|table)\b/i;
function unlink(attrs, inner) {
  const kept = attrs.replace(/\s(?:href|target|rel)="[^"]*"/g, '').replace(/\s(?:x-data|@[\w:.-]+|:[\w-]+)="[^"]*"/g, '').trim();
  if (!/\b(?:class|style)=/.test(kept)) return inner;
  const tag = BLOCK_INSIDE.test(inner) ? 'div' : 'span';
  return `<${tag} ${kept}>${inner}</${tag}>`;
}

export function rewriteLinks(html, pageUrl, posts) {
  const code = localeOf(pageUrl);
  if (!code) return html;
  return html.replace(/<a\b([^>]*?)\bhref="(\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, (whole, pre, href, post, inner) => {
    if (/\bhreflang=/.test(pre + post)) return whole; // language switcher
    const m = /^([^?#]*)(.*)$/.exec(href);
    const target = mapLink(m[1], code, posts);
    if (target === null) return whole;
    if (target === '') return unlink(pre + post, inner);
    return `<a${pre}href="${target}${m[2]}"${post}>${inner}</a>`;
  });
}

export function createLocaleLinkRewriter(srcDir) {
  const posts = scanTranslatedPosts(srcDir);
  return (html, pageUrl) => rewriteLinks(html, pageUrl, posts);
}
