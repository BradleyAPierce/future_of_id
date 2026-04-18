# COPILOT-INSTRUCTIONS

## Project Context

This project is a **Next.js + TypeScript** learning platform for `future_of_id`, built to teach the future of instructional design through a modular, portfolio-grade product experience.

Copilot must align its work with the direction established in:

- `docs/strategy/BLUEPRINT.md`
- `docs/architecture/TECH_ARCHITECTURE.md`
- `docs/strategy/PROJECT-BRAIN.md`
- `docs/architecture/CONTENT_ARCHITECTURE.md`
- `docs/architecture/SITE_MAP.md`
- `docs/strategy/DECISIONS.md`
- `docs/strategy/ROADMAP.md`
- `docs/reference/INITIAL_REPO_STRUCTURE.md`
- `README.md`

When making decisions, prefer consistency with those files over inventing new patterns.

If documentation and existing code disagree, do not assume the code is correct by default. Inspect both, identify the conflict, and choose the path that best matches the long-term architecture and documented intent.

---

## Core Engineering Principles

1. **Systems over shortcuts.** Build durable systems, not quick hacks or one-off patches.
2. **Modularity first.** Favor small, composable modules and reusable components over large, tightly coupled files.
3. **Clean separation of concerns.** Keep presentation, behavior, content, domain logic, and configuration clearly separated.
4. **Reuse before rebuild.** Search for existing helpers, components, patterns, and data structures before creating new ones.
5. **Clarity over cleverness.** Prefer readable, maintainable code over dense abstractions or clever indirection.
6. **Scalable by default.** Make choices that support future modules, richer interactions, AI features, analytics, and persistence.
7. **No fake sophistication.** Do not introduce unnecessary complexity, speculative abstractions, or “vibe-coded” implementations.
8. **Architecture before speed.** If there is a conflict between a fast workaround and a durable structure, choose the durable structure.
9. **Real product thinking.** Treat the codebase as a real product foundation, not a demo made of disconnected pieces.
10. **Instructional credibility matters.** The platform should feel thoughtfully engineered, instructionally credible, and portfolio-grade.

---

## Decision Framework

When multiple valid approaches exist, prioritize in this order:

1. Alignment with existing architecture and documented patterns
2. Simplicity and readability
3. Reusability across modules and features
4. Long-term scalability and maintainability
5. Correctness and debuggability
6. Performance, only when it is actually relevant

Avoid introducing new patterns unless all of the following are true:

- the current pattern is clearly insufficient
- the new approach improves clarity, maintainability, or scalability
- the change can be applied consistently across the project
- the new pattern does not create unnecessary cognitive overhead

When uncertain, prefer the option that makes future work easier to reason about.

---

## Operating Expectations for Copilot

Before making meaningful changes, Copilot should:

1. Read surrounding code before editing
2. Inspect related components, utilities, data, and route structure
3. Consider relevant project docs listed above
4. Match existing naming and architectural patterns
5. Prefer focused, maintainable changes over broad churn

Copilot should not behave like a rapid code generator that invents architecture on the fly. It should behave like a careful implementation partner working inside an already-defined system.

---

## Architecture Expectations

### Preferred Stack Direction

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Structured content/config data
- Supabase for future persistence
- OpenAI for real AI-enabled interactions

### Separation of Responsibilities

Keep responsibilities distinct:

- `src/app/*` for routes, layouts, pages, loading states, errors, and route-level composition
- `src/components/*` for reusable UI and presentation building blocks
- `src/content/*` for module content, long-form instructional material, and structured learning content
- `src/data/*` for static configuration, metadata, navigation, and site-level definitions
- `src/lib/*` for utilities, services, integrations, domain logic, and shared helpers
- `src/types/*` for shared TypeScript types and domain models

Do not mix content, rendering logic, domain rules, and data shaping in the same file unless the scope is very small and clearly justified.

### Route-Level Responsibility

Route files should primarily:

- compose sections
- select or load data
- pass data into reusable components
- define route-specific layout structure

Route files should **not** become dumping grounds for hardcoded content, ad hoc logic, duplicated markup, or business rules.

### Component-Level Responsibility

Components should primarily:

- render UI
- accept clear props
- encapsulate small, understandable units of behavior
- remain composable and reusable where appropriate

Components should not silently own unrelated data rules or contain large volumes of embedded content that belongs in `content` or `data`.

---

## Next.js App Router Guidance

Use App Router conventions intentionally.

- Keep `page.tsx` files thin and focused on composition
- Use `layout.tsx` for shared route structure only when the structure is truly shared
- Use `loading.tsx` and `error.tsx` only when the route experience benefits from them
- Respect server and client boundaries
- Do not make a component a client component unless interactivity, browser APIs, or client-side hooks actually require it

### Server and Client Boundaries

- Prefer Server Components by default
- Add `"use client"` only when needed
- Do not push unnecessary logic into client components
- Keep client components focused on interactivity, UI state, and browser-dependent behavior
- Keep content shaping, static assembly, and non-interactive composition on the server side when possible

---

## State and Data Flow Guidelines

- Keep state as close to where it is used as possible
- Lift state only when multiple parts of the UI genuinely depend on it
- Prefer explicit data flow via props over hidden coupling
- Avoid deep prop chains when composition or better structure would solve the issue more clearly
- Do not introduce global state solutions unless clearly justified
- Respect server vs client responsibilities in Next.js App Router
- Trace data from source → transformation → render when debugging

### State Discipline

- Use local component state for local interaction
- Use shared state only when there is a real shared need
- Do not create state for values that can be derived directly
- Avoid duplicate sources of truth
- Prefer predictable, inspectable state over clever synchronization logic

---

## Content Strategy

Follow the hybrid content approach already defined in the repo.

- Use structured content and config for metadata, navigation, module definitions, progress rules, and reusable content patterns
- Keep long-form instructional content modular and easy to evolve
- Do not hardcode learning content into reusable UI components
- Treat module content as a system that should scale across orientation and future capabilities
- Keep content portable so that instructional material can evolve without rewriting core UI

### Content Modeling Expectations

- Model content intentionally
- Prefer structured data where the content benefits from reuse, filtering, navigation, or transformation
- Prefer modular content files over giant monolithic route files
- Keep instructional copy separate from generic layout logic

---

## File Structure Guidelines

1. Keep files focused on a single responsibility
2. Prefer feature-relevant grouping over generic dumping into “shared” folders
3. Extract reusable UI only when duplication becomes real, not hypothetical
4. Keep route files thin
5. Avoid deeply nested folder structures unless they add real clarity
6. Create shared helpers only when they are genuinely reused or clearly cross-cutting
7. Avoid file sprawl created by over-componentizing trivial markup

### File Creation Guidelines

- Do not create new files unnecessarily
- Prefer extending existing structure when appropriate
- Create a new file only when it improves clarity, reuse, or separation of concerns
- Every new file should have a clear responsibility
- Every new file name should reflect its purpose
- Every new file should fit logically into the existing folder structure

---

## Route Organization

- App routes should mirror the intended site map
- Route files should primarily compose sections and pass data into reusable components
- Avoid large, monolithic `page.tsx` files with embedded content, data, and logic all mixed together
- Keep route-specific UI inside the route only when it is not reusable elsewhere

---

## Component Organization

- Build small, purposeful components
- Prefer composition over inheritance-style thinking
- Keep UI primitives generic and feature components contextual
- Reuse shared patterns for module headers, progress indicators, cards, lesson sections, navigation, and other repeated structures
- Do not create overly generic components that become harder to understand than the duplication they were meant to remove

### Reusable Component Guidance

When creating or updating components:

- Design for reuse across modules and future pages when reuse is real
- Keep props intentional, minimal, and understandable
- Avoid over-configuring components for hypothetical scenarios
- Separate layout wrappers from domain-specific rendering when possible
- Ensure reusable components do not contain hardcoded module-specific copy unless that is their explicit purpose
- Prefer simple composition patterns over complex prop-driven mega-components

If a UI pattern appears in multiple places, prefer a shared component instead of repeating bespoke markup.

---

## Naming Conventions

Use consistent, predictable naming throughout the codebase.

### Files

- React component files: `PascalCase.tsx`
- Utility, config, and helper files: `camelCase.ts` or descriptive lowercase names that match project patterns
- Route files required by Next.js should follow framework conventions: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- Avoid vague names like `stuff.ts`, `helpers2.ts`, `temp.tsx`, `newComponent.tsx`, or `dataNew.ts`

### Components

- Use `PascalCase`
- Choose names based on responsibility, not styling
- Prefer names like `ModuleCard`, `ProgressBar`, `LessonSection`, `ModuleHeader`, `CapabilityOverview`

### Variables and Functions

- Use descriptive `camelCase`
- Name by intent and domain meaning
- Prefer names like `moduleProgress`, `getModuleBySlug`, `buildNavigationItems`, `calculateCompletionPercent`
- Avoid unclear names like `data`, `item2`, `handleStuff`, `doThing`, or `tempValue`

### Types

- Use `PascalCase` for types and interfaces
- Prefer domain-specific names like `ModuleDefinition`, `ProgressState`, `ReflectionPrompt`, `NavigationItem`

### Constants

- Use clear names that communicate meaning
- Group related constants near their domain when appropriate instead of centralizing everything prematurely

---

## TypeScript Standards

1. Keep types explicit at module boundaries
2. Prefer precise types over broad `any` or weak fallback typing
3. Model domain data carefully, especially for modules, progress, navigation, and content definitions
4. Use shared types when multiple areas depend on the same shape
5. Avoid type assertions unless there is a strong reason and no cleaner alternative
6. Prefer narrow, trustworthy types over permissive structures that hide problems
7. Treat type design as part of architecture, not as an afterthought

### Type Safety Rules

- Do not use `any` unless absolutely unavoidable and explicitly justified
- Do not hide bad data contracts behind loose typing
- Do not patch type problems with repeated assertions
- Fix the shape mismatch at the source when possible

---

## Clean Code Expectations

1. Write code that another developer can understand quickly
2. Keep components and functions small enough to reason about easily
3. Remove dead code instead of commenting it out
4. Avoid duplicated logic when a shared abstraction is justified
5. Do not patch symptoms if the real issue is architectural, state-related, or data-related
6. Prefer intentional refactors over layering fixes onto fragile code
7. Add comments sparingly and only when they explain **why** something exists or why a non-obvious choice was made

### Refactoring Guidelines

- Refactor when duplication becomes real, not hypothetical
- Prefer incremental improvements over large rewrites
- Ensure refactors preserve existing behavior unless a behavior change is the explicit goal
- Maintain naming and structural consistency while refactoring
- Use refactoring to clarify the system, not to chase aesthetic perfection

---

## Validation and Testing Mindset

Even when formal tests are not yet present, code should be written with validation in mind.

- Validate behavior through realistic usage scenarios
- Consider edge cases for data-driven components
- Ensure components fail gracefully when data is missing or incomplete
- Avoid assumptions about always-valid input
- Think through empty states, loading states, optional content, and boundary conditions
- Favor implementations that are easy to verify and reason about

If tests are added, they should reinforce architecture and intended behavior rather than merely increasing file count.

---

## Debugging Approach

Debug like an engineer, not a guesser.

1. Reproduce the issue clearly
2. Identify whether the problem is in content, UI, state, routing, data shape, client/server boundary, or integration logic
3. Trace the data flow from source to render
4. Fix the root cause, not just the visible symptom
5. Keep the fix consistent with the existing architecture
6. Verify that the change does not create regressions in shared patterns

### Debugging Rules

- Do not stack random fixes to “see what works”
- Do not silence errors without understanding them
- Do not add hacks that bypass the real architecture
- Do not hide state or type problems with loose fallbacks
- Prefer inspecting assumptions, props, types, route boundaries, and data contracts before rewriting code

---

## Dependency and Library Discipline

- Do not introduce a new dependency if the problem can be solved cleanly with the existing stack
- Prefer native platform capabilities and existing utilities before adding packages
- New dependencies must have a clear justification
- Avoid dependencies that add weight, abstraction, or maintenance burden without meaningful benefit
- Do not introduce libraries merely because they are popular

---

## Performance and Complexity Guidance

- Do not optimize prematurely
- Do not add memoization, caching, or abstraction layers without a clear reason
- Prefer straightforward implementations unless performance becomes an actual concern
- When optimizing, keep readability and debuggability intact
- Avoid trading clarity for speculative micro-performance gains

---

## AI and Integration Guidance

This project positions AI as a real product capability, not decorative language.

- If an AI feature is claimed, it should use actual AI behavior or infrastructure
- Do not fake AI with static output while presenting it as intelligent functionality
- Keep AI features grounded in instructional purpose
- Preserve instructional credibility, explainability, and learner trust
- Treat AI features as product features that need real reasoning, real constraints, and clear user value

### AI Behavior Expectations

- Do not assume missing context
- Do not invent APIs, file structures, data contracts, or architecture that are not present
- Prefer extending existing patterns over introducing new ones
- When uncertain, present options instead of pretending certainty
- Explain reasoning when making structural or architectural decisions
- Do not output shallow “looks good” code when deeper reasoning is needed
- Avoid placeholder logic presented as production-ready functionality

---

## UX and Product Alignment

All implementation should support the intended experience:

- premium but approachable
- modular and scalable
- instructionally credible
- practice-forward
- polished enough to feel portfolio-grade
- clean, understandable, and confidence-building for learners

Prioritize learner clarity, clean navigation, strong content structure, accessible interaction patterns, and reusable UI systems.

### UX Implementation Expectations

- Favor clear content hierarchy
- Make interaction patterns predictable
- Avoid cluttered or overly clever UI
- Ensure that instructional content remains central, not visually buried
- Support a polished user experience without unnecessary visual complexity

---

## Accessibility and Resilience Mindset

- Prefer semantic HTML and accessible structures
- Keep components usable and understandable
- Avoid building interactions that depend on hidden assumptions
- Ensure content remains meaningful even when optional enhancements are absent
- Treat accessibility as part of quality, not as an afterthought

---

## What to Avoid

- quick hacks
- tightly coupled components
- hardcoded content in reusable UI
- oversized route files
- unclear naming
- duplicate logic without reason
- unnecessary dependencies
- speculative abstractions
- magic behavior without explanation
- breaking architecture for short-term speed
- fake AI features
- generic patterns that weaken clarity
- code that “works” but makes the system harder to maintain

---

## Working Style for Copilot

When contributing to this repo:

1. Read surrounding code and relevant docs before making structural changes
2. Match existing project patterns unless there is a clear improvement with strong justification
3. Prefer surgical, maintainable changes over broad churn
4. Preserve a clean foundation for future modules, AI interactions, analytics, and content growth
5. If a request conflicts with the project’s modular architecture, choose the cleaner long-term implementation rather than the fastest patch
6. Treat each change as part of a larger system, not an isolated task
7. When making a significant structural decision, make the reasoning legible in the code and file organization

---

## Final Instruction

Every change should move the project toward a **modular, reusable, scalable, cleanly engineered, instructionally credible** Next.js learning platform.

If there is a choice between a fast workaround and a durable architecture-aligned solution, choose the architecture-aligned solution.

When in doubt, choose the solution that strengthens the system, preserves clarity, and makes future development easier to reason about.
