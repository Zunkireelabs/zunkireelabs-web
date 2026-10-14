# AI Over Business Data: What the Spider 2.0 Benchmark Shows

URL: https://zunkireelabs.com/blog/ai-over-business-data-what-the-spider-2-benchmark-shows/
Published: 2026-10-05
Summary: Can AI answer questions from messy company databases? An ICLR 2025 benchmark of 632 real tasks shows the gap, who benefits and where it still fails.

**In short:** Asking a company database a question in plain English sounds solved, because older benchmarks showed models scoring above 90%. A 2024 paper accepted as an oral presentation at ICLR 2025, Spider 2.0, tested 632 tasks taken from real enterprise-style databases and found the best model it tried, o1-preview, solved 21.3%. The benchmark's public leaderboard now lists far higher scores for newer agent systems, but the lesson holds: messy schemas, documentation and multi-step queries are what make AI over business data hard.

## Key Takeaways

- Spider 2.0 has 632 text-to-SQL workflow problems built from real enterprise-level database use cases, per its authors.
- The authors report o1-preview solved 21.3% of tasks, against 91.2% on the older Spider 1.0 and 73.0% on BIRD.
- Databases in Spider 2.0 average 812 columns, versus 27 in Spider 1.0, and queries often need several steps and dialect-specific functions.
- The project's leaderboard now lists scores above 90% on one Spider 2.0 setting for newer agent systems. We did not verify how those entries were tested.
- The practical reading: AI can speed up analysis on well-documented data, but a person still needs to check the answers.

## The Evidence

The anchor is one peer-reviewed paper and the project page that keeps its results up to date.

- **Spider 2.0 paper, ICLR 2025 (oral).** Fangyu Lei, Tao Yu and colleagues published [Spider 2.0: Evaluating Language Models on Real-World Enterprise Text-to-SQL Workflows](https://arxiv.org/abs/2411.07763). It was submitted on November 12, 2024 and revised on March 17, 2025.
- **Spider 2.0 project page.** The [benchmark site](https://spider2-sql.github.io/) hosts the leaderboard and the release dates for the data.

Our reading below is based on the arXiv paper and the project page. We did not run the benchmark ourselves.

## What Does AI Do When You Ask a Database a Question?

The task is called text-to-SQL. A person asks a question such as "which products had falling sales last quarter," and the model writes the SQL query that pulls the answer out of the database. Early benchmarks used small, tidy databases. Spider 2.0 is built to look more like real work.

According to the paper, the 632 problems come from enterprise-level use cases. The databases are hosted on systems including BigQuery, Snowflake, SQLite, DuckDB, PostgreSQL and ClickHouse. They average 812 columns, against 27 in Spider 1.0. A typical query averages 144 tokens and uses about 7.1 specialized functions. The authors say that solving problems "frequently requires understanding and searching through database metadata, dialect documentation, and even project-level codebases."

In plain terms, the model has to find the right tables among hundreds of columns, read the documentation, and write several queries that fit together.

## What Changed?

**The gap was large in the paper.** The authors report that o1-preview solved 21.3% of Spider 2.0 tasks in their agent setting, Claude 3.5 Sonnet 14.9% and GPT-4o 12.3%. The authors contrast this with 91.2% on the older Spider 1.0 benchmark and 73.0% on BIRD.

**The leaderboard has moved since.** The project page lists top scores of 96.70 on the Spider 2.0-Snow setting (547 examples), 76.23 on Spider 2.0-Lite (547 examples), and 65.6 on Spider 2.0-DBT (68 examples). The leading entries are agent systems from named companies and groups, some using newer models such as Gemini 3 preview and GPT-5. The page also notes that all examples and gold answers were released on December 24, 2024. Our inference, not a finding from the sources: once answers are public, high scores need careful reading, because we cannot tell from the page how entries were checked.

What this shows is that the problem was not impossible, and that the progress came largely from systems built around the model, not from the model alone.

## Who Benefits?

**Analysts and business teams.** If the data is documented and the schema is clean, a model that drafts queries can save time on routine questions. This is the idea behind many "chat with your data" tools, and it connects to the shift we describe in [from dashboards to decisions](/blog/from-dashboards-to-decisions-the-future-of-business-intelligence/).

**Small companies without a data team.** They may gain the most from drafting help, but they are also the least likely to have the documentation the benchmark shows models need. That tension is our reasoning, not a finding.

## Where Does It Still Fall Short?

The paper's error analysis is specific about where models fail. The authors report these breakdowns:

- Erroneous data analysis, 35.5% of errors, including dialect functions and advanced calculations.
- Wrong schema linking, 27.6%, meaning picking the wrong tables or columns.
- JOIN errors, 8.3%.

They also report lower success on tasks with nested schemas (10.34% against 27.38% without nesting), tasks that need external documentation (11.54%), and dbt project tasks (12.82%). These figures come from the 2024-25 models the authors tested and are likely to have changed.

Other limits to keep in mind:

- **A benchmark is not your database.** Passing a test does not mean a model understands your column names, your business definitions or your exceptions.
- **A wrong answer can look right.** A query that runs and returns a number is not the same as a correct number.
- **Leaderboard entries vary.** Different settings, tools and models are compared on one page, and we did not check each submission.

## What Happens Next

This section is expectation, not fact. The direction is toward agents that read documentation, test their own queries and ask for clarification. For a business, the sensible steps are to document tables and metric definitions first, start with read-only access, keep a person responsible for numbers that drive decisions, and test any tool on your own questions before trusting it. If you plan to ground an assistant in your own documents, our guide to [building a RAG pipeline](/blog/how-to-build-rag-pipeline/) covers the retrieval side. For another example of data plus AI with a human check, see [how AI helps scientists find what humans could miss](/blog/ai-data-discovery-how-ai-helps-scientists-find-what-humans-miss/).

## The Short Version

Spider 2.0 showed that models which looked excellent on tidy benchmarks struggled with real enterprise databases: o1-preview solved 21.3% in the paper. Newer agent systems now post much higher scores on the project's leaderboard, though those results are not independently verified. Treat AI over business data as a fast first draft that needs clean documentation and a human check.

## FAQ

**What is the Spider 2.0 benchmark?**
Spider 2.0 is a test of 632 real-world text-to-SQL workflow problems taken from enterprise-level database use cases. It was published as a paper at ICLR 2025 and checks whether AI can write correct queries across large, messy databases hosted on systems like BigQuery and Snowflake.

**Can AI answer questions from my company database?**
Often for simple, well-documented data, but not reliably for complex ones. The Spider 2.0 authors found o1-preview solved 21.3% of their real-world tasks, and newer systems score higher on the leaderboard. A person should still check results that drive decisions.

**Why did models do so much worse on Spider 2.0 than on Spider 1.0?**
The databases are far bigger, averaging 812 columns against 27, and tasks need documentation, multiple queries and dialect-specific functions. The authors report that wrong schema linking and flawed data analysis were the largest error categories.

**How should a business prepare data for AI queries?**
The paper shows that models depend on metadata and documentation, so describing your tables, columns and metric definitions is a sensible first step. Start with read-only access and test the tool on questions whose answers you already know.

## Related Insights

- [How AI Helps Scientists Find What Humans Could Miss](/blog/ai-data-discovery-how-ai-helps-scientists-find-what-humans-miss/)
- [From Dashboards to Decisions: The Future of Business Intelligence](/blog/from-dashboards-to-decisions-the-future-of-business-intelligence/)
- [How AI and Data Help Predict Energy Demand and Run Power Grids](/blog/how-ai-and-data-help-predict-energy-demand-and-run-power-grids/)
- [How AI Is Changing Everyday Life: What Usage Data Shows](/blog/ai-everyday-life-what-the-usage-data-shows/)

## Sources

- Lei et al., [Spider 2.0: Evaluating Language Models on Real-World Enterprise Text-to-SQL Workflows](https://arxiv.org/abs/2411.07763), ICLR 2025 (oral), submitted November 12, 2024, revised March 17, 2025
- Spider 2.0 project, [benchmark and leaderboard page](https://spider2-sql.github.io/), accessed October 2026
