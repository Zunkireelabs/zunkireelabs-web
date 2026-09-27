// Industry vertical page data — one entry per /industries/{id}/ page.
// Rendered by src/_includes/layouts/industry.njk via src/pages/industries/industry-pages.njk.
// Content sourced from docs/INDUSTRY_PAGES_CONTENT_PLAN.md — see that doc for guardrails/citations.
export default [
  {
    id: "education",
    title: "AI for Education | Zunkiree Labs",
    description: "Application pipeline management, partner-college relationships, and AI-powered student search — live in production for education consultancies.",
    eyebrow: "AI for Education",
    hero: {
      headline: "The AI platform running live for<br />education consultancies",
      subhead: "Application pipelines and partner-college relationships, unified.<br />Already running in production — not a pilot.",
      ctaPrimary: { label: "Talk to our Education team", href: "/contact/" },
      ctaSecondary: { label: "See how Admizz uses it", href: "/contact/" }
    },
    painPoint: {
      heading: "Manual inquiry handling costs enrollments",
      blocks: [
        { title: "Slow response times", description: "Every hour a student inquiry sits unanswered is a lead cooling off.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>' },
        { title: "Disconnected partner colleges", description: "Application status scattered across email threads and spreadsheets.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M9 15 6 18a3 3 0 0 1-4-4l3-3"/><path d="M15 9l3-3a3 3 0 0 0-4-4l-3 3"/><line x1="3" y1="21" x2="6" y2="18"/><line x1="18" y1="6" x2="21" y2="3"/></svg>' },
        { title: "Manual, repetitive triage", description: "Staff time spent sorting inquiries instead of closing enrollments.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M4 5h16l-6 7v5l-4 2v-7z"/></svg>' }
      ]
    },
    flagshipProof: {
      variant: "with-client-proof",
      client: "Admizz",
      categoryPill: "Live Client",
      headline: "Admizz runs its entire student inquiry pipeline on this platform",
      proofLine: "Admizz Education, a study-abroad recruitment consultancy, deployed the multi-tenant CRM's education module alongside Zunkiree Search for student inquiries.",
      stats: [
        { value: "45%", label: "Faster response times" },
        { value: "3x", label: "Student satisfaction improvement" },
        { value: "60%", label: "Reduction in manual inquiry handling" }
      ],
      cta: { label: "Read the Admizz story", href: "/contact/" }
    },
    appOverview: {
      heading: "Application pipeline management, live in production",
      body: "Document collection, application submission, offer management, visa tracking, and enrollment confirmation — one connected pipeline, plus partner-college relationship management, campaign tracking, and AI-powered search over student and program information.",
      image: null
    },
    accelerators: {
      style: "agent-grid",
      heading: "How the pipeline runs",
      eyebrow: "Runs as connected AI agents, not static features.",
      columns: [
        {
          title: "Application Intake",
          groups: [
            { name: "Intake Agent", tasks: ["Document collection", "Application status tracking"] },
            { name: "Offer Agent", tasks: ["Offer management", "Issued → awaiting acceptance"] }
          ]
        },
        {
          title: "Compliance & Enrollment",
          groups: [
            { name: "Visa Tracking Agent", tasks: ["Visa stage tracking", "Alongside the enrollment record"] },
            { name: "Enrollment Agent", tasks: ["Enrollment confirmation", "Closes the pipeline — no dropped thread"] }
          ]
        },
        {
          title: "Partners & Campaigns",
          groups: [
            { name: "Partner Relationship Agent", tasks: ["Partner-college relationship management"] },
            { name: "Campaign Tracking Agent", tasks: ["Recruitment campaign tracking", "Tied to real enrollment outcomes"] }
          ],
          connectsTo: "Application Intake"
        }
      ]
    },
    platformTieIn: {
      heading: "Built on Zunkiree Search and the multi-tenant AI CRM",
      body: "The same AI search platform powering Admizz's student inquiries — sub-second answers, enterprise reliability, dozens of data connectors.",
      stats: [
        { value: "100ms", label: "P95 Response" },
        { value: "99.9%", label: "Uptime SLA" },
        { value: "45%", label: "Query Reduction" },
        { value: "50+", label: "Connectors" }
      ],
      cta: { label: "Explore the platform", href: "/contact/" }
    },
    closingCta: {
      eyebrow: "Get Started",
      headline: "Run your education pipeline the way Admizz does",
      body: "Talk to our Education team, or see how Admizz uses the platform today.",
      ctaPrimary: { label: "Talk to our Education team", href: "/contact/" },
      ctaSecondary: { label: "See the Admizz story", href: "/contact/" }
    }
  },
  {
    id: "agencies",
    title: "AI for Agencies | Zunkiree Labs",
    description: "Deal pipeline, proposals, delivery, and utilization management — the agency operating system Zunkiree Labs runs its own business on.",
    eyebrow: "AI for Agencies",
    hero: {
      headline: "The agency operating system we run<br />our own business on",
      subhead: "Deal pipeline, proposals, and delivery, unified.<br />Proven by running our own agency operations on it.",
      ctaPrimary: { label: "See how we run our own agency on this", href: "/contact/" },
      ctaSecondary: { label: "Talk to our team", href: "/contact/" }
    },
    painPoint: {
      heading: "Disconnected tools stall agency growth",
      blocks: [
        { title: "Fragmented deal pipeline", description: "Deals tracked in spreadsheets disconnected from delivery.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/></svg>' },
        { title: "Manual proposal building", description: "Every proposal rebuilt from scratch instead of a shared system.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>' },
        { title: "No utilization visibility", description: "Resourcing decisions made without real-time data.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="18" y1="20" x2="18" y2="15"/></svg>' }
      ]
    },
    flagshipProof: {
      variant: "with-client-proof",
      multi: true,
      instances: [
        {
          client: "Zunkiree Labs (self-run)",
          categoryPill: "Self-Run",
          headline: "We build it, then run our own business on it",
          proofLine: "Zunkiree Labs runs its own agency operations on this platform — deal pipeline, proposal builder, project cockpit, time tracking, and resourcing dashboards.",
          cta: { label: "Talk to our team", href: "/contact/" }
        },
        {
          client: "Mobilise",
          categoryPill: "Live Client",
          headline: "Mobilise runs its agency operations on the same platform",
          proofLine: "External validation alongside our own self-run proof — the same system serving a second agency's day-to-day delivery operations.",
          cta: { label: "Talk to our team", href: "/contact/" }
        }
      ],
      statsNote: "[NEEDS SADIN: confirmed metric for Mobilise or internal ops]"
    },
    appOverview: {
      heading: "Agency operations, run end-to-end",
      body: "Deal pipeline through proposal, project delivery, and time/resourcing — one connected system, the same one ZunkireeLabs runs its own business on.",
      image: null
    },
    accelerators: {
      style: "agent-grid",
      heading: "What runs inside it",
      eyebrow: "Runs as connected AI agents, not static features.",
      columns: [
        {
          title: "Sales & Proposals",
          groups: [
            { name: "Deal Pipeline Agent", tasks: ["Deal pipeline management", "First contact to signed contract"] },
            { name: "Proposal Agent", tasks: ["Proposal builder", "Public share & print views"] }
          ]
        },
        {
          title: "Delivery & Execution",
          groups: [
            { name: "Project Cockpit Agent", tasks: ["Milestones, issues & change requests", "RAID log in one view"] },
            { name: "Time Tracking Agent", tasks: ["Time tracking with approvals", "Approval routing to billing"] }
          ]
        },
        {
          title: "Resourcing & Insights",
          groups: [
            { name: "Utilization Agent", tasks: ["Resourcing & utilization dashboards", "Overbooked vs. capacity, real time"] },
            { name: "Reporting Agent", tasks: ["Sales/delivery/overview dashboards"] }
          ],
          connectsTo: "Delivery & Execution"
        }
      ]
    },
    platformTieIn: {
      heading: "Built on the multi-tenant AI CRM and Orca",
      body: "The same shared platform layer running every vertical — with Orca coordinating agent workflows across CRM, email, and marketing tools for agency-specific operations.",
      stats: [],
      cta: { label: "Explore the platform", href: "/contact/" }
    },
    closingCta: {
      eyebrow: "Get Started",
      headline: "Run your agency the way we run ours",
      body: "See how we run our own agency on this, or talk to our team about your operations.",
      ctaPrimary: { label: "See how we run our own agency on this", href: "/contact/" },
      ctaSecondary: { label: "Talk to our team", href: "/contact/" }
    }
  },
  {
    id: "healthcare",
    title: "AI for Healthcare | Zunkiree Labs",
    description: "Compliance-gated workforce management, credential tracking, and recruitment/job-matching — for Australian healthcare providers.",
    eyebrow: "AI for Healthcare",
    hero: {
      headline: "Compliance-gated workforce management, live for<br />Australian care providers",
      subhead: "Credential tracking and compliance-gated scheduling,<br />built for hospitals, aged care, and community care.",
      ctaPrimary: { label: "Talk to our Healthcare team", href: "/contact/" },
      ctaSecondary: { label: "See platform capabilities", href: "/contact/" }
    },
    painPoint: {
      heading: "Unsafe rostering is a real, ongoing risk",
      blocks: [
        { title: "Unsafe rostering risk", description: "Manual scheduling can't reliably enforce credential and licensure rules.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M12 3 5 6v6c0 5 3 8 7 9 4-1 7-4 7-9V6l-7-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="16.25" r="0.75" fill="currentColor" stroke="none"/></svg>' },
        { title: "Fragmented credential tracking", description: "Licensure records scattered across systems, hard to audit.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect x="5" y="4" width="14" height="16" rx="2"/><circle cx="12" cy="10" r="2.5"/><path d="M8 17c.5-2 2-3 4-3s3.5 1 4 3"/></svg>' },
        { title: "Disconnected recruitment", description: "Hiring pipelines that don't talk to the workforce platform.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><path d="M16 8a3 3 0 0 1 0 6"/><path d="M16.5 14c2.5.3 4.5 2.6 4.5 6"/></svg>' }
      ]
    },
    flagshipProof: {
      variant: "capability-led",
      categoryPill: "Capability",
      headline: "Two connected products for healthcare workforce operations",
      proofLine: "A workforce/HR platform for nursing and aged-care providers with compliance-gated shift assignment that blocks unsafe rostering automatically, plus a recruitment/job-matching platform connecting healthcare professionals with employers — designed to integrate directly with the workforce platform. Built for Australian healthcare providers: hospitals, aged care, and community care organizations.",
      cta: { label: "Talk to our Healthcare team", href: "/contact/" }
    },
    appOverview: {
      heading: "Compliance-gated shift rostering, automated",
      body: "Credential and licensure checks run automatically before a shift can be assigned — unsafe rostering is blocked at the source, not caught after the fact.",
      image: null
    },
    accelerators: {
      style: "agent-grid",
      heading: "What runs inside it",
      eyebrow: "Runs as connected AI agents, not static features.",
      columns: [
        {
          title: "Compliance & Credentialing",
          groups: [
            { name: "Credentialing Agent", tasks: ["Licensure tracking", "Expiry & scope checks"] },
            { name: "Rostering Safeguard Agent", tasks: ["Compliance-gated shift assignment", "3-axis staff classification"] }
          ]
        },
        {
          title: "Scheduling & Workforce",
          groups: [
            { name: "Scheduling Agent", tasks: ["Shift & roster scheduling", "Compliance-aware rostering"] },
            { name: "Time & Leave Agent", tasks: ["Time & attendance", "Leave management"] }
          ]
        },
        {
          title: "Recruitment",
          groups: [
            { name: "Job-Matching Agent", tasks: ["Recruitment & job-matching platform"] },
            { name: "Integration Agent", tasks: ["Connects directly to the workforce platform"] }
          ],
          connectsTo: "Scheduling & Workforce"
        }
      ]
    },
    platformTieIn: {
      heading: "Built on the multi-tenant AI CRM",
      body: "The same shared platform layer running every vertical, configured for healthcare compliance context.",
      stats: [],
      cta: { label: "Explore the platform", href: "/contact/" }
    },
    closingCta: {
      eyebrow: "Get Started",
      headline: "Put compliance-gated scheduling to work for your team",
      body: "Talk to our Healthcare team, or explore what the platform can do.",
      ctaPrimary: { label: "Talk to our Healthcare team", href: "/contact/" },
      ctaSecondary: { label: "Explore the Platform", href: "/contact/" }
    }
  },
  {
    id: "real-estate",
    title: "AI for Real Estate | Zunkiree Labs",
    description: "Offerings management, investor commitments, capital-raise workflows, and a secure data room — built for CRE sponsor firms raising capital.",
    eyebrow: "AI for Real Estate",
    hero: {
      headline: "Built for CRE sponsor firms raising<br />capital from investors",
      subhead: "Offerings management and investor commitment tracking,<br />plus capital-raise workflows and a secure data room.",
      ctaPrimary: { label: "See how the platform supports capital raises", href: "/contact/" },
      ctaSecondary: { label: "Talk to our team", href: "/contact/" }
    },
    painPoint: {
      heading: "Fragmented tools slow down every capital raise",
      blocks: [
        { title: "Fragmented investor communication", description: "Commitments tracked across email and spreadsheets.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>' },
        { title: "Manual commitment tracking", description: "No single source of truth for who committed what.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="m9 13 2 2 4-4"/></svg>' },
        { title: "Insecure document sharing", description: "Sensitive offering documents shared without a proper data room.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>' }
      ]
    },
    flagshipProof: {
      variant: "capability-led",
      categoryPill: "Capability",
      headline: "Built for CRE sponsor firms raising capital from investors",
      proofLine: "Offerings management, investor commitment tracking, and a secure data room for CRE sponsor firms running a capital raise — no fabricated client, built around the real buyer profile.",
      cta: { label: "Talk to our team", href: "/contact/" }
    },
    appOverview: {
      heading: "Capital-raise workflows, in one system",
      body: "Offerings management, investor commitments, and a secure data room — one connected workflow for sponsor firms running a raise.",
      image: null
    },
    accelerators: {
      style: "agent-grid",
      heading: "What runs inside it",
      eyebrow: "Runs as connected AI agents, not static features.",
      columns: [
        {
          title: "Offerings & Capital Raise",
          groups: [
            { name: "Offerings Agent", tasks: ["Offerings management", "Structure & status tracking"] },
            { name: "Capital-Raise Agent", tasks: ["Capital-raise workflow orchestration", "Coordinates open to close"] }
          ]
        },
        {
          title: "Investor Relations",
          groups: [
            { name: "Commitment Tracking Agent", tasks: ["Investor commitments tracking", "Real-time commitment status"] }
          ]
        },
        {
          title: "Data Room & Security",
          groups: [
            { name: "Data Room Agent", tasks: ["Secure data room", "Document access control"] }
          ],
          connectsTo: "Investor Relations"
        }
      ]
    },
    platformTieIn: {
      heading: "Built on the multi-tenant AI CRM",
      body: "The same shared platform layer running every vertical, configured for capital-raise workflows.",
      stats: [],
      cta: { label: "Explore the platform", href: "/contact/" }
    },
    closingCta: {
      eyebrow: "Get Started",
      headline: "Run your next capital raise on the platform",
      body: "See how the platform supports capital raises, or talk to our team.",
      ctaPrimary: { label: "See how the platform supports capital raises", href: "/contact/" },
      ctaSecondary: { label: "Talk to our team", href: "/contact/" }
    }
  }
];
