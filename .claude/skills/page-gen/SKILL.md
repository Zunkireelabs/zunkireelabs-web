---
name: page-gen
description: Page generator for Zunkiree Labs. Use when creating new pages quickly. Scaffolds complete page structure with proper frontmatter, sections, and project conventions.
---

# Page Generator - Zunkiree Labs

You are the **Page Scaffolding Expert** for the Zunkiree Labs website.

## YOUR ROLE

You quickly generate new pages following established patterns:
- Complete page structure with frontmatter
- Hero sections
- Content sections
- CTAs
- Proper file placement

---

## PAGE TEMPLATE

Every new page follows this structure:

```njk
---
layout: base.njk
title: [Page Title] | Zunkiree Labs
description: [SEO description - 150-160 characters]
permalink: /[slug]/
---

{# =====================================================
   SECTION 1: HERO
   ===================================================== #}
<section class="py-20 md:py-32 px-4 md:px-6 bg-warm-off-white">
  <div class="max-w-[1200px] mx-auto text-center">
    <p class="text-sm font-medium text-warm-400 tracking-wide mb-4" data-reveal>[Label]</p>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-medium text-warm-black tracking-[-0.03em] leading-[1.1] mb-6" data-reveal>
      [Headline]
    </h1>
    <p class="text-xl text-warm-600 max-w-2xl mx-auto" data-reveal>
      [Subheadline]
    </p>
  </div>
</section>

{# =====================================================
   SECTION 2: MAIN CONTENT
   ===================================================== #}
<section class="py-16 md:py-24 lg:py-32 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto">
    {# Content here #}
  </div>
</section>

{# =====================================================
   SECTION 3: CTA
   ===================================================== #}
<section class="py-16 md:py-24 px-4 md:px-6 bg-warm-rich-black text-white">
  <div class="max-w-[1200px] mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-medium tracking-[-0.03em] mb-6" data-reveal>
      [CTA Headline]
    </h2>
    <p class="text-lg text-white/70 max-w-2xl mx-auto mb-8" data-reveal>
      [CTA description]
    </p>
    <a href="/contact/" class="inline-flex items-center justify-center px-7 py-3.5 bg-white text-warm-black font-medium text-base rounded-full hover:bg-warm-off-white transition-all duration-200" data-reveal>
      [CTA Button]
    </a>
  </div>
</section>
```

---

## PAGE TYPES

### 1. Standard Page
**File:** `src/pages/[name].njk`
**Permalink:** `/[name]/`

### 2. Product Page
**File:** `src/pages/products/[name].njk`
**Permalink:** `/products/[name]/`

### 3. Nested Page
**File:** `src/pages/[parent]/[name].njk`
**Permalink:** `/[parent]/[name]/`

---

## SECTION PATTERNS

### Hero Variants

**Centered Hero (Standard)**
```njk
<section class="py-20 md:py-32 px-4 md:px-6 bg-warm-off-white">
  <div class="max-w-[1200px] mx-auto text-center">
    <!-- Content -->
  </div>
</section>
```

**Full-Height Hero (Like Homepage)**
```njk
<section class="relative min-h-screen flex items-center justify-center px-4 md:px-6">
  <!-- Background -->
  <div class="absolute inset-0">
    <img src="/assets/images/[image].webp" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
  </div>
  <!-- Content -->
  <div class="relative z-10 max-w-[1200px] mx-auto text-center">
    <!-- Content -->
  </div>
</section>
```

### Content Sections

**Two-Column Layout**
```njk
<section class="py-16 md:py-24 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div data-reveal>
      <!-- Text content -->
    </div>
    <div data-reveal>
      <!-- Image or visual -->
    </div>
  </div>
</section>
```

**Three-Column Grid**
```njk
<section class="py-16 md:py-24 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto">
    <div class="text-center mb-16" data-reveal>
      <!-- Section header -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Cards -->
    </div>
  </div>
</section>
```

**Feature List**
```njk
<section class="py-16 md:py-24 px-4 md:px-6 bg-warm-off-white">
  <div class="max-w-[1200px] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {% for feature in features %}
      <div class="flex gap-4" data-reveal>
        <div class="w-10 h-10 bg-zunkiree-50 rounded-lg flex-shrink-0 flex items-center justify-center">
          <!-- Icon -->
        </div>
        <div>
          <h3 class="font-medium text-warm-black mb-2">{{ feature.title }}</h3>
          <p class="text-warm-600 text-sm">{{ feature.description }}</p>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
```

---

## CHECKLIST

When generating a page:

- [ ] Correct file location (`src/pages/`)
- [ ] Complete frontmatter (layout, title, description, permalink)
- [ ] Hero section with label, h1, and subheadline
- [ ] At least one content section
- [ ] CTA section at bottom
- [ ] All animated elements have `data-reveal`
- [ ] Responsive classes (mobile-first)
- [ ] Uses design tokens (zunkiree-*, warm-*)

---

## EXAMPLE: Generate a "Pricing" Page

**Input:** "Create a pricing page"

**Output:** `src/pages/pricing.njk`

```njk
---
layout: base.njk
title: Pricing | Zunkiree Labs
description: Simple, transparent pricing for Zunkiree Search. Choose the plan that fits your needs.
permalink: /pricing/
---

{# =====================================================
   SECTION 1: HERO
   ===================================================== #}
<section class="py-20 md:py-32 px-4 md:px-6 bg-warm-off-white">
  <div class="max-w-[1200px] mx-auto text-center">
    <p class="text-sm font-medium text-warm-400 tracking-wide mb-4" data-reveal>Pricing</p>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-medium text-warm-black tracking-[-0.03em] leading-[1.1] mb-6" data-reveal>
      Simple, transparent pricing
    </h1>
    <p class="text-xl text-warm-600 max-w-2xl mx-auto" data-reveal>
      Choose the plan that fits your needs. All plans include core features.
    </p>
  </div>
</section>

{# =====================================================
   SECTION 2: PRICING CARDS
   ===================================================== #}
<section class="py-16 md:py-24 lg:py-32 px-4 md:px-6">
  <div class="max-w-[1200px] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {# Starter Plan #}
      <div class="rounded-2xl border border-warm-border p-8" data-reveal>
        <h3 class="text-lg font-medium text-warm-black mb-2">Starter</h3>
        <p class="text-warm-400 text-sm mb-6">For small projects</p>
        <div class="mb-6">
          <span class="text-4xl font-medium text-warm-black">$99</span>
          <span class="text-warm-400">/month</span>
        </div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center gap-3 text-warm-600 text-sm">
            <svg class="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Feature one
          </li>
          {# More features #}
        </ul>
        <a href="/contact/" class="block text-center px-6 py-3 border border-warm-border rounded-full text-warm-black font-medium hover:bg-warm-surface transition-colors">
          Get Started
        </a>
      </div>
      
      {# Pro Plan (Featured) #}
      <div class="rounded-2xl bg-warm-rich-black text-white p-8 shadow-xl" data-reveal>
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-medium">Pro</h3>
          <span class="text-xs bg-zunkiree-600 px-2 py-1 rounded-full">Popular</span>
        </div>
        <p class="text-white/60 text-sm mb-6">For growing teams</p>
        <div class="mb-6">
          <span class="text-4xl font-medium">$299</span>
          <span class="text-white/60">/month</span>
        </div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center gap-3 text-white/80 text-sm">
            <svg class="w-5 h-5 text-zunkiree-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Everything in Starter
          </li>
          {# More features #}
        </ul>
        <a href="/contact/" class="block text-center px-6 py-3 bg-white text-warm-black rounded-full font-medium hover:bg-warm-off-white transition-colors">
          Get Started
        </a>
      </div>
      
      {# Enterprise Plan #}
      <div class="rounded-2xl border border-warm-border p-8" data-reveal>
        <h3 class="text-lg font-medium text-warm-black mb-2">Enterprise</h3>
        <p class="text-warm-400 text-sm mb-6">For large organizations</p>
        <div class="mb-6">
          <span class="text-4xl font-medium text-warm-black">Custom</span>
        </div>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center gap-3 text-warm-600 text-sm">
            <svg class="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Everything in Pro
          </li>
          {# More features #}
        </ul>
        <a href="/contact/" class="block text-center px-6 py-3 border border-warm-border rounded-full text-warm-black font-medium hover:bg-warm-surface transition-colors">
          Contact Sales
        </a>
      </div>
    </div>
  </div>
</section>

{# =====================================================
   SECTION 3: CTA
   ===================================================== #}
<section class="py-16 md:py-24 px-4 md:px-6 bg-warm-rich-black text-white">
  <div class="max-w-[1200px] mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-medium tracking-[-0.03em] mb-6" data-reveal>
      Not sure which plan is right?
    </h2>
    <p class="text-lg text-white/70 max-w-2xl mx-auto mb-8" data-reveal>
      Let's talk about your needs and find the perfect solution.
    </p>
    <a href="/contact/" class="inline-flex items-center justify-center px-7 py-3.5 bg-white text-warm-black font-medium text-base rounded-full hover:bg-warm-off-white transition-all duration-200" data-reveal>
      Schedule a Call
    </a>
  </div>
</section>
```

---

## NOW: Execute

When asked to create a page:
1. Determine page type and location
2. Generate complete page from template
3. Customize hero and sections
4. Add appropriate CTAs
5. Ensure all conventions are followed

**You are the page generator. Scaffold quickly and correctly.**
