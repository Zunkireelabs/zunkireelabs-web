---
title: "CrowdStrike Buys Fiddler and Dreadnode: What It Signals"
seoTitle: "CrowdStrike Fiddler and Dreadnode Deals Explained"
shortLabel: "CrowdStrike Agent Security Deals"
translationKey: "crowdstrike-ai-agent-security-acquisitions-what-they-signal"
description: "CrowdStrike agreed to buy Fiddler AI and Dreadnode on 3 November 2026. What was announced, what the reported $495M figure is, and what to check as a business."
date: 2026-11-20
lastUpdated: 2026-11-20
category: Insights
pillar: "ai-frontier"
tags:
  - CrowdStrike
  - AI Agent Security
  - AI Agents
  - AI Agent Governance
readTime: 6
featuredImage: "/assets/images/blog/crowdstrike-ai-agent-security-acquisitions-what-they-signal.svg"
ogType: article
related:
  - /blog/ibm-agent-identity-vault-2-2-how-to-govern-ai-agents/
  - /blog/how-to-test-ai-agents-before-launch-evals-red-teaming-and-regression-suites/
  - /blog/ibm-microsoft-imagine-enterprise-ai-agent-platform-what-it-says-and-what-it-leaves-out/
---

<div class="container-custom py-12 md:py-20">

**In short:** On 3 November 2026, at Fal.Con Europe in Barcelona, CrowdStrike announced agreements to buy two AI security companies: Fiddler AI (agent observability) and Dreadnode (automated security testing for AI). CrowdStrike did not disclose prices. About $495 million combined was reported by the Wall Street Journal, via BankInfoSecurity. The deals have not closed. The signal is that "watch the agent" and "attack-test the agent" are becoming standard security products.

## Key Takeaways

- Both deals are expected to close in CrowdStrike's fourth quarter of fiscal 2027, subject to customary conditions. Reported timing is by 31 January 2027.
- CrowdStrike said it will pay "most of the purchase price in cash, with a portion in stock subject to vesting conditions." It did not give dollar amounts.
- The $495 million figure (about $400 million Fiddler, about $95 million Dreadnode) comes from the WSJ as cited by a secondary outlet. We could not confirm it on a CrowdStrike page.
- Fiddler becomes Falcon Observe; Dreadnode's testing feeds Falcon Guardian. Both products are scheduled for general availability in that same quarter, so neither is shipping yet.
- Separately, CrowdStrike launched an AI Kill Switch in Falcon Guardian, reported as available now.

## What Did CrowdStrike Announce?

CrowdStrike's press release says it signed a definitive agreement to acquire Fiddler AI. Fiddler provides agent observability and explainability: evaluating agents before deployment, tracing their decisions, reasoning paths and tool calls, and detecting behavioural drift, hallucinations and unintended actions in production. CEO George Kurtz said "Fiddler is the flight recorder for every agent."

Dreadnode tests AI models, applications and agents for weaknesses before launch. Per coverage of the announcement, it runs more than 100 known attack strategies, including jailbreaks and prompt injection, and findings feed Falcon Guardian as policy recommendations. Its team joins CrowdStrike's Cyber Superintelligence Lab.

## What Is the Kill Switch?

The trade-press account (The Next Web, drawing on CrowdStrike's releases) says the AI Kill Switch lets an authorised administrator stop a rogue agent where it runs, block it from relaunching and cut its network access, with every action logged. Enforcement starts at the gateway, with endpoint support "soon". The CSO Online report we read did not mention it, so treat the details as vendor-described.

## What Is Stated and What Is Not?

| Question | Stated | Not stated |
|---|---|---|
| Price | Mostly cash, some vesting stock | Dollar amounts, from CrowdStrike |
| Reported value | About $495M combined (WSJ via BankInfoSecurity) | Confirmation from either company |
| Timing | Close and GA both in Q4 FY27 | Exact dates; how Fiddler will be integrated |
| Capability | Tracing, testing, 100+ attack strategies | Independent test results |
| Kill switch | Launched, gateway first | Endpoint coverage date |

Gartner's Apeksha Kaushik, quoted by CSO Online, said enterprises "should distinguish between announced plans and demonstrated product capability." That is the right reading here.

## What Do the Deals Signal?

Security vendors are treating agents as a new class of thing to monitor, much like endpoints or identities. The pieces bought map to a lifecycle: test before launch, observe in production, stop when something goes wrong. If you already use CrowdStrike, expect these as add-ons. If you do not, the same lifecycle is a useful template.

## What Should a Mid-Sized Business Do?

1. **Do not wait for a product.** The deals are not closed and the products are not generally available.
2. **Test before launch.** Use our [guide to evals and red-teaming](/blog/how-to-test-ai-agents-before-launch-evals-red-teaming-and-regression-suites/).
3. **Log tool calls and decisions,** not just chat text. See [building an agent with guardrails and an audit trail](/blog/how-to-build-an-ai-agent-for-your-business-tools-guardrails-audit-trail/).
4. **Give each agent its own identity** so you can stop one without stopping all. Compare [IBM's approach](/blog/ibm-agent-identity-vault-2-2-how-to-govern-ai-agents/).
5. **Ask vendors for evidence,** not roadmaps: what is shipping today, on which platforms.
6. **Test your stop switch** before you need it.

If you want agents built with these controls from day one, see our [custom AI agent development](/solutions/custom-agent/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What did CrowdStrike announce on 3 November 2026?</p><p class="text-gray-600 leading-relaxed">CrowdStrike announced agreements to acquire Fiddler AI, for agent observability, and Dreadnode, for automated AI security testing. It also launched an AI Kill Switch in Falcon Guardian. Both acquisitions are expected to close in its fourth fiscal quarter of 2027.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">How much did CrowdStrike pay for Fiddler and Dreadnode?</p><p class="text-gray-600 leading-relaxed">CrowdStrike did not disclose prices. The Wall Street Journal, as cited by BankInfoSecurity, reported about $495 million combined: roughly $400 million for Fiddler and $95 million for Dreadnode. We could not confirm that figure from CrowdStrike itself.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Are the Fiddler and Dreadnode products available yet?</p><p class="text-gray-600 leading-relaxed">Not as CrowdStrike products. The deals have not closed, and Falcon Observe, based on Fiddler, is scheduled for general availability in the fourth quarter of fiscal 2027. The kill switch is described as available now.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What should a mid-sized business take from these deals?</p><p class="text-gray-600 leading-relaxed">Treat the lifecycle as a checklist: test agents before launch, log what they do in production, give each its own identity and keep a tested way to stop them. You can start all of that without buying a platform.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What did CrowdStrike announce on 3 November 2026?","@type":"Question","acceptedAnswer":{"text":"CrowdStrike announced agreements to acquire Fiddler AI, for agent observability, and Dreadnode, for automated AI security testing. It also launched an AI Kill Switch in Falcon Guardian. Both acquisitions are expected to close in its fourth fiscal quarter of 2027.","@type":"Answer"}},{"name":"How much did CrowdStrike pay for Fiddler and Dreadnode?","@type":"Question","acceptedAnswer":{"text":"CrowdStrike did not disclose prices. The Wall Street Journal, as cited by BankInfoSecurity, reported about $495 million combined: roughly $400 million for Fiddler and $95 million for Dreadnode. We could not confirm that figure from CrowdStrike itself.","@type":"Answer"}},{"name":"Are the Fiddler and Dreadnode products available yet?","@type":"Question","acceptedAnswer":{"text":"Not as CrowdStrike products. The deals have not closed, and Falcon Observe, based on Fiddler, is scheduled for general availability in the fourth quarter of fiscal 2027. The kill switch is described as available now.","@type":"Answer"}},{"name":"What should a mid-sized business take from these deals?","@type":"Question","acceptedAnswer":{"text":"Treat the lifecycle as a checklist: test agents before launch, log what they do in production, give each its own identity and keep a tested way to stop them. You can start all of that without buying a platform.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Sources

- CrowdStrike, [CrowdStrike to Acquire Fiddler to Deliver Agent Observability for AI Trust](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-to-acquire-fiddler-to-deliver-agent-observability/), November 3, 2026
- The Next Web, [CrowdStrike agrees to buy AI security startups Fiddler and Dreadnode](https://thenextweb.com/news/crowdstrike-fiddler-dreadnode-acquisitions-ai-kill-switch), November 3, 2026
- CSO Online, [CrowdStrike to acquire Fiddler, Dreadnode to extend AI security across agent lifecycle](https://www.csoonline.com/article/4244500/crowdstrike-to-acquire-fiddler-dreadnode-to-extend-ai-security-across-agent-lifecycle.html), November 4, 2026
- BankInfoSecurity, [CrowdStrike to Buy AI Security Startups for $495M](https://www.bankinfosecurity.com/crowdstrike-to-buy-ai-security-startups-for-495m-a-33285), November 3, 2026

</div>
