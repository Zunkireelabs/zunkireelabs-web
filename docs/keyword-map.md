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

## Trending-topic Insights posts added 2026-10-27

Targets, not measured volume. Each post pairs a global query (how people search worldwide) with a local angle for Nepal and South Asia buyers, and links to the solution page that sells the matching capability. Phrases sit in the title, description, H2/H3 headings, FAQ and the `tags` list, which feeds `keywords` in the Article schema.

| Page | Global phrases | Nepal / local angle | Links to |
|---|---|---|---|
| /blog/ai-reverse-engineering-coding-agents-ghidra-ida-mcp/ | AI reverse engineering, Ghidra MCP, LLM binary analysis, AI malware analysis | legacy software modernization Nepal, software outsourcing Nepal | /solutions/custom-software/, /solutions/custom-agent/ |
| /blog/nvidia-openshell-safe-ai-agents-gtc-berlin-2026/ | NVIDIA OpenShell, AI agent security, Vera Rubin, safe AI agents | AI agent development company in Nepal | /solutions/custom-agent/, AI governance whitepaper |
| /blog/ai-voice-agent-appointment-booking-what-it-is-and-when-it-fits/ | AI voice agent, AI phone agent, voice AI for customer service, AI appointment booking | AI voice agent Nepal, Nepali voice agent | /solutions/voice-agent/, voice AI agents whitepaper, AI booking whitepaper |
| /blog/what-is-generative-ui-and-when-does-a-business-need-it/ | generative UI, what is generative UI, AI-generated interfaces, conversational dashboards | generative UI development Nepal | /solutions/generative-ui/, /solutions/ai-development/ |
| /blog/ai-chatbot-vs-ai-agent-customer-support-automation-for-business/ | AI chatbot for business, AI customer support automation, chatbot vs AI agent | AI chatbot Nepal, ecommerce chatbot Nepal | /solutions/ai-customer-experience/, /solutions/ai-ecommerce/, /solutions/custom-agent/ |
| /blog/ai-in-education-cloud-operations-and-construction-what-our-case-studies-show/ | AI case study, AI for education consultancy, AI for construction, AI search for operations | AI in Nepal case study, AI for construction Nepal | /resources/admizz-case-study/, /resources/corecloud365-case-study/, /resources/khushbu-nirman-case-study/ |
| /blog/mcp-specification-security-what-changed/ | MCP security, Model Context Protocol security, MCP specification, AI agent security | AI agent security Nepal | /solutions/custom-agent/, AI governance whitepaper |
| /blog/owasp-mcp-top-10-explained-for-business-owners/ | OWASP MCP Top 10, MCP vulnerabilities, AI agent risks | AI governance Nepal | AI governance whitepaper, /solutions/custom-agent/ |
| /blog/openai-models-on-google-cloud-what-multi-cloud-ai-means/ | OpenAI Google Cloud, multi-cloud AI, OpenAI Model Garden | AI development company in Nepal | /solutions/ai-development/, /solutions/custom-agent/ |
| /blog/ai-overviews-fewer-clicks-what-google-says-to-do/ | AI Overviews clicks, optimize for AI Overviews, generative engine optimization, AI Mode SEO | AEO Nepal | /solutions/aeo-seo/, AEO whitepaper |
| /blog/gpt-6-1-terra-price-what-half-the-price-means/ | GPT-6.1 Terra, GPT-6.1 Terra pricing, OpenAI API pricing | AI cost for Nepal businesses | /solutions/ai-development/ |
| /blog/microsoft-execution-containers-agent-containment-explained/ | Microsoft Execution Containers, MXC, sandbox AI agents, contain AI agent | AI agent security Nepal | /solutions/custom-agent/, AI agents whitepaper |
| /blog/ai-for-education-consultancy-student-inquiry-automation-guide/ | AI for education consultancy, student inquiry automation, study abroad chatbot, AI for study abroad consultancy | AI for education consultancy Nepal, study abroad consultancy Nepal | /industries/education/, /resources/admizz-case-study/, /resources/ai-student-inquiries-education-consultancies-whitepaper/, /solutions/ai-customer-experience/ |
| /blog/ai-for-real-estate-lead-follow-up-property-chatbot-guide/ | AI for real estate, real estate lead follow-up automation, property chatbot, real estate lead qualification | AI for real estate Nepal, property chatbot Nepal | /resources/ai-lead-response-real-estate-whitepaper/, /solutions/ai-customer-experience/, /solutions/voice-agent/, /resources/chayce-properties-case-study/ |
| /blog/ai-for-agencies-operating-system-pipeline-proposals-delivery/ | AI for agencies, agency workflow automation, AI operations for marketing agency, agency operating system | AI for agencies Nepal, agency software Nepal | /industries/agencies/, /products/ai-crm/, /products/orca/, AI governance whitepaper |
| /blog/ai-booking-system-reduce-no-shows-service-businesses-guide/ | AI booking system, appointment scheduling automation, reduce no-shows, cancellation backfill | AI booking system Nepal, appointment scheduling for salons and clinics in Nepal | /solutions/voice-agent/, /solutions/custom-agent/, /resources/ai-booking-automation-service-businesses-whitepaper/, /resources/zenly-case-study/ |
| /blog/ai-patient-communication-clinic-guide-what-ai-may-and-may-not-say/ | AI patient communication, healthcare chatbot for clinics, AI for clinics, healthcare compliance | AI for clinics Nepal, healthcare chatbot Nepal | /industries/healthcare/, /solutions/ai-customer-experience/, /solutions/voice-agent/, /resources/ai-patient-communication-clinics-whitepaper/, /resources/dental-ai-case-study/ |

Industry posts (education, real estate, agencies, booking, clinics): every figure is attributed to the company's own case study or whitepaper; no hours, percentages or client quotes were invented. The Khems Cleaning 70% whitepaper figure was left out because its case-study page labels results illustrative. The agencies industry data contains a `[NEEDS SADIN: confirmed metric…]` placeholder, so the agencies post cites no result figure. The Nepal-angle phrases are targets only and the posts carry little Nepal-specific content.

Content rule for the four case-study and product posts above (voice agent, generative UI, chatbot vs agent, case studies): client figures are quoted only from the published case studies and attributed as reported; no client quotes are reproduced; the repo's unsourced support statistics (CSAT, ticket-resolution rates) are deliberately not repeated. Khems Cleaning, Prime Tiles, CMS Group and Rapid Investment were left out because their case-study pages label results as illustrative.

Sources checked against primary pages on 2026-10-27: Anthropic's announcements page, NVIDIA's newsroom, InfoQ and arXiv. Topics skipped: Claude 5.5 and the FTC/rogue-agents story (already covered by existing posts), and Anthropic's S-1 (the dates in coverage conflicted, 1 June versus 26 October, so it was left out). "Claude Duet" appeared only in aggregator coverage and not on Anthropic's own page, so it was not used.

Internal links added: the FTC probe post and the AI-agents-infrastructure post now list the new posts under Related Insights.

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

## MCP and agent-security posts (2026-10-28)

Target phrases, not measured volume. Confirm demand in Search Console and Bing Webmaster Tools (AI Performance) before investing further.

| Page | Primary phrase | Secondary phrases |
|---|---|---|
| /blog/cloudflare-mcp-server-explained-what-it-does-and-how-to-connect/ | Cloudflare MCP server | MCP server, Model Context Protocol, how to connect MCP, Cloudflare API MCP |
| /blog/cloudflare-mcp-october-2026-step-up-authorization-events-skills/ | Cloudflare MCP updates | step-up authorization MCP, MCP events, skills over MCP, MCP /sse deprecated |
| /blog/mcp-specification-security-what-changed/ | MCP security | MCP specification 2026, MCP attack surface, AI agent security |
| /blog/owasp-mcp-top-10-explained-for-business-owners/ | OWASP MCP Top 10 | MCP risks, AI agent security for business |

## New whitepapers (2026-10-28)

Target phrases, not measured volume. Each paper has TechArticle and FAQPage schema, a sources list and cross-links to the matching blog post.

| Page | Primary phrase | Secondary phrases |
|---|---|---|
| /resources/predictive-maintenance-small-manufacturers-whitepaper/ | predictive maintenance for small manufacturers | predictive maintenance AI, sensor data machine failure, one-machine pilot |
| /resources/mcp-agent-security-checklist-business-whitepaper/ | MCP security checklist | AI agent security, OWASP MCP Top 10, least privilege agents |
| /resources/ai-orchestration-automation-agents-whitepaper/ | AI orchestration vs automation vs agents | agentic AI, multi-agent orchestration, workflow automation |

## New ebooks, guides and reports (2026-10-28)

Target phrases, not measured volume. Each page has TechArticle and FAQPage schema and a sources list.

| Page | Primary phrase | Secondary phrases |
|---|---|---|
| /resources/ai-agents-small-business-playbook-ebook/ | AI agents for small business | AI automation small business, AI agent playbook |
| /resources/ai-compliance-business-owners-ebook/ | AI compliance for business | EU AI Act business, AI privacy rules, AI risk |
| /resources/ai-in-education-evidence-ebook/ | AI in education | AI tutoring evidence, AI for schools |
| /resources/ai-in-healthcare-clinics-evidence-ebook/ | AI in healthcare clinics | clinical AI evidence, AI for clinics |
| /resources/choosing-ai-development-partner-buyers-ebook/ | how to choose an AI development partner | AI vendor selection, AI company buyer guide |
| /resources/evaluate-healthcare-ai-tool-before-you-buy-guide/ | how to evaluate a healthcare AI tool | healthcare AI procurement, AI vendor checklist clinics |
| /resources/get-cited-by-ai-engines-guide/ | get cited by ChatGPT | AI Overviews citations, Copilot citations, AEO guide |
| /resources/introduce-ai-school-training-program-guide/ | how to introduce AI in a school | AI in training programs, AI classroom policy |
| /resources/run-30-day-ai-agent-pilot-guide/ | AI agent pilot | how to pilot an AI agent, 30-day AI pilot |
| /resources/write-ai-policy-for-your-team-guide/ | how to write an AI policy | AI policy template, AI use policy for employees |
| /resources/ai-in-education-evidence-report-2026/ | AI in education report | AI tutoring trials, teacher workload AI |
| /resources/ai-regulation-data-residency-by-market-2026-report/ | AI regulation by country | data residency, EU AI Act, Canada AI privacy, Australia Privacy Act |
| /resources/clinical-ai-evidence-digest-2026-report/ | clinical AI evidence | AI mammography screening trial, AI sepsis alert, AI medical scribes |
| /resources/state-of-ai-agent-infrastructure-2026-report/ | AI agent infrastructure | MCP, agent security, agent pricing models |
| /resources/ai-answers-source-selection-evidence-digest-2026-report/ | how AI answers choose sources | AI citations, Google AI Overviews requirements, AI visibility, answer engine optimization |
