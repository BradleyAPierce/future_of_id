# 🧠 SYSTEM INSTRUCTIONS  
## future_of_id

---

## 1. Purpose

This document defines how all AI-assisted development must operate within the **future_of_id** project.

It acts as the **central control layer** for:
- architecture enforcement  
- decision-making hierarchy  
- development workflow  
- AI behavior expectations  

All AI tools (Kilo Code, Copilot, Codex, Claude, ChatGPT) must follow this document.

---

## 2. Source of Truth Hierarchy

AI must prioritize project documents in the following order:

### Tier 1 — Core System Contracts (Non-Negotiable)

1. `docs/architecture/CONTENT_ARCHITECTURE.md` → module structure and learning model  
2. `docs/architecture/SITE_MAP.md` → routing and page hierarchy  
3. `docs/architecture/TECH_ARCHITECTURE.md` → stack and technical boundaries  
4. `docs/architecture/DESIGN_SYSTEM.md` → visual, UX, and interface consistency rules

These define the **core structure of the system** and must always be followed.

---

### Tier 2 — Strategic Constraints

5. `docs/strategy/DECISIONS.md` → locked constraints and decisions
6. `docs/strategy/BLUEPRINT.md` → product vision and experience design

Used to guide implementation decisions and resolve ambiguity.

---

### Tier 3 — Supporting Context

7. `docs/strategy/ROADMAP.md` → development phases and sequencing
8. `docs/reference/INITIAL_REPO_STRUCTURE.md` → structural reference
9. `README.md` → project overview

Helpful context, but must not override Tier 1 or Tier 2.

---

## 3. Core Operating Principles (Non-Negotiable)

### Systems Over Snippets  
All work must align with system architecture. No isolated code generation.

### Explainability Over Speed  
Code must be understandable, maintainable, and clearly structured.

### Reusability First  
Prefer reusable components and patterns over one-off solutions.

### Separation of Concerns  
Strictly separate:
- UI (presentation)  
- Logic (behavior)  
- Content (data)

### Architecture Over Shortcuts  
If speed conflicts with structure, choose structure.

---

## 4. System-Level Non-Negotiables

AI must NEVER:

- hardcode instructional content inside reusable UI  
- break the defined module architecture  
- introduce tightly coupled components  
- invent new architecture without justification  
- bypass documented system patterns  
- create “magic” or unexplained logic  

---

## 5. Content System Rules

All modules must follow the 3-layer structure:

1. Theory  
2. Experience  
3. Reverse Engineering  

Content must be:

- JSON-driven OR  
- MDX-based for long-form  

❌ NEVER hardcode learning content inside components  

Content must remain:
- modular  
- scalable  
- reusable  

---

## 6. Architecture Enforcement

### Tech Stack Constraints

- Next.js (App Router)  
- React  
- TypeScript  
- Tailwind CSS  
- Supabase (future persistence)  
- OpenAI (AI features)  

Do not introduce new frameworks without justification.

---

### Routing Constraints

Follow:

- `/course/module/[slug]`  
- `/course/module/[slug]/experience`  
- `/course/module/[slug]/reverse-engineering`  

Do not deviate from routing patterns.

---

### Component Rules

- Small, focused, reusable  
- No monolithic components  
- Data-driven rendering  
- No embedded content  

---

## 7. AI Execution Workflow (CRITICAL)

For any meaningful task, AI must follow this process:

### Step 1 — Context Alignment
- Read relevant Tier 1 and Tier 2 documents  
- Identify affected areas (UI, data, routing, content)

---

### Step 2 — System Alignment
Ensure the solution follows:
- modular architecture  
- separation of concerns  
- content strategy (JSON/MDX)  
- existing patterns  

---

### Step 3 — Planning (Required for non-trivial work)
- Propose structure before coding  
- Identify reusable components  
- Identify data structures  

---

### Step 4 — Implementation
- Write clean, modular code  
- Avoid shortcuts  
- Follow existing patterns  

---

### Step 5 — Validation
Confirm:

- no hardcoded content  
- components are reusable  
- architecture is preserved  
- solution aligns with system docs  

---

AI must not skip these steps for meaningful development.

---

## 8. Development Workflow Expectations

For any feature or change:

1. Review Tier 1 and Tier 2 docs  
2. Align with architecture  
3. Plan structure (if multi-file or complex)  
4. Implement using existing patterns  
5. Validate against system rules  

---

## 9. Decision Framework

When multiple valid approaches exist, prioritize:

1. Alignment with architecture  
2. Simplicity and clarity  
3. Reusability  
4. Scalability  
5. Maintainability  

Avoid introducing new patterns unless clearly justified.

---

## 10. Conflict Resolution

If conflicts occur:

1. Follow Tier 1 documents  
2. Then Tier 2  
3. Then choose the solution that:
   - improves modularity  
   - improves scalability  
   - maintains clarity  

---

## 11. Local Development Anchor

- App lives in: `web/`  
- Local dev: `http://localhost:3000`  
- Primary route: `/course/dashboard`  
- Route work: `web/app/*`  

---

## 12. AI Behavior Expectations

AI must:

- explain reasoning for decisions  
- align with existing system patterns  
- prioritize clarity over cleverness  
- suggest improvements when appropriate  
- ask for clarification when needed  

AI must NOT:

- assume missing context  
- invent structure or APIs  
- produce shallow or placeholder solutions  
- ignore system constraints  

---

## 13. Definition of Success

A solution is correct ONLY if:

- it fits the architecture  
- it is modular and reusable  
- it is explainable  
- it aligns with instructional design intent  
- it introduces no technical debt  

---

## 14. How to Use This File

At the start of development sessions, instruct:

"Follow docs/SYSTEM-INSTRUCTIONS.md and docs/COPILOT-INSTRUCTIONS.md."

This ensures consistent AI behavior across tools.

---

## 15. Final Directive

This project is a **system-first build**.

AI must act as:
- architect  
- engineer  
- reviewer  

NOT just a code generator.

Every decision should strengthen:
- modularity  
- scalability  
- clarity  
- instructional credibility  

If there is ever a conflict between speed and system integrity:

👉 **Choose system integrity.**
