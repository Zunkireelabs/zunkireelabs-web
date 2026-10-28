# MCP Security in 2026: What the New Specification Fixed and What It Opened Up

URL: https://zunkireelabs.com/blog/mcp-2026-07-28-specification-security-what-changed/
Published: 2026-10-27
Summary: The MCP 2026-07-28 specification removes session and OAuth risks but adds new attack surfaces, according to Akamai researchers. What changed and what to do about it.

**In short:** The Model Context Protocol (MCP), the standard that lets AI agents call tools and data sources, shipped a major revision dated 2026-07-28. Akamai researchers, writing in June 2026 about the release candidate, found it removes several long-standing risks, such as protocol sessions and weak OAuth grants, while handing developers new ones to manage, including client-held state, unsigned metadata and header mismatches. The practical lesson is that a safer protocol does not make a deployment safe: much of the responsibility moved to whoever builds and runs the server.

## Key Takeaways

- MCP 2026-07-28 is described by SiliconANGLE, reporting on Akamai's research, as the biggest architectural change to the protocol since Anthropic created it. It includes a 12-month deprecation window for some legacy features.
- It removes protocol-managed sessions that used the `Mcp-Session-Id` header, which could let an attacker impersonate a user if the ID was stolen.
- It limits unsolicited server-initiated prompts, and replaces legacy password and implicit OAuth grants with mandatory OAuth 2.1 with PKCE.
- Akamai identified six new attack surfaces, from client-held state to abuse of long-running tasks.
- The common thread is that checks the protocol used to perform now fall to implementers. Treat anything the client sends as untrusted.
- If you run MCP servers, review them against the new specification instead of assuming an upgrade makes them safe.

## What MCP Is, in One Paragraph

MCP is an open protocol for connecting AI agents to external tools and data: a calendar, a database, a code repository, a company's internal search. An agent speaks to an MCP server, which exposes a defined set of actions. Because one protocol serves many tools, businesses can switch models or add tools without rebuilding each connection. We covered why that matters in [why AI agents are getting their own infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/).

## What the New Specification Removed

According to SiliconANGLE's report on the Akamai analysis, the revision removes three older risks:

1. **Protocol-managed sessions.** Earlier versions tracked sessions with an `Mcp-Session-Id` header. If an attacker obtained the ID, they could impersonate the user. The new specification drops protocol sessions.
2. **Unsolicited server prompts.** Servers could previously push prompts to the client. These are now strictly limited.
3. **Weak OAuth grants.** Legacy password and implicit grants are replaced by mandatory OAuth 2.1 with PKCE, a stronger authorisation flow.

## What It Opened Up

Removing server-side sessions moves state to the client. Akamai's researchers, Maxim Zavodchik, Segev Fogel and Gal Meiri, listed six areas to watch:

| Area | The risk, in plain terms |
|---|---|
| Client-held state | The client returns state objects and IDs. Predictable IDs or unvalidated objects could let an attacker hijack a workflow or act across tenants. The specification says to verify them but not how. |
| Unsigned `_meta` objects | Metadata can be attached to most messages without a signature, so a forged field such as a fake admin tenant could escalate privileges. |
| Header and body mismatch | The `Mcp-Method` and `Mcp-Name` headers can disagree with the message body, letting requests slip past proxies and monitoring. |
| `x-mcp-header` mapping | Mapping the wrong argument could place API keys, tokens or personal data in headers that proxies, load balancers and logs can see. |
| MCP Apps | Interactive panels can carry stored cross-site scripting. Sandboxing limits full takeover, but a compromised panel could still show deceptive content or capture visible data. |
| "Hit-and-run" tasks | An attacker can start an expensive long-running task and disconnect, leaving the server to bear the cost. |

The article contains no statistics. These are researchers' analysis of a specification, not reports of attacks seen in the wild.

## What to Do If You Run MCP Servers

Akamai's recommendations map to a short checklist:

- **Treat client-supplied state and metadata as untrusted.** Verify it cryptographically and do not trust a field because it looks internal.
- **Check that headers match the body** before acting on a request.
- **Review what ends up in headers** and logs, and keep secrets out of them.
- **Encode and sandbox anything an agent renders** as an interactive panel.
- **Set resource quotas on asynchronous tasks** so abandoned jobs cannot run up costs.
- **Keep an inventory of servers.** You cannot secure a server nobody knows about. See our companion post on the [OWASP MCP Top 10](/blog/owasp-mcp-top-10-explained-for-business-owners/).

## What This Means for Businesses Buying Agents

You do not need to read the specification, but you should ask your supplier three questions: which MCP version their servers run, how they verify client-supplied state, and what is logged when an agent calls a tool. An answer that depends on "the protocol handles that" is out of date.

For how to bound an agent's authority, see our whitepaper on [AI agents for business](/resources/ai-agents-for-business-whitepaper/) and our [AI governance checklist](/resources/ai-governance-data-privacy-sme-whitepaper/), or talk to us about [custom AI agent development](/solutions/custom-agent/).

## The Short Version

The MCP revision closes real gaps, but it shifts work onto the people who build servers. Verify client-supplied state, check headers against the body, keep secrets out of logs, sandbox rendered panels and cap long-running tasks. Treat the researchers' findings as a checklist, not as proof of attacks in the wild.

## FAQ

**What is MCP 2026-07-28?**
It is a major revision of the Model Context Protocol, scheduled for final release on 28 July 2026 after a May release candidate. SiliconANGLE describes it as the biggest architectural change since Anthropic created the protocol.

**Is the new MCP specification more secure?**
It removes some older risks, including protocol sessions and weak OAuth grants. Akamai also found new attack surfaces, because responsibility for state and verification moved to implementers.

**Does this affect my business if I do not build MCP servers?**
Indirectly. If your suppliers or tools use MCP, ask how they handle the points above.

**Who found these risks?**
Researchers Maxim Zavodchik, Segev Fogel and Gal Meiri at Akamai, as reported by SiliconANGLE on 25 June 2026.

## Related Insights

- [OWASP MCP Top 10 Explained for Business Owners](/blog/owasp-mcp-top-10-explained-for-business-owners/)
- [Microsoft Execution Containers: How to Contain an AI Agent](/blog/microsoft-execution-containers-agent-containment-explained/)
- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)

## Sources

- SiliconANGLE, [New MCP specification kills old risks, opens fresh attack surfaces, Akamai finds](https://siliconangle.com/2026/06/25/new-mcp-specification-kills-old-risks-opens-fresh-attack-surfaces-akamai-finds/), June 25, 2026
- [Model Context Protocol](https://modelcontextprotocol.io/)
