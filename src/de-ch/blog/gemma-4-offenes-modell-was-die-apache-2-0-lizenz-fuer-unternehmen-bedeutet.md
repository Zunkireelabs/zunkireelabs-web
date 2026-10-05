---
templateEngineOverride: "njk, md"
title: "Gemma 4: Was ein offenes Modell unter Apache 2.0 bedeutet"
description: "Googles Gemma 4 ist eine Familie offener Gewichte unter Apache 2.0. Was das für Datenschutz, Kosten und Kontrolle heisst und was Sie zuerst prüfen sollten."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "gemma-4-open-model-what-apache-2-license-means-for-business"
category: "Einblicke"
pillar: "ai-frontier"
readTime: 8
featuredImage: "/assets/images/blog/gemma-4-offenes-modell-was-die-apache-2-0-lizenz-fuer-unternehmen-bedeutet.svg"
featuredImageAlt: "Abstrakter Farbverlauf als Hintergrund"
---

<div class="container-custom py-12 md:py-20">

**Kurz gesagt:** Gemma 4 ist Googles Familie von KI-Modellen mit offenen Gewichten, veröffentlicht am 2. April 2026 unter der Apache-2.0-Lizenz, die kommerzielle Nutzung erlaubt. Für Unternehmen lautet die nützliche Frage nicht, ob das Modell in einer Rangliste einen Cloud-KI-Dienst schlägt, sondern ob ein Modell unter eigener Kontrolle zu den eigenen Anforderungen an Datenschutz, Kosten und Sprachen passt.

## Das Wichtigste auf einen Blick

- Gemma 4 gibt es in vier Grössen, von kleinen Modellen für Smartphones und Laptops bis zu einem 31B-Modell für eine einzelne leistungsstarke GPU.
- «Offene Gewichte» bedeutet, dass Sie das Modell herunterladen und selbst betreiben können; bei einer geschlossenen API betreibt der Anbieter das Modell, und Sie senden ihm Ihre Daten.
- Apache 2.0 ist eine permissive Lizenz, die kommerzielle Nutzung erlaubt. Den Lizenztext und die Model Card sollten Sie trotzdem selbst lesen.
- Benchmark-Platzierungen sind Googles Angaben zum Zeitpunkt der Veröffentlichung. Testen Sie das Modell an Ihren eigenen Dokumenten, bevor Sie sich festlegen.


## Was ist Gemma 4?

Gemma 4 ist eine Familie offener Modelle von Google DeepMind. Laut [Googles Ankündigung](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) vom 2. April 2026 gibt es sie in vier Grössen: Effective 2B (E2B), Effective 4B (E4B), ein Mixture-of-Experts-Modell mit 26B und ein dichtes Modell mit 31B.

- **Kontextfenster:** 128K bei den beiden Edge-Modellen und bis zu 256K bei den grösseren.
- **Eingaben:** Alle Modelle verarbeiten Bilder und Video; E2B und E4B nehmen zusätzlich nativ Audio für die Spracherkennung entgegen.
- **Fähigkeiten:** Google hebt mehrstufiges Schlussfolgern, Funktionsaufrufe und strukturierte JSON-Ausgaben für Agenten-Workflows, Codegenerierung und die Unterstützung von mehr als 140 Sprachen hervor.
- **Bezugsquellen:** Google AI Studio, Hugging Face, Kaggle und Ollama sowie Werkzeuge wie vLLM, llama.cpp und NVIDIA NIM.

Google sagt ausserdem, das 31B-Modell liege auf der Arena-AI-Text-Rangliste unter den offenen Modellen auf Platz drei und das 26B-Modell auf Platz sechs, und Gemma 4 «übertreffe Modelle, die 20-mal so gross sind». Das sind Aussagen des Anbieters selbst, nehmen Sie sie also als Ausgangspunkt und nicht als Urteil.

## Offenes Modell oder geschlossene API: Wo liegt der Unterschied?

Bei einer **geschlossenen API**, etwa Googles eigenen Gemini-Modellen, betreibt der Anbieter das Modell auf seinen Servern. Sie senden Ihre Prompts und Daten über das Internet, zahlen nach Nutzung und erhalten Updates automatisch. Wie sich eine solche Veröffentlichung einordnen lässt, beschreibt unser Leitfaden zum [Lesen einer Frontier-Modell-Ankündigung](/blog/gemini-4-argon-how-to-read-a-frontier-model-release/).

Bei einem Modell mit **offenen Gewichten** werden die trainierten Modelldateien veröffentlicht, und Sie können sie auf eigener Hardware oder im eigenen Cloud-Konto betreiben. Sie bestimmen, wohin die Daten gehen, übernehmen aber auch Hosting, Überwachung und Updates. «Offene Gewichte» heisst nicht, dass Sie auch die Trainingsdaten oder das vollständige Trainingsrezept erhalten. Die Offenheit ist also enger gefasst, als der Name vermuten lässt.

## Was erlaubt die Apache-2.0-Lizenz?

Google beschreibt Gemma 4 als unter Apache 2.0 veröffentlicht, einer weit verbreiteten permissiven Open-Source-Lizenz. Allgemein gesagt dürfen Sie die Software nutzen, verändern und weitergeben, auch in kommerziellen Produkten, solange Sie Lizenz- und Urheberrechtshinweise beibehalten. Sie enthält ausserdem eine ausdrückliche Patentlizenz.

Zwei praktische Hinweise. Erstens gilt die Lizenz für die Modelldateien so, wie sie veröffentlicht wurden. Prüfen Sie daher, ob die heruntergeladene Version die erwartete Lizenz trägt. Zweitens ist dies eine allgemeine Beschreibung und keine Rechtsberatung: Lesen Sie den Lizenztext und die Model Card, und fragen Sie eine Juristin oder einen Juristen, wenn Ihr Produkt von der Antwort abhängt.

## Selbst betreiben oder eine API nutzen?

Eine allgemeingültige Antwort gibt es nicht. Diese Fragen entscheiden meist:

1. **Datenschutz und Datenstandort.** Enthalten Prompts Kundendaten, Gesundheitsdaten oder Verträge, kann der Betrieb in der eigenen Umgebung Gespräche zur Compliance vereinfachen.
2. **Kostenstruktur.** Eine API rechnet nach Nutzung ab und skaliert bis auf null herunter. Beim Selbstbetrieb zahlen Sie für GPUs oder gemietete Kapazität, ob jemand sie nutzt oder nicht. Das lohnt sich vor allem bei gleichmässig hohem Volumen.
3. **Latenz und Offline-Nutzung.** Die kleinen Modelle sind für Smartphones, Laptops und Edge-Geräte ausgelegt, was dort wichtig ist, wo die Verbindung unzuverlässig ist.
4. **Sprachabdeckung.** Google nennt Unterstützung für mehr als 140 Sprachen. Schreiben Ihre Nutzerinnen und Nutzer auf Nepalesisch, Hindi oder in einer anderen südasiatischen Sprache, testen Sie mit echten Beispielen, denn dass eine Sprache unterstützt wird, heisst nicht, dass sie für Ihre Aufgabe gut funktioniert.
5. **Kapazität im Team.** Jemand muss das Modell betreiben, absichern und aktualisieren. Wenn niemand dafür da ist, ist eine API meist einfacher.

Häufig prototypt man mit einer API und verlagert einen stabilen, volumenstarken oder sensiblen Workload erst dann auf ein selbst betriebenes offenes Modell, wenn die Anforderungen klar sind.

## Worauf sollten Sie achten?

- **Benchmarks sind Angaben der Anbieter.** Ranglistenplätze ändern sich und spiegeln Ihre Aufgabe womöglich nicht wider. Bauen Sie aus eigenen Dokumenten ein kleines Testset und vergleichen Sie Modelle damit.
- **Der Betrieb liegt bei Ihnen.** Hosting, Sicherheitsupdates, Zugriffskontrolle und Überwachung sind Ihre Verantwortung.
- **Die Sicherheitsschicht liegt bei Ihnen.** Ein offenes Modell gibt Ihnen Kontrolle, aber auch die Aufgabe, Ausgaben zu filtern, einzuschränken, was angebundene Werkzeuge tun dürfen, und zu protokollieren, was das System tut. Es gelten dieselben Grundsätze wie für jedes KI-Werkzeug, wie wir in unserem Beitrag zu [Superintelligenz und KI-Sicherheit](/blog/what-is-superintelligence-and-why-is-it-called-that/) beschreiben.
- **Lizenz und Model Card prüfen.** Bestätigen Sie die Bedingungen und Nutzungshinweise, bevor Sie darauf aufbauen.

## Die Kurzfassung

Gemma 4 bietet Unternehmen eine leistungsfähige Option mit offenen Gewichten unter einer permissiven Lizenz, in Grössen vom Smartphone bis zum Server mit einer GPU. Ob sie die richtige Wahl ist, hängt von Ihren Daten, Ihrem Volumen und Ihrem Team ab, nicht von einer Rangliste. Beginnen Sie mit einem kleinen Test an Ihrem eigenen Material.

Wenn Sie Optionen abwägen, finden Sie in unserer Checkliste zur [Auswahl eines KI-Entwicklungsunternehmens](/blog/how-to-choose-ai-development-company/) weitere Hinweise.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Häufig gestellte Fragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Was ist Gemma 4?</p><p class="text-gray-600 leading-relaxed">Gemma 4 ist eine Familie von KI-Modellen mit offenen Gewichten von Google DeepMind, veröffentlicht am 2. April 2026 in vier Grössen: Effective 2B, Effective 4B, ein Mixture-of-Experts-Modell mit 26B und ein dichtes Modell mit 31B.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Darf ich Gemma 4 in einem kommerziellen Produkt einsetzen?</p><p class="text-gray-600 leading-relaxed">Google sagt, Gemma 4 werde unter der Apache-2.0-Lizenz veröffentlicht, einer permissiven Lizenz, die kommerzielle Nutzung in der Regel erlaubt. Lesen Sie den Lizenztext und die Model Card, und fragen Sie eine Juristin oder einen Juristen, wenn Ihr Produkt von den Bedingungen abhängt.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Was ist der Unterschied zwischen einem Modell mit offenen Gewichten und einer geschlossenen API?</p><p class="text-gray-600 leading-relaxed">Bei einer geschlossenen API betreibt der Anbieter das Modell, und Sie senden ihm Ihre Daten. Bei einem Modell mit offenen Gewichten laden Sie die Modelldateien herunter und betreiben sie auf eigener Hardware oder im eigenen Cloud-Konto. Das gibt mehr Kontrolle, bedeutet aber auch mehr Betriebsaufwand.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Sollte mein Unternehmen Gemma 4 selbst betreiben?</p><p class="text-gray-600 leading-relaxed">Das hängt von der Sensibilität Ihrer Daten, dem Nutzungsvolumen und Ihrem technischen Team ab. Viele Teams prototypen mit einer API und verlagern stabile, volumenstarke oder sensible Workloads später auf ein selbst betriebenes Modell. Testen Sie zuerst mit Ihren eigenen Dokumenten und Sprachen.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Was ist Gemma 4?","@type":"Question","acceptedAnswer":{"text":"Gemma 4 ist eine Familie von KI-Modellen mit offenen Gewichten von Google DeepMind, veröffentlicht am 2. April 2026 in vier Grössen: Effective 2B, Effective 4B, ein Mixture-of-Experts-Modell mit 26B und ein dichtes Modell mit 31B.","@type":"Answer"}},{"name":"Darf ich Gemma 4 in einem kommerziellen Produkt einsetzen?","@type":"Question","acceptedAnswer":{"text":"Google sagt, Gemma 4 werde unter der Apache-2.0-Lizenz veröffentlicht, einer permissiven Lizenz, die kommerzielle Nutzung in der Regel erlaubt. Lesen Sie den Lizenztext und die Model Card, und fragen Sie eine Juristin oder einen Juristen, wenn Ihr Produkt von den Bedingungen abhängt.","@type":"Answer"}},{"name":"Was ist der Unterschied zwischen einem Modell mit offenen Gewichten und einer geschlossenen API?","@type":"Question","acceptedAnswer":{"text":"Bei einer geschlossenen API betreibt der Anbieter das Modell, und Sie senden ihm Ihre Daten. Bei einem Modell mit offenen Gewichten laden Sie die Modelldateien herunter und betreiben sie auf eigener Hardware oder im eigenen Cloud-Konto. Das gibt mehr Kontrolle, bedeutet aber auch mehr Betriebsaufwand.","@type":"Answer"}},{"name":"Sollte mein Unternehmen Gemma 4 selbst betreiben?","@type":"Question","acceptedAnswer":{"text":"Das hängt von der Sensibilität Ihrer Daten, dem Nutzungsvolumen und Ihrem technischen Team ab. Viele Teams prototypen mit einer API und verlagern stabile, volumenstarke oder sensible Workloads später auf ein selbst betriebenes Modell. Testen Sie zuerst mit Ihren eigenen Dokumenten und Sprachen.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Weitere Einblicke

- [Gemini 4 Argon: So lesen Sie die Ankündigung eines Frontier-Modells](/blog/gemini-4-argon-how-to-read-a-frontier-model-release/)
- [Was ist Superintelligenz und warum heisst sie so?](/blog/what-is-superintelligence-and-why-is-it-called-that/)
- [Warum KI-Agenten eine eigene Infrastruktur bekommen](/blog/ai-agents-are-getting-their-own-infrastructure/)

## Quellen

- Google, [Gemma 4: Byte for byte, the most capable open models](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/), 2. April 2026
- The Apache Software Foundation, [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)

</div>
