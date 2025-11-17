#!/usr/bin/env node

const { createClient } = require("@sanity/client");
require("dotenv").config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2025-01-01",
  useCdn: false,
});

const mathTutorData = {
  featured: true,
  problem:
    "How do you scale effective one-on-one tutoring that diagnoses individual student needs and adapts to their learning pace?",
  hypothesis:
    "Combining mastery gates (90% threshold), error tagging (categorize mistakes), and AI-generated personalized feedback would create a system that replicates tutor-like adaptivity.",
  learnings: [
    "Error tagging is product architecture—categorizing mistakes enables personalized feedback and reveals curriculum patterns.",
    "10-question sessions hit the flow state sweet spot: long enough for valid mastery measurement, short enough for engagement.",
    "Mastery gates create accountability for learning—they force evidence-based progression instead of rushing through content.",
    "Product logic matters more than model power—constrained AI with error diagnosis is more useful than open-ended prompts.",
    "The most powerful edtech combines explicit product logic (gates, tagging) with AI used strategically (explaining, diagnosing).",
  ],
};

async function updateMathTutorArticle() {
  try {
    console.log("Fetching Math Tutor article from Sanity...");

    // Get the existing document
    const query = `*[slug.current == "ai-math-tutor-adaptive-learning"][0]`;
    const doc = await client.fetch(query);

    if (!doc) {
      console.error("Math Tutor article not found!");
      process.exit(1);
    }

    console.log(`Found article: ${doc.title}`);
    console.log("Updating with missing fields...");

    // Update the document with the missing fields
    const updatedDoc = await client
      .patch(doc._id)
      .set(mathTutorData)
      .commit();

    console.log("✓ Math Tutor article updated successfully!");
    console.log(`\nUpdated fields:`);
    console.log(`  - featured: ${updatedDoc.featured}`);
    console.log(`  - problem: ${updatedDoc.problem?.substring(0, 50)}...`);
    console.log(`  - hypothesis: ${updatedDoc.hypothesis?.substring(0, 50)}...`);
    console.log(`  - learnings: ${updatedDoc.learnings?.length} items`);
  } catch (error) {
    console.error("Error updating article:", error);
    process.exit(1);
  }
}

updateMathTutorArticle();
