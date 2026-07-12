# TECH_ARCHITECTURE.md

## Scope and Authority

This document separates the architecture implemented for the current public launch from options that may be evaluated later. `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` governs current launch scope and execution. Future options below are not current dependencies or approved launch requirements.

## Current Launch Architecture

### Application

- Next.js App Router and React
- TypeScript
- Tailwind CSS
- Next.js route handlers for the implemented scenario and reflection feedback endpoints
- OpenAI-backed feedback orchestration within those existing endpoints

### Content

- structured TypeScript content under `web/content/`
- structured TypeScript data and configuration under `web/data/`
- reusable React components that render the structured content

The current launch does not depend on MDX or database-managed instructional content.

### Persistence

- learner progress is stored locally in the browser
- the experience remains usable without permanent saved progress
- there are no learner accounts, authentication, Supabase dependency, cloud persistence, or cross-device synchronization requirements

### Deployment

- the Next.js application is built for deployment on Vercel
- current deployment does not require a separate database or authentication service

## Future Architecture Options

The following options preserve earlier architecture exploration without representing current implementation. Each requires a future product decision after the public launch-readiness process.

### Supabase, Accounts, and Cloud State

Supabase or another service may later support:

- optional learner accounts and authentication
- database-backed learner progress and module completion state
- optional reflection entries or saved activity outcomes
- cloud persistence and cross-device synchronization

Possible future data domains include users, modules, lessons or content metadata, progress, interaction attempts, and resources.

### MDX Adoption

MDX may be evaluated later for long-form concept or Reverse Build content. The current launch continues to use structured TypeScript content and does not require an MDX migration.

### Analytics

Analytics and event tracking are future product evolution unless explicitly added to `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`. Future evaluation may include page engagement and events such as module starts, module completions, interaction launches, and reflection submissions.

### Personalization Possibilities

Future exploration may consider bounded personalization or adaptive support only after separate product, evidence, privacy, and implementation decisions. The current platform does not automatically diagnose capability needs, recommend pathways, generate pathways algorithmically, or personalize the experience.

### Additional AI Opportunities

Future work may explore additional simulation responses, coaching patterns, prompt-lab examples, or guided reflection support. These possibilities do not expand the current launch scope.

## Design System Direction

- clean, premium visual language
- modular cards
- progress indicators
- consistent module headers
- polished typography hierarchy
- optional subtle motion/animation

## Non-Goals for MVP

- no over-engineered admin CMS
- no heavy gamification system initially
- no multi-role enterprise permissions
- no complicated collaboration features in phase 1
