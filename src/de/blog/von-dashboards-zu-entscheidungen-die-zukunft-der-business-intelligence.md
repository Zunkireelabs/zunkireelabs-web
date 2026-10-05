---
templateEngineOverride: "njk, md"
title: "Von Dashboards zu Entscheidungen: Zukunft der BI"
description: "BI-Werkzeuge entwickeln sich von Diagrammen zu Agenten, die Unternehmensdaten untersuchen und handeln. Was Databricks, Deloitte und Gartner zeigen."
date: "2026-10-05"
lastUpdated: "2026-10-05"
translationKey: "from-dashboards-to-decisions-the-future-of-business-intelligence"
category: "Einblicke"
pillar: "ai-business"
readTime: 8
featuredImage: "/assets/images/blog/von-dashboards-zu-entscheidungen-die-zukunft-der-business-intelligence.svg"
featuredImageAlt: "Abstrakter Farbverlauf als Hintergrund"
---

<div class="container-custom py-12 md:py-20">

**Kurz gesagt:** Business Intelligence entwickelt sich von Dashboards, die Menschen lesen, zu KI-Agenten, die Unternehmensdaten untersuchen und in manchen Produkten auch darauf handeln. Im Juni 2026 kündigte Databricks solche Agenten als allgemein verfügbar an. Unabhängige Umfragen zeigen, dass viele Führungskräfte KI bereits für Entscheidungen nutzen, sich aber kaum ausgereift fühlen und dass das Vertrauen in die Daten und in den Nutzen begrenzt ist.

## Das Wichtigste auf einen Blick

- Am 16. Juni 2026 kündigte Databricks Genie One und Genie Agents an, die es als KI-Kollegen und Agenten beschreibt, die über die Daten und Geschäftswerkzeuge eines Unternehmens hinweg arbeiten.
- Deloittes Umfrage 2026 unter mehr als 9.000 Führungskräften ergab, dass 60 % der Führungskräfte regelmäßig KI zur Unterstützung von Entscheidungen nutzen, aber nur 5 % sich als führend sehen.
- Gartners Umfrage unter 353 Daten- und KI-Verantwortlichen ergab, dass nur 39 % zuversichtlich sind, dass ihre aktuellen KI-Investitionen die Finanzergebnisse verbessern.
- Gartner stellte außerdem fest, dass Organisationen mit erfolgreichen KI-Initiativen bis zu viermal mehr, gemessen am Umsatz, in Datenqualität, Governance, Kompetenzen und Change-Management investieren.
- Offen bleiben Fragen zu Datenqualität, Verantwortung für Entscheidungen und dazu, wie viel ein Agent selbstständig tun darf.

## Die Belege

Dieser Beitrag stützt sich auf eine Produktankündigung und zwei unabhängige Umfragen.

**Die Ankündigung.** Am 16. Juni 2026 [kündigte Databricks](https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents) Genie One, Genie Agents und Genie Ontology an. Laut Databricks ist Genie One ein „datenkundiger KI-Kollege“ für Fachanwender, der über das Beantworten von Fragen in einfacher Sprache hinausgeht: Er kann Zeitpläne und Warnungen ausführen, Daten überwachen, Dokumente erstellen und sich mit Werkzeugen wie Slack, Microsoft Teams und Gmail verbinden. Genie Agents sind fachspezifische Agenten, die aus einer Eingabe erstellt werden, über Tabellen ebenso wie über Dokumente und Dateien schlussfolgern und mehrstufige Abläufe abschließen. Databricks gibt an, beide seien allgemein verfügbar und Berechtigungen würden „bei jeder Antwort standardmäßig durchgesetzt“, über die Zugriffskontrollen des Quellsystems oder seinen Unity Catalog. Das sind die eigenen Beschreibungen des Anbieters.

**Die Umfragen.** In seiner Arbeit [Global Human Capital Trends 2026](https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends/2026/decision-making-with-ai.html) (veröffentlicht am 3. März 2026) befragte Deloitte mehr als 9.000 Führungskräfte aus Wirtschaft und Personalwesen in 89 Ländern und berichtet, dass 60 % der Führungskräfte regelmäßig KI zur Unterstützung von Entscheidungen nutzen und 64 % KI-gestützte Entscheidungen für ihren aktuellen Erfolg als sehr wichtig ansehen. Nur 5 % sehen sich als führend, und 57 % der Organisationen arbeiten auf niedrigem Reifegrad bei Entscheidungen. Unabhängig davon ergab eine Gartner-Umfrage unter 353 Verantwortlichen für Daten, Analytik und KI, durchgeführt im November und Dezember 2025 und [am 16. April 2026 vorgestellt](https://www.gartner.com/en/newsroom/press-releases/2026-04-16-gartner-says-organizations-with-successful-ai-initiatives-invest-up-to-four-times-more-in-data-and-analytics-foundations), dass nur 39 % zuversichtlich sind, dass die aktuellen KI-Investitionen ihres Unternehmens die Finanzergebnisse positiv beeinflussen.

Databricks ist ein Beispiel, und andere Daten- und Analytik-Anbieter bauen ähnliche Assistenten. Dieser Beitrag vergleicht keine Produkte.

## Was die Technologie leistet

Das gemeinsame Muster hat drei Ebenen:

1. **Unternehmensdaten.** Tabellen, Dokumente, Dashboards und die geschäftlichen Definitionen dazu (was als „Umsatz“ oder „aktiver Kunde“ zählt).
2. **Eine Schlussfolgerungs- oder Agentenebene.** Ein Modell, das eine Frage in einfacher Sprache in Abfragen übersetzt, sie mit diesem Kontext abgleicht und seine Antwort erklärt. Databricks nennt seine Kontextebene eine „Ontologie“ und sagt, sie werde aus Tabellen, Abfragen, Dashboards und angebundenen Anwendungen aufgebaut.
3. **Eine empfohlene oder ausgeführte Handlung.** Das System empfiehlt einen nächsten Schritt, sendet eine Warnung oder ein Dokument oder führt, bei entsprechend eingerichteten Agenten, einen mehrstufigen Ablauf aus.

Die ersten beiden Ebenen ähneln einem sehr fähigen Analysten. Die dritte ist für die meisten Unternehmen neu.

## Was sich geändert hat

Ein klassisches Dashboard beantwortet Fragen, die jemand vorab bedacht hat. Ein Mensch liest es, entscheidet, was es bedeutet, und handelt. Agenten verändern drei Dinge:

- **Wer fragen kann.** Eine Führungskraft kann in einem Chat-Werkzeug eine Frage stellen, ohne darauf zu warten, dass ein Analyst einen Bericht baut.
- **Wann gefragt wird.** Warnungen und Überwachung bedeuten, dass das System ein Problem melden kann, ohne dass jemand hinschaut.
- **Wer handelt.** Bei manchen Aufgaben läuft die Schleife von der Erkenntnis zur Handlung ohne einen Menschen dazwischen.

Die Deloitte-Umfrage legt nahe, dass dies in Organisationen ankommt, die sich bei ihren Entscheidungen noch nicht sicher sind: Nur 5 % sagen, sie seien führend beim Einsatz von KI für Entscheidungen. Deloittes Artikel zitiert außerdem eine Gartner-Prognose, wonach bis 2027 die Hälfte der Geschäftsentscheidungen durch KI-Agenten unterstützt oder automatisiert wird. Das ist eine Prognose, keine Messung.

## Wer profitiert

**Fachbereiche** erhalten schneller Antworten, ohne Abfragen zu schreiben. **Datenteams** können weniger Zeit mit Routineberichten und mehr mit Definitionen und Qualität verbringen. **Kleinere Unternehmen** profitieren womöglich am meisten, weil der Zugang zu Daten in einfacher Sprache es einer Gründerin oder einem Betriebsleiter erlaubt, Fragen zu stellen, für die früher ein eigener Analyst nötig war. Dieser Nutzen setzt voraus, dass Daten vorhanden sind, nach denen sich zu fragen lohnt, und genau hier sind viele kleine Unternehmen am schwächsten.

## Grenzen und offene Fragen

- **Datenqualität.** Ein Agent schlussfolgert aus dem, was er bekommt. Sind Datensätze unvollständig, doppelt oder in Teams unterschiedlich definiert, wirken die Antworten sicher und sind trotzdem falsch. Gartners Befund, dass erfolgreiche KI-Organisationen bis zu viermal mehr in Grundlagen wie Datenqualität und Governance investieren, weist in dieselbe Richtung.
- **Verantwortung.** Wenn ein Agent eine Handlung empfiehlt oder ausführt, muss jemand das Ergebnis verantworten. Deloittes Rat lautet, Entscheiden als strategische Disziplin zu behandeln und das Verhältnis von Mensch und Maschine bewusst zu gestalten.
- **Vertrauen.** Nur 39 % der von Gartner befragten Verantwortlichen sind zuversichtlich, dass sich ihre KI-Investitionen finanziell auszahlen.
- **Wie viel Autonomie.** Databricks beschreibt Agenten, die ohne schrittweise Aufsicht handeln können. Wie viel Aufsicht ein Unternehmen ergänzt, etwa Freigaben, Ausgabenlimits und Protokolle, ist seine eigene Entscheidung.
- **Herstellerangaben.** Die hier beschriebenen Fähigkeiten und das Berechtigungsverhalten stammen vom Anbieter und sollten mit den eigenen Daten getestet werden.

## Wie es weitergeht

Zu erwarten ist, dass mehr Business-Intelligence- und Datenplattformen Agenten ausliefern, die handeln können, und dass die Kontrollen darum mehr Aufmerksamkeit bekommen. Für die meisten Unternehmen besteht die Aufgabe in nächster Zeit nicht darin, einen Agenten auszuwählen, sondern die Daten vorzubereiten, Definitionen abzustimmen und zu entscheiden, welche Entscheidungen ein Agent nur empfehlen und welche er ausführen darf.

Eine praktische Reihenfolge, die wir bei Zunkiree Labs vorschlagen:

1. Eine Entscheidung wählen, die Sie wiederholt treffen, etwa welche Interessenten nachzufassen oder welche Rechnungen anzumahnen sind.
2. Prüfen, dass die Daten dahinter vollständig, aktuell und mit einem benannten Verantwortlichen versehen sind.
3. Zuerst den Agenten nur empfehlen lassen und vor jeder Ausführung eine Freigabe durch einen Menschen verlangen.
4. Protokollieren, was er getan hat und warum, und die Ergebnisse prüfen, bevor sein Spielraum erweitert wird.

## Die Kurzfassung

Business Intelligence bewegt sich von Dashboards, die zeigen, zu Agenten, die untersuchen und manchmal handeln. Die Produkte sind real und bei mindestens einem großen Anbieter allgemein verfügbar, doch Umfragen zeigen, dass Organisationen beim Einsatz von KI für Entscheidungen noch am Anfang stehen und Datenqualität, Verantwortung und das Maß an Autonomie offen bleiben. Bereiten Sie zuerst die Daten und die Freigaberegeln vor.

Weiterführend: [Wer im Enterprise-KI-Markt vorne liegt](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/) und [warum KI-Agenten eine eigene Infrastruktur bekommen](/blog/ai-agents-are-getting-their-own-infrastructure/).

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Häufig gestellte Fragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Was ist der Unterschied zwischen einem Dashboard und einem KI-Agenten für Unternehmensdaten?</p><p class="text-gray-600 leading-relaxed">Ein Dashboard zeigt Antworten auf Fragen, die jemand vorab geplant hat, und ein Mensch entscheidet, was zu tun ist. Ein KI-Agent für Unternehmensdaten kann eine Frage in einfacher Sprache aufnehmen, über Daten hinweg untersuchen, seine Überlegungen erklären und in manchen Produkten Warnungen senden, Dokumente erstellen oder mehrstufige Abläufe abschließen.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Was hat Databricks im Juni 2026 angekündigt?</p><p class="text-gray-600 leading-relaxed">Am 16. Juni 2026 kündigte Databricks Genie One, Genie Agents und Genie Ontology an. Databricks beschreibt Genie One als datenkundigen KI-Kollegen für Fachanwender und Genie Agents als fachspezifische Agenten, die über strukturierte und unstrukturierte Daten schlussfolgern. Beide seien allgemein verfügbar. Das sind die eigenen Beschreibungen des Anbieters.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wie viele Führungskräfte nutzen KI zur Unterstützung von Entscheidungen?</p><p class="text-gray-600 leading-relaxed">In Deloittes Umfrage Global Human Capital Trends 2026 unter mehr als 9.000 Führungskräften aus Wirtschaft und Personalwesen gaben 60 % der Führungskräfte an, regelmäßig KI zur Unterstützung von Entscheidungen zu nutzen, aber nur 5 % sahen sich als führend.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Was sollte ein Unternehmen tun, bevor es KI-Agenten auf seine Daten loslässt?</p><p class="text-gray-600 leading-relaxed">Gartner stellte fest, dass Organisationen mit erfolgreichen KI-Initiativen bis zu viermal mehr, gemessen am Umsatz, in Datenqualität, Governance, Kompetenzen und Change-Management investieren. Ein sinnvoller Start: prüfen, dass die Daten vollständig, aktuell und mit Verantwortlichen versehen sind, mit Agenten beginnen, die empfehlen statt handeln, und Protokolle und Freigaben einrichten.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"Was ist der Unterschied zwischen einem Dashboard und einem KI-Agenten für Unternehmensdaten?","@type":"Question","acceptedAnswer":{"text":"Ein Dashboard zeigt Antworten auf Fragen, die jemand vorab geplant hat, und ein Mensch entscheidet, was zu tun ist. Ein KI-Agent für Unternehmensdaten kann eine Frage in einfacher Sprache aufnehmen, über Daten hinweg untersuchen, seine Überlegungen erklären und in manchen Produkten Warnungen senden, Dokumente erstellen oder mehrstufige Abläufe abschließen.","@type":"Answer"}},{"name":"Was hat Databricks im Juni 2026 angekündigt?","@type":"Question","acceptedAnswer":{"text":"Am 16. Juni 2026 kündigte Databricks Genie One, Genie Agents und Genie Ontology an. Databricks beschreibt Genie One als datenkundigen KI-Kollegen für Fachanwender und Genie Agents als fachspezifische Agenten, die über strukturierte und unstrukturierte Daten schlussfolgern. Beide seien allgemein verfügbar. Das sind die eigenen Beschreibungen des Anbieters.","@type":"Answer"}},{"name":"Wie viele Führungskräfte nutzen KI zur Unterstützung von Entscheidungen?","@type":"Question","acceptedAnswer":{"text":"In Deloittes Umfrage Global Human Capital Trends 2026 unter mehr als 9.000 Führungskräften aus Wirtschaft und Personalwesen gaben 60 % der Führungskräfte an, regelmäßig KI zur Unterstützung von Entscheidungen zu nutzen, aber nur 5 % sahen sich als führend.","@type":"Answer"}},{"name":"Was sollte ein Unternehmen tun, bevor es KI-Agenten auf seine Daten loslässt?","@type":"Question","acceptedAnswer":{"text":"Gartner stellte fest, dass Organisationen mit erfolgreichen KI-Initiativen bis zu viermal mehr, gemessen am Umsatz, in Datenqualität, Governance, Kompetenzen und Change-Management investieren. Ein sinnvoller Start: prüfen, dass die Daten vollständig, aktuell und mit Verantwortlichen versehen sind, mit Agenten beginnen, die empfehlen statt handeln, und Protokolle und Freigaben einrichten.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->

## Verwandte Einblicke

- [Anthropic, OpenAI und Google im Unternehmen: Wer vorne liegt und warum die Zahlen abweichen](/blog/enterprise-ai-anthropic-openai-google-who-is-winning/)
- [Warum KI-Agenten eine eigene Infrastruktur bekommen](/blog/ai-agents-are-getting-their-own-infrastructure/)

## Quellen

- Databricks, [Introducing Genie One, Genie Ontology and Genie Agents](https://www.databricks.com/blog/introducing-genie-one-genie-ontology-and-genie-agents), 16. Juni 2026
- Deloitte, [Decision-making with AI, 2026 Global Human Capital Trends](https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends/2026/decision-making-with-ai.html), 3. März 2026
- Gartner, [Organizations with successful AI initiatives invest up to four times more in data and analytics foundations](https://www.gartner.com/en/newsroom/press-releases/2026-04-16-gartner-says-organizations-with-successful-ai-initiatives-invest-up-to-four-times-more-in-data-and-analytics-foundations), 16. April 2026 (die Zahlen wurden in einer [Wiederveröffentlichung durch ABES](https://abes.org.br/en/gartner-aponta-que-organizacoes-com-iniciativas-de-inteligencia-artificial-bem-sucedidas-investem-ate-quatro-vezes-mais-em-fundamentos-de-dados-e-analytics/) geprüft, da die Gartner-Seite den automatischen Zugriff blockierte)

</div>
