/**
 * AI Glossary Terms
 * 29 definitions for AEO - captures "What is X?" queries
 */

export default [
  {
    id: "agentic-commerce",
    term: "Agentic Commerce",
    shortDef: "AI-powered ecommerce where autonomous agents handle the entire buying journey from discovery to checkout.",
    definition: "Agentic commerce is an emerging ecommerce paradigm where AI agents autonomously handle shopping tasks on behalf of customers. Unlike traditional online shopping that requires manual browsing, comparison, and checkout, agentic commerce systems understand customer intent through natural language, search across multiple platforms, compare options, and execute purchases automatically. These AI agents integrate with payment gateways, track orders, and handle support—transforming ecommerce from a self-service experience to an AI-assisted one. In Nepal, agentic commerce platforms integrate with eSewa, Khalti, and local marketplaces to provide seamless autonomous shopping.",
    relatedService: "ai-ecommerce",
    category: "AI Commerce"
  },
  {
    id: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    shortDef: "An AI architecture that combines information retrieval with text generation to produce accurate, context-aware responses.",
    definition: "Retrieval-Augmented Generation (RAG) is an AI architecture pattern that enhances large language models by connecting them to external knowledge sources. When a user asks a question, the system first retrieves relevant documents from a knowledge base, then uses that context to generate an accurate response. RAG solves the hallucination problem common in pure LLMs by grounding responses in verified information. This approach is widely used for enterprise chatbots, document Q&A systems, and customer support automation.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Generative AI?", url: "/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" }],
    category: "AI Architecture"
  },
  {
    id: "llm",
    term: "LLM (Large Language Model)",
    shortDef: "An AI model trained on massive text datasets that can understand and generate human-like text.",
    definition: "A Large Language Model (LLM) is a type of artificial intelligence trained on billions of words from books, websites, and documents. LLMs like GPT-4, Claude, and Llama can understand context, answer questions, write content, and assist with complex tasks. They work by predicting the most likely next word in a sequence, but at scale, this creates emergent capabilities like reasoning and code generation. Businesses use LLMs for customer support, content creation, code assistance, and process automation.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Generative AI?", url: "/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" }, { title: "What Is Deep Learning?", url: "/blog/what-is-deep-learning-neural-networks-explained/" }],
    category: "AI Models"
  },
  {
    id: "vector-database",
    term: "Vector Database",
    shortDef: "A database optimized for storing and searching high-dimensional vectors, enabling semantic search and AI applications.",
    definition: "A vector database is a specialized database designed to store and query high-dimensional vectors (embeddings). Unlike traditional databases that match exact keywords, vector databases find semantically similar content. When text is converted to vectors using embedding models, similar concepts cluster together in vector space. This enables semantic search, recommendation systems, and RAG applications. Popular vector databases include Pinecone, Weaviate, Qdrant, and pgvector for PostgreSQL.",
    relatedService: "data-systems",
    relatedGuides: [{ title: "What Is Machine Learning?", url: "/blog/what-is-machine-learning-how-it-works-and-where-its-used/" }],
    category: "Data Infrastructure"
  },
  {
    id: "ai-agent",
    term: "AI Agent",
    shortDef: "An autonomous AI system that can perceive its environment, make decisions, and take actions to achieve goals.",
    definition: "An AI agent is a software system that uses artificial intelligence to autonomously perform tasks on behalf of users. Unlike simple chatbots that only respond to queries, AI agents can plan multi-step workflows, use tools (APIs, databases, web browsers), and adapt their approach based on results. Examples include coding assistants that can write and test code, research agents that gather information from multiple sources, and customer service agents that can process refunds or schedule appointments.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "Ethical AI: Principles and Risks", url: "/blog/ethical-ai-principles-risks-and-how-organizations-apply-them/" }],
    category: "AI Architecture"
  },
  {
    id: "embeddings",
    term: "Embeddings",
    shortDef: "Numerical representations of text, images, or other data that capture semantic meaning in a format AI can process.",
    definition: "Embeddings are dense numerical vectors that represent the meaning of text, images, or other data in a format that AI systems can process. Created by specialized models like OpenAI's text-embedding-ada-002, embeddings capture semantic relationships—similar concepts have similar vector representations. A 1,536-dimensional embedding can encode nuanced meaning, enabling applications like semantic search, clustering, and recommendation systems. Embeddings are fundamental to RAG systems, where they enable finding relevant documents based on meaning rather than keywords.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Machine Learning?", url: "/blog/what-is-machine-learning-how-it-works-and-where-its-used/" }],
    category: "AI Fundamentals"
  },
  {
    id: "semantic-search",
    term: "Semantic Search",
    shortDef: "Search technology that understands the meaning and intent behind queries, not just keyword matching.",
    definition: "Semantic search is a search approach that understands the meaning and intent behind user queries rather than just matching keywords. Using embeddings and natural language processing, semantic search can find relevant results even when the exact words don't match. For example, a search for 'affordable housing' would also return results about 'low-cost apartments' or 'budget-friendly rentals.' This technology powers modern search experiences in enterprise knowledge bases, e-commerce, and customer support systems.",
    relatedService: "ai-customer-experience",
    category: "Search Technology"
  },
  {
    id: "ai-native-search",
    term: "AI-Native Search",
    shortDef: "Search platforms built from the ground up with AI, delivering direct answers instead of links.",
    definition: "AI-native search refers to search platforms designed with artificial intelligence as the core architecture, not an afterthought. Unlike traditional search that returns a list of links, AI-native search understands natural language queries and provides direct answers synthesized from your content. These systems combine semantic search, RAG, and conversational AI to create search experiences that feel like talking to an expert. Zunkiree Search is an example of AI-native search built for businesses.",
    relatedService: "ai-customer-experience",
    category: "Search Technology"
  },
  {
    id: "fine-tuning",
    term: "Fine-tuning",
    shortDef: "The process of further training an AI model on specific data to improve performance for particular tasks.",
    definition: "Fine-tuning is the process of taking a pre-trained AI model and training it further on domain-specific data. This customization improves the model's performance for particular tasks, industries, or writing styles. For example, fine-tuning GPT on legal documents creates a model better at legal analysis, while fine-tuning on customer support conversations improves response quality. Fine-tuning requires less data and compute than training from scratch while achieving excellent results for specific use cases.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Machine Learning?", url: "/blog/what-is-machine-learning-how-it-works-and-where-its-used/" }, { title: "What Is Generative AI?", url: "/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" }],
    category: "AI Training"
  },
  {
    id: "prompt-engineering",
    term: "Prompt Engineering",
    shortDef: "The practice of designing effective instructions for AI models to produce desired outputs.",
    definition: "Prompt engineering is the practice of crafting effective instructions (prompts) for AI models to produce desired outputs. Good prompts include clear context, specific requirements, examples of desired output, and appropriate constraints. Techniques include few-shot prompting (providing examples), chain-of-thought prompting (asking the model to reason step-by-step), and role-based prompting (asking the AI to act as an expert). Effective prompt engineering can dramatically improve AI output quality without model changes.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Generative AI?", url: "/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" }],
    category: "AI Practice"
  },
  {
    id: "aeo",
    term: "AEO (AI Engine Optimization)",
    shortDef: "Optimizing content to be discovered and cited by AI assistants like ChatGPT, Perplexity, and Google AI.",
    definition: "AI Engine Optimization (AEO) is the practice of optimizing content to be discovered, understood, and cited by AI assistants and search engines. As users increasingly get answers from ChatGPT, Perplexity, Google AI Overviews, and Claude, businesses need their content to be selected as authoritative sources. AEO techniques include writing self-contained definitions, using clear structure, providing statistics with sources, and creating FAQ content that matches how people ask questions.",
    relatedService: "aeo-seo",
    category: "Marketing"
  },
  {
    id: "nlp",
    term: "Natural Language Processing (NLP)",
    shortDef: "The field of AI that enables computers to understand, interpret, and generate human language.",
    definition: "Natural Language Processing (NLP) is a branch of artificial intelligence focused on enabling computers to understand and work with human language. NLP powers applications like chatbots, sentiment analysis, translation, text summarization, and voice assistants. Modern NLP uses transformer architectures and large language models to achieve human-level performance on many tasks. Key capabilities include named entity recognition, intent classification, semantic understanding, and text generation.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Machine Learning?", url: "/blog/what-is-machine-learning-how-it-works-and-where-its-used/" }, { title: "What Is Deep Learning?", url: "/blog/what-is-deep-learning-neural-networks-explained/" }],
    category: "AI Fundamentals"
  },
  {
    id: "knowledge-graph",
    term: "Knowledge Graph",
    shortDef: "A structured representation of real-world entities and their relationships, enabling intelligent information retrieval.",
    definition: "A knowledge graph is a structured database that represents real-world entities (people, places, concepts) and the relationships between them. Unlike traditional databases with rigid tables, knowledge graphs model information as interconnected nodes and edges. This structure enables intelligent querying, reasoning, and discovery. Google's Knowledge Graph powers rich search results, while enterprise knowledge graphs help organizations connect scattered information across systems for better decision-making and AI applications.",
    relatedService: "data-systems",
    category: "Data Infrastructure"
  },
  {
    id: "multi-tenant-saas",
    term: "Multi-tenant SaaS",
    shortDef: "Software architecture where a single application serves multiple customers while keeping their data separate.",
    definition: "Multi-tenant Software-as-a-Service (SaaS) is an architecture where one application instance serves multiple customers (tenants) while keeping their data logically separated. Each tenant gets their own isolated environment within the shared infrastructure, reducing costs and simplifying maintenance. Key considerations include data isolation, customization options, and scalable resource allocation. This model powers most modern SaaS products, from CRMs to project management tools.",
    relatedService: "saas-development",
    faq: [
      { q: "What is the difference between SaaS and multi-tenant architecture?", a: "SaaS is a business model, where the vendor hosts and maintains the software for its customers. Multi-tenancy is an architecture, where at least some components are shared between multiple tenants, which usually correspond to customers. Many SaaS products use a multi-tenant architecture, but the two terms are not interchangeable." },
      { q: "How do you migrate to SaaS?", a: "A sensible first step is to decide what a tenant means for your product, such as a customer business or a group of users, and which tenancy model fits, because that choice depends on whether you serve businesses (B2B) or consumers (B2C). From there, plan data isolation, customization options and scalable resource allocation, which are the key considerations for any multi-tenant SaaS." },
      { q: "Does multi-tenant mean everything is shared?", a: "No. Multi-tenancy means at least some components are shared across tenants, not every component. Each tenant still gets an isolated environment for its data within the shared infrastructure." },
      { q: "Why do companies choose multi-tenant SaaS?", a: "Sharing infrastructure between tenants reduces costs and simplifies maintenance, while keeping each customer's data logically separated." }
    ],
    faqSource: { label: "Microsoft Azure Architecture Center: SaaS and multitenant solution architecture", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/saas-multitenant-solution-architecture/" },
    category: "Software Architecture"
  },
  {
    id: "ai-orchestration",
    term: "AI Orchestration",
    shortDef: "Coordinating multiple AI models, tools, and services to work together in complex workflows.",
    definition: "AI orchestration refers to coordinating multiple AI models, tools, and external services to work together in complex workflows. Rather than a single model handling everything, orchestration systems route tasks to specialized components—one model for understanding intent, another for retrieval, another for generation. Frameworks like LangChain and LlamaIndex enable orchestration patterns. This approach improves reliability, enables complex multi-step reasoning, and allows mixing different AI capabilities.",
    relatedService: "ai-development",
    category: "AI Architecture"
  },
  {
    id: "retrieval-system",
    term: "Retrieval System",
    shortDef: "A system that finds and returns relevant information from a knowledge base in response to queries.",
    definition: "A retrieval system is a component that finds and returns relevant information from a knowledge base in response to user queries. In AI applications, retrieval systems combine multiple techniques: keyword search (BM25), semantic search (vector similarity), and hybrid approaches. The retrieval quality directly impacts RAG system performance—if irrelevant documents are retrieved, the AI will generate poor responses. Modern retrieval systems use reranking, query expansion, and metadata filtering to improve accuracy.",
    relatedService: "ai-development",
    category: "AI Architecture"
  },
  {
    id: "inference",
    term: "Inference",
    shortDef: "The process of running a trained AI model to generate predictions or outputs from new input data.",
    definition: "Inference is the process of using a trained AI model to generate predictions or outputs from new input data. While training teaches the model, inference is when the model applies what it learned. Inference latency (speed) and cost are critical considerations for production AI systems. Options include cloud APIs (OpenAI, Anthropic), self-hosted models, and edge deployment. Optimization techniques like quantization and batching reduce inference costs while maintaining quality.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Machine Learning?", url: "/blog/what-is-machine-learning-how-it-works-and-where-its-used/" }],
    category: "AI Operations"
  },
  {
    id: "token",
    term: "Token",
    shortDef: "The basic unit of text that AI models process, roughly equivalent to 4 characters or 0.75 words.",
    definition: "A token is the basic unit of text that AI language models process. Tokenization breaks text into subword units that the model can understand. In English, one token roughly equals 4 characters or 0.75 words. 'Artificial intelligence' might be 3 tokens: 'Art', 'ificial', 'intelligence'. Token counts matter because they determine costs (APIs charge per token) and context limits. Understanding tokenization helps optimize prompts and estimate API costs.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Generative AI?", url: "/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" }],
    category: "AI Fundamentals"
  },
  {
    id: "context-window",
    term: "Context Window",
    shortDef: "The maximum amount of text an AI model can process in a single request, measured in tokens.",
    definition: "A context window is the maximum amount of text (measured in tokens) that an AI model can process in a single request. GPT-4 Turbo has a 128K token context window (roughly 100,000 words), while Claude offers up to 200K tokens. Larger context windows enable processing longer documents, maintaining conversation history, and providing more context for accurate responses. Context window size is a key differentiator between AI models and affects architecture decisions for RAG systems.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Generative AI?", url: "/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" }],
    category: "AI Fundamentals"
  },
  {
    id: "zero-shot-learning",
    term: "Zero-shot Learning",
    shortDef: "An AI model's ability to perform tasks it wasn't explicitly trained on, without examples.",
    definition: "Zero-shot learning refers to an AI model's ability to perform tasks it wasn't explicitly trained on, without being given examples. Modern large language models exhibit strong zero-shot capabilities—you can ask them to translate, summarize, or classify text without fine-tuning. This contrasts with traditional machine learning, which required task-specific training data. Zero-shot capability makes LLMs versatile tools, though performance often improves with examples (few-shot) or fine-tuning.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Machine Learning?", url: "/blog/what-is-machine-learning-how-it-works-and-where-its-used/" }],
    category: "AI Training"
  },
  {
    id: "few-shot-learning",
    term: "Few-shot Learning",
    shortDef: "Teaching an AI model new tasks by providing just a few examples in the prompt.",
    definition: "Few-shot learning is a technique where an AI model learns to perform a task from just a few examples provided in the prompt. Instead of fine-tuning on thousands of examples, you include 2-5 demonstrations of the desired input-output pattern. The model generalizes from these examples to handle new inputs. Few-shot prompting is more reliable than zero-shot for complex tasks and more practical than fine-tuning when data is limited or tasks change frequently.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Machine Learning?", url: "/blog/what-is-machine-learning-how-it-works-and-where-its-used/" }],
    category: "AI Training"
  },
  {
    id: "agentic-ai",
    term: "Agentic AI",
    shortDef: "AI that pursues a goal across multiple steps, choosing its own actions and tools rather than answering one prompt at a time.",
    definition: "Agentic AI describes systems that take a goal and work toward it over multiple steps instead of responding to a single prompt. An agentic system plans a sequence of actions, calls tools or APIs to carry them out, reads the results, and adjusts its next move — repeating until the goal is met or it gives up. The distinction from ordinary automation is that the sequence is decided at runtime rather than scripted in advance, which is what lets one agent handle cases nobody enumerated. This is the capability that makes delivery models like Agentic-as-a-Service possible.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "AI Orchestration vs Automation vs Agents", url: "/blog/ai-orchestration-vs-automation-vs-agents-what-is-the-difference/" }, { title: "Understanding Agentic-as-a-Service", url: "/blog/understanding-agentic-as-a-service-a-comprehensive-guide/" }],
    category: "AI Fundamentals"
  },
  {
    id: "mcp",
    term: "MCP (Model Context Protocol)",
    shortDef: "An open standard for connecting AI models to external tools and data sources through one consistent interface.",
    definition: "The Model Context Protocol (MCP) is an open standard that defines how AI models connect to external tools, data sources, and services. Before MCP, every model-to-tool integration was bespoke: each combination of application and data source needed its own connector. MCP replaces that with one protocol a server implements once and any compliant client can use, the way a database driver works. For teams running agents in production this matters because it decouples the model from the integrations — swapping the underlying model no longer means rewriting every connector.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "AI Agents Are Getting Their Own Infrastructure", url: "/blog/ai-agents-are-getting-their-own-infrastructure/" }],
    category: "AI Architecture"
  },
  {
    id: "function-calling",
    term: "Function Calling",
    shortDef: "The mechanism that lets a language model invoke real code by returning a structured request instead of prose.",
    definition: "Function calling is how a language model triggers real work. The application gives the model a schema describing the functions available — their names, parameters, and types — and the model responds with a structured call naming the function and its arguments rather than free text. The application executes that function and feeds the result back. This is the bridge between a model that can only produce text and a system that can query a database, send an email, or book an appointment, and it is the foundation every tool-using agent is built on.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Flow AI?", url: "/blog/what-is-flow-ai/" }],
    category: "AI Architecture"
  },
  {
    id: "hallucination",
    term: "Hallucination",
    shortDef: "When an AI model states something fluently and confidently that is simply not true.",
    definition: "A hallucination is output that is fluent, confident, and factually wrong. It happens because language models are trained to produce plausible continuations of text, not to verify claims — so when the training data is thin on a topic, the model fills the gap with something that reads correctly instead of declining to answer. Invented citations, fabricated product specifications, and plausible-sounding but non-existent API methods are all hallucinations. Grounding techniques such as retrieval-augmented generation reduce the rate substantially by giving the model verified source material to answer from, but no method eliminates it, which is why production systems keep a human in the loop for consequential decisions.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Generative AI?", url: "/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" }],
    category: "AI Fundamentals"
  },
  {
    id: "ai-guardrails",
    term: "AI Guardrails",
    shortDef: "The checks that sit around a model to constrain what reaches it and what it is allowed to do or say.",
    definition: "Guardrails are the controls placed around an AI model rather than inside it. They operate on the way in — validating and sanitising user input, stripping injected instructions — and on the way out, screening responses for unsafe content, leaked data, or claims the system is not permitted to make. For agentic systems they also bound actions: which tools an agent may call, what spending limits apply, and which operations require human approval before they execute. Guardrails matter because a model's own training provides no enforceable guarantee; the limits that actually hold are the ones implemented in the surrounding system.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "FTC Probe Into Rogue AI Agents: What Businesses Should Do", url: "/blog/ftc-probe-ai-labs-rogue-agents-what-businesses-should-do/" }],
    category: "AI Operations"
  },
  {
    id: "chain-of-thought",
    term: "Chain-of-Thought Prompting",
    shortDef: "Prompting a model to reason step by step before it answers, which improves accuracy on multi-step problems.",
    definition: "Chain-of-thought prompting asks a model to show its intermediate reasoning rather than jumping to a conclusion. On problems that require several dependent steps — arithmetic, logic, multi-constraint planning — generating the steps measurably improves accuracy, because each step conditions the next instead of the whole answer resting on a single leap. It is invoked either by instruction or by including worked examples in the prompt. The trade-off is cost and latency: reasoning tokens are billed and generated like any others, so chain-of-thought earns its place on hard problems and wastes money on simple lookups.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Machine Learning?", url: "/blog/what-is-machine-learning-how-it-works-and-where-its-used/" }],
    category: "AI Practice"
  },
  {
    id: "transformer",
    term: "Transformer",
    shortDef: "The neural network architecture behind modern language models, using attention to weigh how much each word matters to the others.",
    definition: "The transformer is the neural network architecture that modern language models are built on, introduced in 2017. Its central idea is self-attention: for each token, the model computes how relevant every other token in the input is, so meaning that depends on distant context is captured directly rather than passed along step by step. Because those comparisons are independent of one another, they run in parallel — which is what made training on internet-scale text practical and is the reason the architecture displaced the recurrent networks that came before it. GPT, Claude, and Llama are all transformers.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Deep Learning?", url: "/blog/what-is-deep-learning-neural-networks-explained/" }],
    category: "AI Models"
  },
  {
    id: "multimodal-ai",
    term: "Multimodal AI",
    shortDef: "A model that handles more than one kind of input — text, images, audio, video — within a single shared representation.",
    definition: "Multimodal AI refers to models that work across more than one type of data: text, images, audio, and video. Rather than bolting separate specialist models together, a multimodal model maps every input type into one shared representation, so it can reason across them — reading a chart and answering a question about it, or describing what is happening in a clip. In practice this removes whole integration layers: a document pipeline that previously needed OCR, layout detection, and a language model in sequence can often be handled by one model reading the page directly.",
    relatedService: "ai-development",
    relatedGuides: [{ title: "What Is Generative AI?", url: "/blog/what-is-generative-ai-how-it-works-and-where-it-fails/" }],
    category: "AI Models"
  }
];
