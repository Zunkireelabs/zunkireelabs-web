---
title: "AI Reverse Engineering in 2026: How Coding Agents Now Drive Ghidra and IDA"
shortLabel: "AI Reverse Engineering"
translationKey: "ai-reverse-engineering-coding-agents-ghidra-ida-mcp"
description: "AI agents can now drive Ghidra, IDA and Hopper through MCP to analyse binaries. What the Reverse Engineer Anything project and CrackMeBench show, and where the limits are."
date: 2026-10-27
lastUpdated: 2026-10-27
category: Insights
pillar: "software-future"
tags:
  - AI Reverse Engineering
  - Ghidra
  - IDA Pro
  - MCP
  - AI Agents
  - Binary Analysis
  - Legacy Software Modernization
  - Cybersecurity
readTime: 8
featuredImage: "/assets/images/blog/ai-reverse-engineering-coding-agents-ghidra-ida-mcp.svg"
featuredImageAlt: "Abstract gradient background"
ogType: article
---

<div class="container-custom py-12 md:py-20">

**In short:** AI reverse engineering has moved from pasting decompiled code into a chat window to letting a coding agent operate the disassembler itself. An open-source project called Reverse Engineer Anything, covered by InfoQ on 17 October 2026, connects agents such as Claude Code and Codex to Ghidra, Hopper and IDA through MCP servers. A May 2026 benchmark, CrackMeBench, shows the results are strong on some tasks and uneven on others. For businesses the useful uses are legacy-code understanding, security review and interoperability work, all of which need authorisation first.

## Key Takeaways

- Reverse engineering is the process of working out how compiled software behaves when you do not have its source code. It is used for security research, malware analysis, recovering knowledge about legacy systems and building compatible software.
- The change in 2026 is tool access. Instead of a person choosing a snippet and asking a model about it, an agent connects to a disassembler over the Model Context Protocol (MCP), then lists functions, follows cross-references and tests its own hypotheses.
- InfoQ reports that Reverse Engineer Anything runs locally, is MIT licensed, and "does not claim to recover the original source code".
- On the CrackMeBench benchmark, the three models tested solved between 42% and 92% of generated tasks, depending on the model and the difficulty of the tasks.
- Practitioners disagree about how much a wrapper adds over simply asking an agent to use Ghidra directly. The showcase results are the project's own and have not been independently verified.
- Reverse engineering software you do not own or have no permission to analyse can breach licences and law. Authorisation comes before tooling.

## What Changed: From Chatting About Code to Operating the Tools

Until recently, "AI-assisted reverse engineering" meant a person exporting a decompiled function from a tool like Ghidra, pasting it into a chat, and asking what it did. The model only saw what the person chose to show it, and it could not check its own guesses.

The newer pattern gives the agent the tools directly. MCP, the open protocol that lets AI agents call external tools, is used to expose a disassembler's functions to the agent. According to InfoQ, the agent can query the disassembler, inspect functions and cross-references, trace program behaviour and test hypotheses against the binary, instead of reasoning from a fragment.

That is the same shift that happened in software development when coding agents started running tests and reading error output rather than only suggesting code. The agent loops: form an idea, check it against the binary, revise. We covered the wider pattern in [how AI coding agents actually work for developers now](/blog/ai-coding-agents-2026-how-developers-actually-work-now/).

## What Reverse Engineer Anything Is

InfoQ's report of 17 October 2026 describes Reverse Engineer Anything (REA) as an open-source project, published under the MIT licence, that links coding agents including Claude Code and Codex to reverse-engineering tools. It supports:

- **Ghidra**, the open-source analysis suite developed by the US National Security Agency.
- **Hopper**, a native macOS disassembler.
- **IDA**, the commercial disassembler and debugger from Hex-Rays.
- **JavaScript, Electron and .NET** applications, where static analysis runs without a native analysis engine.

InfoQ states that REA runs locally and does not claim to recover original source code. The project's showcases include tracing how Notion's Electron app handles the clipboard, and reconstructing a sound-panning function from the classic game DX-Ball, where the reconstruction is reported to match all 3,205 original test cases. These examples come from the project's own repository, and InfoQ notes it did not verify them independently.

## What the CrackMeBench Benchmark Shows

Anecdotes are not measurement. CrackMeBench, a paper submitted to arXiv on 11 May 2026 by Isaac David and Arthur Gervais, is an attempt to measure how well language-model agents recover the logic of a binary.

Each task is a "CrackMe", a small program that checks an input such as a serial number. Agents are scored on whether the inputs or key generators they submit actually work, not on how convincing their explanation sounds. The first version combines 8 public CrackMes with 12 generated tasks built from seeded C, Rust and Go templates. Agents ran in a sandbox with no network access and standard reverse-engineering tools, with three attempts per task and a five-minute budget.

| Test set | GPT-5.5 | Claude Opus 4.7 | Kimi K2 |
|---|---|---|---|
| Generated tasks (12) | 11 of 12 | 7 of 12 | 5 of 12 |
| Harder half of generated tasks (6) | 5 of 6 | 2 of 6 | 1 of 6 |
| Public calibration tasks (8) | 3 of 8 | 2 of 8 | 1 of 8 |

Two points matter for anyone planning to use this. First, results vary a lot between models and between task types, and the public calibration tasks were harder for every model than the generated ones. Second, these are small, deliberately educational programs. They show that agents can do real work here, not that they can take apart a large commercial application unaided.

## Where AI Reverse Engineering Is Useful for a Business

Most companies will never analyse a rival's product, and should not. The legitimate uses are closer to home.

1. **Understanding legacy software.** Many businesses depend on an old compiled tool whose original developers and source code are gone. An agent that can trace what the binary actually does speeds up documenting it before it is replaced or migrated.
2. **Security review of software you run.** Checking third-party components, verifying what an installer does, or investigating a suspicious file are routine defensive tasks where faster analysis helps.
3. **Interoperability.** Where the law and the licence allow it, working out an undocumented file format or protocol so your systems can talk to another.
4. **Malware analysis.** Security teams can triage samples faster, with a human confirming the conclusions.

If you are modernising an old system, the analysis is often the slowest step, and it is where [custom software development](/solutions/custom-software/) work typically starts.

## The Limits and the Risks

Three cautions apply before relying on any of this.

**The tools are only partly proven.** Practitioners quoted by InfoQ question what REA adds beyond asking an agent to run Ghidra directly, while others report better results than earlier attempts. Treat any single project's headline numbers as a claim to test on your own samples.

**Agents can be misled.** 2026 research papers, including [Automatically Attacking Software Reverse Engineering AI Agents](https://arxiv.org/pdf/2605.30667) and [Representation-Confusion Attacks on LLM-Assisted Reverse Engineering](https://arxiv.org/pdf/2607.12507), study ways to manipulate LLM-based analysis. The software being analysed is untrusted input, so treat anything an agent reads from it with suspicion. Run analysis in an isolated sandbox with no network and no access to sensitive systems.

**Authorisation and law.** InfoQ reports that developers have raised concerns that these tools could make it easier to copy software or bypass paid features. Reverse engineering can breach software licences and, depending on the country and purpose, copyright and anti-circumvention law. Get written permission or legal advice before analysing software you do not own. This article is not legal advice.

## How to Start Safely

- Begin with software you own or have explicit permission to analyse.
- Work in a disposable virtual machine with networking off.
- Keep a human responsible for conclusions. Ask the agent to show the evidence, such as the function and the addresses, and verify it in the disassembler yourself.
- Log what the agent was given access to, the same discipline we recommend for any agent. See [why AI agents are getting their own infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/).
- Prefer open tools and open protocols so you are not locked into one vendor.

## The Short Version

AI agents that operate reverse-engineering tools are a real change, because they check their own hypotheses against the binary instead of guessing from a snippet. Benchmark results are encouraging but uneven, the showcases are self-reported, and the security and legal risks are real. Used on software you own, in a sandbox, with a human verifying the findings, it can shorten the slowest part of modernising or securing a system.

If you want agents that work inside clear limits, see our whitepaper on [AI agents for business](/resources/ai-agents-for-business-whitepaper/), or talk to us about [custom AI agent development](/solutions/custom-agent/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What is AI reverse engineering?</p><p class="text-gray-600 leading-relaxed">It is using AI models to help work out how compiled software works without its source code. In 2026 this increasingly means an AI agent controlling a disassembler such as Ghidra or IDA, rather than a person pasting code into a chatbot.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Can AI recover the original source code of a program?</p><p class="text-gray-600 leading-relaxed">Not exactly. Compiling discards names, comments and structure. An agent can produce readable code that behaves the same way, but the project InfoQ describes states it does not claim to recover the original source.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What is MCP and why does it matter here?</p><p class="text-gray-600 leading-relaxed">The Model Context Protocol is an open standard that lets AI agents call external tools. For reverse engineering, MCP servers expose disassembler functions to the agent so it can inspect and test a binary directly.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Is it legal to reverse engineer software with AI?</p><p class="text-gray-600 leading-relaxed">It depends on who owns the software, the licence terms, your country and your purpose. Analysing your own software or code you have permission to examine is generally safe. Doing it to copy a product or bypass licensing can be unlawful. Seek legal advice for your case.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Which tools can AI agents control today?</p><p class="text-gray-600 leading-relaxed">According to InfoQ, Reverse Engineer Anything supports Ghidra, Hopper and IDA, and can analyse JavaScript, Electron and .NET applications. A community guide on DEV also lists separate MCP servers for Binary Ninja and jadx.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What is AI reverse engineering?","@type":"Question","acceptedAnswer":{"text":"It is using AI models to help work out how compiled software works without its source code. In 2026 this increasingly means an AI agent controlling a disassembler such as Ghidra or IDA, rather than a person pasting code into a chatbot.","@type":"Answer"}},{"name":"Can AI recover the original source code of a program?","@type":"Question","acceptedAnswer":{"text":"Not exactly. Compiling discards names, comments and structure. An agent can produce readable code that behaves the same way, but the project InfoQ describes states it does not claim to recover the original source.","@type":"Answer"}},{"name":"What is MCP and why does it matter here?","@type":"Question","acceptedAnswer":{"text":"The Model Context Protocol is an open standard that lets AI agents call external tools. For reverse engineering, MCP servers expose disassembler functions to the agent so it can inspect and test a binary directly.","@type":"Answer"}},{"name":"Is it legal to reverse engineer software with AI?","@type":"Question","acceptedAnswer":{"text":"It depends on who owns the software, the licence terms, your country and your purpose. Analysing your own software or code you have permission to examine is generally safe. Doing it to copy a product or bypass licensing can be unlawful. Seek legal advice for your case.","@type":"Answer"}},{"name":"Which tools can AI agents control today?","@type":"Question","acceptedAnswer":{"text":"According to InfoQ, Reverse Engineer Anything supports Ghidra, Hopper and IDA, and can analyse JavaScript, Electron and .NET applications. A community guide on DEV also lists separate MCP servers for Binary Ninja and jadx.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Related Insights

- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [FTC Probes AI Labs Over Rogue Agents: What to Do](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/)
- [Google's Gemini Agent: What a Universal Work Agent Actually Changes](/blog/google-gemini-agent-universal-work-agent/)

## Sources

- InfoQ, [Reverse Engineer Anything Project Brings AI Agents to Binary Analysis](https://www.infoq.com/news/2026/10/reverse-engineer-anything/), October 17, 2026
- Isaac David and Arthur Gervais, [CrackMeBench: Binary Reverse Engineering for Agents](https://arxiv.org/abs/2605.10597), arXiv, May 11, 2026
- DEV Community, [AI Reverse Engineering in 2026: How LLM Agents Drive Ghidra and IDA (and Where They Fail)](https://dev.to/kausarraza/ai-reverse-engineering-in-2026-how-llm-agents-drive-ghidra-and-ida-and-where-they-fail-3270)
- [Model Context Protocol](https://modelcontextprotocol.io/)

</div>
