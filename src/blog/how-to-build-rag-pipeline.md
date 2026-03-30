---
title: "How to Build a RAG Pipeline: A Step-by-Step Guide for 2026"
description: "Learn how to build a production-ready RAG (Retrieval-Augmented Generation) pipeline. From document ingestion to deployment, this guide covers architecture, tools, and best practices."
date: 2026-03-30
lastUpdated: 2026-03-30
authorId: sadin-shrestha
category: Engineering
tags:
  - RAG
  - LLM
  - AI Development
  - Tutorial
featuredImage: /assets/images/blog/rag-pipeline-architecture.jpg
featuredImageAlt: RAG pipeline architecture diagram
readTime: 12
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
