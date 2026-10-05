// Generates public/llms-full.txt: the full text of every English Insights post
// as plain Markdown, for AI crawlers that prefer one fetch to many page parses.
// Also writes public/blog/<slug>/index.md (a Markdown copy of each post, linked
// from the post via <link rel="alternate" type="text/markdown">).
// Run: node scripts/build-llms-full.mjs   (re-run after adding Insights posts)
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = "src/blog";
const posts = [];
for (const f of readdirSync(dir).filter((n) => n.endsWith(".md"))) {
  const raw = readFileSync(join(dir, f), "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) continue;
  const fm = (k) => (m[1].match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, "m")) || [])[1];
  if (fm("category") !== "Insights") continue;
  const body = m[2]
    .replace(/<!-- SEOAI:FAQ:START -->[\s\S]*?<!-- SEOAI:FAQ:END -->/g, (blk) => {
      const qa = [...blk.matchAll(/<p class="text-lg[^>]*>(.*?)<\/p><p class="text-gray-600[^>]*>(.*?)<\/p>/g)];
      return "## FAQ\n\n" + qa.map(([, q, a]) => `**${q}**\n${a}`).join("\n\n");
    })
    .replace(/<\/?div[^>]*>/g, "")
    .trim();
  posts.push({ slug: f.replace(/\.md$/, ""), title: fm("title"), date: fm("date"), description: fm("description"), body });
}
posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
const out =
  "# Zunkiree Labs Insights: full text\n\n> Full text of the English Insights posts at https://zunkireelabs.com/blog/insights/. Index: https://zunkireelabs.com/llms.txt\n\n" +
  posts.map((p) => `---\n\n# ${p.title}\n\nURL: https://zunkireelabs.com/blog/${p.slug}/\nPublished: ${p.date}\nSummary: ${p.description}\n\n${p.body}\n`).join("\n");
writeFileSync("public/llms-full.txt", out);
for (const p of posts) {
  mkdirSync(`public/blog/${p.slug}`, { recursive: true });
  writeFileSync(`public/blog/${p.slug}/index.md`, `# ${p.title}\n\nURL: https://zunkireelabs.com/blog/${p.slug}/\nPublished: ${p.date}\nSummary: ${p.description}\n\n${p.body}\n`);
}
console.log(`llms-full.txt: ${posts.length} posts, ${(out.length / 1024).toFixed(0)} KB`);
