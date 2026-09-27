# Project Audit: Engineering Architecture
**Prepared for**: Zunkiree Labs full visual redesign
**Scope**: Read-only architecture review. No files modified.
**Companion doc**: [DESIGN_AUDIT.md](./DESIGN_AUDIT.md) (Kore.ai visual teardown — the new design system reference)
**Premise**: Visual design will be rebuilt from scratch, inspired by Kore.ai. This document maps what engineering/logic underneath is worth keeping.
**Date**: 2026-07-20

---

## 1. Folder Structure

```
zunkireelabs-web/
├── .eleventy.js                  # Eleventy config (Vite plugin, filters, shortcodes)
├── package.json                  # deps/scripts
├── tailwind.config.js            # design tokens
├── postcss.config.js             # tailwind + autoprefixer only
├── vercel.json                   # preview-branch deploy config
├── docker-compose.yml / .dev.yml # prod/staging container defs
├── Dockerfile, nginx/            # container + reverse-proxy config
├── CLAUDE.md                     # project intelligence / skill routing / deploy rules
├── docs/                         # DESIGN_AUDIT.md, this file, style guides, plans
├── _local-backup/                # untracked — single legacy homepage file, see §13
├── .github/workflows/            # ci.yml, deploy.yml, deploy-staging.yml, rollback.yml
├── public/                       # Vite publicDir passthrough root
├── dist/                         # build output (gitignored)
└── src/
    ├── _data/                    # global + collection data (JSON + JS) — see §7
    ├── _includes/
    │   ├── layouts/               # 9 layout templates — see §4
    │   ├── partials/              # header, footer, cta-band, cta-faq, ribbon-platform
    │   └── components/            # lead-capture-form, product-nav, author-cards, nav-icon, picture
    ├── assets/
    │   ├── css/main.css           # 1198 lines, Tailwind + custom layers
    │   ├── js/main.js, analytics.js, infinity-threejs.js
    │   ├── images/, videos/, lottie/, icons/, fonts/
    ├── pages/                     # top-level + /products/ + /services/ + /resources/
    ├── blog/                      # markdown posts + blog.json + index.njk
    ├── compare/, glossary/, locations/  # programmatic-SEO collection templates
    ├── sitemap.njk
    └── temp-ss/                   # ~120 screenshot PNGs + 5 standalone HTML previews — scratch, not part of the build
```

---

## 2. Framework & Build Pipeline

- **Eleventy 3.1.2** + `@11ty/eleventy-plugin-vite` 7.0.0 — Vite runs as an embedded Eleventy plugin, not a separate build step. `rollupOptions.input` points at `src/assets/js/main.js` as the sole JS entry; `emptyOutDir: false` preserves Eleventy's own output.
- A hand-rolled inline Vite plugin (`copyNonHtmlFiles`) copies `sitemap.xml`/`robots.txt` from Eleventy's temp dir into `dist/` post-bundle — a workaround, not a first-class feature.
- Passthrough copies: images, fonts, css, js, icons, videos, lottie all copied verbatim under `assets/`.
- Custom `.eleventy.js` additions: shortcode `year`; filters `find`, `date` (hand-rolled 3-format switch), `head`, `rejectattr` (partial shim, only supports `equalto`), `truncate`, `split`, `titleCase`.
- **package.json**: `type: module`. Scripts: `dev`, `build`, `clean` (Windows-only `rmdir`, unused in CI so latent rather than active). No TypeScript, no linter, no test framework anywhere in the stack.
- Deps: Alpine.js (+ `@alpinejs/collapse`), GSAP, Lenis, lottie-web, three.js, Tailwind 3.x, Vite 7.

**Verdict**: the build pipeline itself is sound and framework-appropriate for a redesign — nothing here forces a rebuild.

---

## 3. Routing / Page Architecture

Static pages (`src/pages/`): `index.njk` (`/`, 1677 lines, monolithic), `homepage-v2.njk` (`/homepage-v2/`, 22-line stub — **the in-progress redesign staging page**), `about.njk`, `agentic-as-a-service.njk`, `careers.njk`, `contact.njk`, `customers.njk`, `pricing.njk`, `projects.njk`, `services.njk`, `team.njk`.

`src/pages/products/*.njk` (dental-ai, gaamma, search, ai-booking-engine, ai-commerce-agent, ai-crm, index) — each sets `productId` in frontmatter, rendered through `layout: product.njk`, content pulled from `productsDetails.json`.

`src/pages/services/*.njk` (9 services) — same pattern via `layout: service.njk` + `servicesDetails.json`.

`src/pages/resources/*.njk` — 13 individual resource pages.

**Programmatic-SEO collections** (one template, data-driven fan-out via Eleventy pagination):
- `compare/comparison-pages.njk` + `comparisons.js` → `/compare/{id}/`
- `glossary/glossary-terms.njk` + `glossary.js` → `/glossary/{id}/`
- `locations/location-pages.njk` + `locations.js` → `/locations/{id}/`
- `locations/location-service-pages.njk` + `locationServicePages.js` → `/locations/{location}/{service}/` (cartesian product, computed in the data file, with canonical-URL logic to avoid thin-content duplicate-SEO penalties)
- `blog/*.md` → blog posts via `layout: blog-post.njk`

**index.njk vs homepage-v2.njk**: both build simultaneously today. `homepage-v2.njk` is clearly the intended redesign target — a placeholder waiting to be built out section-by-section and eventually promoted to `/`. This audit assumes that path continues.

**Verdict**: routing/collection architecture is a strong Reuse — the programmatic SEO pages in particular (compare/glossary/locations) represent real SEO value that has nothing to do with visual design and should not be touched structurally.

---

## 4. Layouts (`src/_includes/layouts/`)

| Layout | Lines | Role |
|---|---|---|
| `base.njk` | 320 | Root `<html>` shell. GA4, meta/OG/Twitter, robots noindex (non-prod), canonical, LCP preload (hardcoded homepage image path), all JSON-LD schema generation inline (~200 lines), Google Fonts, header/footer includes, main JS bundle, hardcoded Zunkiree Search widget loader + `openZunkireeWidget()` global. |
| `product.njk` | 963 | Full single-file composition for all `/products/*`: hero (incl. a bespoke Alpine `searchDemo()` hardcoded for `product.id == 'search'`), features, stats bar, definition, benefits, tabbed use-cases, client-story carousel, resources grid, CTA+FAQ accordion. Driven from `productsDetails.json[productId]`. |
| `service.njk` | 699 | Parallel structure to product.njk for `/services/*`, driven from `servicesDetails.json[serviceId]`. Same logical sections, forked markup/styling (near-duplicate of product.njk). |
| `catalog.njk` | 325 | Shared by `/products/` and `/services/` index pages (`catalogType` branches data source). Own inline GSAP hero-entrance script; own duplicate schema block. |
| `blog-post.njk` | 239 | Article schema, author lookup, unused TOC placeholder, related-posts query. |
| `comparison.njk` | 238 | WebPage/ItemList schema, linear-scan lookup pattern. |
| `glossary-term.njk` | 171 | DefinedTerm + FAQPage schema, linear-scan lookup. |
| `location.njk` | 311 | LocalBusiness + FAQPage per city, linear-scan lookup. |
| `location-service.njk` | 177 | Service schema referencing location's LocalBusiness `@id`, linear-scan lookup. |

**Verdict**: `base.njk`'s meta/OG/canonical logic is well-factored (Reuse). Its schema generation, and the schema blocks duplicated across the other 6 layouts, are functionally correct but architecturally scattered (Refactor). `product.njk`/`service.njk` are Rebuild-tier — too large and visually entangled to patch incrementally, but the `[dataKey][id]` data-binding pattern underneath should carry forward unchanged.

---

## 5. Partials & Components

`src/_includes/partials/`:
- **`header.njk`** (490 lines) — Alpine-driven mega-menu, mobile menu, scroll-hide behavior, dropdown state, wired to `navigation.json`. Includes a hardcoded (non-data-driven) "AI Agents CTA" hover card and an "Ask AI" button calling `openZunkireeWidget()`.
- **`footer.njk`** (131 lines) — mostly static link columns. **Several links 404**: `/solutions/`, `/support/`, `/partners/`, `/login/`, `/register/`, `/terms/`, `/gdpr/`, `/privacy/`, `/privacy-choices/`, `/cookie-policy/`, `/cookie-preferences/`, `/accessibility/` — none exist under `src/pages/`. Social icons are placeholder `href="#"` except LinkedIn.
- **`cta-band.njk`** (71 lines) — homepage two-row glass CTA panel, tightly coupled to `main.js`'s `initFaqGreenGlow()` via a specific DOM id.
- **`cta-faq.njk`** (179 lines) — dual-theme (light/dark) FAQ accordion + CTA panel. **The best-factored partial in the codebase** — genuinely parameterized, not homepage-specific.
- **`ribbon-platform.njk`** (258 lines) — self-contained scroll-pinned Three.js ribbon, lazy-loads three.js from a CDN (not the bundled npm package). Appears **orphaned** — not included by any page found; verify before reuse or deletion.

`src/_includes/components/`:
- **`lead-capture-form.njk`** (176 lines) — realistic form fields, but `@submit.prevent` only fakes a 1.5s `setTimeout`. **No real submission, no backend, no `data-track` wiring to analytics.js.** The single biggest business-logic gap in the codebase.
- **`product-nav.njk`** (69 lines) — sticky secondary nav, scroll-sync logic duplicated from header.njk.
- **`picture.njk`** (49 lines) — AVIF/WebP/`<picture>` responsive image helper. Genuinely reusable, framework-agnostic.
- **`author-cards.njk`** (45 lines), **`nav-icon.njk`** (132 lines, 20+ SVG icon switch/case).

---

## 6. Business Logic

- **`analytics.js`** (136 lines) — GA4 `gtag` wrapper: `trackFormSubmit`, `trackCTAClick`, `trackResourceDownload`, `trackScrollDepth`, plus `initAnalytics()` auto-wiring via `data-track` attribute convention and a throttled scroll-depth watcher. **Clean, reusable, framework-agnostic** — but currently under-adopted (homepage CTAs and the lead-capture form don't set `data-track`).
- **No search functionality lives in this repo.** "Zunkiree Search" is an **external SaaS widget** loaded via `<script src="https://zunkiree-search-v1.vercel.app/zunkiree-widget.iife.js" data-site-id="zunkireelabs" data-api-url="https://api.zunkireelabs.com">` in base.njk, lazy-loaded on idle/interaction. No local index, no API route in this repo.
- **No contact-form backend anywhere** — no `/api` routes, no serverless functions, no fetch/XHR calls in any JS file. All "forms" today are cosmetic Alpine state.
- `main.js` (626 lines) and `infinity-threejs.js` (667 lines) are pure animation/UI wiring — no business logic (see §10).

---

## 7. Data Layer (`src/_data/`)

| File | Lines | Content | Consumed by |
|---|---|---|---|
| `site.json` | 22 | name, tagline, description, url, contact, social, meta defaults | base.njk, footer, all schema |
| `navigation.json` | 391 | mega-menu structure (columns, featured card, CTA bar, icons, badges) | header.njk |
| `products.json` | 110 | product catalog summary | catalog.njk |
| `productsDetails.json` | 932 | full per-product detail (definition, stats, benefits, useCases, faq, cta, resources, clients) | product.njk |
| `productsFaq.json` / `servicesFaq.json` | 22 / 22 | catalog-level FAQ schema source | catalog.njk |
| `productsStories.json` / `servicesStories.json` | 26 / 50 | client case-study cards | product.njk / service.njk |
| `services.json` | 139 | service catalog summary | catalog.njk, service.njk |
| `servicesDetails.json` | 1748 | full per-service detail (largest data file) | service.njk |
| `resources.json` | 461 | resource library metadata | resources pages |
| `spotlight.json` | 34 | homepage spotlight cards | index.njk |
| `faq.json`, `aboutFaq.json` | 42 / 18 | generic + about-page FAQs | various, cta-faq.njk |
| `authors.js` | 25 | blog author objects | blog-post.njk |
| `comparisons.js` | 196 | competitor-comparison content | comparison.njk |
| `glossary.js` | 175 | AI glossary terms (shortDef/definition/category/relatedService) | glossary-term.njk |
| `locations.js` | 236 | city/region data incl. FAQs, service overrides, nearby cities | location.njk, location-service.njk |
| `locationServicePages.js` | 33 | computed cartesian-product pagination source (locations × services) | location-service-pages.njk |
| `env.js` | 4 | `GA_MEASUREMENT_ID`, `ELEVENTY_ENV` | base.njk |
| `team.js` | 58 | team member bios | team.njk |

**Verdict**: this is the strongest Reuse surface in the entire codebase — genuinely decoupled content, well-modeled, independent of any visual design. Minor cleanup only (footer links referencing missing pages).

---

## 8. Shared Utilities

- All Eleventy filters/shortcodes are defined inline in `.eleventy.js` — no separate `filters/`/`utils/` module. Small, hand-rolled, portable, but need hardening (`rejectattr` only supports `equalto`; `date` filter is a manual 3-format switch instead of a library).
- **No Nunjucks macros used anywhere** — all reuse is via `{% include %}` with implicit scope variables (e.g., `cta-faq.njk` expects the caller to have already set a variable literally named `faq`), which is fragile.
- No JS utility module beyond `analytics.js`.

---

## 9. Existing Design System

**`tailwind.config.js`** (150 lines):
- Colors: `navy` (50–950, "Databricks-inspired"), `zunkiree` (brand sage/green, 50–950, "P2 · Stone palette"), `warm` (neutral grays + named tokens), `cool`, `sky` ("ServiceNow-style section bg"), semantic `success/warning/error`.
- Fonts: DM Sans (sans/display), DM Mono — loaded via Google Fonts `<link>`, not self-hosted, despite an unused `src/assets/fonts/` passthrough.
- Custom `fontSize` scale (`display-1/2`, `h1–h4`, `body-lg/body/small/caption`) exists but is **under-adopted** — pages hardcode raw sizes like `text-4xl sm:text-5xl md:text-[3.5rem]` instead.
- Custom spacing/maxWidth/boxShadow/borderRadius tokens exist but are inconsistently used (`borderRadius.none: 0` is commented "sharp edges, Databricks style" yet `rounded-full`/`rounded-2xl` appear throughout actual pages; `btn` shadow color is a leftover red that doesn't match the brand).
- **Comments reveal design churn**: tokens are annotated "Databricks-inspired," "ServiceNow-style" — evidence of multiple past redesign passes layered without cleanup.

**`main.css`** (1198 lines): Tailwind base/components/utilities + a large custom layer defining a **second, parallel CSS-variable token system** (`--background`, `--foreground`, `--card`, `--border`, `--primary`, `--accent-blue`, `--section-blue`, etc.). Templates inconsistently mix Tailwind utility classes, `style="color: var(--foreground)"`, and raw inline hex (`style="background:#0a1f2b;"`, dozens of occurrences in service.njk/product.njk/catalog.njk).

**This is the single biggest structural flag for the redesign**: three competing styling mechanisms coexist, often in the same file. A new design system should pick exactly one (Tailwind tokens, driven by the new Kore.ai-inspired palette) and eliminate the other two.

---

## 10. Animation Architecture

Central boot in `main.js`'s `boot()`: `Alpine.start()` → `initSmoothScroll()` (Lenis, respects `prefers-reduced-motion`) → `initPageBackground()` / `initHeroBackground()` (scroll-scrubbed blob drift) → `initHeroCarousel()` (hand-rolled state machine, ~180 lines) → `initScrollReveals()` (`[data-reveal]` attribute convention — generic, page-agnostic, used almost everywhere) → `initBlueColorShift()` / `initFaqGreenGlow()` (background-color scrub tied to specific DOM IDs — brittle) → `initSearchIcon()` (Lottie) → `initLogoMarquee()` (hand-rolled RAF + pointer-drag) → `initInfinityLoop()` (SVG dash-offset) → Three.js infinity-loop (`infinity-threejs.js`) → `initProductLottie()` → `initServiceHeroBlob()`.

`ribbon-platform.njk` embeds a **second, independent** Three.js loading strategy (CDN dynamic-import of pinned `three@0.160.0`) vs. the bundled npm `three` used elsewhere — inconsistent, and this component appears currently unused.

**Verdict**: `[data-reveal]` + the Lenis/ScrollTrigger boot wiring is a clean, portable Refactor candidate (keep the convention, apply to new markup). Homepage-specific scrub/blob/carousel code is section-ID-coupled and needs re-wiring, though the underlying GSAP techniques are sound conceptually.

---

## 11. SEO/Schema Infrastructure

**No shared SEO partial/macro exists** — schema is duplicated per layout, each with its own inline `<script type="application/ld+json">`:
- `base.njk`: Organization (global), WebSite + LocalBusiness (homepage only), conditional Product/Service/FAQPage, auto-generated BreadcrumbList.
- `catalog.njk`, `blog-post.njk`, `comparison.njk`, `glossary-term.njk`, `location.njk`, `location-service.njk`: each with its own separate schema block, several duplicating logic already present in base.njk rather than reusing it.

Meta tags (title/description/OG/Twitter/canonical) are well-centralized in base.njk only. Sitemap/robots handled via `sitemap.njk` + the custom Vite `copyNonHtmlFiles` plugin.

**Verdict**: functionally correct, architecturally scattered — a Refactor target (consolidate into shared Nunjucks macros) independent of and prior to the visual rebuild, since it reduces risk when layouts get rewritten.

---

## 12. Technical Constraints / Fragility Flags

1. **Fake lead-capture form** — no real submission logic anywhere; must be built for real, not just re-skinned.
2. **Three competing style systems** — Tailwind tokens, CSS custom properties, and raw inline hex coexist in the same templates. Redesign must collapse to one.
3. **Schema/JSON-LD duplicated across 7 files** with no shared macro — brittle to keep in sync.
4. **O(n) linear-scan "find current record" pattern** repeated near-identically in comparison.njk, glossary-term.njk, location.njk, location-service.njk, despite a `find` filter already existing in `.eleventy.js` that isn't consistently used.
5. **Two independent Three.js loading strategies** (bundled npm vs. CDN dynamic-import in the likely-orphaned `ribbon-platform.njk`).
6. **`index.njk` is a 1677-line single file** mixing markup, inline SVG gradients, inline styles, and embedded `<script>` blocks — not incrementally patchable; a full rewrite (already underway via `homepage-v2.njk`) is the right call.
7. **Footer links to 12 non-existent pages** — build them for real or prune them.
8. **Partial analytics coverage** — `data-track` convention exists but isn't applied to the homepage hero CTAs or the lead-capture form.
9. **`npm run clean` is Windows-only** (`rmdir /s /q`) — latent risk if ever invoked on Linux CI, currently unused there.
10. **`src/temp-ss/`** — ~120 screenshots + 5 standalone HTML previews committed inside `src/`, which Eleventy's `.html` template-format glob could pick up. Confirm exclusion, then clean up.
11. **`ribbon-platform.njk`** likely dead code — verify with a repo-wide include search before deciding reuse vs. delete.
12. **Hardcoded external widget dependency** — the live "Search" product itself is a single `<script>` tag pointed at an unversioned external deployment (`zunkiree-search-v1.vercel.app`). This is the one piece of real product functionality embedded in the marketing site and must be preserved carefully through the redesign, not just visually — it is a system boundary, not a component to restyle.

---

## 13. `_local-backup/`

Contains one untracked file, `index-legacy.njk` (~108KB). This reads as a manual backup of a prior homepage version, taken immediately before the current `index.njk` rewrite (timestamps align with recent work on `index.njk`/`homepage-v2.njk`/`docs/DESIGN_AUDIT.md`). Not referenced by any config, not part of the build.

**Recommendation**: worth mining for old headline/FAQ/CTA copy during the redesign, then relocate out of the repo root (e.g., into `docs/`) or delete — it risks being mistaken for a live file if left where it is.

---

## 14. Deploy Pipeline (confirms CLAUDE.md)

- **`ci.yml`**: PRs to `main`/`stage` — `npm ci` + `npm run build` only. No typecheck (no TS), no lint (none configured), no tests (none installed). CI is build-verification only.
- **`deploy.yml`**: push to `main` → `checks` job (rebuild) → `deploy` job (SSH, `git pull`, `docker compose up -d --build`, health-poll, curl production URL for 200).
- **`deploy-staging.yml`**: push to `stage` → same shape but does a full `docker compose down --remove-orphans` then `up -d --build --force-recreate` (commented as a workaround for a stale Traefik network-attachment bug).
- **`rollback.yml`** exists but wasn't read in full — review before relying on it during redesign rollout.

No drift from CLAUDE.md's documented branch model found.

---

## Reuse / Refactor / Rebuild / Remove — Full Classification

| Component | Bucket | Rationale |
|---|---|---|
| `_data/*` (all JSON/JS data files) | **Reuse** | Fully decoupled content model, design-agnostic. Minor cleanup only (footer links to missing pages). |
| `analytics.js` | **Reuse** | Clean, framework-agnostic GA4 wrapper. Needs consistent `data-track` adoption on new markup, not a rewrite. |
| `.eleventy.js` config/filters | **Reuse** | Solid foundation. Harden `rejectattr`/`date`, adopt `find` filter consistently. |
| Eleventy + Vite build wiring | **Reuse** | Works as-is. `copyNonHtmlFiles` hack could be revisited but isn't urgent. |
| Routing/collections (compare, glossary, locations, blog) | **Reuse** | Programmatic-SEO architecture has real value independent of visual design; templates get restyled, pagination/data logic stays. |
| `picture.njk` | **Reuse** | Genuinely reusable responsive-image component. |
| GitHub Actions / deploy pipeline | **Reuse** | Confirmed working, matches documented model, no redesign impact. |
| `header.njk` (Alpine state machine, `navigation.json` binding) | **Refactor** | Rebuild the markup/visuals; port the scroll-hide state logic, dropdown behavior, and mega-menu data binding as patterns. |
| `cta-faq.njk` | **Refactor** | Best-factored partial in the repo (dual-theme, parameterized) — keep the pattern, restyle the visuals. |
| Schema/JSON-LD generation (base.njk + 6 layouts) | **Refactor** | Logic correct but duplicated across 7 files; consolidate into shared macros as part of (or just before) the rebuild. |
| GSAP/Lenis boot sequence + `[data-reveal]` convention | **Refactor** | Keep Lenis/ScrollTrigger wiring and the `data-reveal` attribute convention; homepage-specific scrub/blob/carousel code needs re-wiring to new DOM structure. |
| `product-nav.njk` | **Refactor** | Scroll-sync logic duplicated from header.njk — worth deduplicating into one shared pattern while rebuilding markup. |
| `product.njk` / `service.njk` layouts | **Rebuild** | 963/699-line monolithic markup+style+logic; full rewrite is more tractable than patching. Preserve the `[dataKey][id]` data-binding pattern underneath. |
| `index.njk` (homepage) | **Rebuild** | Already slated for replacement by `homepage-v2.njk`; continue that in-progress effort using Kore.ai-inspired patterns from DESIGN_AUDIT.md. |
| `catalog.njk` | **Rebuild** | Markup + duplicate schema block both need a rewrite; underlying `catalogType` data-branching logic can carry forward. |
| `lead-capture-form.njk` | **Rebuild** | Needs real backend wiring — not just a visual reskin. Highest-priority functional gap in the codebase. |
| Tailwind config + main.css token systems | **Rebuild** | Three competing styling mechanisms (Tailwind config, CSS variables, inline hex) must collapse into one system matching the new Kore.ai-inspired palette. |
| `ribbon-platform.njk` | **Remove** (pending verification) | Appears orphaned/unused; confirm with a repo-wide include search before deleting, don't invest in preserving as-is. |
| `src/temp-ss/` | **Remove** | Scratch design-exploration screenshots/HTML, not part of the site. |
| `_local-backup/index-legacy.njk` | **Remove** (after copy-mining) | Reference-only; extract useful old copy, then delete or relocate out of repo root. |
| Footer dead links (12 non-existent pages) | **Remove or Rebuild** | Either build these pages for real or prune them from the footer during redesign. |

---

## Summary Takeaway

The **data layer, build pipeline, deploy pipeline, and SEO collection architecture are all sound and should not be touched structurally** — this is a large amount of engineering value that survives the redesign untouched. The visual rebuild's real work is concentrated in exactly the places you'd expect: the monolithic `index.njk`/`product.njk`/`service.njk` templates, and the three-way styling-system conflict in Tailwind config + main.css + inline hex. The one non-visual gap worth fixing *during* this effort (not after) is the lead-capture form having no real backend — everything else technical debt (scattered schema, linear-scan lookups, orphaned Three.js component) is real but lower priority and can be refactored opportunistically as layouts get rewritten anyway.
