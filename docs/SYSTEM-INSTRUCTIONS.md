# SYSTEM-INSTRUCTIONS

## Purpose

This file orchestrates how AI tools (Codex, Copilot, ChatGPT) should operate within the **future_of_id** project.

It defines:
- which documents are authoritative
- how decisions should be made
- how to interpret architecture, content, and system structure

This file should be explicitly referenced at the start of meaningful development sessions.

---

## Source of Truth Hierarchy

AI must prioritize project documents in the following order:

### Tier 1 — Core System Contracts (Always Follow)

1. docs/architecture/CONTENT_ARCHITECTURE.md → defines module structure and learning model
2. docs/architecture/SITE_MAP.md → defines routing and page hierarchy
3. docs/architecture/TECH_ARCHITECTURE.md → defines stack and technical boundaries

These files represent the **non-negotiable structure of the system**.

---

### Tier 2 — Strategic Constraints

4. docs/strategy/DECISIONS.md → locked decisions and constraints
5. docs/strategy/BLUEPRINT.md → vision, learning architecture, and experience intent

Use these to guide implementation decisions and resolve ambiguity.

---

### Tier 3 — Supporting Context

6. docs/strategy/ROADMAP.md → sequencing and development phases
7. README.md → high-level overview and positioning
8. docs/reference/INITIAL_REPO_STRUCTURE.md → initial structural reference

These are helpful but should not override Tier 1 or Tier 2.

---

## Core Operating Rules

When working in this repo, AI must:

- Follow Tier 1 documents as the primary system definition
- Align all work with existing architecture and patterns
- Avoid introducing new patterns without strong justification
- Prefer modular, reusable, scalable solutions
- Keep content, UI, logic, and configuration clearly separated

---

## Development Workflow Expectations

For any meaningful feature or change:

1. Review relevant Tier 1 and Tier 2 documents
2. Propose structure before implementation (for multi-file or architectural changes)
3. Implement using existing patterns where possible
4. Explain reasoning when making structural decisions

---

## Architectural Discipline

- Do not invent new architecture if a pattern already exists
- Do not mix concerns (content, UI, logic, data) unnecessarily
- Prefer config-driven and modular approaches
- Keep route files thin and compositional
- Reuse components before creating new ones

---

## Content System Rules

- Follow the 3-layer model:
  1. Theory
  2. Experience
  3. Reverse Engineering

- Do not hardcode learning content inside reusable UI components
- Keep content modular and scalable
- Prefer structured data where reuse is beneficial

---

## Conflict Resolution

If conflicts occur:

1. Check Tier 1 documents first
2. Then check Tier 2 documents
3. If still unclear, choose the solution that:
   - improves scalability
   - aligns with modular architecture
   - maintains clarity and maintainability

---

## How to Use This File

At the start of a development session, the user should instruct:

"Read docs/SYSTEM-INSTRUCTIONS.md and follow it along with docs/COPILOT-INSTRUCTIONS.md."

AI tools will not automatically remember this file across sessions and must be prompted to reference it.

---

## Final Directive

Every change should move the project toward a:

- modular
- scalable
- maintainable
- instructionally credible
- portfolio-grade learning platform

If there is a conflict between speed and architecture, choose architecture.
