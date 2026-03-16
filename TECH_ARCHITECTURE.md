# TECH_ARCHITECTURE.md

## Recommended Technical Direction

Initial recommendation: **Next.js + TypeScript + Tailwind + Supabase + OpenAI + Vercel**

## Why This Stack

- Next.js supports modern full-stack React development, routing, server logic, and deployment simplicity.
- TypeScript supports maintainability and professional code quality.
- Tailwind supports rapid UI iteration and consistent design systems.
- Supabase provides auth, Postgres, and progress storage with a flexible growth path.
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
- database read/write for progress and user state
- AI integration endpoints

### Database (Initial)

Recommended use of Supabase for:

- learner progress
- module completion state
- reflection entries (optional)
- saved activity outcomes (optional)

## Proposed Data Domains

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
