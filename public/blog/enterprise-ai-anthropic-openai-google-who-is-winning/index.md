# Anthropic, OpenAI, Google in Enterprise: Who Is Winning?

URL: https://zunkireelabs.com/blog/enterprise-ai-anthropic-openai-google-who-is-winning/
Published: 2026-10-05
Summary: Two reports give very different pictures of enterprise AI market share. What Menlo Ventures and a16z measured, why they disagree, and how to read them.

**In short:** Reports on which AI lab is "winning" the enterprise disagree because they measure different things: estimated dollars based on API usage, the share of companies using a vendor in production, or a vendor's share of wallet. Treat any single percentage with care, and make your own decision with a test on your own work and without depending on one vendor.

## Key Takeaways

- Menlo Ventures estimates Anthropic at 40% of enterprise LLM market share in 2025, OpenAI at 27% and Google at 21%.
- A separate a16z survey of Global 2000 CIOs found 78% using OpenAI models in production and 44% using Anthropic, so a company can count toward both.
- Different samples, dates and definitions explain much of the gap. Neither report is a count of every dollar or token.
- Coding is where the gap is widest: Menlo puts Anthropic at 54% of enterprise coding usage and OpenAI at 21%.
- The a16z survey found 81% of enterprises using three or more model families, so multi-vendor is already normal.


## What Do the Two Reports Actually Say?

**Menlo Ventures.** In its [2025 State of Generative AI in the Enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) report (December 2025), Menlo Ventures says enterprises spent $37 billion on generative AI in 2025, up from $11.5 billion in 2024. For large language model vendors, it estimates Anthropic at 40% share, OpenAI at 27% and Google at 21%, together 88% of the market. Menlo describes its figures as "estimated dollars spent based on proportion of production API usage". They come from a survey of 495 U.S. enterprise AI decision-makers conducted November 7-25, 2025, and Menlo notes that the sample is limited to U.S. enterprises and that private-company revenue figures are estimates.

**Andreessen Horowitz (a16z).** In its [enterprise AI report](https://a16z.com/leaders-gainers-and-unexpected-winners-in-the-enterprise-ai-arms-race/) published on January 30, 2026, a16z surveyed 100 CIOs and senior executives at Global 2000 companies (company revenue of $500 million or more) across the US, Canada, the UK, the EU, Asia and Australia. It reports that 78% of the surveyed CIOs use OpenAI models in production, that 44% use Anthropic in production (above 63% including testing), and that OpenAI holds roughly 56% of wallet share. It also reports that 81% of the surveyed enterprises use three or more model families in testing or production.

## Why Do the Numbers Disagree?

At first glance the two reports contradict each other: one has Anthropic ahead and the other has OpenAI far ahead. They are answering different questions.

- **What is counted.** Menlo's share is an estimate of dollars based on production API usage. a16z's headline figures are the percentage of surveyed companies using each vendor in production, plus a separate wallet-share estimate. A vendor used by many companies for small tasks can score high on one measure and low on another.
- **Who was asked.** Menlo surveyed 495 U.S. enterprise decision-makers. a16z surveyed 100 CIOs at Global 2000 firms in several regions. Different groups, different sizes and different geographies give different answers.
- **When it was asked.** The Menlo survey ran in November 2025 and the a16z report came out at the end of January 2026. In a market that moves quickly, a few months matters.
- **What is left out.** a16z notes that its methodology excludes AI coding startups, which limits how precisely it can measure coding.

Both are surveys of people's reports and estimates, not a ledger of every dollar and token. Neither tells you which model is best for your task.

## Why Is Coding Different?

Coding is where the reports point most clearly in the same direction. Menlo puts Anthropic at 54% and OpenAI at 21% of enterprise LLM API usage for coding tasks. a16z says Anthropic's gains are in "token-heavy coding use cases" and that Google's enterprise share remains meaningfully lower in coding workloads. Coding agents run long, repeated sessions, so a small number of teams can account for a large share of usage. That is also why a usage-based number and a "how many companies use it" number can look so different. For more on the tools themselves, see our look at [what Microsoft's Copilot rethink means for coding agents](/blog/ai-native-software-and-coding-agents-what-microsofts-copilot-rethink-means/).

## How Should You Read a Market-Share Number?

A short checklist works for any vendor or analyst report:

1. **Find the definition.** Is it dollars, tokens, API calls, companies using it, or something else?
2. **Check the sample.** Who answered, how many, where, and when?
3. **Look for what is excluded.** Coding startups, consumer products and internal builds are often left out.
4. **Compare like with like.** Do not set one report's usage share against another's spend share.
5. **Ask who benefits.** Analysts and investors have their own interests. Read the methodology section, not only the headline.
6. **Use it as context, not as a verdict.** A market-share number tells you what others bought, not what fits your work.

## What Does This Mean When You Choose a Model Vendor?

The practical lesson is that the leader can change and your choice should not depend on one report. In the a16z survey, 81% of enterprises used three or more model families, which suggests that multi-vendor is already common practice. A few habits help:

- **Test on your own tasks.** Build a small test set from your real documents, tickets or code and compare models on it before you commit.
- **Keep an abstraction layer.** Route model calls through one internal interface so that switching vendors is a configuration change, not a rewrite.
- **Mind the contract.** Check data handling, retention, price changes and the ability to export your prompts, evaluations and fine-tuning data.
- **Match model to task.** A cheaper or open model may be enough for simple work, and a frontier model may be worth paying for on hard tasks. Our guide to [reading a frontier model release](/blog/gemini-4-argon-how-to-read-a-frontier-model-release/) can help you judge announcements.
- **Plan for agents.** If you are moving toward autonomous workflows, read about [why AI agents are getting their own infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/).

Adoption itself is broad. McKinsey's State of AI survey, published on November 5, 2025 and covering 1,993 respondents in 105 countries, found that 88% of organizations use AI in at least one business function, as [summarised by Silicon Canals](https://siliconcanals.com/m-mckinseys-2025-global-ai-survey-88-of-organizations-now-use-ai-in-at-least-one-function-up-from-78-but-most-are-still-stuck-in-pilot-mode-and-only-a-minority-can-point-to-any-real-impact/). Using AI is no longer the question. Choosing and governing it well is.

## The Short Version

There is no single "enterprise AI market share". Menlo Ventures reports Anthropic ahead on estimated spend based on API usage, while a16z reports OpenAI used by more surveyed Global 2000 companies in production, and both are survey-based. Read the definition before the percentage, test models on your own work, and design your systems so you can change vendors.

## FAQ

**Which AI lab has the largest enterprise market share?**
It depends on the measure. Menlo Ventures estimates Anthropic at 40%, OpenAI at 27% and Google at 21% of enterprise LLM share based on production API usage, while an a16z survey of Global 2000 CIOs found 78% using OpenAI models in production and 44% using Anthropic.

**Why do enterprise AI market-share reports disagree?**
They measure different things (estimated dollars from API usage, the share of companies using a vendor, or share of wallet), survey different groups (495 U.S. decision-makers versus 100 Global 2000 CIOs) and were run at different times. Both are surveys, not complete counts.

**Is Anthropic really ahead in coding?**
Menlo Ventures reports Anthropic at 54% and OpenAI at 21% of enterprise LLM API usage for coding, and a16z reports Anthropic gaining in token-heavy coding use cases. Both are survey-based and exclude some segments, so test tools on your own codebase.

**Should my company use more than one AI model vendor?**
Many enterprises already do: a16z found 81% using three or more model families in testing or production. A multi-vendor setup with one internal interface and your own test set lowers lock-in risk.

## Related Insights

- [Gemini 4 Argon: How to Read a Frontier Model Release](/blog/gemini-4-argon-how-to-read-a-frontier-model-release/)
- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [AI Coding Agents: What Microsoft's Copilot Rethink Means](/blog/ai-native-software-and-coding-agents-what-microsofts-copilot-rethink-means/)

## Sources

- Menlo Ventures, [2025: The State of Generative AI in the Enterprise](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/), December 2025
- Andreessen Horowitz, [Leaders, gainers and unexpected winners in the Enterprise AI arms race](https://a16z.com/leaders-gainers-and-unexpected-winners-in-the-enterprise-ai-arms-race/), January 30, 2026
- Silicon Canals, [McKinsey's 2025 global AI survey: 88% of organizations now use AI in at least one function](https://siliconcanals.com/m-mckinseys-2025-global-ai-survey-88-of-organizations-now-use-ai-in-at-least-one-function-up-from-78-but-most-are-still-stuck-in-pilot-mode-and-only-a-minority-can-point-to-any-real-impact/), summarising McKinsey's State of AI survey of November 5, 2025
