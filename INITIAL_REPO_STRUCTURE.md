future_of_id/
├── README.md
├── BLUEPRINT.md
├── SITE_MAP.md
├── CONTENT_ARCHITECTURE.md
├── TECH_ARCHITECTURE.md
├── ROADMAP.md
├── DECISIONS.md
├── INITIAL_REPO_STRUCTURE.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── course/
│   │   │   ├── page.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── orientation/
│   │   │   │   └── page.tsx
│   │   │   └── module/
│   │   │       └── [slug]/
│   │   │           ├── page.tsx
│   │   │           ├── experience/
│   │   │           │   └── page.tsx
│   │   │           └── reverse-engineering/
│   │   │               └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── course/
│   │   ├── modules/
│   │   ├── progress/
│   │   └── ui/
│   ├── content/
│   │   ├── orientation/
│   │   └── modules/
│   ├── data/
│   │   ├── modules.ts
│   │   ├── navigation.ts
│   │   └── site.ts
│   ├── lib/
│   │   ├── ai/
│   │   ├── progress/
│   │   ├── analytics/
│   │   └── utils/
│   ├── styles/
│   └── types/
└── supabase/
    └── migrations/