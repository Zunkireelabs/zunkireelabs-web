---
templateEngineOverride: "njk, md"
title: "Van data naar ontdekking: hoe AI wetenschappers helpt"
description: "Een Nature-artikel van Google-onderzoekers uit mei 2026 laat zien dat AI wetenschappelijke software genereert die expertbenchmarks verslaat."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "ai-data-discovery-how-ai-helps-scientists-find-what-humans-miss"
category: "Inzichten"
pillar: "ai-data"
readTime: 8
featuredImage: "/assets/images/blog/van-data-naar-ontdekking-hoe-ai-wetenschappers-helpt-wat-mensen-missen.svg"
featuredImageAlt: "Abstracte kleurverloop als achtergrond"
---

<div class="container-custom py-12 md:py-20">

**Kort samengevat:** In mei 2026 publiceerden Google-onderzoekers in Nature een systeem genaamd ERA dat met een taalmodel en boomzoeken wetenschappelijke software schrijft en verbetert. Op de geteste benchmarks overtrof het bestaande methoden. Het laat zien hoe data, een duidelijke score en AI oplossingen kunnen vinden die mensen misschien nooit zouden testen. Wetenschappelijk oordeel vervangt het niet, want een betere voorspelling is nog geen verklaring.

## Belangrijkste punten

- Het bewijs is een peer-reviewed Nature-artikel (mei 2026) van Google Research en Google DeepMind, mede geleid door Michael Brenner van Harvard en Google.
- ERA combineert een Gemini-taalmodel, boomzoeken en een numerieke score om code te genereren en te verfijnen waar succes meetbaar is.
- Gerapporteerde resultaten zijn 40 nieuwe methoden voor het integreren van single-cell RNA-data en 14 voorspellingsmodellen voor COVID-19-ziekenhuisopnames die het CovidHub Ensemble van de CDC versloegen.
- De auteurs zeggen dat het optimaliseren van voorspellende modellen niet hetzelfde is als volledige wetenschappelijke ontdekking, en een perspectief in Nature Communications stelt dat een voorspelling geen verklaring is.

## Het bewijs: wat hebben de onderzoekers precies gepubliceerd?

Het anker van dit artikel is het paper *An AI system to help scientists write expert-level empirical software*, in mei 2026 verschenen in [Nature](https://www.nature.com/articles/s41586-026-10658-6). Volgens [Google Research](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/) beschrijft het een systeem genaamd Empirical Research Assistance (ERA), gebouwd door onderzoekers van Google Research en Google DeepMind. [TechXplore](https://techxplore.com/news/2026-05-ai-automates-scientific-software-outperforming.html) meldt dat het werk mede werd geleid door Michael Brenner (Harvard SEAS en Google) en Shibl Mourad (Google DeepMind).

De onderstaande cijfers komen van Google Research en uit berichtgeving over het paper. Wij hadden geen toegang tot de volledige tekst van het Nature-artikel. Controleer methoden en exacte cijfers dus in het paper zelf voordat u erop vertrouwt.

- **Genomica.** ERA ontdekte volgens de berichten 40 nieuwe methoden voor het integreren van single-cell RNA-sequencingdata. Google meldt dat de beste oplossing de eerder best gepubliceerde methode ComBat met 14% overtrof op de benchmark OpenProblems V2.0.0, die 13 metrics combineert.

- **Volksgezondheid.** ERA genereerde volgens de berichten 14 modellen die het CovidHub Ensemble van de CDC overtroffen bij het voorspellen van COVID-19-ziekenhuisopnames, beoordeeld over 52 rechtsgebieden en vier voorspellingshorizons. TechXplore noemt een gemiddelde weighted interval score van 26 tegenover 29 voor het ensemble, waarbij lager beter is.

- **Wiskunde.** Bij numerieke integratie evalueerde de methode van ERA volgens Google 17 van 19 achtergehouden integralen correct waar standaardmethoden uit scipy faalden.

- **Neurowetenschap.** Google meldt topresultaten op de Zebrafish Activity Prediction Benchmark, waarbij de activiteit van meer dan 70.000 neuronen wordt voorspeld.

## Wat doet de technologie?

In gewone woorden is de keten: **data, dan een score, dan zoeken, dan een kandidaat.** Een wetenschapper levert een probleembeschrijving, een manier om antwoorden te scoren en trainings- en evaluatiedata. ERA gebruikt dan een Gemini-taalmodel om code voor te stellen, ook nabouwen en combinaties van methoden uit artikelen en leerboeken, en boomzoeken om te bepalen welke varianten verder worden verbeterd. [Google beschrijft](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/) het zoeken als geïnspireerd door AlphaZero. Elke kandidaat wordt gescoord en de beste worden in een lus opnieuw herschreven.

De sleutelvoorwaarde is een **scoorbare taak**: een probleem waarvan het succes als getal kan worden uitgedrukt. Daardoor kan het systeem duizenden ideeën proberen zonder dat een mens elk beoordeelt. Brenner zei dat het combineren van ideeën 'naald-in-een-hooiberg'-oplossingen kan vinden die menselijke onderzoekers misschien nooit zouden testen, en Google meldt dat de tijd om een reeks ideeën te verkennen 'van maanden naar uren of dagen' kan gaan.

## Wat is er veranderd?

De verandering zit minder in één slim antwoord dan in **hoeveel van de zoekruimte wordt verkend.** Een onderzoeker kan in een week een handvol aanpakken proberen. Een systeem dat code schrijft, uitvoert en scoort, kan er veel meer proberen en geeft de beste kandidaten terug aan een mens om te controleren.

De inspanning verschuift van elke variant met de hand schrijven naar het goed definiëren van probleem en score en het controleren van wat terugkomt. Een tweede paper uit 2026, een perspectief in [Nature Communications](https://techxplore.com/news/2026-09-ai-hidden-patterns-testable-scientific.html) van Gianmarco Mengaldo, Ricardo Vinuesa en Steve Brunton, beschrijft een verwante aanpak: gebruik verklaarbare AI om te vinden wat een voorspelling dreef, maak er een hypothese van en test die met experimenten, simulaties of gevestigde principes. In één voorbeeld vonden onderzoekers zo luchtstroompatronen die de weerstand bij turbulentie het sterkst beïnvloedden en ontwierpen ze wijzigingen daarin.

## Wie profiteert?

- **Onderzoeksteams** met data en een duidelijke maat, zoals een benchmark, een voorspellingsfout of een fitscore, kunnen in de beschikbare tijd meer ideeën verkennen.

- **Groepen in volksgezondheid en voorspelling** kunnen snel veel modelvarianten met een gevestigde basislijn vergelijken.

- **Kleinere organisaties** profiteren vooral indirect. Naar onze mening geldt hetzelfde patroon van schone data, één duidelijke score en een AI-zoektocht die opties voorstelt ook voor bedrijfsproblemen zoals vraagvoorspelling of routeplanning, ook voor bedrijven in Nepal en Zuid-Azië. Dat is onze lezing van de aanpak, geen resultaat uit het paper.

## Beperkingen en open vragen

- **Het werkt alleen waar succes een getal is.** Volgens TechXplore zeggen de auteurs dat het optimaliseren van empirische voorspellende modellen 'niet hetzelfde is als volledige wetenschappelijke ontdekking, die ook redeneren over mechanismen, causale verbanden, theorieën en wiskundige kaders vereist'.

- **Een voorspelling is geen verklaring.** De auteurs van het Nature Communications-perspectief zeggen het direct: een AI-patroon kan een echt fysiek proces weerspiegelen of slechts een statistisch verband in de trainingsdata, en moet worden getest voordat het als verklaring geldt.

- **Mensen blijven controleren.** In de berichtgeving geciteerde onderzoekers zeggen dat menselijke expertise essentieel blijft voor het controleren en interpreteren van resultaten.

- **Veiligheid.** De auteurs noemen ook bredere risico's als zulke systemen de drempel verlagen om geavanceerde rekenmodellen in gevoelige domeinen in te zetten.

- **Benchmarks zijn niet de echte wereld.** Een benchmark of een gepubliceerd ensemble verslaan is bewijs, maar geen garantie dat de methode standhoudt bij nieuwe data of in de praktijk.

## Wat gebeurt er nu?

Een bevestigde publieke releasedatum voor ERA hebben wij niet gezien, dus beschikbaarheid blijft een open vraag. Let niet op één kopcijfer, maar op drie dingen: onafhankelijke replicatie van de resultaten, hoe goed op deze manier gevonden methoden standhouden bij nieuwe data, en of de stap van verklaarbare AI routine wordt, zodat ontdekkingen met een toetsbare reden komen.

Voor lezers is de praktische les dat AI een hulpmiddel wordt om grote ruimtes van opties te verkennen. De waarde hangt af van hoe goed een mens vraag, data en score definieert. Voor een breder beeld van hoe krachtige AI wordt besproken, zie onze uitleg over [superintelligentie](/blog/what-is-superintelligence-and-why-is-it-called-that/).

## De korte versie

Een Nature-artikel van Google-onderzoekers uit mei 2026 meldt dat een AI-systeem, ERA, wetenschappelijke software schreef en verfijnde die door experts gebouwde methoden op benchmarks in genomica, volksgezondheid, wiskunde en neurowetenschap versloeg. Het werkt waar succes als getal te scoren is. De gerapporteerde resultaten zijn sterk, maar tonen betere voorspelling en sneller zoeken, geen wetenschappelijk begrip. Mensen moeten nog steeds testen, verklaren en beslissen.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Veelgestelde vragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Hoe helpt AI wetenschappers bij ontdekkingen?</p><p class="text-gray-600 leading-relaxed">In een Nature-artikel uit 2026 beschrijven Google-onderzoekers een systeem genaamd ERA dat met een taalmodel en boomzoeken wetenschappelijke software schrijft en verbetert, gescoord aan de hand van een getal. Het versloeg volgens de berichten door experts gebouwde methoden op meerdere benchmarks.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat heeft het ERA-systeem precies gevonden?</p><p class="text-gray-600 leading-relaxed">Google meldt 40 nieuwe methoden voor het integreren van single-cell RNA-data, waarvan de beste in een benchmark 14% beter was dan ComBat, en 14 voorspellingsmodellen voor COVID-19-ziekenhuisopnames die het CovidHub Ensemble van de CDC overtroffen. Het zijn gerapporteerde cijfers van Google Research en uit berichtgeving over het paper.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Betekent dit dat AI wetenschappers kan vervangen?</p><p class="text-gray-600 leading-relaxed">Nee. De auteurs zeggen dat het optimaliseren van voorspellende modellen niet hetzelfde is als volledige wetenschappelijke ontdekking, die ook redeneren over mechanismen, oorzaken en theorieën vereist. Onderzoekers definiëren nog steeds het probleem, controleren en interpreteren de resultaten.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat is de grens van deze aanpak?</p><p class="text-gray-600 leading-relaxed">Er is een scoorbare taak nodig, waarbij succes als getal te meten is, en een voorspelling is geen verklaring. Een perspectief in Nature Communications stelt dat AI-patronen via experimenten of simulaties moeten worden getest voordat ze als wetenschappelijke verklaring gelden.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Hoe helpt AI wetenschappers bij ontdekkingen?","@type":"Question","acceptedAnswer":{"text":"In een Nature-artikel uit 2026 beschrijven Google-onderzoekers een systeem genaamd ERA dat met een taalmodel en boomzoeken wetenschappelijke software schrijft en verbetert, gescoord aan de hand van een getal. Het versloeg volgens de berichten door experts gebouwde methoden op meerdere benchmarks.","@type":"Answer"}},{"name":"Wat heeft het ERA-systeem precies gevonden?","@type":"Question","acceptedAnswer":{"text":"Google meldt 40 nieuwe methoden voor het integreren van single-cell RNA-data, waarvan de beste in een benchmark 14% beter was dan ComBat, en 14 voorspellingsmodellen voor COVID-19-ziekenhuisopnames die het CovidHub Ensemble van de CDC overtroffen. Het zijn gerapporteerde cijfers van Google Research en uit berichtgeving over het paper.","@type":"Answer"}},{"name":"Betekent dit dat AI wetenschappers kan vervangen?","@type":"Question","acceptedAnswer":{"text":"Nee. De auteurs zeggen dat het optimaliseren van voorspellende modellen niet hetzelfde is als volledige wetenschappelijke ontdekking, die ook redeneren over mechanismen, oorzaken en theorieën vereist. Onderzoekers definiëren nog steeds het probleem, controleren en interpreteren de resultaten.","@type":"Answer"}},{"name":"Wat is de grens van deze aanpak?","@type":"Question","acceptedAnswer":{"text":"Er is een scoorbare taak nodig, waarbij succes als getal te meten is, en een voorspelling is geen verklaring. Een perspectief in Nature Communications stelt dat AI-patronen via experimenten of simulaties moeten worden getest voordat ze als wetenschappelijke verklaring gelden.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Meer inzichten

- [What Is Superintelligence and Why Is It Called That?](/blog/what-is-superintelligence-and-why-is-it-called-that/)
- [Anthropic, OpenAI, Google in Enterprise: Who Is Winning?](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/)
- [AI Coding Agents in 2026: How Developers Actually Work Now](/blog/ai-coding-agents-2026-how-developers-actually-work-now/)

## Bronnen

- Nature, [An AI system to help scientists write expert-level empirical software](https://www.nature.com/articles/s41586-026-10658-6), mei 2026 (pagina van het paper; volledige tekst niet beoordeeld)
- Google Research, [Accelerating scientific discovery with AI-powered Empirical Research Assistance](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/), 9 september 2025, bijgewerkt op 29 april 2026
- TechXplore, [AI system automates scientific software design, outperforming human-written code in key benchmarks](https://techxplore.com/news/2026-05-ai-automates-scientific-software-outperforming.html), 20 mei 2026
- TechXplore, [Explainable AI could help turn hidden data patterns into testable scientific hypotheses](https://techxplore.com/news/2026-09-ai-hidden-patterns-testable-scientific.html), september 2026, over een perspectief in Nature Communications van 6 augustus 2026

</div>
