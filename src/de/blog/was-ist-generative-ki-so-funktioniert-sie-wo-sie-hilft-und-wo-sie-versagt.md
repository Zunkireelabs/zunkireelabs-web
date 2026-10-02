---
templateEngineOverride: "njk, md"
title: "Was ist generative KI? So funktioniert sie, wo sie hilft und wo sie versagt"
description: "Generative KI erklärt: wie sie funktioniert, wie Organisationen sie nutzen, welche Risiken NIST nennt, etwa Konfabulation und Verzerrung, und wie Sie sie verantwortungsvoll einsetzen."
date: "2026-10-02T12:00:00+05:45"
featuredImage: "/assets/images/blog/was-ist-generative-ki-so-funktioniert-sie-wo-sie-hilft-und-wo-sie-versagt.svg"
featuredImageAlt: "Abstrakter Farbverlauf als Hintergrund"
lastUpdated: "2026-10-02"
translationKey: "what-is-generative-ai-how-it-works-and-where-it-fails"
category: "KI-Grundlagen"
readTime: 10
---

<div class="container-custom py-12 md:py-20">

<p>Generative KI erzeugt neue Inhalte wie Text, Bilder, Audio und Code. Dieser Leitfaden erklärt, wie sie funktioniert, wo Organisationen sie einsetzen, welche Risiken NIST benennt und wie Sie sie verantwortungsvoll nutzen.</p>

## Was ist generative KI?

<p>Das Generative-AI-Profil des NIST (Juli 2024) zitiert die Definition aus der US-amerikanischen Executive Order: Generative KI ist „die Klasse von KI-Modellen, die die Struktur und die Eigenschaften von Eingabedaten nachbilden, um abgeleitete synthetische Inhalte zu erzeugen. Dazu können Bilder, Videos, Audio, Text und andere digitale Inhalte gehören.“ Im alltäglichen Sprachgebrauch sind damit meist große Sprachmodelle und Bildgeneratoren gemeint.</p>

## Das Wichtigste in Kürze

<ul><li>Generative KI erzeugt neue Inhalte aus Mustern, die sie in ihren Trainingsdaten gelernt hat.</li><li>Sie ist eine Teilmenge des Deep Learning und baut für Sprache auf der Transformer-Architektur auf.</li><li>Sie formuliert flüssig, und das ist nicht dasselbe wie korrekt: Sie kann selbstsichere Fehler produzieren.</li><li>Sie auf Ihre eigenen Dokumente zu stützen und Menschen einzubinden, verringert das Risiko, beseitigt es aber nicht.</li><li>Governance sollte eingerichtet werden, bevor sich die Nutzung ausbreitet, nicht danach.</li></ul>

## Wie funktioniert generative KI?

<ul><li><strong>Vortraining (Pretraining):</strong> Ein großes neuronales Netz lernt Muster aus sehr großen Datenmengen. Bei einem Sprachmodell besteht die Kernaufgabe darin, das nächste <a href="/glossary/token/" rel="noopener">Token</a> in einer Sequenz vorherzusagen.</li><li><strong>Anpassung:</strong> Das Modell kann für einen Zweck angepasst werden, zum Beispiel durch <a href="/glossary/fine-tuning/" rel="noopener">Fine-Tuning</a>.</li><li><strong>Prompting:</strong> Die Nutzerin, der Nutzer oder die Anwendung gibt Anweisungen und Kontext vor; siehe <a href="/glossary/prompt-engineering/" rel="noopener">Prompt Engineering</a>.</li><li><strong>Verankerung (Grounding):</strong> Die Anwendung kann relevante Dokumente abrufen und dem Modell übergeben, ein Ansatz namens <a href="/glossary/rag/" rel="noopener">Retrieval-Augmented Generation (RAG)</a>.</li></ul>

<p>Die Grundlagen werden in <a href="/blog/what-is-machine-learning-how-it-works-and-where-its-used/" rel="noopener">Was ist maschinelles Lernen?</a> und <a href="/blog/what-is-deep-learning-neural-networks-explained/" rel="noopener">Was ist Deep Learning?</a> behandelt.</p>

## Wie wird generative KI eingesetzt?

<ul><li><strong>Entwerfen und Redigieren:</strong> erste Entwürfe, Umformulierungen, Tonalität und Übersetzung, gefolgt von einer Prüfung durch Menschen.</li><li><strong>Zusammenfassen:</strong> lange Dokumente, Meetings oder Support-Verläufe verdichten.</li><li><strong>Fragen zu Ihren eigenen Inhalten beantworten:</strong> ein verankerter Assistent, der aus freigegebenen Dokumenten antwortet (siehe <a href="/blog/how-to-build-rag-pipeline/" rel="noopener">So bauen Sie eine RAG-Pipeline</a>).</li><li><strong>Unterstützung beim Programmieren:</strong> Code vorschlagen und erklären, den Entwicklerinnen und Entwickler prüfen.</li><li><strong>Kundensupport:</strong> Antworten entwerfen und Anfragen weiterleiten.</li><li><strong>Workflows:</strong> entscheiden, was als Nächstes geschehen soll, und Tools koordinieren (siehe <a href="/blog/what-is-flow-ai/" rel="noopener">Was ist Flow AI?</a>).</li></ul>

<p>Der geschäftliche Einsatz ist breit: Der Stanford AI Index berichtet, dass 2024 78 % der Organisationen angaben, KI einzusetzen, gegenüber 55 % im Vorjahr. Diese Zahl bezieht sich auf KI im Allgemeinen, nicht nur auf generative KI.</p>

## Welche Risiken birgt generative KI?

<p>Das Profil des NIST listet Risiken auf, die für generative KI einzigartig sind oder durch sie verschärft werden. Dazu gehören:</p>

<ul><li><strong>Konfabulation:</strong> „die Erzeugung von Inhalten, die selbstsicher vorgetragen werden, aber fehlerhaft oder falsch sind“.</li><li><strong>Datenschutz:</strong> Preisgabe sowie unbefugte Nutzung oder Offenlegung personenbezogener Daten.</li><li><strong>Schädliche Verzerrung oder Homogenisierung:</strong> Verstärkung historischer und gesellschaftlicher Verzerrungen.</li><li><strong>Informationsintegrität:</strong> eine niedrigere Hürde, falsche oder irreführende Inhalte zu erzeugen und zu verbreiten.</li><li><strong>Geistiges Eigentum:</strong> erleichterte Erzeugung oder Nachbildung urheberrechtlich oder markenrechtlich geschützter Inhalte.</li><li><strong>Mensch-KI-Konfiguration:</strong> Risiken, die aus dem Zusammenspiel von Menschen und KI-Systemen entstehen, etwa übermäßiges Vertrauen.</li><li><strong>Umweltauswirkungen:</strong> die Rechenleistung für das Training und den Betrieb der Modelle.</li><li><strong>Wertschöpfungskette und Komponentenintegration:</strong> intransparente oder nicht nachvollziehbare Nutzung von Komponenten Dritter.</li></ul>

## Wie nutzen Sie generative KI verantwortungsvoll?

<ul><li>Stützen Sie Antworten auf freigegebene Dokumente und zeigen Sie die Quelle an.</li><li>Lassen Sie bei Ergebnissen, die Menschen betreffen, eine Person verantwortlich bleiben, und machen Sie die Prüfung einfach.</li><li>Testen Sie vor dem Start an realistischen Beispielen auf Fehler und Verzerrungen, und testen Sie weiter.</li><li>Begrenzen Sie, auf welche Daten und Tools das System zugreifen kann, und protokollieren Sie, was es tut.</li><li>Sagen Sie den Menschen, wenn sie es mit KI-generierten Inhalten zu tun haben.</li><li>Halten Sie schriftlich fest, wer für welches System zuständig ist, welchen Zweck es hat und wo seine Grenzen liegen (siehe <a href="/blog/ethical-ai-principles-risks-and-how-organizations-apply-them/" rel="noopener">Ethische KI</a>).</li></ul>

## Was sollten Sie vor dem Kauf oder Aufbau fragen?

<ul><li>Welches Modell wird verwendet, wo läuft es, und wohin gehen unsere Daten?</li><li>Wie ist es verankert, und was passiert, wenn es etwas nicht weiß?</li><li>Wie wird die Genauigkeit gemessen, und wie oft?</li><li>Wer kann Prompts und Ausgaben einsehen, und wie lange werden sie aufbewahrt?</li><li>Lässt es sich abschalten, und wie werden Daten entfernt?</li></ul>

## Wo Zunkiree Labs steht

<p>Zunkiree Labs entwickelt individuelle KI-Systeme (darunter RAG-Pipelines, LLM-Integration und intelligente Automatisierung), Datensysteme, individuelle Software sowie Web- und Mobilanwendungen. Dazu gehören verankerte Assistenten auf Basis Ihrer eigenen Dokumente sowie Orchestrierung: Orca ist die Intelligenz- und Orchestrierungsschicht von Zunkiree Labs: Sie liegt über den CRM-, E-Mail- und Marketing-Tools, die eine Organisation bereits nutzt, und koordiniert Agenten-Workflows über diese hinweg, statt diese Tools zu ersetzen. Orca wird bereitgestellt, um Anwendungsfälle in Bildungsunternehmen und Krankenhäusern zu unterstützen. Die vollständige Liste finden Sie auf der <a href="/services/" rel="noopener">Leistungsseite</a>, und die <a href="/services/ai-development/" rel="noopener">Leistung KI-Entwicklung</a> behandelt individuelle KI-Systeme ausführlicher.</p>

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Häufig gestellte Fragen</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">Was ist generative KI?</p><p class="text-gray-600 leading-relaxed">Generative KI ist KI, die neue Inhalte wie Text, Bilder, Audio und Code erzeugt. Das NIST beschreibt sie als KI-Modelle, die die Struktur und die Eigenschaften von Eingabedaten nachbilden, um abgeleitete synthetische Inhalte zu erzeugen.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Wie unterscheidet sich generative KI von herkömmlicher KI?</p><p class="text-gray-600 leading-relaxed">Herkömmliches maschinelles Lernen sagt in der Regel etwas voraus oder klassifiziert, zum Beispiel ob eine Transaktion betrügerisch ist. Generative KI erzeugt neue Inhalte, zum Beispiel einen Antwortentwurf oder ein Bild.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Warum erfindet generative KI Dinge?</p><p class="text-gray-600 leading-relaxed">Diese Modelle erzeugen plausible Ausgaben aus Mustern, nicht aus geprüften Fakten. Das NIST nennt das Ergebnis Konfabulation: selbstsicher vorgetragene, aber fehlerhafte oder falsche Inhalte.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Was ist RAG?</p><p class="text-gray-600 leading-relaxed">Retrieval-Augmented Generation ruft relevante Dokumente ab und übergibt sie dem Modell, sodass seine Antwort darauf gestützt ist. Es verringert unbelegte Antworten, beseitigt sie aber nicht.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Ist generative KI für den geschäftlichen Einsatz sicher?</p><p class="text-gray-600 leading-relaxed">Sie kann sicher eingesetzt werden, wenn sie verankert, getestet, überwacht und von Menschen beaufsichtigt wird und wenn Daten geschützt sind. Das Risiko hängt vom Anwendungsfall ab und davon, wie gut er gesteuert wird.</p></div></div></div><script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Was ist generative KI?", "acceptedAnswer": {"@type": "Answer", "text": "Generative KI ist KI, die neue Inhalte wie Text, Bilder, Audio und Code erzeugt. Das NIST beschreibt sie als KI-Modelle, die die Struktur und die Eigenschaften von Eingabedaten nachbilden, um abgeleitete synthetische Inhalte zu erzeugen."}}, {"@type": "Question", "name": "Wie unterscheidet sich generative KI von herkömmlicher KI?", "acceptedAnswer": {"@type": "Answer", "text": "Herkömmliches maschinelles Lernen sagt in der Regel etwas voraus oder klassifiziert, zum Beispiel ob eine Transaktion betrügerisch ist. Generative KI erzeugt neue Inhalte, zum Beispiel einen Antwortentwurf oder ein Bild."}}, {"@type": "Question", "name": "Warum erfindet generative KI Dinge?", "acceptedAnswer": {"@type": "Answer", "text": "Diese Modelle erzeugen plausible Ausgaben aus Mustern, nicht aus geprüften Fakten. Das NIST nennt das Ergebnis Konfabulation: selbstsicher vorgetragene, aber fehlerhafte oder falsche Inhalte."}}, {"@type": "Question", "name": "Was ist RAG?", "acceptedAnswer": {"@type": "Answer", "text": "Retrieval-Augmented Generation ruft relevante Dokumente ab und übergibt sie dem Modell, sodass seine Antwort darauf gestützt ist. Es verringert unbelegte Antworten, beseitigt sie aber nicht."}}, {"@type": "Question", "name": "Ist generative KI für den geschäftlichen Einsatz sicher?", "acceptedAnswer": {"@type": "Answer", "text": "Sie kann sicher eingesetzt werden, wenn sie verankert, getestet, überwacht und von Menschen beaufsichtigt wird und wenn Daten geschützt sind. Das Risiko hängt vom Anwendungsfall ab und davon, wie gut er gesteuert wird."}}]}</script><!-- SEOAI:FAQ:END -->

## Weiterlesen

<ul><li><a href="/blog/what-is-machine-learning-how-it-works-and-where-its-used/" rel="noopener">Was ist maschinelles Lernen?</a> – die Grundlage: wie Systeme aus Daten lernen, mit Erklärungen zu NLP, neuronalen Netzen und LLMs</li><li><a href="/blog/what-is-deep-learning-neural-networks-explained/" rel="noopener">Was ist Deep Learning?</a> – wie neuronale Netze lernen und wann sie das richtige Werkzeug sind</li><li><a href="/blog/ethical-ai-principles-risks-and-how-organizations-apply-them/" rel="noopener">Ethische KI</a> – Grundsätze, Risiken und wie Organisationen sie anwenden</li><li><a href="/blog/how-to-build-rag-pipeline/" rel="noopener">So bauen Sie eine RAG-Pipeline</a> – ein Schritt-für-Schritt-Leitfaden für die Umsetzung</li><li><a href="/blog/what-is-flow-ai/" rel="noopener">Was ist Flow AI?</a> – KI im Workflow</li></ul>

## Quellen

<ul><li><a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" rel="noopener">NIST AI 600-1: Artificial Intelligence Risk Management Framework, Generative AI Profile</a> (Juli 2024)</li><li><a href="https://hai.stanford.edu/ai-index/2025-ai-index-report" rel="noopener">Stanford HAI: 2025 AI Index Report</a></li><li><a href="https://arxiv.org/abs/1706.03762" rel="noopener">Vaswani et al., Attention Is All You Need</a> (arXiv, 2017)</li></ul>

</div>
