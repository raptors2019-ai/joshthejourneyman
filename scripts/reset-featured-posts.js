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

async function resetFeaturedPosts() {
  try {
    console.log("Fetching all posts from Sanity...");

    // Get all posts
    const posts = await client.fetch(`*[_type == "post"]`);

    if (!posts || posts.length === 0) {
      console.log("No posts found!");
      return;
    }

    console.log(`Found ${posts.length} posts. Setting all featured to false...`);

    // Update each post
    for (const post of posts) {
      await client
        .patch(post._id)
        .set({ featured: false })
        .commit();
      console.log(`✓ ${post.title}`);
    }

    console.log(`\n✓ All ${posts.length} posts updated! Featured set to false.`);
  } catch (error) {
    console.error("Error updating posts:", error);
    process.exit(1);
  }
}

resetFeaturedPosts();
