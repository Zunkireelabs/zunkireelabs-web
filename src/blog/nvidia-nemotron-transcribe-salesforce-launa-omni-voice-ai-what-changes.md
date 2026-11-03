---
title: "Voice AI in October 2026: Open Transcription and Real-Time Voice Models"
shortLabel: "Voice AI Models"
translationKey: "nvidia-nemotron-transcribe-salesforce-launa-omni-voice-ai-what-changes"
description: "NVIDIA released an open transcription model and Salesforce a real-time voice model in October 2026. What each does, what it cannot, and what it means."
date: 2026-11-03
lastUpdated: 2026-11-03
category: Insights
pillar: "ai-frontier"
tags:
  - Voice AI
  - Speech to Text
  - NVIDIA
  - Salesforce
  - AI Voice Agent
readTime: 7
featuredImage: "/assets/images/blog/nvidia-nemotron-transcribe-salesforce-launa-omni-voice-ai-what-changes.svg"
ogType: article
---

<div class="container-custom py-12 md:py-20">

**In short:** Two voice AI releases in the last two weeks of October 2026 do different jobs. NVIDIA's Nemotron 3.5 Transcribe, released on 28 October, is an open-weight model that turns recorded audio into text in 40 languages, but it is explicitly not a live, real-time service. Salesforce's Launa-Omni, announced on 19 October, is a model built to hold real-time two-way spoken conversations. For a business, the useful question is not which is better. It is whether you need to talk to callers live, or understand calls after they happen.

## Key Takeaways

- **Two different jobs.** Live conversation (a voice agent that answers the phone) and after-the-call understanding (transcripts, quality review, summaries) need different models.
- NVIDIA's Nemotron 3.5 Transcribe is open-weight, covers 40 languages, handles recordings up to an hour, and can label different speakers. Its own model card says it is an offline model and not a real-time streaming service.
- Salesforce describes Launa-Omni as a model for real-time, two-way conversation. It is a text model adapted for audio, with a separate speech model producing the spoken reply.
- Benchmark scores in both announcements are the vendors' own. Treat them as a starting point, not proof it will work on your callers.
- Whether either model handles Nepali or your callers' accents is something to test on real recordings. We have not confirmed it for either.

## NVIDIA Nemotron 3.5 Transcribe

NVIDIA released the model on 28 October 2026 on Hugging Face and its own platforms, alongside a second version of its open speech dataset, Granary. According to the model card:

- It transcribes recordings in 40 languages, with support for recordings up to one hour.
- It can attribute speech to different speakers, add timestamps, identify the language and translate to and from English.
- It is released under the OpenMDW-1.1 licence, which the card describes as ready for commercial or non-commercial use. Read the licence terms yourself before building a product on it.
- It is an offline model. The card is direct: internal chunking does not make it a real-time streaming service. NVIDIA's own blog says the same.

NVIDIA reports lower error rates than other open models on public benchmarks, such as a mean word error rate of 4.71 on English sets from the Open ASR Leaderboard, against 4.94 for the next model it lists. Those are NVIDIA's numbers on public test sets, and the company's own blog quotes a slightly different leaderboard figure, so treat the exact ranking with caution. The more useful signal is that a strong transcription model with open weights is now available to run on your own hardware.

## Salesforce Launa-Omni

Salesforce published Launa-Omni on 19 October 2026 as "a voice model that holds real-time, two-way conversations". The post says it is a text model retrofitted for audio, with a separate in-house speech model for the spoken reply, and that it is significantly smaller than other leading voice models. Salesforce reports scores on public voice benchmarks and on its own test setup for retail, airline and telecom tasks.

Availability matters here. Salesforce says Slack users can already try a simplified version as Slackbot Voice Dictation, and that a subset of its models can be downloaded for research. The post does not say Launa-Omni itself is among them, so do not assume you can run it yourself.

TechCrunch's roundup of the week also mentions Mistral's Voxtral 3 and ElevenLabs' Realtime for voice agents. We have not been able to read those announcements ourselves, so we do not make claims about them here.

## What This Means for a Business

**If you want a voice agent that answers calls,** the transcription model is not the answer, because it works on recordings. Live agents depend on low delay, interruption handling and, above all, a connection to the system where bookings and records live. Our guide to [AI voice agents for appointment booking](/blog/ai-voice-agent-appointment-booking-what-it-is-and-when-it-fits/) covers what to test.

**If you want to learn from calls,** a strong open transcription model is more useful. Typical uses:

- Review a sample of calls for quality and compliance.
- Turn calls into searchable text and summaries.
- Find the questions callers ask most and fix the gaps in your answers.
- Check whether a voice agent is handing over to people at the right moments.

Running a model on your own hardware also keeps recordings off a third-party service, which can matter for healthcare, finance and other sensitive calls. That is a design choice to weigh against the cost of hosting and maintaining it.

## How to Test Before You Commit

1. **Use your own audio.** Noise, accents, names and mixed languages are where models differ.
2. **Check your languages explicitly.** A language appearing in a list does not mean quality is good enough for your callers.
3. **Separate live from recorded.** Decide which problem you are solving before comparing models.
4. **Measure the right error.** A transcript that gets filler words wrong is fine. One that gets a phone number or a drug name wrong is not.
5. **Read the licence and data terms.** Know where audio goes and how long it is kept.

## The Short Version

October's releases show voice AI splitting into two jobs: talking to people live and understanding recorded calls. An open transcription model is a strong building block for the second. A live agent still depends on delay, handover and the integration behind it. Test on real calls before trusting any benchmark.

To see how we build the live side, read about our [AI voice agent development](/solutions/voice-agent/) and our [voice AI agents whitepaper](/resources/voice-ai-agents-customer-support-whitepaper/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What is NVIDIA Nemotron 3.5 Transcribe?</p><p class="text-gray-600 leading-relaxed">It is an open-weight speech model released on 28 October 2026 that transcribes recorded audio in 40 languages, can label different speakers and handles recordings up to an hour. NVIDIA states it is an offline model, not a real-time streaming service.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Can Nemotron 3.5 Transcribe power a live voice agent?</p><p class="text-gray-600 leading-relaxed">Not on its own. It is built for recorded audio. A live phone agent also needs a real-time conversation model, low delay, interruption handling and an integration with your booking or customer system.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What is Salesforce Launa-Omni?</p><p class="text-gray-600 leading-relaxed">Launa-Omni is a voice model Salesforce announced on 19 October 2026 for real-time, two-way spoken conversation. Salesforce describes it as a text model adapted for audio, with a separate speech model for the reply.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Does it work in Nepali?</p><p class="text-gray-600 leading-relaxed">We have not confirmed that for either model. Language lists do not show quality on your callers, so test on recordings of your own calls before relying on any model for Nepali or mixed Nepali and English.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What is NVIDIA Nemotron 3.5 Transcribe?","@type":"Question","acceptedAnswer":{"text":"It is an open-weight speech model released on 28 October 2026 that transcribes recorded audio in 40 languages, can label different speakers and handles recordings up to an hour. NVIDIA states it is an offline model, not a real-time streaming service.","@type":"Answer"}},{"name":"Can Nemotron 3.5 Transcribe power a live voice agent?","@type":"Question","acceptedAnswer":{"text":"Not on its own. It is built for recorded audio. A live phone agent also needs a real-time conversation model, low delay, interruption handling and an integration with your booking or customer system.","@type":"Answer"}},{"name":"What is Salesforce Launa-Omni?","@type":"Question","acceptedAnswer":{"text":"Launa-Omni is a voice model Salesforce announced on 19 October 2026 for real-time, two-way spoken conversation. Salesforce describes it as a text model adapted for audio, with a separate speech model for the reply.","@type":"Answer"}},{"name":"Does it work in Nepali?","@type":"Question","acceptedAnswer":{"text":"We have not confirmed that for either model. Language lists do not show quality on your callers, so test on recordings of your own calls before relying on any model for Nepali or mixed Nepali and English.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Related Insights

- [AI Voice Agents for Appointment Booking: What They Do and When They Fit](/blog/ai-voice-agent-appointment-booking-what-it-is-and-when-it-fits/)
- [AI Chatbot vs AI Agent: Customer Support Automation for Your Business](/blog/ai-chatbot-vs-ai-agent-customer-support-automation-for-business/)
- [Open AI Models for Nepal: Nepali Language and Low Connectivity](/blog/open-ai-models-nepali-language-and-low-connectivity/)

## Sources

- TechCrunch, [Voice AI in vogue: Nvidia releases new open transcription model](https://techcrunch.com/2026/10/28/voice-ai-in-vogue-nvidia-releases-new-open-transcription-model/), October 28, 2026
- NVIDIA, [Nemotron 3.5 Transcribe model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B), Hugging Face, October 2026
- NVIDIA, [Nemotron Transcribe and Granary](https://huggingface.co/blog/nvidia/nemotron-transcribe-granary), Hugging Face blog, October 28, 2026
- Salesforce, [Meet Launa-Omni, Salesforce's Voice Model for Real-Time Conversation](https://www.salesforce.com/blog/launa-omni/), October 19, 2026

</div>
