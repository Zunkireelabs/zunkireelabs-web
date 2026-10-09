---
title: "Real-Time Data and AI Make Transport More Efficient"
shortLabel: "AI in Transport"
translationKey: "real-time-data-and-ai-in-transportation-traffic-logistics-routing"
description: "Traffic-signal AI from Google and UPS's ORION routing show what real-time data can save in transport, and where cities and fleets say the limits are."
date: 2026-10-05
lastUpdated: 2026-10-05
category: Insights
pillar: "future-of-industries"
tags:
  - Transportation
  - Logistics
  - Traffic Management
readTime: 8
featuredImage: "/assets/images/blog/real-time-data-and-ai-in-transportation-traffic-logistics-routing.svg"
featuredImageAlt: "Abstract gradient background"
ogType: article
---

<div class="container-custom py-12 md:py-20">

**In short:** Transport systems now produce a constant stream of data, from phone location traces to delivery-stop records, and AI can use it to time traffic lights and plan delivery routes. Google says its Project Green Light recommendations can reduce stops at intersections by up to 30%, and UPS reports that its ORION routing system had saved $320 million by the end of 2015. Both claims come from the organisations that built the tools, both involve trade-offs, and in both cases people still make the final call.

## Key Takeaways

- Google's Project Green Light uses anonymized Google Maps driving trends to suggest traffic-signal timing changes to city engineers, and Google says it has reported results of up to 30% fewer stops and up to 10% lower intersection emissions.
- Google says those numbers are estimated from early data and an emissions model that uses a single vehicle type, so they are not measured savings for every city.
- UPS's ORION plans a route for each of about 55,000 US drivers; its developers report $320 million in cumulative savings by December 2015 against a $295 million development cost.
- Scientific American reports independent concerns: tests mostly at simpler intersections, outdated baseline timing plans, and little attention to buses, bikes and pedestrians.
- In both systems, humans decide: city engineers apply or reject each recommendation, and some UPS drivers still beat the algorithm.

## The Evidence: Two Real Systems, Two Very Different Settings

This article looks at two documented cases. The first is [Project Green Light](https://blog.google/company-news/outreach-and-initiatives/sustainability/google-ai-reduce-greenhouse-emissions-project-greenlight/), announced by Google on October 10, 2023. At that point it was live at 70 intersections in 12 cities, including Bangalore, Hyderabad, Kolkata, Jakarta, Hamburg, Manchester, Seattle and Rio de Janeiro. In May 2025 Google [said](https://blog.google/outreach-initiatives/sustainability/project-green-light-boston-expansion/) the programme was live in 18 cities, including 114 intersections in Boston.

The second is UPS's ORION (On-Road Integrated Optimization and Navigation). Its developers describe it in a peer-reviewed paper, [UPS Optimizes Delivery Routes](https://doi.org/10.1287/inte.2016.0875), by Chuck Holland, Jack Levis, Ranganath Nuggehalli, Bob Santilli and Jeff Winters, published in *Interfaces* (INFORMS) in 2017 after UPS won the 2016 Franz Edelman Award.

## What Does the Technology Do?

**Traffic signals (Project Green Light).**

1. **Data in.** Google uses aggregated, anonymous driving trends from Google Maps, with vehicles acting as mobile sensors, so a city does not need new roadside sensors.
2. **Model.** The system infers how an intersection's lights are currently timed and builds a model of the traffic flow around it.
3. **Recommendation out.** It shares suggested timing changes with city engineers, who can apply them through existing systems, in Google's words in as little as five minutes.

**Delivery routes (ORION).**

1. **Data in.** The packages to be picked up and delivered that day, customer time windows, and the map.
2. **Model.** A fast heuristic solves a version of the travelling-salesman problem with time windows for each driver's day. The paper says it is built to give each route a consistent feel from day to day, so drivers are not surprised by constant changes.
3. **Route out.** An optimized stop order for each of the roughly 55,000 US drivers, who make about 140 to 160 stops a day.

## What Changed?

ORION's developers say it took nearly ten years to develop, and that it followed an earlier UPS planning toolkit that they say had reduced annual travel by 85 million miles by 2011. Project Green Light, by contrast, began as a research effort and, per Google, started with tests in 2022 and 2023.

The reported results are:

- **Project Green Light:** Google says "up to 30% reduction in stops and up to 10% reduction in emissions". It states that these reductions are estimated, not directly measured, that the emissions figure uses a Department of Energy model with a single fuel-based vehicle type, and that results are averaged and "subject to variation".
- **ORION:** the paper reports total development and deployment cost of $295 million, cumulative savings of $320 million as of December 2015, and a projected annual reduction of 100 million miles driven, with savings of $300 million to $400 million a year at full deployment. It also reports a projected 10 million gallon fuel reduction and 100,000 metric tons less CO2 a year. UPS says an analysis group that reports to its chief financial officer and is not a stakeholder in the project estimated and verified the financial benefits.

## Who Benefits?

- **Drivers and residents.** Fewer stops at a junction can mean less idling, and Google says pollution at intersections can be up to 29 times higher than on open roads.
- **City governments.** Google offers Green Light to partner cities at no cost during what it calls an early research phase, and implementation uses existing equipment.
- **Fleet operators.** ORION's savings show up as fewer miles and less fuel, though the system was a very large, multi-year investment.
- **Employees.** The ORION paper says some drivers feel it has made their jobs safer, because they no longer have to work out the delivery sequence while driving.

## Limitations and Open Questions

- **Modeled, not measured.** Google's own notes say the stop and emission reductions come from early data and a model. Boston's rollout was described as potential, not confirmed results.
- **Independent concerns.** [Scientific American](https://www.scientificamerican.com/article/googles-project-green-light-uses-ai-to-take-on-city-traffic/) reports that the tool optimizes mainly for car stops, avoids the most complex intersections with buses, bikes or heavy pedestrian traffic, and is often tested where old fixed-time signals make gains easier. It also reports that Seattle reverted at least one recommendation that "did not result in a net benefit" and that engineers in Manchester often ignored suggestions that conflicted with bus priority. We could not see the article's publication date on the page we read.
- **Faster is not always better.** The same article reports the criticism that congestion causes only a small share of US transportation emissions, and that faster driving may even increase overall fuel consumption.
- **Humans in the loop.** ORION's authors write that it is "not as good as it can be", that some drivers can do better, and that a small percentage of drivers and managers still do not like it.
- **Scale and cost.** ORION took nearly ten years and $295 million. A small fleet cannot copy that, though off-the-shelf routing tools exist.
- **Not about Kathmandu.** Neither source evaluates Nepal. Kolkata, Bangalore and Hyderabad are on Google's list of Green Light cities, but we found no published Green Light results for Kathmandu.

## What Happens Next?

Google reports that Green Light grew from 70 intersections in 12 cities in 2023 to 18 cities by May 2025, and says it expects its estimates to evolve as more data comes in. Autonomous vehicles add a separate question, which we cover in our look at [California's robotaxi law](/blog/robotaxis-first-responders-california-law-future-of-autonomous-systems/).

For a city or fleet considering similar tools, a practical reading of this evidence (our suggestion, not a finding of the sources) is:

1. **Ask for the baseline.** Improvement over a 20-year-old fixed timing plan means less than improvement over a well-tuned one.
2. **Separate measured from modeled.** Ask which numbers came from field counts and which from simulation.
3. **Count every road user.** Check how buses, cyclists and pedestrians are treated, not just car stops.
4. **Pilot, then scale.** Start with a few intersections or routes, measure before and after, and keep a named person accountable for each change.

## The Short Version

AI can help transport systems use real-time data: Google's Project Green Light suggests signal timings from Maps traffic patterns, and UPS's ORION plans delivery routes for tens of thousands of drivers. The published gains are real enough to take seriously, but the headline figures come from the builders, are partly modeled, and depend on the baseline. The strongest lesson is that these systems work as decision support for engineers and drivers, not as a replacement for them.

To see how everyday AI use is spreading, read [what the usage data actually shows](/blog/ai-everyday-life-what-the-usage-data-shows/), or see our overview of [AI adoption in Nepal](/blog/state-of-ai-nepal-2026/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Can AI really reduce traffic stops at intersections?</p><p class="text-gray-600 leading-relaxed">Google says its Project Green Light recommendations can reduce stops by up to 30% and intersection emissions by up to 10%. Google also says these figures are estimated from early before-and-after data and modeled with a single vehicle type, so they are projections that vary by intersection, not guaranteed results.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">How much did UPS save with its ORION routing system?</p><p class="text-gray-600 leading-relaxed">A 2017 paper by UPS's own team reports that ORION cost $295 million to develop and deploy, had produced cumulative savings of $320 million by December 2015, and at full deployment is projected to cut 100 million miles driven and save $300 to $400 million a year. UPS says an internal group independent of the project verified the benefits.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Do AI traffic and routing tools replace human planners?</p><p class="text-gray-600 leading-relaxed">No. In Project Green Light, city engineers decide whether to apply each recommendation, and Scientific American reports Seattle reverted at least one that did not help. UPS's authors write that some drivers still do better than ORION and that a small percentage of drivers and managers still dislike it.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What should a city or fleet check before adopting these tools?</p><p class="text-gray-600 leading-relaxed">Ask what the baseline was, whether results were measured or modeled, and whether the tool accounts for buses, cyclists and pedestrians. Start with a few intersections or routes, measure before and after, and keep a person responsible for each change.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Can AI really reduce traffic stops at intersections?","@type":"Question","acceptedAnswer":{"text":"Google says its Project Green Light recommendations can reduce stops by up to 30% and intersection emissions by up to 10%. Google also says these figures are estimated from early before-and-after data and modeled with a single vehicle type, so they are projections that vary by intersection, not guaranteed results.","@type":"Answer"}},{"name":"How much did UPS save with its ORION routing system?","@type":"Question","acceptedAnswer":{"text":"A 2017 paper by UPS's own team reports that ORION cost $295 million to develop and deploy, had produced cumulative savings of $320 million by December 2015, and at full deployment is projected to cut 100 million miles driven and save $300 to $400 million a year. UPS says an internal group independent of the project verified the benefits.","@type":"Answer"}},{"name":"Do AI traffic and routing tools replace human planners?","@type":"Question","acceptedAnswer":{"text":"No. In Project Green Light, city engineers decide whether to apply each recommendation, and Scientific American reports Seattle reverted at least one that did not help. UPS's authors write that some drivers still do better than ORION and that a small percentage of drivers and managers still dislike it.","@type":"Answer"}},{"name":"What should a city or fleet check before adopting these tools?","@type":"Question","acceptedAnswer":{"text":"Ask what the baseline was, whether results were measured or modeled, and whether the tool accounts for buses, cyclists and pedestrians. Start with a few intersections or routes, measure before and after, and keep a person responsible for each change.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Related Insights

- [California's Robotaxi Law: What It Means for Autonomous AI](/blog/robotaxis-first-responders-california-law-future-of-autonomous-systems/)
- [Why AI Agents Are Getting Their Own Infrastructure](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [Predictive Maintenance: How Sensor Data and AI Predict Failures](/blog/predictive-maintenance-how-sensor-data-and-ai-predict-failures/)
- [How AI and Data Help Predict Energy Demand and Run Power Grids](/blog/how-ai-and-data-help-predict-energy-demand-and-run-power-grids/)

## Sources

- Google, [Project Green Light's work to reduce urban emissions using AI](https://blog.google/company-news/outreach-and-initiatives/sustainability/google-ai-reduce-greenhouse-emissions-project-greenlight/), October 10, 2023
- Google Research, [Project Green Light](https://sites.research.google/greenlight/), project page (free to partner cities in its early research phase)
- Google, [Project Green Light expands in Boston](https://blog.google/outreach-initiatives/sustainability/project-green-light-boston-expansion/), May 22, 2025
- Scientific American, [Google's Project Green Light Uses AI to Take on City Traffic](https://www.scientificamerican.com/article/googles-project-green-light-uses-ai-to-take-on-city-traffic/)
- C. Holland, J. Levis, R. Nuggehalli, B. Santilli and J. Winters, [UPS Optimizes Delivery Routes](https://doi.org/10.1287/inte.2016.0875), *Interfaces* 47(1), 8-23, 2017

</div>
