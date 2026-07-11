# future_of_id

> **Historical README draft:** This file is preserved for reference and is not the current project or launch-readiness source of truth. Use `README.md` for current project status and `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` for authoritative launch scope, order, and gates. Future-stack references below do not place accounts, authentication, or Supabase in the current public launch scope.

**A living demonstration of the future of instructional design — built by an instructional designer, for instructional designers.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

A modern, modular learning platform that teaches **future-ready instructional design** through its own architecture and experience.

### The 3-Layer Learning Model

Every module follows a deliberate pedagogical structure:

1. **Theory** — Core concepts, frameworks, and research
2. **Experience** — Hands-on practice and application
3. **Reverse Engineering** — Deconstruct the actual implementation (this codebase) to see real design decisions

---

## Why This Project Exists

Most content about AI in L&D and modern instructional design stays at the _theory_ level. This platform is different:

- It is both the **learning experience** _and_ the **reference implementation**.
- It shows how to design scalable, modular, instructionally credible digital learning systems using current web technologies.
- It serves as a portfolio-grade example of systems thinking applied to instructional design.

Built with strict separation of concerns, reusable components, JSON/MDX-driven content, and zero hardcoded instructional material in UI components.

---

## Key Features

- **Modular 3-layer content architecture** (Theory → Experience → Reverse Engineering)
- Clean Next.js App Router implementation with TypeScript + Tailwind
- Strict adherence to instructional systems design (ISD) principles in both content _and_ code
- Reusable component library guided by a formal Design System
- Dashboard with clear progress visualization and learning path
- Built for future extensibility (Supabase, AI features, analytics, personalization)

---

## Project Philosophy

This is a **system-first build**. Every decision prioritizes:

- Modularity and reusability
- Explainability and maintainability
- Instructional credibility
- Separation of content, UI, and logic

See `docs/SYSTEM-INSTRUCTIONS.md` and `docs/architecture/` for the full architecture and decision framework.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Structured data + MDX
- **Future**: Supabase, OpenAI integrations

---

## Exploring the Architecture (Reverse Engineering)

This is the most valuable part for fellow IDs:

- `docs/architecture/` → Core system contracts (CONTENT_ARCHITECTURE, SITE_MAP, TECH_ARCHITECTURE, DESIGN_SYSTEM)
- `docs/strategy/` → Product vision and decisions
- `web/components/` → Reusable UI patterns
- `web/data/` & `web/content/` → How content is modeled and kept separate from UI

Feel free to explore, fork, or use patterns in your own work (MIT license).

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/BradleyAPierce/future_of_id.git

# Go to the app directory
cd future_of_id/web

# Install dependencies
npm install

# Run development server
npm run dev

Visit: http://localhost:3000/course/dashboard

Tech Stack

Framework: Next.js 15 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Content: Structured JSON + MDX
Future: Supabase, OpenAI integrations, Analytics


Contributing
This project is primarily a personal portfolio and reference implementation.
Thoughtful issues, questions, and discussions are welcome. If you’d like to contribute code or content, please open an issue first so we can align on the architecture and design system.

License
MIT License — Feel free to study, fork, or use patterns and code in your own projects. Attribution is appreciated but not required.

Built with instructional integrity.
— Bradley Pierce
Instructional Designer & Learning Systems Thinker
```
