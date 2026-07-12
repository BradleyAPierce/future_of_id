# Documentation Inventory

## Purpose

This document inventories the current Future of ID documentation ecosystem and classifies each document against the intended documentation architecture.

It is a planning document. It does not move, delete, rename, merge, or archive files. Its purpose is to make the current state visible before any reorganization happens.

## Inventory Table

| Document | Current Location | Proposed Domain | Recommended Action | Rationale | Notes / Dependencies |
|---|---|---|---|---|---|
| `README.md` | Root | Root README | Review | Should become the public-facing entry point with project overview, value, setup, and links. | Needs comparison against `READMEV2.md` and `READMEV3.md` before consolidation. |
| `READMEV2.md` | Root | Archive / Superseded | Merge | Appears to preserve earlier project vision, audience, course theme, seven capabilities, experience model, and stack notes. | Extract strongest public-facing and strategy material before archiving or removing later. |
| `READMEV3.md` | Root | Archive / Superseded | Merge | Appears to combine product story, features, philosophy, tech stack, Reverse Engineering language, and setup instructions. | Preserve useful positioning/setup language; update terminology later where product-facing language should use Reverse Build. |
| `web/README.md` | `web/` | Implementation / Contributor Guidance | Review | Appears to be a default app-level README for running/deploying the Next.js app. | Decide whether local setup belongs here, root README, or both. Avoid duplicate setup drift. |
| `DOCUMENTATION_ARCHITECTURE.md` | `docs/` | Documentation Governance | Keep | Defines intended documentation domains, README responsibilities, decision rules, and reorganization phases. | Should stay linked from `docs/README.md`. It is governance/planning, not the hub itself. |
| `DOCUMENTATION_INVENTORY.md` | `docs/` | Documentation Governance | Keep | Inventories current documentation and classifies each file before migration. | Should be updated before and after major documentation moves. |
| `SYSTEM-INSTRUCTIONS.md` | `docs/` | Implementation / Contributor Guidance | Keep | Defines source-of-truth hierarchy, operating principles, workflow expectations, terminology, and AI assistant behavior. | Must be updated after any file moves. Strong dependency on final docs map. |
| `COPILOT-INSTRUCTIONS.md` | `docs/` | Implementation / Contributor Guidance | Keep | Provides coding assistant guidance for architecture, file structure, naming, TypeScript, validation, UX, and AI integration. | Should stay aligned with `SYSTEM-INSTRUCTIONS.md`. Update references after reorganization. |
| `COMPONENT_ARCHITECTURE_V1.md` | `docs/` | Design System | Move | Defines component tiers, Surface hierarchy, reusable UI components, learning components, AI components, dashboard components, and Figma/React mapping. | Move together with `DESIGN_SYSTEM.md` and `DESIGN_SYSTEM_CHANGELOG.md`, or do not move yet. Update links before moving. |
| `LANDING_PAGE_STRATEGY.md` | `docs/` | Strategy | Move | Root-level strategy file likely belongs with product/landing strategy. | Confirm whether it is current or superseded before moving to `docs/strategy/`. |
| `CONTENT_ARCHITECTURE.md` | `docs/architecture/` | Architecture | Keep | Defines content model, module structure, theory/experience/Reverse Build/reflection patterns, and tone requirements. | Also depends on experience docs; cross-link later from `docs/experience/`. |
| `DESIGN_SYSTEM.md` | `docs/architecture/` | Design System | Move | Governs visual/UX principles, typography, spacing, surfaces, buttons, dashboard/module guidance, color/token usage, motion, and accessibility. | Move together with `COMPONENT_ARCHITECTURE_V1.md` and `DESIGN_SYSTEM_CHANGELOG.md`, or do not move yet. |
| `DESIGN_SYSTEM_CHANGELOG.md` | `docs/architecture/` | Design System | Move | Tracks design-system milestones, token/component changes, React alignment, and stabilization. | Move together with `DESIGN_SYSTEM.md` and `COMPONENT_ARCHITECTURE_V1.md`, or do not move yet. |
| `SITE_MAP.md` | `docs/architecture/` | Architecture | Keep | Defines top-level pages, module slugs, page-level flow, dashboard, and completion page structure. | Should be checked against current routes during a later audit. |
| `TECH_ARCHITECTURE.md` | `docs/architecture/` | Architecture | Keep | Defines recommended stack, app architecture, backend direction, data domains, AI opportunities, content storage, analytics, and non-goals. | Authoritative for technical architecture. May cross-link to AI docs later. |
| `ADR-009-ai-feedback-engines.md` | `docs/decisions/` | Decisions | Keep | Captures AI feedback engine architecture, findings, decisions, reopen criteria, and current status. | Keep as decision history; do not rewrite as general AI guidance. |
| `EXPERIENCE_PHILOSOPHY.md` | `docs/experience/` | Experience | Keep | Defines product feel, learner agency, experience principles, learning loop, AI experience posture, and quality checklist. | Authoritative for product experience feel. Should be linked from docs hub and visual communication doc. |
| `VISUAL_COMMUNICATION_SYSTEM.md` | `docs/experience/` | Experience | Keep | Defines visual communication philosophy, visual hierarchy, visual asset types, learning-intent patterns, diagram standards, and consistency rules. | Could later link to page-pattern, motion, and signature-moment docs. |
| `LEARNING_FRAMEWORK_LIBRARY.md` | `docs/experience/` | Experience | Keep | Defines the product philosophy for Future of ID's reusable learning frameworks, mental models, emotional jobs, and memorable lines. | Should guide framework use across homepage, Orientation, modules, Reverse Build, presentations, and future learning artifacts. |
| `ORIENTATION_EXPERIENCE_STORYBOARD.md` | `docs/experience/` | Experience | Keep | Defines the six-act Orientation learner experience before UI implementation. | Supports Orientation as shared-vocabulary and conceptual onboarding rather than traditional course onboarding. |
| `INITIAL_REPO_STRUCTURE.md` | `docs/reference/` | Archive / Superseded | Archive | Captures an initial structure snapshot, useful as historical/reference material rather than current architecture. | Mark as historical before moving or archiving. Do not treat as current source of truth. |
| `BLUEPRINT.md` | `docs/strategy/` | Strategy | Keep | Defines project name, type, purpose, goals, learning objective, audience, design principles, learning architecture, MVP scope, and future enhancements. | Primary product and learning vision source of truth. |
| `DECISIONS.md` | `docs/strategy/` | Decisions | Move | Contains locked decisions, preferred technical direction, open decisions, and recommendations. | Consider moving to `docs/decisions/` or splitting stable decisions from strategy notes. |
| `FUTURE_READY_CAPABILITY_MODEL.md` | `docs/strategy/` | Strategy | Keep | Defines the canonical capability development system, reusable method and learning architecture, current seven-capability pathway, research basis, and capability rationale. | Authoritative for capability philosophy and positioning. Other documents should reference it rather than create competing definitions. |
| `PROJECT-BRAIN.md` | `docs/strategy/` | Archive / Superseded | Archive | Broad project brain with purpose, philosophy, stack, architecture, AI strategy, standards, and AI assistant instructions. | Much content now exists in more specific docs. Preserve historical context; avoid using as active source of truth unless refreshed. |
| `ROADMAP.md` | `docs/strategy/` | Strategy | Keep | Defines roadmap status, completed foundation, current phase, next phase, later phase, and future phases. | Should be reviewed after major architecture/content milestones. |
| `STRATEGY.md` | `docs/strategy/` | Strategy | Keep | Captures product strategy, vision notes, current/historical state, sharing, pricing, content, acquisition, and principles. | Contains historical snapshot; preserve but label current vs historical clearly if needed. |
| `EXPERIENCE_ARCHITECTURE.md` | `docs/strategy/` | Strategy | Keep | Defines the intended learner experience, autonomy model, progress philosophy, AI role, experience language, and success criteria. | Current strategy-level experience north star; should be cross-linked from experience docs if the documentation map is updated. |
| `AI_INTERPRETABILITY.md` | `docs/strategy/` | Strategy | Keep | Defines AI interpretability as a product experience principle: pages should be readable by humans and teachable by AI/browser assistants. | Should guide Orientation, module, Reverse Build, framework placement, and future browser-AI review work. |
| `scenario-engine-validation-log.md` | `docs/validation/` | Validation | Keep | Captures scenario engine validation timeline, evidence, final decision, and retest guidance. | Linked to ADR-009 and AI behavior docs later. |
| `.DS_Store` | `docs/` | Archive / Superseded | Archive | System artifact, not documentation. | Remove in a cleanup pass only if approved; consider adding ignore coverage if missing. |
| `docs/README.md` | `docs/` | Documentation Hub | Keep | Serves as the central documentation map and reading-order guide. | Exists and should stay aligned with the documentation architecture and inventory. |
| `docs/archive/` or `docs/reference/` strategy | Not currently finalized | Archive / Reference | Review | Needed to decide where historical, superseded, or reference-only docs should live. | Finalize before moving `INITIAL_REPO_STRUCTURE.md`, `PROJECT-BRAIN.md`, or alternate README content. |
| `docs/design-system/README.md` | Not currently present | Design System | Create | Needed if design-system docs move into their own domain. | Should map tokens, design system, component architecture, changelog, and Figma/React alignment. |
| `docs/ai/README.md` | Not currently present | AI | Create | Needed before AI behavior, prompt architecture, and AI interaction patterns split from architecture/experience. | Should distinguish AI experience from AI implementation. |
| `docs/decisions/README.md` | Not currently present | Decisions | Create | Needed to explain ADRs and decision log conventions. | Should clarify relation between ADR files and older `DECISIONS.md`. |
| `docs/validation/README.md` | Not currently present | Validation | Create | Needed to explain validation logs, audits, and QA/readiness reviews. | Useful once more audits accumulate. |
| `PAGE_EXPERIENCE_PATTERNS.md` | Future document | Experience | Create | Expected future doc for reusable page and module experience patterns. | Should build on `EXPERIENCE_PHILOSOPHY.md`, `VISUAL_COMMUNICATION_SYSTEM.md`, and `CONTENT_ARCHITECTURE.md`. |
| `AI_EXPERIENCE_SYSTEM.md` | Future document | Experience / AI | Create | Expected future doc for AI states, trust cues, feedback UX, errors, and learner-facing AI behavior. | Decide whether primary home is `docs/experience/` with links to `docs/ai/`, or vice versa. |
| `SIGNATURE_MOMENTS.md` | Future document | Experience | Create | Expected future doc for memorable learner milestones such as orientation completion, first AI feedback, module completion, dashboard progress, and course completion. | Should avoid gamification and align with experience philosophy. |

## Current Gaps

The documentation system is not ready for migration until these gaps are resolved or intentionally deferred:

- `docs/design-system/` does not exist yet.
- `docs/ai/` does not exist yet.
- Folder-level README files do not exist yet for active documentation domains.
- The archive/reference strategy is not finalized yet.
- Files referenced by `SYSTEM-INSTRUCTIONS.md` and `COPILOT-INSTRUCTIONS.md` should not move until a link/reference update pass is planned.

## README File Evaluation

### `README.md`

`README.md` should become the single root public-facing README. It should be concise and should not attempt to contain the entire architecture manual.

Recommended later action: review and consolidate. Keep the strongest public-facing overview, setup instructions, project purpose, and documentation links.

### `READMEV2.md`

`READMEV2.md` appears to be an earlier project overview with useful strategy and course-definition material. It should not remain as a competing root README long term.

Recommended later action: merge useful content into the root `README.md`, `docs/README.md`, or relevant strategy docs, then archive or remove after approval.

### `READMEV3.md`

`READMEV3.md` appears to be a later README draft with richer project story, feature description, philosophy, architecture exploration, and local development notes. It also contains terminology that may need alignment with the current Reverse Build product language.

Recommended later action: merge useful positioning/setup content into the root `README.md` and docs hub, then archive or remove after approval.

## Documentation Dependency Map

High-level documentation relationships:

- `README.md` → `docs/README.md`
- `docs/README.md` → `docs/strategy/`, `docs/architecture/`, `docs/experience/`, `docs/design-system/`, `docs/ai/`, `docs/decisions/`, `docs/validation/`
- `docs/DOCUMENTATION_ARCHITECTURE.md` → `docs/DOCUMENTATION_INVENTORY.md` → future reorganization plan
- `docs/strategy/BLUEPRINT.md` → `docs/experience/EXPERIENCE_PHILOSOPHY.md` → `docs/experience/VISUAL_COMMUNICATION_SYSTEM.md` → future `docs/experience/PAGE_EXPERIENCE_PATTERNS.md`
- `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md` → `docs/architecture/CONTENT_ARCHITECTURE.md` → module content and page experience patterns
- `docs/architecture/TECH_ARCHITECTURE.md` → `docs/COMPONENT_ARCHITECTURE_V1.md` → implementation guidance in `docs/SYSTEM-INSTRUCTIONS.md` and `docs/COPILOT-INSTRUCTIONS.md`
- `docs/architecture/DESIGN_SYSTEM.md` → `docs/COMPONENT_ARCHITECTURE_V1.md` → `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md`
- `docs/architecture/CONTENT_ARCHITECTURE.md` → module/page learning patterns → future page experience docs
- `docs/decisions/ADR-009-ai-feedback-engines.md` → `docs/validation/scenario-engine-validation-log.md` → future AI behavior and AI experience docs
- `docs/SYSTEM-INSTRUCTIONS.md` ↔ `docs/COPILOT-INSTRUCTIONS.md` → all active source-of-truth docs

## Source of Truth Guidance

Use these documents as authoritative starting points by decision type:

| Decision Type | Primary Source of Truth | Supporting Sources |
|---|---|---|
| Public launch-readiness scope, order, gates, and approval | `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` | Architecture, experience, validation, and external review evidence as referenced by the checklist |
| Capability development system philosophy and current-pathway positioning | `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md` | `docs/strategy/BLUEPRINT.md`, `docs/strategy/DECISIONS.md`, public content derived from the canonical positioning |
| Product vision | `docs/strategy/BLUEPRINT.md` | `docs/strategy/STRATEGY.md`, `README.md` |
| Learning architecture | `docs/strategy/BLUEPRINT.md` | `docs/architecture/CONTENT_ARCHITECTURE.md`, `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md` |
| Technical architecture | `docs/architecture/TECH_ARCHITECTURE.md` | `docs/SYSTEM-INSTRUCTIONS.md`, `docs/COPILOT-INSTRUCTIONS.md` |
| Content model | `docs/architecture/CONTENT_ARCHITECTURE.md` | `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md` |
| Experience philosophy | `docs/experience/EXPERIENCE_PHILOSOPHY.md` | `docs/strategy/BLUEPRINT.md`, `docs/architecture/CONTENT_ARCHITECTURE.md` |
| Visual communication | `docs/experience/VISUAL_COMMUNICATION_SYSTEM.md` | `docs/architecture/DESIGN_SYSTEM.md` |
| AI behavior | `docs/decisions/ADR-009-ai-feedback-engines.md` | `docs/validation/scenario-engine-validation-log.md`, future `docs/ai/` docs |
| Design system | `docs/architecture/DESIGN_SYSTEM.md` | `docs/COMPONENT_ARCHITECTURE_V1.md`, `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md` |
| Implementation guidance | `docs/SYSTEM-INSTRUCTIONS.md` | `docs/COPILOT-INSTRUCTIONS.md`, `web/README.md`, `docs/architecture/TECH_ARCHITECTURE.md` |
| Contributor and AI assistant workflow | `docs/SYSTEM-INSTRUCTIONS.md` | `docs/COPILOT-INSTRUCTIONS.md`, future contributor-facing standards |
| Decision history | `docs/decisions/ADR-009-ai-feedback-engines.md` | `docs/strategy/DECISIONS.md`, `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md` |

## Recommended Reorganization Sequence

1. Finalize README strategy.
2. Keep `docs/README.md` current as the documentation hub.
3. Decide root README consolidation using the strongest parts of `README.md`, `READMEV2.md`, and `READMEV3.md`.
4. Move strategy docs only after the target docs hub exists.
5. Move architecture docs only after links and source-of-truth references are mapped.
6. Keep experience docs under `docs/experience/`.
7. Create folder-level README files for active domains.
8. Update links in README files, system instructions, Copilot instructions, and cross-domain docs before moving files that those instructions reference.
9. Archive superseded files only after their useful content has been merged or intentionally preserved elsewhere.
10. Run a final duplication and staleness review.

## Risks to Avoid

- Moving files before dependency mapping is clear.
- Keeping competing README versions too long.
- Creating duplicate sources of truth for product vision, design system, AI behavior, or implementation guidance.
- Breaking internal links during file moves.
- Burying important public-facing information too deep inside `docs/`.
- Making the root README too long.
- Making `docs/README.md` too vague to guide a real reader.
- Treating historical documents as current instructions without labeling them.
- Splitting AI guidance across experience, architecture, and decisions without clear ownership.
- Moving design-system files before deciding whether `docs/design-system/` should become the canonical home.
