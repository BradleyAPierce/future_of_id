# ROADMAP.md

## Current Roadmap Status

This roadmap reflects the current product phase after the initial strategy, app foundation, guided course shell, landing/about surfaces, module content structure, and first AI feedback architecture have been established.

## Scope and Authority

This roadmap describes long-term product evolution, future capabilities, and future architecture. It does not define the work required before Future of ID's first public introduction.

`PUBLIC_LAUNCH_READINESS_CHECKLIST.md` is the authoritative source for current public launch gates and execution order. During launch readiness, that checklist takes priority over unrelated roadmap initiatives. Roadmap items remain valid future direction, but they are not launch requirements unless Bradley explicitly incorporates them into the launch checklist.

For the current public launch scope, learner progress is stored locally in the browser. Accounts, authentication, Supabase-backed cloud persistence, synchronization, and additional platform capabilities are deferred future work.

## Completed / Foundation

- established Bradley's launch-stable seven-capability pathway as the first complete demonstration of the reusable capability development system
- created blueprint, decision, architecture, and strategy docs
- initialized Next.js app under `web/`
- established App Router, TypeScript, Tailwind, and linting foundation
- created core course routes, landing page, About page, dashboard, orientation, and module route structure
- created structured module metadata and content files
- established reusable UI/course component foundation
- implemented initial local progress tracking
- implemented shared AI feedback architecture for scenario and reflection feedback

## Current Phase — Documentation, Design, and Component Alignment

- align system and Copilot instructions with the current documentation structure
- standardize product terminology around Reverse Build while preserving reverse engineering as explanatory process language
- clarify design system vs component architecture ownership
- refine reusable component guidance against the current `web/components/*` structure
- validate component patterns before broader Figma MCP component-generation work
- continue polishing dashboard, module pages, Reverse Build patterns, and AI feedback surfaces

## Next Phase — Module Expansion and Product Polish

- expand and refine content for all seven capability modules
- improve module completion, reflection, and next-step flows
- strengthen AI-supported practice and feedback patterns across modules
- improve navigation and learner flow across landing, course, dashboard, and module pages
- add clearer completion states and course progress affordances

## Later Product Phase — Persistence, Analytics, and Public Evolution

- consider Supabase-backed cloud persistence, accounts, authentication, and synchronization after the current public launch-readiness process
- add analytics/event tracking for meaningful course and module behavior
- refine public narrative and sharing readiness
- add supporting resources, downloads, or references where they strengthen the guided course

These items do not add to or replace the current launch gates in `PUBLIC_LAUNCH_READINESS_CHECKLIST.md`.

## Future Phases

- richer AI coaching
- adaptive sequencing
- downloadable companion resources
- portfolio case study pages
- learner accounts with richer saved state
- community or code-library surfaces after the guided course is strong
