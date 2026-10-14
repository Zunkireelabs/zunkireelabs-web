---
templateEngineOverride: "njk, md"
title: "Satellitendaten und KI: Ernterisiken früher erkennen"
description: "Was Satellitenbilder, Wetterdaten und KI über Ernteerträge vorhersagen können, anhand einer Reisstudie im nepalesischen Terai und von Feldpiloten."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "satellite-data-ai-farmers-see-crop-risks-earlier"
category: "Einblicke"
pillar: "future-of-industries"
readTime: 8
featuredImage: "/assets/images/blog/satellitendaten-und-ki-so-erkennen-landwirte-ernterisiken-frueher.svg"
featuredImageAlt: "Abstrakter Farbverlauf als Hintergrund"
---

<div class="container-custom py-12 md:py-20">

**Kurz gesagt:** Satelliten liefern heute frei verfügbare Bilder derselben Felder über die gesamte Saison, und KI-Modelle können lernen, wie diese Bilder, Wetter und Boden mit Ernten zusammenhängen. Eine begutachtete Studie von 2021 zu Reis im nepalesischen Terai fand ein Deep-Learning-Modell, das deutlich genauer war als klassische Regressionsverfahren, trainiert aber nur auf Ertragszahlen auf Distriktebene aus drei Jahren. Feldpiloten von NASA Harvest und FAO deuten darauf hin, dass der eigentliche Engpass nicht die Satelliten sind, sondern verlässliche Daten vom Boden.

## Das Wichtigste auf einen Blick

- Eine Studie in *Remote Sensing* von 2021 baute mit RicePAL eine Reisdatenbank für 20 Distrikte des nepalesischen Terai aus Sentinel-2-Bildern sowie Klima- und Bodendaten für 2016-2018.
- Das 3D-CNN der Autoren erreichte in ihren Experimenten im besten Fall einen Fehler von rund 89 kg/ha, das beste getestete klassische Regressionsverfahren rund 336 kg/ha.
- Die Referenzwerte waren ein Ertragswert pro Distrikt und Jahr, gleichmässig auf die Reispixel verteilt. Die Fehler sind also gegen geglättete Referenzwerte gemessen.
- NASA Harvest und FAO berichten, dass Ministerien in Malawi und Namibia satellitengestützte Werkzeuge und mobile Erhebungen in echten Entscheidungen nutzten und dass Bodendaten der Hauptengpass bleiben.
- Ein CGIAR-Kapitel von 2026 zeigt, dass ein einfacherer Ansatz mit einem Pflanzenmodell einen drohenden Maisausfall im Terai bis zur Saisonmitte erkennen kann, auf Basis täglicher Klimadaten.

## Die Belege: Was hat die Nepal-Studie gemacht?

Grundlage dieses Artikels ist ein begutachteter Fachartikel, [Rice-Yield Prediction with Multi-Temporal Sentinel-2 Data and 3D CNN: A Case Study in Nepal](https://www.mdpi.com/2072-4292/13/7/1391), von Ruben Fernandez-Beltran, Tina Baidar vom nepalesischen Vermessungsamt, Jian Kang und Filiberto Pla, erschienen am 4. April 2021 in *Remote Sensing*.

Die Autoren bauten aus Sentinel-2-Satellitenbildern, Klimadaten und Bodendaten eine neue Datenbank namens RicePAL für 20 Distrikte des Terai, des Tieflands im Süden Nepals. Sie weisen darauf hin, dass das Terai 49 % der landwirtschaftlichen Fläche des Landes und rund 70 % der Reisproduktion umfasst und deshalb für die nationale Ernährungssicherheit wichtig ist. Ihr Zielwert war der vom nepalesischen Ministerium für Landwirtschaft und Viehzucht veröffentlichte Reisertrag für 2016-2018, und sie stellten den Datensatz [öffentlich auf GitHub](https://github.com/rufernan/RicePAL) bereit.

## Was leistet die Technik?

Die Kette von den Daten zur Prognose lässt sich einfach beschreiben:

1. **Daten.** Eine Reihe von Sentinel-2-Bildern über die Reissaison, eine Karte der Reisanbauflächen sowie Klima- und Bodenschichten.
2. **Modell.** Ein dreidimensionales Convolutional Neural Network, ein Deep-Learning-Modell, das benachbarte Pixel und die zeitliche Veränderung betrachtet und darauf trainiert ist, diese Eingaben mit dem erfassten Ertrag zu verknüpfen.
3. **Prognose.** Ein geschätzter Ertrag pro Reispixel (20 x 20 m), zurückgerechnet auf Kilogramm pro Hektar.

Zwei Ergebnisse der Studie sind wichtig. Bilder von mehreren Zeitpunkten statt nur einem waren ein Schlüsselfaktor für die Genauigkeit. Und Klima- und Bodendaten halfen vor allem, wenn das Modell kleine Pixelausschnitte betrachtete, bei grösseren Ausschnitten funktionierten die Bilder allein am besten.

## Was hat sich verändert?

Laut den Autoren stützt sich die klassische Schätzung von Reiserträgen vor allem auf Ernteproben, Erhebungen und Feldprüfberichte. In ihren Experimenten lag der Fehler des besten klassischen Regressionsverfahrens (einer Gauss-Prozess-Regression) im besten Fall bei rund 336 kg/ha, ihr 3D-CNN erreichte rund 89 kg/ha. Im Durchschnitt über ihre Experimente hatte das vorgeschlagene Modell einen Fehler von 183 kg/ha, ein Standard-3D-CNN rund 253 kg/ha und ein 2D-CNN rund 250 kg/ha. Das sind die eigenen Ergebnisse der Autoren auf ihrem eigenen Datensatz.

Auch die Feldarbeit verändert sich. Ein von NASA Harvest mit der FAO geleiteter und von USAID finanzierter Pilot, [Improved Yield Estimates to Inform Agricultural and Food Security Interventions](https://www.nasaharvest.org/news/nasa-harvest-partners-fao-improve-agricultural-monitoring-across-malawi-namibia-and-kazakhstan), startete 2022 in Malawi, Namibia und Kasachstan. In Namibia sammelten mobile Erhebungen laut NASA Harvest rund 1300 Befragungen pro Erhebung, gegenüber rund 200 bei einer normalen papierbasierten Erhebung. Das Ministerium in Malawi erhält monatliche Ertragsprognosen eines Modells namens GEOCIF, das maschinelles Lernen und Fernerkundung verbindet, und laut NASA Harvest wurden die Werkzeuge operativ für Massnahmen der Ernährungssicherung genutzt.

## Wer profitiert?

Die hier geprüften Quellen verweisen vor allem auf öffentliche Institutionen. Landwirtschaftsministerien nutzen satellitengestützte Prognosen und geolokalisierte Erhebungen für nationale Ernteeinschätzungen, und laut NASA Harvest haben südafrikanische Länder Ertragsprognosen für die Dürrebewertung angefragt. Das CGIAR-Kapitel von 2026 von Nirman Shrestha und D. Raes, [AquaCrop model as a tool to forecast crop yield during the growing season: lessons from Nepal, South Asia](https://cgspace.cgiar.org/items/792b36a0-f6f8-4ab9-9920-225de8de4122), sagt, dass eine frühe Warnung vor Ernteausfällen im Terai Bauern und Behörden Vorlauf geben könnte. Dieses Kapitel nutzt ein Pflanzenwachstums-Simulationsmodell, kein maschinelles Lernen, mit täglichen Klimadaten für Mais.

Für Bauern liegt der mögliche Nutzen in früheren Informationen zu Bewässerung und Ernährungsrisiken. Für Unternehmen wie Versicherer, Händler und Agrartech-Firmen könnten ähnliche Prognosen grundsätzlich helfen, doch keine der geprüften Quellen belegt diese Nutzung, deshalb behaupten wir sie nicht.

## Grenzen und offene Fragen

- **Grobe Referenzwerte.** Die Nepal-Studie hatte einen Ertragswert pro Distrikt und Jahr, 20 Distrikte und drei Jahre. Die Autoren verteilten die Gesamtmenge jedes Distrikts gleichmässig auf seine Reispixel, die berichteten Fehler sind daher gegen geglättete Werte gemessen, nicht gegen einzelne Felder.
- **Bodendaten sind knapp.** Die Autoren nennen den Mangel an Ertragsdaten vom Boden eine grosse Herausforderung in Entwicklungsländern. NASA Harvest sagt, Daten zur Überprüfung von Satellitenprodukten fehlten und seien «ein riesiger Engpass».
- **Kleine Parzellen.** NASA Harvest weist darauf hin, dass Kleinbauern oft weniger als einen halben Hektar mit Mischkulturen bewirtschaften und dass hochauflösende Bilder für solche Systeme oft nicht genug Detail liefern.
- **Enger Umfang.** Die Nepal-Studie behandelt eine Kultur und nennt weitere Kulturen als künftige Arbeit. Das CGIAR-Kapitel behandelt eine Kultur in einer Region und sagt, eine breitere Nutzung brauche weitere Überprüfung.
- **Reichweite.** Die Quellen beschreiben Werkzeuge, die Ministerien nutzen. Sie zeigen nicht, dass Prognosen einzelne Kleinbauern erreichen, Konnektivität und Zustellung bleiben offene Fragen.
- **Alter.** Die Nepal-Studie nutzt Daten von 2016-2018 und erschien 2021, sie zeigt also Machbarkeit, keine aktuelle Betriebsleistung.

## Wie geht es weiter?

Die Nepal-Autoren schlagen vor, mehr Jahre an Bildern zu nutzen, vortrainierte Netze gegen knappe Daten einzusetzen und den Ansatz auf andere Kulturen auszuweiten. NASA Harvest und FAO berichten, dass Namibia die mobilen Erhebungen bis in die Saison 2023/2024 fortsetzte und dass das Ministerium in Malawi weiterhin monatliche Prognosen erhält.

Für Organisationen in der Landwirtschaft lautet eine praktische Lesart dieser Belege (unser Vorschlag, kein Ergebnis der Studien):

1. **Zuerst in Bodendaten investieren.** Geolokalisierte Erntedaten machen Satellitenprognosen glaubwürdig.
2. **Lokal prüfen.** Fragen Sie nach dem Fehler für Ihre Kultur, Region und Saison, nicht nach einem globalen Durchschnitt.
3. **Prognosen als einen Baustein nutzen.** Kombinieren Sie sie mit Feldberichten und lokalem Wissen.
4. **Die Zustellung planen.** Eine Prognose hilft nur, wenn sie die Person erreicht, die handeln kann.

## Die Kurzfassung

Satellitenbilder, Wetterdaten und KI können Ernteerträge in veröffentlichten Tests früher und genauer schätzen als klassische Methoden, darunter Reis im nepalesischen Terai. Die Belege sind am stärksten für öffentliche Stellen und nationale Erhebungen und am schwächsten bei kleinen Parzellen und der Zustellung an Bauern. Die wichtigste Einschränkung sind nicht die Satelliten, sondern Qualität und Menge der Bodendaten.

Wie das zur KI-Nutzung in Nepal passt, lesen Sie in unserem Überblick zu [KI-Trends in Nepal 2026](/blog/state-of-ai-nepal-2026/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Häufig gestellte Fragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Kann KI Ernteerträge aus Satellitenbildern vorhersagen?</p><p class="text-gray-600 leading-relaxed">In Forschungsumgebungen ja, in nützlichem Mass. Eine Studie von 2021 zu 20 Distrikten im nepalesischen Terai nutzte Sentinel-2-Bilder mit Klima- und Bodendaten, um Reiserträge zu schätzen. Ihr Deep-Learning-Modell erreichte im besten Fall einen Fehler von rund 89 kg/ha, das beste getestete klassische Regressionsverfahren rund 336 kg/ha. Die Ertragswerte lagen nur auf Distriktebene vor, das Ergebnis zeigt daher Potenzial, aber keinen Beweis auf Feldebene.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Warum sind Bodendaten ein Problem für Satelliten-Werkzeuge in der Landwirtschaft?</p><p class="text-gray-600 leading-relaxed">Satellitenmodelle brauchen echte Erntedaten, um zu lernen und überprüft zu werden. NASA Harvest sagt, es fehlten Bodendaten zur Überprüfung von Satellitenprodukten für die kleinbäuerliche Landwirtschaft, ein «riesiger Engpass», und die Nepal-Studie hatte nur einen Ertragswert pro Distrikt und Jahr.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Funktioniert diese Technik für Kleinbauern?</p><p class="text-gray-600 leading-relaxed">Es ist schwieriger. NASA Harvest weist darauf hin, dass Kleinbauern oft weniger als einen halben Hektar bewirtschaften und Pflanzen mischen, was die Kartierung per Satellit erschwert. Die bisher beschriebenen Pilotprojekte unterstützen Ministerien und nationale Ernteerhebungen, und die Quellen zeigen nicht, dass Prognosen einzelne Bauern erreichen.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Was sollte eine Organisation tun, bevor sie Satelliten- und KI-Ertragsprognosen nutzt?</p><p class="text-gray-600 leading-relaxed">Geolokalisierte Felddaten aus dem eigenen Gebiet erheben, jede Prognose mit lokalen Erntedaten abgleichen und das Ergebnis als einen Baustein für Entscheidungen sehen, nicht als Garantie. Fragen Sie nach dem Fehler für Ihre Kultur, Region und Saison.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Kann KI Ernteerträge aus Satellitenbildern vorhersagen?","@type":"Question","acceptedAnswer":{"text":"In Forschungsumgebungen ja, in nützlichem Mass. Eine Studie von 2021 zu 20 Distrikten im nepalesischen Terai nutzte Sentinel-2-Bilder mit Klima- und Bodendaten, um Reiserträge zu schätzen. Ihr Deep-Learning-Modell erreichte im besten Fall einen Fehler von rund 89 kg/ha, das beste getestete klassische Regressionsverfahren rund 336 kg/ha. Die Ertragswerte lagen nur auf Distriktebene vor, das Ergebnis zeigt daher Potenzial, aber keinen Beweis auf Feldebene.","@type":"Answer"}},{"name":"Warum sind Bodendaten ein Problem für Satelliten-Werkzeuge in der Landwirtschaft?","@type":"Question","acceptedAnswer":{"text":"Satellitenmodelle brauchen echte Erntedaten, um zu lernen und überprüft zu werden. NASA Harvest sagt, es fehlten Bodendaten zur Überprüfung von Satellitenprodukten für die kleinbäuerliche Landwirtschaft, ein «riesiger Engpass», und die Nepal-Studie hatte nur einen Ertragswert pro Distrikt und Jahr.","@type":"Answer"}},{"name":"Funktioniert diese Technik für Kleinbauern?","@type":"Question","acceptedAnswer":{"text":"Es ist schwieriger. NASA Harvest weist darauf hin, dass Kleinbauern oft weniger als einen halben Hektar bewirtschaften und Pflanzen mischen, was die Kartierung per Satellit erschwert. Die bisher beschriebenen Pilotprojekte unterstützen Ministerien und nationale Ernteerhebungen, und die Quellen zeigen nicht, dass Prognosen einzelne Bauern erreichen.","@type":"Answer"}},{"name":"Was sollte eine Organisation tun, bevor sie Satelliten- und KI-Ertragsprognosen nutzt?","@type":"Question","acceptedAnswer":{"text":"Geolokalisierte Felddaten aus dem eigenen Gebiet erheben, jede Prognose mit lokalen Erntedaten abgleichen und das Ergebnis als einen Baustein für Entscheidungen sehen, nicht als Garantie. Fragen Sie nach dem Fehler für Ihre Kultur, Region und Saison.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Verwandte Einblicke

- [AI Adoption Trends in Nepal for 2026: Key Insights](/blog/state-of-ai-nepal-2026/)
- [California's Robotaxi Law: What It Means for Autonomous AI](/blog/robotaxis-first-responders-california-law-future-of-autonomous-systems/)

## Quellen

- R. Fernandez-Beltran, T. Baidar, J. Kang und F. Pla, [Rice-Yield Prediction with Multi-Temporal Sentinel-2 Data and 3D CNN: A Case Study in Nepal](https://www.mdpi.com/2072-4292/13/7/1391), *Remote Sensing* 13(7), 1391, 4. April 2021
- NASA Harvest, [NASA Harvest Partners with FAO to Improve Agricultural Monitoring Across Malawi, Namibia, and Kazakhstan](https://www.nasaharvest.org/news/nasa-harvest-partners-fao-improve-agricultural-monitoring-across-malawi-namibia-and-kazakhstan), Pilot gestartet 2022
- NASA Harvest, [Proving the Value of Earth Observation Data for Small-Scale Agriculture](https://www.nasaharvest.org/news/a-hrefhttpsnasaharvestorgnewsproving-value-earth-observation-data-small-scale-agricultureproving-the-value-of-earth-observation-data-for-small-scale-agriculturea)
- N. Shrestha und D. Raes, [AquaCrop model as a tool to forecast crop yield during the growing season: lessons from Nepal, South Asia](https://cgspace.cgiar.org/items/792b36a0-f6f8-4ab9-9920-225de8de4122), Elsevier, 2026

</div>
