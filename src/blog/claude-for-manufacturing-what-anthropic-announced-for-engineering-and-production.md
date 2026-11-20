---
title: "Claude for Manufacturing: What Anthropic Announced"
seoTitle: "Claude for Manufacturing: What Anthropic Announced"
shortLabel: "Claude for Manufacturing"
translationKey: "claude-for-manufacturing-what-anthropic-announced-for-engineering-and-production"
description: "Anthropic launched Claude for Manufacturing on 12 November 2026: 17 skills, four connectors, no equipment control. What is stated, what is not, and what to ask."
date: 2026-11-20
lastUpdated: 2026-11-20
category: Insights
pillar: "future-of-industries"
tags:
  - Claude
  - Anthropic
  - Manufacturing AI
  - Enterprise AI
readTime: 6
featuredImage: "/assets/images/blog/claude-for-manufacturing-what-anthropic-announced-for-engineering-and-production.svg"
ogType: article
related:
  - /blog/enterprise-ai-anthropic-openai-google-who-is-winning/
  - /blog/what-is-gaamma-ai-manufacturing-erp-explained/
  - /blog/how-to-test-ai-agents-before-launch-evals-red-teaming-and-regression-suites/
---

<div class="container-custom py-12 md:py-20">

**In short:** On 12 November 2026 Anthropic introduced Claude for Manufacturing, a plugin with 17 skills for plant teams, from quoting a job to diagnosing a stopped machine. It connects to Autodesk Fusion, Infor, Microsoft 365 and Oracle NetSuite, and it keeps a person in charge of the final decision. Anthropic says plainly that it does not operate equipment. Pricing and certifications are not stated on the page we read.

## Key Takeaways

- Claude for Manufacturing is a plugin, available on Team and Enterprise plans.
- It has 17 skills across sales, quality, operations, supply chain, design and setup. Anthropic's page describes only six of them.
- Four connectors: Autodesk Fusion, Infor, Microsoft 365 and Oracle NetSuite. Systems without a connector can be used through saved exports in Microsoft 365.
- The page states, "Claude for Manufacturing doesn't operate equipment." Skills are designed to end with a person's review.
- With Anthropic's connector alone, Infor access is read-only. Changes need Infor's separate plugin and a user's approval.
- No pricing, certification or compliance claims, and no customers, appear on the page. We have not tested the product.

## What Did Anthropic Announce?

Anthropic's page, dated 12 November 2026, describes a plugin that works from a manufacturer's own records through connectors. The six example skills it names are:

- Quoting a new job: read the request, flag missing information, compare costs on similar jobs, draft a quote.
- Investigating a failed inspection: document it, check past reports, rank likely causes, draft a corrective action report.
- Diagnosing a breakdown: review sensor exports, repair notes, photos and manuals, then rank likely causes for a technician to check.
- Sourcing from another supplier: prepare a request for quotes and compare bids.
- Comparing designs in Autodesk Fusion: generate variations, score them against targets, draft a decision memo.
- Reporting on production: output against target, equipment downtime and the cost of downtime and missed output.

Setup is described as installing the plugin and telling Claude "Set us up." Claude then asks which systems you use, tests the connectors and reports which skills cannot yet run fully.

## What Does It Connect To?

Autodesk Fusion generates design variations from an existing model. Infor looks up purchase orders and stock records. Microsoft 365 finds procedures, supplier emails and exported reports. Oracle NetSuite pulls orders, inventory, production steps and job costs when drafting quotes.

Infor is releasing a separate plugin. With it, Claude can make changes in Infor after a user approves them, such as releasing a purchase order or rescheduling production. Anthropic says Claude's access follows the user's Infor permissions.

## What Does It Not Do?

This is the useful part for a buyer. Per Anthropic's page, it does not operate equipment, and it does not make Infor changes without Infor's plugin. It is not designed to finish work without review. Anthropic also mentions a separate research preview, the Model Hardware Standard, in development for programmable equipment.

If you see claims of direct plant-floor controller connections elsewhere, note that Anthropic's own page does not state them. Ask Anthropic to confirm in writing.

## What Is Stated and What Is Not?

| Topic | What Anthropic's page says |
|---|---|
| Date | 12 November 2026 |
| Availability | Team and Enterprise plans |
| Pricing | Not given. Contact sales. |
| Connectors | Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite |
| Equipment control | Not provided |
| Writes to Infor | Only with Infor's separate plugin and user approval |
| Certifications and compliance | None claimed |
| Customers | None named |
| Remaining 11 skills | Not listed |

## What Should a Manufacturer Ask?

1. **Which of my systems have connectors?** If you run something else, are exports good enough, and how fresh are they?
2. **Which of the 17 skills can run fully for us?** Use the setup check, then test on past jobs where you know the answer.
3. **Who reviews outputs, and where do figures link back?** Anthropic says claims can link to underlying data and documents. Check that on a real quote.
4. **What is the price for our plan?** Ask sales in writing.
5. **Where does our data go, and what compliance papers can you show?** None are on the page.
6. **Is our data clean enough?** Messy part numbers and stale exports will show up in the answers. See [data readiness for AI](/blog/data-readiness-for-ai-pipelines-quality-freshness-and-what-to-fix-first/).

For a view of what an AI-built ERP for factories looks like, see our explainer on [Gaamma, an AI manufacturing ERP](/blog/what-is-gaamma-ai-manufacturing-erp-explained/). For the wider market, see [who is winning enterprise AI](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What is Claude for Manufacturing?</p><p class="text-gray-600 leading-relaxed">It is a plugin announced by Anthropic on 12 November 2026 with 17 skills for plant teams, such as quoting jobs, investigating failed inspections and reporting on production. It works from a company's own records through connectors and leaves the final decision to a person.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Can Claude control factory equipment?</p><p class="text-gray-600 leading-relaxed">No. Anthropic's page says Claude for Manufacturing does not operate equipment. A separate research preview, the Model Hardware Standard, is in development for programmable equipment.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Which systems does it connect to?</p><p class="text-gray-600 leading-relaxed">Autodesk Fusion, Infor, Microsoft 365 and Oracle NetSuite. Other systems can be used through regular exports saved to Microsoft 365. Infor changes need Infor's separate plugin and a user's approval.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What does Claude for Manufacturing cost?</p><p class="text-gray-600 leading-relaxed">Anthropic's page gives no pricing. It is available on Team and Enterprise plans, and the page says to contact sales for more information.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What is Claude for Manufacturing?","@type":"Question","acceptedAnswer":{"text":"It is a plugin announced by Anthropic on 12 November 2026 with 17 skills for plant teams, such as quoting jobs, investigating failed inspections and reporting on production. It works from a company's own records through connectors and leaves the final decision to a person.","@type":"Answer"}},{"name":"Can Claude control factory equipment?","@type":"Question","acceptedAnswer":{"text":"No. Anthropic's page says Claude for Manufacturing does not operate equipment. A separate research preview, the Model Hardware Standard, is in development for programmable equipment.","@type":"Answer"}},{"name":"Which systems does it connect to?","@type":"Question","acceptedAnswer":{"text":"Autodesk Fusion, Infor, Microsoft 365 and Oracle NetSuite. Other systems can be used through regular exports saved to Microsoft 365. Infor changes need Infor's separate plugin and a user's approval.","@type":"Answer"}},{"name":"What does Claude for Manufacturing cost?","@type":"Question","acceptedAnswer":{"text":"Anthropic's page gives no pricing. It is available on Team and Enterprise plans, and the page says to contact sales for more information.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Sources

- Anthropic, [Introducing Claude for Manufacturing](https://claude.com/resources/articles/claude-for-manufacturing), November 12, 2026

</div>
