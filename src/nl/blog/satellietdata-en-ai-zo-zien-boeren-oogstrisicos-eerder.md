---
templateEngineOverride: "njk, md"
title: "Satellietdata en AI: zo zien boeren oogstrisico's eerder"
description: "Wat satellietbeelden, weerdata en AI kunnen voorspellen over oogstopbrengsten, met een studie naar rijst in de Nepalese Terai, en waar de grenzen liggen."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "satellite-data-ai-farmers-see-crop-risks-earlier"
category: "Inzichten"
pillar: "future-of-industries"
readTime: 8
featuredImage: "/assets/images/blog/satellietdata-en-ai-zo-zien-boeren-oogstrisicos-eerder.svg"
featuredImageAlt: "Abstracte kleurverloop als achtergrond"
---

<div class="container-custom py-12 md:py-20">

**Kort samengevat:** Satellieten leveren nu gratis beschikbare beelden van dezelfde velden gedurende het hele seizoen, en AI-modellen kunnen leren hoe die beelden, het weer en de bodem samenhangen met oogsten. Een peer-reviewed studie uit 2021 naar rijst in de Nepalese Terai vond een deep-learningmodel dat veel nauwkeuriger was dan klassieke regressiemethoden, maar het was getraind op opbrengstcijfers op districtsniveau uit drie jaar. Veldpiloten van NASA Harvest en FAO wijzen erop dat de echte bottleneck niet de satellieten zijn, maar betrouwbare gegevens van het veld.

## Belangrijkste punten

- Een studie in *Remote Sensing* uit 2021 bouwde met RicePAL een rijstdatabase voor 20 districten van de Nepalese Terai uit Sentinel-2-beelden plus klimaat- en bodemdata voor 2016-2018.
- Het 3D-CNN van de auteurs haalde in hun experimenten in het beste geval een fout van ongeveer 89 kg/ha, tegen ongeveer 336 kg/ha voor de beste klassieke regressiemethode die ze testten.
- De referentiewaarden waren één opbrengstcijfer per district per jaar, gelijk verdeeld over de rijstpixels. De fouten zijn dus gemeten tegen afgevlakte labels.
- NASA Harvest en FAO melden dat ministeries in Malawi en Namibia satellietgebaseerde instrumenten en mobiele enquêtes in echte beslissingen gebruikten, en dat gegevens van het veld de belangrijkste bottleneck blijven.
- Een CGIAR-hoofdstuk uit 2026 laat zien dat een eenvoudigere aanpak met een gewasmodel een dreigende maismislukking in de Terai halverwege het seizoen kan signaleren, op basis van dagelijkse klimaatdata.

## Het bewijs: wat deed de Nepal-studie?

Het anker van dit artikel is een peer-reviewed paper, [Rice-Yield Prediction with Multi-Temporal Sentinel-2 Data and 3D CNN: A Case Study in Nepal](https://www.mdpi.com/2072-4292/13/7/1391), van Ruben Fernandez-Beltran, Tina Baidar van de Nepalese Survey Department, Jian Kang en Filiberto Pla, gepubliceerd op 4 april 2021 in *Remote Sensing*.

De auteurs bouwden uit Sentinel-2-satellietbeelden, klimaatdata en bodemdata een nieuwe database, RicePAL genoemd, voor 20 districten van de Terai, het laagland in het zuiden van Nepal. Ze wijzen erop dat de Terai 49% van het landbouwareaal van het land en ongeveer 70% van de rijstproductie omvat en dus belangrijk is voor de nationale voedselzekerheid. Hun doelwaarde was de rijstopbrengst die het Nepalese ministerie van Landbouw en Veeteelt publiceerde voor 2016-2018, en ze maakten de dataset [openbaar op GitHub](https://github.com/rufernan/RicePAL).

## Wat doet de technologie?

De keten van data naar voorspelling is eenvoudig te beschrijven:

1. **Data erin.** Een reeks Sentinel-2-beelden over het rijstseizoen, een kaart van waar rijst wordt verbouwd en klimaat- en bodemlagen.
2. **Model.** Een driedimensionaal convolutioneel neuraal netwerk, een deep-learningmodel dat naar naburige pixels en verandering in de tijd kijkt en is getraind om die input te koppelen aan de geregistreerde opbrengst.
3. **Voorspelling eruit.** Een geschatte opbrengst per rijstpixel (20 x 20 m), teruggerekend naar kilogram per hectare.

Twee bevindingen uit het paper zijn de moeite waard. Beelden van meerdere tijdstippen in plaats van één waren een sleutelfactor voor de nauwkeurigheid. En klimaat- en bodemdata hielpen vooral als het model naar kleine pixelblokken keek, bij grotere blokken werkten de beelden alleen het best.

## Wat is er veranderd?

Volgens de auteurs berust de klassieke schatting van rijstopbrengsten vooral op gewasmonsters, enquêtes en veldverificatierapporten. In hun experimenten had de beste klassieke regressiemethode (een Gaussiaanse-procesregressie) in het beste geval een fout van ongeveer 336 kg/ha, terwijl hun 3D-CNN ongeveer 89 kg/ha haalde. Gemiddeld over hun experimenten had het voorgestelde model een fout van 183 kg/ha, een standaard 3D-CNN ongeveer 253 kg/ha en een 2D-CNN ongeveer 250 kg/ha. Dit zijn de eigen resultaten van de auteurs op hun eigen dataset.

Ook het veldwerk verandert. Een door NASA Harvest met FAO geleide en door USAID gefinancierde pilot, [Improved Yield Estimates to Inform Agricultural and Food Security Interventions](https://www.nasaharvest.org/news/nasa-harvest-partners-fao-improve-agricultural-monitoring-across-malawi-namibia-and-kazakhstan), startte in 2022 in Malawi, Namibië en Kazachstan. In Namibië verzamelden mobiele beoordelingen volgens NASA Harvest ongeveer 1300 enquêtes per beoordeling, tegen ongeveer 200 bij een gewone papieren beoordeling. Het ministerie in Malawi ontvangt maandelijkse opbrengstvoorspellingen van een model genaamd GEOCIF, dat machine learning en teledetectie combineert, en volgens NASA Harvest zijn de instrumenten operationeel gebruikt voor maatregelen rond voedselzekerheid.

## Wie profiteert?

De hier bekeken bronnen wijzen vooral op publieke instellingen. Ministeries van landbouw gebruiken satellietgebaseerde voorspellingen en geolocatie-enquêtes voor nationale oogstbeoordelingen, en volgens NASA Harvest hebben zuid-Afrikaanse landen opbrengstvoorspellingen gevraagd voor droogtebeoordeling. Het CGIAR-hoofdstuk uit 2026 van Nirman Shrestha en D. Raes, [AquaCrop model as a tool to forecast crop yield during the growing season: lessons from Nepal, South Asia](https://cgspace.cgiar.org/items/792b36a0-f6f8-4ab9-9920-225de8de4122), zegt dat vroege waarschuwing voor oogstmislukking in de Terai boeren en overheidsfunctionarissen voorsprong kan geven. Dat hoofdstuk gebruikt een gewasgroeisimulatiemodel, geen machine learning, met dagelijkse klimaatdata voor mais.

Voor boeren is het mogelijke voordeel eerdere informatie over irrigatie- en voedselzekerheidsrisico's. Voor bedrijven zoals verzekeraars, kopers en agritechbedrijven zouden vergelijkbare voorspellingen in principe kunnen helpen, maar geen van de bekeken bronnen documenteert dat gebruik, dus beweren we het niet.

## Beperkingen en open vragen

- **Grove labels.** De Nepal-studie had één opbrengstcijfer per district per jaar, 20 districten en drie jaar. De auteurs verdeelden het totaal van elk district gelijk over zijn rijstpixels, dus de gerapporteerde fouten zijn gemeten tegen afgevlakte labels, niet tegen afzonderlijke velden.
- **Gegevens van het veld zijn schaars.** De auteurs noemen het gebrek aan opbrengstgegevens van het veld een grote uitdaging in ontwikkelingslanden. NASA Harvest zegt dat gegevens om satellietproducten te controleren ontbreken en "een enorme bottleneck" zijn.
- **Kleine percelen.** NASA Harvest wijst erop dat kleine landeigenaren vaak minder dan een halve hectare met gemengde teelt bewerken en dat beelden met hoge resolutie voor zulke systemen soms te weinig detail bieden.
- **Smalle reikwijdte.** De Nepal-studie behandelt één gewas en noemt andere gewassen als toekomstig werk. Het CGIAR-hoofdstuk behandelt één gewas in één regio en zegt dat breder gebruik meer validatie vraagt.
- **Bereik.** De bronnen beschrijven instrumenten die ministeries gebruiken. Ze laten niet zien dat voorspellingen individuele kleine boeren bereiken, dus connectiviteit en aflevering blijven open vragen.
- **Leeftijd.** De Nepal-studie gebruikt data uit 2016-2018 en verscheen in 2021, dus ze toont haalbaarheid, geen huidige prestaties in de praktijk.

## Wat gebeurt er hierna?

De Nepal-auteurs stellen voor meer jaren beelden te gebruiken, voorgetrainde netwerken in te zetten tegen schaarse data en de aanpak uit te breiden naar andere gewassen. NASA Harvest en FAO melden dat Namibië de mobiele beoordelingen voortzette tot in het seizoen 2023/2024 en dat het ministerie in Malawi maandelijkse voorspellingen blijft ontvangen.

Voor organisaties in de landbouw is een praktische lezing van dit bewijs (ons voorstel, geen bevinding van de studies):

1. **Investeer eerst in gegevens van het veld.** Geolocatie-oogstgegevens maken satellietvoorspellingen geloofwaardig.
2. **Toets lokaal.** Vraag naar de fout voor uw gewas, regio en seizoen, niet naar een wereldwijd gemiddelde.
3. **Gebruik voorspellingen als één input.** Combineer ze met veldrapporten en lokale kennis.
4. **Plan de aflevering.** Een voorspelling helpt alleen als ze de persoon bereikt die kan handelen.

## De korte versie

Satellietbeelden, weerdata en AI kunnen oogstopbrengsten in gepubliceerde tests eerder en nauwkeuriger schatten dan klassieke methoden, waaronder rijst in de Nepalese Terai. Het bewijs is het sterkst voor publieke instanties en nationale beoordelingen en het zwakst bij kleine percelen en aflevering aan boeren. De belangrijkste beperking zijn niet de satellieten, maar de kwaliteit en hoeveelheid gegevens van het veld.

Hoe dit past bij AI-gebruik in Nepal leest u in ons overzicht van [AI-trends in Nepal voor 2026](/blog/state-of-ai-nepal-2026/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Veelgestelde vragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Kan AI oogsten voorspellen met satellietbeelden?</p><p class="text-gray-600 leading-relaxed">In onderzoeksomgevingen wel, tot op bruikbare hoogte. Een studie uit 2021 naar 20 districten in de Nepalese Terai gebruikte Sentinel-2-beelden met klimaat- en bodemdata om rijstopbrengsten te schatten. Het deep-learningmodel had in het beste geval een fout van ongeveer 89 kg/ha, tegen ongeveer 336 kg/ha voor de beste klassieke regressiemethode die de auteurs testten. De opbrengstcijfers waren alleen op districtsniveau beschikbaar, dus het resultaat toont potentie, geen bewijs op veldniveau.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Waarom zijn gegevens van het veld zo'n probleem voor satellietinstrumenten in de landbouw?</p><p class="text-gray-600 leading-relaxed">Satellietmodellen hebben echte oogstgegevens nodig om van te leren en aan te toetsen. NASA Harvest zegt dat er te weinig gegevens van het veld zijn om satellietproducten voor kleinschalige landbouw te controleren, een "enorme bottleneck", en de Nepal-studie had maar één opbrengstcijfer per district per jaar.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Werkt deze technologie voor kleine boeren?</p><p class="text-gray-600 leading-relaxed">Het is moeilijker. NASA Harvest wijst erop dat kleine landeigenaren vaak minder dan een halve hectare bewerken en gewassen mengen, wat satellietkartering lastig maakt. De piloten die tot nu toe zijn beschreven ondersteunen ministeries en nationale oogstbeoordelingen, en de bronnen laten niet zien dat voorspellingen individuele boeren bereiken.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat moet een organisatie doen voordat ze satelliet- en AI-opbrengstvoorspellingen gebruikt?</p><p class="text-gray-600 leading-relaxed">Geolocatiegegevens van het eigen gebied verzamelen, elke voorspelling toetsen aan lokale oogstcijfers en de uitkomst gebruiken als één input voor beslissingen, niet als garantie. Vraag naar de fout voor uw gewas, regio en seizoen.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Kan AI oogsten voorspellen met satellietbeelden?","@type":"Question","acceptedAnswer":{"text":"In onderzoeksomgevingen wel, tot op bruikbare hoogte. Een studie uit 2021 naar 20 districten in de Nepalese Terai gebruikte Sentinel-2-beelden met klimaat- en bodemdata om rijstopbrengsten te schatten. Het deep-learningmodel had in het beste geval een fout van ongeveer 89 kg/ha, tegen ongeveer 336 kg/ha voor de beste klassieke regressiemethode die de auteurs testten. De opbrengstcijfers waren alleen op districtsniveau beschikbaar, dus het resultaat toont potentie, geen bewijs op veldniveau.","@type":"Answer"}},{"name":"Waarom zijn gegevens van het veld zo'n probleem voor satellietinstrumenten in de landbouw?","@type":"Question","acceptedAnswer":{"text":"Satellietmodellen hebben echte oogstgegevens nodig om van te leren en aan te toetsen. NASA Harvest zegt dat er te weinig gegevens van het veld zijn om satellietproducten voor kleinschalige landbouw te controleren, een \"enorme bottleneck\", en de Nepal-studie had maar één opbrengstcijfer per district per jaar.","@type":"Answer"}},{"name":"Werkt deze technologie voor kleine boeren?","@type":"Question","acceptedAnswer":{"text":"Het is moeilijker. NASA Harvest wijst erop dat kleine landeigenaren vaak minder dan een halve hectare bewerken en gewassen mengen, wat satellietkartering lastig maakt. De piloten die tot nu toe zijn beschreven ondersteunen ministeries en nationale oogstbeoordelingen, en de bronnen laten niet zien dat voorspellingen individuele boeren bereiken.","@type":"Answer"}},{"name":"Wat moet een organisatie doen voordat ze satelliet- en AI-opbrengstvoorspellingen gebruikt?","@type":"Question","acceptedAnswer":{"text":"Geolocatiegegevens van het eigen gebied verzamelen, elke voorspelling toetsen aan lokale oogstcijfers en de uitkomst gebruiken als één input voor beslissingen, niet als garantie. Vraag naar de fout voor uw gewas, regio en seizoen.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Gerelateerde inzichten

- [AI Adoption Trends in Nepal for 2026: Key Insights](/blog/state-of-ai-nepal-2026/)
- [California's Robotaxi Law: What It Means for Autonomous AI](/blog/robotaxis-first-responders-california-law-future-of-autonomous-systems/)

## Bronnen

- R. Fernandez-Beltran, T. Baidar, J. Kang en F. Pla, [Rice-Yield Prediction with Multi-Temporal Sentinel-2 Data and 3D CNN: A Case Study in Nepal](https://www.mdpi.com/2072-4292/13/7/1391), *Remote Sensing* 13(7), 1391, 4 april 2021
- NASA Harvest, [NASA Harvest Partners with FAO to Improve Agricultural Monitoring Across Malawi, Namibia, and Kazakhstan](https://www.nasaharvest.org/news/nasa-harvest-partners-fao-improve-agricultural-monitoring-across-malawi-namibia-and-kazakhstan), pilot gestart in 2022
- NASA Harvest, [Proving the Value of Earth Observation Data for Small-Scale Agriculture](https://www.nasaharvest.org/news/a-hrefhttpsnasaharvestorgnewsproving-value-earth-observation-data-small-scale-agricultureproving-the-value-of-earth-observation-data-for-small-scale-agriculturea)
- N. Shrestha en D. Raes, [AquaCrop model as a tool to forecast crop yield during the growing season: lessons from Nepal, South Asia](https://cgspace.cgiar.org/items/792b36a0-f6f8-4ab9-9920-225de8de4122), Elsevier, 2026

</div>
