---
templateEngineOverride: "njk, md"
title: "Van dashboards naar beslissingen: de toekomst van BI"
description: "Business-intelligencetools verschuiven van grafieken die je leest naar agents die bedrijfsdata onderzoeken en erop handelen."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "from-dashboards-to-decisions-the-future-of-business-intelligence"
category: "Inzichten"
pillar: "ai-business"
readTime: 8
featuredImage: "/assets/images/blog/van-dashboards-naar-beslissingen-de-toekomst-van-business-intelligence.svg"
featuredImageAlt: "Abstracte kleurverloop als achtergrond"
---

<div class="container-custom py-12 md:py-20">

**Kort samengevat:** Business intelligence verschuift van dashboards die mensen lezen naar AI-agents die bedrijfsdata onderzoeken en in sommige producten ook handelen. In juni 2026 kondigde Databricks dit soort agents aan als algemeen beschikbaar. Onafhankelijke enquêtes laten zien dat veel leidinggevenden AI al gebruiken bij beslissingen, maar zich zelden volwassen voelen, en dat het vertrouwen in de data en in de opbrengst beperkt is.

## Belangrijkste punten

- Op 16 juni 2026 kondigde Databricks Genie One en Genie Agents aan, die het omschrijft als AI-collega's en agents die werken over de data en bedrijfstools van een organisatie heen.
- Deloittes enquête van 2026 onder meer dan 9.000 leidinggevenden vond dat 60% van de leidinggevenden regelmatig AI gebruikt bij beslissingen, maar dat slechts 5% zichzelf als koploper ziet.
- Gartners enquête onder 353 data- en AI-leiders vond dat slechts 39% erop vertrouwt dat de huidige AI-investeringen de financiële prestaties verbeteren.
- Gartner vond ook dat organisaties met succesvolle AI-initiatieven tot vier keer meer, als percentage van de omzet, investeren in datakwaliteit, governance, vaardigheden en verandermanagement.
- Open vragen gaan over datakwaliteit, verantwoordelijkheid voor beslissingen en hoeveel een agent zelfstandig mag doen.

## Het bewijs

Dit artikel volgt één productaankondiging en twee onafhankelijke enquêtes.

**De aankondiging.** Op 16 juni 2026 [kondigde Databricks](https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents) Genie One, Genie Agents en Genie Ontology aan. Volgens Databricks is Genie One een "datakundige AI-collega" voor zakelijke gebruikers die verder gaat dan vragen beantwoorden in gewone taal: het kan schema's en meldingen uitvoeren, data bewaken, documenten maken en verbinden met tools zoals Slack, Microsoft Teams en Gmail. Genie Agents zijn domeinspecifieke agents die vanuit een prompt worden gemaakt, redeneren over tabellen en ook over documenten en bestanden, en meerstaps-werkstromen afronden. Databricks zegt dat beide algemeen beschikbaar zijn en dat rechten "standaard bij elk antwoord worden afgedwongen" via de toegangsbeheer van het bronsysteem of de eigen Unity Catalog. Dit zijn de eigen beschrijvingen van de leverancier.

**De enquêtes.** In zijn [Global Human Capital Trends 2026](https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends/2026/decision-making-with-ai.html) (gepubliceerd op 3 maart 2026) ondervroeg Deloitte meer dan 9.000 leidinggevenden uit het bedrijfsleven en HR in 89 landen en meldt dat 60% van de leidinggevenden regelmatig AI gebruikt bij beslissingen en 64% AI-beslissingen zeer belangrijk vindt voor hun huidige succes. Slechts 5% ziet zichzelf als koploper en 57% van de organisaties werkt op een laag volwassenheidsniveau bij beslissingen. Los daarvan vond een Gartner-enquête onder 353 leiders op het gebied van data, analytics en AI, gehouden in november en december 2025 en [aangekondigd op 16 april 2026](https://www.gartner.com/en/newsroom/press-releases/2026-04-16-gartner-says-organizations-with-successful-ai-initiatives-invest-up-to-four-times-more-in-data-and-analytics-foundations), dat slechts 39% erop vertrouwt dat de huidige AI-investeringen van hun bedrijf een positief effect hebben op de financiële prestaties.

Databricks is één voorbeeld, en andere data- en analyticsleveranciers bouwen vergelijkbare assistenten. Dit artikel vergelijkt geen producten.

## Wat de technologie doet

Het gemeenschappelijke patroon heeft drie lagen:

1. **Bedrijfsdata.** Tabellen, documenten, dashboards en de zakelijke definities eromheen (wat telt als "omzet" of "actieve klant").
2. **Een redeneer- of agentlaag.** Een model dat een vraag in gewone taal omzet in query's, die toetst aan die context en zijn antwoord uitlegt. Databricks noemt zijn contextlaag een "ontologie" en zegt dat die wordt opgebouwd uit tabellen, query's, dashboards en gekoppelde apps.
3. **Een aanbevolen of uitgevoerde actie.** Het systeem beveelt een volgende stap aan, stuurt een melding of document, of voert, bij agents die daarvoor zijn ingericht, een meerstaps-werkstroom uit.

De eerste twee lagen lijken op een zeer capabele analist. De derde is voor de meeste bedrijven nieuw.

## Wat er is veranderd

Een traditioneel dashboard beantwoordt vragen die iemand vooraf bedacht heeft. Een mens leest het, bepaalt wat het betekent en handelt. Agents veranderen drie dingen:

- **Wie kan vragen.** Een manager kan in een chattool een vraag stellen zonder te wachten tot een analist een rapport bouwt.
- **Wanneer er wordt gevraagd.** Meldingen en monitoring betekenen dat het systeem een probleem kan signaleren zonder dat iemand kijkt.
- **Wie handelt.** Bij sommige taken verloopt de lus van inzicht naar actie zonder mens ertussen.

De Deloitte-enquête suggereert dat dit terechtkomt bij organisaties die nog niet zeker zijn van hoe ze beslissen: slechts 5% zegt voorop te lopen in het gebruik van AI bij beslissingen. Deloittes artikel haalt ook een Gartner-projectie aan dat tegen 2027 de helft van de zakelijke beslissingen door AI-agents wordt ondersteund of geautomatiseerd. Dat is een projectie, geen meting.

## Wie profiteert

**Zakelijke teams** krijgen sneller antwoorden zonder query's te schrijven. **Datateams** kunnen minder tijd besteden aan routinerapporten en meer aan definities en kwaliteit. **Kleinere bedrijven** profiteren mogelijk het meest, omdat toegang tot data in gewone taal een oprichter of operationeel manager vragen laat stellen waarvoor vroeger een eigen analist nodig was. Dat voordeel hangt af van data die het vragen waard is, en daar zijn veel kleine bedrijven het zwakst.

## Beperkingen en open vragen

- **Datakwaliteit.** Een agent redeneert over wat hij krijgt. Als gegevens onvolledig, dubbel of per team anders gedefinieerd zijn, klinken de antwoorden zeker en kloppen ze toch niet. Gartners bevinding dat succesvolle AI-organisaties tot vier keer meer investeren in fundamenten zoals datakwaliteit en governance wijst in dezelfde richting.
- **Verantwoordelijkheid.** Als een agent een actie aanbeveelt of uitvoert, moet iemand de uitkomst verantwoorden. Deloittes advies is beslissen als strategische discipline te behandelen en de relatie tussen mens en machine bewust te ontwerpen.
- **Vertrouwen.** Slechts 39% van de door Gartner ondervraagde leiders vertrouwt erop dat hun AI-investeringen financieel renderen.
- **Hoeveel autonomie.** Databricks beschrijft agents die zonder stapsgewijs toezicht kunnen handelen. Hoeveel toezicht een bedrijf toevoegt, zoals goedkeuringen, uitgavenlimieten en logboeken, is zijn eigen keuze.
- **Leveranciersclaims.** De hier beschreven mogelijkheden en het rechtengedrag zijn die van de leverancier en horen op uw eigen data getest te worden.

## Wat komt hierna

Verwacht dat meer business-intelligence- en dataplatforms agents leveren die kunnen handelen, en dat de controles eromheen meer aandacht krijgen. Voor de meeste bedrijven is het werk op korte termijn niet een agent kiezen, maar de data klaarmaken, definities afstemmen en bepalen welke beslissingen een agent alleen mag aanbevelen en welke hij mag uitvoeren.

Een praktische volgorde, die wij bij Zunkiree Labs aanraden:

1. Kies een beslissing die u steeds opnieuw neemt, zoals welke leads op te volgen of welke facturen aan te manen.
2. Controleer of de data erachter volledig, actueel en van een benoemde eigenaar voorzien is.
3. Laat de agent eerst alleen aanbevelen en eis een goedkeuring door een mens voordat hij handelt.
4. Leg vast wat hij deed en waarom, en beoordeel de resultaten voordat u zijn bereik vergroot.

## De korte versie

Business intelligence verschuift van dashboards die tonen naar agents die onderzoeken en soms handelen. De producten zijn echt en bij minstens één grote leverancier algemeen beschikbaar, maar enquêtes tonen dat organisaties nog vroeg zijn met AI bij beslissingen en dat datakwaliteit, verantwoordelijkheid en de mate van autonomie openstaan. Maak eerst de data en de goedkeuringsregels klaar.

Meer lezen: [wie wint in de enterprise-AI-markt](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/) en [waarom AI-agents hun eigen infrastructuur krijgen](/blog/ai-agents-are-getting-their-own-infrastructure/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Veelgestelde vragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Wat is het verschil tussen een dashboard en een AI-agent voor bedrijfsdata?</p><p class="text-gray-600 leading-relaxed">Een dashboard toont antwoorden op vragen die iemand vooraf heeft gepland, en een mens bepaalt wat te doen. Een AI-agent voor bedrijfsdata kan een vraag in gewone taal oppakken, over data heen onderzoeken, zijn redenering uitleggen en in sommige producten meldingen sturen, documenten maken of meerstaps-werkstromen afronden.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat kondigde Databricks aan in juni 2026?</p><p class="text-gray-600 leading-relaxed">Op 16 juni 2026 kondigde Databricks Genie One, Genie Agents en Genie Ontology aan. Databricks omschrijft Genie One als een datakundige AI-collega voor zakelijke gebruikers en Genie Agents als domeinspecifieke agents die redeneren over gestructureerde en ongestructureerde data. Beide zijn volgens Databricks algemeen beschikbaar. Dit zijn de eigen beschrijvingen van de leverancier.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Hoeveel leidinggevenden gebruiken AI bij beslissingen?</p><p class="text-gray-600 leading-relaxed">In Deloittes enquête Global Human Capital Trends 2026 onder meer dan 9.000 leidinggevenden uit het bedrijfsleven en HR zei 60% van de leidinggevenden regelmatig AI te gebruiken bij beslissingen, maar zag slechts 5% zichzelf als koploper.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat moet een bedrijf doen voordat het AI-agents op zijn data loslaat?</p><p class="text-gray-600 leading-relaxed">Gartner vond dat organisaties met succesvolle AI-initiatieven tot vier keer meer, als percentage van de omzet, investeren in datakwaliteit, governance, vaardigheden en verandermanagement. Een verstandige start is controleren of de data volledig, actueel en van een eigenaar voorzien is, beginnen met agents die aanbevelen in plaats van handelen, en logboeken en goedkeuringen invoeren.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Wat is het verschil tussen een dashboard en een AI-agent voor bedrijfsdata?","@type":"Question","acceptedAnswer":{"text":"Een dashboard toont antwoorden op vragen die iemand vooraf heeft gepland, en een mens bepaalt wat te doen. Een AI-agent voor bedrijfsdata kan een vraag in gewone taal oppakken, over data heen onderzoeken, zijn redenering uitleggen en in sommige producten meldingen sturen, documenten maken of meerstaps-werkstromen afronden.","@type":"Answer"}},{"name":"Wat kondigde Databricks aan in juni 2026?","@type":"Question","acceptedAnswer":{"text":"Op 16 juni 2026 kondigde Databricks Genie One, Genie Agents en Genie Ontology aan. Databricks omschrijft Genie One als een datakundige AI-collega voor zakelijke gebruikers en Genie Agents als domeinspecifieke agents die redeneren over gestructureerde en ongestructureerde data. Beide zijn volgens Databricks algemeen beschikbaar. Dit zijn de eigen beschrijvingen van de leverancier.","@type":"Answer"}},{"name":"Hoeveel leidinggevenden gebruiken AI bij beslissingen?","@type":"Question","acceptedAnswer":{"text":"In Deloittes enquête Global Human Capital Trends 2026 onder meer dan 9.000 leidinggevenden uit het bedrijfsleven en HR zei 60% van de leidinggevenden regelmatig AI te gebruiken bij beslissingen, maar zag slechts 5% zichzelf als koploper.","@type":"Answer"}},{"name":"Wat moet een bedrijf doen voordat het AI-agents op zijn data loslaat?","@type":"Question","acceptedAnswer":{"text":"Gartner vond dat organisaties met succesvolle AI-initiatieven tot vier keer meer, als percentage van de omzet, investeren in datakwaliteit, governance, vaardigheden en verandermanagement. Een verstandige start is controleren of de data volledig, actueel en van een eigenaar voorzien is, beginnen met agents die aanbevelen in plaats van handelen, en logboeken en goedkeuringen invoeren.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Gerelateerde inzichten

- [Anthropic, OpenAI en Google in het bedrijfsleven: wie wint en waarom de cijfers verschillen](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/)
- [Waarom AI-agents hun eigen infrastructuur krijgen](/blog/ai-agents-are-getting-their-own-infrastructure/)

## Bronnen

- Databricks, [Introducing Genie One, Genie Ontology and Genie Agents](https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents), 16 juni 2026
- Deloitte, [Decision-making with AI, 2026 Global Human Capital Trends](https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends/2026/decision-making-with-ai.html), 3 maart 2026
- Gartner, [Organizations with successful AI initiatives invest up to four times more in data and analytics foundations](https://www.gartner.com/en/newsroom/press-releases/2026-04-16-gartner-says-organizations-with-successful-ai-initiatives-invest-up-to-four-times-more-in-data-and-analytics-foundations), 16 april 2026 (de cijfers zijn gecontroleerd in een [herpublicatie door ABES](https://abes.org.br/en/gartner-aponta-que-organizacoes-com-iniciativas-de-inteligencia-artificial-bem-sucedidas-investem-ate-quatro-vezes-mais-em-fundamentos-de-dados-e-analytics/), omdat de Gartner-pagina geautomatiseerde toegang blokkeerde)

</div>
