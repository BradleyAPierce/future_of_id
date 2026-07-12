# CONTENT_ARCHITECTURE.md

## Content Model Philosophy

Content should be modular, reusable, and scalable. Each module should support three layers:

1. Theory
2. Experience
3. Reverse Build

Reflection follows the three core content layers as the transfer and closure pattern. Together, Theory, Experience, Reverse Build, and Reflection form the reusable learning architecture defined in `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md`.

## Capability Pathway Reuse

The current seven modules implement Bradley's launch pathway; they do not permanently define Future of ID. Another practitioner may replace capabilities, add capabilities, or create a different pathway based on role, responsibilities, organization, industry, career direction, and professional goals.

The pathway may change while the learning architecture remains stable:

1. Theory
2. Experience, including applied practice and feedback
3. Reverse Build
4. Reflection

This is content and architecture portability, not automatic personalization. The current platform does not diagnose capability needs, recommend capability selections algorithmically, or generate adaptive learning plans.

## Orientation Module Structure

### Purpose

Introduce the capability development system, establish credibility, and frame Bradley's current seven capabilities as its first complete demonstration.

### Core Sections

- What is changing in instructional design?
- Why these seven capabilities?
- How this course works
- How progress is tracked
- What learners will do in each module

## Standard Module Structure

### Layer 1: Theory

- capability definition
- why it matters
- industry trends
- demand signals
- instructional design implications
- L&D framework tie-ins
- evidence and source notes when substantive claims rely on established principles or current external evidence

### Layer 2: Experience

- interactive demo, simulation, tool, or guided activity
- applied decision-making or exploration
- feedback or insight layer

### Layer 3: Reverse Build

Reverse Build is the user-facing product layer that exposes the reverse engineering, design rationale, and implementation decisions behind the experience.

- instructional strategy
- theory alignment
- content structure
- prompt architecture
- technical implementation notes
- design rationale

## L&D Theory Bridge

Each module should explicitly connect to traditional learning frameworks when relevant, such as:

- ADDIE
- SAM
- Bloom's Taxonomy
- Kirkpatrick
- Gagné's Nine Events
- 70-20-10
- experiential learning
- performance improvement / HPI
- learner-centered design

## Evidence Classification in Module Content

Module content should distinguish evidence by purpose rather than presenting every statement with the same authority:

1. **Bradley's professional pathway selection** explains why a capability belongs in his current demonstrated pathway. It should point to the canonical selection rationale and should not claim external validation.
2. **Established learning principles** identify the framework, model, or research foundation supporting an instructional concept. Source notes should include author or organization, title, and year where appropriate.
3. **Current industry or technology evidence** supports time-sensitive claims about professional practice, AI adoption, role expectations, technology shifts, or analytics. Source notes must identify the source and date and qualify the finding's scope.
4. **Bradley's professional interpretation** identifies applied observations, design philosophy, and professional judgment. These statements should be attributed or labeled rather than presented as universal research facts.

The existing `ModuleContent` section and item structures are sufficient for concise evidence and source notes. Section 3.6 does not require a new citation database, automated evidence system, content type, API, or interaction. Structured citation metadata would require a separate implementation decision.

## Suggested Theory Pairings by Module

### AI Literacy

- ADDIE (modernized workflow support)
- Bloom's Taxonomy (generation vs evaluation)
- learner-centered design

### Performance Consulting

- HPI / performance improvement
- Kirkpatrick
- needs analysis

### Learning Analytics

- Kirkpatrick
- evaluation strategy
- evidence-based iteration

### Simulation Design

- experiential learning
- deliberate practice
- Bloom's application/evaluation
- scenario-based learning

### Adaptive Learning

- mastery learning
- differentiated instruction
- learner variability

### Content Systems

- curriculum architecture
- modular design
- reusable learning objects

### Human-Centered Change

- change management
- inclusive design
- ethical design
- psychological safety / trust

## Assessment / Reflection Pattern

Each module should end with one of the following:

- quick reflection prompt
- scenario judgment item
- short self-assessment
- design decision challenge
- knowledge check

## Tone Requirements

- credible, thoughtful, modern
- approachable without sounding simplistic
- reflective of both strategic L&D and hands-on design practice
