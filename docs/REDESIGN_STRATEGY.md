# Redesign Strategy
**Prepared for**: Zunkiree Labs full visual + content redesign
**Inputs**: [DESIGN_AUDIT.md](./DESIGN_AUDIT.md) (Kore.ai visual teardown), [PROJECT_AUDIT.md](./PROJECT_AUDIT.md) (engineering architecture review), [CONTENT_SUMMARY.md](./CONTENT_SUMMARY.md) (messaging/content analysis)
**Date**: 2026-07-20

> This document defines *strategy* — what changes, what doesn't, and in what order. It does not specify visual design (colors, spacing, components) or write code. Visual execution follows DESIGN_AUDIT.md; content execution follows the new industry-context markdown (`company-industry-context.md`) as source of truth.

---

## Ground Rules (from the brief)

- This is a **complete visual redesign** — nothing about the current visual design is preserved on aesthetic merit alone.
- **Kore.ai is the design benchmark** — restraint, trust-ladder section ordering, systemized components (per DESIGN_AUDIT.md).
- **New content is the primary source of truth.** The industry-first model (Education / Agencies / Healthcare / Real Estate) supersedes the current service-first model wherever they conflict.
- **Existing content is reusable only when it strengthens the new content** — not by default, not for convenience.
- **Engineering and functionality are preserved wherever possible** — the redesign is a visual and IA rebuild, not a re-architecture.
- **No UI design or code in this document.**

---

## 1. Redesign Vision

Zunkiree Labs repositions from a **flat catalog of AI products/services** to an **industry-first AI platform company**, using Kore.ai's "AI for [Industry]" pattern as the structural and visual template. The site's job shifts from "here is what we sell" to "here is what is already running, live, for companies like yours" — proof-of-production rather than promise-of-capability.

Visually, this means trading the current site's dense, effects-heavy, three-competing-style-systems look for Kore.ai's disciplined system: one accent color, one radius family, one shadow treatment, a small type scale, and generous whitespace used as a deliberate trust signal. Structurally, it means every top-level page answers "can I trust this vendor with my business" before it answers "what does the product do," using the same trust-ladder logic DESIGN_AUDIT.md documents for Kore.ai (product → who uses it → proof → validation → conversion).

The redesign is simultaneously an **IA change** (industry-first navigation), a **content change** (four verticals, real clients only, no fabrication), and a **visual change** (Kore.ai-inspired system) — the three audits converge on this as one coordinated effort, not three separate workstreams.

---

## 2. What to Keep

Engineering and functionality that require no rebuild, per PROJECT_AUDIT.md's Reuse classification:

- **Data layer** (`src/_data/*`) — fully decoupled, design-agnostic. Content and copy inside it changes; the modeling pattern doesn't.
- **Build/deploy pipeline** — Eleventy + Vite wiring, GitHub Actions, Docker deploy flow. No redesign impact.
- **Programmatic-SEO collections** (`compare/`, `glossary/`, `locations/`, blog) — real SEO value, independent of visual design or the industry repositioning. Templates get restyled; pagination/data logic stays.
- **`analytics.js`** — clean GA4 wrapper. Needs consistent `data-track` adoption, not a rewrite.
- **`.eleventy.js` filters/shortcodes and Eleventy+Vite config** — solid foundation; hardening is opportunistic, not redesign-blocking.
- **`picture.njk`** — reusable responsive-image component, carries forward as-is.
- **Lenis/GSAP boot sequence and the `[data-reveal]` scroll-reveal convention** — the *convention* survives; homepage-specific scrub/blob/carousel wiring gets re-applied to new markup.
- **The external Zunkiree Search widget integration** (`base.njk`'s script loader) — this is a system boundary (a live product), not a component to restyle. Must be preserved carefully, not touched structurally.
- **`about-zunkireelabs.txt` company narrative** — mission, product-first/AI-native positioning, Nepal-to-global story remains valid; it sits *underneath* the new industry framing, not replaced by it.
- **"Infrastructure not wrappers" voice pattern** ("X, not Y" contrast headlines) — a distinctive, reusable brand-voice asset independent of IA changes. Repositioned as platform-layer copy rather than the top-level homepage message.
- **Admizz as flagship proof point** — already the most-developed real case study on the site (nav feature, homepage carousel, product/service story entries, 45%-faster-response metric). Directly reusable and doc-compliant for the Education vertical.
- **Zunkiree Search product page and data** (`productsDetails.json.search`) — well-developed, explicitly named as the flagship product in the new content doc.
- **Contact page mechanics** — functionally reusable; only the FAQ copy (old six-industry list) needs correction.

---

## 3. What to Replace

Content and structure that exist today but must be substantively rewritten to match the new model, not just restyled:

- **Homepage** (`index.njk` → `homepage-v2.njk`) — already correctly slated for full rebuild. Hero must shift from platform-first framing to industry-first framing (mirrors Kore.ai leading with a platform beat, then immediately segmenting by industry).
- **Site-wide IA** — Products / Solutions / Services / hidden-Industries megamenu replaces with (or restructures around) the four core verticals: Education, Agencies, Healthcare, Real Estate. Exact merge-vs-replace mechanics remain an **open decision for Sadin** (flagged in both source docs) — this strategy assumes industries become primary nav, with products/services surfaced within each industry page.
- **`product.njk` / `service.njk` / `catalog.njk` layouts** — architecturally sound data-binding pattern (`[dataKey][id]`) carries forward; the markup, styling, and page framing rebuild around industry context rather than flat product/service listing.
- **Dental AI Assistant content** — "Coming Soon" status and its framing conflict with the new doc's no-pilot-language guardrail. Needs a decision (see Open Questions) before its content can be reused or retired.
- **Old six-industry references** — `aboutFaq.json`, `contact.njk` FAQ, `agentic-as-a-service.njk` FAQ all cite the stale Healthcare/Manufacturing/Legal/Professional Services/Education/HR list. Every instance is rewritten to the four-vertical model.
- **About page origin-story "Next" entry** — currently lists "healthcare, dental, legal" as example future verticals; reconciled against the actual four verticals.
- **Tailwind config + `main.css` token systems** — three competing styling mechanisms (Tailwind tokens, CSS custom properties, inline hex) collapse into a single system carrying the new Kore.ai-inspired palette. This is a prerequisite for visual consistency, not an optional cleanup.
- **Schema/JSON-LD generation** — functionally correct today but duplicated across 7 layout files; consolidated into shared macros as (or just before) layouts are rewritten, since it reduces risk during the rebuild rather than adding scope to it.
- **`lead-capture-form.njk`** — needs a real backend, not a re-skin. This is the single highest-priority functional gap and should be scoped as engineering work alongside the visual rebuild, since new industry pages will lean on it for conversion.
- **Footer** — restructured to a Kore.ai-style categorized mega-footer (by vertical, by resource, by company), and its 12 currently-dead links either get real pages or get pruned.

---

## 4. What to Remove

- **`customers.njk`** — entirely fabricated testimonials/logos (fictional personas and companies). Direct, severe violation of the new content doc's anti-fabrication guardrail. Not reusable in any form; rebuild from the confirmed real-client list only.
- **`projects.njk`** — all 6 project cards are fictional placeholders with dead links, including an education card ("LearnHub") and a dental card ("Avantra") that could visually imply fabricated proof in exactly the two areas (Education, Healthcare) where the new doc requires only confirmed real clients. Remove or fully rebuild.
- **Old industry-list mentions** wherever they appear in copy (see §3) — not just restyled, deleted and replaced.
- **`ribbon-platform.njk`** — appears orphaned (not included by any page); confirm via a repo-wide include search, then remove rather than carry forward unused code and its second, inconsistent Three.js loading strategy.
- **`src/temp-ss/`** — ~120 scratch screenshots and standalone HTML previews committed inside `src/`; not part of the build, remove to reduce risk of accidental inclusion.
- **`_local-backup/index-legacy.njk`** — mine for reusable old headline/FAQ/CTA copy first, then delete or relocate out of the repo root.
- **Homepage stats bar figures** ("5+ Products, 6 Industries, 8 Services") — numbers are tied to the old model and must not be carried into the new IA even provisionally.
- **Hardcoded LCP image preload path in `base.njk`** tied to the current homepage — needs updating once the new homepage's hero asset is finalized (a mechanical follow-on to the homepage rebuild, noted here so it isn't missed).

---

## 5. New Opportunities

Content and structural additions the current site has no equivalent for:

- **Four new industry vertical pages** — `AI for Education`, `AI for Agencies`, `AI for Healthcare`, `AI for Real Estate` — each following the pre-built-application → accelerators → platform-tie-in structure defined in the new content doc, and each usable as a direct application of Kore.ai's industry-tab/dedicated-vertical-page pattern.
- **Self-referential case study** ("we run our own agency operations on this platform") — a differentiator the current site has zero equivalent of; directly maps to Kore.ai's "borrow institutional credibility" logic (DESIGN_AUDIT.md §5/§6), just using ZunkireeLabs itself as the credible third party for the Agencies vertical.
- **Orca as a named, documented platform component** — currently exists only as an unlabeled dashboard image. This is a genuine content gap (needs fresh copy, no reusable source), and an opportunity to give the platform layer a proper-noun identity the way Kore.ai does with "Artemis."
- **Platform/company-level page** — a dedicated place for the "AI OS per industry" infrastructure claim (multi-tenant CRM, Zunkiree Search, Orca), sitting beneath the four vertical pages as the "why this scales" answer — structurally identical to Kore.ai's "Meet Artemis" framing strip.
- **Real Estate (CRE) vertical without a named client** — an opportunity to write capability-led copy centered on the buyer profile rather than a logo, consistent with the new doc's guardrail against fabricating proof.
- **Consolidated schema macros** — an opportunity to fix a real architectural gap (7 duplicated JSON-LD blocks) as a byproduct of rebuilding layouts anyway, at near-zero incremental cost.
- **Real lead-capture backend** — an opportunity to close the site's single biggest functional gap at the same time new, higher-intent industry-page CTAs are introduced, rather than launching new conversion points on top of a still-fake form.

---

## 6. Information Architecture

**Primary structural decision (flagged as open, addressed here as the working assumption for planning purposes — confirm with Sadin before execution):** industries become the primary top-level navigation; products and services are surfaced *within* each industry page rather than as a separate top-level tree, mirroring Kore.ai's model where "Artemis" (platform) and industry tabs coexist but industry self-identification comes first.

**Proposed top-level nav:**
1. **Industries** (primary, four items): Education · Agencies · Healthcare · Real Estate
2. **Platform** — multi-tenant CRM, Zunkiree Search, Orca (the infrastructure layer beneath every vertical)
3. **Company** — About, Careers, Team, Contact
4. **Resources** — blog, glossary, comparisons (existing programmatic-SEO surface, unchanged)

**Homepage's role**: top-of-funnel hub that lets a visitor self-segment by industry immediately (Kore.ai-style industry tabs), then routes down into platform credibility, then proof, then conversion — not a flat feature list.

**Pages requiring no structural change**: Pricing, Careers, Team, Contact, blog, glossary, compare, locations — orthogonal to the industry repositioning, restyled but not re-architected.

**Pages requiring reconciliation before build**: Dental AI's placement (is it folded into Healthcare, kept as a separate minor product, or shelved — see Open Questions), and the disposition of services/products that don't map cleanly to any of the four core verticals (Manufacturing, Legal, HR content currently live in the hidden Industries megamenu).

**Open structural question inherited from CONTENT_SUMMARY.md, not resolved here**: whether the four verticals fully replace Products/Solutions/Services nav, or merge with it. This strategy proceeds on the "industries primary, products/services nested" assumption but flags it explicitly for Sadin's confirmation before IA work begins.

---

## 7. Component Strategy

Reusable component patterns to build once and apply consistently, drawn from DESIGN_AUDIT.md's Kore.ai component inventory (§15) and mapped to Zunkiree's actual data model:

| Component | Kore.ai origin | Zunkiree application |
|---|---|---|
| Category label pill | Section wayfinding badge | Above every section headline site-wide — replaces ad-hoc labeling |
| Dark feature card w/ gradient bloom | "Meet Artemis" framing strip | "Meet the Platform" (multi-tenant CRM / Search / Orca) strip on homepage + platform page |
| Industry/product tab switcher | Sector tabs, capability tabs | Homepage industry self-identification (Education/Agencies/Healthcare/Real Estate); also viable for in-page capability switching on vertical pages |
| Logo wall / strip | Customer logos by sector | Confirmed real clients only, grouped by vertical where possible — never fabricated |
| Quote/testimonial card (tabbed) | Logo-tabbed carousel | Rebuilt `customers.njk` content, tabbed by real client, replacing today's flat fabricated grid |
| Analyst/proof badge | Third-party validation card | Adapted down-market to case-study stat cards (e.g., Admizz's 45%-faster-response) since no analyst-report equivalent exists |
| Two-CTA closing strip | Segmented final offer | End of homepage and end of each vertical page — hard CTA + soft CTA per §12 of CONTENT_SUMMARY.md |
| Mega-footer | 6-column categorized footer | Restructured by vertical / resource / company, replacing current 12-dead-link footer |
| Outcome-driven feature block (50/50 text+screenshot) | Real product UI in soft frame | Each vertical page's "see it running" section, using real product screenshots, not icon-based feature lists |

**Underlying engineering patterns to preserve while rebuilding component markup** (per PROJECT_AUDIT.md): the `[dataKey][id]` data-binding pattern behind product/service pages, the `data-reveal` scroll-convention, and `cta-faq.njk`'s parameterization approach (already the best-factored partial in the codebase — a template for how new components should be built).

---

## 8. UX Strategy

- **Trust ladder, not feature dump**: every top-level page follows Kore.ai's proof-stacking order — segment by industry → show the live flagship client → show accelerators/capability → show platform credibility → convert. This directly matches CONTENT_SUMMARY.md's inferred user journey (§8) and DESIGN_AUDIT.md's documented Kore.ai structure (§2), so IA and visual strategy reinforce the same UX rather than competing.
- **Proof over adjectives**: per the new content doc's core guardrail, no "coming soon / pilot / demo" language on the four core verticals — CTAs and section copy must read as production-proven. This is a UX constraint, not just a copy constraint: it changes which sections are eligible to appear on core-vertical pages at all (no placeholder logos, no aspirational feature lists).
- **Segmented conversion, not universal CTA**: replace the current single "Book a Demo everywhere" pattern with the hard+soft CTA pairing Kore.ai uses, adapted per vertical (e.g., "Talk to our Education team" + "See the platform running for Education") rather than one generic ask — reduces friction for visitors still evaluating.
- **Self-identification before persuasion**: visitors should be able to tell within one interaction (industry tab or nav choice) whether the site is "for them," rather than reading generic platform copy first — a direct adoption of Kore.ai's segmentation-without-navigation approach.
- **Whitespace and restraint as a trust signal**: the current site's density (effects-heavy homepage, three competing style systems) works against the "calm enterprise confidence" positioning the new content doc is aiming for. UX and visual strategy must treat generous whitespace as functional, not decorative — it's part of how "we already run this, live" gets believed.
- **No dead ends**: every footer/nav link must resolve to a real page before launch — the current 12 dead footer links are a UX defect independent of the redesign and should be fixed as part of this effort, not deferred.

---

## 9. Prioritized Action Plan

**Phase 0 — Resolve open decisions (blocking, do first)**
1. Confirm with Sadin: does industries-first nav fully replace Products/Solutions/Services, or merge with it (CONTENT_SUMMARY.md §7 open decision)?
2. Confirm Dental AI's disposition — folded into Healthcare, kept as a minor separate product, or shelved (flagged conflict in CONTENT_SUMMARY.md's conflict list).
3. Confirm what happens to the non-core-vertical current content (Manufacturing, Legal, Professional Services, HR) — retire, or keep as secondary/breadth pages outside primary nav.

**Phase 1 — Foundation (non-visual, low-risk, unblocks everything else)**
4. Collapse the three competing styling systems into one Kore.ai-inspired Tailwind token set.
5. Consolidate schema/JSON-LD generation into shared macros before layouts are rewritten.
6. Scope and build a real backend for `lead-capture-form.njk` — needed before any new industry-page CTA can be trusted to convert.
7. Purge stale industry-list references (`aboutFaq.json`, `contact.njk`, `agentic-as-a-service.njk`) and remove orphaned/scratch code (`ribbon-platform.njk` pending verification, `src/temp-ss/`, `_local-backup/` after copy-mining).

**Phase 2 — Homepage (highest-visibility, already in progress via `homepage-v2.njk`)**
8. Rebuild homepage hero and structure around industry self-identification first, platform credibility second, per §6/§8 above.
9. Replace fabricated proof surfaces referenced from the homepage (case-study carousel logic feeding into the rebuilt `customers.njk`).

**Phase 3 — Core vertical pages (the primary new content deliverable)**
10. Build `AI for Education` first — most reusable existing material (Admizz), lowest content risk.
11. Build `AI for Agencies` — no reusable copy, but the self-referential case study is a strong differentiator; content-writer effort needed.
12. Build `AI for Healthcare` — requires resolving the Dental AI conflict first (Phase 0); content largely net-new for the Australian workforce/recruitment framing.
13. Build `AI for Real Estate` — capability-led, no client dependency, can proceed independently once IA is settled.

**Phase 4 — Platform and company layer**
14. Build/restructure the Platform page (multi-tenant CRM, Zunkiree Search, Orca) as the "why this scales" layer beneath the four verticals.
15. Reconcile About page's origin-story vertical list with the new four-vertical model.

**Phase 5 — Cleanup and trust surfaces**
16. Rebuild `customers.njk` using only confirmed real clients, tabbed by vertical where possible.
17. Rebuild or remove `projects.njk`.
18. Rebuild footer as a categorized mega-footer; fix or prune dead links.
19. Rebuild `product.njk`/`service.njk`/`catalog.njk` markup to sit correctly within the new nested-under-industry IA, preserving the underlying `[dataKey][id]` binding.

**Sequencing rationale**: Phase 0 decisions gate IA and content work for every later phase, so they're resolved before anything else starts. Phase 1 is deliberately non-visual so that later visual work isn't done twice against a moving style-system target. Homepage comes before vertical pages because it's already mid-rebuild and sets the visual/structural pattern the vertical pages will reuse. Education leads the vertical pages because it has the least content risk and validates the page template before the harder Agencies/Healthcare/Real Estate builds.
