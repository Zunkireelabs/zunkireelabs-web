# Claude Haiku 5.5 Price Cut: What '75% Cheaper' Really Means

URL: https://zunkireelabs.com/blog/claude-haiku-5-5-price-cut-what-75-percent-cheaper-really-means/
Published: 2026-10-12
Summary: Anthropic's Claude Haiku 5.5 launched with much lower prices. What it costs, why the saving depends on prompt length, and what to check before you switch.

**In short:** Anthropic released Claude Haiku 5.5 on 7 October 2026 at a much lower price than Haiku 4.5. Anthropic says it costs around 75% less to run on average. That figure is an average, and the real saving for your workload depends on how long your prompts are and on a tokenizer change. Test it on your own tasks before you switch.

## Key Takeaways

- Prompts up to 100,000 tokens cost $0.10 per million input tokens and $0.50 per million output tokens. Longer prompts cost $0.50 and $2.50.
- Haiku 4.5 cost $1 and $5, so the headline drop is steep for short prompts.
- Anthropic says the model costs "around 75% less to run" than Haiku 4.5 on average. Reports do not explain how that average is calculated.
- A new tokenizer produces roughly 30% more tokens for the same text, which offsets part of the price cut.
- Anthropic positions the model for high-volume, latency-sensitive work such as classification, routing, extraction and subagent tasks.

## What Did Anthropic Announce?

According to [AI Weekly's report](https://aiweekly.co/alerts/introducing-claude-haiku-55), Anthropic released Claude Haiku 5.5 on 7 October 2026 and says it costs "around 75% less to run on average than its predecessor, Haiku 4.5." The model is available on AWS, Google Cloud and Microsoft Azure, with the model ID `claude-haiku-5-5`.

[VKTR's coverage](https://www.vktr.com/ai-platforms/anthropic-cuts-smallmodel-pricing-90-with-claude-haiku-55/) adds the price table, a larger context window and the intended uses. It also notes that Anthropic will keep the model available until at least 7 October 2027.

## What Does It Cost?

Per million tokens, according to VKTR:

| | Haiku 4.5 | Haiku 5.5 |
|---|---|---|
| Input | $1 | $0.10 (prompts up to 100k) / $0.50 (over 100k) |
| Output | $5 | $0.50 (prompts up to 100k) / $2.50 (over 100k) |
| Context window | 200k | 1M |
| Max output | 64k | 128k |

The Batch API's 50% discount still applies. Haiku 5.5 is also the only current Claude model priced by prompt length.

## Why Is It Not Simply "90% Cheaper"?

Some headlines say 90%. VKTR's author explains why that is the short-prompt best case, not Anthropic's own number:

- Input and output prices fall by about 90% for prompts up to 100,000 tokens.
- A new tokenizer produces about 30% more tokens for identical input, which gives back part of the saving.
- Long prompts above 100,000 tokens see a smaller saving, because their rates are higher.

VKTR's author estimates short-prompt workloads should cost roughly 85% to 90% less after the tokenizer effect, while Anthropic's own figure is a 75% average. Both are estimates. Your bill depends on your mix of prompt lengths, output lengths and caching.

## What Is the Model Meant For?

Anthropic says it targets high-volume, latency-sensitive work such as classification, routing, extraction and subagent tasks. That fits tasks where a small, fast model does a narrow job many times a day, such as sorting support tickets or pulling fields from documents.

Anthropic's reported benchmarks for Haiku 5.5 against Haiku 4.5 are large. For example, AI Weekly lists 72.4% against 15.7% on an offline computer-use test. These are vendor-reported results, and customers quoted in the same report, such as Asana and HubSpot, describe their own tests that have not been independently verified.

## What Should You Check Before Switching?

VKTR lists several changes that can break existing code:

- **Thinking is on by default.** An `effort` setting defaults to medium, and thinking tokens count toward `max_tokens`. A low limit can end a response before any text appears.
- **Responses can begin with a thinking block.** Code that reads the first content block as the answer may fail.
- **Some sampling settings return errors.** Non-default `temperature`, `top_p` or `top_k` values are rejected.
- **Message arrays must end with a user turn,** and the computer use tool version changed.
- **Safety classifiers can decline requests** with a `refusal` stop reason.

## What Should a Business Do?

1. **Run your own cost test.** Replay a sample of real requests through both models and compare the total bill, not the price per million tokens.
2. **Measure quality on your tasks.** A cheaper model that gets 3% more answers wrong can cost more once review time is counted.
3. **Route by task.** Use the small model for classification, routing and extraction, and keep a larger model for hard reasoning.
4. **Keep your system model-flexible.** Prices and models change every few months, so avoid hard-wiring one provider.
5. **Watch the migration list above** before you change the model name in production.

## The Takeaway

A lower price list is good news for anyone running AI at volume, and it widens the set of tasks where AI makes economic sense. But "75% cheaper" is an average from the vendor, not a promise about your bill. Measure it on your own work.

## Frequently Asked Questions

### How much does Claude Haiku 5.5 cost?

For prompts up to 100,000 tokens it costs $0.10 per million input tokens and $0.50 per million output tokens. For longer prompts it costs $0.50 and $2.50.

### Is Claude Haiku 5.5 really 75% cheaper than Haiku 4.5?

Anthropic says it costs around 75% less to run on average. The real saving depends on your prompt lengths and on a tokenizer that produces about 30% more tokens for the same text.

### What is Claude Haiku 5.5 good for?

Anthropic says high-volume, latency-sensitive work such as classification, routing, extraction and subagent tasks.

### Do I need to change my code to use it?

Possibly. Reports note that thinking is on by default, some sampling settings return errors and responses can begin with a thinking block, so test before switching.

### Where is Claude Haiku 5.5 available?

On the Claude API, and through AWS, Google Cloud and Microsoft Azure, according to the reports.

## Related Insights

- [Gemini 4 Argon Release: What Was Claimed, What Is Unproven](/blog/gemini-4-argon-how-to-read-a-frontier-model-release/)
- [AI Coding Agents: What Microsoft's Copilot Rethink Means](/blog/ai-native-software-and-coding-agents-what-microsofts-copilot-rethink-means/)

## Sources

- AI Weekly, [Anthropic releases Claude Haiku 5.5, cutting prices by 75%](https://aiweekly.co/alerts/introducing-claude-haiku-55), 7 October 2026.
- VKTR, [coverage of the Claude Haiku 5.5 launch and pricing](https://www.vktr.com/ai-platforms/anthropic-cuts-smallmodel-pricing-90-with-claude-haiku-55/), October 2026.

<script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How much does Claude Haiku 5.5 cost?", "acceptedAnswer": {"@type": "Answer", "text": "For prompts up to 100,000 tokens it costs $0.10 per million input tokens and $0.50 per million output tokens. For longer prompts it costs $0.50 and $2.50."}}, {"@type": "Question", "name": "Is Claude Haiku 5.5 really 75% cheaper than Haiku 4.5?", "acceptedAnswer": {"@type": "Answer", "text": "Anthropic says it costs around 75% less to run on average. The real saving depends on your prompt lengths and on a tokenizer that produces about 30% more tokens for the same text."}}, {"@type": "Question", "name": "What is Claude Haiku 5.5 good for?", "acceptedAnswer": {"@type": "Answer", "text": "Anthropic says high-volume, latency-sensitive work such as classification, routing, extraction and subagent tasks."}}, {"@type": "Question", "name": "Do I need to change my code to use it?", "acceptedAnswer": {"@type": "Answer", "text": "Possibly. Reports note that thinking is on by default, some sampling settings return errors and responses can begin with a thinking block, so test before switching."}}, {"@type": "Question", "name": "Where is Claude Haiku 5.5 available?", "acceptedAnswer": {"@type": "Answer", "text": "On the Claude API, and through AWS, Google Cloud and Microsoft Azure, according to the reports."}}]}</script>
