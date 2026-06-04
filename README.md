future_of_id

future_of_id is a guided, self-paced learning platform exploring the capabilities shaping the future of instructional design through AI, systems thinking, simulation design, analytics, adaptive learning, and human-centered change.

This project is intentionally built as both:

1. A professional learning experience for instructional designers and L&D professionals
2. A transparent reference implementation showing how modern learning systems can be designed, structured, and engineered

The goal is not just to talk about the future of instructional design.

The goal is to let people experience it, inspect it, and understand the decisions behind it.

⸻

Why This Project Exists

A large amount of conversation in L&D currently happens at the theory level:

- AI in learning
- adaptive experiences
- analytics
- workflow automation
- simulation design
- learning systems architecture

But very few projects openly expose:

- the instructional reasoning
- the system architecture
- the content modeling
- the AI integration approach
- the tradeoffs and constraints
- the actual implementation decisions

This project attempts to close that gap.

Every module is designed not only to teach a concept, but also to expose the underlying structure behind the experience itself.

⸻

The Core Learning Model

Every module follows the same 3-layer structure:

1. Theory

The instructional concepts, research, frameworks, and industry context behind the topic.

2. Experience

Applied interaction, reflection, simulation, or guided decision-making activity.

3. Reverse Build

A transparent breakdown of how the experience was designed and built:

- instructional strategy
- architecture decisions
- prompt structure
- component patterns
- tradeoffs
- implementation constraints
- reusable systems and workflows

The project is based on the belief that instructional designers learn more effectively when they can examine real systems, not just consume explanations about them.

⸻

The Seven Capability Areas

1. AI Literacy and Agent-Enabled Learning Design
2. Performance Consulting and Business Alignment
3. Learning Analytics and Evidence-Based Design
4. Scenario, Simulation, and Conversation Design
5. Adaptive and Personalized Learning Architecture
6. Content Systems Thinking and Workflow Automation
7. Human-Centered Change, Ethics, and Learner Trust

⸻

Who This Project Is For

This project is designed for:

- instructional designers
- learning experience designers
- curriculum developers
- training specialists
- learning architects
- L&D professionals exploring AI-enabled workflows
- developers interested in learning systems design
- professionals transitioning into modern instructional design

It is intentionally designed to support both:

- experienced practitioners evaluating where the field is evolving
- newer professionals trying to understand how instructional design, AI, and software systems increasingly intersect

⸻

Project Philosophy

This is a systems-first build.

The architecture prioritizes:

- modularity
- explainability
- maintainability
- instructional credibility
- reusable patterns
- separation of concerns
- scalable content structures

The project intentionally avoids:

- hardcoded instructional content inside UI components
- tightly coupled architecture
- fake AI features
- over-engineered abstractions
- “vibe-coded” implementations that are difficult to understand or maintain

The long-term goal is to demonstrate how instructional design and software architecture can work together to create more adaptive, transparent, and practice-oriented learning systems.

⸻

Current State of the Project

Currently Implemented

- Next.js + TypeScript application architecture
- modular course structure
- orientation experience
- dashboard with learner progress tracking
- Module 1 content and interaction system
- reusable course component system
- reflection workflows and AI feedback architecture
- structured content/data separation
- Reverse Build instructional framework

In Progress

- additional module development
- richer AI-supported interactions
- improved UI system and visual polish
- expanded analytics and learner feedback systems
- Supabase-backed persistence layer

⸻

Tech Stack

Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

Content Architecture

- structured JSON/data-driven content
- modular content modeling
- scalable component patterns

Planned / Expanding

- OpenAI integrations
- Supabase
- analytics and event tracking
- adaptive interaction layers

⸻

Repository Structure

web/
├── app/ # Next.js routes and page composition
├── components/ # Reusable UI and interaction components
├── data/ # Structured module metadata and configuration
├── content/ # Long-form instructional content
├── lib/ # Shared utilities, AI orchestration, domain logic
├── styles/ # Global styling and design foundations
└── types/ # Shared TypeScript types

Additional project documentation:

- BLUEPRINT.md
- CONTENT_ARCHITECTURE.md
- TECH_ARCHITECTURE.md
- PROJECT-BRAIN.md
- ROADMAP.md
- DECISIONS.md

These documents intentionally expose the architectural and instructional thinking behind the project.

⸻

Local Development

# Clone the repository

git clone https://github.com/BradleyAPierce/future_of_id.git

# Navigate into the project

cd future_of_id/web

# Install dependencies

npm install

# Start the development server

npm run dev

Then visit:

http://localhost:3000/course/dashboard

To build from the repository root (`future_of_id`), run:

`npm run build`

⸻

Why the Repo Is Public

This repository is public because transparency is part of the instructional model.

The intent is to allow other instructional designers, learning architects, and developers to:

- study the architecture
- inspect the learning systems
- understand the design decisions
- reuse patterns
- evaluate tradeoffs
- learn from real implementation work instead of abstract discussion alone

⸻

License

MIT License

You are welcome to:

- study the architecture
- fork the project
- reuse patterns or ideas
- adapt components or workflows for your own learning systems

Attribution is appreciated, but not required.

⸻

Built by Bradley Pierce
Instructional Designer • Learning Systems Builder • Full-Stack Learning Product Developer
