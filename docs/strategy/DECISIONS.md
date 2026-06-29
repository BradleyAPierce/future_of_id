# DECISIONS.md

## Project Name

**future_of_id**

## Current Locked Decisions

- This project is a **guided learning course with progress tracking**, not just an article series.
- The experience will teach the future of instructional design by using modern instructional design methods.
- The 7 capability framework is locked.
- The guided course will include theory, interaction/experience, and Reverse Build in every module. Reverse Build is the user-facing layer that exposes reverse engineering and design rationale.
- The experience should appeal to both experienced L&D professionals and newer/career-transition learners.
- The project should support the creator's growth as a full-stack developer and portfolio builder.

## Current Preferred Technical Direction

- Next.js
- React
- TypeScript
- Tailwind
- Supabase
- OpenAI
- Vercel
- GitHub
- VS Code

## Open Decisions

- Should auth be included in the MVP or deferred?
- Should progress tracking work anonymously first, then move to authenticated accounts later?
- Should module content live fully in MDX, or partially in database/admin-managed structures later?
- Should the first polished module be Simulation Design or AI Literacy?
- How much Articulate content, if any, should be embedded or referenced in phase 1?

## Working Recommendation

For MVP:

- no required auth at first if that slows development
- use local state or browser storage for early progress tracking
- add Supabase-backed persistence when shell is stable
- build one standout module end-to-end before expanding the rest
