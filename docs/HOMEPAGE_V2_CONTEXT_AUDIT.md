# Homepage V2 vs. company-industry-context.md — Audit + Fix Plan

Session report. Source of truth: `C:\Users\AsusW11\Downloads\company-industry-context.md` (mtime 2026-07-20 12:18).
Status as of this report: **audit + fix plan only — no fixes executed yet.**

---

## 1. Deviations found (most → least severe)

1. **Nav "Platform" megamenu keeps a service-first Products list next to Industries**, contradicting §1 ("Products, accelerators, and case studies live *inside* an industry, not next to it as a separate nav tree").
   File: `src/_data/navigationV2.json:37-108` (rendered via `src/_includes/partials/navbar-v2.njk`).
   Lists Zunkiree Search, Dental AI, Gaamma, Stella, Zenly, AI CRM as a standalone tree — none of Dental AI/Gaamma/Stella/Zenly appear in the source doc at all.

2. **Real Estate nav description conflates CRE capital-raise vertical with the separate consumer real-estate marketplace product** — the exact conflation §5 explicitly forbids.
   File: `src/_data/navigationV2.json:20` — `"description": "AI-driven lead qualification and property workflows"`.
   This phrase appears **nowhere else in the repo** — invented fresh in navigationV2.json. The homepage card itself (`homepage-v2.njk:729`) gets it right ("Built for CRE sponsor firms raising capital from investors"); only the nav entry is wrong.

3. **Education nav description invents "AI tutoring"** — not in source doc at all.
   File: `src/_data/navigationV2.json:12` — `"description": "AI tutoring, admissions, and student support"`.
   Real capabilities per §3: application pipeline (document collection → application submitted → offer received → visa applied → enrolled), partner-college relationship mgmt, campaign tracking, AI search.

4. **Healthcare nav description describes a patient-facing tool that doesn't match the real (workforce/HR + recruitment) product.**
   File: `src/_data/navigationV2.json:19` — `"description": "AI patient communication and clinical workflow automation"`.
   This is actually recycled Dental AI copy (see provenance below), mislabeled as Healthcare. Real product per §3: credential/licensure tracking, compliance-gated shift assignment, 3-axis staff classification, shift/roster scheduling, time & attendance, leave mgmt, plus a connected recruitment/job-matching platform. Target: Australian healthcare providers.

5. **Orca and "Multi-tenant AI CRM"/edgeXcrm platform-layer branding are effectively absent from the shipped page.**
   `homepage-v2.njk:928-978` — Orca appears only in code *comments* explaining why it was deliberately cut. "edgeXcrm" appears nowhere in the repo. "Multi-tenant architecture" appears exactly once, buried in an FAQ answer (line 1388) — not a named pillar/section.
   (Note: the *removal* of Orca as a live/real-time dashboard claim was a **correct, well-documented fix** — see provenance item 8 below. The gap is that the platform layer isn't surfaced anywhere positively, not that Orca-as-fake-dashboard was kept.)

6. **"Live" vs. "Capability" badge distinction is specified but never rendered — dead data field.**
   `docs/HOMEPAGE_V2_COPY.md:194-198` specifies Education/Agencies = "Live" badge, Healthcare/Real Estate = "Capability" badge.
   `homepage-v2.njk` sets `live: true/false` per vertical in the `platformSections` array (~lines 1007-1056), but the card markup that renders these (~lines 1120-1163) never reads `section.live` / `item.live`. All four cards render identically — no badge distinction visible on the page.

7. **Agencies vertical is missing most of the required capability list.**
   File: `homepage-v2.njk:711-716` (card), `1020-1031` (chat demo).
   Present: deal pipeline, proposals, delivery, time tracking (unqualified — no "approvals"), resourcing capacity.
   Missing per §3: proposal builder's public share/print views, project cockpit (milestones/issues/change requests/RAID log), utilization dashboards, sales/delivery/overview dashboard suite.

8. **Healthcare vertical is missing several required capability details.**
   File: `homepage-v2.njk:718-725` (card), `1032-1043` (chat demo).
   Present: credential/licensure tracking, compliance-gated shift assignment.
   Missing per §3: 3-axis staff classification, time & attendance, leave management, and the second connected product (recruitment/job-matching platform).

9. **Hero "Explore the platform" CTA routes to `/services/`**, the pre-repositioning service-first URL — inconsistent with the identically-labeled CTA later on the same page which correctly routes to `/contact/`.
   File: `homepage-v2.njk:91` vs. `homepage-v2.njk:1498` (+ comment at 1457-1459 confirming the intended convention).

10. **Hero primary CTA says "Get a demo"**, in mild tension with the anti-demo/pilot guardrail (§2) and the subhead directly above it ("Not a prototype. Not a pilot. Already running in production today," lines 76-78).
    File: `homepage-v2.njk:87`. Lowest severity — flagged for completeness, not a clear violation (guardrail is about vertical-specific copy, not generic CTA labels).

**Not actually gaps (checked and cleared):**
- **Orca removal** — correctly traced to `docs/CONTENT_SUMMARY.md:27` finding that Orca "is not a product at all today," carried through `HOMEPAGE_V2_COPY.md §4` into the code comment. Deliberate, documented fix.
- **Live/Capability badge concept** — correctly specified in `HOMEPAGE_V2_COPY.md` and consistent with source doc §3. (The *rendering* of it is broken — see item 6 above — but the concept/spec itself is not a content gap.)

---

## 2. Provenance — where the false/fabricated content actually came from

Chronological baseline (oldest → newest, by mtime):
- `docs/website-revamp-plan.md`, `docs/24-12-2025-content-brief.md`, `docs/about-zunkireelabs.txt`, `src/_data/productsFaq.json` — **Jun 2**
- `src/_data/navigation.json` — **Jun 7**
- `src/_data/products.json`, `productsDetails.json` — **Jul 20, 11:12-11:18**
- `docs/DESIGN_AUDIT.md`, `PROJECT_AUDIT.md`, `CONTENT_SUMMARY.md`, `REDESIGN_STRATEGY.md` — **Jul 20, 12:34-13:07**
- **`company-industry-context.md` — Jul 20, 12:18** (source of truth — sits chronologically in the middle of the Jul 20 doc batch)
- `docs/PAGE_BLUEPRINTS.md` — **Jul 24**
- `docs/HOMEPAGE_V2_COPY.md` — **Jul 26, 15:14**; `navigationV2.json` — **Jul 26, 16:24**; `homepage-v2.njk` — **Jul 28** (newest)

| # | Item | Origin file(s) | Failure mode |
|---|---|---|---|
| 1 | Dental AI in Platform megamenu | `navigation.json` (Jun 7) ← `website-revamp-plan.md`, `24-12-2025-content-brief.md` (Jun 2) | Stale copy, never reconciled. `REDESIGN_STRATEGY.md:150` already flagged Dental AI's disposition as unresolved — shipped anyway. |
| 2 | Gaamma in Platform megamenu | `24-12-2025-content-brief.md:192-195`, `about-zunkireelabs.txt:155-157` (Jun 2) | Stale copy. No Manufacturing vertical exists in source doc. Description text even drifted further ("manufacturing ERP" → "business analytics platform") along the way. |
| 3 | "Stella" brand name | `productsDetails.json:159`, `products.json:22`, `ai-commerce-agent.njk:3` | **Invented fresh, zero doc backing anywhere** — not even `website-revamp-plan.md:454`'s own "5 products finalized" list included it. |
| 4 | "Zenly" brand name | Concept ("AI Booking Engine") from `website-revamp-plan.md`; brand name from `productsDetails.json:625`, `products.json:40` | Concept is older-doc-based; the brand name itself invented fresh, no doc backing. |
| 5 | Education nav "AI tutoring" | `navigation.json:216` (Jun 7) | Stale copy, copy-pasted verbatim into navigationV2.json unreconciled. |
| 6 | Healthcare nav "patient communication" | `navigation.json:202` (Jun 7) — traced further to recycled **Dental AI** copy (`productsDetails.json:474,479,493,511`) | Stale copy, copy-pasted AND mislabeled (Dental AI copy applied to Healthcare). |
| 7 | Real Estate nav "lead qualification and property workflows" | `navigationV2.json:20` only — appears nowhere else in repo | **Invented fresh** during homepage-v2 build. Actively conflates CRE vertical with consumer marketplace, the exact thing §5 warns against. |
| 8 | Orca removal | `CONTENT_SUMMARY.md:27` → `HOMEPAGE_V2_COPY.md §4` → `homepage-v2.njk` comment (928-978) | Correct, well-documented fix — not a fabrication. |
| 9 | Live/Capability badges | `HOMEPAGE_V2_COPY.md:82-87, 194-198` | Correctly specified, consistent with source doc §3. Rendering bug only (item 6 above). |
| 10 | Service-first "Platform" nav structure | `website-revamp-plan.md:124-144` (Jun 2) | Confirmed as the exact "predates this model" plan company-industry-context.md §1 names as superseded, and §6 flags as an unresolved open decision — shipped without reconciliation. |

**Summary of root cause:** most fabricated/stale content came from `navigation.json` (Jun 7) being copy-pasted into `navigationV2.json` (Jul 26) without ever being diffed against `company-industry-context.md` (Jul 20), which was written in between. Two items (Stella, Zenly brand names, and the Real Estate nav description) have **no doc origin at all** — invented directly in code/data during implementation.

---

## 3. Fix plan (not yet executed)

### 0. Decisions needed before executing (source doc §6: "flag to Sadin, don't resolve unilaterally")

**Decision A — What happens to Dental AI / Gaamma / Stella / Zenly?**
None exist in `company-industry-context.md`. Options:
- (a) Remove from top-level/primary nav entirely; leave pages live but unlinked from primary nav.
- (b) Fold relevant ones into a vertical where they fit (e.g., Dental AI as a Healthcare proof point, per `REDESIGN_STRATEGY.md:150`'s own suggestion). Gaamma (manufacturing ERP) doesn't fit any of the 4 verticals — keeping it implies a 5th vertical not sanctioned by source doc.
- (c) At minimum, strip "Stella" and "Zenly" brand names from anything client-facing since they have zero doc backing — describe generically if kept at all.

**Decision B — Does the "Platform" megamenu survive in any form?**
Source doc §1 implies products should live *inside* each industry, not as a parallel nav tree. Likely direction: demote/remove the Platform megamenu (contingent on Decision A) and instead surface Zunkiree Search / Orca / multi-tenant CRM as a single "platform layer" mention, not a second product catalog.

### 1. Nav data — `src/_data/navigationV2.json`
- Rewrite Education, Healthcare, Real Estate descriptions to match §3 verbatim capability sets (see deviations 2-4 above for exact wording to remove/replace).
- Tighten Agencies description against full §3 capability list.
- Restructure/remove "Platform" megamenu per Decision A/B.

### 2. Homepage body — `src/pages/homepage-v2.njk`
- Add missing Agencies capabilities (proposal builder share/print views, project cockpit incl. RAID log, utilization dashboards, sales/delivery/overview dashboard suite) — lines ~711-716, 1020-1031.
- Add missing Healthcare capabilities (3-axis staff classification, time & attendance, leave management, connected recruitment/job-matching product) — lines ~718-725, 1032-1043.
- Wire up the Live/Capability badge: read `section.live` in card markup (~1120-1163) so it actually renders per the spec in `HOMEPAGE_V2_COPY.md:194-198`.
- Surface Orca + multi-tenant AI CRM as a positively-worded platform-layer mention (not just the buried FAQ line 1388), worded cautiously per `PAGE_BLUEPRINTS.md`'s warning not to overclaim Orca.
- Fix hero CTA "Explore the platform" (line 91): `/services/` → `/contact/`.
- Reword hero CTA "Get a demo" (line 87) to avoid demo/pilot framing, consistent with the "Not a prototype. Not a pilot." subhead right above it (lines 76-78).

### 3. Verification pass (after edits)
- Grep full page + nav for leftover "demo," "pilot," "coming soon," "tutoring," "patient communication," "lead qualification."
- Confirm only §2's confirmed real client names appear anywhere: Admizz, Mobilise, ZunkireeLabs, Khems Cleaning, Prime Tiles, Rapid Investment, Mach24 Orbital, CMS Group, Khushbu Nirman Sewa, CoreCloud365.
- Confirm Real Estate section still names zero specific client — generic capability language only.

**Execution order once Decisions A/B are answered:** nav data (§1) → homepage capability copy (§2) → badge wiring → CTA fixes → verification grep (§3).

---

## Key file reference
- Source of truth: `C:\Users\AsusW11\Downloads\company-industry-context.md`
- Nav data: `src/_data/navigationV2.json`, rendered via `src/_includes/partials/navbar-v2.njk`
- Homepage template: `src/pages/homepage-v2.njk`
- Copy/planning doc: `docs/HOMEPAGE_V2_COPY.md`
- Other referenced docs: `docs/CONTENT_SUMMARY.md`, `docs/REDESIGN_STRATEGY.md`, `docs/PAGE_BLUEPRINTS.md`, `docs/website-revamp-plan.md`
