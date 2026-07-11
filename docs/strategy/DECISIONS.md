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
- The current public launch uses local browser persistence.
- Accounts, authentication, Supabase-backed persistence, and cloud synchronization are outside the current public launch scope.

## Current Launch Technical Direction

- Next.js
- React
- TypeScript
- Tailwind
- OpenAI
- Vercel
- GitHub
- VS Code
- local browser persistence

## Future Platform Direction

- Supabase-backed cloud persistence
- optional learner accounts and authentication
- cross-device synchronization and richer saved state
- additional platform capabilities after the current launch scope

## Future Open Decisions

- What account and authentication model, if any, should be used after the current public launch?
- When should local browser persistence expand into cloud persistence and synchronization?
- Should module content live fully in MDX, or partially in database/admin-managed structures later?
- Which module should receive additional post-launch polish after the launch-readiness sequence is complete?
- How much Articulate content, if any, should be embedded or referenced in a future product phase?

## Working Recommendation

For the current public launch:

- use local state or browser storage for progress tracking
- do not add accounts, authentication, or a Supabase dependency
- follow the approved execution order in `PUBLIC_LAUNCH_READINESS_CHECKLIST.md`

After the current launch-readiness gates are complete, Supabase-backed persistence and account capabilities may be evaluated as future roadmap work.
