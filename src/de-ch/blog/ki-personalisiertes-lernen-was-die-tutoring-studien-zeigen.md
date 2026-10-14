---
templateEngineOverride: "njk, md"
title: "KI und personalisiertes Lernen: Was Tutoring-Studien zeigen"
description: "Drei Studien zu KI-Tutoring zeigen Lernerfolge, wenn der Tutor auf Lernforschung aufbaut, und Schaden, wenn nicht. Was die Evidenz sagt und was offen ist."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "ai-personalized-learning-what-tutoring-trials-show"
category: "Einblicke"
pillar: "ai-education"
readTime: 9
featuredImage: "/assets/images/blog/ki-personalisiertes-lernen-was-die-tutoring-studien-zeigen.svg"
featuredImageAlt: "Abstrakter Farbverlauf als Hintergrund"
---

<div class="container-custom py-12 md:py-20">

**Kurz gesagt:** Die stärkste aktuelle Evidenz zu KI und personalisiertem Lernen stammt aus kontrollierten Studien und weist in zwei Richtungen. Ein Physik-Versuch in Harvard ergab, dass Studierende mit einem sorgfältig gestalteten KI-Tutor mehr in kürzerer Zeit lernten als in einer Active-Learning-Stunde. Ein Versuch mit knapp 1.000 Schülerinnen und Schülern in der Türkei ergab, dass uneingeschränkter GPT-4-Zugang die Lernenden schlechter stellte, sobald er entfiel, während eine Version mit eingebauten Leitplanken diesen Schaden weitgehend vermied. Über das Ergebnis entscheidet die Gestaltung des Tutors, nicht die blosse Anwesenheit von KI.

## Das Wichtigste auf einen Blick

- Ein randomisierter Crossover-Versuch in Harvard (194 ausgewertete Studierende) ergab, dass Studierende mit einem KI-Tutor deutlich mehr in kürzerer Zeit lernten als in einer Active-Learning-Stunde.
- Der Tutor beruhte auf forschungsbasierten Lehrprinzipien und vorgefertigten Schritt-für-Schritt-Lösungen. Ein allgemeiner Chatbot-Prompt reichte laut den Autoren nicht aus, um mehrteilige Aufgaben zu strukturieren.
- In einem PNAS-Feldexperiment mit fast 1.000 Schülerinnen und Schülern im Mathematikunterricht schnitten Lernende mit ungeschütztem GPT-4-Zugang in einer späteren Prüfung ohne KI um 17 % schlechter ab als Lernende, die nie Zugang hatten. Leitplanken beseitigten den Schaden weitgehend.
- Ein Pilotprojekt der Weltbank in Nigeria berichtet nach sechs Wochen lehrkraftgestützten KI-Nachhilfeunterrichts von etwa 0,3 Standardabweichungen Zuwachs, es handelt sich aber um eine Blog-Zusammenfassung und nicht um eine begutachtete Studie.
- Keine dieser Studien zeigt, dass KI Lehrkräfte ersetzt, und keine wurde in Nepal durchgeführt.


## Die Evidenz

Drei Studien ergeben ein brauchbares Bild. Jede ist ein echtes Experiment, und sie sagen nicht alle dasselbe.

**Physik in Harvard (Scientific Reports, Juni 2025).** Kestin, Miller, Klales, Milbourne und Ponti führten einen randomisierten Crossover-Versuch in einem einführenden Physikkurs für Studierende der Lebenswissenschaften durch. [Die Studie](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/) wertete 194 Studierende aus (233 waren eingeschrieben). Über zwei aufeinanderfolgende Wochen lernte jeder Studierende ein Thema (Oberflächenspannung) im Präsenzunterricht mit Active Learning und das andere (Strömung von Flüssigkeiten) mit einem KI-Tutor zu Hause, sodass jede Person als eigene Vergleichsgruppe diente. Die Autoren berichten einen mittleren Nachtestwert von 4,5 für den KI-Tutor gegenüber 3,5 für die Active-Learning-Stunde, mehr als doppelt so grosse Lernzuwächse und ein statistisches Ergebnis von p < 10^-8. In einer linearen Regression schätzen sie einen Effekt von etwa 0,63 Standardabweichungen. Die Studierenden bewerteten die KI-Einheit ausserdem höher bei Engagement (4,1 gegenüber 3,6 auf einer Fünf-Punkte-Skala) und Motivation (3,4 gegenüber 3,1), ohne signifikanten Unterschied bei Freude und Growth Mindset. Die mittlere Zeit mit dem Tutor betrug 49 Minuten, und die Autoren schliessen, dass die Studierenden in kürzerer Zeit mehr lernten. Ein [Bericht der Harvard Gazette](https://news.harvard.edu/gazette/story/2024/09/professor-tailored-ai-tutor-to-physics-course-engagement-doubled/) vom September 2024 beschreibt dieselbe Studie.

**Mathematik an türkischen Schulen (PNAS, 2025).** Bastani und Kolleginnen und Kollegen führten [ein Feldexperiment](https://ideas.repec.org/a/nas/journl/v122y2025pe2422633122.html) mit fast 1.000 Schülerinnen und Schülern durch und verglichen eine übliche ChatGPT-artige Oberfläche («GPT Base») mit einer Version, deren Prompts das Lernen schützen sollten («GPT Tutor»). Die Leistung beim Üben verbesserte sich mit KI-Zugang. Wurde der Zugang aber entzogen, schnitten Lernende, die GPT Base genutzt hatten, schlechter ab als Lernende ohne je Zugang, mit einem Notenrückgang von 17 %. Laut den Autoren milderte die Version GPT Tutor diesen Schaden weitgehend, und sie beschreiben uneingeschränktes GPT-4 als «Krücke» beim Üben.

**Nachmittagsprojekt in Nigeria (Weltbank, Januar 2025).** In einem [Blogbeitrag](https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria) beschreibt das Weltbank-Team ein sechswöchiges Nachmittagsprogramm in Benin City im Bundesstaat Edo Mitte 2024, in dem generative KI mit Unterstützung von Lehrkräften das Lernen begleitete. Sie berichten Lernverbesserungen von etwa 0,3 Standardabweichungen, die sie als «entspricht fast zwei Jahren typischen Lernens in nur sechs Wochen» beschreiben. Sie merken an, dass Mädchen, die anfangs hinter den Jungen lagen, offenbar noch mehr profitierten und dass ihr Evaluationsdesign den wahren Effekt wahrscheinlich unterschätzte. Das ist die schwächste der drei Quellen: Es ist die eigene Zusammenfassung der Autoren zu einem Pilotprojekt, und der Beitrag nennt keine Stichprobengrössen.

## Was leistet die Technik?

Auf hoher Ebene folgt personalisiertes Lernen einer einfachen Kette: **Lerndaten, dann ein Modell, dann ein angepasster Weg.**

- **Daten.** Der Tutor sieht, was die Lernenden schreiben, wo sie hängen bleiben und was sie antworten. In der Harvard-Studie massen Vor- und Nachtests, was die Studierenden vorher und nachher wussten.
- **Modell.** Ein grosses Sprachmodell liest diese Eingabe und antwortet. Entscheidend ist, wie es gesteuert wird. Der Harvard-Tutor nutzte die GPT-API mit von Lehrenden geschriebenen, aufgabenspezifischen Prompts, vorgefertigten Schritt-für-Schritt-Lösungen und einer Struktur, die Studierende durch jeden Teil einer Aufgabe führte. Die Autoren halten fest: «Ein System-Prompt konnte nicht zuverlässig genug Struktur bieten, um Aufgaben mit mehreren Teilen zu gliedern.»
- **Angepasster Weg.** Der Tutor gibt Rückmeldungen und Hinweise im eigenen Tempo der Lernenden, statt dass die ganze Klasse im selben Tempo vorangeht. Lernende können Fragen stellen, die sie vor einem Raum vielleicht nicht stellen würden.

Das türkische Experiment zeigt die andere Seite derselben Technik. Ein Tutor, der Antworten liefert, erzeugt bessere Übungsergebnisse und schlechteres Lernen. Die Harvard-Autoren nennen sieben Gestaltungsprinzipien, darunter aktives Lernen, Steuerung der kognitiven Belastung, korrekte Lösungen, zeitnahe Rückmeldung und Selbststeuerung des Tempos. Das Muster beider Studien: Die im Tutor eingebaute Pädagogik zählt mehr als das Modell dahinter.

## Was hat sich verändert?

Bis vor Kurzem war Einzelunterricht der Goldstandard, aber zu teuer, um ihn jedem Lernenden zu bieten. Neu ist, dass ein Tutor zu jeder Tageszeit verfügbar sein und auf die eigenen Worte der Lernenden eingehen kann und dass Forschende das inzwischen in randomisierten Studien messen, nicht nur in Demos. Die Aussage der Harvard-Studie ist bescheiden: Unter bestimmten Bedingungen schlug der KI-Tutor eine gut gestaltete Unterrichtsstunde bei einem kurzen Thema. Sie behauptet nicht, dass KI-Tutoring Klassenunterricht generell übertrifft.

## Wer profitiert?

- **Lernende in leistungsgemischten Klassen.** Eine in der Gazette zitierte Harvard-Dozentin sagte, in einer heterogenen Klasse könnten «Studierende mit sehr starkem Hintergrund gelangweilt sein, und solche ohne haben Mühe mitzukommen». Ein Tutor im eigenen Tempo kann beide Gruppen bedienen.
- **Lernende mit wenig Zugang zu Nachhilfe.** Das nigerianische Pilotprojekt richtete sich an ein Umfeld, in dem zusätzlicher Unterricht knapp ist, und das Weltbank-Team berichtet dort Zuwächse. Werten Sie das als ermutigendes frühes Signal, nicht als gesichertes Ergebnis.
- **Lehrkräfte.** Im nigerianischen Programm leiteten Lehrkräfte die Sitzungen an, und die Harvard-Autoren verstehen KI als etwas, das den Präsenzunterricht nicht ersetzen soll. Der beschriebene Nutzen sind mehr Zeit und Werkzeuge für Lehrkräfte, nicht weniger Lehrkräfte.

## Welche Grenzen und offenen Fragen gibt es?

- **Kurz und eng.** Die Harvard-Studie umfasste zwei Wochen, zwei Themen und einen Kurs, mit leistungsstarken Studierenden und erfahrenen Lehrenden. Die Autoren schreiben, sie gingen nicht davon aus, dass strukturiertes KI-Tutoring Active Learning im Unterricht immer übertreffe, etwa dort, wo komplexe Synthese und kritisches Denken auf höherem Niveau gefragt sind.
- **Kontextabhängig.** Die Autoren nennen Bedingungen, die eine Rolle spielen könnten: eine heterogene Klasse, hochwertige Lehrvideos, ein leistungsfähiges Modell, von Fachleuten geschriebene Prompts und ein sorgfältig aufgebauter Rahmen. Fällt eine davon weg, kann sich das Ergebnis ändern.
- **Übermässiges Verlassen.** Die türkische Studie ist die deutlichste Warnung. Lernende, die jederzeit Antworten bekamen, schnitten ohne Hilfe schlechter ab. Der Schaden wurde mit Leitplanken weitgehend vermieden, es ist also auch ein Gestaltungsproblem und nicht nur ein Risiko.
- **Gerechtigkeit und Zugang.** Zuwächse hängen von Geräten, Konnektivität, Sprache und Lehrkräften ab, die die Werkzeuge einsetzen können. Keine der drei Studien beantwortet, wer dabei zurückbleibt.
- **Schülerdaten und Datenschutz.** Ein KI-Tutor arbeitet mit dem, was Lernende schreiben. Die genannten Studien untersuchen den Datenschutz nicht, Schulen müssen daher selbst fragen, was erfasst wird, wohin es geht und wer es sehen kann.
- **Langzeitwirkung.** Das Weltbank-Team führt Langzeiteffekte als unbekannt auf, und die Harvard- und die nigerianische Studie sind kurz. Ob die Zuwächse anhalten, wissen wir noch nicht.

## Wie geht es weiter?

Das ist keine Prognose, sondern eine Liste dessen, worauf man achten und was man fragen sollte.

- **Auf die Gestaltung achten, nicht auf das Etikett.** Wenn eine Schule oder ein EdTech-Anbieter «KI-Tutor» sagt, fragen Sie, ob er Hinweise und strukturierte Schritte gibt oder nur Antworten und ob er gegen eine Vergleichsgruppe getestet wurde.
- **Nach längeren, grösseren, unabhängigen Studien suchen.** Die stärkste nächste Evidenz wären Studien über mehrere Halbjahre, Fächer, Altersgruppen und Länder, idealerweise in begutachteten Fachzeitschriften veröffentlicht.
- **Mit Lehrkräften im Prozess pilotieren.** Der am besten belegte Ansatz ist derzeit KI als beaufsichtigter Tutor mit Grenzen beim Geben von Antworten und einem Test ohne KI-Zugang, um echtes Lernen zu prüfen.
- **Messen, was zählt.** Prüfen Sie die Leistung ohne das Werkzeug, wie es die türkische Studie tat, nicht nur die Ergebnisse während der Nutzung.

Für eine Schule oder einen Weiterbildungsanbieter in Nepal oder Südasien wirken die Bedingungen dieser Studien, grosse leistungsgemischte Klassen und knappe Einzelhilfe, vertraut. Keine der drei Studien fand aber in Nepal statt. Der richtige Schritt ist deshalb ein kleiner, gemessener lokaler Pilot. Mehr zur Verbreitung vor Ort lesen Sie in unseren [KI-Trends in Nepal](/blog/state-of-ai-nepal-2026/).

## Die Kurzfassung

Personalisiertes Lernen mit KI ist nicht mehr nur ein Versprechen: Es gibt kontrollierte Studien, und sie zeigen echte Zuwächse, wenn der Tutor auf Lernforschung aufbaut, und echten Schaden, wenn er einfach Antworten ausgibt. Die sinnvolle Reaktion ist weder Hype noch Ablehnung, sondern zu fragen, wie der Tutor gestaltet wurde, womit er verglichen wurde und ob das Gelernte hält, wenn das Werkzeug entfällt.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Häufig gestellte Fragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Verbessert KI-Tutoring das Lernen tatsächlich?</p><p class="text-gray-600 leading-relaxed">Es kann es, bei richtiger Gestaltung. Ein randomisierter Crossover-Versuch in Harvard (194 ausgewertete Studierende) ergab, dass Studierende mit einem sorgfältig gestalteten KI-Tutor deutlich mehr in kürzerer Zeit lernten als in einer Active-Learning-Stunde. Ein PNAS-Feldexperiment mit fast 1.000 Lernenden ergab, dass uneingeschränkter GPT-4-Zugang die spätere Leistung schädigte. Die Gestaltung des Tutors entscheidet.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Können Lernende durch KI beim Lernen schlechter werden?</p><p class="text-gray-600 leading-relaxed">Ja, wenn die KI nur Antworten liefert. In der PNAS-Studie schnitten Lernende, die beim Üben eine übliche ChatGPT-artige Oberfläche nutzten, nach dem Entzug der KI um 17 % schlechter ab als Lernende, die nie KI-Zugang hatten. Eine Version mit Leitplanken milderte den Schaden weitgehend.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Werden KI-Tutoren Lehrkräfte ersetzen?</p><p class="text-gray-600 leading-relaxed">Keine dieser Studien stützt das. Das nigerianische Programm nutzte lehrkraftgestützte Sitzungen, und der in der Harvard Gazette zitierte Forscher sagte, KI-Tutoren sollten den Präsenzunterricht nicht ersetzen. Die Evidenz stützt KI als beaufsichtigte Ergänzung.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Was sollte eine Schule fragen, bevor sie einen KI-Tutor einführt?</p><p class="text-gray-600 leading-relaxed">Fragen Sie, wie er gestaltet ist (Hinweise und Schritte gegenüber Antworten), ob er gegen eine Vergleichsgruppe getestet wurde, ob die Leistung ohne das Werkzeug geprüft wird und welche Schülerdaten er erfasst und wohin diese gehen.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Verbessert KI-Tutoring das Lernen tatsächlich?","@type":"Question","acceptedAnswer":{"text":"Es kann es, bei richtiger Gestaltung. Ein randomisierter Crossover-Versuch in Harvard (194 ausgewertete Studierende) ergab, dass Studierende mit einem sorgfältig gestalteten KI-Tutor deutlich mehr in kürzerer Zeit lernten als in einer Active-Learning-Stunde. Ein PNAS-Feldexperiment mit fast 1.000 Lernenden ergab, dass uneingeschränkter GPT-4-Zugang die spätere Leistung schädigte. Die Gestaltung des Tutors entscheidet.","@type":"Answer"}},{"name":"Können Lernende durch KI beim Lernen schlechter werden?","@type":"Question","acceptedAnswer":{"text":"Ja, wenn die KI nur Antworten liefert. In der PNAS-Studie schnitten Lernende, die beim Üben eine übliche ChatGPT-artige Oberfläche nutzten, nach dem Entzug der KI um 17 % schlechter ab als Lernende, die nie KI-Zugang hatten. Eine Version mit Leitplanken milderte den Schaden weitgehend.","@type":"Answer"}},{"name":"Werden KI-Tutoren Lehrkräfte ersetzen?","@type":"Question","acceptedAnswer":{"text":"Keine dieser Studien stützt das. Das nigerianische Programm nutzte lehrkraftgestützte Sitzungen, und der in der Harvard Gazette zitierte Forscher sagte, KI-Tutoren sollten den Präsenzunterricht nicht ersetzen. Die Evidenz stützt KI als beaufsichtigte Ergänzung.","@type":"Answer"}},{"name":"Was sollte eine Schule fragen, bevor sie einen KI-Tutor einführt?","@type":"Question","acceptedAnswer":{"text":"Fragen Sie, wie er gestaltet ist (Hinweise und Schritte gegenüber Antworten), ob er gegen eine Vergleichsgruppe getestet wurde, ob die Leistung ohne das Werkzeug geprüft wird und welche Schülerdaten er erfasst und wohin diese gehen.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Weitere Einblicke

- [KI-Trends und Prognosen 2026: Was uns erwartet](/blog/ai-trends-and-predictions-for-2026-what-lies-ahead/)
- [KI-Trends in Nepal 2026: Wichtige Erkenntnisse](/blog/state-of-ai-nepal-2026/)

## Quellen

- Kestin, Miller, Klales, Milbourne und Ponti, [AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting](https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/), Scientific Reports, Juni 2025
- Harvard Gazette, [Professor tailored AI tutor to physics course. Engagement doubled](https://news.harvard.edu/gazette/story/2024/09/professor-tailored-ai-tutor-to-physics-course-engagement-doubled/), 5. September 2024
- Bastani, Bastani, Sungu, Ge, Kabakcı und Mariman, [Generative AI without guardrails can harm learning: Evidence from high school mathematics](https://ideas.repec.org/a/nas/journl/v122y2025pe2422633122.html), Proceedings of the National Academy of Sciences, Bd. 122, Nr. 26, 2025
- World Bank Blogs, [From chalkboards to chatbots: Transforming learning in Nigeria, one prompt at a time](https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria), 9. Januar 2025

</div>
