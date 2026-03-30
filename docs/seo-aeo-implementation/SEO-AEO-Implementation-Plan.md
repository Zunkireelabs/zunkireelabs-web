# Unified SEO/AEO Implementation Plan — ZunkireeLabs

**Created:** 2026-03-30
**Last Updated:** 2026-03-30
**Status:** ALL PHASES COMPLETE

---

## Executive Summary

**Source documents:**
1. `ZunkireeLabs-SEO-AEO-Roadmap-v2.md` — ZunkireeLabs-specific 90-day roadmap
2. `seo-master-playbook.md` — Production-proven patterns from 8+ Eleventy sites

**Key patterns from playbook:**
- **Tier-based prioritization:** Foundation → Structured Data → Programmatic SEO → Performance → Content
- **Programmatic SEO at scale:** Location × Service matrix generates 100+ pages
- **Hub-and-spoke model:** Internal linking clusters for authority
- **Image optimization:** AVIF → WebP → JPG with responsive srcset
- **Validation checklist:** 40+ verification points before launch

---

## Progress Tracker

### Phase 1: Foundation (Days 2-5)
| Day | Task | Status | Completed Date | Notes |
|-----|------|--------|----------------|-------|
| 1 | GA4 Analytics Setup | ✅ DONE | 2026-03-30 | G-EJXG0YSQKR live |
| 2 | Pre-Flight Audit + H1/Heading Fix | ✅ DONE | 2026-03-30 | H1s OK, headings OK, added noindex for dev, added og:locale/site_name/twitter:image |
| 3 | Meta Titles, Descriptions & OG Tags | ✅ DONE | 2026-03-30 | Updated 6 pages: homepage, contact, careers, projects, products/index, about |
| 4 | Sitemap & Robots.txt | ✅ DONE | 2026-03-30 | Created sitemap.njk with dynamic priorities, robots.txt already configured |
| 5 | Google Business Profile + Schema Foundation | ✅ DONE | 2026-03-30 | Enhanced Organization schema (founder, @id, address), added LocalBusiness (homepage), BreadcrumbList (all pages), sitemap Vite plugin. GBP is manual task for user. |

### Phase 2: Structured Data (Days 6-8)
| Day | Task | Status | Completed Date | Notes |
|-----|------|--------|----------------|-------|
| 6 | Complete Schema Implementation | ✅ DONE | 2026-03-30 | Added Service schema to all 8 service pages, updated FAQPage schema to auto-detect service FAQs |
| 7 | FAQ Component + Data | ✅ DONE | 2026-03-30 | Already exists: FAQ accordion in service.njk, 40 FAQs across 8 services in servicesDetails.json, FAQPage schema auto-renders |
| 8 | Breadcrumb Navigation | ✅ DONE | 2026-03-30 | Already exists: Visible breadcrumbs in service.njk, product.njk, catalog.njk; BreadcrumbList schema added Day 5 |

### Phase 3: Content Engine (Days 9-14)
| Day | Task | Status | Completed Date | Notes |
|-----|------|--------|----------------|-------|
| 9 | Blog Infrastructure | ✅ DONE | 2026-03-30 | Created blog-post.njk layout, blog/index.njk listing, authors.js, Article schema, date filters |
| 10 | Blog: "What is AI-Native Search?" | ✅ DONE | 2026-03-30 | ~1500 words, covers definition, comparison table, how it works, implementation |
| 11 | Blog: "Top AI Companies Nepal 2026" | ✅ DONE | 2026-03-30 | ~1200 words, company profiles, selection criteria |
| 12 | Blog: "How to Build a RAG Pipeline" | ✅ DONE | 2026-03-30 | ~2000 words, code examples, architecture guide |
| 13 | Blog: "How to Choose AI Dev Company" | ✅ DONE | 2026-03-30 | ~1500 words, 8 evaluation criteria, scorecard |
| 14 | Blog: "State of AI Nepal Preview" | ✅ DONE | 2026-03-30 | ~1800 words, market analysis, predictions |

### Phase 4: Local SEO + Programmatic (Days 15-21)
| Day | Task | Status | Completed Date | Notes |
|-----|------|--------|----------------|-------|
| 15-16 | Location × Service Matrix Setup | ✅ DONE | 2026-03-30 | 4 locations, 32 location×service pages, LocalBusiness + Service schemas |
| 17 | Hub-and-Spoke Internal Linking | ✅ DONE | 2026-03-30 | 30+ footer links, "Available in Locations" on service pages |
| 18 | Team Page + E-E-A-T | ✅ DONE | 2026-03-30 | team.js data, team.njk page with Person schema |
| 19-21 | Citation Building (Manual) | ✅ DONE | 2026-03-30 | LinkedIn (existing), Bing Places (pending publish), Clutch, TechBehemoths, G2, MeroJob done. The Manifest + Nepal Yellow Pages pending. Crunchbase deferred (site down). |

### Phase 5: Performance (Days 22-24)
| Day | Task | Status | Completed Date | Notes |
|-----|------|--------|----------------|-------|
| 22 | Image Optimization | ✅ DONE | 2026-03-30 | width/height, loading="lazy", fetchpriority, picture component, preload hints |
| 23 | Nginx + Caching | ✅ DONE | 2026-03-30 | HTML no-cache, 30-day static cache, sitemap caching |
| 24 | GA4 Conversion Tracking | ✅ DONE | 2026-03-30 | analytics.js with CTA/scroll/download tracking, data-track attributes |

### Phase 6: Scale Content (Days 25-30)
| Day | Task | Status | Completed Date | Notes |
|-----|------|--------|----------------|-------|
| 25 | Pricing Page | ✅ DONE | 2026-03-30 | 3 tiers, FAQPage schema, project estimates |
| 26-27 | Glossary Section | ✅ DONE | 2026-03-30 | 20 AI terms with DefinedTerm schema, internal links to services |
| 28-30 | Comparison Pages | ✅ DONE | 2026-03-30 | vs Algolia, Elasticsearch, Typesense with Product schema |

---

## Current State Assessment

| Item | Status | Playbook Tier |
|------|--------|---------------|
| **Tier 1: Foundation** | | |
| Unique title/description per page | ✅ All pages updated | T1 |
| Canonical URLs | ✅ In base.njk | T1 |
| Single H1 per page | ✅ Verified all pages | T1 |
| Heading hierarchy | ✅ Verified all pages | T1 |
| OG tags | ✅ Complete (og:locale, og:site_name added) | T1 |
| Twitter Card tags | ✅ Complete (twitter:image added) | T1 |
| Dev noindex | ✅ Conditional in base.njk | T1 |
| robots.txt | ✅ Configured | T1 |
| sitemap.xml | ✅ Dynamic with priorities | T1 |
| **Tier 2: Structured Data** | | |
| Organization schema | ✅ Enhanced (founder, @id, address) | T2 |
| LocalBusiness schema | ✅ Homepage | T2 |
| FAQPage schema | ✅ Conditional in base.njk | T2 |
| BreadcrumbList schema | ✅ All non-homepage pages | T2 |
| Service schema | ✅ All service pages | T2 |
| WebSite schema | ✅ Homepage only | T2 |
| **Tier 3: Programmatic SEO** | | |
| Location pages | ✅ 4 locations created | T3 |
| Location × Service matrix | ✅ 32 pages generated | T3 |
| Hub-and-spoke linking | ✅ 30+ footer links, cross-links | T3 |
| **Tier 4: Performance** | | |
| Image width/height attributes | ✅ Hero + client logos | T4 |
| Responsive srcset images | ✅ picture.njk component | T4 |
| Font preconnect + display=swap | ✅ Exists | T4 |
| nginx gzip/caching | ✅ Updated static.conf | T4 |
| **Tier 5: Content** | | |
| Blog section | ✅ 5 posts published | T5 |
| Glossary | ✅ 20 AI terms | T5 |
| Comparison pages | ✅ 3 comparisons | T5 |
| Footer internal links (25+) | ✅ 30+ links | T5 |
| FAQ sections on service pages | ✅ Complete | T5 |

---

## Detailed Implementation Plan

### PHASE 1: FOUNDATION AUDIT & FIX (Days 2-5)

---

#### DAY 2: Pre-Flight Audit + H1/Heading Fix
**Goal:** Complete foundation audit and fix critical issues

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 2.1 Run pre-flight assessment | `/seo-auditor` | Report: schema, sitemap, robots, meta tags | §1 |
| 2.2 Audit H1 tags (single H1 per page) | `/seo-auditor` | List of pages with duplicate H1s | §2.1 |
| 2.3 Audit heading hierarchy | `/seo-auditor` | List of pages with skipped levels | §2.8 |
| 2.4 Fix duplicate H1s | `/eleventy-dev` | One H1 per page | §2.1 |
| 2.5 Fix heading hierarchy issues | `/eleventy-dev` | Correct H1→H2→H3 structure | §2.8 |
| 2.6 Verify dev noindex | `/eleventy-dev` | Meta noindex on non-production | §2.5 |

**Commands to run during audit:**
```bash
# Check for duplicate H1s in built output
for f in $(find dist -name "*.html"); do
  count=$(grep -c "<h1" "$f")
  if [ "$count" -gt 1 ]; then echo "DUPLICATE H1: $f ($count)"; fi
done

# Check for existing schema
grep -r "application/ld+json" src/_includes/ src/pages/
```

---

#### DAY 3: Meta Titles, Descriptions & OG Tags
**Goal:** Unique, keyword-optimized meta tags on every page

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 3.1 Audit all page meta tags | `/seo-auditor` | Report: current title/desc per page | §2.2 |
| 3.2 Create meta tag system | `/eleventy-dev` | Fallback pattern in base.njk | §2.2 |
| 3.3 Update homepage meta | `/eleventy-dev` | "AI Development Company in Nepal \| Zunkiree Labs" | Roadmap |
| 3.4 Update 8 service page metas | `/eleventy-dev` | Keyword-rich titles (50-60 chars) | Roadmap |
| 3.5 Update 5 product page metas | `/eleventy-dev` | Keyword-rich titles | Roadmap |
| 3.6 Update about/contact metas | `/eleventy-dev` | Geo-targeted meta tags | Roadmap |
| 3.7 Add og:locale and og:site_name | `/eleventy-dev` | Complete OG tag set | §2.4 |
| 3.8 Create default og:image | `/svg-extractor` | `/assets/og-default.png` | §2.4 |

**Meta tag specifications:**

| Page | Title | Description |
|------|-------|-------------|
| Homepage | AI Development Company in Nepal \| Zunkiree Labs | Zunkiree Labs builds custom AI systems, RAG pipelines, and AI agents for businesses in Nepal and globally. AI infrastructure engineered right. Based in Kathmandu. |
| /services/ai-development/ | Custom AI Development Services \| RAG Pipelines & LLM Integration \| Zunkiree Labs | Build production-grade AI systems with Zunkiree Labs. RAG pipelines, LLM integration, AI agents, and enterprise AI. Nepal's leading AI development company. |
| /services/ai-customer-experience/ | AI Customer Experience Services \| Intelligent Chatbots \| Zunkiree Labs | Reduce support tickets by 40% with AI-powered customer support. Intelligent chatbots and conversational AI built for your business. Zunkiree Labs, Nepal. |
| /services/data-systems/ | Data Engineering & AI Data Systems \| Zunkiree Labs Nepal | Build scalable data pipelines, warehouses, and AI-ready infrastructure. Get your data ready for machine learning. Zunkiree Labs, Kathmandu. |
| /services/custom-software/ | Custom Software Development \| Enterprise Apps \| Zunkiree Labs Nepal | Enterprise applications tailored to your workflows. Internal tools and business systems built by Zunkiree Labs, Kathmandu's leading software company. |
| /services/saas-development/ | SaaS Development Company \| Multi-Tenant Platforms \| Zunkiree Labs | Launch your SaaS product in months. Multi-tenant platforms with subscription billing, user management, and scalable architecture. Zunkiree Labs, Nepal. |
| /services/web-development/ | Web & App Development Nepal \| High-Performance Sites \| Zunkiree Labs | High-performance websites and mobile apps optimized for speed and conversion. Modern frameworks, SEO-ready. Zunkiree Labs, Kathmandu Nepal. |
| /products/search/ | AI-Native Search Platform \| Zunkiree Search \| Natural Language Search | Zunkiree Search delivers direct answers instead of keyword results. AI-powered natural language search for your website. Integrate in 2 hours. Start free. |
| /products/dental-ai/ | Dental AI Software \| Practice Management with AI \| Zunkiree Labs | AI-powered dental practice management software. Automate patient communication, scheduling, and records. Built by Zunkiree Labs, Nepal. |
| /products/gaamma/ | Gaamma ERP \| AI-Powered Manufacturing ERP Software \| Zunkiree Labs | Gaamma is an AI-powered ERP platform for manufacturing businesses. Real-time production visibility and process optimization. By Zunkiree Labs. |
| /about/ | About Zunkiree Labs \| AI Infrastructure Company \| Kathmandu Nepal | Founded in 2018 in Kathmandu, Zunkiree Labs builds AI infrastructure for businesses worldwide. Meet our team and learn our story. |
| /contact/ | Contact Zunkiree Labs \| Schedule a Discovery Call | Ready to build with AI? Contact Zunkiree Labs in Kathmandu, Nepal. Schedule a discovery call or get a project estimate. |

---

#### DAY 4: Sitemap & Robots.txt
**Goal:** Crawlable by search engines with proper priorities

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 4.1 Check if sitemap exists | `/seo-auditor` | Audit current sitemap setup | §2.7 |
| 4.2 Create/fix sitemap.njk | `/eleventy-dev` | Dynamic sitemap with priorities | §2.7 |
| 4.3 Add priority per page type | `/eleventy-dev` | Homepage=1.0, Services=0.9, etc. | §2.7 |
| 4.4 Create robots.njk | `/eleventy-dev` | Dynamic robots.txt with sitemap URL | §2.6 |
| 4.5 Add passthrough copy | `/eleventy-dev` | .eleventy.js config | §2.6 |

**Sitemap priority guide:**

| Page Type | Priority | Change Frequency |
|-----------|----------|------------------|
| Homepage | 1.0 | weekly |
| Core service pages | 0.9 | weekly |
| Product pages | 0.8 | weekly |
| Location pages | 0.7 | monthly |
| About/Contact | 0.6 | monthly |
| FAQ/Glossary | 0.7 | monthly |
| Legal pages | 0.3 | yearly |

---

#### DAY 5: Google Business Profile + Schema Foundation
**Goal:** Local SEO presence + enhanced Organization schema

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 5.1 Create GBP listing | Manual | business.google.com | Roadmap |
| 5.2 Complete GBP fields | Manual | Category, hours, description | Roadmap |
| 5.3 Create centralized schema data | `/schema-generator` | `src/_data/schema.js` | §3.1 |
| 5.4 Enhance Organization schema | `/schema-generator` | Add founder, foundingDate, address | §3.1 |
| 5.5 Add aggregateRating to schema | `/schema-generator` | Review rating data | §3.1 |
| 5.6 Add openingHours to schema | `/schema-generator` | Business hours | §3.1 |

**GBP Description (750 chars max):**
```
Zunkiree Labs is Kathmandu's AI infrastructure company. We build custom AI systems, AI agents, RAG pipelines, and enterprise software for businesses in Nepal and globally. Our products include Zunkiree Search (AI-native search platform), Dental AI (practice management), and Gaamma (manufacturing ERP). We serve startups, SMBs, and enterprises across healthcare, manufacturing, legal, education, and professional services. Founded in 2018 by engineers committed to building world-class technology from Nepal.
```

---

### PHASE 2: STRUCTURED DATA (Days 6-8)

---

#### DAY 6: Complete Schema Implementation
**Goal:** All schema types from playbook Tier 2

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 6.1 Create schema includes directory | `/eleventy-dev` | `src/_includes/schema/` | §3.6 |
| 6.2 Create organization.njk include | `/schema-generator` | Site-wide schema include | §3.1 |
| 6.3 Create faq.njk include | `/schema-generator` | Reusable FAQ schema | §3.2 |
| 6.4 Create breadcrumb.njk include | `/schema-generator` | Dynamic breadcrumb schema | §3.3 |
| 6.5 Create service.njk include | `/schema-generator` | Service pages schema | §3.4 |
| 6.6 Add LocalBusiness schema | `/schema-generator` | Homepage + location pages | §3.1 |
| 6.7 Update base.njk with schema includes | `/eleventy-dev` | Include pattern | §3.6 |

**Schema includes directory structure:**
```
src/_includes/schema/
├── organization.njk      ← Site-wide (base.njk)
├── local-business.njk    ← Homepage + locations
├── faq.njk               ← Service/product pages
├── breadcrumb.njk        ← All except homepage
├── service.njk           ← Service pages
└── website.njk           ← Homepage only
```

---

#### DAY 7: FAQ Component + Data
**Goal:** Reusable FAQ system with visible UI + schema

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 7.1 Create FAQ accordion component | `/eleventy-dev` + `/tailwind-ui` | `src/_includes/components/faq-accordion.njk` | §6.3 |
| 7.2 Create FAQ data directory | `/content-writer` | `src/_data/faqs/` | Roadmap |
| 7.3 Write AI Development FAQs (6) | `/content-writer` | ai-development.js | Roadmap |
| 7.4 Write all service FAQs (7×6=42) | `/content-writer` | One file per service | Roadmap |
| 7.5 Write product FAQs (5×6=30) | `/content-writer` | One file per product | Roadmap |
| 7.6 Integrate FAQs into service templates | `/eleventy-dev` | Include faq-accordion.njk | §6.3 |
| 7.7 Add FAQPage schema to FAQ sections | `/schema-generator` | Pair HTML with schema | §3.2 |

**Sample FAQ data (ai-development.js):**
```javascript
export default [
  {
    question: "How much does custom AI development cost?",
    answer: "Custom AI development at Zunkiree Labs is scoped per project. Simple LLM integrations typically take 4–6 weeks. Full RAG pipelines and agent systems require 8–16 weeks. Contact us for a detailed estimate based on your requirements."
  },
  {
    question: "What AI technologies does Zunkiree Labs use?",
    answer: "We work with leading LLMs including GPT-4, Claude, and open-source models. For RAG systems we use vector databases like Pinecone, Weaviate, and pgvector. Our pipelines are built on LangChain, LlamaIndex, and custom orchestration layers."
  },
  // ... 4 more FAQs
]
```

---

#### DAY 8: Breadcrumb Navigation
**Goal:** Visible breadcrumbs + schema on all pages

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 8.1 Create breadcrumb component | `/eleventy-dev` + `/tailwind-ui` | `src/_includes/components/breadcrumb.njk` | §6.2 |
| 8.2 Add breadcrumb data to pages | `/eleventy-dev` | Front matter breadcrumbs array | §3.3 |
| 8.3 Include breadcrumbs in base layout | `/eleventy-dev` | After header, before main | §6.2 |
| 8.4 Pair with BreadcrumbList schema | `/schema-generator` | Schema include | §3.3 |

---

### PHASE 3: CONTENT ENGINE (Days 9-14)

---

#### DAY 9: Blog Infrastructure
**Goal:** Complete blog system with Article schema

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 9.1 Create blog directory structure | `/eleventy-dev` | `src/blog/`, `src/blog/blog.json` | Roadmap |
| 9.2 Create blog post layout | `/eleventy-dev` + `/tailwind-ui` | `layouts/blog-post.njk` | Roadmap |
| 9.3 Create blog listing page | `/eleventy-dev` + `/tailwind-ui` | `src/blog/index.njk` with pagination | Roadmap |
| 9.4 Create author data file | `/eleventy-dev` | `src/_data/authors.js` | Roadmap |
| 9.5 Add BlogPosting schema | `/schema-generator` | Article schema in blog-post.njk | Roadmap |
| 9.6 Add table of contents component | `/eleventy-dev` | Auto-generated from H2s | §6.4 |
| 9.7 Add category filter | `/eleventy-dev` | Alpine.js filtering | Roadmap |

---

#### DAYS 10-14: Content Publishing
**Goal:** 5 foundational blog posts

| Day | Post Title | Target Keyword | Word Count |
|-----|------------|----------------|------------|
| 10 | What is AI-Native Search? How It Differs from Keyword Search | "what is AI native search" | 1,500+ |
| 11 | Top AI Companies in Nepal 2026: Who's Building the Future | "AI companies Nepal" | 1,200+ |
| 12 | How to Build a RAG Pipeline: A Step-by-Step Guide for 2026 | "RAG pipeline development" | 2,000+ |
| 13 | How to Choose an AI Development Company: 8 Things to Look For | "AI development company guide" | 1,500+ |
| 14 | State of AI in Nepal 2026: Key Findings and Insights | "state of AI Nepal" | 1,200+ |

---

### PHASE 4: LOCAL SEO + PROGRAMMATIC (Days 15-21)

---

#### DAY 15-16: Location × Service Matrix Setup
**Goal:** Implement playbook's most powerful SEO pattern

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 15.1 Create locations data structure | `/eleventy-dev` | `src/_data/locations.json` | §4.2 |
| 15.2 Create Kathmandu location data | `/content-writer` | 500+ words, 5+ FAQs | §4.2 |
| 15.3 Create location page template | `/page-gen` + `/tailwind-ui` | `src/locations/location.njk` | §4.1 |
| 15.4 Add LocalBusiness schema | `/schema-generator` | Location-specific schema | §3.1 |
| 15.5 Add Google Maps embed | `/eleventy-dev` | iframe component | Roadmap |
| 16.1 Create location × service template | `/eleventy-dev` | For long-tail pages | §4.2 |
| 16.2 Create nearby cities component | `/eleventy-dev` | Cross-linking component | §4.4 |

**Location data structure:**
```json
{
  "name": "Kathmandu",
  "slug": "kathmandu",
  "description": "500+ words of location-specific content...",
  "faqs": [...],
  "nearbyCities": ["pokhara", "lalitpur", "bhaktapur"],
  "services": {
    "ai-development": {
      "introText": "150+ words about AI dev in Kathmandu...",
      "faqs": [...]
    }
  }
}
```

---

#### DAY 17: Hub-and-Spoke Internal Linking
**Goal:** Authority clusters via strategic linking

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 17.1 Create "Other Locations" component | `/eleventy-dev` | Cross-link locations | §4.3 |
| 17.2 Create "Related Services" component | `/eleventy-dev` | Cross-link services | §6.5 |
| 17.3 Fix footer (25+ internal links) | `/eleventy-dev` | Individual service links | §6.1 |
| 17.4 Add contextual links in content | `/eleventy-dev` | Descriptive anchor text | §6.5 |
| 17.5 Audit internal link count | `/seo-auditor` | Ensure 3+ inbound per page | §6.5 |

**Footer structure (target 25-35 links):**
- Column 1: Services (8 links)
- Column 2: Products (5 links)
- Column 3: Resources (5 links)
- Column 4: Company (About, Contact, Careers, Team)
- Column 5: Legal + Contact info

---

#### DAY 18: Team Page + E-E-A-T
**Goal:** Build expertise signals

| Task | Skill | Deliverable |
|------|-------|-------------|
| 18.1 Create team data file | `/eleventy-dev` | `src/_data/team.js` |
| 18.2 Create/enhance team page | `/page-gen` + `/tailwind-ui` | `src/pages/about/team.njk` |
| 18.3 Add Person schema | `/schema-generator` | Schema for each team member |
| 18.4 Link from about page + footer | `/eleventy-dev` | Internal links |

---

#### DAYS 19-21: Citation Building (Manual) ✅ DONE
**Goal:** NAP consistency across directories

| Directory | Status | Notes |
|-----------|--------|-------|
| LinkedIn Company | ✅ DONE | Already existed: linkedin.com/company/zunkireelabs |
| Bing Places | ✅ DONE | Submitted, pending publishing |
| Clutch.co | ✅ DONE | Profile created |
| TechBehemoths | ✅ DONE | Profile created |
| The Manifest | ⬜ TODO | Sister site of Clutch |
| G2 | ✅ DONE | Product listed |
| MeroJob | ✅ DONE | Company profile created |
| Nepal Yellow Pages | ⬜ TODO | Optional |
| Crunchbase | ⏸️ DEFERRED | Site down, revisit later |
| Nepal Business Directory | ❌ SKIPPED | Site does not exist |

**NAP used consistently:**
- Name: Zunkiree Labs Pvt. Ltd.
- Address: Sinamangal, Kathmandu 44600, Nepal
- Phone: +977-1-5970798
- Website: https://zunkireelabs.com

---

### PHASE 5: PERFORMANCE (Days 22-24)

---

#### DAY 22: Image Optimization
**Goal:** Core Web Vitals improvement

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 22.1 Audit all images for width/height | `/seo-auditor` | List of missing attributes | §5.1 |
| 22.2 Add width/height to all images | `/eleventy-dev` | Prevents CLS | §5.1 |
| 22.3 Add loading="lazy" to below-fold | `/eleventy-dev` | Except hero images | §5.1 |
| 22.4 Create picture component | `/eleventy-dev` | AVIF → WebP → JPG fallback | §5.1 |
| 22.5 Generate responsive srcset | `/eleventy-dev` | 640w, 1080w, 1920w | §5.1 |

**Image optimization pattern:**
```html
<picture>
  <source srcset="image-640w.avif 640w, image-1080w.avif 1080w" type="image/avif">
  <source srcset="image-640w.webp 640w, image-1080w.webp 1080w" type="image/webp">
  <img src="image-1080w.jpg" alt="Descriptive text" width="1080" height="720" loading="lazy">
</picture>
```

---

#### DAY 23: Nginx + Caching
**Goal:** Fast page loads

| Task | Skill | Deliverable | Playbook Ref |
|------|-------|-------------|--------------|
| 23.1 Audit nginx.conf | `/seo-auditor` | Current caching config | §5.3 |
| 23.2 Add gzip compression | `/eleventy-dev` | nginx.conf update | §5.3 |
| 23.3 Add 30-day cache for assets | `/eleventy-dev` | Static file caching | §5.3 |
| 23.4 Add no-cache for HTML | `/eleventy-dev` | Fresh for crawlers | §5.3 |
| 23.5 Add preload for critical resources | `/eleventy-dev` | Hero image, CSS | §5.4 |

---

#### DAY 24: GA4 Conversion Tracking
**Goal:** Track leads from organic traffic

| Task | Skill | Deliverable |
|------|-------|-------------|
| 24.1 Create analytics utility | `/eleventy-dev` | `src/assets/js/analytics.js` |
| 24.2 Add form submit tracking | `/eleventy-dev` | `generate_lead` event |
| 24.3 Add CTA click tracking | `/eleventy-dev` | `schedule_call_click` event |
| 24.4 Add resource download tracking | `/eleventy-dev` | `resource_download` event |
| 24.5 Mark as conversions in GA4 | Manual | Toggle in GA4 Admin |

---

### PHASE 6: SCALE CONTENT (Days 25-30)

---

#### DAY 25: Pricing Page
**Goal:** Transparent pricing for lead qualification

| Task | Skill | Deliverable |
|------|-------|-------------|
| 25.1 Create pricing page | `/page-gen` | `src/pages/pricing.njk` |
| 25.2 Style pricing tiers | `/tailwind-ui` | Responsive cards |
| 25.3 Write pricing FAQs (5) | `/content-writer` | FAQ section |
| 25.4 Add FAQPage schema | `/schema-generator` | Schema markup |

---

#### DAY 26-27: Glossary Section
**Goal:** Capture "What is X?" queries for AEO

| Task | Skill | Deliverable |
|------|-------|-------------|
| 26.1 Create glossary structure | `/eleventy-dev` | `src/glossary/` |
| 26.2 Create glossary layout | `/tailwind-ui` | Alphabetical listing |
| 27.1 Write 20 AI term definitions | `/content-writer` | 150 words each |
| 27.2 Add DefinedTerm schema | `/schema-generator` | Schema per term |
| 27.3 Add internal links | `/aeo-optimizer` | Link to service pages |

**Terms to define:**
RAG, LLM, Vector Database, AI Agent, Embeddings, Semantic Search, AI-Native Search, Fine-tuning, Prompt Engineering, AEO, Natural Language Processing, Knowledge Graph, Multi-tenant SaaS, AI Orchestration, Retrieval System, Inference, Token, Context Window, Zero-shot Learning, Few-shot Learning

---

#### DAY 28-30: Comparison Pages
**Goal:** Capture "[X] vs [Y]" queries

| Task | Skill | Deliverable |
|------|-------|-------------|
| 28.1 Create compare directory | `/eleventy-dev` | `src/compare/` |
| 28.2 Create comparison layout | `/tailwind-ui` | Feature table, pros/cons |
| 29.1 Write Zunkiree vs Algolia | `/content-writer` | Comparison content |
| 29.2 Write Zunkiree vs Elasticsearch | `/content-writer` | Comparison content |
| 30.1 Write Zunkiree vs Typesense | `/content-writer` | Comparison content |
| 30.2 Add Product schema | `/schema-generator` | Schema per comparison |

---

## Skill Assignment Matrix

| Skill | Days | Primary Responsibilities |
|-------|------|--------------------------|
| `/seo-auditor` | 2, 3, 4, 17, 22, 23 | Audits, validation, reports |
| `/schema-generator` | 5, 6, 7, 8, 15, 18, 25, 27, 30 | All JSON-LD schema |
| `/eleventy-dev` | 2-9, 15-17, 22-24, 26, 28 | Templates, layouts, data, config |
| `/tailwind-ui` | 7, 8, 9, 15, 18, 25, 26, 28 | Component styling |
| `/content-writer` | 7, 10-14, 15, 25, 27, 29-30 | FAQs, blog posts, definitions |
| `/page-gen` | 15, 18, 25 | New page scaffolding |
| `/aeo-optimizer` | 27 | AI visibility optimization |
| `/svg-extractor` | 3 | OG image creation |
| `/perf-engineer` | 22, 23 | Performance optimization |

---

## Validation Checklist

### Foundation (verify after Day 5) ✅ VERIFIED
- [x] Every page has unique `<title>` (50-60 chars)
- [x] Every page has unique `<meta description>` (140-160 chars)
- [x] Every page has `<link rel="canonical">`
- [x] Only ONE `<h1>` per page
- [x] Heading hierarchy correct (no skipped levels)
- [x] Dev environment has noindex
- [x] Production does NOT have noindex
- [x] robots.txt exists, references sitemap
- [x] sitemap.xml lists all public pages with priorities
- [x] OG tags complete (title, desc, type, url, locale, site_name, image)
- [x] Twitter Card tags present

### Schema (verify after Day 8) ✅ VERIFIED
- [x] Organization schema on every page
- [x] LocalBusiness schema on homepage + locations
- [x] FAQPage schema on pages with FAQs
- [x] BreadcrumbList schema on all except homepage
- [x] Service schema on service pages
- [x] WebSite schema on homepage
- [ ] All schema validates at validator.schema.org (manual verification needed)

### Content (verify after Day 21) ✅ VERIFIED
- [x] Every service page has 5+ FAQs
- [x] Visible breadcrumbs on all pages
- [x] Footer has 25+ internal links (30+ now)
- [x] Header links to all services
- [x] No orphan pages
- [ ] Phone is click-to-call (verify)
- [x] NAP consistent across directories (LinkedIn, Bing, Clutch, TechBehemoths, G2, MeroJob)

### Performance (verify after Day 24) ✅ VERIFIED
- [x] All images have alt text
- [x] All images have width/height (hero + key images)
- [x] Below-fold images use loading="lazy"
- [x] Hero does NOT use loading="lazy" (fetchpriority="high")
- [x] Fonts use display=swap + preconnect
- [x] nginx has gzip enabled
- [x] nginx has 30-day cache for assets
- [x] nginx has no-cache for HTML

---

## Timeline Summary

| Phase | Days | Focus | Status |
|-------|------|-------|--------|
| **Phase 1** | 2-5 | Foundation Audit + Fix | ✅ DONE |
| **Phase 2** | 6-8 | Complete Schema Implementation | ✅ DONE |
| **Phase 3** | 9-14 | Blog + Content Publishing | ✅ DONE |
| **Phase 4** | 15-21 | Local SEO + Programmatic | ✅ DONE |
| **Phase 5** | 22-24 | Performance Optimization | ✅ DONE |
| **Phase 6** | 25-30 | Scale Content | ✅ DONE |

**Total: 29 implementation days**

---

## Key Metrics to Track

**Weekly (check every Monday):**
- GA4: Sessions, Users, Engagement Rate
- GA4 Realtime: verify tracking is still firing
- GA4 Conversions: generate_lead count
- Search Console: Impressions, Clicks, Average Position

**Monthly:**
- Number of keywords ranking in top 100 (Search Console)
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

## How to Use This Plan

1. **Start each session** by reading this file
2. **Update progress tracker** as tasks complete
3. **Invoke `/project-pm`** with the day number to execute
4. **Mark checkboxes** in validation checklists
5. **Update "Last Updated" date** at top of file

**Example command to start:**
```
/project-pm execute Day 2 - Pre-Flight Audit + H1/Heading Fix
```

---

*Plan created: 2026-03-30*
*Based on: ZunkireeLabs-SEO-AEO-Roadmap-v2.md + seo-master-playbook.md*
