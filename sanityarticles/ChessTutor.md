Title:Building an AI Chess Tutor
Slug:ai-chess-tutor
Short Summary (150 char): I built an AI Chess Tutor with Stockfish & OpenAI. After my first idea failed, I pivoted to puzzles, learning the limits of LLMs in strategy.
Description: As a developer passionate about AI, I’m constantly driven to build tools that solve real problems. For months, I was obsessed with a single idea: an AI chess tutor that could explain the why behind the best moves, freeing players from rote memorization to play more intuitively. After countless failed attempts, conversations with other developers, and moments of self-doubt, I finally built it. But the journey took an unexpected turn. The initial version revealed a fundamental limitation in using LLMs for complex strategy games, forcing me to pivot. This project, ChessTutor, is the story of that challenge, a story of perseverance, adaptation, and the critical lessons I learned about AI's true capabilities.

The Problem: The "Best Move" Isn't Always the Best Way to Learn

My initial goal was ambitious: create an app where a user could input any chess position (via a FEN string) or play against an engine and receive simple, clear explanations for the top recommended moves. The idea was to demystify the complex calculations of chess engines like Stockfish.

However, after building the MVP and gathering feedback, I hit a wall. Chess is a game of nearly infinite possibilities. Simply explaining the "best" move in a vacuum often isn't helpful. A move's strength is tied to long-term plans, subtle positional advantages, and reactions to an opponent's strategy concepts that are difficult for an LLM to explain without a clear, finite goal. My tool was functional, but it wasn't an effective teacher. The job wasn't done.

The Pivot: Discovering the Limits of LLMs in Strategy Games

The turning point came from a simpler project I built to hone my skills: a Connect Four game against an LLM. I could beat it easily. This exposed a critical weakness: LLMs don't inherently "think" strategically using game theory principles like minimax. They predict text. For a game with a defined optimal strategy, this is a major flaw.

This realization led to a pivot for ChessTutor. Instead of analyzing infinite open-ended positions, I would focus on chess puzzles, specifically "mate in X" scenarios. Puzzles provide a constrained environment with a single, verifiable goal: checkmate. This smaller subset of moves makes the AI's task of explaining the solution far more manageable and the user's learning experience more focused and rewarding.

Project Overview and Implementation

I built ChessTutor as a full-stack monorepo application, leveraging TypeScript across the board to ensure type safety and code quality. The architecture is designed to integrate a powerful chess engine with a cutting-edge LLM.

1. Backend: The Brains with NestJS and Stockfish

The backend, built with Nest.js and deployed on Render, orchestrates the entire analysis and explanation flow.

Stockfish Integration: I created a stockfishManager.ts utility to handle the lifecycle of the Stockfish engine process. This ensures the engine is always ready to receive commands without the overhead of starting a new process for each request.

API Endpoints:

/analyze: Takes a FEN string, sends it to Stockfish with a command like go depth 5, and parses the output to find the top 3 moves. It uses the chess.js library to validate moves and detect checkmates.

/puzzles/random: Queries a PostgreSQL database via Prisma to fetch a random puzzle based on a theme (e.g., mateIn2). The puzzles were pre-loaded from a public dataset.

/explain: This is where the magic happens. It takes the FEN and the top moves from Stockfish and sends them to the OpenAI API.

2. Frontend: An Interactive Board with Next.js (Vite) and React

The user interface is a responsive single-page application built with React (using Vite), TypeScript, and styled with Tailwind CSS and shadcn/ui components.

Interactive Chessboard: The core of the UI is the ChessboardDisplay component, which uses a popular chessboard library to render positions, handle player moves via drag-and-drop or clicks, and display visual feedback like highlighted squares and arrows.

State Management: React's useState and useCallback hooks manage the puzzle state, game instance (chess.js), user interactions, and communication with the backend.

Puzzle Workflow: The PuzzlePage.tsx component handles fetching a new puzzle, processing the player's moves, providing immediate feedback (correct, incorrect, or solved), and preparing the data for the final explanation.

3. Prompt Engineering: Guiding the AI for Precision

The most critical part of the project was crafting the prompts for the OpenAI API (gpt-4o-mini). To avoid generic or incorrect explanations, I engineered highly structured prompts that provide the LLM with all the necessary context, telling it not just the move, but also the piece, its starting square, and its destination.

I created two distinct prompts in explain.ts:

Checkmate Prompt: A strict, high-urgency prompt used when a move delivers checkmate. It forces the AI to focus only on how that specific move wins the game and to treat other moves as inferior.

Standard Prompt: A more detailed prompt for non-decisive moves, requiring the AI to break down the move's "Idea," "Opportunities Created," and "Threats Addressed."

This disciplined approach to prompting prevents the LLM from "hallucinating" and ensures the explanations are grounded in the actual game state provided by Stockfish.

The Solution: A Focused, Effective Chess Puzzle Tutor

The pivoted ChessTutor successfully addresses the flaws of the original concept:

Clear Learning Objectives: By focusing on mate-in-X puzzles, users have a clear goal, making the AI's explanations more relevant and easier to understand.

High-Quality Explanations: The engineered prompts ensure that explanations are accurate, concise, and directly related to the puzzle's solution.

Engaging User Experience: The app provides a satisfying loop: attempt the puzzle, see the solution, and get a clear takeaway.

Key Learnings and Next Steps

This project was an incredible learning experience that pushed me far beyond my comfort zone.

AI is a Tool, Not a Thinker: My biggest takeaway is that LLMs are not strategic agents. They are powerful pattern matchers that excel when guided by structured data and clear constraints. This project's limitations directly inspired my next project on Retrieval-Augmented Generation (RAG).

The Power of the Pivot: I learned that being willing to change your core idea based on evidence is not failure, but a sign of growth. The MVP's shortcomings were not a dead end but a signpost pointing to a better solution.

Monorepo and Full-Stack TypeScript: Managing the frontend, backend, and shared types in a single monorepo streamlined development and taught me invaluable lessons in building scalable, maintainable applications.

My next step is to implement a Post-Puzzle Summary, where the AI explains the entire checkmating sequence and identifies the core tactical patterns (e.g., Fork, Skewer, Mating Net) to reinforce learning.

Conclusion

Building ChessTutor was a journey from a flawed concept to a functional, valuable learning tool. It taught me how to tame a powerful chess engine, precisely guide an LLM, and build a full-stack application from scratch. More importantly, it gave me the confidence to tackle complex problems, listen to feedback (even from my own app), and iterate toward a better solution. This project showcases my ability to not only write code but to think critically about a product and navigate the entire development lifecycle. The job may not be done, but I’m more equipped than ever for what's next.
