#!/usr/bin/env node

/**
 * Update featured status of posts
 * Math Tutor becomes featured, MyIslamRAG loses featured tag
 */

const { createClient } = require("@sanity/client");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function updateFeaturedStatus() {
  try {
    console.log("🔍 Finding posts...");

    const mathPost = await client.fetch(
      "*[_type == 'post' && slug.current == 'ai-math-tutor-adaptive-learning'][0] {_id}"
    );
    const islamPost = await client.fetch(
      "*[_type == 'post' && slug.current == 'building-a-reliable-islamic-ai-how-rag-solves-llm-hallucinations-with-hadith-data'][0] {_id}"
    );

    if (!mathPost) {
      console.error("❌ Math Tutor post not found");
      process.exit(1);
    }
    if (!islamPost) {
      console.error("❌ MyIslamRAG post not found");
      process.exit(1);
    }

    console.log("✅ Found both posts\n");

    // Add featured tag to Math Tutor
    console.log("🔄 Adding featured tag to Math Tutor...");
    const mathUpdate = await client
      .patch(mathPost._id)
      .set({ featured: true })
      .commit();

    console.log("✅ Math Tutor now featured:", mathUpdate._id);

    // Remove featured tag from MyIslamRAG
    console.log("\n🔄 Removing featured tag from MyIslamRAG...");
    const islamUpdate = await client
      .patch(islamPost._id)
      .unset(["featured"])
      .commit();

    console.log("✅ MyIslamRAG unfeatured:", islamUpdate._id);

    console.log("\n🎉 Featured status updated successfully!");
    console.log("📌 Math Tutor is now the featured project");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating featured status:", error.message);
    process.exit(1);
  }
}

updateFeaturedStatus();
