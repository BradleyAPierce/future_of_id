# HOMEPAGE_LAYOUT_BLUEPRINT.md

## 1. Purpose

This blueprint defines the structural composition of the Future of ID homepage before component planning or implementation begins.

It translates the Homepage Content Model into a scroll experience: section order, layout composition, visual rhythm, CTA placement, density, accessibility expectations, and information hierarchy.

This is not a visual design mockup, Figma file, React plan, CSS plan, or component implementation plan.

## 2. Layout Principle

The homepage layout should support the homepage's role as **Module -1**.

The page should unfold from awareness to commitment. It should feel like the learner's first guided instructional encounter with Future of ID, not a stack of unrelated marketing sections.

The layout should help the visitor move through a clear sequence:

```text
Awareness -> Hope -> Understanding -> Confidence -> Trust -> Commitment
```

Each section should make the next section feel necessary.

## 3. Scroll Experience Overview

The homepage should behave as a guided scroll.

- **Awareness** names the field-level shift without panic.
- **Hope** shows that Future of ID offers a practical path.
- **Understanding** explains how the platform teaches.
- **Confidence** previews what the learner will study.
- **Trust** shows why the platform is credible.
- **Commitment** makes the next step obvious.

The scroll should progressively reduce uncertainty. Early sections answer what this is and why it matters. Middle sections show how the experience works. Later sections establish credibility and invite the learner into orientation.

## 4. Recommended Section Order

### 1. Hero / Awareness

- **Experience moment:** Awareness
- **Primary learner question:** Why is instructional design changing?
- **Content role:** Introduce the field-level shift and position Future of ID as a serious learning platform for instructional designers.
- **Recommended visual structure:** A hero/product visual that signals modern instructional design work, learning systems, or product-level learning experience. The visual should feel instructional and credible, not decorative or generic SaaS.
- **CTA role:** Primary CTA to Start Orientation. Secondary CTA may preview the learning model or capabilities.
- **Layout notes:** The hero should breathe. It can use a centered or split composition, but the message and CTA must remain dominant. Avoid cramming multiple proof points, long explanations, or dense capability detail into the first viewport.

### 2. Guided Path / Hope

- **Experience moment:** Hope
- **Primary learner question:** Is there a practical way to prepare?
- **Content role:** Show that Future of ID is a guided path through change, not a mandate that every instructional designer become deeply technical.
- **Recommended visual structure:** A simple path, route, or progression graphic showing movement from awareness toward orientation and capability exploration.
- **CTA role:** Optional contextual CTA to learn how the platform works. This should not compete with Start Orientation.
- **Layout notes:** This section should reassure and orient. It should be visually lighter than the hero and should avoid becoming a second hero.

### 3. Learning Loop / Understanding

- **Experience moment:** Understanding
- **Primary learner question:** How does this platform actually work?
- **Content role:** Explain the core learning model: Theory -> Experience -> Reverse Build -> Reflection.
- **Recommended visual structure:** A large learning-loop diagram with four labeled steps and concise explanatory microcopy.
- **CTA role:** Usually no CTA. The section's job is comprehension.
- **Layout notes:** Place this high enough that visitors understand the product model before seeing all capabilities. The diagram needs whitespace and should be readable without interaction.

### 4. Capability Map / Confidence

- **Experience moment:** Confidence
- **Primary learner question:** What will I actually learn?
- **Content role:** Preview the seven capabilities as a connected system for modern instructional design work.
- **Recommended visual structure:** A capability map, layered model, or system view with short labels and restrained support text.
- **CTA role:** Optional link to orientation or a capability preview anchor. Avoid turning this into a full course catalog.
- **Layout notes:** The map should not become dense. Capability details should be deferred to orientation and module pages. The homepage only needs enough information to show coherence and motivate the next step.

### 5. Experience Journey / Confidence + Trust

- **Experience moment:** Confidence and Trust
- **Primary learner question:** What will I do inside the platform?
- **Content role:** Show the learner journey through orientation, modules, practice, structured feedback, Reverse Build, reflection, and progress.
- **Recommended visual structure:** A timeline, journey preview, or process model that makes the experience sequence visible.
- **CTA role:** Optional contextual CTA to Start Orientation if the section naturally creates readiness.
- **Layout notes:** This section should connect the capability system to real product behavior. It should make the guided course feel tangible without overloading the visitor with module-level detail.

### 6. Difference / Trust

- **Experience moment:** Trust
- **Primary learner question:** How is this different from AI hype, a generic course, or a static content library?
- **Content role:** Clarify what Future of ID is and is not through concise contrast.
- **Recommended visual structure:** A comparison graphic or compact principle model. Use fewer, stronger contrasts instead of a long list.
- **CTA role:** Usually no primary CTA. The section should build credibility.
- **Layout notes:** This is where anti-hype positioning belongs. Keep it calm and specific. Avoid sounding defensive or overly manifesto-like.

### 7. Reverse Build Preview / Trust

- **Experience moment:** Trust
- **Primary learner question:** Why should I believe this is credible?
- **Content role:** Introduce Reverse Build as the learner-facing way to inspect design rationale, implementation decisions, constraints, and tradeoffs.
- **Recommended visual structure:** An annotated preview, rationale-to-implementation relationship, or simplified system snapshot.
- **CTA role:** Secondary CTA optional. If used, it should support learning more about the approach rather than competing with orientation.
- **Layout notes:** This section should feel like a signature product moment. Keep the diagram learner-facing and simpler than internal architecture documentation.

### 8. Final CTA / Commitment

- **Experience moment:** Commitment
- **Primary learner question:** Where do I start?
- **Content role:** Close the page by making orientation feel like the natural next step.
- **Recommended visual structure:** Focused CTA section with minimal supporting text and no competing visual complexity.
- **CTA role:** Primary CTA to Start Orientation. Secondary CTA to View Course Dashboard may remain if it supports the current product flow.
- **Layout notes:** This section should feel like closure. It should not introduce new concepts.

## 5. Visual Rhythm

The homepage should alternate between:

- narrative text
- large visual model
- compact explanation
- interactive preview
- comparison
- focused CTA

A healthy rhythm might feel like:

```text
Hero narrative -> guided path visual -> learning-loop diagram -> capability map -> journey preview -> comparison -> Reverse Build preview -> CTA
```

Avoid repeated card-grid rhythm. Cards may appear inside a section when they clarify grouped information, but the page should not rely on card grids as the primary structure for every idea.

## 6. Section Composition Guidance

### Hero

- Use a centered or left/right composition.
- Include a headline, short support copy, primary CTA, and optional secondary CTA.
- Include a product or learning-system visual.
- Keep the first viewport focused on the homepage's primary question.

### Guided Path

- Use short explanatory text paired with a pathway visual.
- Show movement from field shift to guided orientation.
- Keep the model simple enough to understand at a glance.
- Avoid turning this into a detailed role taxonomy.

### Learning Loop

- Include a short intro.
- Use a clear diagram.
- Show four labeled steps: Theory, Experience, Reverse Build, Reflection.
- Include optional explanatory microcopy for each step.
- Keep this visually prominent because it explains the product model.

### Capability Map

- Include a compact intro.
- Show the seven-capability system visually.
- Use short labels only.
- Defer deeper details to orientation and module pages.
- Avoid making every capability equal to a full card with long text.

### Experience Journey

- Show how the learner moves through the platform.
- Include orientation, modules, practice, structured feedback, Reverse Build, reflection, and progress.
- Keep this as a journey preview, not a dashboard replica.
- Use the section to make the learning experience tangible.

### Difference

- Use a comparison or compact principle structure.
- Clarify observed vs predicted, implemented vs theorized, transparent vs performative, and useful vs trendy.
- Avoid long prose blocks.
- Avoid framing the section as a defensive list of what the product is not.

### Reverse Build Preview

- Include a short explanation of Reverse Build.
- Show an annotated preview or rationale/implementation relationship.
- Make clear that Reverse Build reveals design decisions, constraints, and tradeoffs.
- Do not use dense technical architecture diagrams too early.

### Final CTA

- Use concise support copy.
- Keep Start Orientation as the primary action.
- Avoid adding new instructional concepts.
- Let the section close the narrative.

## 7. CTA Strategy

CTA placement should be intentional and restrained.

- **Hero:** Primary CTA to Start Orientation. Secondary CTA may preview capabilities or the learning model.
- **After learning model:** Optional contextual CTA only if it helps learners continue the scroll or start orientation with confidence.
- **Final CTA:** Primary CTA to Start Orientation. Secondary dashboard CTA may remain if it supports current route behavior.

Start Orientation remains the primary action across the homepage.

Avoid multiple competing CTAs with equal visual weight. The homepage should guide learners toward orientation, not ask them to choose among too many paths.

## 8. Density and Spacing Guidance

- The hero should breathe and should not carry the entire platform explanation.
- Diagrams need whitespace so learners can understand relationships quickly.
- The capability map should not become dense or text-heavy.
- Avoid long text blocks.
- Avoid too many equal-weight sections.
- Use section scale to communicate hierarchy: not every moment should feel equally loud.
- Final CTA should feel like closure, not another content section.

## 9. Responsive Layout Considerations

On mobile:

- Visuals should stack after text unless the visual is the primary explanation.
- Diagrams must remain readable without horizontal scrolling.
- The capability map may become a grouped list, simplified stack, or progressive reveal.
- CTAs should remain visible and easy to tap.
- Avoid horizontal overflow.
- Avoid shrinking diagrams until labels become unreadable.
- Interactive visuals must remain usable without hover.

Do not solve these concerns with CSS in this document. Treat them as layout requirements for future component planning.

## 10. Accessibility Considerations

- Use semantic section order that matches the learner journey.
- Provide meaningful alt text for meaningful visuals.
- Decorative visuals should be hidden from assistive technology.
- Diagrams must be explainable in nearby text.
- Do not convey meaning by color alone.
- CTA hierarchy should be clear in text, visual weight, and focus order.
- Any future interactive visual must support keyboard navigation and visible focus states.
- The page should remain understandable if diagrams fail to load.

## 11. Layout Anti-Patterns

Avoid:

- card grid after card grid
- decorative visuals
- generic SaaS hero composition
- dense capability explanation
- hiding the learning loop too low on the page
- overloading the homepage with orientation content
- multiple competing CTAs
- technical architecture diagrams too early
- making every section the same visual weight
- using visuals that do not clarify learner understanding

## 12. Implementation Readiness

Implementation should not begin until:

- section order is approved
- visual rhythm is approved
- CTA strategy is approved
- component scope is approved in a future component plan

The next implementation-planning step should translate this layout blueprint into reusable component candidates and sequencing.

## 13. Recommended Next Codex Action

Create `docs/experience/HOMEPAGE_COMPONENT_PLAN.md` next.

That document should map this layout blueprint into reusable component candidates and implementation sequencing before code changes. It should clarify component responsibilities, reuse potential, data needs, and implementation order without writing React or CSS.
