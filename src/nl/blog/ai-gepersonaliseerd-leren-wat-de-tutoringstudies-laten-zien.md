---
templateEngineOverride: "njk, md"
title: "AI en gepersonaliseerd leren: wat tutoringstudies laten zien"
description: "Drie recente studies naar AI-tutoring laten echte winst zien als de tutor is ontworpen rond hoe mensen leren, en echte schade als dat niet zo is."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "ai-personalized-learning-what-tutoring-trials-show"
category: "Inzichten"
pillar: "ai-education"
readTime: 9
featuredImage: "/assets/images/blog/ai-gepersonaliseerd-leren-wat-de-tutoringstudies-laten-zien.svg"
featuredImageAlt: "Abstracte kleurverloop als achtergrond"
---

<div class="container-custom py-12 md:py-20">

**Kort samengevat:** Het sterkste recente bewijs over AI en gepersonaliseerd leren komt uit gecontroleerde onderzoeken en wijst twee kanten op. Een natuurkundeproef in Harvard liet zien dat studenten met een zorgvuldig ontworpen AI-tutor meer leerden in minder tijd dan in een les met actief leren. Een proef met bijna 1.000 middelbare scholieren in Turkije liet zien dat onbeperkte toegang tot GPT-4 leerlingen slechter af liet zijn zodra die wegviel, terwijl een versie met ingebouwde vangrails die schade grotendeels voorkwam. De opzet van de tutor bepaalt de uitkomst, niet de aanwezigheid van AI.

## Belangrijkste punten

- Een gerandomiseerde crossover-proef in Harvard (194 geanalyseerde studenten) vond dat studenten met een AI-tutor aanzienlijk meer leerden in minder tijd dan in een les met actief leren.
- Die tutor was gebouwd op onderzoeksgebaseerde onderwijsprincipes en vooraf geschreven stapsgewijze oplossingen. Een algemene chatbotprompt volstond volgens de auteurs niet om opgaven met meerdere delen te structureren.
- In een PNAS-veldexperiment met bijna 1.000 middelbare scholieren bij wiskunde scoorden leerlingen met onbeschermde GPT-4-toegang 17% slechter op een latere toets zonder AI dan leerlingen die nooit toegang hadden. Vangrails namen de schade grotendeels weg.
- Een pilot van de Wereldbank in Nigeria meldt na zes weken door docenten ondersteunde AI-bijles na schooltijd ongeveer 0,3 standaarddeviatie winst, maar het gaat om een blogsamenvatting en niet om een peer-reviewed artikel.
- Geen van deze studies laat zien dat AI docenten vervangt, en geen ervan is in Nepal uitgevoerd.


## Het bewijs

Drie studies geven een bruikbaar beeld. Elk is een echt experiment, en ze zeggen niet allemaal hetzelfde.

**Natuurkunde in Harvard (Scientific Reports, juni 2025).** Kestin, Miller, Klales, Milbourne en Ponti voerden een gerandomiseerde crossover-proef uit in een inleidende natuurkundecursus voor studenten life sciences. [Het artikel](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/) analyseerde 194 studenten (233 waren ingeschreven). Gedurende twee opeenvolgende weken leerde elke student één onderwerp (oppervlaktespanning) in de les met actief leren en het andere (stroming van vloeistoffen) met een AI-tutor thuis, zodat iedereen als eigen vergelijking diende. De auteurs melden een mediane natoetsscore van 4,5 voor de AI-tutor tegenover 3,5 voor de les met actief leren, ruim twee keer zo grote leerwinst en een statistisch resultaat van p < 10^-8. In een lineaire regressie schatten ze een effect van ongeveer 0,63 standaarddeviatie. Studenten beoordeelden de AI-les ook hoger op betrokkenheid (4,1 tegenover 3,6 op een vijfpuntsschaal) en motivatie (3,4 tegenover 3,1), zonder significant verschil in plezier of growth mindset. De mediane tijd met de tutor was 49 minuten, en de auteurs concluderen dat studenten in minder tijd meer leerden. Een [verslag van de Harvard Gazette](https://news.harvard.edu/gazette/story/2024/09/professor-tailored-ai-tutor-to-physics-course-engagement-doubled/) van september 2024 beschrijft dezelfde studie.

**Wiskunde op Turkse middelbare scholen (PNAS, 2025).** Bastani en collega's voerden [een veldexperiment](https://ideas.repec.org/a/nas/journl/v122y2025pe2422633122.html) uit met bijna 1.000 middelbare scholieren en vergeleken een gewone ChatGPT-achtige interface ("GPT Base") met een versie waarvan de prompts het leren moesten beschermen ("GPT Tutor"). De prestaties tijdens het oefenen verbeterden met AI-toegang. Maar toen de toegang werd weggenomen, presteerden leerlingen die GPT Base hadden gebruikt slechter dan leerlingen die nooit toegang hadden, met 17% lagere cijfers. Volgens de auteurs verzachtte de GPT Tutor-versie die schade grotendeels, en ze beschrijven onbeperkt GPT-4 als een "kruk" tijdens het oefenen.

**Pilot na schooltijd in Nigeria (Wereldbank, januari 2025).** In een [blogbericht](https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria) beschrijft het team van de Wereldbank een zesweekse naschoolse pilot in Benin City, staat Edo, medio 2024, waarbij generatieve AI het leren ondersteunde met hulp van docenten. Ze melden leerverbeteringen van ongeveer 0,3 standaarddeviatie, die ze omschrijven als "gelijk aan bijna twee jaar gewoon leren in slechts zes weken". Ze merken op dat meisjes, die aanvankelijk achterliepen op jongens, nog meer leken te winnen en dat hun evaluatieopzet het ware effect waarschijnlijk onderschatte. Dit is de zwakste van de drie bronnen: het is de eigen samenvatting van de auteurs over een pilot, en het bericht noemt geen steekproefgroottes.

## Wat doet de technologie?

Op hoofdlijnen volgt gepersonaliseerd leren een eenvoudige keten: **leerdata, dan een model, dan een aangepast pad.**

- **Data.** De tutor ziet wat de leerling schrijft, waar die vastloopt en wat die antwoordt. In de Harvard-studie maten voor- en natoetsen wat studenten vooraf en achteraf wisten.
- **Model.** Een groot taalmodel leest die invoer en antwoordt. Wat telt, is hoe het wordt bijgestuurd. De Harvard-tutor gebruikte de GPT-API met door docenten geschreven, vraagspecifieke prompts, vooraf geschreven stapsgewijze oplossingen en een structuur die studenten door elk deel van een opgave leidde. De auteurs merken op: "een systeemprompt kon niet betrouwbaar genoeg structuur bieden om opgaven met meerdere delen te begeleiden."
- **Aangepast pad.** De tutor geeft feedback en hints in het eigen tempo van de leerling, in plaats van dat de hele klas in één tempo meegaat. Leerlingen kunnen vragen stellen die ze voor een volle zaal misschien niet zouden stellen.

Het Turkse experiment laat de andere kant van dezelfde technologie zien. Een tutor die antwoorden geeft, levert betere oefenscores en slechter leren op. De Harvard-auteurs noemen zeven ontwerpprincipes, waaronder actief leren, het beheersen van cognitieve belasting, juiste oplossingen, tijdige feedback en zelfgekozen tempo. Het patroon in beide studies: de pedagogiek die in de tutor zit, telt zwaarder dan het model erachter.

## Wat is er veranderd?

Tot voor kort was een-op-eenbijles de gouden standaard, maar te duur om elke leerling te bieden. Nieuw is dat een tutor op elk uur beschikbaar kan zijn en kan reageren op de eigen woorden van de leerling, en dat onderzoekers dat nu in gerandomiseerde proeven meten, niet alleen in demo's. De claim van het Harvard-artikel is bescheiden: onder specifieke omstandigheden versloeg de AI-tutor een goed ontworpen les bij een kort onderwerp. Het beweert niet dat AI-tutoring klassikaal onderwijs in het algemeen overtreft.

## Wie profiteert?

- **Leerlingen in klassen met verschillende niveaus.** Een in de Gazette geciteerde Harvard-docent zei dat in een heterogene klas "studenten met een zeer sterke achtergrond zich kunnen vervelen, en degenen zonder moeite hebben om bij te blijven". Een tutor in eigen tempo kan beide groepen bedienen.
- **Leerlingen met weinig toegang tot bijles.** De Nigeriaanse pilot richtte zich op een omgeving waar extra les schaars is, en het team van de Wereldbank meldt daar winst. Zie dat als een bemoedigend vroeg signaal, niet als een vaststaand resultaat.
- **Docenten.** In het Nigeriaanse programma begeleidden docenten de sessies, en de Harvard-auteurs zien AI als iets dat het contactonderwijs niet moet vervangen. Het beschreven voordeel is meer tijd en gereedschap voor docenten, niet minder docenten.

## Wat zijn de beperkingen en open vragen?

- **Kort en smal.** De Harvard-studie besloeg twee weken, twee onderwerpen en één cursus, met een hoogpresterende studentengroep en ervaren docenten. De auteurs schrijven dat ze er niet van uitgaan dat gestructureerde AI-tutoring actief leren in de klas altijd verslaat, bijvoorbeeld waar complexe synthese en kritisch denken op hoger niveau nodig zijn.
- **Afhankelijk van de context.** De auteurs noemen omstandigheden die kunnen meespelen: een heterogene klas, goede instructievideo's, een capabel model, door experts geschreven prompts en een zorgvuldig opgebouwd kader. Valt er één weg, dan kan de uitkomst veranderen.
- **Te veel leunen op AI.** De Turkse proef is de duidelijkste waarschuwing. Leerlingen die op afroep antwoorden kregen, deden het zonder hulp slechter. De schade werd met vangrails grotendeels voorkomen, het is dus ook een ontwerpprobleem en niet alleen een risico.
- **Gelijkheid en toegang.** Winst hangt af van apparaten, connectiviteit, taal en docenten die met de tools kunnen werken. Geen van de drie studies beantwoordt wie er buiten de boot valt.
- **Leerlinggegevens en privacy.** Een AI-tutor werkt met wat leerlingen schrijven. De genoemde studies onderzoeken privacy niet, dus scholen moeten zelf vragen wat er wordt verzameld, waar het naartoe gaat en wie het kan zien.
- **Langetermijneffecten.** Het team van de Wereldbank noemt langetermijneffecten onbekend, en de Harvard-studie en de Nigeriaanse pilot zijn kort. We weten nog niet of de winst standhoudt.

## Wat gebeurt er hierna?

Dit is geen voorspelling, maar een lijst van waar u op kunt letten en wat u kunt vragen.

- **Kijk naar het ontwerp, niet naar het label.** Zegt een school of EdTech-aanbieder "AI-tutor", vraag dan of die hints en gestructureerde stappen geeft of alleen antwoorden, en of hij tegen een vergelijkingsgroep is getest.
- **Zoek langere, grotere, onafhankelijke proeven.** Het sterkste volgende bewijs zijn studies over meerdere periodes, vakken, leeftijden en landen, bij voorkeur gepubliceerd in peer-reviewed tijdschriften.
- **Pilot met docenten in de lus.** De best verdedigbare aanpak op basis van het huidige bewijs is AI als begeleide tutor met grenzen aan het geven van antwoorden, plus een toets zonder AI-toegang om echt leren te controleren.
- **Meet wat telt.** Controleer de prestaties zonder de tool, zoals de Turkse studie deed, en niet alleen de scores tijdens het gebruik.

Voor een school of opleider in Nepal of Zuid-Azië lijken de omstandigheden in deze studies, grote klassen met verschillende niveaus en schaarse een-op-eenhulp, herkenbaar. Maar geen van de drie proeven vond plaats in Nepal, dus de juiste stap is een kleine, gemeten lokale pilot. Meer over het gebruik ter plaatse leest u in onze [AI-trends in Nepal](/blog/state-of-ai-nepal-2026/).

## De korte versie

Gepersonaliseerd leren met AI is niet langer alleen een belofte: er zijn gecontroleerde proeven, en die laten echte winst zien als de tutor is gebouwd rond hoe mensen leren, en echte schade als hij gewoon antwoorden uitdeelt. De verstandige reactie is geen hype en geen afwijzing, maar vragen hoe de tutor is ontworpen, waarmee hij is vergeleken en of het geleerde standhoudt als de tool wegvalt.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Veelgestelde vragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Verbetert AI-tutoring het leren echt?</p><p class="text-gray-600 leading-relaxed">Dat kan, bij het juiste ontwerp. Een gerandomiseerde crossover-proef in Harvard (194 geanalyseerde studenten) vond dat studenten met een zorgvuldig ontworpen AI-tutor aanzienlijk meer leerden in minder tijd dan in een les met actief leren. Een PNAS-veldexperiment met bijna 1.000 leerlingen vond dat onbeperkte GPT-4-toegang de latere prestaties schaadde. Het ontwerp van de tutor bepaalt de uitkomst.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Kunnen leerlingen slechter worden door AI bij het leren?</p><p class="text-gray-600 leading-relaxed">Ja, als de AI alleen antwoorden levert. In de PNAS-studie scoorden leerlingen die bij het oefenen een gewone ChatGPT-achtige interface gebruikten 17% lager dan leerlingen die nooit AI-toegang hadden, nadat de AI was weggehaald. Een versie met vangrails verzachtte de schade grotendeels.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Zullen AI-tutors docenten vervangen?</p><p class="text-gray-600 leading-relaxed">Geen van deze studies ondersteunt dat. Het Nigeriaanse programma gebruikte door docenten ondersteunde sessies, en de in de Harvard Gazette geciteerde onderzoeker zei dat AI-tutors het contactonderwijs niet moeten vervangen. Het bewijs ondersteunt AI als begeleide aanvulling.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wat moet een school vragen voordat ze een AI-tutor invoert?</p><p class="text-gray-600 leading-relaxed">Vraag hoe hij is ontworpen (hints en stappen tegenover antwoorden), of hij tegen een vergelijkingsgroep is getest, of de prestaties zonder de tool worden gecontroleerd en welke leerlinggegevens hij verzamelt en waar die naartoe gaan.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Verbetert AI-tutoring het leren echt?","@type":"Question","acceptedAnswer":{"text":"Dat kan, bij het juiste ontwerp. Een gerandomiseerde crossover-proef in Harvard (194 geanalyseerde studenten) vond dat studenten met een zorgvuldig ontworpen AI-tutor aanzienlijk meer leerden in minder tijd dan in een les met actief leren. Een PNAS-veldexperiment met bijna 1.000 leerlingen vond dat onbeperkte GPT-4-toegang de latere prestaties schaadde. Het ontwerp van de tutor bepaalt de uitkomst.","@type":"Answer"}},{"name":"Kunnen leerlingen slechter worden door AI bij het leren?","@type":"Question","acceptedAnswer":{"text":"Ja, als de AI alleen antwoorden levert. In de PNAS-studie scoorden leerlingen die bij het oefenen een gewone ChatGPT-achtige interface gebruikten 17% lager dan leerlingen die nooit AI-toegang hadden, nadat de AI was weggehaald. Een versie met vangrails verzachtte de schade grotendeels.","@type":"Answer"}},{"name":"Zullen AI-tutors docenten vervangen?","@type":"Question","acceptedAnswer":{"text":"Geen van deze studies ondersteunt dat. Het Nigeriaanse programma gebruikte door docenten ondersteunde sessies, en de in de Harvard Gazette geciteerde onderzoeker zei dat AI-tutors het contactonderwijs niet moeten vervangen. Het bewijs ondersteunt AI als begeleide aanvulling.","@type":"Answer"}},{"name":"Wat moet een school vragen voordat ze een AI-tutor invoert?","@type":"Question","acceptedAnswer":{"text":"Vraag hoe hij is ontworpen (hints en stappen tegenover antwoorden), of hij tegen een vergelijkingsgroep is getest, of de prestaties zonder de tool worden gecontroleerd en welke leerlinggegevens hij verzamelt en waar die naartoe gaan.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Gerelateerde inzichten

- [AI-trends en voorspellingen voor 2026: wat ons te wachten staat](/blog/ai-trends-and-predictions-for-2026-what-lies-ahead/)
- [AI-trends in Nepal voor 2026: belangrijkste inzichten](/blog/state-of-ai-nepal-2026/)

## Bronnen

- Kestin, Miller, Klales, Milbourne en Ponti, [AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/), Scientific Reports, juni 2025
- Harvard Gazette, [Professor tailored AI tutor to physics course. Engagement doubled](https://news.harvard.edu/gazette/story/2024/09/professor-tailored-ai-tutor-to-physics-course-engagement-doubled/), 5 september 2024
- Bastani, Bastani, Sungu, Ge, Kabakcı en Mariman, [Generative AI without guardrails can harm learning: Evidence from high school mathematics](https://ideas.repec.org/a/nas/journl/v122y2025pe2422633122.html), Proceedings of the National Academy of Sciences, jaargang 122, nr. 26, 2025
- World Bank Blogs, [From chalkboards to chatbots: Transforming learning in Nigeria, one prompt at a time](https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria), 9 januari 2025

</div>
