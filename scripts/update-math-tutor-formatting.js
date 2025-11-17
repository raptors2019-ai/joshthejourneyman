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

const improvedDescription = `As a builder interested in AI product management, I wanted to understand how to structure an educational product that scales learning through technology. Math Tutor is a full-stack application that teaches K-5 kids addition facts through adaptive lessons, real-time AI feedback, and mastery-based progression. This project proved that effective education isn't about "throw an AI at the problem"—it's about building a system that makes data-driven decisions about when and what to teach.`;

const portableTextContent = [
  {
    _type: "block",
    style: "h2",
    children: [
      {
        _type: "span",
        text: "The Problem: How Do You Scale Effective One-on-One Tutoring?",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "The core challenge is simple but profound: great tutors provide ",
      },
      {
        _type: "span",
        text: "personalized feedback",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: " and ",
      },
      {
        _type: "span",
        text: "adaptive pacing",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: ". A tutor knows when a student is stuck on complement pairs versus struggling with larger numbers. They adjust their teaching strategy based on this insight. How do you replicate this with software?",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Traditional edtech apps give the same content to everyone. Math Tutor V2 tackles the real problem: ",
      },
      {
        _type: "span",
        text: "Can an AI system make intelligent decisions about what a student needs next?",
        marks: ["strong"],
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [
      {
        _type: "span",
        text: "The Hypothesis: Mastery-Based Progression with AI-Powered Feedback",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "My hypothesis was that combining three elements would create an effective learning system:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "number",
    children: [
      {
        _type: "span",
        text: "Mastery gates (90% threshold)",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: " - Students don't move forward until they've proven they understand the concept",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "number",
    children: [
      {
        _type: "span",
        text: "Error tagging system",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: " - Categorize wrong answers (e.g., \"forgot_complement\", \"counting_error\") to diagnose root causes",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "number",
    children: [
      {
        _type: "span",
        text: "AI-generated remediation",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: " - When a student fails, use OpenAI to generate personalized tips based on their specific error pattern",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This is the inverse of traditional tutoring apps that throw more content at the problem. Instead: diagnose, explain, and unlock progression only when ready.",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [
      {
        _type: "span",
        text: "Implementation: The Full-Stack Architecture",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Math Tutor V2 is built as a cohesive product, not just separate features:",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "Tech Stack Overview",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Frontend: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Next.js 16 (App Router), React 19, Tailwind CSS, Framer Motion",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Backend: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Next.js API Routes, Prisma ORM",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Database: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Supabase (PostgreSQL)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Auth: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Clerk",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "AI: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "OpenAI API",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Testing: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Jest for unit and integration tests",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Other: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Recharts (analytics), React Hot Toast (notifications)",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "Frontend: Next.js App Router with Kid-Friendly UX",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "The UI layer handles session interactions with:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Quiz Container: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "10-question sessions without repetition (critical for avoiding pattern memorization)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Adaptive Question Selection: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Algorithm pulls from curriculum based on lesson and current session",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Real-time Feedback Display: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Shows whether the answer is correct, incorrect, or partial credit",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Sub-Lesson Navigation: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "When a student hits a learning gap, they can access focused remedial content",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Design choice: Simple, colorful, low-friction. Kids need to focus on the math, not navigate UI complexity.",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "Backend: Clerk Auth + Prisma + Supabase Database",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Authentication is handled by Clerk for secure, parent-friendly access. The database layer (Prisma + Supabase Postgres) tracks:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Session Data: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Each session stores 10 questions, answers, time taken, and error tags",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Progress Tracking: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Mastery scores per lesson, completion status, unlock states",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Curriculum Structure: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "3 lessons (Make-10, Doubles & Near-Doubles, Choosing Strategies) with 15+ items each",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Error Categorization: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Tag system maps common mistake patterns to remediation content",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "API design separates concerns:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "/api/session/start",
        marks: ["code"],
      },
      {
        _type: "span",
        text: " - Initialize a quiz session",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "/api/session/answer",
        marks: ["code"],
      },
      {
        _type: "span",
        text: " - Process answers, calculate mastery, tag errors",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "/api/session/complete",
        marks: ["code"],
      },
      {
        _type: "span",
        text: " - Finalize session, unlock next lesson if threshold met",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "/api/progress",
        marks: ["code"],
      },
      {
        _type: "span",
        text: " - Fetch student progress (prevents status spoofing)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "/api/lesson/[id]/sub-lesson/[id]/content",
        marks: ["code"],
      },
      {
        _type: "span",
        text: " - Serve remedial content",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "AI Integration: Personalized Feedback at Scale",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This is where the product thinking becomes critical. The AI doesn't just generate responses—it's constrained by the error tagging system:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Error-Triggered Feedback Loop:",
        marks: ["strong"],
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Student answers incorrectly (e.g., gets 7+5=12 when it's 12)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "System tags the error: \"counting_error\" or \"misread_sum\"",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "AI prompt includes:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    indent: 1,
    children: [
      {
        _type: "span",
        text: "The specific question",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    indent: 1,
    children: [
      {
        _type: "span",
        text: "The student's incorrect answer",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    indent: 1,
    children: [
      {
        _type: "span",
        text: "The error category",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    indent: 1,
    children: [
      {
        _type: "span",
        text: "Age-appropriate explanation requirement",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "OpenAI generates a 2-3 sentence tip explaining the mistake and how to avoid it",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This approach prevents generic feedback and makes AI feedback ",
      },
      {
        _type: "span",
        text: "actionable and specific",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: ".",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "Mastery-Based Progression: The Core Product Logic",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "The progression system is the intellectual heart:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Score ≥ 90% → Lesson Completed ✓ (unlock next lesson, show celebration)",
        marks: ["code"],
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Score < 90% → Show failed items, tag errors, suggest sub-lesson",
        marks: ["code"],
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Sub-lesson completed? → Offer retry session",
        marks: ["code"],
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This is product management in code: ",
      },
      {
        _type: "span",
        text: "explicit rules that ensure students don't advance before mastery",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: ". No soft progression, no skipping. Just clear evidence-based unlocking.",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [
      {
        _type: "span",
        text: "Key Learnings and Product Insights",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "1. Error Tagging is Product Architecture",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Initially, I thought I'd just show the wrong answer and let AI explain. But the real insight came from tagging errors with categories. This single decision:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Enabled ",
      },
      {
        _type: "span",
        text: "personalized feedback",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: " (AI knows ",
      },
      {
        _type: "span",
        text: "what",
        marks: ["em"],
      },
      {
        _type: "span",
        text: " went wrong)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Made ",
      },
      {
        _type: "span",
        text: "patterns visible",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: " (which concepts are blocking most students?)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Allowed ",
      },
      {
        _type: "span",
        text: "curriculum adjustments",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: " (if 60% of failures are \"complement_miss\", that concept needs reinforcement)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This isn't just a technical detail—it's ",
      },
      {
        _type: "span",
        text: "product architecture",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: ".",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "2. 10-Question Sessions Hit the Flow State Sweet Spot",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Testing revealed that 10 questions is the balance point:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Long enough for reliable mastery measurement (90% accuracy has meaning)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Short enough for kids to stay engaged (4-5 minute sessions)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Statistically valid (fewer questions = noise; more = fatigue)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This seems obvious in retrospect, but it's the kind of decision that requires iteration.",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "3. Mastery Gates Create Accountability for Learning",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "By refusing to unlock the next lesson until 90% mastery, the app forces ",
      },
      {
        _type: "span",
        text: "evidence-based progression",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: ". A kid can't accidentally skip Make-10 (the foundation for all addition). This prevents the \"content hoarding\" problem where students rush through material without deep understanding.",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This is a product statement: ",
      },
      {
        _type: "span",
        text: "We believe understanding precedes progression.",
        marks: ["strong"],
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "4. Adaptive Doesn't Mean Algorithmic Magic",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "I expected to build complex algorithms that personalize the curriculum. Instead, I learned that the error tagging system + sub-lessons is sufficient. The \"AI\" is mostly about:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Diagnosing ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "(which error was made?)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Explaining ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "(why is this hard for you?)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Offering a path ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "(here's a focused lesson)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "The real innovation isn't the AI model—it's the ",
      },
      {
        _type: "span",
        text: "system design",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: " that makes AI useful.",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [
      {
        _type: "span",
        text: "The Solution: A Proof of Concept for Scalable Edtech",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Math Tutor V2 demonstrates what effective AI-powered education looks like:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Clear Learning Objectives: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "3 lessons with specific, measurable goals (master addition fact families)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Personalized Feedback: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "AI doesn't just correct—it diagnoses and explains based on error patterns",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Evidence-Based Progression: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Students advance only when they've proven mastery, not because time passed",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Scalability: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "The system works the same whether teaching 10 kids or 10,000 (same curriculum, same feedback logic, same mastery gates)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Engaging UX: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Confetti on success, clear progress indicators, kid-friendly interactions (not patronizing)",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [
      {
        _type: "span",
        text: "What This Taught Me About AI Product Management",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "1. Product Logic Matters More Than Model Power",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "I could have used GPT-4 with open-ended prompts. Instead, I constrained the AI with error tags and specific prompts. This made feedback 10x more useful because it was ",
      },
      {
        _type: "span",
        text: "targeted and diagnostic",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: ", not generic.",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Lesson: ",
      },
      {
        _type: "span",
        text: "Good AI products are about system design, not just model selection.",
        marks: ["strong"],
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "2. Metrics Drive Product Decisions",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Every feature decision was informed by:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "What's the mastery threshold? (90% - why not 85%? Because cognitive science says so)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "How many questions per session? (10 - chosen for both engagement and statistical validity)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "What errors matter? (Tracked tags showed which concepts are hard)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This isn't guesswork—it's ",
      },
      {
        _type: "span",
        text: "hypothesis testing in production",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: ".",
      },
    ],
  },
  {
    _type: "block",
    style: "h3",
    children: [
      {
        _type: "span",
        text: "3. Constraints Make Products Better",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Mastery gates are constraints. Error tagging is a constraint. Limited curriculum (only 3 lessons) is a constraint. But these constraints ",
      },
      {
        _type: "span",
        text: "make the product stronger",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: " because they force clear thinking about what matters.",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Compare to edtech apps that let kids do anything, anytime. They feel \"free\" but lack direction. Math Tutor's constraints create clear progress.",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [
      {
        _type: "span",
        text: "Lessons for Future Products",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Diagnose Before Explaining: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Tag errors, understand patterns, then generate feedback.",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Measure Everything: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Mastery score, completion time, error patterns, unlock rates. Data reveals truth.",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Constraints Drive Clarity: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "Mastery gates, limited curriculum, specific error categories. These aren't limitations—they're features.",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Combine Logic + AI: ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "The most powerful edtech isn't pure AI—it's AI wrapped in product logic (mastery gates, error diagnosis, progression rules).",
      },
    ],
  },
  {
    _type: "block",
    style: "h2",
    children: [
      {
        _type: "span",
        text: "Conclusion",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "Building Math Tutor V2 changed how I think about AI products. It's not about \"putting ChatGPT in an app.\" It's about:",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Identifying a real problem (scaling one-on-one tutoring)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Building explicit product logic (mastery gates, error diagnosis)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Using AI strategically (to explain, diagnose, and guide)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Measuring relentlessly (track progress, adjust curriculum)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    listItem: "bullet",
    children: [
      {
        _type: "span",
        text: "Iterating on evidence (not intuition)",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "This is ",
        marks: ["strong"],
      },
      {
        _type: "span",
        text: "AI product management in action: Using AI as a tool within a carefully designed system that solves a real educational problem.",
        marks: ["strong"],
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "As I continue exploring AI products, I'll carry this insight: The best AI apps aren't the ones with the most powerful models—they're the ones with the clearest product thinking about ",
      },
      {
        _type: "span",
        text: "when",
        marks: ["em"],
      },
      {
        _type: "span",
        text: " and ",
      },
      {
        _type: "span",
        text: "how",
        marks: ["em"],
      },
      {
        _type: "span",
        text: " to use AI effectively.",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    children: [
      {
        _type: "span",
        text: "The job isn't done yet. Next steps include A/B testing different mastery thresholds, expanding the curriculum, and researching whether our error tagging system actually improves learning outcomes faster than traditional approaches. But the foundation is solid: a system that scales one-on-one tutoring through thoughtful product design.",
      },
    ],
  },
];

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

    console.log("Found article. Updating with improved formatting...");

    // Update the document with improved content
    const updatedDoc = await client
      .patch(doc._id)
      .set({
        description: portableTextContent,
      })
      .commit();

    console.log("✓ Math Tutor article updated successfully!");
    console.log(`Updated document ID: ${updatedDoc._id}`);
  } catch (error) {
    console.error("Error updating article:", error);
    process.exit(1);
  }
}

updateMathTutorArticle();
