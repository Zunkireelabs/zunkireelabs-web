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
      { title: "Orca", description: "AI orchestration across CRM, email, and marketing tools.", href: "/products/orca/" },
      { title: "Gaamma", description: "Manufacturing ERP with predictive insights.", href: "/products/gaamma/" }
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
      { title: "Orca", description: "AI orchestration across CRM, email, and marketing tools.", href: "/products/orca/" },
      { title: "AI Booking Engine", description: "Intelligent scheduling that fills your calendar.", href: "/products/ai-booking-engine/" }
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
      headline: "One orchestration layer, every system connected",
      subhead: "Orca is the AI orchestration layer that sits above your CRM, email,<br class=\"hidden sm:block\" />and marketing tools, coordinating agent workflows across systems.",
      ctaPrimary: { label: "Talk to our team", href: "/contact/" },
      ctaSecondary: { label: "Explore the platform", href: "/#platform" },
      badges: [
        { icon: "workflow", side: "left", offset: "outer" },
        { icon: "mail", side: "left", offset: "inner" },
        { icon: "users", side: "right", offset: "inner" },
        { icon: "database", side: "right", offset: "outer" }
      ],
      interaction: {
        type: "pills",
        items: [
          { label: "Sync CRM to email" },
          { label: "Route lead to sales" },
          { label: "Update campaign status" },
          { label: "Coordinate agent handoff" }
        ]
      }
    },
    clients: [],
    testimonial: null,
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
  {
    id: "gaamma",
    title: "Gaamma: Manufacturing ERP Platform | Zunkiree Labs",
    description: "End-to-end manufacturing ERP that unifies production planning, inventory management, and quality control. See 30% less downtime and 25% better inventory turns.",
    eyebrow: "Gaamma",
    icon: "chart",
    hero: {
      headline: "Manufacturing operations, unified and intelligent",
      subhead: "",
      ctaPrimary: { label: "Request Demo", href: "/contact/" },
      ctaSecondary: { label: "Explore the platform", href: "/#platform" },
      interaction: {
        type: "pills",
        items: [
          { label: "Track work order status", reply: "Work order #482 is in final assembly — on schedule." },
          { label: "Predict maintenance windows", reply: "Line 3 flagged for maintenance in 6 hours." },
          { label: "Check inventory levels", reply: "214 units in stock — reorder point met for SKU-118." },
          { label: "Optimize production schedule", reply: "Schedule rebalanced — 12% faster changeover." }
        ]
      }
    },
    clients: [],
    testimonial: null,
    challenges: {
      heading: "Disconnected floor systems slow every decision down",
      blocks: [
        { title: "Production visibility gaps", description: "Work orders, machines, and operators live in separate systems, so no one can see exactly where a job stands." },
        { title: "Downtime catches you by surprise", description: "Without predictive signals, equipment failures show up as unplanned stops instead of scheduled maintenance." },
        { title: "Inventory turns stay flat", description: "Manual reordering and disconnected warehouse data keep stock levels guessing instead of optimized." }
      ]
    },
    benefits: [
      { title: "Complete production visibility", description: "Track every work order, machine, and operator in real-time. Know exactly where every product is in your manufacturing process at any moment.", visual: "stack" },
      { title: "Predictive maintenance intelligence", description: "AI-powered equipment monitoring predicts failures before they happen. Reduce unplanned downtime by scheduling maintenance at optimal times.", visual: "pulse" },
      { title: "Connects to your existing systems", description: "Integrates with PLCs, SCADA systems, accounting software, and IoT sensors. No rip-and-replace required — Gaamma works alongside your current setup.", visual: "connect" }
    ],
    useCases: {
      heading: "Built for how modern factories actually run",
      items: [
        { title: "Discrete Manufacturing", description: "Manage complex BOMs, work orders, and assembly operations. Track serialized parts and maintain complete product genealogy.", features: ["Multi-level BOM management", "Work order scheduling", "Serial/lot tracking"] },
        { title: "Process Manufacturing", description: "Handle batch processing, recipe management, and yield optimization. Maintain strict compliance with industry regulations.", features: ["Recipe/formula management", "Batch tracking", "Yield optimization"] },
        { title: "Job Shop", description: "Handle high-mix, low-volume production with ease. Quote accurately, schedule efficiently, and deliver on time.", features: ["Quote management", "Dynamic scheduling", "Job costing"] },
        { title: "Warehouse & Distribution", description: "Optimize stock levels, automate reordering, and manage multi-warehouse operations with intelligent inventory control.", features: ["Multi-warehouse management", "Automated reordering", "Shipping integration"] }
      ]
    },
    platformTieIn: {
      heading: "Runs on the same platform as AI CRM and Orca",
      body: "Gaamma shares its underlying multi-tenant architecture with AI CRM and Orca, so manufacturing operations plug into the broader Zunkiree platform rather than sitting in a silo.",
      pillars: [
        { name: "AI CRM", description: "Multi-tenant customer intelligence platform.", href: "/products/ai-crm/" },
        { name: "Orca", description: "Orchestration layer coordinating workflows across CRM, email, and marketing tools.", href: "/products/orca/" }
      ],
      cta: { label: "Explore the platform", href: "/#platform" }
    },
    relatedSolutions: [
      { title: "AI CRM", description: "Customer intelligence that drives revenue.", href: "/products/ai-crm/" },
      { title: "Zunkiree Search", description: "AI-native search that understands intent.", href: "/products/search/" },
      { title: "Orca", description: "AI orchestration across CRM, email, and marketing tools.", href: "/products/orca/" }
    ],
    faq: [
      { question: "What is Gaamma?", answer: "Gaamma is an end-to-end manufacturing ERP platform that unifies production planning, inventory management, quality control, and analytics. It's designed for manufacturers seeking to digitize operations and gain real-time visibility across their entire production process." },
      { question: "How long does Gaamma take to implement?", answer: "Implementation typically takes 8-12 weeks for core modules. This includes data migration, system configuration, integration with existing equipment, and staff training. Phased rollouts are available for larger operations." },
      { question: "Does Gaamma integrate with our existing equipment?", answer: "Yes. Gaamma connects to PLCs, SCADA systems, IoT sensors, and most industrial equipment through standard protocols (OPC-UA, MQTT, Modbus). We also integrate with popular accounting systems like QuickBooks and SAP." },
      { question: "Is Gaamma suitable for small manufacturers?", answer: "Gaamma scales from single-facility operations to multi-plant enterprises. We offer modular pricing so you only pay for the capabilities you need, with the ability to add modules as you grow." },
      { question: "What kind of support does Gaamma include?", answer: "All Gaamma plans include 24/7 technical support, regular software updates, and access to our customer success team. Enterprise plans add dedicated account management and on-site training options." }
    ],
    closingCta: {
      eyebrow: "Get Started",
      headline: "Ready to modernize your factory?",
      body: "See how Gaamma can transform your manufacturing operations with a personalized demo.",
      ctaPrimary: { label: "Request Demo", href: "/contact/" },
      ctaSecondary: { label: "Contact Sales", href: "/contact/" }
    }
  },
  {
    id: "dental-ai",
    title: "Dental AI Assistant: AI-Powered Dental Practice Management | Zunkiree Labs",
    description: "Intelligent assistant for dental practices. Automates patient communication, scheduling, and follow-ups. Reduce no-shows by 35% and save 15+ hours weekly.",
    eyebrow: "Dental AI Assistant",
    icon: "dental",
    hero: {
      statusBadge: "Coming Soon",
      headline: "Your practice's always-on patient communication partner",
      subhead: "",
      ctaPrimary: { label: "Join Waitlist", href: "/contact/" },
      ctaSecondary: { label: "Explore the platform", href: "/#platform" },
      interaction: {
        type: "pills",
        items: [
          { label: "Book next appointment", reply: "Booked Tuesday 2:30pm with Dr. Shah." },
          { label: "Answer insurance question", reply: "Your plan covers 80% of this procedure." },
          { label: "Send visit reminder", reply: "Reminder sent via SMS for tomorrow's visit." },
          { label: "Request a review", reply: "Review request sent — thanks for visiting!" }
        ]
      }
    },
    clients: [],
    testimonial: null,
    challenges: {
      heading: "Routine patient communication eats every open hour",
      blocks: [
        { title: "Calls stack up during office hours", description: "Scheduling, pricing, and insurance questions compete with in-chair patient care for staff attention." },
        { title: "No-shows go unmanaged", description: "Without timely, personalized reminders, patients forget appointments and chairs sit empty." },
        { title: "Reviews go unrequested", description: "Satisfied patients rarely leave a review unless someone follows up right after their visit." }
      ]
    },
    benefits: [
      { title: "24/7 patient communication", description: "Patients get instant answers to questions about procedures, pricing, and availability — anytime. No more missed calls or voicemails stacking up.", visual: "pulse" },
      { title: "Intelligent appointment scheduling", description: "AI considers treatment duration, provider availability, and patient preferences to book optimal appointment times automatically.", visual: "sync" },
      { title: "Personalized follow-up automation", description: "Automated reminders, post-visit check-ins, and recall notifications via SMS, email, or voice — personalized to each patient's preferences.", visual: "stack" }
    ],
    useCases: {
      heading: "Built for how patients actually reach your practice",
      items: [
        { title: "Patient Communication", description: "Answer common questions about procedures, pricing, insurance, and availability instantly — without staff involvement.", features: ["Procedure FAQs", "Pricing inquiries", "Insurance questions"] },
        { title: "Smart Scheduling", description: "AI schedules appointments considering treatment time, chair availability, provider schedules, and patient preferences.", features: ["Online booking", "Waitlist management", "Provider matching"] },
        { title: "Appointment Reminders", description: "Multi-channel reminders that adapt to patient preferences. Confirmations, day-before reminders, and easy rescheduling options.", features: ["SMS reminders", "Email confirmations", "Easy rescheduling"] },
        { title: "Review Management", description: "Automated post-visit follow-ups that encourage satisfied patients to leave reviews on Google, Yelp, and healthcare directories.", features: ["Post-visit surveys", "Review requests", "Reputation monitoring"] }
      ]
    },
    platformTieIn: {
      heading: "Built on the same platform as AI CRM and Orca",
      body: "Dental AI Assistant runs on the same multi-tenant architecture as our AI CRM and Orca orchestration layer, so patient communication plugs into the broader Zunkiree platform rather than sitting in a silo.",
      pillars: [
        { name: "AI CRM", description: "Multi-tenant customer intelligence platform.", href: "/products/ai-crm/" },
        { name: "Orca", description: "Orchestration layer coordinating workflows across CRM, email, and marketing tools.", href: "/products/orca/" }
      ],
      cta: { label: "Explore the platform", href: "/#platform" }
    },
    relatedSolutions: [
      { title: "AI Booking Engine", description: "Intelligent scheduling that fills your calendar.", href: "/products/ai-booking-engine/" },
      { title: "AI CRM", description: "Customer intelligence that drives revenue.", href: "/products/ai-crm/" }
    ],
    faq: [
      { question: "What is Dental AI Assistant?", answer: "Dental AI Assistant is an intelligent platform that automates patient communication, appointment scheduling, and follow-ups for dental practices. It handles routine inquiries 24/7 so your staff can focus on in-office patient care." },
      { question: "Is Dental AI Assistant HIPAA compliant?", answer: "Yes. Dental AI Assistant is fully HIPAA compliant with end-to-end encryption, secure data storage, and BAA agreements available. All patient communications are logged and auditable." },
      { question: "Does it integrate with my practice management software?", answer: "Dental AI Assistant integrates with major dental practice management systems including Dentrix, Eaglesoft, Open Dental, and Curve. Integration typically takes 1-2 days." },
      { question: "When will Dental AI Assistant be available?", answer: "Dental AI Assistant is currently in private beta with select practices. Join our waitlist to be notified when we open general availability, expected Q3 2026." },
      { question: "What does Dental AI Assistant cost?", answer: "Pricing will be based on practice size and feature requirements. Early waitlist members will receive preferred pricing. Contact us for details." }
    ],
    closingCta: {
      eyebrow: "Coming Soon",
      headline: "Be the first to transform your practice",
      body: "Join the waitlist for early access to Dental AI Assistant and help shape the future of dental practice automation.",
      ctaPrimary: { label: "Join Waitlist", href: "/contact/" },
      ctaSecondary: { label: "Request Early Access", href: "/contact/" }
    }
  },
  {
    id: "ai-commerce-agent",
    title: "Stella: AI Commerce Agent for Agentic Ecommerce | Zunkiree Labs",
    description: "Autonomous AI agents that handle the entire ecommerce buying journey. Agentic commerce platform with eSewa, Khalti integration. Built for Nepal and global markets.",
    eyebrow: "Stella — AI Commerce Agent",
    icon: "cart",
    hero: {
      headline: "Autonomous AI agents that sell for you, 24/7",
      subhead: "",
      ctaPrimary: { label: "Schedule Demo", href: "/contact/" },
      ctaSecondary: { label: "Explore the platform", href: "/#platform" },
      interaction: {
        type: "pills",
        items: [
          { label: "Recommend a product", reply: "Suggested the Aria Runner in navy, size 8." },
          { label: "Answer sizing question", reply: "Runs true to size — order your usual." },
          { label: "Recover abandoned cart", reply: "Cart recovered — 10% off applied." },
          { label: "Complete checkout", reply: "Payment confirmed via eSewa. Order #2291." }
        ]
      }
    },
    clients: [],
    testimonial: null,
    challenges: {
      heading: "Scripted chatbots stall right where a sale is won or lost",
      blocks: [
        { title: "Scripts break on real questions", description: "The moment a shopper asks something unscripted, the conversation dead-ends instead of moving toward checkout." },
        { title: "Support can't cover every hour", description: "Buying questions that arrive outside business hours go unanswered until a human is back online." },
        { title: "Carts get abandoned quietly", description: "Without a nudge at the right moment, hesitant shoppers close the tab and don't come back." }
      ]
    },
    benefits: [
      { title: "Autonomous sales conversations", description: "AI agents understand customer intent and guide them to purchase without human intervention. They answer questions, recommend products, and handle objections naturally.", visual: "connect" },
      { title: "Nepal payment integration", description: "Native support for eSewa, Khalti, Fonepay, and international gateways like Stripe. Customers complete purchases in their preferred payment method.", visual: "sync" },
      { title: "Multi-platform deployment", description: "Works with Daraz, Shopify, WooCommerce, and custom ecommerce platforms. Deploy once, sell everywhere with consistent AI-powered experiences.", visual: "stack" }
    ],
    useCases: {
      heading: "Built for how customers actually buy online",
      items: [
        { title: "Daraz Sellers", description: "Automate customer inquiries, provide instant product information, track orders, and handle returns — all through conversational AI that speaks Nepali and English.", features: ["24/7 customer support", "Order status tracking", "Return/exchange handling"] },
        { title: "Shopify Stores", description: "Embed an AI sales agent directly on your Shopify store. Increases conversions by guiding customers through product discovery and checkout.", features: ["Product finder", "Cart assistance", "Checkout completion"] },
        { title: "WooCommerce", description: "AI-powered product recommendations that increase average order value, plus intelligent cart recovery that brings customers back to complete purchases.", features: ["Smart recommendations", "Cart abandonment recovery", "Upsell/cross-sell"] },
        { title: "Custom Ecommerce", description: "Full API access for custom ecommerce platforms. Build agentic commerce experiences tailored to your unique business requirements.", features: ["REST/GraphQL APIs", "Webhook integrations", "White-label options"] }
      ]
    },
    platformTieIn: {
      heading: "Built on the same platform as AI CRM and Orca",
      body: "Stella runs on the same multi-tenant architecture as our AI CRM and Orca orchestration layer, so every conversation and transaction plugs into the broader Zunkiree platform rather than sitting in a silo.",
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
      { question: "What is agentic commerce?", answer: "Agentic commerce is the next evolution of ecommerce where autonomous AI agents handle the entire buying journey — from product discovery to checkout. Unlike traditional chatbots that follow scripts, agentic commerce systems understand context, make decisions, and complete transactions independently, creating a conversational shopping experience." },
      { question: "How do AI commerce agents work?", answer: "AI commerce agents use large language models combined with your product catalog and business rules to have natural conversations with customers. They understand intent, answer questions, recommend products, handle objections, and guide customers through checkout — all without human intervention." },
      { question: "Can AI agents complete purchases automatically?", answer: "Yes. Stella integrates with payment gateways to enable complete transactions. Customers can browse, select products, and pay entirely through conversation. The agent handles cart management, applies discounts, and processes payments securely." },
      { question: "Does it work with Nepali payment methods like eSewa and Khalti?", answer: "Yes. Stella has native integration with eSewa, Khalti, Fonepay, and ConnectIPS for the Nepal market. It also supports international gateways like Stripe, PayPal, and Razorpay for global customers." },
      { question: "How is this different from a chatbot?", answer: "Traditional chatbots follow pre-defined scripts and can only handle expected questions. Stella is an autonomous agent that understands context, handles unexpected queries, makes decisions, and takes actions like updating carts and processing payments. It's the difference between a FAQ bot and an AI sales representative." }
    ],
    closingCta: {
      eyebrow: "Get Started",
      headline: "Ready to automate your ecommerce sales?",
      body: "See how Stella can increase conversions and provide 24/7 sales support for your online store.",
      ctaPrimary: { label: "Schedule Demo", href: "/contact/" },
      ctaSecondary: { label: "Contact Sales", href: "/contact/" }
    }
  },
  {
    id: "ai-booking-engine",
    title: "Zenly: AI Booking Engine for Intelligent Scheduling | Zunkiree Labs",
    description: "Smart scheduling that handles complex availability, multi-resource bookings, and conflict resolution. Reduce no-shows by 35% with AI-powered reminders.",
    eyebrow: "Zenly — AI Booking Engine",
    icon: "calendar",
    hero: {
      headline: "Scheduling that thinks ahead so you don't have to",
      subhead: "",
      ctaPrimary: { label: "Start Free Trial", href: "/contact/" },
      ctaSecondary: { label: "Explore the platform", href: "/#platform" },
      interaction: {
        type: "pills",
        items: [
          { label: "Find next opening", reply: "Next opening: Thursday 10am with Priya." },
          { label: "Resolve a conflict", reply: "Rebooked the overlapping slot to 3pm." },
          { label: "Send booking reminder", reply: "Reminder sent — appointment in 2 hours." },
          { label: "Sync my calendar", reply: "Synced with Google Calendar." }
        ]
      }
    },
    clients: [],
    testimonial: null,
    challenges: {
      heading: "Manual scheduling can't keep up with real-world constraints",
      blocks: [
        { title: "Availability is more than one calendar", description: "Providers, locations, and equipment all have their own constraints that a simple calendar can't represent." },
        { title: "Conflicts get resolved by hand", description: "Double-bookings and last-minute changes turn into back-and-forth instead of an automatic rebooking." },
        { title: "No-shows drain the schedule", description: "Without timely, personalized reminders, booked slots quietly go empty." }
      ]
    },
    benefits: [
      { title: "Complex availability, simplified", description: "Handle multiple providers, locations, equipment dependencies, and custom rules. The AI figures out what's available without endless back-and-forth.", visual: "stack" },
      { title: "Intelligent conflict resolution", description: "When conflicts arise, the AI suggests alternatives, handles waitlists, and can automatically rebook affected appointments with customer approval.", visual: "pulse" },
      { title: "Connects to your existing calendars", description: "Syncs with Google Calendar, Outlook, Apple Calendar, and major scheduling systems. Embed booking widgets anywhere with our JavaScript SDK.", visual: "connect" }
    ],
    useCases: {
      heading: "Built for how bookings actually happen",
      items: [
        { title: "Service Businesses", description: "Perfect for consultants, salons, clinics, and any service business. Customers book online, you control the rules.", features: ["Online self-service", "Provider selection", "Payment integration"] },
        { title: "Resource Scheduling", description: "Manage meeting rooms, equipment, vehicles, or any shared resource. Prevent double-booking and optimize utilization.", features: ["Room booking", "Equipment checkout", "Usage analytics"] },
        { title: "Team Scheduling", description: "Coordinate schedules across team members, handle round-robin assignments, and balance workload automatically.", features: ["Round-robin booking", "Load balancing", "Team availability"] },
        { title: "Event Registration", description: "Handle recurring classes, workshops, and events. Manage capacity, waitlists, and session-based scheduling.", features: ["Class scheduling", "Capacity limits", "Series bookings"] }
      ]
    },
    platformTieIn: {
      heading: "Built on the same platform as AI CRM and Orca",
      body: "Zenly runs on the same multi-tenant architecture as our AI CRM and Orca orchestration layer, so every booking plugs into the broader Zunkiree platform rather than sitting in a silo.",
      pillars: [
        { name: "AI CRM", description: "Multi-tenant customer intelligence platform.", href: "/products/ai-crm/" },
        { name: "Orca", description: "Orchestration layer coordinating workflows across CRM, email, and marketing tools.", href: "/products/orca/" }
      ],
      cta: { label: "Explore the platform", href: "/#platform" }
    },
    relatedSolutions: [
      { title: "Dental AI Assistant", description: "AI-powered dental practice management.", href: "/products/dental-ai/" },
      { title: "AI CRM", description: "Customer intelligence that drives revenue.", href: "/products/ai-crm/" }
    ],
    faq: [
      { question: "What is Zenly?", answer: "Zenly is an intelligent AI booking engine that handles complex availability rules, multi-resource bookings, and automatic conflict resolution. It enables customers to self-service book while giving businesses complete control over scheduling rules." },
      { question: "How does Zenly reduce no-shows?", answer: "Zenly sends personalized reminders via SMS, email, or voice at optimal times based on appointment type and customer behavior. It also makes rescheduling easy, so customers change appointments instead of simply not showing up." },
      { question: "Can Zenly handle complex scheduling rules?", answer: "Yes. Define rules for buffer times, service combinations, provider specialties, equipment dependencies, and location constraints. Zenly applies all rules automatically when showing availability." },
      { question: "Does it integrate with payment processors?", answer: "Zenly integrates with Stripe, Square, and PayPal for deposits, prepayments, and full payments at booking. You can also connect to your existing payment infrastructure via API." },
      { question: "What's the pricing model?", answer: "Pricing is based on the number of bookings per month and features required. Plans start at $29/month for small businesses. Enterprise custom pricing available. All plans include unlimited calendar connections." }
    ],
    closingCta: {
      eyebrow: "Get Started",
      headline: "Ready to automate your scheduling?",
      body: "See how Zenly can eliminate scheduling friction and reduce no-shows for your business.",
      ctaPrimary: { label: "Start Free Trial", href: "/contact/" },
      ctaSecondary: { label: "Schedule Demo", href: "/contact/" }
    }
  }
];
