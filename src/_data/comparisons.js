/**
 * Comparison Data for "[X] vs [Y]" pages
 * Captures comparison search queries for SEO
 */

export default [
  {
    id: "zunkiree-vs-algolia",
    title: "Zunkiree Search vs Algolia",
    description: "Compare Zunkiree Search and Algolia for your search needs. See how AI-native search differs from traditional search-as-a-service.",
    competitor: {
      name: "Algolia",
      logo: "/assets/images/logos/algolia.svg",
      description: "Search-as-a-service platform with keyword-based instant search",
      strengths: [
        "Fast keyword search",
        "Extensive documentation",
        "Large ecosystem of integrations",
        "Typo tolerance"
      ],
      weaknesses: [
        "Keyword-based, not semantic",
        "Usage-based pricing can be expensive",
        "Limited AI capabilities",
        "Returns links, not answers"
      ]
    },
    zunkiree: {
      strengths: [
        "AI-native semantic understanding",
        "Direct answers, not just links",
        "RAG-powered knowledge retrieval",
        "Conversational follow-up queries",
        "Predictable pricing"
      ]
    },
    comparison: [
      { feature: "Search Type", zunkiree: "Semantic + AI", competitor: "Keyword + Typo tolerance" },
      { feature: "Response Format", zunkiree: "Direct answers with sources", competitor: "Ranked list of results" },
      { feature: "Natural Language", zunkiree: "Full NLU support", competitor: "Limited query understanding" },
      { feature: "Follow-up Questions", zunkiree: "Conversational context", competitor: "Each query independent" },
      { feature: "Setup Complexity", zunkiree: "Simple embed or API", competitor: "Index configuration required" },
      { feature: "AI Integration", zunkiree: "Built-in RAG & LLM", competitor: "Requires separate AI layer" },
      { feature: "Pricing Model", zunkiree: "Flat monthly rate", competitor: "Per-search + per-record" }
    ],
    bestFor: {
      zunkiree: "Businesses wanting AI-powered customer support, knowledge bases, and conversational search experiences.",
      competitor: "E-commerce and media sites needing fast, traditional keyword search with autocomplete."
    },
    faq: [
      { q: "What is the difference between Zunkiree Search and Algolia?", a: "Zunkiree Labs describes the main difference as search type. Zunkiree Search is semantic and AI-based and returns direct answers with sources, while Algolia is keyword search with typo tolerance that returns a ranked list of results. The comparison also notes that Algolia needs index configuration and a separate AI layer, while Zunkiree Search has built-in RAG and an LLM." },
      { q: "How is Zunkiree Search priced compared with Algolia?", a: "According to this comparison, Zunkiree Search uses a flat monthly rate, while Algolia is priced per search and per record. The page says usage-based pricing can be expensive. It lists predictable pricing as one of Zunkiree Search's strengths." },
      { q: "When should I choose Algolia instead of Zunkiree Search?", a: "The comparison says to choose Algolia if you need traditional keyword search for product catalogs or content libraries, such as e-commerce and media sites that want fast search with autocomplete. It recommends Zunkiree Search for businesses wanting AI-powered customer support, knowledge bases and conversational search." },
    ],
    verdict: "Choose Zunkiree Search if you want AI that understands questions and provides direct answers. Choose Algolia if you need traditional keyword search for product catalogs or content libraries."
  },
  {
    id: "zunkiree-vs-elasticsearch",
    title: "Zunkiree Search vs Elasticsearch",
    description: "Compare Zunkiree Search and Elasticsearch. See when managed AI search beats self-hosted infrastructure.",
    competitor: {
      name: "Elasticsearch",
      logo: "/assets/images/logos/elasticsearch.svg",
      description: "Open-source distributed search and analytics engine",
      strengths: [
        "Powerful full-text search",
        "Highly customizable",
        "Self-hosted control",
        "Large community"
      ],
      weaknesses: [
        "Complex to operate and scale",
        "Requires DevOps expertise",
        "No built-in AI/LLM support",
        "Infrastructure costs add up"
      ]
    },
    zunkiree: {
      strengths: [
        "Zero infrastructure management",
        "AI-native from day one",
        "Answers, not just search results",
        "Quick implementation",
        "Predictable costs"
      ]
    },
    comparison: [
      { feature: "Deployment", zunkiree: "Fully managed SaaS", competitor: "Self-hosted or Elastic Cloud" },
      { feature: "AI Capabilities", zunkiree: "Built-in LLM + RAG", competitor: "Requires custom integration" },
      { feature: "Setup Time", zunkiree: "Hours", competitor: "Days to weeks" },
      { feature: "Maintenance", zunkiree: "Zero ops required", competitor: "Ongoing cluster management" },
      { feature: "Scaling", zunkiree: "Automatic", competitor: "Manual cluster scaling" },
      { feature: "Query Language", zunkiree: "Natural language", competitor: "Query DSL (JSON)" },
      { feature: "Total Cost", zunkiree: "Predictable monthly", competitor: "Infra + ops + engineering" }
    ],
    bestFor: {
      zunkiree: "Teams wanting AI search without infrastructure complexity. Customer support, internal tools, and knowledge management.",
      competitor: "Engineering teams with DevOps resources who need full control over search infrastructure and complex custom queries."
    },
    faq: [
      { q: "Is Zunkiree Search easier to run than Elasticsearch?", a: "According to this comparison, yes. Zunkiree Search is a fully managed SaaS with zero ops required, automatic scaling and setup in hours. Elasticsearch is described as self-hosted or Elastic Cloud, with ongoing cluster management, manual scaling and setup taking days to weeks." },
      { q: "Does Elasticsearch have built-in AI search?", a: "This comparison says Elasticsearch has no built-in AI or LLM support and needs custom integration, while Zunkiree Search includes built-in LLM and RAG. It also notes that Elasticsearch uses a JSON Query DSL, whereas Zunkiree Search accepts natural language queries." },
      { q: "When is Elasticsearch the better choice?", a: "The comparison recommends Elasticsearch for engineering teams with dedicated DevOps resources who need full control over search infrastructure and complex custom queries. It suggests Zunkiree Search for teams that want AI search without the operational burden, such as customer support, internal tools and knowledge management." },
    ],
    verdict: "Choose Zunkiree Search for AI-powered search without the operational burden. Choose Elasticsearch if you have dedicated DevOps resources and need complete infrastructure control."
  },
  {
    id: "zunkiree-vs-typesense",
    title: "Zunkiree Search vs Typesense",
    description: "Compare Zunkiree Search and Typesense. See how AI-native search compares to open-source instant search.",
    competitor: {
      name: "Typesense",
      logo: "/assets/images/logos/typesense.svg",
      description: "Open-source, typo-tolerant search engine alternative to Algolia",
      strengths: [
        "Open-source and self-hostable",
        "Fast typo-tolerant search",
        "Simple to set up",
        "Cost-effective"
      ],
      weaknesses: [
        "Keyword-based, limited semantics",
        "No built-in AI features",
        "Self-hosting requires ops",
        "Returns links, not answers"
      ]
    },
    zunkiree: {
      strengths: [
        "Semantic understanding",
        "AI-generated answers",
        "Zero infrastructure",
        "Conversational search",
        "Enterprise-ready"
      ]
    },
    comparison: [
      { feature: "Search Approach", zunkiree: "Semantic + AI", competitor: "Keyword + typo tolerance" },
      { feature: "Hosting", zunkiree: "Fully managed", competitor: "Self-hosted or cloud" },
      { feature: "AI Features", zunkiree: "Native LLM integration", competitor: "None built-in" },
      { feature: "Response Type", zunkiree: "Answers with citations", competitor: "Ranked results" },
      { feature: "Natural Language", zunkiree: "Full support", competitor: "Basic query parsing" },
      { feature: "Enterprise Features", zunkiree: "SSO, analytics, API", competitor: "Basic analytics" },
      { feature: "Open Source", zunkiree: "No", competitor: "Yes (GPL-3.0)" }
    ],
    bestFor: {
      zunkiree: "Businesses wanting intelligent search that understands intent and provides direct answers to customer questions.",
      competitor: "Developers who want a self-hosted, open-source alternative to Algolia for traditional search."
    },
    faq: [
      { q: "How does Zunkiree Search compare with Typesense?", a: "According to this comparison, Typesense is an open-source, typo-tolerant, keyword-based engine that can be self-hosted, while Zunkiree Search is fully managed with semantic search and native LLM integration. Typesense returns ranked results, whereas Zunkiree Search returns answers with citations." },
      { q: "Is Typesense open source?", a: "Yes. The comparison lists Typesense as open source under GPL-3.0 and self-hostable, positioned as an alternative to Algolia. It lists Zunkiree Search as not open source, offered fully managed with SSO, analytics and an API." },
      { q: "When should I choose Typesense over Zunkiree Search?", a: "The comparison says to choose Typesense if you want an open-source, self-hosted solution for traditional keyword search, aimed at developers who want an Algolia alternative. It recommends Zunkiree Search for businesses wanting search that understands intent and gives direct answers to customer questions." },
    ],
    verdict: "Choose Zunkiree Search if you want AI that provides answers, not just results. Choose Typesense if you want an open-source, self-hosted solution for traditional keyword search."
  },
  {
    id: "agentic-commerce-vs-traditional-ecommerce",
    title: "Agentic Commerce vs Traditional Ecommerce",
    description: "Compare agentic commerce with traditional ecommerce. See how AI agents transform online shopping from self-service browsing to autonomous purchasing.",
    competitor: {
      name: "Traditional Ecommerce",
      logo: "/assets/images/logos/ecommerce-icon.svg",
      description: "Standard online shopping with manual browsing, comparison, and checkout",
      strengths: [
        "Familiar user experience",
        "Full customer control over decisions",
        "Established platforms (Shopify, WooCommerce)",
        "Wide payment gateway support",
        "No AI dependency"
      ],
      weaknesses: [
        "High cart abandonment (70%+)",
        "Decision fatigue for customers",
        "Manual comparison is time-consuming",
        "Limited personalization",
        "Reactive customer support only"
      ]
    },
    zunkiree: {
      name: "Agentic Commerce",
      strengths: [
        "AI handles entire buying journey",
        "Natural language product discovery",
        "Autonomous cross-platform comparison",
        "Proactive support and recommendations",
        "Reduced cart abandonment",
        "24/7 intelligent assistance"
      ]
    },
    comparison: [
      { feature: "Product Discovery", zunkiree: "Conversational: 'Find me a laptop for coding under NPR 150k'", competitor: "Browse categories, filters, search keywords" },
      { feature: "Comparison Shopping", zunkiree: "AI compares across platforms automatically", competitor: "Manual tab-by-tab comparison" },
      { feature: "Decision Making", zunkiree: "AI recommends based on preferences", competitor: "Customer analyzes all options alone" },
      { feature: "Checkout Process", zunkiree: "Agent completes purchase autonomously", competitor: "Manual form filling and payment" },
      { feature: "Personalization", zunkiree: "Context-aware, learns preferences", competitor: "Rule-based recommendations" },
      { feature: "Customer Support", zunkiree: "Proactive AI assistance throughout", competitor: "Reactive helpdesk after issues" },
      { feature: "Cart Abandonment", zunkiree: "Significantly reduced", competitor: "~70% average abandonment rate" },
      { feature: "Multi-platform", zunkiree: "Searches Daraz, local stores, brands", competitor: "Limited to single storefront" },
      { feature: "Payment Integration", zunkiree: "Intelligent routing (eSewa, Khalti, cards)", competitor: "Customer selects payment method" },
      { feature: "Language Support", zunkiree: "Natural Nepali + English queries", competitor: "Interface language only" }
    ],
    bestFor: {
      zunkiree: "Businesses wanting to reduce friction, increase conversions, and provide AI-powered shopping experiences. Ideal for Nepal market with eSewa/Khalti integration.",
      competitor: "Businesses with simple product catalogs where customers prefer full control over browsing and purchasing decisions."
    },
    faq: [
      { q: "What is agentic commerce?", a: "According to this comparison, agentic commerce means an AI agent handles the buying journey, from conversational product discovery to comparing options across platforms and completing the purchase autonomously. In traditional ecommerce, the customer browses, compares and checks out manually." },
      { q: "How is agentic commerce different from traditional ecommerce?", a: "The comparison contrasts them across discovery, comparison, decision making, checkout, personalization, support and payments. Traditional ecommerce relies on browsing categories, manual comparison and manual checkout with reactive support, while agentic commerce is described as conversational, proactive and able to complete purchases for the customer." },
      { q: "Does agentic commerce reduce cart abandonment?", a: "Zunkiree Labs says agentic commerce significantly reduces cart abandonment, and the page lists traditional ecommerce at roughly 70% average abandonment. These are the page's own claims and figures, not independent measurements." },
      { q: "Does agentic commerce work in Nepal?", a: "The comparison says it suits the Nepal market, with intelligent payment routing across eSewa, Khalti and cards, search across Daraz, local stores and brands, and natural Nepali and English queries." },
    ],
    verdict: "Choose agentic commerce if you want AI to handle the buying journey, reduce cart abandonment, and provide personalized service at scale. Choose traditional ecommerce if your customers prefer complete manual control and you have a straightforward product catalog.",
    ctaProduct: "ai-commerce-agent",
    ctaService: "ai-ecommerce"
  }
];
