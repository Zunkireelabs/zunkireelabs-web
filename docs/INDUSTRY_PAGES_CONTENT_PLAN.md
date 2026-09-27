# Industry Vertical Pages — Content Plan

Content outline for the four industry pages (`/industries/education/`, `/industries/agencies/`, `/industries/healthcare/`, `/industries/real-estate/`), all sharing one template. Section order follows `docs/PAGE_BLUEPRINTS.md` §2 (Industry Vertical Page Template); density/rhythm is informed by the Kore.ai `ai-for-healthcare` content-structure research (see the approved plan) — specifically: a short pain-point framing before capability, more than one CTA moment down the page, and specific bullet-level capability copy over generic claims. Facts are sourced from `PRODUCT.md`, `company-industry-context.md`, and existing product/case-study data (`src/_data/productsDetails.json`, `src/_data/resources.json`) — nothing below is invented. Where a real number doesn't exist yet, it's marked `[NEEDS SADIN]` rather than filled with a plausible-sounding placeholder.

This doc is the field schema source for the eventual `src/_data/industries.js` — each section below maps to a data key of the same name.

---

## 1. Education (`/industries/education/`)

**Buyer**: Education consultancies / study-abroad recruitment firms.
**Primary CTA phrasing**: "Talk to our Education team" (never "Request a Demo").

### `hero`
- Eyebrow/label pill: "AI for Education"
- Headline (stated as live, not "coming soon"): working direction — *"The AI platform running live for education consultancies"* or *"Application pipelines, run by AI — already live for education recruiters"*
- Subhead: one sentence naming the core claim — multi-tenant CRM + AI search purpose-built for the application → offer → visa → enrollment pipeline.
- Primary CTA: "Talk to our Education team" · Secondary CTA: "See how Admizz uses it"

### `painPoint` (short, optional per Kore.ai rhythm — 2–3 short blocks, not a full section)
- Framing: manual inquiry handling, slow response times, and disconnected partner-college relationships are what cost education recruiters enrollments. Keep to 1–2 sentences total across 2-3 short blocks; this is a lead-in, not a full pain-point grid like Kore.ai's.

### `flagshipProof` — variant: `with-client-proof`
- Client: **Admizz** (education consultancy / study-abroad recruitment), live on the multi-tenant CRM with an education-specific module + Zunkiree Search deployment for student inquiries.
- Sourced result stats (from `src/_data/resources.json` admizz-case-study): **45% faster response times**, **3x improvement in student satisfaction**, **60% reduction in manual inquiry handling**.
- Card CTA: routes to Admizz case study / contact.

### `appOverview` — Pre-built application overview
- Heading: application pipeline management, live and in production.
- Body: document collection → application submitted → offer received → visa applied → enrolled, plus partner-college relationship management, campaign tracking, and AI-powered search over student/program information (Zunkiree Search).
- Visual: real product screenshot (device-framed) — asset TBD, use existing Admizz/CRM screenshots if available, else `[NEEDS ASSET]`.

### `accelerators` — composed as a How-It-Works sequence (per blueprint note), not a flat grid
1. Document collection & intake
2. Application submission tracking
3. Offer management
4. Visa application tracking
5. Enrollment confirmation
6. Partner-college relationship management (supporting, can sit as a 6th step or a side capability card)
7. Campaign tracking (supporting capability card)

### `platformTieIn`
- Shortened platform strip: multi-tenant AI CRM + Zunkiree Search as the shared infrastructure underneath. Reuse Zunkiree Search's real stats (`src/_data/productsDetails.json` → `search`): **100ms P95 response**, **99.9% uptime SLA**, **45% query reduction**, **50+ connectors**.
- Secondary CTA linking to the full Platform section/page.

### `stats` (proof/stat cards)
- Reuse the Admizz numbers above (45% faster response / 3x satisfaction / 60% reduction) — already the vertical's real, sourced metric per blueprint requirement (no invented stat allowed here).

### `closingCta`
- Hard: "Talk to our Education team" · Soft: "See the Admizz case study" (or "Explore the Platform").

---

## 2. Agencies (`/industries/agencies/`)

**Buyer**: IT and professional services agency owners/ops leads.
**Primary CTA phrasing**: "See how we run our own agency on this."

### `hero`
- Eyebrow: "AI for Agencies"
- Headline direction: *"The agency operating system we run our own business on"* — leads with the self-referential proof since it's the strongest trust signal available for this vertical.
- Subhead: deal pipeline, proposals, delivery, and utilization management, unified.
- Primary CTA: "See how we run our own agency on this" · Secondary: "Talk to our team"

### `painPoint` (short)
- Framing: disconnected deal pipelines, manual proposal building, and no real-time visibility into utilization are what stall agency growth.

### `flagshipProof` — variant: `with-client-proof`, **two proof instances** (per blueprint note — compose as two Industry/Vertical Card or Case Study instances, not one card)
1. **ZunkireeLabs (self-run)** — "We build it, then run our own business on it." Framed as the primary proof instance: deal pipeline, proposal builder (public share/print views), project cockpit (milestones, issues, change requests, RAID log), time tracking with approvals, resourcing/utilization dashboards, sales/delivery/overview dashboard suite.
2. **Mobilise** — external validation client running the same platform.
- Sourced stats: none confirmed yet — mark `[NEEDS SADIN: any Mobilise or internal ops metric to cite?]`. Do not fabricate a number; if none is confirmed, the proof cards rely on the self-run narrative + Mobilise's name alone, not a metric.

### `appOverview`
- Heading: agency operations, run end-to-end.
- Body: deal pipeline → proposal → project delivery → time/resourcing, as one connected system (this is effectively what ZunkireeLabs itself runs on).
- Visual: real product screenshot (proposal builder, project cockpit, or utilization dashboard) — `[NEEDS ASSET]`.

### `accelerators` — flat Feature Grid (3–4 col)
1. Deal pipeline management
2. Proposal builder (public share/print views)
3. Project cockpit (milestones, issues, change requests, RAID log)
4. Time tracking with approvals
5. Resourcing/utilization dashboards
6. Sales/delivery/overview dashboard suite

### `platformTieIn`
- Same shared platform strip pattern as Education (multi-tenant CRM + Orca orchestration layer, where relevant — Orca coordinates workflows across CRM/email/marketing tools, useful context for an agency-ops audience specifically).

### `stats`
- If no confirmed Mobilise/internal metric exists (per above), use a qualitative proof line instead of a numeric stat card — do not invent a number to fill the slot.

### `closingCta`
- Hard: "See how we run our own agency on this" · Soft: "Talk to our team"

---

## 3. Healthcare (`/industries/healthcare/`)

**Buyer**: Australian healthcare providers (hospitals, aged care, community care); secondarily healthcare professionals/employers for the recruitment side.
**Primary CTA phrasing**: "Talk to our Healthcare team."
**Guardrail (hard constraint)**: must not reference Dental AI Assistant or "Avantra" anywhere on this page — Dental AI's disposition is unresolved and its "Coming Soon" status directly conflicts with this page's no-pilot-language rule.

### `hero`
- Eyebrow: "AI for Healthcare"
- Headline direction: *"Compliance-gated workforce management, live for Australian care providers"*
- Subhead: credential tracking, compliance-gated scheduling, and workforce management for hospitals, aged care, and community care.
- Primary CTA: "Talk to our Healthcare team" · Secondary: "See platform capabilities"

### `painPoint` (short)
- Framing: unsafe or non-compliant rostering, fragmented credential tracking, and disconnected recruitment pipelines are the real risk/cost for care providers.

### `flagshipProof` — variant: `with-client-proof` if a real named client exists, else `capability-led`
- As of this writing, `company-industry-context.md` does not name a confirmed live client for Healthcare — treat as **`capability-led`** unless Sadin confirms a name. `[NEEDS SADIN: confirm whether a named Healthcare client exists — if not, this section stays capability-led like Real Estate.]`
- Capability framing (if capability-led): two connected products — (1) workforce/HR platform for nursing and aged-care providers with credential/licensure tracking and compliance-gated shift assignment that blocks unsafe rostering automatically, 3-axis staff classification, scheduling, time & attendance, leave management; (2) recruitment/job-matching platform connecting healthcare professionals with employers, designed to integrate with the workforce platform.
- Target market stated explicitly: Australian healthcare providers.

### `appOverview`
- Heading: compliance-gated shift rostering, automated.
- Body: the workforce/HR platform's core mechanism — automatic blocking of unsafe rostering via credential/licensure checks — is the single most concrete, demonstrable claim on this page; lead with it.
- Visual: real product screenshot of the rostering/compliance interface — `[NEEDS ASSET]`.

### `accelerators` — flat Feature Grid
1. Credential and licensure tracking
2. Compliance-gated shift assignment
3. 3-axis staff classification
4. Shift/roster scheduling
5. Time & attendance
6. Leave management
7. Recruitment/job-matching (framed as the connected second product, can sit as its own card or sub-block)

### `platformTieIn`
- Shared multi-tenant CRM/platform strip, framed toward healthcare compliance context specifically.

### `stats`
- No confirmed metric exists yet. `[NEEDS SADIN: any real Healthcare metric — e.g. compliance incidents prevented, scheduling time saved?]` Do not invent one; if none arrives, use a qualitative stat-style statement instead (e.g. naming the two connected products as the "stat" moment) rather than a fabricated numeral.

### `closingCta`
- Hard: "Talk to our Healthcare team" · Soft: "Explore the Platform"

---

## 4. Real Estate (`/industries/real-estate/`)

**Buyer**: CRE (commercial real estate) sponsor firms raising capital from investors.
**Primary CTA phrasing**: "See how the platform supports capital raises."
**Guardrail (hard constraint)**: no named client exists — `capability-led` variant only, never a placeholder logo or invented quote. Also must not be conflated with the separate consumer real estate marketplace product (property listings/home loans/fractional investing) — that is a different product for a different audience and does not belong on this page.

### `hero`
- Eyebrow: "AI for Real Estate"
- Headline direction: *"Built for CRE sponsor firms raising capital from investors"* — states the buyer directly since there's no client name to lead with instead.
- Subhead: offerings management, investor commitments tracking, capital-raise workflows, and a secure data room.
- Primary CTA: "See how the platform supports capital raises" · Secondary: "Talk to our team"

### `painPoint` (short)
- Framing: fragmented investor communications, manual commitment tracking, and insecure document sharing slow down every capital raise.

### `flagshipProof` — variant: `capability-led` (mandatory, no client exists)
- Capability copy centered on the buyer profile: CRE sponsor firms need offerings management, investor commitment tracking, and a secure data room to run a capital raise without fragmented tools.
- No logo, no quote, no fabricated metric — this section is copy-only, structured like the other verticals' proof card but without a client name or numeral.

### `appOverview`
- Heading: capital-raise workflows, in one system.
- Body: offerings management → investor commitments → secure data room, as one connected workflow for sponsor firms.
- Visual: `[NEEDS ASSET]` — likely an abstract/product-UI screenshot rather than a client photo (per blueprint's no-fabricated-logo guardrail, this vertical uses an abstract-gradient hero visual, not a screenshot-framed client shot, unless a real product screenshot exists).

### `accelerators` — flat Feature Grid
1. Offerings management
2. Investor commitments tracking
3. Capital-raise workflow orchestration
4. Secure data room

### `platformTieIn`
- Shared multi-tenant CRM/platform strip, same pattern as the other three verticals.

### `stats`
- No confirmed metric — do not invent one. If nothing is confirmed, replace the numeric stat-card slot with a short capability-reinforcement line instead (consistent with the `capability-led` treatment used throughout this page).

### `closingCta`
- Hard: "See how the platform supports capital raises" · Soft: "Talk to our team"

---

## Open items surfaced while writing this plan (flag to Sadin, don't resolve unilaterally)

- **Agencies**: no confirmed metric for Mobilise or internal ops — need a real number or explicit sign-off to run proof qualitatively without one.
- **Healthcare**: no confirmed named client for the flagship-proof section — confirm whether one exists before finalizing as `capability-led`.
- **Healthcare**: no confirmed metric for the proof/stat section.
- **Real Estate**: no confirmed metric (expected — `capability-led` by design, but flagging so the data file doesn't silently ship a placeholder number).
- **Assets**: every `appOverview` visual is marked `[NEEDS ASSET]` — real product screenshots need to be sourced or confirmed unavailable (in which case the vertical falls back to the abstract-gradient treatment Real Estate already uses).
