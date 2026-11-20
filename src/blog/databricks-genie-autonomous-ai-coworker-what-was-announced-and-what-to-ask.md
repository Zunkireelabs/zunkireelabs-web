---
title: "Databricks Genie: What Was Announced and What to Ask"
seoTitle: "Databricks Genie: Autonomous AI Coworker Explained"
shortLabel: "Databricks Genie"
translationKey: "databricks-genie-autonomous-ai-coworker-what-was-announced-and-what-to-ask"
description: "Databricks announced a new Genie on 11 November 2026, an AI coworker for long-running tasks. What it does, what Databricks did not say, and what to ask."
date: 2026-11-20
lastUpdated: 2026-11-20
category: Insights
pillar: "ai-frontier"
tags:
  - Databricks
  - AI Agents
  - AI Agent Governance
  - Enterprise AI
readTime: 6
featuredImage: "/assets/images/blog/databricks-genie-autonomous-ai-coworker-what-was-announced-and-what-to-ask.svg"
ogType: article
related:
  - /blog/ibm-microsoft-imagine-enterprise-ai-agent-platform-what-it-says-and-what-it-leaves-out/
  - /blog/enterprise-ai-anthropic-openai-google-who-is-winning/
  - /blog/how-to-build-an-ai-agent-for-your-business-tools-guardrails-audit-trail/
---

<div class="container-custom py-12 md:py-20">

**In short:** On 11 November 2026 Databricks announced a new version of Genie, which it describes as an autonomous AI coworker for long-running enterprise tasks that works within guardrails set by the organization. The announcement is detailed on controls and auditing. It does not give pricing, a preview or general availability status, or any certifications. Treat it as a vendor announcement and ask the questions below before you plan around it.

## Key Takeaways

- Genie is built to keep working on a job over time: tracking progress, following up on missing inputs and acting when new information arrives.
- It acts with the user's identity and can only see information that user is authorized to see.
- Users decide which actions Genie takes on its own and which need sign-off. Every action is traced and auditable, and admins can set budgets and spending caps.
- Databricks reports its own benchmark: Genie answered correctly in 91% of task runs, which it says is 1.6 times the stronger of two frontier agents it compared against.
- The blog post does not state pricing, availability status or certifications.
- We have not tested Genie. Everything here comes from Databricks' own blog post.

## What Did Databricks Announce?

In a blog post dated 11 November 2026, Databricks describes the new Genie as an autonomous AI coworker that handles long-running enterprise tasks and operates within guardrails. It builds on Genie One, which Databricks introduced earlier in 2026.

According to the post, Genie can notice repeated work and offer to take it over, run jobs on a schedule or in response to triggers, and run many jobs at once. A control panel lets people supervise, steer and stop them. It keeps user preferences across jobs and can be reached through Genie One, email, Slack, Microsoft Teams, a browser, desktop and mobile apps.

The post lists example uses: monitoring insurance claims for fraud patterns, managing marketing campaigns and proposing weekly budget changes, and investigating incidents using GitHub and Jira changes.

## What Are the Guardrails?

This is the most detailed part of the post. Databricks says:

- Users set boundaries, supervise the work and approve actions where required.
- Genie acts with the user's identity and respects each source system's permissions.
- If a user needs more access, Genie can prepare a request for the user to review and send. Admins and data owners keep approval authority.
- Admins control connector access, MCP tools and approval requirements.
- Every action is traced and auditable, and admins can set workspace and per-user budgets and alerts.

These are claims from the vendor. How well they hold up in your environment is something only a test will show. Our guide to [building an AI agent with tools, guardrails and an audit trail](/blog/how-to-build-an-ai-agent-for-your-business-tools-guardrails-audit-trail/) covers what a good setup looks like.

## What Is the Benchmark Claim?

Databricks says it built a benchmark with Turing and compared Genie, powered by Genie Ontology, with two leading frontier agents on the same tasks in the same Databricks workspace. Genie answered correctly in 91% of task runs, 1.6 times the rate of the stronger frontier agent, while using less than half as many tokens. The tasks required connecting knowledge spread across tables, dashboards and notebooks.

This is Databricks' own benchmark, and the post does not tell us which agents were compared. Your tasks and your data will differ.

## What Did Databricks Not Say?

| Question | What the blog post says |
|---|---|
| Announcement date | 11 November 2026 |
| Pricing | Not stated. Only budgets and spending caps are mentioned. |
| Preview or generally available | Not stated in the post body |
| Certifications | Not mentioned |
| Autonomy level | Users choose which actions need sign-off |
| Benchmark | 91% correct, 1.6 times the stronger frontier agent, vendor-run |
| Customers named | Zillow, Unilever, adidas, Atlassian, AstraZeneca |

The blog post gives no availability dates, so ask Databricks directly and check the approval settings before relying on any oversight claim.

## What Should a Buyer Ask?

1. **Is it generally available for our plan and region, and what is the price?** Ask in writing.
2. **Which actions can be set to need approval?** Confirm that sending, spending and writing to external systems can all be gated.
3. **How is the audit trail exported?** You want to answer "what did it change, and when?"
4. **What happens at the budget cap?** Does a job stop, or finish?
5. **How good is our data?** A business map built from your dashboards and notebooks is only as good as they are. See [data readiness for AI](/blog/data-readiness-for-ai-pipelines-quality-freshness-and-what-to-fix-first/).
6. **Can we test it first?** Run it on a narrow job with a regression set, as in our [guide to testing AI agents before launch](/blog/how-to-test-ai-agents-before-launch-evals-red-teaming-and-regression-suites/).

If you want an agent built around your own tools and rules, see our [custom AI agent](/solutions/custom-agent/) work.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What is Databricks Genie?</p><p class="text-gray-600 leading-relaxed">Databricks describes the new Genie as an autonomous AI coworker that handles long-running enterprise tasks for users within guardrails set by the organization. It was announced on 11 November 2026 and builds on Genie One.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Does Genie act without human approval?</p><p class="text-gray-600 leading-relaxed">Databricks says users decide which actions Genie takes on its own and which need sign-off, and that every action is traced and auditable. Press coverage frames the level of supervision differently, so check the approval settings yourself.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">How much does Genie cost?</p><p class="text-gray-600 leading-relaxed">The Databricks blog post gives no pricing. It only says admins can set workspace and per-user budgets, spending caps and alerts. Ask Databricks for pricing and availability in writing.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Is the 91% benchmark result independent?</p><p class="text-gray-600 leading-relaxed">No. Databricks says it built the benchmark with Turing and ran it in its own workspace. Genie answered correctly in 91% of runs, which Databricks says is 1.6 times the stronger frontier agent. Test on your own tasks.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What is Databricks Genie?","@type":"Question","acceptedAnswer":{"text":"Databricks describes the new Genie as an autonomous AI coworker that handles long-running enterprise tasks for users within guardrails set by the organization. It was announced on 11 November 2026 and builds on Genie One.","@type":"Answer"}},{"name":"Does Genie act without human approval?","@type":"Question","acceptedAnswer":{"text":"Databricks says users decide which actions Genie takes on its own and which need sign-off, and that every action is traced and auditable. Press coverage frames the level of supervision differently, so check the approval settings yourself.","@type":"Answer"}},{"name":"How much does Genie cost?","@type":"Question","acceptedAnswer":{"text":"The Databricks blog post gives no pricing. It only says admins can set workspace and per-user budgets, spending caps and alerts. Ask Databricks for pricing and availability in writing.","@type":"Answer"}},{"name":"Is the 91% benchmark result independent?","@type":"Question","acceptedAnswer":{"text":"No. Databricks says it built the benchmark with Turing and ran it in its own workspace. Genie answered correctly in 91% of runs, which Databricks says is 1.6 times the stronger frontier agent. Test on your own tasks.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Sources

- Databricks, [Genie: Autonomous AI for Enterprise Work](https://databricks.com/blog/new-genie-autonomous-ai-complex-enterprise-work), November 11, 2026

</div>
