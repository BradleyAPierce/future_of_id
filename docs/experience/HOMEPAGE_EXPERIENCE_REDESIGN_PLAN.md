# Homepage Experience Redesign Plan

## 1. Purpose

This plan applies the Future of ID Experience Philosophy and Visual Communication System to the homepage.

The goal is to help the homepage answer the right learner question, create a stronger first impression, and translate the platform strategy into a clearer product experience before implementation begins.

This is a planning document only. It does not authorize implementation, file movement, README consolidation, or application-code changes.

## 2. Current Homepage Assessment

### Product Clarity

The current homepage communicates Future of ID as a practical learning platform for instructional designers moving from course production toward learning systems design. The content is thoughtful, grounded, and aligned with the landing-page strategy.

The main clarity issue is density. The page explains what Future of ID is, what it is not, different practitioner paths, why it exists, capabilities, principles, and platform structure. These are all useful ideas, but they currently compete for attention instead of unfolding as one guided story.

### Learner Motivation

The homepage does a good job avoiding hype and preserving professional credibility. It positions the product as practical, transparent, and implementation-focused.

The motivation layer could be stronger if the page showed the learner what they will experience, not only what the platform believes. The homepage should make the guided course feel tangible: orientation, capability modules, scenario practice, Reverse Build, reflection, and progress.

### Visual Rhythm

The current page relies heavily on repeated `LandingSection` plus `LandingCardGrid` patterns. The structure is clean, but the rhythm becomes predictable.

The page risks becoming the pattern the Experience Philosophy warns against:

```text
Card -> Card -> Card -> Section -> Card
```

Cards are useful here, but they are carrying too much of the communication burden.

### Visual Storytelling

The hero uses a strong image treatment, but most of the page after the hero is text-forward. The homepage does not yet use visual communication to show the learning system, capability relationships, or the Theory -> Experience -> Reverse Build -> Reflection loop.

The Visual Communication System suggests that framework diagrams, capability maps, comparison graphics, annotated screenshots, and journey visuals should replace text when relationships matter. The homepage has several places where this would improve comprehension.

### Interaction Quality

The page is navigable and clear, with a sticky header and direct CTAs. Interaction is currently limited to navigation and links.

That is acceptable for an MVP homepage, but future iterations should let learners inspect the model lightly without turning the page into a complex app surface. Small interactions could support orientation, comparison, or preview without becoming decorative.

### Use of Cards and Surfaces

The current homepage uses `Surface`, `Badge`, `Button`, and `SectionHeader` consistently. This aligns with the component architecture and keeps the visual language calm.

The risk is not component quality. The risk is overusing the same card-grid composition for ideas that would be better communicated as a flow, map, comparison, or annotated model.

### Alignment With Future of ID's Learning Model

The current homepage references guided modules, scenario practice, Reverse Build notes, and reflection prompts, but it does not visually foreground the core learning loop:

```text
Theory -> Experience -> Reverse Build -> Reflection
```

That loop should become one of the homepage's central explanatory moments because it is the product's learning promise.

### Avoiding Repetitive Page Structure

The current homepage is close to the right content but needs more varied instructional patterns:

- one hero visual for positioning
- one learning-loop visual for product structure
- one capability map for the seven-capability model
- one comparison or principle section for what makes the platform different
- one focused CTA section that starts orientation

## 3. Homepage Primary Question

The homepage should answer one primary question:

**What is Future of ID, and why should an instructional designer care?**

Secondary questions can support that primary question:

- What kind of learning experience is this?
- What will I do inside the platform?
- How is this different from AI hype, a generic course, or a portfolio site?
- Where should I start?

## 4. Desired Learner Feeling

The homepage should make visitors feel:

- **Clear:** I understand what Future of ID is.
- **Curious:** I want to see how the learning experience works.
- **Confident:** This platform seems credible and well-structured.
- **Invited:** I know where to begin without needing to understand everything first.
- **Professionally challenged:** This asks me to think beyond course production toward systems, judgment, and implementation.
- **Not overwhelmed:** The future-facing ideas are organized into a pathway I can enter.

The homepage should feel guided but not rigid. It should invite different levels of technical depth without implying that every instructional designer must follow the same path.

## 5. Recommended Narrative Flow

A stronger homepage should unfold as a learning story rather than a stack of explanatory sections.

Recommended flow:

1. **Problem / Shift in the Field**
   Explain that instructional design work is expanding beyond course production into systems, AI-supported workflows, evidence, adaptation, and trust.

2. **Future of ID Promise**
   Position Future of ID as a guided learning platform that helps instructional designers study this shift through practical modules, AI-supported practice, Reverse Build, and reflection.

3. **Visual Model of the Learning Experience**
   Show the loop:

   ```text
   Theory -> Experience -> Reverse Build -> Reflection
   ```

   Use the meanings from the Experience Philosophy:

   - Theory = explain
   - Experience = apply
   - Reverse Build = reveal
   - Reflection = transfer

4. **Seven Capability Preview**
   Present the seven capabilities as a connected capability map, not only as repeated cards.

5. **How the Experience Works**
   Show what a learner actually does: starts orientation, studies modules, practices decisions, receives structured feedback, inspects Reverse Build notes, reflects on transfer, and tracks progress.

6. **Why This Is Different**
   Use concise comparison or principle-based storytelling to explain that Future of ID is observed, implemented, transparent, and useful rather than predictive, performative, or trendy.

7. **Start Orientation CTA**
   End with a focused CTA that reinforces the next best step: start orientation with the full system in view.

## 6. Visual Communication Opportunities

### Hero Visual

Keep the hero visual strong and product-defining, but make it support the primary question more directly. The hero should signal a premium learning platform, not a generic SaaS splash page.

A future iteration could use a real product screenshot, dashboard/module composition, or carefully composed learning-system visual instead of a purely atmospheric image.

### Framework Diagram

Replace part of the explanatory text with a visual model of the learning loop:

```text
Theory -> Experience -> Reverse Build -> Reflection
```

This should appear early, after the promise, because it explains what the learner will actually do.

### Icons

Use icons sparingly for repeated categories such as Theory, Experience, Reverse Build, Reflection, capability focus areas, and platform principles. Icons should support scanning, not become a decorative icon grid.

### Capability Map

The seven capabilities should become a capability map or layered model. This would help learners see the capability system as a coherent stack rather than a list of independent topics.

The map should preserve the seven-capability model and avoid overexplaining each capability on the homepage.

### Infographic / Experience Preview

Use a simple journey or timeline to show:

```text
Orientation -> Module -> Practice -> AI Feedback -> Reverse Build -> Reflection -> Progress
```

This can replace some of the current `Inside the Platform` card content.

### Breaking Up Repeated Card Sections

The current `whatIs`, `whatIsNot`, `paths`, `whyExists`, `principles`, and `inside` sections all use card-grid logic. Recommended replacements:

- `What Future of ID Is / Is Not`: use a concise comparison graphic.
- `Different Paths`: use a spectrum or pathway model.
- `Why This Exists`: use a problem-to-response narrative band.
- `Platform Principles`: use a compact principle strip or annotated model.
- `Inside the Platform`: use an experience journey visual.

### Reverse Build Positioning

The homepage should introduce Reverse Build as a signature product concept. It can include a small annotated screenshot, system map, or build-history callout showing that learners can inspect design decisions, constraints, and implementation rationale.

This should not become a technical architecture diagram. Learner-facing diagrams should be simpler than internal architecture diagrams.

## 7. Component / Pattern Opportunities

Likely reusable patterns to plan before implementation:

- `HomepageHero`: a stronger first-viewport composition that answers the primary question and routes to orientation.
- `LearningLoopVisual`: a visual explanation of Theory, Experience, Reverse Build, and Reflection.
- `CapabilityMap`: a visual preview of the seven capabilities as a connected system.
- `VisualFrameworkSection`: a reusable section pattern for explaining concepts through diagrams or models instead of cards.
- `ExperiencePreview`: a learner journey preview showing what happens inside the guided course.
- `ProofOrTrustSection`: a restrained credibility section focused on transparency, implementation, and instructional judgment.
- `CTASection`: a focused orientation CTA that can be reused on public pages.

Do not implement these yet. First confirm the content hierarchy and visual pattern plan.

## 8. Content Strategy Notes

### Keep

- The practical, grounded positioning.
- The anti-hype stance.
- The distinction between different practitioner paths.
- The seven-capability model.
- The emphasis on transparent implementation and Reverse Build.
- The primary CTA to start orientation.

### Shorten

- Repeated explanatory card descriptions.
- The `What Future of ID Is` and `What Future of ID Is Not` sections.
- The platform principles section, which can be tighter and more visual.

### Move or De-emphasize

- Detailed discussion of different AI adoption paths may belong partly on an about, strategy, or orientation page.
- Some principle language can move into docs or Reverse Build material rather than staying on the homepage.
- Detailed capability descriptions can be previewed briefly, with deeper treatment inside orientation and modules.

### Make Visual

- The learning loop.
- The seven capabilities as a system.
- Different practitioner paths as a spectrum.
- What makes Future of ID different as a comparison or principle model.
- The course journey from orientation to progress.

## 9. Risk / Constraints

- Do not overdesign the homepage into a heavy custom marketing page.
- Avoid generic SaaS landing-page patterns that make the platform feel less instructional.
- Avoid decorative visuals that do not clarify the learning model.
- Maintain instructional credibility and calm professional tone.
- Preserve alignment with the existing design system tokens and primitives.
- Avoid huge implementation churn in the first pass.
- Do not disrupt the current route behavior or orientation CTA.
- Do not imply all instructional designers need the same technical depth.
- Do not reduce Reverse Build to a buzzword; show it as a learner-facing reveal of design rationale and implementation decisions.

## 10. Recommended Implementation Sequence

### Phase 1: Content and Structure Plan

- Define the final homepage narrative flow.
- Decide which existing sections stay, merge, shorten, or move.
- Draft updated `landingContent` structure without coding components yet.
- Confirm the homepage primary question and CTAs.

### Phase 2: Visual Pattern / Component Plan

- Sketch the learning-loop visual, capability map, path spectrum, and experience preview.
- Decide which patterns should become reusable components.
- Confirm component names and prop needs against the current design system.

### Phase 3: Implement Homepage Redesign

- Refactor the homepage in a narrow pass.
- Reuse existing primitives first: `Surface`, `Button`, `Badge`, `SectionHeader`, and existing landing components where they still fit.
- Add only the reusable patterns approved in Phase 2.
- Preserve route behavior and CTA destinations.

### Phase 4: Validate Against Experience Framework

- Check the page against the one-primary-question standard.
- Check visual rhythm against the Visual Communication System.
- Confirm the page avoids repetitive card-grid structure.
- Validate responsive behavior and accessibility.
- Confirm the homepage still feels calm, credible, professional, and instructional.

## 11. Open Questions

- Should the hero visual become a product screenshot, an abstract learning-system visual, or a generated/curated image with stronger instructional relevance?
- How much of the `What Future of ID Is Not` content should remain on the homepage versus move to About or Orientation?
- Should the seven capabilities appear as a map, stack, wheel, layered model, or timeline?
- Should `Different Paths` remain a homepage section, or should it become part of orientation where learners can calibrate their own path?
- What is the minimum visual treatment needed to communicate Reverse Build without adding implementation complexity?
- Should the homepage include a visible project transparency / public repo rationale, or should that live mainly in README/About/Reverse Build content?
- Which homepage patterns should be extracted as reusable components versus kept landing-specific?

## 12. Recommended Next Codex Action

Create a focused homepage content and structure brief before implementation.

That brief should propose the revised homepage section order, updated content model, visual pattern requirements, and component extraction scope. It should not modify code until the content hierarchy and visual pattern direction are approved.
