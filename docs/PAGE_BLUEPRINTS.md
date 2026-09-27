# Page Blueprints — Zunkiree Labs Redesign

**Status**: Information architecture and storytelling blueprint for every page in the redesign, to be approved before implementation begins.
**Inputs**: [MASTER_DESIGN_SPEC.md](./MASTER_DESIGN_SPEC.md) (design system/tokens), [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md) (component definitions), [CONTENT_SUMMARY.md](./CONTENT_SUMMARY.md) (messaging/content), [REDESIGN_STRATEGY.md](./REDESIGN_STRATEGY.md) (sequencing/strategy)
**Scope**: Information architecture and storytelling only. No UI, no wireframes, no code.
**Date**: 2026-07-20

> This document answers "what goes on each page, in what order, and why" — not "what it looks like." Every component reference below points to its definition in COMPONENT_LIBRARY.md; every content claim traces to CONTENT_SUMMARY.md; every ordering decision traces to MASTER_DESIGN_SPEC.md §1/§19's trust-ladder principle. Where an IA question is explicitly flagged as open in the source documents (industries-vs-products nav merge, Dental AI disposition), this document proceeds on the same working assumption REDESIGN_STRATEGY.md §6 states, and flags it again here rather than silently resolving it.

---

## How to read this document

Each page entry follows the same structure: **Overview** (purpose/audience/conversion goal/primary CTA) → **Page Structure** (section order and why) → **Components** (per section, referencing COMPONENT_LIBRARY.md) → **Content Strategy** (headline/support/visual/CTA/trust-signal placement) → **Layout** (pattern/grid/flow/whitespace, in principle terms only) → **User Journey** (how a visitor moves top to bottom toward conversion).

Every page follows the trust-ladder ordering from MASTER_DESIGN_SPEC.md §1/§8: **segment → show proof → show capability → show platform credibility → convert.** No page opens with a hard CTA before it has earned one, and every CTA moment pairs a hard offer with a soft offer per §12/§24.

---

# 1. Homepage (`/`)

## Overview

- **Purpose**: Top-of-funnel hub. States the industry-first repositioning in one interaction and routes each of the four buyer types into their own vertical, while establishing platform credibility and real proof along the way.
- **Target audience**: All four vertical buyers simultaneously (Education, Agencies, Healthcare, Real Estate), self-segmenting on arrival — plus a secondary breadth audience (SMB operators across other sectors) who are proof, not primary navigation (CONTENT_SUMMARY.md §2).
- **Primary conversion goal**: Route the visitor into the correct industry vertical page, or capture intent directly if they're ready sooner.
- **Primary CTA**: Vertical-specific once a visitor has self-identified (e.g., "Talk to our Education team"); a general "Talk to us" / "Explore the platform" pairing before that point. Replaces the current single universal "Book a Demo" per CONTENT_SUMMARY.md §12 and REDESIGN_STRATEGY.md §8.

## Page Structure

1. **Hero** — short headline + subhead, dual CTA, ambient gradient backdrop, centered single-column (no Hero Visual split — confirmed decision, see Components table below).
2. **Industry self-identification** — tab/card switcher across the four verticals.
3. **Platform framing strip** — dark gradient-bloom card introducing the shared platform layer.
4. **Proof** — real client logos/case-study cards, grouped by vertical where possible. **Status: built.** Logo Cloud is the Clients Marquee already shipped near the hero (`provenClients`, homepage-v2.njk); Case Studies/Statistic Card proof is the existing "PROOF / TESTIMONIALS" section further down the page (two client quote cards, Admizz + CoreCloud365). No separate new Proof section is needed — this satisfies the blueprint slot as-is.
5. **Outcome feature block** — one real product screenshot + outcome-oriented copy.
6. **Testimonials** — tabbed by real client (gated on having enough real quotes).
7. **Content/thought-leadership teaser** — blog/insights grid.
8. **Dual closing CTA** — segmented hard + soft offer.
9. **Mega-footer**.

**Why this order**: This is MASTER_DESIGN_SPEC.md §19's homepage template verbatim, and it is the direct visual/structural expression of CONTENT_SUMMARY.md §8's user journey and §6's re-ranked messaging hierarchy (industry claim → platform claim → company philosophy → breadth proof). Segmentation comes first because REDESIGN_STRATEGY.md §1/§8 requires self-identification *before* persuasion — a visitor must be able to tell within one interaction whether the site is "for them." Platform credibility is deliberately positioned *after* segmentation, reversing the current site's platform-first hero (CONTENT_SUMMARY.md §6, §7), because the new doc's proof hierarchy puts the industry claim above the platform claim. Proof (logos/case studies) comes before the deeper outcome feature block so visitors reach specific evidence quickly, and testimonials/content are lower-commitment supporting material placed after the core proof-and-capability beats, immediately ahead of the closing conversion moment.

## Components

| Section | Components | Hierarchy |
|---|---|---|
| Hero | Hero (§2.1, `homepage-hero` variant), centered single-column — **confirmed decision: no Hero Visual (§2.2) pairing on this page**, since no screenshot or abstract-gradient panel earns a dedicated half when it must represent all four verticals at once | Label Pill (optional eyebrow) → Display headline → Body subhead → Button Primary + Button Secondary |
| Industry self-identification | Industry Showcase (§3.5) → Tabs (§1.5, `pill-tabs`) → Industry/Vertical Card (§4.2) × 4 → Statistic Card (§4.4) nested in each card | Section Header (§3.1) → Tabs → one Industry Card per tab panel, each carrying a Statistic Card or client-proof line |
| Platform framing strip | CTA Banner (§2.6, `dark` variant) as the "Meet the Platform" strip | Headline → one-line support copy → Button Primary + Button Secondary into the Platform page |
| Proof | **Built** — Logo Cloud (§2.5, `marquee` variant) is the shipped Clients Marquee; Case Studies proof is the shipped "PROOF / TESTIMONIALS" section (two-card quote pattern, Admizz + CoreCloud365) doubling as this slot rather than a separate carousel | Clients Marquee (logo row) → two testimonial/case-study cards, each headed by client name, quote, and bottom stat/link strip into `/customers/` |
| Outcome feature block | Section Header (§3.1) + Hero Visual (§2.2, `screenshot-framed` variant) composed as a 50/50 text+visual pair | Label/eyebrow → H2 → supporting body → screenshot in device frame |
| Testimonials | Testimonials (§3.9) → Tabs (§1.5, logo-tab variant) → Testimonial Card (§4.5) | Section Header → logo-tab switcher → quote panel |
| Content teaser | Section Header + Blog Card (§4.6) repeater, 3-column | Section Header → 3 Blog Cards |
| Closing CTA | CTA Banner (§2.6, `dark` variant) | Headline → support copy → Button Primary + Button Secondary |
| Footer | Footer (§8.1) → Footer Navigation (§8.2) → Social Links (§8.3) → Newsletter Form (§7.3) | Categorized columns (vertical / resource / company) → legal row |

## Content Strategy

- **Headline placement**: Hero headline is the page's single Display-type moment (MASTER_DESIGN_SPEC.md §5) and must lead with the industry-first repositioning statement ("we already run this — live — for your industry," CONTENT_SUMMARY.md §5) rather than the current platform-first "infrastructure not wrappers" framing. That line is not discarded — it's demoted to the platform framing strip, where it functions as supporting/platform-layer voice (CONTENT_SUMMARY.md §3, §10).
- **Supporting content**: Subhead under the hero stays short (one sentence) and names the four verticals implicitly rather than explicitly enumerating them — the tab switcher does the enumeration visually immediately below.
- **Visual placement**: Hero pairs with abstract gradient art (no single screenshot fits a multi-vertical hero); the outcome feature block is where a real, named screenshot (Admizz, per CONTENT_SUMMARY.md §7's reuse note) earns its place, later in the page, once industry framing and platform context are established.
- **CTA placement**: Dual CTA in the hero (general, pre-segmentation); a CTA inside each Industry Card routes to the matching vertical page; platform strip and closing band both carry their own hard+soft pair. No single universal CTA is repeated unmodified across the page.
- **Trust signals**: Logo Cloud and Case Studies must use only the confirmed real-client list (Admizz, CoreCloud365, Rapid Investment, CMS Group, Mach24 Orbital, Khushbu Nirman Sewa, Prime Tiles, Khems Cleaning per CONTENT_SUMMARY.md §4) — the old stats bar figures ("5+ Products, 6 Industries, 8 Services") are retired per REDESIGN_STRATEGY.md §4, not carried forward even provisionally.

## Layout

- **Pattern**: Full-width single-column macro rhythm (MASTER_DESIGN_SPEC.md §1.4) — one idea per section, stacked vertically; multi-column only *inside* sections (the four-card tab panel, the logo grid, the blog repeater).
- **Grid usage**: Hero is centered single-column, not split (confirmed decision — no Hero Visual pairing on this page, see Components table); outcome feature block uses a 50/50 or 60/40 split (§6); Industry Showcase renders one full-width card per active tab (not a permanent 4-up grid, since MASTER_DESIGN_SPEC.md §19 specifies a tab/card *switcher*, not a static grid); Proof and content-teaser sections use 3–4 column repeaters.
- **Content flow**: Alternates light → pale-neutral → dark → light per section per §10, using the platform strip and closing CTA as the page's two "dark punctuation" moments (staying within the 10–20% dark-surface guidance in §3/§4).
- **Whitespace strategy**: Generous section padding (`space-16`–`space-20` per §7) throughout; the hero and closing CTA use the most generous end of the scale, consistent with §7's "most important sections get the most whitespace" rule.

## User Journey

A visitor lands on a calm, uncluttered hero that states the company's core claim without asking for anything yet. Within one scroll, they self-identify by industry via the tab switcher — this is the moment CONTENT_SUMMARY.md §8 calls step 1 of the journey. Immediately after choosing their vertical, they see the platform framing strip, which answers "why does this scale" before they've had to ask. Proof (logos, case studies) confirms the claim is real, not aspirational. The outcome feature block goes one level deeper with an actual product screenshot. Testimonials and the content teaser are lower-friction trust-builders for visitors not yet ready to convert. By the closing CTA, the visitor has been segmented, shown proof, shown capability, and shown platform credibility — exactly the order required before the hard ask appears, per §1/§8's trust-ladder rule.

---

# 2. Industry Vertical Page Template

*(Applies to: AI for Education, AI for Agencies, AI for Healthcare, AI for Real Estate — one shared blueprint; per-vertical specifics noted where they diverge.)*

## Overview

- **Purpose**: Prove the platform runs live, in production, for this specific industry — CONTENT_SUMMARY.md §5's "we already run this" value proposition, applied once per vertical.
- **Target audience**: The vertical's named buyer profile — Education consultancies/study-abroad recruiters; Agency owners/ops leads; Australian healthcare providers (hospitals, aged care, community care); CRE sponsor firms raising capital (CONTENT_SUMMARY.md §2).
- **Primary conversion goal**: Convert a self-identified, in-market buyer for this specific vertical — the highest-intent conversion point on the site, since the visitor has already self-selected by the time they arrive.
- **Primary CTA**: Outcome-oriented, vertical-specific phrasing (never "Request a Demo," per CONTENT_SUMMARY.md §5's no-pilot-language guardrail) — e.g., "Talk to our Education team," "See how we run our own agency on this," "Talk to our Healthcare team," "See how the platform supports capital raises."

## Page Structure

1. **Hero** — industry-specific claim, stated as live/production.
2. **Flagship proof** — the named live client running the pre-built application (where one exists).
3. **Pre-built application overview** — outcome feature block with real screenshot.
4. **Accelerators** — supporting capability grid.
5. **Platform tie-in** — shortened platform framing strip, linking to the full Platform page.
6. **Proof/stat card(s)** tied to the vertical's real metric.
7. **Closing dual CTA** — vertical-specific hard + soft offer.

**Why this order**: MASTER_DESIGN_SPEC.md §19's vertical-page template, which is itself the structural realization of CONTENT_SUMMARY.md §8's inferred user journey (self-identify → see the flagship live client → understand accelerators → discover the shared platform → convert) — REDESIGN_STRATEGY.md §8 confirms this matches Kore.ai's documented trust-ladder exactly (product → who uses it → proof → validation → conversion). Flagship proof leads (immediately after the hero) rather than capability detail, because CONTENT_SUMMARY.md §5's core guardrail is proof-of-production, not promise-of-capability — a visitor must see evidence this is real before being told what it does. Platform tie-in is placed *after* vertical-specific capability, not before, so the "why this scales" answer lands once the visitor already believes the vertical claim, mirroring the homepage's segment-before-platform ordering.

## Components

| Section | Components | Hierarchy |
|---|---|---|
| Hero | Hero (§2.1, `vertical-hero` variant) → Hero Visual (§2.2, `screenshot-framed` where a real product exists; `abstract-gradient` for Real Estate, per REDESIGN_STRATEGY.md §5's no-fabricated-logo guardrail) | Label Pill (industry name) → Display headline stated as live capability → Body subhead → Button Primary + Button Secondary |
| Flagship proof | Industry/Vertical Card (§4.2, `with-client-proof` variant for Education/Agencies/Healthcare; `capability-led` variant for Real Estate) → Statistic Card (§4.4) nested | Category pill → headline claim → client-proof line or capability framing → Statistic Card → CTA |
| Pre-built application overview | Section Header (§3.1) + Hero Visual (§2.2, `screenshot-framed`) as a 50/50 or 60/40 text+visual pair | Label/eyebrow → H2 → outcome-oriented body copy → screenshot in device frame |
| Accelerators | Feature Grid (§3.2, 3- or 4-column) → Feature Card (§4.1, `icon-led` variant) | Section Header → repeated Feature Cards, each icon → title → short body |
| Platform tie-in | CTA Banner (§2.6, `dark` variant) — shortened version of the homepage's platform strip | Headline → one-line support copy → Button Secondary linking to the full Platform page |
| Proof/stat card(s) | Statistics (§3.8, `row` or `inline` variant) → Statistic Card (§4.4) | Large numeral (optionally DM Mono) → label → source attribution |
| Closing CTA | CTA Banner (§2.6, `dark` or `light` variant) | Headline → support copy → Button Primary + Button Secondary |

## Content Strategy

- **Headline placement**: The vertical-page Display headline is the one place on the site the "AI for [Industry]" claim is stated directly and as already-live, never hedged — "coming soon/pilot/demo" language is explicitly forbidden here (CONTENT_SUMMARY.md §5, MASTER_DESIGN_SPEC.md §24).
- **Supporting content**: Flagship proof section's supporting copy names the real client and the real, sourced outcome metric (e.g., Admizz's 45%-faster-response figure for Education) — no invented statistic may fill this slot (§24).
- **Visual placement**: The pre-built application overview is where the deepest, most detailed real screenshot appears — this is the section CONTENT_SUMMARY.md §1 identifies as proving the "pre-built application" layer of the platform model.
- **CTA placement**: A CTA lives inside the flagship-proof card (routing straight to conversion for an already-convinced visitor), then again at the platform tie-in (soft, routing deeper into platform credibility), then the mandatory closing hard+soft pair.
- **Trust signals**: Flagship proof and proof/stat sections are the two hardest trust-signal moments on the page and must never contain a placeholder — Real Estate's capability-led variant is the explicit, sanctioned exception (no client exists yet; the page substitutes buyer-profile-centered capability copy rather than fabricating a logo, per REDESIGN_STRATEGY.md §5).

### Per-vertical content notes

- **Education**: Flagship proof = Admizz (live). Accelerators cover the application-pipeline stages (document collection → application → offer → visa → enrollment) — consider composing this specific accelerator list with the How It Works (§3.4) sequential-step pattern rather than a flat Feature Grid, since it is explicitly a multi-stage workflow (CONTENT_SUMMARY.md §4, §8).
- **Agencies**: Flagship proof = ZunkireeLabs running its own agency operations (self-referential case study, CONTENT_SUMMARY.md §11/REDESIGN_STRATEGY.md §5) + Mobilise as external validation. This is the one vertical where the flagship-proof section may need two proof instances (self-run + Mobilise) rather than one — compose as two Industry/Vertical Card or Case Study instances rather than forcing both into a single card.
- **Healthcare**: Flagship proof section must not reuse Dental AI Assistant content (its "Coming Soon" status directly conflicts with this page's no-pilot-language requirement) or the fictional "Avantra" project — per REDESIGN_STRATEGY.md §3/§6, Dental AI's disposition is an open decision gating this page's final content; this blueprint assumes Dental AI is *not* folded into this vertical's flagship proof unless/until Sadin confirms otherwise.
- **Real Estate**: No flagship-proof client exists. The flagship-proof section uses the `capability-led` Industry Card variant exclusively — copy centered on the CRE sponsor-firm buyer profile (capital-raise workflows, investor data room), never a placeholder logo or invented quote (REDESIGN_STRATEGY.md §5).

## Layout

- **Pattern**: Same full-width single-column macro rhythm as the homepage; text+visual pairs (hero, pre-built application overview) stay consistently left-text/right-visual (or the reverse) for the whole page, per MASTER_DESIGN_SPEC.md §6 — no alternating within a single page.
- **Grid usage**: Accelerators use a 3- or 4-column repeater (§6); flagship proof and pre-built-application sections use 50/50 or 60/40 splits.
- **Content flow**: Light → light/pale → dark (platform tie-in) → light → dark (closing CTA) — two dark punctuation moments only, consistent with the 10–20% dark-surface guidance.
- **Whitespace strategy**: Standard `space-16` section padding throughout; no section should feel denser than the homepage's equivalent sections, since "calm confidence" (MASTER_DESIGN_SPEC.md §1) must hold on every page a self-identified buyer lands on, not just the homepage.

## User Journey

A visitor arrives already self-identified (via the homepage tab, nav, or a direct/search entry) — the hero confirms they're in the right place and states the claim as live fact. The very next thing they see is a real, named client already running this in production, which is the single most important trust moment on the page since it substitutes for a much longer capability pitch. Accelerators then answer "how would *my* version of this work," building specific capability understanding. The platform tie-in briefly answers "why should I trust the infrastructure underneath this," without requiring a full detour to the Platform page. A sourced stat reinforces the outcome claim once more, immediately before the closing CTA — by this point the visitor has moved from segment → proof → capability → platform credibility, and the hard ask is fully earned.

---

# 3. Platform Page (`/platform/` or equivalent)

## Overview

- **Purpose**: Carry the "AI OS per industry" infrastructure claim (multi-tenant CRM, Zunkiree Search, Orca) as the connective layer beneath all four verticals — the "why this scales" answer referenced from every vertical page's platform tie-in section.
- **Target audience**: All buyer types, post-vertical-page, evaluating why the underlying infrastructure can be trusted rather than what the vertical application does.
- **Primary conversion goal**: Reinforce platform-level credibility and route back into a vertical page or directly to conversion for a buyer already convinced on infrastructure grounds.
- **Primary CTA**: "Explore the platform" as an entry state; "Talk to sales" as the conversion CTA (CONTENT_SUMMARY.md's Platform/Company-level page analysis).

## Page Structure

1. **Hero** — platform-level framing statement (the "infrastructure not wrappers" voice pattern lives here, per CONTENT_SUMMARY.md §3/§10 — demoted from homepage-hero status but fully at home here).
2. **Platform framing strip (full version)** — the dark gradient-bloom "Meet the Platform" card, expanded from its shortened homepage/vertical-page appearances.
3. **Pillar breakdown** — multi-tenant CRM / Zunkiree Search / Orca, each given its own capability block.
4. **Zunkiree Search spotlight** — the confirmed flagship product gets a dedicated, deeper feature treatment (CONTENT_SUMMARY.md's Platform page reuse note; `productsDetails.json.search` is explicitly well-developed and doc-compliant).
5. **Cross-vertical proof** — a compact stat/logo strip showing the platform running across multiple verticals at once (the "one platform, many industries" argument).
6. **Closing dual CTA**.

**Why this order**: This page's job (per REDESIGN_STRATEGY.md §5/§6) is structurally identical to Kore.ai's "Meet Artemis" framing strip, expanded into a full page — it sits *beneath* the four vertical pages in the trust ladder, so it opens with the platform claim directly (unlike vertical pages, which must lead with the industry claim) since visitors arriving here have typically already been introduced to a vertical and are seeking the underlying "why." The Search spotlight gets its own section because it's the one platform component with fully developed, reusable content today — everything else (especially Orca) is comparatively thin and should not be over-extended relative to what's actually documented.

## Components

| Section | Components | Hierarchy |
|---|---|---|
| Hero | Hero (§2.1, `simple-hero` variant) | Label Pill → H1/Display → Body subhead → Button Primary + Button Secondary |
| Platform framing strip | CTA Banner (§2.6, `dark` variant, full-size) | Headline → support copy → dual CTA |
| Pillar breakdown | Feature Grid (§3.2, 3-column: CRM / Search / Orca) → Feature Card (§4.1) or AI Agent Card (§4.3) | Section Header → 3 cards, one per pillar |
| Search spotlight | Section Header (§3.1) + Hero Visual (§2.2, `screenshot-framed`) 50/50 pair | Label → H2 → body → screenshot |
| Cross-vertical proof | Trust Bar (§2.4) or Statistics (§3.8, `row`) | Section Header → Statistic Card repeater |
| Closing CTA | CTA Banner (§2.6) | Headline → support copy → dual CTA |

## Content Strategy

- **Headline placement**: This is the one page where the existing "X, not Y" contrast-headline voice pattern (CONTENT_SUMMARY.md §10) is appropriate as the *lead* headline, since it's platform-layer copy, not the industry-first top-level message.
- **Supporting content**: Orca's pillar block must be written as fresh copy — REDESIGN_STRATEGY.md §5 flags Orca as having zero existing usable copy (only an unlabeled dashboard image today) — do not stretch this section beyond what can be honestly claimed.
- **Visual placement**: Search spotlight is the deepest visual moment on the page, consistent with Search being the one platform component with a fully-built product page already (`productsDetails.json.search`).
- **CTA placement**: Framing-strip CTA and closing CTA both pair hard+soft; no CTA on this page should re-litigate a specific vertical's ask — it stays at the infrastructure level.
- **Trust signals**: Cross-vertical proof section is the one place logos/stats from *multiple* verticals may appear together — everywhere else, proof stays scoped to its own vertical page.

## Layout

- **Pattern**: Same macro rhythm as other top-level pages; pillar breakdown is the page's one 3-column repeater moment.
- **Grid usage**: 3-column pillar grid; 50/50 for the Search spotlight.
- **Content flow**: Light → dark (framing strip) → light → light → pale (cross-vertical proof) → dark (closing) — stays within the 10–20% dark-surface budget.
- **Whitespace strategy**: Standard `space-16` throughout; no section here needs the hero-level `space-20` generosity except the page's own hero.

## User Journey

A visitor arrives here having already been convinced at the vertical level and is now asking "but is the infrastructure underneath this real and durable?" The hero restates the platform's confidence directly. The framing strip names the three pillars as one system. Each pillar gets just enough depth to be credible without overclaiming (especially Orca, which is honestly thinner today). Search gets the deepest treatment because it's the most substantiated claim. Cross-vertical proof closes the loop by showing the same platform running across industries, reinforcing "why this scales" one final time before the close.

---

# 4. About Page (`about.njk`)

## Overview

- **Purpose**: Company narrative and mission — sits beneath the industry positioning as brand-level support, not the lead message (CONTENT_SUMMARY.md's About-page analysis; the primary industry doc explicitly treats company narrative as unchanged and subordinate).
- **Target audience**: All visitors evaluating company credibility, plus investors and potential hires.
- **Primary conversion goal**: Build durable trust in the company itself, independent of any specific vertical purchase decision.
- **Primary CTA**: Contact Us / Meet Our Team.

## Page Structure

1. **Hero** — company narrative claim.
2. **Mission** — founder-voiced.
3. **What-we-do capability grid**.
4. **Origin/timeline**.
5. **Values**.
6. **FAQ**.
7. **Closing CTA**.

**Why this order**: MASTER_DESIGN_SPEC.md §19's About template, preserved largely as-is since `about-zunkireelabs.txt`'s content remains valid and unchanged (REDESIGN_STRATEGY.md §2). Mission leads the body content (immediately after the hero) because CONTENT_SUMMARY.md frames founder-voiced mission as the credibility anchor beneath the industry positioning; timeline and values build historical and cultural trust before the lower-commitment FAQ/CTA close.

## Components

| Section | Components | Hierarchy |
|---|---|---|
| Hero | Hero (§2.1, `simple-hero`) | Label → H1 → body → single CTA (About doesn't need a hard sales pair here; a single "Contact us" is acceptable framing, paired with a soft "Meet the team" per §12's pairing rule) |
| Mission | Section Header (§3.1) + pull-quote (Testimonial Card, §4.5, used in its sanctioned "narrow standalone moment" mode per §3) | Founder quote as centered text, the one place centered text is appropriate |
| What-we-do | Feature Grid (§3.2, existing 6-card grid, reconciled against the four-vertical model where any card references old industry framing) | Section Header → Feature Card repeater |
| Origin/timeline | How It Works (§3.4, `vertical-steps` variant repurposed for a chronological timeline rather than a process) | Ordered step markers, 2018 → 2024 → next |
| Values | Feature Grid (§3.2) | Section Header → Feature Card repeater |
| FAQ | FAQ (§3.10) | Accordion + CTA panel |
| Closing CTA | CTA Banner (§2.6) | Headline → support copy → dual CTA |

## Content Strategy

- **Headline placement**: Company-level claim, not industry-specific — this page never leads with "AI for X" framing.
- **Supporting content**: The origin-timeline's "Next: Vertical AI products" entry must be reconciled to reference the actual four verticals (Education, Agencies, Healthcare, Real Estate) rather than its current "healthcare, dental, legal" list — this is a direct content-conflict flagged in CONTENT_SUMMARY.md and REDESIGN_STRATEGY.md §3/§4.
- **Visual placement**: Founder mission quote is the page's one centered, narrow, standalone moment (§3's exception to left-aligned default).
- **CTA placement**: Single soft framing through most of the page; the closing band is where the dual-CTA pattern applies in full.
- **Trust signals**: Timeline and values are inherently trust-building through specificity (real dates, real narrative) rather than through logos/stats — this page doesn't need a Statistic Card section to carry its proof burden the way vertical pages do.

## Layout

- **Pattern**: Standard macro rhythm; mission section is the deliberate exception using centered narrow-container text.
- **Grid usage**: 3-column What-we-do and Values grids (per existing 6-card structure); timeline uses vertical-steps single-column flow.
- **Content flow**: Light throughout except the closing CTA — this page should trend lighter/less dark-punctuated than vertical pages, since it's a lower-urgency, higher-trust-building page.
- **Whitespace strategy**: Standard `space-16`; the mission pull-quote section benefits from generous whitespace to let a single quote breathe.

## User Journey

A visitor arrives here seeking reassurance about who's behind the product, not a specific purchase decision. The hero states the company's claim, the founder's mission humanizes it, the capability grid and timeline demonstrate depth and longevity, and values close the credibility case before a low-friction FAQ and CTA. This page supports the industry-first pages rather than competing with them for the primary conversion narrative.

---

# 5. Pricing Page (`pricing.njk`)

## Overview

- **Purpose**: Present pricing structure with enough clarity to move a qualified buyer to conversion or to sales contact.
- **Target audience**: Buyers evaluating cost/fit, typically arriving from a vertical page or nav, already past the initial trust-building stage.
- **Primary conversion goal**: Tier selection → conversion, or routing to Enterprise CTA for buyers outside standard tiers.
- **Primary CTA**: Tier-specific "Get started" (Primary Button) per emphasized tier, or "Contact Sales" for the Enterprise slot.

## Page Structure

1. **Hero** — short framing statement.
2. **Pricing card row** — one emphasized tier max.
3. **Feature comparison** — table or expandable detail.
4. **FAQ**.
5. **Closing CTA**.

**Why this order**: MASTER_DESIGN_SPEC.md §19's Pricing template. This page is orthogonal to the industry repositioning (REDESIGN_STRATEGY.md §6/§8's "requires no structural change" list) — it is restyled, not re-architected, so its section order stays close to standard SaaS-pricing convention: state the offer, show the tiers, let a buyer go deeper via comparison, then de-risk remaining objections via FAQ before the close.

## Components

| Section | Components | Hierarchy |
|---|---|---|
| Hero | Hero (§2.1, `simple-hero`) | Label → H1 → short body → no dual CTA needed here (page itself is the CTA surface) |
| Pricing card row | Pricing Table (§6.1) → Pricing Toggle (§6.2, if more than one billing period) → Pricing Card (§4.8) repeater → Enterprise CTA (§6.4) | Section Header → toggle (optional) → tier cards, one emphasized → Enterprise slot |
| Feature comparison | Feature Comparison (§6.3, `table` desktop / `accordion` mobile) | Table with checkmark/dash icon cells, or Accordion fallback |
| FAQ | FAQ (§3.10) | Accordion + CTA panel |
| Closing CTA | CTA Banner (§2.6) | Headline → support copy → dual CTA |

## Content Strategy

- **Headline placement**: Short, direct framing — no industry-specific claim belongs here; pricing is a cross-vertical page.
- **Supporting content**: Tier feature lists should reference capability language consistent with what's established on vertical/platform pages, not reintroduce new capability claims.
- **Visual placement**: This page is copy/data-dense by nature (numbers, feature lists) rather than screenshot-driven — no Hero Visual pairing is specified in the template, consistent with §19's simple-hero pattern.
- **CTA placement**: Each Pricing Card carries its own single Primary Button (§13's "single CTA" pricing-card rule); the Enterprise slot substitutes "Contact Sales" for a price; the page closes with the standard dual-CTA band for buyers still undecided.
- **Trust signals**: If tier pricing references outcomes (e.g., cost-reduction potential), any stat used must be sourced per §24 — no invented ROI figures.

## Layout

- **Pattern**: Pricing card row is a horizontal repeater (row → stacked on mobile, emphasized card reordered first per §21); feature comparison is a contained-scroll table.
- **Grid usage**: Tier count determines column split (§6's 3–4 column repeater family).
- **Content flow**: Light-dominant throughout; only the closing CTA needs to be dark, keeping this page well within the 10–20% dark-surface budget since it's a functional, decision-support page rather than a persuasion-heavy one.
- **Whitespace strategy**: Standard section padding; pricing cards themselves use tighter internal padding (space-3–space-4) per the card system, while section-to-section spacing stays generous.

## User Journey

A visitor arrives here already evaluating cost, typically post-vertical-page. The hero briefly frames the offer, the pricing row lets them scan tiers and self-select (with exactly one tier visually emphasized as the recommended default), the feature comparison resolves any remaining "what's actually different between tiers" question, the FAQ clears final objections, and the close offers one more paired hard/soft option for anyone not ready to commit on this visit.

---

# 6. Contact Page (`contact.njk`)

## Overview

- **Purpose**: Universal, low-friction conversion endpoint for any visitor ready to reach out, regardless of which page they arrived from.
- **Target audience**: All visitors, at any stage of the funnel who choose to self-initiate contact rather than following a page-specific CTA.
- **Primary conversion goal**: Form submission.
- **Primary CTA**: Form submission button (Primary).

## Page Structure

1. **Hero** — short, low-friction framing.
2. **Form** — real backend, full state handling.
3. **Quick links** — to relevant vertical pages/resources.
4. **FAQ**.

**Why this order**: MASTER_DESIGN_SPEC.md §19's Contact template. This page intentionally omits a closing dual-CTA band — the form itself *is* the conversion moment, so the page's job is to get a visitor to the form with minimal friction, then offer quick-links as an escape hatch for anyone who arrived here without a clear next step, and FAQ last for objection-handling on the way out.

## Components

| Section | Components | Hierarchy |
|---|---|---|
| Hero | Hero (§2.1, `simple-hero`) | Label → H1 → short body, no dual CTA (the form below is the single conversion path) |
| Form | Contact Form (§7.1) → Input Components (§7.4) → Select Components (§7.5, if a "which vertical" field is added) → Validation States (§7.6) → Submit Button (Primary, §9.1) | Field labels always visible → inputs → submit with loading state |
| Quick links | Text Links (Shared) grouped by vertical/resource | Short list, not a full repeater component |
| FAQ | FAQ (§3.10) | Accordion, no CTA panel needed here since the form above already is the CTA |

## Content Strategy

- **Headline placement**: Short and low-friction — this page should feel like the easiest, least-effortful page on the site to act on, consistent with §1's "calm confidence" register.
- **Supporting content**: FAQ copy must be corrected — the current FAQ block states Zunkiree serves "healthcare, manufacturing, legal, professional services, education, and human resources," which directly conflicts with the four-vertical model and must be rewritten (CONTENT_SUMMARY.md's Contact-page analysis, REDESIGN_STRATEGY.md §3).
- **Visual placement**: No hero visual needed — this page is function-first, not persuasion-first.
- **CTA placement**: The form is the CTA; a "which vertical are you inquiring about" select field (§7.5) is worth adding so the resulting lead can route to the correct vertical team, consistent with CONTENT_SUMMARY.md §12's inference that vertical-specific CTAs should replace one universal ask.
- **Trust signals**: None required beyond what's already been established elsewhere — this page is a conversion utility, not a proof-building one.

## Layout

- **Pattern**: Single-column form flow at all breakpoints (§6 — forms are not a grid-layout use case).
- **Grid usage**: None beyond the standard content container width for the form.
- **Content flow**: Entirely light — no dark section is needed on a low-friction utility page.
- **Whitespace strategy**: Standard section padding around a narrow form container; form fields themselves use micro-spacing (space-2) per §14.

## User Journey

A visitor arrives here because they've already decided to reach out, from any entry point. The hero confirms they're in the right place without adding friction. The form is the entire point of the page and must feel fast and trustworthy (real submission states, not a cosmetic form — REDESIGN_STRATEGY.md §3's flagged functional gap). Quick links catch anyone who arrived here prematurely and would be better served by a vertical page. FAQ resolves any last-second doubt before submission.

---

# 7. Customers Page (`customers.njk` — full rebuild)

## Overview

- **Purpose**: Dedicated social-proof page presenting only confirmed real clients, replacing today's entirely fabricated content (CONTENT_SUMMARY.md/REDESIGN_STRATEGY.md §4 — flagged as a severe anti-fabrication violation requiring full rebuild, not a restyle).
- **Target audience**: Visitors specifically seeking deeper proof before converting — a research-stage stop, not a first-touch page.
- **Primary conversion goal**: Reinforce proof depth and route to a vertical page or direct conversion.
- **Primary CTA**: "Talk to us" paired with "Explore [vertical]" once a visitor has read a specific client's story.

## Page Structure

1. **Hero** — short framing statement (proof-of-production framing, not a generic "our customers" headline).
2. **Testimonials** — tabbed by real client.
3. **Case studies** — deeper narrative per client, grouped by vertical where possible.
4. **Logo cloud** — full breadth-signal logo set (the wider real-client list beyond the four core verticals, per CONTENT_SUMMARY.md §2's "breadth signal" tier).
5. **Closing dual CTA**.

**Why this order**: This follows the Generic landing page pattern from MASTER_DESIGN_SPEC.md §19 (hero → core content → related proof → closing CTA), specialized for proof content specifically. Testimonials lead because they're the most personal, credible proof form; case studies go deeper for visitors wanting detail; the full logo cloud closes out breadth (quantity of real clients) after depth (named stories) has already been established — reversing the order would make the page feel like a numbers-first vanity metric rather than proof-first credibility.

## Components

| Section | Components | Hierarchy |
|---|---|---|
| Hero | Hero (§2.1, `simple-hero`) | Label → H1 → short body |
| Testimonials | Testimonials (§3.9) → Tabs (§1.5, logo-tab) → Testimonial Card (§4.5) | Logo-tab switcher → quote panel |
| Case studies | Case Studies (§3.11, `carousel` variant) → Statistic Card (§4.4) | Client logo/name → narrative → metric → optional link |
| Logo cloud | Logo Cloud (§2.5, `marquee` variant, given the larger breadth-tier client count) | Full scrolling logo row, reduced-motion pausable |
| Closing CTA | CTA Banner (§2.6) | Headline → support copy → dual CTA |

## Content Strategy

- **Headline placement**: Framed around proof/production, not a generic "meet our customers" register.
- **Supporting content**: Every testimonial and case study must be a confirmed real client with a real quote and real metric — this page has zero tolerance for placeholder content per §24's hard guardrail; if insufficient real quotes exist at launch, the Testimonials section is held back per its `Recommended (blocked on real quotes)` priority in COMPONENT_LIBRARY.md §3.9, rather than filled with placeholders.
- **Visual placement**: Case studies are the visual depth moment — client logo plus narrative plus metric, composed from the Card system per §13.
- **CTA placement**: Single closing dual-CTA band; no need for CTAs mid-page since this page's entire function is proof, not action.
- **Trust signals**: This entire page *is* the trust signal — every section must trace to a name on CONTENT_SUMMARY.md's confirmed-client list (Admizz, CoreCloud365, Rapid Investment, CMS Group, Mach24 Orbital, Khushbu Nirman Sewa, Prime Tiles, Khems Cleaning), with Mobilise added once available.

## Layout

- **Pattern**: Standard macro rhythm; testimonials and case studies each get their own full section rather than being compressed together.
- **Grid usage**: Logo cloud marquee is the page's one continuous-motion element (respecting reduced-motion per §18/§22); case study carousel is keyboard-navigable, not auto-advancing.
- **Content flow**: Light-dominant with a dark closing CTA only.
- **Whitespace strategy**: Standard `space-16`; testimonial quotes benefit from generous surrounding whitespace to read as considered rather than crowded (per §1's "calm confidence").

## User Journey

A visitor who reaches this page is actively seeking validation before deciding. Testimonials give a personal, credible voice first. Case studies go deeper into specific, named outcomes. The logo cloud demonstrates breadth once depth has already built trust. The closing CTA captures the visitor at their highest point of confidence on the entire site, since by now they've seen more concentrated proof than on any other single page.

---

# 8. Generic Landing / Resource Page Template

*(Applies to: blog index/posts, glossary terms, comparison pages, location pages — the existing programmatic-SEO surface, per REDESIGN_STRATEGY.md §2/§6, restyled but not re-architected.)*

## Overview

- **Purpose**: Capture long-tail search intent and provide genuinely useful, extractable content — serving both human readers and AI-citation surfaces (AEO requirements per CLAUDE.md).
- **Target audience**: Search/AI-referral visitors researching a specific term, comparison, or topic — typically earlier in the funnel than vertical-page visitors, often not yet aware of the four-vertical model.
- **Primary conversion goal**: Establish topical credibility and route into the relevant vertical page or a lower-commitment newsletter/content signup.
- **Primary CTA**: Soft — "Read more" / "See how this works in [vertical]" — hard CTAs are secondary here since visitor intent is informational, not transactional.

## Page Structure

1. **Hero** — page/article title framing, breadcrumb for wayfinding.
2. **Core content block(s)** — feature/outcome pattern as appropriate to content type (article body, glossary definition, comparison table).
3. **Related content or proof** — related articles, or a relevant case study/stat if the topic maps to a specific vertical.
4. **Closing CTA** — single, soft-leaning pairing.

**Why this order**: MASTER_DESIGN_SPEC.md §19's Generic landing/resource template. This is deliberately the lightest-touch conversion page on the site — a visitor here is often mid-research, not mid-decision, so the structure prioritizes content credibility and topical depth over persuasion, and routes toward a vertical page as the "next step" rather than demanding a conversion directly.

## Components

| Section | Components | Hierarchy |
|---|---|---|
| Hero | Breadcrumb (§1.4) + short title framing (no full Hero component needed for deep pages — a lighter title treatment is appropriate, still capped at one H1 per page per §5/§22) | Breadcrumb trail → H1 → optional short dek |
| Core content | Body copy, Feature Comparison (§6.3) for comparison pages, Accordion (§5.1) for glossary/FAQ-style content | Standard prose type scale (§5); tables/accordions per content type |
| Related content | Blog Card (§4.6) repeater, or a single relevant Case Study (§3.11)/Statistic Card (§4.4) if the topic maps to a vertical | Section Header → 3-column Blog Card repeater |
| Closing CTA | CTA Card (§4.9, bounded-width variant) rather than the full-bleed CTA Banner — appropriately lighter-weight for a content page | Short headline → one-line support → one or two buttons |

## Content Strategy

- **Headline placement**: SEO/AEO title conventions apply per CLAUDE.md (50–60 char titles, keyword-forward), independent of the visual Display-headline rules used on marketing pages.
- **Supporting content**: 40–60 word definition blocks and FAQ sections per CLAUDE.md's AEO requirements — this is the page type where that content shape matters most.
- **Visual placement**: Minimal — these are content-forward pages; imagery is used only where it clarifies (a comparison table, a diagram), never decoratively.
- **CTA placement**: A single soft CTA is sufficient mid-article or at the close; a hard CTA is only appropriate if the content topic maps directly and specifically to one vertical.
- **Trust signals**: Related-content and any embedded stat must follow the same sourced-data-only rule as every other page (§24) — resource content is not exempt from the anti-fabrication guardrail.

## Layout

- **Pattern**: Narrow text-container prose flow (§6's `max-w-narrow` or tighter) for article/glossary body content; wider containers only for tables or card repeaters.
- **Grid usage**: 3-column related-content repeater; tables use their own contained horizontal-scroll wrapper (§23) rather than breaking page layout.
- **Content flow**: Entirely light — no dark sections needed on content-utility pages.
- **Whitespace strategy**: Body copy favors the readable 60–75 character line length (§3); section padding can compress toward the lower end of the scale (`space-12`) relative to marketing pages, since these are denser, read-oriented pages by nature.

## User Journey

A visitor arrives via search or an AI citation, already holding a specific question. The content block answers it directly and thoroughly enough to build credibility. Related content offers a next step for a visitor who wants to go deeper on the same topic. The closing CTA is deliberately restrained — most visitors here are not ready to convert, and pushing a hard CTA prematurely would work against the "calm confidence" register the rest of the site establishes. The page's job is to earn a bookmark, a follow-through click to a vertical page, or a future direct visit — not an immediate conversion.

---

# 9. Secondary / Orthogonal Pages (Careers, Team, Agentic-as-a-Service)

Per REDESIGN_STRATEGY.md §6/§8, these pages are "largely unaffected by the repositioning" and require restyling, not IA rebuilds. Each follows the **Generic landing/resource page** structure above (hero → core content → related/proof → closing CTA), with one required content correction common to all three: any old six-industry list reference (e.g., `agentic-as-a-service.njk`'s FAQ listing "software development, customer service, data operations, legal, and healthcare") must be reconciled to the four-vertical model per REDESIGN_STRATEGY.md §3, using the same FAQ (§3.10) component already defined for every other page. No separate blueprint is warranted for these pages beyond this note — inventing a bespoke structure for them would violate MASTER_DESIGN_SPEC.md §20's "no page-specific forking" rule.

---

# Cross-Page Notes

- **Trust-ladder discipline**: Every page above places proof/credibility ahead of its hardest CTA, per MASTER_DESIGN_SPEC.md §1/§8 — this is the one rule that applies without exception across all nine page types in this document.
- **Dual-CTA discipline**: Every closing CTA band pairs a hard offer with a soft offer per §12/§24, except Contact (where the form itself is the single conversion action) and resource pages (where a single soft CTA is appropriate given informational visitor intent).
- **No-fabrication discipline**: Every proof surface — Industry Card, Case Studies, Testimonials, Logo Cloud, Statistic Card — must trace to CONTENT_SUMMARY.md's confirmed-client list. Real Estate's capability-led framing and Healthcare's Dental-AI-exclusion are the two explicit, sanctioned adaptations of this rule, not exceptions to it.
- **Component reuse discipline**: No page blueprint in this document introduces a component outside COMPONENT_LIBRARY.md's defined set — where a page's content is genuinely novel (Industry Showcase, Industry/Vertical Card, self-referential Agencies case study), the *content* is new but the *component* is one already defined for exactly this purpose.
- **Open decisions inherited, not resolved here**: (1) whether industries-first nav fully replaces or merges with Products/Solutions/Services (CONTENT_SUMMARY.md §7, REDESIGN_STRATEGY.md §6/§9 Phase 0); (2) Dental AI Assistant's disposition (folded into Healthcare, kept separate, or shelved). Both blueprints above (Healthcare vertical page, site-wide nav implied by every page's IA) proceed on REDESIGN_STRATEGY.md's stated working assumptions and should be re-checked once Sadin confirms.
