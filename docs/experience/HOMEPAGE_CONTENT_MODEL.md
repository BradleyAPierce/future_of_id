# HOMEPAGE_CONTENT_MODEL.md

## 1. Purpose

This document translates the Homepage Experience Brief into a homepage information architecture that implementation teams can build from consistently.

It defines what content belongs on the Future of ID homepage, why it belongs there, and how each content moment should support the learner's first encounter with the platform.

This document separates four concerns:

- learner experience: what the visitor should understand and feel
- content: what information belongs on the homepage
- visual communication: what should be explained visually instead of through repeated text
- implementation: what future components and patterns may need to support

This is not a wireframe, React plan, Figma plan, or marketing-copy draft. It is the content contract for the homepage.

## 2. Homepage Job

The homepage has one job:

**Answer: What is Future of ID, and why should an instructional designer care?**

Everything on the homepage should support that answer.

Content that does not help a visitor understand the platform, the learning model, the credibility of the work, or the next step should be shortened, moved, or removed.

## 3. Homepage Information Architecture

The homepage should be organized around six experience moments. Each moment should answer one learner question and prepare the visitor for the next moment.

### 1. Awareness

#### Purpose

Name the field-level shift in instructional design without creating panic or hype.

#### Learner Question

Why is instructional design changing?

#### Key Message

Instructional design work is expanding beyond course production into AI-enabled workflows, systems thinking, evidence, practice, adaptation, and trust.

#### Supporting Content

- The shift from course production to learning systems design.
- The growing role of AI-supported workflows and implementation judgment.
- The need for instructional designers to understand change without assuming one required career path.

#### Recommended Visual

A hero/product visual that signals a professional field-level shift and sets a premium instructional tone.

#### Interaction

Primary navigation and a clear first CTA should be available, but the moment should not ask the learner to make a complex choice.

#### CTA

Primary: Start Orientation.

Secondary: Preview the capability model or learning approach.

### 2. Hope

#### Purpose

Show that there is a practical way to engage with the shift.

#### Learner Question

Is there a practical way to prepare?

#### Key Message

Future of ID gives instructional designers a guided path for developing modern learning design judgment without implying that every practitioner must become deeply technical.

#### Supporting Content

- Future of ID as a guided learning platform.
- The idea that technical depth varies by role, context, and goals.
- The platform as a structured way to study real work, not a prediction engine.

#### Recommended Visual

A guided path graphic or simple pathway model that shows the learner moving from awareness into orientation and capability exploration.

#### Interaction

A light interaction may let learners inspect the path at a high level, but this moment should remain simple and reassuring.

#### CTA

Optional secondary CTA to learn how the platform works.

### 3. Understanding

#### Purpose

Explain the learning model before introducing all platform details.

#### Learner Question

How does this platform actually work?

#### Key Message

Future of ID teaches through a repeatable learning loop: Theory -> Experience -> Reverse Build -> Reflection.

#### Supporting Content

- Theory explains the concept.
- Experience lets the learner apply the concept.
- Reverse Build reveals design rationale and implementation decisions.
- Reflection helps the learner transfer the idea to their own work.

#### Recommended Visual

A learning-loop diagram.

#### Interaction

Optional simple reveal or hover/focus states may clarify each part of the loop, but the diagram should be understandable without interaction.

#### CTA

No primary CTA required. This moment should orient the learner.

### 4. Confidence

#### Purpose

Preview what the learner will study.

#### Learner Question

What will I actually learn?

#### Key Message

The platform is organized around seven connected capabilities that help instructional designers move from course production toward learning systems design.

#### Supporting Content

- The seven capabilities as a coherent system.
- A brief description of each capability's role in the broader model.
- Enough detail to motivate orientation, not enough to fully teach the model.

#### Recommended Visual

A capability map that shows the seven capabilities as related parts of a system.

#### Interaction

The map may allow lightweight inspection of individual capabilities, but should not become a full module browser on the homepage.

#### CTA

Optional link to orientation or dashboard preview if needed, but the main purpose is confidence-building.

### 5. Trust

#### Purpose

Establish credibility through transparency, implementation evidence, and instructional design judgment.

#### Learner Question

Why should I believe this is credible?

#### Key Message

Future of ID is built from real implementation work, documented decisions, practical constraints, and transparent Reverse Build explanations.

#### Supporting Content

- Observed, not predicted.
- Implemented, not theorized.
- Transparent, not performative.
- Useful, not trendy.
- Reverse Build as the product-facing way to inspect design rationale and implementation decisions.

#### Recommended Visual

A Reverse Build preview, comparison graphic, or annotated system snapshot that shows how learners can inspect the thinking behind the work.

#### Interaction

A preview interaction may show how an implementation decision connects to an instructional decision. Keep it focused and instructional.

#### CTA

Optional secondary CTA to learn more about the approach or enter orientation.

### 6. Commitment

#### Purpose

Make the next step obvious.

#### Learner Question

Where do I start?

#### Key Message

Start with orientation to see the system, understand the seven capabilities, and enter the guided course with context.

#### Supporting Content

- Orientation is the first formal learning step.
- The learner will see how the platform works before entering modules.
- The CTA should feel like a natural continuation, not a marketing conversion.

#### Recommended Visual

A focused CTA section with minimal supporting structure.

#### Interaction

Primary CTA interaction only.

#### CTA

Primary: Start Orientation.

Secondary: View Course Dashboard, if retained.

## 4. Section-Level Content Model

This section defines the purpose of the content in each homepage moment. It does not provide final copy.

| Moment | Headline | Supporting Copy | Visual Requirement | Interaction Requirement | Component Candidate |
| --- | --- | --- | --- | --- | --- |
| Awareness | Name the shift in instructional design work. | Explain that ID work is expanding into AI-enabled workflows, systems thinking, evidence, practice, adaptation, and trust. | Hero/product visual. | Navigation and clear CTA only. | `HomepageHero` |
| Hope | Present Future of ID as a practical guided path. | Explain that learners can engage at different levels of technical depth and use the platform to develop judgment. | Guided path graphic. | Optional light inspection; no complex choice. | `ExperienceJourney` or `VisualFrameworkSection` |
| Understanding | Explain how the platform teaches. | Define Theory, Experience, Reverse Build, and Reflection by purpose. | Learning-loop diagram. | Optional reveal states; must work without interaction. | `LearningLoopVisual` |
| Confidence | Preview the seven capabilities. | Explain that the capabilities form a connected model for modern instructional design work. | Capability map. | Optional capability inspection; avoid full module-browser complexity. | `CapabilityMap` |
| Trust | Explain why the platform is credible. | Connect transparency, implementation evidence, Reverse Build, and instructional design judgment. | Reverse Build preview or comparison graphic. | Optional focused preview of rationale-to-implementation relationship. | `ReverseBuildPreview` or `DifferenceComparison` |
| Commitment | Invite the learner into orientation. | Explain that orientation gives the full system view before modules begin. | Focused CTA section. | Primary CTA interaction. | `HomepageCTA` |

## 5. Content Ownership

Clear ownership prevents homepage bloat.

### Homepage

The homepage owns the first encounter:

- what Future of ID is
- why instructional designers should care
- the field-level shift
- the guided path promise
- the learning loop
- a preview of the seven capabilities
- a high-level credibility signal
- the Start Orientation invitation

### Orientation

Orientation owns formal onboarding:

- why these seven capabilities matter
- how the guided course works
- what learners will do in modules
- how progress works
- how to navigate the learning experience
- deeper explanation of the course structure

### About

About owns creator/platform context:

- why the project exists
- the transparent builder perspective
- public repo/transparency rationale
- the creator's implementation path
- audience fit and intended use

### Module Pages

Module pages own capability instruction:

- capability definitions
- why each capability matters
- theory connections
- applied experiences
- scenario practice
- feedback
- reflection
- module completion

### Reverse Build

Reverse Build owns design rationale and implementation transparency:

- instructional strategy
- content structure decisions
- prompt architecture where relevant
- technical implementation notes
- design rationale
- tradeoffs and constraints

## 6. Content Reduction

### Content to Keep

- Practical positioning as a guided learning platform.
- The shift from course production to learning systems design.
- The seven-capability model.
- The Theory -> Experience -> Reverse Build -> Reflection loop.
- The anti-hype stance.
- Reverse Build as a signature product concept.
- Start Orientation as the primary next step.

Why: these directly support the homepage's primary job.

### Content to Merge

- `What Future of ID Is` and `What Future of ID Is Not` should become a tighter difference/comparison moment.
- `Why This Exists` and `Platform Principles` should merge into a credibility and trust moment.
- `Inside the Platform` should merge into the experience journey moment.

Why: these ideas currently overlap and can be clearer when presented as fewer, stronger moments.

### Content to Remove

- Repeated card descriptions that restate the same positioning in different ways.
- Any language that explains the platform without helping the learner decide why it matters or where to begin.
- Any visual or content pattern that exists only to fill space.

Why: the homepage should reduce cognitive load and avoid becoming a long explanatory archive.

### Content to Move

- Detailed technical-adoption path discussion should move to About or Orientation.
- Deeper seven-capability rationale should move to Orientation and strategy/capability docs.
- Extended implementation transparency rationale should move to About or Reverse Build.
- Detailed module-specific learning promises should move to module pages.

Why: these topics are valuable, but they belong where learners have more context and intent.

## 7. Visual Mapping

Every homepage moment should connect to the Visual Communication System.

```text
Awareness
-> Hero Image / Product Visual

Hope
-> Guided Path Graphic

Understanding
-> Learning Loop Diagram

Confidence
-> Capability Map

Trust
-> Reverse Build Preview / Difference Comparison

Commitment
-> CTA Section
```

Visuals should clarify meaning, sequence, or relationships. They should not decorate the page or compensate for unclear content.

## 8. Component Mapping

| Component | Purpose | Reusable? | Landing-Only? | Future Reuse Opportunities |
| --- | --- | --- | --- | --- |
| `HomepageHero` | Introduce the field shift, platform promise, and primary CTA. | Partial | Yes | Public landing pages or future campaign pages may reuse the structure with different content. |
| `LearningLoopVisual` | Show Theory, Experience, Reverse Build, and Reflection as the learning model. | Yes | No | Orientation, module intros, docs, Reverse Build explanations. |
| `CapabilityMap` | Show the seven capabilities as a connected system. | Yes | No | Orientation, dashboard, capability overview, future portfolio/case-study pages. |
| `ExperienceJourney` | Show the learner path through orientation, modules, practice, feedback, Reverse Build, reflection, and progress. | Yes | No | Orientation, dashboard onboarding, completion summaries. |
| `DifferenceComparison` | Clarify what Future of ID is and is not. | Partial | No | About page, landing page, product-positioning pages. |
| `ReverseBuildPreview` | Introduce Reverse Build as a way to inspect design rationale and implementation decisions. | Yes | No | Module pages, Reverse Build sections, portfolio/case-study content. |
| `HomepageCTA` | Provide a focused orientation invitation. | Partial | Yes | Other public pages may reuse a CTA pattern if content remains simple. |

## 9. Progressive Disclosure

The homepage should reveal complexity gradually.

After **Awareness**, learners should understand that instructional design work is changing.

After **Hope**, learners should understand that Future of ID offers a practical, guided way to engage with that change.

After **Understanding**, learners should understand the learning loop and how the platform teaches.

After **Confidence**, learners should understand that the seven capabilities form a coherent system.

After **Trust**, learners should understand why the platform is credible and how Reverse Build exposes the thinking behind the work.

After **Commitment**, learners should know exactly where to begin.

Each moment should prepare the learner for the next. The homepage should not teach every detail before the learner reaches orientation.

## 10. Success Criteria

A visitor should leave the homepage understanding:

- why instructional design is changing
- what Future of ID is
- how the platform teaches
- what they will experience
- why it is credible
- exactly where to begin

The homepage succeeds when the visitor feels oriented, curious, professionally challenged, and ready to start orientation without feeling overwhelmed.

## 11. Implementation Notes

Do not treat this document as a React or CSS specification.

Implementation should follow these constraints:

- Avoid repeated card grids.
- Prefer visual explanation over repeated text.
- Maintain calm visual rhythm.
- Preserve instructional credibility.
- Reuse patterns whenever appropriate.
- Keep diagrams learner-facing and simpler than internal architecture diagrams.
- Preserve the primary Start Orientation path.
- Keep the homepage focused on Module -1, not the full course archive.

## 12. Recommended Next Codex Action

Create `docs/experience/HOMEPAGE_COMPONENT_PLAN.md` next.

That future document should map this content model into reusable React component candidates before implementation begins. It should define component responsibilities, reuse potential, data needs, and implementation sequencing without writing code yet.
