# Cloudflare's MCP Server in October 2026: Step-Up Auth, Events and Skills

URL: https://zunkireelabs.com/blog/cloudflare-mcp-october-2026-step-up-authorization-events-skills/
Published: 2026-10-28
Summary: Cloudflare added step-up authorization, event alerts and skills to its MCP server in October 2026 and retired /sse. What changed and what to check.

**In short:** In October 2026 Cloudflare shipped four changes to its Model Context Protocol (MCP) servers: Cloudflare skills served over MCP (October 10), Workers error alerts pushed to agents as events (October 13), step-up authorization so an agent can ask for more access in the middle of a task (October 19), and the retirement of the `/sse` endpoint in favour of `/mcp` (October 22). Together they move MCP from a list of tools towards a channel with least-privilege access and push alerts. If you connect an AI client to Cloudflare, check now that it does not still use an `/sse` URL.

## Key Takeaways

- Cloudflare's API MCP server (`https://mcp.cloudflare.com/mcp`) now supports step-up authorization: connect with minimal scopes, then approve more only when a task needs them.
- Workers Issues is the first event the server exposes, so an agent can be told about a new or recurring production error instead of polling for it.
- The server now serves Cloudflare skills through the Skills over MCP extension, which compatible clients discover with `skills/list`.
- Cloudflare's product-specific MCP servers now serve only `/mcp`. A request to `/sse` returns `410 Gone` with the correct URL.
- These build on Code Mode, which Cloudflare described in February 2026: two tools instead of thousands, at about 1,000 tokens instead of about 1.17 million.
- Everything here comes from Cloudflare's own changelog and blog. We have not tested these features ourselves.

## What MCP Is, in One Paragraph

MCP is an open protocol for connecting AI agents to external tools and data, such as a calendar, a database or a company's cloud account. An agent talks to an MCP server, which exposes a defined set of actions. We covered why that matters in [why AI agents are getting their own infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/) and the security side in [what the new MCP specification fixed and opened up](/blog/specification-security-what-changed/).

New to it? Start with our explainer on [what Cloudflare's MCP server does and how to connect it](/blog/cloudflare-mcp-server-explained-what-it-does-and-how-to-connect/).

## What Cloudflare Changed in October

### October 10: skills over MCP

The Cloudflare API MCP server now serves Cloudflare skills through the Skills over MCP extension. The skills come from Cloudflare's `cloudflare/skills` repository. A client that supports the extension finds them by calling `skills/list` and reads a skill's files at `skill://<name>/<path>` addresses. In practice, the agent can pick up Cloudflare-specific instructions from the same server it already uses, instead of you pasting them into a prompt.

### October 13: Workers Issues as MCP Events

The server now sends Workers Issues as MCP Events, the first event it exposes. Workers Issues is Cloudflare's built-in error monitoring, which groups related production failures into issues. A client calls `events/list` to find the event, then `events/subscribe`, scoped to an account or a single Worker. When Issues detects a new or recurring issue, Cloudflare says the server posts a signed event to the client's webhook, so an agent can start investigating without polling. Setup needs Issues enabled on the Worker, the Notifications Write and Workers Observability Write permissions, and a client that supports MCP Events webhooks. Cloudflare's changelog does not describe how the signature is verified, so check the MCP Events specification before you rely on it.

### October 19: step-up authorization

With step-up authorization you grant only the scopes a task needs when you connect, and approve more on demand. If a tool call needs a scope you have not granted, the server returns an `insufficient_scope` challenge naming it, and your MCP client asks you to approve it. Scopes you already granted are kept. No action is required, but you can choose **Minimal** on the consent page to start with the least access.

### October 22: `/sse` retired

Cloudflare's product-specific MCP servers now serve only `/mcp`. A request to `/sse` returns `410 Gone` with the server's `/mcp` URL, which most MCP clients show in their connection error. Connections already on `/mcp` are not affected. If you signed in through `/sse`, your client will ask you to sign in again.

## Why It Matters: Less Context, Less Access, Less Polling

These four changes sit on top of an earlier design choice. In a February 2026 post, Cloudflare explained that exposing every endpoint of its API, over 2,500, as a separate tool would use about 1.17 million tokens of an agent's context. Its Code Mode instead gives the agent two tools, `search()` and `execute()`, and the agent writes code against the API, which runs in a sandbox. Cloudflare reports that this takes roughly 1,000 tokens, a reduction of 99.9%, and that the footprint stays fixed however many endpoints exist.

Read together, the October changes address three practical problems with agents that act on real systems:

- **Access.** Step-up authorization lets an agent start with little and ask for more, which is easier to review than granting broad access up front.
- **Attention.** Events mean an agent can be told something broke, instead of burning calls to check.
- **Knowledge.** Skills put the vendor's own guidance on the same channel as the tools.

## What to Do If You Use Cloudflare's MCP Servers

1. **Search your MCP client settings for `/sse`.** Change any such URL to `/mcp`, for example `https://docs.mcp.cloudflare.com/mcp`. Expect a fresh sign-in.
2. **Start with Minimal scopes.** If your client supports step-up authorization, choose Minimal on the consent page and approve extra scopes only when the agent asks.
3. **Treat event webhooks as untrusted until verified.** If you subscribe to Workers Issues, verify the signature on every delivery and limit what an agent may do in response.
4. **Keep a human approval step** for anything that changes production, whatever the agent proposes.

## What This Means for Businesses Buying Agents

This is our own reading, not a finding from Cloudflare. The direction of travel is that agent platforms are adding the controls a security reviewer would ask for: scoped access, signed alerts, and a single supported endpoint. When you evaluate an agent that touches your cloud account, ask which scopes it requests at connection time, whether it can ask for more later, and what it does when an alert arrives.

If you are planning agents that connect to your own systems, see our whitepaper on [AI agents for business](/resources/ai-agents-for-business-whitepaper/), or talk to us about [custom AI agents](/solutions/custom-agent/) and [book a call](/schedule-a-call/). For the security risks to plan around, read the [OWASP MCP Top 10 for business owners](/blog/owasp-mcp-top-10-explained-for-business-owners/).

## The Short Version

Cloudflare's October 2026 MCP updates add skills, push alerts and step-up authorization, and retire `/sse`. If you use its MCP servers, move any `/sse` client to `/mcp`, start with minimal scopes, and verify event signatures. Treat the details as vendor-reported until you have tested them in your own setup.

## FAQ

**What did Cloudflare change in its MCP servers in October 2026?**
Four things, according to Cloudflare's changelog: the API MCP server began serving Cloudflare skills through the Skills over MCP extension (October 10), started sending Workers Issues as MCP Events (October 13), added step-up authorization (October 19), and Cloudflare's product-specific MCP servers stopped serving the /sse endpoint in favour of /mcp (October 22).

**What is step-up authorization in MCP?**
It lets a user grant only the scopes a task needs when connecting, and approve more later. If a tool call needs a scope that has not been granted, the server returns an insufficient_scope challenge naming it, and the MCP client asks the user to approve it. Scopes already granted are kept.

**Do I need to do anything about the /sse change?**
Only if a client is configured with an /sse URL. Cloudflare says such requests now return 410 Gone with the server's /mcp URL, and the fix is to change the client to /mcp. Connections already on /mcp are not affected, and anyone who signed in through /sse will be asked to sign in again.

**What is Code Mode in Cloudflare's MCP server?**
It is an approach Cloudflare described in February 2026 in which the server exposes two tools, search() and execute(), and the agent writes code against the API instead of calling thousands of separate tools. Cloudflare says this takes about 1,000 tokens, against about 1.17 million for an equivalent server without it.

## Related Insights

- [Cloudflare MCP Server Explained: What It Does and How to Connect](/blog/cloudflare-mcp-server-explained-what-it-does-and-how-to-connect/)
- [MCP Security in 2026: What the New Specification Fixed and What It Opened Up](/blog/specification-security-what-changed/)
- [OWASP MCP Top 10 Explained for Business Owners](/blog/owasp-mcp-top-10-explained-for-business-owners/)
- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [Microsoft Execution Containers: How to Contain an AI Agent](/blog/microsoft-execution-containers-agent-containment-explained/)

## Sources

- Cloudflare, [Cloudflare API MCP server serves Cloudflare skills](https://developers.cloudflare.com/changelog/post/2026-10-10-cloudflare-mcp-skills/), changelog, October 10, 2026
- Cloudflare, [Cloudflare API MCP server sends Workers Issues as MCP Events](https://developers.cloudflare.com/changelog/post/2026-10-13-cloudflare-mcp-events/), changelog, October 13, 2026
- Cloudflare, [Cloudflare API MCP server now supports step-up authorization](https://developers.cloudflare.com/changelog/post/2026-10-19-cloudflare-mcp-step-up/), changelog, October 19, 2026
- Cloudflare, [Cloudflare MCP servers no longer serve /sse](https://developers.cloudflare.com/changelog/post/2026-10-22-cloudflare-mcp-servers-retire-sse/), changelog, October 22, 2026
- Matt Carey, [Code Mode: give agents an entire API in 1,000 tokens](https://blog.cloudflare.com/code-mode-mcp/), Cloudflare blog, February 20, 2026
- [Model Context Protocol](https://modelcontextprotocol.io/)
