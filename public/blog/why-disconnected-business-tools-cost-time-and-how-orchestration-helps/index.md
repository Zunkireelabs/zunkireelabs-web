# Disconnected Tools: What They Cost and How Orchestration Helps

URL: https://zunkireelabs.com/blog/why-disconnected-business-tools-cost-time-and-how-orchestration-helps/
Published: 2026-10-05
Summary: Surveys show companies run 100+ apps but only 27% are connected. What Salesforce, Okta, Asana and UC Irvine found, and how orchestration layers help.

**In short:** Companies now run well over a hundred applications, and most of them are not connected to each other. Surveys, several published by software vendors, link that gap to time spent on coordination instead of skilled work, and to AI agents that end up working in isolation. An orchestration layer, which coordinates work across the tools a team already uses, is one response. The evidence for the problem is stronger than the evidence for any single fix.

## Key Takeaways

- Okta's 2025 Businesses at Work report found an average of 101 applications per organization, the first time the figure passed 100.
- The 2026 Salesforce and MuleSoft Connectivity Benchmark, a vendor survey of 1,050 IT leaders, found only 27% of applications connected, 86% of IT leaders worried that agents will add complexity without proper integration and 50% of AI agents operating in isolated silos.
- Asana's own survey of more than 10,000 knowledge workers puts 60% of time on "work about work", which includes switching between apps and chasing status.
- Academic research is more nuanced: a UC Irvine and Humboldt University study found people finish interrupted tasks faster, at the cost of more stress and effort.
- Orchestration helps most when the data underneath is clean, owned and permissioned. It does not fix bad data.

## The Evidence

This post combines two vendor-published surveys, one dataset drawn from a vendor's own customers and one academic study. The vendor sources have an interest in the topic, so we label them.

**App sprawl.** Okta's [Businesses at Work 2025](https://www.okta.com/newsroom/articles/businesses-at-work-2025/) report analyzes anonymized data from the Okta Integration Network, covering thousands of enterprise customers worldwide. It found that organizations deploy an average of 101 applications, the first time the average has passed 100 after years of plateauing. This describes Okta's customers, which skew toward larger organizations, so a ten-person team will typically run far fewer.

**The connection gap.** Salesforce's [2026 Connectivity Report](https://www.salesforce.com/news/stories/connectivity-report-announcement-2026/), produced with MuleSoft, surveyed 1,050 IT managers and above at enterprises with 1,000 or more employees in the US, UK, France, Germany, the Netherlands, Australia, Singapore, Hong Kong and Japan, in October and November 2025. It reports that 27% of applications are connected, 86% of IT leaders worry that agents will add more complexity than value without proper integration, 96% agree that AI agent success depends on seamless data integration, 96% report data barriers for AI, and 50% of agents currently operate in isolated silos. The top barriers it lists are risk, compliance and security (42%), lack of AI or agent expertise (41%), legacy infrastructure (37%) and siloed apps and data (35%). Salesforce and MuleSoft sell integration and agent products, so treat these as the vendors' findings.

**The time cost.** Asana's [research on "work about work"](https://asana.com/resources/why-work-about-work-is-bad), from its Anatomy of Work Index survey of more than 10,000 knowledge workers, reports that 60% of work time goes on activities such as communicating about work, searching for information, switching between apps, managing shifting priorities and chasing the status of work. It also reports that the average employee uses 10 different apps a day. Asana sells work management software, and the page we read does not state the survey year, so treat the 60% as a vendor estimate rather than a measurement of your own team.

**The counterweight.** In an academic study, Gloria Mark of UC Irvine, Daniela Gudith and Ulrich Klocke of Humboldt University Berlin found that [people completed interrupted tasks in less time with no difference in quality](https://www.ics.uci.edu/~gmark/chi08-mark.pdf), but experienced more stress, frustration, time pressure and effort. Interruptions are not the same thing as switching apps, but the study is a useful reminder that a cost can show up as strain and not as lost output.

## What the Technology Does

An orchestration layer sits above the tools a team already runs, such as a CRM, email and marketing platforms, and coordinates work between them. The common pattern has three parts:

1. **Connections.** Authenticated links to each tool, so the layer can read and, where permitted, change records.
2. **Coordination.** Rules or agents that notice an event in one tool, for example a deal moving to a new stage, and trigger the matching follow-through in the others.
3. **Visibility.** A record of what moved, where and why, so people can audit it without opening every tool.

The idea is not to replace the CRM or the email platform. It is to stop a person acting as the relay between them.

## What Changed

Two shifts make this more pressing than it was a few years ago:

- **Tools keep multiplying.** The Okta figure shows the average passing 100 applications, and each one holds part of the picture.
- **Agents need context.** The Salesforce and MuleSoft survey reports that half of organizations' agents operate in isolated silos. An agent that can see only one tool can only work with part of the story.

Earlier integration work mostly moved data between two systems on a schedule. Orchestration adds decisions about what should happen next across several systems.

## Who Benefits

**Small and mid-sized teams** may benefit most, because they usually have no integration team and rely on one person remembering to update the next tool. A lead logged in a CRM, a follow-up sent from email and a campaign tracked in a marketing tool is a common three-tool handoff. **Operations and sales teams** gain from fewer duplicate entries and fewer stale records. **Managers** get one place to see what happened. These are plausible benefits rather than measured ones: the surveys above describe the problem, not the results of a specific orchestration product.

## Limitations and Open Questions

- **Data quality.** Coordinating bad data across five tools spreads the errors faster. The Salesforce and MuleSoft survey found 96% of organizations report data barriers for AI.
- **Ownership.** Someone must own each rule or agent workflow, and own the outcome when it goes wrong.
- **Security and permissions.** The survey lists risk, compliance and security as the top barrier (42%). A layer that can act across tools needs least-privilege access and an audit trail.
- **Governance.** The same survey reports that 46% of organizations lack centralized governance of their APIs.
- **Measuring the payoff.** The 60% "work about work" figure comes from a vendor survey, and the academic evidence on interruptions is mixed, so expect to measure your own team's time before and after.
- **Not every problem needs a layer.** A small stack with few handoffs may be better served by one tool's built-in automation.

## What Happens Next

As companies add AI agents, the question moves from "how do we connect our tools" to "how do agents act across them safely". The Salesforce and MuleSoft survey projects agent counts to grow by 67% by 2027, though that is a vendor projection. For most teams the near-term work is modest: map the three or four handoffs that cost the most time, check the data behind them, and decide which steps a person must still approve.

Zunkiree Labs builds an orchestration product, [Orca](/products/orca/), which coordinates workflows across CRM, email and marketing tools, and is described in [what Orca is and how an orchestration layer works](/blog/what-is-orca-workflow-orchestration-layer-explained/). As the maker, we have an interest in the topic, so weigh this post's evidence, not our product.

## The Short Version

Companies run more than 100 apps on average, and surveys, several from vendors who sell integration, say few of them are connected. The time cost is plausible but less cleanly measured than the headlines suggest. An orchestration layer coordinates work across existing tools, and it works best on clean, owned, permissioned data. Map your costliest handoffs first.

For related reading, see [from dashboards to decisions](/blog/from-dashboards-to-decisions-the-future-of-business-intelligence/) and [why AI agents are getting their own infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/).

## FAQ

**What is workflow orchestration?**
Workflow orchestration is a coordination layer that sits above existing business tools, such as a CRM, email and marketing platforms, and moves information and status between them so that work started in one tool is followed through in the others without someone relaying it by hand.

**How many apps does the average company use?**
Okta's Businesses at Work 2025 report, based on anonymized data from the Okta Integration Network, found that organizations deploy an average of 101 applications, the first time the average passed 100. Okta measures its own customers, who are mostly larger organizations, so smaller teams will usually run fewer.

**How many business applications are actually connected?**
In the 2026 Connectivity Benchmark from Salesforce and MuleSoft, which surveyed 1,050 IT leaders at enterprises with 1,000 or more employees in October and November 2025, only 27% of applications were connected and 86% of IT leaders worried that agents would add more complexity than value without proper integration. The study is published by vendors that sell integration products.

**Does switching between tools really slow people down?**
The evidence is mixed. Asana's own survey of more than 10,000 knowledge workers reports that 60% of time goes on work about work, which includes switching between apps and chasing status. An academic study by Gloria Mark and colleagues found that interrupted tasks were finished faster with no loss of quality, but at the price of more stress, frustration and effort.

## Related Insights

- [From Dashboards to Decisions: The Future of Business Intelligence](/blog/from-dashboards-to-decisions-the-future-of-business-intelligence/)
- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [What Is Orca? The Orchestration Layer Explained](/blog/what-is-orca-workflow-orchestration-layer-explained/)
- [AI Orchestration vs Automation vs Agents: What Is the Difference?](/blog/ai-orchestration-vs-automation-vs-agents-what-is-the-difference/)

## Sources

- Okta, [Businesses at Work 2025](https://www.okta.com/newsroom/articles/businesses-at-work-2025/), 2025
- Salesforce, [2026 Connectivity Report](https://www.salesforce.com/news/stories/connectivity-report-announcement-2026/), 2026 (survey of 1,050 IT leaders, October to November 2025; vendor-published with MuleSoft)
- Asana, [Work about work](https://asana.com/resources/why-work-about-work-is-bad) (Anatomy of Work Index; vendor-published, survey year not stated on the page)
- Gloria Mark, Daniela Gudith and Ulrich Klocke, [The Cost of Interrupted Work: More Speed and Stress](https://www.ics.uci.edu/~gmark/chi08-mark.pdf), CHI 2008
