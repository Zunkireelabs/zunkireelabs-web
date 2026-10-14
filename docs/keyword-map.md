# Keyword map (targets, not measured volume)

No search-volume tool was used. These are target phrases chosen from what the business sells; confirm demand in Search Console before investing further. Google ignores the meta keywords tag, so each phrase is placed in the title, description, headings and FAQ of its page, and in `keywords` inside the TechArticle schema.

| Page | Primary phrase | Secondary phrases |
|---|---|---|
| /blog/top-ai-companies-nepal-2026/ | AI company in Nepal | AI companies in Nepal, Zunkiree Labs |
| /blog/top-tech-companies-nepal-2026/ | top IT companies in Nepal | software companies in Nepal, tech companies in Nepal |
| /resources/ai-agents-for-business-whitepaper/ | AI agents for business | autonomous AI agents, agentic AI |
| /resources/rag-for-enterprise-knowledge-whitepaper/ | RAG pipeline | retrieval augmented generation, enterprise AI search |
| /resources/voice-ai-agents-customer-support-whitepaper/ | AI voice agent | voice AI for customer service, AI phone agent |
| /resources/ai-booking-automation-service-businesses-whitepaper/ | AI booking system | appointment scheduling automation, reduce no-shows |
| /resources/ai-patient-communication-clinics-whitepaper/ | AI for dental clinics | AI patient communication, healthcare chatbot |
| /resources/ai-lead-response-real-estate-whitepaper/ | AI for real estate | real estate lead follow-up automation, property chatbot |
| /resources/ai-student-inquiries-education-consultancies-whitepaper/ | AI for education consultancy | student inquiry automation, study abroad chatbot |
| /resources/answer-engine-optimization-whitepaper/ | answer engine optimization | AEO, generative engine optimization, AI Overviews |
| /resources/build-vs-buy-ai-software-nepal-whitepaper/ | software outsourcing Nepal | custom AI development, build vs buy software |
| /resources/ai-governance-data-privacy-sme-whitepaper/ | AI governance checklist | AI data privacy, responsible AI for small business |

## Homepage and solution pages (titles and meta descriptions rewritten 2026-10-13)

| Page | Primary phrase | Secondary phrases |
|---|---|---|
| / | AI company in Nepal | AI agents, custom AI, RAG search, voice agents |

**Homepage body copy (2026-10-13).** The meta title alone does not rank a page; the `<h1>` is a strong signal and was a pure brand slogan ("Building AI to make lives better.") with no searchable term. Decision: keep the H1 slogan unchanged, move the keywords into the hero subhead. Subhead now reads "An AI development company in Kathmandu building AI agents, RAG search and voice agents for businesses worldwide." (was "Launch AI workflows across your business in days, already proven in production." — the "proven in production" credibility claim was dropped in the trade). The manual two-row `<br class="hidden sm:block">` structure is preserved; verified 2 rows at 1440px, 3 at 768px, 4 at 390px, 0 overflow.
| /solutions/ai-customer-experience/ | AI customer support automation | AI chatbots, customer support AI |
| /solutions/app-development/ | mobile app development Nepal | iOS and Android app development |
| /solutions/custom-software/ | custom software development company in Nepal | enterprise applications, internal tools |
| /solutions/data-systems/ | data engineering | ML infrastructure, data pipelines, feature stores |
| /solutions/saas-development/ | SaaS development company | multi-tenant SaaS, subscription billing |
| /solutions/web-development/ | web development company in Nepal | SEO-ready websites |

## Remaining solution pages (rewritten 2026-10-13)

| Page | Primary phrase | Secondary phrases |
|---|---|---|
| /solutions/ | AI development services Nepal | custom AI agents, RAG pipelines, SaaS platforms |
| /solutions/aeo-seo/ | answer engine optimization agency | AEO, ChatGPT/Perplexity/AI Overviews visibility |
| /solutions/ai-development/ | AI development company | custom AI, RAG pipelines, document AI |
| /solutions/ai-ecommerce/ | AI ecommerce chatbot | shopping agents, Shopify/WooCommerce/Daraz |
| /solutions/custom-agent/ | AI agent development company | custom autonomous agents, bounded authority |
| /solutions/generative-ui/ | generative UI development | runtime interfaces, design system |
| /solutions/software-outsourcing/ | software outsourcing company in Nepal | dedicated teams, white-label engineering |
| /solutions/voice-agent/ | AI voice agent development | AI phone agent, appointment booking |

Unsourced claims removed from meta descriptions while doing this: "3x AI citation rates" (aeo-seo), "Production-ready in 3 months" (ai-development), "4.7+ average app store ratings" (app-development), "95+ PageSpeed scores" (web-development), "Reduce support tickets by 40%" (ai-customer-experience). They may still appear in page bodies — not audited.

## Industry pages — no change needed

`/industries/{education,agencies,healthcare,real-estate}/` render their title and description from the `seo` layer in `src/_data/industries.js` (`industries.map((i) => ({ ...i, ...seo[i.id] }))`), which already carries keyword-led values: "AI for Education Consultancies", "AI Operating System for Agencies", "AI Workforce Compliance for Healthcare", "AI for CRE Sponsors and Capital Raises". Editing the base `title`/`description` on each industry object has no effect on the rendered page — the `seo` spread overrides it. Edit the `seo` object if these ever need to change.

## Insights posts added 2026-10-13

| Page | Primary phrase |
|---|---|
| /blog/where-ai-answers-get-their-sources/ | AI search citations, brand visibility in AI search |
| /blog/google-gemini-agent-universal-work-agent/ | Gemini agent, enterprise AI agents |

## AI-crawler (AEO) foundations — audited 2026-10-13

Verified present and working, no change needed: robots.txt explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended and Applebot-Extended (and blocks Bytespider); sitemap.xml; llms.txt and llms-full.txt (the latter generated by `scripts/build-llms-full.mjs`, Insights posts only, by design); Organization schema with a populated `sameAs` (LinkedIn, Clutch, GoodFirms, TechBehemoths, StartupsNepal, Trustpilot, Instagram); canonical and hreflang on every page; `<link rel="alternate" type="text/markdown">` on Insights posts, which resolve 200.

Fixed: `.md` responses were served as `application/octet-stream`, and because the site also sends `X-Content-Type-Options: nosniff`, a crawler following the markdown alternate could not treat it as text. Now `text/markdown; charset=utf-8` in both `nginx/static.conf` and `vercel.json`.

## Directory split (2026-10-13)

`/blog/top-tech-companies-nepal-2026/` covered AI, software development and startups in one ~21,000px page. It is now a hub (~12,000px) with three category pointers; the lists live on their own pages:

| Page | Primary phrase | Notes |
|---|---|---|
| /blog/top-tech-companies-nepal-2026/ | top IT companies in Nepal | Hub. Keeps Zunkiree profile, AI name-only list, verification checklist, FAQ. URL unchanged, so existing ranking is preserved. |
| /blog/top-software-development-companies-nepal-2026/ | software development companies in Nepal | New. 18 companies, name + focus only. |
| /blog/rising-tech-startups-nepal-2026/ | tech startups in Nepal | New. 15 full profiles. |
| /blog/top-ai-companies-nepal-2026/ | AI company in Nepal | Existing page used as the AI category page. A separate AI directory page was deliberately NOT created: it would have competed with this post for the same query and re-published competitor names. |

German hub (`src/de/blog/top-tech-companies-nepal-2026.md`) was NOT split and still holds the long page; the new pages have no German versions yet.

Known pre-existing bug: the "On this page" sidebar box is empty on every blog post. `blog-post.njk` comments "TOC will be generated by JS if needed" but no script builds it.

## Hub trimmed further (2026-10-13)

The hub's two non-directory sections now live on their own pages, so the hub no longer carries two competing FAQs:

| Page | Primary phrase | Notes |
|---|---|---|
| /blog/how-to-check-a-nepali-it-company-before-you-hire-it/ | how to check an IT company in Nepal | Moved verbatim from the hub, with its three sources. |
| /blog/nepal-tech-companies-faq/ | tech companies in Nepal FAQ | The 10-question FAQ, with FAQPage schema built from those same 10 questions. |

The hub keeps only the grey SEO "Frequently asked questions" box (6 questions). Its answers were corrected: Gaamma is a manufacturing ERP (not "business analytics"), and the support-ticket claim was replaced with published case-study figures. Schema and visible text match.

The two unsourced figures that were on the FAQ page (developer salary ranges in NPR, and "Nepal offers 20-40% lower costs than India") were softened on 2026-10-13 in the visible text, the FAQ schema and the German hub. If a real salary survey or cost comparison is available, specific numbers can be reinstated with a citation.
