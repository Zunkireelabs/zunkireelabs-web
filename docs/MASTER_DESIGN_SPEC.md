# Master Design Spec — Zunkiree Labs

**Status**: Single source of truth for all future visual and frontend implementation decisions.
**Inputs**: [DESIGN_AUDIT.md](./DESIGN_AUDIT.md) (Kore.ai visual teardown), [PROJECT_AUDIT.md](./PROJECT_AUDIT.md) (engineering architecture), [CONTENT_SUMMARY.md](./CONTENT_SUMMARY.md) (messaging/content), [REDESIGN_STRATEGY.md](./REDESIGN_STRATEGY.md) (sequencing/strategy)
**Design benchmark**: Kore.ai (adapted to Zunkiree's own brand — not copied)
**Brand color**: `#76B900`
**Date**: 2026-07-20
**Updated**: 2026-07-26 — global single-background system adopted (Linear/Stripe/Vercel/GitHub/Kore.ai-inspired). Dark section punctuation and the page-wide SVG hero ribbon are retired in favor of one flat background everywhere. The sky-tinted glass-card technique is the one sanctioned exception, kept by explicit decision. Layout container widths and responsive spacing values are unchanged (kept at their kore.ai-measured values, not the generic 1280px/120px reference numbers from the global spec).
**Updated**: 2026-07-28 — the "single flat background" token is corrected from `#F8FAFC` to **pure white `#ffffff`**, matching the actual shipped homepage-v2 implementation (`hideChrome: true` resolves to a `bg-white` `<body>`, and no section in `homepage-v2.njk` overrides it with a `#F8FAFC` tint). `#F8FAFC` was the originally *specced* value but was never the value actually built against — this doc now documents the real, shipped color so new pages don't reintroduce a background/card mismatch. Since page background and default card background are now the *same* white, card separation depends entirely on the hairline border + shadow (§3/§9/§13) — never on a background-tint step between page and card. See §4/§13 for the corrected card-color guidance.

> This document defines the *system*: principles, tokens, and rules. It does not contain UI mockups or code. Every future page, component, or visual decision should be checkable against this document. If a decision isn't covered here, it should be added here before it's implemented — not decided ad hoc in a template.

---

## 1. Design Philosophy

### Core principles

1. **Restraint over decoration.** One accent color, one radius family, one shadow treatment, one gradient motif — reused everywhere rather than invented per page. Per DESIGN_AUDIT.md §19, systemization is what reads as "expensive"; variation reads as unfinished.
2. **Proof over adjectives.** Layouts are built to hold evidence (client names, real screenshots, named outcomes) as the primary persuasion mechanism, not superlative copy. This is a structural requirement, not a copywriting note — it means every page template must have a place for proof, and no page should rely on hero copy alone to build trust.
3. **Calm confidence.** Nothing on the site should feel like it's trying to close the visitor in the first three seconds. Whitespace, restrained type weight, and unhurried section pacing communicate that Zunkiree isn't afraid of scrutiny — a page that isn't cramped signals a company that isn't hiding anything.
4. **One idea per section.** Each section makes exactly one point (per DESIGN_AUDIT.md §2's "trust ladder" structure) and gives it room. Sections are stacked vertically as a single-column macro rhythm; multi-column layout only happens *inside* a section (card grids, logo walls), never at the section level.
5. **Systemized, not custom.** Every visual decision — a card, a button, a spacing value — must trace back to a token or rule defined in this document. Page-specific one-off styling is the failure mode this spec exists to prevent (see PROJECT_AUDIT.md §9's "three competing style systems" finding — this must not recur).

### Overall visual direction

Enterprise SaaS restraint, not startup maximalism: near-white and near-black surfaces punctuated by a single confident accent color, soft ambient gradient blooms for atmosphere (never for legibility-competing decoration), real product screenshots over illustration, and a type scale disciplined enough to count on one hand.

### UX principles

- **Self-identification before persuasion.** A visitor should be able to tell within one interaction (an industry tab, a nav choice) whether the site is "for them" — mirrors the industry-first IA in REDESIGN_STRATEGY.md §6.
- **Trust ladder ordering.** Every top-level page follows: segment → show proof → show capability → show platform credibility → convert. No page opens with a hard CTA before it has earned one.
- **Segmented conversion.** Hard CTA + soft CTA, paired, everywhere a CTA appears — never one universal "Book a Demo" with no lower-commitment alternative.
- **No dead ends.** Every interactive element resolves to something real. No placeholder links, no fabricated logos, no "coming soon" language dressed as a finished section.

---

## 2. Brand Personality

### Brand attributes

Premium · Enterprise · Modern · Minimal · Trustworthy · AI-first · Scalable · Consistent

### Tone

Direct, unhedged, production-confident. Per CONTENT_SUMMARY.md §10, the existing "X, not Y" contrast-headline voice (*"Most AI is a wrapper. We build the infrastructure."*) is a genuine brand asset — it should continue as a supporting/platform-layer voice pattern, subordinate to industry-first proof claims on core pages. The visual system should match this tone: confident through restraint, not through volume.

### Emotional experience

A visitor should feel like they've landed on a system that already works — calm, current, engineered. Not excited-startup energy; not cold-corporate distance either. The emotional register is closer to "relief" (this vendor clearly has their act together) than "excitement" (flashy, novel, unproven).

### Visual identity

- **One accent color** (`#76B900`) used deliberately and sparingly — roughly **5–10% of the interface**, never as a full-section wash, large heading, or paragraph text; always as a signal (CTA, active nav state, badge, checkmark, success indicator, link/interactive state). The interface stays 90–95% neutral.
- **One recurring signature motif** *(revised 2026-07-26 — supersedes the dark-card-with-gradient-bloom motif below)*: the **glass surface** (§3 technique 3) — a translucent, sky-tinted card lifted off the flat page background — is now the platform/flagship framing device, reused at a controlled frequency (2–4 instances per major page) so it reads as a brand device, not a random effect. The dark-card + gradient-bloom motif is retired; see §3/§4/§10 for the retirement of dark section backgrounds sitewide.
- **Real software, shown politely** — actual product screenshots in soft device frames wherever the product is being proven, never raw unframed screenshots and never generic stock illustration standing in for product truth.

---

## 3. Visual Language

### Overall aesthetic — REVISED 2026-07-26, background value corrected 2026-07-28

**One flat background color across the entire site: pure white `#ffffff`** *(corrected 2026-07-28 — the originally-specced `#F8FAFC` was never what shipped; homepage-v2's actual `<body>` resolves to `bg-white`, and this doc now matches the built site rather than an unbuilt intent)*. This supersedes the prior 80–85% light / 10–20% dark punctuation ratio — dark section backgrounds (platform strip, partner/proof cards, final CTA) are retired sitewide. No gradients, mesh gradients, colorful blobs, glowing backgrounds, noisy textures, or per-section color washes. The background stays identical from hero to footer; depth and "new section" signaling now come entirely from spacing (§7), typography (§5), and component hierarchy (cards, elevation, glass surfaces) — never from a background color/tint change.

Because page background and default card background are now the **same white**, card separation is carried entirely by the hairline border + shadow pair below — there is no background-tint step between "page" and "card" to lean on. Do not reach for a pale off-white (`#F8FAFC`, `#f9fafb`, etc.) as a card or section surface "for contrast" — that reintroduces the alternating-background pattern this spec retires. If a surface needs to visually separate from the page, use `elevation-1`/`elevation-2` (§9) or the glass-surface technique below, not a bg-color shift.

### Depth and layering — REVISED 2026-07-26, background value corrected 2026-07-28

Depth comes from two techniques only, applied consistently:

1. **Soft elevation** — hairline border (`border-navy-100` or `warm-border`, ~`#e4ecf1`) + low-opacity, large-blur shadow (`shadow-subtle` default, `shadow-card`/`shadow-md` for larger feature cards), used to lift opaque white cards a few pixels off the flat white page background. Since card and page are the same white, the border is load-bearing here — never omit it in favor of shadow alone. Never a hard, tight drop shadow.
2. **Glass surface** *(added 2026-07-26, confirmed in homepage-v2 build; retained by explicit decision as the one sanctioned exception to the flat-background rule)* — a translucent white card (`bg-white/10`–`/40`, hairline `border-white/60`, `backdrop-blur-md`) over a soft sky-tinted gradient fill (`from-sky-100/70 via-sky-50/30 to-white/40`), used for feature/dashboard cards that need to feel "lifted off" the page's flat background without a shadow. The sky tint is scoped strictly to *inside* the card surface — it never extends to a full-bleed section background (see §10, "Industry Showcase full-bleed wash" retirement). Always pairs with `shadow-subtle` (`elevation-1`), never a heavier elevation.

**Retired 2026-07-26**: the prior "ambient gradient blur behind dark sections/cards" technique — dark sections no longer exist, so this technique has no surface to apply to. No other depth technique (skeuomorphic bevels, hard drop shadows, harsh borders, ambient background blooms) is permitted — depth must always resolve to one of the two techniques above.

### Balance

Left-aligned text blocks are the default reading rhythm, even when paired with centered or right-aligned imagery (per DESIGN_AUDIT.md §2 — this reads as "considered document," not "marketing poster"). Centered text is reserved for narrow, standalone moments (a pull-quote, a single-CTA closing band) — never the default for a full section.

### Visual hierarchy

Hierarchy is built from four levers, in this priority order: (1) whitespace/position, (2) type size, (3) type weight, (4) color. Color is the *last* lever, not the first — a section should be scannable in grayscale before color is added.

### Whitespace philosophy

Whitespace is the single largest lever for the "premium" feel (DESIGN_AUDIT.md §18) and is treated as a functional requirement, not a nicety:

- Content should occupy roughly 40–60% of a section's vertical band on desktop; the rest is intentional breathing room.
- Card grids use wide gutters — never edge-to-edge packing.
- Text blocks favor short line length (8–14 words/line for headlines, ~60–75 characters for body) over dense paragraphs.

---

## 4. Color System

Brand accent `#76B900` replaces the prior "zunkiree sage" token as the system's single **action/persuasion** accent color. The existing `navy` scale is the primary dark/text-neutral family. One *persuasion* accent color, full stop, used for roughly **5–10% of the interface** — primary CTAs, active nav states, small badges, icons, checkmarks, success indicators, links/interactive states. Never for large backgrounds, section backgrounds, hero backgrounds, large headings, paragraph text, or decorative elements. The interface stays **90–95% neutral**.

**Sky — reinstated as a sanctioned secondary tonal token, scope narrowed 2026-07-26:** `sky` is used in one specific, non-persuasive role and must stay scoped to it:
1. **Glass-surface tint only** — the gradient fill *inside* every glass card (§3 technique 3: `from-sky-100/70 via-sky-50/30 to-white/40`). This is atmosphere/surface for a card, not a call-to-action color — it never appears on a button, link, or anything meant to be clicked.
2. **Secondary data/status differentiation** — distinguishing a second data series or non-primary status state from the brand-green one in dashboards and badges (e.g. the "Agent" scatter-plot series vs. the "Search" series, a `Running` status badge vs. a `Completed` one). Brand green always remains the "this is the important/active one" signal; sky marks "this is the other one," never the primary action.

**Retired 2026-07-26**: the full-bleed pale section wash (`bg-sky-50`) previously used behind the Industry Showcase. A full-section background tint — even a pale, non-persuasive one — conflicts with the single flat `#ffffff` background rule (§3/§10). The Industry Showcase now sits on the same flat background as every other section; sky is confined to the inside of glass-card surfaces only.

This does not reopen the door to arbitrary second accents — sky is the *one* permitted exception, reserved strictly for glass-card-surface tint and secondary data/status differentiation, and no other new hue may be introduced the same way without amending this document first.

| Semantic role | Token | Usage guidance |
|---|---|---|
| **Primary** | `#76B900` (brand green) | Primary CTA buttons, active tab/nav states, key data highlights, focus rings, links on dark backgrounds. Never a full-section background wash — always foreground or accent-scale use. |
| **Primary (hover/pressed)** | Darkened step of primary (~15–20% darker) | Hover/active states on primary buttons and links only. |
| **Secondary** | Navy-900 / near-black (`#1b3139`-family) | Primary heading text on light backgrounds only. *(Retired 2026-07-26: "dark section backgrounds" use case — platform strip, proof cards, and final CTA no longer use dark backgrounds; see §3/§10.)* |
| **Accent (supporting)** | One neutral-cool gray, used only as a tint inside the primary green family (e.g., a pale green-50/100 tint) for badges, pills, subtle highlight backgrounds — not a second hue. | Category label pills, subtle info highlights. Must always derive from the primary green scale, not introduce a new hue. |
| **Success** | Existing `success` scale (`#10b981` family) | Form success states, confirmation messaging only. Distinct from primary green — do not conflate "brand green" with "success green" in the same component; differentiate by context (a filled CTA vs. a status badge). |
| **Warning** | Existing `warning` scale (`#f59e0b` family) | Form/validation warnings only. |
| **Error** | Existing `error` scale (`#ef4444` family) | Form/validation errors only. Never used decoratively. |
| **Background (page)** | **`#ffffff`** *(corrected 2026-07-28 — was specced as `#F8FAFC` on 2026-07-26, but the shipped homepage-v2 `<body>` is `bg-white`; this row now documents the actual built value, not the unbuilt intent)* | The **only** background color used anywhere on the site — hero through footer, every section, every page. No exceptions, no alternate tint, no gradient. |
| ~~Background (section alt)~~ | *(Retired 2026-07-26)* | Section alternation (white ↔ pale ↔ dark) is retired. New sections are signaled by spacing/typography/component hierarchy only (§3, §7) — never a background-color change. |
| **Surface (card)** | White (`#ffffff`) *(clarified 2026-07-28 — identical to page background by design, not a distinct "off-white" tone)* | Card, modal, input, dropdown surfaces sitting on top of the flat page background. Since surface and page share the same white, a card is **never** identifiable by background color alone — it must always carry the Border token below plus an elevation shadow (§9). A card built with white-on-white and no border/shadow is a defect, not a valid "flat" variant. |
| **Surface (hover)** | `#f8fafc` (`--card-hover` in `main.css`) | Reserved narrowly for a card's own hover/active background shift (e.g. a clickable list-row card darkening slightly on hover) — this is a state change on one component instance, not a base page/section/card background. Do not use this value as a resting-state background for any new surface. |
| **Border** | `warm-border` / `cool-border` (pale blue-gray, ~`#e4ecf1`) / `border-navy-100` | Card hairlines, input borders, dividers between unrelated elements. Always low-contrast — borders differentiate, they don't decorate. On a white-on-white card, this border is the primary separation signal, not a secondary one — never drop it to `border-transparent` for a "cleaner" look. |
| **Divider** | Same family as Border, lighter weight/opacity | Used only inside a single component (e.g., separating list rows), never between major sections — section separation is whitespace alone now (background-tint separation is retired, see above). |
| **Text Primary (Heading)** | `#111827` | Headlines only (H1–H3). |
| **Text Body** | `#374151` *(updated 2026-07-26 — reassigned from the retired "Text Secondary" role to primary paragraph/body copy, per the new global type-color spec)* | Primary paragraph/body copy. |
| **Text Secondary** | `#6B7280` *(new tier, added 2026-07-26)* | Subheads, secondary/supporting copy, card descriptions — one step down from body text. |
| **Text Muted / Caption** | `#9CA3AF` *(updated 2026-07-26 — replaces the prior `#5a6f77`-family "warm-muted" value)* | Captions, metadata, timestamps, placeholder text, disabled states. Must still meet WCAG AA against its background (see §22) — verify at this lighter value, especially on white card surfaces. |

**Usage guardrails (apply to every future component):**
- Exactly one *persuasion* accent hue exists in the system: brand green, at ~5–10% of the interface. `sky` (above) is the one sanctioned non-persuasion exception, scoped strictly to glass-card-surface tint and secondary data/status differentiation; any other new "second accent" proposal must be rejected or converted into a green-scale tint.
- **Single flat background, sitewide** *(2026-07-26; value corrected 2026-07-28)*: `#ffffff` is the only background color, from hero to footer. Section differentiation comes from spacing, typography, and component hierarchy — never from a background-color or tint change, and never from a dark section.
- **Card-on-white requires border + shadow, always** *(added 2026-07-28)*: because card surface and page background are the same white, a new card is never "done" until it has both a hairline border and an elevation shadow (§9/§13). Skipping either makes the card invisible against the page.
- Gradients (see §10) are retired except for the one sanctioned glass-card sky tint (§3 technique 3) — solid fills stay solid everywhere else.

---

## 5. Typography System

### Font families — UPDATED 2026-07-22 (Homepage V2 only)

Firecrawl scrape of the live kore.ai homepage (branding extraction) confirms their actual typeface:

- **Primary / heading / body**: **Inter** (fallback stack `Inter, Arial, sans-serif`) — this is a direct clone, not an adaptation. Loaded on **homepage-v2.njk only** via a `bodyClass: "v2-inter"` gate in `base.njk`, scoped with `.v2-inter.font-sans` in `main.css` — the live production site keeps **DM Sans** untouched.
- **Mono**: DM Mono stays our own choice for code-like/data-like content (kore.ai's own mono, Source Code Pro, wasn't adopted — it only appears in a narrow context on their page and DM Mono already serves the same technical-accent role in Zunkiree's system).

If/when Inter is rolled out sitewide, `tailwind.config.js`'s `fontFamily.sans` token and the global font `<link>` in `base.njk` need updating — not done as part of this scoped homepage-v2 pass.

### Font weights

Restrict to three weights system-wide: **400 (regular)** for body/secondary text, **500 (medium)** for UI labels/buttons/subheads, **600 (semibold)** for headlines and emphasis. Do **not** use 700+/bold weights for headlines — DESIGN_AUDIT.md §6 identifies medium-weight (not ultra-bold) headline type as a key driver of the "restrained, premium" read versus "shouting SaaS" type. This is a deliberate downgrade from the current `h1`/`h2`/`display` tokens' 700 weight.

### Type scale — UPDATED 2026-07-22 with exact kore.ai measurements

Firecrawl's branding extraction returned exact computed sizes from the live page (not estimates). The disciplined 6-step scale below keeps the DESIGN_AUDIT.md §6 finding (3–4 sizes per section, never sprawling) but the Display/H1/Body rows now carry kore.ai's real numbers instead of an eyeballed range:

| Style | Size (desktop) | Weight | Line height | When to use |
|---|---|---|---|---|
| Display / H1 | **57px** (measured, kore.ai `h1`), 38–48px responsive steps | **500** *(revised 2026-07-26 — was 600; homepage-v2 hero ships at `font-medium` to keep the hero's two-line headline visually lighter than the platform-teaser H2 below it)* | 1.1–1.15 (tight) | Hero headlines only — max one per page. |
| Subhead | 24–26px *(added 2026-07-26 — homepage-v2 hero support line ships at 26px, not the 14px Body size originally specced here)* | 500 | 1.5 (relaxed) | The single support line directly under a Display/H1 hero headline only — not a general body-copy substitute. |
| H2 | **~33px** (measured, kore.ai `h2`; use 28–32px responsive to stay on the 4px-friendly scale) | 600 | 1.2 | Sub-section headline within a page. |
| H3 | ~20–22px (not directly measured — estimated per DESIGN_AUDIT.md ratio) | 500 | 1.3 | Card titles, minor headings. |
| Body (default) | **14px** (measured, kore.ai `body`) — down from this doc's earlier 16–18px estimate | 400 | 1.6 (loose) | All paragraph copy. Loose line-height is deliberate — it's a major contributor to the "unhurried" premium read. |
| Small / Caption | 12–14px | 500 | 1.4–1.5 | Metadata, labels, category pills, timestamps. Caption weight is medium, not regular, since it's small enough to need slightly more visual weight to stay legible. |

**Note on scope**: these exact px values are applied in `homepage-v2.njk`/`navbar-v2.njk` only. The shared `tailwind.config.js` font-size tokens (`h1`, `h2`, `body`, etc.) are untouched since they're used by the live site.

### Mono usage — REVISED 2026-07-26 (supersedes the "reserved for stat numeral only" rule below and in §12)

The built homepage-v2 uses DM Mono for every uppercase micro-label, not just stat numerals: button labels, tab labels, eyebrow/category labels, and status badges all ship in mono, uppercase, with wide tracking (`font-mono text-[11–13px] uppercase tracking-wide`). This is now the confirmed rule — **DM Mono is the required typeface for any short, uppercase, micro-scale label**, alongside its original stat-numeral role. It is never used for headline, subhead, or body-copy sentences — that boundary is unchanged.

### Letter spacing

Body and headline text uses default/normal tracking. **Category label pills and all-caps micro-labels only** use wide positive letter-spacing (~0.05–0.08em) — this is the one place uppercase + tracking is allowed; it must not spread to headlines or body copy.

### Navigation typography

Primary nav links (desktop top-level items, dropdown triggers) are UI labels, not headline/body copy — they use the **Small/Caption register**: 14px (`text-sm`), weight 500, normal tracking. This was tightened from an earlier arbitrary 15px on navbar-v2.njk to keep nav text on the disciplined scale above instead of an off-scale one-off value.

### Heading hierarchy rule

Never skip a level for stylistic reasons (no H3 styled larger than an H2 "because it looks better here") — hierarchy must stay semantically and visually consistent, since it's both an accessibility requirement (§22) and a "systemized, not custom" requirement (§1).

---

## 6. Layout System

### Grid

12-column grid at desktop. Sections resolve to one of a small set of column splits — no ad hoc column math:

- **Full-width single column** (macro section rhythm — one idea, full-bleed background)
- **50/50** (text + visual pairing, feature blocks)
- **40/60 or 60/40** (text + visual pairing with a dominant side — used when one side is denser, e.g., a longer copy block next to a compact stat card)
- **3-column or 4-column repeaters** (card grids, logo walls, stat rows)

**Note (2026-07-26)**: a generic global-design-language reference recommended a flat 1280px max-width and flat 120px section spacing. Evaluated and **not adopted** — the container widths and responsive spacing below are calibrated from actual Kore.ai measurements (DESIGN_AUDIT.md Firecrawl scrape) and remain the system of record; kept as-is by explicit decision.

### Container widths

- **Outer bleed**: the single flat `#ffffff` background (§10) runs full viewport width; no gradients or ambient blooms exist to bleed anymore.
- **Content container**: capped at the existing `max-w-content` (~1536px) for wide layouts (card grids, full feature blocks) — do not introduce a second content-width token.
- **Narrow text container**: headline + subhead pairs, and any single-column prose block, further constrain to the existing `max-w-narrow` (~1152px) or tighter (~600–700px for hero headline/subhead specifically) to keep line length readable, per DESIGN_AUDIT.md §4.

### Section spacing

96–160px top/bottom padding per section on desktop (maps to existing `section` spacing tokens), collapsing responsively (see §21). This is the primary lever for "expensive, unhurried" pacing — sections must never feel adjacent/cramped.

### Column layout rules

- Card grids use consistent gutter widths (mapped to the spacing scale, §7) — never variable per-instance gutter sizing.
- Text+visual pairs are consistently left-text/right-visual **or** right-text/left-visual per page for scan predictability — don't alternate randomly within a single page.

### Responsive layout rules

See §21 for full breakpoint behavior. Summary: 12-column desktop grid collapses to a single-column stack at tablet/mobile; 3–4 column repeaters step down to 2-column (tablet) then 1-column (mobile); section padding compresses on a fixed schedule, not ad hoc per page.

---

## 7. Spacing Scale

Base unit: **8px**, matching the pattern already evident in the current Tailwind config and confirmed as the right choice by DESIGN_AUDIT.md §5. All spacing values must be multiples of this base — no arbitrary pixel values in new components.

**Note (2026-07-22)**: a Firecrawl scrape of the live kore.ai page measured their actual base unit as **4px**, not 8px — kept here for reference only. Not adopted: our 8px scale is already Tailwind's native rhythm and every existing v2 component is built against it, so switching would ripple through spacing on every card/section rather than just typography.

| Token | Value | Use |
|---|---|---|
| `space-1` | 8px | Icon-to-label gaps, tightest internal spacing |
| `space-2` | 16px | Form field internal padding, small component gaps |
| `space-3` | 24px | Card internal padding (default), gaps between related inline elements |
| `space-4` | 32px | Card internal padding (spacious variant), gaps between cards in a tight grid |
| `space-6` | 48px | Gaps between distinct components within a section |
| `space-8` | 64px | Grid gaps between major card-grid items, sub-section spacing |
| `space-12` | 96px | Section padding (mobile/compressed) |
| `space-16` | 128px | Section padding (desktop, standard) |
| `space-20` | 160px | Section padding (desktop, generous — used for the most important sections: hero, closing CTA) |

**Rule**: macro spacing (section padding, section-to-section gaps) always uses the large end of the scale (`space-12`+); micro spacing (card padding, form fields, inline gaps) always uses the small end (`space-1`–`space-4`). This contrast — loose macro layout, efficient micro layout — is itself a DESIGN_AUDIT.md §5 finding and must be preserved as a rule, not just a coincidence of the current numbers.

---

## 8. Border Radius System

One radius family, three values only — matching DESIGN_AUDIT.md §10's finding that a single controlled radius range (not sharp 0px, not full-round/blobby) is a key "modern but serious" signal. This **replaces** the current config's `borderRadius.none: 0` "Databricks sharp-edges" token, which is incompatible with the new direction.

| Token | Value | Use |
|---|---|---|
| `radius-md` | 8–10px | Default for cards, inputs, images, modals, badges, **and buttons** — the system default. Buttons switched to this value from full-round per the Kore.ai-inspired hero revamp (2026-07-21): small-radius rectangular buttons read as more technical/engineered, matching the reference this redesign is directly modeled on. |
| `radius-lg` | 14–28px *(range widened 2026-07-26 — the homepage-v2 dashboard's outer wrapper card ships at `rounded-[28px]` to visually contain two nested glass cards; 28px is the upper bound of this token, not a new one-off value)* | Larger surfaces where `radius-md` reads as too tight relative to size — big feature cards, the dark platform-strip card, large modals, outer "frame" containers wrapping nested cards. |
| `radius-pill` | 999px (full) | Pill-shaped category/eyebrow labels only (badges, tags) — no longer used for buttons (see `radius-md` above). |

No sharp 0px corners anywhere in the new system, and no radius values outside this set (no per-component custom rounding).

---

## 9. Shadow & Elevation System

Two elevation techniques total (see §3) — resist adding a third.

| Level | Shadow | Use |
|---|---|---|
| `elevation-0` | None | Flush elements, most inline content, most cards on white background with only a hairline border. |
| `elevation-1` (subtle) | Very low opacity, small blur | Default card lift on light backgrounds — barely perceptible, present on hover reveal. |
| `elevation-2` (card) | Low opacity, larger blur, no hard edge | Cards that need to visually separate from a busier background (e.g., a card over a pale gradient section). |
| `elevation-3` (hover) | Slightly increased blur/opacity vs. `elevation-2` | Hover/active state only — never a resting state. |

*(Retired 2026-07-26: "dark sections never use shadow" rule — dark sections no longer exist in the system. All elevation now resolves to shadow-based technique 1 or glass-surface technique 2, per §3.)*

**Elevation hierarchy**: higher elevation = closer to the user = more interactive/important. Modals and dropdowns sit above cards; cards sit above page background. Don't invert this (e.g., a resting card should never out-elevate an active modal).

---

## 10. Background & Gradient System

### Page backgrounds — REVISED 2026-07-26 (single global background, sitewide); value corrected 2026-07-28

Default and **only** background: `#ffffff`, flat, unbroken, from the hero through the footer, on every page and every template *(corrected 2026-07-28 — `#F8FAFC` was the original 2026-07-26 spec value, but homepage-v2 shipped on plain white `bg-white`; this section now matches the built site)*. No gradients, mesh gradients, colorful blobs, glowing backgrounds, noisy textures, or per-section color variation. This supersedes the prior "near-white / pale-neutral, no page opens on a saturated background" wording — it is now stricter: no page opens on, or transitions to, *any* background other than `#ffffff`.

### Section backgrounds — REVISED 2026-07-26

The white → pale-neutral → white → dark alternation rule is **retired sitewide**. What was previously homepage-v2's scoped exception (one flat background reused identically across every section) is now the standard for the entire site. New sections signal themselves via whitespace/spacing (§7) and typography/component hierarchy — never via a background-tint or background-color change.

### Gradient usage — RETIRED 2026-07-26, one exception only

Both previously-sanctioned page-background gradient treatments are retired:

1. ~~**Ambient light gradient** (radial blooms)~~ — retired; radial glow blooms behind hero/top-of-page content are no longer part of the system.
2. ~~**Pixel-matched SVG hero ribbon**~~ *(the Sky Blue / Warm Cream / Mint Green diagonal band treatment introduced 2026-07-23 for homepage-v2, `partials/hero-ribbon-bg.njk`)* — retired. The page-wide ribbon backdrop conflicts with the single flat `#ffffff` background rule above. Do not reintroduce this treatment or the prior radial-bloom palette (Green Tea `#EEF6E3`, Sky `#CFE9F0`, Matcha `#9BCC94`) — both are historical reference only.
3. ~~**Saturated accent gradient (bloom) inside dark cards**~~ — retired along with dark sections (§3/§4). The platform/flagship framing strip now uses the glass-surface technique (§3 technique 2) as its signature device instead.

**The one remaining exception**: the glass-card sky-tint gradient (§3 technique 2, §4) — `from-sky-100/70 via-sky-50/30 to-white/40`, used only *inside* an individual glass-card surface, never as a section or page background. This is a deliberate, explicitly-approved carve-out from the "no gradients" rule, not a reopening of the broader gradient system.

**Rules:**
- Gradients are never applied directly to text or buttons — text and interactive elements stay flat/solid for legibility and consistent hit-state styling.
- Outside the one sanctioned glass-card tint, no gradient, blob, glow, or ambient background effect is permitted anywhere on the site.

---

## 11. Component Design Principles

Universal rules every component — present or future — must satisfy:

1. **Consistency**: a component's visual treatment (radius, shadow, spacing, color usage) must match its category everywhere it appears. A "card" looks like a card the same way on the homepage and on a vertical page.
2. **Alignment**: components align to the grid (§6) and spacing scale (§7) — no eyeballed positioning.
3. **Padding**: internal padding always comes from the spacing scale's micro range (§7); never a bespoke value.
4. **Visual rhythm**: repeated components in a list/grid (cards, logos, testimonials) maintain identical internal structure — same label position, same title size, same CTA placement — so the eye can scan the group as one pattern.
5. **Reusability**: a new component is only justified if an existing one (§12–§17) cannot be configured/extended to cover the need. Prefer adding a variant/prop to an existing component over inventing a new one — this directly addresses PROJECT_AUDIT.md's finding that the current codebase has no macro/reuse discipline (§8, §11).
6. **Parameterization over duplication**: components should take data, not be forked per page. `cta-faq.njk` is cited in PROJECT_AUDIT.md §5 as the current codebase's best-factored partial for exactly this reason — it is the template for how new components should be authored.

---

## 12. Button System

**Revision note (2026-07-21)**: Button shape changed from `radius-pill` to `radius-md` (small-radius rectangle) to match the Kore.ai reference this redesign is directly modeled on (see hero revamp) — pill-shaped buttons read as too soft/consumer-SaaS next to that reference's more technical, engineered feel. Labels are uppercase with wide tracking, weight 500, set in **DM Mono** — per §5's 2026-07-26 revision, mono is now the standard typeface for uppercase micro-labels including button/tab/eyebrow labels, not just stat numerals.

| Variant | Visual | Use |
|---|---|---|
| **Primary** | Solid brand-green fill, white/near-white text, `radius-md`, uppercase label | The single highest-commitment action per section (e.g., "Talk to our Education team"). At most one primary button visible per section/viewport. |
| **Secondary** | Outline/ghost — 1–2px brand-green or neutral border, transparent fill, `radius-md`, uppercase label | The paired soft CTA next to a primary button ("See the platform running for Education"). |
| **Ghost** | No border, no fill, text-weight-500, brand-green or navy text | Low-emphasis actions inside cards or dense UI (e.g., a "view details" affordance within a card). |
| **Text / Link** | Inline text, brand-green, underline on hover only | Inline content links, "learn more" affordances within body copy. |
| **Icon button** | Square/circular hit target, `radius-md` or fully round, icon only, accessible label required | Utility actions only (close, menu toggle, carousel prev/next) — never a primary conversion action. |

**Sizing**: three sizes (sm/md/lg) mapped to the spacing scale for padding; default is `md` everywhere except hero (which may use `lg`). Buttons are consistently smaller and more understated relative to headline size than the copy around them — per DESIGN_AUDIT.md §9, buttons should be placed with confidence, not urgency; no oversized, attention-grabbing CTA styling.

**States**: default, hover (darken fill/border per §4's hover token, or add `elevation-3`), focus (visible focus ring in brand green, see §22), disabled (reduced opacity, no hover response), loading (subtle inline spinner, label retained).

**Icon usage**: minimal — a small trailing arrow on "Learn more"-style links only, or a small decorative bullet/dot after the label (per the Kore.ai reference) on Primary/Secondary buttons. Buttons are text-first, not icon-first.

---

## 13. Card System

All cards share: `radius-md` (or `radius-lg` for large feature cards), `elevation-1` default / `elevation-3` on hover if interactive, internal padding from `space-3`–`space-4`, and consistent internal structure (label/eyebrow → title → body → optional CTA).

**Card-on-white rule (2026-07-28)**: default card surface (`#ffffff`) is identical to the page background (`#ffffff`, §4/§10) — there is no pale off-white step between them. Every opaque card must therefore always ship with **both**:
1. A hairline border (`border-navy-100`, `warm-border`, or `cool-border` — never `border-transparent`).
2. An elevation shadow (`shadow-subtle` default, `shadow-card`/`shadow-md` for larger feature cards — never "no shadow" as a resting state for a bounded card).

A card missing either is effectively invisible against the page and should be treated as a build defect, not a stylistic variant. The **glass card** (below) is the one exception — its translucency + `backdrop-blur-md` provides separation without needing an opaque white fill.

| Card type | Structure | Notes |
|---|---|---|
| **Feature card** | Icon/label → title → short body → optional link | Used in repeaters (3–4 column grids) for capability/benefit lists. |
| **Industry/vertical card** | Category pill → headline claim → supporting stat or client proof → CTA | Anchors the industry self-identification pattern (§6 of REDESIGN_STRATEGY.md) — must always carry real proof, never a placeholder stat. |
| **Stats card** | Large numeral (can use mono font, §5) → short label → optional source attribution | Numerals should cite a real, sourced figure — no invented statistics (hard content guardrail inherited from CONTENT_SUMMARY.md). |
| **Testimonial card** | Logo/name header → quote body → minimal chrome | Content-forward; no decorative imagery competing with the quote. Used in the tabbed/logo-navigated pattern (§15), never a static uncredited quote. |
| **Pricing card** | Tier name → price → feature list → single CTA | If used, exactly one tier gets visual emphasis (border/elevation bump) — never more than one "recommended" card per row. |
| **CTA card** | Short headline → one-line support copy → one or two buttons | Used for the closing dual-CTA pattern (§ below) and mid-page soft conversions. |
| **Glass card** *(added 2026-07-26)* | Same internal structure as Feature/Stats cards | Uses the §3 "Glass surface" depth technique (translucent white + sky-tinted gradient + `backdrop-blur-md`) instead of opaque white + shadow. `radius-lg`, `elevation-1` (`shadow-subtle`) only — never a heavier elevation, since the translucency itself already provides visual separation. Used for the Platform Pillars and Outcome/dashboard cards in homepage-v2. |

**Interaction rule**: cards that are fully clickable get a hover elevation bump (`elevation-1` → `elevation-3`) and nothing else flashy — no scale/zoom transforms, no color inversion. Cards that contain their own internal CTA button are not also globally clickable (avoids nested-link ambiguity).

---

## 14. Form System

- **Inputs**: `radius-md`, 1px `Border` token outline, white surface, `space-2` internal padding, label always visible above the field (no placeholder-as-label pattern).
- **Selects**: same visual treatment as text inputs for consistency; custom chevron icon matching the iconography style (§16).
- **Checkboxes / radio buttons**: brand-green fill when checked, neutral outline when unchecked, minimum 20×20px hit target padded to a 44×44px touch target.
- **Validation**: inline, below the field, appears on blur/submit — not on every keystroke.
- **Error state**: `Error` token border + small error-colored helper text below the field. Error text must also carry an icon or "Error:" prefix, not rely on color alone (§22 accessibility requirement).
- **Success state**: `Success` token border/check icon on confirmed-valid fields (used sparingly — not every field needs a green check; reserve for multi-step or high-friction forms).
- **Submit buttons**: always `Primary` button variant; disabled state while submitting, with a loading indicator, not just a locked click.

This form system applies to the real lead-capture backend called out as a Phase 1 priority in REDESIGN_STRATEGY.md §3/§9 — the visual system should be built assuming real submission states (loading, success, error) exist, not just a static form.

---

## 15. Navigation System

### Navbar

Sticky, scroll-aware (hide-on-scroll-down / reveal-on-scroll-up is acceptable, mirrors the current `header.njk` behavior worth preserving per PROJECT_AUDIT.md §5) — logo left, primary nav center/left-of-CTA, primary CTA button right. Background transitions from transparent-over-hero to solid-white-with-hairline-border once scrolled, never a jarring hard cut.

### Dropdowns / mega-menu

Card-based dropdown panels using the standard card treatment (§13) — soft shadow (`elevation-2`), `radius-md`, generous internal padding. Content organized by category with the label-pill pattern (§4/§5) marking each column. Given the industry-first IA (REDESIGN_STRATEGY.md §6), the primary mega-menu structure should foreground the four verticals, with Platform/Company/Resources as secondary columns — not a flat alphabetical link dump.

### Mobile navigation

Full-screen overlay (not a narrow slide-out drawer) on small breakpoints, same visual language as desktop dropdowns (cards, spacing, type scale) — mobile nav is a viewport adaptation of the same system, not a visually distinct "mobile mode."

### Sticky behavior

Only the primary navbar is sticky. Secondary in-page navigation (e.g., a product-page section jump nav) may be sticky *within its own section* only, and must yield to the primary navbar's z-index/position, never overlap it.

### Footer navigation

Mega-footer, categorized by **vertical / resource / company** (per REDESIGN_STRATEGY.md §3/§7, replacing the current 12-dead-link structure) — 4–6 columns, legal/compliance row beneath, social icons, all links resolving to real pages before launch (§1's "no dead ends" rule).

---

## 16. Iconography

- **Style**: single-weight line icons (outline, not filled/solid), consistent stroke width across the entire set — matches the restrained, non-decorative visual language throughout this spec.
- **Stroke**: consistent ~1.5–2px stroke weight at default size; must not vary between icons from different sources (a mixed-stroke icon set is a visible inconsistency and should be treated as a defect).
- **Size**: standardize on a small fixed set of sizes (16px, 20px, 24px, 32px) tied to context (inline-with-text, button, card header, feature-illustration) — no arbitrary icon sizing per instance.
- **Usage rules**: icons support text, they don't replace it for anything conversion-critical (a CTA is never icon-only without a text label, except utility icon-buttons per §12). Icons take Text Muted or Primary-accent color depending on context — never a decorative rainbow of per-icon colors.

---

## 17. Illustration & Imagery

- **Illustration style**: abstract gradient/geometric art only, matching the ambient-gradient system in §10 — no cartoon/mascot-style illustration, no stock-illustration people. This mirrors DESIGN_AUDIT.md §17's finding that Kore.ai deliberately avoids people-illustration in favor of abstract art + real product truth.
- **Photography style**: minimal use of photography overall; where used (e.g., an industry-context photo), favor understated, realistic, non-stock-feeling imagery over generic corporate stock-photo aesthetics. Never used as a background behind body text without a scrim/overlay ensuring AA contrast.
- **Product screenshots**: always shown inside a soft device/browser frame (rounded container, slight inset, subtle border) — never a raw, full-bleed screenshot. This is a trust-signal device (per DESIGN_AUDIT.md §8/§17) that also visually unifies screenshots taken from different products/times.
- **Image treatment**: consistent corner radius (`radius-md`/`radius-lg` per §8) on every image container; no mixed-radius images on the same page. Article/content thumbnails may use flat gradient art (matching §10's accent gradient palette) instead of a photo when no real photo exists — this keeps a content grid visually consistent even when the underlying articles vary widely in topic.

---

## 18. Motion & Interaction System

Motion philosophy, stated once and applied everywhere: **motion supports credibility, it doesn't perform for attention** (DESIGN_AUDIT.md §14). Every animation must justify its existence against that bar — if it doesn't reinforce hierarchy, feedback, or spatial continuity, cut it.

- **Page transitions**: none required beyond standard browser navigation; if introduced, must be fast (<300ms) and never block interaction.
- **Scroll animations**: subtle reveal on section entry — small Y-translate (8–16px) + opacity fade, no bounce/elastic easing. This preserves the existing `[data-reveal]` convention (PROJECT_AUDIT.md §10/§7 — confirmed reusable) as the standard mechanism; new components should adopt this convention rather than inventing a parallel one.
- **Hover interactions**: elevation bump on cards (§9), color/border shift on buttons (§12) — no scale/zoom, no rotation, no color-inverting hover states. Hover feedback should be felt, not noticed.
- **Focus states**: visible, high-contrast focus ring (brand green, 2px, offset from the element) on every interactive element — never suppressed for aesthetic reasons (hard accessibility requirement, §22).
- **Loading states**: inline, contextual (button spinner, skeleton block matching the final content's shape/radius) — never a full-page blocking spinner for content that could progressively render.
- **Micro-interactions** *(revised 2026-07-26)*: ambient gradient-bloom drift and the SVG hero ribbon are both retired along with the background/gradient system they belonged to (§10) — there is no longer a sanctioned idle-loop background animation. Motion stays a one-time response to a scroll/hover/focus event only.
- **Reduced motion**: every animation must respect `prefers-reduced-motion` — carries forward the existing Lenis implementation's handling of this (PROJECT_AUDIT.md §10) as the standard, non-negotiable for new motion work.
- **Performance bar**: 60fps target for all animation (per CLAUDE.md's existing Quality Standards) — scroll-scrubbed effects in particular must be profiled, not just visually approved.

---

## 19. Page Templates

Every template below follows the trust-ladder ordering from §1/§8 unless noted. These are structural recommendations (section order and purpose), not layout mockups.

### Homepage
1. Hero — short headline + subhead + dual CTA, flat `#ffffff` background *(revised 2026-07-26 — ambient gradient backdrop retired, see §10; value corrected 2026-07-28)* (no dense carousel of competing messages).
2. Industry self-identification — tab/card switcher across the four verticals (Education / Agencies / Healthcare / Real Estate).
3. Platform framing strip — glass-surface card *(revised 2026-07-26 — was a dark gradient-bloom card; now uses the sky-tinted glass-surface technique, §3 technique 2, as the signature device)* introducing the shared platform layer (multi-tenant CRM / Search / Orca) as the "why this scales" answer.
4. Proof — real client logos/case-study cards, grouped by vertical where possible.
5. Outcome feature block — one real product screenshot + outcome-oriented copy (50/50 split).
6. Testimonial (tabbed by real client, once enough real quotes exist).
7. Content/thought-leadership teaser (blog/insights grid).
8. Dual closing CTA (segmented hard + soft offer).
9. Mega-footer.

### Industry vertical page (Education / Agencies / Healthcare / Real Estate)
1. Hero — industry-specific claim, stated as live/production (never "coming soon" language per CONTENT_SUMMARY.md's guardrail).
2. Flagship proof — the named live client running the pre-built application for that vertical (where one exists; Real Estate is capability-led, no fabricated logo).
3. Pre-built application overview — outcome feature block with real screenshot.
4. Accelerators — supporting capability grid (feature cards).
5. Platform tie-in — shortened version of the platform framing strip, linking to the full Platform page.
6. Proof/stat card(s) tied to that vertical's real metric.
7. Closing dual CTA (vertical-specific hard + soft offer).

### About page
1. Hero — company narrative claim.
2. Mission (founder-voiced).
3. What-we-do capability grid.
4. Origin/timeline.
5. Values.
6. FAQ.
7. Closing CTA.

### Pricing page
1. Hero — short framing statement.
2. Pricing card row (one emphasized tier max, per §13).
3. Feature comparison (table or expandable detail).
4. FAQ.
5. Closing CTA.

### Contact page
1. Hero — short, low-friction framing.
2. Form (real backend, full state handling per §14).
3. Quick links (to relevant vertical pages / resources).
4. FAQ.

### Generic landing / resource page
1. Hero.
2. Core content block(s) — feature/outcome pattern as appropriate to content type.
3. Related content or proof.
4. Closing CTA.

---

## 20. Component Rules

- **Composition**: complex sections are composed from the smaller components defined in §12–§17, not built as one-off monoliths. If a page template needs a "card with a tab switcher inside it," that's a composition of the Card system + a tab-switcher pattern — not a new bespoke component.
- **Naming conventions**: components are named for their *role*, not their current page ("industry-card," not "homepage-vertical-box") so they're legible as reusable the moment they're created — directly addresses the current codebase's page-specific partial-naming problem (PROJECT_AUDIT.md §5's `cta-band.njk` DOM-id coupling).
- **Reusability guidelines**: a component takes data/props for anything that varies (title, body, CTA label/href, image) and hardcodes only what's structurally true of every instance (layout, spacing, type treatment). No component should require copy-pasting itself to a new file to support a second use case.
- **Consistency rules**: any two components in the same category (two card types, two button variants) must differ only in the ways this document explicitly defines (§12/§13 tables) — not in ad hoc ways introduced during implementation.

---

## 21. Responsive Design Rules

| Breakpoint | Grid behavior | Section padding | Notes |
|---|---|---|---|
| **Desktop** (≥1280px) | Full 12-column, up to 4-column repeaters | `space-16`–`space-20` (128–160px) | Reference/default design target. |
| **Laptop** (1024–1279px) | 12-column retained, repeaters may step to 3-column | `space-16` (128px) | Content container may lose outer margin before column count changes. |
| **Tablet** (768–1023px) | Single-column macro stack; repeaters step to 2-column | `space-12` (96px) | Text+visual 50/50 pairs stack vertically, text first. |
| **Mobile** (<768px) | Single column throughout; repeaters step to 1-column | `space-12` down to 64px on the smallest section paddings | Narrow text container (§6) becomes the full available width minus a fixed side margin (16–24px); type scale steps down one tier for Display/H1 only (§5 sizes are desktop; mobile Display ≈ current H1 size). |

**General rules**:
- Never hide primary content at any breakpoint — mobile gets the same information, restructured, not a reduced subset (aside from decorative-only ambient gradient elements, which may simplify for performance).
- Touch targets are minimum 44×44px on any breakpoint below desktop, regardless of the visual size of the element.
- Sticky navbar height may compress on mobile but must retain the primary CTA — never drop the CTA to save vertical space.

---

## 22. Accessibility Standards

- **Contrast**: all text meets WCAG AA (4.5:1 body text, 3:1 large text ≥24px/18.5px-bold) against its actual background, including text placed over ambient gradients or product-screenshot frames — verify per-instance, not just per-token, since gradients vary contrast across their surface.
- **Keyboard navigation**: every interactive element (nav, dropdown, tab switcher, carousel, form, modal) must be fully operable via keyboard alone, with a visible, logical focus order matching visual order.
- **Focus indicators**: visible focus ring per §18 on every focusable element, never removed via `outline: none` without an equivalent replacement.
- **Semantic structure**: heading levels used hierarchically and never skipped (§5); landmark regions (`nav`, `main`, `footer`) present on every page; interactive custom components (tab switchers, accordions) use correct ARIA roles/states, not div-soup.
- **Motion sensitivity**: `prefers-reduced-motion` respected everywhere per §18 — this is non-negotiable, not a nice-to-have.
- **Alt text**: all meaningful imagery (product screenshots, client logos, industry photography) has descriptive alt text; purely decorative gradient/ambient art is marked `alt=""`/`aria-hidden`.
- **Form accessibility**: every input has a programmatically associated label (§14); errors are announced (not color-only, per §14) and associated with their field via `aria-describedby`.

This carries forward and formalizes the "Accessibility (semantic HTML, alt text)" line already in CLAUDE.md's Quality Standards — this section is the enforceable version of that requirement.

---

## 23. Performance Guidelines

- **Images**: served via the existing `picture.njk` responsive-image component (confirmed reusable, PROJECT_AUDIT.md §5) — AVIF/WebP with fallback, sized per breakpoint, never a single oversized image scaled down by CSS. Product screenshots inside device frames (§17) are prime candidates for aggressive compression since the frame itself masks minor quality loss at the edges.
- **Animations**: GPU-accelerated properties only (`transform`, `opacity`) for scroll/hover motion — no animating `width`/`height`/`top`/`left` directly. Ambient gradient drift (§18) must be profiled to confirm it doesn't regress scroll performance; if it can't hold 60fps on a mid-tier device, simplify or remove it rather than accept jank.
- **Lazy loading**: below-the-fold images and non-critical embeds (e.g., the external Search widget, per PROJECT_AUDIT.md §6/§11) lazy-load on idle/viewport-proximity — this pattern already exists for the Search widget and should extend to all new heavy embeds.
- **Rendering**: avoid layout-shift-inducing patterns — reserve space for images/embeds before they load, avoid injecting above-the-fold content after initial paint.
- **Bundle optimization**: new components add to the existing single Vite entry (`main.js`) deliberately and minimally — a new heavy dependency (a new animation library, a new icon set format) requires justification against what's already available (GSAP, Lenis, lottie-web, three.js are already in the stack; prefer using them over adding alternatives).
- **LCP discipline**: hero content (the largest visual element above the fold) must be optimized and correctly preloaded — the current hardcoded LCP preload path in `base.njk` (flagged in REDESIGN_STRATEGY.md §4) must be kept in sync with whatever the new hero's actual LCP element is, on every hero redesign, not just at launch.

---

## 24. Design Dos & Don'ts

**Always:**
- Use exactly one accent color (brand green) system-wide, at ~5–10% of the interface — 90–95% neutral.
- Use a **single flat background color (`#ffffff`) across the entire site** *(2026-07-26; value corrected 2026-07-28 to match the shipped homepage-v2 `bg-white`)* — hero through footer, every section, every page.
- Give every opaque card **both** a hairline border and an elevation shadow *(2026-07-28)* — card and page share the same white, so neither can be dropped for the card to remain visible.
- Trace every spacing, radius, shadow, and type value back to a token defined in this document.
- Pair every hard CTA with a soft CTA.
- Show real proof (client names, real screenshots, sourced stats) wherever a page claims capability.
- Signal new sections with whitespace/spacing and typography/component hierarchy *(2026-07-26 — supersedes the background-alternation rule below)*.
- Respect `prefers-reduced-motion` and WCAG AA contrast on every new component.
- Build components as reusable/parameterized, not page-specific forks.

**Never:**
- Introduce a second *persuasion/action* accent hue "just for this section." (`sky`, per §4, is the one sanctioned exception, reserved strictly for glass-card-surface tint and secondary data/status differentiation — never for CTAs, links, or section/page backgrounds.)
- Use full-saturation color washes, gradients, blobs, glows, or dark backgrounds across any section — *(2026-07-26)* this now includes what were previously the platform strip, proof cards, and final CTA's dark backgrounds, and the homepage-v2 SVG hero ribbon — all retired.
- ~~Alternate section backgrounds (white/pale/dark) to signal new sections~~ *(retired 2026-07-26 — see "Always" above)*.
- Use hard drop shadows or heavy skeuomorphic elevation.
- Use bold (700+) headline weight — medium/semibold only.
- Fabricate a client logo, quote, or statistic to fill a proof section (hard content guardrail from CONTENT_SUMMARY.md, enforced visually by never designing a "logo wall" or "testimonial" slot that could tempt a placeholder fill).
- Use "coming soon / pilot / demo" framing on any of the four core vertical pages.
- Let a component's visual treatment drift from its category's defined rules (§12–§17) to solve a one-off layout problem — solve it by extending the token/rule set instead.
- Animate anything on an idle loop *(2026-07-26 — the prior ambient-gradient-bloom exception is retired along with the background/gradient system; there is no longer any sanctioned idle-loop animation)*.

**Common mistakes to avoid** (drawn directly from PROJECT_AUDIT.md's findings — do not repeat):
- Letting Tailwind tokens, CSS custom properties, and raw inline hex coexist in the same template (§9 of PROJECT_AUDIT.md) — this system must be enforced as Tailwind-tokens-only, no exceptions, no inline hex.
- Building a homepage-specific version of a component that duplicates a general one instead of parameterizing the general one (the `cta-band.njk` DOM-id-coupling problem).
- Leaving footer/nav links unresolved "temporarily" — every link ships to a real page or doesn't ship.

---

## 25. Design Review Checklist

Every new page or component must satisfy all of the following before it is considered complete:

**Visual hierarchy**
- [ ] Exactly one Display/H1 per page/section; hierarchy readable in grayscale before color is added.
- [ ] Color used as the last hierarchy lever, not the first.

**Spacing**
- [ ] All spacing values map to a token in §7 — no arbitrary pixel values.
- [ ] Section padding falls in the 96–160px desktop range (or the correct responsive step per §21).
- [ ] Macro spacing is loose, micro spacing is efficient (per §7's contrast rule).

**Typography**
- [ ] Only the 6 defined type styles (§5) are used; no ad hoc font sizes.
- [ ] Only weights 400/500/600 used; no bold 700+ headlines.
- [ ] Heading levels are semantic and not skipped.
- [ ] Body copy line length stays in the readable range (~60–75 characters).

**Accessibility**
- [ ] All text meets WCAG AA contrast against its actual (including gradient) background.
- [ ] Full keyboard operability with visible focus states.
- [ ] Alt text present on meaningful imagery; decorative art marked appropriately.
- [ ] Forms have associated labels and non-color-only error states.

**Responsiveness**
- [ ] Verified at desktop, laptop, tablet, and mobile breakpoints per §21.
- [ ] No primary content hidden at any breakpoint.
- [ ] Touch targets ≥44×44px below desktop.

**Performance**
- [ ] Images run through the responsive-image component with correct sizing/format.
- [ ] Animations use only `transform`/`opacity`, hold 60fps, and respect reduced-motion.
- [ ] No unjustified new dependency introduced for something the existing stack already covers.

**Motion**
- [ ] Every animation on the page justifies itself against "supports credibility, doesn't perform for attention" (§18).
- [ ] No idle-loop animation except the sanctioned ambient-gradient drift.

**Brand consistency**
- [ ] Only the brand green persuasion accent appears on CTAs/links, at ~5–10% of the interface; `sky` (if used) is confined to glass-card-surface tint or secondary data/status differentiation only (§4) — no other second accent color introduced.
- [ ] **Single flat `#ffffff` background used everywhere** — no dark section, no section-background tint change, no page-wide gradient/ribbon (§3/§4/§10, 2026-07-26; value corrected 2026-07-28).
- [ ] **Every opaque card ships with both a hairline border and an elevation shadow** — card and page share the same white, so a card with only one (or neither) is invisible against the page (§13, 2026-07-28).
- [ ] Radius and shadow treatments match §8/§9 exactly; the only gradient present anywhere on the page is the glass-card sky tint (§3 technique 2), if used.

**Component consistency**
- [ ] New UI reuses an existing component definition (§12–§17) rather than forking a new one, unless a genuine new category is justified and should be added to this document.
- [ ] Component is data-driven/parameterized, not page-specific.

**Conversion clarity**
- [ ] Every CTA moment pairs a hard offer with a soft offer.
- [ ] No proof section (logo, quote, stat) contains fabricated or placeholder content.
- [ ] No "coming soon/pilot/demo" language on core vertical pages.
- [ ] Page follows trust-ladder ordering — proof/credibility appears before the hard ask.

---

## Notes on Precedence

Where this document's guidance and an existing implementation detail (e.g., current `tailwind.config.js` tokens) disagree, **this document wins** — existing tokens are a starting point to be reconciled during Phase 1 (per REDESIGN_STRATEGY.md's action plan), not a constraint on this spec. Specifically: the current `sky` blue accent is retired except for its narrow glass-card-tint/secondary-data role (§4), the current `borderRadius.none` "sharp edges" token is retired, and current 700-weight heading tokens are retired in favor of the values defined here.

**2026-07-26 global background update**: a generic global-design-language reference (Linear/Stripe/Vercel/GitHub/Kore.ai-inspired, single flat `#F8FAFC` background, 90–95% neutral / 5–10% brand accent) was adopted sitewide, superseding the previously-confirmed homepage-v2 dark-section punctuation (§3/§4) and the pixel-matched SVG hero ribbon (§10) — both are now retired everywhere, including homepage-v2, by explicit decision. The sky-tinted glass-card surface technique (§3 technique 2) was kept as the one sanctioned exception, also by explicit decision — it is not a gap in adoption, it's a deliberate carve-out. Layout container widths (§6) and responsive section-spacing values (§7/§21) were evaluated against the same reference's generic 1280px/120px numbers and **not changed** — the existing Kore.ai-measured values remain authoritative.

Content, IA, and messaging decisions remain governed by CONTENT_SUMMARY.md and the underlying industry-context source document — this spec defines *how things look*, not *what they say* or *how pages are organized*, except where layout/structure is inherently a design decision (page templates, §19).
