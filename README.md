future_of_id

future_of_id is a capability development system demonstrated through a guided, self-paced learning platform for instructional designers and L&D professionals.

This project is intentionally built as both:

1. A professional learning experience for instructional designers and L&D professionals
2. A transparent reference implementation showing how modern learning systems can be designed, structured, and engineered

The goal is not just to talk about the future of instructional design.

The goal is to let people experience it, inspect it, and understand the decisions behind it.

The system provides a repeatable method for identifying, developing, applying, and sharing future-relevant capabilities. Its reusable learning architecture connects Theory, Experience, Reverse Build, and Reflection. Sharing means making applied reasoning, artifacts, reflections, and design lessons understandable for others to inspect or adapt; it does not imply a social network or publishing platform.

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

Every module follows the same core 3-layer structure:

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

The project is based on the belief that instructional designers learn more effectively when they can examine real systems, not just consume explanations about them. Reflection is a recurring checkpoint and closure pattern across the guided course.

⸻

Current Implemented Pathway: Seven Capability Areas

The current seven capabilities are Bradley's implemented professional pathway and the first complete demonstration of the capability development system. They are a practical example, not a universal framework, exhaustive list, or permanent boundary. Another practitioner may select different capability areas while preserving the same method and learning architecture.

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
- reflection workflows and shared AI feedback architecture
- structured content/data separation
- Reverse Build instructional framework
- local browser persistence for course progress

Current Public Launch Scope

- no learner accounts
- no authentication
- no Supabase dependency
- no cloud synchronization

Public launch readiness is governed by `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`.

In Progress

- additional module development
- richer AI-supported interactions across modules
- improved UI system and visual polish
- expanded learner feedback systems
- analytics and event tracking
- adaptive interaction concepts and prototypes

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

Currently Implemented Technical Capabilities

- OpenAI-powered scenario and reflection feedback architecture
- local browser persistence for course progress
- structured TypeScript content and configuration

Future Platform Direction

- optional learner accounts and authentication
- Supabase-backed cloud persistence
- cross-device synchronization and richer saved state
- additional platform capabilities after the current launch scope

⸻

Repository Structure

web/
├── app/ # Next.js routes, layouts, and API route handlers
├── components/ # Reusable UI, layout, landing, course, and interaction components
├── content/ # Modular instructional and landing/about content
├── data/ # Structured module metadata and configuration
├── lib/ # Shared utilities, AI orchestration, domain logic
└── types/ # Shared TypeScript types

Additional project documentation:

- `docs/SYSTEM-INSTRUCTIONS.md`
- `docs/COPILOT-INSTRUCTIONS.md`
- `docs/strategy/BLUEPRINT.md`
- `docs/strategy/DECISIONS.md`
- `docs/strategy/ROADMAP.md`
- `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md`
- `docs/architecture/CONTENT_ARCHITECTURE.md`
- `docs/architecture/SITE_MAP.md`
- `docs/architecture/TECH_ARCHITECTURE.md`
- `docs/architecture/DESIGN_SYSTEM.md`
- `docs/COMPONENT_ARCHITECTURE_V1.md`
- `docs/strategy/LANDING_PAGE_STRATEGY.md`
- `docs/decisions/*`
- `docs/validation/*`

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

A fork does not need to preserve Bradley's seven-capability topics. It may replace some or all seven while reusing or adapting the capability development method and learning architecture. The reusable value is the system, not Bradley's exact pathway.

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
