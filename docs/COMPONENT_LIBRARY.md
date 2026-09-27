# Component Library — Zunkiree Labs Redesign

**Status**: Implementation blueprint for the visual redesign's component architecture.
**Inputs**: [MASTER_DESIGN_SPEC.md](./MASTER_DESIGN_SPEC.md) (design system/tokens), [PROJECT_AUDIT.md](./PROJECT_AUDIT.md) (engineering architecture), [REDESIGN_STRATEGY.md](./REDESIGN_STRATEGY.md) (sequencing), [CONTENT_SUMMARY.md](./CONTENT_SUMMARY.md) (content/IA)
**Scope**: Component definitions only. No UI, no code, no mockups.
**Date**: 2026-07-20
**Updated**: 2026-07-26 — synced with MASTER_DESIGN_SPEC.md's global single-background update. Every reference to the retired dark-section/gradient-bloom system (Hero's ambient gradient backdrop, CTA Banner/CTA Card's `dark` variant, the Platform Framing Strip's dark-card framing) is updated to the flat `#F8FAFC` background + glass-surface system. Tooltip's dark popover surface is unaffected — it was never part of the retired page-section system.

> Every component below traces back to a rule in MASTER_DESIGN_SPEC.md. Where a 21st.dev MCP component is recommended, it was located live in the 21st.dev catalog (name/author/URL cited) — not assumed. Component names are role-based, addressing PROJECT_AUDIT.md §5's finding that current partials are named for their page, not their function.

---

## How to read this document

Each component entry defines:

- **Purpose** — what job it does on the page.
- **Priority** — `Core` (blocks launch of any page template), `Recommended` (used on most pages, not launch-blocking), `Optional` (situational).
- **Variants** — the finite set of configurations allowed (per MASTER_DESIGN_SPEC.md §11's "consistency" rule — no undocumented variant should ever appear in implementation).
- **When to use** — the trigger condition for choosing this component over another.
- **Composition** — what smaller components it's built from, if any.
- **Responsive behavior** — how it collapses per MASTER_DESIGN_SPEC.md §21.
- **Accessibility** — component-specific requirements beyond the universal baseline in §22.
- **Dependencies** — other components/tokens/data it requires to function.
- **Implementation approach** — Reuse existing project component / Adapt a 21st.dev MCP component / Build custom, with reasoning.

---

# 1. Navigation

## 1.1 Navbar

- **Purpose**: Primary site wayfinding and the persistent conversion anchor (always-visible CTA).
- **Priority**: Core
- **Variants**: `transparent-over-hero` (top of page, hero background showing through) → `solid-scrolled` (white background, hairline border, appears after scroll threshold). No third variant.
- **When to use**: Every page, exactly one instance, sticky.
- **Composition**: Logo (Shared) + Nav Links (text) + Mega Menu (§1.2) + Primary Button (§9.1) + Mobile Nav trigger (§1.3, mobile only).
- **Responsive behavior**: Full nav → mobile nav trigger + logo + CTA only below `tablet` breakpoint (§21). CTA is never dropped, per §21's mobile rule.
- **Accessibility**: `nav` landmark; mega-menu triggers are keyboard-operable buttons (not divs) with `aria-expanded`; visible focus ring on every link (§22).
- **Dependencies**: `navigation.json` data shape, scroll-hide/reveal behavior.
- **Implementation approach**: **Reuse existing project component** (`header.njk`). PROJECT_AUDIT.md §5 classifies its Alpine state machine (scroll-hide, dropdown state, `navigation.json` binding) as sound engineering — only the markup/visual treatment is rebuilt against §15 of the design spec. Do not source from 21st.dev; the existing state logic is more valuable to preserve than any external starting point.

## 1.2 Mega Menu

- **Purpose**: Surfaces the four industry verticals as the primary navigation choice, with Platform/Company/Resources as secondary columns — the visual expression of REDESIGN_STRATEGY.md §6's industry-first IA decision.
- **Priority**: Core
- **Variants**: `industry-column` (category pill + 4 vertical links, each with a one-line descriptor) / `simple-column` (Platform, Company, Resources — flat link lists).
- **When to use**: Triggered from the Navbar's "Industries" item at minimum; may also back "Platform"/"Resources" if those need more than a flat dropdown.
- **Composition**: Card surface (§13 elevation-2) + Label Pill (§9.3) per column + Text Links.
- **Responsive behavior**: Collapses into the Mobile Navigation overlay (§1.3) below tablet — not a scaled-down version of itself.
- **Accessibility**: `role="menu"`/`menuitem` or equivalent disclosure pattern; closes on `Escape`; focus trapped while open per §22.
- **Dependencies**: Navbar, `navigation.json` (restructured for the industry-first model per REDESIGN_STRATEGY.md §6).
- **Implementation approach**: **Adapt a 21st.dev MCP component.** Best match: **"Navbar Menu"** (`manuarora700`/Aceternity, id 1024) — an animate-on-hover mega-nav built for exactly this "big nav" pattern, and **"Dorpdown Navigation"** (`ln-dev7`, id 618) as a fallback multi-level alternative. *Why*: both already solve the interaction pattern (hover-triggered panel, keyboard dismissal) that would otherwise be built from scratch. *What to customize*: strip any decorative hover-scale/glow effects (violates §18's "no scale/zoom hover" rule), restyle to `radius-md` card surface + `elevation-2` (§13/§9), reorder columns to lead with the four-industry column per REDESIGN_STRATEGY.md §6, and rebuild the column content around the Label Pill pattern (§5/§9.3) instead of the source's default heading style.

## 1.3 Mobile Navigation

- **Purpose**: Full-viewport navigation surface for small breakpoints.
- **Priority**: Core
- **Variants**: None — single full-screen overlay pattern per §15 ("not a narrow slide-out drawer").
- **When to use**: Below `tablet` breakpoint, triggered from Navbar.
- **Composition**: Same Card/Label Pill/Text Link primitives as the Mega Menu (§1.2) — a viewport adaptation, not a distinct system, per §15's explicit rule.
- **Responsive behavior**: N/A (this is itself the mobile-breakpoint response).
- **Accessibility**: Focus trap while open, `Escape` to close, returns focus to the trigger button on close, all touch targets ≥44×44px (§21).
- **Dependencies**: Navbar, `navigation.json`.
- **Implementation approach**: **Reuse existing project component**, restyled. `header.njk`'s existing mobile-menu Alpine state (open/close, focus handling) is functionally sound per PROJECT_AUDIT.md §5; only the full-screen-overlay visual treatment (replacing whatever narrower pattern exists today) needs to change to match §15.

## 1.4 Breadcrumb

- **Purpose**: Wayfinding on deep pages (industry sub-pages, blog posts, glossary/compare/locations programmatic pages).
- **Priority**: Recommended
- **Variants**: `default` (text + separator chevrons).
- **When to use**: Any page more than one level deep in the IA — blog posts, glossary terms, comparison pages, location pages, resource pages.
- **Composition**: Text Links (Shared) + Icon (chevron, §16).
- **Responsive behavior**: Truncates to first + last segment on mobile if the trail exceeds 3 levels; never wraps to a second line.
- **Accessibility**: `nav aria-label="Breadcrumb"` with an ordered list, `aria-current="page"` on the final (non-link) item.
- **Dependencies**: Page-level frontmatter/collection metadata (title, parent).
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Breadcrumb" (`prebuiltui`, id 6976) or the shadcn-pattern "Breadcrumb" (`olivier_1b6cd5bc`, id 5675) — both are minimal, unopinionated shadcn-style breadcrumbs. *Why*: this is a low-differentiation utility component; no reason to hand-build it. *What to customize*: swap separator icon to match the §16 icon set, apply `Text Muted` token to inactive segments and `Text Primary` to the current page per §4.

## 1.5 Tabs

- **Purpose**: In-page content switching (industry self-identification tabs, product capability tabs, pricing period toggle context).
- **Priority**: Core
- **Variants**: `pill-tabs` (rounded-pill segmented control, brand-green active state) / `underline-tabs` (text + bottom-border active indicator, used inside denser content like FAQ categories).
- **When to use**: `pill-tabs` for primary, decision-driving switches (industry selector, Build/Find/Ground/Act capability switch). `underline-tabs` for secondary, lower-emphasis switches.
- **Composition**: Button-like tab triggers + associated panel content.
- **Responsive behavior**: Horizontal scroll (not wrap) if tab count exceeds available width on mobile; scroll affordance must be visually obvious (partial-tab-cutoff, not a hidden scrollbar).
- **Accessibility**: `role="tablist"`/`tab`/`tabpanel` with roving `tabindex`, arrow-key navigation between tabs per §22.
- **Dependencies**: None structural; content-driven.
- **Implementation approach**: **Build custom.** No 21st.dev result matched this specific need directly (search surfaced only unrelated "sticky section tabs" and generic switch/toggle components) — the industry-tab pattern is core product functionality (the primary self-identification mechanism per §1 of the design spec and REDESIGN_STRATEGY.md §8), not a generic UI utility, so per the brief's own criteria ("component represents unique product functionality") this is a build-from-scratch case. Base the interaction on Alpine.js (already in stack) rather than adding a new dependency.

---

# 2. Marketing

## 2.1 Hero

- **Purpose**: Above-the-fold framing statement + primary conversion pair; the page's single Display-type moment.
- **Priority**: Core
- **Variants** *(revised 2026-07-26 — ambient gradient backdrop retired, see MASTER_DESIGN_SPEC.md §10)*: `homepage-hero` (industry self-identification framing, flat `#F8FAFC` background) / `vertical-hero` (industry-specific live-production claim) / `simple-hero` (About/Pricing/Contact — short framing statement, no dual visual).
- **When to use**: Exactly once per page, always the first section.
- **Composition** *(revised 2026-07-26)*: Label Pill (optional eyebrow) + Display headline + Body subhead + Button Primary + Button Secondary (§12 dual-CTA rule), on the flat page background — no gradient background layer.
- **Responsive behavior**: Type steps down one tier on mobile (Display ≈ desktop H1 size per §21); dual CTA stacks vertically below tablet.
- **Accessibility**: Single `h1` per page lives here; contrast is verified against the flat `#F8FAFC` background (§22) — no longer a per-instance gradient-contrast check since the background no longer varies.
- **Dependencies**: Button system (§9.1). *(Ambient Gradient system dependency removed 2026-07-26 — retired.)*
- **Implementation approach** *(revised 2026-07-26)*: **Adapt a 21st.dev MCP component**, restyled to the flat-background system. The originally-sourced "Hero Static Radial Gradient" (`cult-ui`, id 19151) is no longer the right base since its defining feature — a responsive gradient visual — is exactly what's retired; use it only for the split-layout headline/CTA mechanics and **strip the gradient/shader visual entirely**, replacing that half with a Hero Visual (§2.2) or nothing at all on `simple-hero`. *What to customize*: cap headline to the 6-step type scale (§5), add the mandatory secondary/soft CTA (source component appears single-CTA), remove any "tech stack badges" default content, and remove the shader/gradient layer per §10's flat-background rule. Reject "Hero Section 1/4/6" (`meschacirung`) as alternates — reviewed but visually denser/more decorative than the "calm confidence" bar in §1.

## 2.2 Hero Visual

- **Purpose**: The visual/product-truth half of a 50/50 hero or outcome-feature-block pairing (product screenshot in device frame, or abstract gradient art where no screenshot exists).
- **Priority**: Core
- **Variants**: `screenshot-framed` (real product UI, §17 device frame) / `abstract-gradient` (no product to show yet — e.g., Real Estate vertical per REDESIGN_STRATEGY.md §5).
- **When to use**: Paired with Hero or Outcome Feature Block (§3.x) wherever proof-over-adjectives (§1) requires a visual, not just copy.
- **Composition**: Picture component (Reuse, `picture.njk`) inside a device-frame container (custom) OR Illustration (§17 abstract gradient art).
- **Responsive behavior**: Stacks below text on tablet/mobile per §6's "text+visual pairs stack, text first" rule.
- **Accessibility**: Descriptive alt text for screenshots; `alt=""`/`aria-hidden` for decorative abstract art (§22).
- **Dependencies**: `picture.njk` (Reuse), device-frame container (Build custom — thin wrapper, not a full component).
- **Implementation approach**: **Reuse existing project component** for the image pipeline (`picture.njk`, confirmed reusable per PROJECT_AUDIT.md §5) wrapped in a **custom-built** device frame, since no generic 21st.dev "browser frame" component was searched that would meet the specific "soft inset, subtle border" spec in §17 — this is a thin enough wrapper (rounded container + border + inset shadow) that building it directly is faster and more consistent than adapting an external component.

## 2.3 Announcement Banner

- **Purpose**: Optional top-of-page micro-announcement (e.g., a major client win, new vertical launch).
- **Priority**: Optional
- **Variants**: `dismissible` only — no persistent/non-dismissible variant (avoids a permanent layout-shift risk).
- **When to use**: Sparingly, time-boxed announcements only — never a permanent fixture.
- **Composition**: Text + optional inline link + dismiss icon-button.
- **Responsive behavior**: Full-width single line; truncates or wraps to 2 lines max on mobile, never pushes the Navbar below the fold.
- **Accessibility**: Dismiss control has an accessible label; dismissal state should persist (localStorage) so it doesn't reappear every visit within a session.
- **Dependencies**: Navbar (sits above it in DOM/visual order).
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Banner" (`sshahaider`, id 5953) supports variants, closable option, and auto-hide — directly matches the dismissible-only requirement. *What to customize*: strip to a single neutral/brand-green variant (reject the multi-color "success/warning/premium" variant set — violates the one-accent-hue rule in §4/§24), remove shimmer effect (not a sanctioned motion pattern per §18).

## 2.4 Trust Bar

- **Purpose**: Compact proof strip — small stat callouts or client-count claims placed near the top of a page, lighter-weight than the full Logo Cloud.
- **Priority**: Recommended
- **Variants**: `stat-only` (numerals + labels) / `logo-only` (compact logo row).
- **When to use**: Homepage, directly under the hero, as an immediate light-touch proof signal before the fuller Logo Cloud/Statistics section.
- **Composition**: Statistic Card (§4.4, compact variant) or small Logo Cloud instance.
- **Responsive behavior**: Horizontal row → wraps to 2 columns (tablet) → stacks (mobile).
- **Accessibility**: Numerals must be real/sourced text (not canvas/SVG-only) so they're screen-reader accessible.
- **Dependencies**: Statistic Card, real sourced data only (§24 "never fabricate a statistic" guardrail).
- **Implementation approach**: **Build custom**, composed entirely from Statistic Card (§4.4) and Logo Cloud (§2.5) — this is a layout composition, not a new primitive, per §20's composition-over-invention rule.

## 2.5 Logo Cloud

- **Purpose**: Client-logo social proof, grouped by vertical where possible per §13.
- **Priority**: Core
- **Variants**: `static-grid` (fixed grid, small logo count) / `marquee` (auto-scrolling row, larger logo count).
- **When to use**: `static-grid` when logo count is small and finite (a single vertical's confirmed clients); `marquee` for the full cross-vertical breadth-proof set (CONTENT_SUMMARY.md §4/§5's "breadth signal" tier).
- **Composition**: Logo images (SVG, monochrome-treated per brand consistency) in a grid or scrolling track.
- **Responsive behavior**: Marquee continues scrolling at reduced speed on mobile; static grid steps 4→2→1 columns per §21.
- **Accessibility**: `prefers-reduced-motion` pauses the marquee (§18/§22, non-negotiable); each logo has descriptive alt text (company name).
- **Dependencies**: Confirmed real client logo assets only — never a placeholder (§24).
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Logo Cloud" (`educlopez`, id 18355, described explicitly as "responsive brand logo grid for partner/customer/technology logos as social proof") for the static-grid variant, and the marquee-tagged "Logo Cloud" (`meschacirung`/`larsen66` listing, id 4672) for the marquee variant. *Why*: this is a widely-solved, low-differentiation pattern — reuse over rebuild is clearly correct per §11's reusability principle. *What to customize*: enforce monochrome/neutral-gray logo treatment (avoid multi-brand-color visual noise competing with the one-accent-color system), respect reduced-motion on the marquee variant, remove any decorative border/plus-icon flourishes from alternate variants reviewed (e.g., "Logo Cloud 2," `sshahaider`) since they add ungoverned decoration §1 warns against.

## 2.6 CTA Banner

- **Purpose**: The dual-CTA closing pattern used at the bottom of nearly every page template (§19).
- **Priority**: Core
- **Variants** *(revised 2026-07-26 — supersedes the dark gradient-bloom variant)*: `light` (flat `#F8FAFC` background, the standard everywhere) / `glass` (sky-tinted glass-surface card per MASTER_DESIGN_SPEC.md §3 technique 2 — now the signature motif per §2 of the design spec, replacing the retired dark gradient-bloom card).
- **When to use**: End of homepage, end of every vertical page, mid-page soft-conversion moments.
- **Composition**: Headline + one-line support copy + Button Primary + Button Secondary (mandatory pair per §12/§24).
- **Responsive behavior**: Buttons stack vertically below tablet; `glass` variant's `backdrop-blur-md` may be simplified on lower-end mobile devices for performance (§21 exception for decorative elements).
- **Accessibility**: Text over the `glass` variant must independently verify AA contrast against the sky-tinted translucent surface (§22 — translucent surfaces vary contrast depending on what's beneath them).
- **Dependencies**: Glass-surface technique (§3 technique 2, §4 `sky` token) for the `glass` variant. *(Ambient/Accent Gradient system dependency removed 2026-07-26 — retired.)*
- **Implementation approach**: **Reuse existing project component**, restyled. `cta-band.njk` exists today but is flagged in PROJECT_AUDIT.md §5/§20 as DOM-id-coupled to `main.js`'s `initFaqGreenGlow()` — a textbook case of the "homepage-specific fork instead of a parameterized general component" anti-pattern §20 explicitly warns against. The fix is architectural (decouple from the hardcoded DOM id, parameterize headline/copy/CTAs/variant), not a re-source from 21st.dev, since the existing partial's underlying two-row glass-panel layout is close to spec already. As a visual reference only, "CTA Section" (`shadcnstore`, id 19355) confirms the headline+badge+buttons structure is a standard, low-risk pattern to rebuild against.

---

# 3. Content

## 3.1 Section Header

- **Purpose**: The label-pill + H2 + optional support copy pattern that opens nearly every section — the primary "one idea per section" (§1) signal.
- **Priority**: Core
- **Variants**: `left-aligned` (default, per §3's balance rule) / `centered` (reserved for narrow standalone moments only, per §3).
- **When to use**: At the top of virtually every content section.
- **Composition**: Label Pill (§9.3) + H2 + optional Body support line.
- **Responsive behavior**: No structural change; type steps per §21.
- **Accessibility**: Semantic heading level appropriate to document position (§22, never skipped).
- **Dependencies**: Label Pill.
- **Implementation approach**: **Build custom.** Too small and too tightly bound to the spec's exact type/spacing tokens to benefit from an external source — a 3-line Nunjucks partial (label, heading, optional copy) taking props, matching `cta-faq.njk`'s parameterization model cited as the template pattern in §11 of the design spec.

## 3.2 Feature Grid

- **Purpose**: Repeater of Feature Cards (§4.1) presenting capability/benefit lists.
- **Priority**: Core
- **Variants**: `3-column` / `4-column` (per §6's grid-split rule — no other column counts).
- **When to use**: Accelerator lists on vertical pages, platform capability lists, "What We Do" grids.
- **Composition**: Section Header (§3.1) + repeated Feature Card (§4.1).
- **Responsive behavior**: 4→3→2→1 or 3→2→1 per §21's repeater step-down.
- **Accessibility**: Grid uses semantic list markup (`ul`/`li`) where content is genuinely list-like.
- **Dependencies**: Feature Card.
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Feature Grid" (`lavikatiyar`, id 8377) or "Grid Feature Cards" (`sshahaider`, id 2070) — both are exactly this pattern (responsive grid, image/title/description card, hover state). *What to customize*: reduce hover treatment to the sanctioned `elevation-1`→`elevation-3` bump only (source components' "subtle animation on hover" must be checked against §18's no-scale/no-rotate rule and trimmed if it exceeds it), and enforce the 3/4-column-only constraint rather than the source's arbitrary column count.

## 3.3 Benefits

- **Purpose**: Outcome-oriented supporting content beneath a Feature Grid or Outcome Feature Block — "why this matters" framing rather than "what it does."
- **Priority**: Recommended
- **Variants**: Shares the Feature Grid's card-repeater structure; distinguished by content role only (outcome-framed copy vs. capability-framed copy), not a separate visual component.
- **When to use**: Vertical pages, directly after the accelerator/capability grid.
- **Composition**: Section Header + Feature Card (icon swapped for outcome-oriented copy).
- **Responsive behavior**: Same as Feature Grid (§3.2).
- **Accessibility**: Same as Feature Grid.
- **Dependencies**: Feature Grid, Feature Card.
- **Implementation approach**: **Reuse existing project component** — this is a content/props variant of Feature Grid (§3.2), not a new component, per §20's "no forking for a one-off layout problem" rule.

## 3.4 How It Works

- **Purpose**: Sequential/step-based explanation of a process (e.g., Education vertical's application-pipeline stages: document collection → application → offer → visa → enrollment).
- **Priority**: Recommended
- **Variants**: `horizontal-steps` (desktop, connected by a thin line/arrow) / `vertical-steps` (mobile, and any desktop case with >4 steps).
- **When to use**: Any page explaining a multi-stage workflow — most relevant to the Education and Healthcare verticals' pipeline/workflow content.
- **Composition**: Numbered Step markers + short label/description per step, optionally each backed by a small Feature Card.
- **Responsive behavior**: `horizontal-steps` collapses to `vertical-steps` at tablet per §21.
- **Accessibility**: Ordered list (`ol`) semantics regardless of visual orientation.
- **Dependencies**: None beyond typography/spacing tokens.
- **Implementation approach**: **Build custom.** No close 21st.dev match was found in this pass, and a numbered-step process explainer is simple enough (numbered markers + connecting line + text) that a custom build in the existing Nunjucks/Tailwind system is faster and more consistent than adapting an unrelated component.

## 3.5 Industry Showcase

- **Purpose**: The homepage's industry self-identification section — the structural realization of §1's "self-identification before persuasion" principle and REDESIGN_STRATEGY.md §6's industry-first IA.
- **Priority**: Core
- **Variants**: None — one canonical pattern (tab/card switcher across the four verticals).
- **When to use**: Homepage only, positioned per §19's template order (section 2, immediately after the hero).
- **Composition**: Section Header + Tabs (§1.5, `pill-tabs`) + Industry/Vertical Card (§4.2) per tab panel.
- **Responsive behavior**: Tabs scroll horizontally on mobile (§1.5); card content stacks to single column.
- **Accessibility**: Full `tablist`/`tabpanel` semantics (§1.5); each panel change must not steal focus unexpectedly.
- **Dependencies**: Tabs (§1.5), Industry/Vertical Card (§4.2).
- **Implementation approach**: **Build custom**, composed from Tabs (§1.5, already flagged as a custom build) and Industry Card (§4.2). This is core, differentiated product/business functionality — the primary mechanism CONTENT_SUMMARY.md §8 identifies as step 1 of the entire user journey — and is explicitly the kind of component the brief says to build from scratch rather than source externally ("represents unique product functionality or storytelling").

## 3.6 AI Workflow

- **Purpose**: Explains the platform's capability model (e.g., the homepage's existing Build/Find/Ground/Act tabbed capability section) — "how the platform works" supporting content, secondary to industry framing per CONTENT_SUMMARY.md §7's homepage analysis.
- **Priority**: Optional
- **Variants**: Reuses the Tabs (§1.5) + content-panel pattern.
- **When to use**: Homepage or Platform page, as supporting depth beneath the Platform Framing Strip (§2.6 `glass` variant, revised 2026-07-26 — was `§4.6/§13 dark card`).
- **Composition**: Tabs (§1.5) + per-tab content panel (could itself contain a Feature Grid or Hero Visual).
- **Responsive behavior**: Same as Tabs (§1.5).
- **Accessibility**: Same as Tabs (§1.5).
- **Dependencies**: Tabs.
- **Implementation approach**: **Reuse existing project component** structurally — this is a Tabs (§1.5) content composition, not a new component; only the visual restyling and content (per REDESIGN_STRATEGY.md §2, "Platform pillars + Search spotlight" is a strong reuse candidate) carry forward.

## 3.7 Integrations

- **Purpose**: If/when needed — showcases platform integrations or connected tools (not currently a confirmed content requirement per CONTENT_SUMMARY.md, held as a category placeholder for future platform-page depth).
- **Priority**: Optional
- **Variants**: `logo-grid` (reuses Logo Cloud, §2.5, `static-grid` variant) / `card-list` (integration name + short description per card, reuses Feature Card, §4.1).
- **When to use**: Only if/when the Platform page requires it — not part of the Phase 1–4 build per REDESIGN_STRATEGY.md §9's action plan.
- **Composition**: Logo Cloud or Feature Card repeater.
- **Responsive behavior**: Inherits from whichever composed component is used.
- **Accessibility**: Inherits from composed component.
- **Dependencies**: Logo Cloud (§2.5) or Feature Card (§4.1).
- **Implementation approach**: **Reuse existing project component** — no new component category needed; this is a data/content application of Logo Cloud or Feature Grid, added here only to close out the requested category list per §20's composition rule.

## 3.8 Statistics

- **Purpose**: Sourced-metric proof section — real, named-source numbers (per §24's anti-fabrication guardrail and CONTENT_SUMMARY.md §4's confirmed-metric list: 45% faster response, etc.).
- **Priority**: Core
- **Variants**: `row` (3–4 Statistic Cards in a horizontal repeater) / `inline` (single large stat embedded within a text block, e.g., mid-paragraph proof callout).
- **When to use**: Vertical pages' "proof/stat card tied to that vertical's real metric" section (§19 template), homepage Trust Bar (§2.4).
- **Composition**: Statistic Card (§4.4) repeater, or a single inline instance.
- **Responsive behavior**: Row steps 4→2→1 per §21.
- **Accessibility**: Numerals as real text nodes (screen-reader visible), source attribution present and legible, not just a decorative footnote mark.
- **Dependencies**: Statistic Card, sourced data only.
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Stats Section with Text" (`tommyjepsen`, id 1195) or "Stats" (`meschacirung`, id 5449, "stats info and numbers") for the row layout. *What to customize*: enforce the mono-font-for-numerals option per §5 (DM Mono reserved for "stat callouts with a technical feel"), require a source-attribution line beneath every numeral (source components typically don't include this — it must be added, not optional, per §24), remove any counter/count-up animation unless it can be justified against §18's "supports credibility" motion bar (a slot-machine-style count-up on a serious enterprise stat can read as gimmicky — default to static unless explicitly approved).

## 3.9 Testimonials

- **Purpose**: Real client quotes, tabbed by client, replacing the fabricated content currently in `customers.njk` (flagged for full rebuild per PROJECT_AUDIT.md §13/REDESIGN_STRATEGY.md §4).
- **Priority**: Recommended (blocked on having enough real quotes per §19's homepage template note: "once enough real quotes exist").
- **Variants**: `tabbed-by-client` (logo-tab switcher + quote panel, per §13's Testimonial Card notes) — the only sanctioned pattern; no untabbed/static single-quote variant for the primary testimonial section (a pull-quote may still appear standalone per §3's "narrow standalone moment" allowance, but that's the Testimonial Card used singly, not a separate component).
- **When to use**: Homepage (once sufficient real quotes exist), vertical pages where a named client quote exists.
- **Composition**: Tabs (§1.5, logo-tab variant) + Testimonial Card (§4.5).
- **Responsive behavior**: Logo tabs scroll horizontally on mobile; quote panel stacks below.
- **Accessibility**: Same tablist/tabpanel requirements as §1.5; quote text in a `blockquote` element with `cite`/attribution.
- **Dependencies**: Tabs, Testimonial Card, confirmed real client quotes only (§24).
- **Implementation approach**: **Adapt a 21st.dev MCP component** for the interaction shell only. "Testimonials" (`tommyjepsen`, id 1434, "carousel of reviews") is the closest tabbed/carousel pattern; reject the auto-scrolling "Testimonials Carousel" (`ruixen.ui`) and "Testimonial Section 2" marquee (`solaceui`) options as primary candidates since continuous auto-scroll reads as review-mill/consumer-SaaS rather than the "content-forward, minimal chrome" enterprise register §13 specifies — those patterns are better suited to the Logo Cloud marquee (§2.5), not credited client testimony. *What to customize*: convert from an auto-scroll carousel to a deliberate logo-tab switcher (visitor-controlled, not autoplaying) per §13's specified pattern, strip decorative card chrome to match §13's "no decorative imagery competing with the quote" rule.

## 3.10 FAQ

- **Purpose**: Dual-theme accordion + CTA panel, per-page or per-vertical FAQ content.
- **Priority**: Core
- **Variants**: `light-theme` / `dark-theme` (matches the existing dual-theme capability).
- **When to use**: Nearly every page template (§19) — About, Pricing, Contact, vertical pages, closing sections.
- **Composition**: Accordion (§5.1) + CTA Banner (§2.6) panel, combined.
- **Responsive behavior**: Single column at all breakpoints; accordion items never force horizontal scroll.
- **Accessibility**: Correct accordion ARIA pattern (§5.1) inherited.
- **Dependencies**: Accordion, CTA Banner, FAQ data files (`faq.json`, `aboutFaq.json`, vertical-specific FAQ content — all requiring the old six-industry-list purge per REDESIGN_STRATEGY.md §3).
- **Implementation approach**: **Reuse existing project component.** `cta-faq.njk` is explicitly named in PROJECT_AUDIT.md §5 and MASTER_DESIGN_SPEC.md §11/§20 as "the best-factored partial in the codebase" and "the template for how new components should be authored" — genuinely parameterized, dual-theme already. Only visual restyling against §12/§13 tokens is needed; the component architecture itself is the reuse model for the rest of this library, not just this entry.

## 3.11 Case Studies

- **Purpose**: Deeper case-study presentation than a Testimonial Card alone — client context, problem, outcome, tied to a named real client.
- **Priority**: Recommended
- **Variants**: `carousel` (homepage, multiple case studies) / `single-embed` (vertical page, one flagship case study inline, e.g., Admizz on the Education page).
- **When to use**: Homepage proof section (§19), vertical page's "flagship proof" section.
- **Composition**: Card surface + client logo/name + short narrative + Statistic Card (§4.4) for the headline metric + optional link to full case study.
- **Responsive behavior**: Carousel → single-column swipeable stack on mobile.
- **Accessibility**: Carousel is keyboard-navigable (arrow keys/tab), not mouse/touch-only; respects reduced-motion for any auto-advance (auto-advance itself should be avoided per §18's "no idle-loop animation" rule unless user-controlled).
- **Dependencies**: Statistic Card, confirmed real client data only.
- **Implementation approach**: **Build custom**, composed from existing Card system (§13) + Statistic Card (§4.4). Reviewed 21st.dev carousel results ("Reviews Carousel," `educlopez`; "Testimonials Carousel," `ruixen.ui`) are testimonial-quote-shaped, not case-study-shaped (problem/outcome narrative + metric) — the structural mismatch means adapting one would require rebuilding most of the internal layout anyway, so building directly against the Card system is more direct.

---

# 4. Cards

All cards inherit the shared rules in MASTER_DESIGN_SPEC.md §13 (radius, elevation, padding, internal structure order) — variant-specific notes only below.

## 4.1 Feature Card

- **Purpose**: Repeater unit for capability/benefit lists.
- **Priority**: Core
- **Variants**: `icon-led` (icon → title → body) / `link-out` (adds a Ghost button/text link, §12).
- **When to use**: Inside Feature Grid (§3.2).
- **Composition**: Icon (§6) + H3 title + Body copy + optional Ghost Button.
- **Responsive behavior**: Card width follows grid step-down (§3.2); internal structure never changes shape.
- **Accessibility**: Icon is decorative (`aria-hidden`) unless it's the only signifier of meaning, in which case it needs a label.
- **Dependencies**: Icon system (§6), Button system (§9.1).
- **Implementation approach**: See Feature Grid (§3.2) — sourced as part of the same adapted 21st.dev component ("Feature Grid," `lavikatiyar`, id 8377).

## 4.2 Industry/Vertical Card

- **Purpose**: Anchors the industry self-identification pattern — always carries real proof, never a placeholder stat (§13's explicit rule).
- **Priority**: Core
- **Variants**: `with-client-proof` (Education, Agencies, Healthcare — named client + stat) / `capability-led` (Real Estate — no client, per REDESIGN_STRATEGY.md §5's explicit guardrail against fabricating a CRE logo).
- **When to use**: Inside Industry Showcase (§3.5) tab panels.
- **Composition**: Label Pill (industry name) + headline claim + Statistic Card or client-proof line + Button (CTA into the vertical page).
- **Responsive behavior**: Full-width single card per tab panel; no internal responsive complexity.
- **Accessibility**: Card's primary CTA is a real link, keyboard-focusable, with a clear accessible name (not a bare "Learn more").
- **Dependencies**: Statistic Card (§4.4), confirmed real client data (or explicit capability-led copy for Real Estate).
- **Implementation approach**: **Build custom.** This card's content contract (claim + real-proof-or-explicit-capability-framing, per §13's own rule) is specific enough to Zunkiree's anti-fabrication guardrail that no generic external "industry card" pattern would fit without a full rebuild of its internal logic — build directly against the Card system (§13) base styles.

## 4.3 AI Agent Card

- **Purpose**: Represents a distinct platform/product capability unit (e.g., a named accelerator, or eventually "Orca" as a documented platform component per REDESIGN_STRATEGY.md §5).
- **Priority**: Optional
- **Variants**: Shares Feature Card's `icon-led` structure; distinguished by placement (Platform page / accelerator lists) rather than a unique visual form.
- **When to use**: Platform page, accelerator sections on vertical pages.
- **Composition**: Same as Feature Card (§4.1).
- **Responsive behavior**: Same as Feature Card.
- **Accessibility**: Same as Feature Card.
- **Dependencies**: Feature Card.
- **Implementation approach**: **Reuse existing project component** — a Feature Card (§4.1) content variant, not a new component, per §20.

## 4.4 Statistic Card

- **Purpose**: Sourced numeral + label proof unit.
- **Priority**: Core
- **Variants**: `standard` (numeral + label + source) / `compact` (Trust Bar usage, §2.4 — numeral + label only, source in a shared strip-level attribution instead of per-card).
- **When to use**: Inside Statistics (§3.8), Trust Bar (§2.4), Industry Card (§4.2), Case Studies (§3.11).
- **Composition**: Large numeral (optionally DM Mono per §5) + short label + source attribution (standard variant only).
- **Responsive behavior**: Numeral size steps down one tier on mobile alongside the type-scale rule in §21.
- **Accessibility**: Numeral and label both real text; source attribution not solely conveyed by an icon/tooltip (must have visible text).
- **Dependencies**: None beyond type tokens.
- **Implementation approach**: See Statistics (§3.8) — same adapted 21st.dev source ("Stats Section with Text," `tommyjepsen`), used here at the individual-card grain.

## 4.5 Testimonial Card

- **Purpose**: Individual quote unit within the tabbed Testimonials section (§3.9).
- **Priority**: Recommended
- **Variants**: None beyond the light/dark theme inherited from FAQ's dual-theme pattern if used in a dark CTA context.
- **When to use**: Inside Testimonials (§3.9); may also stand alone for a single "narrow, standalone moment" pull-quote per §3.
- **Composition**: Logo/name header + quote body (`blockquote`) + minimal chrome (§13's explicit "no decorative imagery competing with the quote" rule).
- **Responsive behavior**: Single column at all breakpoints.
- **Accessibility**: `blockquote` + `cite`, attribution text programmatically associated with the quote.
- **Dependencies**: Confirmed real client quotes only.
- **Implementation approach**: See Testimonials (§3.9) — same adapted shell, restyled per §13's minimal-chrome rule.

## 4.6 Blog Card

- **Purpose**: Repeater unit for the content/thought-leadership teaser grid.
- **Priority**: Recommended
- **Variants**: `with-photo` (real photo) / `gradient-art` (flat gradient art per §17, used when no real photo exists — keeps the grid visually consistent per §17's explicit allowance).
- **When to use**: Homepage content teaser section (§19), blog index.
- **Composition**: Image/gradient-art thumbnail (consistent radius per §17) + category Label Pill + title + short excerpt + date/author metadata (Small/Caption style, §5).
- **Responsive behavior**: 3→2→1 column grid per §21.
- **Accessibility**: Thumbnail alt text (real photos) or `alt=""` (gradient art, decorative).
- **Dependencies**: `picture.njk` (photo variant), gradient-art asset system (§10/§17), `authors.js`, blog collection data.
- **Implementation approach**: **Reuse existing project component** structurally (blog collection/pagination logic is sound per PROJECT_AUDIT.md §3's Reuse classification), restyled as a Feature-Card-family variant (§4.1) against the new image-treatment rules in §17.

## 4.7 Statistic Card *(see §4.4 — cross-referenced, not duplicated)*

## 4.8 Pricing Card

- **Purpose**: Single pricing tier presentation.
- **Priority**: Recommended (Pricing page only)
- **Variants**: `standard` / `emphasized` (exactly one per row gets a border/elevation bump per §13's explicit "never more than one recommended card" rule).
- **When to use**: Pricing Table (§7.1) repeater.
- **Composition**: Tier name (H3) + price (large numeral) + feature list (checkmark icons) + single Button Primary.
- **Responsive behavior**: Row → stacked single column below tablet, `emphasized` card reorders to first position on mobile for visibility.
- **Accessibility**: Feature list uses semantic list markup; checkmark icons are decorative (text label carries the meaning).
- **Dependencies**: Button system, Icon system.
- **Implementation approach**: See Pricing Table (§7.1) — sourced together as one adapted component.

## 4.9 CTA Card

- **Purpose**: Compact mid-page soft-conversion card (distinct from the full-width CTA Banner, §2.6 — used inline within a denser content flow, e.g., a sidebar or end-of-article prompt).
- **Priority**: Optional
- **Variants** *(revised 2026-07-26)*: `light` / `glass` — matches CTA Banner's variant set (§2.6); the prior `dark` variant is retired.
- **When to use**: Mid-article (blog/resources), sidebar contexts, or anywhere a full-bleed CTA Banner would be too heavy.
- **Composition**: Short headline + one-line support copy + one or two Buttons — same content contract as CTA Banner but bounded to card width rather than full-bleed.
- **Responsive behavior**: Full-width on mobile.
- **Accessibility**: Same as CTA Banner.
- **Dependencies**: Button system.
- **Implementation approach**: **Reuse existing project component** — a bounded-width variant of CTA Banner (§2.6), not a separate component, per §20's composition rule.

---

# 5. Interactive

## 5.1 Accordion

- **Purpose**: FAQ and expandable-detail content.
- **Priority**: Core
- **Variants**: `single-open` (one panel open at a time — default) / `multi-open` (feature-comparison expandable detail, if used in place of a static table on Pricing).
- **When to use**: Inside FAQ (§3.10), optionally Feature Comparison (§7.3).
- **Composition**: Trigger button (question) + collapsible panel (answer).
- **Responsive behavior**: No structural change; full-width at all breakpoints.
- **Accessibility**: `aria-expanded`, `aria-controls`, correct heading level on the trigger, keyboard-operable (Enter/Space) per §22.
- **Dependencies**: `@alpinejs/collapse` (already in stack per PROJECT_AUDIT.md §2 — no new dependency needed).
- **Implementation approach**: **Reuse existing project component.** This is the interaction layer already inside `cta-faq.njk` (§3.10) — do not introduce a second accordion implementation. If a standalone Accordion is ever needed outside the FAQ context, "Accordion" (`originui`, id 506, "enhanced shadcn/ui accordion, multi-level") is the fallback 21st.dev reference, but the existing Alpine-collapse pattern should be extracted into its own component before reaching externally, per §23's "don't add a new dependency the stack already covers" rule.

## 5.2 Tabs *(see §1.5 — cross-referenced, not duplicated)*

## 5.3 Carousel

- **Purpose**: Sequential browsing of case studies or (legacy) hero slides.
- **Priority**: Optional (per §19, the homepage hero moves away from a "dense carousel of competing messages" — carousel usage should shrink versus the current site, not expand).
- **Variants**: `case-study-carousel` (see Case Studies, §3.11) only — no generic all-purpose carousel variant, to avoid the pattern creeping back into places §19 explicitly wants a single focused hero instead.
- **When to use**: Case Studies (§3.11) only.
- **Composition**: See §3.11.
- **Responsive behavior**: See §3.11.
- **Accessibility**: See §3.11 (keyboard navigable, no forced auto-advance).
- **Dependencies**: See §3.11.
- **Implementation approach**: **Build custom** — see §3.11's reasoning. Explicitly scoped down from the current site's `initHeroCarousel()` (a ~180-line hand-rolled state machine per PROJECT_AUDIT.md §10) to a single, narrower use case.

## 5.4 Modal

- **Purpose**: Focused-attention overlay (e.g., an expanded case-study view, a video embed, a confirmation state).
- **Priority**: Optional
- **Variants**: `standard` (dismissible, content-driven) / `alert` (destructive/confirming action — unlikely to be needed on a marketing site but included for completeness).
- **When to use**: Sparingly — only where a full page navigation would break flow unnecessarily.
- **Composition**: Overlay/scrim + Card surface (`radius-lg` per §8's "large modals" rule) + close Icon Button (§9.5).
- **Responsive behavior**: Full-screen on mobile, centered fixed-width on desktop.
- **Accessibility**: Focus trap, `Escape` to close, `role="dialog"`/`aria-modal="true"`, returns focus to trigger on close (§22).
- **Dependencies**: Icon Button (§9.5).
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Modal" (`shugar`, id 3886/3885) is a clean, purpose-built display-popup component; "Alert Dialog" (`shadcn`, id 1391) as the fallback for the `alert` variant specifically, since it's the canonical shadcn confirm-dialog pattern. *What to customize*: apply `radius-lg`/`elevation-2` card treatment, ensure focus-trap behavior meets §22 before shipping (verify, don't assume, from the source component).

## 5.5 Tooltip

- **Purpose**: Contextual micro-information on hover/focus (e.g., an info icon next to a pricing feature).
- **Priority**: Optional
- **Variants**: `standard` only.
- **When to use**: Sparingly, for genuinely supplementary info — never for conversion-critical content (that belongs in visible copy per §16's icon-usage rule).
- **Composition**: Trigger element + floating panel.
- **Responsive behavior**: On touch devices, triggers on tap rather than hover; must not require hover to access critical info (§22).
- **Accessibility**: `role="tooltip"`, associated via `aria-describedby`, dismissible via `Escape`, keyboard-focusable trigger.
- **Dependencies**: None.
- **Implementation approach**: **Adapt a 21st.dev MCP component.** The base "Tooltip" (`shadcn`, id 1277) — genuinely minimal, unopinionated, no reason to build from scratch. *What to customize*: apply a `Text Primary`-on-`Navy-900` surface treatment — a small, isolated dark popover, distinct from the retired page-section dark-card system (§4, 2026-07-26); tooltips are the one place a dark surface remains standard, since they're a floating micro-UI element, not a section background — `radius-md`.

## 5.6 Search

- **Purpose**: On-site content search (glossary/blog/resources) — distinct from the external Zunkiree Search product widget, which is a separate system boundary per PROJECT_AUDIT.md §12.
- **Priority**: Optional
- **Variants**: `inline` (a search input within a resources/glossary page) / `command-palette` (Cmd/Ctrl+K global site search, if scoped in).
- **When to use**: Only if site-search is confirmed in scope — not currently a named requirement in any source document. Included for completeness against the requested category list.
- **Composition**: Input (§8.4) + results list/panel.
- **Responsive behavior**: `command-palette` variant becomes a full-screen overlay on mobile, matching Modal (§5.4) mobile behavior.
- **Accessibility**: `role="combobox"`/listbox pattern, keyboard navigable results, `Escape` to close (§22).
- **Dependencies**: Modal (§5.4) shell for the `command-palette` variant.
- **Implementation approach**: **Adapt a 21st.dev MCP component**, only if scoped. "Command Palette" (`rafa-porto`, id 2075) is a clean Raycast-inspired implementation. **Explicit caution**: this is unrelated to and must never be merged with the existing external Zunkiree Search widget integration (PROJECT_AUDIT.md §12) — that is live product functionality, a system boundary, and out of scope for this component (do not let implementation collapse the two).

## 5.7 Filters

- **Purpose**: Narrowing a content list (e.g., filtering the Resources library, or the Comparison/Glossary programmatic pages, by category).
- **Priority**: Optional
- **Variants**: `pill-filter` (reuses Tabs' `pill-tabs` visual, §1.5, as a multi-select filter bar rather than a single-select tab switch) / `select-filter` (dropdown, for a larger option set).
- **When to use**: Resources library page, if/when filtering is needed for a growing content set.
- **Composition**: Filter pills or Select input + filtered content grid (Blog Card or Feature Card repeater).
- **Responsive behavior**: Horizontal scroll for `pill-filter` on mobile, same as Tabs (§1.5).
- **Accessibility**: Filter state changes announce result-count updates (`aria-live` region) so screen-reader users know the list changed.
- **Dependencies**: Whatever content-card component it's filtering (Blog Card, Feature Card).
- **Implementation approach**: **Build custom**, reusing the Tabs (§1.5) pill visual style for consistency rather than sourcing a separate filter-UI pattern externally — keeps exactly one "pill selector" visual language in the system per §11's consistency rule instead of two competing ones.

---

# 6. Pricing

## 6.1 Pricing Table

- **Purpose**: The pricing page's core tier-comparison layout.
- **Priority**: Recommended (Pricing page only)
- **Variants**: `with-toggle` (monthly/annual) / `static` (single billing period, no toggle needed).
- **When to use**: Pricing page, §19 template step 2.
- **Composition**: Section Header (§3.1) + Pricing Toggle (§6.2, if applicable) + Pricing Card (§4.8) repeater (§13's one-emphasized-tier rule).
- **Responsive behavior**: Row → stacked single column below tablet.
- **Accessibility**: Toggle state change updates prices via an `aria-live` region so the change is announced.
- **Dependencies**: Pricing Card, Pricing Toggle.
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Pricing Table" (`vaib215`, id 9115) is the closest full-featured match — four tiers, billing toggle, feature lists with checkmarks, already theme-compatible. *Why*: this is a well-solved, structurally standard pattern (per §11's reuse-over-invent principle) and building it from scratch would just re-derive the same layout math. *What to customize*: reduce to the design system's actual tier count (not fixed at four if Zunkiree's real pricing differs), enforce the single-emphasized-tier rule (§13) strictly (reject the source's "student discount banner" extra unless it maps to a real Zunkiree offer), restyle to `radius-md` cards + brand-green Primary Button on the emphasized tier only.

## 6.2 Pricing Toggle

- **Purpose**: Monthly/annual billing period switch.
- **Priority**: Optional (only if pricing has more than one billing period)
- **Variants**: Two-state switch only.
- **When to use**: Inside Pricing Table (§6.1), `with-toggle` variant.
- **Composition**: Switch/toggle control + labels for each state + optional "save X%" Label Pill on the annual state.
- **Responsive behavior**: No structural change.
- **Accessibility**: Native `role="switch"` or equivalent, labelled state, keyboard-operable.
- **Dependencies**: Label Pill (for the "save X%" badge).
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Switch" (`coss.com`, id 11654, "toggle switch built on Base UI with animated thumb") — clean, accessible base to restyle with brand-green active state per §4.

## 6.3 Feature Comparison

- **Purpose**: Detailed tier-by-tier feature matrix.
- **Priority**: Optional
- **Variants**: `table` (desktop) / `accordion` (mobile, or as the default on any breakpoint if a matrix table would be illegible — reuses Accordion, §5.1).
- **When to use**: Pricing page, if tier differences need more depth than the Pricing Card feature lists alone provide.
- **Composition**: Table or Accordion (§5.1) + checkmark/dash Icons per cell.
- **Responsive behavior**: `table` variant scrolls horizontally within its own contained `overflow-x` wrapper on mobile rather than breaking page layout; alternatively swaps to `accordion` entirely below tablet.
- **Accessibility**: Proper `<table>` semantics with `scope` attributes on headers if the table variant is used; checkmark/dash cells have a text-equivalent (not color/icon-only) per §22.
- **Dependencies**: Accordion (mobile variant), Icon system.
- **Implementation approach**: **Adapt a 21st.dev MCP component.** Base "Table" (`originui`, id 95, "enhanced shadcn table") as the structural foundation — reviewed "Comparison Table" (`ruixen.ui`, id 7469) but it's built around a row-selection/compare-toggle interaction pattern (destructive-styled remove buttons) that doesn't fit a static feature matrix; the plain enhanced table is the better-fitting base to restyle. *What to customize*: add checkmark/dash icon cells per §16, ensure horizontal-scroll containment per §23 ("wide content... must scroll inside its own overflow-x container").

## 6.4 Enterprise CTA

- **Purpose**: The "talk to sales" tier for buyers outside standard pricing tiers.
- **Priority**: Recommended (Pricing page)
- **Variants**: None — a single CTA Card (§4.9) or Pricing Card (§4.8)-shaped slot with contact-sales framing instead of a price.
- **When to use**: End of Pricing Table (§6.1), as an implicit "tier" alongside the priced ones, or as a standalone CTA Card beneath the table.
- **Composition**: CTA Card (§4.9) or Pricing Card (§4.8) variant with "Contact Sales" in place of a numeral price.
- **Responsive behavior**: Same as whichever host component it's composed from.
- **Accessibility**: Same as host component.
- **Dependencies**: CTA Card or Pricing Card.
- **Implementation approach**: **Reuse existing project component** — a content variant of Pricing Card (§4.8) or CTA Card (§4.9), not a new component, per §20.

---

# 7. Forms

## 7.1 Contact Form

- **Purpose**: The `/contact/` page's real lead-capture mechanism.
- **Priority**: Core
- **Variants**: None — one canonical form per the form-system rules in §14.
- **When to use**: Contact page.
- **Composition**: Input Components (§7.5) + Select Components (§7.6, if a "which vertical" field is added) + Submit Button (Primary, §9.1) + Validation States (§7.7).
- **Responsive behavior**: Fields stack single-column at all breakpoints (forms are not a grid-layout use case per §6).
- **Accessibility**: Every field has a visible, programmatically associated label (no placeholder-as-label, per §14); errors announced via `aria-describedby`, not color-only (§22).
- **Dependencies**: Real backend (see below), Input/Select/Validation components.
- **Implementation approach**: **Reuse existing project component, with a mandatory functional rebuild.** `contact.njk`'s mechanics are "functionally reusable" per REDESIGN_STRATEGY.md §2, but the current site's actual Contact page uses an embedded external CRM iframe (CONTENT_SUMMARY.md §9), while the separate in-repo `lead-capture-form.njk` is cosmetic only (`setTimeout`, no real submission — PROJECT_AUDIT.md §6/§12's single biggest functional gap). This component's visual shell can adapt "Contact Form" (`meschacirung`, id 4741) or "Contact 2" (`shadcnblockscom`, id 2199) for the input layout, but **shipping this component requires the real backend work scoped in REDESIGN_STRATEGY.md §9 Phase 1 — it is not complete as a visual reskin alone.**

## 7.2 Demo Request Form

- **Purpose**: A shorter, higher-intent variant of the Contact Form, likely triggered from vertical-page hard CTAs ("Talk to our Education team").
- **Priority**: Recommended
- **Variants**: Shares the Contact Form's field/validation system; distinguished by a shorter field set (name, email, company, vertical — no long message field) and vertical-specific pre-fill/routing.
- **When to use**: Vertical page hard CTAs, per §19's per-vertical closing CTA.
- **Composition**: Same primitives as Contact Form (§7.1), fewer fields.
- **Responsive behavior**: Same as Contact Form.
- **Accessibility**: Same as Contact Form.
- **Dependencies**: Same real backend as Contact Form — must not regress to a second fake form.
- **Implementation approach**: **Reuse existing project component** — a field-count variant of Contact Form (§7.1), sharing the same backend and validation system, not a parallel implementation (avoids recreating PROJECT_AUDIT.md §12's "two independent" pattern problem in form form).

## 7.3 Newsletter Form

- **Purpose**: Lightweight single-field email capture (footer, blog).
- **Priority**: Optional
- **Variants**: `inline` (footer) / `standalone` (dedicated section, if ever used).
- **When to use**: Footer (§8.4), optionally blog sidebar.
- **Composition**: Single Input (email) + Submit Button.
- **Responsive behavior**: Full-width on mobile.
- **Accessibility**: Label present (may be visually hidden if design calls for a placeholder-style compact footer field, but must exist programmatically — the one narrow exception to §14's "no placeholder-as-label" rule must still resolve via `aria-label`, not omission).
- **Dependencies**: Real backend (even a lightweight one — no cosmetic-only forms permitted anywhere per §24's "no dead ends" rule extended to forms).
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Newsletter Signup" (`preetsuthar17`, id 1842) already includes validation and a success message — directly matches §14's requirement for real submission-state handling. *What to customize*: restyle to match Input Components (§7.5) tokens, wire to a real (even simple) email-capture endpoint rather than shipping cosmetic-only.

## 7.4 Input Components

- **Purpose**: The base text/email/textarea field used across all forms.
- **Priority**: Core
- **Variants**: `text` / `email` / `textarea` — one visual treatment per §14 (radius-md, 1px border, white surface, label always visible).
- **When to use**: Inside every form component.
- **Composition**: Label + input element + optional helper/error text slot.
- **Responsive behavior**: Full-width within its form container at all breakpoints.
- **Accessibility**: `<label for>` association, `aria-invalid`/`aria-describedby` wiring for error states (§14/§22).
- **Dependencies**: None.
- **Implementation approach**: **Build custom**, following §14's token spec directly — form inputs are simple enough and specific enough to the exact spacing/border/label rules in §14 that a thin custom component (or a minimal shadcn `Input` primitive, if desired as a base) is more consistent than importing a heavier pre-styled input pattern. If a base is wanted, "The Input" (`felipemenezes098`, id 13232) is worth reviewing for the dropdown-augmented variant only if a combined input+select pattern is ever needed.

## 7.5 Select Components

- **Purpose**: Dropdown selection fields (e.g., "which vertical are you inquiring about").
- **Priority**: Recommended
- **Variants**: `single-select` only — no multi-select needed per current known form requirements.
- **When to use**: Contact Form / Demo Request Form, wherever a bounded-option field is needed.
- **Composition**: Label + trigger (styled to match Input, §7.5, with a custom chevron per §14) + option list panel.
- **Responsive behavior**: Option panel becomes a full-width sheet on mobile if the option count is large; otherwise a standard anchored dropdown.
- **Accessibility**: `listbox`/`option` roles, keyboard navigation (arrow keys, typeahead), correct label association (§22).
- **Dependencies**: Input Components (shared visual treatment).
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "HeroUI Select" (`hero_ui`, id 14305) — built on React Aria, full keyboard support, grouped sections — is the most accessibility-robust option found; the simpler "Select" (`shugar`, id 3673, includes an explicit error-state demo) is a lighter-weight fallback if the richer component is overkill for a single "choose your vertical" field. *What to customize*: restyle chevron/border/radius to match Input Components exactly per §14's "same visual treatment as text inputs" rule.

## 7.6 Validation States

- **Purpose**: Error/success feedback pattern shared across all form fields.
- **Priority**: Core
- **Variants**: `error` (Error token border + icon/prefix + helper text, never color-only per §14/§22) / `success` (Success token border + check icon, used sparingly per §14).
- **When to use**: Inline, below the field, on blur/submit — never on every keystroke (§14).
- **Composition**: Border color change + small icon + helper text line.
- **Responsive behavior**: No structural change.
- **Accessibility**: This is itself an accessibility-driven component — error state must never rely on color alone (§14's explicit requirement), announced via `aria-describedby` and ideally `aria-live` for dynamic validation feedback.
- **Dependencies**: Error/Success color tokens (§4).
- **Implementation approach**: **Build custom** — this is a state layer applied to Input/Select Components (§7.5/§7.6), not a standalone visual component; building it directly against the exact icon+color+text contract in §14 avoids importing a validation pattern that might rely on color alone (a common gap in generic form libraries) and require auditing/fixing anyway.

---

# 8. Footer

## 8.1 Footer

- **Purpose**: Site-wide closing navigation and legal/compliance surface.
- **Priority**: Core
- **Variants**: One canonical mega-footer layout — 4–6 columns per §15.
- **When to use**: Every page, exactly once.
- **Composition**: Footer Navigation (§8.2) + Social Links (§8.3) + Newsletter Form (§7.3) + legal/compliance row.
- **Responsive behavior**: 4–6 columns → 2 columns (tablet) → single stacked column (mobile) per §21.
- **Accessibility**: `footer` landmark, all links resolve to real pages before launch (§24/§15 — no dead links, directly fixing PROJECT_AUDIT.md §5's 12-dead-link finding).
- **Dependencies**: Footer Navigation, Social Links, Newsletter Form.
- **Implementation approach**: **Reuse existing project component, restructured.** `footer.njk` exists and is "mostly static link columns" per PROJECT_AUDIT.md §5 — the content/IA restructuring (categorize by vertical/resource/company per REDESIGN_STRATEGY.md §3) is a data change, not a rebuild-from-scratch. As a visual/structural reference, "Footer 7" (`shadcnblockscom`, id 2223, "menu links, logo, social, copyright and legal") most closely matches the target shape and can inform the restyle, but the underlying partial and its link data should be reused and corrected, not replaced wholesale — most of the work here is fixing the 12 dead links (§15/§24), not rebuilding markup.

## 8.2 Footer Navigation

- **Purpose**: The categorized link columns within the Footer.
- **Priority**: Core
- **Variants**: Categorized by vertical / resource / company per REDESIGN_STRATEGY.md §3 (replacing the current flat structure).
- **When to use**: Inside Footer (§8.1).
- **Composition**: Column heading (Label Pill weight/size, not literal pill shape) + Text Link list.
- **Responsive behavior**: Column count steps down per §8.1's Footer responsive rule.
- **Accessibility**: Each column is a labelled navigation region or at minimum a heading + list, not an unlabelled div soup.
- **Dependencies**: Restructured `navigation.json` or a dedicated footer-links data file.
- **Implementation approach**: **Reuse existing project component** — the link-column pattern already exists in `footer.njk`; only the category grouping and link resolution (fix-or-prune the 12 dead links) changes.

## 8.3 Social Links

- **Purpose**: Social platform icon links.
- **Priority**: Optional
- **Variants**: Icon-only, standard size per §16.
- **When to use**: Inside Footer (§8.1).
- **Composition**: Icon Button (§9.5) per platform.
- **Responsive behavior**: No structural change.
- **Accessibility**: Each icon has an accessible label (platform name), and per §24/§15's no-dead-ends rule, `href="#"` placeholders (current state per PROJECT_AUDIT.md §5, all but LinkedIn) must resolve to real profiles or be removed — not shipped as placeholders.
- **Dependencies**: Icon Button.
- **Implementation approach**: **Reuse existing project component**, content-corrected (remove placeholder `href="#"` links per §24, keep the confirmed LinkedIn link).

## 8.4 Newsletter *(see §7.3 — cross-referenced, not duplicated)*

---

# 9. Shared Components

## 9.1 Buttons

- **Purpose**: The universal action-trigger primitive.
- **Priority**: Core
- **Variants**: Primary / Secondary / Ghost / Text-Link / Icon Button — exactly the five defined in MASTER_DESIGN_SPEC.md §12, no others.
- **When to use**: Per §12's per-variant guidance (Primary: one per section max; Secondary: paired soft CTA; Ghost: low-emphasis in-card actions; Text/Link: inline content links; Icon Button: utility-only, never primary conversion).
- **Composition**: N/A (base primitive).
- **Responsive behavior**: Sizes (sm/md/lg) map to spacing scale per §12; stacks vertically when paired on mobile.
- **Accessibility**: Visible focus ring (brand green, §22), disabled state has no hover response, loading state retains the label (§12).
- **Dependencies**: None.
- **Implementation approach**: **Adapt a 21st.dev MCP component.** Base "Button" (`originui`, id 143, "enhanced shadcn/ui button," includes an arrow-down variant relevant to §12's "trailing arrow on Learn-more links" rule) or the simpler "Button" (`shugar`, id 3824, rounded variant already close to `radius-pill`). *Why*: buttons are the highest-leverage, most-reused primitive in the system — starting from a well-tested accessible base (focus states, disabled states, keyboard activation already handled) is lower-risk than a full custom build. *What to customize*: constrain to exactly the five §12 variants (reject any "particle"/decorative animated button variants reviewed, e.g., `kokonutd`'s Particle Button — violates §18's restrained-motion philosophy), enforce `radius-pill` only on Primary/Secondary, `radius-md` or none on Icon Button, brand-green fill token on Primary only.

## 9.2 Icons

- **Purpose**: Supporting visual system per §16.
- **Priority**: Core
- **Variants**: Single-weight line/outline style, 1.5–2px stroke, sizes 16/20/24/32px only.
- **When to use**: Inline-with-text, buttons, card headers, feature illustration — per §16's context-to-size mapping.
- **Composition**: N/A (base primitive, SVG).
- **Responsive behavior**: Fixed sizes per context; does not scale fluidly.
- **Accessibility**: Decorative by default (`aria-hidden`); meaningful icons get an accessible label (§16/§22).
- **Dependencies**: None.
- **Implementation approach**: **Reuse existing project component**, hardened. `nav-icon.njk`'s 20+ SVG icon switch/case (PROJECT_AUDIT.md §5) is a workable foundation but must be audited against §16's single-consistent-stroke-weight rule (the audit flags mixed sources as a live risk) — treat any icon whose stroke weight doesn't match the set as a defect to fix, not a new external icon-set migration. Only source new icons from 21st.dev/other libraries if a genuinely missing icon is needed, and match stroke weight exactly when doing so.

## 9.3 Badges / Chips / Labels

- **Purpose**: The category-label-pill pattern used as a section eyebrow, industry tag, or status indicator.
- **Priority**: Core
- **Variants**: `label-pill` (uppercase micro-label, wide tracking per §5 — the one place uppercase+tracking is permitted) — treat "Badges," "Chips," and "Labels" as one component with content-driven differences (a badge marking a card category vs. a chip marking a filter state), not three separate visual systems, per §11's consistency rule.
- **When to use**: Section eyebrows (§3.1), Industry Card category tags (§4.2), Filter pills (§5.7).
- **Composition**: Text (Small/Caption style, §5) inside a `radius-pill` container, pale-green-tint background per §4's "Accent (supporting)" token.
- **Responsive behavior**: No structural change; wraps to a new line as a unit, never mid-word.
- **Accessibility**: If interactive (e.g., a filter chip), must be a real button with clear pressed/selected state, not a styled span with a click handler.
- **Dependencies**: None.
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Pill" (`haydenbleasel`, id 1600) as the base shape, or "Badge" (`shugar`, id 3594, explicit pill variant) — both minimal enough to restyle directly. *What to customize*: enforce the single pale-green-tint background (§4's "must always derive from the primary green scale, not introduce a new hue" rule) — reject any multi-color badge variant set from the source components (e.g., destructive/warning color variants) except where those map directly to the sanctioned Success/Warning/Error tokens in form Validation States (§7.7), never as decorative category colors.

## 9.4 Avatars

- **Purpose**: Author/team member representation (blog author cards, team page), and social-proof avatar clusters if ever used.
- **Priority**: Optional
- **Variants**: `single` / `group` (stacked, e.g., a small "N people at this company" cluster — only where backed by real data, never a decorative stock-avatar cluster per §24's anti-fabrication guardrail extended to imagery).
- **When to use**: Author Cards (existing `author-cards.njk`), Team page.
- **Composition**: Circular image with fallback initials.
- **Responsive behavior**: Group avatars overlap consistently; count truncates with a "+N" indicator past a fixed max.
- **Accessibility**: Alt text with the person's name; fallback initials are still programmatically meaningful, not just visual.
- **Dependencies**: `authors.js` / `team.js` data.
- **Implementation approach**: **Reuse existing project component** (`author-cards.njk`, PROJECT_AUDIT.md §5) for the single-avatar case, restyled. **Adapt a 21st.dev MCP component** only if a group-avatar cluster is newly needed: "Avatar Group" (`preetsuthar17`, id 1923) or the base "Avatar" (`shadcn`, id 707) as a fallback-with-initials primitive.

## 9.5 Icon Button

- **Purpose**: Utility-only actions (close, menu toggle, carousel prev/next) — never a primary conversion action per §12.
- **Priority**: Core
- **Variants**: `square` (`radius-md`) / `round` (fully round) — per §12.
- **When to use**: Modal close (§5.4), Mobile Nav trigger (§1.3), Case Study Carousel prev/next (§3.11).
- **Composition**: Icon (§9.2 / §16) + accessible label, no visible text.
- **Responsive behavior**: Touch target padded to 44×44px minimum below desktop regardless of visual icon size (§21).
- **Accessibility**: Mandatory `aria-label` since there's no visible text — this is explicitly called out in §12/§16 as the one place icon-only is acceptable, but only with a label.
- **Dependencies**: Icon system (§9.2).
- **Implementation approach**: **Reuse existing project component** — this is a Button (§9.1) variant, sourced from the same adapted base, not a separate component.

## 9.6 Dividers

- **Purpose**: Fine-grained internal separation within a single component (list rows) — never between major sections, per §4's explicit rule ("section separation is whitespace + background-tint, not a rule line").
- **Priority**: Optional
- **Variants**: `hairline` only, lighter weight/opacity than the Border token per §4.
- **When to use**: Inside a single component only — e.g., separating rows in Feature Comparison (§7.3), or list items within a dropdown panel.
- **Composition**: N/A (single style rule).
- **Responsive behavior**: None.
- **Accessibility**: Purely decorative — `aria-hidden` or a semantic `<hr>` if it carries real document-structure meaning.
- **Dependencies**: Border token (§4).
- **Implementation approach**: **Build custom** — a single CSS utility class, not a component requiring external sourcing.

## 9.7 Section Headers *(see §3.1 — cross-referenced, not duplicated)*

## 9.8 Empty States

- **Purpose**: Zero-result feedback (e.g., a Filters (§5.7) result with no matches, a Search (§5.6) with no results).
- **Priority**: Optional
- **Variants**: `no-results` (search/filter) / `no-content-yet` (a genuinely empty section — should be rare given §24's "no dead ends, no coming-soon" rule, but may apply to e.g. a not-yet-populated blog category).
- **When to use**: Wherever a Filters or Search component can return zero results.
- **Composition**: Short message + optional icon + optional action (e.g., "clear filters").
- **Responsive behavior**: Centered, contained within the same layout region the results would have occupied.
- **Accessibility**: Announced via `aria-live` when it appears as a result of a user action (filter/search), so screen-reader users aren't left wondering if the action worked.
- **Dependencies**: Filters (§5.7) or Search (§5.6), if either ships.
- **Implementation approach**: **Build custom** — small enough (message + optional icon + optional action) that this doesn't warrant sourcing externally; build directly once Filters/Search are scoped in.

## 9.9 Loading States

- **Purpose**: In-progress feedback for async actions (form submission, content fetch).
- **Priority**: Recommended
- **Variants**: `button-spinner` (inline within Buttons, §9.1, §12's loading state) / `skeleton-block` (content-shape placeholder matching the final content's shape/radius, per §18).
- **When to use**: Form submission (§7.1's real backend, §14), any progressively-rendering content.
- **Composition**: Spinner icon (button variant) or a shaped placeholder block (skeleton variant).
- **Responsive behavior**: Skeleton blocks match their final content's responsive dimensions exactly, to avoid layout shift (§23's explicit rule).
- **Accessibility**: `aria-busy` on the loading region; spinner is decorative (`aria-hidden`) with a text-equivalent status update for screen readers (e.g., a visually-hidden "Submitting…" live-region message).
- **Dependencies**: None.
- **Implementation approach**: **Adapt a 21st.dev MCP component.** "Skeleton" (`shugar`, id 1767) as the base placeholder primitive — simple, purpose-built, no reason to hand-roll. *What to customize*: match placeholder shape/radius exactly to the real content it stands in for (§18's explicit requirement), avoid the more decorative "shimmer" skeleton variants unless the shimmer itself is confirmed as acceptable motion under §18's credibility bar (a subtle shimmer is defensible as feedback; anything flashier should be trimmed). Button-spinner state is built directly into the Buttons component (§9.1), not sourced separately.

---

# 10. Component Architecture

How the categories above compose into full sections and pages, illustrated through the homepage template (§19 of the design spec) as the representative case:

```
Homepage
├── Navbar (§1.1)
│   └── Mega Menu (§1.2) / Mobile Navigation (§1.3)
├── Hero — homepage-hero variant (§2.1)
│   └── Hero Visual (§2.2, abstract-gradient variant)
├── Industry Showcase (§3.5)
│   ├── Tabs (§1.5, pill-tabs)
│   └── Industry/Vertical Card (§4.2) × 4
│       └── Statistic Card (§4.4)
├── Platform Framing Strip — CTA Banner `glass` variant (§2.6, revised 2026-07-26 — was `dark`)
├── Trust Bar (§2.4) / Logo Cloud (§2.5)
├── Case Studies (§3.11, carousel variant)
│   └── Statistic Card (§4.4)
├── Outcome Feature Block (Content composition of §3.1 Section Header + §2.2 Hero Visual)
├── Testimonials (§3.9, once quotes exist)
│   ├── Tabs (§1.5, logo-tab variant)
│   └── Testimonial Card (§4.5)
├── Blog Card (§4.6) repeater — content teaser grid
├── CTA Banner (§2.6) — dual closing CTA
└── Footer (§8.1)
    ├── Footer Navigation (§8.2)
    ├── Social Links (§8.3)
    └── Newsletter Form (§7.3)
```

**The pattern to notice**: only a small set of primitives (Card, Button, Tabs, Label Pill, Statistic Card) recur across almost every section — this is deliberate. Per §11's reusability principle, a new page or section should first be checked against this composition tree before any new component category is proposed. A vertical page (Education/Agencies/Healthcare/Real Estate) follows the same tree shape with different content and one substitution: Industry Showcase is replaced by a single Industry/Vertical Card instance functioning as the page's own flagship-proof section, per the §19 vertical-page template.

---

# 11. Reusability Strategy

## Reuse from the existing project

- **Navbar, Mobile Navigation** (`header.njk`'s Alpine state machine) — scroll-hide, dropdown state, `navigation.json` binding are sound engineering per PROJECT_AUDIT.md §5; only markup/visuals rebuild.
- **FAQ** (`cta-faq.njk`) — explicitly the best-factored, most reusable partial in the current codebase; it is the template for how every other component in this library should be authored (parameterized, dual-theme, no page-specific forking).
- **Footer, Footer Navigation, Social Links** — mostly a content/IA correction (categorize by vertical, fix 12 dead links), not a rebuild.
- **`picture.njk`** — genuinely reusable, framework-agnostic responsive-image pipeline; underlies Hero Visual, Blog Card, and any product-screenshot usage.
- **Accordion interaction** (`@alpinejs/collapse`) — already the right tool, already in the stack; do not introduce a second accordion library.
- **Icon system foundation** (`nav-icon.njk`) — workable base, needs a stroke-weight consistency audit rather than a rebuild.
- **`analytics.js` `data-track` convention** — every new interactive/CTA component in this library should wire into it from day one (currently under-adopted per PROJECT_AUDIT.md §6), rather than repeating the current gap.

**Reasoning**: PROJECT_AUDIT.md's central finding is that Zunkiree's data layer, build/deploy pipeline, and several specific partials are genuinely well-architected — the redesign's job is to stop them from being undermined by inconsistent visual treatment (§9 of that audit: "three competing style systems"), not to re-derive working logic from scratch. Reusing these means the redesign's engineering risk stays concentrated where it actually needs to be: the monolithic, visually-entangled templates (`index.njk`, `product.njk`, `service.njk`).

## Adapt from 21st.dev MCP

Components where a real, catalog-verified 21st.dev component solves a structurally standard, low-differentiation UI pattern that would otherwise cost real build time to re-derive: **Mega Menu, Breadcrumb, Hero (shell), Announcement Banner, Logo Cloud, Feature Grid, Statistics, Testimonials (shell), Modal, Tooltip, Search/Command Palette, Pricing Table, Pricing Toggle, Feature Comparison (table base), Newsletter Form, Select Components, Buttons (base), Badges/Pills, Loading States (skeleton)**.

**Reasoning**: per the brief's own criteria, these are exactly the cases where "no significant customization" beyond design-token restyling is required, and a proven, already-accessible base (correct ARIA roles, keyboard handling, focus management) reduces real implementation risk versus a from-scratch build — particularly for components with non-trivial interaction logic (mega menu keyboard nav, modal focus trapping, accessible select). In every case above, the customization required is explicitly about *stripping* the source component down to MASTER_DESIGN_SPEC.md's restraint principles (§1/§24) — removing decorative hover effects, multi-color variant sets, or auto-scroll behaviors that a typical 21st.dev component ships with by default but that conflict with Zunkiree's one-accent-color, no-idle-animation system.

## Build custom

**Tabs (industry/capability switcher), Industry Showcase, Industry/Vertical Card, Case Studies/Carousel, How It Works, Section Header, Input Components, Validation States, Dividers, Empty States, device-frame wrapper for Hero Visual/screenshots**.

**Reasoning**: these fall into the brief's explicit build-custom triggers — either they represent unique product/storytelling functionality (Industry Showcase and Industry Card are the literal structural expression of Zunkiree's core repositioning strategy per REDESIGN_STRATEGY.md §1, not a generic UI pattern), or they're small enough and tightly enough coupled to exact design-spec token values (Section Header, Input Components, Dividers) that adapting an external component would cost more effort in stripping/reconciling than building directly against the token system.

---

# 12. Component Standards

Universal implementation rules, restating MASTER_DESIGN_SPEC.md's tokens as enforcement requirements for every component built or adapted from this library:

- **Spacing**: every margin/padding/gap value must map to a `space-*` token (§7 of the design spec). No arbitrary pixel values — this includes values inherited from an adapted 21st.dev component, which must be re-mapped to the token scale during customization, not left at the source's own spacing.
- **Typography**: only the 6-step type scale (§5) and weights 400/500/600 — any adapted component shipping a 700+ weight heading (several 21st.dev sources default to bold) must be downgraded during adaptation.
- **Colors**: one brand-green (`#76B900`) persuasion accent system-wide, plus `sky` as the one sanctioned non-persuasion exception (glass-surface tint / secondary data-status differentiation only — never CTAs or links) per MASTER_DESIGN_SPEC.md §4 (2026-07-26 revision) — any adapted component's other multi-color variant set (destructive reds, warning yellows used decoratively rather than for real form validation, secondary purple/orange accents) must be stripped to the sanctioned token set before shipping.
- **Border Radius**: `radius-md` (8–10px) default and for **buttons** (§8/§12 — buttons moved off `radius-pill` in the 2026-07-21 hero revamp), `radius-lg` (14–28px) for large surfaces/outer frame containers, `radius-pill` (999px) reserved for pill-shaped labels/tags only, not buttons (§8) — no component ships with a different radius value, including 21st.dev sources' own defaults.
- **Shadows**: only `elevation-0` through `elevation-3` (§9) — glass-surface components (§3 technique 2) rely on their own translucency/blur for separation and stay at `elevation-1` max, never a heavier shadow layered on top (§9's revised 2026-07-26 rule, superseding the retired "dark-background components use ambient gradient blur instead of shadow" guidance).
- **Motion**: every animation justifies itself against "supports credibility, doesn't perform for attention" (§18) — this is the single most common adaptation point across the "Adapt a 21st.dev" entries above, since many source components default to scale/hover/shimmer effects the design spec explicitly forbids.
- **Responsiveness**: every component must be verified at all four breakpoints in §21, with the specific step-down behavior defined per component category (single-column stack, 4→3→2→1 repeaters, etc.) rather than an ad hoc collapse.
- **Accessibility**: every component meets §22 in full before being considered complete — this is not optional per-component; the Design Review Checklist in §25 of the design spec applies to every entry in this library without exception.

---

# 13. Implementation Roadmap

Recommended build order, and why:

**1. Foundational components** — Buttons (§9.1), Icons (§9.2), Badges/Pills (§9.3), Section Header (§3.1), Input Components (§7.4), Validation States (§7.6), Dividers (§9.6).
*Why first*: every other component in every later category composes from these. Getting the token mapping right here (spacing, radius, color, type) once means every downstream component inherits correctness rather than needing its own audit later — directly serves §1's "systemized, not custom" principle and prevents the token drift PROJECT_AUDIT.md §9 found in the current codebase.

**2. Navigation** — Navbar (§1.1), Mega Menu (§1.2), Mobile Navigation (§1.3), Breadcrumb (§1.4), Tabs (§1.5).
*Why second*: navigation is present on every single page, so it blocks nothing else from starting once foundational tokens exist, and getting the industry-first mega-menu right early (REDESIGN_STRATEGY.md §6's central IA decision) de-risks the biggest structural change in the whole redesign before content-heavy work begins.

**3. Shared UI components** — Avatars (§9.4), Icon Button (§9.5), Loading States (§9.9), Empty States (§9.8), Tooltip (§5.5).
*Why third*: these are cross-cutting utility components with no page-specific content dependency; building them now means Forms, Interactive, and Marketing components (which reference several of these) aren't blocked waiting on a shared dependency later.

**4. Marketing sections** — Hero (§2.1), Hero Visual (§2.2), Logo Cloud (§2.5), Trust Bar (§2.4), CTA Banner (§2.6), Announcement Banner (§2.3).
*Why fourth*: the homepage rebuild (REDESIGN_STRATEGY.md §9 Phase 2, already in progress via `homepage-v2.njk`) is the highest-visibility deliverable and depends on this category being ready; sequencing it right after foundational + nav means the homepage can start as soon as this phase completes rather than waiting on content-section or interactive-component work it doesn't need yet.

**5. Content sections** — Feature Grid (§3.2)/Benefits (§3.3), Statistics (§3.8)/Statistic Card (§4.4), Industry Showcase (§3.5)/Industry Card (§4.2), Case Studies (§3.11), Testimonials (§3.9)/Testimonial Card (§4.5), FAQ (§3.10), How It Works (§3.4), Blog Card (§4.6).
*Why fifth*: this is the largest category and the one most tied to real content availability (real client proof, real stats) — sequencing it after Marketing means the homepage's structural shell (built in phase 4) is already validated and these sections can slot into a proven layout rather than being designed in a vacuum. Industry Showcase specifically should be built early within this phase since it's the literal core of REDESIGN_STRATEGY.md's repositioning and unblocks Phase 3 (vertical pages) in the content roadmap.

**6. Interactive components** — Accordion (§5.1, already largely covered via FAQ), Modal (§5.4), Carousel (§5.3), Filters (§5.7), Search (§5.6, if scoped).
*Why sixth*: these add interaction depth on top of content sections that must already exist (a Modal needs something to display; a Carousel needs Case Studies content) — building them before their host content exists would mean designing against placeholder data, risking the exact "fabricated proof" problem §24 explicitly forbids.

**7. Page-specific components** — Pricing Table/Toggle/Feature Comparison/Enterprise CTA (§6, Pricing page only), Contact Form/Demo Request Form real backend (§7.1/§7.2), page-specific compositions for About/Careers/Team.
*Why last*: these are the narrowest-scope components (single-page usage) and, in the Contact/Demo Request Form case, the highest-effort non-visual item in the entire roadmap (the real backend, flagged as the single biggest functional gap in REDESIGN_STRATEGY.md §9 Phase 1 and §2's "what to replace" list) — sequencing the backend work in parallel with, not blocking, the visual component rollout above means the redesign's visible progress isn't gated on backend engineering, while still ensuring it ships before any new high-intent CTA (industry-page hard CTAs) goes live pointing at it.

**Cross-cutting note**: Phase 0 of REDESIGN_STRATEGY.md §9 (resolving the IA/Dental-AI/non-core-vertical open decisions with Sadin) gates the *content* going into Navigation (phase 2) and Content sections (phase 5) above — this roadmap assumes those decisions land before phase 2 begins, consistent with that document's own sequencing rationale.
