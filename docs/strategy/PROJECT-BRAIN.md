# 🧠 Project Brain: Future of Instructional Design Platform

> Historical note: This is an early project-brain document. It preserves useful operating principles, but some implementation details and audience references are stale. Use `docs/SYSTEM-INSTRUCTIONS.md`, `docs/COPILOT-INSTRUCTIONS.md`, `README.md`, and `docs/strategy/ROADMAP.md` for current guidance.

## 1. Project Purpose

This project is an AI-powered learning platform designed to demonstrate the future of Instructional Design. It combines modern web development with AI-assisted learning experiences to create modular, scalable, and interactive training environments.

The platform is intended to:

- Showcase real-world applications of AI in learning design
- Provide interactive, scenario-based learning experiences
- Serve as a portfolio-level demonstration of full-stack capabilities

---

## 2. Core Philosophy

### Systems Over Snippets

All development should prioritize structured, modular, and scalable systems over quick, one-off solutions.

### Explainability Over Speed

Code must be understandable, maintainable, and explainable. Avoid “vibe coding” or black-box implementations.

### Reusability First

Components, logic, and data structures should be reusable across multiple modules and learning experiences.

### Separation of Concerns

- UI (presentation)
- Logic (behavior)
- Content (data)
  should always remain clearly separated.

---

## 3. Tech Stack (Current Direction)

- Frontend: React / Next.js
- Backend: Node.js (future expansion)
- Scripting/AI logic: Python
- Styling: Tailwind CSS (or Bootstrap if required for legacy compatibility)
- Hosting: Vercel (primary), company server (final deployment)

---

## 4. Architecture Principles

### Modular Design

- Each learning module should be self-contained
- Components should be reusable across modules
- Avoid tightly coupled code

### JSON-Driven Content

- Learning content should be stored in structured JSON
- UI should dynamically render content from data
- Avoid hardcoding instructional content in components

### Component-Based UI

- Build reusable UI components (cards, modules, interactions)
- Keep components small and focused

---

## 5. AI Integration Strategy

AI is used to:

- Simulate real-world learning scenarios
- Generate dynamic feedback
- Act as a learning assistant or coach

AI should NOT:

- Replace core instructional structure
- Generate uncontrolled or unverified learning content

---

## 6. Coding Standards

- Prefer clarity over cleverness
- Use descriptive variable and function names
- Add comments explaining WHY, not just WHAT
- Avoid unnecessary dependencies
- Keep files organized and logically grouped

---

## 7. Git & Workflow Expectations

- Make small, focused commits
- Write meaningful commit messages
- Keep main branch stable
- Use feature branches for new functionality

---

## 8. UX / Learning Experience Principles

- Design for busy professionals (especially sales reps)
- Keep interactions intuitive and purposeful
- Focus on real-world application (WIIFM)
- Avoid unnecessary complexity in UI

---

## 9. Non-Negotiables

- No hardcoded content when it should be dynamic
- No tightly coupled components
- No “magic” code without explanation
- No breaking modular architecture for convenience

---

## 10. Future Expansion

- Multi-vertical learning systems (Education, Healthcare, etc.)
- AI-driven personalization
- Analytics dashboard integration
- Scalable backend services

---

## 11. Instruction for AI Assistants

When working on this project:

- Always prioritize modular, scalable solutions
- Explain reasoning behind decisions
- Align with existing architecture patterns
- Do not introduce unnecessary complexity
- Ask for clarification if requirements are unclear
