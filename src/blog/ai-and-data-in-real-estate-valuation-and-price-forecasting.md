---
title: "How AI and Data Are Changing Real Estate Valuation"
shortLabel: "AI in Real Estate"
translationKey: "ai-and-data-in-real-estate-valuation-and-price-forecasting"
description: "What automated valuation models do, what Zillow's 2021 forecasting loss and a US rule effective in 2025 show, where bias and data gaps remain, and Nepal's gaps."
date: 2026-10-05
lastUpdated: 2026-10-05
category: Insights
pillar: "future-of-industries"
tags:
  - Real Estate
  - Valuation Models
  - Proptech
readTime: 8
featuredImage: "/assets/images/blog/ai-and-data-in-real-estate-valuation-and-price-forecasting.svg"
featuredImageAlt: "Abstract gradient background"
ogType: article
---

<div class="container-custom py-12 md:py-20">

**In short:** Automated valuation models (AVMs) estimate what a property is worth from sales data, property features and location, and machine learning is now widely used for it. The strongest public evidence is not a benchmark but two real-world records: a 2021 company shutdown driven by the difficulty of forecasting home prices, and a US federal rule, effective October 1, 2025, that sets quality control standards for AVMs in mortgage lending. Both say the same thing: these models are useful inputs, but they need testing, uncertainty estimates and good data.

## Key Takeaways

- On November 2, 2021, Zillow Group said it would wind down Zillow Offers, recording a write-down of approximately $304 million and citing the unpredictability of forecasting home prices.
- Six US federal agencies issued a final rule on AVM quality control (issued June 24, 2024, effective October 1, 2025) that includes random sample testing and compliance with nondiscrimination laws.
- Researchers note that the machine learning models often used for house prices are limited in quantifying the uncertainty of each estimate.
- The Urban Institute has reported that AVMs can produce higher error as a percentage of value in majority-Black neighborhoods.
- In Nepal, a 2024 conference paper says sale prices are not public and transaction data is scarce, so data quality comes before modelling.

## The Evidence: What Do Real Records Show?

Instead of a single study, this article rests on three kinds of evidence.

**A company's own announcement.** On November 2, 2021, Zillow Group reported third-quarter results and its [plan to wind down Zillow Offers](https://investors.zillowgroup.com/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx), its business of buying and reselling homes. Zillow said it recorded "a write-down of inventory of approximately $304 million" because it had bought homes at higher prices than its current estimates of future selling prices, expected "an additional $240 million to $265 million of losses" in the fourth quarter, and would reduce its workforce by approximately 25%. Its chief executive Rich Barton said the company had "determined the unpredictability in forecasting home prices far exceeds what we anticipated".

**A regulator's rule.** The OCC, Federal Reserve Board, FDIC, NCUA, CFPB and FHFA issued a [final rule on quality control standards for automated valuation models](https://www.consumerfinance.gov/rules-policy/final-rules/quality-control-standards-for-automated-valuation-models/) on June 24, 2024. It was published in the Federal Register on August 7, 2024 and took effect on October 1, 2025.

**Academic research.** Hjort, Hermansen, Pensar and Williams, in [Uncertainty quantification in automated valuation models with spatially weighted conformal prediction](https://arxiv.org/abs/2312.06531) (submitted December 2023, revised January 2025), analyse housing market data from Oslo, Norway, and address a known drawback of machine learning price models: their limited ability to quantify prediction uncertainty.

## What Does the Technology Do?

The chain from data to valuation can be described in three steps:

1. **Data in.** Records of past sales, property characteristics such as size and age, and location. Some systems add other data, such as listing details or photos.
2. **Model.** A statistical or machine learning model, often a tree-based one, learns how those features relate to sale prices and applies that to a property it has not seen. Hjort and co-authors note that such non-parametric machine learning models are frequently used for house prices because of their predictive accuracy.
3. **Estimate out.** A single value, sometimes with a range. The range matters: the Oslo study found that standard conformal prediction, a method for producing confidence intervals, gave intervals that were oversized in some areas and undersized in others, and that weighting by location made the coverage more uniform.

An AVM values a property that exists today. Forecasting future prices or demand is a different and harder task, which is the lesson of the Zillow record above.

## What Changed?

Two things changed in the public record.

First, the cost of mistakes became visible. Zillow's 2021 filing ties a large write-down to buying homes at prices above its later estimates of resale value, and its chief executive named forecasting as the problem. This is Zillow's own account of its own business, not an independent study of valuation models in general.

Second, regulation arrived. Under the six-agency rule, institutions that use AVMs for credit decisions or securitization on mortgages for a consumer's principal dwelling must adopt "policies, practices, procedures, and control systems" so that AVMs adhere to quality control standards designed to ensure a high level of confidence in estimates, protect against manipulation of data, seek to avoid conflicts of interest, require random sample testing and reviews, and comply with applicable nondiscrimination laws.

## Who Benefits?

The sources reviewed here show AVMs in use by mortgage originators and secondary market participants (the scope of the federal rule) and by a large online property portal's own buying business (Zillow). They do not quantify savings in cost or time, so this article does not claim any.

The rule suggests who the safeguards are for: borrowers and the public, who depend on collateral values being reliable and free of discrimination. For organisations that use AVMs, the benefit is plausible but conditional on the testing and oversight the rule describes.

## Limitations and Open Questions

- **Forecasting is harder than valuing.** Zillow said price unpredictability exceeded its expectations. A model that estimates today's value well can still be a poor basis for buying at scale in a moving market.
- **Uncertainty is often missing.** Hjort and co-authors point out that popular machine learning models are limited in quantifying uncertainty, and that even a calibrated interval can be unevenly reliable across a city.
- **Fairness.** The Urban Institute's May 2022 report by Linna Zhu, Michael Neal and Caitlin Young says AVMs can produce racially disparate outcomes, namely higher error as a percentage of value in majority-Black neighborhoods. That is the authors' framing, and it is why the federal rule lists nondiscrimination compliance as a standard.
- **Data.** In Nepal, a 2024 FIG conference paper by Subash Ghimire, Danilo Ramos Antonio, Markus Kukkonen and Ganesh Prasad Bhatta says the valuation infrastructure is "institutionally fragmented", that "transaction sale prices remain undisclosed to the public albeit disclosed in deed documents", that there is "a significant shortage of true property transaction data", and that land registry and cadastral information systems "are not linked". It also says compensation valuations through a minimum valuation approach "typically falls significantly below actual market values".
- **Scope of the sources.** The rule covers US mortgage lending. It does not apply to other countries or uses.

## What Happens Next?

The US rule has been effective since October 1, 2025, so lenders and securitizers there are expected to have quality control processes in place. On the research side, work on uncertainty, such as the spatially weighted approach tested on Oslo data, points toward valuations that come with a range and a measure of reliability, not a single number.

For organisations considering AVMs or property analytics (our suggestion, not a finding of the sources):

1. **Start with the data.** Clean, linked records of transactions and parcels matter more than the choice of model.
2. **Ask for error and range.** Request accuracy measured on your own market and a confidence range, not just a headline figure.
3. **Test on a sample.** Compare estimates with real outcomes regularly, as the federal rule's random sample testing standard does.
4. **Check for bias.** Compare errors across neighborhoods and property types.
5. **Keep a person accountable.** Use an estimate as an input to a decision, not the decision.

## The Short Version

AI can estimate property values from past sales, features and location, and it is widely used. The public record shows the limits as clearly as the promise: Zillow wound down its home-buying business after citing the unpredictability of forecasting prices, and US regulators now require quality control, testing and nondiscrimination compliance for AVMs in mortgage lending. Where data is scarce, as in Nepal according to a 2024 paper, the first step is better data.

To see how this fits into AI adoption in Nepal, read our look at [AI adoption trends in Nepal for 2026](/blog/state-of-ai-nepal-2026/), or see how we work in [real estate](/industries/real-estate/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What is an automated valuation model (AVM)?</p><p class="text-gray-600 leading-relaxed">An automated valuation model is software that estimates a property's value from data such as past sales, property characteristics and location, without a person inspecting the property. Researchers note that machine learning models are now frequently used for this because of their predictive accuracy, but they are limited in quantifying how uncertain each estimate is.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Why did Zillow shut down Zillow Offers?</p><p class="text-gray-600 leading-relaxed">On November 2, 2021 Zillow Group said it would wind down Zillow Offers, its home-buying business, and cut about 25% of its workforce. Zillow said the unpredictability in forecasting home prices far exceeded what it had anticipated, and it recorded a write-down of approximately $304 million for homes bought at prices higher than its estimates of future selling prices.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Are there rules for AVMs used in mortgage lending?</p><p class="text-gray-600 leading-relaxed">In the United States, yes. Six federal agencies issued a final rule on quality control standards for AVMs, published in the Federal Register on August 7, 2024 and effective October 1, 2025. It covers mortgage originators and secondary market issuers that use AVMs to value a consumer's principal dwelling, and it requires policies for confidence in estimates, protection against data manipulation, avoiding conflicts of interest, random sample testing and compliance with nondiscrimination laws.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Could AVMs work in Nepal?</p><p class="text-gray-600 leading-relaxed">The data is the main obstacle. A 2024 conference paper on land and property valuation in Nepal says transaction sale prices are not public, though they appear in deed documents, that there is a significant shortage of true property transaction data, and that cadastral and land registry information systems are not linked. Models need that kind of data to learn from, so improving data comes first.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What is an automated valuation model (AVM)?","@type":"Question","acceptedAnswer":{"text":"An automated valuation model is software that estimates a property's value from data such as past sales, property characteristics and location, without a person inspecting the property. Researchers note that machine learning models are now frequently used for this because of their predictive accuracy, but they are limited in quantifying how uncertain each estimate is.","@type":"Answer"}},{"name":"Why did Zillow shut down Zillow Offers?","@type":"Question","acceptedAnswer":{"text":"On November 2, 2021 Zillow Group said it would wind down Zillow Offers, its home-buying business, and cut about 25% of its workforce. Zillow said the unpredictability in forecasting home prices far exceeded what it had anticipated, and it recorded a write-down of approximately $304 million for homes bought at prices higher than its estimates of future selling prices.","@type":"Answer"}},{"name":"Are there rules for AVMs used in mortgage lending?","@type":"Question","acceptedAnswer":{"text":"In the United States, yes. Six federal agencies issued a final rule on quality control standards for AVMs, published in the Federal Register on August 7, 2024 and effective October 1, 2025. It covers mortgage originators and secondary market issuers that use AVMs to value a consumer's principal dwelling, and it requires policies for confidence in estimates, protection against data manipulation, avoiding conflicts of interest, random sample testing and compliance with nondiscrimination laws.","@type":"Answer"}},{"name":"Could AVMs work in Nepal?","@type":"Question","acceptedAnswer":{"text":"The data is the main obstacle. A 2024 conference paper on land and property valuation in Nepal says transaction sale prices are not public, though they appear in deed documents, that there is a significant shortage of true property transaction data, and that cadastral and land registry information systems are not linked. Models need that kind of data to learn from, so improving data comes first.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Related Insights

- [EU AI Act: What Applies Now and What Was Delayed](/blog/eu-ai-act-what-applies-now-and-what-was-delayed/)
- [From Dashboards to Decisions: The Future of Business Intelligence](/blog/from-dashboards-to-decisions-the-future-of-business-intelligence/)
- [AI for Real Estate: capital raises for CRE sponsors](/industries/real-estate/)

## Sources

- Zillow Group, [Zillow Group Reports Third-Quarter 2021 Financial Results & Shares Plan to Wind Down Zillow Offers Operations](https://investors.zillowgroup.com/news-and-events/news/news-details/2021/Zillow-Group-Reports-Third-Quarter-2021-Financial-Results--Shares-Plan-to-Wind-Down-Zillow-Offers-Operations/default.aspx), November 2, 2021
- CFPB and other agencies, [Quality Control Standards for Automated Valuation Models](https://www.consumerfinance.gov/rules-policy/final-rules/quality-control-standards-for-automated-valuation-models/), final rule issued June 24, 2024, published August 7, 2024, effective October 1, 2025; also on [FHFA](https://www.fhfa.gov/regulation/federal-register/final-rule/quality-control-standards-for-automated-valuation-models) (89 FR 64538)
- A. Hjort, G. H. Hermansen, J. Pensar and J. P. Williams, [Uncertainty quantification in automated valuation models with spatially weighted conformal prediction](https://arxiv.org/abs/2312.06531), arXiv, submitted December 11, 2023, revised January 30, 2025
- L. Zhu, M. Neal and C. Young, [Revisiting Automated Valuation Model Disparities in Majority-Black Neighborhoods](https://newslink.mba.org/mba-newslinks/2022/may/mba-newslink-tuesday-may-24-2022/revisiting-automated-valuation-model-disparities-in-majority-black-neighborhoods/), Urban Institute, May 2022 (summary as reproduced by MBA Newslink)
- S. Ghimire, D. R. Antonio, M. O. Kukkonen and G. P. Bhatta, [Land and Property Valuation in Nepal](https://www.fig.net/resources/proceedings/fig_proceedings/nepal/papers/ts02c/TS02C_ghimire_antonio_et_al_12889_abs.pdf), FIG Regional Conference 2024 - Nepal, November 14-16, 2024

</div>
