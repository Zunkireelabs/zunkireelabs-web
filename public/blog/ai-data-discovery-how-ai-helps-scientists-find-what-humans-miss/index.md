# How AI Helps Scientists Find What Humans Could Miss

URL: https://zunkireelabs.com/blog/ai-data-discovery-how-ai-helps-scientists-find-what-humans-miss/
Published: 2026-10-05
Summary: A May 2026 Nature paper shows Google's AI writing expert-level scientific software. The evidence, who benefits, and the limits scientists point out.

**In short:** In May 2026, Google researchers published in Nature a system called ERA that uses a language model and tree search to write and improve scientific software, and on the benchmarks it was tested on it outperformed existing methods. It shows how data, a clear score and AI can surface solutions humans might never test. It does not replace scientific judgment, because a better prediction is not the same as an explanation.

## Key Takeaways

- The evidence is a peer-reviewed Nature paper (May 2026) from Google Research and Google DeepMind, co-led by Michael Brenner of Harvard and Google.
- ERA combines a Gemini language model, tree search and a numerical score to generate and refine code on tasks where success can be measured.
- Reported results include 40 new single-cell RNA-seq integration methods and 14 COVID-19 hospitalization forecasting models that beat the CDC's CovidHub Ensemble.
- The authors say optimizing predictive models is not the same as full scientific discovery, and a separate Nature Communications perspective argues that a prediction is not an explanation.

## The Evidence: What Did the Researchers Actually Publish?

The anchor for this article is a paper titled *An AI system to help scientists write expert-level empirical software*, published in [Nature](https://www.nature.com/articles/s41586-026-10658-6) in May 2026. According to [Google Research](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/), it describes a system called Empirical Research Assistance, or ERA, built by researchers at Google Research and Google DeepMind. [TechXplore](https://techxplore.com/news/2026-05-ai-automates-scientific-software-outperforming.html) reports that the work was co-led by Michael Brenner of Harvard SEAS and Google, and Shibl Mourad of Google DeepMind.

The figures below are as reported by Google Research and by coverage of the paper. We did not have access to the full text of the Nature paper, so check the paper itself for methods and exact numbers before relying on them.

- **Genomics.** ERA reportedly discovered 40 new methods for integrating single-cell RNA sequencing data. Google says the top solution improved on ComBat, the best previously published method, by 14% on the OpenProblems V2.0.0 benchmark, which combines 13 metrics.

- **Public health.** ERA reportedly generated 14 models that outperformed the CDC's CovidHub Ensemble at forecasting COVID-19 hospitalizations, scored across 52 jurisdictions and four forecast horizons. TechXplore reports a mean weighted interval score of 26 against 29 for the ensemble, where lower is better.

- **Mathematics.** In numerical integration, Google reports that ERA's method correctly evaluated 17 of 19 held-out integrals where standard scipy methods failed.

- **Neuroscience.** Google reports state-of-the-art results on the Zebrafish Activity Prediction Benchmark, which involves predicting the activity of more than 70,000 neurons.

## What Does the Technology Do?

In plain language, the chain is **data, then a score, then search, then a candidate method.** A scientist supplies a problem description, a way to score answers, and training and evaluation data. ERA then uses a Gemini language model to propose code, including reproductions and recombinations of methods from papers and textbooks, and tree search to decide which variants to improve next. [Google describes](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/) the search as inspired by AlphaZero. Each candidate is scored, and the best ones are rewritten again in a loop.

The key condition is a **scorable task**: a problem whose success can be expressed as a number. That is what lets the system try thousands of ideas without a person judging each one. Brenner told reporters that recombining ideas this way can find "needle-in-a-haystack" solutions that human researchers might never get to test, and Google says it can cut the time to explore a set of ideas "from months to hours or days".

## What Changed?

The change is less about one clever answer and more about **how much of the search space gets explored.** A researcher can try a handful of approaches in a week. A system that writes, runs and scores code can try far more, then hand the best candidates back for a person to inspect.

That moves effort from writing every variant by hand to defining the problem and the score well, and then checking what comes back. A second 2026 paper, a perspective in [Nature Communications](https://techxplore.com/news/2026-09-ai-hidden-patterns-testable-scientific.html) by Gianmarco Mengaldo, Ricardo Vinuesa and Steve Brunton, describes a related approach: use explainable AI to find what drove a model's prediction, turn that into a hypothesis, and then test it through experiments, simulations or established principles. In one example, researchers used it to find airflow patterns that most affected drag in turbulence and then designed changes to those patterns.

## Who Benefits?

- **Research teams** with data and a well-defined metric, such as a benchmark, a forecast error or a fit score, can explore more ideas in the time they have.

- **Public-health and forecasting groups** can compare many model variants against an established baseline quickly.

- **Smaller organizations** may benefit most indirectly. In our view, the same pattern of clean data, one clear score and an AI search that proposes options applies to business problems such as demand forecasting or route planning, including for companies in Nepal and South Asia. That is our reading of the approach, not a result from the paper.

## Limitations and Open Questions

- **It only works where success is a number.** The authors say optimizing empirical predictive models "is not the same as full scientific discovery, which also requires reasoning about mechanisms, causal relationships, theories, and mathematical frameworks", according to TechXplore.

- **A prediction is not an explanation.** The Nature Communications authors put it directly: an AI pattern may reflect a real physical process or only a statistical correlation in the training data, so it must be tested before it counts as an explanation.

- **Humans still verify.** Researchers quoted in coverage say human expertise remains essential for checking and interpreting results.

- **Safety.** The authors also raise broader risks if such systems lower the expertise barrier for deploying advanced computational models in sensitive areas.

- **Benchmarks are not the real world.** Beating a benchmark or a published ensemble is evidence, but it is not proof that the same method will hold up on new data or in practice.

## What Happens Next?

We have not seen a confirmed public release date for ERA, so treat availability as an open question. What to watch is not a single headline number but three things: independent replication of the results, how well methods found this way hold up on new data, and whether the explainable-AI step becomes routine so that discoveries come with a testable reason.

For readers, the practical takeaway is that AI is becoming a tool for exploring large spaces of options. The value depends on how well a person defines the question, the data and the score. For a broader look at how capable AI is being discussed, see our explainer on [superintelligence](/blog/what-is-superintelligence-and-why-is-it-called-that/).

## The Short Version

A May 2026 Nature paper from Google researchers reports that an AI system, ERA, wrote and refined scientific software that beat expert-built methods on benchmarks in genomics, public health, mathematics and neuroscience. It works where success can be scored as a number. The reported results are strong, but they show better prediction and faster search, not scientific understanding, and humans still have to test, explain and decide.

## FAQ

**How is AI helping scientists make discoveries?**
In one 2026 Nature paper, Google researchers describe a system called ERA that uses a language model and tree search to write and improve scientific software, scored against a numerical measure. It reportedly beat expert-built methods on several benchmarks.

**What did the ERA system actually find?**
Google reports 40 new methods for integrating single-cell RNA sequencing data, with the top one 14% better than ComBat on a benchmark, and 14 COVID-19 hospitalization forecasting models that outperformed the CDC CovidHub Ensemble. These are reported figures from Google Research and coverage of the paper.

**Does this mean AI can replace scientists?**
No. The authors say optimizing predictive models is not the same as full scientific discovery, which also requires reasoning about mechanisms, causes and theories. Researchers still define the problem, check results and interpret them.

**What is the limit of this approach?**
It needs a scorable task, meaning one where success can be measured as a number, and a prediction is not an explanation. A Nature Communications perspective argues that AI patterns must be tested through experiments or simulations before they count as scientific explanations.

## Related Insights

- [What Is Superintelligence and Why Is It Called That?](/blog/what-is-superintelligence-and-why-is-it-called-that/)
- [Anthropic, OpenAI, Google in Enterprise: Who Is Winning?](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/)
- [AI Coding Agents in 2026: How Developers Actually Work Now](/blog/ai-coding-agents-2026-how-developers-actually-work-now/)
- [AI Over Business Data: What the Spider 2.0 Benchmark Shows](/blog/ai-over-business-data-what-the-spider-2-benchmark-shows/)
- [AI Training Data Quality: What Model Collapse Research Shows](/blog/ai-training-data-quality-what-model-collapse-research-shows/)

## Sources

- Nature, [An AI system to help scientists write expert-level empirical software](https://www.nature.com/articles/s41586-026-10658-6), May 2026 (paper page; full text not reviewed)
- Google Research, [Accelerating scientific discovery with AI-powered Empirical Research Assistance](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/), September 9, 2025, updated April 29, 2026
- TechXplore, [AI system automates scientific software design, outperforming human-written code in key benchmarks](https://techxplore.com/news/2026-05-ai-automates-scientific-software-outperforming.html), May 20, 2026
- TechXplore, [Explainable AI could help turn hidden data patterns into testable scientific hypotheses](https://techxplore.com/news/2026-09-ai-hidden-patterns-testable-scientific.html), September 2026, reporting a perspective in Nature Communications published August 6, 2026
