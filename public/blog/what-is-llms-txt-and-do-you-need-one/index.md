# What Is llms.txt? What It Does and Whether Your Site Needs One

URL: https://zunkireelabs.com/blog/what-is-llms-txt-and-do-you-need-one/
Published: 2026-11-03
Summary: llms.txt is a proposed file that points AI agents to your best content. What the proposal says, what Google says, and what no provider has confirmed.

**In short:** llms.txt is a plain Markdown file, placed on a website, that gives AI agents a short summary of the site and a curated list of links to its most useful pages. It was proposed by Jeremy Howard in September 2024 and is described by its own page as a proposal, not a standard. The honest status in late 2026: a lot of sites publish one, but we could not find any major search or AI provider documenting that it reads llms.txt files from third-party sites. Google's guidance says you do not need it to appear in its AI features.

## Key Takeaways

- The proposal's stated purpose is inference time: helping an AI agent understand a site on demand while assisting a user, rather than training.
- The format is simple: an H1 with the site name (the only required part), a short blockquote summary, optional notes, and H2 sections containing lists of links with optional notes. An Optional section marks links an agent can skip.
- It can sit at the site root or at a path within it, covering pages under that path.
- Google's page on AI features says you do not need to create new machine-readable files, AI text files or markup to appear in AI Overviews or AI Mode.
- Search Engine Journal reported in April 2025 that Google's John Mueller said none of the AI services had said they use llms.txt. That is secondhand and dated, so treat it as context rather than a current statement.
- Publishing one is cheap and low risk. Expecting it to move rankings or citations is not supported by anything we could verify.

## What the File Looks Like

The proposal at llmstxt.org describes this structure, in order:

```
# Your Company

> One or two sentences saying what the company does.

Optional notes on how to use the site.

## Services

- [AI voice agents](https://example.com/voice/): what we build and for whom
- [AEO and SEO](https://example.com/aeo/): how we work

## Guides

- [What is GEO?](https://example.com/geo/)

## Optional

- [Company history](https://example.com/about/)
```

The proposal also suggests offering clean Markdown copies of pages, and a companion llms-full.txt convention is common in practice, with full text in one file. Our own site publishes both an llms.txt and an llms-full.txt, and Markdown copies of Insights posts, mainly so that tools which prefer one fetch to many page parses can use them.

## What Is Confirmed and What Is Not

| Question | Status |
|---|---|
| Is it a proposed format with a published structure? | Yes, at llmstxt.org, authored by Jeremy Howard, first published September 2024 |
| Is it an official standard? | No. The page calls it a proposal and invites community input |
| Does Google say you need it for AI Overviews or AI Mode? | No. Google says no additional machine-readable files or AI text files are needed |
| Have major AI providers documented reading third-party llms.txt files? | We could not find any such documentation |
| Do AI companies publish llms.txt for their own docs? | Some do. For example, OpenAI publishes one for its developer documentation |
| Does it improve rankings or citations? | No verified evidence |

We did not check every provider's documentation, so if one has started to support it, that would change the picture.

## Should You Publish One?

**Reasons to:** It takes an hour. It forces you to decide which pages best describe your business. Developer tools and coding assistants, which fetch documentation on demand, are the use case where adoption is most plausible. It does no harm if kept accurate.

**Reasons not to bother yet:** If you have limited time, the same hour is usually better spent on crawlable pages, clear answers and consistent business facts, which help every system.

**A sensible approach:**

1. Do the foundations first. See [what GEO is](/blog/what-is-generative-engine-optimization-geo-vs-aeo-vs-seo/).
2. Publish a short llms.txt listing 10 to 30 of your best pages with one-line descriptions.
3. Keep it accurate, and update it when pages move.
4. Do not expect results. If your server logs show AI bots fetching it, that is information; if they do not, you have lost little.
5. Never use it to stuff keywords or to claim things the pages do not say.

## The Short Version

llms.txt is a cheap, optional signpost for AI agents. It is a proposal with no confirmed support from the major search and AI providers, and Google says you do not need it. Publish one if it is quick for you, keep it truthful, and put your real effort into the content and technical basics that every system rewards.

For help with the parts that do move results, see our [answer engine optimization service](/solutions/aeo-seo/).

## FAQ

**What is llms.txt?**
llms.txt is a Markdown file placed on a website that gives AI agents a short summary of the site and a curated list of links to its most useful pages. It was proposed by Jeremy Howard in September 2024.

**Is llms.txt an official standard?**
No. Its own page describes it as a proposal and says it is open for community input.

**Does Google use llms.txt?**
Google's documentation on AI features says you do not need new machine-readable files or AI text files to appear in AI Overviews or AI Mode. It does not mention llms.txt as a requirement.

**Will llms.txt help me get cited by ChatGPT?**
We found no provider documentation saying that ChatGPT or other major assistants read llms.txt from third-party sites, and no verified evidence that it improves citations. Treat it as optional.

**Where should llms.txt be placed?**
At the site root, for example /llms.txt, or at any path to cover the pages under it. If more than one file applies, the proposal says agents should use the most specific one.

## Related Insights

- [What Is GEO? Generative Engine Optimization vs AEO vs SEO](/blog/what-is-generative-engine-optimization-geo-vs-aeo-vs-seo/)
- [AI Crawlers and robots.txt: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot](/blog/ai-crawlers-and-robots-txt-gptbot-oai-searchbot-claudebot-perplexitybot/)
- [What Is AI-Native Search?](/blog/what-is-ai-native-search/)

## Sources

- Jeremy Howard, [The /llms.txt file (proposal, v2)](https://llmstxt.org/), published September 3, 2024
- Google Search Central, [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), read November 3, 2026
- Search Engine Journal, [Google Says LLMs.txt Comparable To Keywords Meta Tag](https://www.searchenginejournal.com/google-says-llms-txt-comparable-to-keywords-meta-tag/), April 17, 2025 (secondary report)
- OpenAI, [OpenAI developer docs llms.txt](https://developers.openai.com/llms.txt), read November 3, 2026
