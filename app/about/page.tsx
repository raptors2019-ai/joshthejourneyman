// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Josh | Product Manager & AI Builder",
  description:
    "Learn about Josh Singarayer&apos;s transition from business analyst to PM, building AI-powered products and testing hypotheses with real users.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
        About Me
      </h1>

      <section className="mb-12">
        <p className="text-lg mb-6 text-gray-600">
          Hi, I&apos;m Josh—a business analyst transitioning into Product Management.
          I believe the best way to understand PM is by building: creating products
          that solve real problems, testing hypotheses with users, and learning what&apos;s
          actually possible with emerging technologies like AI. My background in business
          analysis taught me to think critically about problems; now I&apos;m learning to
          think strategically about solutions through hands-on product experimentation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          My Product Philosophy
        </h2>
        <p className="text-lg mb-6 text-gray-600">
          I learn best by shipping. Two major projects shaped my thinking about AI and product:
        </p>
        <div className="space-y-6 text-gray-600">
          <div>
            <p className="font-semibold text-lg text-blue-700 mb-2">ChessTutor: Learning LLM Limitations</p>
            <p className="text-lg mb-4">
              My initial hypothesis was bold: &quot;LLMs can explain why any chess move is good.&quot; I built an app that took any chess position and generated explanations using OpenAI and Stockfish. But user feedback revealed a fundamental flaw—LLMs predict text, they don&apos;t think strategically. A move&apos;s value in chess is tied to long-term plans and reactions that LLMs struggle to articulate. This failure was the breakthrough. Instead of fighting the limitation, I pivoted: focus on constrained domains (chess puzzles with a single verifiable goal: checkmate). The result? A more focused, valuable learning tool. <span className="italic">Key lesson: Understand your technology&apos;s true capabilities, not the hype.</span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg text-blue-700 mb-2">MyIslamRAG: Solving Hallucinations with Architecture</p>
            <p className="text-lg">
              A friend needed a tool to find Islamic guidance with zero hallucinations. This led me to Retrieval-Augmented Generation (RAG)—a technique that grounds LLMs in verified data. I built a full-stack pipeline: scrape Hadith data, embed with OpenAI, store in a vector database, and feed retrieved results to the LLM with strict prompts. My first hypothesis (direct embeddings work) failed—query accuracy was 60%. But transforming queries with an LLM before searching boosted accuracy by 40%. <span className="italic">Key lesson: Data architecture and prompt engineering matter more than raw model power.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          PM Skills I&apos;m Demonstrating
        </h2>
        <div className="space-y-4 text-gray-600">
          <div>
            <p className="font-semibold text-blue-700 mb-2">🔍 Product Discovery</p>
            <p className="text-lg">Found real user problems: &quot;How do I learn chess strategy?&quot; and &quot;Where do I find trustworthy Islamic guidance?&quot; Built solutions, not features.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700 mb-2">📊 Hypothesis-Driven Development</p>
            <p className="text-lg">Test assumptions with code. My LLM strategy hypothesis failed, but that failure informed a better product. Iterated based on evidence, not ego.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700 mb-2">📈 Metrics That Matter</p>
            <p className="text-lg">Tracked what matters: query optimization (40% accuracy improvement), user feedback loops, and clear success metrics for each product goal.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700 mb-2">⚙️ Technical Execution</p>
            <p className="text-lg">Full-stack monorepos: NestJS backends, Next.js frontends, vector databases, API integrations. Can translate strategy into shipped code.</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700 mb-2">🧠 Learning Agility in Emerging Tech</p>
            <p className="text-lg">Mastered RAG, prompt engineering, vector databases, and LLM integration—not through courses, but by shipping products that required these skills.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Looking Ahead</h2>
        <p className="text-lg mb-6 text-gray-600">
          I&apos;m excited about my transition into Product Management. I&apos;m looking for roles where I can:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
          <li>Bridge technical and business teams—I speak both languages</li>
          <li>Shape products in the AI space—understanding both possibilities and real limitations</li>
          <li>Learn from experienced PMs while bringing hands-on product-building skills</li>
          <li>Build products that solve real problems for real users</li>
        </ul>
        <p className="text-lg mt-6 text-gray-600">
          If you&apos;re working on AI products or building a team that values PM candidates who can think strategically and execute technically, I&apos;d love to talk.
        </p>
      </section>

      <p className="text-lg text-center text-gray-600">
        Whether you&apos;re hiring for a PM role, building AI products, or just want to discuss
        product strategy and AI capabilities, I&apos;m always open to conversations.
        <br className="mt-2" />
        <span className="font-semibold">Let&apos;s talk about products.</span>
      </p>
    </div>
  );
}

export const revalidate = 300; // Revalidate every 5 minutes
