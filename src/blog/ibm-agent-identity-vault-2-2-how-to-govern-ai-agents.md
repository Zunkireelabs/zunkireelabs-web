---
title: "IBM Agent Identity: How to Give Every AI Agent Its Own Credentials"
seoTitle: "IBM Agent Identity: Credentials for Every AI Agent"
shortLabel: "IBM Agent Identity"
translationKey: "ibm-agent-identity-vault-2-2-how-to-govern-ai-agents"
description: "IBM launched Agent Identity and Vault 2.2 on 26-27 October 2026 to give AI agents their own accounts, short-lived credentials and a kill switch."
date: 2026-11-03
lastUpdated: 2026-11-03
category: Insights
pillar: "ai-frontier"
tags:
  - IBM
  - AI Agent Governance
  - Agent Identity
  - AI Agents
  - AI Agent Security
readTime: 6
featuredImage: "/assets/images/blog/ibm-agent-identity-vault-2-2-how-to-govern-ai-agents.svg"
ogType: article
---

<div class="container-custom py-12 md:py-20">

**In short:** On 26 and 27 October 2026 IBM announced Agent Identity, generally available, together with HashiCorp Vault 2.2 and new controls in watsonx Orchestrate. The idea is simple: treat every AI agent like an employee account. It has an owner, a record of what it may do, credentials that expire quickly, and a way to switch it off. Whether or not you buy from IBM, the checklist behind it is what any business running AI agents will need.

## Key Takeaways

- IBM's pitch is that agents need their own identity: a record of who owns the agent, its lifecycle status and the authority it has been granted.
- Vault 2.2 issues short-lived, dynamically generated credentials to agents, so a leaked key stops working quickly and access can be revoked in real time.
- IBM quotes Gartner: by 2028 the average Fortune 500 company will use over 150,000 AI agents, yet only 13% of organizations believe they have the right agent governance in place.
- The watsonx Orchestrate additions are Discover (find agents across clouds), Contain (isolated sandboxes with a kill switch) and Evaluate (test agents, models and MCP servers, with cost tracking).
- Discover and Contain are tech previews, not generally available. Agent Identity and Evaluate are generally available.
- This is a vendor announcement. We have not tested these products, and the Gartner numbers are as quoted by IBM.

## What IBM Announced

IBM published two related items in late October 2026. On 26 October it announced that IBM Agent Identity is generally available. On 27 October, at its TechXchange event in Atlanta, it announced a wider package under the heading "identity and control for AI agents".

The parts, as described in IBM's release:

- **Agent Identity (generally available).** A central record for each agent: who owns it, its lifecycle status and the authority it has been granted. It covers registration, delegation on behalf of a user, short-lived task-scoped tokens, and audit trails.
- **HashiCorp Vault 2.2 (generally available).** Gives agents their own secured accounts, renews their credentials automatically and issues short-lived credentials that can be revoked. If an agent tries an action outside its permissions, IBM says access can be denied and the session revoked in real time.
- **watsonx Orchestrate: Discover, Contain, Evaluate.** Discover (tech preview) finds agents running on Amazon Bedrock, Microsoft Foundry and Google Gemini. Contain (tech preview) runs agents in isolated sandboxes and adds a kill switch. Evaluate (generally available) tests agents, models and MCP servers and tracks cost.
- **Secure Hub (public preview).** Central visibility across Vault environments.

IBM also says the package works with NVIDIA's OpenShell secure runtime. We covered that runtime in our post on [NVIDIA OpenShell and safe AI agents](/blog/nvidia-openshell-safe-ai-agents-gtc-berlin-2026/).

## Why Agents Need Their Own Identity

Most early agent projects run on a shared API key or the credentials of whoever built the prototype. That works in a demo and fails in production for three reasons:

1. **No owner.** When an agent does something wrong, nobody can say whose it is or what it was allowed to touch.
2. **Over-broad access.** A key that can read everything is a key that can leak everything if the agent is tricked by a malicious instruction hidden in an email or web page.
3. **No quick way to stop it.** Revoking a shared key breaks every other agent that uses it, so teams hesitate.

Giving each agent its own account, with permissions scoped to its task and credentials that expire, turns each of these into an ordinary operations problem. That is the whole point of the announcement.

## A Practical Checklist for Any Business

You do not need a large vendor stack to apply the idea. For each agent you run:

1. **Keep an inventory.** A list of every agent, what it does, which systems it can reach and which person owns it.
2. **Use separate credentials per agent.** Never share a key between agents or reuse a person's login.
3. **Grant the minimum.** Read-only where possible, one system rather than all of them, one task rather than open-ended.
4. **Prefer short-lived access.** Credentials that expire limit the damage of a leak.
5. **Log actions, not just conversations.** You want to answer "what did this agent change, and when?"
6. **Have a stop switch you have tested.** Know how to cut an agent off within minutes, and practise it.
7. **Treat tool connections as part of the attack surface.** Our [OWASP MCP Top 10 explainer](/blog/owasp-mcp-top-10-explained-for-business-owners/) and the [Microsoft Execution Containers post](/blog/microsoft-execution-containers-agent-containment-explained/) cover the neighbouring risks.

## What to Be Careful About

- **Tech preview is not production.** The discovery and containment features are previews, and details can change.
- **Vendor figures.** The 150,000-agent and 13% numbers are Gartner's, quoted by IBM. For a small or mid-sized business the lesson is the direction, not the scale.
- **Lock-in.** Identity and credential tooling sits close to the centre of your stack. Ask how it works with the systems you already use before committing.

## The Short Version

Agents that can act need the same basics as staff who can act: a named owner, limited permissions, expiring access and a way to be switched off. IBM's announcement packages those basics for large enterprises. The checklist above applies at any size, and it is much easier to set up before you have dozens of agents than after.

If you are planning agents for your own operations, see how we approach [custom AI agent development](/solutions/custom-agent/), and our [AI agent security checklist whitepaper](/resources/mcp-agent-security-checklist-business-whitepaper/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What is AI agent identity?</p><p class="text-gray-600 leading-relaxed">AI agent identity means giving each agent its own account and a record of who owns it, what it may do and its lifecycle status, instead of letting it use a shared key or a person's login. It makes permissions, auditing and revocation possible per agent.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What did IBM announce on 26 and 27 October 2026?</p><p class="text-gray-600 leading-relaxed">IBM announced Agent Identity as generally available on 26 October, and on 27 October at TechXchange 2026 announced HashiCorp Vault 2.2 with Agent Identity and new watsonx Orchestrate controls named Discover, Contain and Evaluate. Discover and Contain are tech previews.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Do small businesses need agent governance?</p><p class="text-gray-600 leading-relaxed">Yes, in a lighter form. Even a handful of agents benefit from an inventory, separate credentials, minimum permissions and a tested way to switch them off. These steps cost little before agents multiply and are painful to add afterwards.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Where do the 150,000 agents and 13% figures come from?</p><p class="text-gray-600 leading-relaxed">IBM's release attributes them to Gartner: by 2028 the average Fortune 500 enterprise will use over 150,000 AI agents, and only 13% of organizations believe they have the right agent governance in place. We have not checked Gartner's own page.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What is AI agent identity?","@type":"Question","acceptedAnswer":{"text":"AI agent identity means giving each agent its own account and a record of who owns it, what it may do and its lifecycle status, instead of letting it use a shared key or a person's login. It makes permissions, auditing and revocation possible per agent.","@type":"Answer"}},{"name":"What did IBM announce on 26 and 27 October 2026?","@type":"Question","acceptedAnswer":{"text":"IBM announced Agent Identity as generally available on 26 October, and on 27 October at TechXchange 2026 announced HashiCorp Vault 2.2 with Agent Identity and new watsonx Orchestrate controls named Discover, Contain and Evaluate. Discover and Contain are tech previews.","@type":"Answer"}},{"name":"Do small businesses need agent governance?","@type":"Question","acceptedAnswer":{"text":"Yes, in a lighter form. Even a handful of agents benefit from an inventory, separate credentials, minimum permissions and a tested way to switch them off. These steps cost little before agents multiply and are painful to add afterwards.","@type":"Answer"}},{"name":"Where do the 150,000 agents and 13% figures come from?","@type":"Question","acceptedAnswer":{"text":"IBM's release attributes them to Gartner: by 2028 the average Fortune 500 enterprise will use over 150,000 AI agents, and only 13% of organizations believe they have the right agent governance in place. We have not checked Gartner's own page.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Related Insights

- [Microsoft Execution Containers: How to Contain an AI Agent](/blog/microsoft-execution-containers-agent-containment-explained/)
- [OWASP MCP Top 10 Explained for Business Owners](/blog/owasp-mcp-top-10-explained-for-business-owners/)
- [AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)

## Sources

- IBM, [IBM Introduces Identity and Control for AI Agents, Securing Frontier Intelligence for the Enterprise](https://newsroom.ibm.com/2026-10-27-ibm-introduces-identity-and-control-for-ai-agents,-securing-frontier-intelligence-for-the-enterprise), October 27, 2026
- IBM, [IBM Agent Identity is now generally available: Building trust for the agentic era](https://www.ibm.com/new/announcements/ibm-agent-identity-is-now-generally-available-building-trust-for-the-agentic-era), October 26, 2026

</div>
