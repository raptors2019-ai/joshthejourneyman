#!/usr/bin/env node

/**
 * Update Math Tutor tech stack to include Jest
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

async function updateTechStack() {
  try {
    console.log("🔍 Finding Math Tutor post...");

    const mathPost = await client.fetch(
      "*[_type == 'post' && slug.current == 'ai-math-tutor-adaptive-learning'][0] {_id}"
    );

    if (!mathPost) {
      console.error("❌ Math Tutor post not found");
      process.exit(1);
    }

    console.log("✅ Found Math Tutor post\n");

    const techStack = [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Supabase",
      "Prisma",
      "OpenAI",
      "Jest",
      "Framer Motion",
      "Recharts",
    ];

    console.log("🔄 Updating tech stack with Jest...");
    const update = await client
      .patch(mathPost._id)
      .set({ techStack })
      .commit();

    console.log("✅ Tech stack updated:", update._id);
    console.log("📚 Tech stack:", techStack);

    console.log("\n🎉 Update successful!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating tech stack:", error.message);
    process.exit(1);
  }
}

updateTechStack();
