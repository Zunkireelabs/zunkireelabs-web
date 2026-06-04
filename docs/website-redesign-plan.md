# Plan: Evolve Zunkiree site toward ServiceNow's design language (keeping the red brand)

## Context
The user likes ServiceNow's website (https://www.servicenow.com/) as a design-inspiration reference,
but wants to **keep their current red brand color** (`#eb1600`) — not adopt ServiceNow's green.
The goal is to borrow ServiceNow's *design language* (dramatic dark sections, glows, depth, gradients,
section rhythm, generous spacing) and apply it to the existing red/navy palette so the site feels more
premium and modern.

ServiceNow's marketing site and Horizon design system are bot-protected (Akamai): WebFetch returns 403
and curl gets a TLS reset (HTTP 000) even with full browser headers. Raw HTML/CSS could not be scraped.
**The user will instead drive the work section-by-section by sharing screenshots**, and we reconstruct
each section in the red theme. This file captures the design reference + the technical strategy so each
section can be executed quickly as screenshots arrive.

## ServiceNow design reference (verified + observed)
Verified brand colors (colorcodeshub.com, brandcolorcode.com):
- Dark teal-green `#293E40` — their brand "dark" (≈ Zunkiree navy `#1b3139`, already very close)
- Signature lime green `#62D84E` — the energy accent (**red will play this role for Zunkiree**)
- Sage `#80B6A1` — soft secondary

Design language to emulate (with red instead of green):
- **Alternating light ↔ dark section rhythm** (dark = navy `#1b3139`/charcoal)
- **Glow halos / soft radial glows** behind hero + product imagery (red-tinted on dark)
- **Gradient / mesh backgrounds**, occasional bold color washes
- **Depth**: layered UI mockups, soft multi-layer shadows, floating cards
- **Big type scale**, tight leading, lots of negative space
- **Rounded cards/buttons**, soft shadows
- Accent (red) used **surgically** — CTAs, links, underlines, glows, data-viz highlights
- Homepage section order: sticky nav → hero(+glow) → logo strip → alternating feature bands →
  product showcase(+glow halo) → stats band → case studies → bold CTA band → large dark footer

## Technical strategy (low-footprint re-theme)
From the codebase audit, the red is applied almost entirely via Tailwind `zunkiree-*` classes
(347+ text, 62+ bg uses across ~41 templates) plus CSS variables — so **class names stay the same**.

Single sources of truth to adjust per section as needed:
- `tailwind.config.js` — `zunkiree` color scale, `red` alias, `box-shadow` (`btn`/`btn-hover` use
  `rgba(235,22,0,...)`); add red-glow shadow utilities + dark-section gradient utilities here.
- `src/assets/css/main.css` — `:root` vars (`--primary`, `--primary-hover`, `--primary-muted`,
  `--secondary` navy); add reusable classes for glow halos, mesh/gradient backgrounds, and dark
  section wrappers so they can be dropped into any `.njk` section.
- SVGs in `src/assets/images/` (~13 files with hardcoded `#eb1600`/`#ff6b5c` gradient stops) —
  touched only if a given section uses them.

Per-section workflow (repeated for each screenshot the user sends):
1. User shares a ServiceNow section screenshot + which Zunkiree page/section it maps to.
2. Identify the target `.njk` file (e.g. `src/pages/index.njk`, partials in `src/_includes/`).
3. Recreate the layout/treatment in red+navy using existing Tailwind classes + the new reusable
   glow/gradient/dark-section helpers.
4. Keep the red role = ServiceNow's green role (accent/CTA/glow), navy = their dark base.
5. Verify in dev server, check responsive + contrast/accessibility.

## Reusable helpers to add up front (before first section)
- Red glow halo (radial-gradient blur behind imagery) — CSS class in `main.css`.
- Dark section wrapper (navy bg + light text + optional mesh gradient) — CSS class.
- Red→dark and red→orange gradient utilities (for CTA bands + gradient headings).
- Glowing CTA button variant (extends `.btn-primary` with red glow shadow).

## Verification
- `npm run dev` (port 8080) — visually compare each rebuilt section to the screenshot.
- Check all breakpoints (mobile-first) per project quality standards.
- Confirm WCAG contrast on dark sections (red on navy, white on navy).
- `npm run build` before any deploy.

## Constraints
- Keep the red brand color (`#eb1600`); red plays ServiceNow's green/accent role.
- **Scope is DESIGN ONLY for now.** Keep existing page content/copy as-is.

## Content workstream (DEFERRED — revisit later)
Out of scope for now per user. When revisited: capture ServiceNow content structure from screenshots
into a reference file and adapt it into Zunkiree-specific copy (do not copy verbatim — copyright/SEO).

## Notes / open items
- No structural file changes happen until the user sends the first section screenshot.
- Decide per-section whether to introduce a dark band (most impact) or keep light (lower risk).
- A standalone design-reference doc (`docs/servicenow-design-reference.md`) can be created later;
  for now the full ServiceNow reference is captured in this plan file above.
