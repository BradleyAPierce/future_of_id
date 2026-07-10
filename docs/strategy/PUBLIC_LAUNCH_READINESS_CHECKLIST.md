# Future of ID — Public Launch Readiness Checklist

**Document status:** Working execution checklist  
**Owner:** Bradley Pierce  
**Public launch status:** Not approved  
**Completion rule:** No first public introduction, announcement, launch post, portfolio promotion, or broad public sharing until every required launch gate is completed and personally approved.

---

## 1. Purpose

This checklist defines the work required before Future of ID is introduced publicly.

It incorporates:

- the Claude product review
- the Grok product review
- prior module-by-module evaluations
- Future of ID’s governing philosophy and architecture
- Bradley’s professional integrity standard
- the current technical and instructional state of the product

External AI reviews are evidence and input. They are not the final authority.

Every recommendation must ultimately fit:

- the real purpose of Future of ID
- the existing product architecture
- the intended learner experience
- Bradley’s professional judgment
- the standard Bradley is willing to attach his name and reputation to

---

# 2. Non-Negotiable Launch Principles

These principles remain in force throughout the work.

- [ ] Future of ID will not be publicly introduced merely because it is visually polished.
- [ ] Future of ID will not make a claim that cannot be observed or defended in the actual experience.
- [ ] Core product gaps will not be hidden through careful marketing language.
- [ ] Product integrity takes priority over launch speed.
- [ ] Reviewer recommendations will not be implemented automatically without evaluation.
- [ ] Scope will not expand into unrelated homepage, dashboard, or design-system redesign work.
- [ ] New functionality must follow the existing system-first architecture.
- [ ] Instructional content, application logic, and presentation must remain separated.
- [ ] No account system, Supabase persistence, or unrelated future feature will be pulled into this launch-readiness scope.
- [ ] The launch-readiness process will end when the defined gates are passed; it will not become an endless perfection cycle.

---

# 3. Seven-Capability Positioning

## 3.1 Lock the correct meaning of the seven capabilities

- [ ] Document that the seven capabilities were personally selected by Bradley.
- [ ] State that they reflect where Bradley is now as an instructional designer.
- [ ] State that the selection was influenced by Bradley’s:
  - [ ] current role
  - [ ] current responsibilities
  - [ ] company initiatives
  - [ ] active learning projects
  - [ ] immediate development needs
  - [ ] future professional direction
  - [ ] transition into full-stack learning-product development
- [ ] State clearly that the seven capabilities are not claimed to be the only capabilities instructional designers need.
- [ ] State clearly that the seven capabilities are not presented as a universal industry framework.
- [ ] State clearly that the exact seven-capability collection has not been formally validated by an outside institution.
- [ ] Preserve Bradley’s authority to explain why each capability matters in his current professional context.

## 3.2 Clarify the reusable product promise

- [ ] Document that the reusable contribution is the method—not the exact list of seven.
- [ ] Explain that another practitioner may need a different capability pathway.
- [ ] Explain that a forked version of Future of ID may replace all seven capabilities.
- [ ] Explain that the learning architecture can be reused while the capability topics change.
- [ ] Connect this architecture directly to the promise to “meet you where you are.”
- [ ] Show that Future of ID itself was created by meeting Bradley where he currently is.
- [ ] Explain that professional calibration may cause the capability pathway to change over time.

## 3.3 Correct outdated foundational language

Audit and update, at minimum:

- [ ] `docs/strategy/BLUEPRINT.md`
- [ ] `docs/architecture/SITE_MAP.md`
- [ ] current project `README.md`
- [ ] any retained alternate README files
- [ ] `docs/strategy/DECISIONS.md`
- [ ] `docs/architecture/CONTENT_ARCHITECTURE.md`
- [ ] `docs/strategy/EXPERIENCE_PHILOSOPHY.md`
- [ ] `docs/strategy/EXPERIENCE_ARCHITECTURE.md`
- [ ] `docs/strategy/PRODUCT_EXPERIENCE_MAP.md`
- [ ] Orientation documentation
- [ ] About-page documentation
- [ ] page metadata and social-preview copy
- [ ] any source comments or content files containing positioning claims

Search the repository for language including:

- [ ] “seven research-grounded capabilities”
- [ ] “seven capabilities shaping the future”
- [ ] “through 2030”
- [ ] “research-backed reasons these seven were selected”
- [ ] “industry-validated”
- [ ] “the capabilities every instructional designer needs”
- [ ] “next-generation capabilities” when used as a universal claim
- [ ] similar language that implies universal selection or external validation

## 3.4 Preserve legitimate evidence standards

- [ ] Do not remove credible learning theory or supporting research from the modules.
- [ ] Continue grounding substantive instructional claims in credible sources.
- [ ] Distinguish between:
  - [ ] Bradley’s professional selection of the capability
  - [ ] established learning principles used within the module
  - [ ] current industry or technology evidence
  - [ ] Bradley’s own interpretation or professional point of view
- [ ] Ensure evidence supports the content being taught without falsely claiming that research produced the exact seven-capability set.

### Phase 3 completion evidence

- [ ] All known universal-framework language has been identified.
- [ ] Replacement positioning has been approved by Bradley.
- [ ] Repository search confirms that unsupported universal claims are removed or intentionally qualified.
- [ ] A first-time reader can explain why these seven capabilities were selected without assuming they are mandatory for everyone.

---

# 4. Launch-Readiness Implementation Briefs

No major coding begins until each core feature has a concise implementation brief.

## 4.1 Reverse Build v2 brief

- [ ] Define the current problem.
- [ ] Define the intended learner experience.
- [ ] Define the information Reverse Build must receive.
- [ ] Define which parts become dynamic.
- [ ] Define which existing authored layers remain unchanged.
- [ ] Define learner privacy and control requirements.
- [ ] Define fallback behavior.
- [ ] Define failure behavior.
- [ ] Define accessibility requirements.
- [ ] Define technical constraints.
- [ ] Define acceptance criteria.
- [ ] Define what public claims the completed feature will support.

## 4.2 Module 4 simulation brief

- [ ] Define the current mismatch between topic and interaction.
- [ ] Define the professional decision the learner will practice.
- [ ] Define the first meaningful choice.
- [ ] Define distinct consequences for each first choice.
- [ ] Define the second decision point.
- [ ] Define how the first choice changes the second decision.
- [ ] Define the final outcome or design state.
- [ ] Define how the learner explains or refines judgment.
- [ ] Define how AI critique connects to the interaction.
- [ ] Define what Reverse Build will reconstruct.
- [ ] Define mobile and accessibility behavior.
- [ ] Define acceptance criteria.
- [ ] Define what public claims the completed simulation will support.

## 4.3 Implementation-control requirements

Each Codex prompt must:

- [ ] identify the relevant source-of-truth documents
- [ ] identify affected files and components
- [ ] preserve content and logic separation
- [ ] use reusable components
- [ ] avoid one-off hardcoded module logic where a reusable model is appropriate
- [ ] explain architectural decisions
- [ ] include validation requirements
- [ ] prohibit unrelated visual or architectural changes
- [ ] require a final change summary
- [ ] require build and test results

### Phase 4 completion evidence

- [ ] Reverse Build v2 brief approved.
- [ ] Module 4 simulation brief approved.
- [ ] Acceptance criteria are specific enough that completion can be tested rather than assumed.

---

# 5. Shared Learner-Artifact Architecture

Build one reusable learner-artifact system before independently modifying multiple modules.

## 5.1 Data model

Define a versioned artifact capable of representing:

- [ ] module identifier
- [ ] module slug
- [ ] interaction identifier
- [ ] interaction type
- [ ] scenario title or context
- [ ] learner-written response
- [ ] learner-selected decisions
- [ ] consequence states
- [ ] final outcome
- [ ] AI feedback summary
- [ ] AI-identified strengths
- [ ] AI-identified gap
- [ ] AI-recommended next step
- [ ] optional reflection response
- [ ] optional reflection feedback
- [ ] completion state
- [ ] creation timestamp
- [ ] update timestamp
- [ ] schema version

## 5.2 Architecture

- [ ] Create a shared typed artifact interface.
- [ ] Create a shared artifact-management hook or service.
- [ ] Keep artifact logic separate from presentation components.
- [ ] Keep module-specific instructional language in structured content.
- [ ] Support written-response artifacts.
- [ ] Support branching-decision artifacts.
- [ ] Support partially completed artifacts.
- [ ] Support revised responses.
- [ ] Support artifact replacement or updating.
- [ ] Prevent malformed stored data from breaking a module.
- [ ] Add schema-version handling.
- [ ] Add safe parsing.
- [ ] Add graceful degradation when browser storage is unavailable.
- [ ] Do not add account, authentication, database, or cloud persistence requirements.

## 5.3 Learner trust and control

- [ ] Clearly tell learners that work is stored only in their browser.
- [ ] Do not imply that work is connected to an account.
- [ ] Do not imply that work is synchronized across devices.
- [ ] Provide a way to clear stored module work.
- [ ] Provide a way to reset the active practice.
- [ ] Decide whether reflection text is stored automatically.
- [ ] Decide whether reflection display requires learner choice.
- [ ] Avoid unexpectedly resurfacing sensitive personal reflection.
- [ ] Handle shared-computer use responsibly.
- [ ] Ensure the storage approach is consistent with Module 7’s trust principles.

## 5.4 Artifact behavior

Test:

- [ ] first attempt
- [ ] saved attempt
- [ ] revised attempt
- [ ] partial attempt
- [ ] AI feedback failure
- [ ] empty artifact
- [ ] malformed stored artifact
- [ ] outdated schema
- [ ] cleared browser storage
- [ ] storage blocked by the browser
- [ ] multiple module artifacts
- [ ] refresh during the experience

### Phase 5 completion evidence

- [ ] Artifact architecture is reusable.
- [ ] Artifact behavior is documented.
- [ ] No module-specific content is hardcoded into the storage system.
- [ ] Learner control and local-storage disclosure are implemented.
- [ ] Required artifact test cases pass.

---

# 6. Reverse Build v2

## 6.1 Reference implementation

Select one mature reference module before system-wide rollout.

- [ ] Select the reference module.
- [ ] Confirm the module has stable AI feedback behavior.
- [ ] Connect the learner artifact to Reverse Build.
- [ ] Verify that Reverse Build updates after the learner revises an answer.
- [ ] Verify that direct entry without an artifact still works.

## 6.2 Dynamic Experience layer

When a learner artifact exists, show:

- [ ] the scenario or practice context
- [ ] the learner’s actual decision or response
- [ ] a controlled excerpt rather than an overwhelming transcript
- [ ] the strongest reasoning move identified by AI
- [ ] the most important gap or refinement opportunity
- [ ] the recommended next step
- [ ] the learner’s decision pathway for branching experiences
- [ ] the consequence or outcome created by those decisions
- [ ] reflection content only according to the approved learner-control decision

The layer must:

- [ ] say “Your experience” only when learner-specific data exists
- [ ] distinguish clearly between actual learner content and authored examples
- [ ] avoid fabricating personalization
- [ ] avoid displaying stale content from another module
- [ ] avoid presenting AI feedback as an objective final answer

## 6.3 Partial and fallback states

- [ ] Create a “Your experience so far” state for partial completion.
- [ ] Create a truthful non-personalized walkthrough for no-artifact entry.
- [ ] Label authored examples clearly.
- [ ] Provide a low-friction path back to Design Practice.
- [ ] Preserve open and non-linear exploration.
- [ ] Do not gate Reverse Build behind practice completion.

## 6.4 AI Collaboration bridge

Add a learner-specific connective moment that explains:

- [ ] what the AI reviewer noticed
- [ ] which capability-specific criterion shaped that critique
- [ ] why the reviewer was designed to look for that issue
- [ ] how the criterion connects to professional judgment
- [ ] where human judgment remains necessary
- [ ] that the explanation reflects instructional intent, not exposure of raw system prompts

Create one approved learner-facing rubric-intent explanation for:

- [ ] Module 1
- [ ] Module 2
- [ ] Module 3
- [ ] Module 4
- [ ] Module 5
- [ ] Module 6
- [ ] Module 7

## 6.5 Preserve the existing strengths

Do not unnecessarily rewrite:

- [ ] Problem
- [ ] Instructional Foundations
- [ ] Design Decisions
- [ ] existing AI-construction explanation
- [ ] Trade-offs
- [ ] Learning Science and Transfer
- [ ] mentorship-lens language
- [ ] closing professional-judgment framing

## 6.6 Rollout

After the reference module passes:

- [ ] connect Module 1
- [ ] connect Module 2
- [ ] connect Module 3
- [ ] connect Module 4
- [ ] connect Module 5
- [ ] connect Module 6
- [ ] connect Module 7
- [ ] verify each module reads only its own artifact
- [ ] verify each module uses its own rubric-intent explanation
- [ ] verify written and branching interactions render correctly

### Phase 6 completion evidence

- [ ] Reverse Build reconstructs actual learner work.
- [ ] Reverse Build works without learner work.
- [ ] Reverse Build explains why the AI critique focused where it did.
- [ ] Existing strong design-analysis content remains intact.
- [ ] All seven modules pass module-specific verification.

---

# 7. Module 4 — Hero Simulation Experience

## 7.1 Instructional integrity

- [ ] Define an authentic instructional-design problem.
- [ ] Ensure the problem requires professional judgment.
- [ ] Avoid a trivia-style correct-answer interaction.
- [ ] Avoid superficial branching where every choice leads to the same result.
- [ ] Ensure the activity demonstrates the principles taught in Module 4.
- [ ] Ensure consequences are instructionally meaningful.
- [ ] Ensure complexity is appropriate to the module’s purpose.

## 7.2 Decision structure

The interaction must include:

- [ ] a clear initial context
- [ ] a meaningful first decision
- [ ] at least two credible options
- [ ] distinct consequence text for each option
- [ ] state retained from the first decision
- [ ] a second decision shaped by the first choice
- [ ] at least two credible second-decision options
- [ ] a final state or outcome influenced by the decision pathway
- [ ] an opportunity to review what changed
- [ ] an opportunity to explain, reconsider, or refine judgment

## 7.3 Learner experience

- [ ] Make the current decision point clear.
- [ ] Make prior decisions reviewable.
- [ ] Make consequences visible without becoming punitive.
- [ ] Avoid framing professional ambiguity as simple right versus wrong.
- [ ] Show why one path may be stronger under the circumstances.
- [ ] Preserve a calm, premium interaction style.
- [ ] Ensure the interaction works on mobile.
- [ ] Ensure keyboard operation.
- [ ] Ensure screen-reader labels and logical focus order.
- [ ] Prevent accidental loss of the active decision pathway.

## 7.4 AI integration

- [ ] Feed relevant pathway data into the existing AI-feedback system.
- [ ] Include the learner’s explanation of judgment.
- [ ] Ensure feedback references the actual choices made.
- [ ] Ensure feedback remains Module 4-specific.
- [ ] Ensure feedback evaluates scenario and simulation design judgment.
- [ ] Ensure feedback does not merely summarize the selected options.
- [ ] Ensure feedback does not overpraise weak reasoning.
- [ ] Preserve structured feedback output.
- [ ] Handle AI failure without losing the completed simulation pathway.

## 7.5 Artifact and Reverse Build connection

Store:

- [ ] first decision
- [ ] first consequence
- [ ] second decision
- [ ] second consequence
- [ ] final state
- [ ] learner rationale
- [ ] AI critique
- [ ] reflection

Reverse Build must explain:

- [ ] what the learner chose
- [ ] how the first choice changed the second decision
- [ ] what consequence pattern resulted
- [ ] what the AI reviewer noticed
- [ ] why the experience was designed as a stateful decision structure
- [ ] which design trade-offs were made
- [ ] what another designer can reuse

### Phase 7 completion evidence

- [ ] The interaction contains genuine stateful branching.
- [ ] Different choices produce meaningfully different learner experiences.
- [ ] AI feedback references the actual pathway.
- [ ] Reverse Build reconstructs the pathway accurately.
- [ ] Module 4 now demonstrates the capability it teaches.

---

# 8. AI Feedback Regression and Transparency

## 8.1 Regression testing

For affected shared feedback logic, test weak, medium, and strong responses in:

- [ ] Module 2
- [ ] Module 4
- [ ] Module 7

Also run focused regression checks in:

- [ ] Module 1
- [ ] Module 3
- [ ] Module 5
- [ ] Module 6

For every test:

- [ ] preserve the exact input
- [ ] preserve the returned output
- [ ] record pass or fail
- [ ] record the reason
- [ ] record any tuning change
- [ ] rerun earlier cases after shared prompt changes

## 8.2 AI behavior standards

Verify that AI:

- [ ] critiques reasoning rather than surface wording
- [ ] uses capability-specific criteria
- [ ] distinguishes strong from weak judgment
- [ ] identifies a meaningful gap
- [ ] provides an actionable next step
- [ ] avoids generic praise
- [ ] avoids pretending certainty where professional judgment is required
- [ ] does not reveal private system instructions
- [ ] does not invent learner actions
- [ ] fails gracefully

## 8.3 Learner-facing transparency

- [ ] Explain that feedback is AI-supported.
- [ ] Explain that feedback is based on module-specific instructional criteria.
- [ ] Explain that AI feedback is not an authoritative professional verdict.
- [ ] Explain the role of human judgment.
- [ ] Decide where the AI validation and tuning story should be visible.
- [ ] Add a concise reviewer-facing explanation of how the feedback system was tested.
- [ ] Avoid overstating the scale or independence of validation.

### Phase 8 completion evidence

- [ ] Regression cases pass.
- [ ] AI behavior remains module-specific.
- [ ] AI transparency language is accurate.
- [ ] Validation evidence is retained in project documentation.

---

# 9. Public Claims and Product Language Audit

Audit all public and potentially public surfaces:

- [ ] homepage
- [ ] Orientation
- [ ] dashboard
- [ ] About page
- [ ] all seven module pages
- [ ] Reverse Build
- [ ] repository README
- [ ] metadata descriptions
- [ ] social-preview metadata
- [ ] GitHub repository description
- [ ] planned portfolio copy
- [ ] planned LinkedIn announcement
- [ ] screenshots or demo captions
- [ ] documentation that may be read by repository visitors

## 9.1 Reverse Build claims

- [ ] Do not claim personal reconstruction until the completed feature supports it.
- [ ] After implementation, ensure the claim precisely describes what is reconstructed.
- [ ] Distinguish learner-experience reconstruction from module-design reconstruction.
- [ ] Do not imply that every part of Reverse Build is dynamically personalized.

## 9.2 Simulation claims

- [ ] Do not describe all module practices as full simulations.
- [ ] Do not use “consequences” unless the interaction contains meaningful consequences.
- [ ] Describe Module 4’s completed interaction accurately.
- [ ] Distinguish guided decision practice from branching simulation.

## 9.3 Adaptive-learning claims

- [ ] Do not describe the platform itself as adaptive.
- [ ] State that Module 5 teaches adaptive and personalized learning architecture.
- [ ] Do not imply that the current platform changes pathways based on learner performance.
- [ ] Do not imply dynamic personalization that is not implemented.

## 9.4 Capability claims

- [ ] Present the seven capabilities as Bradley’s current pathway.
- [ ] Avoid universal prescriptions.
- [ ] Avoid claims of formal industry validation.
- [ ] Avoid implying that research independently produced the exact seven.
- [ ] Preserve credible evidence for the concepts taught inside each capability.

## 9.5 Validation claims

- [ ] Do not imply outside user validation until it occurs.
- [ ] Distinguish internal testing from external review.
- [ ] Distinguish AI review from human user testing.
- [ ] Do not use participant counts or testing claims without records.

## 9.6 Access and product claims

Verify claims concerning:

- [ ] free access
- [ ] no account requirement
- [ ] ungated module access
- [ ] local progress storage
- [ ] local artifact storage
- [ ] persistence limitations
- [ ] full-stack development
- [ ] AI integration
- [ ] public availability
- [ ] permanence

Avoid indefinite promises such as “free permanently” unless Bradley consciously chooses to make that commitment.

### Phase 9 completion evidence

- [ ] Every major claim maps to observable product evidence.
- [ ] Future-state capabilities are labeled as future-state.
- [ ] Bradley personally approves the final public language.
- [ ] No known credibility-risk language remains.

---

# 10. Repository and Production Hardening

## 10.1 Asset pipeline

- [ ] Identify all production assets loaded from `raw.githubusercontent.com`.
- [ ] Move appropriate application assets into the approved asset pipeline.
- [ ] Update references.
- [ ] Optimize image dimensions and formats where needed.
- [ ] Add meaningful alternative text.
- [ ] Verify images load in local development.
- [ ] Verify images load in production.
- [ ] Verify no broken raw-GitHub references remain.
- [ ] Remove unused default Next.js assets.
- [ ] Remove unused or duplicated production assets.

## 10.2 Repository hygiene

- [ ] Remove obsolete scaffolding that could confuse future contributors.
- [ ] Identify duplicate or outdated strategy documents.
- [ ] Mark retained historical documents as historical where appropriate.
- [ ] Ensure current source-of-truth hierarchy is accurate.
- [ ] Ensure README instructions match the current project.
- [ ] Ensure environment-variable documentation is accurate.
- [ ] Confirm no secrets or private keys exist in tracked files.
- [ ] Confirm public documentation contains no confidential employer information.
- [ ] Confirm public examples do not expose proprietary course content.

## 10.3 Build integrity

- [ ] Run the production build.
- [ ] Resolve build errors.
- [ ] Resolve relevant warnings.
- [ ] Check all routes.
- [ ] Check internal links.
- [ ] Check external links.
- [ ] Check page metadata.
- [ ] Check social-preview metadata.
- [ ] Check direct module-entry routes.
- [ ] Check refresh behavior.
- [ ] Check console errors.
- [ ] Check network failures.
- [ ] Check AI endpoint behavior in production.

### Phase 10 completion evidence

- [ ] Production build passes.
- [ ] Production assets are stable.
- [ ] Repository is safe for public inspection.
- [ ] No known broken route, link, or required asset remains.

---

# 11. End-to-End Experience Validation

## 11.1 First-time journey

Test as a new visitor:

- [ ] homepage explains what Future of ID is
- [ ] visitor understands that the seven capabilities are Bradley’s current pathway
- [ ] visitor understands how the approach can be adapted to their context
- [ ] entry choices are clear
- [ ] Orientation works without prior context
- [ ] dashboard works without prior context
- [ ] modules can be entered non-linearly
- [ ] progress language does not imply gating
- [ ] AI behavior is explained
- [ ] Reverse Build purpose is clear

## 11.2 Module validation

For every module:

- [ ] page loads
- [ ] module question is clear
- [ ] takeaway is clear
- [ ] theory supports the practice
- [ ] practice requires professional judgment
- [ ] AI feedback is module-specific
- [ ] reflection supports transfer
- [ ] learner artifact is stored correctly
- [ ] Reverse Build reads the correct artifact
- [ ] no artifact fallback works
- [ ] module completion works
- [ ] mobile behavior works

## 11.3 Failure states

Test:

- [ ] AI request timeout
- [ ] AI server error
- [ ] malformed AI response
- [ ] network disconnection
- [ ] page refresh before feedback
- [ ] page refresh after feedback
- [ ] browser storage disabled
- [ ] browser storage cleared
- [ ] partial artifact
- [ ] corrupted artifact
- [ ] long learner response
- [ ] minimum-length learner response
- [ ] repeated submission
- [ ] direct Reverse Build entry
- [ ] navigation away and return
- [ ] multiple browser tabs

## 11.4 Responsive validation

Test at minimum:

- [ ] small mobile width
- [ ] standard mobile width
- [ ] tablet width
- [ ] laptop width
- [ ] wide desktop width

Check:

- [ ] no horizontal overflow
- [ ] readable line lengths
- [ ] usable modal dimensions
- [ ] buttons remain reachable
- [ ] branch choices remain understandable
- [ ] feedback remains readable
- [ ] focus is not lost
- [ ] long content does not become unusable

## 11.5 Accessibility validation

- [ ] keyboard-only navigation
- [ ] visible focus states
- [ ] logical focus order
- [ ] modal focus trapping
- [ ] Escape behavior
- [ ] focus return after modal close
- [ ] heading hierarchy
- [ ] form labels
- [ ] button labels
- [ ] error announcements
- [ ] status announcements
- [ ] image alternative text
- [ ] sufficient contrast
- [ ] reduced-motion consideration
- [ ] no meaning communicated by color alone

### Phase 11 completion evidence

- [ ] End-to-end test record is complete.
- [ ] Material defects are resolved.
- [ ] Deferred defects are documented and do not undermine launch claims.
- [ ] Bradley personally completes the primary learner journey.

---

# 12. Private Human Review

This review occurs after the core product fixes and internal testing.

## 12.1 Reviewer group

Include, where reasonably available:

- [ ] experienced instructional designer or learning architect
- [ ] L&D leader or hiring-manager-level reviewer
- [ ] less-experienced instructional designer
- [ ] technically informed reviewer
- [ ] reviewer unfamiliar with the project

## 12.2 Reviewer instructions

Ask reviewers to evaluate:

- [ ] what they think Future of ID is
- [ ] who they believe it is for
- [ ] where they would begin
- [ ] whether they understand why Bradley selected these seven capabilities
- [ ] whether “meet you where you are” is demonstrated
- [ ] whether the AI feedback feels specific
- [ ] whether Module 4 feels like meaningful simulation design
- [ ] whether Reverse Build reconnects to their actual experience
- [ ] whether Reverse Build feels like mentorship
- [ ] whether any claim feels stronger than the product evidence
- [ ] whether anything harms trust
- [ ] whether anything breaks or becomes confusing

## 12.3 Evidence collection

For every reviewer:

- [ ] record role or perspective
- [ ] record review date
- [ ] record tested route or pathway
- [ ] record major observations
- [ ] separate defects from preferences
- [ ] separate comprehension issues from stylistic opinions
- [ ] record required action
- [ ] record intentionally declined suggestions and rationale

## 12.4 Response rules

Fix findings that materially affect:

- [ ] credibility
- [ ] instructional integrity
- [ ] learner trust
- [ ] comprehension
- [ ] accessibility
- [ ] reliability
- [ ] public-claim accuracy

Do not automatically act on:

- [ ] personal aesthetic preference
- [ ] requests for unrelated new features
- [ ] suggestions that conflict with product philosophy
- [ ] suggestions that unnecessarily increase scope
- [ ] requests to make the seven capabilities universal

### Phase 12 completion evidence

- [ ] Private human review completed.
- [ ] Material findings resolved.
- [ ] Declined recommendations documented.
- [ ] No unresolved reviewer finding creates a known integrity risk.

---

# 13. Documentation for Forking and Reuse

## 13.1 Explain the reusable method

Documentation must help another practitioner:

- [ ] assess where they are professionally
- [ ] identify current work demands
- [ ] identify immediate capability gaps
- [ ] identify future professional direction
- [ ] select their own capability areas
- [ ] define why each capability matters
- [ ] build a coherent capability pathway
- [ ] connect theory, practice, feedback, reflection, and Reverse Build
- [ ] create module-specific AI reviewer criteria
- [ ] replace Bradley’s content without rewriting the platform architecture
- [ ] preserve learner trust and transparency

## 13.2 Define what is reusable and replaceable

Document:

- [ ] reusable application shell
- [ ] reusable module pattern
- [ ] reusable Design Practice architecture
- [ ] reusable learner-artifact system
- [ ] reusable Reverse Build architecture
- [ ] reusable AI feedback contract
- [ ] replaceable capability data
- [ ] replaceable module content
- [ ] replaceable scenarios
- [ ] replaceable rubric criteria
- [ ] replaceable visual branding where appropriate

## 13.3 Forking boundaries

- [ ] Explain required environment configuration.
- [ ] Explain where API functionality is optional.
- [ ] Explain what happens without an AI key.
- [ ] Explain local-storage behavior.
- [ ] Explain which files are source-of-truth documents.
- [ ] Explain how to add or remove capabilities.
- [ ] Explain how to update navigation and module data.
- [ ] Explain how to test a customized pathway.
- [ ] Avoid presenting the repository as a one-click production platform unless it truly is one.

### Phase 13 completion evidence

- [ ] A technically capable practitioner can identify how to replace the capability pathway.
- [ ] Documentation reinforces “meet you where you are.”
- [ ] Forking documentation does not require copying Bradley’s seven capabilities.

---

# 14. Explicitly Deferred Work

These items are not required for the first public introduction unless a later discovery changes the decision.

- [ ] Supabase persistence
- [ ] learner accounts
- [ ] authentication
- [ ] cross-device synchronization
- [ ] adaptive sequencing
- [ ] dynamic learner profiles
- [ ] community features
- [ ] social discussion
- [ ] certificates or badges
- [ ] advanced analytics dashboards
- [ ] richer AI coaching agents
- [ ] role-play agents
- [ ] rebuilding all Design Practices as branching simulations
- [ ] new modules
- [ ] major homepage redesign
- [ ] major dashboard redesign
- [ ] broad visual redesign
- [ ] native mobile application
- [ ] LMS integration
- [ ] content-management administration interface

Deferred items must not be quietly added to active scope without:

- [ ] clear justification
- [ ] impact assessment
- [ ] architecture review
- [ ] Bradley’s approval

---

# 15. Final Public-Launch Gates

## Gate 1 — Capability-positioning integrity

- [ ] The seven capabilities are accurately framed as Bradley’s current professional pathway.
- [ ] The reusable method is clear.
- [ ] Universal or externally validated framework claims are removed.
- [ ] Supporting module content remains credibly grounded.

## Gate 2 — Experience integrity

- [ ] Module 4 demonstrates meaningful stateful simulation design.
- [ ] Reverse Build reconstructs actual learner work.
- [ ] AI critique is connected to capability-specific instructional intent.
- [ ] Open exploration still works without learner artifacts.

## Gate 3 — Learner-trust integrity

- [ ] Local persistence is transparent.
- [ ] Learners can clear saved work.
- [ ] Reflection content is handled intentionally.
- [ ] AI limitations and human judgment are clear.
- [ ] Failure states do not mislead learners.

## Gate 4 — Technical integrity

- [ ] Production build passes.
- [ ] Required routes and interactions work.
- [ ] Production assets are stable.
- [ ] Core responsive and accessibility checks pass.
- [ ] No known critical defect remains.

## Gate 5 — Claims integrity

- [ ] Every major public claim maps to product evidence.
- [ ] Future-state features are labeled accurately.
- [ ] No unsupported research, validation, personalization, adaptation, or simulation claim remains.
- [ ] Bradley approves the exact first-introduction language.

## Gate 6 — External reality check

- [ ] Private first-time-user review is complete.
- [ ] Material credibility findings are resolved.
- [ ] Material comprehension findings are resolved.
- [ ] Material trust findings are resolved.
- [ ] Material accessibility or reliability findings are resolved.

---

# 16. Final Personal Sign-Off

The following items may only be checked by Bradley.

- [ ] I personally completed the primary Future of ID journey from the perspective of a first-time learner.
- [ ] I personally completed the Module 4 simulation through multiple decision paths.
- [ ] I personally verified that Reverse Build reconstructed my actual work accurately.
- [ ] I personally reviewed how my learner data was stored and cleared.
- [ ] I personally reviewed all major public-facing claims.
- [ ] I personally reviewed the explanation of why I selected these seven capabilities.
- [ ] I personally confirmed that the product does not present my seven capabilities as universal.
- [ ] I personally reviewed the forking and reuse explanation.
- [ ] I personally reviewed unresolved defects and accepted only those that do not compromise integrity.
- [ ] I can defend the product’s major claims honestly if questioned by a senior L&D leader, hiring manager, instructional designer, or developer.
- [ ] I believe the experience demonstrates the professional judgment it asks learners to practice.
- [ ] I am comfortable attaching my professional name and reputation to this version.

## Final decision

- [ ] **APPROVED FOR FIRST PUBLIC INTRODUCTION**

**Approval date:**  
**Approved by:** Bradley Pierce  
**Version or commit:**  
**Production URL reviewed:**  
**Notes:**

---

# 17. Completion Record

For each completed phase, record:

| Phase                          | Completion date | Commit or PR | Personally verified by | Notes |
| ------------------------------ | --------------- | ------------ | ---------------------- | ----- |
| Capability positioning         |                 |              |                        |       |
| Implementation briefs          |                 |              |                        |       |
| Learner-artifact architecture  |                 |              |                        |       |
| Reverse Build v2               |                 |              |                        |       |
| Module 4 simulation            |                 |              |                        |       |
| AI regression and transparency |                 |              |                        |       |
| Public claims audit            |                 |              |                        |       |
| Production hardening           |                 |              |                        |       |
| End-to-end validation          |                 |              |                        |       |
| Private human review           |                 |              |                        |       |
| Forking documentation          |                 |              |                        |       |
| Final launch approval          |                 |              |                        |       |
