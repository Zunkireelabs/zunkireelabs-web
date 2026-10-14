---
templateEngineOverride: "njk, md"
title: "AI-vroegwaarschuwing bij sepsis: wat het bewijs laat zien"
description: "In mei 2026 gaf de FDA een AI-systeem vrij dat ziekenhuisdossiers op sepsis in de gaten houdt."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "ai-sepsis-early-warning-what-the-evidence-shows"
category: "Inzichten"
pillar: "ai-healthcare"
readTime: 9
featuredImage: "/assets/images/blog/ai-sepsis-vroegwaarschuwing-wat-het-bewijs-laat-zien.svg"
featuredImageAlt: "Abstracte kleurverloop als achtergrond"
---

<div class="container-custom py-12 md:py-20">

**Kort samengevat:** In mei 2026 gaf de FDA een AI-hulpmiddel vrij (clearance) dat patiëntendossiers in het ziekenhuis leest om sepsis, een levensbedreigende reactie op een infectie, te signaleren voordat artsen het vermoeden hebben. De ontwikkelaars melden dat patiënten 18% minder kans hadden om in het ziekenhuis te overlijden als zorgverleners op tijd op de waarschuwingen reageerden. Dat is veelbelovend, maar het bewijst niet dat alleen de waarschuwingen levens hebben gered, en een onafhankelijke controle van een ander, veelgebruikt sepsis-waarschuwingssysteem liet zien dat het de meeste gevallen miste.

## Belangrijkste punten

- Op 12 mei 2026 meldde Healthcare Dive dat Bayesian Health, dat onderzoek van Johns Hopkins University commercialiseert, FDA 510(k)-clearance heeft gekregen voor zijn sepsis-vroegwaarschuwingssysteem TREWS.
- Het belangrijkste bewijs is een studie uit 2022 met meer dan 764.000 patiëntcontacten in vijf Amerikaanse ziekenhuizen, zoals CIDRAP die beschrijft. De gemelde 18% lagere sterfte in het ziekenhuis geldt wanneer zorgverleners op tijd op waarschuwingen reageerden.
- Een 510(k)-clearance betekent dat de FDA het hulpmiddel in wezen gelijkwaardig vond aan een bestaand hulpmiddel. Het is dus op zichzelf geen uitkomstenstudie.
- Een onafhankelijke evaluatie van een ander systeem, het Epic Sepsis Model, aan de University of Michigan toonde aan dat het 67% van de sepsispatiënten miste, terwijl het bij 18% van alle patiënten alarm sloeg.
- De praktische les voor elke klinische AI-waarschuwing: vraag om externe validatie, om de frequentie van valse alarmen en om wie er handelt en hoe snel.

## Het bewijs

**De clearance.** [Healthcare Dive meldde](https://www.healthcaredive.com/news/bayesian-health-gets-fda-nod-for-ai-sepsis-detection-tool/820107/) op 12 mei 2026 dat Bayesian Health, dat onderzoek van Johns Hopkins University commercialiseert, FDA 510(k)-clearance heeft gekregen voor zijn AI-gestuurde sepsis-vroegwaarschuwingssysteem, het Targeted Real-Time Early Warning System (TREWS). Volgens hetzelfde bericht kreeg de technologie in 2023 de FDA-status Breakthrough Designation en wordt ze gebruikt in zorgsystemen als Cleveland Clinic, MemorialCare en de University of Rochester.

**De uitkomstenstudie.** Het belangrijkste gepubliceerde bewijs is een studie uit 2022 met meer dan 764.000 patiëntcontacten in vijf Amerikaanse ziekenhuizen, [zoals CIDRAP die beschrijft](https://www.cidrap.umn.edu/sepsis/fda-clears-first-ai-based-early-warning-system-sepsis). Daarin hadden sepsispatiënten 18% minder kans om in het ziekenhuis te overlijden wanneer zorgverleners op de waarschuwingen handelden. Healthcare Dive beschrijft het als een prospectieve studie, gepubliceerd in Nature, en meldt dat patiënten bij wie de waarschuwing binnen drie uur door zorgverleners werd bevestigd een lagere sterfte in het ziekenhuis, minder orgaanfalen en kortere opnames hadden dan patiënten bij wie de waarschuwing niet binnen drie uur werd bevestigd.

**De bewering over tijdwinst.** Bayesian zegt dat het systeem sepsis 2 tot 48 uur sneller opspoort dan traditionele methoden. Dat cijfer is van het bedrijf zelf.

## Wat de technologie doet

Volg de keten van data tot actie:

1. **Data.** Volgens Healthcare Dive analyseert het systeem informatie uit elektronische patiëntendossiers: klachten bij binnenkomst, laboratoriumwaarden, vitale functies, ingrepen en medicatie.
2. **AI-model.** CIDRAP beschrijft continue bewaking van patiënten via het geïntegreerde dossier om sepsis tot 48 uur vóór het klinische vermoeden op te sporen. Het model schat het risico steeds opnieuw in zodra er nieuwe uitslagen binnenkomen.
3. **Uitvoer.** Een waarschuwing in het patiëntendossier, bijvoorbeeld "sepsisrisico hoog".
4. **Menselijke actie.** Het systeem vereist bevestiging door een zorgverlener en past in bestaande werkwijzen. Het ondersteunt de beslissing van de zorgverlener. Het behandelt de patiënt niet.

De snelheid is belangrijk omdat sepsis tijdkritisch is. Volgens CIDRAP verlaagt elk uur vertraagde behandeling de overlevingskans met 8%. Sepsis is ook moeilijk op te sporen, omdat de symptomen ook bij andere aandoeningen vaak voorkomen.

## Wat er is veranderd

Wat is veranderd, is de bewijs- en regelgevingsstatus van dit soort hulpmiddelen. Een continu draaiende AI-monitor heeft nu FDA-clearance, en de kop van CIDRAP noemt het het eerste op AI gebaseerde vroegwaarschuwingssysteem voor sepsis dat die clearance krijgt. Er zijn ook uitkomstendata uit echte ziekenhuizen, niet alleen een laboratoriumtest. Daarmee verschuift de vraag van "kan AI sepsis herkennen in oude data?" naar "leidt handelen op basis van de waarschuwingen in een draaiend ziekenhuis tot betere uitkomsten, en hoe betrouwbaar?"

## Wie profiteert

- **Patiënten.** Als sepsis eerder wordt gesignaleerd en zorgverleners op tijd handelen, kan de behandeling eerder beginnen. Dat is het gemelde voordeel, binnen de hieronder genoemde grenzen.
- **Zorgverleners.** Een team aan het bed dat veel patiënten in de gaten houdt, krijgt een seintje bij een moeilijk probleem. In het CIDRAP-bericht noemt Dr. Neri Cohen, het hoofd klinische zaken van Bayesian, het opsporen van sepsis voordat een zorgverlener het vermoedt "een naald in een hooiberg" en zegt hij dat het missen van één geval "catastrofaal" is.
- **Ziekenhuizen.** Minder sterfgevallen en complicaties zijn het doel, maar onze bronnen noemen geen kostencijfers, dus we geven er geen.

## Beperkingen en open vragen

- **Een groot deel van het bewijs komt van de ontwikkelaar zelf.** De 18% en het tijdvenster van 2 tot 48 uur worden gemeld door het bedrijf en zijn onderzoekspartners. De studie vergelijkt patiënten bij wie de waarschuwing op tijd werd bevestigd met patiënten bij wie dat niet gebeurde. Dat toont op zichzelf niet aan dat de waarschuwingen het verschil veroorzaakten, omdat die twee groepen patiënten ook op andere punten kunnen verschillen. Dit is onze lezing van de onderzoeksopzet zoals Healthcare Dive die beschrijft.
- **Clearance is geen bewijs.** CIDRAP legt uit dat de 510(k)-route betekent dat de FDA het hulpmiddel in wezen gelijkwaardig vond aan een bestaand hulpmiddel. De clearance alleen is geen uitkomstenstudie.
- **Niet elk sepsismodel werkt goed.** In een [validatie van het Epic Sepsis Model aan de University of Michigan](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781313) over 38.455 ziekenhuisopnames (JAMA Internal Medicine, 2021) was de sensitiviteit van het model 33%, de positief voorspellende waarde 12% en het oppervlak onder de curve 0,63. Het miste sepsis bij 67% van de patiënten met sepsis, terwijl het bij 18% van alle patiënten alarm sloeg. De auteurs merkten op dat dit ver onder de oorspronkelijk gemelde 0,76 tot 0,83 lag. Dat is een ander product, en we vonden geen directe vergelijking met TREWS.
- **Valse alarmen en alarmmoeheid.** Als veel waarschuwingen onjuist zijn, leren medewerkers ze te negeren. Bij elke bewering over een waarschuwing hoort het percentage valse alarmen.
- **Het hangt af van mensen die handelen.** Het gemelde voordeel geldt wanneer zorgverleners op tijd reageerden. Personeelsbezetting en werkwijze zijn dus even belangrijk als het model.
- **Open vragen.** In de bronnen die we hebben bekeken, vonden we geen onafhankelijke replicatie in andere zorgsystemen, en gepubliceerde percentages valse alarmen voor TREWS stonden er ook niet in.

Dit artikel is algemene informatie en geen medisch advies.

## Hoe nu verder

Let op drie dingen: onafhankelijke studies in andere ziekenhuizen, gepubliceerde percentages valse alarmen en gemiste gevallen uit de dagelijkse praktijk, en hoe ziekenhuizen het voordeel na invoering meten. Voor andere AI-producten in de zorg geldt dezelfde checklist.

Voor softwareteams in klinieken en ziekenhuizen is het patroon herbruikbaar: gegevens uit het dossier gaan erin, een risicoscore komt eruit, een mens beslist, en het systeem legt vast wat er na elke waarschuwing gebeurde. De meeste klinieken zullen nooit een sepsismodel draaien, maar dezelfde vragen gelden voor elke AI-signalering in een klinische werkwijze, zoals het voorspellen van gemiste afspraken of herinneringen voor nazorg. Is het gevalideerd bij patiënten zoals de onze? Hoeveel waarschuwingen zijn onjuist? Wie handelt, en hoe snel? Met die vragen zouden we bij Zunkiree Labs beginnen als we AI-functies in zorgsoftware bouwen.

## De korte versie

Een AI-sepsiswaarschuwing heeft nu FDA-clearance, en de ontwikkelaars melden 18% lagere sterfte in het ziekenhuis wanneer zorgverleners op tijd op waarschuwingen reageerden. Het bewijs is bemoedigend, maar wordt grotendeels door de ontwikkelaars zelf gemeld, en vrijgegeven hulpmiddelen zijn niet allemaal gelijk: een ander veelgebruikt sepsismodel miste in een onafhankelijke test tweederde van de gevallen. De juiste reactie is geen hype en geen afwijzing. Vraag om externe validatie, om percentages valse alarmen en om een duidelijk plan voor wie op elke waarschuwing handelt.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Veelgestelde vragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Wat is sepsis en waarom is vroege opsporing belangrijk?</p><p class="text-gray-600 leading-relaxed">Sepsis is een levensbedreigende reactie op een infectie en volgens Healthcare Dive een van de belangrijkste doodsoorzaken in Amerikaanse ziekenhuizen. Het CIDRAP-bericht noemt dat elk uur vertraagde behandeling de overlevingskans met 8% verlaagt, en daarom zijn eerdere signalen waardevol.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Heeft de FDA een AI-hulpmiddel voor sepsis goedgekeurd?</p><p class="text-gray-600 leading-relaxed">De FDA heeft het vrijgegeven (clearance). In mei 2026 kreeg Bayesian Health 510(k)-clearance voor zijn sepsis-vroegwaarschuwingssysteem TREWS. Dat betekent dat de FDA het in wezen gelijkwaardig vond aan een bestaand hulpmiddel en het niet alleen op grond van behandeluitkomsten heeft goedgekeurd.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Verlaagt AI-detectie van sepsis het aantal sterfgevallen?</p><p class="text-gray-600 leading-relaxed">Een studie uit 2022 met meer dan 764.000 patiëntcontacten in vijf Amerikaanse ziekenhuizen vond dat sepsispatiënten 18% minder kans hadden om in het ziekenhuis te overlijden wanneer zorgverleners op de waarschuwingen handelden, zoals CIDRAP en Healthcare Dive melden. De resultaten komen van de ontwikkelaars en hun partners en vergelijken patiënten met tijdige en niet-tijdige bevestiging van de waarschuwing. Ze bewijzen dus op zichzelf niet dat de waarschuwingen het verschil veroorzaakten.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Zijn alle AI-sepsiswaarschuwingen even nauwkeurig?</p><p class="text-gray-600 leading-relaxed">Nee. Een validatie van het Epic Sepsis Model aan de University of Michigan over 38.455 ziekenhuisopnames vond 33% sensitiviteit en 12% positief voorspellende waarde. Het miste 67% van de patiënten met sepsis en sloeg bij 18% van alle patiënten alarm. Vraag elke leverancier om onafhankelijke validatie en gegevens over valse alarmen.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Wat is sepsis en waarom is vroege opsporing belangrijk?","@type":"Question","acceptedAnswer":{"text":"Sepsis is een levensbedreigende reactie op een infectie en volgens Healthcare Dive een van de belangrijkste doodsoorzaken in Amerikaanse ziekenhuizen. Het CIDRAP-bericht noemt dat elk uur vertraagde behandeling de overlevingskans met 8% verlaagt, en daarom zijn eerdere signalen waardevol.","@type":"Answer"}},{"name":"Heeft de FDA een AI-hulpmiddel voor sepsis goedgekeurd?","@type":"Question","acceptedAnswer":{"text":"De FDA heeft het vrijgegeven (clearance). In mei 2026 kreeg Bayesian Health 510(k)-clearance voor zijn sepsis-vroegwaarschuwingssysteem TREWS. Dat betekent dat de FDA het in wezen gelijkwaardig vond aan een bestaand hulpmiddel en het niet alleen op grond van behandeluitkomsten heeft goedgekeurd.","@type":"Answer"}},{"name":"Verlaagt AI-detectie van sepsis het aantal sterfgevallen?","@type":"Question","acceptedAnswer":{"text":"Een studie uit 2022 met meer dan 764.000 patiëntcontacten in vijf Amerikaanse ziekenhuizen vond dat sepsispatiënten 18% minder kans hadden om in het ziekenhuis te overlijden wanneer zorgverleners op de waarschuwingen handelden, zoals CIDRAP en Healthcare Dive melden. De resultaten komen van de ontwikkelaars en hun partners en vergelijken patiënten met tijdige en niet-tijdige bevestiging van de waarschuwing. Ze bewijzen dus op zichzelf niet dat de waarschuwingen het verschil veroorzaakten.","@type":"Answer"}},{"name":"Zijn alle AI-sepsiswaarschuwingen even nauwkeurig?","@type":"Question","acceptedAnswer":{"text":"Nee. Een validatie van het Epic Sepsis Model aan de University of Michigan over 38.455 ziekenhuisopnames vond 33% sensitiviteit en 12% positief voorspellende waarde. Het miste 67% van de patiënten met sepsis en sloeg bij 18% van alle patiënten alarm. Vraag elke leverancier om onafhankelijke validatie en gegevens over valse alarmen.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Gerelateerde inzichten

- [AI in UK Healthcare: What to Check Before You Buy](/blog/ai-in-uk-healthcare-what-to-check-before-you-buy/)
- [Exploring AI Services for Healthcare in Nepal](/blog/exploring-ai-services-for-healthcare-in-nepal/)
- [FTC onderzoekt AI-labs vanwege agents die uit de bocht vliegen: wat bedrijven kunnen doen](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/)

## Bronnen

- Healthcare Dive, [Bayesian Health gets FDA nod for AI sepsis detection tool](https://www.healthcaredive.com/news/bayesian-health-gets-fda-nod-for-ai-sepsis-detection-tool/820107/), 12 mei 2026
- CIDRAP, [FDA clears first AI-based early warning system for sepsis](https://www.cidrap.umn.edu/sepsis/fda-clears-first-ai-based-early-warning-system-sepsis)
- Wong et al., [External validation of a widely implemented proprietary sepsis prediction model in hospitalized patients](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781313), JAMA Internal Medicine, 2021

</div>
