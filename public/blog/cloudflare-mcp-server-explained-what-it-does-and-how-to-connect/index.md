# Cloudflare MCP Server Explained: What It Does and How to Connect

URL: https://zunkireelabs.com/blog/cloudflare-mcp-server-explained-what-it-does-and-how-to-connect/
Published: 2026-10-28
Summary: What Cloudflare's MCP server is, what an AI agent can do with it, how it helps a business, and how to connect it safely with the right permissions.

**In short:** Cloudflare runs MCP servers that let an AI assistant work with your Cloudflare account and its documentation. The main one, the Cloudflare API MCP server at `https://mcp.cloudflare.com/mcp`, covers the whole Cloudflare API through three tools: `search()`, `execute()` and `docs()`. You connect it by adding its URL to an MCP client and approving permissions through Cloudflare's sign-in. It can save time on routine checks and changes, but the access you grant is the access the agent has, so start with the least and keep a person approving production changes.

## Key Takeaways

- MCP, the Model Context Protocol, is an open standard for connecting AI agents to tools and data. Cloudflare publishes remote MCP servers built on it.
- Cloudflare recommends one server for most work: the Cloudflare API MCP server, which covers more than 2,500 API endpoints plus the developer documentation.
- It uses an approach Cloudflare calls Code Mode, so its two main tools cost about 1,000 tokens of an agent's context regardless of how many endpoints exist.
- You connect with OAuth and choose the permissions to grant. For CI/CD and other automation, an API token can be passed as a bearer token.
- Product-specific servers exist for documentation, containers, browser rendering and security monitoring, but Cloudflare says most users only need the main one.
- Everything here is taken from Cloudflare's own documentation. We have not run these servers ourselves.

## What Is Cloudflare's MCP Setup?

MCP is an open protocol that lets an AI agent call tools and read data from other systems through one standard interface. Instead of you copying settings and error messages into a chat window, the agent talks to an MCP server that exposes a defined set of actions. We explain the idea in [why AI agents are getting their own infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/).

Cloudflare's setup is a set of remote MCP servers it hosts. Remote means you do not install anything on a machine to run the server. You point an MCP client, such as a coding assistant, at a Cloudflare URL, sign in, and the agent can then work with the parts of your account you allowed.

## What It Does

The recommended server is the **Cloudflare API MCP server** (`https://mcp.cloudflare.com/mcp`). It gives an agent three tools:

- `search()` finds the right Cloudflare API endpoints.
- `execute()` calls them.
- `docs()` searches Cloudflare's developer documentation.

Cloudflare built it this way because a tool per endpoint would not fit. The API has more than 2,500 endpoints, and Cloudflare estimates an equivalent one-tool-per-endpoint server would use about 1.17 million tokens of context. With Code Mode the agent writes code against the API, which runs in a sandbox, and Cloudflare reports the cost stays at about 1,000 tokens. We cover the recent additions in [Cloudflare's October 2026 MCP updates](/blog/cloudflare-mcp-october-2026-step-up-authorization-events-skills/).

Cloudflare also offers optional product-specific servers:

| Server | What it is for | URL |
| --- | --- | --- |
| Documentation | Reference information on Cloudflare | `https://docs.mcp.cloudflare.com/mcp` |
| Container | A sandbox development environment | `https://containers.mcp.cloudflare.com/mcp` |
| Browser Run | Fetch pages, convert them to Markdown, take screenshots | `https://browser.mcp.cloudflare.com/mcp` |
| Digital Experience Monitoring | Insights on critical applications | `https://dex.mcp.cloudflare.com/mcp` |
| Cloudflare One CASB | Find SaaS security misconfigurations | `https://casb.mcp.cloudflare.com/mcp` |

All of these use the `/mcp` endpoint. The older `/sse` endpoint has been retired.

## How It Helps a Business

This section is our own reading of what the setup is for, not a claim from Cloudflare. If your website, DNS, security rules or serverless apps run on Cloudflare, an agent connected to it can help with work that is usually done by hand: looking up how a setting works in the documentation, reading your current configuration, and drafting or applying a change. The value is mostly speed and fewer copy-and-paste steps for the person doing the work.

It does not remove the need for judgement. Whether a firewall rule is safe to apply, or a change is worth making, is still a decision for someone who knows your business.

## How to Connect It

1. **Add the server to your MCP client.** In the client's configuration, add the server URL under its MCP servers, for example `https://mcp.cloudflare.com/mcp`.
2. **Sign in and choose permissions.** Cloudflare sends you through an OAuth screen where you pick what to grant. Choose the smallest set that covers the task. Cloudflare's consent page has a **Minimal** option.
3. **Add access only when needed.** With step-up authorization, a client that supports it asks you to approve extra scopes when a task needs them.
4. **For automation, use a token.** In CI/CD and similar jobs, Cloudflare says you can pass a Cloudflare API token as a bearer token in the `Authorization` header. Create it with only the permissions that job needs.
5. **Check the endpoint.** Use `/mcp`. A client still configured with `/sse` will get a `410 Gone` response.

## Risks and Guardrails

An MCP connection is a delegation of authority. Whatever you approve, the agent can do. Three habits keep that safe: grant least privilege, keep a person approving anything that changes production, and review what the agent actually did. For the wider picture, read the [OWASP MCP Top 10 for business owners](/blog/owasp-mcp-top-10-explained-for-business-owners/) and [what the new MCP specification fixed and opened up](/blog/mcp-specification-security-what-changed/).

If you want agents connected to your own systems in a controlled way, see our whitepaper on [AI agents for business](/resources/ai-agents-for-business-whitepaper/), or talk to us about [custom AI agents](/solutions/custom-agent/) and [book a call](/schedule-a-call/).

## The Short Version

Cloudflare's MCP server lets an AI agent look things up in the documentation and work with your account through one connection. Connect the main API server at `https://mcp.cloudflare.com/mcp`, grant the least access that works, and keep a person approving production changes.

## FAQ

**What is Cloudflare's MCP server?**
It is a remote server Cloudflare runs so that an AI assistant can work with your Cloudflare account and its documentation through the Model Context Protocol. The recommended one is the Cloudflare API MCP server at https://mcp.cloudflare.com/mcp, which covers the whole Cloudflare API.

**What can an AI agent do with it?**
Through search() it can look up Cloudflare API endpoints, through execute() it can call them, and through docs() it can search Cloudflare's documentation. What it may actually change depends on the permissions you approve when you connect.

**How do I connect to it?**
Add the server URL to your MCP client's configuration, then sign in through Cloudflare's OAuth screen and choose which permissions to grant. For automation such as CI/CD, Cloudflare says you can pass an API token as a bearer token instead.

**Is it safe to give an AI agent access to my Cloudflare account?**
Only with limits. Grant the smallest set of scopes that covers the task, start read-only where you can, and keep a person approving anything that changes production. Cloudflare's step-up authorization lets an agent ask for more access later instead of holding it from the start.

## Related Insights

- [Cloudflare's MCP Server in October 2026: Step-Up Auth, Events and Skills](/blog/cloudflare-mcp-october-2026-step-up-authorization-events-skills/)
- [OWASP MCP Top 10 Explained for Business Owners](/blog/owasp-mcp-top-10-explained-for-business-owners/)
- [MCP Security in 2026: What the New Specification Fixed and What It Opened Up](/blog/mcp-specification-security-what-changed/)
- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)

## Sources

- Cloudflare, [MCP servers for Cloudflare](https://developers.cloudflare.com/agents/model-context-protocol/mcp-servers-for-cloudflare/), developer documentation
- Matt Carey, [Code Mode: give agents an entire API in 1,000 tokens](https://blog.cloudflare.com/code-mode-mcp/), Cloudflare blog, February 20, 2026
- Cloudflare, [Cloudflare API MCP server now supports step-up authorization](https://developers.cloudflare.com/changelog/post/2026-10-19-cloudflare-mcp-step-up/), changelog, October 19, 2026
- Cloudflare, [Cloudflare MCP servers no longer serve /sse](https://developers.cloudflare.com/changelog/post/2026-10-22-cloudflare-mcp-servers-retire-sse/), changelog, October 22, 2026
- [Model Context Protocol](https://modelcontextprotocol.io/)
