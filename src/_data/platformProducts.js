// Platform Infrastructure + Products pages — one entry per /products/{id}/ page
// rendered by src/_includes/layouts/product-v2.njk.
// Search, AI CRM, Gaamma, Dental AI, Stella, and Zenly content is reshaped
// from src/_data/productsDetails.json (that file is untouched — nothing
// still reads it via layouts/product.njk after this migration, but it's
// left in place as the source-of-truth copy these entries were derived
// from). Orca has no shipped product today; its content is limited to
// what's confirmed in company-industry-context.md §4 — no fabricated
// stats, clients, or FAQ. See docs/PAGE_BLUEPRINTS.md §3.
export default [
  {
    id: "search",
    title: "Zunkiree Search: AI-Native Search & Interaction Platform | Zunkiree Labs",
    description: "Transform how users discover information with Zunkiree Search. Our AI-native platform delivers direct answers through natural language, reducing support queries by 45%. Get a demo.",
    eyebrow: "Zunkiree Search",
    hero: {
      headline: "Search that understands what users actually mean",
      subhead: "",
      ctaPrimary: { label: "Schedule Demo", href: "/contact/" },
      ctaSecondary: { label: "Explore the platform", href: "/#platform" },
      badges: [
        { icon: "search", side: "left", offset: "outer" },
        { icon: "database", side: "left", offset: "inner" },
        { icon: "chat", side: "right", offset: "inner" },
        { icon: "mail", side: "right", offset: "outer" }
      ],
      interaction: {
        type: "typingSearch",
        queries: [
          "Show me blue shoes under $100",
          "What's our refund policy?",
          "How do I reset a password?",
          "Find the Q3 onboarding docs"
        ],
        suggestionPills: [
          { label: "Search product docs" },
          { label: "Find integration guide" },
          { label: "Look up API reference" }
        ]
      }
    },
    clients: [
      { name: "Admizz", logo: "/images/clients/admizz.webp" },
      { name: "CoreCloud365", logo: "/images/clients/corecloud365.webp" }
    ],
    testimonial: {
      company: "Admizz",
      role: "Operations Lead, Admizz",
      quote: "Response routing that used to sit in someone's inbox now runs itself, live in production."
    },
    challenges: {
      heading: "Traditional search leaves users searching, not finding",
      blocks: [
        { title: "Keyword search misses intent", description: "Link lists instead of answers leave users to dig for what they actually need.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
        { title: "Support queries pile up", description: "Repetitive questions flood support teams when users can't self-serve accurate answers.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M4 12h4l2 3h4l2-3h4"/><path d="M4 12 5.5 5A2 2 0 0 1 7.44 3.5h9.12A2 2 0 0 1 18.5 5L20 12"/><path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/></svg>' },
        { title: "Data scattered everywhere", description: "Knowledge spread across docs, databases, and knowledge bases makes answers hard to surface.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>' }
      ]
    },
    benefits: [
      { title: "Natural language, instant answers", description: "Users ask questions in plain language and receive accurate, contextual responses drawn from your entire data ecosystem. No keywords required — just natural conversation.", visual: "typing" },
      { title: "Sub-100ms response times at scale", description: "Enterprise-grade performance that handles millions of queries daily without degradation. Your users get instant answers, every time, regardless of load.", visual: "pulse" },
      { title: "Connect any data source in hours", description: "50+ pre-built connectors for databases, APIs, documents, and knowledge bases. Most integrations complete in under 2 hours with our JavaScript widget.", visual: "connect" }
    ],
    useCases: {
      heading: "Built for how your users actually search",
      items: [
        { title: "E-commerce", description: "Conversational product discovery — natural language queries return exactly what customers want.", features: ["Product recommendations", "Inventory queries", "Order tracking"] },
        { title: "Knowledge Management", description: "Make internal documentation searchable. Employees find answers in seconds instead of digging through folders.", features: ["Document search", "Policy lookups", "Onboarding assistance"] },
        { title: "Customer Support", description: "Reduce support tickets with instant, accurate answers while agents focus on complex problems.", features: ["Self-service resolution", "Agent assistance", "Ticket deflection"] },
        { title: "Data Analytics", description: "Query complex datasets in plain language — business users get insights without learning SQL.", features: ["Business intelligence", "Report generation", "Dashboard queries"] }
      ]
    },
    platformTieIn: {
      heading: "Built on the same platform as AI CRM and Orca",
      body: "Zunkiree Search is the retrieval layer of a shared platform — the same multi-tenant CRM and Orca orchestration run underneath every deployment.",
      pillars: [
        { name: "AI CRM", description: "Multi-tenant customer intelligence platform.", href: "/products/ai-crm/" },
        { name: "Orca", description: "Orchestration layer coordinating workflows across CRM, email, and marketing tools.", href: "/products/orca/" }
      ],
      cta: { label: "Explore the platform", href: "/#platform" }
    },
    relatedSolutions: [
      { title: "AI CRM", description: "Customer intelligence that drives revenue.", href: "/products/ai-crm/" },
      { title: "Orca", description: "AI orchestration across CRM, email, and marketing tools.", href: "/products/orca/" }
    ],
    faq: [
      { question: "What is Zunkiree Search?", answer: "Zunkiree Search is an AI-native search and interaction platform that enables businesses to deliver direct answers through natural language queries. Unlike traditional keyword-based search, it understands context and user intent." },
      { question: "How long does Zunkiree Search take to integrate?", answer: "Most customers complete integration within 2 hours using our JavaScript widget. Enterprise API integrations typically take 1-2 weeks depending on data complexity and custom requirements." },
      { question: "What data sources does Zunkiree Search connect to?", answer: "Zunkiree integrates with websites, documentation, knowledge bases, CMS platforms, and custom databases through our REST API and 50+ pre-built connectors including Notion, Confluence, and PostgreSQL." },
      { question: "How does Zunkiree Search pricing work?", answer: "Zunkiree Search pricing is based on query volume and data sources connected. Contact our sales team for a custom quote based on your specific requirements and scale." },
      { question: "Is Zunkiree Search secure for enterprise use?", answer: "Yes. Zunkiree Search includes role-based access control, end-to-end encryption, SOC 2 compliance, and can be deployed on-premises or in your own cloud environment for maximum data security." },
      { question: "How does Zunkiree Search understand user intent?", answer: "Zunkiree Search uses semantic understanding to grasp the meaning behind natural language queries instead of just focusing on keywords. This allows it to deliver relevant results even when users make typos or use natural phrasing." },
      { question: "What kind of performance can businesses expect from Zunkiree Search?", answer: "Zunkiree Search is designed for enterprise-grade performance, handling millions of queries daily with sub-100ms response times and a guaranteed 99.9% uptime SLA." },
      { question: "How does Zunkiree help reduce customer support queries?", answer: "By providing instant, accurate answers through natural language search, Zunkiree reduces support queries by 45%, enabling customers to resolve issues themselves without agent involvement." },
      { question: "What are some use cases for Zunkiree Search?", answer: "Zunkiree Search can be applied in various scenarios such as e-commerce for product discovery, internal knowledge management for employee support, and business intelligence for querying complex datasets using plain language." }
    ],
    closingCta: {
      eyebrow: "Get Started",
      headline: "Ready to transform your search?",
      body: "See how Zunkiree Search can improve user experience and engagement on your platform.",
      ctaPrimary: { label: "Schedule Demo", href: "/contact/" },
      ctaSecondary: { label: "Contact Sales", href: "/contact/" }
    }
  },
  {
    id: "ai-crm",
    title: "AI CRM: Customer Intelligence Platform | Zunkiree Labs",
    description: "CRM powered by AI. Predicts customer needs, automates outreach, and surfaces revenue-driving insights. 40% better lead conversion with 60% less data entry.",
    eyebrow: "AI CRM",
    hero: {
      headline: "Your customer data, transformed into action",
      subhead: "",
      ctaPrimary: { label: "Start Free Trial", href: "/contact/" },
      ctaSecondary: { label: "Explore the platform", href: "/#platform" },
      badges: [
        { icon: "users", side: "left", offset: "outer" },
        { icon: "chart", side: "left", offset: "inner" },
        { icon: "mail", side: "right", offset: "inner" },
        { icon: "workflow", side: "right", offset: "outer" }
      ],
      interaction: {
        type: "pills",
        items: [
          { label: "Score this lead" },
          { label: "Draft follow-up email" },
          { label: "Forecast this quarter" },
          { label: "Flag at-risk accounts" }
        ]
      }
    },
    clients: [],
    testimonial: {
      company: "CoreCloud365",
      role: "Founder, CoreCloud365",
      quote: "We didn't want a pilot, we wanted something we could hand to our team and forget about."
    },
    challenges: {
      heading: "Manual CRM work slows every deal down",
      blocks: [
        { title: "Leads scored on guesswork", description: "Demographics-only scoring misses the prospects who are actually ready to buy.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="8.5" cy="8.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none"/><circle cx="8.5" cy="15.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="15.5" cy="15.5" r="0.9" fill="currentColor" stroke="none"/></svg>' },
        { title: "Hours lost to data entry", description: "Emails, calls, and notes logged by hand instead of sold time.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="7" y1="10" x2="7" y2="10.01"/><line x1="11" y1="10" x2="11" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="7" y1="14" x2="17" y2="14"/></svg>' },
        { title: "Missed follow-ups", description: "Without a clear next action, deals stall and opportunities go cold.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><line x1="3" y1="3" x2="21" y2="21"/></svg>' }
      ]
    },
    benefits: [
      { title: "Predictive lead scoring that works", description: "AI analyzes behavior signals to score leads based on actual buying intent — not just demographics. Focus on prospects ready to buy now.", visual: "gauge" },
      { title: "Automatic activity capture", description: "Emails, calls, meetings, and notes are captured and logged automatically. Your team sells instead of doing data entry.", visual: "list" },
      { title: "Intelligent next-best-action", description: "AI recommends exactly what to do next for each deal — who to contact, what to say, and when. No more guessing or missed follow-ups.", visual: "path" }
    ],
    useCases: {
      heading: "Built for every revenue-facing team",
      items: [
        { title: "Sales Teams", description: "Prioritize hot leads, automate follow-ups, and get AI-powered coaching on every deal.", features: ["Lead prioritization", "Deal forecasting", "Email sequences"] },
        { title: "Marketing Teams", description: "Understand which campaigns drive real pipeline, and close the loop between marketing and sales.", features: ["Campaign attribution", "Lead routing", "Funnel analytics"] },
        { title: "Customer Success", description: "Identify at-risk accounts before they churn, and surface expansion opportunities.", features: ["Health scoring", "Churn prediction", "Renewal tracking"] },
        { title: "Revenue Leadership", description: "Real-time pipeline analytics and accurate forecasting to make decisions based on data, not guesses.", features: ["Pipeline analytics", "Forecast accuracy", "Team dashboards"] }
      ]
    },
    platformTieIn: {
      heading: "Built on the same platform as Zunkiree Search and Orca",
      body: "AI CRM is the shared tenant architecture every vertical deployment runs on — the same platform layer that powers Zunkiree Search and Orca orchestration.",
      pillars: [
        { name: "Zunkiree Search", description: "The shared search and retrieval layer across every deployment.", href: "/products/search/" },
        { name: "Orca", description: "Orchestration layer coordinating workflows across CRM, email, and marketing tools.", href: "/products/orca/" }
      ],
      cta: { label: "Explore the platform", href: "/#platform" }
    },
    relatedSolutions: [
      { title: "Zunkiree Search", description: "AI-native search that understands intent.", href: "/products/search/" },
      { title: "Orca", description: "AI orchestration across CRM, email, and marketing tools.", href: "/products/orca/" }
    ],
    faq: [
      { question: "What is AI CRM?", answer: "AI CRM is an intelligent customer relationship platform that combines traditional CRM functionality with AI-powered insights, automation, and predictions. It helps sales teams prioritize leads, automate outreach, and close deals faster." },
      { question: "How does AI CRM compare to Salesforce or HubSpot?", answer: "AI CRM is built AI-first, meaning intelligence is core to every feature — not an add-on. You get predictive scoring, automatic data capture, and next-best-action recommendations out of the box, without enterprise pricing or complex setup." },
      { question: "Can I import data from my existing CRM?", answer: "Yes. AI CRM includes one-click migration tools for Salesforce, HubSpot, Pipedrive, and other major CRMs. We also support CSV imports and API-based data transfer for custom systems." },
      { question: "How does automatic activity capture work?", answer: "AI CRM connects to your email (Gmail, Outlook), calendar, and phone system to automatically log communications. It uses AI to extract key information and associate activities with the right contacts and deals." },
      { question: "What's the pricing for AI CRM?", answer: "AI CRM pricing starts at $49/user/month for teams. Volume discounts available for larger teams. All plans include AI features, unlimited contacts, and standard integrations. Enterprise pricing available for custom requirements." }
    ],
    closingCta: {
      eyebrow: "Get Started",
      headline: "Ready to sell smarter?",
      body: "See how AI CRM can help your team close more deals with less effort.",
      ctaPrimary: { label: "Start Free Trial", href: "/contact/" },
      ctaSecondary: { label: "Schedule Demo", href: "/contact/" }
    }
  },
  {
    id: "orca",
    title: "Orca: AI Orchestration Layer | Zunkiree Labs",
    description: "Orca is the AI orchestration layer that coordinates agent workflows across your CRM, email, and marketing tools — one shared platform underneath every deployment.",
    eyebrow: "Orca",
    hero: {
      theme: "dark",
      headline: "One orchestration layer, every system connected",
      subhead: "Orca is the AI orchestration layer that sits above your CRM, email,<br class=\"hidden sm:block\" />and marketing tools, coordinating agent workflows across systems.",
      ctaPrimary: { label: "Talk to our team", href: "/contact/" },
      ctaSecondary: { label: "Explore the platform", href: "/#platform" },
      badges: [],
      interaction: { type: "none" }
    },
    clients: [],
    testimonial: null,
    outcomes: [
      { statLine: "One layer", title: "Connected by default", description: "Every tool Orca touches shares one coordination layer, so work started in one system finishes correctly in the others." },
      { statLine: "Zero manual sync", title: "No manual handoffs", description: "Agents pass context and status between CRM, email, and marketing tools automatically, instead of relying on someone updating the next one." },
      { statLine: "Shared platform", title: "Built on shared infrastructure", description: "Orca runs on the same multi-tenant platform underneath every Zunkiree deployment, so orchestration logic isn't rebuilt per client." }
    ],
    valueBullets: {
      heading: "Built for how systems actually connect",
      items: [
        { title: "Nothing to migrate", description: "Orca connects to the CRM, email, and marketing tools you already run — it doesn't ask you to replace them." },
        { title: "Every handoff visible", description: "Cross-system actions Orca coordinates are traceable, so teams can see what moved, where, and why." },
        { title: "Works with what you run", description: "Orca sits above your existing stack as a coordination layer, not a new system to adopt." }
      ]
    },
    pillars: [
      {
        id: "pillar-connect",
        eyebrow: "Connect",
        heading: "Link every connected tool into one layer",
        description: "Orca connects your CRM, email, and marketing tools — including the ones we build — so agents can read and act across systems instead of one at a time.",
        bullets: ["Works across CRM, email, and marketing tools", "Extends to new tools without rebuilding orchestration logic", "No data migration required"],
        visual: "connect"
      },
      {
        id: "pillar-coordinate",
        eyebrow: "Coordinate",
        heading: "Keep every system moving in step",
        description: "When work starts in one connected tool, Orca coordinates the matching follow-through in the others — automatically.",
        bullets: ["Cross-system status sync", "Automated handoff triggers", "No manual relay step between tools"],
        visual: "sync"
      },
      {
        id: "pillar-observe",
        eyebrow: "Observe",
        heading: "See what moved, where, and why",
        description: "Every cross-system action Orca coordinates stays visible, so teams can trust what happened without digging through each tool separately.",
        bullets: ["Traceable cross-system actions", "One place to see coordination activity", "No stale records left behind"],
        visual: "list"
      }
    ],
    challenges: {
      heading: "Disconnected tools mean disconnected work",
      blocks: [
        { title: "Systems that don't talk", description: "CRM, email, and marketing tools each hold part of the picture, none of the whole.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M9 15 6 18a3 3 0 0 1-4-4l3-3"/><path d="M15 9l3-3a3 3 0 0 0-4-4l-3 3"/><line x1="3" y1="21" x2="6" y2="18"/><line x1="18" y1="6" x2="21" y2="3"/></svg>' },
        { title: "Manual handoffs", description: "Work that moves between tools relies on someone remembering to update the next one.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M8 7 4 11l4 4"/><path d="M4 11h9a4 4 0 0 0 4-4"/><path d="M16 17l4-4-4-4"/><path d="M20 13h-9a4 4 0 0 0-4 4"/></svg>' },
        { title: "Stale information", description: "Data goes out of date the moment it's not being actively looked at.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M6 3h12"/><path d="M6 21h12"/><path d="M6 3c0 5 6 6 6 9s-6 4-6 9"/><path d="M18 3c0 5-6 6-6 9s6 4 6 9"/></svg>' }
      ]
    },
    benefits: [
      { title: "Coordinate agents across every connected tool", description: "Orca lets AI agents act across your CRM, email, and marketing tools as one coordinated system, instead of each tool operating in its own silo.", visual: "connect" },
      { title: "Built on the same shared infrastructure as every deployment", description: "Orca runs on the same multi-tenant platform underneath Zunkiree Search and AI CRM, so orchestration logic doesn't need to be rebuilt for every new system you connect.", visual: "stack" },
      { title: "Keeps every system in sync automatically", description: "When work moves in one connected tool, Orca coordinates the follow-through across the others, so information doesn't go stale in the systems your team isn't currently looking at.", visual: "sync" }
    ],
    useCases: {
      heading: "How Orca coordinates work across systems",
      items: [
        { title: "Lead-to-Customer Handoff", description: "When a lead moves through your CRM, Orca coordinates the matching updates across email sequences and marketing campaigns.", features: ["Cross-system status sync", "Automated handoff triggers"] },
        { title: "Campaign-to-Pipeline Coordination", description: "Marketing engagement signals feed directly into CRM records, so sales teams see pipeline context enriched by real activity.", features: ["Engagement signal sync", "No manual exports"] },
        { title: "Cross-System Status Sync", description: "Every connected tool reflects the same up-to-date relationship status, without someone manually updating each one.", features: ["Continuous coordination", "No stale records"] }
      ]
    },
    platformTieIn: {
      heading: "The coordination layer underneath Zunkiree Search and AI CRM",
      body: "Orca doesn't stand alone — it's the orchestration layer running underneath the same shared platform that powers Zunkiree Search and AI CRM, coordinating agent workflows across every connected system.",
      pillars: [
        { name: "Zunkiree Search", description: "The shared search and retrieval layer across every deployment.", href: "/products/search/" },
        { name: "AI CRM", description: "Multi-tenant customer intelligence platform.", href: "/products/ai-crm/" }
      ],
      cta: { label: "Explore the platform", href: "/#platform" }
    },
    relatedSolutions: [
      { title: "Zunkiree Search", description: "AI-native search that understands intent.", href: "/products/search/" },
      { title: "AI CRM", description: "Customer intelligence that drives revenue.", href: "/products/ai-crm/" }
    ],
    faq: [
      { question: "What is Orca?", answer: "Orca is the AI orchestration layer that sits above your CRM, email, and marketing tools, coordinating agent workflows across all of them so the systems your team already uses can work together instead of operating in isolation." },
      { question: "How is Orca different from Zunkiree Search or AI CRM?", answer: "Zunkiree Search and AI CRM are the products your team and customers interact with directly. Orca is the coordination layer underneath — it keeps agent workflows and data in sync across CRM, email, and marketing tools, including the ones we build." },
      { question: "Does Orca replace my CRM, email, or marketing tools?", answer: "No. Orca connects to the tools you already use rather than replacing them. It coordinates agent workflows across those systems instead of asking you to migrate away from them." },
      { question: "Is Orca available as a standalone product?", answer: "Orca currently powers orchestration underneath our platform deployments, including Zunkiree Search and AI CRM. Talk to our team about how it could apply to your specific systems." },
      { question: "How do I get started with Orca?", answer: "Since Orca is the coordination layer beneath our platform, the best starting point is a conversation about which systems you'd want connected. Reach out and we'll walk through what that looks like for your setup." }
    ],
    closingCta: {
      eyebrow: "Get Started",
      headline: "See how Orca coordinates your systems",
      body: "Talk to our team about connecting your CRM, email, and marketing tools under one orchestration layer.",
      ctaPrimary: { label: "Talk to our team", href: "/contact/" },
      ctaSecondary: { label: "Explore the platform", href: "/#platform" }
    }
  },
];
