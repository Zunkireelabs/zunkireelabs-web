# SEO Master Playbook — Eleventy Website Projects

> **Purpose:** A complete, actionable SEO implementation guide derived from auditing 8+ production websites. Any Claude instance can pick this up and implement best-in-class SEO on any Eleventy project in this workspace.
>
> **Audit date:** 2026-03-30
> **Projects audited:** techwala-web-dev (gold standard), forever-dental-seo, life-pro, fds-v2, ffa-v2, ok-tshirt-ecom-shopify, prbacklinks, uksure-web-dev
>
> **How to use:** Work through Tiers 1–4 in order. Each tier has a checklist, implementation instructions, and code examples. Skip items already done (check the project's base layout and data files first).

---

## Table of Contents

1. [Pre-Flight: Project Assessment](#1-pre-flight-project-assessment)
2. [Tier 1: Foundation (Every Project Must Have)](#2-tier-1-foundation)
3. [Tier 2: Structured Data / Schema](#3-tier-2-structured-data)
4. [Tier 3: Programmatic SEO at Scale](#4-tier-3-programmatic-seo)
5. [Tier 4: Performance & Technical](#5-tier-4-performance)
6. [Tier 5: Content & Internal Linking](#6-tier-5-content--internal-linking)
7. [Common Fixes for Known Gaps](#7-common-fixes-for-known-gaps)
8. [Validation Checklist](#8-validation-checklist)
9. [Reference: What Delivered Results](#9-reference-what-delivered-results)

---

## 1. Pre-Flight: Project Assessment

Before implementing anything, answer these questions:

```
□ What type is this project? (Eleventy / Next.js+Shopify / Other)
□ Does a CLAUDE.md exist? Read it first.
□ What's in the base layout? (src/_includes/layouts/base.liquid)
□ What data files exist? (src/_data/)
□ What pages exist? (src/pages/ or src/)
□ Is there a site.json with company name, phone, address, domain?
□ Is there existing schema markup? (grep for "application/ld+json")
□ Is there a robots.txt? A sitemap?
□ Is there a canonical tag in the base layout?
□ Are OG/Twitter tags present?
□ Is the dev environment noindexed?
```

**Quick commands to assess current state:**

```bash
# Check for existing schema
grep -r "application/ld+json" src/_includes/ src/pages/ src/*.liquid 2>/dev/null

# Check base layout for meta tags
head -30 src/_includes/layouts/base.liquid

# Check for sitemap/robots
ls src/robots.txt src/sitemap* 2>/dev/null

# Count pages
find src/pages -name "*.liquid" 2>/dev/null | wc -l

# Count data files
ls src/_data/*.json 2>/dev/null | wc -l
```

---

## 2. Tier 1: Foundation

**Priority: CRITICAL — implement on every project before anything else.**

### 2.1 Single H1 Per Page

**Rule:** Every page must have exactly ONE `<h1>` tag. No duplicates.

**Common bug (found in life-pro):** Hero section AND main content both use `<h1>`. Fix by making the main content heading an `<h2>`.

**Audit command:**
```bash
# Check built output for duplicate H1s
for f in $(find _site-dev -name "*.html"); do
  count=$(grep -c "<h1" "$f")
  if [ "$count" -gt 1 ]; then echo "DUPLICATE H1: $f ($count)"; fi
done
```

### 2.2 Unique Title + Description Per Page

**Rules:**
- Title: 50–60 characters, primary keyword near the front
- Description: 140–160 characters, includes CTA language
- Every page MUST set these in front matter or via data files — never rely on the site-wide fallback

**Base layout pattern (already in uksure):**
```liquid
<title>{{ metaTitle | default: title | default: site.name }}</title>
<meta name="description" content="{{ metaDescription | default: description | default: site.description }}">
```

**Page front matter pattern:**
```liquid
---
layout: layouts/base.liquid
title: "Impounded Car Insurance | Release Your Car Today"
metaTitle: "Impounded Car Insurance UK — Get Your Car Back in 2 Hours | UK Sure"
description: "Get impound release insurance from £75. FCA-regulated broker, instant cover, collect your car within 2 hours. Call 01323 416706."
---
```

**Data-driven pattern (for generated pages):**
```json
{
  "title": "Impounded Car Insurance UK — Get Your Car Back in 2 Hours | UK Sure",
  "description": "Get impound release insurance from £75. FCA-regulated broker, instant cover..."
}
```

### 2.3 Canonical URLs

**Rule:** Every page must self-reference its canonical URL. This prevents duplicate content penalties.

**Implementation (already in uksure):**
```liquid
<link rel="canonical" href="{{ site.prodUrl }}{{ page.url }}">
```

**Critical:** `site.prodUrl` MUST be the production URL (e.g., `https://uk-sure.co.uk`), NOT the dev URL. Check `site.json`.

### 2.4 Open Graph + Twitter Cards

**Minimum OG tags (already partial in uksure — needs Twitter cards added):**

```liquid
<!-- Open Graph -->
<meta property="og:title" content="{{ metaTitle | default: title | default: site.name }}">
<meta property="og:description" content="{{ metaDescription | default: description | default: site.description }}">
<meta property="og:type" content="website">
<meta property="og:url" content="{{ site.prodUrl }}{{ page.url }}">
<meta property="og:locale" content="en_GB">
<meta property="og:site_name" content="{{ site.name }}">
{% if ogImage %}<meta property="og:image" content="{{ site.prodUrl }}{{ ogImage }}">{% endif %}

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ metaTitle | default: title | default: site.name }}">
<meta name="twitter:description" content="{{ metaDescription | default: description | default: site.description }}">
{% if ogImage %}<meta name="twitter:image" content="{{ site.prodUrl }}{{ ogImage }}">{% endif %}
```

### 2.5 Dev Environment noindex

**Rule:** Development sites must NEVER be indexed by search engines.

**Implementation (already in uksure):**
```liquid
{% if env == 'development' %}<meta name="robots" content="noindex, nofollow">{% endif %}
```

**Verify** `.eleventy.js` sets the env variable:
```javascript
eleventyConfig.addGlobalData("env", process.env.ELEVENTY_ENV || 'production');
```

### 2.6 robots.txt

**Create `src/robots.txt` (passthrough copy in .eleventy.js):**

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://PRODUCTION-DOMAIN/sitemap.xml
```

**Add passthrough in `.eleventy.js`:**
```javascript
eleventyConfig.addPassthroughCopy("src/robots.txt");
```

**Or generate dynamically with a Liquid template (better — uses site.json):**

Create `src/robots.liquid`:
```liquid
---
permalink: /robots.txt
eleventyExcludeFromCollections: true
---
User-agent: *
Allow: /

Sitemap: {{ site.prodUrl }}/sitemap.xml
```

### 2.7 XML Sitemap

**Create `src/sitemap.liquid`:**

```liquid
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/2000/sitemaps.org/schemas/sitemap/0.9">
  {%- for page in collections.all %}
  {%- unless page.data.excludeFromSitemap %}
  <url>
    <loc>{{ site.prodUrl }}{{ page.url }}</loc>
    <lastmod>{{ page.date | date: "%Y-%m-%d" }}</lastmod>
    <changefreq>{{ page.data.changefreq | default: "monthly" }}</changefreq>
    <priority>{{ page.data.priority | default: "0.5" }}</priority>
  </url>
  {%- endunless %}
  {%- endfor %}
</urlset>
```

**Set priority per page in front matter:**
```liquid
---
priority: "1.0"
changefreq: "weekly"
---
```

**Priority guide:**

| Page Type | Priority | Change Frequency |
|-----------|----------|-----------------|
| Homepage | 1.0 | weekly |
| Core service pages | 0.9 | weekly |
| Sub-service pages | 0.8 | weekly |
| Location pages | 0.7 | monthly |
| About/Contact | 0.6 | monthly |
| FAQ | 0.7 | monthly |
| Legal (privacy, terms) | 0.3 | yearly |

### 2.8 Heading Hierarchy

**Every page must follow this structure:**

```
<h1> — Page title (ONE per page)
  <h2> — Major sections
    <h3> — Sub-sections within H2
      <h4> — Rare, only for deep nesting
```

**Never skip levels** (e.g., H1 → H3 without H2).

---

## 3. Tier 2: Structured Data

**Priority: HIGH — enables rich snippets in Google Search results.**

All schema goes in `<script type="application/ld+json">` tags. Place them at the bottom of the page content (before `</main>`) or in the `<head>`.

### 3.1 Organization / LocalBusiness Schema (Site-Wide)

**Add to base.liquid or as an include loaded on every page.**

**For local service businesses (insurance, dental, repair, etc.):**

Create `src/_includes/schema/organization.liquid`:

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "{{ site.schema.type | default: 'LocalBusiness' }}",
  "@id": "{{ site.prodUrl }}/#organization",
  "name": "{{ site.name }}",
  "url": "{{ site.prodUrl }}",
  "telephone": "{{ site.phone }}",
  "email": "{{ site.email }}",
  "description": "{{ site.description }}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{ site.address.street }}",
    "addressLocality": "{{ site.address.town }}",
    "addressRegion": "{{ site.address.county }}",
    "postalCode": "{{ site.address.postcode }}",
    "addressCountry": "GB"
  }
  {%- if site.openingHours %},
  "openingHoursSpecification": [
    {%- for hours in site.openingHours %}
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": {{ hours.days | json }},
      "opens": "{{ hours.opens }}",
      "closes": "{{ hours.closes }}"
    }{% unless forloop.last %},{% endunless %}
    {%- endfor %}
  ]
  {%- endif %}
  {%- if site.social %},
  "sameAs": {{ site.social | json }}
  {%- endif %}
  {%- if site.aggregateRating %},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{ site.aggregateRating.rating }}",
    "reviewCount": "{{ site.aggregateRating.count }}",
    "bestRating": "5"
  }
  {%- endif %}
}
</script>
```

**Required site.json additions:**

```json
{
  "schema": {
    "type": "InsuranceAgency"
  },
  "openingHours": [
    { "days": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" }
  ],
  "social": [
    "https://facebook.com/uksure",
    "https://linkedin.com/company/uksure"
  ],
  "aggregateRating": {
    "rating": "4.9",
    "count": "127"
  }
}
```

**Schema @type reference for different businesses:**

| Business | @type |
|----------|-------|
| Insurance broker | InsuranceAgency |
| Dental practice | Dentist |
| Tech repair | LocalBusiness |
| Legal services | LegalService |
| Life insurance | FinancialService |
| Aesthetics clinic | HealthAndBeautyBusiness |
| E-commerce | Organization |

### 3.2 FAQPage Schema

**Add to any page that has FAQ content.** This is the highest-ROI schema — it enables FAQ rich snippets in SERPs.

Create `src/_includes/schema/faq.liquid`:

```liquid
{%- comment -%}
  Usage: {% include "schema/faq.liquid", faqItems: myFaqArray %}
  Where faqItems is an array of { "question": "...", "answer": "..." }
{%- endcomment -%}
{%- if faqItems and faqItems.size > 0 %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {%- for item in faqItems %}
    {
      "@type": "Question",
      "name": "{{ item.question | escape }}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ item.answer | escape }}"
      }
    }{% unless forloop.last %},{% endunless %}
    {%- endfor %}
  ]
}
</script>
{%- endif %}
```

**Usage in a page template:**

```liquid
{% include "schema/faq.liquid", faqItems: impounded_car_faq.items %}
```

### 3.3 BreadcrumbList Schema

Create `src/_includes/schema/breadcrumb.liquid`:

```liquid
{%- comment -%}
  Usage: {% include "schema/breadcrumb.liquid", breadcrumbs: myBreadcrumbArray %}
  Where breadcrumbs is an array of { "label": "...", "url": "/path/" }
  Last item should have url: null (current page)
{%- endcomment -%}
{%- if breadcrumbs and breadcrumbs.size > 0 %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {%- for crumb in breadcrumbs %}
    {
      "@type": "ListItem",
      "position": {{ forloop.index }},
      "name": "{{ crumb.label | escape }}"
      {%- if crumb.url %},
      "item": "{{ site.prodUrl }}{{ crumb.url }}"
      {%- endif %}
    }{% unless forloop.last %},{% endunless %}
    {%- endfor %}
  ]
}
</script>
{%- endif %}
```

**Usage in front matter or data file:**

```json
"breadcrumbs": [
  { "label": "Home", "url": "/" },
  { "label": "Impound Insurance", "url": "/impounded-car-insurance/" },
  { "label": "Named Driver", "url": null }
]
```

### 3.4 Service Schema

Create `src/_includes/schema/service.liquid`:

```liquid
{%- comment -%}
  Usage: {% include "schema/service.liquid", serviceName: "Impounded Car Insurance", serviceDesc: "...", serviceUrl: "/impounded-car-insurance/", priceFrom: "75", priceTo: "250" %}
{%- endcomment -%}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{{ serviceName }}",
  "description": "{{ serviceDesc | escape }}",
  "url": "{{ site.prodUrl }}{{ serviceUrl }}",
  "provider": {
    "@type": "{{ site.schema.type | default: 'LocalBusiness' }}",
    "@id": "{{ site.prodUrl }}/#organization",
    "name": "{{ site.name }}"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  }
  {%- if priceFrom %},
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "{{ priceFrom }}",
    "highPrice": "{{ priceTo | default: priceFrom }}"
  }
  {%- endif %}
}
</script>
```

### 3.5 WebSite Schema with SearchAction (Homepage Only)

Add to homepage template:

```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "{{ site.name }}",
  "url": "{{ site.prodUrl }}",
  "description": "{{ site.description }}"
}
</script>
```

### 3.6 Schema Inclusion Pattern

**In base.liquid, add near end of `<head>` or before `</main>`:**

```liquid
{% include "schema/organization.liquid" %}
```

**In individual page templates, add page-specific schema:**

```liquid
{% include "schema/breadcrumb.liquid", breadcrumbs: pageData.breadcrumbs %}
{% include "schema/faq.liquid", faqItems: pageData.faq.items %}
{% include "schema/service.liquid",
   serviceName: pageData.hero.title,
   serviceDesc: pageData.description,
   serviceUrl: page.url,
   priceFrom: pageData.priceFrom %}
```

---

## 4. Tier 3: Programmatic SEO

**Priority: HIGH for scale — this is what separates good SEO from great SEO.**

### 4.1 Data-Driven Page Generation

**The Pattern (proven across all projects):**

```
1 template + 1 data file = N pages
```

**Example: Service pages from JSON array**

`src/_data/services.json`:
```json
[
  {
    "title": "Impounded Car Insurance",
    "slug": "impounded-car-insurance",
    "metaTitle": "Impounded Car Insurance UK — Release Your Car Today | UK Sure",
    "description": "Get impound release cover from £75...",
    "hero": { ... },
    "benefits": [ ... ],
    "howItWorks": [ ... ],
    "faq": { "items": [ ... ] }
  },
  { ... }
]
```

`src/service-pages.liquid`:
```liquid
---
pagination:
  data: services
  size: 1
  alias: service
permalink: "/{{ service.slug }}/"
layout: layouts/base.liquid
title: "{{ service.title }}"
metaTitle: "{{ service.metaTitle }}"
description: "{{ service.description }}"
eleventyComputed:
  metaTitle: "{{ service.metaTitle }}"
---

{% include "components/page-hero.liquid", data: service.hero %}
{% include "components/key-features.liquid", items: service.benefits %}
{% include "components/how-it-works.liquid", steps: service.howItWorks %}
{% include "components/faq-accordion.liquid", items: service.faq.items %}

{% include "schema/service.liquid",
   serviceName: service.title,
   serviceDesc: service.description,
   serviceUrl: page.url,
   priceFrom: service.priceFrom %}
{% include "schema/faq.liquid", faqItems: service.faq.items %}
{% include "schema/breadcrumb.liquid", breadcrumbs: service.breadcrumbs %}
```

### 4.2 Location × Service Matrix (Techwala Pattern)

**The most powerful SEO pattern found.** Generates hundreds of pages targeting long-tail keywords.

**Structure:**
```
/[service]/                    → "Impounded Car Insurance" (generic)
/[location]/                   → "Insurance in Manchester" (city landing)
/[location]/[service]/         → "Impounded Car Insurance Manchester" (long-tail)
```

**Data structure:**

`src/_data/locations.json`:
```json
[
  {
    "name": "Manchester",
    "slug": "manchester",
    "county": "Greater Manchester",
    "postcodeArea": "M1-M60",
    "priority": 1,
    "description": "500+ words of location-specific content...",
    "landmarks": ["Arndale Centre", "Piccadilly"],
    "faqs": [
      { "question": "Do you cover Manchester?", "answer": "..." }
    ],
    "nearbyCities": ["salford", "stockport", "bolton"],
    "services": {
      "impounded-car-insurance": {
        "introText": "150+ words about impound insurance in Manchester...",
        "metaDescription": "Impounded car insurance in Manchester from £75...",
        "faqs": [
          { "question": "How quickly can I get cover in Manchester?", "answer": "..." }
        ]
      }
    }
  }
]
```

**Priority tiers for sitemap:**

| Tier | Description | Sitemap Priority | Content Depth |
|------|-------------|-----------------|---------------|
| 1 | Primary markets | 0.8 | 500+ words, 7+ FAQs |
| 2 | Secondary markets | 0.6 | 300+ words, 5+ FAQs |
| 3 | Long-tail catchment | 0.5 | 150+ words, 3+ FAQs |

### 4.3 Hub-and-Spoke Internal Linking (Forever Dental Pattern)

**Structure:**

```
Hub page: /dental-implants/           ← targets generic keyword
  ├── Spoke: /dental-implants-ashtead/  ← targets location keyword
  ├── Spoke: /dental-implants-epsom/
  ├── Spoke: /dental-implants-cobham/
  └── (each spoke links back to hub AND to other spokes)
```

**Implementation — "Other Locations" component:**

Create `src/_includes/components/other-locations.liquid`:
```liquid
{%- if locations and locations.size > 1 %}
<section class="other-locations">
  <div class="container">
    <h2>Also Available In</h2>
    <div class="location-grid">
      {%- for location in locations %}
        {%- unless location.slug == currentSlug %}
        <a href="/{{ location.slug }}/" class="location-card">
          {{ serviceName }} in {{ location.name }}
        </a>
        {%- endunless %}
      {%- endfor %}
    </div>
  </div>
</section>
{%- endif %}
```

### 4.4 Nearby Cities Cross-Linking

Every location page should link to 3–5 nearby cities. This distributes link equity across the location matrix.

```liquid
{%- if currentCity.nearbyCities and currentCity.nearbyCities.size > 0 %}
<section class="nearby-cities">
  <h2>Nearby Areas We Serve</h2>
  <div class="nearby-grid">
    {%- for slug in currentCity.nearbyCities %}
      {%- assign city = allCities | where: "slug", slug | first %}
      {%- if city %}
      <a href="/{{ city.slug }}/">{{ city.name }}</a>
      {%- endif %}
    {%- endfor %}
  </div>
</section>
{%- endif %}
```

---

## 5. Tier 4: Performance

**Priority: MEDIUM — affects Core Web Vitals and page speed scores.**

### 5.1 Image Optimisation

**Best practice (from forever-dental):**

```html
<picture>
  <source srcset="/media/image-640w.avif 640w,
                  /media/image-1080w.avif 1080w,
                  /media/image-1920w.avif 1920w"
          sizes="(max-width: 768px) 100vw, 50vw"
          type="image/avif">
  <source srcset="/media/image-640w.webp 640w,
                  /media/image-1080w.webp 1080w,
                  /media/image-1920w.webp 1920w"
          type="image/webp">
  <img src="/media/image-1080w.jpg"
       alt="Descriptive alt text with keyword"
       width="1080" height="720"
       loading="lazy">
</picture>
```

**Rules:**
- **Always** include `width` and `height` attributes (prevents CLS)
- **Always** include descriptive `alt` text (include relevant keyword naturally)
- **Always** use `loading="lazy"` on below-fold images
- **Never** lazy-load the hero/above-fold image — use `loading="eager"` or omit
- **Prefer** AVIF → WebP → JPG fallback chain via `<picture>`
- **Generate** 3 sizes: 640w (mobile), 1080w (tablet), 1920w (desktop)

### 5.2 Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Critical:** The `display=swap` parameter prevents Flash of Invisible Text (FOIT).

### 5.3 Nginx Caching (nginx.conf)

**Standard config (already consistent across projects):**

```nginx
# HTML — always fresh for crawlers
location ~* \.html$ {
    add_header Cache-Control "no-cache, must-revalidate";
    expires 0;
}

# Static assets — 30-day aggressive cache
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|avif|webp)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}

# Gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript
           application/x-javascript application/xml application/json
           application/javascript application/rss+xml
           image/svg+xml;
```

### 5.4 Preload Critical Resources

Add to `<head>` in base.liquid for hero images or critical fonts:

```html
<link rel="preload" href="/assets/css/global.css" as="style">
<link rel="preload" href="/assets/media/hero/hero-bg.avif" as="image" type="image/avif">
```

Only preload above-fold resources. Over-preloading hurts performance.

---

## 6. Tier 5: Content & Internal Linking

### 6.1 Navigation Best Practices

**Header mega-menu (proven pattern across all projects):**
- Group services into 2–3 categories
- Each category: 5–7 links max
- Include "View All" link to hub page
- Phone number visible in header (click-to-call on mobile)

**Footer (4–5 columns):**
- Column 1: Primary services (5–8 links)
- Column 2: Secondary services (5–8 links)
- Column 3: Company (About, Contact, Reviews, FAQ)
- Column 4: Legal (Privacy, Terms, Cookie Policy, Accessibility)
- Column 5: Contact info (address, phone, email, hours)

**Total footer links target: 25–35 internal links.**

### 6.2 Breadcrumb Navigation

**Visible breadcrumbs on every page except homepage:**

```liquid
{%- if breadcrumbs and breadcrumbs.size > 0 %}
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    {%- for crumb in breadcrumbs %}
    <li>
      {%- if crumb.url %}
        <a href="{{ crumb.url }}">{{ crumb.label }}</a>
      {%- else %}
        <span aria-current="page">{{ crumb.label }}</span>
      {%- endif %}
    </li>
    {%- endfor %}
  </ol>
</nav>
{%- endif %}
```

**Always pair with BreadcrumbList schema** (see Tier 2).

### 6.3 FAQ Sections

**Every service page should have 5–10 FAQs.** These target long-tail question keywords and enable rich snippets.

**Structure:**
- Store FAQs in separate `_data/[service]_faq.json` files (easier to manage)
- Render with `faq-accordion.liquid` component (HTML `<details>/<summary>`)
- Wrap with FAQPage schema

**FAQ data pattern:**
```json
{
  "title": "Frequently Asked Questions",
  "items": [
    {
      "question": "How much does impounded car insurance cost?",
      "answer": "Impound release insurance starts from £75 for a 30-day policy. The exact cost depends on your vehicle type, driving history, and the cover level you need."
    }
  ]
}
```

### 6.4 Content Depth Guidelines

| Page Type | Minimum Word Count | Sections Required |
|-----------|-------------------|-------------------|
| Homepage | 800–1,200 | Hero, services, trust, how it works, stats, FAQ, CTA |
| Core service page | 1,500–2,500 | Hero, what-is, benefits, how it works, FAQ (8+), testimonials, CTA |
| Sub-service page | 1,000–1,500 | Hero, key features, how it works, FAQ (5+), CTA |
| Location page | 500–800 | Hero, local context, services available, FAQ (5+), nearby cities |
| Location + Service page | 300–500 | Service intro, local context, pricing, FAQ (3–5) |
| About page | 800–1,200 | Story, team, credentials, awards, timeline |
| Contact page | 300–500 | Form, address, map, hours, phone |

### 6.5 Internal Linking Within Content

**Rules:**
- Every service page should link to 2–3 related services within body text
- Every FAQ answer can link to the relevant service page
- "Learn more" links should use descriptive anchor text, not "click here"
- Each page should receive at least 3 internal links from other pages

**Example (in a JSON content block):**
```json
{
  "type": "paragraph",
  "text": "If your vehicle was seized by police rather than impounded by the DVLA, you may need <a href=\"/seized-car-insurance/\">seized car insurance</a> instead."
}
```

---

## 7. Common Fixes for Known Gaps

These are specific issues found during the audit that should be fixed on existing projects. Claude: check each item when working on any project in this workspace.

### 7.1 Missing Across Most Eleventy Projects

| Fix | Projects Affected | Implementation |
|-----|-------------------|----------------|
| Add `robots.txt` | forever-dental, life-pro, fds-v2, ffa-v2, prbacklinks | Create `src/robots.liquid` (see §2.6) |
| Add `sitemap.xml` | forever-dental, life-pro, fds-v2, ffa-v2, uksure, prbacklinks | Create `src/sitemap.liquid` (see §2.7) |
| Add Twitter Card tags | forever-dental, life-pro, fds-v2, ffa-v2, prbacklinks | Add to base.liquid `<head>` (see §2.4) |
| Add FAQPage schema | forever-dental, life-pro, fds-v2, ffa-v2 | Create `schema/faq.liquid` include (see §3.2) |
| Add BreadcrumbList schema | forever-dental, life-pro, fds-v2, ffa-v2 | Create `schema/breadcrumb.liquid` include (see §3.3) |
| Add Organization schema | forever-dental, life-pro, fds-v2, ffa-v2 | Create `schema/organization.liquid` include (see §3.1) |
| Add canonical URLs | forever-dental, life-pro, fds-v2, ffa-v2 | Add `<link rel="canonical">` to base.liquid (see §2.3) |

### 7.2 Project-Specific Fixes

**life-pro:**
- Fix duplicate H1: change hero `<h1>` to `<p class="hero-title">` or main content `<h1>` to `<h2>`
- File: `src/_includes/components/hero-banner.liquid` line 11 OR `src/_includes/layouts/content-page.liquid` line 42

**ffa-v2:**
- Fill in empty NAP data in `src/_data/site.json` (phone, email, address are blank)
- Without this, LocalBusiness schema is impossible

**ok-tshirt-ecom-shopify:**
- Add LocalBusiness schema (has physical shop in Birmingham)
- Add FAQPage schema to banner-printing page (FAQs exist but no schema)

### 7.3 uksure-web-dev — Current State & Gaps

**Already implemented (good foundation):**
- ✅ Canonical URLs
- ✅ OG tags (partial)
- ✅ Dev noindex
- ✅ InsuranceAgency schema on homepage
- ✅ Service schema on service pages
- ✅ FAQPage schema
- ✅ BreadcrumbList schema
- ✅ Font preconnect + display=swap
- ✅ Skip-to-content link (accessibility)

**Still needed:**
- ❌ `robots.txt` — create `src/robots.liquid`
- ❌ `sitemap.xml` — create `src/sitemap.liquid`
- ❌ Twitter Card meta tags — add to base.liquid
- ❌ `og:locale` and `og:site_name` — add to base.liquid
- ❌ `og:image` — add default OG image
- ❌ Production URL — update `site.json` when domain is finalised
- ❌ Location pages — implement programmatic local SEO (Tier 3)
- ❌ Image `width`/`height` attributes — audit all `<img>` tags
- ❌ Responsive `srcset` images — implement `<picture>` pattern
- ❌ AggregateRating in Organization schema — add review data to `site.json`
- ❌ Opening hours in schema — add to `site.json`

---

## 8. Validation Checklist

Run this checklist before considering SEO complete on any project.

### Foundation
```
□ Every page has a unique <title> (50-60 chars)
□ Every page has a unique <meta description> (140-160 chars)
□ Every page has a <link rel="canonical">
□ Only ONE <h1> per page
□ Heading hierarchy is correct (no skipped levels)
□ Dev environment has noindex meta tag
□ Production environment does NOT have noindex
□ robots.txt exists and references sitemap
□ sitemap.xml exists and lists all public pages
□ OG tags present (title, description, type, url, locale, site_name)
□ Twitter Card tags present (card, title, description)
```

### Schema (validate at https://validator.schema.org/)
```
□ Organization/LocalBusiness schema on every page
□ FAQPage schema on every page with FAQs
□ BreadcrumbList schema on every page with breadcrumbs
□ Service schema on service pages
□ WebSite schema on homepage
□ All schema validates without errors
```

### Content
```
□ Every service page has 5+ FAQs
□ Every page has breadcrumb navigation (visible + schema)
□ Footer has 25+ internal links across 4-5 columns
□ Header mega-menu links to all service pages
□ No orphan pages (every page reachable from nav or internal links)
□ Phone number is click-to-call (tel: protocol)
□ NAP (Name, Address, Phone) is consistent across all pages
```

### Performance
```
□ All images have alt text
□ All images have width and height attributes
□ Below-fold images use loading="lazy"
□ Hero image does NOT use loading="lazy"
□ Fonts use display=swap
□ Font domains use preconnect
□ nginx.conf has gzip enabled
□ nginx.conf has 30-day cache for static assets
□ nginx.conf has no-cache for HTML
```

### Programmatic SEO (if applicable)
```
□ Location pages generate from data file
□ Each location has unique content (not just city name swapped)
□ Location pages have location-specific FAQs
□ Location pages cross-link to nearby cities
□ Location + Service pages exist for key combinations
□ Sitemap priorities reflect business value (tier 1 > tier 2 > tier 3)
```

---

## 9. Reference: What Delivered Results

### Patterns Ranked by SEO Impact

**1. Programmatic Location × Service Pages (Techwala)**
- 100+ cities × multiple services = 200+ long-tail pages
- Each page has unique content, local FAQs, geo-specific schema
- Nearby cities cross-linking distributes authority
- **Impact:** Captures "[service] in [city]" searches at massive scale

**2. Data-Driven Page Generation (All Eleventy projects)**
- 1 template + JSON data = unlimited pages
- Content updates require zero template changes
- Consistent structure across all pages
- **Impact:** Scales content production 10× without developer effort

**3. Hub-and-Spoke Model (Forever Dental)**
- Overview page targets generic keyword ("dental implants")
- Location variants target long-tail ("dental implants ashtead")
- All pages interlink, creating authority clusters
- **Impact:** Dominates both generic and location-specific SERPs

**4. FAQPage Schema (PR Backlinks, Techwala)**
- FAQ rich snippets in Google take up 2–3× the SERP space
- Each FAQ answer is a mini-ranking opportunity
- **Impact:** Higher CTR from search results, more SERP real estate

**5. Comprehensive Structured Data (Techwala — 8 schema types)**
- LocalBusiness + Service + FAQ + Breadcrumb + AggregateRating + GeoCircle
- Each schema type unlocks different rich snippet types
- **Impact:** Enhanced search appearance across all page types

**6. Content Depth with Modular Blocks (Life-Pro — 14 block types)**
- paragraph, CTA, highlight, ordered-list, checklist, comparison-table, stats-grid, pros-cons, pricing-table, etc.
- Table of contents with anchor links
- Sidebar with quick facts and CTAs
- **Impact:** Long-form authoritative content that ranks for informational queries

**7. Multi-Format Image Delivery (Forever Dental)**
- AVIF primary → WebP fallback → JPG legacy
- Responsive srcset (640w / 1080w / 1920w)
- Lazy loading on below-fold
- **Impact:** Faster page loads → better Core Web Vitals → ranking boost

### Anti-Patterns to Avoid

| Anti-Pattern | Found In | Fix |
|-------------|----------|-----|
| Duplicate H1 tags | life-pro | One H1 per page, period |
| Empty NAP data | ffa-v2 | Fill site.json completely before launch |
| No sitemap on 100+ page sites | forever-dental, life-pro, fds-v2 | Always generate sitemap |
| FAQ content without schema | forever-dental, life-pro, fds-v2 | Always pair FAQ HTML with FAQPage schema |
| Breadcrumbs without schema | life-pro, fds-v2, ffa-v2 | Always pair visible breadcrumbs with BreadcrumbList schema |
| Missing canonical on multi-variant pages | forever-dental (154 pages) | Every page must self-canonicalise |
| Relying on site-wide title fallback | life-pro ("LifePro" on all pages) | Every page needs its own title |

---

## Appendix: File Templates

### Minimal site.json for SEO

```json
{
  "name": "Company Name",
  "description": "Primary meta description for the site (140-160 chars)",
  "url": "https://dev.example.com",
  "prodUrl": "https://example.com",
  "phone": "01234 567890",
  "phoneHref": "tel:+441234567890",
  "email": "info@example.com",
  "address": {
    "street": "123 High Street",
    "town": "Town Name",
    "county": "County",
    "postcode": "AB1 2CD"
  },
  "schema": {
    "type": "LocalBusiness"
  },
  "openingHours": [
    { "days": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "days": ["Saturday"], "opens": "10:00", "closes": "16:00" }
  ],
  "social": [],
  "aggregateRating": {
    "rating": "4.9",
    "count": "50"
  }
}
```

### Schema includes directory structure

```
src/_includes/schema/
├── organization.liquid      ← Site-wide (base.liquid)
├── faq.liquid               ← Per-page (service pages, FAQ page)
├── breadcrumb.liquid         ← Per-page (all except homepage)
├── service.liquid            ← Per-page (service pages)
└── website.liquid            ← Homepage only
```

---

**End of playbook.** When implementing on a new project, work through Tiers 1–4 in order, validate with the checklist in §8, and reference §9 for proven patterns.
