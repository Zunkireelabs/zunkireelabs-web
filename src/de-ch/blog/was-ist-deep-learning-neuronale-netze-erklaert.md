---
templateEngineOverride: "njk, md"
title: "Was ist Deep Learning? Neuronale Netze erklärt"
description: "Deep Learning erklärt: wie neuronale Netze lernen, welche Architekturen es gibt, wo es eingesetzt wird, wo die Grenzen liegen und wann Einfacheres reicht."
date: "2026-10-02T13:00:00+05:45"
featuredImage: "/assets/images/blog/was-ist-deep-learning-neuronale-netze-erklaert.svg"
featuredImageAlt: "Abstrakter Farbverlauf als Hintergrund"
lastUpdated: "2026-10-02"
translationKey: "what-is-deep-learning-neural-networks-explained"
category: "KI-Grundlagen"
readTime: 9
---

<div class="container-custom py-12 md:py-20">

<p>Deep Learning ist der Zweig des maschinellen Lernens, der hinter den meisten heutigen Fortschritten bei Sprache, Bildverarbeitung und Spracherkennung steht. Dieser Leitfaden erklärt, was neuronale Netze sind, wie sie lernen, wofür die wichtigsten Architekturen gedacht sind und wann ein einfacheres Verfahren die bessere Wahl ist.</p>

## Was ist Deep Learning?

<p>Das Standardlehrbuch von Goodfellow, Bengio und Courville beschreibt die Idee so: Die Lösung bestehe darin, «Computern zu ermöglichen, aus Erfahrung zu lernen und die Welt als Hierarchie von Konzepten zu verstehen, wobei jedes Konzept über seine Beziehung zu einfacheren Konzepten definiert ist». Sie fügen hinzu, dass «die Hierarchie der Konzepte es dem Computer ermöglicht, komplizierte Konzepte zu lernen, indem er sie aus einfacheren aufbaut». Als Graph gezeichnet, hat diese Hierarchie viele Schichten, daher kommt das Wort «deep» (tief).</p>

## Das Wichtigste in Kürze

<ul><li>Deep Learning ist maschinelles Lernen mit neuronalen Netzen, die viele Schichten haben.</li><li>Sein wichtigster Vorteil ist, dass es nützliche Merkmale aus Rohdaten selbst lernt, statt dass Menschen sie von Hand entwerfen.</li><li>Es benötigt in der Regel grosse Datenmengen und viel Rechenleistung.</li><li>Am stärksten ist es bei unstrukturierten Daten wie Bildern, Audio und Text.</li><li>Seine wichtigsten Nachteile sind Kosten, Datenhunger und die Schwierigkeit, einzelne Antworten zu erklären.</li></ul>

## Wie funktioniert ein neuronales Netz?

<p>Ein neuronales Netz besteht aus Schichten einfacher Einheiten. Jede Einheit nimmt Zahlen entgegen, multipliziert sie mit Gewichten, addiert sie und gibt das Ergebnis durch eine einfache Funktion weiter. Die erste Schicht erhält die Rohdaten, etwa die Pixel eines Bildes oder die Tokens eines Satzes. Jede folgende Schicht baut auf der vorherigen auf: Frühe Schichten erkennen einfache Muster, spätere Schichten kombinieren sie zu komplexeren.</p>

## Wie lernt ein Netz?

<ul><li><strong>Vorwärtsdurchlauf (Forward Pass):</strong> Das Netz macht aus einem Beispiel eine Vorhersage.</li><li><strong>Verlust (Loss):</strong> Eine Zahl misst, wie falsch die Vorhersage war.</li><li><strong>Backpropagation:</strong> Der Fehler wird rückwärts durch die Schichten verfolgt, um zu sehen, wie jedes Gewicht dazu beigetragen hat.</li><li><strong>Gradientenabstieg (Gradient Descent):</strong> Jedes Gewicht wird in die Richtung angepasst, die den Fehler verringert.</li><li><strong>Wiederholen:</strong> über viele Beispiele und viele Durchläufe, bis sich die Leistung bei ungesehenen Daten nicht mehr verbessert.</li></ul>

## Wie unterscheidet sich Deep Learning von anderem maschinellem Lernen?

<p>Beim klassischen maschinellen Lernen entwerfen oft Menschen die Merkmale, die ein Modell betrachtet. Das Deep-Learning-Lehrbuch weist darauf hin, warum das wichtig ist: Ein Algorithmus zum Lernen von Repräsentationen «kann eine gute Menge von Merkmalen für eine einfache Aufgabe in Minuten oder für eine komplexe Aufgabe in Stunden bis Monaten finden», wohingegen «das manuelle Entwerfen von Merkmalen für eine komplexe Aufgabe sehr viel menschliche Zeit und Mühe erfordert; für eine ganze Forschungsgemeinschaft kann es Jahrzehnte dauern». Deep Learning automatisiert einen grossen Teil dieses Schritts. Das übergeordnete Gebiet wird in <a href="/blog/what-is-machine-learning-how-it-works-and-where-its-used/" rel="noopener">Was ist maschinelles Lernen?</a> behandelt.</p>

## Welche Haupttypen neuronaler Netze gibt es?

<ul><li><strong>Convolutional Networks (faltende Netze):</strong> für gitterartige Daten gedacht, meist Bilder.</li><li><strong>Rekurrente Netze:</strong> dafür gedacht, Sequenzen Schritt für Schritt zu lesen, etwa Text oder Audio, und vor neueren Architekturen weit verbreitet.</li><li><strong>Transformer:</strong> 2017 in «Attention Is All You Need» vorgestellt, das ein Netz «allein auf Basis von Attention-Mechanismen» vorschlug. Sie bilden die Grundlage heutiger grosser Sprachmodelle (siehe <a href="/glossary/llm/" rel="noopener">LLM</a>).</li></ul>

## Wo wird Deep Learning eingesetzt?

<ul><li>Erkennen von Objekten und Gesichtern in Bildern sowie Lesen von Dokumenten.</li><li>Spracherkennung und Sprachsynthese.</li><li>Maschinelle Übersetzung, Zusammenfassung und Beantwortung von Fragen.</li><li>Erzeugen von Text, Bildern und Code (siehe <a href="/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" rel="noopener">Was ist generative KI?</a>).</li><li>Suche und Empfehlungen, wo die Bedeutung wichtiger ist als exakte Schlüsselwörter (siehe <a href="/glossary/embeddings/" rel="noopener">Embeddings</a>).</li></ul>

## Wo liegen die Grenzen von Deep Learning?

<ul><li><strong>Daten und Rechenleistung:</strong> Grosse Modelle brauchen grosse Datensätze und spezialisierte Hardware.</li><li><strong>Intransparenz:</strong> Es kann schwierig sein zu erklären, warum ein Netz eine bestimmte Antwort gegeben hat.</li><li><strong>Anfälligkeit:</strong> Ein Modell kann bei Eingaben versagen, die seinen Trainingsdaten unähnlich sind.</li><li><strong>Kosten und Energie:</strong> Das Training und der Betrieb grosser Modelle sind teuer.</li><li><strong>Nicht immer nötig:</strong> Bei kleinen, strukturierten Datensätzen sind einfachere Verfahren oft leichter zu bauen, zu erklären und zu warten.</li></ul>

## Wie entscheiden Sie, ob Sie Deep Learning brauchen?

<ul><li>Sind Ihre Daten überwiegend unstrukturiert (Bilder, Audio, Text)?</li><li>Haben Sie genügend Beispiele, oder können Sie von einem bestehenden vortrainierten Modell ausgehen?</li><li>Muss eine Antwort erklärt werden, und wenn ja, ist das mit diesem Modell möglich?</li><li>Würde ein einfacheres Modell genügen und wäre es günstiger im Betrieb?</li></ul>

## Wo Zunkiree Labs steht

<p>Zunkiree Labs entwickelt individuelle KI-Systeme (darunter RAG-Pipelines, LLM-Integration und intelligente Automatisierung), Datensysteme, individuelle Software sowie Web- und Mobilanwendungen. Ob ein Projekt Deep Learning, ein Sprachmodell mit Retrieval oder etwas Einfacheres braucht, ist eine Designfrage, mit der wir beginnen. Die verwandten Ansätze <a href="/glossary/rag/" rel="noopener">RAG</a> und <a href="/glossary/fine-tuning/" rel="noopener">Fine-Tuning</a> werden in unserem Glossar erklärt. Die vollständige Liste finden Sie auf der <a href="/solutions/" rel="noopener">Leistungsseite</a>, und die <a href="/solutions/ai-development/" rel="noopener">Leistung KI-Entwicklung</a> behandelt individuelle KI-Systeme ausführlicher.</p>

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Häufig gestellte Fragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Was ist Deep Learning?</p><p class="text-gray-600 leading-relaxed">Deep Learning ist eine Art des maschinellen Lernens, die neuronale Netze mit vielen Schichten nutzt, um aus Daten zu lernen und komplizierte Konzepte aus einfacheren aufzubauen.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Was ist der Unterschied zwischen maschinellem Lernen und Deep Learning?</p><p class="text-gray-600 leading-relaxed">Deep Learning ist eine Teilmenge des maschinellen Lernens. Klassisches maschinelles Lernen stützt sich oft auf Merkmale, die Menschen entwerfen; Deep Learning lernt viele seiner Merkmale selbst aus Rohdaten, auf Kosten von mehr Daten und mehr Rechenleistung.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Was ist ein neuronales Netz?</p><p class="text-gray-600 leading-relaxed">Ein neuronales Netz ist ein Modell aus Schichten einfacher, miteinander verbundener Einheiten mit anpassbaren Gewichten. Das Training passt die Gewichte an, damit die Ausgaben des Netzes den richtigen Antworten näherkommen.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Ist ein grosses Sprachmodell Deep Learning?</p><p class="text-gray-600 leading-relaxed">Ja. Grosse Sprachmodelle sind sehr grosse neuronale Netze, die meisten bauen auf der 2017 vorgestellten Transformer-Architektur auf.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wann sollte man Deep Learning nicht einsetzen?</p><p class="text-gray-600 leading-relaxed">Wenn die Datenmenge klein oder die Daten strukturiert sind, wenn Antworten leicht erklärbar sein müssen oder wenn ein einfacheres Modell genau genug und günstiger im Betrieb ist.</p></div></div></div><script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Was ist Deep Learning?", "acceptedAnswer": {"@type": "Answer", "text": "Deep Learning ist eine Art des maschinellen Lernens, die neuronale Netze mit vielen Schichten nutzt, um aus Daten zu lernen und komplizierte Konzepte aus einfacheren aufzubauen."}}, {"@type": "Question", "name": "Was ist der Unterschied zwischen maschinellem Lernen und Deep Learning?", "acceptedAnswer": {"@type": "Answer", "text": "Deep Learning ist eine Teilmenge des maschinellen Lernens. Klassisches maschinelles Lernen stützt sich oft auf Merkmale, die Menschen entwerfen; Deep Learning lernt viele seiner Merkmale selbst aus Rohdaten, auf Kosten von mehr Daten und mehr Rechenleistung."}}, {"@type": "Question", "name": "Was ist ein neuronales Netz?", "acceptedAnswer": {"@type": "Answer", "text": "Ein neuronales Netz ist ein Modell aus Schichten einfacher, miteinander verbundener Einheiten mit anpassbaren Gewichten. Das Training passt die Gewichte an, damit die Ausgaben des Netzes den richtigen Antworten näherkommen."}}, {"@type": "Question", "name": "Ist ein grosses Sprachmodell Deep Learning?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Grosse Sprachmodelle sind sehr grosse neuronale Netze, die meisten bauen auf der 2017 vorgestellten Transformer-Architektur auf."}}, {"@type": "Question", "name": "Wann sollte man Deep Learning nicht einsetzen?", "acceptedAnswer": {"@type": "Answer", "text": "Wenn die Datenmenge klein oder die Daten strukturiert sind, wenn Antworten leicht erklärbar sein müssen oder wenn ein einfacheres Modell genau genug und günstiger im Betrieb ist."}}]}</script><!-- SEOAI:FAQ:END -->

## Weiterlesen

<ul><li><a href="/blog/what-is-machine-learning-how-it-works-and-where-its-used/" rel="noopener">Was ist maschinelles Lernen?</a> – die Grundlage: wie Systeme aus Daten lernen, mit Erklärungen zu NLP, neuronalen Netzen und LLMs</li><li><a href="/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" rel="noopener">Was ist generative KI?</a> – wie sie funktioniert, wo sie hilft und wo sie versagt</li><li><a href="/blog/ethical-ai-principles-risks-and-how-organizations-apply-them/" rel="noopener">Ethische KI</a> – Grundsätze, Risiken und wie Organisationen sie anwenden</li><li><a href="/resources/natural-language-processing-fundamentals/" rel="noopener">Grundlagen der Verarbeitung natürlicher Sprache</a> – unser Leitfaden zu NLP</li><li><a href="/blog/how-to-build-rag-pipeline/" rel="noopener">So bauen Sie eine RAG-Pipeline</a> – ein Schritt-für-Schritt-Leitfaden für die Umsetzung</li></ul>

## Quellen

<ul><li><a href="https://www.deeplearningbook.org/contents/intro.html" rel="noopener">Goodfellow, Bengio and Courville, Deep Learning, chapter 1 (Introduction)</a></li><li><a href="https://arxiv.org/abs/1706.03762" rel="noopener">Vaswani et al., Attention Is All You Need</a> (arXiv, 2017)</li></ul>

</div>
