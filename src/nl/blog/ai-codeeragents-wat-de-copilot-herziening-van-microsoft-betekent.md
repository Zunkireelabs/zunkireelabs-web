---
templateEngineOverride: "njk, md"
title: "AI-codeeragents: wat Microsofts Copilot-herziening betekent"
description: "Microsoft presenteert Copilot als een “OS for work” met ingebouwd coderen en agents. Wat AI-native software betekent voor teams die software bouwen of kopen."
date: "2026-10-01"
featuredImage: "/assets/images/blog/ai-codeeragents-wat-de-copilot-herziening-van-microsoft-betekent.svg"
featuredImageAlt: "Abstracte kleurverloop als achtergrond"
lastUpdated: "2026-10-02"
translationKey: "ai-native-software-and-coding-agents-what-microsofts-copilot-rethink-means"
category: "Inzichten"
pillar: "software-future"
readTime: 7
---

<div class="container-custom py-12 md:py-20">

**Kort samengevat:** Codeeragents nemen een taak aan, wijzigen code over meerdere bestanden en leveren het werk ter beoordeling terug, en platforms zoals Microsoft Copilot bouwen ze in. Teams moeten investeren in tests, reviewgewoonten en duidelijke specificaties, want niet het genereren maar het beoordelen wordt de bottleneck.

## Belangrijkste punten

- Microsoft presenteert Copilot als een “OS for work”, met aparte tabbladen voor chat, coderen en een nieuwe Autopilot-agent.
- Google zegt dat zijn agents meer dan 800.000 regels code in de Fuchsia Zircon-kernel hebben gemigreerd; dit zijn de eigen beweringen van Google.
- Naarmate agents grotere wijzigingen produceren, wordt menselijke beoordeling de bottleneck.
- Vraag bij het kopen van software of de AI deel uitmaakt van de kernworkflow of er achteraf aan is vastgeplakt.


## Wat is het verschil tussen autocomplete en een codeeragent?

Een aantal jaren betekende “AI voor ontwikkelaars” vooral autocomplete: suggesties die verschenen terwijl u typte. De ontwikkeling gaat nu een andere kant op. **Codeeragents** nemen een taak aan, lezen de omliggende code, brengen wijzigingen aan in meerdere bestanden, voeren controles uit en komen terug met een resultaat dat een persoon beoordeelt.

**AI-native software** gaat daar nog een stap verder in. Het beschrijft producten en workflows die vanaf het begin rond AI zijn ontworpen, in plaats van een chatvenster dat aan een bestaande app is toegevoegd. Twee berichten van deze week laten zien hoe snel de grote platforms die kant op bewegen.

## Wat houdt Microsofts “OS for work”-voorstel voor Copilot in?

Zoals [The Verge meldt](https://www.theverge.com/tech/1003365/microsoft-copilot-os-for-work-notepad), organiseerde Microsoft-CEO Satya Nadella onlangs een evenement op uitnodiging voor leidinggevenden van belangrijke zakelijke klanten. In plaats van een groot mediaevenement schetste hij de toekomst van Copilot rechtstreeks aan die klanten, en presenteerde hij Microsofts nieuwste herziening van de assistent als een “OS for work”.

Volgens het bericht doet Microsoft het volgende:

- **Codeer- en agentmogelijkheden rechtstreeks in Copilot opnemen**, en voor het eerst de volledige kracht van Office in Copilot brengen.
- **De consumenten- en bedrijfsversies van de Copilot-apps samenvoegen** tot één interface. De nieuwe app heeft aparte tabbladen voor chat, coderen en een nieuwe Autopilot-agent.
- **Erop inzetten dat AI het werk zal veranderen zoals Office dat deed in de jaren tachtig en negentig.** Nadella vergeleek het met hoe een bedrijf in 1981 een prognose zou maken met interne memo’s en faxen, voordat het spreadsheet kwam.

The Verge meldt ook, onder verwijzing naar bronnen, dat interne spanningen de herziening hebben gevormd en dat een eerdere, altijd actieve agent genaamd Scout in onderhoudsmodus is gezet terwijl Microsoft zich richtte op een cloudversie die is omgedoopt tot Autopilot. Die details komen van niet bij naam genoemde bronnen, lees ze dus als berichtgeving, niet als bevestigde uitspraken van het bedrijf.

Copilot-chef Jacob Andreou gaf de redenering in zijn eigen woorden: “De lat voor bedrijfssoftware ligt hoger dan ooit tevoren”, en de tools die mensen thuis gebruiken, bepalen de verwachtingen van de tools die ze op het werk gebruiken.

## Google zegt dat zijn agents al code migreren

Het tweede datapunt komt uit [het bericht van Ars Technica over Googles nieuwe model Gemini 4 Argon](https://arstechnica.com/google/2026/09/google-announces-gemini-4-argon-ai-model-but-you-cant-use-it-yet/). Google zegt dat engineers binnen het bedrijf het model intensief gebruiken, en dat Argon-agents binnen Google C- en C++-codebases hebben gemigreerd naar Rust, waaronder duizenden regels in de kernbibliotheken re2 en libgav1 en meer dan 800.000 regels in de Zircon-kernel van Fuchsia OS.

Google meldt ook dat het model op de softwareengineeringbenchmark DeepSWE v1.1 77,9 procent scoort, voor op meerdere concurrerende modellen. Dit zijn de eigen beweringen van Google, en volgens het bericht is het model nog niet beschikbaar voor het publiek om te testen. Hoe u een release als deze moet lezen, bespreken we in [onze gids over het lezen van de aankondiging van een frontiermodel](/blog/gemini-4-argon-how-to-read-a-frontier-model-release/).

## Wat betekent dit voor bedrijven die software bouwen?

Of de cijfers van de leveranciers nu standhouden of niet, de richting is duidelijk: agents worden ingebouwd in de tools die ontwikkelaars en kenniswerkers al gebruiken. Praktische gevolgen:

1. **Verwacht dat de werkeenheid groeit.** In plaats van “maak deze regel af” wordt het verzoek “migreer deze module” of “repareer deze falende testsuite”. Dat verhoogt de waarde van duidelijke specificaties.
2. **Beoordeling wordt de bottleneck.** Als een agent snel een grote wijziging kan produceren, moet een persoon die nog steeds begrijpen. Teams die investeren in tests, codereviewgewoonten en kleine, beoordeelbare wijzigingen plukken daar de meeste vruchten van.
3. **Beveiliging hoort aan tafel.** Code die door een agent is geschreven of gewijzigd, moet dezelfde scans, afhankelijkheids- en secretcontroles doorstaan als code die door mensen is geschreven.
4. **Houd mensen verantwoordelijk.** Een agent kan voorstellen doen, maar een bij naam bekende engineer moet verantwoordelijk zijn voor wat er live gaat.

## Wat moeten bedrijven die software kopen aan leveranciers vragen?

Als u software koopt in plaats van bouwt, is “AI-native” een nuttige vraag aan leveranciers. Een paar vragen die het waard zijn:

- Is de AI onderdeel van de kernworkflow, of een aparte assistent die er achteraf aan is vastgeplakt?
- Wat kan de agent daadwerkelijk zelfstandig doen, en wat vereist goedkeuring?
- Waar gaan mijn gegevens naartoe en wat wordt er gelogd?
- Hoe zet ik functies uit als ze niet werken voor mijn team?

## Hoe moet een team beginnen met codeeragents?

Kies één afgebakende engineeringtaak met duidelijke succescriteria, zoals tests schrijven voor een stabiele module of een interne dienst documenteren. Laat een agent het proberen, beoordeel de uitvoer zorgvuldig en meet de bespaarde tijd tegen de tijd die aan controleren is besteed. Breid vanaf daar pas uit als de resultaten dat rechtvaardigen.

Als u hulp wilt bij het bepalen waar AI in uw eigen product of workflow past, noemt onze gids over het [kiezen van een AI-ontwikkelbedrijf](/blog/how-to-choose-ai-development-company/) waar u op kunt letten, en plaatst ons overzicht van [AI-trends en voorspellingen voor 2026](/blog/ai-trends-and-predictions-for-2026-what-lies-ahead/) het nieuws van deze week in een bredere context.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Veelgestelde vragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Wat is een codeeragent?</p><p class="text-gray-600 leading-relaxed">Een codeeragent neemt een taak aan, leest de omliggende code, brengt wijzigingen aan in meerdere bestanden, voert controles uit en geeft een resultaat terug ter beoordeling door een persoon. Het gaat verder dan autocomplete, dat tijdens het typen alleen de volgende paar regels voorstelt.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat betekent AI-native software?</p><p class="text-gray-600 leading-relaxed">AI-native software is vanaf het begin rond AI ontworpen, in plaats van dat er een chatvenster aan een bestaande app wordt toegevoegd. Microsofts gemelde herziening van Copilot, die consumenten- en bedrijfsapps samenvoegt en codeer- en agentmogelijkheden toevoegt, is een voorbeeld van die richting.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat houdt Microsofts “OS for work”-voorstel in?</p><p class="text-gray-600 leading-relaxed">Volgens The Verge presenteerde Satya Nadella de nieuwste Copilot aan zakelijke klanten als een “OS for work”, met extra codeer- en agentmogelijkheden en voor het eerst de volledige kracht van Office in Copilot.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Hoe moet een team beginnen met codeeragents?</p><p class="text-gray-600 leading-relaxed">Kies één afgebakende taak met duidelijke succescriteria, zoals tests schrijven voor een stabiele module. Beoordeel de uitvoer zorgvuldig, vergelijk de bespaarde tijd met de tijd die aan controleren is besteed en breid alleen uit als de resultaten dat rechtvaardigen.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Wat is een codeeragent?","@type":"Question","acceptedAnswer":{"text":"Een codeeragent neemt een taak aan, leest de omliggende code, brengt wijzigingen aan in meerdere bestanden, voert controles uit en geeft een resultaat terug ter beoordeling door een persoon. Het gaat verder dan autocomplete, dat tijdens het typen alleen de volgende paar regels voorstelt.","@type":"Answer"}},{"name":"Wat betekent AI-native software?","@type":"Question","acceptedAnswer":{"text":"AI-native software is vanaf het begin rond AI ontworpen, in plaats van dat er een chatvenster aan een bestaande app wordt toegevoegd. Microsofts gemelde herziening van Copilot, die consumenten- en bedrijfsapps samenvoegt en codeer- en agentmogelijkheden toevoegt, is een voorbeeld van die richting.","@type":"Answer"}},{"name":"Wat houdt Microsofts “OS for work”-voorstel in?","@type":"Question","acceptedAnswer":{"text":"Volgens The Verge presenteerde Satya Nadella de nieuwste Copilot aan zakelijke klanten als een “OS for work”, met extra codeer- en agentmogelijkheden en voor het eerst de volledige kracht van Office in Copilot.","@type":"Answer"}},{"name":"Hoe moet een team beginnen met codeeragents?","@type":"Question","acceptedAnswer":{"text":"Kies één afgebakende taak met duidelijke succescriteria, zoals tests schrijven voor een stabiele module. Beoordeel de uitvoer zorgvuldig, vergelijk de bespaarde tijd met de tijd die aan controleren is besteed en breid alleen uit als de resultaten dat rechtvaardigen.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Gerelateerde inzichten

- [Waarom AI-agents hun eigen infrastructuur krijgen](/blog/ai-agents-are-getting-their-own-infrastructure/)
- [Gemini 4 Argon: zo leest u de release van een frontiermodel](/blog/gemini-4-argon-how-to-read-a-frontier-model-release/)

## Bronnen

- The Verge, [Inside Microsoft's big Copilot rethink](https://www.theverge.com/tech/1003365/microsoft-copilot-os-for-work-notepad), 1 oktober 2026
- Ars Technica, [Google announces Gemini 4 Argon AI model, but you can't use it yet](https://arstechnica.com/google/2026/09/google-announces-gemini-4-argon-ai-model-but-you-cant-use-it-yet/), 30 september 2026

</div>
