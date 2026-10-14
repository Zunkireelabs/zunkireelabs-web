---
title: "The Agent Race: OpenAI's Dots and Claude Sonnet 5.5"
shortLabel: "The Agent Race"
translationKey: "ai-agent-race-openai-dots-and-claude-sonnet-5-5"
description: "OpenAI launched 'dots' always-on agents and Anthropic released Claude Sonnet 5.5. What was announced, what is vendor claim, and what businesses should do."
date: 2026-10-05
lastUpdated: 2026-10-05
category: Insights
pillar: "ai-frontier"
tags:
  - AI Agents
  - OpenAI
  - Anthropic
readTime: 7
featuredImage: "/assets/images/blog/ai-agent-race-openai-dots-and-claude-sonnet-5-5.svg"
featuredImageAlt: "Abstract gradient background"
ogType: article
---

<div class="container-custom py-12 md:py-20">

**In short:** In the last week of September 2026, OpenAI announced Dots, "always-on" agents that keep working in the background, and Anthropic released Claude Sonnet 5.5, a faster, lower-cost model aimed at everyday enterprise work. Most numbers so far come from the vendors themselves. The practical question for a business is not which logo wins, but how much freedom to give an agent that can act without you watching.

## Key Takeaways

- OpenAI unveiled Dots at its DevDay on September 29, 2026. They run on GPT-6 Astra, get their own cloud computer and browser, and can message people through ChatGPT, Slack and Microsoft Teams.
- Anthropic released Claude Sonnet 5.5 on September 28, 2026 at unchanged API prices of $2 per million input tokens and $10 per million output tokens. Anthropic says it is more than 30% faster and can cut the cost of a task by up to 30%.
- Speed, cost and benchmark figures are the vendors' own claims. Customer quotes exist, but they are selective.
- Agents that act on their own raise permission and oversight questions that chatbots do not.

## What Was Announced?

**OpenAI's Dots.** [VentureBeat](https://venturebeat.com/technology/openai-launches-dots-always-on-ai-agent-coworkers-and-chatgpt-space-where-they-can-collaborate-with-human-teams) and [TechCrunch](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/) report that OpenAI announced Dots at DevDay on September 29, 2026. OpenAI describes them as "remarkably capable, always-on agents built to handle everything." According to VentureBeat, Dots keep working after you close the chat window: they monitor projects, use software and return finished work for approval. Each one runs on GPT-6 Astra with its own cloud computer and browser, can connect to more than 4,000 apps through OpenAI's plugin ecosystem, and can be reached through ChatGPT, Slack and Microsoft Teams. The first Dot is included for ChatGPT Pro and Business Premium customers, with Enterprise, Edu and Healthcare in beta. OpenAI also announced ChatGPT Space, a shared workspace where people and agents work on the same documents.

**Anthropic's Claude Sonnet 5.5.** [SiliconANGLE](https://siliconangle.com/2026/09/28/anthropic-debuts-claude-sonnet-5-5-running-30-faster-than-the-previous-generation-ai-model/) and [VentureBeat](https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-5-with-30-cost-reduction-per-task-due-to-faster-speeds-and-fewer-tool-calls) report that Anthropic released Sonnet 5.5 on September 28, 2026 as a mid-tier "workhorse" next to the stronger Opus 5.5. Anthropic says it is best at well-scoped everyday work such as fixing bugs and producing documents, slides and spreadsheets. It is available on Anthropic's platform and through Amazon Web Services, Google Cloud and Microsoft Azure. SiliconANGLE adds that a smaller Haiku 5.5 is planned "in the coming weeks."

## Vendor Claims or Independent Evidence?

Almost everything above is what the companies say about their own products. It helps to separate the two:

- **Vendor claims:** Anthropic says Sonnet 5.5 generates output more than 30% faster than Sonnet 5, can lower the total cost of a task by up to 30% through fewer tokens and tool calls, and scores 70.6% on its Terminal-Bench 4.0 coding test. OpenAI says Dots are "remarkably capable."
- **Customer reports:** VentureBeat quotes companies such as Box, Zendesk and Slack reporting faster processing or fewer tokens on their own workloads. These are individual customers, chosen for the launch coverage.
- **Caveats:** VentureBeat notes that benchmark scores should not be treated as direct proxies for every production workload, and Anthropic itself says Opus 5.5 remains stronger at difficult, open-ended work. OpenAI advises users to review consequential work because agents can still make mistakes.

No independent, side-by-side evaluation of Dots has been published in the sources we reviewed. Treat the headline numbers as a starting point for your own test, not as a ranking.

## How Is an Always-On Agent Different From a Chatbot?

A chatbot waits for a question and answers it. An always-on agent is given a goal and keeps working toward it: it checks information, uses tools and apps, and comes back with results or questions. That is the idea behind Dots, and it is why they get their own accounts, credentials and computer environment.

This is the same direction we described in [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/). The more an agent can do on its own, the more it matters what it is allowed to touch.

## What Are the Risks?

Per VentureBeat, OpenAI builds in some controls: custom rules to allow, require approval for or prohibit actions, an activity view to inspect and step in on background work, an automatic review of consequential actions, and a rule that sensitive steps such as password changes stay with humans. TechCrunch adds that OpenAI is working with Microsoft on integrating Dots with Agent 365 security controls.

Controls on paper still have to be configured and checked. Regulators are already paying attention to agents that go beyond their instructions, as we covered in [FTC Opens Probe Into AI Labs Over Rogue Agents](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/). Shared workspaces add another point to watch: VentureBeat reports that if ChatGPT uses personal memory content in shared work, that information becomes visible to collaborators.

## What Should a Business Do?

1. **Pilot on low-risk work first.** Use a new agent or model on tasks where a mistake is cheap to catch.
2. **Start with read-only access.** Add permissions one at a time, and require approval for sending, paying, deleting or anything customer-facing.
3. **Measure on your own tasks.** Compare cost, speed and error rate on real work, not on published benchmarks.
4. **Keep logs and a named owner.** Someone should be accountable for each agent's results and able to see what it did.
5. **Check data terms.** Look at what is retained or used for training for your plan, and what a shared workspace exposes.
6. **Do not lock in too early.** The leading model changes every few weeks, so keep your workflows portable.

## The Short Version

OpenAI is pushing agents that work in the background, and Anthropic is pushing a faster, cheaper model for everyday work. The announcements are real, but the performance claims are mostly the vendors' own. Businesses benefit most by testing on their own tasks, limiting what agents can touch, and keeping a person accountable.

For more context, read our overview of [AI trends and predictions for 2026](/blog/ai-trends-and-predictions-for-2026-what-lies-ahead/), or see our checklist for [choosing an AI development company](/blog/how-to-choose-ai-development-company/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What are OpenAI's Dots?</p><p class="text-gray-600 leading-relaxed">Dots are what OpenAI calls always-on agents, announced at DevDay on September 29, 2026. They run on GPT-6 Astra, get their own cloud computer and browser, connect to apps and can be reached through ChatGPT, Slack and Microsoft Teams, according to VentureBeat and TechCrunch.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What is Claude Sonnet 5.5?</p><p class="text-gray-600 leading-relaxed">Claude Sonnet 5.5 is Anthropic's mid-tier model, released on September 28, 2026. Anthropic says it is more than 30% faster than Sonnet 5 and can lower the cost of a task by up to 30%, with API prices unchanged at $2 per million input tokens and $10 per million output tokens.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Are the performance claims independently verified?</p><p class="text-gray-600 leading-relaxed">Mostly not. Speed, cost and benchmark figures come from the vendors, supported by a few customer quotes. VentureBeat cautions that benchmarks are not direct proxies for every production workload.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What should a business do before using an always-on agent?</p><p class="text-gray-600 leading-relaxed">Start with low-risk tasks and read-only access, require human approval for high-impact actions, keep logs, name an owner, and test on your own work before relying on published numbers.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What are OpenAI's Dots?","@type":"Question","acceptedAnswer":{"text":"Dots are what OpenAI calls always-on agents, announced at DevDay on September 29, 2026. They run on GPT-6 Astra, get their own cloud computer and browser, connect to apps and can be reached through ChatGPT, Slack and Microsoft Teams, according to VentureBeat and TechCrunch.","@type":"Answer"}},{"name":"What is Claude Sonnet 5.5?","@type":"Question","acceptedAnswer":{"text":"Claude Sonnet 5.5 is Anthropic's mid-tier model, released on September 28, 2026. Anthropic says it is more than 30% faster than Sonnet 5 and can lower the cost of a task by up to 30%, with API prices unchanged at $2 per million input tokens and $10 per million output tokens.","@type":"Answer"}},{"name":"Are the performance claims independently verified?","@type":"Question","acceptedAnswer":{"text":"Mostly not. Speed, cost and benchmark figures come from the vendors, supported by a few customer quotes. VentureBeat cautions that benchmarks are not direct proxies for every production workload.","@type":"Answer"}},{"name":"What should a business do before using an always-on agent?","@type":"Question","acceptedAnswer":{"text":"Start with low-risk tasks and read-only access, require human approval for high-impact actions, keep logs, name an owner, and test on your own work before relying on published numbers.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Related Insights

- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [FTC Probes AI Labs Over Rogue Agents: What Businesses Should Do](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/)

## Sources

- TechCrunch, Lucas Ropek, [OpenAI launches Dots, its bubbly agentic avatar](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/), September 29, 2026
- VentureBeat, Carl Franzen, [OpenAI launches Dots, always-on AI agent coworkers, and ChatGPT Space](https://venturebeat.com/technology/openai-launches-dots-always-on-ai-agent-coworkers-and-chatgpt-space-where-they-can-collaborate-with-human-teams), September 29, 2026
- SiliconANGLE, Kyt Dotson, [Anthropic debuts Claude Sonnet 5.5 running 30% faster than the previous-generation AI model](https://siliconangle.com/2026/09/28/anthropic-debuts-claude-sonnet-5-5-running-30-faster-than-the-previous-generation-ai-model/), September 28, 2026
- VentureBeat, Carl Franzen, [Anthropic launches Claude Sonnet 5.5 with 30% cost reduction per task](https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-5-with-30-cost-reduction-per-task-due-to-faster-speeds-and-fewer-tool-calls), September 28, 2026

</div>
