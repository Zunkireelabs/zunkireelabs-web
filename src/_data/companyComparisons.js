/**
 * Company / service comparison pages ("X vs Y"), rendered at /compare/<id>/ by
 * src/compare/company-comparison-pages.njk with layouts/comparison-company.njk.
 * Content moved here from tables that were pasted inside three location pages
 * (originally written by the Action Center expand-content generator), so the
 * comparison lives on its own designed page and the location pages link to it.
 * Rows are Zunkiree Labs' own description of its services against typical
 * alternatives, not independent research; the layout shows that as a note.
 */
export default [
  {
    id: "zunkiree-labs-vs-generic-ai-providers",
    title: "Zunkiree Labs vs Generic AI Providers",
    description: "How a Kathmandu-based custom AI company compares with generic AI providers on focus, expertise, support, local fit and languages.",
    intro: "When exploring AI development options, understanding the differences between Zunkiree Labs and other AI companies can help inform your decision. Below is a comparison of Zunkiree Labs' offerings with a generic AI provider.",
    featureLabel: "Feature",
    leftLabel: "Zunkiree Labs",
    rightLabel: "Generic AI provider",
    rows: [
      { feature: "Location", left: "Kathmandu, Nepal", right: "Global (various locations)" },
      { feature: "Focus Area", left: "Custom AI systems for specific industries", right: "Generic AI solutions" },
      { feature: "Expertise", left: "Local market knowledge & deep technical expertise", right: "Broad technical knowledge" },
      { feature: "Competitive Rates", left: "Yes", right: "Varies, often higher" },
      { feature: "Support System Features", left: "AI-powered customer support reducing tickets", right: "Standard support options" },
      { feature: "Targeted Solutions", left: "Tailored for Nepali market including payment integration", right: "General solutions" },
      { feature: "Development Time for SaaS Products", left: "Months, streamlined process", right: "Varies significantly" },
      { feature: "Languages Supported", left: "English and local languages", right: "Language offerings vary" }
    ],
    back: { href: "/locations/kathmandu/", label: "AI development company in Kathmandu" },
    cta: { eyebrow: "Next step", headline: "Talk to a custom AI team in Kathmandu", body: "Tell us what you want to build and we will tell you honestly whether we are the right fit." }
  },
  {
    id: "web-development-kathmandu-vs-other-services",
    title: "Web Development in Kathmandu: Our Services vs Other Options",
    description: "A side-by-side look at our Kathmandu web development services against other options: speed, frameworks, mobile design, SEO and support.",
    intro: "When considering web development services, it's essential to understand the key differences and similarities between various options available in Kathmandu. Below is a comparison of our web development services against other potential web development solutions.",
    featureLabel: "Features",
    leftLabel: "Our services",
    rightLabel: "Other services",
    rows: [
      { feature: "Page Load Speed", left: "Sub-second", right: "Varies" },
      { feature: "Frameworks Used", left: "Next.js, Eleventy, Tailwind CSS", right: "Typically limited options" },
      { feature: "Mobile Design", left: "Mobile-first responsive design", right: "Responsive, may not prioritize mobile" },
      { feature: "SEO Optimization", left: "Built-in SEO and AEO", right: "Varies, often requires addons" },
      { feature: "Ongoing Support", left: "Yes", right: "Limited or additional cost" }
    ],
    back: { href: "/locations/kathmandu/web-development/", label: "Web development in Kathmandu" },
    cta: { eyebrow: "Next step", headline: "Plan your website with our Kathmandu team", body: "Share your goals and we will recommend the right stack, scope and timeline." }
  },
  {
    id: "custom-software-lalitpur-vs-other-locations",
    title: "Custom Software Development: Lalitpur vs Other Locations",
    description: "What working with a local Lalitpur team means for custom software: proximity, local fit, expertise, methodology and additional services.",
    intro: "When considering custom software development for your business, it's important to weigh the benefits of working with a local team against other options in nearby locations. Here's a comparison to help you understand the advantages.",
    featureLabel: "Feature",
    leftLabel: "Lalitpur",
    rightLabel: "Other locations",
    rows: [
      { feature: "Proximity to Team", left: "Headquartered right here in Sanepa, Lalitpur", right: "Varies based on location" },
      { feature: "Local Customization", left: "Tailored to Lalitpur businesses", right: "May not be tailored specifically" },
      { feature: "Development Expertise", left: "Full-stack team experienced in enterprise", right: "Varies by provider" },
      { feature: "Development Methodology", left: "Agile development", right: "Varies by provider" },
      { feature: "Additional Services Available", left: "AI, SaaS, Web & App Development", right: "May have limited service offerings" }
    ],
    back: { href: "/locations/lalitpur/custom-software/", label: "Custom software development in Lalitpur" },
    cta: { eyebrow: "Next step", headline: "Build your software with a local Lalitpur team", body: "Tell us about the problem and we will scope the right first release together." }
  },
  {
    id: "voice-ai-vs-traditional-ivr",
    title: "Voice AI vs Traditional IVR",
    description: "How a conversational voice agent compares with a traditional IVR phone menu on understanding requests, routing, booking and caller verification.",
    intro: "Traditional IVR phone trees make callers navigate a menu just to reach a simple answer or book a slot. Zunkiree's Voice AI replaces that menu with conversational AI that understands natural speech from the first word.",
    featureLabel: "Capability",
    leftLabel: "Zunkiree Voice AI",
    rightLabel: "Traditional IVR",
    rows: [
      { feature: "Understanding requests", left: "Speech recognition and intent detection from natural language", right: "Fixed menu of numbered options" },
      { feature: "Routing", left: "Automatic call routing based on detected intent", right: "Manual menu navigation to reach the right queue" },
      { feature: "Booking an appointment", left: "Handled directly on the call via voice-driven appointment booking", right: "Usually requires a human agent or a separate call" },
      { feature: "Caller verification", left: "Voice authentication", right: "PIN entry or manual agent verification" }
    ],
    back: { href: "/solutions/ai-customer-experience/", label: "AI customer support automation" },
    cta: { eyebrow: "Next step", headline: "See what a voice agent could handle on your calls", body: "Tell us about your call volume and booking rules and we will show you where an agent fits." }
  },
  {
    id: "zunkiree-labs-vs-other-multi-tenant-saas-developers",
    title: "Zunkiree Labs vs Other Multi-Tenant SaaS Developers",
    description: "How our multi-tenant SaaS development compares with typical alternatives on MVP launch time, tenant scale, billing and design approach.",
    intro: "When considering multi-tenant SaaS development, Zunkiree Labs stands out for its expertise in building scalable solutions tailored for high tenant volumes. Unlike some competitors, we emphasize speed to market with our efficient MVP launch processes, aiming for deployment within months rather than years. Our approach centers on utilizing pre-built components, which distinguishes us from others that may favor complete custom builds that can lead to delays and increased costs. Furthermore, we handle complex billing and user management intricately from the onset, reducing the risk of complications as your platform grows.",
    featureLabel: "Feature",
    leftLabel: "Zunkiree Labs",
    rightLabel: "Alternative",
    rows: [
      { feature: "MVP Launch Time", left: "3-6 months", right: "Varies, often longer" },
      { feature: "Tenant Scale Capability", left: "Up to 10,000 tenants", right: "Typically less scalable" },
      { feature: "Billing Management", left: "Handles complexity from day one", right: "May struggle with edge cases" },
      { feature: "Design Approach", left: "Uses pre-built patterns for efficiency", right: "Custom builds from scratch" }
    ],
    back: { href: "/solutions/saas-development/", label: "SaaS development" },
    cta: { eyebrow: "Next step", headline: "Plan your multi-tenant platform with us", body: "Share your product idea and we will outline the tenancy model, billing and a first release." }
  }
];
