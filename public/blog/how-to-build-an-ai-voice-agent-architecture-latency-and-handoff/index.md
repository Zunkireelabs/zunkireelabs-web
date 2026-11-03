# How to Build an AI Voice Agent: Architecture, Latency and Handoff

URL: https://zunkireelabs.com/blog/how-to-build-an-ai-voice-agent-architecture-latency-and-handoff/
Published: 2026-11-03
Summary: How to build an AI voice agent: speech, model and tools pipeline, latency budget, barge-in, live booking, handoff and testing, with a build checklist.

**In short:** An AI voice agent is a real-time pipeline: audio comes in over a phone line, speech recognition turns it into text, a language model decides what to say and which tools to call, speech synthesis turns the reply into audio, and the system streams it back, all fast enough to feel like a conversation. The model is the easy part. The difficult engineering is the latency budget, handling interruptions, reading and writing live availability, and handing off to a person cleanly.

## Key Takeaways

- Build the pipeline around a **latency budget**. Callers tolerate a short pause, not a long one. Measure time to first audio on every change.
- **Streaming everywhere.** Stream audio in, stream partial transcripts to the model, stream tokens to speech synthesis. Waiting for each stage to finish is the main source of delay.
- **Barge-in** (the caller interrupting) must stop the agent talking immediately and update what it thinks it said.
- **The model must not decide what is bookable.** It calls a tool that returns real availability and can only offer what comes back. Bookings are transactional writes.
- **Design the handoff first.** Define when the agent stops, and pass the transcript and intent to the person who takes over.
- Test on **real calls**: noise, accents, interruptions, mixed languages and the names your callers say.

## The Pipeline

| Stage | Job | What goes wrong |
|---|---|---|
| Telephony | Receive and place calls, stream audio (for example through a provider such as Twilio) | Codec and jitter issues, dropped audio |
| Voice activity detection | Decide when the caller has started and stopped speaking | Cutting people off, or waiting too long |
| Speech to text | Transcribe the caller | Accents, noise, names, numbers |
| Language model | Decide the reply and whether to call a tool | Making up facts, drifting off task |
| Tools | Check availability, book, look up an order | Slow or failing systems, race conditions |
| Text to speech | Voice the reply | Robotic delivery, slow first audio |
| Orchestration | Manage turn-taking, state, retries, logs | Lost context, unhandled errors |

## Set a Latency Budget

Pick a target for the gap between the caller finishing a sentence and hearing the first word, then divide it across stages: end-of-speech detection, transcription finalisation, model time to first token, tool calls and synthesis. Measure each stage in production-like conditions, with real networks and real models. The common wins are:

- **Stream and overlap** stages instead of running them in sequence.
- **Keep prompts short** and cache what does not change. Long context slows the model.
- **Use fillers deliberately.** A short acknowledgement while a slow tool runs feels better than silence. Avoid fake typing sounds that mislead.
- **Run tools in parallel** where they do not depend on each other.
- **Place services close** to each other and to the telephony edge.

Do not trust a single figure from a vendor demo. Track the 50th and the 95th percentile, because the slow calls are the ones people remember.

## Turn-Taking and Barge-In

Natural conversation involves overlap. Your agent needs to:

1. Detect the caller speaking while audio is playing and stop playback within a fraction of a second.
2. Record what the caller actually heard, not the full planned reply, so the model's context matches reality.
3. Tell the difference between interruption and a short acknowledgement such as "mm-hm", which should not stop the agent.
4. Handle silence: prompt once, then offer another route.

## Tools, Availability and Booking

The agent's tools are where it becomes useful. Keep them narrow and well described:

- `check_availability(service, date_range, preferences)` returns slots that exist under your real rules: staff, rooms, equipment and durations. Our post on [complex availability in scheduling](/blog/understanding-complex-availability-in-scheduling/) explains why simple calendars are not enough.
- `create_booking(slot_id, customer)` is a transaction against the same system. If two callers race for the last slot, only one wins and the other hears alternatives.
- `reschedule` and `cancel` matter as much as new bookings.
- `send_confirmation` sends an SMS or email so the caller has it in writing.

Return structured results and let the model phrase them. Never let the model invent a time or price. If a tool fails, the agent should say so and offer a person.

## Handoff and Escalation

Write the stop conditions before writing prompts: caller frustration, a request outside scope, anything involving emergencies or complex payments, and two failed attempts to understand. On handoff, send the transcript, the detected intent and anything collected so far to the person or queue receiving the call, so the caller does not repeat themselves.

## Payments, Consent and Disclosure

Do not collect card numbers by voice. Send a payment link by SMS. Tell callers at the start that they are speaking to an automated system, and take your own legal advice on recording, consent and data retention where you operate, particularly for healthcare and financial calls.

## Testing a Voice Agent

- **Replay real calls** (with permission) through the pipeline and compare outcomes.
- **Scripted adversarial calls:** interruptions, changes of mind, two requests in one sentence, unclear numbers, out-of-scope questions.
- **Accents and languages:** test the ones your callers use. We deploy English and Nepali most, and test against recordings of real calls rather than assuming a language list is enough.
- **Outcome metrics:** bookings completed, handoffs, abandoned calls and caller corrections, alongside latency percentiles.
- **Regression suite:** keep a fixed set of calls and rerun it on each model or prompt change.

## How We Approach It

Our voice agents sit on top of Zennly, our own scheduling engine, so the agent can only offer slots the engine returns. The stack we use includes OpenAI and Anthropic models, Twilio for telephony, and Python with FastAPI, Redis and PostgreSQL on AWS. The agent says it is an AI at the start of the call. See our [AI voice agent development service](/solutions/voice-agent/) and the [Zennly case study](/resources/zenly-case-study/).

## Build Checklist

1. Write the target call types and the stop conditions.
2. Set a latency budget and instrument every stage.
3. Connect to live availability and make bookings transactional.
4. Implement barge-in and silence handling.
5. Build the handoff with transcript and intent.
6. Test on noisy, accented, interrupted real calls.
7. Launch on a slice of calls with a person watching, then widen.

## The Short Version

A voice agent that feels good is mostly engineering around the model: a streaming pipeline with a measured latency budget, correct turn-taking, tools that return real availability, and a graceful exit to a person. Get those right and the conversation takes care of itself.

For the buyer's view, read [AI voice agents for appointment booking](/blog/ai-voice-agent-appointment-booking-what-it-is-and-when-it-fits/) and our [voice AI agents whitepaper](/resources/voice-ai-agents-customer-support-whitepaper/).

## FAQ

**How do you build an AI voice agent?**
Connect a telephony provider to a streaming pipeline of speech recognition, a language model with tools and speech synthesis, then add turn-taking, a live-availability booking tool, a handoff to staff and thorough testing on real calls.

**What causes delay in an AI voice agent?**
Delay accumulates across end-of-speech detection, transcription, model response, tool calls and speech synthesis. Streaming each stage, keeping prompts short and running independent tools in parallel reduce it.

**How should a voice agent handle interruptions?**
It should stop speaking as soon as it detects the caller, record only what the caller actually heard, ignore short acknowledgements and handle silence with a prompt and an alternative route.

**Can an AI voice agent book into our existing system?**
It should read availability from and write bookings to the system you already use, through tools that return real data. A separate diary creates reconciliation problems.

**Should a voice agent take card payments?**
We would not recommend collecting card numbers over a voice agent. Sending a payment link by SMS is easier for the caller and safer.

**Does an AI voice agent work in Nepali?**
English and Nepali are what we deploy most. Quality depends on your callers' accents and vocabulary, so we test against recordings of real calls before committing to a language.

## Related Insights

- [AI Voice Agents for Appointment Booking: What They Do and When They Fit](/blog/ai-voice-agent-appointment-booking-what-it-is-and-when-it-fits/)
- [What Is an AI Receptionist? AI vs IVR vs Chatbots](/blog/what-is-an-ai-receptionist-ivr-vs-chatbot-vs-ai-receptionist/)
- [Voice AI in October 2026: Open Transcription and Real-Time Voice Models](/blog/nvidia-nemotron-transcribe-salesforce-launa-omni-voice-ai-what-changes/)

## Sources

- Zunkiree Labs, [AI Voice Agent Development](/solutions/voice-agent/)
- Zunkiree Labs, [Voice AI Agents for Customer Support whitepaper](/resources/voice-ai-agents-customer-support-whitepaper/)
