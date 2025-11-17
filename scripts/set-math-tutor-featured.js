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

async function setMathTutorFeatured() {
  try {
    console.log("Fetching Math Tutor article from Sanity...");

    // Get the Math Tutor document
    const query = `*[slug.current == "ai-math-tutor-adaptive-learning"][0]`;
    const doc = await client.fetch(query);

    if (!doc) {
      console.error("Math Tutor article not found!");
      process.exit(1);
    }

    console.log(`Found: ${doc.title}`);
    console.log("Setting featured to true...");

    // Update the document
    const updatedDoc = await client
      .patch(doc._id)
      .set({ featured: true })
      .commit();

    console.log("✓ Math Tutor article is now featured!");
  } catch (error) {
    console.error("Error updating article:", error);
    process.exit(1);
  }
}

setMathTutorFeatured();
