# INITIAL_REPO_STRUCTURE.md

> Historical reference: This file records the intended initial repository layout. It is not the active source of truth for current structure. Use `README.md` and the live `web/` tree for current paths.

future_of_id/
├── README.md
├── test.txt
├── docs/
│   ├── SYSTEM-INSTRUCTIONS.md
│   ├── COPILOT-INSTRUCTIONS.md
│   ├── architecture/
│   │   ├── CONTENT_ARCHITECTURE.md
│   │   ├── SITE_MAP.md
│   │   └── TECH_ARCHITECTURE.md
│   ├── strategy/
│   │   ├── BLUEPRINT.md
│   │   ├── DECISIONS.md
│   │   ├── PROJECT-BRAIN.md
│   │   ├── ROADMAP.md
│   │   └── STRATEGY.md
│   └── reference/
│       └── INITIAL_REPO_STRUCTURE.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── public/
│   ├── images/
│   └── icons/
├── web/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── course/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── orientation/
│   │   │   │   └── page.tsx
│   │   │   └── module/
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   ├── components/
│   ├── data/
│   ├── lib/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── postcss.config.mjs
│   └── eslint.config.mjs

## Notes

This structure represents the intended initial architectural layout of the application.

It intentionally excludes:
- `node_modules`
- `.next`
- environment and build artifacts

These are part of the runtime environment, not the system design.
