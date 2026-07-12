# Homepage Experience Brief

## 1. Purpose

This brief defines the Future of ID homepage as the learner's first instructional experience, not simply a marketing page.

The homepage should prepare learners for the guided course by introducing the problem, capability development system, reusable learning architecture, Bradley's current pathway, credibility signals, and next step before formal orientation begins.

This is a design brief only. It does not authorize application-code changes, homepage edits, file movement, or commits.

## 2. Homepage Role

The homepage should function as **Module -1**.

Module 0 is formal orientation. Module -1 is the visitor's first instructional encounter with Future of ID. It should help a learner understand why the platform exists, what kind of learning experience it offers, and why the work matters before asking them to start orientation.

The homepage should introduce:

- the problem: instructional design work is changing
- the promise: Future of ID offers a practical guided path through that change
- the model: Theory -> Experience -> Reverse Build -> Reflection
- the journey: orientation, modules, practice, feedback, Reverse Build, reflection, progress
- the invitation: start orientation with enough context to feel ready

## 3. Primary Learner Question

**What is Future of ID, and why should an instructional designer care?**

Every homepage section, visual, interaction, and CTA should support that question. Secondary ideas can appear, but they should not compete with this central job.

## 4. Experience Composition

The homepage should be composed as a sequence of learner-centered moments rather than a list of page sections.

| Moment | Learner Question | Desired Feeling | Visual Purpose |
| --- | --- | --- | --- |
| Moment 1: Awareness | Why is instructional design changing? | Alert but not anxious | Signal a field-level shift. |
| Moment 2: Hope | Is there a practical way to prepare? | Reassured and curious | Show Future of ID as a guided path. |
| Moment 3: Understanding | How does this platform actually work? | Oriented | Show `Theory -> Experience -> Reverse Build -> Reflection`. |
| Moment 4: Confidence | What will I actually learn? | Capable and motivated | Show Bradley's current seven capabilities as a connected system demonstration. |
| Moment 5: Trust | Why should I believe this is credible? | Confident in the platform | Show transparency, implementation, and Reverse Build. |
| Moment 6: Commitment | Where do I start? | Ready | Provide a focused orientation CTA. |

### Moment 1: Awareness

The homepage should open by naming the shift in instructional design without fear-based framing. The learner should understand that the field is expanding beyond course production into AI-enabled workflows, learning systems, evidence, adaptation, and trust.

The tone should be grounded: the change is real, but it is not a panic narrative.

### Moment 2: Hope

After naming the shift, the page should immediately show that there is a practical way to engage with it. Future of ID should appear as a guided path for strengthening judgment, not as a mandate to become a software developer or AI engineer.

This moment should reinforce learner agency: different instructional designers can engage at different levels of technical depth.

### Moment 3: Understanding

The page should explain how the platform works before listing everything inside it.

The core model should be visible:

```text
Theory -> Experience -> Reverse Build -> Reflection
```

Each layer should have a clear job:

- Theory = explain
- Experience = apply
- Reverse Build = reveal
- Reflection = transfer

This moment should make the platform feel learnable and navigable.

### Moment 4: Confidence

Bradley's current seven capabilities should be presented as a connected pathway and the first complete demonstration of the system. The learner should see that the course has structure without mistaking the current capability collection for a universal or permanent framework.

The homepage should preview the current pathway without duplicating the canonical capability development system definition. Deeper explanation belongs in orientation and `FUTURE_READY_CAPABILITY_MODEL.md`.

### Moment 5: Trust

The homepage should establish credibility through transparency and implementation evidence.

This moment should communicate that Future of ID is built from real project work, decisions, constraints, experiments, and lessons learned. Reverse Build should be introduced as a learner-facing way to inspect the design rationale behind the platform.

Trust should come from practical clarity, not hype, claims, or performative complexity.

### Moment 6: Commitment

The page should end by making the next step obvious: start orientation.

The final CTA should feel like a natural continuation of the learning journey, not a marketing conversion push. The learner should feel ready to enter Module 0 with the system in view.

## 5. Narrative Flow

Recommended homepage flow:

1. **Field-Level Shift**
   Introduce the change in instructional design work: AI-enabled workflows, systems thinking, evidence, practice, adaptation, and trust.

2. **Future of ID Promise**
   Explain that Future of ID is a guided learning platform for studying this shift through practical modules and transparent implementation.

3. **Learning Model**
   Show the Theory -> Experience -> Reverse Build -> Reflection loop as the platform's core learning pattern.

4. **Capability System**
   Distinguish the reusable method from Bradley's current seven-capability demonstration, then preview the current pathway as a connected model rather than a long list.

5. **Experience Journey**
   Show what learners will do: start orientation, enter modules, practice decisions, receive structured feedback, inspect Reverse Build notes, reflect, and track progress.

6. **Difference and Credibility**
   Clarify what makes Future of ID different: observed, implemented, transparent, useful, and grounded in instructional design judgment.

7. **Orientation Invitation**
   Close with a focused CTA to begin orientation.

## 6. Visual Pattern Requirements

| Moment | Recommended Visual Pattern | Requirement |
| --- | --- | --- |
| Awareness | Hero/product visual | Signal a real field shift without generic SaaS polish or AI hype. |
| Hope | Guided-path visual or short pathway model | Show that learners have a practical path into the topic. |
| Understanding | Learning-loop diagram | Make Theory, Experience, Reverse Build, and Reflection visible. |
| Confidence | Capability map | Show Bradley's seven capabilities as a connected current pathway, not isolated cards or a universal prescription. |
| Trust | Reverse Build preview or comparison graphic | Show transparency, implementation, and design rationale. |
| Commitment | CTA section | Focus attention on starting orientation. |

Additional visual guidance:

- Use visuals to clarify relationships, sequence, or decisions.
- Keep learner-facing diagrams simpler than internal architecture diagrams.
- Avoid mixing incompatible visual styles within the page.
- Use cards only when they organize meaning better than a diagram, model, comparison, or journey view.

## 7. Content Implications

### Stay

- Practical, grounded positioning.
- Anti-hype stance.
- Multiple-path framing for different instructional design roles.
- Current seven-capability demonstration.
- Reverse Build as a signature product concept.
- Start Orientation as the primary CTA.

### Shorten

- Repeated card descriptions in `What Future of ID Is`.
- Repeated card descriptions in `What Future of ID Is Not`.
- Detailed platform-principle explanations.
- Detailed capability descriptions on the homepage.

### Merge

- `What Future of ID Is` and `What Future of ID Is Not` can become a tighter comparison moment.
- `Why This Exists` and `Platform Principles` can merge into a credibility / difference moment.
- `Inside the Platform` can merge with the experience journey visual.

### Move to About or Orientation

- Detailed explanation of different technical adoption paths.
- Longer positioning around what the platform is not.
- Deeper rationale for Bradley's current seven-capability pathway.
- Extended discussion of the creator's implementation path and transparency rationale.

### Become Visual

- Learning loop.
- Bradley's current seven capabilities.
- Experience journey.
- Future of ID versus AI hype / generic course / static content library.
- Reverse Build as a reveal of design rationale and implementation decisions.

## 8. Component Implications

Likely components or reusable patterns to plan before implementation:

- `HomepageHero`
- `LearningLoopVisual`
- `CapabilityMap`
- `ExperienceJourney`
- `DifferenceComparison`
- `ReverseBuildPreview`
- `HomepageCTA`

These should not be implemented yet. First confirm the content hierarchy, visual requirements, component scope, and whether each pattern should be landing-specific or reusable across the platform.

## 9. Constraints

- Avoid generic SaaS marketing feel.
- Avoid decorative visuals.
- Avoid overbuilding.
- Preserve instructional credibility.
- Keep the page calm and professional.
- Preserve route behavior and CTAs.
- Preserve the existing Start Orientation path.
- Do not imply that all instructional designers need the same technical depth.
- Do not turn Reverse Build into vague brand language; keep it tied to design rationale and implementation decisions.
- Do not introduce application-code changes in this brief.

## 10. Implementation Readiness

Before code changes begin, approve:

- the six experience moments
- the homepage content hierarchy
- the visual patterns for each moment
- the component scope
- the CTA structure
- which current content moves, shortens, merges, or becomes visual
- which components are landing-specific versus reusable platform patterns

Implementation should not begin until the homepage can be described as a clear learner journey from awareness to orientation.

## 11. Recommended Next Codex Action

Create a homepage content model plan next.

That plan should define the revised `landingContent` structure, section order, content cuts, visual-content requirements, and component mapping. It should still avoid implementation until the content model and component scope are approved.
