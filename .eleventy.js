import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import { hreflangFor, languageSwitcher, localDate } from "./src/_lib/i18n.js";
import { createLocaleLinkRewriter } from "./src/_lib/locale-links.js";
import path from "path";
import fs from "fs";

// Simple Vite plugin to copy non-HTML files (like sitemap.xml) after build
function copyNonHtmlFiles() {
  return {
    name: 'copy-non-html-files',
    closeBundle() {
      const eleventyTempDir = path.resolve(process.cwd(), '.11ty-vite');
      const outputDir = path.resolve(process.cwd(), 'dist');
      const filesToCopy = ['sitemap.xml', 'robots.txt'];

      filesToCopy.forEach(file => {
        const src = path.join(eleventyTempDir, file);
        const dest = path.join(outputDir, file);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      });
    }
  };
}

export default function (eleventyConfig) {
  // Vite Plugin with configuration
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      publicDir: "public", // Static assets copied as-is
      plugins: [copyNonHtmlFiles()],
      build: {
        emptyOutDir: false, // Preserve Eleventy files
        rollupOptions: {
          input: {
            main: path.resolve(process.cwd(), "src/assets/js/main.js"),
          },
        },
      },
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        fs: {
          allow: [process.cwd()],
          strict: false
        },
        allowedHosts: [
          'zunkireelabs.com',
          'www.zunkireelabs.com',
          '.zunkireelabs.com',
          'dev-zunkiree.simplifycodes.com',
          'localhost',
          '127.0.0.1'
        ]
      }
    },
  });

  // Allow access from local network (phones, tablets on same WiFi)
  eleventyConfig.setServerOptions({ host: "0.0.0.0" });

  // Debounce rebuilds: a single save can fire multiple near-simultaneous
  // file-change events (editor atomic writes, overlapping watch targets),
  // and with no throttle each one starts its own rebuild. Overlapping
  // rebuilds racing to copy public/ into dist/public/ at the same time is
  // what causes the intermittent "ENOENT: mkdir dist/public/..." passthrough
  // copy failures that corrupt dist/ and require a manual server restart.
  eleventyConfig.setWatchThrottleWaitTime(300);

  // Copy static assets with proper path mapping
  // Vite will process CSS through PostCSS/Tailwind during build
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/icons": "assets/icons" });
  eleventyConfig.addPassthroughCopy({ "src/assets/videos": "assets/videos" });
  eleventyConfig.addPassthroughCopy({ "src/assets/lottie": "assets/lottie" });

  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");
  eleventyConfig.addWatchTarget("src/assets/images/");

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Custom filter to find item by attribute value
  eleventyConfig.addFilter("find", function(array, attr, value) {
    if (!array || !Array.isArray(array)) return null;
    return array.find(item => item[attr] === value);
  });

  // Date filter with multiple format support
  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    if (format === "%Y-%m-%d") {
      return d.toISOString().split('T')[0];
    }
    if (format === "%B %d, %Y") {
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    if (format === "%B %Y") {
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    }
    return d.toISOString();
  });

  // Locale support (see src/_lib/i18n.js). hreflangFor pairs pages that share a
  // translationKey; languageSwitcher builds the footer language links; localDate
  // formats a date for a non-English locale. English output is unchanged.
  eleventyConfig.addFilter("hreflangFor", (translationKey, allPages) => hreflangFor(translationKey, allPages));
  eleventyConfig.addFilter("languageSwitcher", (currentLang, alternates, available, pageUrl) => languageSwitcher(currentLang, alternates, available, pageUrl));
  eleventyConfig.addFilter("localDate", (date, locale) => localDate(date, locale));

  // Translated pages (/de/, /de-ch/, /nl/) never link into English-only pages: links with a translated
  // equivalent are retargeted, every other link to an English page is unwrapped (see src/_lib/locale-links.js).
  const rewriteLocaleLinks = createLocaleLinkRewriter(path.resolve(process.cwd(), "src"));
  eleventyConfig.addTransform("localeLinks", function (content) {
    const out = this.page && this.page.outputPath;
    if (typeof out !== "string" || !out.endsWith(".html")) return content;
    return rewriteLocaleLinks(content, this.page.url);
  });

  // Checks a src-relative asset path (e.g. "/assets/images/blog/foo.jpg") actually
  // exists on disk — several blog posts have a featuredImage frontmatter value
  // pointing at a file that was never added, which otherwise renders a broken image.
  eleventyConfig.addFilter("fileExists", function(relPath) {
    if (!relPath) return false;
    try {
      return fs.existsSync(path.join(process.cwd(), "src", relPath.replace(/^\//, "")));
    } catch (e) {
      return false;
    }
  });

  // Head filter - limit array to first N items
  eleventyConfig.addFilter("head", function(array, n) {
    if (!array || !Array.isArray(array)) return [];
    return array.slice(0, n);
  });

  // Topic-related posts for a blog post's "More from the blog" block.
  // This block used to be `collections.blog | head(3)` — the same first three
  // posts under EVERY article, so no post was linked to its actual topic and
  // 108 of 111 posts never got a contextual link from here (20 older posts
  // were reachable only from /blog/page/4 and /blog/page/9-11).
  //
  // Relatedness is content similarity (TF-IDF cosine over each post's title,
  // description and slug words) — NOT tags/category, which 101 of 109 posts do
  // not have. A shared tag/category adds a small bonus when present. Picking
  // purely by similarity would make the strongest matches win under every
  // post and leave the rest buried, so the picks are assigned across the WHOLE
  // archive in one deterministic pass: a candidate's score drops for each
  // related link it already received (EXPOSURE_PENALTY) and it stops being
  // offered after MAX_INBOUND links. That spreads links over the archive while
  // every pick still has real topical overlap with the post it appears under
  // (MIN_SIMILARITY). Falls back to the newest posts only when nothing similar
  // is left, so the block is never short. Deterministic: sorted by URL, hash
  // tie-breaks — a rebuild never reshuffles.
  const RELATED_EXPOSURE_PENALTY = 0.06;
  const RELATED_MAX_INBOUND = 6;
  const RELATED_MIN_SIMILARITY = 0.08;
  const RELATED_STOPWORDS = new Set("about above after again also among and are because been before being between both but can could does doing down during each from further have having here how into just like more most must nepal not only other our out over same should some such than that the their them then there these they this those through under until very was were what when where which while who why will with would you your zunkiree zunkireelabs guide ultimate comprehensive essential complete benefits future impact exploring understanding".split(" "));
  const relatedCache = new Map();
  const hashStr = (str) => { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0; return h >>> 0; };
  const postTokens = (p) => {
    const text = [p.data?.title, p.data?.description, (p.url || "").replace(/[-/]/g, " ")].filter(Boolean).join(" ").toLowerCase();
    return new Set(text.split(/[^a-z0-9]+/).filter(w => w.length >= 3 && !RELATED_STOPWORDS.has(w)));
  };
  const buildRelatedAssignment = (collection, count) => {
    const posts = [...collection].sort((a, b) => (a.url < b.url ? -1 : 1));
    const tokens = new Map(posts.map(p => [p.url, postTokens(p)]));
    const df = new Map();
    for (const set of tokens.values()) for (const t of set) df.set(t, (df.get(t) || 0) + 1);
    const idf = (t) => Math.log((posts.length + 1) / ((df.get(t) || 0) + 0.5));
    const vec = new Map(posts.map(p => {
      const v = new Map(); let norm = 0;
      for (const t of tokens.get(p.url)) { const w = idf(t); v.set(t, w); norm += w * w; }
      return [p.url, { v, norm: Math.sqrt(norm) || 1 }];
    }));
    const extra = new Map(posts.map(p => [p.url, {
      tags: new Set((p.data?.tags || []).filter(t => t !== "blog" && t !== "post")),
      category: p.data?.category || null,
    }]));
    const similarity = (a, b) => {
      const A = vec.get(a.url), B = vec.get(b.url);
      let dot = 0; for (const [t, w] of A.v) if (B.v.has(t)) dot += w * B.v.get(t);
      let bonus = 0; const ea = extra.get(a.url), eb = extra.get(b.url);
      for (const t of eb.tags) if (ea.tags.has(t)) bonus += 0.05;
      if (ea.category && ea.category === eb.category) bonus += 0.03;
      return dot / (A.norm * B.norm) + bonus;
    };
    const inbound = new Map(posts.map(p => [p.url, 0]));
    const assignment = new Map();
    for (const post of posts) {
      const scored = posts.filter(c => c.url !== post.url).map(c => ({ item: c, sim: similarity(post, c), tie: hashStr(post.url + "|" + c.url) }));
      const eff = (x) => x.sim - RELATED_EXPOSURE_PENALTY * inbound.get(x.item.url);
      const pool = scored.filter(x => x.sim >= RELATED_MIN_SIMILARITY && inbound.get(x.item.url) < RELATED_MAX_INBOUND);
      const picked = [];
      while (picked.length < count && pool.length) {
        pool.sort((a, b) => eff(b) - eff(a) || a.tie - b.tie);
        const best = pool.shift();
        picked.push(best.item); inbound.set(best.item.url, inbound.get(best.item.url) + 1);
      }
      if (picked.length < count) {
        const have = new Set(picked.map(i => i.url));
        const newest = scored.map(x => x.item).filter(i => !have.has(i.url)).sort((a, b) => b.date - a.date);
        for (const i of newest) { if (picked.length >= count) break; picked.push(i); }
      }
      assignment.set(post.url, picked);
    }
    return assignment;
  };
  eleventyConfig.addFilter("relatedByTopic", function(collection, page, n) {
    if (!collection || !Array.isArray(collection) || !page) return [];
    const count = n || 3;
    const signature = count + "|" + collection.length + "|" + collection.map(i => i.url).sort().join(",");
    if (!relatedCache.has(signature)) { relatedCache.clear(); relatedCache.set(signature, buildRelatedAssignment(collection, count)); }
    return relatedCache.get(signature).get(page.url) || [];
  });

  // Reject items where attribute equals value
  eleventyConfig.addFilter("rejectattr", function(array, attr, comparison, value) {
    if (!array || !Array.isArray(array)) return [];
    if (comparison === "equalto") {
      return array.filter(item => {
        const itemValue = attr.split('.').reduce((obj, key) => obj?.[key], item);
        return itemValue !== value;
      });
    }
    return array;
  });

  // Truncate filter
  eleventyConfig.addFilter("truncate", function(str, length) {
    if (!str) return '';
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  });

  // Split filter for breadcrumbs
  eleventyConfig.addFilter("split", function(str, separator) {
    if (!str) return [];
    return str.split(separator).filter(s => s.length > 0);
  });

  // Title case filter
  eleventyConfig.addFilter("titleCase", function(str) {
    if (!str) return '';
    // Brand spelling: slugs predate the Zennly rename (zenly-case-study), so correct it in the derived label
    return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\bZenly\b/g, 'Zennly');
  });

  // Short 2-word topic label derived from a post title (fallback when no
  // explicit `shortLabel` frontmatter is set) — strips filler words so the
  // overlay reads as a topic ("Cloud Solutions") rather than a title fragment.
  const SHORT_LABEL_STOPWORDS = new Set([
    'a', 'an', 'the', 'why', 'what', 'how', 'is', 'are', 'to', 'of', 'for',
    'with', 'your', 'you', 'as', 'in', 'on', 'and', 'or', 'from', 'this',
    'that', 'exploring', 'understanding', 'unlocking', 'discovering'
  ]);
  eleventyConfig.addFilter("shortLabel", function(title) {
    if (!title) return '';
    const words = title
      .replace(/[:?!,]/g, '')
      .split(' ')
      .filter(w => w && !SHORT_LABEL_STOPWORDS.has(w.toLowerCase()));
    return words.slice(0, 2).join(' ');
  });

  // Blog posts tagged `category: Insights` (trend explainers) — drives the
  // Insights filter on /blog/ and the /blog/insights/ listing. Empty until the
  // first such post exists; both surfaces render nothing in that case.
  // Regular blog posts only: Insights live in their own listing (/blog/insights/)
  eleventyConfig.addCollection("articles", (collectionApi) =>
    collectionApi.getFilteredByTag("blog").filter((p) => p.data.category !== "Insights")
  );

  eleventyConfig.addCollection("insights", (collectionApi) =>
    collectionApi.getFilteredByTag("blog").filter((p) => p.data.category === "Insights")
  );

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
