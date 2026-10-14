---
templateEngineOverride: "njk, md"
title: "Gemma 4: wat Apache 2.0 voor open modellen betekent voor u"
description: "Gemma 4 van Google is een familie open-weight modellen onder Apache 2.0. Wat dat betekent voor privacy, kosten en controle, en wat u eerst controleert."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "gemma-4-open-model-what-apache-2-license-means-for-business"
category: "Inzichten"
pillar: "ai-frontier"
readTime: 8
featuredImage: "/assets/images/blog/gemma-4-open-model-wat-de-apache-2-0-licentie-betekent-voor-bedrijven.svg"
featuredImageAlt: "Abstracte kleurverloop als achtergrond"
---

<div class="container-custom py-12 md:py-20">

**Kort samengevat:** Gemma 4 is de familie open-weight AI-modellen van Google, uitgebracht op 2 april 2026 onder de Apache 2.0-licentie, die commercieel gebruik toestaat. Voor een bedrijf is de nuttige vraag niet of het model op een ranglijst een cloud-AI-dienst verslaat, maar of een model onder eigen beheer past bij uw eisen voor privacy, kosten en talen.

## Belangrijkste punten

- Gemma 4 bestaat in vier groottes, van kleine modellen voor telefoons en laptops tot een 31B-model voor één krachtige GPU.
- “Open-weight” betekent dat u het model kunt downloaden en zelf kunt draaien; bij een gesloten API draait de aanbieder het model en stuurt u uw gegevens naar hem toe.
- Apache 2.0 is een permissieve licentie die commercieel gebruik toestaat, maar u moet de licentietekst en de modelkaart zelf lezen.
- Benchmarkposities zijn beweringen van Google op het moment van lancering. Test het model op uw eigen documenten voordat u zich vastlegt.


## Wat is Gemma 4?

Gemma 4 is een familie open modellen van Google DeepMind. Volgens de [aankondiging van Google](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) van 2 april 2026 is er keuze uit vier groottes: Effective 2B (E2B), Effective 4B (E4B), een Mixture-of-Experts-model van 26B en een dicht model van 31B.

- **Contextvenster:** 128K bij de twee edge-modellen en tot 256K bij de grotere.
- **Invoer:** alle modellen verwerken beeld en video; E2B en E4B ondersteunen daarnaast native audio-invoer voor spraakherkenning.
- **Vaardigheden:** Google benadrukt redeneren in meerdere stappen, function calling en gestructureerde JSON-uitvoer voor agent-workflows, codegeneratie en ondersteuning voor meer dan 140 talen.
- **Waar te krijgen:** Google AI Studio, Hugging Face, Kaggle en Ollama, plus tools als vLLM, llama.cpp en NVIDIA NIM.

Google zegt ook dat het 31B-model derde staat onder de open modellen op de Arena AI-tekstranglijst en het 26B-model zesde, en dat Gemma 4 “modellen overtreft die 20 keer zo groot zijn”. Dit zijn uitspraken van de aanbieder zelf, zie ze dus als uitgangspunt en niet als oordeel.

## Open-weight model of gesloten API: wat is het verschil?

Bij een **gesloten API**, zoals de eigen Gemini-modellen van Google, draait de aanbieder het model op zijn servers. U stuurt uw prompts en gegevens via internet, betaalt per gebruik en krijgt updates automatisch. Hoe u zo’n lancering beoordeelt, leest u in onze gids over het [lezen van een frontiermodel-release](/blog/gemini-4-argon-how-to-read-a-frontier-model-release/).

Bij een **open-weight** model worden de getrainde modelbestanden gepubliceerd en kunt u ze op eigen hardware of in uw eigen cloudaccount draaien. U bepaalt waar de gegevens naartoe gaan, maar neemt ook hosting, monitoring en updates op u. “Open-weight” betekent niet dat u ook de trainingsdata of het volledige trainingsrecept krijgt, dus de openheid is beperkter dan de naam doet vermoeden.

## Wat staat de Apache 2.0-licentie toe?

Google beschrijft Gemma 4 als uitgebracht onder Apache 2.0, een veelgebruikte permissieve open-sourcelicentie. In algemene termen mag u de software gebruiken, aanpassen en verspreiden, ook in commerciële producten, zolang u de licentie- en copyrightvermeldingen behoudt. Er is ook een uitdrukkelijke patentlicentie in opgenomen.

Twee praktische punten. Ten eerste geldt de licentie voor de modelbestanden zoals ze zijn gepubliceerd, dus controleer of de versie die u downloadt de verwachte licentie draagt. Ten tweede is dit een algemene beschrijving en geen juridisch advies: lees de licentietekst en de modelkaart, en vraag een jurist als uw product van het antwoord afhangt.

## Zelf hosten of een API gebruiken?

Een enkel juist antwoord bestaat niet. Deze vragen geven meestal de doorslag:

1. **Privacy en locatie van gegevens.** Bevatten prompts klantgegevens, medische gegevens of contracten, dan kan het draaien in uw eigen omgeving gesprekken over compliance eenvoudiger maken.
2. **Kostenstructuur.** Een API rekent per gebruik af en schaalt terug naar nul. Zelf hosten betekent betalen voor GPU’s of gehuurde capaciteit, of er nu iemand gebruik van maakt of niet. Dat loont vooral bij een stabiel, hoog volume.
3. **Latentie en offline gebruik.** De kleine modellen zijn ontworpen voor telefoons, laptops en edge-apparaten, wat telt waar de verbinding onbetrouwbaar is.
4. **Taaldekking.** Google noemt ondersteuning voor meer dan 140 talen. Schrijven uw gebruikers in het Nepalees, Hindi of een andere Zuid-Aziatische taal, test dan met echte voorbeelden, want dat een taal wordt ondersteund, betekent niet dat het voor uw taak goed werkt.
5. **Capaciteit van het team.** Iemand moet het model draaien, beveiligen en bijwerken. Is daar niemand voor, dan is een API meestal eenvoudiger.

Een veelvoorkomend patroon is prototypen met een API en een stabiele, grootschalige of gevoelige workload pas naar een zelf gehost open model verplaatsen als de eisen duidelijk zijn.

## Waar moet u op letten?

- **Benchmarks zijn beweringen van de aanbieder.** Ranglijstposities veranderen en weerspiegelen uw taak mogelijk niet. Bouw een kleine testset uit uw eigen documenten en vergelijk modellen daarmee.
- **De bedrijfsvoering is van u.** Hosting, beveiligingsupdates, toegangsbeheer en monitoring zijn uw verantwoordelijkheid.
- **De veiligheidslaag is van u.** Een open model geeft u controle, maar ook de taak om uitvoer te filteren, te beperken wat gekoppelde tools mogen doen en vast te leggen wat het systeem doet. Dezelfde principes gelden als voor elke AI-tool, zoals we beschrijven in onze uitleg over [superintelligentie en AI-veiligheid](/blog/what-is-superintelligence-and-why-is-it-called-that/).
- **Controleer licentie en modelkaart.** Bevestig de voorwaarden en gebruiksrichtlijnen voordat u erop bouwt.

## De korte versie

Gemma 4 geeft bedrijven een krachtige open-weight optie onder een permissieve licentie, in groottes van telefoon tot server met één GPU. Of het de juiste keuze is, hangt af van uw gegevens, uw volume en uw team, niet van een ranglijst. Begin met een kleine test op uw eigen materiaal.

Weegt u opties af, bekijk dan onze checklist voor het [kiezen van een AI-ontwikkelbedrijf](/blog/how-to-choose-ai-development-company/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Veelgestelde vragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Wat is Gemma 4?</p><p class="text-gray-600 leading-relaxed">Gemma 4 is een familie open-weight AI-modellen van Google DeepMind, uitgebracht op 2 april 2026 in vier groottes: Effective 2B, Effective 4B, een Mixture-of-Experts-model van 26B en een dicht model van 31B.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Mag ik Gemma 4 in een commercieel product gebruiken?</p><p class="text-gray-600 leading-relaxed">Google zegt dat Gemma 4 wordt uitgebracht onder de Apache 2.0-licentie, een permissieve licentie die commercieel gebruik in het algemeen toestaat. Lees de licentietekst en de modelkaart, en vraag een jurist als uw product van de voorwaarden afhangt.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat is het verschil tussen een open-weight model en een gesloten API?</p><p class="text-gray-600 leading-relaxed">Bij een gesloten API draait de aanbieder het model en stuurt u uw gegevens naar hem toe. Bij een open-weight model downloadt u de modelbestanden en draait u ze op eigen hardware of in uw eigen cloudaccount, wat meer controle geeft maar ook meer operationeel werk.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Moet mijn bedrijf Gemma 4 zelf hosten?</p><p class="text-gray-600 leading-relaxed">Dat hangt af van de gevoeligheid van uw gegevens, het gebruiksvolume en uw technische team. Veel teams prototypen met een API en verplaatsen stabiele, grootschalige of gevoelige workloads later naar een zelf gehost model. Test eerst op uw eigen documenten en talen.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Wat is Gemma 4?","@type":"Question","acceptedAnswer":{"text":"Gemma 4 is een familie open-weight AI-modellen van Google DeepMind, uitgebracht op 2 april 2026 in vier groottes: Effective 2B, Effective 4B, een Mixture-of-Experts-model van 26B en een dicht model van 31B.","@type":"Answer"}},{"name":"Mag ik Gemma 4 in een commercieel product gebruiken?","@type":"Question","acceptedAnswer":{"text":"Google zegt dat Gemma 4 wordt uitgebracht onder de Apache 2.0-licentie, een permissieve licentie die commercieel gebruik in het algemeen toestaat. Lees de licentietekst en de modelkaart, en vraag een jurist als uw product van de voorwaarden afhangt.","@type":"Answer"}},{"name":"Wat is het verschil tussen een open-weight model en een gesloten API?","@type":"Question","acceptedAnswer":{"text":"Bij een gesloten API draait de aanbieder het model en stuurt u uw gegevens naar hem toe. Bij een open-weight model downloadt u de modelbestanden en draait u ze op eigen hardware of in uw eigen cloudaccount, wat meer controle geeft maar ook meer operationeel werk.","@type":"Answer"}},{"name":"Moet mijn bedrijf Gemma 4 zelf hosten?","@type":"Question","acceptedAnswer":{"text":"Dat hangt af van de gevoeligheid van uw gegevens, het gebruiksvolume en uw technische team. Veel teams prototypen met een API en verplaatsen stabiele, grootschalige of gevoelige workloads later naar een zelf gehost model. Test eerst op uw eigen documenten en talen.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Gerelateerde inzichten

- [Gemini 4 Argon: zo leest u de release van een frontiermodel](/blog/gemini-4-argon-how-to-read-a-frontier-model-release/)
- [Wat is superintelligentie en waarom heet het zo?](/blog/what-is-superintelligence-and-why-is-it-called-that/)
- [Waarom AI-agents hun eigen infrastructuur krijgen](/blog/ai-agents-are-getting-their-own-infrastructure/)

## Bronnen

- Google, [Gemma 4: Byte for byte, the most capable open models](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/), 2 april 2026
- The Apache Software Foundation, [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)

</div>
