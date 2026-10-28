---
title: "GPT-6.1 Terra at Half the Price: What a Cheaper Model Really Changes"
shortLabel: "GPT-6.1 Terra Pricing"
translationKey: "gpt-6-1-terra-price-what-half-the-price-means"
description: "OpenAI launched GPT-6.1 Terra on 26 October 2026 at $1 per million input tokens and $5 per million output. What the price cut means and how to test it before switching."
date: 2026-10-27
lastUpdated: 2026-10-27
category: Insights
pillar: "ai-business"
tags:
  - GPT-6.1 Terra
  - OpenAI
  - AI Pricing
  - Enterprise AI
readTime: 6
featuredImage: "/assets/images/blog/gpt-6-1-terra-price-what-half-the-price-means.svg"
featuredImageAlt: "Abstract gradient background"
ogType: article
---

<div class="container-custom py-12 md:py-20">

**In short:** OpenAI launched GPT-6.1 Terra on 26 October 2026. According to OpenAI's launch page, standard API pricing is $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens, and the model is available to ChatGPT Plus, Pro, Enterprise and Edu users in ChatGPT Work and Codex, and in the API as `gpt-6.1-terra`. Reports put that at half the price of the model above it. Cheaper does not automatically mean better for your task, so test before switching.

## Key Takeaways

- Launch date reported as 26 October 2026. Pricing from OpenAI's launch page: $1 per million input tokens, $0.05 per million cached input tokens, $5 per million output tokens.
- Access: Plus, Pro, Enterprise and Edu users in ChatGPT Work and Codex, and the API model name `gpt-6.1-terra`.
- Reports compare it with GPT-6.1 Sol at $2 and $10, and with GPT-5.6 Terra at $2 and $12, so roughly half the price of either.
- One independent index, Artificial Analysis as relayed by a third-party report, scores Terra 48 against Sol's 52, so it is cheaper and somewhat less capable on that measure.
- Secondary sources add details such as 50% lower Batch and Flex pricing and higher rates for very long prompts. Check OpenAI's pricing page before budgeting.

## The Numbers

| Model | Input per million tokens | Output per million tokens | Source |
|---|---|---|---|
| GPT-6.1 Terra | $1 | $5 | OpenAI launch page |
| GPT-6.1 Sol | $2 | $10 | Reported by third-party coverage |
| GPT-5.6 Terra | $2 | $12 | Reported by third-party coverage |

Cached input, which is text the model has seen recently and can reuse, is priced at $0.05 per million tokens on Terra according to OpenAI's page. For workloads that repeat a long instruction block or document many times, caching can matter more than the headline rate.

Third-party reports also describe 50% lower pricing for Batch and Flex modes, a 2x rate for Fast mode and higher billing for prompts above 272,000 input tokens. These come from secondary sources, so confirm them on OpenAI's own pricing page.

## What "Half the Price" Does Not Tell You

A lower price per token is one input to cost, not the cost itself.

- **Quality per task.** An Artificial Analysis index of 48 for Terra against 52 for Sol, as relayed by one report, suggests a gap on that benchmark. Whether it matters depends on your task. For summarising or routing, a small gap may not change the result. For complex reasoning it might.
- **Retries and corrections.** If a cheaper model needs more attempts or more human checking, savings shrink.
- **Output length.** Output tokens cost five times input here, so a model that writes longer answers costs more per task.
- **Volume.** A halved price matters most at high volume. At small volume, the difference may be pennies.

The same lesson applied to Anthropic's price cut, which we covered in [Claude Haiku 5.5 Price Cut: What "75% Cheaper" Really Means](/blog/claude-haiku-5-5-price-cut-what-75-percent-cheaper-really-means/).

## How to Test Before You Switch

1. **Pick one real workflow,** such as classifying support emails or drafting replies.
2. **Collect 50 to 100 real examples** with the outcome you would call correct.
3. **Run both models on the same set** and record accuracy, the number of outputs a person had to fix, and token usage.
4. **Compute cost per correct result,** not cost per token.
5. **Decide per workflow.** A cheaper model for routine steps and a stronger one for hard cases is a common, sensible split.

Keep your prompts and tool definitions separate from any one provider's model name, so switching is a configuration change, not a rewrite. The multi-cloud announcement in [OpenAI Models Come to Google Cloud](/blog/openai-models-on-google-cloud-what-multi-cloud-ai-means/) points the same way.

## The Short Version

GPT-6.1 Terra is an aggressive price point from OpenAI, with pricing confirmed on its launch page. The decision is not "cheaper or not" but "cheaper for which tasks". Test it on a real workflow, compare cost per correct result and keep your systems portable.

To design an AI system that can switch models without a rebuild, see our [AI development](/solutions/ai-development/) service.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">How much does GPT-6.1 Terra cost?</p><p class="text-gray-600 leading-relaxed">According to OpenAI's launch page, $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Where can I use GPT-6.1 Terra?</p><p class="text-gray-600 leading-relaxed">OpenAI says it is available to Plus, Pro, Enterprise and Edu users in ChatGPT Work and Codex, and through the API as <code>gpt-6.1-terra</code>.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Is Terra better than Sol?</p><p class="text-gray-600 leading-relaxed">Not on the one independent index reported, where Terra scored 48 against Sol's 52. It is cheaper, so the right choice depends on the task.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Will switching to a cheaper model save money?</p><p class="text-gray-600 leading-relaxed">Only if quality, retries and output length do not eat the savings. Measure cost per correct result.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"How much does GPT-6.1 Terra cost?","@type":"Question","acceptedAnswer":{"text":"According to OpenAI's launch page, $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens.","@type":"Answer"}},{"name":"Where can I use GPT-6.1 Terra?","@type":"Question","acceptedAnswer":{"text":"OpenAI says it is available to Plus, Pro, Enterprise and Edu users in ChatGPT Work and Codex, and through the API as gpt-6.1-terra.","@type":"Answer"}},{"name":"Is Terra better than Sol?","@type":"Question","acceptedAnswer":{"text":"Not on the one independent index reported, where Terra scored 48 against Sol's 52. It is cheaper, so the right choice depends on the task.","@type":"Answer"}},{"name":"Will switching to a cheaper model save money?","@type":"Question","acceptedAnswer":{"text":"Only if quality, retries and output length do not eat the savings. Measure cost per correct result.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Related Insights

- [Claude Haiku 5.5 Price Cut: What "75% Cheaper" Really Means](/blog/claude-haiku-5-5-price-cut-what-75-percent-cheaper-really-means/)
- [AI Agent Pricing: Per Seat, Per Task or Per Outcome?](/blog/outcome-based-pricing-for-ai-agents-per-seat-per-task-per-outcome/)
- [OpenAI Models Come to Google Cloud: What Multi-Cloud AI Means for Buyers](/blog/openai-models-on-google-cloud-what-multi-cloud-ai-means/)

## Sources

- OpenAI, [Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/), October 26, 2026
- gHacks, [OpenAI Launches GPT-6.1 Terra With API Pricing 50% Lower Than GPT-5.6 Terra](https://www.ghacks.net/2026/10/27/openai-launches-gpt-6-1-terra-with-api-pricing-50-lower-than-gpt-5-6-terra/), October 27, 2026
- DataCamp, [GPT-6.1 Terra: Benchmarks, Pricing and Access](https://www.datacamp.com/blog/gpt-6-1-terra)

</div>
