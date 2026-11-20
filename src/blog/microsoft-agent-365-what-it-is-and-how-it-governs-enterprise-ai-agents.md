---
title: "Microsoft Agent 365: How It Governs Enterprise AI Agents"
seoTitle: "Microsoft Agent 365: Governing Enterprise AI Agents"
shortLabel: "Microsoft Agent 365"
translationKey: "microsoft-agent-365-what-it-is-and-how-it-governs-enterprise-ai-agents"
description: "Microsoft's Ignite 2026 Agent 365 update adds agent identities, discovery and cost controls. What is live, what is preview, and what a mid-sized firm should do."
date: 2026-11-20
lastUpdated: 2026-11-20
category: Insights
pillar: "ai-frontier"
tags:
  - Microsoft
  - AI Agent Governance
  - Agent Identity
  - AI Agents
  - AI Agent Security
readTime: 6
featuredImage: "/assets/images/blog/microsoft-agent-365-what-it-is-and-how-it-governs-enterprise-ai-agents.svg"
ogType: article
related:
  - /blog/ibm-agent-identity-vault-2-2-how-to-govern-ai-agents/
  - /blog/ibm-microsoft-imagine-enterprise-ai-agent-platform-what-it-says-and-what-it-leaves-out/
  - /blog/how-to-test-ai-agents-before-launch-evals-red-teaming-and-regression-suites/
---

<div class="container-custom py-12 md:py-20">

**In short:** At Microsoft Ignite 2026 (17 to 19 November), Microsoft described new Agent 365 and Microsoft Entra Agent ID capabilities for finding, identifying, controlling and costing AI agents, including agents from other vendors. Much of it is still preview, and Microsoft's pages give no prices. The useful part for any business is the model: every agent gets an identity, an owner, a policy and a budget.

## Key Takeaways

- Microsoft says connected agents from platforms such as Salesforce Agentforce, Google Vertex AI, Anthropic Claude Managed Agents and OpenAI "automatically receive a Microsoft Entra Agent ID". Rollout completes in December.
- Local coding agents such as Claude Code and GitHub Copilot CLI can be discovered and, in preview, given an identity and blocked if unsanctioned.
- Business Analytics (spend forecasting, value signals) began rolling out on 17 November in Microsoft's Frontier programme. Cost Management adds spending limits and alerts, but its status is not stated.
- Many items are preview, and premium features need an Agent 365 or ME7 licence. No pricing appears in the pages we read.
- This is vendor material. We have not tested any of it.

## What Is Microsoft Agent 365?

Microsoft's own Ignite guide describes Agent 365 as moving from an agentic control plane towards an AI observability platform. In plain terms, it is an admin layer that lists the agents in your organisation, whoever built them, and lets IT assign ownership, apply policy and manage their lifecycle.

## What Did Microsoft Announce at Ignite 2026?

From Microsoft's "What's new in Microsoft Agent 365" post:

- **Identity.** Entra Agent ID for connected platforms (Salesforce Agentforce, Amazon AgentCore, Google Vertex AI, Databricks, Snowflake, Anthropic, OpenAI, Oracle, SAP, ServiceNow, UiPath). Entra Agent ID for local agents and Microsoft Autopilot is in preview.
- **Discovery.** Local agent discovery in Microsoft Defender is generally available, covering more than 60 local agents. Network-level and shadow-AI discovery are preview.
- **Governance.** Plugin and skills governance is generally available. Blocking unsanctioned local agents is preview. An action centre for inactive and ownerless agents is due in preview in December.
- **Security.** Dynamic agent risk (one risk level per agent, updated as it acts) is preview. Defender runtime protection for local agents is generally available on Windows.
- **Cost.** Business Analytics is rolling out in Frontier. Cost Management lists spending limits and alerts at user, group, organisation or resource level, plus model access controls.

## What Is Stated and What Is Not?

| Area | Stated by Microsoft | Not stated in the pages we read |
|---|---|---|
| Identity | Connected agents get an Entra Agent ID, finishing in December | Whether every platform behaves the same way |
| Local agents | Discovery GA; identity and blocking in preview | A date for general availability |
| Policy | Conditional Access evaluated at the point of action | Status of that feature |
| Cost | Spend forecasting, limits and alerts | Prices, and the status of Cost Management |
| Licensing | Premium features need Agent 365 or ME7 | The cost of either |
| Results | Feature descriptions | Any customer outcome or independent test |

## Why Does Agent Identity Matter?

Agents that share a person's login or one API key leave you unable to say what the agent did, or to stop only that agent. A separate identity makes three things possible: permissions scoped to the agent, a record of its actions, and a way to switch it off alone. IBM made a similar argument a few weeks ago, which we covered in [IBM Agent Identity and Vault 2.2](/blog/ibm-agent-identity-vault-2-2-how-to-govern-ai-agents/). The two vendors are converging on the same idea.

## What Should a Mid-Sized Business Do?

You do not need Agent 365 to apply the pattern.

1. **List every agent** you run or allow, including coding tools on staff laptops, with an owner for each.
2. **Give each agent its own credentials** and the least access it needs.
3. **Decide which agents are sanctioned** and which tools they may use. Block the rest where you can.
4. **Set a budget and an alert** per agent or team, so spend does not surprise you.
5. **Log actions** and test your stop switch. See [how to build an agent with guardrails and an audit trail](/blog/how-to-build-an-ai-agent-for-your-business-tools-guardrails-audit-trail/).
6. **Test before launch.** Our guide to [testing agents with evals and red-teaming](/blog/how-to-test-ai-agents-before-launch-evals-red-teaming-and-regression-suites/) applies whatever platform you choose.
7. **Check licensing early** if you are a Microsoft 365 customer, since preview features and licences can change.

## What to Be Careful About

Preview is not production, and Microsoft's pages did not give pricing. Controls tied to one vendor's directory work best if most of your agents live in that vendor's ecosystem. If you need agents built around your own tools and rules, see our [custom AI agent development](/solutions/custom-agent/) work.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What is Microsoft Agent 365?</p><p class="text-gray-600 leading-relaxed">It is Microsoft's admin layer for AI agents. It lets IT see agents from Microsoft and other vendors, assign owners, apply policy, track activity and cost, and manage their lifecycle. Microsoft now describes it as heading towards an AI observability platform.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What did Microsoft announce for agent identity at Ignite 2026?</p><p class="text-gray-600 leading-relaxed">Microsoft said connected agents from platforms including Salesforce, Google Vertex AI, Anthropic and OpenAI automatically receive a Microsoft Entra Agent ID, with rollout completing in December. Identities for local agents such as Claude Code and GitHub Copilot CLI are in preview.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Is Agent 365 cost visibility available now?</p><p class="text-gray-600 leading-relaxed">Partly. Business Analytics began rolling out on 17 November in Microsoft's Frontier programme. Cost Management, with spending limits and alerts, is described but its status is not stated. No prices were given in the pages we read.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Does a small or mid-sized business need Agent 365?</p><p class="text-gray-600 leading-relaxed">Not necessarily. The practices behind it matter more: an agent inventory, separate credentials, minimum permissions, budgets, logging and a tested stop switch. You can start those with any tooling, then decide whether a platform is worth its licence.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What is Microsoft Agent 365?","@type":"Question","acceptedAnswer":{"text":"It is Microsoft's admin layer for AI agents. It lets IT see agents from Microsoft and other vendors, assign owners, apply policy, track activity and cost, and manage their lifecycle. Microsoft now describes it as heading towards an AI observability platform.","@type":"Answer"}},{"name":"What did Microsoft announce for agent identity at Ignite 2026?","@type":"Question","acceptedAnswer":{"text":"Microsoft said connected agents from platforms including Salesforce, Google Vertex AI, Anthropic and OpenAI automatically receive a Microsoft Entra Agent ID, with rollout completing in December. Identities for local agents such as Claude Code and GitHub Copilot CLI are in preview.","@type":"Answer"}},{"name":"Is Agent 365 cost visibility available now?","@type":"Question","acceptedAnswer":{"text":"Partly. Business Analytics began rolling out on 17 November in Microsoft's Frontier programme. Cost Management, with spending limits and alerts, is described but its status is not stated. No prices were given in the pages we read.","@type":"Answer"}},{"name":"Does a small or mid-sized business need Agent 365?","@type":"Question","acceptedAnswer":{"text":"Not necessarily. The practices behind it matter more: an agent inventory, separate credentials, minimum permissions, budgets, logging and a tested stop switch. You can start those with any tooling, then decide whether a platform is worth its licence.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Sources

- Microsoft Tech Community, [What's new in Microsoft Agent 365: Ignite 2026](https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-microsoft-agent-365-ignite-2026/4571753), November 2026
- Microsoft Tech Community, [Microsoft Ignite 2026: Your Guide to Agent 365](https://techcommunity.microsoft.com/blog/agent-365-blog/microsoft-ignite-2026-your-guide-to-agent-365/4571750), November 2026

</div>
