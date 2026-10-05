# From Dashboards to Decisions: The Future of Business Intelligence

URL: https://zunkireelabs.com/blog/from-dashboards-to-decisions-the-future-of-business-intelligence/
Published: 2026-10-05
Summary: BI is moving from charts you read to agents that act on company data. What Databricks announced, what Deloitte and Gartner found, and what is unresolved.

**In short:** Business intelligence is shifting from dashboards that people read to AI agents that investigate company data and, in some products, act on it. In June 2026 Databricks announced agents of this kind as generally available. Independent surveys show many executives already use AI to support decisions, but few feel mature at it, and confidence in the data and the payoff is limited.

## Key Takeaways

- On June 16, 2026, Databricks announced Genie One and Genie Agents, which it describes as AI coworkers and agents that work across a company's data and business tools.
- Deloitte's 2026 survey of more than 9,000 leaders found 60% of executives regularly use AI to support decisions, but only 5% consider themselves leading the way.
- Gartner's survey of 353 data and AI leaders found only 39% are confident their current AI investments will improve financial performance.
- Gartner also found organizations with successful AI initiatives invest up to four times more, as a share of revenue, in data quality, governance, skills and change management.
- The open questions are about data quality, accountability for decisions and how much an agent should be allowed to do on its own.

## The Evidence

This post follows one product announcement and two independent surveys.

**The announcement.** On June 16, 2026, [Databricks announced](https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents) Genie One, Genie Agents and Genie Ontology. According to Databricks, Genie One is a "data-smart AI coworker" for business users that goes beyond answering questions in plain language: it can run schedules and alerts, monitor data, create documents and connect to tools such as Slack, Microsoft Teams and Gmail. Genie Agents are domain-specific agents created from a prompt that reason over tables as well as documents and files and complete multi-step workflows. Databricks says both are generally available, and that permissions are "enforced by default on every answer" through the source system's access controls or its Unity Catalog. These are the vendor's own descriptions.

**The surveys.** In its [2026 Global Human Capital Trends](https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends/2026/decision-making-with-ai.html) work (published March 3, 2026), Deloitte surveyed more than 9,000 business and HR leaders in 89 countries and reports that 60% of executives regularly use AI to support decisions and 64% say AI decision-making is very important to their current success. Only 5% consider themselves leading the way, and 57% of organizations operate at low decision-making maturity. Separately, a Gartner survey of 353 data, analytics and AI leaders, run in November and December 2025 and [announced on April 16, 2026](https://www.gartner.com/en/newsroom/press-releases/2026-04-16-gartner-says-organizations-with-successful-ai-initiatives-invest-up-to-four-times-more-in-data-and-analytics-foundations), found that only 39% are confident their companies' current AI investments will have a positive effect on financial performance.

Databricks is one example, and other data and analytics vendors are building similar assistants. This post does not compare products.

## What the Technology Does

The common pattern has three layers:

1. **Company data.** Tables, documents, dashboards and the business definitions around them (what counts as "revenue" or an "active customer").
2. **A reasoning or agent layer.** A model that turns a plain-language question into queries, checks them against that context, and explains its answer. Databricks calls its context layer an "ontology" and says it builds it from tables, queries, dashboards and connected apps.
3. **A recommended or taken action.** The system recommends a next step, sends an alert or a document, or, for agents set up to do so, carries out a multi-step workflow.

The first two layers resemble a very capable analyst. The third is what is new for most businesses.

## What Changed

A traditional dashboard answers questions someone thought of in advance. A person reads it, decides what it means and acts. Agents change three things:

- **Who can ask.** A manager can ask a question in a chat tool, without waiting for an analyst to build a report.
- **When it is asked.** Alerts and monitoring mean the system can raise an issue without anyone looking.
- **Who acts.** For some tasks the loop from insight to action runs without a person in between.

The Deloitte survey suggests that this is arriving into organizations that are not yet confident in how they make decisions: only 5% say they lead in using AI for decisions. Deloitte's article also cites a Gartner projection that half of business decisions will be augmented or automated by AI agents by 2027. That is a projection, not a measurement.

## Who Benefits

**Business teams** get faster answers without writing queries. **Data teams** can spend less time on routine report requests and more on definitions and quality. **Smaller companies** may benefit most, because plain-language access to data means a founder or operations manager can ask questions that once needed a dedicated analyst. That benefit depends on having data worth asking about, which is where many small businesses are weakest.

## Limitations and Open Questions

- **Data quality.** An agent reasons over whatever it is given. If records are incomplete, duplicated or defined differently across teams, the answers will look confident and still be wrong. Gartner's finding that successful AI organizations invest up to four times more in foundations such as data quality and governance points to the same thing.
- **Accountability.** If an agent recommends or takes an action, someone must own the outcome. Deloitte's advice is to treat decision-making as a strategic discipline and design the relationship between people and machines on purpose.
- **Trust and confidence.** Only 39% of the leaders Gartner surveyed are confident that their AI investments will pay off financially.
- **How much autonomy.** Databricks describes agents that can act without step-by-step oversight. How much oversight a business adds, such as approvals, spending limits and logs, is its own decision.
- **Vendor claims.** Capabilities and permission behavior described here are the vendor's own, and they should be tested on your own data.

## What Happens Next

Expect more business-intelligence and data platforms to ship agents that can take actions, and more attention on the controls around them. For most companies the near-term work is not choosing an agent. It is getting the data ready, agreeing on definitions and deciding which decisions an agent may only recommend and which it may carry out.

A practical order of work, and the one we suggest at Zunkiree Labs, is:

1. Pick one decision you make repeatedly, such as which leads to follow up or which invoices to chase.
2. Check that the data behind it is complete, current and has a named owner.
3. Start with the agent recommending, and require a person to approve before it acts.
4. Log what it did and why, and review the results before widening its scope.

## The Short Version

Business intelligence is moving from dashboards that show to agents that investigate and sometimes act. The products are real and generally available from at least one major vendor, but surveys show organizations are still early in using AI for decisions, and data quality, accountability and the amount of autonomy remain open. Get the data and the approval rules ready first.

For related reading, see [who is winning the enterprise AI market](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/) and [why AI agents are getting their own infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/).

## FAQ

**What is the difference between a dashboard and an AI agent for business data?**
A dashboard shows answers to questions someone planned in advance, and a person decides what to do. An AI agent for business data can take a plain-language question, investigate across data, explain its reasoning, and in some products send alerts, create documents or complete multi-step workflows.

**What did Databricks announce in June 2026?**
On June 16, 2026, Databricks announced Genie One, Genie Agents and Genie Ontology. Databricks describes Genie One as a data-smart AI coworker for business users and Genie Agents as domain-specific agents that reason over structured and unstructured data. It says both are generally available. These are the vendor's own descriptions.

**How many executives use AI to support decisions?**
In Deloitte's 2026 Global Human Capital Trends survey of more than 9,000 business and HR leaders, 60% of executives said they regularly use AI to support decisions, but only 5% considered themselves leading the way.

**What should a company do before using AI agents on its data?**
Gartner found that organizations with successful AI initiatives invest up to four times more, as a share of revenue, in data quality, governance, skills and change management. A sensible start is to check that the data is complete, current and owned, begin with agents that recommend rather than act, and keep logs and approvals in place.

## Related Insights

- [Anthropic, OpenAI, Google in Enterprise: Who Is Winning?](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/)
- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)

## Sources

- Databricks, [Introducing Genie One, Genie Ontology and Genie Agents](https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents), June 16, 2026
- Deloitte, [Decision-making with AI, 2026 Global Human Capital Trends](https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends/2026/decision-making-with-ai.html), March 3, 2026
- Gartner, [Organizations with successful AI initiatives invest up to four times more in data and analytics foundations](https://www.gartner.com/en/newsroom/press-releases/2026-04-16-gartner-says-organizations-with-successful-ai-initiatives-invest-up-to-four-times-more-in-data-and-analytics-foundations), April 16, 2026 (the figures were checked in a [republication by ABES](https://abes.org.br/en/gartner-aponta-que-organizacoes-com-iniciativas-de-inteligencia-artificial-bem-sucedidas-investem-ate-quatro-vezes-mais-em-fundamentos-de-dados-e-analytics/), because Gartner's page blocked automated access)
