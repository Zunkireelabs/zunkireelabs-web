# NVIDIA OpenShell and Vera Rubin: What GTC Berlin 2026 Means for AI Agents

URL: https://zunkireelabs.com/blog/nvidia-openshell-safe-ai-agents-gtc-berlin-2026/
Published: 2026-10-27
Summary: At GTC Berlin on 21 October 2026 NVIDIA launched the OpenShell Reference Architecture for safe AI agents and an Agent Knowledge Foundation. What it means for businesses.

**In short:** At GTC Berlin on 21 October 2026, NVIDIA announced the OpenShell Reference Architecture, a design for building, containing, observing and enforcing rules on AI agents, and expanded its Agent Toolkit with an Agent Knowledge Foundation for grounding agents in company data. The same day NVIDIA and Google Cloud announced Vera Rubin infrastructure, with general availability due the following month. Most of the performance and safety claims are NVIDIA's own, so the sensible reading is that agent safety is now treated as an infrastructure problem, not only a prompting one.

## Key Takeaways

- NVIDIA describes the OpenShell Reference Architecture as a way to "build, contain, observe and enforce safe agents" on enterprise infrastructure and edge systems. It builds on the OpenShell secure runtime, which controls what an agent can access and do.
- Reporting on the launch says the software is open source under the Apache 2.0 licence, and that Anthropic, AWS, Google Cloud, Microsoft, OpenAI and others are working with it.
- The architecture pairs software with hardware: Vera Rubin for model inference, Vera CPUs for agent tool use, and BlueField-4 DPUs running NVIDIA Sentry for enforcement outside the agent's own software.
- The Agent Knowledge Foundation adds retrieval, ontology and prediction models so agents can work from company data without moving it. NVIDIA cited early work with Palantir, Databricks and Snowflake, and the results are company-reported.
- Google Cloud's first Vera Rubin A5X instances went live on 21 October 2026, with general availability planned for November. NVIDIA's cost and throughput figures are vendor claims, and no prices were published.

## Why a Runtime for Agents

The past month's agent news has had a common thread. Agents are being given real accounts, real data and real authority, and the question of how to stop them acting beyond their remit has become practical. We covered the regulatory side in [the FTC probe into rogue agents](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/) and the identity side in [Google's Gemini agent](/blog/google-gemini-agent-universal-work-agent/).

OpenShell is NVIDIA's answer at the infrastructure layer. Instead of relying on an agent's instructions to keep it in bounds, a runtime sits underneath it and decides what it may read, call and change. The reference architecture goes a step further by describing hardware that enforces those rules outside the agent's own software, which matters because an agent cannot easily talk its way past a control it does not run on.

## What NVIDIA Announced

### OpenShell Reference Architecture

According to NVIDIA's release, the architecture covers four jobs: building agents, containing them, observing what they do, and enforcing policy. The stack as described has three hardware layers: Vera Rubin systems for model inference, Vera CPUs for the agent harness and tool use, and BlueField-4 DPUs running NVIDIA Sentry for enforcement. It extends to the edge with RTX Spark, DGX Spark and DGX Station systems.

Supporting coverage says the software is released under Apache 2.0 and lists a wide group of companies working with it, including model builders, cloud providers and security vendors. Participation is not the same as adoption in production, so watch for named deployments.

### Agent Knowledge Foundation

The Agent Toolkit expansion is aimed at a different problem: agents are only as useful as the data they can reach. The Agent Knowledge Foundation is a set of open models and CUDA-X libraries that includes Nemotron Retriever for retrieval, Auto-Ontology for building a starting ontology from enterprise data, and the Kumo model family for predictions from relational, tabular and time-series data. NVIDIA says it works with existing data platforms, so customers do not have to move data or change governance controls.

This is retrieval-augmented generation with more structure around it. If you are weighing how to connect an agent to internal documents, our whitepaper on [RAG for enterprise knowledge](/resources/rag-for-enterprise-knowledge-whitepaper/) covers the design choices.

### Vera Rubin on Google Cloud

Google Cloud's A5X instances, built on NVIDIA Vera Rubin NVL72 racks, went live for the first customers on 21 October 2026, with general availability planned for November. A rack combines 72 Rubin GPUs and 36 Vera CPUs. Reported figures include up to ten times lower inference cost per token than the previous generation, but those are vendor claims and no price list accompanied the announcement. Google also signalled a European expansion without naming sites or dates.

## What Is Confirmed and What Is Not

- **Announced:** the reference architecture, its three-layer design, the Agent Knowledge Foundation components, and the first A5X instances.
- **Vendor claims, not independently tested:** the safety benefits of in-hardware enforcement, the cost-per-token and throughput gains, and the results with Palantir, Databricks and Snowflake.
- **Not disclosed:** pricing for A5X, European sites and dates, and named production deployments of the full OpenShell stack.

## What This Means for a Business Building Agents

Most companies will not buy a Vera Rubin rack. The ideas still transfer.

1. **Enforce limits outside the agent.** A prompt that says "do not delete records" is a request. A permission that makes deletion impossible is a control. Put the control in the environment the agent runs in.
2. **Treat observability as part of the build.** Log what the agent read, called and changed. If you cannot see it, you cannot govern it.
3. **Ground agents in your own data, in place.** Retrieval over data you already govern is safer than copying it into a new system.
4. **Stay portable.** An open runtime and open protocols make it easier to change model or cloud later. Keep business logic and tool definitions outside any single vendor's stack.
5. **Wait for prices before planning around new hardware.** Efficiency gains reported by a vendor are a reason to ask your cloud provider questions, not to change a budget.

## The Short Version

NVIDIA's GTC Berlin announcements treat agent safety as something built into infrastructure, with permissions enforced beneath the agent, observation built in and data kept where it already lives. The claims are the vendor's own and the commercial details are still missing, but the direction matches what businesses can do today: bound the agent, record its actions and avoid locking into one stack.

To design an agent with clear limits, see our whitepaper on [AI agents for business](/resources/ai-agents-for-business-whitepaper/), our [AI governance checklist](/resources/ai-governance-data-privacy-sme-whitepaper/), or talk to us about [custom AI agent development](/solutions/custom-agent/).

## FAQ

**What is NVIDIA OpenShell?**
OpenShell is NVIDIA's secure runtime for AI agents, which controls what an agent can access and do. The OpenShell Reference Architecture, announced on 21 October 2026, is NVIDIA's design for building, containing, observing and enforcing safe agents on enterprise and edge systems.

**Is OpenShell open source?**
Coverage of the launch reports that it is released under the Apache 2.0 licence. Check NVIDIA's repository for the licence terms that apply to each component.

**What is the Agent Knowledge Foundation?**
It is an expansion of NVIDIA's Agent Toolkit announced on 21 October 2026. It includes Nemotron Retriever, Auto-Ontology and the Kumo model family, and is meant to ground enterprise agents in company data without moving it.

**When is Vera Rubin available on Google Cloud?**
Google Cloud's first A5X instances on Vera Rubin went live on 21 October 2026, with general availability planned for November 2026.

**Do small businesses need any of this?**
Not the hardware. The principle applies at any size: limit what an agent can do, log its actions and keep it connected to data you already control.

## Related Insights

- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [FTC Probes AI Labs Over Rogue Agents: What to Do](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/)
- [AI Reverse Engineering in 2026: How Coding Agents Now Drive Ghidra and IDA](/blog/ai-reverse-engineering-coding-agents-ghidra-ida-mcp/)

## Sources

- NVIDIA, [NVIDIA Launches OpenShell Reference Architecture for Safe AI Agents](https://nvidianews.nvidia.com/news/openshell-reference-architecture), October 21, 2026
- NVIDIA, [Latest news, GTC Berlin releases](https://nvidianews.nvidia.com/news/latest), October 21, 2026
- NVIDIA, [Google Cloud and NVIDIA Announce General Availability of NVIDIA Vera Rubin Infrastructure](https://blogs.nvidia.com/?p=99227), October 21, 2026
- The Next Web, [Nvidia turns OpenShell into a full hardware stack for safe AI agents](https://thenextweb.com/news/nvidia-openshell-ai-agents-safety-anthropic-openai)
- Let's Data Science, [NVIDIA Expands Agent Toolkit With Agent Knowledge Foundation](https://letsdatascience.com/news/nvidia-expands-agent-toolkit-with-agent-knowledge-foundation-d4542b4a)
- Data Center Dynamics, [Nvidia Vera Rubin infrastructure now generally available on Google Cloud](https://datacenterdynamics.com/en/news/nvidia-vera-rubin-infrastructure-now-generally-available-on-google-cloud)
