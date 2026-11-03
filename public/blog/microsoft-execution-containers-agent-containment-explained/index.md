# Microsoft Execution Containers: How to Contain an AI Agent

URL: https://zunkireelabs.com/blog/microsoft-execution-containers-agent-containment-explained/
Published: 2026-10-27
Summary: Microsoft made Execution Containers generally available on Windows 11 on 7 October 2026, limiting which files and networks an AI agent can reach. What it does and what is missing.

**In short:** Microsoft announced on 7 October 2026 that Microsoft Execution Containers (MXC) are generally available on Windows 11. They let developers and IT administrators set policies limiting which files, network destinations and resources an AI agent can reach, with the limits enforced outside the agent itself. It is a concrete version of an idea that matters for any business running agents: do not rely on the agent to police itself.

## Key Takeaways

- MXC reached general availability on Windows 11 on 7 October 2026, after a preview at Build in April 2026.
- Policies restrict what an agent can touch, and enforcement sits outside the agent, so a misbehaving or manipulated agent cannot simply talk its way past it.
- Process containers run on Windows 11, macOS and Linux. Session and WSL containers are Windows 11 options, and MicroVM support is experimental on Windows 11 and Linux.
- Enforcement mode blocks access outside the policy. Learning and Permissive modes record attempted access so a team can refine a policy before enforcing it.
- Coverage lists OpenAI Codex, GitHub Copilot, Replit, LM Studio and NVIDIA OpenShell among tools that already support it, with Anthropic's Claude Code expected to add support later.
- Not yet generally available: central policy management through Intune for process containers, and Entra-based agent identity through Agent 365.

## What an Execution Container Is

An execution container is a boundary around a running program. Instead of asking an agent to avoid certain folders, the operating system stops it from opening them. An agent that tries to read a file outside its policy is refused, whether the cause is a bug, a bad instruction or a prompt injection hidden in a document it was reading.

This is the same principle as [NVIDIA's OpenShell](/blog/nvidia-openshell-safe-ai-agents-gtc-berlin-2026/): put the control beneath the agent, where the agent cannot rewrite it.

## How Policy Works in Practice

Reported details from coverage of the release:

- **Enforcement mode** blocks anything outside the policy.
- **Learning and Permissive modes** log what the agent tried to access without blocking it, so you can see what a task really needs and write a tighter policy.
- **Container types** include process containers, session containers and WSL containers, with experimental MicroVM isolation for stronger separation.

Starting in a learning mode and then tightening to enforcement is a sensible rollout for any team, because it reveals what an agent actually touches instead of what you assume it touches.

## What Is Confirmed and What Is Not

- **Reported as generally available:** MXC on Windows 11 as of 7 October 2026, with MIT-licensed code available earlier.
- **Reported as supported:** several developer tools, with Claude Code listed as expected later. Check each vendor for current status.
- **Not yet general availability:** Intune-managed policy for process containers and Entra-based agent identity. Until those arrive, larger organisations lack central control and per-agent identity in this stack.

We could not open Microsoft's own announcement page, so the details above come from multiple independent outlets reporting the same facts. Confirm specifics against Microsoft's documentation before relying on them.

## What This Means for a Business

You do not need Windows 11 to take the point.

1. **Give agents the least access that works.** Decide what an agent needs to read, write and reach, and block the rest in the environment.
2. **Prefer controls the agent cannot change.** A permission in the operating system or runtime is stronger than an instruction in a prompt.
3. **Observe before you enforce.** Log what an agent does for a period, then convert the log into a policy.
4. **Plan for identity.** Per-agent identity and central policy are still catching up, so keep your own audit trail.

For the regulatory side of this, see [the FTC probe into rogue agents](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/). For a design that bounds an agent by default, see our whitepaper on [AI agents for business](/resources/ai-agents-for-business-whitepaper/) or talk to us about [custom AI agents](/solutions/custom-agent/).

## The Short Version

Microsoft Execution Containers move agent safety from instructions to enforcement. They are generally available on Windows 11, support several popular tools and still lack central policy and agent identity. Whatever platform you use, bound the agent from outside, watch before you enforce and keep your own audit trail.

## FAQ

**What are Microsoft Execution Containers?**
A feature that lets administrators and developers restrict which files, network destinations and resources an AI agent can access, enforced outside the agent.

**When did they become generally available?**
Microsoft announced general availability on Windows 11 on 7 October 2026, following a preview in April 2026.

**Which AI tools support them?**
Coverage lists OpenAI Codex, GitHub Copilot, Replit, LM Studio and NVIDIA OpenShell, with Claude Code expected later.

**Does it work on macOS and Linux?**
Process containers run on Windows 11, macOS and Linux, according to reporting. Other container types are Windows 11 options.

**Do I need it to run agents safely?**
No single tool is required, but the principle is: enforce limits outside the agent and log what it does.

## Related Insights

- [NVIDIA OpenShell and Vera Rubin: What GTC Berlin 2026 Means for AI Agents](/blog/nvidia-openshell-safe-ai-agents-gtc-berlin-2026/)
- [MCP Security in 2026: What the New Specification Fixed and What It Opened Up](/blog/mcp-specification-security-what-changed/)
- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)

## Sources

- Windows Report, [Microsoft Execution Containers (MXC) Is Now Generally Available on Windows 11](https://windowsreport.com/microsoft-execution-containers-mxc-is-now-generally-available-on-windows-11/)
- eSecurity Planet, [Microsoft Execution Containers for AI Agents Reach GA on Windows 11](https://www.esecurityplanet.com/endpoint-security/news-microsoft-execution-containers-for-ai-agents-reach-ga/)
- Petri, [Microsoft Makes Execution Containers Generally Available for AI Agents](https://petri.com/?p=780559)
