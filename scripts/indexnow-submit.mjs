#!/usr/bin/env node
// Tells IndexNow-participating engines (Bing, Yandex, Seznam, Naver) which
// URLs changed, so ChatGPT search (Bing-backed) can pick pages up in hours
// instead of waiting for a crawl. The key file public/<key>.txt must be live
// at https://zunkireelabs.com/<key>.txt before sending.
//
//   node scripts/indexnow-submit.mjs                 dry run: lists what would be sent
//   node scripts/indexnow-submit.mjs --send          sends every URL in the LIVE sitemap
//   node scripts/indexnow-submit.mjs --send --since 2026-10-01
//                                                    only URLs whose <lastmod> is on/after the date
//
// Reads the live sitemap, not dist/, so it never submits a page that is not
// deployed yet. Run it after a deploy.

const HOST = 'zunkireelabs.com';
const KEY = '7c3d739ee1404995b5fb002559687a9d';
const SITEMAP = `https://${HOST}/sitemap.xml`;
const BATCH = 9000; // IndexNow allows 10,000 per request

const args = process.argv.slice(2);
const send = args.includes('--send');
const sinceIdx = args.indexOf('--since');
const since = sinceIdx > -1 ? new Date(args[sinceIdx + 1]) : null;
if (since && Number.isNaN(since.getTime())) {
  console.error('--since needs a date like 2026-10-01');
  process.exit(1);
}

const keyCheck = await fetch(`https://${HOST}/${KEY}.txt`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  console.error(`Key file https://${HOST}/${KEY}.txt is not live. Deploy first.`);
  process.exit(1);
}

const xml = await (await fetch(SITEMAP)).text();
const urls = [];
for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const loc = m[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
  const lastmod = m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
  if (!loc) continue;
  if (since && lastmod && new Date(lastmod) < since) continue;
  urls.push(loc);
}

console.log(`${urls.length} URLs from ${SITEMAP}${since ? ` modified since ${args[sinceIdx + 1]}` : ''}`);
if (!send) {
  console.log(urls.slice(0, 10).join('\n'));
  if (urls.length > 10) console.log(`... and ${urls.length - 10} more\nDry run. Add --send to submit.`);
  process.exit(0);
}

for (let i = 0; i < urls.length; i += BATCH) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urls.slice(i, i + BATCH),
    }),
  });
  console.log(`batch ${i / BATCH + 1}: HTTP ${res.status}`);
  if (res.status >= 400) process.exit(1);
}
