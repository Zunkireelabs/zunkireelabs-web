---
title: "How to Build a RAG Pipeline: A Step-by-Step Guide for 2026"
description: "How to build a production-ready RAG (Retrieval-Augmented Generation) pipeline, from document ingestion to deployment, with architecture and tools."
date: 2026-03-30
lastUpdated: 2026-03-30
authorId: sadin-shrestha
category: Engineering
tags:
  - RAG
  - LLM
  - AI Development
  - Tutorial
featuredImage: "https://images.pexels.com/photos/34803988/pexels-photo-34803988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
featuredImageAlt: "Detailed view of code and file structure in a software development environment."
readTime: 12
featuredImageCredit: "Photo by Daniil Komov on Pexels"
---

## What is a RAG Pipeline?

RAG (Retrieval-Augmented Generation) combines information retrieval with large language models to generate responses grounded in your actual data. Instead of relying solely on an LLM's training data, RAG fetches relevant context from your knowledge base before generating responses.

**Why RAG matters**: LLMs hallucinate. RAG reduces hallucination by providing factual context from your documents, databases, or knowledge bases.

## RAG Pipeline Architecture

A production RAG pipeline consists of five main stages:

```
Documents → Chunking → Embedding → Vector Store → Retrieval → Generation
```

Let's build each component.

## Step 1: Document Ingestion

### Supported Document Types

Your pipeline should handle multiple formats:

- **PDFs**: Technical documentation, reports, contracts
- **Web pages**: Help articles, product pages
- **Databases**: Structured data, FAQs
- **APIs**: Real-time data sources

### Loading Documents

Using LangChain for document loading:

```python
from langchain.document_loaders import (
    PyPDFLoader,
    WebBaseLoader,
    UnstructuredMarkdownLoader
)

# Load PDF
pdf_loader = PyPDFLoader("documentation.pdf")
pdf_docs = pdf_loader.load()

# Load web pages
web_loader = WebBaseLoader(["https://docs.example.com/guide"])
web_docs = web_loader.load()

# Combine all documents
all_docs = pdf_docs + web_docs
```

### Metadata Extraction

Preserve metadata for filtering and attribution:

```python
for doc in all_docs:
    doc.metadata["source_type"] = "documentation"
    doc.metadata["last_updated"] = "2026-03-30"
    doc.metadata["department"] = "engineering"
```

## Step 2: Chunking Strategy

Chunking splits documents into smaller pieces that fit in context windows and enable precise retrieval.

### Chunk Size Considerations

| Chunk Size | Pros | Cons |
|------------|------|------|
| Small (200-500 tokens) | Precise retrieval | May lose context |
| Medium (500-1000 tokens) | Balanced | Good default |
| Large (1000-2000 tokens) | Full context | Less precise, higher cost |

### Recursive Text Splitting

The most reliable approach for general documents:

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", ". ", " ", ""]
)

chunks = splitter.split_documents(all_docs)
print(f"Created {len(chunks)} chunks from {len(all_docs)} documents")
```

### Semantic Chunking

For better coherence, chunk by semantic meaning:

```python
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
semantic_splitter = SemanticChunker(embeddings)

semantic_chunks = semantic_splitter.split_documents(all_docs)
```

## Step 3: Embedding Generation

Embeddings convert text into numerical vectors that capture semantic meaning.

### Choosing an Embedding Model

| Model | Dimensions | Speed | Quality |
|-------|------------|-------|---------|
| OpenAI text-embedding-3-small | 1536 | Fast | Good |
| OpenAI text-embedding-3-large | 3072 | Medium | Excellent |
| Cohere embed-v3 | 1024 | Fast | Good |
| BGE-large-en | 1024 | Fast | Good (open-source) |

### Generating Embeddings

```python
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# Embed a single query
query_embedding = embeddings.embed_query("How do I reset my password?")

# Embed documents (batched automatically)
doc_embeddings = embeddings.embed_documents([chunk.page_content for chunk in chunks])
```

## Step 4: Vector Store Setup

Vector stores enable fast similarity search across your embeddings.

### Choosing a Vector Database

| Database | Hosted | Open Source | Best For |
|----------|--------|-------------|----------|
| Pinecone | Yes | No | Production, managed |
| Weaviate | Yes | Yes | Hybrid search |
| Qdrant | Yes | Yes | Performance |
| pgvector | No | Yes | PostgreSQL users |
| Chroma | No | Yes | Local development |

### Setting Up Pinecone

```python
from langchain_pinecone import PineconeVectorStore
import os

# Initialize vector store
vector_store = PineconeVectorStore.from_documents(
    documents=chunks,
    embedding=embeddings,
    index_name="knowledge-base"
)
```

### Setting Up pgvector (Self-Hosted)

```python
from langchain_postgres import PGVector

connection_string = "postgresql://user:pass@localhost:5432/vectors"

vector_store = PGVector.from_documents(
    documents=chunks,
    embedding=embeddings,
    connection=connection_string,
    collection_name="knowledge_base"
)
```

## Step 5: Retrieval Configuration

Retrieval finds the most relevant chunks for a given query.

### Basic Similarity Search

```python
# Retrieve top 5 most similar chunks
retriever = vector_store.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 5}
)

relevant_docs = retriever.invoke("How do I integrate the API?")
```

### Hybrid Search (Keyword + Semantic)

Combine vector similarity with keyword matching:

```python
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

# BM25 for keyword matching
bm25_retriever = BM25Retriever.from_documents(chunks)
bm25_retriever.k = 5

# Combine with vector retrieval
ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, retriever],
    weights=[0.3, 0.7]
)
```

### Metadata Filtering

Filter results by metadata:

```python
retriever = vector_store.as_retriever(
    search_kwargs={
        "k": 5,
        "filter": {"department": "engineering"}
    }
)
```

## Step 6: Generation with Context

Now combine retrieved context with an LLM to generate responses.

### Basic RAG Chain

```python
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA

llm = ChatOpenAI(model="gpt-4", temperature=0)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",  # Concatenate all docs
    retriever=retriever,
    return_source_documents=True
)

response = qa_chain.invoke({"query": "How do I reset my password?"})
print(response["result"])
print(response["source_documents"])
```

### Custom Prompt Template

Control the LLM's behavior with a custom prompt:

```python
from langchain.prompts import PromptTemplate

template = """You are a helpful assistant for Acme Corp.
Use the following context to answer the question.
If you don't know the answer, say "I don't have that information."

Context:
{context}

Question: {question}

Answer:"""

prompt = PromptTemplate(
    template=template,
    input_variables=["context", "question"]
)
```

## Production Considerations

### Caching

Cache embeddings and responses to reduce costs:

```python
from langchain.cache import SQLiteCache
import langchain

langchain.llm_cache = SQLiteCache(database_path=".langchain.db")
```

### Monitoring

Track key metrics:

- **Retrieval quality**: Are the right documents being retrieved?
- **Response latency**: End-to-end time for queries
- **LLM costs**: Token usage per query
- **User feedback**: Thumbs up/down on responses

### Updating the Knowledge Base

Schedule regular updates:

```python
def update_knowledge_base():
    # Load new/modified documents
    new_docs = load_updated_documents()

    # Process and add to vector store
    new_chunks = splitter.split_documents(new_docs)
    vector_store.add_documents(new_chunks)

    # Optionally remove outdated documents
    vector_store.delete(filter={"status": "deprecated"})
```

## Common Pitfalls

### 1. Chunks Too Large

Large chunks reduce retrieval precision. Start with 500-1000 tokens and adjust based on results.

### 2. Ignoring Metadata

Metadata enables filtering and improves relevance. Always preserve source, date, and category information.

### 3. No Evaluation

Without metrics, you can't improve. Implement retrieval evaluation from day one.

### 4. Skipping Hybrid Search

Pure vector search misses exact keyword matches. Hybrid search handles both.

## Conclusion

Building a production RAG pipeline requires attention to each stage: ingestion, chunking, embedding, storage, retrieval, and generation. Start simple, measure results, and iterate.

The key to success is treating your RAG pipeline as a product that needs continuous improvement, not a one-time implementation.

---

*Need help building a RAG pipeline? [Contact Zunkiree Labs](/contact/) for a consultation.*

<!-- SEOAI:FAQ:START --><div class="mt-10 p-6 bg-gray-50 rounded-lg"><h3 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Frequently asked questions</h3><div class="space-y-6"><div><p class="text-lg font-medium text-gray-900 mb-2">What are the main stages of a RAG pipeline?</p><p class="text-gray-600 leading-relaxed">A production RAG pipeline has five main stages: document ingestion, chunking, embedding generation, vector store setup, and retrieval, followed by generation with an LLM that uses the retrieved context.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What chunk size should I use when building a RAG pipeline?</p><p class="text-gray-600 leading-relaxed">Small chunks (200-500 tokens) give precise retrieval but may lose context, large chunks (1000-2000 tokens) preserve full context but are less precise and cost more, and medium chunks (500-1000 tokens) are a good balanced default.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">How do I choose between vector databases like Pinecone, Weaviate, or pgvector?</p><p class="text-gray-600 leading-relaxed">Pinecone is hosted and suited for managed production use, Weaviate and Qdrant are open source with hybrid search and performance strengths, pgvector works well if you're already on PostgreSQL, and Chroma is a good fit for local development.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">Why does RAG reduce LLM hallucination?</p><p class="text-gray-600 leading-relaxed">RAG fetches relevant context from your own documents or knowledge base before the LLM generates a response, grounding the answer in factual, retrieved information instead of relying solely on the model's training data.</p></div><div><p class="text-lg font-medium text-gray-900 mb-2">What are common pitfalls when building a RAG pipeline?</p><p class="text-gray-600 leading-relaxed">Common pitfalls include using chunks that are too large (reducing retrieval precision), ignoring metadata (which limits filtering and relevance), skipping evaluation metrics, and relying only on vector search instead of combining it with keyword-based hybrid search.</p></div></div></div><script type="application/ld+json">{"@type":"FAQPage","@context":"https://schema.org","mainEntity":[{"name":"What are the main stages of a RAG pipeline?","@type":"Question","acceptedAnswer":{"text":"A production RAG pipeline has five main stages: document ingestion, chunking, embedding generation, vector store setup, and retrieval, followed by generation with an LLM that uses the retrieved context.","@type":"Answer"}},{"name":"What chunk size should I use when building a RAG pipeline?","@type":"Question","acceptedAnswer":{"text":"Small chunks (200-500 tokens) give precise retrieval but may lose context, large chunks (1000-2000 tokens) preserve full context but are less precise and cost more, and medium chunks (500-1000 tokens) are a good balanced default.","@type":"Answer"}},{"name":"How do I choose between vector databases like Pinecone, Weaviate, or pgvector?","@type":"Question","acceptedAnswer":{"text":"Pinecone is hosted and suited for managed production use, Weaviate and Qdrant are open source with hybrid search and performance strengths, pgvector works well if you're already on PostgreSQL, and Chroma is a good fit for local development.","@type":"Answer"}},{"name":"Why does RAG reduce LLM hallucination?","@type":"Question","acceptedAnswer":{"text":"RAG fetches relevant context from your own documents or knowledge base before the LLM generates a response, grounding the answer in factual, retrieved information instead of relying solely on the model's training data.","@type":"Answer"}},{"name":"What are common pitfalls when building a RAG pipeline?","@type":"Question","acceptedAnswer":{"text":"Common pitfalls include using chunks that are too large (reducing retrieval precision), ignoring metadata (which limits filtering and relevance), skipping evaluation metrics, and relying only on vector search instead of combining it with keyword-based hybrid search.","@type":"Answer"}}]}</script><!-- SEOAI:FAQ:END -->
<!-- SEOAI:SCHEMA:START --><script type="application/ld+json">{"@context":"https://schema.org","@type":"HowTo","name":"How to Build a RAG Pipeline","description":"Build a production-ready Retrieval-Augmented Generation pipeline, from document ingestion to answer generation.","step":[{"@type":"HowToStep","position":1,"name":"Document Ingestion","text":"Load source documents such as PDFs, web pages and databases and combine them into one collection."},{"@type":"HowToStep","position":2,"name":"Chunking Strategy","text":"Split documents into smaller chunks, starting around 500 to 1000 tokens, so retrieval stays precise."},{"@type":"HowToStep","position":3,"name":"Embedding Generation","text":"Turn each chunk and each incoming query into a vector using an embedding model."},{"@type":"HowToStep","position":4,"name":"Vector Store Setup","text":"Store the chunk embeddings and their metadata in a vector store so they can be searched by similarity."},{"@type":"HowToStep","position":5,"name":"Retrieval Configuration","text":"Retrieve the most similar chunks for a query, and combine vector search with keyword matching for hybrid retrieval."},{"@type":"HowToStep","position":6,"name":"Generation with Context","text":"Pass the retrieved chunks to the language model as context so it answers from your documents."}]}</script><!-- SEOAI:SCHEMA:END -->
<!-- SEOAI:EXPANDEDCONTENT:START --><section class="py-12 md:py-20">
  <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-normal text-gray-900 mb-6">Build It Yourself or Use a Managed Service?</h2>
        <div><p>This guide shows how to build each stage yourself. That gives you full control, but it is not always the right call. Use the table below to decide whether to build your own pipeline or start from a managed product.</p><table><thead><tr><th>Factor</th><th>Build your own</th><th>Use a managed product</th></tr></thead><tbody><tr><td>Time to first answers</td><td>Days to weeks, depending on your data.</td><td>Hours to days for standard content.</td></tr><tr><td>Control over chunking, retrieval and prompts</td><td>Full control over every stage.</td><td>Limited to the settings the product exposes.</td></tr><tr><td>Ongoing work</td><td>You maintain ingestion, indexing and evaluation.</td><td>The provider maintains the pipeline.</td></tr><tr><td>Cost pattern</td><td>Engineering time plus model and hosting costs.</td><td>Subscription or usage fees.</td></tr><tr><td>Best when</td><td>Your data or logic is unusual, or it must run in-house.</td><td>You want working search or Q&amp;A over standard content.</td></tr></tbody></table><p>If you would rather not build and run the pipeline yourself, <a href="/products/search/">Zunkiree Search</a> gives you AI-native search over your own content without the infrastructure work.</p>
      </div>
      </div>
  </div>
</section><!-- SEOAI:EXPANDEDCONTENT:END -->
