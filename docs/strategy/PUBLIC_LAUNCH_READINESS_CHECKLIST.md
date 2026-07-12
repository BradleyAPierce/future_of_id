# Future of ID — Public Launch Readiness Checklist

**Document status:** Working execution checklist  
**Owner:** Bradley Pierce  
**Public launch status:** Not approved  
**Completion rule:** No first public introduction, announcement, launch post, portfolio promotion, or broad public sharing until every required launch gate is completed and personally approved.

---

## Launch objective

Future of ID is not being launched as a finished universal model of instructional design. It is being introduced as a working demonstration of a capability-development system, showing how an instructional designer can identify future-relevant capabilities, develop them through intentional practice, and create a reusable learning architecture others can adapt.

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

- [x] Future of ID will not be publicly introduced merely because it is visually polished.
- [ ] Future of ID will not make a claim that cannot be observed or defended in the actual experience.
  - **Open dependency:** Repository governance now enforces claim accuracy, but implementation evidence is still required for Reverse Build v2 learner reconstruction, learner-artifact persistence, and the Module 4 simulation experience.
- [ ] Core product gaps will not be hidden through careful marketing language.
  - **Open dependency:** The current experience still requires implementation work before all learner-facing claims are supported by observable behavior.
- [x] Product integrity takes priority over launch speed.
- [x] Reviewer recommendations will not be implemented automatically without evaluation.
- [x] Scope will not expand into unrelated homepage, dashboard, or design-system redesign work.
- [x] New functionality must follow the existing system-first architecture.
- [ ] Instructional content, application logic, and presentation must remain separated.
  - **Open dependency:** The architecture direction is approved, but Reverse Build v2 still requires embedded instructional content and presentation responsibilities to be refactored into a cleaner system.
- [x] No account system, Supabase persistence, authentication, or unrelated future feature will be pulled into this launch-readiness scope.
- [x] The launch-readiness process will end when the defined gates are passed; it will not become an endless perfection cycle.

### Section 2 approval record

- **Approval status:** Section 2 documentation and repository-governance remediation approved.
- **Approval date:** 2026-07-11
- **Approved by:** Bradley Pierce
- **Launch execution authority:** `PUBLIC_LAUNCH_READINESS_CHECKLIST.md`
- **External review status:** Claude and Grok reviews are advisory evidence and input only; they are not final authority and do not create separate launch gates.
- **Implementation-dependent principles:** The three principles marked open above remain incomplete until their required implementation evidence exists.

## 2.1 Approved execution order

**Execution-order status:** Approved by Bradley Pierce on 2026-07-11. The fifteen-step order below remains authoritative.

Work must proceed in this order unless a direct dependency is documented and Bradley approves a change:

1. Revise and approve this checklist.
2. Inventory and reconcile capability claims.
3. Approve the Reverse Build v2, Module 4, learner-artifact, privacy, AI-contract, and validation briefs.
4. Build the shared learner-artifact system and harden existing progress persistence.
5. Build Reverse Build v2 on Module 2 as the reference implementation.
6. Build the Module 4 stateful simulation, structured AI feedback, artifact integration, and Reverse Build behavior.
7. Roll Reverse Build v2 through the remaining modules.
8. Conduct scenario and Reflection AI regression testing and retain exact evidence.
9. Complete the public-claims audit.
10. Complete repository, production, asset, responsive, and accessibility hardening.
11. Run full internal validation.
12. Complete forking documentation, license verification, and the technical fork test.
13. Conduct private human review.
14. Resolve material findings and rerun focused validation.
15. Complete Bradley’s personal launch sign-off.

An execution item may be checked only after its defined implementation, test evidence, review, and required personal approval are complete.

### Historical sequencing note

Capability-positioning analysis began while this checklist was still being refined. Bradley accepted that activity as dependency discovery needed to clarify the checklist, not as completion of the capability-positioning phase or out-of-sequence launch implementation. No launch implementation work was approved through that analysis. This note preserves the historical context; it does not mark any additional checklist item complete. Future launch-readiness work must follow the approved execution order above unless Bradley explicitly approves a documented change.

---

# 3. Capability-System and Current-Pathway Positioning

## 3.1 Define Future of ID as a capability development system

- [x] Define Future of ID as a capability development system rather than a product permanently defined by a fixed number of capabilities.
- [x] Explain that the system is a repeatable method and learning architecture for identifying, developing, applying, and sharing future-relevant instructional design capabilities.
- [x] State that the current seven capabilities are the first complete demonstration of that method.
- [x] Explain that the seven capabilities provide implemented evidence of the method producing a coherent pathway; they are not external validation of effectiveness or the permanent boundary of the system.
- [x] Explain that practitioners may identify different capability needs based on their:
  - [x] role
  - [x] responsibilities
  - [x] organization
  - [x] industry
  - [x] career direction
  - [x] professional goals
- [x] Explain that a practitioner-created pathway can select different capability areas while preserving the Future of ID learning architecture.
- [x] Clarify that “capability development system” refers to the repeatable learning method and architecture.
- [x] Do not imply that Future of ID automatically diagnoses needs, recommends capabilities algorithmically, creates adaptive learning plans, or dynamically personalizes pathways.

### Section 3.1 Approval Record

- **Status:** Approved
- **Approval date:** 2026-07-12
- **Approved by:** Bradley Pierce

#### Decision

Section 3.1 remediation is complete and approved for launch readiness review.

#### Evidence Reviewed

Approval was based on:

- establishment of `FUTURE_READY_CAPABILITY_MODEL.md` as the canonical capability-development-system source
- definition of Future of ID as a repeatable capability development system
- clarification of the Identify → Develop → Apply → Share method
- clarification of the Theory → Experience → Reverse Build → Reflection learning architecture
- repositioning of the seven capabilities as Bradley’s current implemented pathway and first complete system demonstration
- removal of unsupported universal, permanent, exhaustive, or research-backed claims
- clarification that practitioner-created pathways can evolve and include additional capability areas
- explicit boundaries against automatic diagnosis, recommendation, or personalization claims
- alignment of public-facing copy, metadata, structured content, and experience documentation

#### Remediation Summary

- 33 documentation and content files were updated.
- No application behavior changed.
- No routes, components, services, APIs, hooks, or architecture patterns changed.
- Changes within `web/` were limited to copy, metadata, and structured content.
- Validation passed:
  - `npm run lint`
  - `tsc --noEmit`
  - `git diff --check`

#### Remaining Considerations

- Historical documents may intentionally preserve previous language for audit and historical purposes.
- `PRODUCT_ARCHITECTURE.md` remains under evaluation and should continue aligning with the canonical capability model before final launch.

#### Approval Rationale

> Section 3.1 is approved because Future of ID is now accurately positioned as a reusable capability development system rather than a fixed universal capability framework. The seven capabilities represent the first complete demonstrated pathway within that system while preserving room for practitioner-created pathways and future evolution.

## 3.2 Explain the capability-discovery process

- [x] Explain that Future of ID was not created from a claim of mastery over every capability.
- [x] Explain that it was created by an experienced instructional designer intentionally developing capabilities needed for future professional work.
- [x] Frame the discovery process as disciplined professional calibration, not beginner status or learning the profession from scratch.

### I know what I know

- [x] Represent Bradley’s existing instructional design experience, established strengths, professional judgment, and existing expertise.

### I know what I don’t know

- [x] Represent capabilities Bradley recognized required intentional development.
- [x] Show where additional knowledge, practice, and experimentation supported deliberate professional growth.

### I don’t know what I don’t know

- [x] Represent emerging questions and possibilities revealed through building, research, experimentation, and reflection.
- [x] Present exploration as a responsible way to discover new professional possibilities, not evidence that the original pathway was arbitrary.

- [x] Preserve the central credibility statement: Bradley understood where existing expertise ended, intentionally explored new capability areas, and documented how those capabilities were applied and refined.

### Section 3.2 Approval Record

- **Status:** Approved
- **Approval date:** 2026-07-12
- **Approved by:** Bradley Pierce

#### Decision

Section 3.2 remediation is complete and approved for launch readiness review.

#### Evidence Reviewed

Approval was based on:

- establishment of the professional calibration narrative as a canonical part of Future of ID positioning
- clarification that Future of ID emerged from an experienced instructional designer’s intentional capability development process
- definition of the three-part calibration model:
  - Know what you know
  - Know what you do not know
  - Discover what you did not know you needed to know
- recognition that Bradley’s existing experience, strengths, professional judgment, and development needs informed the current capability pathway
- connection between professional calibration and the Identify → Develop → Apply → Share system methodology
- connection between professional calibration and the Theory → Experience → Reverse Build → Reflection learning architecture
- clarification that experimentation, applied practice, research, building, and reflection contributed to capability discovery and refinement
- preservation of the seven capabilities as Bradley’s first demonstrated pathway rather than a universal, exhaustive, or permanent framework
- preservation of practitioner-created pathways and boundaries against automatic diagnosis, recommendation, or pathway generation

#### Remediation Summary

- The canonical professional calibration narrative was added to `FUTURE_READY_CAPABILITY_MODEL.md`.
- Public-facing alignment was added to `about.ts`, the Orientation experience, and `ORIENTATION_EXPERIENCE_STORYBOARD.md`.
- `README.md` was reviewed and intentionally left unchanged because its existing positioning remained accurate.
- No application behavior changed.
- No routes, reusable component definitions, services, APIs, persistence mechanisms, interactions, or architecture patterns changed.
- Orientation changes were limited to explanatory content within existing presentation structures.
- Validation passed:
  - `npm run lint`
  - `tsc --noEmit`
  - `git diff --check`

#### Remaining Considerations

- The professional calibration narrative should continue guiding future public positioning decisions.
- Future updates should preserve the distinction between Bradley’s demonstrated pathway and practitioner-created pathways within the larger capability development system.
- The seven capabilities should continue to be presented as an implementation example rather than a universal definition of the profession.

#### Approval Rationale

> Section 3.2 is approved because Future of ID now clearly communicates the professional calibration process that produced the system. The narrative establishes experienced practice, recognized development needs, experimentation, reflection, and applied learning as the foundation for capability development while preserving the seven capabilities as the first demonstrated pathway within a reusable system.

## 3.3 Lock the correct meaning of the current seven-capability pathway

- [ ] Create one canonical Bradley-approved explanation of why the seven capabilities were selected.
- [ ] Preserve this conceptual foundation: “Future of ID is a deliberately selected professional learning pathway shaped by its creator’s current work, responsibilities, development needs, and career direction. The seven capabilities are neither universal nor exhaustive; they demonstrate how practitioners can build an intentional pathway around where they are and where they are trying to go.”
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
- [ ] Preserve both truths: the pathway has a personal and professional origin, and the resulting product remains relevant and reusable for other practitioners.

## 3.4 Clarify the reusable product promise

- [ ] Document that the reusable contribution is the method—not the exact list of seven.
- [ ] Explain that another practitioner may need a different capability pathway.
- [ ] Explain that a forked version of Future of ID may replace all seven capabilities.
- [ ] Explain that the learning architecture can be reused while the capability topics change.
- [ ] Connect this architecture directly to the promise to “meet you where you are.”
- [ ] Show that Future of ID itself was created by meeting Bradley where he currently is.
- [ ] Explain that professional calibration may cause the capability pathway to change over time.

## 3.5 Correct outdated foundational language

Audit and update, at minimum:

- [ ] `docs/strategy/BLUEPRINT.md`
- [ ] `docs/architecture/SITE_MAP.md`
- [ ] current project `README.md`
- [ ] any retained alternate README files
- [ ] `docs/strategy/DECISIONS.md`
- [ ] `docs/architecture/CONTENT_ARCHITECTURE.md`
- [ ] `docs/architecture/TECH_ARCHITECTURE.md`
- [ ] `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md`
- [ ] `docs/experience/EXPERIENCE_PHILOSOPHY.md`
- [ ] `docs/strategy/EXPERIENCE_ARCHITECTURE.md`
- [ ] `docs/experience/PRODUCT_EXPERIENCE_MAP.md`
- [ ] Orientation documentation
- [ ] About-page documentation
- [ ] page metadata and social-preview copy
- [ ] any source comments or content files containing positioning claims

Before implementation briefs are approved:

- [ ] Reconcile `docs/architecture/TECH_ARCHITECTURE.md` with the approved local-persistence MVP and the explicit deferral of Supabase, accounts, and authentication.
- [ ] Confirm which documents are current sources of truth and which are historical or superseded.
- [ ] Ensure implementation work orders do not rely on stale future-state architecture.

Search the repository for language including:

- [ ] “seven research-grounded capabilities”
- [ ] “seven capabilities shaping the future”
- [ ] “through 2030”
- [ ] “research-backed reasons these seven were selected”
- [ ] “industry-validated”
- [ ] “the capabilities every instructional designer needs”
- [ ] “next-generation capabilities” when used as a universal claim
- [ ] similar language that implies universal selection or external validation

## 3.6 Preserve legitimate evidence standards

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
- [ ] A first-time reader can distinguish Future of ID from its current seven-capability pathway.
- [ ] A first-time reader understands why Bradley selected these capabilities and does not mistake disciplined development for a lack of existing expertise.
- [ ] A first-time reader can explain why these seven capabilities were selected without assuming they are mandatory for everyone.
- [ ] A first-time reader understands that the method can support practitioner-created capability pathways using different capability areas.

---

# 4. Launch-Readiness Implementation Briefs

No major coding begins until each core feature has a concise implementation brief.

## 4.1 Reverse Build v2 brief

- [ ] Define the current problem.
- [ ] Define the intended learner experience.
- [ ] Define Reverse Build as the mechanism that makes capability development visible.
- [ ] Define how Reverse Build reveals:
  - [ ] the capability need or professional challenge that existed
  - [ ] what needed to be learned or investigated
  - [ ] how concepts were applied
  - [ ] the decisions that shaped implementation
  - [ ] the trade-offs that existed
  - [ ] where professional judgment remained necessary
  - [ ] how understanding evolved through practice
- [ ] Define how Reverse Build connects Bradley’s capability-development journey with the learner’s capability-development journey without making Bradley’s exact pathway mandatory for every learner.
- [ ] Keep Reverse Build focused on transferable capability development and professional reasoning rather than personal journaling, autobiographical storytelling, raw development history, prompt exposure, or code walkthroughs.
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
- [ ] Confirm that Reverse Build preserves the sequence Design Practice → AI Review → Reverse Build → Reflection.
- [ ] Confirm that Reverse Build does not display or depend on the learner’s Reflection.
- [ ] Define how completed and partially completed Design Practice prompts appear when one module contains multiple prompts.

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
- [ ] Define a validated branching-simulation request contract separate from the written-response request form.
- [ ] Define the authoritative repository data used by the server to reconstruct decision, consequence, and pathway language.
- [ ] Prohibit client-written pathway descriptions from being treated as authoritative state.

## 4.3 Learner-artifact and persistence brief

- [ ] Define one current learner artifact per module.
- [ ] Define how the artifact stores the latest response and associated AI feedback for each Design Practice prompt.
- [ ] Define how a revised response updates the current artifact without creating attempt history.
- [ ] Define Module 4’s structured decisions, pathway, consequences, and final state.
- [ ] Define how Reflection is persisted after Reverse Build without being displayed inside Reverse Build.
- [ ] Define course-progress hardening and reset behavior alongside artifact persistence.
- [ ] Define schema-version, unsupported-version, stale-data, partial-data, and migration behavior.
- [ ] Explicitly exclude attempt history, version history, longitudinal tracking, portfolio management, and cross-device synchronization.

## 4.4 Privacy and data-flow brief

- [ ] Define the local browser-persistence disclosure.
- [ ] Define the disclosure shown before or when learner input is transmitted for AI processing.
- [ ] Define what the Future of ID application itself retains.
- [ ] Verify any provider-retention statement against current authoritative sources before using it.
- [ ] Prohibit claims that learner work remains only in the browser when AI feedback is requested.
- [ ] Prohibit unverified statements about OpenAI retention behavior.

## 4.5 Validation brief

- [ ] Define which acceptance checks are automated.
- [ ] Define which acceptance checks require manual review.
- [ ] Define the exact commands, environments, routes, browsers, viewport sizes, and assistive-technology checks used where applicable.
- [ ] Define pass, fail, defect-severity, evidence, and retest rules.
- [ ] Define `docs/validation/ai-feedback-regression/` as the location for exact AI test inputs, outputs, verdicts, reasons, tuning changes, and rerun evidence.
- [ ] Define the launch-validation record under `docs/validation/` before testing begins.
- [ ] Confirm that an automated accessibility scan does not by itself close the accessibility gate.

## 4.6 Implementation-control requirements

Each implementation work order must:

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
- [ ] Learner-artifact and persistence brief approved.
- [ ] Privacy and data-flow brief approved.
- [ ] Module 4 AI-contract decisions approved.
- [ ] Validation brief approved.
- [ ] Acceptance criteria are specific enough that completion can be tested rather than assumed.

---

# 5. Shared Learner-Artifact Architecture

Build one reusable learner-artifact system before independently modifying multiple modules.

For this launch, the system stores one current artifact per module. It does not store attempt history.

## 5.1 Data model

Define a versioned module artifact capable of representing:

- [ ] module identifier
- [ ] module slug
- [ ] a current Design Practice entry for each module prompt, keyed by an authoritative interaction identifier
- [ ] the interaction type for each entry: written response or branching simulation
- [ ] the authoritative scenario or practice-context identifier
- [ ] the learner’s latest written response for each written prompt
- [ ] the AI feedback associated with that latest response
- [ ] AI feedback summary, strengths, gap when applicable, and recommended next step
- [ ] Module 4’s validated decisions, pathway, consequences, final state, and learner rationale
- [ ] the learner’s current Reflection response after Reverse Build
- [ ] Reflection feedback when requested
- [ ] completion state
- [ ] creation timestamp
- [ ] update timestamp
- [ ] schema version

Explicitly exclude:

- [ ] attempt history
- [ ] version history
- [ ] longitudinal tracking
- [ ] portfolio management
- [ ] cross-device synchronization

## 5.2 Architecture

- [ ] Create a shared typed artifact interface.
- [ ] Create a shared artifact-management hook or service.
- [ ] Keep artifact logic separate from presentation components.
- [ ] Keep module-specific instructional language in structured content.
- [ ] Support written-response artifacts.
- [ ] Support branching-decision artifacts.
- [ ] Support partially completed artifacts.
- [ ] Support revised responses.
- [ ] Update the current prompt entry and associated feedback when a learner revises a response.
- [ ] Prevent feedback from an earlier response from being presented as feedback on a later revision.
- [ ] Support current-artifact replacement or updating without creating an archive.
- [ ] Prevent malformed stored data from breaking a module.
- [ ] Add schema-version handling.
- [ ] Add safe parsing.
- [ ] Add graceful degradation when browser storage is unavailable.
- [ ] Treat stale, unsupported, or incomplete stored data as unavailable when it cannot be migrated safely.
- [ ] Prevent one module from reading or displaying another module’s artifact.
- [ ] Do not add account, authentication, database, or cloud persistence requirements.

## 5.3 Existing course-progress hardening

- [ ] Add safe parsing to the existing course-progress store.
- [ ] Catch failures from browser-storage reads and writes.
- [ ] Handle malformed, stale, incomplete, and unsupported progress data without breaking navigation or module access.
- [ ] Define and implement learner-controlled progress reset behavior.
- [ ] Preserve same-tab and cross-tab update behavior without allowing synchronization failures to break the experience.
- [ ] Keep all modules available when progress persistence fails or is cleared.

## 5.4 Learner trust and control

- [ ] Clearly explain that saved progress and learner artifacts are persisted locally in the current browser.
- [ ] Do not imply that work is connected to an account.
- [ ] Do not imply that work is synchronized across devices.
- [ ] Provide a way to clear stored module work.
- [ ] Provide a way to reset the active practice.
- [ ] Provide the approved way to reset course-progress data.
- [ ] Explain when learner input is transmitted for AI processing.
- [ ] Explain what the Future of ID application itself retains.
- [ ] Use provider-retention language only when it has been verified from current authoritative sources.
- [ ] Do not claim that work remains only in the browser when AI feedback is requested.
- [ ] Persist Reflection after Reverse Build according to the approved artifact model.
- [ ] Do not display Reflection inside Reverse Build.
- [ ] Avoid unexpectedly resurfacing sensitive personal reflection.
- [ ] Handle shared-computer use responsibly.
- [ ] Ensure the storage approach is consistent with Module 7’s trust principles.

## 5.5 Artifact and progress behavior

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
- [ ] multiple Design Practice prompts within one module artifact
- [ ] refresh during the experience
- [ ] course-progress read failure
- [ ] course-progress write failure
- [ ] malformed course-progress data
- [ ] learner-initiated module-work reset
- [ ] learner-initiated course-progress reset

### Phase 5 completion evidence

- [ ] Artifact architecture is reusable.
- [ ] Artifact behavior is documented.
- [ ] No module-specific content is hardcoded into the storage system.
- [ ] Learner control, local-persistence disclosure, and AI-processing disclosure are implemented accurately.
- [ ] Course progress and module access remain usable when persistence fails.
- [ ] Required automated and manual persistence test cases pass and are recorded in the approved launch-validation record.

---

# 6. Reverse Build v2 — Module 2 Reference Implementation

## 6.1 Reference implementation

Use Module 2 as the mature written-response reference before system-wide rollout.

- [ ] Confirm Module 2 as the reference implementation.
- [ ] Confirm Module 2 has stable AI feedback behavior before integration.
- [ ] Connect the learner artifact to Reverse Build.
- [ ] Verify that Reverse Build updates after the learner revises an answer.
- [ ] Verify that direct entry without an artifact still works.
- [ ] Verify that each completed Module 2 Design Practice prompt reconnects to its own latest response and associated feedback.

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

The layer must:

- [ ] say “Your experience” only when learner-specific data exists
- [ ] distinguish clearly between actual learner content and authored examples
- [ ] avoid fabricating personalization
- [ ] avoid displaying stale content from another module
- [ ] avoid presenting AI feedback as an objective final answer
- [ ] exclude the learner’s Reflection from Reverse Build

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

## 6.6 Reference-component accessibility

- [ ] Apply keyboard, visible-focus, logical-focus-order, and screen-reader requirements to the dynamic Reverse Build controls.
- [ ] Ensure the Reverse Build modal traps focus, supports Escape, and returns focus to the triggering control.
- [ ] Ensure learner-content labels distinguish learner text, AI critique, and authored rationale programmatically as well as visually.
- [ ] Ensure partial, empty, loading, and failure states are announced appropriately.
- [ ] Record both automated scan results and manual keyboard and screen-reader checks for the affected Reverse Build components.

### Phase 6 completion evidence

- [ ] Reverse Build reconstructs actual learner work.
- [ ] Reverse Build works without learner work.
- [ ] Reverse Build explains why the AI critique focused where it did.
- [ ] Existing strong design-analysis content remains intact.
- [ ] Module 2 passes automated and manual reference-module verification.

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
- [ ] Apply accessible labels, instructions, error messaging, and status announcements to the branching controls and learner-rationale input.
- [ ] Define focus movement when a decision is submitted, a consequence appears, the next decision loads, feedback returns, or an error occurs.
- [ ] Validate the affected Module 4 components with both an automated accessibility scan and the approved manual keyboard and screen-reader checklist.

## 7.4 Validated AI integration

- [ ] Preserve the shared scenario-feedback architecture while supporting validated written-response and branching-simulation request forms.
- [ ] Submit Module 4 decisions and pathway state as structured identifiers and learner rationale.
- [ ] Validate the branching request shape and all submitted identifiers on the server.
- [ ] Reconstruct scenario, decision, consequence, pathway, and final-state language from authoritative repository data on the server.
- [ ] Reject unknown, impossible, mismatched, or malformed pathways.
- [ ] Do not concatenate untrusted client-written pathway descriptions into an ordinary prose response.
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
- [ ] Reflection after Reverse Build, without displaying it inside Reverse Build

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

# 8. Reverse Build v2 — Remaining Module Rollout

Rollout begins only after the Module 2 reference and Module 4 branching implementation pass their approved acceptance criteria.

## 8.1 Written-response rollout

- [ ] connect Module 1
- [ ] connect Module 3
- [ ] connect Module 5
- [ ] connect Module 6
- [ ] connect Module 7
- [ ] preserve each module’s authored Reverse Build layers
- [ ] reconnect each completed Design Practice prompt to its own latest response and associated feedback
- [ ] preserve truthful partial and no-artifact states

## 8.2 Cross-module verification

- [ ] verify Module 2 retains the approved reference behavior
- [ ] verify Module 4 retains the approved branching behavior
- [ ] verify each module reads only its own artifact
- [ ] verify each prompt reads only its own current response and feedback
- [ ] verify each module uses its own approved rubric-intent explanation
- [ ] verify written and branching interactions render correctly
- [ ] verify Reflection remains after Reverse Build and is not displayed inside Reverse Build

### Phase 8 completion evidence

- [ ] Reverse Build v2 works across all seven modules.
- [ ] Written-response and branching artifacts reconstruct accurately.
- [ ] Partial and direct-entry fallback behavior remains truthful and ungated.
- [ ] All seven modules pass module-specific automated and manual verification.

---

# 9. AI Feedback Regression and Transparency

## 9.1 Regression testing

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
- [ ] retain the complete evidence under `docs/validation/ai-feedback-regression/`
- [ ] identify the model and relevant configuration used for the run
- [ ] distinguish automated contract/parser checks from manual instructional-quality judgments

Test both shared feedback forms:

- [ ] written Design Practice feedback
- [ ] Module 4 branching-simulation feedback
- [ ] Reflection feedback

## 9.2 AI behavior standards

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

## 9.3 Learner-facing transparency

- [ ] Explain that feedback is AI-supported.
- [ ] Explain that feedback is based on module-specific instructional criteria.
- [ ] Explain that AI feedback is not an authoritative professional verdict.
- [ ] Explain the role of human judgment.
- [ ] Decide where the AI validation and tuning story should be visible.
- [ ] Add a concise reviewer-facing explanation of how the feedback system was tested.
- [ ] Avoid overstating the scale or independence of validation.

### Phase 9 completion evidence

- [ ] Regression cases pass.
- [ ] AI behavior remains module-specific.
- [ ] AI transparency language is accurate.
- [ ] Validation evidence is retained in project documentation.

---

# 10. Public Claims and Product Language Audit

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

## 10.1 Reverse Build claims

- [ ] Do not claim personal reconstruction until the completed feature supports it.
- [ ] After implementation, ensure the claim precisely describes what is reconstructed.
- [ ] Distinguish learner-experience reconstruction from module-design reconstruction.
- [ ] Do not imply that every part of Reverse Build is dynamically personalized.

## 10.2 Simulation claims

- [ ] Do not describe all module practices as full simulations.
- [ ] Do not use “consequences” unless the interaction contains meaningful consequences.
- [ ] Describe Module 4’s completed interaction accurately.
- [ ] Distinguish guided decision practice from branching simulation.

## 10.3 Adaptive-learning claims

- [ ] Do not describe the platform itself as adaptive.
- [ ] State that Module 5 teaches adaptive and personalized learning architecture.
- [ ] Do not imply that the current platform changes pathways based on learner performance.
- [ ] Do not imply dynamic personalization that is not implemented.

## 10.4 Capability claims

- [ ] Present Future of ID as the capability development system.
- [ ] Present the current seven capabilities as the first complete demonstration of that system and as Bradley’s current implemented pathway.
- [ ] Do not imply that the seven capabilities define the entire future of instructional design or the permanent boundary of Future of ID.
- [ ] Present the seven capabilities as Bradley’s current pathway.
- [ ] Avoid universal prescriptions.
- [ ] Do not imply that all instructional designers need the same capability pathway.
- [ ] Avoid claims of formal industry validation.
- [ ] Avoid implying that research independently produced the exact seven.
- [ ] Preserve credible evidence for the concepts taught inside each capability.

## 10.5 Validation claims

- [ ] Do not imply outside user validation until it occurs.
- [ ] Distinguish internal testing from external review.
- [ ] Distinguish AI review from human user testing.
- [ ] Do not use participant counts or testing claims without records.

## 10.6 Access and product claims

Verify claims concerning:

- [ ] free access
- [ ] no account requirement
- [ ] ungated module access
- [ ] local progress storage
- [ ] local artifact storage
- [ ] persistence limitations
- [ ] transmission of learner input for AI processing
- [ ] what the Future of ID application itself retains
- [ ] provider-retention language, if used
- [ ] full-stack development
- [ ] AI integration
- [ ] public availability
- [ ] permanence

Avoid indefinite promises such as “free permanently” unless Bradley consciously chooses to make that commitment.

### Phase 10 completion evidence

- [ ] Every major claim maps to observable product evidence.
- [ ] Future-state capabilities are labeled as future-state.
- [ ] Bradley personally approves the final public language.
- [ ] No known credibility-risk language remains.

---

# 11. Repository and Production Hardening

## 11.1 Asset pipeline

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

## 11.2 Repository hygiene

- [ ] Remove obsolete scaffolding that could confuse future contributors.
- [ ] Identify duplicate or outdated strategy documents.
- [ ] Mark retained historical documents as historical where appropriate.
- [ ] Ensure current source-of-truth hierarchy is accurate.
- [ ] Ensure README instructions match the current project.
- [ ] Ensure environment-variable documentation is accurate.
- [ ] Confirm no secrets or private keys exist in tracked files.
- [ ] Confirm public documentation contains no confidential employer information.
- [ ] Confirm public examples do not expose proprietary course content.

## 11.3 Build integrity

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

### Phase 11 completion evidence

- [ ] Production build passes.
- [ ] Production assets are stable.
- [ ] Repository is safe for public inspection.
- [ ] No known broken route, link, or required asset remains.

---

# 12. Full Internal Validation

## 12.1 Automated validation

Run the exact automated checks approved in the validation brief and record the commands, environment, result, and evidence location.

- [ ] production build
- [ ] lint
- [ ] learner-artifact parsing, schema, update, isolation, and reset behavior
- [ ] course-progress parsing, failure, and reset behavior
- [ ] written and branching AI request validation and response parsing
- [ ] Module 4 state-transition and invalid-path rejection behavior
- [ ] required route and interaction checks
- [ ] automated accessibility scans for the approved routes and affected components

Automated success does not replace manual experience, instructional-quality, responsive, or accessibility review.

## 12.2 First-time journey

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

## 12.3 Module validation

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

## 12.4 Failure states

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

## 12.5 Responsive validation

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

## 12.6 Manual accessibility validation

Apply the approved checklist to the affected components, including written Design Practice, Module 4 branching controls, learner-rationale inputs, AI feedback states, Reflection, Reverse Build dynamic content and modal behavior, and persistence-reset controls.

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
- [ ] automated findings manually reviewed for false positives and false negatives
- [ ] accessibility defects recorded with component, route, reproduction steps, severity, and retest evidence

### Phase 12 completion evidence

- [ ] End-to-end test record is complete.
- [ ] Automated and manual results are clearly distinguished.
- [ ] Automated accessibility scans and the manual accessibility checklist are both complete.
- [ ] Material defects are resolved.
- [ ] Deferred defects are documented and do not undermine launch claims.
- [ ] Bradley personally completes the primary learner journey.

---

# 13. Documentation for Forking and Reuse

## 13.1 Explain the reusable method

Documentation must help another practitioner:

- [ ] assess where they are professionally
- [ ] identify existing strengths, established expertise, and professional judgment
- [ ] identify current work demands
- [ ] identify immediate capability gaps
- [ ] recognize capability-development needs that require intentional knowledge, practice, or experimentation
- [ ] explore emerging or previously unknown areas revealed through research, building, experimentation, and reflection
- [ ] identify future professional direction
- [ ] select their own capability areas
- [ ] define why each capability matters
- [ ] build a coherent capability pathway
- [ ] apply the Future of ID learning architecture to that practitioner-created pathway
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

## 13.4 License verification

- [ ] Confirm that Bradley intends to release the repository under the MIT License.
- [ ] Confirm that a valid MIT `LICENSE` file is tracked at the repository root.
- [ ] Confirm that README and forking language match the tracked license.
- [ ] Remove or qualify reuse claims if the tracked license does not support them.

## 13.5 Technical fork validation

From a clean fork or equivalent isolated clone, have a technically capable practitioner follow the documentation without undocumented assistance.

- [ ] install dependencies using the documented workflow
- [ ] configure the required environment from the documented instructions
- [ ] run the application without an AI key and verify the documented fallback behavior
- [ ] run the application with AI configured when credentials are available
- [ ] identify the authoritative files for capabilities, module content, navigation, scenarios, and reviewer criteria
- [ ] replace or add a test capability in an isolated validation branch or disposable copy
- [ ] verify that the customized capability appears in the expected navigation and module surfaces
- [ ] run the documented build and validation workflow
- [ ] record every undocumented assumption, failure, or confusing instruction
- [ ] ensure disposable validation content is not merged into the product

### Phase 13 completion evidence

- [ ] A technically capable practitioner can identify how to replace the capability pathway.
- [ ] Documentation reinforces “meet you where you are.”
- [ ] Forking documentation does not require copying Bradley’s seven capabilities.
- [ ] The tracked license supports the repository’s stated reuse terms.
- [ ] The technical fork test passes from a clean, isolated starting point.

---

# 14. Private Human Review

This review occurs after the core product fixes, internal testing, forking documentation, license verification, and technical fork validation.

## 14.1 Required reviewer perspectives

The minimum review group must cover all three perspectives below. One person may cover more than one perspective when the overlap is credible, so three perspectives do not necessarily require three different people.

- [ ] experienced instructional design or learning-experience practitioner
- [ ] technically informed reviewer
- [ ] first-time learner who is not already immersed in the project

Additional L&D leader, hiring-manager, less-experienced practitioner, accessibility, or specialist perspectives may be included when available, but they are not required to close the minimum gate.

## 14.2 Reviewer instructions

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
- [ ] whether the forking and reuse promise is understandable and credible
- [ ] whether any claim feels stronger than the product evidence
- [ ] whether anything harms trust
- [ ] whether anything breaks or becomes confusing

## 14.3 Evidence collection

For every reviewer:

- [ ] record role or perspective
- [ ] record review date
- [ ] record tested route or pathway
- [ ] record major observations
- [ ] separate defects from preferences
- [ ] separate comprehension issues from stylistic opinions
- [ ] record required action
- [ ] record intentionally declined suggestions and rationale

## 14.4 Response rules

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

### Phase 14 completion evidence

- [ ] All three required perspectives are represented.
- [ ] Private human review is complete and recorded.
- [ ] Findings are classified by materiality and required response.
- [ ] Declined recommendations are documented with rationale.

---

# 15. Material-Finding Resolution and Focused Revalidation

- [ ] Resolve findings that materially affect credibility, instructional integrity, learner trust, comprehension, accessibility, reliability, reuse, or public-claim accuracy.
- [ ] Record intentionally deferred defects and why they do not undermine a launch gate or public claim.
- [ ] Rerun every automated check affected by a change.
- [ ] Repeat the relevant manual learner, responsive, accessibility, AI-quality, or fork-validation checks.
- [ ] Update the validation record with final pass, fail, and accepted-defect status.
- [ ] Confirm that no fix introduced unrelated scope or reopened an explicitly deferred feature.

### Phase 15 completion evidence

- [ ] Material findings are resolved.
- [ ] Focused regression and manual revalidation pass.
- [ ] No unresolved reviewer finding creates a known integrity risk.
- [ ] Accepted defects are documented and do not compromise a launch gate.

---

# 16. Explicitly Deferred Work

These items are not required for the first public introduction unless a later discovery changes the decision.

- [ ] Supabase persistence
- [ ] learner accounts
- [ ] authentication
- [ ] cross-device synchronization
- [ ] adaptive sequencing
- [ ] learner profiles
- [ ] community features
- [ ] social or discussion features
- [ ] certificates or badges
- [ ] advanced analytics dashboards
- [ ] agent experiences, including richer AI coaching or role-play agents
- [ ] rebuilding all Design Practices as branching simulations
- [ ] rebuilding or redesigning unrelated modules
- [ ] new modules
- [ ] homepage redesign
- [ ] dashboard redesign
- [ ] global visual redesign
- [ ] broad design-system redesign
- [ ] native mobile application
- [ ] LMS integration
- [ ] content-management administration interface

Deferred items must not be quietly added to active scope without:

- [ ] clear justification
- [ ] impact assessment
- [ ] architecture review
- [ ] Bradley’s approval

Small copy, disclosure, accessibility, metadata, reliability, or claim-accuracy changes remain legitimate launch work when they directly support a defined gate.

---

# 17. Final Public-Launch Gates

## Gate 1 — Capability-positioning integrity

- [ ] Future of ID is accurately framed as a capability development system.
- [ ] The current seven capabilities are accurately framed as the first complete demonstration of that system.
- [ ] The seven capabilities are accurately framed as Bradley’s current professional pathway.
- [ ] The reusable method is clear.
- [ ] Universal or externally validated framework claims are removed.
- [ ] Supporting module content remains credibly grounded.

## Gate 2 — Experience integrity

- [ ] Module 4 demonstrates meaningful stateful simulation design.
- [ ] Reverse Build reconstructs actual learner work.
- [ ] Reverse Build makes capability development and professional judgment visible.
- [ ] AI critique is connected to capability-specific instructional intent.
- [ ] Open exploration still works without learner artifacts.

## Gate 3 — Learner-trust integrity

- [ ] Local persistence is transparent.
- [ ] AI-processing transmission is disclosed accurately.
- [ ] Claims about application retention and provider retention are verified and precise.
- [ ] Learners can clear saved work.
- [ ] Learners can reset current module work and course progress.
- [ ] Reflection content is handled intentionally.
- [ ] AI limitations and human judgment are clear.
- [ ] Failure states do not mislead learners.

## Gate 4 — Technical integrity

- [ ] Production build passes.
- [ ] Required routes and interactions work.
- [ ] Production assets are stable.
- [ ] Core responsive and accessibility checks pass.
- [ ] Automated and manual accessibility validation both pass at the approved standard.
- [ ] Artifact and course-progress persistence fail safely.
- [ ] No known critical defect remains.

## Gate 5 — Claims integrity

- [ ] Every major public claim maps to product evidence.
- [ ] Future-state features are labeled accurately.
- [ ] No unsupported research, validation, personalization, adaptation, or simulation claim remains.
- [ ] Bradley approves the exact first-introduction language.

## Gate 6 — External reality check

- [ ] Forking documentation, license verification, and technical fork validation are complete.
- [ ] Private review covers the experienced-practitioner, technically informed, and project-unfamiliar first-time-learner perspectives.
- [ ] Material credibility findings are resolved.
- [ ] Material comprehension findings are resolved.
- [ ] Material trust findings are resolved.
- [ ] Material accessibility or reliability findings are resolved.

---

# 18. Final Personal Sign-Off

The following items may only be checked by Bradley.

- [ ] I personally completed the primary Future of ID journey from the perspective of a first-time learner.
- [ ] I personally completed the Module 4 simulation through multiple decision paths.
- [ ] I personally verified that Reverse Build reconstructed my actual work accurately.
- [ ] I personally reviewed how my learner data was stored and cleared.
- [ ] I personally reviewed how learner input is transmitted for AI processing and how that behavior is disclosed.
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

# 19. Completion Record

For each completed phase, record:

| Phase                                           | Completion date | Commit or PR | Personally verified by | Evidence location                                                                                            | Notes                                                                                          |
| ----------------------------------------------- | --------------- | ------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Checklist revision and approval                 | 2026-07-11      | —            | Bradley Pierce         | Section 2 of this checklist; `docs/README.md`; `docs/SYSTEM-INSTRUCTIONS.md`; `docs/COPILOT-INSTRUCTIONS.md` | Section 2 governance remediation completed. Implementation-dependent launch gates remain open. |
| Capability positioning                          |                 |              |                        |                                                                                                              |                                                                                                |
| Implementation briefs                           |                 |              |                        |                                                                                                              |                                                                                                |
| Learner-artifact and progress persistence       |                 |              |                        |                                                                                                              |                                                                                                |
| Module 2 Reverse Build v2 reference             |                 |              |                        |                                                                                                              |                                                                                                |
| Module 4 simulation and Reverse Build           |                 |              |                        |                                                                                                              |                                                                                                |
| Remaining Reverse Build v2 rollout              |                 |              |                        |                                                                                                              |                                                                                                |
| AI regression and transparency                  |                 |              |                        |                                                                                                              |                                                                                                |
| Public claims audit                             |                 |              |                        |                                                                                                              |                                                                                                |
| Repository and production hardening             |                 |              |                        |                                                                                                              |                                                                                                |
| Full internal validation                        |                 |              |                        |                                                                                                              |                                                                                                |
| Forking, license, and technical fork validation |                 |              |                        |                                                                                                              |                                                                                                |
| Private human review                            |                 |              |                        |                                                                                                              |                                                                                                |
| Material-findings resolution and revalidation   |                 |              |                        |                                                                                                              |                                                                                                |
| Final launch approval                           |                 |              |                        |                                                                                                              |                                                                                                |
