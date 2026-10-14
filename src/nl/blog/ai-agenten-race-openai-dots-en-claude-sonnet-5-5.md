---
templateEngineOverride: "njk, md"
title: "De race om AI-agents: OpenAI's Dots en Claude Sonnet 5.5"
translationKey: "ai-agent-race-openai-dots-and-claude-sonnet-5-5"
description: "OpenAI lanceerde de altijd-aan-agents Dots en Anthropic bracht Claude Sonnet 5.5 uit. Wat de aanbieders beweren en wat onafhankelijk wordt gemeld."
date: "2026-10-05"
lastUpdated: "2026-10-05"
category: "Inzichten"
pillar: "ai-frontier"
readTime: 7
featuredImage: "/assets/images/blog/ai-agenten-race-openai-dots-en-claude-sonnet-5-5.svg"
featuredImageAlt: "Abstracte kleurverloop als achtergrond"
---

<div class="container-custom py-12 md:py-20">

**Kort samengevat:** In de laatste week van september 2026 kondigde OpenAI Dots aan, "altijd-aan"-agents die op de achtergrond doorwerken, en bracht Anthropic Claude Sonnet 5.5 uit, een sneller en goedkoper model voor het dagelijkse werk in bedrijven. De meeste cijfers komen tot nu toe van de aanbieders zelf. Voor een bedrijf gaat het er niet om welk logo wint, maar hoeveel vrijheid je een agent geeft die handelt zonder dat iemand meekijkt.

## Belangrijkste punten

- OpenAI presenteerde Dots op 29 september 2026 tijdens DevDay. Ze draaien op GPT-6 Astra, krijgen een eigen cloudcomputer met browser en laten van zich horen via ChatGPT, Slack en Microsoft Teams.
- Anthropic bracht Claude Sonnet 5.5 uit op 28 september 2026, met ongewijzigde API-prijzen van 2 dollar per miljoen invoertokens en 10 dollar per miljoen uitvoertokens. Volgens Anthropic is het ruim 30% sneller en kan het de kosten van een taak met maximaal 30% verlagen.
- Cijfers over snelheid, kosten en benchmarks zijn beweringen van de aanbieders zelf. Er zijn klantcitaten, maar die zijn een selectie.
- Agents die zelfstandig handelen roepen vragen op over rechten en toezicht die bij chatbots niet spelen.

## Wat is er aangekondigd?

**OpenAI's Dots.** [VentureBeat](https://venturebeat.com/technology/openai-launches-dots-always-on-ai-agent-coworkers-and-chatgpt-space-where-they-can-collaborate-with-human-teams) en [TechCrunch](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/) melden dat OpenAI Dots op 29 september 2026 aankondigde tijdens DevDay. OpenAI omschrijft ze als "opmerkelijk capabele, altijd-aan-agents die alles aankunnen" (in het origineel: "remarkably capable, always-on agents built to handle everything"). Volgens VentureBeat blijven Dots doorwerken als je het chatvenster sluit: ze volgen projecten, gebruiken software en leveren afgerond werk ter goedkeuring op. Elke Dot draait op GPT-6 Astra met een eigen cloudcomputer en browser, kan via het pluginecosysteem van OpenAI met meer dan 4.000 apps worden verbonden en is bereikbaar via ChatGPT, Slack en Microsoft Teams. De eerste Dot is inbegrepen voor klanten van ChatGPT Pro en Business Premium, terwijl Enterprise, Edu en Healthcare in bèta zijn. OpenAI kondigde ook ChatGPT Space aan, een gedeelde werkomgeving waarin mensen en agents aan dezelfde documenten werken.

**Anthropic's Claude Sonnet 5.5.** [SiliconANGLE](https://siliconangle.com/2026/09/28/anthropic-debuts-claude-sonnet-5-5-running-30-faster-than-the-previous-generation-ai-model/) en [VentureBeat](https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-5-with-30-cost-reduction-per-task-due-to-faster-speeds-and-fewer-tool-calls) melden dat Anthropic Sonnet 5.5 op 28 september 2026 uitbracht als werkpaard van de middenklasse naast het sterkere Opus 5.5. Volgens Anthropic is het het best in duidelijk afgebakend dagelijks werk, zoals het oplossen van bugs en het maken van documenten, presentaties en spreadsheets. Het is beschikbaar op het platform van Anthropic en via Amazon Web Services, Google Cloud en Microsoft Azure. SiliconANGLE voegt toe dat een kleiner Haiku 5.5 "in de komende weken" gepland staat.

## Beweringen van aanbieders of onafhankelijk bewijs?

Bijna alles hierboven is wat de bedrijven zelf over hun producten zeggen. Het helpt om beide te scheiden:

- **Beweringen van aanbieders:** Anthropic zegt dat Sonnet 5.5 uitvoer meer dan 30% sneller genereert dan Sonnet 5, de totale kosten van een taak met maximaal 30% kan verlagen door minder tokens en toolaanroepen, en 70,6% scoort op de eigen codeertest Terminal-Bench 4.0. OpenAI noemt Dots "opmerkelijk capabel".
- **Klantverslagen:** VentureBeat citeert bedrijven als Box, Zendesk en Slack die bij hun eigen taken snellere verwerking of minder tokens melden. Dat zijn losse klanten, gekozen voor de berichtgeving rond de lancering.
- **Kanttekeningen:** VentureBeat merkt op dat benchmarkscores niet als directe maatstaf voor elke productieomgeving moeten worden gezien, en Anthropic zelf zegt dat Opus 5.5 sterker blijft bij moeilijk, open werk. OpenAI adviseert belangrijk werk na te kijken omdat agents nog steeds fouten kunnen maken.

In de door ons bekeken bronnen is geen onafhankelijke vergelijking van Dots gepubliceerd. Zie de kopcijfers als uitgangspunt voor een eigen test, niet als ranglijst.

## Hoe verschilt een altijd-aan-agent van een chatbot?

Een chatbot wacht op een vraag en beantwoordt die. Een altijd-aan-agent krijgt een doel en blijft eraan werken: hij controleert informatie, gebruikt tools en apps en komt terug met resultaten of vragen. Dat is het idee achter Dots, en daarom krijgen ze eigen accounts, inloggegevens en een eigen computeromgeving.

Dat is dezelfde richting die we beschreven in [Waarom AI-agents hun eigen infrastructuur krijgen](/blog/ai-agents-are-getting-their-own-infrastructure/). Hoe meer een agent zelf kan, hoe belangrijker het is waar hij aan mag komen.

## Wat zijn de risico's?

Volgens VentureBeat bouwt OpenAI enkele controles in: eigen regels om acties toe te staan, goedkeuring te eisen of te verbieden, een activiteitenoverzicht om achtergrondwerk te bekijken en in te grijpen, een automatische controle van ingrijpende acties en de regel dat gevoelige stappen zoals wachtwoordwijzigingen bij mensen blijven. TechCrunch voegt toe dat OpenAI met Microsoft werkt aan integratie van Dots met de beveiligingscontroles van Agent 365.

Controles op papier moeten nog wel worden ingesteld en gecheckt. Toezichthouders letten al op agents die verder gaan dan hun instructies, zoals we beschreven in [FTC onderzoekt AI-labs vanwege agents die uit de bocht vliegen](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/). Gedeelde werkomgevingen zijn nog een aandachtspunt: volgens VentureBeat wordt informatie uit het persoonlijke geheugen zichtbaar voor medewerkers als ChatGPT die in gedeeld werk gebruikt.

## Wat moet een bedrijf doen?

1. **Eerst piloten met werk met weinig risico.** Zet een nieuwe agent of een nieuw model in waar een fout makkelijk te zien is.
2. **Beginnen met alleen-lezen toegang.** Geef rechten één voor één en eis goedkeuring voor versturen, betalen, verwijderen en alles wat richting klanten gaat.
3. **Meten op eigen taken.** Vergelijk kosten, snelheid en foutenpercentage op echt werk, niet op gepubliceerde benchmarks.
4. **Logs bijhouden en een eigenaar aanwijzen.** Iemand moet verantwoordelijk zijn voor de resultaten van elke agent en kunnen zien wat die deed.
5. **Datavoorwaarden nalopen.** Kijk wat voor jouw abonnement wordt bewaard of voor training wordt gebruikt en wat een gedeelde werkomgeving zichtbaar maakt.
6. **Je niet te vroeg vastleggen.** Het toonaangevende model wisselt om de paar weken, houd je werkwijze dus overdraagbaar.

## De korte versie

OpenAI zet in op agents die op de achtergrond werken en Anthropic op een sneller, goedkoper model voor dagelijks werk. De aankondigingen zijn echt, maar de prestatiecijfers komen vooral van de aanbieders zelf. Bedrijven hebben het meeste aan testen op eigen taken, begrenzen waar agents aan mogen komen en een persoon verantwoordelijk houden.

Voor meer context lees je ons overzicht van [AI-trends en voorspellingen voor 2026](/blog/ai-trends-and-predictions-for-2026-what-lies-ahead/), of onze checklist voor [het kiezen van een AI-ontwikkelbedrijf](/blog/how-to-choose-ai-development-company/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Veelgestelde vragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Wat zijn OpenAI's Dots?</p><p class="text-gray-600 leading-relaxed">Dots is de naam die OpenAI geeft aan zijn altijd-aan-agents, aangekondigd op 29 september 2026 tijdens DevDay. Volgens VentureBeat en TechCrunch draaien ze op GPT-6 Astra, krijgen ze een eigen cloudcomputer met browser, verbinden ze met apps en zijn ze bereikbaar via ChatGPT, Slack en Microsoft Teams.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat is Claude Sonnet 5.5?</p><p class="text-gray-600 leading-relaxed">Claude Sonnet 5.5 is het model van de middenklasse van Anthropic, uitgebracht op 28 september 2026. Volgens Anthropic is het ruim 30% sneller dan Sonnet 5 en kan het de kosten van een taak met maximaal 30% verlagen, bij ongewijzigde API-prijzen van 2 dollar per miljoen invoertokens en 10 dollar per miljoen uitvoertokens.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Zijn de prestatiecijfers onafhankelijk geverifieerd?</p><p class="text-gray-600 leading-relaxed">Grotendeels niet. Cijfers over snelheid, kosten en benchmarks komen van de aanbieders, ondersteund door enkele klantcitaten. VentureBeat waarschuwt dat benchmarks geen directe maatstaf zijn voor elke productieomgeving.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat moet een bedrijf doen voordat het een altijd-aan-agent inzet?</p><p class="text-gray-600 leading-relaxed">Beginnen met werk met weinig risico en alleen-lezen toegang, menselijke goedkeuring eisen voor ingrijpende acties, logs bijhouden, een eigenaar aanwijzen en testen op eigen werk voordat je op gepubliceerde cijfers vertrouwt.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Wat zijn OpenAI's Dots?","@type":"Question","acceptedAnswer":{"text":"Dots is de naam die OpenAI geeft aan zijn altijd-aan-agents, aangekondigd op 29 september 2026 tijdens DevDay. Volgens VentureBeat en TechCrunch draaien ze op GPT-6 Astra, krijgen ze een eigen cloudcomputer met browser, verbinden ze met apps en zijn ze bereikbaar via ChatGPT, Slack en Microsoft Teams.","@type":"Answer"}},{"name":"Wat is Claude Sonnet 5.5?","@type":"Question","acceptedAnswer":{"text":"Claude Sonnet 5.5 is het model van de middenklasse van Anthropic, uitgebracht op 28 september 2026. Volgens Anthropic is het ruim 30% sneller dan Sonnet 5 en kan het de kosten van een taak met maximaal 30% verlagen, bij ongewijzigde API-prijzen van 2 dollar per miljoen invoertokens en 10 dollar per miljoen uitvoertokens.","@type":"Answer"}},{"name":"Zijn de prestatiecijfers onafhankelijk geverifieerd?","@type":"Question","acceptedAnswer":{"text":"Grotendeels niet. Cijfers over snelheid, kosten en benchmarks komen van de aanbieders, ondersteund door enkele klantcitaten. VentureBeat waarschuwt dat benchmarks geen directe maatstaf zijn voor elke productieomgeving.","@type":"Answer"}},{"name":"Wat moet een bedrijf doen voordat het een altijd-aan-agent inzet?","@type":"Question","acceptedAnswer":{"text":"Beginnen met werk met weinig risico en alleen-lezen toegang, menselijke goedkeuring eisen voor ingrijpende acties, logs bijhouden, een eigenaar aanwijzen en testen op eigen werk voordat je op gepubliceerde cijfers vertrouwt.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Gerelateerde inzichten

- [Waarom AI-agents hun eigen infrastructuur krijgen](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [FTC onderzoekt AI-labs vanwege agents die uit de bocht vliegen: wat bedrijven kunnen doen](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/)

## Bronnen

- TechCrunch, Lucas Ropek, [OpenAI launches Dots, its bubbly agentic avatar](https://techcrunch.com/2026/09/29/openai-launches-dots-its-bubbly-agentic-avatar/), 29 september 2026
- VentureBeat, Carl Franzen, [OpenAI launches Dots, always-on AI agent coworkers, and ChatGPT Space](https://venturebeat.com/technology/openai-launches-dots-always-on-ai-agent-coworkers-and-chatgpt-space-where-they-can-collaborate-with-human-teams), 29 september 2026
- SiliconANGLE, Kyt Dotson, [Anthropic debuts Claude Sonnet 5.5 running 30% faster than the previous-generation AI model](https://siliconangle.com/2026/09/28/anthropic-debuts-claude-sonnet-5-5-running-30-faster-than-the-previous-generation-ai-model/), 28 september 2026
- VentureBeat, Carl Franzen, [Anthropic launches Claude Sonnet 5.5 with 30% cost reduction per task](https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-5-with-30-cost-reduction-per-task-due-to-faster-speeds-and-fewer-tool-calls), 28 september 2026

</div>
