# Homepage V2 — Refined Copy Draft

> Draft copy for the confirmed content gaps in `src/pages/homepage-v2.njk`, written against two
> sources only:
> 1. **`docs/CONTENT_SUMMARY.md`** — the confirmed-facts source of truth (verticals, real clients,
>    guardrails: no fabricated logos/quotes/metrics, no "coming soon" language on the four core
>    verticals).
> 2. **`docs/koreai-content-reference.md`** — structural/tonal pattern reference only (headline
>    formulas, pillar tagline+badge shape, two-stage closing CTA). No Kore.ai copy is reused
>    verbatim; every line below is Zunkiree-specific and fact-checked against CONTENT_SUMMARY.md.
>
> **Status: draft for review — nothing here is written into `homepage-v2.njk` yet.** Per the
> homepage-v2 working formula, build proceeds one section at a time after approval.
>
> **Explicitly excluded from this pass**: Testimonials/Proof section copy — real client quotes
> aren't available yet (per your earlier call, left untouched this round).

---

## 1. Platform Pillars — ✅ shipped (2026-07-26)

**Original finding was wrong**: the section's header comment described an aspirational 4-card
structure ("Pre-built → Accelerators → Scale → Own it completely"), but the live `pillars` array
only ever had 3 cards, with card 3 already folding "Own it completely" into its own title
("Scale it. Own it completely."). There was no missing 4th card — the comment was stale.

**Fact-check against `CONTENT_SUMMARY.md` and `company-industry-context.md` surfaced a real
conflict**: card 3's claim — "your code, your infrastructure, no lock-in" — asserts customer-owned
infrastructure, which contradicts the platform's actual multi-tenant shared-infrastructure model
(`company-industry-context.md` §4: "each new industry gets a tailored feature set on shared
infrastructure"). That claim traces back to the *original* old-homepage 4-card section
("AI infrastructure, built to scale" — screenshot-verified), which described a different,
now-deprecated positioning: bespoke custom AI engineering wired into *the client's own* stack
(the old "software agency with an AI service line" model `CONTENT_SUMMARY.md` §3 explicitly says
the redesign moves away from). Reusing that copy verbatim would pull the section back into the old
positioning even though the copy itself is real/live — so it wasn't reused.

**Decision: 3 cards, no 4th card.** A 4th card grounded in the confirmed self-run-agency
differentiator (`CONTENT_SUMMARY.md` §11) was drafted and considered, but the final call was to
keep the section at 3 cards only.

**Final copy, implemented in `homepage-v2.njk` lines 223-249:**

1. **Pre-built AI applications**
   "Applications already proven in production — not concepts, not pilots."
   *(Changed "already running" → "already proven" — avoids reading as a blanket live-status claim
   across all 4 verticals; only Education/Admizz and Agencies are confirmed live today, Real
   Estate has no client yet per `company-industry-context.md` §3.)*

2. **Deploy AI to production**
   "Tested, monitored systems shipped on schedule with reusable accelerators." *(unchanged — no
   fact conflicts.)*

3. **Scale to any use case**
   "Grows with demand and extends to any use case — without rebuilding from scratch."
   *(Dropped "your code, your infrastructure, no lock-in" entirely — the old-model infrastructure-
   ownership claim that doesn't fit the multi-tenant platform. Retitled from "Scale it. Own it
   completely." to just "Scale to any use case.")*

The section's header comment and the "Card 3 Animations" CSS comment were both updated in the same
edit to stay accurate to the final 3-card structure.

---

## 2. FAQ section — net new

**Current state**: no FAQ section exists anywhere on `homepage-v2.njk`. This is both a content gap
and a CLAUDE.md AEO requirement (FAQ sections expected for AI-citation visibility).

**Pattern source**: Kore.ai's marketing pages have **no on-page FAQ** (confirmed in
`koreai-content-reference.md`) — so format/rhythm is drawn from `docs/servicenow-content-reference.md`'s
FAQ pattern instead (short, direct question phrasing; 2-3 sentence answers, no hedging).

**Content source**: every answer below is grounded in CONTENT_SUMMARY.md facts. Two of the
draft questions exist specifically to **fix a real conflict CONTENT_SUMMARY.md flags** (§Summary
of Conflicts #1): the old 6-industry list appears in `aboutFaq.json`, `contact.njk`, and
`agentic-as-a-service.njk` FAQs — none of which match the new 4-vertical model. Homepage FAQ should
model the corrected answer.

1. **Q: What industries does ZunkireeLabs build for?**
   A: "Four core verticals today: Education, Agencies, Healthcare, and Real Estate — each running
   on the same shared platform underneath. Education and Agencies are live in production now;
   Healthcare and Real Estate are built to the same standard."

   *(Deliberately corrects the stale "six industries" framing — Education/Agencies claims live
   status per CONTENT_SUMMARY.md §5's production guardrail; Healthcare/Real Estate stay
   capability-led, matching the Industry Showcase section's own framing above it on the page.)*

2. **Q: Is this a demo or is it actually running somewhere?**
   A: "It's running. Admizz runs its education CRM deployment on this platform today, and
   ZunkireeLabs runs its own agency operations — deal pipeline, proposals, delivery, time tracking
   — on the exact same infrastructure. Nothing you see here is a concept."

   *(Directly answers the value prop from CONTENT_SUMMARY.md §5 — "We already run this, live, for
   your industry" — using only the two confirmed-live proof points.)*

3. **Q: What's actually shared across industries vs. built custom per client?**
   A: "The platform layer — multi-tenant architecture, Zunkiree Search, and orchestration — is
   shared. What sits on top of it is a pre-built application per vertical plus accelerators to
   launch fast, so a new customer isn't starting from zero."

   *(Restates the Pre-built → Accelerators → Platform model from CONTENT_SUMMARY.md §1, matching
   the Platform Pillars section directly above it.)*

4. **Q: Do we need to replace our existing systems to use this?**
   A: "No — the platform is built to sit on your own infrastructure and integrate with what you
   already run, not replace it wholesale. See 'Own it completely' above: you keep ownership of
   your stack."

   *(Ties directly to the new 4th Platform Pillar above — reinforces rather than introduces a new
   claim.)*

**Not included**: no question about pricing (no public pricing model confirmed in any doc — would
require fabricating an answer) and no per-industry deep-dive Q&A (that content belongs on the
future vertical pages, not the homepage, per CONTENT_SUMMARY.md §7's page hierarchy).

---

## 3. Closing CTA — ✅ shipped (2026-07-26)

**Current state**: page goes straight from the AI Insights/blog teaser into `footer-v2.njk` — no
dedicated bottom CTA banner, despite `PAGE_BLUEPRINTS.md`'s own homepage IA (§1) calling for a
"Dual closing CTA" before the footer.

**Pattern correction**: the first draft of this section sketched Kore.ai's two-stage back-to-back
banner pattern (`koreai-content-reference.md` §10 — outcome-framed banner immediately followed by a
platform-framed banner). Checking the project's own component spec before building surfaced a
mismatch: `COMPONENT_LIBRARY.md` §2.6 (CTA Banner) defines this slot as **one banner with a
mandatory hard+soft CTA pair** — "Headline + one-line support copy + Button Primary + Button
Secondary" — not two separate banners. The project's own spec takes precedence over the Kore.ai
reference pattern, so the two-stage draft was dropped in favor of the single-banner, dual-CTA
version actually implemented.

**Final copy, implemented in `homepage-v2.njk`** (before the footer include), `glass` variant per
§2.6 (the current signature motif, matching the sky-tinted glass cards already used elsewhere on
the page):

Headline: *"See it running for your industry"*
Support copy: "Education, Agencies, Healthcare, Real Estate — talk to us, or explore the shared platform underneath it all."
Button Primary (hard): `Talk to our team` → `/contact/`
Button Secondary (soft): `Explore the platform` → `/contact/`

*(CTA strategy source: CONTENT_SUMMARY.md §12 — hard CTA paired with a soft CTA, avoiding
"Request a Demo" phrasing per the doc's inference that industry-vertical language should read as
outcome-oriented rather than pilot/demo-flavored. Both buttons route to `/contact/` today since no
vertical pages or dedicated platform page exist yet — this mirrors how the Industry Showcase
section above already handles the same not-yet-built-page problem.)*

---

## Summary — what's ready to build next

| Gap | Status | Blocked by |
|---|---|---|
| Platform Pillars | ✅ Shipped — 3 cards, see §1 above | — |
| Closing CTA | ✅ Shipped — see §3 above | — |
| FAQ section | ✅ Shipped — 4 Q&As, accordion, see homepage-v2.njk | — |
| "One platform. Every capability." section | ✅ Shipped (2026-07-26) — see §4 below | — |
| Testimonials/Proof | Not drafted this round | Real client quotes (out of scope per your call) |

## 4. "One platform. Every capability." — ✅ shipped (2026-07-26)

**Problem found** (separate from the gaps above — surfaced later, mid-review): this section, unlike
the others, wasn't missing content — it had fact-check problems in content that already existed:

1. Subhead claimed the platform is "already running live across four industries" — only
   Education (Admizz) and Agencies (self-run + Mobilise) are confirmed live per
   `company-industry-context.md` §3; Healthcare is capability-led, Real Estate has no client yet.
   Contradicted the Industry Showcase section directly above it on the same page, which already
   gets this distinction right.
2. The Orca dashboard mockup showed real-time "live" node-status badges (`Agent: Running`,
   `Search: Active`, `Router: Healthy`), but `CONTENT_SUMMARY.md` §1 confirms Orca "is not a
   product at all today — it exists only as an unlabeled dashboard image asset... zero copy or
   page."
3. The mockup's simulated activity feed included a fabricated named result ("Supplier Alpha, 4%
   defect rate") not sourced from either doc.

**Fix — two parts, both fact-checked, both implemented:**

**A. Problem → Solution → Outcome triptych** (structural pattern only from
`koreai-content-reference.md` §5, not their copy) replaces the overclaiming subhead:

- **Problem — "Every industry runs on scattered tools"**: "Fragmented pipelines, manual tracking,
  disconnected systems — the same operational drag shows up whether it's application processing,
  deal flow, shift rostering, or capital raises." *(Generalized from `CONTENT_SUMMARY.md` §4's
  per-vertical pain points.)*
- **Solution — "One shared platform, tailored per industry"**: "Multi-tenant CRM, Zunkiree Search,
  and Orca underneath — a pre-built application and accelerators on top, purpose-built for each
  vertical instead of bolted on." *(The literal model from `company-industry-context.md` §1.)*
- **Outcome — "Proven where it's live"**: "45% faster response times for Admizz's education
  deployment. ZunkireeLabs runs its own agency operations — deal pipeline, proposals, delivery —
  on this exact platform." *(Only the two confirmed-live proof points, no blanket claim.)*

**B. Four per-vertical conversation-demo cards** replace the Orca dashboard — structurally
inspired by Kore.ai's own "Pre-built Applications" chat-mockup pattern (screenshot reference,
2026-07-26 — structure only, not their copy or persona names). Each demo is grounded in a real
documented capability from `company-industry-context.md` §3, labeled **Live** (Education,
Agencies) or **Capability** (Healthcare, Real Estate) so nothing overclaims:

- **Education** (Live): application-pipeline / visa-checklist exchange
- **Agencies** (Live): proposal-status / resourcing-capacity exchange
- **Healthcare** (Capability): compliance-gated shift-assignment exchange
- **Real Estate** (Capability): investor-commitment / data-room exchange

**Design system**: built via the `ui-ux-pro-max` skill + a direct read of `MASTER_DESIGN_SPEC.md`
§3 (glass-surface + soft-elevation techniques), §4 (color — sky's sanctioned secondary-status use
for the Capability badges), §5 (mono-uppercase-label rule), §6 (3-column / 4-column repeater grid
rules), §7 (spacing scale), §8 (radius system). No new colors, fonts, or spacing introduced — the
navy-900 chat-bubble fill reuses an existing precedent already in this file (the Platform Pillars
mockup's active-chip animation color, `#0f172a`).

Per the homepage-v2 working formula: pick one of the three ready items and I'll implement it
directly in `homepage-v2.njk`, then wait for your review before moving to the next.
