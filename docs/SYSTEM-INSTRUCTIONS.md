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

### Special Authority — Public Launch Readiness

For any work described, requested, or scheduled as public launch readiness, `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` is the authoritative execution process. It controls launch scope, required sequencing, evidence, gates, and approval. The checklist takes priority over unrelated roadmap initiatives during launch readiness.

Core architecture documents still govern how checklist-approved work is implemented. Claude reviews, Grok reviews, and other external evaluations are advisory evidence only. They do not override or replace the launch checklist and do not create separate official launch gates. Bradley evaluates their recommendations against the product philosophy, architecture, learner experience, and professional integrity standard.

After Bradley approval, `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md` controls how non-trivial implementation assignments are defined and executed, blocked, reported, evidenced, and closed. Coding may begin only when the applicable work order is **Approved for Implementation**. Draft or Under Review work orders authorize planning and review only; Blocked, Superseded, and Cancelled work orders prohibit continued implementation. Applicable approved product briefs and their acceptance criteria continue to define product behavior, while `docs/validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` governs validation status, evidence meaning, defects, and retesting.

### Tier 1 — Core System Contracts (Non-Negotiable)

1. `docs/architecture/CONTENT_ARCHITECTURE.md` → module structure and learning model  
2. `docs/architecture/SITE_MAP.md` → routing and page hierarchy  
3. `docs/architecture/TECH_ARCHITECTURE.md` → stack and technical boundaries  
4. `docs/architecture/DESIGN_SYSTEM.md` → visual, UX, token, typography, spacing, surface, and interaction-feel rules
5. `docs/COMPONENT_ARCHITECTURE_V1.md` → reusable component inventory, variants, states, and Figma-to-React mapping

These define the **core structure of the system** and must always be followed.

---

### Tier 2 — Strategic Constraints

6. `docs/strategy/DECISIONS.md` → locked constraints and decisions
7. `docs/strategy/BLUEPRINT.md` → product vision and experience design
8. `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md` → canonical capability development system philosophy and current-pathway positioning

Used to guide implementation decisions and resolve ambiguity.

---

### Tier 3 — Supporting Context

9. `docs/strategy/ROADMAP.md` → long-term product phases and sequencing outside the authoritative launch-readiness order
10. `docs/strategy/LANDING_PAGE_STRATEGY.md` → public landing-page positioning and messaging
11. `docs/reference/INITIAL_REPO_STRUCTURE.md` → historical structural reference
12. `README.md` → project overview

### Evidence and Decision Records

- `docs/decisions/*` → architecture decision records
- `docs/validation/*` → validation notes and test evidence
- `docs/claudefeedback/*` and `docs/grokfeedback/*` → external advisory analysis and recommendations

Helpful context, but must not override Tier 1 or Tier 2.

### Approved Implementation Governance

- `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md` → work-order structure, status, scope, architecture reasoning, validation planning, blocking, scope-change control, result reporting, consolidated evidence, and closure
- applicable approved briefs under `docs/experience/` → authoritative product behavior and acceptance criteria
- `docs/validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` → validation execution, evidence, severity, retest, and completion rules

An implementation work order cites these sources; it does not rewrite or override them. If an assignment requires a product-contract or acceptance-criterion change, reopen the controlling source through governance before coding that change.

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

All modules must follow three core content layers plus Reflection:

1. Theory  
2. Experience  
3. Reverse Build
4. Reflection

Reverse Build is the user-facing product term for the layer that reveals the reverse engineering, design rationale, instructional strategy, prompt architecture, and implementation decisions behind each experience.

Current launch content is primarily structured TypeScript under `web/content/` and `web/data/`. Continue using the existing structured content model unless an approved work order and governing architecture source authorize a different format. MDX remains a possible future option for long-form content; it is not a current implementation requirement.

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
- local browser persistence for the current public launch scope
- no accounts, authentication, or Supabase dependency in the current public launch scope
- Supabase, cloud persistence, account synchronization, and authentication remain possible future architecture
- OpenAI (AI features)  

Do not introduce new frameworks without justification.

---

### Routing Constraints

Follow:

- `/course/module/[slug]` for the current implemented module route

`/course/module/[slug]/experience` and `/course/module/[slug]/reverse-engineering` are optional future routes documented in `docs/architecture/SITE_MAP.md`; they are not current implementation requirements. Do not add or restructure routes unless an approved work order authorizes the change. Technical route names may remain unchanged even when user-facing labels use **Reverse Build**.

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
- If the task is related to public launch readiness, read `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` first and confirm that the work is the next approved execution item
- For non-trivial implementation, read the applicable approved work order and confirm its status is **Approved for Implementation**; do not code from a Draft or Under Review work order, and do not continue from a Blocked, Superseded, or Cancelled work order
- Identify controlling sources, applicable acceptance criteria, and affected files and systems

---

### Step 2 — System Alignment
Ensure the solution follows:
- modular architecture  
- separation of concerns  
- the current structured content strategy
- existing patterns  

---

### Step 3 — Planning (Required for non-trivial work)
- Propose structure before coding  
- Identify reusable components  
- Identify data structures  
- Confirm the plan remains within authorized scope and explicit non-goals

---

### Step 4 — Implementation
- Write clean, modular code  
- Avoid shortcuts  
- Follow existing patterns  
- Stop and request an approved scope amendment before making an unlisted or contract-changing implementation change

---

### Step 5 — Validation
Confirm:

- no hardcoded content  
- components are reusable  
- architecture is preserved  
- solution aligns with system docs  
- every applicable criterion has the required validation method and evidence status
- failed, blocked, not-run, unavailable, and governance-approved not-applicable checks remain visible in their correct fields

### Step 6 — Completion Reporting
- Provide the exact changed-file summary and observable behavior delivered
- Report every planned build, lint, type, test, and manual check with its method, environment, result, and evidence reference
- Distinguish implementation completion from validation approval
- Report absent applicable test commands as **Command availability: unavailable** with result **Not run**, unless governance approved **Not applicable through approved governance**; never report them as Passed
- Identify remaining defects, blocked criteria, scope amendments, and required follow-up

---

AI must not skip these steps for meaningful development.

---

## 8. Development Workflow Expectations

For any feature or change:

1. Review Tier 1 and Tier 2 docs  
2. For non-trivial implementation, confirm an approved work order under `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md`
3. Align with architecture and applicable approved briefs
4. Plan structure, validation, and evidence
5. Implement using existing patterns and authorized scope
6. Validate against system rules and applicable criteria
7. Submit the required completion and result report

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

For implementation work, resolve conflicts in this authority order:

1. Public Launch Readiness Checklist where it establishes launch requirements or approval status
2. Approved implementation brief controlling the feature
3. Approved implementation work order
4. Approved validation and evidence brief for validation meaning
5. Tier 1 canonical strategy and architecture sources
6. Tier 2 supporting documentation
7. ADRs and approved local decisions within their scope
8. Architectural preference only when no controlling decision exists

Contributors must not choose a lower-authority source over a higher-authority approved source. Advisory, draft, historical, or superseded documents cannot override approved sources. If the hierarchy does not resolve a material conflict, set the work order to **Blocked**, report the affected sources, criteria, and required decision, and pause implementation. **Blocked**, **Superseded**, and **Cancelled** work orders prohibit implementation.

---

## 11. Local Development Anchor

- App lives in: `web/`  
- Local dev: `http://localhost:3000`  
- Primary route: `/course/dashboard`  
- Route work: `web/app/*`  

---

## 12. Shared Terminology

- **Capability** = one conceptual framework area in the seven-capability model
- **Module** = one guided course delivery unit
- **Platform** = the full Future of ID product
- **Guided course** = the first major product surface inside the platform
- **Design system** = visual and UX principles, tokens, typography, spacing, surfaces, and interaction feel
- **Component architecture** = reusable component inventory, variants, states, and Figma-to-React mapping

---

## 13. AI Behavior Expectations

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

## 14. Definition of Success

A solution is correct ONLY if:

- it fits the architecture  
- it is modular and reusable  
- it is explainable  
- it aligns with instructional design intent  
- it introduces no technical debt  

---

## 15. How to Use This File

At the start of development sessions, instruct:

"Follow docs/SYSTEM-INSTRUCTIONS.md, docs/COPILOT-INSTRUCTIONS.md, docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md, and the approved work order for this assignment."

This ensures consistent AI behavior across tools.

---

## 16. Final Directive

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
