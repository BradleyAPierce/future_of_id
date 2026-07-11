# TECH_ARCHITECTURE.md

## Recommended Technical Direction

Initial recommendation: **Next.js + TypeScript + Tailwind + Supabase + OpenAI + Vercel**

This initial recommendation describes the longer-term platform direction, not the current public launch scope. The current launch uses local browser persistence and has no accounts, authentication, Supabase dependency, or cloud synchronization. Future architecture may add those capabilities after the public launch-readiness gates are complete.

## Why This Stack

- Next.js supports modern full-stack React development, routing, server logic, and deployment simplicity.
- TypeScript supports maintainability and professional code quality.
- Tailwind supports rapid UI iteration and consistent design systems.
- Supabase may provide future auth, Postgres, cloud progress storage, and synchronization with a flexible growth path.
- OpenAI supports simulations, feedback layers, and AI-enabled interactions.
- Vercel provides streamlined deployment for a Next.js app.

## App Architecture

### Frontend

- Next.js App Router
- React components
- Tailwind styling
- MDX support for rich article-style content

### Backend

- Next.js route handlers / server actions
- AI integration endpoints

Current progress state remains in local browser storage.

### Database and Accounts (Future)

Possible future use of Supabase after the current public launch for:

- optional learner accounts and authentication
- learner progress
- module completion state
- reflection entries (optional)
- saved activity outcomes (optional)
- cross-device synchronization

None of these future database or account capabilities are dependencies for the current public launch.

## Proposed Data Domains

These are future platform domains rather than current launch requirements.

- users
- modules
- lessons/content metadata
- module progress
- interactions / attempts
- resources

## AI Integration Opportunities

- AI simulation responses
- AI-generated coaching feedback
- AI prompt lab examples
- guided reflection support
- future content personalization

## Content Storage Strategy

### Recommended Hybrid Approach

- MDX for long-form concept content and reverse engineering pages
- structured JSON / TypeScript config for module metadata, cards, progress rules, and activity definitions
- database only for dynamic learner state and interaction records

## Analytics

Analytics work is future product evolution unless it is explicitly required by `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`.

### Phase 1

- GA4 for page and module engagement
- custom event tracking for:
  - module started
  - module completed
  - interaction launched
  - reflection submitted

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
