# HOMEPAGE_COMPONENT_PLAN.md

## 1. Purpose

This plan maps the homepage experience moments and layout sections into reusable component responsibilities before implementation begins.

It translates the Homepage Layout Blueprint into a component architecture plan that can guide future React work without writing React code, CSS, or visual design files.

The goal is to define what each future component should own, what should remain reusable across the platform, what should stay landing-specific, and what data each component will likely need.

## 2. Component Planning Principles

- Components should serve the experience, not drive it.
- Prefer reusable platform patterns when a pattern is likely to recur in orientation, dashboard, module pages, Reverse Build sections, or case-study pages.
- Keep landing-specific components landing-specific when their job is unique to the homepage.
- Avoid over-abstracting too early.
- Separate content, layout, and visual logic.
- Avoid card-grid dependency as the default communication pattern.
- Preserve existing design-system primitives before introducing new visual structure.
- Components should make the homepage easier to understand, not merely easier to assemble.

## 3. Proposed Component Hierarchy

```text
Homepage
├── HomepageHero
├── GuidedPathSection
├── LearningLoopSection
│   └── LearningLoopVisual
├── CapabilityMapSection
│   └── CapabilityMap
├── ExperienceJourneySection
│   └── ExperienceJourney
├── DifferenceSection
│   └── DifferenceComparison
├── ReverseBuildPreviewSection
│   └── ReverseBuildPreview
└── HomepageCTA
```

The page-level `Homepage` should remain a composition layer. It should import structured homepage content and compose section-level components in the approved layout order.

Section components should own section framing and hierarchy. Visual components should own reusable explanatory models. Design-system primitives such as `Surface`, `Button`, `Badge`, and `SectionHeader` should remain the foundation for visual consistency.

## 4. Component Responsibility Table

| Component | Experience Moment | Responsibility | Reusable? | Landing-Only? | Data Needs | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `Homepage` | Full sequence | Compose the approved section order and pass structured content into child components. | No | Yes | Full homepage content model. | Should remain orchestration, not contain large inline UI blocks. |
| `HomepageHero` | Awareness | Introduce the field-level shift, platform promise, primary CTA, secondary CTA, and hero/product visual. | Partial | Yes | Hero headline, support copy, CTA metadata, visual metadata, proof points if retained. | Should not become a generic marketing hero. |
| `GuidedPathSection` | Hope | Show Future of ID as a practical path into the shift without implying one required technical route. | Partial | Yes | Path steps, short intro, optional CTA. | May later inform orientation onboarding, but homepage framing is specific. |
| `LearningLoopSection` | Understanding | Frame the learning-loop explanation and provide section-level copy. | Partial | No | Section intro, optional CTA, visual data. | Could be reused in orientation with different copy. |
| `LearningLoopVisual` | Understanding | Show Theory -> Experience -> Reverse Build -> Reflection as a clear visual model. | Yes | No | Four learning-loop steps with labels, meanings, descriptions, and optional icons. | Strong platform-wide candidate. |
| `CapabilityMapSection` | Confidence | Frame Bradley's current seven-capability demonstration without overexplaining each capability. | Partial | No | Section intro, capability map data, optional CTA. | Should defer the canonical system definition to the capability model and deeper pathway context to orientation. |
| `CapabilityMap` | Confidence | Show Bradley's seven capabilities as a connected current pathway. | Yes | No | Seven capability labels, short titles, focus terms, relationships or grouping metadata. | Reusable in orientation, dashboard, and capability overview contexts without implying a universal framework. |
| `ExperienceJourneySection` | Confidence + Trust | Frame the learner journey through orientation, modules, practice, feedback, Reverse Build, reflection, and progress. | Partial | No | Section intro, journey steps, optional CTA. | Could support onboarding and dashboard education later. |
| `ExperienceJourney` | Confidence + Trust | Visualize the learner path through the platform. | Yes | No | Journey steps, labels, descriptions, optional status or sequencing metadata. | Should not become a dashboard replica. |
| `DifferenceSection` | Trust | Frame the platform's anti-hype and practical-positioning contrast. | Partial | Yes | Comparison pairs or principle items. | Section framing is homepage-specific, but comparison pattern may recur. |
| `DifferenceComparison` | Trust | Show what Future of ID is and is not through concise contrasts. | Partial | No | Comparison pairs, labels, descriptions. | Reusable on About or positioning pages if kept generic. |
| `ReverseBuildPreviewSection` | Trust | Introduce Reverse Build as a signature product concept and credibility signal. | Partial | No | Section intro, preview items, optional CTA. | Should connect rationale to implementation without dense architecture detail. |
| `ReverseBuildPreview` | Trust | Show how learners can inspect design rationale, constraints, tradeoffs, and implementation decisions. | Yes | No | Preview items, annotations, rationale/implementation pairs. | Strong reuse candidate for module pages and case studies. |
| `HomepageCTA` | Commitment | Provide the final Start Orientation invitation and optional secondary action. | Partial | Yes | CTA headline, support copy, primary CTA, secondary CTA. | Should stay focused and not introduce new concepts. |

## 5. Platform-Wide Component Candidates

### `LearningLoopVisual`

Future reuse opportunities:

- Orientation: explain how the guided course works.
- Dashboard: remind learners how module work is structured.
- Module pages: reinforce where the learner is in the learning loop.
- Reverse Build sections: connect instructional rationale to the learning sequence.
- Portfolio/case study pages: explain the product's instructional architecture.

### `CapabilityMap`

Future reuse opportunities:

- Orientation: distinguish the reusable capability development system from Bradley's current seven-capability pathway.
- Dashboard: show progress across capability areas.
- Module pages: locate the current module inside Bradley's implemented pathway.
- Reverse Build sections: connect implementation decisions to capability goals.
- About or portfolio pages: explain the product's strategic scope.

### `ExperienceJourney`

Future reuse opportunities:

- Orientation: show what learners will do in the guided course.
- Dashboard: show current progress in the learner journey.
- Module pages: preview the module sequence and completion flow.
- Completion summaries: show what the learner has completed.
- Portfolio/case study pages: explain the learner experience flow.

### `ReverseBuildPreview`

Future reuse opportunities:

- Module pages: preview or introduce Reverse Build sections.
- Reverse Build sections: structure rationale, constraints, and implementation notes.
- About page: explain transparency as a product value.
- Portfolio/case study pages: show project evolution and decision history.

### `DifferenceComparison`

Future reuse opportunities:

- About page: clarify positioning.
- Orientation: explain what the course is and is not.
- Portfolio/case study pages: compare traditional course production with learning systems design.

This component should remain simple. If the comparison logic becomes too tied to homepage positioning, keep it landing-specific instead.

## 6. Landing-Specific Components

### `HomepageHero`

`HomepageHero` should remain landing-specific because its purpose is first-contact positioning. It combines product identity, field-level shift, CTA strategy, and a homepage-specific visual. Generalizing it too early could flatten the homepage into generic hero behavior.

### `HomepageCTA`

`HomepageCTA` should remain landing-specific because it closes the Module -1 experience and routes learners into orientation. A general CTA pattern may emerge later, but the homepage CTA should first be optimized for the Start Orientation action.

### Wrapper Sections

`GuidedPathSection`, `DifferenceSection`, and other section wrappers may start as landing-specific. They can be generalized only if the same section pattern appears in orientation, About, or module pages with similar responsibilities.

Do not create broad section abstractions until repeated usage proves they are useful.

## 7. Data and Content Model Needs

Future implementation will likely need structured data for:

- learning loop steps: label, meaning, short description, optional icon, sequence order
- capabilities: number, title, focus, short description, grouping or relationship metadata
- journey steps: label, description, sequence order, optional related route or action
- comparison pairs: positive framing, contrast framing, short explanation
- reverse build preview items: rationale, implementation decision, tradeoff, or annotation label
- CTA metadata: label, href, variant, priority, accessibility label if needed
- hero visual metadata: image source, alt behavior, caption or context if meaningful

Do not create data files yet. First approve the component hierarchy and decide which data belongs in homepage content versus shared platform content.

## 8. Current Component Reuse Audit

### Strong Reuse Candidates

- `Surface`: should remain the foundational visual primitive for contained explanatory moments, previews, and grouped content.
- `Button`: should handle homepage CTAs and preserve route behavior.
- `Badge`: useful for labels such as learning-loop steps, capability numbers, or focus tags when labels improve scanning.
- `SectionHeader`: should remain the default section-heading pattern where a section needs eyebrow, title, description, and optional action.

### Existing Landing Components

- `LandingHero`: current hero behavior is useful but may need to evolve into `HomepageHero` if the new layout requires a stronger Module -1 composition.
- `LandingSection`: useful as a simple wrapper, but may be too generic for the new varied rhythm.
- `LandingCardGrid`: useful as a supporting pattern, but should no longer drive most homepage communication.
- `LandingCapabilityPreview`: may inform `CapabilityMap`, but the new requirement is a connected system visual rather than a two-column list of capability cards.
- `LandingFinalCta`: may inform `HomepageCTA`, but should be reviewed against the final CTA strategy.
- `LandingHeader`: likely reusable as-is unless navigation anchors change with the new layout.

### Current Pattern Risk

The current homepage is clean and maintainable, but it depends heavily on repeated section and card-grid patterns. The redesign should preserve the quality of the primitives while introducing visual explanation components that better support the experience framework.

## 9. Implementation Sequencing

### Phase 1: Update Content Model / Structured Data

- Define the revised homepage content shape.
- Decide what data is homepage-specific and what should become shared platform data.
- Preserve route and CTA destinations.

### Phase 2: Implement Platform-Wide Visuals

- Build `LearningLoopVisual` first.
- Build `CapabilityMap` second.
- Build `ExperienceJourney` third.
- Build `ReverseBuildPreview` after the core explanatory visuals are clear.

### Phase 3: Implement Landing-Specific Sections

- Implement `HomepageHero`.
- Implement `GuidedPathSection`.
- Implement `DifferenceSection`.
- Implement `HomepageCTA`.

### Phase 4: Integrate Into Homepage

- Replace repeated card-grid sections with the approved layout sequence.
- Keep the homepage as a composition layer.
- Preserve navigation and CTA behavior.

### Phase 5: Validate Against Experience Framework

- Confirm the page answers the primary learner question.
- Confirm the scroll moves from awareness to commitment.
- Confirm visual rhythm avoids repeated card-grid dependency.
- Confirm diagrams are readable on mobile.
- Confirm CTAs remain clear and restrained.
- Confirm accessibility requirements are met.

## 10. Risks and Guardrails

- Do not build too many components at once.
- Avoid speculative abstractions.
- Avoid one giant homepage component.
- Avoid hardcoding content inside reusable components.
- Preserve route behavior and CTAs.
- Keep components accessible.
- Keep diagrams readable on mobile.
- Do not introduce unrelated styling churn.
- Do not turn visual components into decorative illustrations.
- Do not make platform-wide components depend on homepage-specific copy.
- Do not remove existing useful primitives when composition changes are enough.

## 11. Implementation Readiness Checklist

React work should not begin until the following are approved:

- component hierarchy
- reusable vs landing-only decisions
- data model needs
- visual pattern priority
- implementation sequence
- validation criteria
- CTA behavior and route destinations
- mobile readability expectations
- accessibility expectations for diagrams and interactive visuals

## 12. Recommended Next Codex Action

Run a current homepage/component audit or create an implementation proposal before code changes.

The next document should confirm which existing landing components should be preserved, adapted, replaced, or retired, and should propose the first safe implementation slice. Only after that should React work begin.
