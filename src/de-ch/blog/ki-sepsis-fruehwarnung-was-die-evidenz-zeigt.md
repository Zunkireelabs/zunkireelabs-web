---
templateEngineOverride: "njk, md"
title: "KI-Frühwarnung bei Sepsis: Was die Evidenz zeigt"
description: "Im Mai 2026 hat die FDA ein KI-System freigegeben, das Krankenhausakten auf Sepsis überwacht."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "ai-sepsis-early-warning-what-the-evidence-shows"
category: "Einblicke"
pillar: "ai-healthcare"
readTime: 9
featuredImage: "/assets/images/blog/ki-sepsis-fruehwarnung-was-die-evidenz-zeigt.svg"
featuredImageAlt: "Abstrakter Farbverlauf als Hintergrund"
---

<div class="container-custom py-12 md:py-20">

**Kurz gesagt:** Im Mai 2026 hat die FDA ein KI-Werkzeug freigegeben (Clearance), das Patientenakten im Krankenhaus liest, um eine Sepsis, eine lebensbedrohliche Reaktion auf eine Infektion, zu melden, bevor Ärztinnen und Ärzte sie vermuten. Die Entwickler berichten, dass Patientinnen und Patienten im Krankenhaus mit 18 % geringerer Wahrscheinlichkeit starben, wenn das Personal rechtzeitig auf die Warnungen reagierte. Das ist vielversprechend, aber kein Beleg dafür, dass allein die Warnungen Leben gerettet haben, und eine unabhängige Prüfung eines anderen, weit verbreiteten Sepsis-Warnsystems ergab, dass es die meisten Fälle übersah.

## Das Wichtigste auf einen Blick

- Am 12. Mai 2026 berichtete Healthcare Dive, dass Bayesian Health, das Forschung der Johns Hopkins University kommerzialisiert, die FDA-510(k)-Clearance für sein Sepsis-Frühwarnsystem TREWS erhalten hat.
- Die wichtigste Evidenz ist eine Studie von 2022 mit mehr als 764.000 Patientenkontakten in fünf US-Krankenhäusern, wie CIDRAP sie beschreibt. Die berichtete um 18 % geringere Sterblichkeit im Krankenhaus gilt, wenn das Personal rechtzeitig auf Warnungen reagierte.
- Eine 510(k)-Clearance bedeutet, dass die FDA das Gerät als im Wesentlichen gleichwertig mit einem bestehenden Gerät beurteilt hat. Sie ist daher für sich genommen keine Ergebnisstudie.
- Eine unabhängige Auswertung eines anderen Systems, des Epic Sepsis Model, an der University of Michigan ergab, dass es 67 % der Sepsis-Patienten übersah, bei 18 % aller Patienten aber Alarm schlug.
- Die praktische Lehre für jede klinische KI-Warnung: Fragen Sie nach externer Validierung, nach der Häufigkeit falscher Alarme und danach, wer wie schnell handelt.

## Die Evidenz

**Die Clearance.** [Healthcare Dive berichtete](https://www.healthcaredive.com/news/bayesian-health-gets-fda-nod-for-ai-sepsis-detection-tool/820107/) am 12. Mai 2026, dass Bayesian Health, das Forschung der Johns Hopkins University kommerzialisiert, die FDA-510(k)-Clearance für sein KI-gestütztes Sepsis-Frühwarnsystem erhalten hat, das Targeted Real-Time Early Warning System (TREWS). Laut demselben Bericht erhielt die Technologie 2023 den FDA-Status «Breakthrough Designation» und wird in Gesundheitssystemen wie der Cleveland Clinic, MemorialCare und der University of Rochester eingesetzt.

**Die Ergebnisstudie.** Die wichtigste veröffentlichte Evidenz ist eine Studie von 2022 mit mehr als 764.000 Patientenkontakten in fünf US-Krankenhäusern, [wie CIDRAP sie beschreibt](https://www.cidrap.umn.edu/sepsis/fda-clears-first-ai-based-early-warning-system-sepsis). Darin starben Sepsis-Patienten im Krankenhaus mit 18 % geringerer Wahrscheinlichkeit, wenn das Personal auf die Warnungen reagierte. Healthcare Dive beschreibt sie als prospektive, in Nature veröffentlichte Studie und schreibt, dass Patienten, deren Warnung innerhalb von drei Stunden von Ärztinnen oder Ärzten bestätigt wurde, eine geringere Sterblichkeit im Krankenhaus, weniger Organversagen und kürzere Aufenthalte hatten als Patienten, deren Warnung nicht innerhalb von drei Stunden bestätigt wurde.

**Die Aussage zum Zeitgewinn.** Bayesian sagt, das System erkenne Sepsis 2 bis 48 Stunden schneller als herkömmliche Methoden. Diese Angabe stammt vom Unternehmen selbst.

## Was die Technologie tut

Verfolgen Sie die Kette von den Daten bis zur Handlung:

1. **Daten.** Laut Healthcare Dive analysiert das System Informationen aus elektronischen Patientenakten: Aufnahmegründe, Laborwerte, Vitalzeichen, Eingriffe und Medikamente.
2. **KI-Modell.** CIDRAP beschreibt eine kontinuierliche Überwachung der Patienten über die integrierte Akte, um Sepsis bis zu 48 Stunden vor dem klinischen Verdacht zu erkennen. Das Modell bewertet das Risiko fortlaufend neu, sobald neue Ergebnisse eintreffen.
3. **Ausgabe.** Eine Warnung in der Patientenakte, zum Beispiel «Sepsisrisiko hoch».
4. **Menschliche Handlung.** Das System verlangt eine Bestätigung durch das klinische Personal und fügt sich in bestehende Abläufe ein. Es unterstützt die Entscheidung der Ärztin oder des Arztes. Es behandelt den Patienten nicht.

Die Geschwindigkeit ist wichtig, weil Sepsis zeitkritisch ist. Laut CIDRAP verringert jede Stunde verspäteter Behandlung die Überlebenschance um 8 %. Sie ist ausserdem schwer zu erkennen, da Sepsis-Symptome auch bei anderen Erkrankungen häufig sind.

## Was sich geändert hat

Geändert haben sich der Evidenz- und Zulassungsstatus dieser Art von Werkzeug. Ein kontinuierlich laufender KI-Monitor hat jetzt eine FDA-Clearance, und die Überschrift von CIDRAP nennt es das erste KI-basierte Frühwarnsystem für Sepsis, das diese Clearance erhalten hat. Es gibt ausserdem Ergebnisdaten aus echten Krankenhäusern und nicht nur einen Labortest. Damit verschiebt sich die Frage von «Kann KI Sepsis in alten Daten erkennen?» zu «Führt das Handeln auf Basis der Warnungen im laufenden Krankenhausbetrieb zu besseren Ergebnissen, und wie zuverlässig?»

## Wer profitiert

- **Patientinnen und Patienten.** Wird Sepsis früher gemeldet und handelt das Personal rechtzeitig, kann die Behandlung früher beginnen. Das ist der berichtete Nutzen, im Rahmen der unten genannten Grenzen.
- **Klinisches Personal.** Ein Team am Krankenbett, das viele Patienten im Blick hat, erhält einen Hinweis bei einem schwierigen Problem. Im CIDRAP-Bericht nennt der klinische Leiter von Bayesian, Dr. Neri Cohen, das Erkennen von Sepsis, bevor das Personal sie vermutet, «ein Problem wie die Nadel im Heuhaufen» und sagt, schon ein einziger verpasster Fall sei «katastrophal».
- **Krankenhäuser.** Weniger Todesfälle und Komplikationen sind das Ziel, doch unsere Quellen nennen keine Kostenzahlen, daher geben wir keine an.

## Grenzen und offene Fragen

- **Ein Grossteil der Evidenz stammt von den Entwicklern selbst.** Die 18 % und das Zeitfenster von 2 bis 48 Stunden werden vom Unternehmen und seinen Forschungspartnern berichtet. Die Studie vergleicht Patienten, deren Warnung rechtzeitig bestätigt wurde, mit solchen, bei denen das nicht der Fall war. Das zeigt für sich allein nicht, dass die Warnungen den Unterschied verursacht haben, weil sich diese beiden Patientengruppen auch in anderen Punkten unterscheiden können. Das ist unsere Lesart des Studiendesigns, wie Healthcare Dive es beschreibt.
- **Clearance ist kein Beweis.** CIDRAP erklärt, dass der 510(k)-Weg bedeutet, dass die FDA das Gerät als im Wesentlichen gleichwertig mit einem bestehenden Gerät eingestuft hat. Die Clearance allein ist keine Ergebnisstudie.
- **Nicht jedes Sepsis-Modell funktioniert gut.** In einer [Validierung des Epic Sepsis Model an der University of Michigan](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781313) mit 38.455 Krankenhausaufenthalten (JAMA Internal Medicine, 2021) lag die Sensitivität des Modells bei 33 %, der positive Vorhersagewert bei 12 % und die Fläche unter der Kurve bei 0,63. Es erkannte Sepsis bei 67 % der Patienten mit Sepsis nicht, schlug aber bei 18 % aller Patienten Alarm. Die Autoren hielten fest, dass dies deutlich unter den ursprünglich berichteten 0,76 bis 0,83 lag. Das ist ein anderes Produkt, und wir haben keinen direkten Vergleich mit TREWS gefunden.
- **Falschalarme und Alarmmüdigkeit.** Sind viele Warnungen falsch, lernt das Personal, sie zu ignorieren. Zu jeder Aussage über eine Warnung gehört ihre Falschalarmrate.
- **Es hängt vom Handeln der Menschen ab.** Der berichtete Nutzen gilt, wenn das Personal rechtzeitig reagierte. Personalausstattung und Abläufe sind daher so wichtig wie das Modell.
- **Offene Fragen.** In den von uns geprüften Quellen fanden wir keine unabhängige Replikation in anderen Gesundheitssystemen, und veröffentlichte Falschalarmraten für TREWS waren darin ebenfalls nicht enthalten.

Dieser Artikel ist eine allgemeine Information und keine medizinische Beratung.

## Wie es weitergeht

Achten Sie auf drei Dinge: unabhängige Studien in anderen Krankenhäusern, veröffentlichte Raten falscher Alarme und verpasster Fälle aus dem Routinebetrieb und darauf, wie Krankenhäuser den Nutzen nach der Einführung messen. Für andere KI-Produkte im Gesundheitswesen gilt dieselbe Checkliste.

Für Software-Teams in Kliniken und Krankenhäusern ist das Muster wiederverwendbar: Daten aus der Akte gehen hinein, ein Risikowert kommt heraus, ein Mensch entscheidet, und das System protokolliert, was nach jeder Warnung geschah. Die meisten Kliniken werden nie ein Sepsis-Modell betreiben, aber dieselben Fragen gelten für jede KI-Markierung im klinischen Ablauf, etwa bei der Vorhersage verpasster Termine oder bei Erinnerungen zur Nachsorge. Wurde sie an Patienten wie unseren validiert? Wie viele Warnungen sind falsch? Wer handelt, und wie schnell? Mit diesen Fragen würden wir bei Zunkiree Labs beginnen, wenn wir KI-Funktionen in Gesundheitssoftware bauen.

## Die Kurzfassung

Eine KI-Sepsiswarnung hat jetzt eine FDA-Clearance, und ihre Entwickler berichten von 18 % geringerer Sterblichkeit im Krankenhaus, wenn das Personal rechtzeitig auf Warnungen reagierte. Die Evidenz ist ermutigend, wird aber zu einem grossen Teil von den Entwicklern selbst berichtet, und freigegebene Geräte sind nicht alle gleich: Ein anderes weit verbreitetes Sepsis-Modell übersah in einem unabhängigen Test zwei Drittel der Fälle. Die richtige Reaktion ist weder Hype noch Ablehnung. Fragen Sie nach externer Validierung, nach Falschalarmraten und nach einem klaren Plan, wer auf jede Warnung reagiert.

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Häufig gestellte Fragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Was ist Sepsis und warum ist die Früherkennung wichtig?</p><p class="text-gray-600 leading-relaxed">Sepsis ist eine lebensbedrohliche Reaktion auf eine Infektion und laut Healthcare Dive eine der häufigsten Todesursachen in US-Krankenhäusern. Der CIDRAP-Bericht nennt, dass jede Stunde verspäteter Behandlung die Überlebenschance um 8 % senkt, weshalb frühere Hinweise wertvoll sind.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Hat die FDA ein KI-Werkzeug für Sepsis zugelassen?</p><p class="text-gray-600 leading-relaxed">Die FDA hat es freigegeben (Clearance). Im Mai 2026 erhielt Bayesian Health die 510(k)-Clearance für sein Sepsis-Frühwarnsystem TREWS. Das bedeutet, dass die FDA es als im Wesentlichen gleichwertig mit einem bestehenden Gerät beurteilt hat und es nicht allein aufgrund von Behandlungsergebnissen zugelassen wurde.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Senkt KI-gestützte Sepsiserkennung die Zahl der Todesfälle?</p><p class="text-gray-600 leading-relaxed">Eine Studie von 2022 mit mehr als 764.000 Patientenkontakten in fünf US-Krankenhäusern ergab, dass Sepsis-Patienten mit 18 % geringerer Wahrscheinlichkeit im Krankenhaus starben, wenn das Personal auf die Warnungen reagierte, wie CIDRAP und Healthcare Dive berichten. Die Ergebnisse stammen von den Entwicklern und ihren Partnern und vergleichen Patienten mit rechtzeitiger und nicht rechtzeitiger Bestätigung der Warnung. Sie belegen daher für sich allein nicht, dass die Warnungen den Unterschied verursacht haben.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Sind alle KI-Sepsiswarnungen so genau?</p><p class="text-gray-600 leading-relaxed">Nein. Eine Validierung des Epic Sepsis Model an der University of Michigan mit 38.455 Krankenhausaufenthalten ergab 33 % Sensitivität und 12 % positiven Vorhersagewert. Es übersah 67 % der Patienten mit Sepsis und schlug bei 18 % aller Patienten Alarm. Verlangen Sie von jedem Anbieter unabhängige Validierung und Daten zu Falschalarmen.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Was ist Sepsis und warum ist die Früherkennung wichtig?","@type":"Question","acceptedAnswer":{"text":"Sepsis ist eine lebensbedrohliche Reaktion auf eine Infektion und laut Healthcare Dive eine der häufigsten Todesursachen in US-Krankenhäusern. Der CIDRAP-Bericht nennt, dass jede Stunde verspäteter Behandlung die Überlebenschance um 8 % senkt, weshalb frühere Hinweise wertvoll sind.","@type":"Answer"}},{"name":"Hat die FDA ein KI-Werkzeug für Sepsis zugelassen?","@type":"Question","acceptedAnswer":{"text":"Die FDA hat es freigegeben (Clearance). Im Mai 2026 erhielt Bayesian Health die 510(k)-Clearance für sein Sepsis-Frühwarnsystem TREWS. Das bedeutet, dass die FDA es als im Wesentlichen gleichwertig mit einem bestehenden Gerät beurteilt hat und es nicht allein aufgrund von Behandlungsergebnissen zugelassen wurde.","@type":"Answer"}},{"name":"Senkt KI-gestützte Sepsiserkennung die Zahl der Todesfälle?","@type":"Question","acceptedAnswer":{"text":"Eine Studie von 2022 mit mehr als 764.000 Patientenkontakten in fünf US-Krankenhäusern ergab, dass Sepsis-Patienten mit 18 % geringerer Wahrscheinlichkeit im Krankenhaus starben, wenn das Personal auf die Warnungen reagierte, wie CIDRAP und Healthcare Dive berichten. Die Ergebnisse stammen von den Entwicklern und ihren Partnern und vergleichen Patienten mit rechtzeitiger und nicht rechtzeitiger Bestätigung der Warnung. Sie belegen daher für sich allein nicht, dass die Warnungen den Unterschied verursacht haben.","@type":"Answer"}},{"name":"Sind alle KI-Sepsiswarnungen so genau?","@type":"Question","acceptedAnswer":{"text":"Nein. Eine Validierung des Epic Sepsis Model an der University of Michigan mit 38.455 Krankenhausaufenthalten ergab 33 % Sensitivität und 12 % positiven Vorhersagewert. Es übersah 67 % der Patienten mit Sepsis und schlug bei 18 % aller Patienten Alarm. Verlangen Sie von jedem Anbieter unabhängige Validierung und Daten zu Falschalarmen.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Weitere Einblicke

- [AI in UK Healthcare: What to Check Before You Buy](/blog/ai-in-uk-healthcare-what-to-check-before-you-buy/)
- [Exploring AI Services for Healthcare in Nepal](/blog/exploring-ai-services-for-healthcare-in-nepal/)
- [FTC untersucht KI-Labore wegen Agenten ausser Kontrolle: Was Unternehmen tun sollten](/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/)

## Quellen

- Healthcare Dive, [Bayesian Health gets FDA nod for AI sepsis detection tool](https://www.healthcaredive.com/news/bayesian-health-gets-fda-nod-for-ai-sepsis-detection-tool/820107/), 12. Mai 2026
- CIDRAP, [FDA clears first AI-based early warning system for sepsis](https://www.cidrap.umn.edu/sepsis/fda-clears-first-ai-based-early-warning-system-sepsis)
- Wong et al., [External validation of a widely implemented proprietary sepsis prediction model in hospitalized patients](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781313), JAMA Internal Medicine, 2021

</div>
