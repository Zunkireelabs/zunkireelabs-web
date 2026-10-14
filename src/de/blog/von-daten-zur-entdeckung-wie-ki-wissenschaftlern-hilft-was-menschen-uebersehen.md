---
templateEngineOverride: "njk, md"
title: "Wie KI Wissenschaftlern hilft, was Menschen übersehen könnten"
description: "Ein Nature-Paper von Google-Forschern (Mai 2026) zeigt, wie KI wissenschaftliche Software erzeugt, die Expertenbenchmarks schlägt. Belege und Grenzen."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "ai-data-discovery-how-ai-helps-scientists-find-what-humans-miss"
category: "Einblicke"
pillar: "ai-data"
readTime: 8
featuredImage: "/assets/images/blog/von-daten-zur-entdeckung-wie-ki-wissenschaftlern-hilft-was-menschen-uebersehen.svg"
featuredImageAlt: "Abstrakter Farbverlauf als Hintergrund"
---

<div class="container-custom py-12 md:py-20">

**Kurz gesagt:** Im Mai 2026 haben Google-Forscher in Nature ein System namens ERA veröffentlicht, das mit einem Sprachmodell und Baumsuche wissenschaftliche Software schreibt und verbessert. Auf den getesteten Benchmarks übertraf es bestehende Methoden. Es zeigt, wie Daten, eine klare Bewertung und KI Lösungen finden können, die Menschen vielleicht nie testen würden. Wissenschaftliches Urteilsvermögen ersetzt es nicht, denn eine bessere Vorhersage ist noch keine Erklärung.

## Das Wichtigste auf einen Blick

- Die Grundlage ist ein begutachtetes Nature-Paper (Mai 2026) von Google Research und Google DeepMind, geleitet unter anderem von Michael Brenner (Harvard und Google).
- ERA kombiniert ein Gemini-Sprachmodell, Baumsuche und eine Kennzahl, um Code zu erzeugen und zu verfeinern, wo sich Erfolg messen lässt.
- Berichtet werden 40 neue Methoden zur Integration von Single-Cell-RNA-Daten und 14 Prognosemodelle für COVID-19-Krankenhausaufnahmen, die das CovidHub Ensemble der CDC schlugen.
- Die Autoren sagen, das Optimieren von Vorhersagemodellen sei nicht dasselbe wie vollständige wissenschaftliche Entdeckung, und eine Perspektive in Nature Communications betont: Eine Vorhersage ist keine Erklärung.

## Die Belege: Was haben die Forscher tatsächlich veröffentlicht?

Anker dieses Artikels ist das Paper *An AI system to help scientists write expert-level empirical software*, im Mai 2026 in [Nature](https://www.nature.com/articles/s41586-026-10658-6) erschienen. Laut [Google Research](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/) beschreibt es ein System namens Empirical Research Assistance (ERA), entwickelt von Forschern bei Google Research und Google DeepMind. [TechXplore](https://techxplore.com/news/2026-05-ai-automates-scientific-software-outperforming.html) berichtet, die Arbeit sei von Michael Brenner (Harvard SEAS und Google) und Shibl Mourad (Google DeepMind) mitgeleitet worden.

Die folgenden Zahlen stammen von Google Research und aus der Berichterstattung über das Paper. Den Volltext des Nature-Papers konnten wir nicht einsehen. Prüfen Sie daher Methoden und genaue Zahlen im Paper selbst, bevor Sie sich darauf stützen.

- **Genomik.** ERA hat laut Bericht 40 neue Methoden zur Integration von Single-Cell-RNA-Sequenzierdaten entdeckt. Google gibt an, die beste Lösung habe die bisher beste veröffentlichte Methode ComBat im Benchmark OpenProblems V2.0.0, der 13 Metriken kombiniert, um 14 % übertroffen.

- **Öffentliche Gesundheit.** ERA hat laut Bericht 14 Modelle erzeugt, die das CovidHub Ensemble der CDC bei der Prognose von COVID-19-Krankenhausaufnahmen übertrafen, bewertet über 52 Gebiete und vier Prognosehorizonte. TechXplore nennt einen mittleren Weighted Interval Score von 26 gegenüber 29 beim Ensemble, wobei niedriger besser ist.

- **Mathematik.** Bei der numerischen Integration wertete die Methode von ERA laut Google 17 von 19 zurückgehaltenen Integralen korrekt aus, bei denen Standardmethoden aus scipy scheiterten.

- **Neurowissenschaft.** Google meldet Bestwerte im Zebrafish Activity Prediction Benchmark, bei dem die Aktivität von mehr als 70.000 Neuronen vorhergesagt wird.

## Was leistet die Technologie?

In einfachen Worten lautet die Kette: **Daten, dann eine Bewertung, dann Suche, dann ein Kandidat.** Eine Wissenschaftlerin liefert eine Problembeschreibung, eine Bewertungsmethode sowie Trainings- und Evaluationsdaten. ERA nutzt dann ein Gemini-Sprachmodell, um Code vorzuschlagen, auch Nachbauten und Kombinationen von Methoden aus Papers und Lehrbüchern, und eine Baumsuche, um zu entscheiden, welche Varianten weiter verbessert werden. [Google beschreibt](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/) die Suche als von AlphaZero inspiriert. Jeder Kandidat wird bewertet, die besten werden in einer Schleife erneut umgeschrieben.

Entscheidend ist eine **bewertbare Aufgabe**: ein Problem, dessen Erfolg sich als Zahl ausdrücken lässt. Genau das erlaubt es dem System, Tausende Ideen auszuprobieren, ohne dass ein Mensch jede beurteilt. Brenner sagte, das Kombinieren von Ideen könne „Nadel-im-Heuhaufen“-Lösungen finden, die Forscher vielleicht nie testen würden, und Google gibt an, die Zeit zum Erkunden einer Reihe von Ideen sinke „von Monaten auf Stunden oder Tage“.

## Was hat sich geändert?

Die Veränderung liegt weniger in einer einzelnen klugen Antwort als darin, **wie viel des Suchraums erkundet wird.** Ein Forscher kann in einer Woche eine Handvoll Ansätze ausprobieren. Ein System, das Code schreibt, ausführt und bewertet, schafft deutlich mehr und übergibt die besten Kandidaten zur Prüfung an Menschen.

Der Aufwand verlagert sich vom Handschreiben jeder Variante hin zur guten Definition von Problem und Bewertung und zur Prüfung der Ergebnisse. Eine zweite Arbeit von 2026, eine Perspektive in [Nature Communications](https://techxplore.com/news/2026-09-ai-hidden-patterns-testable-scientific.html) von Gianmarco Mengaldo, Ricardo Vinuesa und Steve Brunton, beschreibt einen verwandten Ansatz: erklärbare KI findet heraus, was eine Vorhersage getrieben hat, daraus wird eine Hypothese, die durch Experimente, Simulationen oder etablierte Prinzipien getestet wird. In einem Beispiel fanden Forscher so Strömungsmuster, die den Widerstand in Turbulenzen am stärksten beeinflussen, und entwarfen Änderungen daran.

## Wer profitiert?

- **Forschungsteams** mit Daten und einer klaren Kennzahl, etwa einem Benchmark, einem Prognosefehler oder einem Gütemaß, können in der verfügbaren Zeit mehr Ideen erkunden.

- **Gesundheits- und Prognosegruppen** können viele Modellvarianten schnell mit einer etablierten Basis vergleichen.

- **Kleinere Organisationen** profitieren eher indirekt. Unserer Einschätzung nach lässt sich das Muster aus sauberen Daten, einer klaren Kennzahl und einer KI-Suche, die Optionen vorschlägt, auch auf Geschäftsprobleme wie Nachfrageprognosen oder Routenplanung übertragen, auch für Unternehmen in Nepal und Südasien. Das ist unsere Lesart des Ansatzes, kein Ergebnis des Papers.

## Grenzen und offene Fragen

- **Es funktioniert nur, wo Erfolg eine Zahl ist.** Laut TechXplore sagen die Autoren, das Optimieren empirischer Vorhersagemodelle sei „nicht dasselbe wie vollständige wissenschaftliche Entdeckung, die auch das Nachdenken über Mechanismen, Kausalität, Theorien und mathematische Rahmen erfordert“.

- **Eine Vorhersage ist keine Erklärung.** Die Autoren der Nature-Communications-Perspektive sagen es direkt: Ein KI-Muster kann einen echten physikalischen Prozess oder nur eine statistische Korrelation in den Trainingsdaten widerspiegeln und muss getestet werden, bevor es als Erklärung gilt.

- **Menschen prüfen weiterhin.** In der Berichterstattung zitierte Forscher sagen, menschliche Expertise bleibe für Prüfung und Deutung der Ergebnisse unverzichtbar.

- **Sicherheit.** Die Autoren nennen auch breitere Risiken, wenn solche Systeme die Einstiegshürde für den Einsatz fortgeschrittener Rechenmodelle in sensiblen Bereichen senken.

- **Benchmarks sind nicht die Realität.** Einen Benchmark oder ein veröffentlichtes Ensemble zu schlagen, ist ein Beleg, aber kein Beweis, dass die Methode auch bei neuen Daten oder in der Praxis trägt.

## Wie geht es weiter?

Einen bestätigten öffentlichen Starttermin für ERA haben wir nicht gesehen, die Verfügbarkeit bleibt also offen. Zu beobachten sind nicht einzelne Spitzenzahlen, sondern drei Dinge: unabhängige Replikation der Ergebnisse, wie gut auf diese Weise gefundene Methoden bei neuen Daten bestehen, und ob der Schritt der erklärbaren KI zur Routine wird, sodass Entdeckungen mit einer prüfbaren Begründung kommen.

Für Leser lautet die praktische Erkenntnis: KI wird zu einem Werkzeug, um große Optionsräume zu erkunden. Der Wert hängt davon ab, wie gut ein Mensch Frage, Daten und Bewertung definiert. Einen breiteren Blick darauf, wie leistungsfähige KI diskutiert wird, bietet unser Erklärtext zur [Superintelligenz](/blog/what-is-superintelligence-and-why-is-it-called-that/).

## Die Kurzfassung

Ein Nature-Paper von Google-Forschern vom Mai 2026 berichtet, dass ein KI-System namens ERA wissenschaftliche Software schrieb und verfeinerte, die in Genomik, öffentlicher Gesundheit, Mathematik und Neurowissenschaft von Experten gebaute Methoden bei Benchmarks schlug. Es funktioniert dort, wo sich Erfolg als Zahl bewerten lässt. Die berichteten Ergebnisse sind stark, zeigen aber bessere Vorhersagen und schnellere Suche, kein wissenschaftliches Verständnis. Menschen müssen weiterhin testen, erklären und entscheiden.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Häufig gestellte Fragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Wie hilft KI Wissenschaftlern bei Entdeckungen?</p><p class="text-gray-600 leading-relaxed">In einem Nature-Paper von 2026 beschreiben Google-Forscher ein System namens ERA, das mit einem Sprachmodell und Baumsuche wissenschaftliche Software schreibt und verbessert, bewertet anhand einer Zahl. Es schlug laut Bericht von Experten gebaute Methoden auf mehreren Benchmarks.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Was hat das ERA-System konkret gefunden?</p><p class="text-gray-600 leading-relaxed">Google berichtet von 40 neuen Methoden zur Integration von Single-Cell-RNA-Daten, wobei die beste in einem Benchmark 14 % besser war als ComBat, und von 14 Prognosemodellen für COVID-19-Krankenhausaufnahmen, die das CovidHub Ensemble der CDC übertrafen. Es sind berichtete Zahlen von Google Research und aus der Berichterstattung.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Heißt das, KI kann Wissenschaftler ersetzen?</p><p class="text-gray-600 leading-relaxed">Nein. Die Autoren sagen, das Optimieren von Vorhersagemodellen sei nicht dasselbe wie vollständige wissenschaftliche Entdeckung, die auch das Nachdenken über Mechanismen, Ursachen und Theorien erfordert. Forscher definieren weiterhin das Problem, prüfen und deuten die Ergebnisse.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wo liegt die Grenze dieses Ansatzes?</p><p class="text-gray-600 leading-relaxed">Er braucht eine bewertbare Aufgabe, bei der sich Erfolg als Zahl messen lässt, und eine Vorhersage ist keine Erklärung. Eine Perspektive in Nature Communications argumentiert, KI-Muster müssten durch Experimente oder Simulationen getestet werden, bevor sie als wissenschaftliche Erklärung gelten.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Wie hilft KI Wissenschaftlern bei Entdeckungen?","@type":"Question","acceptedAnswer":{"text":"In einem Nature-Paper von 2026 beschreiben Google-Forscher ein System namens ERA, das mit einem Sprachmodell und Baumsuche wissenschaftliche Software schreibt und verbessert, bewertet anhand einer Zahl. Es schlug laut Bericht von Experten gebaute Methoden auf mehreren Benchmarks.","@type":"Answer"}},{"name":"Was hat das ERA-System konkret gefunden?","@type":"Question","acceptedAnswer":{"text":"Google berichtet von 40 neuen Methoden zur Integration von Single-Cell-RNA-Daten, wobei die beste in einem Benchmark 14 % besser war als ComBat, und von 14 Prognosemodellen für COVID-19-Krankenhausaufnahmen, die das CovidHub Ensemble der CDC übertrafen. Es sind berichtete Zahlen von Google Research und aus der Berichterstattung.","@type":"Answer"}},{"name":"Heißt das, KI kann Wissenschaftler ersetzen?","@type":"Question","acceptedAnswer":{"text":"Nein. Die Autoren sagen, das Optimieren von Vorhersagemodellen sei nicht dasselbe wie vollständige wissenschaftliche Entdeckung, die auch das Nachdenken über Mechanismen, Ursachen und Theorien erfordert. Forscher definieren weiterhin das Problem, prüfen und deuten die Ergebnisse.","@type":"Answer"}},{"name":"Wo liegt die Grenze dieses Ansatzes?","@type":"Question","acceptedAnswer":{"text":"Er braucht eine bewertbare Aufgabe, bei der sich Erfolg als Zahl messen lässt, und eine Vorhersage ist keine Erklärung. Eine Perspektive in Nature Communications argumentiert, KI-Muster müssten durch Experimente oder Simulationen getestet werden, bevor sie als wissenschaftliche Erklärung gelten.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Weitere Einblicke

- [What Is Superintelligence and Why Is It Called That?](/blog/what-is-superintelligence-and-why-is-it-called-that/)
- [Anthropic, OpenAI, Google in Enterprise: Who Is Winning?](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/)
- [AI Coding Agents in 2026: How Developers Actually Work Now](/blog/ai-coding-agents-2026-how-developers-actually-work-now/)

## Quellen

- Nature, [An AI system to help scientists write expert-level empirical software](https://www.nature.com/articles/s41586-026-10658-6), Mai 2026 (Seite des Papers; Volltext nicht geprüft)
- Google Research, [Accelerating scientific discovery with AI-powered Empirical Research Assistance](https://research.google/blog/accelerating-scientific-discovery-with-ai-powered-empirical-software/), 9. September 2025, aktualisiert am 29. April 2026
- TechXplore, [AI system automates scientific software design, outperforming human-written code in key benchmarks](https://techxplore.com/news/2026-05-ai-automates-scientific-software-outperforming.html), 20. Mai 2026
- TechXplore, [Explainable AI could help turn hidden data patterns into testable scientific hypotheses](https://techxplore.com/news/2026-09-ai-hidden-patterns-testable-scientific.html), September 2026, über eine Perspektive in Nature Communications vom 6. August 2026

</div>
