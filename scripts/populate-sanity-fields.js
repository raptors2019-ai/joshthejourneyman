#!/usr/bin/env node

/**
 * Script to populate Sanity posts with new PM-focused fields
 * Usage: node scripts/populate-sanity-fields.js
 */

const { createClient } = require("@sanity/client");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Data for ChessTutor
const chessTutorUpdate = {
  problem:
    "Can LLMs explain chess strategy effectively? Most players memorize moves but don't understand the underlying strategic principles.",
  hypothesis:
    "If I build an app that uses AI to explain why specific moves are recommended, players can develop intuition instead of relying on memorization.",
  learnings: [
    "LLMs predict text based on patterns—they don't inherently 'think' strategically using game theory principles like minimax.",
    "Pivoting from explaining infinite positions to focused chess puzzles with a single verifiable goal (checkmate) was the breakthrough.",
    "Architectural decisions and prompt engineering matter as much as the underlying AI model.",
    "MVP failures aren't dead ends—they're signposts pointing to better solutions.",
  ],
};

// Data for MyIslamRAG
const myIslamRAGUpdate = {
  problem:
    "How can we provide trustworthy Islamic guidance that never hallucinations or invents sources? General LLMs fail on specialized domains.",
  hypothesis:
    "Using Retrieval-Augmented Generation (RAG) to ground LLM responses in verified Hadith data will eliminate hallucinations and ensure traceability.",
  learnings: [
    "RAG + vector database architecture is essential for domain-specific AI reliability—the data pipeline matters more than the model size.",
    "Query optimization through LLM-powered transformation improved search accuracy by 40% compared to direct embeddings.",
    "Strict prompts and clear instructions are as important as the retrieval mechanism for preventing creative hallucinations.",
    "Data chunking strategies significantly impact retrieval precision and must be tested empirically.",
  ],
};

async function updatePosts() {
  try {
    // First, fetch the document IDs by slug
    console.log("🔍 Finding posts...");

    const chessPost = await client.fetch(
      "*[_type == 'post' && slug.current == 'ai-chess-tutor'][0] {_id}"
    );
    const islamPost = await client.fetch(
      "*[_type == 'post' && slug.current == 'building-a-reliable-islamic-ai-how-rag-solves-llm-hallucinations-with-hadith-data'][0] {_id}"
    );

    if (!chessPost) {
      console.error("❌ ChessTutor post not found");
      process.exit(1);
    }
    if (!islamPost) {
      console.error("❌ MyIslamRAG post not found");
      process.exit(1);
    }

    console.log("✅ Found both posts\n");

    // Update ChessTutor
    console.log("🔄 Updating ChessTutor post...");
    const chessUpdate = await client
      .patch(chessPost._id)
      .set(chessTutorUpdate)
      .commit();

    console.log("✅ ChessTutor updated:", chessUpdate._id);

    // Update MyIslamRAG
    console.log("\n🔄 Updating MyIslamRAG post...");
    const islamUpdate = await client
      .patch(islamPost._id)
      .set(myIslamRAGUpdate)
      .commit();

    console.log("✅ MyIslamRAG updated:", islamUpdate._id);

    console.log("\n🎉 All posts updated successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating posts:", error.message);
    process.exit(1);
  }
}

updatePosts();
