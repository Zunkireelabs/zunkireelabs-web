# Technical SEO for AI Search: Rendering, Schema and Core Web Vitals

URL: https://zunkireelabs.com/blog/technical-seo-for-ai-search-rendering-schema-and-core-web-vitals/
Published: 2026-11-03
Summary: A technical checklist for SEO, AEO and GEO: crawlability, rendering, canonicals, JSON-LD, Core Web Vitals thresholds and what Google says AI features need.

**In short:** Technical SEO for AI search is making sure every important page can be crawled, rendered, understood and trusted by both search engines and AI systems. Google says there are no additional requirements for AI Overviews or AI Mode beyond being indexed and eligible for a snippet, so the work is mostly sound fundamentals done well: reachable pages, content present in the HTML, clean canonical signals, accurate structured data, good Core Web Vitals and a consistent entity.

## Key Takeaways

- **Crawl, render, index.** If a page cannot be fetched and its main content read, nothing else matters.
- **Put important content in the HTML response** (static generation or server rendering), not only in scripts that run after load.
- **Structured data helps machines read pages.** Google says no special schema is required for its AI features, so use it for accuracy, not as a trick, and keep it matching visible text.
- **Core Web Vitals:** aim for good scores at the 75th percentile: LCP within 2.5 seconds, INP 200 milliseconds or less, CLS 0.1 or less.
- **Consistency of entity** (name, address, profiles, descriptions) across your site and the web helps systems connect facts to you.
- **Measure.** Search Console reports AI features traffic within the Web search type, not separately.

## 1. Crawlability and Access

- **robots.txt** allows the bots you want. Decide deliberately about training versus search crawlers. See [AI crawlers and robots.txt](/blog/ai-crawlers-and-robots-txt-gptbot-oai-searchbot-claudebot-perplexitybot/).
- **CDN and firewall rules** do not block legitimate bots. Google lists hosting and CDN access among the basics.
- **XML sitemap** lists canonical, indexable URLs with accurate last-modified dates, and is referenced in robots.txt.
- **Status codes:** real 404s for missing pages, 301s for moves, no soft 404s, no redirect chains.
- **Internal links** are real anchor links with descriptive text, so every important page is reachable within a few clicks.
- **Parameters and duplicates:** control faceted URLs and tracking parameters.

## 2. Rendering

Search systems can process JavaScript, but it adds delay and risk, and other crawlers may not run scripts at all. The safer pattern:

| Approach | Content in first HTML | SEO risk | Notes |
|---|---|---|---|
| Static site generation | Yes | Low | Ideal for marketing and content pages |
| Server-side rendering | Yes | Low | Good for dynamic pages |
| Hybrid / incremental | Yes | Low | Mix per route |
| Client-side only | No, built after load | Higher | Avoid for pages you want found |

Test by viewing the raw HTML response and the rendered DOM. Confirm headings, body text, links and structured data are in the first response. Use URL Inspection in Search Console to see what Googlebot sees.

## 3. Canonicals, Duplicates and International Signals

- One **canonical URL** per page, self-referencing, absolute and consistent with sitemap and internal links.
- Pick **one host and protocol** and redirect the rest.
- For multilingual sites, use **hreflang** with reciprocal links and a matching canonical per language. Do not canonicalise a translation to the English page.
- Avoid near-duplicate pages that compete for the same query. Consolidate or differentiate.

## 4. Structured Data That Is Accurate

Use JSON-LD, matching what the page shows. A useful pattern is a small entity graph with stable `@id` values:

- **Organization** (name, logo, URL, social profile links) on the site, referenced from other nodes.
- **WebSite** and **WebPage** with breadcrumbs.
- **Article** for posts, with headline, dates, author and image.
- **Service** or **SoftwareApplication** for offerings.
- **FAQPage** only where visible questions and answers exist.
- **LocalBusiness** with consistent name, address and phone for physical locations.

Validate with Google's Rich Results Test and the Schema Markup Validator. Do not mark up content that is not on the page, and do not invent reviews or ratings. Google's guidance is that no special schema is needed to appear in AI features, so treat markup as clarity, not leverage.

## 5. Core Web Vitals

Google lists three Core Web Vitals, all assessed at the 75th percentile of page loads, mobile and desktop segmented:

| Metric | Measures | Good threshold |
|---|---|---|
| Largest Contentful Paint (LCP) | Loading | Within 2.5 seconds |
| Interaction to Next Paint (INP) | Interactivity | 200 ms or less |
| Cumulative Layout Shift (CLS) | Visual stability | 0.1 or less |

Google recommends good Core Web Vitals for success in Search and says it aligns with what its ranking systems seek to reward, without publishing a weight. The common fixes:

- **LCP:** optimise the hero image (modern formats, correct size, priority hint), reduce render-blocking CSS and scripts, use a CDN and server-render the page.
- **INP:** break up long tasks, defer non-critical scripts, reduce third-party tags and avoid heavy work on interaction.
- **CLS:** set width and height on images and embeds, reserve space for ads and banners, avoid injecting content above existing content.

Use field data (the Chrome UX Report in Search Console and PageSpeed Insights) for truth and lab data for debugging.

## 6. Content Structure for Extraction

- One **H1** that states the topic.
- A **direct answer** in the first paragraph, then detail under descriptive headings written as the questions people ask.
- **Tables** for comparisons, **lists** for steps, **definitions** in plain sentences.
- **Dated facts and named sources** for statistics.
- **Author and organisation** information visible.

## 7. Machine-Friendly Extras

- **Markdown copies** of pages and a single full-text file can help tools that prefer one fetch to many page parses. We publish these for our Insights posts.
- **llms.txt** is optional and unproven. Read [what it is and whether you need one](/blog/what-is-llms-txt-and-do-you-need-one/).
- **Images:** descriptive alt text and file names. Add transcripts for audio and video.

## 8. Monitoring

- **Search Console:** coverage, performance, Core Web Vitals and structured data reports.
- **Server logs:** which bots fetch which pages, and errors they hit.
- **Prompt checks:** ask AI systems your customers' questions on a schedule. See [measuring AI search visibility](/blog/how-to-measure-ai-search-visibility-a-simple-monthly-method/).
- **Release checks:** run an automated crawl on every deploy to catch broken canonicals, noindex tags or missing schema.

## Quick Audit Checklist

1. Key pages return 200 and are in the sitemap.
2. Main content and links are in the initial HTML.
3. One correct canonical per page; hreflang reciprocal.
4. JSON-LD validates and matches visible text.
5. LCP, INP and CLS pass at the 75th percentile.
6. Robots.txt and CDN settings reflect your crawler policy.
7. Entity details are identical everywhere.
8. Monitoring is in place and reviewed monthly.

## How We Approach It

We build sites on fast, server-rendered or static stacks and treat technical SEO as part of the build rather than an afterthought. Our web stack includes Next.js, Tailwind, TypeScript, headless CMS options and Cloudflare, with AEO and SEO work covering audits, fixes, content structure and measurement. See [web development](/solutions/web-development/) and our [answer engine optimization service](/solutions/aeo-seo/).

## The Short Version

AI search does not need secret tricks. It needs pages that can be reached, rendered and understood, with accurate structured data, healthy Core Web Vitals and a consistent identity. Get the fundamentals right, verify them on every release, and measure what the systems say about you.

## FAQ

**What is technical SEO for AI search?**
It is making sure your pages can be crawled, rendered, understood and trusted by search engines and AI systems: accessible robots and CDN settings, content in the HTML, clean canonicals, accurate structured data and good Core Web Vitals.

**Does Google require special schema markup for AI Overviews?**
No. Google says there is no special schema.org structured data you need and no extra requirements beyond a page being indexed and eligible to show with a snippet. Accurate markup still helps machines read your pages.

**What are the Core Web Vitals thresholds?**
Google's good thresholds, measured at the 75th percentile, are LCP within 2.5 seconds, INP 200 milliseconds or less and CLS 0.1 or less.

**Is JavaScript rendering bad for SEO?**
Not inherently, but putting important content only in client-side scripts adds delay and risk, and some crawlers do not run scripts. Static or server rendering with content in the first HTML is safer.

**Which structured data types should a business site use?**
Organization, WebSite and WebPage with breadcrumbs, Article for posts, Service or SoftwareApplication for offerings, FAQPage for visible questions and LocalBusiness for physical locations, all matching visible content.

**How do I see AI Overviews traffic in Search Console?**
Google says traffic from AI features is included in the overall Search Console data, under the Web search type. There is no separate report, so combine it with prompt checks and analytics.

## Related Insights

- [What Is GEO? Generative Engine Optimization vs AEO vs SEO](/blog/what-is-generative-engine-optimization-geo-vs-aeo-vs-seo/)
- [AI Crawlers and robots.txt: GPTBot, ClaudeBot, PerplexityBot](/blog/ai-crawlers-and-robots-txt-gptbot-oai-searchbot-claudebot-perplexitybot/)
- [What Is llms.txt? What It Does and Whether Your Site Needs One](/blog/what-is-llms-txt-and-do-you-need-one/)

## Sources

- Google Search Central, [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), read November 3, 2026
- web.dev, [Web Vitals](https://web.dev/articles/vitals), last updated October 31, 2024
- Google Search Central, [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals), read November 3, 2026
