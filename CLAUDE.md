# CLAUDE.md - Project Intelligence

## Project Overview

**Project**: Zunkiree Labs Website
**Tech Stack**: Eleventy 3.x, Vite, Tailwind CSS, Alpine.js, GSAP, Lenis

---

## Website V2 Redesign

This repository contains an existing SaaS marketing website.

The goal of this project is to build **Website V2** — a complete visual redesign of the existing website.

Website V2 is a new design layer built on top of the existing implementation.

- Treat the current website as an implementation reference only.
- Do not use the existing UI, layouts, spacing, typography, or visual patterns as design references.
- Reuse existing engineering, routing, business logic, and functionality whenever appropriate.
- The visual experience should reflect a premium enterprise SaaS product inspired by the quality of Kore.ai while maintaining the project's own brand identity.

### Development Rules

- Build only the requested section.
- Work on Website V2 only.
- Never modify unrelated files.
- Preserve existing functionality unless instructed otherwise.
- Treat the existing UI as an implementation reference, not a design reference.
- Reuse existing project components whenever appropriate.
- Use 21st.dev MCP as the first choice for foundational UI components.
- Adapt imported components to match the project design system.
- Build custom components only when necessary.
- Produce production-ready, responsive, accessible, and performant code.
- Keep components reusable and maintainable.
- Return only the modified files.
- Wait for approval before moving to the next section.

---

## Homepage V2 Working Formula (supersedes Automatic Skill Routing for this scope)

**Scope**: `src/pages/homepage-v2.njk` and `src/_includes/partials/navbar-v2.njk` only. The old homepage (`index.njk` and whatever it currently includes) stays live and untouched — it is reference-only, never edited as part of this work.

**Do NOT auto-invoke `/project-pm` for homepage-v2 work.** The orchestrator was built for the old homepage flow. Homepage V2 follows its own sequence instead:

1. Pull the section's blueprint from `docs/PAGE_BLUEPRINTS.md` (homepage section order/IA).
2. Check `docs/MASTER_DESIGN_SPEC.md` (design tokens + §25 Design Review Checklist) so the section is compliant by construction, not audited after the fact. This doc wins over `tailwind.config` on any conflict.
3. Pick components per `docs/COMPONENT_LIBRARY.md`'s stated priority: reuse existing project components → adapt via 21st.dev MCP → build custom only if neither fits.
4. Implement directly into `homepage-v2.njk` / `navbar-v2.njk` — no PM/orchestration layer in between.
5. Invoke specialist skills (`/tailwind-ui`, `/animation-engineer`, `/perf-engineer`, etc.) manually, only when a section genuinely needs that expertise — never as a default gate.
6. One section at a time. Wait for explicit approval before starting the next section.

**Reference doc chain** (each builds on the last — read only what's relevant to the section at hand, don't fan out into the whole chain every time): `DESIGN_AUDIT.md` + `PROJECT_AUDIT.md` + `CONTENT_SUMMARY.md` → `REDESIGN_STRATEGY.md` (phased plan) → `MASTER_DESIGN_SPEC.md` (design system source of truth) → `COMPONENT_LIBRARY.md` (component definitions) → `PAGE_BLUEPRINTS.md` (per-page section order) → `color-system.html` (live token preview, not a spec).

**Confirmed decisions** (do not re-litigate — build against these):
- Nav (`navbar-v2.njk`): Industries (Education, Agencies, Healthcare, Real Estate) + Platform + Resources as the three top-level items (revised 2026-07-26 — Resources added back, since Industries/Platform alone read as an incomplete nav). No separate Products/Solutions/Services top-level menu — Products content is nested under Platform; Solutions/service content lives nested inside each industry page instead of the nav.
- Homepage hero: centered single-column, no Hero Visual (§2.2) split — overrides `PAGE_BLUEPRINTS.md`'s general 50/50 hero-split guidance for this page specifically.

**Still open** (flag before building anything that depends on these; do not assume an answer):
- Dental AI Assistant's disposition (folded into Healthcare / kept separate / shelved).
- Disposition of non-core-vertical content (Manufacturing, Legal, Professional Services, HR) — retire vs. keep as secondary pages.

---

## CRITICAL: Deployment Rules

**NEVER push directly to `main` or `stage` without explicit user instruction.**

| Branch | Triggers | Deploys To | URL |
|--------|----------|-----------|-----|
| `main` | GitHub Actions → VPS (Docker) | Production | https://zunkireelabs.com |
| `stage` | GitHub Actions → VPS (Docker) | Staging | https://dev-web.zunkireelabs.com |
| `feature/*` | No auto-deploy | Preview only | Vercel preview URL |

**Workflow:**
1. All work goes on a `feature/` branch
2. Push to `feature/` branch — Vercel preview auto-generated
3. User reviews and merges to `stage` for staging test
4. User merges `stage` → `main` for production

**VPS deploy path:**
- Production: `/home/zunkireelabs/devprojects/zunkiree-web-prod` (container: `zunkiree-production`)
- Staging: `/home/zunkireelabs/devprojects/zunkiree-web-staging` (container: `zunkiree-staging`)

---

## Automatic Skill Routing

When the user gives ANY development request, **automatically invoke `/project-pm`**.

### Trigger Patterns (auto-invoke PM):
- "Build/Create/Implement/Add X"
- "Fix/Update/Change/Refactor X"
- Feature requests or bug fixes
- Component creation, page updates, animation work

### Exceptions (do NOT auto-invoke):
- Questions: "How does X work?"
- Reading: "Show me X"
- Direct skill invocation (`/skill-name`)

---

## Available Skills

### Development Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/project-pm` | **Orchestrator** | All development tasks — routes to specialists |
| `/eleventy-dev` | **Templates** | Nunjucks pages, layouts, partials, Eleventy config |
| `/animation-engineer` | **Motion** | GSAP animations, ScrollTrigger, Lenis, hero effects |
| `/perf-engineer` | **Animation Perf** | Animation performance, 60fps, GSAP/Lenis optimization |
| `/website-speed-perf` | **Page Speed** | Core Web Vitals, LCP/FCP/TTFB, image optimization |
| `/tailwind-ui` | **Styling** | Tailwind classes, responsive design, design system |
| `/page-gen` | **Generator** | Scaffold new pages quickly with correct structure |

### SEO/AEO Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/aeo-optimizer` | **AI Search** | AI visibility, ChatGPT/Perplexity citations |
| `/seo-auditor` | **SEO Audit** | Page audits, meta tags, content structure scoring |
| `/content-writer` | **Content** | SEO/AEO-optimized copy, FAQs, comparison articles |
| `/redesign-content` | **Redesign Copy** | Rewrite copy using ServiceNow patterns, preserve SEO |
| `/schema-generator` | **Structured Data** | JSON-LD schema markup for AI visibility |

### Utility Skills
| Skill | Domain | When to Use |
|-------|--------|-------------|
| `/svg-extractor` | **SVG/Icons** | Extract SVGs, recreate icons, optimize vectors |
| `/skill-architect` | **Meta** | Create/optimize skills, analyze skill gaps |

---

## Commands

```bash
npm run dev      # Start Eleventy dev server (port 8080)
npm run build    # Build for production
npm run clean    # Remove dist folder
```

---

## Project Structure

```
zunkiree-labs/
├── src/
│   ├── _includes/
│   │   ├── layouts/        # Page layouts
│   │   └── partials/       # Reusable partials (header, footer, etc.)
│   ├── pages/              # Page templates (.njk)
│   │   ├── index.njk
│   │   ├── about.njk
│   │   ├── careers.njk
│   │   ├── contact.njk
│   │   ├── customers.njk
│   │   ├── services.njk
│   │   └── products/
│   │       ├── dental-ai.njk
│   │       ├── gaamma.njk
│   │       └── search.njk
│   ├── assets/             # CSS, JS, images
│   └── _data/              # Global data files (JSON)
├── .github/workflows/
│   ├── deploy.yml          # Production deploy (main → VPS)
│   ├── deploy-staging.yml  # Staging deploy (stage → VPS)
│   ├── ci.yml              # CI checks
│   └── rollback.yml        # Rollback workflow
├── dist/                   # Built output (gitignored)
├── .eleventy.js
├── tailwind.config.js
├── postcss.config.js
└── CLAUDE.md
```

---

## Tech Stack

- **Eleventy 3.x** — Static site generator
- **Nunjucks (.njk)** — Templating
- **Tailwind CSS 3.x** — Utility-first CSS
- **Alpine.js** — Lightweight reactivity
- **GSAP** — Animations
- **Lenis** — Smooth scrolling
- **Docker** — Container deployment on VPS

---

## Conventions

- **File naming**: kebab-case (`about.njk`, `hero-image.webp`)
- **Layouts**: `src/_includes/layouts/`
- **Partials**: `src/_includes/partials/`
- **Styles**: Tailwind utilities + custom in `src/assets/css/`
- **Mobile-first** responsive design always

---

## Quality Standards

1. Pages render without errors
2. Responsive on all breakpoints
3. Animations smooth at 60fps
4. Accessibility (semantic HTML, alt text)
5. Fast loading (optimized images, minimal JS)
6. SEO optimized (meta tags, schema markup)
7. AEO ready (extractable content, FAQs)

---

## SEO/AEO Requirements

### Every Page Must Have
- Title: 50-60 chars, keyword in first half
- Meta description: 150-160 chars, action word + keyword
- Single H1 with primary keyword
- Schema markup (Organization global + page-specific)

### AI Visibility (AEO)
- 40-60 word definition blocks for "What is X?" queries
- FAQ sections with natural-language questions
- Comparison tables for "[X] vs [Y]" content
- Statistics with named sources

### FAQ design (only two exist, do not invent a third)

| Where | Design | How |
|---|---|---|
| Blog posts, every resource page (including the resources index), glossary terms | **Grey card** | One bordered box, "Frequently asked questions" heading, then question and answer pairs |
| Home, about, contact, pricing, products, GaaS, locations, comparisons, solutions | **Accordion** (click to open) | The page's existing `faqs` front matter or `<details>` pattern |

Grey card markup. Copy it exactly. The two forms render identically; the blog's text styling comes from `blog-post.njk`, so resource and glossary pages carry it explicitly.

Blog posts:

```html
<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Question?</p><p class="text-gray-600 leading-relaxed">Answer.</p></div></div></div><script type="application/ld+json">{FAQPage JSON-LD}</script><!-- SEOAI:FAQ:END -->
```

Resource pages (and the glossary layout):

```html
<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)]" data-reveal><h2 class="mt-10 mb-4 text-[22px] font-semibold leading-[36px] tracking-tight text-[#111827]">Frequently asked questions</h2><div class="space-y-6"><div><p class="mt-6 mb-2 text-[18px] font-medium leading-[1.625] text-[#4a636e]">Question?</p><p class="my-6 text-[18px] leading-[1.625] text-[#4a636e]">Answer.</p></div></div></div><script type="application/ld+json">{FAQPage JSON-LD}</script><!-- SEOAI:FAQ:END -->
```

Rules for every FAQ:
- The FAQPage JSON-LD must list exactly the questions shown on the page, with the same wording. No schema-only FAQ, no hidden questions.
- One FAQ per page. Do not add a second block, and do not repeat a sentence that is already in the body word for word.
- One FAQPage, one Article-type and one WebPage schema block per URL. A page that writes its own WebPage sets `hasOwnWebPage: true`.
- Related posts use `related:` in the front matter (rendered as cards by `blog-post.njk`), never a bulleted list in the body.
- `npm run check:pages` (also run in CI) fails on any of the above.

### Schema
- **Global**: Organization, WebSite
- **Products**: SoftwareApplication, FAQPage
- **Services**: Service, FAQPage

---

## Git & PR Conventions

### Commits
```
feat: short description

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

### Branch Strategy
```
main          ← production (zunkireelabs.com)
stage         ← staging (dev-web.zunkireelabs.com)
feature/xyz   ← all work happens here
```

### Pull Requests
- Author: **Sadin Shrestha**
- No AI attribution in PR descriptions
- Format:
  ```
  ## Summary
  - Bullet points

  ## Test plan
  - [ ] Checklist
  ```
