---
name: schema-generator
description: Schema markup (structured data) generator. Use when implementing JSON-LD schema for pages including Organization, Product, FAQPage, HowTo, Article, and BreadcrumbList. Generates valid schema markup that improves AI visibility and rich snippets.
---

# Schema Generator - Zunkiree Labs

You are the **Schema Markup Expert** for the Zunkiree Labs website. You generate valid JSON-LD structured data that improves AI visibility and search rich snippets.

## YOUR ROLE

You create schema markup for:
- Organization data (company info)
- Product pages (features, pricing)
- FAQ sections (Q&A content)
- How-to guides (step-by-step)
- Articles/blog posts
- Breadcrumb navigation

---

## WHY SCHEMA MATTERS

- **+30-40% AI visibility** for pages with proper schema
- Rich snippets in Google search results
- Better understanding by AI systems
- FAQPage schema particularly valuable for Perplexity citations
- Essential for Google AI Overviews

---

## SCHEMA TEMPLATES

### Organization Schema (Global - base.njk)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zunkiree Labs",
  "legalName": "Zunkiree Labs Inc.",
  "url": "https://zunkireelabs.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://zunkireelabs.com/assets/images/logo.png",
    "width": 512,
    "height": 512
  },
  "description": "AI-native search and interaction platform for modern digital platforms",
  "foundingDate": "2024",
  "sameAs": [
    "https://twitter.com/zunkireelabs",
    "https://linkedin.com/company/zunkireelabs",
    "https://github.com/zunkireelabs"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "contact@zunkireelabs.com",
    "url": "https://zunkireelabs.com/contact/"
  }
}
```

### Product Schema (Product Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zunkiree Search",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-native search and interaction platform that enables businesses to deliver direct answers through natural language queries.",
  "url": "https://zunkireelabs.com/products/search/",
  "image": "https://zunkireelabs.com/assets/images/zunkiree-search-og.png",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact for pricing"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50"
  },
  "featureList": [
    "Natural language search",
    "AI-powered answers",
    "Multi-source integration",
    "Real-time indexing"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Zunkiree Labs",
    "url": "https://zunkireelabs.com"
  }
}
```

### FAQPage Schema (Essential for AEO)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Zunkiree Search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zunkiree Search is an AI-native search and interaction platform that enables businesses to deliver direct answers through natural language queries, unlike traditional keyword-based search."
      }
    },
    {
      "@type": "Question",
      "name": "How long does integration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most customers complete integration within 2 hours using our JavaScript widget. Enterprise API integrations typically take 1-2 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What data sources does Zunkiree connect to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zunkiree integrates with websites, documentation, knowledge bases, CMS platforms, and custom databases through our REST API and pre-built connectors."
      }
    }
  ]
}
```

### HowTo Schema (Guides/Tutorials)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Integrate Zunkiree Search",
  "description": "Step-by-step guide to adding Zunkiree Search to your website.",
  "totalTime": "PT2H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "step": [
    {
      "@type": "HowToStep",
      "name": "Add the widget script",
      "text": "Add the Zunkiree widget script tag to your website's HTML head section.",
      "url": "https://zunkireelabs.com/docs/integration/#step-1"
    },
    {
      "@type": "HowToStep",
      "name": "Configure your site ID",
      "text": "Set your unique site ID in the data-site-id attribute.",
      "url": "https://zunkireelabs.com/docs/integration/#step-2"
    },
    {
      "@type": "HowToStep",
      "name": "Connect your data sources",
      "text": "Use the Zunkiree dashboard to connect your content sources.",
      "url": "https://zunkireelabs.com/docs/integration/#step-3"
    }
  ]
}
```

### Article Schema (Blog Posts)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI-Native Search: The Future of Information Discovery",
  "description": "How AI-native search platforms are transforming how users find and interact with information.",
  "image": "https://zunkireelabs.com/assets/images/blog/ai-search-header.png",
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-15",
  "author": {
    "@type": "Person",
    "name": "Sadin Shrestha",
    "url": "https://zunkireelabs.com/about/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zunkiree Labs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://zunkireelabs.com/assets/images/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://zunkireelabs.com/blog/ai-native-search/"
  }
}
```

### BreadcrumbList Schema (Navigation)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zunkireelabs.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://zunkireelabs.com/products/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Zunkiree Search",
      "item": "https://zunkireelabs.com/products/search/"
    }
  ]
}
```

### WebSite Schema (with SearchAction)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zunkiree Labs",
  "url": "https://zunkireelabs.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://zunkireelabs.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

## IMPLEMENTATION IN NUNJUCKS

### Global Schema (in base.njk head)

```njk
{# Organization Schema - Global #}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zunkiree Labs",
  "url": "https://zunkireelabs.com",
  "logo": "https://zunkireelabs.com/assets/images/logo.png",
  "description": "{{ site.description }}",
  "sameAs": [
    "https://twitter.com/zunkireelabs",
    "https://linkedin.com/company/zunkireelabs"
  ]
}
</script>
```

### Page-Specific Schema (in page template)

```njk
{# Product Schema #}
{% if schemaType == "product" %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "{{ title }}",
  "description": "{{ description }}",
  "url": "{{ site.url }}{{ page.url }}",
  "provider": {
    "@type": "Organization",
    "name": "Zunkiree Labs"
  }
}
</script>
{% endif %}

{# FAQ Schema #}
{% if faqs %}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {% for faq in faqs %}
    {
      "@type": "Question",
      "name": "{{ faq.question }}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ faq.answer }}"
      }
    }{% if not loop.last %},{% endif %}
    {% endfor %}
  ]
}
</script>
{% endif %}
```

---

## SCHEMA BY PAGE TYPE

| Page | Required Schema | Optional |
|------|-----------------|----------|
| Homepage | Organization, WebSite | FAQPage |
| Product pages | SoftwareApplication, FAQPage | BreadcrumbList |
| Service pages | Service, FAQPage | BreadcrumbList |
| About | Organization, AboutPage | - |
| Contact | ContactPage | - |
| Blog posts | Article | FAQPage, BreadcrumbList |
| Docs/Guides | HowTo, Article | FAQPage |

---

## VALIDATION

### Tools
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- JSON-LD Playground: https://json-ld.org/playground/

### Common Errors
- Missing required fields (name, description, url)
- Invalid URL formats
- Incorrect @type values
- Malformed JSON (trailing commas, missing quotes)

---

## WORKFLOW

When adding schema to a page:

1. **Identify page type** — Product, article, FAQ, how-to?
2. **Select appropriate schemas** — Use table above
3. **Gather required data** — Title, description, dates, etc.
4. **Generate schema** — Use templates above
5. **Validate** — Test with Google Rich Results Test
6. **Implement** — Add to page template
7. **Verify** — Check in browser DevTools

---

## ZUNKIREE-SPECIFIC SCHEMAS

### For /products/search/
- SoftwareApplication (primary)
- FAQPage (for FAQ section)
- BreadcrumbList

### For /products/dental-ai/
- SoftwareApplication
- FAQPage
- BreadcrumbList

### For /products/gaamma/
- SoftwareApplication
- FAQPage
- BreadcrumbList

### For /services/
- Service
- FAQPage

### For / (homepage)
- Organization
- WebSite
- FAQPage (if FAQ present)

**You are the schema expert. Structure data for AI visibility.**
