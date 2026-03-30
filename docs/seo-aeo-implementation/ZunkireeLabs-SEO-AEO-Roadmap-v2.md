# ZunkireeLabs — SEO + AEO Growth Roadmap
**Version 2.0 | Updated: March 2026**
**For use as Claude Code context — paste this at the start of any new Claude Code session**

---

## PROJECT CONTEXT (Read this first)

**Website:** zunkireelabs.com
**Company:** Zunkiree Labs — AI infrastructure company, Kathmandu, Nepal. Founded 2018.
**Founder:** Sadin Shrestha
**Stack:** Eleventy 3.x (11ty) + Vite + Tailwind CSS + Alpine.js + GSAP + Lenis
**Hosting:** Docker on VPS, deployed via GitHub Actions
**Environments:** Production (zunkireelabs.com), Staging (dev-web.zunkireelabs.com)
**Base layout file:** src/_includes/layouts/base.njk
**Data directory:** src/_data/
**GA4 Measurement ID:** G-EJXG0YSQKR (production only)
**Google Search Console:** Verified, linked to GA4 ✅

**Services offered:**
- AI Development (RAG pipelines, LLM integration)
- AI Customer Experience (chatbots, conversational AI)
- Data Systems (pipelines, warehouses)
- Custom Software (enterprise apps)
- SaaS Development (multi-tenant platforms)
- Web & App Development
- AEO & SEO
- AI Agents + Orchestration

**Products:**
- Zunkiree Search (AI-native search platform)
- Dental AI (practice management)
- Gaamma (ERP for manufacturing)
- AI Booking Engine
- AI CRM

**Target clients:** Startups, SMBs, enterprises — Nepal first, then global
**SEO baseline when started:** Zero (no analytics, no schema, no GBP, no blog)

---

## OVERALL GOAL

Build a complete SEO + AEO system that:
1. Ranks ZunkireeLabs #1 locally in Kathmandu/Nepal for AI company keywords
2. Expands to global rankings for AI development service keywords
3. Gets ZunkireeLabs cited by ChatGPT, Perplexity, and Google AI Overviews
4. Generates consistent inbound leads via organic search

---

## IMPLEMENTATION RULES (Apply to every task)

- Never modify existing functionality, layouts, styles, or logic unless explicitly instructed
- Never install new packages without checking if an alternative already exists
- Always discover/audit first, implement second — show findings before touching files
- Always show a full diff of changed files before finishing
- Never hardcode sensitive values (IDs, keys) — use environment variables
- Make the smallest possible change to achieve the goal
- Production only for tracking/analytics — never add to staging

---

## PHASE 1 — FOUNDATION (Days 1–14)

### ✅ DAY 1 — COMPLETE (March 30, 2026)

**Goal:** Set up analytics infrastructure

**What was done:**
1. ✅ Created GA4 account under "Zunkireelabs" → property "Zunkireelabs Website"
2. ✅ Created Web data stream "Main" for https://zunkireelabs.com
3. ✅ Measurement ID obtained: G-EJXG0YSQKR
4. ✅ Removed old dummy GA tag (G-2ZQRDS0D14) from base.njk
5. ✅ Created src/_data/env.js to expose GA_MEASUREMENT_ID to Eleventy templates
6. ✅ Updated base.njk with conditional GA script using {{ env.GA_MEASUREMENT_ID }}
7. ✅ Created .env.production with GA_MEASUREMENT_ID=G-EJXG0YSQKR
8. ✅ Added .env.production to .gitignore
9. ✅ Updated Dockerfile with ARG and ENV for GA_MEASUREMENT_ID
10. ✅ Updated .github/workflows/deploy.yml to pass GA_MEASUREMENT_ID from GitHub Secrets (production only)
11. ✅ Added GitHub Secret: GA_MEASUREMENT_ID = G-EJXG0YSQKR
12. ✅ Linked Google Search Console (zunkireelabs.com domain property) to GA4

**Files changed on Day 1:**
- src/_includes/layouts/base.njk
- src/_data/env.js (new)
- .env.production (new, gitignored)
- .gitignore
- Dockerfile
- .github/workflows/deploy.yml

---

### DAY 2 — Schema Markup (Technical SEO + AEO Foundation)

**Goal:** Make ZunkireeLabs parseable by Google and AI engines (ChatGPT, Perplexity, SGE)

**Why this matters:** Without schema, AI engines cannot confidently identify what ZunkireeLabs is, where it's located, or what it does. This is blocking AEO citations.

**Claude Code Instructions for Day 2:**

```
CONTEXT: This is zunkireelabs.com — Eleventy 3.x site, base layout at src/_includes/layouts/base.njk, data files at src/_data/

TASK: Add JSON-LD schema markup to the website. Follow these rules:
- Do NOT modify any existing functionality, styles, or layout
- Discover the current page structure first before implementing
- Show all diffs before finishing

STEP 1 — DISCOVER:
a) Check if any schema/JSON-LD already exists anywhere in the codebase (search for "application/ld+json", "@context", "schema.org")
b) List all page templates in src/_includes/layouts/ 
c) Check if service pages, product pages have their own layout templates or share base.njk
d) Check src/_data/ for any existing site metadata files
Tell me findings before proceeding.

STEP 2 — Create a central schema data file:
Create src/_data/schema.js with the following schemas as exported objects:

1. Organization schema (for all pages):
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zunkiree Labs",
  "url": "https://zunkireelabs.com",
  "logo": "https://zunkireelabs.com/assets/zunkireelabs-logo-round-CmIY3DmI.svg",
  "description": "AI infrastructure company building custom AI systems, RAG pipelines, AI agents, and enterprise software. Headquartered in Kathmandu, Nepal.",
  "foundingDate": "2018",
  "founder": {
    "@type": "Person",
    "name": "Sadin Shrestha"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kathmandu",
    "addressRegion": "Bagmati Province",
    "addressCountry": "NP"
  },
  "sameAs": [
    "https://linkedin.com/company/zunkiree-labs"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://zunkireelabs.com/contact/"
  }
}

2. LocalBusiness schema (for homepage and location pages):
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zunkiree Labs",
  "description": "AI development company in Kathmandu, Nepal. Custom AI systems, AI agents, RAG pipelines, and enterprise software.",
  "url": "https://zunkireelabs.com",
  "logo": "https://zunkireelabs.com/assets/zunkireelabs-logo-round-CmIY3DmI.svg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kathmandu",
    "addressRegion": "Bagmati",
    "addressCountry": "NP"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }]
}

3. WebSite schema with SearchAction (for homepage):
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zunkiree Labs",
  "url": "https://zunkireelabs.com",
  "description": "AI infrastructure company building intelligent software platforms."
}

STEP 3 — Add schema to base.njk:
Inside the <head> tag, add Organization schema on ALL pages using:
<script type="application/ld+json">{{ schema.organization | dump | safe }}</script>

STEP 4 — Add page-specific schema:
- Homepage (index.njk or equivalent): add LocalBusiness + WebSite schema
- Service pages: add Service schema — detect if service pages have a shared layout template and add there
- If service pages use base.njk with front matter, use Eleventy's page.url to conditionally output schemas

STEP 5 — Add BreadcrumbList schema:
For all pages except homepage, add BreadcrumbList schema dynamically using the page URL and title from Eleventy's page object.

STEP 6 — Verify:
- Show full diff of all changed files
- Confirm schema is valid JSON (no syntax errors)
- List which schema appears on which page type
- Tell me to test at: https://search.google.com/test/rich-results
```

---

### DAY 3 — Meta Titles + Meta Descriptions

**Goal:** Fix all page titles and add missing meta descriptions with keyword-targeted copy

**Why this matters:** Homepage title currently has no geo signal ("Nepal") and no primary keyword intent. Every service page likely has thin or missing meta descriptions.

**Claude Code Instructions for Day 3:**

```
CONTEXT: Eleventy 3.x site, zunkireelabs.com, base layout at src/_includes/layouts/base.njk

TASK: Audit and fix all meta titles and meta descriptions site-wide.

STEP 1 — DISCOVER:
a) How are meta title and description currently set? (front matter, base.njk hardcoded, or data files?)
b) List every page/template and its current title tag value
c) List which pages are missing meta descriptions entirely
Show findings before proceeding.

STEP 2 — Implement a meta system:
If not already using front matter for meta:
- Add a title and description variable system to base.njk
- Default fallback title: "Zunkiree Labs | AI Infrastructure Company | Kathmandu, Nepal"
- Default fallback description: "Zunkiree Labs builds custom AI systems, RAG pipelines, AI agents, and enterprise software. Nepal's leading AI infrastructure company."

STEP 3 — Update these specific pages with these exact titles and descriptions:

Homepage:
- Title: AI Development Company in Nepal | Zunkiree Labs
- Description: Zunkiree Labs builds custom AI systems, RAG pipelines, and AI agents for businesses in Nepal and globally. AI infrastructure engineered right. Based in Kathmandu.

/services/ai-development/:
- Title: Custom AI Development Services | RAG Pipelines & LLM Integration | Zunkiree Labs
- Description: Build production-grade AI systems with Zunkiree Labs. RAG pipelines, LLM integration, AI agents, and enterprise AI. Nepal's leading AI development company.

/services/ai-customer-experience/:
- Title: AI Customer Experience Services | Intelligent Chatbots | Zunkiree Labs
- Description: Reduce support tickets by 40% with AI-powered customer support. Intelligent chatbots and conversational AI built for your business. Zunkiree Labs, Nepal.

/services/data-systems/:
- Title: Data Engineering & AI Data Systems | Zunkiree Labs Nepal
- Description: Build scalable data pipelines, warehouses, and AI-ready infrastructure. Get your data ready for machine learning. Zunkiree Labs, Kathmandu.

/services/custom-software/:
- Title: Custom Software Development | Enterprise Apps | Zunkiree Labs Nepal
- Description: Enterprise applications tailored to your workflows. Internal tools and business systems built by Zunkiree Labs, Kathmandu's leading software company.

/services/saas-development/:
- Title: SaaS Development Company | Multi-Tenant Platforms | Zunkiree Labs
- Description: Launch your SaaS product in months. Multi-tenant platforms with subscription billing, user management, and scalable architecture. Zunkiree Labs, Nepal.

/services/web-development/:
- Title: Web & App Development Nepal | High-Performance Sites | Zunkiree Labs
- Description: High-performance websites and mobile apps optimized for speed and conversion. Modern frameworks, SEO-ready. Zunkiree Labs, Kathmandu Nepal.

/products/search/:
- Title: AI-Native Search Platform | Zunkiree Search | Natural Language Search
- Description: Zunkiree Search delivers direct answers instead of keyword results. AI-powered natural language search for your website. Integrate in 2 hours. Start free.

/products/dental-ai/:
- Title: Dental AI Software | Practice Management with AI | Zunkiree Labs
- Description: AI-powered dental practice management software. Automate patient communication, scheduling, and records. Built by Zunkiree Labs, Nepal.

/products/gaamma/:
- Title: Gaamma ERP | AI-Powered Manufacturing ERP Software | Zunkiree Labs
- Description: Gaamma is an AI-powered ERP platform for manufacturing businesses. Real-time production visibility and process optimization. By Zunkiree Labs.

/about/:
- Title: About Zunkiree Labs | AI Infrastructure Company | Kathmandu Nepal
- Description: Founded in 2018 in Kathmandu, Zunkiree Labs builds AI infrastructure for businesses worldwide. Meet our team and learn our story.

/contact/:
- Title: Contact Zunkiree Labs | Schedule a Discovery Call
- Description: Ready to build with AI? Contact Zunkiree Labs in Kathmandu, Nepal. Schedule a discovery call or get a project estimate.

STEP 4 — Add Open Graph tags:
For every page add:
<meta property="og:title" content="[page title]">
<meta property="og:description" content="[page description]">
<meta property="og:url" content="https://zunkireelabs.com[page.url]">
<meta property="og:type" content="website">
<meta property="og:image" content="https://zunkireelabs.com/assets/og-default.png">

STEP 5 — Add canonical tag:
<link rel="canonical" href="https://zunkireelabs.com{{ page.url }}">

Show full diff of all changed files.
```

---

### DAY 4 — Sitemap + Robots.txt Audit

**Goal:** Ensure Google can discover and crawl every important page

**Claude Code Instructions for Day 4:**

```
CONTEXT: Eleventy 3.x site, zunkireelabs.com

TASK: Audit and fix sitemap.xml and robots.txt

STEP 1 — DISCOVER:
a) Does sitemap.xml exist? Where is it generated? (11ty plugin, manual, or missing?)
b) Does robots.txt exist in the project? What does it currently say?
c) Are there any pages that should NOT be indexed? (thank-you pages, admin pages, etc.)
Show findings before proceeding.

STEP 2 — Sitemap:
If using @11ty/eleventy-plugin-sitemap or similar — verify it includes all important pages
If no sitemap plugin exists — install eleventy-plugin-sitemap and configure it
Ensure sitemap includes: all service pages, all product pages, all solution pages, homepage, about, contact
Ensure sitemap EXCLUDES: any /admin/, /thank-you/, /404/ pages

STEP 3 — Robots.txt:
Create or update robots.txt to:
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://zunkireelabs.com/sitemap.xml

STEP 4 — Verify:
Confirm sitemap.xml is accessible at https://zunkireelabs.com/sitemap.xml
Confirm robots.txt references the sitemap URL
Tell me to submit sitemap in Google Search Console after deploy
```

---

### DAY 5 — Google Business Profile Setup

**Goal:** Establish local presence in Kathmandu — this is done manually in Google, no code required

**Manual Steps (no Claude Code needed):**

1. Go to business.google.com → "Manage now"
2. Search for "Zunkiree Labs" — if it exists, claim it. If not, create it.
3. Business name: `Zunkiree Labs` (exact — no keywords added)
4. Category: `Software Company`
5. Add secondary categories: `Computer Consultant`, `Internet Marketing Service`
6. Add full physical address in Kathmandu
7. Phone: Nepal number
8. Website: https://zunkireelabs.com
9. Hours: Monday–Friday 9am–6pm NPT

**GBP Description to paste (750 char max):**
```
Zunkiree Labs is Kathmandu's AI infrastructure company. We build custom AI systems, AI agents, RAG pipelines, and enterprise software for businesses in Nepal and globally. Our products include Zunkiree Search (AI-native search platform), Dental AI (practice management), and Gaamma (manufacturing ERP). We serve startups, SMBs, and enterprises across healthcare, manufacturing, legal, education, and professional services. Founded in 2018 by engineers committed to building world-class technology from Nepal.
```

10. Upload photos: office exterior, office interior, team photo, product screenshots (minimum 5)
11. Enable messaging
12. Verify the listing (Google will send a postcard or offer phone/email verification)

---

## PHASE 2 — CONTENT ENGINE (Days 6–21)

### DAY 6 — FAQ Schema on All Service + Product Pages (AEO Critical)

**Goal:** Get ZunkireeLabs appearing as answers in ChatGPT, Perplexity, and Google AI Overviews

**Claude Code Instructions for Day 6:**

```
CONTEXT: Eleventy 3.x, zunkireelabs.com

TASK: Add FAQPage schema and visible FAQ sections to all service and product pages.

STEP 1 — DISCOVER:
a) Do service pages have their own layout template or use base.njk?
b) Do any FAQ sections already exist on any page?
c) How is page content structured — markdown, nunjucks, or HTML in template files?
Show findings before proceeding.

STEP 2 — Create a reusable FAQ component:
Create src/_includes/components/faq.njk that:
- Accepts an array of {question, answer} objects via macro or include with data
- Renders a visible accordion UI using Alpine.js (already installed)
- Outputs FAQPage JSON-LD schema in a <script type="application/ld+json"> block
- Styling: use existing Tailwind classes, do not add custom CSS

STEP 3 — Add FAQ data files:
Create src/_data/faqs/ directory with one JS or JSON file per service/product:

src/_data/faqs/ai-development.js — export array of 6 Q&A pairs:
[
  { question: "How much does custom AI development cost?", answer: "Custom AI development at Zunkiree Labs is scoped per project. Simple LLM integrations typically take 4–6 weeks. Full RAG pipelines and agent systems require 8–16 weeks. Contact us for a detailed estimate based on your requirements." },
  { question: "What AI technologies does Zunkiree Labs use?", answer: "We work with leading LLMs including GPT-4, Claude, and open-source models. For RAG systems we use vector databases like Pinecone, Weaviate, and pgvector. Our pipelines are built on LangChain, LlamaIndex, and custom orchestration layers." },
  { question: "Can you integrate AI into my existing software?", answer: "Yes. We specialize in integrating AI capabilities into existing systems via APIs and custom connectors. We can add intelligent search, automation, or decision support to your current platform without a full rebuild." },
  { question: "What is a RAG pipeline and do I need one?", answer: "RAG (Retrieval-Augmented Generation) combines your business data with AI language models to deliver accurate, context-aware answers. If you need AI that understands your specific documents, products, or knowledge base — you need RAG." },
  { question: "How long does an AI development project take?", answer: "Timelines vary by scope. A basic LLM integration takes 4–6 weeks. A production RAG system takes 8–12 weeks. A full AI agent orchestration platform takes 3–6 months. We provide detailed timelines after scoping." },
  { question: "Is Zunkiree Labs based in Nepal?", answer: "Yes, Zunkiree Labs is headquartered in Kathmandu, Nepal. We serve both local Nepali businesses and international clients, combining Nepal's engineering talent with global product standards." }
]

Create similar FAQ files for:
- saas-development.js (6 questions about SaaS, multi-tenancy, timelines, costs)
- web-development.js (6 questions about web/app development)
- ai-customer-experience.js (6 questions about AI chatbots, support automation)
- data-systems.js (6 questions about data engineering, pipelines)
- search-product.js (6 questions about Zunkiree Search specifically)

STEP 4 — Include FAQ component in service page templates
STEP 5 — Show full diff, confirm JSON-LD is valid on each page
```

---

### DAY 7 — Blog Section Setup

**Goal:** Create the content engine that will drive all organic traffic

**Claude Code Instructions for Day 7:**

```
CONTEXT: Eleventy 3.x site, zunkireelabs.com

TASK: Create a fully functional blog section at /blog/

STEP 1 — DISCOVER:
a) Does any blog or articles section already exist?
b) What collection structure does the site currently use? (check .eleventy.js or eleventy.config.js)
c) What pagination or listing patterns exist on other collection pages (e.g. resources, case studies)?
Show findings before proceeding.

STEP 2 — Create blog infrastructure:
a) Create src/blog/ directory
b) Create src/blog/blog.json with layout and tags:
   { "layout": "layouts/blog-post.njk", "tags": "blog" }
c) Create src/_includes/layouts/blog-post.njk layout with:
   - Inherits base.njk
   - Hero section: title, author, date, reading time, category
   - Table of contents (auto-generated from H2 headings using JS)
   - Article body content area
   - Author bio component at bottom
   - Related posts section (3 posts, same category)
   - CTA section at bottom: "Ready to build with AI? Schedule a call →"
   - FAQPage schema support via front matter faq array
   - Article JSON-LD schema (BlogPosting type) using front matter data
   - Breadcrumb navigation with BreadcrumbList schema
d) Create src/blog/index.njk — blog listing page at /blog/ with:
   - Title: "AI Insights & Resources | Zunkiree Labs Blog"
   - Grid of post cards (title, excerpt, date, category, read time)
   - Category filter (Alpine.js)
   - Pagination (10 posts per page)

STEP 3 — Create author data:
Create src/_data/authors.js with Sadin Shrestha as default author:
{
  "sadin": {
    "name": "Sadin Shrestha",
    "title": "Founder & CEO, Zunkiree Labs",
    "bio": "Sadin founded Zunkiree Labs in 2018 with a belief that world-class AI infrastructure can be built from Nepal. He leads product strategy and AI systems architecture.",
    "image": "/images/team/sadin-shrestha.jpg",
    "linkedin": "https://linkedin.com/in/[sadin-linkedin-slug]"
  }
}

STEP 4 — Create first blog post as template:
Create src/blog/what-is-ai-native-search.md with front matter:
---
title: "What is AI-Native Search? How It Differs from Keyword Search"
description: "AI-native search understands meaning, not just keywords. Here's what it is, how it works, and why businesses are switching from traditional search."
date: 2026-03-31
author: sadin
category: AI Search
tags: [blog, ai-search, zunkiree-search]
readTime: 8
faq:
  - question: "What is AI-native search?"
    answer: "AI-native search uses large language models to understand the meaning and intent behind a query, returning direct answers instead of a list of links. Unlike keyword search which matches text strings, AI-native search understands context."
  - question: "How is AI search different from keyword search?"
    answer: "Keyword search matches exact words in documents. AI-native search understands semantic meaning — so a query like 'how do I cancel my order' returns the cancellation policy even if those exact words don't appear in the document."
  - question: "What is Zunkiree Search?"
    answer: "Zunkiree Search is an AI-native search platform built by Zunkiree Labs that connects your business data to natural language queries, delivering direct answers to customers instead of a list of links."
---

STEP 5 — Show full diff, verify /blog/ renders correctly at build
```

---

### DAYS 8–14 — Content Publishing (First 7 Blog Posts)

**Goal:** Publish 7 foundational blog posts targeting priority keywords

**No Claude Code needed for writing — use the following briefs to write each post manually or with AI assistance, then save as .md files in src/blog/**

**Post 1 (Day 8):** Already created in Day 7 setup
- File: `what-is-ai-native-search.md`
- Target keyword: "what is AI native search"
- Word count: 1,500+

**Post 2 (Day 9):**
- File: `top-ai-companies-nepal-2026.md`
- Title: "Top AI Companies in Nepal 2026: Who's Building the Future"
- Target keyword: "AI companies Nepal", "AI company Kathmandu"
- Word count: 1,200+
- Note: Include Zunkiree Labs prominently, mention real client work

**Post 3 (Day 10):**
- File: `how-to-build-rag-pipeline.md`
- Title: "How to Build a RAG Pipeline: A Step-by-Step Guide for 2026"
- Target keyword: "how to build RAG pipeline", "RAG pipeline development"
- Word count: 2,000+

**Post 4 (Day 11):**
- File: `admizz-case-study.md`
- Title: "How Admizz Reduced Student Response Time by 45% with AI Search"
- Target keyword: "AI search case study", "Zunkiree Search"
- Word count: 1,000+
- Note: Use existing Admizz case study data from the website

**Post 5 (Day 12):**
- File: `ai-development-company-guide.md`
- Title: "How to Choose an AI Development Company: 8 Things to Look For"
- Target keyword: "how to choose AI development company", "AI development company guide"
- Word count: 1,500+

**Post 6 (Day 13):**
- File: `llm-integration-guide.md`
- Title: "LLM Integration for Business: A Complete Guide for 2026"
- Target keyword: "LLM integration services", "LLM integration guide"
- Word count: 1,800+

**Post 7 (Day 14):**
- File: `state-of-ai-nepal-2026-preview.md`
- Title: "State of AI in Nepal 2026: Key Findings and Insights"
- Target keyword: "state of AI Nepal", "AI adoption Nepal"
- Word count: 1,200+
- Note: Preview of the full report with CTA to download full version

---

## PHASE 3 — LOCAL SEO + AUTHORITY (Days 15–30)

### DAY 15 — Location Page: /locations/kathmandu/

**Claude Code Instructions for Day 15:**

```
CONTEXT: Eleventy 3.x, zunkireelabs.com

TASK: Create a dedicated location page at /locations/kathmandu/

Create src/locations/kathmandu.njk with:

Front matter:
---
layout: layouts/base.njk
title: "AI Development Company in Kathmandu, Nepal | Zunkiree Labs"
description: "Kathmandu's leading AI company. Zunkiree Labs offers custom AI development, AI agents, and SaaS development. Trusted by Nepal's fastest-growing businesses."
---

Page sections (build with existing Tailwind classes):
1. Hero: H1 = "Kathmandu's AI Infrastructure Company", subheading about building global AI from Nepal
2. Services section: list all 8 services with links to service pages
3. Why Kathmandu section: Nepal's growing tech ecosystem, engineering talent, global mindset
4. Clients section: logos of local clients (Admizz, Rapid Investment, Khushbu Nirman Sewa, Prime Tiles, Khems Cleaning, CMS Group)
5. Google Maps embed: <iframe> for Kathmandu location
6. Contact CTA: "Work with Kathmandu's AI team" → link to /contact/
7. FAQ section using faq.njk component with these Q&As:
   - "Where is Zunkiree Labs located?" → "Zunkiree Labs is headquartered in Kathmandu, Nepal..."
   - "Do you work with local Nepal businesses?" → "Yes, we work with businesses across Nepal..."
   - "What AI services are available in Kathmandu?" → "We offer the full range of AI services..."
   - "Can I visit your Kathmandu office?" → "Yes, our team is based in Kathmandu..."
   - "Do you serve clients outside Nepal?" → "Yes, we serve international clients globally..."

Add LocalBusiness schema specific to this page (in addition to global Organization schema).
```

---

### DAY 16 — About/Team Page

**Goal:** Build E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness)

**Claude Code Instructions for Day 16:**

```
TASK: Create or enhance the /about/team/ page

STEP 1 — Check if /about/team/ exists. If not, create src/about/team.njk
STEP 2 — Create src/_data/team.js with team member objects:
{
  name, title, bio, image, linkedin, expertise[]
}
Include Sadin Shrestha as founder + any other team members
STEP 3 — Build team page using existing Tailwind component patterns
STEP 4 — Add Person schema for each team member
STEP 5 — Link /about/team/ from the /about/ page and footer
```

---

### DAY 17 — Internal Linking Audit + Footer Fix

**Claude Code Instructions for Day 17:**

```
TASK: Fix internal linking across the site

STEP 1 — DISCOVER:
a) What does the footer currently look like for the Services section?
b) Are service page names linked individually or just "View all →"?
c) Check all blog posts (once created) — do they link to relevant service pages?

STEP 2 — Fix footer:
Replace "View all →" in Services footer section with individual named links:
- AI Development → /services/ai-development/
- AI Customer Experience → /services/ai-customer-experience/
- Data Systems → /services/data-systems/
- Custom Software → /services/custom-software/
- SaaS Development → /services/saas-development/
- Web & App Development → /services/web-development/
- App Development → /services/app-development/
- AEO & SEO → /services/aeo-seo/

STEP 3 — Add contextual internal links:
On the homepage services section — ensure each service card links to its service page with descriptive anchor text (not "View" but "Explore AI Development →")

STEP 4 — Show diff of all changes
```

---

### DAYS 18–21 — Citation Building (Manual — No Code)

**Goal:** Build NAP (Name, Address, Phone) consistency across directories

**Manual tasks — no Claude Code:**

Submit Zunkiree Labs to these directories in this order:

**Tier 1 (Do first):**
1. Bing Places: bingplaces.com
2. LinkedIn Company Page: linkedin.com/company/ — ensure fully complete with all services listed
3. Clutch.co: clutch.co — create/complete profile, add case studies (Admizz), request reviews
4. TechBehemoths: techbehemoths.com
5. The Manifest: themanifest.com

**Tier 2 — Nepal specific:**
6. Biznepal.com
7. Nepal Chamber of Commerce directory
8. Hamrobazar business listing

**Tier 3 — Global tech:**
9. Crunchbase: crunchbase.com/organization/zunkiree-labs
10. G2.com: create Zunkiree Search product listing
11. Product Hunt: launch Zunkiree Search

**NAP to use consistently everywhere:**
- Name: Zunkiree Labs
- Address: [your exact Kathmandu address]
- Phone: [your Nepal phone number]
- Website: https://zunkireelabs.com

---

## PHASE 4 — CONVERSION OPTIMIZATION (Days 22–30)

### DAY 22 — Conversion Tracking: Form Events

**Claude Code Instructions for Day 22:**

```
CONTEXT: Eleventy 3.x, GA4 Measurement ID G-EJXG0YSQKR already installed

TASK: Add GA4 conversion event tracking to key interactions

STEP 1 — DISCOVER:
a) Find the contact form — what is its HTML structure? Does it use Alpine.js, fetch, or standard form submit?
b) Find the "Schedule a call" CTA buttons — how many exist and where?
c) Find any resource download links (ebooks, reports)
d) Find the Zunkiree Search free trial CTA
Show findings before proceeding.

STEP 2 — Create analytics utility:
Create src/js/analytics.js:
function trackEvent(eventName, params) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params);
  }
}
window.trackEvent = trackEvent;

STEP 3 — Add event tracking:
- Contact form success: fire trackEvent('generate_lead', { event_category: 'contact', event_label: 'discovery_call_form' })
- Schedule a call clicks: fire trackEvent('schedule_call_click', { event_category: 'engagement' })
- Resource downloads: fire trackEvent('resource_download', { event_category: 'lead_magnet', event_label: [resource name] })
- Free trial clicks: fire trackEvent('free_trial_click', { event_category: 'product', event_label: 'zunkiree_search' })

STEP 4 — Mark as conversions in GA4 (manual step — tell me to do this):
In GA4 → Admin → Events → toggle "Mark as conversion" for:
- generate_lead
- schedule_call_click
- free_trial_click

Show full diff.
```

---

### DAY 23 — Pricing Page

**Claude Code Instructions for Day 23:**

```
TASK: Create /pricing/ page at src/pricing/index.njk

Front matter:
title: "Pricing | AI Development & Software Services | Zunkiree Labs"
description: "Transparent pricing for AI development, SaaS development, and AI products. Get a custom estimate for your project. Zunkiree Labs, Nepal."

Page content:
1. Hero: H1 = "Simple, transparent pricing"
2. Services pricing section:
   - AI Development: "Custom scoped — starting from discovery call"
   - SaaS Development: "Project-based — contact for estimate"
   - Web Development: "From $[X] — contact for exact quote"
   - Zunkiree Search: "Free trial → [paid tiers]"
3. "How we scope projects" section (4 steps: Discovery → Proposal → Build → Launch)
4. FAQ block:
   - "How much does AI development cost?"
   - "Do you offer fixed-price projects?"
   - "What is included in a discovery call?"
   - "Do you work with international clients?"
5. CTA: "Get a custom estimate" → /contact/

Add FAQPage schema.
```

---

## PHASE 5 — SCALE (Days 31–90)

### ONGOING — Blog Publishing Schedule

**Publish 2 posts per week. Use these briefs:**

Week 5: "Zunkiree Search vs Algolia: Which AI Search Platform is Right for You?"
Week 5: "AI in Healthcare Nepal: Use Cases and Implementation Guide"
Week 6: "How AI Agents Work: Types, Use Cases, and Implementation in 2026"
Week 6: "SaaS Development Cost in 2026: What to Expect"
Week 7: "What is Vector Search? A Plain-English Explanation"
Week 7: "AI for Manufacturing: How Nepal's Factories Are Using AI"
Week 8: "How to Evaluate an AI Development Partner: 10 Questions to Ask"
Week 8: "The Complete Guide to AI Customer Support in 2026"

### DAY 35 — Glossary Section

```
TASK: Create /glossary/ at src/glossary/index.njk

Add 20 AI/SEO term definitions including:
RAG, LLM, Vector Database, AI Agent, Embeddings, Semantic Search,
AI-Native Search, Fine-tuning, Prompt Engineering, AEO,
Natural Language Processing, Knowledge Graph, Multi-tenant SaaS,
AI Orchestration, Retrieval System, Inference, Token, Context Window,
Zero-shot Learning, Few-shot Learning

Each term: H2 heading, 150-word definition, internal link to relevant service/product page
Add DefinedTerm schema for each entry.
```

### DAY 40 — Compare Pages

```
TASK: Create comparison pages:
1. /compare/zunkiree-search-vs-algolia/
2. /compare/zunkiree-search-vs-elasticsearch/
3. /compare/zunkiree-search-vs-typesense/

Each page:
- H1: "Zunkiree Search vs [Competitor]: Which is Right for You?"
- Comparison table (features, pricing, setup time, AI capabilities)
- Pros/cons section
- "When to choose Zunkiree Search" section
- CTA: free trial
- FAQ block with 5 questions
- Add Product schema
```

---

## SEARCH CONSOLE — REMAINING WORK

**These tasks are done manually in Google Search Console (search.google.com/search-console):**

1. **Submit sitemap** (after Day 4): Sitemaps → Add sitemap → enter `https://zunkireelabs.com/sitemap.xml`
2. **Request indexing for key pages** (after each new page is published): URL Inspection → Enter URL → Request Indexing
3. **Check for crawl errors weekly**: Coverage → review any errors
4. **Monitor Core Web Vitals**: Experience → Core Web Vitals → fix any failing URLs
5. **Review search queries weekly**: Performance → Queries → sort by impressions — use this to find new keyword opportunities

---

## KEY METRICS TO TRACK

**Weekly (check every Monday):**
- GA4: Sessions, Users, Engagement Rate
- GA4 Realtime: verify tracking is still firing
- GA4 Conversions: generate_lead count
- Search Console: Impressions, Clicks, Average Position

**Monthly:**
- Number of keywords ranking in top 100 (Search Console → Performance)
- Number of pages indexed (Search Console → Coverage)
- Organic traffic trend (GA4 → Acquisition → Organic Search)
- Lead count from organic (GA4 → Conversions)
- Google Business Profile views and actions

**Targets by Day 90:**
- 25+ Google reviews on GBP
- 20+ blog posts published
- Top 3 ranking for "AI company Kathmandu"
- Top 10 ranking for "AI development company Nepal"
- 500+ monthly organic sessions
- 10+ organic leads per month

---

## TOOLS IN USE

| Tool | Purpose | Access |
|---|---|---|
| Google Analytics 4 | Traffic + conversion tracking | analytics.google.com |
| Google Search Console | Rankings + crawl health | search.google.com/search-console |
| Google Business Profile | Local SEO | business.google.com |
| Schema Markup Validator | Test schema before deploy | validator.schema.org |
| Google Rich Results Test | Preview schema in search | search.google.com/test/rich-results |
| PageSpeed Insights | Core Web Vitals | pagespeed.web.dev |
| Screaming Frog (free) | Site crawl audit | screamingfrog.co.uk |
| AlsoAsked.com | FAQ/AEO keyword research | alsoasked.com |

---

*Roadmap prepared by SearchGrowthOS-GPT for ZunkireeLabs*
*zunkireelabs.com | Kathmandu, Nepal | Last updated: March 30, 2026*
*Paste this document at the start of any new Claude Code session for full context*
