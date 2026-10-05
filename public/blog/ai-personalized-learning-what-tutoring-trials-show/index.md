# AI Tutoring and Personalized Learning: What the Trials Show

URL: https://zunkireelabs.com/blog/ai-personalized-learning-what-tutoring-trials-show/
Published: 2026-10-05
Summary: Three recent AI tutoring trials found real learning gains when the tutor was designed well, and harm when it was not. The evidence and what is unknown.

**In short:** The strongest recent evidence on AI and personalized learning comes from controlled trials, and it points two ways. A Harvard physics trial found students learned more in less time with a carefully designed AI tutor than in an active-learning class. A trial with nearly 1,000 high school students in Turkey found that unrestricted GPT-4 access left students worse off once it was removed, while a version with built-in guardrails largely avoided that harm. The design of the tutor, not the presence of AI, decides the outcome.

## Key Takeaways

- A randomized crossover trial at Harvard (194 students analysed) found students learned significantly more in less time with an AI tutor than in an in-class active-learning lesson.
- That tutor was built on research-based teaching principles and pre-written step-by-step solutions. A general chatbot prompt was not enough to scaffold multi-part problems, according to the authors.
- In a PNAS field experiment with nearly 1,000 high school math students, students with unguarded GPT-4 access did 17% worse on a later exam without it than students who never had access. Guardrails largely removed the harm.
- A World Bank pilot in Nigeria reports about 0.3 standard deviations of gain after six weeks of teacher-supported, after-school AI tutoring, though it is a blog summary, not a peer-reviewed paper.
- None of these studies shows AI replacing teachers, and none was run in Nepal.


## The Evidence

Three studies give a useful picture. Each one is a real experiment, and they do not all say the same thing.

**Harvard physics (Scientific Reports, June 2025).** Kestin, Miller, Klales, Milbourne and Ponti ran a randomized crossover trial in an introductory physics course for life-science majors. [The paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/) analysed 194 students (233 were enrolled). Over two consecutive weeks, each student learned one topic (surface tension) through in-class active learning and the other (fluid flow) through an at-home AI tutor, so every student served as their own comparison. The authors report a median post-test score of 4.5 for the AI tutor against 3.5 for the active-learning lesson, learning gains more than twice as large, and a statistical result of p < 10^-8. They estimate an effect of about 0.63 standard deviations in a linear regression. Students also rated the AI lesson higher for engagement (4.1 against 3.6 on a five-point scale) and motivation (3.4 against 3.1), with no significant difference in enjoyment or growth mindset. The median time with the tutor was 49 minutes, and the authors conclude students learned more in less time. A [Harvard Gazette report](https://news.harvard.edu/gazette/story/2024/09/professor-tailored-ai-tutor-to-physics-course-engagement-doubled/) from September 2024 describes the same study.

**High school math in Turkey (PNAS, 2025).** Bastani and colleagues ran [a field experiment](https://ideas.repec.org/a/nas/journl/v122y2025pe2422633122.html) with nearly 1,000 high school math students, comparing a standard ChatGPT-style interface ("GPT Base") with a version whose prompts were designed to safeguard learning ("GPT Tutor"). Performance during practice improved with AI access. But when access was taken away, students who had used GPT Base performed worse than students who never had access, with a 17% reduction in grades. The authors report that the GPT Tutor version largely mitigated this harm, and describe unrestricted GPT-4 as a "crutch" during practice.

**Nigeria after-school pilot (World Bank, January 2025).** In a [blog post](https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria), the World Bank team describes a six-week after-school program in Benin City, Edo State, in mid-2024, in which generative AI was used to support learning with teacher support. They report learning improvements of about 0.3 standard deviations, which they describe as "equivalent to nearly two years of typical learning in just six weeks". They note that girls, who were initially lagging boys, seemed to gain even more, and that their evaluation design likely underestimated the true impact. This is the weakest of the three sources: it is the authors' own summary of a pilot, and the post does not give sample sizes.

## What Does the Technology Do?

At a high level, personalized learning follows a simple chain: **learning data, then a model, then an adapted path.**

- **Data.** The tutor sees what the student writes, where they get stuck and what they answer. In the Harvard study, pre-tests and post-tests measured what students knew before and after.
- **Model.** A large language model reads that input and responds. What matters is how it is steered. The Harvard tutor used the GPT API with instructor-written, question-specific prompts, pre-written step-by-step solutions and a structure that guided students through each part of a problem. The authors note that "a system prompt could not reliably provide enough structure to scaffold problems with multiple parts."
- **Adapted path.** The tutor gives feedback and hints at the student's own pace, instead of the whole class moving at one speed. Students can ask the questions they might not ask in front of a room.

The Turkish experiment shows the other side of the same technology. A tutor that hands over answers produces better practice scores and worse learning. The Harvard authors list seven design principles, among them active learning, managing cognitive load, accurate solutions, timely feedback and self-pacing. The pattern across both studies is that the pedagogy built into the tutor matters more than the model behind it.

## What Changed?

Until recently, one-to-one tutoring was the gold standard, but it was too expensive to give to every student. What has changed is that a tutor can now be available at any hour and respond to a student's own words, and that researchers are now measuring it in randomized trials, not only in demos. The Harvard paper's claim is a modest one: under specific conditions, the AI tutor beat a well-designed classroom lesson on a short topic. It does not claim that AI tutoring beats classrooms in general.

## Who Benefits?

- **Students in mixed-ability classes.** A Harvard instructor quoted by the Gazette said that in a heterogeneous class, "students who have a very strong background may be bored, and those without struggle to keep up." A self-paced tutor can serve both groups.
- **Students with little access to tutoring.** The Nigerian pilot targeted a setting where extra instruction is scarce, and the World Bank team reports gains there. Treat that as an encouraging early signal, not a settled result.
- **Teachers.** In the Nigerian program teachers guided the sessions, and the Harvard authors position AI as something that should not replace in-person instruction. The benefit described is more time and tools for teachers, not fewer teachers.

## What Are the Limitations and Open Questions?

- **Short and narrow.** The Harvard study covered two weeks, two topics and one course, with a high-achieving student population and expert instructors. The authors write that they do not presume structured AI tutoring will always beat in-class active learning, for example where complex synthesis and higher-order critical thinking are needed.
- **Context-dependent.** The authors list conditions that may matter: a heterogeneous class, quality instructional videos, a capable model, expert-written prompts and a carefully structured framework. Take any of those away and the result may change.
- **Over-reliance.** The Turkish trial is the clearest warning. Students who could get answers on demand did worse without help. The harm was largely avoided with guardrails, which shows it is a design problem as well as a risk.
- **Equity and access.** Gains depend on devices, connectivity, language and teachers who know how to use the tools. None of the three studies answers who is left out.
- **Student data and privacy.** An AI tutor works on what students write. The studies above do not examine privacy, so schools need to ask their own questions about what is collected, where it goes and who can see it.
- **Long-term effects.** The World Bank team lists long-term effects as unknown, and the Harvard and Nigerian studies are short. We do not yet know whether the gains last.

## What Happens Next?

This is not a prediction. It is a list of what to watch and what to ask.

- **Look for the design, not the label.** When a school or EdTech vendor says "AI tutor", ask whether it gives hints and structured steps or just answers, and whether it was tested against a comparison group.
- **Look for longer, larger, independent trials.** The strongest next evidence would be multi-term studies across subjects, ages and countries, ideally with results published in peer-reviewed journals.
- **Pilot with teachers in the loop.** The most defensible approach in the current evidence is AI as a supervised tutor with limits on answer-giving, plus a test without AI access to check real learning.
- **Measure what matters.** Check performance without the tool, as the Turkish study did, not only scores while using it.

For a Nepal or South Asia school or training provider, the conditions in these studies, large mixed-ability classes and scarce one-to-one help, look familiar. But none of the three trials took place in Nepal, so the right step is a small, measured local pilot. For more on local adoption, see our [AI adoption trends in Nepal](/blog/state-of-ai-nepal-2026/).

## The Short Version

Personalized learning with AI is no longer only a promise: there are controlled trials, and they show real gains when the tutor is built around how people learn, and real harm when it simply hands out answers. The sensible response is neither hype nor rejection. It is to ask how the tutor was designed, what it was compared against, and whether learning holds up when the tool is taken away.

## FAQ

**Does AI tutoring actually improve learning?**
It can, under the right design. A randomized crossover trial at Harvard (194 students analysed) found students learned significantly more in less time with a carefully designed AI tutor than in an active-learning class. A PNAS field experiment with nearly 1,000 students found unrestricted GPT-4 access harmed later performance. The design of the tutor decides the result.

**Can students get worse by using AI to study?**
Yes, if the AI just supplies answers. In the PNAS study, students who used a standard ChatGPT-style interface for practice scored 17% lower than students who never had AI access once the AI was removed. A version with guardrails largely mitigated the harm.

**Will AI tutors replace teachers?**
None of these studies supports that. The Nigerian program used teacher-supported sessions, and the Harvard researcher quoted in the Harvard Gazette said AI tutors should not replace in-person instruction. The evidence supports AI as a supervised supplement.

**What should a school ask before adopting an AI tutor?**
Ask how it is designed (hints and steps versus answers), whether it was tested against a comparison group, whether performance is checked without the tool, and what student data it collects and where that data goes.

## Related Insights

- [AI Trends and Predictions for 2026: What Lies Ahead](/blog/ai-trends-and-predictions-for-2026-what-lies-ahead/)
- [AI Adoption Trends in Nepal for 2026: Key Insights](/blog/state-of-ai-nepal-2026/)
- [OECD on AI in Education: Performance Is Not Learning](/blog/oecd-digital-education-outlook-2026-ai-performance-not-learning/)
- [AI and Teacher Workload: What the Gallup Survey Shows](/blog/ai-teacher-workload-what-the-gallup-survey-shows/)

## Sources

- Kestin, Miller, Klales, Milbourne and Ponti, [AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/), Scientific Reports, June 2025
- Harvard Gazette, [Professor tailored AI tutor to physics course. Engagement doubled](https://news.harvard.edu/gazette/story/2024/09/professor-tailored-ai-tutor-to-physics-course-engagement-doubled/), September 5, 2024
- Bastani, Bastani, Sungu, Ge, Kabakcı and Mariman, [Generative AI without guardrails can harm learning: Evidence from high school mathematics](https://ideas.repec.org/a/nas/journl/v122y2025pe2422633122.html), Proceedings of the National Academy of Sciences, vol. 122, no. 26, 2025
- World Bank Blogs, [From chalkboards to chatbots: Transforming learning in Nigeria, one prompt at a time](https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria), January 9, 2025
