---
title: "Agent-Desktop: How AI Agents Operate Desktop Apps Without Screenshots"
shortLabel: "Agent-Desktop Explained"
translationKey: "vercel-agent-desktop-computer-use-for-ai-agents-explained"
description: "Vercel Labs' open-source agent-desktop lets AI agents operate Mac, Windows and Linux apps via the accessibility tree. How it works and the risks."
date: 2026-11-03
lastUpdated: 2026-11-03
category: Insights
pillar: "software-future"
tags:
  - Computer Use
  - AI Agents
  - Open Source
  - Vercel
  - Software Automation
readTime: 6
featuredImage: "/assets/images/blog/vercel-agent-desktop-computer-use-for-ai-agents-explained.svg"
ogType: article
---

<div class="container-custom py-12 md:py-20">

**In short:** Agent-desktop is an open-source tool from Vercel Labs that lets an AI agent read and operate desktop applications on macOS, Windows and Linux. Instead of looking at screenshots and guessing where to click, it reads the operating system's accessibility tree, the structured list of buttons, fields and menus that screen readers use, and acts on those elements directly. It is released under the Apache-2.0 licence and installs with npm. For businesses, it is a way to automate software that has no API, with real security questions attached.

## Key Takeaways

- The README describes it as computer use for AI agents through the operating system's accessibility tree, as a command-line tool and a C library for macOS, Windows and Linux.
- An agent takes a snapshot, which returns JSON listing every element it can act on, each with a reference. It acts on a reference, then snapshots again to check the result. No pixel matching is involved.
- By default, actions go through the accessibility interface without moving the pointer or taking focus. A flag allows physical input when needed.
- It needs permission on each system: macOS requires an Accessibility grant, and Linux needs the AT-SPI service and a graphical session.
- The licence is Apache-2.0. At the time we looked, the repository showed about 10,400 GitHub stars. We could not confirm a release date or an announcement from Vercel.
- This is an early open-source tool. We have read its documentation but have not run it in production.

## How It Works

Most "computer use" agents work from screenshots. A vision model looks at the screen, guesses coordinates and clicks. That is flexible but slow, and a small layout change can break it.

Agent-desktop takes a different route. Operating systems already expose a tree of interface elements for accessibility. The tool reads that tree, gives each actionable element a reference and returns the list as JSON. The loop is:

1. The agent asks for a snapshot of the app.
2. It chooses an element by reference and an action, such as click or type.
3. The tool performs the action through the accessibility interface.
4. The agent takes another snapshot to check what changed.

Because this is text rather than pixels, it is easier for a language model to reason about, and it does not depend on where something sits on the screen. Each command prints a single JSON result, which makes it easy to wrap in an agent framework.

## Where It Could Help

- **Software with no API.** Older finance, practice-management, government or industry-specific desktop apps often cannot be integrated any other way.
- **Repetitive back-office work.** Copying data between a desktop app and a web system, or running the same steps across many records.
- **Testing.** Walking through an application the way a user would.

## Risks and Limits

- **Broad access.** An agent that can operate your desktop can, in principle, do what you can do: read messages, open files, submit forms. The accessibility permission is powerful, so grant it narrowly.
- **Prompt injection.** Text on screen, in an email or in a document can contain instructions aimed at the agent. An agent that reads and acts on everything it sees is exposed to this. Our posts on [OWASP's MCP Top 10](/blog/owasp-mcp-top-10-explained-for-business-owners/) and [Microsoft's Execution Containers](/blog/microsoft-execution-containers-agent-containment-explained/) cover related defences.
- **Accessibility trees vary.** Some applications expose a poor tree, especially custom-drawn interfaces, so coverage will be uneven.
- **Early-stage software.** Expect rough edges, change and limited support.
- **Identity.** Run such an agent under its own limited account, not yours. See our post on [IBM's agent identity announcement](/blog/ibm-agent-identity-vault-2-2-how-to-govern-ai-agents/).

## Our View

Treat desktop control as a last resort, not a first choice. If a system has an API or an MCP server, use that: it is faster, cheaper and easier to audit. Where nothing else exists, an accessibility-based approach is likely sturdier than screenshot guessing, but run it in an isolated machine or virtual desktop, with a dedicated account and logging, and keep a person approving anything that moves money or sends messages.

## The Short Version

Agent-desktop is a sign of where agent tooling is heading: reading structured interfaces rather than looking at pictures. It is open source, simple to try and potentially useful for legacy software. The same power is why it needs containment, narrow permissions and human approval for consequential actions.

If you are weighing automation options for legacy tools, our team can help you choose between integrations, agents and custom software: see [custom AI agent development](/solutions/custom-agent/) and [custom software development](/solutions/custom-software/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What is agent-desktop?</p><p class="text-gray-600 leading-relaxed">Agent-desktop is an open-source command-line tool and C library from Vercel Labs that lets AI agents read and operate desktop applications on macOS, Windows and Linux through the operating system's accessibility tree.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">How is it different from screenshot-based computer use?</p><p class="text-gray-600 leading-relaxed">Screenshot-based agents look at an image and guess where to click. Agent-desktop reads a structured list of interface elements, gives each a reference and acts on it directly, so it does not depend on pixel positions.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Is agent-desktop safe to use on a work computer?</p><p class="text-gray-600 leading-relaxed">It carries real risk because an agent that can operate your desktop can do much of what you can. Use a dedicated limited account, an isolated machine or virtual desktop, logging, and human approval for consequential actions. We have not tested it in production.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What licence is it under and how do I install it?</p><p class="text-gray-600 leading-relaxed">The repository lists the Apache-2.0 licence, and the README gives npm as the install route. It also says Homebrew and Scoop packages were still being submitted when we read it.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What is agent-desktop?","@type":"Question","acceptedAnswer":{"text":"Agent-desktop is an open-source command-line tool and C library from Vercel Labs that lets AI agents read and operate desktop applications on macOS, Windows and Linux through the operating system's accessibility tree.","@type":"Answer"}},{"name":"How is it different from screenshot-based computer use?","@type":"Question","acceptedAnswer":{"text":"Screenshot-based agents look at an image and guess where to click. Agent-desktop reads a structured list of interface elements, gives each a reference and acts on it directly, so it does not depend on pixel positions.","@type":"Answer"}},{"name":"Is agent-desktop safe to use on a work computer?","@type":"Question","acceptedAnswer":{"text":"It carries real risk because an agent that can operate your desktop can do much of what you can. Use a dedicated limited account, an isolated machine or virtual desktop, logging, and human approval for consequential actions. We have not tested it in production.","@type":"Answer"}},{"name":"What licence is it under and how do I install it?","@type":"Question","acceptedAnswer":{"text":"The repository lists the Apache-2.0 licence, and the README gives npm as the install route. It also says Homebrew and Scoop packages were still being submitted when we read it.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Related Insights

- [AI Coding Agents in 2026: How Developers Actually Work Now](/blog/ai-coding-agents-2026-how-developers-actually-work-now/)
- [Google's Gemini Agent: What a Universal Work Agent Actually Changes](/blog/google-gemini-agent-universal-work-agent/)
- [NVIDIA OpenShell and Vera Rubin: What GTC Berlin 2026 Means for AI Agents](/blog/nvidia-openshell-safe-ai-agents-gtc-berlin-2026/)

## Sources

- Vercel Labs, [agent-desktop README and repository](https://github.com/vercel-labs/agent-desktop), read November 2026

</div>
