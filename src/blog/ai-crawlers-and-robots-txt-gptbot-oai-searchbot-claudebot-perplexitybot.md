---
title: "AI Crawlers and robots.txt: GPTBot, ClaudeBot, PerplexityBot"
shortLabel: "AI Crawlers and robots.txt"
translationKey: "ai-crawlers-and-robots-txt-gptbot-oai-searchbot-claudebot-perplexitybot"
description: "Which AI bots train models, which power AI search, and which act for a user? How to set robots.txt for GPTBot, OAI-SearchBot, ClaudeBot and PerplexityBot."
date: 2026-11-03
lastUpdated: 2026-11-03
category: Insights
pillar: "ai-business"
tags:
  - robots.txt
  - AI Crawlers
  - GPTBot
  - AI Search
  - GEO
readTime: 8
featuredImage: "/assets/images/blog/ai-crawlers-and-robots-txt-gptbot-oai-searchbot-claudebot-perplexitybot.svg"
ogType: article
---

<div class="container-custom py-12 md:py-20">

**In short:** AI companies run separate bots for separate jobs, and the difference matters. Some collect content for training models, some build the index behind AI search, and some fetch a page only because a user asked about it. If you block everything with one rule you can disappear from AI answers without meaning to. If you allow everything you may hand over content for training you would rather keep back. This guide lists the main bots from OpenAI, Anthropic, Perplexity and Google, what each is for, and a sensible way to decide.

## Key Takeaways

- **Training, search and user-initiated fetches are different bots.** You can treat them differently in robots.txt.
- OpenAI's documentation states that each setting is independent. GPTBot is for training. OAI-SearchBot surfaces sites in ChatGPT search. ChatGPT-User fetches pages when a user asks.
- Anthropic documents ClaudeBot (training), Claude-SearchBot (search quality) and Claude-User (user requests), and says its bots honour robots.txt.
- Perplexity documents PerplexityBot (search, not used for foundation-model training) and Perplexity-User, which it says generally ignores robots.txt because a user requested the fetch.
- Google uses Googlebot for Search, including its AI features, and a separate token, Google-Extended, to control use for Gemini training and grounding. Google says Google-Extended does not affect inclusion in Search or ranking.
- Changes are not instant. OpenAI and Perplexity both say search settings can take around 24 hours to update.

## The Bots at a Glance

| Company | Bot (robots.txt token) | What it is for | What the company says about robots.txt |
|---|---|---|---|
| OpenAI | GPTBot | Collecting content that may be used to train its models | Disallowing it signals content should not be used in training |
| OpenAI | OAI-SearchBot | Surfacing sites in ChatGPT search | Opted-out sites will not be shown in ChatGPT search answers, though can still appear as navigational links |
| OpenAI | ChatGPT-User | Visiting a page when a user asks | robots.txt rules may not apply, because the action is user-initiated |
| Anthropic | ClaudeBot | Collecting content that could contribute to model training | Honours robots.txt, and supports Crawl-delay |
| Anthropic | Claude-SearchBot | Improving search result quality | Disabling it prevents indexing for search optimization |
| Anthropic | Claude-User | Accessing sites when a user asks Claude | Disabling it prevents retrieval in response to a user query |
| Perplexity | PerplexityBot | Surfacing and linking sites in Perplexity search; not used to crawl for foundation models | Changes can take up to 24 hours |
| Perplexity | Perplexity-User | Visiting a page when a user asks | Generally ignores robots.txt because a user requested the fetch |
| Google | Googlebot | Google Search, including AI Overviews and AI Mode | Controls how Search crawls your site |
| Google | Google-Extended | Use for Gemini training and grounding in Gemini apps and certain Vertex AI features | Does not affect Search inclusion or ranking |

## Deciding What to Allow

There is no single right answer. It depends on what you want from AI systems.

**If you want to be found in AI search,** you generally need the search bots to reach your pages: OAI-SearchBot for ChatGPT search, Claude-SearchBot for Claude and PerplexityBot for Perplexity. Blocking them reduces your chance of being shown in those products.

**If you are comfortable with your content being used for training,** you can allow GPTBot and ClaudeBot. Many publishers choose to disallow the training bots while allowing the search bots. That is a legitimate choice, and the documentation above describes the bots as separately controllable.

**If you want to limit use of your content by Google's Gemini models,** use Google-Extended. It does not remove you from Search or change ranking, per Google's documentation. To limit what Search shows from a page, Google points to nosnippet, data-nosnippet, max-snippet and noindex. Blocking Googlebot would block Search.

## An Example Policy

This pattern allows search-oriented bots and declines training. It is an illustration, not a recommendation for every site:

```
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

Before using anything like this, check your existing robots.txt for broad rules that might override it, and test with each company's current documentation, since tokens and behaviour change.

## Things That Catch People Out

- **User-initiated fetchers may ignore robots.txt.** OpenAI and Perplexity both say their user-triggered bots may not follow it, since a person asked for the page. If content must be private, use authentication, not robots.txt.
- **A blanket block hides you.** A rule that disallows all unknown bots can shut out search bots you wanted.
- **CDN and firewall rules.** Security settings can block bots even when robots.txt allows them. Google lists CDN and hosting access among the basics.
- **IP blocking is brittle.** Anthropic notes that blocking by IP may not reliably deliver an opt-out. It publishes bot IP ranges for allow-listing.
- **Subdomains.** Rules apply per host, so each subdomain needs its own robots.txt.
- **Timing.** Allow time after changes, and do not conclude it failed after an hour.

## The Short Version

Decide separately about training, AI search and user-triggered fetching. Allow the search bots if you want to be visible in AI answers, decide on the training bots based on your own policy, and use real access controls for anything private. Review the policy every few months, because the list of bots keeps growing.

This is one part of making your site visible to AI. For the rest, read [what GEO is](/blog/what-is-generative-engine-optimization-geo-vs-aeo-vs-seo/) and our [answer engine optimization service](/solutions/aeo-seo/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What is the difference between GPTBot and OAI-SearchBot?</p><p class="text-gray-600 leading-relaxed">OpenAI uses GPTBot to crawl content that may be used to train its models, and OAI-SearchBot to surface websites in ChatGPT's search features. OpenAI says each setting is independent, so you can allow one and block the other.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Should I block GPTBot?</p><p class="text-gray-600 leading-relaxed">That is your choice. Blocking GPTBot signals that your content should not be used for training. It does not by itself remove you from ChatGPT search, which uses OAI-SearchBot. Decide based on your content policy and goals.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Does blocking Google-Extended remove me from Google Search?</p><p class="text-gray-600 leading-relaxed">No. Google states that Google-Extended does not affect a site's inclusion in Google Search and is not a ranking signal. It controls use for Gemini training and grounding.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Do AI bots always follow robots.txt?</p><p class="text-gray-600 leading-relaxed">Training and search bots are documented as controllable through robots.txt, and Anthropic says its bots honour it. OpenAI says robots.txt rules may not apply to ChatGPT-User, and Perplexity says Perplexity-User generally ignores them, because those fetches are user-initiated.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">How long do robots.txt changes take to apply?</p><p class="text-gray-600 leading-relaxed">OpenAI says it can take about 24 hours for search results to adjust, and Perplexity says up to 24 hours. Google notes that crawling changes can take days to months to show.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What is the difference between GPTBot and OAI-SearchBot?","@type":"Question","acceptedAnswer":{"text":"OpenAI uses GPTBot to crawl content that may be used to train its models, and OAI-SearchBot to surface websites in ChatGPT's search features. OpenAI says each setting is independent, so you can allow one and block the other.","@type":"Answer"}},{"name":"Should I block GPTBot?","@type":"Question","acceptedAnswer":{"text":"That is your choice. Blocking GPTBot signals that your content should not be used for training. It does not by itself remove you from ChatGPT search, which uses OAI-SearchBot. Decide based on your content policy and goals.","@type":"Answer"}},{"name":"Does blocking Google-Extended remove me from Google Search?","@type":"Question","acceptedAnswer":{"text":"No. Google states that Google-Extended does not affect a site's inclusion in Google Search and is not a ranking signal. It controls use for Gemini training and grounding.","@type":"Answer"}},{"name":"Do AI bots always follow robots.txt?","@type":"Question","acceptedAnswer":{"text":"Training and search bots are documented as controllable through robots.txt, and Anthropic says its bots honour it. OpenAI says robots.txt rules may not apply to ChatGPT-User, and Perplexity says Perplexity-User generally ignores them, because those fetches are user-initiated.","@type":"Answer"}},{"name":"How long do robots.txt changes take to apply?","@type":"Question","acceptedAnswer":{"text":"OpenAI says it can take about 24 hours for search results to adjust, and Perplexity says up to 24 hours. Google notes that crawling changes can take days to months to show.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Related Insights

- [What Is GEO? Generative Engine Optimization vs AEO vs SEO](/blog/what-is-generative-engine-optimization-geo-vs-aeo-vs-seo/)
- [Where AI Answers Get Their Sources, and Why Listings Matter as Much as Your Site](/blog/where-ai-answers-get-their-sources/)
- [Google AI Overviews Antitrust Ruling: What It Means for AI Search and GEO](/blog/google-ai-overviews-antitrust-ruling-what-it-means-for-ai-search-and-geo/)

## Sources

- OpenAI, [Overview of OpenAI crawlers](https://developers.openai.com/api/docs/bots), read November 3, 2026
- Anthropic, [Does Anthropic crawl data from the web, and how can site owners prevent crawling?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-prevent-crawling), article dated April 7, 2026
- Perplexity, [Perplexity crawlers](https://docs.perplexity.ai/guides/bots), read November 3, 2026
- Google, [List of Google's common crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers), read November 3, 2026
- Google Search Central, [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), read November 3, 2026

</div>
