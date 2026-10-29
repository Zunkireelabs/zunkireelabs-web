# AI Overviews and Fewer Clicks: What Google Actually Says You Need to Do

URL: https://zunkireelabs.com/blog/ai-overviews-fewer-clicks-what-google-says-to-do/
Published: 2026-10-27
Summary: Google says there are no extra requirements to appear in AI Overviews or AI Mode. What its documentation states, how to measure the effect in Search Console, and what to do.

**In short:** Many site owners believe they need special markup or new files to appear in Google's AI Overviews and AI Mode. Google's own documentation says otherwise: "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary." A page must be indexed and eligible to show a snippet. That means the work is the same good SEO as before, plus measuring what AI features do to your clicks, which you can do in Search Console.

## Key Takeaways

- Google states that AI Overviews and AI Mode need no technical requirements beyond being indexed and snippet-eligible.
- You do not need new machine-readable files, AI-specific text files, extra markup or special structured data for these features, per Google.
- Standard practice still applies: allow crawling, link internally, give a good page experience, keep important content as text, and make structured data match visible text.
- AI Overviews and AI Mode traffic is counted in the normal "Web" search type in the Search Console Performance report. It is not reported separately.
- Several industry studies report lower click-through when an AI Overview appears. We have not independently verified their figures, so measure your own pages.

## What Google's Documentation Says

Google's page on AI features and your website is direct on several points.

**Eligibility.** Pages must be indexed and eligible to appear in Search with a snippet. Google says there are no additional technical requirements, and that meeting the requirements does not guarantee crawling, indexing or serving.

**Optimisation.** There are no extra steps. The documented basics are to allow crawling in robots.txt and on any CDN or host, use internal links, deliver a good page experience, keep important content as text, support text with relevant images and video, make sure structured data matches the visible text, and keep Merchant Center and Business Profile information current.

**New files and markup.** Google says you do not need new machine-readable files, AI text files, markup or special schema.org structured data.

**Measurement.** AI Overviews and AI Mode traffic appears inside the overall Performance report under the "Web" search type. Google suggests tracking conversions and time on site in other tools such as Google Analytics.

**Control.** Googlebot's robots.txt rules govern access for Search, including AI features. To limit what is displayed, use `nosnippet`, `data-nosnippet`, `max-snippet` or `noindex`. `Google-Extended` governs use for AI training and grounding in other Google systems.

## What This Means for the "GEO and AEO" Advice You Read

Search advice in 2026 is full of new acronyms, including answer engine optimization (AEO) and generative engine optimization (GEO). Google's documentation suggests that, for Google's own AI features, the foundation is still ordinary SEO. That does not make the newer ideas pointless. Other assistants, such as ChatGPT and Perplexity, have their own crawlers and sourcing behaviour, and writing clear, quotable, well-sourced pages helps readers and machines alike. It means you should not buy tools or files promising a special route into Google's AI Overviews that Google says does not exist.

We cover the wider picture in [where AI answers get their sources](/blog/where-ai-answers-get-their-sources/) and the competition angle in [what the AI Overviews antitrust ruling means for GEO](/blog/google-ai-overviews-antitrust-ruling-what-it-means-for-ai-search-and-geo/).

## Why Clicks May Fall Even When You Do Everything Right

An AI Overview can answer a question on the results page, so some searchers do not click through. Industry studies have reported falling click-through rates where an Overview appears, but their figures differ, measure different things and come from secondary reporting we could not verify. The honest position is that the effect probably exists and varies by query type. Informational questions are likely to be most exposed, and transactional and local queries less so.

You do not need to guess. Search Console shows your own impressions, clicks and click-through rate by query and page.

## How to Measure the Effect on Your Own Site

1. **Open the Performance report** and set the date range to compare a period before and after AI features reached your market.
2. **Filter by page type.** Compare informational posts against product or service pages.
3. **Watch impressions and click-through together.** Rising impressions with falling click-through on informational queries is the pattern to look for.
4. **Track outcomes elsewhere.** Use analytics for conversions and engaged time, as Google suggests, since clicks alone no longer tell the whole story.
5. **Check the basics.** Use URL Inspection to confirm Google sees the page you expect.

## What to Do About It

- **Fix the fundamentals first.** Indexable pages, crawlable resources, good internal linking and visible text content.
- **Answer the question early.** Lead with a direct summary and use question-style headings, because that helps both readers and AI systems quote you accurately.
- **Add something an Overview cannot.** Original data, worked examples, tools and local detail give people a reason to click.
- **Match your structured data to what is on the page.** Mismatches are a documented problem.
- **Do not chase unproven tricks.** Google says special optimisations are not needed.

If you want an audit of how your pages appear in AI answers, see our [answer engine optimization service](/solutions/aeo-seo/) and our whitepaper on [answer engine optimization](/resources/answer-engine-optimization-whitepaper/).

## The Short Version

Google's documentation says getting into AI Overviews takes no special tricks beyond solid, indexable, snippet-eligible pages. The practical work is to get the basics right, measure what AI features do to your own clicks in Search Console, and give readers reasons to click that a summary cannot.

## FAQ

**Do I need special markup to appear in AI Overviews?**
No. Google says there are no additional requirements or special optimisations for AI Overviews or AI Mode, and no special schema.org structured data is needed.

**How do I see AI Overviews traffic in Search Console?**
It is included in the Performance report under the "Web" search type, not reported separately.

**Do AI Overviews reduce clicks?**
Some studies report lower click-through when an Overview appears, but the figures vary and are secondary. Compare your own pages in Search Console.

**Should I add an llms.txt file?**
Google says you do not need AI text files for its AI features. Other AI crawlers may treat such files differently, and the evidence on their value is still thin, so treat it as optional.

**Can I stop my content appearing in AI Overviews?**
You can limit displayed content with <code>nosnippet</code>, <code>data-nosnippet</code>, <code>max-snippet</code> or <code>noindex</code>. Be aware these also affect normal search snippets.

## Related Insights

- [Where AI Answers Get Their Sources, and Why Listings Matter as Much as Your Site](/blog/where-ai-answers-get-their-sources/)
- [Google AI Overviews Antitrust Ruling: What It Means for GEO](/blog/google-ai-overviews-antitrust-ruling-what-it-means-for-ai-search-and-geo/)

## Sources

- Google Search Central, [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
