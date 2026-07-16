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
  - **Open dependency:** The Section 5 shared persistence architecture is implemented and approved. Learner-facing Design Practice and Reflection persistence integration, Reverse Build v2 learner reconstruction, the Module 4 simulation, complete contextual disclosures, and end-to-end validation remain open.
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

- [x] Create one canonical Bradley-approved explanation of why the seven capabilities were selected.
- [x] Preserve this conceptual foundation: “Future of ID is a deliberately selected professional learning pathway shaped by its creator’s current work, responsibilities, development needs, and career direction. The seven capabilities are neither universal nor exhaustive; they demonstrate how practitioners can build an intentional pathway around where they are and where they are trying to go.”
- [x] Document that the seven capabilities were personally selected by Bradley.
- [x] State that they reflect where Bradley is now as an instructional designer.
- [x] State that the selection was influenced by Bradley’s:
  - [x] current role
  - [x] current responsibilities
  - [x] company initiatives
  - [x] active learning projects
  - [x] immediate development needs
  - [x] future professional direction
  - [x] transition into full-stack learning-product development
- [x] State clearly that the seven capabilities are not claimed to be the only capabilities instructional designers need.
- [x] State clearly that the seven capabilities are not presented as a universal industry framework.
- [x] State clearly that the exact seven-capability collection has not been formally validated by an outside institution.
- [x] Preserve Bradley’s authority to explain why each capability matters in his current professional context.
- [x] Preserve both truths: the pathway has a personal and professional origin, and the resulting product remains relevant and reusable for other practitioners.

### Section 3.3 Approval Record

- **Status:** Approved
- **Approval date:** 2026-07-12
- **Approved by:** Bradley Pierce

#### Decision

Section 3.3 remediation is complete and approved for launch readiness review.

#### Evidence Reviewed

Approval was based on:

- establishment of a canonical capability-selection record within `FUTURE_READY_CAPABILITY_MODEL.md`
- confirmation that Bradley personally selected the seven capabilities as his first complete demonstrated pathway
- documentation that the pathway reflects Bradley’s current instructional-design practice
- documentation that selection was influenced by:
  - current role
  - professional responsibilities
  - organizational initiatives
  - active learning projects
  - applied experimentation
  - immediate development needs
  - future professional direction
  - transition into full-stack learning-product development
- confirmation that Bradley’s professional judgment, rather than external authority, determined the exact collection
- confirmation that research informed individual capability concepts but did not determine, select, or validate the exact seven-capability collection
- confirmation that no outside institution has formally validated the exact collection
- confirmation that the seven capabilities remain a practitioner-created pathway and not a universal, exhaustive, or permanent framework

#### Remediation Summary

- `FUTURE_READY_CAPABILITY_MODEL.md` was updated with the canonical selection rationale.
- The Orientation learner-facing explanation was updated.
- `ORIENTATION_EXPERIENCE_STORYBOARD.md` was aligned.
- `SITE_MAP.md` was corrected to remove research-selection implications.
- `ROADMAP.md` was clarified to describe the seven capabilities as a launch-stable current pathway rather than a permanent framework.
- No application behavior changed.
- No routes, components, services, APIs, state, persistence, interactions, or architecture patterns changed.
- Validation passed:
  - `npm run lint`
  - `tsc --noEmit`
  - `git diff --check`
  - conflicting-language repository search
  - checklist isolation review

#### Remaining Considerations

- Future capability additions or changes should preserve the distinction between practitioner-created pathways and universal professional frameworks.
- Research references should continue describing evidence supporting capability areas rather than implying research selected the pathway.
- The seven capabilities remain stable for launch while allowing future evolution of the broader capability development system.

#### Approval Rationale

> Section 3.3 is approved because Future of ID now clearly explains why the seven capabilities were selected as Bradley’s first demonstrated pathway. The canonical selection record establishes professional context, responsibilities, initiatives, projects, development needs, experimentation, and future direction as the basis for selection while preserving practitioner judgment, non-universal positioning, and accurate research boundaries.

## 3.4 Clarify the reusable product promise

- [x] Document that the reusable contribution is the method—not the exact list of seven.
- [x] Explain that another practitioner may need a different capability pathway.
- [x] Explain that a forked version of Future of ID may replace all seven capabilities.
- [x] Explain that the learning architecture can be reused while the capability topics change.
- [x] Connect this architecture directly to the promise to “meet you where you are.”
- [x] Show that Future of ID itself was created by meeting Bradley where he currently is.
- [x] Explain that professional calibration may cause the capability pathway to change over time.

### Section 3.4 Approval Record

- **Status:** Approved
- **Approval date:** 2026-07-12
- **Approved by:** Bradley Pierce

#### Decision

Section 3.4 remediation is complete and approved for launch readiness review.

#### Evidence Reviewed

Approval was based on:

- confirmation that the reusable contribution of Future of ID is the capability development method, learning architecture, and professional calibration process
- confirmation that Bradley’s seven capabilities remain his launch-stable pathway and first complete demonstrated implementation, not a reuse requirement
- confirmation that another practitioner or fork may preserve, replace, or replace all seven capability topics while retaining or adapting the reusable system
- confirmation that “meet you where you are” is defined as practitioner-led calibration of:
  - current context and experience
  - responsibilities
  - goals
  - development needs
  - relevant capability growth areas
- confirmation that “meet you where you are” explicitly excludes:
  - automatic diagnosis
  - automatic recommendations
  - algorithmic pathway generation
  - platform personalization
- confirmation that professional calibration is an ongoing cycle and pathways may evolve as roles, responsibilities, projects, goals, and discoveries change

#### Remediation Summary

- `FUTURE_READY_CAPABILITY_MODEL.md` was updated with the reusable-system principle and ongoing calibration guidance.
- `landing.ts` was updated with bounded public-facing language for “meet you where you are.”
- `README.md` was updated to clarify fork and adaptation boundaries.
- MIT License language was not modified.
- No application behavior changed.
- No routes, components, services, APIs, state, persistence, interactions, or architecture patterns changed.
- Validation passed:
  - `npm run lint`
  - `tsc --noEmit`
  - `git diff --check`
  - required-principle and automation-boundary search
  - checklist isolation review
  - README and license diff review

#### Remaining Considerations

- Future additions should preserve the distinction between reusable system principles and specific pathway implementations.
- “Meet you where you are” should continue to be used only within the practitioner-led calibration meaning.
- Future pathway changes should preserve the professional calibration process.

#### Approval Rationale

> Section 3.4 is approved because Future of ID now clearly defines the reusable contribution as its capability development method, learning architecture, and professional calibration process rather than the exact seven capability topics. This preserves practitioner-created pathways, supports adaptation and evolution, and maintains clear boundaries against unsupported automation or personalization claims.

## 3.5 Correct outdated foundational language

Audit and update, at minimum:

- [x] `docs/strategy/BLUEPRINT.md`
- [x] `docs/architecture/SITE_MAP.md`
- [x] current project `README.md`
- [x] any retained alternate README files
- [x] `docs/strategy/DECISIONS.md`
- [x] `docs/architecture/CONTENT_ARCHITECTURE.md`
- [x] `docs/architecture/TECH_ARCHITECTURE.md`
- [x] `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md`
- [x] `docs/experience/EXPERIENCE_PHILOSOPHY.md`
- [x] `docs/strategy/EXPERIENCE_ARCHITECTURE.md`
- [x] `docs/experience/PRODUCT_EXPERIENCE_MAP.md`
- [x] Orientation documentation
- [x] About-page documentation
- [x] page metadata and social-preview copy
- [x] any source comments or content files containing positioning claims

Before implementation briefs are approved:

- [x] Reconcile `docs/architecture/TECH_ARCHITECTURE.md` with the approved local-persistence MVP and the explicit deferral of Supabase, accounts, and authentication.
- [x] Confirm which documents are current sources of truth and which are historical or superseded.
- [x] Ensure implementation work orders do not rely on stale future-state architecture.

Search the repository for language including:

- [x] “seven research-grounded capabilities”
- [x] “seven capabilities shaping the future”
- [x] “through 2030”
- [x] “research-backed reasons these seven were selected”
- [x] “industry-validated”
- [x] “the capabilities every instructional designer needs”
- [x] “next-generation capabilities” when used as a universal claim
- [x] similar language that implies universal selection or external validation

### Section 3.5 Approval Record

- **Status:** Approved
- **Approval date:** 2026-07-12
- **Approved by:** Bradley Pierce

#### Decision

Section 3.5 remediation is complete and approved for launch readiness review.

#### Evidence Reviewed

Approval was based on:

- confirmation that active documentation accurately represents current implementation
- confirmation that future concepts are clearly separated from current capabilities
- confirmation that historical documents remain preserved but are not treated as current authority
- confirmation that `README.md` current-state claims now reflect observable functionality
- confirmation that technical architecture distinguishes:
  - current launch architecture
  - future architecture options
- confirmation that site-map documentation distinguishes implemented routes from planned routes
- confirmation that Orientation guidance is not represented as access gating
- confirmation that documentation hierarchy now routes current strategy through authoritative current sources

#### Remediation Summary

- `README.md` was updated to separate current capabilities from future exploration.
- `TECH_ARCHITECTURE.md` was updated to distinguish current architecture from future options.
- `SITE_MAP.md` was updated to distinguish implemented and planned experiences and preserve open-access positioning.
- `docs/README.md` was updated to correct the source-of-truth hierarchy.
- Historical documents remain preserved and appropriately labeled.
- No application behavior changed.
- No routes, components, APIs, persistence, or architecture implementation changed.
- Validation passed:
  - `npm run lint`
  - `tsc --noEmit`
  - `git diff --check`
  - implemented route and module-slug comparison
  - scope-boundary searches
  - stale-target language search
  - prohibited-claim search

#### Remaining Considerations

- Future documentation updates should continue distinguishing implemented functionality from future exploration.
- Historical documents should remain preserved but clearly separated from current authority.
- Architecture documents should continue reflecting current reality while preserving future direction.

#### Approval Rationale

> Section 3.5 is approved because Future of ID documentation now accurately represents the current system, future possibilities, and historical context. The repository maintains documentation integrity by ensuring current claims match implementation while preserving future exploration and historical evolution.

## 3.6 Preserve legitimate evidence standards

- [x] Do not remove credible learning theory or supporting research from the modules.
- [x] Continue grounding substantive instructional claims in credible sources.
- [x] Distinguish between:
  - [x] Bradley’s professional selection of the capability
  - [x] established learning principles used within the module
  - [x] current industry or technology evidence
  - [x] Bradley’s own interpretation or professional point of view
- [x] Ensure evidence supports the content being taught without falsely claiming that research produced the exact seven-capability set.

### Section 3.6 Approval Record

- **Status:** Approved
- **Approval date:** July 12, 2026
- **Approved by:** Bradley Pierce

#### Decision

Section 3.6 evidence-governance remediation is complete and approved for launch readiness review.

#### Evidence Reviewed

Approval was based on:

- establishment of four canonical evidence categories:
  - Bradley’s professional pathway selection
  - established learning principles
  - current industry or technology evidence
  - Bradley’s professional interpretation
- establishment of evidence-governance rules covering:
  - source identification
  - evidence date
  - claim scope
  - appropriate qualification
  - attribution
  - research-positioning boundaries
- alignment of `CONTENT_ARCHITECTURE.md` with the canonical evidence model
- addition of an `Evidence and Source Notes` section to all seven capability modules
- preservation of all existing L&D Theory Bridges
- correction or qualification of unsupported universal phrasing
- dating and scoping of current AI, workforce, analytics, and technology evidence
- confirmation that established frameworks support instructional concepts but did not select or externally validate Bradley’s seven-capability pathway
- explicit identification of Bradley-created sequences, constraints, design principles, and professional observations as professional interpretation or synthesis
- use of credible and authoritative sources for substantive claims

#### Seven-Module Coverage

Evidence and source notes were added to:

- `ai-literacy.ts`
- `performance-consulting.ts`
- `learning-analytics.ts`
- `simulation-design.ts`
- `adaptive-learning.ts`
- `content-systems.ts`
- `human-centered-change.ts`

#### Remediation Summary

- `FUTURE_READY_CAPABILITY_MODEL.md` was updated with the canonical evidence-governance standard.
- `CONTENT_ARCHITECTURE.md` was updated with module-authoring requirements for evidence classification and traceability.
- All seven module files were updated using the existing content structure.
- Unsupported generalizations were sourced, qualified, or identified as professional observations.
- Current evidence was dated and scoped.
- Existing instructional content and theory bridges were preserved.
- `moduleContent.ts` was intentionally left unchanged because no new content model or citation feature was necessary.
- No application behavior changed.
- No routes, components, APIs, state, persistence, interactions, or content types changed.

#### Validation

The following passed:

- `npm run lint`
- `tsc --noEmit`
- `git diff --check`
- seven-of-seven module evidence-section coverage check
- broad unsupported-claim search
- content-model isolation check
- authoritative-source verification

#### Continuing Governance Considerations

- Future substantive instructional claims should be supported by an identifiable credible source, appropriately qualified, or clearly labeled as professional interpretation.
- Current industry and technology evidence should include sufficient date and scope information to prevent outdated evidence from being treated as permanently current.
- Bradley’s professional synthesis should remain visible and valuable, but it must not be presented as universal research or outside validation.
- Research may support individual concepts and instructional choices but must not be described as having independently selected or validated Bradley’s exact capability pathway.
- Evidence notes should remain proportionate to the learning experience and should not unnecessarily convert modules into academic papers.
- Future structured citation functionality would require a separate product and implementation decision.

#### Approval Rationale

> Section 3.6 is approved because Future of ID now provides a traceable and governed distinction between established learning principles, current industry or technology evidence, Bradley’s professional pathway selection, and Bradley’s professional interpretation. All seven modules include evidence and source notes, substantive claims are appropriately sourced or qualified, and professional syntheses remain visible without being presented as externally validated or universal models.

### Phase 3 completion evidence

- [x] All known universal-framework language has been identified.
- [x] Replacement positioning has been approved by Bradley.
- [x] Repository search confirms that unsupported universal claims are removed or intentionally qualified.
- [x] A first-time reader can distinguish Future of ID from its current seven-capability pathway.
- [x] A first-time reader understands why Bradley selected these capabilities and does not mistake disciplined development for a lack of existing expertise.
- [x] A first-time reader can explain why these seven capabilities were selected without assuming they are mandatory for everyone.
- [x] A first-time reader understands that the method can support practitioner-created capability pathways using different capability areas.

### Phase 3 Completion Record

- **Phase status:** Phase 3 — Complete and Approved
- **Status:** Complete and Approved
- **Approval date:** July 12, 2026
- **Approved by:** Bradley Pierce

#### Decision

Phase 3 positioning, pathway, documentation-governance, and evidence-governance requirements are complete and approved for public launch readiness. All Section 3.1–3.6 requirements and all phase-level completion-evidence requirements have been satisfied, individually reviewed, remediated where necessary, and formally approved.

#### Approved Section Records

- Section 3.1 — Define Future of ID as a capability development system.
- Section 3.2 — Explain the capability-discovery and professional-calibration process.
- Section 3.3 — Lock the correct meaning and selection rationale of the current seven-capability pathway.
- Section 3.4 — Clarify the reusable-system principle.
- Section 3.5 — Correct outdated foundational language and establish documentation authority.
- Section 3.6 — Establish evidence governance and content traceability.

#### Canonical Foundation

`FUTURE_READY_CAPABILITY_MODEL.md` is the canonical source for:

- capability development system positioning
- Identify → Develop → Apply → Share
- Theory → Experience → Reverse Build → Reflection
- professional calibration
- pathway selection
- reusable-system principles
- automation and personalization boundaries
- evidence-governance categories and research boundaries

#### Public Alignment

Current public and repository-facing sources consistently communicate:

- Bradley’s seven capabilities are the launch-stable first complete demonstrated pathway.
- The seven are not universal, exhaustive, permanent, or externally validated.
- Future of ID is the reusable capability development system, not the exact capability list.
- Other practitioners may preserve, replace some, or replace all seven capability topics.
- “Meet you where you are” means practitioner-led calibration rather than automatic diagnosis or personalization.
- Orientation guides engagement but does not unlock or gate module access.
- Public alignment exists across:
  - landing content
  - About content
  - Orientation
  - metadata
  - `README.md`
  - current experience and architecture documentation

#### Documentation Governance

- Active documents distinguish current implementation, future possibilities, and historical context.
- Current sources of truth are mapped through `docs/README.md`.
- Historical strategy and README files remain preserved but non-authoritative.
- Technical architecture distinguishes current implementation from future options.
- The site map distinguishes implemented routes from planned routes.
- Unsupported universal-framework language remains only in intentionally qualified historical or audit material.

#### Evidence Governance

- The four approved evidence categories are:
  - Bradley’s professional pathway selection
  - established learning principles
  - current industry or technology evidence
  - Bradley’s professional interpretation
- All seven modules contain `Evidence and Source Notes`.
- Current evidence is dated, scoped, and attributed.
- Unsupported generalizations were sourced, qualified, or labeled as professional interpretation.
- Research supports individual concepts and instructional choices but did not independently select or validate Bradley’s exact pathway.

#### Validation and Verification

Phase 3 completion was supported by:

- `npm run lint`
- `tsc --noEmit`
- `git diff --check`
- repository-wide prohibited-language reviews
- current and future scope-boundary reviews
- historical-document qualification review
- implemented route and module-slug comparison
- open-access and Orientation-gating review
- seven-of-seven module evidence-section coverage
- unsupported-claim review
- authoritative-source verification
- checklist and section-boundary isolation reviews

#### Personal Verification

Bradley Pierce personally reviewed and approved:

- the system definition
- professional-calibration narrative
- seven-capability selection rationale
- reusable-system boundaries
- documentation-governance corrections
- evidence-governance standard
- Phase 3 completion evidence

#### Continuing Governance Considerations

- Future changes must preserve the distinction between Future of ID and any individual pathway implementation.
- Future pathway changes should be governed through professional calibration.
- Research must not be described as independently selecting or externally validating Bradley’s exact capability collection.
- “Meet you where you are” must remain bounded to practitioner-led calibration unless future product behavior is explicitly designed and approved.
- Current, future, and historical documentation must remain clearly separated.
- New substantive claims must be sourced, qualified, or labeled as professional interpretation.
- Future changes to the seven-capability pathway do not invalidate the reusable system when properly documented and governed.

#### Phase 3 Approval Rationale

> Phase 3 is approved because Future of ID now has a coherent, accurate, and governed foundation for public positioning. The product is clearly defined as a reusable capability development system; Bradley’s seven capabilities are correctly documented as the launch-stable first demonstrated pathway; professional calibration, pathway selection, reuse, documentation authority, and evidence traceability are explicit; and current public and authoritative sources contain no material contradictory or unsupported claims.

---

# 4. Launch-Readiness Implementation Briefs

No major coding begins until each core feature has a concise implementation brief.

## 4.1 Reverse Build v2 brief

- [x] Define the current problem.
- [x] Define the intended learner experience.
- [x] Define Reverse Build as the mechanism that makes capability development visible.
- [x] Define how Reverse Build reveals:
  - [x] the capability need or professional challenge that existed
  - [x] what needed to be learned or investigated
  - [x] how concepts were applied
  - [x] the decisions that shaped implementation
  - [x] the trade-offs that existed
  - [x] where professional judgment remained necessary
  - [x] how understanding evolved through practice
- [x] Define how Reverse Build connects Bradley’s capability-development journey with the learner’s capability-development journey without making Bradley’s exact pathway mandatory for every learner.
- [x] Keep Reverse Build focused on transferable capability development and professional reasoning rather than personal journaling, autobiographical storytelling, raw development history, prompt exposure, or code walkthroughs.
- [x] Define the information Reverse Build must receive.
- [x] Define which parts become dynamic.
- [x] Define which existing authored layers remain unchanged.
- [x] Define learner privacy and control requirements.
- [x] Define fallback behavior.
- [x] Define failure behavior.
- [x] Define accessibility requirements.
- [x] Define technical constraints.
- [x] Define acceptance criteria.
- [x] Define what public claims the completed feature will support.
- [x] Confirm that Reverse Build preserves the sequence Design Practice → AI Review → Reverse Build → Reflection.
- [x] Confirm that Reverse Build does not display or depend on the learner’s Reflection.
- [x] Define how completed and partially completed Design Practice prompts appear when one module contains multiple prompts.

### Section 4.1 Approval Record

- **Status:** Approved
- **Approval date:** July 13, 2026
- **Approved by:** Bradley Pierce

#### Decision

The Reverse Build v2 implementation brief is complete, approved, and sufficiently specific to govern future artifact architecture, reference implementation, testing, and launch verification.

Section 4.1 approval authorizes the implementation specification. Reverse Build v2 is not yet implemented. Later checklist sections govern technical architecture and product implementation. Approval of the brief must not be interpreted as approval of currently unsupported learner-specific product claims.

#### Evidence Reviewed

Approval was based on:

- creation of `docs/experience/REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md`
- alignment of:
  - `docs/experience/REVERSE_BUILD_EXPERIENCE.md`
  - `docs/README.md`
- coverage of all 26 Section 4.1 requirements
- inclusion of all 17 required implementation-brief sections
- definition of the current product-honesty problem and approved v2 target
- preservation of existing authored Reverse Build reasoning and mentorship framing
- definition of Reverse Build as the mechanism that makes capability development and professional reasoning visible
- definition of the learner-artifact input contract
- definition of dynamic learner artifacts versus unchanged authored layers
- definition of multiple-prompt and partial-completion behavior
- definition of empty, fallback, failure, and malformed-data states
- definition of privacy and learner-control boundaries
- definition of accessibility requirements
- definition of technical constraints and the later Section 5 and Section 6 handoff
- definition of supported and prohibited public claims
- inclusion of binary, testable `RB2-*` acceptance criteria
- explicit non-goals preventing scope expansion

#### Reflection Boundary

The approved instructional sequence is:

> Design Practice → AI Review → Reverse Build → Reflection

- Reverse Build occurs after Design Practice and AI Review.
- Reflection remains a separate subsequent transfer activity.
- Reverse Build must not receive, display, require, summarize, infer from, or depend on Reflection data.
- Reverse Build may prepare learners for Reflection but may not absorb Reflection into the reconstruction.
- The prior conflicting Reflection requirement in `REVERSE_BUILD_EXPERIENCE.md` was corrected.
- Future implementation verification must confirm that Reflection data is never accessed by Reverse Build.

#### Approved Experience Contract

The brief defines Reverse Build v2 as reconnecting, when available:

- the professional challenge or capability need
- what needed to be learned, investigated, or practiced
- the learner’s Design Practice response or decision
- the matching AI Review feedback
- how concepts were applied
- authored implementation decisions
- constraints and trade-offs
- where professional judgment remained necessary
- how practice and feedback may change understanding
- transferable lessons for future work

The feature must not claim to infer hidden learner growth, internal understanding, or capability mastery.

#### Dynamic and Authored Content Boundaries

Dynamic learner-artifact content may include:

- learner Design Practice response or decision
- matching AI Review feedback
- prompt-level completion and review states
- partial-completion indicators
- contextual labels tied to the learner artifact

Authored content remains controlled module content, including:

- Problem or professional challenge
- Instructional Foundations
- Design Decisions
- AI Collaboration
- Design Constraints and Trade-offs
- Transfer or reusable lessons
- other approved authored reasoning

Dynamic learner artifacts must not overwrite, regenerate, or replace authored professional reasoning.

#### Multiple-Prompt Contract

The approved brief requires:

- stable prompt or scenario identifiers
- correct association of each learner response with its prompt
- correct association of each AI Review with its learner response
- independent preservation of artifacts across prompts
- support for partially completed modules
- no erasure of prior artifacts when a learner changes prompts
- continued access to authored Reverse Build content regardless of prompt completion

#### Empty, Partial, and Failure States

The brief defines distinct, honest behavior for:

- no learner artifact
- response without AI Review
- pending or unavailable AI Review
- failed AI Review
- partially completed multi-prompt modules
- intentionally cleared artifacts
- unavailable local persistence
- failed artifact retrieval
- malformed or incompatible stored records
- isolated prompt-record failure

Authored Reverse Build content remains accessible in recoverable states. Missing data must not be invented or misrepresented.

#### Privacy and Learner Control

- Persisted learner artifacts remain local under the approved launch architecture; AI Review transmission and disclosure remain governed separately.
- No account or cloud synchronization is implied.
- Only the learner’s own locally available artifacts may be displayed.
- Learner content is not published or shared.
- Artifacts are not required for access.
- Clearing or resetting artifacts must be respected.
- Missing artifacts must not be silently reconstructed.
- Learner text should not be unnecessarily duplicated.
- Reflection content is outside the Reverse Build data boundary.
- Raw internal prompts, hidden AI reasoning, storage internals, and stack traces must not be exposed.

#### Accessibility

The approved brief includes testable requirements for:

- semantic dialog structure where the modal pattern remains
- accessible naming and description
- keyboard access
- Escape dismissal
- initial focus
- focus containment
- focus return
- labeled close controls
- heading hierarchy
- clear distinction among learner response, AI feedback, and authored reasoning
- dynamic state announcements
- non-color indicators
- scrolling behavior
- reduced motion
- mobile usability
- zoom usability
- screen-reader interpretation

The current modal’s useful behavior is preserved but is not automatically certified as meeting the complete v2 accessibility standard.

#### Technical Constraints

The approved brief preserves:

- Next.js App Router
- React and TypeScript
- open access
- no account requirement
- no launch database requirement
- local browser persistence
- content separated from presentation
- no Reflection dependency
- no diagnosis, recommendation, or pathway personalization
- no hidden-prompt or chain-of-thought exposure

Later Section 5 work will define shared artifact types, persistence services, hooks, and technical architecture.

#### Public-Claim Governance

Learner-specific public claims become supportable only after matching observable behavior is implemented and verified.

Approved future claims may describe Reverse Build as:

- reconnecting learners with their Design Practice response
- surfacing the AI Review associated with that response
- comparing learner practice with authored design reasoning, trade-offs, and professional judgment
- making capability development more visible through structured reconstruction

Prohibited claims include statements that Reverse Build:

- proves learning occurred
- diagnoses capability gaps
- reads or analyzes Reflection
- reveals hidden AI reasoning
- automatically personalizes pathways
- reconstructs learner artifacts that do not exist

Existing learner-specific reconstruction copy remains a documented implementation and product-honesty gap until later remediation.

#### Acceptance-Criteria Governance

- The brief includes binary `RB2-*` acceptance criteria.
- Criteria cover instructional sequence, learner artifacts, authored reasoning, empty and partial states, privacy, failures, accessibility, open access, multiple prompts, and product honesty.
- Future implementation and QA must trace behavior back to these identifiers.
- Each criterion must support a pass or fail determination.
- Changes to approved criteria require an explicit governance decision rather than silent implementation drift.

#### Remediation Summary

- `REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md` was created.
- `REVERSE_BUILD_EXPERIENCE.md` was aligned with the approved Reflection boundary and current-versus-target language.
- `docs/README.md` was updated to include the brief in the current documentation hierarchy.
- No application behavior was changed.
- No module, route, component, type, hook, service, API, persistence, or checklist files were changed during the remediation pass.
- Reverse Build v2 remains unimplemented.

#### Validation

The following passed:

- `npm run lint`
- `tsc --noEmit`
- `git diff --check`
- new-file whitespace review
- Section 4.1 requirement-coverage review
- Reflection-boundary search
- current-versus-target language review
- unsupported reconstruction-claim review
- documentation-hierarchy review
- file-scope isolation review

#### Continuing Governance Considerations

- The approved brief is the controlling Reverse Build v2 implementation specification.
- Broader experience philosophy and instructional architecture remain authoritative within their own scopes.
- External reviews may inform implementation but do not replace the approved brief.
- Reverse Build v2 must not be described as implemented until all required behavior and acceptance criteria are verified.
- Learner-specific claims must remain qualified until corresponding artifacts are actually rendered.
- Section 5 must define artifact architecture consistent with this brief.
- Section 6 or the appropriate implementation phase must demonstrate the contract in the designated reference module.
- Reflection must remain outside the Reverse Build data and display boundary.
- Implementation must preserve authored reasoning rather than replacing it with generated summaries.
- Any expansion into accounts, cloud synchronization, scoring, diagnosis, analytics, or personalization requires a separate approved decision.

#### Approval Rationale

> Section 4.1 is approved because Future of ID now has an authoritative and testable Reverse Build v2 implementation brief. The brief defines the intended learner experience, artifact inputs, authored and dynamic content boundaries, Reflection separation, multiple-prompt behavior, privacy, accessibility, fallback and failure states, technical constraints, supported public claims, and binary acceptance criteria without prematurely implementing the feature or expanding the approved product scope.

## 4.2 Module 4 simulation brief

- [x] Define the current mismatch between topic and interaction.
- [x] Define the professional decision the learner will practice.
- [x] Define the first meaningful choice.
- [x] Define distinct consequences for each first choice.
- [x] Define the second decision point.
- [x] Define how the first choice changes the second decision.
- [x] Define the final outcome or design state.
- [x] Define how the learner explains or refines judgment.
- [x] Define how AI critique connects to the interaction.
- [x] Define what Reverse Build will reconstruct.
- [x] Define mobile and accessibility behavior.
- [x] Define acceptance criteria.
- [x] Define what public claims the completed simulation will support.
- [x] Define a validated branching-simulation request contract separate from the written-response request form.
- [x] Define the authoritative repository data used by the server to reconstruct decision, consequence, and pathway language.
- [x] Prohibit client-written pathway descriptions from being treated as authoritative state.

### Section 4.2 Approval Record

- **Status:** Approved
- **Approval date:** July 13, 2026
- **Approved by:** Bradley Pierce

#### Decision

`docs/experience/MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md` is complete and approved. It is the controlling Module 4 branching-simulation specification and is sufficiently specific and testable to govern later shared architecture, implementation, AI-contract work, Reverse Build integration, accessibility verification, and launch QA.

Section 4.2 approval authorizes the specification, not completed product behavior. The Module 4 simulation remains unimplemented. Later checklist sections govern shared persistence, privacy disclosure, implementation, validation, and launch verification. Current product language must not claim that a branching simulation exists until the approved behavior is implemented and verified.

#### Evidence Reviewed

Approval was based on:

- creation of `docs/experience/MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md`
- alignment of `docs/README.md`
- coverage of all 16 Section 4.2 requirements
- inclusion of all 25 required implementation-brief sections
- inclusion of a complete checklist-to-brief crosswalk
- definition of the current topic-interaction mismatch
- definition of the approved target learner sequence
- definition of one bounded focal professional scenario
- definition of the first decision and three plausible options
- definition of a distinct consequence for each first option
- definition of three branch-dependent second decisions
- definition of six deterministic pathways and final states
- definition of repository-authoritative simulation state
- definition of original and revised learner rationale
- definition of bounded optional AI Review
- definition of a separate branching request contract
- definition of server reconstruction and validation
- definition of Module 4 Reverse Build inputs
- preservation of Reflection as a separate subsequent learning layer
- definition of empty, partial, fallback, failure, persistence, privacy, accessibility, and mobile requirements
- definition of supported and prohibited public claims
- inclusion of 69 binary `M4SIM-*` acceptance criteria
- explicit non-goals preventing scope expansion

#### Approved Focal Scenario

The learner assumes the role of:

> Lead instructional designer responsible for the first release of a sales-onboarding conversation-practice experience.

The scenario practices professional judgment involving:

- instructional transfer
- consistency
- realism
- scalability
- governance
- trust
- appropriate uses and limits of AI
- continuing human judgment

The scenario is bounded enough for deterministic implementation while remaining transferable beyond Bradley's exact professional context.

#### First Decision

The approved first decision presents three professionally plausible approaches:

- bounded authored branching
- facilitated role-play
- bounded AI conversation

None is an unserious distractor. Each represents a legitimate design approach and exposes different professional strengths, risks, and operational consequences. The first choice materially changes the second decision.

#### Consequences and Second Decisions

- Each first option produces a distinct repository-authored consequence.
- Each consequence changes the scenario's pressure, context, constraints, or available choices.
- Each first-choice branch leads to its own dependent second decision.
- The second decision is not an unrelated follow-up question.
- Branch membership must be validated.
- Options from one branch cannot be accepted under another branch.

#### Six Pathways and Final States

- The three first branches and two second-choice options per branch produce six valid deterministic pathways.
- Every valid pathway reaches one approved final state.
- Each final state records:
  - the immediate result
  - a professional strength or benefit
  - an unresolved risk or trade-off
  - the continuing need for human judgment
- No pathway is universally scored as correct.
- Final states must not diagnose capability mastery, assign professional labels, or alter the learner's broader pathway.

#### Authoritative State Contract

The approved brief requires stable identifiers for:

- simulation and version
- decisions
- options
- consequences
- pathways
- final states

Repository-owned data is authoritative. Client-written pathway, consequence, outcome, scenario, or prompt prose is never authoritative. The server must:

- validate identifiers and branch membership
- derive consequences, dependent decisions, pathways, and final states
- reject impossible, mismatched, or tampered sequences
- reconstruct learner-facing pathway language from repository-owned data
- send only validated, minimized simulation state and learner-authored rationale to the AI provider

#### Learner Rationale Contract

- Deterministic pathway completion remains independent of AI.
- The original rationale accepts 40–800 trimmed characters.
- Rationale is required for optional AI Review.
- Rationale is not required to view the deterministic outcome, navigate the open experience, or access authored learning content.
- An optional revised rationale accepts 20–800 trimmed characters.
- Original and revised rationales remain distinguishable.
- Revision cannot alter deterministic decisions, pathway, or final state.
- The rationale interaction remains bounded and must not become an unrestricted essay activity.

#### AI Review Contract

Optional AI Review may provide:

- a summary
- one specific strength
- one overlooked trade-off
- one refinement question

AI Review critiques only validated pathway state and learner rationale. It remains separate from deterministic simulation logic and must not:

- select branches
- invent authoritative decisions, consequences, pathways, or outcomes
- change the completed final state
- score mastery
- diagnose capability gaps
- personalize the learner's professional pathway
- analyze Reflection
- expose hidden prompts, model reasoning, or chain of thought

AI Review is not required for simulation completion. The existing written-response request and output contract remains separate and must not be overloaded with an incompatible branching payload.

#### Server Reconstruction and Validation

Future server behavior must:

- validate module, simulation, and version identifiers
- load authoritative simulation data from the repository
- validate the first decision and option
- derive the first consequence
- validate the dependent second decision and option
- derive the pathway and final state
- reject impossible or tampered sequences
- reconstruct all pathway language from repository data
- send only required validated state and learner rationale to the AI provider
- return deterministic pathway state separately from AI critique

#### Reverse Build Contract

Reverse Build v2 must eventually receive or reconstruct:

- simulation identifier and version
- first decision and selected option
- first consequence
- second decision and selected option
- complete or partial pathway
- final state
- original learner rationale
- optional revised rationale
- AI Review state and feedback when available
- completion or partial-completion status

Reverse Build will connect the learner's validated pathway with authored professional reasoning, constraints, decisions, trade-offs, and human judgment. Reverse Build must not:

- access or display Reflection
- infer hidden learner growth
- invent missing pathway state
- replace authored reasoning with generated interpretation

#### Learning-Layer Boundary

The approved sequence is:

> Design Practice → AI Review → Reverse Build → Reflection

Ownership remains distinct:

- Design Practice owns decisions, consequences, pathway, final state, and learner rationale.
- AI Review owns bounded critique.
- Reverse Build owns artifact reconstruction alongside authored design reasoning.
- Reflection owns later transfer to another professional context.

Reflection remains outside simulation and Reverse Build data boundaries. Simulation decisions do not diagnose or modify capability pathways. Course progress remains separate from simulation state unless later explicitly approved.

#### Empty, Partial, Fallback, and Failure States

The brief defines distinct behavior for:

- not started
- first decision selected
- consequence reached but second decision incomplete
- deterministic pathway completed without rationale
- completed without AI Review
- AI pending
- AI failed
- rationale revision incomplete
- missing or malformed state
- invalid pathway
- incompatible version
- unavailable persistence

Deterministic simulation completion never depends on AI. AI failure does not erase or invalidate valid pathway state. Valid partial progress is distinguishable from failure. Malformed or incompatible state fails safely. Clear recovery or restart guidance is required, raw errors, prompts, stack traces, and storage internals must not be exposed, and open access remains intact.

#### Persistence and Reset Governance

Later architecture must satisfy:

- preservation of valid decision and pathway state across approved navigation or refresh behavior
- no accidental erasure when changing views
- explicit reset behavior
- respect for learner-initiated clearing
- schema-version handling
- separation from Reflection data
- appropriate separation from general course-progress state
- no launch requirement for accounts, Supabase, or cloud synchronization

Section 4.2 defines these product expectations but does not implement persistence.

#### Privacy and Data Minimization

- Learner simulation artifacts remain local under the approved launch architecture.
- No account or cloud synchronization is implied.
- Learner responses are not published or shared.
- Only the minimum validated state and rationale required for optional AI critique are transmitted.
- Repository-owned scenario text is not accepted from the client as authoritative.
- Reflection data remains outside the simulation and Reverse Build boundary.
- Learner reset and clear actions must be respected.
- The product must not claim that AI processing occurs only in the browser.

#### Accessibility and Mobile Requirements

The approved brief requires testable support for:

- complete keyboard operation
- visible focus
- semantic option grouping
- programmatic selected-state communication
- accessible instructions and labels
- announced consequences and changed context
- appropriate focus management after state transitions
- accessible AI loading, success, and error status
- no reliance on color alone
- nonvisual completed-pathway review
- logical heading and content hierarchy
- mobile operation at 320 CSS pixels
- 200% browser zoom and 200% text-only zoom
- primary touch targets of at least 44 by 44 CSS pixels
- responsive stacked pathway review
- no clipped essential content or horizontal page scrolling
- reduced-motion support where animation exists
- deterministic completion when AI is unavailable
- manual keyboard and screen-reader verification in addition to automated scanning

The current written-response controls are not automatically certified as meeting the final simulation accessibility standard.

#### Current Content Alignment Gap

Later authorized implementation and content alignment must:

- remove or qualify Module 4 claims that branching or consequences already exist before implementation
- align Reverse Build authored language with the completed simulation
- rename or reposition the embedded Reverse Build subsection titled or identified as `Reflection`
- preserve useful theory bridges, design principles, and evidence governance
- distinguish authored reasoning from learner pathway data

Module 4 content was intentionally not edited during Section 4.2 remediation.

#### Public-Claim Governance

After implementation and verification, claims may describe:

- a bounded branching simulation
- two connected professional decisions
- first-choice consequences that change the second decision
- six deterministic pathways and final states
- AI critique of a validated pathway and rationale
- Reverse Build reconstruction of decisions, consequences, pathway, outcome, critique, and authored reasoning

Claims must not state or imply that the feature:

- is currently implemented before verification
- automatically adapts or personalizes
- diagnoses capability gaps
- scores mastery
- proves learning occurred
- uses AI to control authoritative branch state
- reveals hidden reasoning
- analyzes Reflection
- stores artifacts in cloud accounts
- provides unlimited conversational simulation

Current public and authored language must remain limited to observable written scenario-design practice until implementation is complete and verified.

#### Acceptance-Criteria Governance

- The brief includes 69 binary `M4SIM-*` acceptance criteria.
- Criteria cover state authority, decisions, consequences, branch dependency, final states, rationale, AI Review, server validation, Reverse Build, persistence, reset, failure states, accessibility, privacy, open access, and product honesty.
- Each criterion must permit an unambiguous pass or fail result.
- Later implementation, testing, and validation must trace directly to the approved identifiers.
- Changes to approved criteria require an explicit governance decision rather than silent implementation drift.

#### Remediation Summary

- `MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md` was created.
- `docs/README.md` was updated to place the brief in the documentation hierarchy.
- No application or module behavior was changed.
- No route, API, component, type, hook, service, persistence, test, module-content, or checklist file was changed during the remediation pass.
- The simulation remains unimplemented.
- Existing Module 4 content gaps remain intentionally deferred to later authorized alignment work.

#### Validation

The following passed:

- `npm run lint` from `web/`
- `tsc --noEmit`
- `git diff --check`
- 16-of-16 Section 4.2 requirement-coverage review
- six-pathway completeness review
- client-authoritative-pathway prohibition review
- AI-boundary review
- Reverse Build and Reflection boundary review
- accessibility-requirement coverage review
- supported and prohibited public-claim review
- documentation-hierarchy review
- file-scope isolation review

#### Continuing Governance Considerations

- The approved brief is the controlling Module 4 branching-simulation specification.
- Approval does not establish that the simulation is implemented.
- Shared artifact and persistence architecture must preserve the approved state and rationale contracts.
- Privacy disclosure and provider-retention language remain governed by later checklist work.
- Implementation and QA must trace behavior to the approved `M4SIM-*` identifiers.
- The existing written-response AI engine remains separate.
- Reflection must remain outside simulation and Reverse Build data boundaries.
- Existing Module 4 content gaps require later authorized alignment before launch claims expand.
- Any change to the scenario, branch model, authoritative-state rules, AI boundaries, or acceptance criteria requires an explicit documented governance decision.

#### Approval Rationale

> Section 4.2 is approved because Future of ID now has an authoritative and testable specification for a bounded Module 4 branching simulation. The brief defines the focal professional scenario, connected decisions, consequences, deterministic pathways, learner rationale, optional AI critique, server-authoritative state, Reverse Build integration, Reflection separation, accessibility, privacy, failure behavior, public-claim boundaries, and binary acceptance criteria without claiming that the feature is already implemented or expanding launch scope.

## 4.3 Learner-artifact and persistence brief

- [x] Define one current learner artifact per module.
- [x] Define how the artifact stores the latest response and associated AI feedback for each Design Practice prompt.
- [x] Define how a revised response updates the current artifact without creating attempt history.
- [x] Define Module 4’s structured decisions, pathway, consequences, and final state.
- [x] Define how Reflection is persisted after Reverse Build without being displayed inside Reverse Build.
- [x] Define course-progress hardening and reset behavior alongside artifact persistence.
- [x] Define schema-version, unsupported-version, stale-data, partial-data, and migration behavior.
- [x] Explicitly exclude attempt history, version history, longitudinal tracking, portfolio management, and cross-device synchronization.

### Section 4.3 Approval Record

- **Status:** Approved
- **Approval date:** July 13, 2026
- **Approved by:** Bradley Pierce

#### Decision

`docs/experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md` is complete and approved. It is the controlling Section 4.3 product specification and is sufficiently specific and testable to govern Section 5 technical architecture, Section 6 reference implementation, Module 4 artifact integration, privacy disclosure, and launch validation.

Section 4.3 approval authorizes the artifact and persistence contract, not completed product behavior. Learner-artifact persistence remains unimplemented, and existing course-progress hardening risks remain open. Later sections govern concrete types, storage namespaces, validators, migrations, services, hooks, learner controls, integration, disclosure, and validation. Target persistence claims must not be presented as current behavior before implementation and verification.

#### Evidence Reviewed

Approval was based on:

- creation of `docs/experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md`
- alignment of `docs/README.md`
- coverage of all eight Section 4.3 requirements
- inclusion of all 27 required implementation-brief sections
- inclusion of a complete checklist-to-brief crosswalk
- definition of one current learner artifact per module
- definition of independent prompt or activity entries inside the current module artifact
- definition of latest-response replacement without attempt history
- definition of exact AI Review association and stale-feedback invalidation
- definition of Module 4 structured simulation state
- definition of separate Reflection persistence after Reverse Build
- definition of progress-store hardening and reset behavior
- definition of schema versions, migrations, stale data, unsupported versions, partial data, malformed-data isolation, and storage failure
- explicit exclusion of histories, portfolios, longitudinal tracking, accounts, cloud synchronization, analytics, scoring, diagnosis, and personalization
- inclusion of 80 binary `LAP-*` acceptance criteria
- explicit ownership boundaries across Sections 4.3, 4.4, 4.5, 5, 6, and later Module 4 implementation

#### One-Current-Artifact Model

- Each module may have one current learner artifact.
- The artifact represents current learner work rather than attempt history.
- One module artifact may contain multiple independently identified prompt or activity entries.
- Replacing work for one entry does not erase unrelated entries.
- Absence of an artifact is valid.
- Artifacts are not required for access or completion.
- Artifacts remain local, account-free, and unsynchronized.
- The artifact is not a portfolio, longitudinal record, or learner history.

#### Persistence Domains

The approved model has three persistence domains.

##### Course progress

Contains only approved completion state.

##### Module learner artifact

May contain:

- written Design Practice entries
- Module 4 structured simulation state
- associated AI Review state and bounded feedback
- approved original and revised learner fields

##### Reflection

Contains:

- current Reflection response
- associated Reflection AI-feedback state and feedback
- separate schema, clearing, and control behavior

The domains remain separately readable, writable, and clearable. Course completion is not proof that learner work exists, learner work is not required for course completion, Reflection remains outside Reverse Build access, and reset actions must not silently cross domain boundaries.

#### Artifact Identity and Authority

Artifact identity conceptually includes:

- repository-authoritative module identifier
- artifact schema version
- supported activity categories
- prompt or simulation entries
- artifact state
- only necessary display or update metadata

Prompt, scenario, simulation, option, pathway, and final-state identifiers must remain repository-authoritative. Unknown identifiers do not become valid because they appear in stored JSON, and client-written pathway prose never establishes authoritative Module 4 state.

#### Written Design Practice Entries

Each written practice entry may support:

- prompt or scenario identifier
- current learner response
- response state
- AI Review state
- associated AI feedback
- optional revised response only where explicitly approved
- bounded error or unavailable states
- no attempt history

Multiple prompt entries remain independent. Switching prompts must not erase valid saved work.

#### Latest-Response Replacement

- A new response replaces the current response for that prompt.
- Previous attempts are not retained.
- AI feedback generated for an older response becomes stale or is removed.
- Stale feedback must never be represented as current.
- A later AI Review may replace the stale state.
- Original and revised fields coexist only under an explicitly approved feature contract.
- Module 4 original and revised rationale remain the approved exception.

#### AI Review Association

The approved AI lifecycle is:

- not requested
- ready
- pending
- available
- failed
- stale
- cleared

Feedback must remain associated with the exact module, prompt, response, or validated simulation state it reviewed. Feedback from one prompt must never appear under another. Failed or missing feedback does not invalidate valid learner work. Clearing a response clears or invalidates matching feedback. Hidden prompts, model reasoning, provider internals, stack traces, and server errors must not be persisted or displayed.

#### Module 4 Artifact Mapping

The shared artifact model must support:

- simulation and version identifiers
- first decision and option
- derived consequence
- dependent second decision and option
- pathway and final state
- original and revised rationale
- AI state and feedback
- partial, completed, reset, and unavailable states

Deterministic simulation state remains independent of AI. Repository data remains authoritative, client pathway prose cannot establish state, invalid sequences fail safely, one current simulation state replaces previous current state without history, and AI failure does not invalidate deterministic state.

#### Reverse Build v2 Contract

Reverse Build may access approved module-artifact data, including:

- prompt or simulation identifier
- current learner response or structured state
- correctly associated AI Review
- partial, cleared, stale, or unavailable state
- Module 4 decisions, consequences, pathway, final state, and rationale

Reverse Build must never access Reflection. Missing learner work is not invented, stale feedback is not shown as current, malformed artifacts must not block authored Reverse Build content, and dynamic learner data must not overwrite authored professional reasoning.

#### Reflection Persistence

- Reflection begins only after Reverse Build.
- Reflection uses a separate persistence domain.
- Current Reflection responses replace prior current responses without history.
- Reflection feedback remains associated with the exact response reviewed.
- Revising Reflection invalidates stale feedback.
- Reflection clearing must be respected.
- Reflection must not automatically resurface elsewhere.
- Reverse Build must not read, display, summarize, transmit, or infer from Reflection.
- Older advisory recommendations placing Reflection inside Reverse Build remain non-authoritative and rejected.

#### Local Persistence and Retention

- Artifacts remain in the current browser's local storage.
- No account is required.
- No cloud synchronization or cross-device access is provided.
- Clearing browser data may remove learner work.
- Private browsing, browser policy, storage blocking, or quota limits may affect persistence.
- Local persistence does not mean AI processing occurs only on the device.
- Saved work remains until replaced, reset, cleared, invalidated by an unsupported version, or removed through browser controls.
- Permanent backup must not be implied.
- Learners on shared computers require practical clearing controls.

#### Reset and Clearing Model

The approved model has three reset levels.

##### Reset active practice

Clears only the active prompt, scenario, or Module 4 activity and matching AI state while preserving unrelated prompts, Reflection, and progress.

##### Clear module work

Clears all Design Practice and simulation artifacts for one module while preserving other modules and course progress. Reflection remains separate by default unless an explicitly broader action is approved.

##### Reset course progress

Clears completion markers only and does not silently erase module artifacts or Reflection.

Destructive actions require clear accessible scope and confirmation where meaningful saved work would be destroyed. Cleared data must not silently reappear. A full-local-data clearing action remains outside minimum Section 4.3 scope.

#### Course-Progress Hardening

Later implementation must add:

- safe parsing
- guarded storage reads and writes
- authoritative slug validation
- unknown-entry isolation or rejection
- schema or storage versioning
- predictable empty fallback
- malformed-data handling
- accessible reset behavior
- continued open access
- separation from module artifacts and Reflection
- preservation of useful same-tab and cross-tab synchronization

#### Versioning and Migration

- Every persisted domain or independently parsed record requires an identifiable schema version.
- Supported versions must be validated before rendering.
- Unsupported future versions must not be partially interpreted.
- Older versions may be migrated only through explicit deterministic logic.
- Migrations must not invent learner content.
- Migration failure must not destroy the original valid raw record before recovery is determined.
- One incompatible record must not invalidate unrelated valid records.
- Version handling remains local and requires no account or server migration.

#### Stale, Partial, and Unsupported Data

The approved behavior covers:

- stale AI feedback
- unknown repository identifiers
- unsupported schema versions
- response without AI Review
- AI pending or failed
- only some prompts completed
- partial Module 4 state
- completed simulation without AI
- original rationale without revision
- Reflection without feedback

Valid partial states remain distinguishable from errors, optional missing fields do not invalidate an otherwise valid artifact, and access remains open.

#### Malformed-Data and Storage-Failure Behavior

The brief defines safe behavior for:

- malformed JSON
- invalid record types
- missing required identifiers
- corrupted prompt entries
- corrupted module artifacts
- malformed Reflection data
- interrupted writes
- unavailable or blocked storage
- security exceptions
- quota exceeded
- read or write failure

The product must not crash. Unrelated valid records remain usable, malformed content is not displayed as learner work, authored content remains accessible, and raw JSON, keys, stack traces, and internals are not exposed. Failed persistence must not be reported as successful, valid in-memory work remains available where possible, and reset and recovery guidance remains accessible.

#### Write Consistency

Later architecture must ensure:

- artifact updates do not leave knowingly half-updated current state
- the latest response and matching AI state remain coherent
- failed writes do not silently replace valid stored data with invalid partial content
- reset and clear actions complete predictably or report failure
- one module update cannot corrupt another module artifact

#### Privacy and Data Minimization

Only approved minimum data may be stored:

- current learner content
- repository-authoritative identifiers
- bounded AI feedback
- status values
- necessary schema and version metadata

Persistence must exclude:

- hidden prompts
- chain of thought
- provider internals
- raw server errors
- attempt history
- analytics profiles
- diagnostic labels
- unnecessary repository-authored prose
- cross-module behavioral profiles
- account or demographic data

#### Learner Visibility and Accessibility

Learners must be able to understand:

- whether work is saved locally
- whether work is missing, partial, stale, unreadable, or cleared
- the scope of reset and clearing actions
- that course completion is separate from saved work
- that AI feedback requires server transmission
- that no account or cloud backup exists

The approved brief defines testable accessibility requirements for:

- explicit labels
- keyboard operation
- predictable focus
- destructive-action confirmation
- announced save, failure, stale, partial, reset, clear, and recovery states
- programmatically associated errors
- non-color indicators
- 320 CSS-pixel mobile support
- 200% browser zoom and 200% text-only zoom
- primary controls of at least 44 by 44 CSS pixels
- screen-reader explanation of stored, missing, partial, invalid, and cleared state

These controls do not yet exist.

#### Public-Claim Governance

Currently supported claims remain limited to:

- local persistence of course completion
- active-session Design Practice and AI Review
- Reflection as a separate activity
- open access without accounts

Claims about saved Design Practice, saved AI feedback, Reverse Build reconnection, persisted Module 4 state, saved Reflection, or learner reset controls become supportable only after implementation and verification.

Prohibited claims include:

- attempt history
- longitudinal tracking
- portfolio management
- cloud backup
- cross-device synchronization
- permanent retention
- analytics
- scoring
- diagnosis
- personalization
- server-side artifact storage
- recovery after browser storage has been cleared

#### Acceptance-Criteria Governance

- The brief contains 80 binary `LAP-*` acceptance criteria.
- No duplicate criterion identifiers were found.
- Criteria cover artifact identity, replacement, AI linkage, Module 4, Reverse Build, Reflection, resets, progress hardening, versioning, malformed data, storage failure, privacy, accessibility, and product honesty.
- Each criterion permits an unambiguous pass or fail determination.
- Later architecture, implementation, tests, and validation must trace to the approved identifiers.
- Changes to approved criteria require explicit governance approval.

#### Ownership and Handoff

##### Section 4.3 owns

- product behavior
- artifact lifecycle
- domain boundaries
- reset semantics
- versioning and recovery policy
- acceptance criteria

##### Section 5 owns

- TypeScript representations
- storage keys
- serializers and validators
- migrations
- persistence service and hooks
- event subscriptions
- progress-store hardening
- reset APIs
- technical tests

##### Section 6 owns

- written-response reference implementation
- learner-artifact integration
- response and AI-feedback linkage
- Reverse Build v2 connection in the designated module

##### Later Module 4 implementation owns

- branching artifact integration under the approved shared architecture

##### Section 4.4 owns

- learner-facing local-storage, retention, AI-processing, and privacy disclosures

##### Section 4.5 owns

- validation environments, browsers, assistive technologies, and evidence records

#### Remediation Summary

- `LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md` was created.
- `docs/README.md` was updated to place the brief in the documentation hierarchy.
- No application or product behavior changed.
- No content, type, hook, service, persistence, route, API, component, migration, test, or checklist file changed during remediation.
- Approved Section 4.1 and 4.2 briefs remained unchanged.
- Existing progress-store risks remain intentionally unmodified.
- Learner-artifact persistence remains unimplemented.

#### Validation

The following passed:

- `npm run lint` from `web/`
- `tsc --noEmit`
- `git diff --check`
- new-file whitespace review
- 8-of-8 requirement crosswalk
- 27-section structure review
- 80-criterion identifier and uniqueness review
- one-current-artifact review
- response and AI-association review
- stale-feedback review
- Module 4 mapping review
- Reverse Build and Reflection-boundary review
- reset-scope review
- progress-hardening review
- version and migration review
- malformed-record isolation review
- storage-failure review
- privacy and accessibility review
- supported and prohibited claim review
- approved-brief compatibility review
- documentation-hierarchy and file-scope review

#### Continuing Governance Considerations

- The approved brief is the controlling Section 4.3 product specification.
- Section 5 must implement concrete architecture without silently changing the approved product lifecycle.
- Section 6 must prove the ordinary written-response path before broader rollout.
- Module 4 must use the shared artifact architecture while preserving server-authoritative deterministic state.
- Reflection must remain outside Reverse Build.
- Current persistence claims must remain limited until observable behavior is implemented.
- Any expansion into attempt history, portfolios, cloud synchronization, analytics, diagnosis, scoring, or personalization requires separate approval.
- Changes to reset scopes, latest-only replacement, migration policy, domain boundaries, or `LAP-*` criteria require explicit governance approval.

#### Approval Rationale

> Section 4.3 is approved because Future of ID now has an authoritative and testable learner-artifact and persistence specification. The brief defines one current artifact per module, independent prompt entries, latest-response replacement, exact AI-feedback association, Module 4 structured state, separate Reflection persistence, course-progress hardening, scoped reset behavior, schema versioning, migration, malformed-data isolation, storage-failure recovery, privacy, accessibility, and binary acceptance criteria without introducing attempt history, accounts, cloud synchronization, analytics, or personalization.

## 4.4 Privacy and data-flow brief

- [x] Define the local browser-persistence disclosure.
- [x] Define the disclosure shown before or when learner input is transmitted for AI processing.
- [x] Define what the Future of ID application itself retains.
- [x] Verify any provider-retention statement against current authoritative sources before using it.
- [x] Prohibit claims that learner work remains only in the browser when AI feedback is requested.
- [x] Prohibit unverified statements about OpenAI retention behavior.

### Section 4.4 Approval Record

- **Status:** Approved
- **Approval date:** July 13, 2026
- **Approved by:** Bradley Pierce

#### Decision

- `docs/experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md` is complete and approved.
- The brief becomes the controlling Section 4.4 product-disclosure and data-flow specification.
- The approved specification is sufficiently specific and testable to govern later implementation, provider and deployment verification, public-copy rollout, accessibility validation, and legal or organizational review.
- Section 4.4 approval authorizes the disclosure, verification, retention-classification, and claim-governance contract. It does not represent completed disclosure UI, deployment verification, provider configuration, or legal policy.
- Learner-facing notices and clearing controls remain unimplemented.
- Deployment logging, infrastructure, observability, security, and request-body handling remain unverified.
- The actual OpenAI organization, project, and project-level data-control settings remain unverified.
- A legal or organizational decision about a formal public privacy policy remains outstanding.
- No categorical deployment-specific provider claim may be made until the approved verification steps are completed.
- Verified current behavior and approved future behavior must remain visibly distinguished.

#### Evidence Reviewed

Approval was based on:

- creation of `docs/experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md`
- alignment of `docs/README.md`
- coverage of all six Section 4.4 requirements
- inclusion of all 30 required brief sections
- inclusion of a complete checklist-to-brief crosswalk
- definition of the current data inventory
- separation of approved future artifact and Reflection data from current implementation
- definition of current course-progress, Design Practice AI, and Reflection AI flows
- definition of future module-artifact, Reflection, and Module 4 flows
- definition of local-browser persistence disclosure
- definition of AI-processing disclosure before or at submission
- definition of Reflection-specific privacy treatment
- definition of currently supportable Future of ID retention statements
- definition of infrastructure and logging verification requirements
- recording of current official OpenAI provider sources and the July 13, 2026 verification date
- definition of deployment-specific OpenAI verification requirements
- definition of provider-language reverification
- definition of precise reset, clearing, and deletion terminology
- definition of shared-computer and private-browsing disclosure
- definition of storage and AI failure language
- definition of prohibited privacy, anonymity, deletion, retention, training, encryption, confidentiality, and legal claims
- definition of disclosure accessibility requirements
- separation of product-disclosure governance from legal policy
- inclusion of 80 unique binary `PDF-*` acceptance criteria
- explicit ownership boundaries across Sections 4.4, 4.5, 5, 6, later Module 4 implementation, public-copy rollout, provider verification, and legal review

#### Current Data Inventory

##### Course progress

- Completion identifiers are stored in browser `localStorage`.
- Persistence is browser-bound.
- No current repository behavior transmits course progress.
- No in-product progress reset currently exists.

##### Design Practice responses

- Learner-authored text remains component-local.
- It is not currently persisted.
- It leaves the browser only when the learner explicitly requests AI feedback.
- It is normally lost on navigation, refresh, component unmount, or scenario change.

##### Reflection responses

- Learner-authored text remains component-local.
- It is not currently persisted.
- It leaves the browser when AI feedback is requested.
- It is normally lost on navigation or refresh.

##### Repository-owned context

- Module, scenario, prompt, title, and review context are reconstructed server-side.
- Required context is transmitted to OpenAI with learner text.
- Repository-owned context remains authoritative.

##### AI feedback

- Structured provider-generated feedback returns through the application server.
- Feedback remains component-local.
- No browser or learner-database persistence is currently implemented.

##### Status and errors

- Loading, success, and error state are transient.
- Learner-facing error messages must not expose provider operational internals.

##### Logging and infrastructure

- No explicit repository request-body analytics or learner-submission logging was identified.
- Deployed hosting, runtime, observability, security, and infrastructure behavior remains unverified.

#### Approved Future Data Inventory

The following browser-local target domains remain unimplemented and must not be described as currently persisted.

##### Course progress

Contains completion state only.

##### Module learner artifacts

May include:

- latest written Design Practice response
- exact AI Review association
- Module 4 validated decision and pathway state
- learner rationale
- bounded AI feedback
- status and schema metadata
- no attempt history

##### Reflection

May include:

- current Reflection response
- exact Reflection-feedback association
- separate schema and clearing behavior
- no attempt history
- strict exclusion from Reverse Build

#### Current Data Flows

##### Course progress

Learner action → browser local storage → same-tab and cross-tab progress displays.

##### Design Practice AI Review

Learner response → Future of ID API route → request validation → repository context reconstruction → OpenAI processing → structured feedback → browser component state.

##### Reflection AI Review

Learner Reflection → Future of ID API route → request validation → repository Reflection-context reconstruction → OpenAI processing → structured feedback → browser component state.

Current-flow boundaries:

- Learner text submitted for AI Review does not remain only in the browser.
- Local persistence and AI processing are different data events.
- No learner account or cloud-artifact synchronization exists.
- Repository code does not currently implement server-side learner-submission persistence.
- Deployment logging cannot be inferred from repository code alone.

#### Future Data Flows

##### Module learner artifacts

- Approved current learner work will be stored in the current browser.
- Latest-only replacement applies.
- Requesting AI feedback still transmits the required learner text and context externally.

##### Reflection

- Future Reflection uses a separate local domain.
- Reflection remains inaccessible to Reverse Build.
- Requesting Reflection feedback transmits Reflection text externally.
- Clearing local Reflection does not establish provider-side deletion.

##### Module 4

- Deterministic state remains repository-authoritative.
- Minimum validated state and rationale are transmitted only for optional AI critique.
- AI does not control branches.
- Local simulation persistence and provider processing remain separate events.

#### Local Browser-Persistence Disclosure

Current disclosure must explain that:

- course progress is saved in the current browser
- no account is required
- progress is not backed up or synchronized
- browser clearing may remove progress
- private or incognito mode may shorten or prevent retention
- browser restrictions may prevent saving
- no current in-product progress reset exists
- progress may remain visible on shared computers

Expanded disclosure becomes necessary only after implementation of:

- saved Design Practice artifacts
- saved AI feedback
- saved Module 4 state
- separately saved Reflection
- scoped reset and clearing controls

#### AI-Processing Disclosure

Before or at AI submission, learners must be told that:

- requesting AI feedback sends learner-entered text outside the browser
- text passes through a Future of ID application server
- relevant repository-owned context is added
- OpenAI processes the request
- AI Review is optional where approved
- confidential, proprietary, regulated, personally identifying, or sensitive workplace information should not be submitted
- AI feedback may be incomplete or incorrect
- AI feedback does not score mastery, diagnose capability gaps, or personalize the learner's professional pathway
- hidden prompts and internal model reasoning are not displayed
- provider handling depends on verified provider terms and deployment settings

#### Disclosure Timing and Placement

- General local-storage disclosure must remain available through a persistent product or public-information surface.
- First-use persistence disclosure must appear when learner-artifact persistence is introduced.
- Design Practice AI disclosure must be associated with the response and AI-submission control.
- Reflection must receive a persistent concise notice and an adjacent AI-transmission notice.
- Reset and clearing controls must state their exact scope.
- Blocking consent modals are not required unless later legal, organizational, usability, and accessibility review approves them.

#### Reflection Privacy

- Reflection may include personal professional or workplace information.
- Reflection remains separate from module artifacts and course progress.
- Reflection remains inaccessible to Reverse Build.
- Reflection must not automatically resurface elsewhere.
- Learners must be advised not to enter confidential employer, client, colleague, patient, student, customer, or personally identifying information.
- Requesting Reflection AI feedback transmits the Reflection text through the application server to OpenAI.
- Current Reflection is not persisted by repository application code.
- Approved future Reflection persistence is browser-local and separately clearable.
- Local clearing must not be described as deleting externally transmitted data.
- Shared-computer exposure must be disclosed.

#### Future of ID Application Retention

Currently supportable statements include:

- course-completion identifiers are stored in browser local storage
- current Design Practice responses, Reflection responses, and AI feedback are not persisted by the browser application
- no learner account or cloud artifact store is implemented
- repository application code does not currently write learner submissions or feedback to a learner database
- repository application code does not implement attempt history, learner analytics profiles, or longitudinal tracking

Required qualification:

- Repository behavior alone does not establish hosting, infrastructure, observability, or security-log retention.
- “No learner database persistence” must not be generalized into “nothing is retained anywhere.”
- No absolute retention statement may be made without deployment verification.

#### Infrastructure and Logging Verification

Deployment review must verify:

- hosting provider
- runtime and edge logs
- request logging and request-body capture
- error monitoring
- observability and analytics tools
- log retention
- access controls
- deletion and rotation behavior

Each verification record must identify:

- environment
- verification date
- reviewer
- evidence source
- verified behavior
- unresolved uncertainty
- approved wording

#### OpenAI Provider Record

The approved brief includes a July 13, 2026 official-source record for:

- provider: OpenAI
- endpoint currently used: `/v1/chat/completions`
- model currently used: `gpt-4o-mini`
- official API data-controls documentation
- official API data-sharing and model-improvement documentation

Provider defaults are recorded carefully:

- API data is not used for model training by default unless an organization opts into sharing.
- Standard abuse-monitoring logs may include prompts and responses and may generally be retained for up to 30 days, subject to documented exceptions and applicable controls.
- Endpoint, organization, project, and eligibility settings may change retention behavior.
- Zero Data Retention and Modified Abuse Monitoring require applicable eligibility, approval, and configuration.

These are provider defaults, not verified Future of ID deployment guarantees.

#### Deployment-Specific OpenAI Verification

Before categorical provider wording is used, Future of ID must verify:

- the actual OpenAI organization and project
- API input/output sharing or model-improvement settings
- whether default abuse monitoring, Modified Abuse Monitoring, or Zero Data Retention applies
- project-level overrides
- endpoint or model-specific exceptions
- additional features that may introduce application-state retention
- verification date and reviewer
- retained evidence
- approved learner-facing wording

Until verification is complete, categorical deployment-specific claims remain prohibited.

#### Provider Reverification

Provider language must be rechecked:

- immediately before public launch
- when provider, endpoint, model, organization, project, or settings change
- when official provider data-control terms materially change
- when Future of ID's AI architecture changes
- at least every six months after launch

Each record must include the date, official source, deployment setting, reviewer, approved wording, and unresolved uncertainty.

#### Retention Classification

The approved brief maintains five separate classifications:

1. Verified current application behavior.
2. Approved future local behavior.
3. Verified provider defaults.
4. Verified deployment-specific configuration.
5. Unknown or unverified behavior.

These classifications must not be collapsed into one broad privacy claim.

#### Reset, Clearing, and Deletion

- Reset active practice clears its approved local activity scope.
- Clear module work clears approved local module-artifact data.
- Clear Reflection clears approved local Reflection data.
- Reset course progress clears local completion markers only.
- Browser-storage clearing may remove local Future of ID data.
- Local clearing does not establish provider deletion.
- “Delete all Future of ID data” must not be used without complete verified system scope.
- “Clear local work” is the preferred term when only browser-local data is affected.

#### Shared Computers and Private Browsing

Disclosure must explain that:

- local progress or future learner work may be visible to others using the same browser profile
- learners should clear local work on shared or public computers when the relevant controls exist
- private or incognito mode may not retain work after the session
- browser controls may remove locally saved work
- Future of ID cannot recover locally cleared work
- no account-based backup exists

#### Storage and AI Failure Language

- Failed local writes must not be shown as successful saves.
- Learners must be told when work may remain available only for the active session.
- Open access remains available where possible.
- Raw JSON, storage keys, exceptions, stack traces, and browser internals must not be shown.
- AI failure is described as temporary unavailability.
- Valid learner-entered work remains available where possible.
- Deterministic Module 4 state remains valid when AI fails.
- API keys, billing, project funding, quota internals, provider response bodies, and account details must not appear in learner-facing errors.
- Current insufficient-quota messaging requires later remediation.
- AI failure and local-storage failure remain separate states.

#### Privacy and Data Minimization

Only approved minimum data may be stored or transmitted. Unnecessary transmission or persistence excludes:

- hidden prompts
- chain of thought
- provider internals
- API keys
- raw server errors
- unrelated repository content
- attempt histories
- cross-module behavioral profiles
- demographic or account data
- analytics histories
- diagnostic labels
- Reflection outside its approved flow

Repository context must be reconstructed server-side rather than accepted from the client as authoritative.

#### Prohibited Claims

Unsupported claims prohibited by the approved brief include:

- learner work always remains in the browser
- responses never leave the device
- data is completely private or anonymous
- Future of ID stores nothing
- OpenAI retains nothing
- OpenAI immediately deletes submitted data
- OpenAI will never use submitted data for training
- this deployment uses Zero Data Retention
- local clearing deletes provider data
- all data is permanently deleted
- work is backed up or synchronized
- data is encrypted without a clearly defined and verified claim
- legal compliance without appropriate review
- AI feedback is confidential without qualification

#### Supported Statements

Currently supportable statements, subject to implementation verification, include:

- course progress is saved in the current browser
- no learner account is required
- current Design Practice and Reflection responses are sent for AI processing only when learners request feedback
- repository application code currently does not persist learner submissions in a learner database
- AI feedback remains optional where approved
- AI feedback does not score, diagnose, or personalize a pathway
- locally clearing work affects browser-local data only

Statements about saved module work, saved Reflection, Reverse Build reconnection, and reset controls become supportable only after implementation and validation.

#### Accessibility

The approved specification defines testable requirements for:

- plain-language notices
- semantic headings and grouping
- programmatic association among the notice, learner input, and AI-submission control
- keyboard access
- screen-reader interpretation
- notice access without hover
- persistent availability rather than toast-only disclosure
- 320 CSS-pixel mobile reflow
- 200% browser and text-only zoom
- no essential horizontal scrolling
- non-color-only meaning
- predictable focus after confirmation, cancellation, failure, or clearing
- programmatically announced save, failure, reset, and clear outcomes
- accessible names describing destructive-action scope
- accessible links where external information is provided
- no forced inaccessible modal

These disclosure surfaces remain unimplemented.

#### Product Disclosure and Legal Policy Boundary

The brief governs:

- product data inventory
- data flows
- disclosure meaning
- timing and placement
- provider verification
- prohibited claims
- accessibility
- acceptance criteria

Separate legal or organizational review governs:

- whether a public privacy policy is required
- jurisdiction and audience requirements
- legal bases and consent terminology
- controller, processor, or service-provider terminology
- contact and privacy-rights workflows
- contractual commitments
- external provider links
- formal policy dates

Section 4.4 approval does not certify legal compliance.

#### Acceptance-Criteria Governance

- The brief contains 80 unique binary `PDF-*` acceptance criteria.
- Criteria cover inventories, local persistence, AI submission, Reflection, application retention, provider verification, reset and deletion, failure honesty, minimization, accessibility, and product honesty.
- Each criterion permits an unambiguous pass or fail result.
- Later implementation, validation, claim review, and launch evidence must trace to these identifiers.
- Changes to approved criteria require explicit governance approval.

#### Ownership and Handoff

##### Section 4.4 owns

- disclosure requirements
- data-flow definitions
- retention classifications
- provider-verification rules
- prohibited claims
- disclosure accessibility
- acceptance criteria

##### Section 5 owns

- storage implementation
- safe persistence
- reset APIs
- local-domain enforcement
- technical error handling

##### Section 6 owns

- reference integration of persistence and AI notices

##### Later Module 4 implementation owns

- simulation-specific persistence and AI disclosures

##### Section 4.5 owns

- validation environments
- browsers
- assistive technologies
- evidence records
- retest requirements

##### Public-copy rollout owns

- implementation of notices and privacy surfaces

##### Provider and project verification owns

- actual OpenAI setting verification and approved provider wording

##### Legal or organizational review owns

- any formal policy and jurisdictional requirements

#### Remediation Summary

- `PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md` was created.
- `docs/README.md` was updated to place the brief in the documentation hierarchy.
- No application or product behavior changed.
- No content, type, hook, service, persistence, route, API, component, test, checklist, provider-setting, or legal-policy file changed during remediation.
- Approved Sections 4.1–4.3 briefs remained unchanged.
- Learner-facing disclosures remain unimplemented.
- Deployment logging and OpenAI project settings remain unverified.

#### Validation

The following passed:

- `npm run lint`
- `npx tsc --noEmit`
- `git diff --check`
- 6-of-6 requirement crosswalk
- 30-section structure review
- 80-criterion identifier and uniqueness review
- current-versus-future inventory review
- Design Practice and Reflection flow review
- browser-local versus AI-transmitted boundary review
- application-retention qualification review
- provider-source and verification-date review
- deployment-uncertainty review
- reset-versus-deletion review
- prohibited-claim search
- insufficient-quota governance review
- Reflection privacy review
- accessibility coverage review
- approved-brief compatibility review
- documentation-hierarchy review
- file-scope isolation review

#### Continuing Governance Considerations

- The approved brief is the controlling Section 4.4 product-disclosure specification.
- Disclosure implementation must track actual behavior rather than target behavior.
- Provider defaults must not be presented as verified deployment settings.
- Actual OpenAI organization and project settings must be checked before launch.
- Deployment logging and observability must be reviewed.
- Provider language must be reverified before launch and at least every six months.
- Local clearing must never be described as external deletion.
- Reflection must retain stronger privacy treatment and remain outside Reverse Build.
- The current quota error exposing provider operational details must be corrected during later implementation.
- Legal or organizational review may require a separate public policy.
- Any material change to data flow, provider, model, endpoint, storage, logging, reset behavior, or `PDF-*` criteria requires explicit governance review.

#### Approval Rationale

> Section 4.4 is approved because Future of ID now has an authoritative and testable privacy and data-flow specification. The brief accurately distinguishes browser-local persistence, learner-initiated AI transmission, repository application retention, deployed infrastructure uncertainty, official provider defaults, and deployment-specific settings that still require verification. It establishes timely and accessible disclosure requirements, stronger Reflection treatment, precise reset and deletion terminology, prohibited privacy claims, provider reverification rules, and binary acceptance criteria without making unsupported legal, anonymity, retention, deletion, training, or confidentiality guarantees.

## 4.5 Validation brief

- [x] Define which acceptance checks are automated.
- [x] Define which acceptance checks require manual review.
- [x] Define the exact commands, environments, routes, browsers, viewport sizes, and assistive-technology checks used where applicable.
- [x] Define pass, fail, defect-severity, evidence, and retest rules.
- [x] Define `docs/validation/ai-feedback-regression/` as the location for exact AI test inputs, outputs, verdicts, reasons, tuning changes, and rerun evidence.
- [x] Define the launch-validation record under `docs/validation/` before testing begins.
- [x] Confirm that an automated accessibility scan does not by itself close the accessibility gate.

### Section 4.5 Approval Record

- **Status:** Approved
- **Approval date:** July 13, 2026
- **Approved by:** Bradley Pierce

#### Decision

- `docs/validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` is complete and approved.
- The brief becomes the controlling Section 4.5 validation-and-evidence specification.
- `docs/validation/ai-feedback-regression/README.md` remains approved documentation scaffolding for future validation evidence, not evidence that regression testing has occurred.
- Section 4.5 approval authorizes the validation strategy, evidence formats, execution-status definitions, severity model, retest rules, exception governance, completion rules, and validation-governance criteria.
- The full 265-criterion feature acceptance-testing program has not been executed.
- No feature acceptance criterion is marked passed through this approval.
- Criteria in **Not implemented**, **Not yet executable**, **In validation**, or **Blocked** status cannot be counted as passed.
- Feature completion requires implementation, execution of applicable criteria, retained evidence, resolution or approved governance of launch blockers, and formal approval.
- Future validation records must trace to approved criterion identifiers and evidence requirements.
- Phase 4 is not complete merely because the Section 4.5 specification is approved.

#### Evidence Reviewed

Approval was based on:

- creation and corrective completion of `docs/validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md`
- creation of documentation-only scaffolding in `docs/validation/ai-feedback-regression/README.md`
- alignment of `docs/README.md`
- coverage of all seven Section 4.5 requirements
- exactly 35 numbered primary sections
- restoration and completion of required Sections 26–35
- inventory of all 265 approved feature criteria
- confirmation of unique identifiers across all feature-criteria families
- classification of every approved criterion prefix through the current-executability and validation-method inventory
- mapping of automated, manual, external, governance, combined, and currently non-executable validation responsibilities
- definition of validation commands, environments, routes, browsers, viewports, zoom, reduced motion, keyboard, and screen-reader coverage
- definition of AI, persistence, privacy, provider, accessibility, and public-claim validation
- definition of the AI regression evidence directory
- definition of standard criterion-level and feature-level evidence records
- definition of the future public launch-validation record
- definition of authoritative result statuses
- definition of Critical, High, Medium, and Low defect severity
- definition of retesting and append-oriented evidence history
- definition of waiver and exception governance
- definition of safe feature-completion rules
- definition of section and phase ownership
- definition of current-executability dependencies
- definition of explicit non-goals
- Approved-Boundary Alignment
- 29 unique binary `VE-*` criteria

#### Acceptance-Criteria Inventory

| Product area | Prefix | Total | Controlling brief |
|---|---:|---:|---|
| Reverse Build v2 | `RB2-*` | 36 | `REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md` |
| Module 4 simulation | `M4SIM-*` | 69 | `MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md` |
| Learner artifact and persistence | `LAP-*` | 80 | `LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md` |
| Privacy and data flow | `PDF-*` | 80 | `PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md` |
| Validation governance | `VE-*` | 29 | `VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` |

- The 265 feature criteria remain governed by their respective product briefs.
- The 29 `VE-*` criteria govern validation execution and evidence.
- Section 4.5 cannot silently change approved product meaning.
- Criterion changes require explicit governance updates to the controlling source and approval history.

#### Execution-Status Governance

The authoritative statuses are:

- **Not implemented:** the required behavior does not exist.
- **Not yet executable:** the behavior may exist partially or a required dependency is unavailable, so meaningful validation cannot yet occur.
- **Ready for validation:** implementation and the required environment are available.
- **In validation:** execution is underway without a final result.
- **Passed:** observed behavior matches the criterion and all required evidence is retained.
- **Failed:** observed behavior contradicts the criterion or required evidence demonstrates a defect.
- **Blocked:** validation cannot be completed because an implementation, environment, access, dependency, hardware, provider-configuration, or external-verification requirement is unavailable.
- **Not applicable:** allowed only through an approved product or governance decision.
- **Passed with approved exception:** allowed only through the complete approved exception contract.

Execution status and defect severity are separate concepts. **Blocked**, **Not implemented**, **Not yet executable**, and **In validation** do not count as passed. **Not applicable** requires approved rationale, and an approved exception must satisfy every exception field and retest obligation.

#### Automated and Manual Mapping

- Every criterion or meaningful criterion range is classified by likely automated, manual, external, governance, combined, or currently non-executable validation method.
- Automatable criteria require mappings to commands, tests, fixtures or mocks, environments, expected results, and evidence output.
- Manual criteria require a scenario, prerequisites, route or feature state, environment, browser or device, viewport or zoom, assistive technology where relevant, tester instructions, expected results, and retained evidence.
- Automation does not replace required manual accessibility, product-honesty, disclosure, comprehension, or professional-judgment review.
- External and governance verification cannot be reclassified as an ordinary manual product check merely to make a criterion executable.
- An unavailable required browser, device, screen-reader, provider, deployment, or legal-review environment is recorded as **Blocked**, not silently skipped.

#### Validation Environments

The approved environment classes are:

- local development
- production build
- production-equivalent deployed preview
- public-production final smoke checks

Environment-dependent evidence must identify the environment URL or identifier, commit or build, date, tester, relevant configuration, and whether live-provider access was enabled. Public production must not be the first environment in which major defects are sought.

#### Route and Experience Coverage

Validation coverage includes:

- `/`
- `/about`
- `/course`
- `/course/orientation`
- `/course/dashboard`
- all seven `/course/module/[slug]` routes
- `/api/scenario-feedback`
- `/api/reflection-feedback`
- Design Practice
- AI Review
- Reverse Build
- Reflection
- completion controls
- future reset and privacy surfaces when implemented
- direct module access and deep links
- open access without prerequisite completion
- required error, empty, partial, fallback, and recovery states

Future routes, controls, and states remain **Not implemented** until observable and cannot be counted as passed coverage.

#### Browser, Viewport, Zoom, and Motion Coverage

Practical launch coverage includes current approved versions of:

- Chrome desktop
- Safari desktop
- Firefox desktop
- Edge desktop
- Safari on iOS
- Chrome on Android

Baseline viewport coverage includes:

- 320 CSS pixels
- 375 CSS pixels
- 768 CSS pixels
- 1280 CSS pixels
- 1440 CSS pixels where wide-layout behavior materially changes

Validation also covers:

- 200% browser zoom
- 200% text-only zoom where supported
- reduced-motion preferences
- orientation changes where relevant
- touch targets
- horizontal overflow
- long learner content
- long AI feedback
- long notices
- dialog and modal scrolling

Evidence must record actual browser and operating-system versions, exact viewport dimensions, zoom, and relevant device information.

#### Accessibility Validation

- Automated accessibility scanning is supplemental and cannot close the accessibility gate by itself.
- Manual keyboard validation is mandatory where applicable.
- Manual screen-reader validation is mandatory where applicable.
- Required practical combinations include VoiceOver with Safari on macOS, VoiceOver with Safari on iOS, and NVDA with Chrome or Firefox on Windows.
- Unavailable required hardware or environments are recorded as **Blocked** rather than silently skipped.
- Validation covers headings, landmarks, dialog semantics, accessible names and descriptions, selected state, focus order, focus containment, Escape behavior, focus return, dynamic announcements, errors, stale and partial states, reset scope, pathway review, reflow, zoom, and reduced motion.
- Section 4.5 approval does not certify WCAG conformance.

#### AI Validation and Regression Evidence

The four approved AI-validation layers are:

1. deterministic request validation
2. repository-authoritative reconstruction
3. structured-output validation
4. limited live-provider validation

Regression evidence must address:

- valid strong and weak responses
- vague but meaningful responses
- minimum- and maximum-length boundaries
- invalid or trivial responses
- malformed provider output
- timeouts and network failure
- unavailable providers
- quota or billing failure
- module-specific reasoning
- Reflection-specific reasoning
- future Module 4 validated-pathway critique
- non-diagnostic and non-personalization boundaries
- no hidden-prompt or hidden-reasoning exposure

`docs/validation/ai-feedback-regression/` is reserved for future evidence and currently contains documentation scaffolding only. It must not store production learner conversations, API keys, confidential data, hidden prompts, chain of thought, personal data, or unnecessary full provider payloads.

#### Persistence and Recovery Validation

Required validation covers:

- safe parsing and authoritative identifiers
- same-tab and cross-tab updates
- schema versions and migrations
- unsupported versions
- malformed JSON
- individual-record corruption and record isolation
- blocked storage and security exceptions
- quota failure and interrupted writes
- stale feedback and exact response association
- partial prompt state
- Module 4 partial and completed state
- Reflection separation from module artifacts and Reverse Build
- reset scopes
- cleared data not returning
- open access during storage or recovery failure

Section 5 owns architecture-level tests. Later browser validation proves the complete end-to-end learner behavior.

#### Privacy and Provider Validation

Validation covers:

- current and future data inventories
- observed network requests
- local-storage inspection
- AI disclosure before or at submission
- Reflection-specific notice requirements
- shared-computer and private-browsing disclosure
- reset-versus-deletion terminology
- storage and AI failure honesty
- prohibited-claim searches
- infrastructure and deployment-logging review
- official provider-source verification
- actual OpenAI organization and project-setting verification
- provider reverification
- legal or organizational review status

Evidence must distinguish technical, editorial, provider-default, deployment-specific, governance, and legal or organizational verification.

#### Product-Claim Validation

The public-claim audit covers:

- homepage
- About
- Orientation
- all module content
- Reverse Build
- Reflection
- AI controls
- privacy disclosures
- README
- metadata
- architecture documentation
- experience documentation

Each relevant claim is classified as **verified current**, **approved target**, **provider default**, **verified deployment-specific**, **unknown**, or **prohibited**. Target behavior presented as current is a failed validation result.

#### Evidence Records

Each criterion-level evidence record includes:

- criterion identifier
- controlling brief
- feature or route
- implementation version or commit
- environment
- browser and operating system
- viewport and zoom
- assistive technology where applicable
- date and tester
- validation method and prerequisites
- expected and observed results
- execution status
- evidence references
- defect identifier
- retest reference
- notes and uncertainty

Separate feature-validation records are created, when authorized, for Reverse Build v2, Module 4 simulation, learner artifacts and persistence, privacy and data flow, AI feedback regression, accessibility, and the public-claim audit.

#### Launch-Validation Record

The future public launch-validation record includes:

- release, commit, or build
- deployed environment
- validation date range
- applicable-criteria totals
- passed, failed, blocked, and governance-approved not-applicable totals
- approved exceptions
- unresolved launch blockers
- browser, mobile, accessibility, AI, persistence, privacy, provider, public-claim, and legal-review coverage
- defect and retest summaries
- unresolved uncertainty
- final launch recommendation and decision
- approver and approval date

The record summarizes and links criterion-level evidence. It cannot treat unimplemented criteria, missing evidence, or blocked criteria as passed. It is created only after the relevant implementation and validation work occurs.

#### Defect Severity

##### Critical

Launch-blocking issues include learner-data exposure, destructive corruption, secret or hidden-prompt exposure, materially false privacy claims, server-authoritative-state bypass, inaccessible core experiences without a workaround, and launch-breaking routes or APIs.

##### High

Normally launch-blocking issues include failure of a core criterion, loss of valid saved work, incorrect AI-response association, Reflection leakage into Reverse Build, acceptance of an invalid simulation path, AI submission without required disclosure, and major keyboard or screen-reader blockers.

##### Medium

Medium defects are material functional, usability, accessibility, responsive, disclosure, recovery, or claim degradations with a practical workaround. An unresolved Medium defect requires an explicit launch decision.

##### Low

Low defects are cosmetic or minor clarity issues without material learning, privacy, accessibility, data-integrity, or functional effect. They are not automatically launch blocking.

Historical S0/S1/S2/S3 labels map respectively to Critical/High/Medium/Low while retaining the original historical label.

#### Retest and Evidence History

- Every resolved Critical, High, and Medium defect requires retest.
- Original failure evidence remains preserved.
- Retest evidence links to the defect and original criterion record.
- The exact failing criterion and related regression criteria are rerun.
- Shared architecture changes trigger cross-feature regression.
- Persistence changes trigger artifact, Reflection, progress, reset, migration, and recovery regression.
- Accessibility fixes receive manual keyboard and relevant screen-reader retesting.
- Privacy or disclosure changes trigger placement, wording, accessibility, data-flow, and prohibited-claim review.
- Provider, endpoint, model, prompt-contract, or parser changes trigger AI regression and provider-verification review.
- Public-copy changes trigger claim auditing.
- Evidence history is append-oriented; failures are never silently overwritten.
- Factual corrections use explicit amendments, superseded records remain identifiable, and final results remain linked to the complete history.

#### Exception Governance

Every exception records:

- affected criterion and controlling brief
- defect identifier and severity
- observed behavior and risk
- reason remediation is deferred
- available workaround
- owner
- remediation or review date
- expiry date where applicable
- approver and approval date
- public-claim and disclosure impact
- required retest
- conditions that automatically reopen the exception

Critical privacy, security, data-integrity, secret-exposure, unsupported-claim, and core-accessibility failures cannot receive routine waivers. They require explicit senior governance approval and a documented launch-risk decision.

#### Completion Rules

A feature may be marked complete only when:

- required behavior is implemented
- all applicable criteria are executed
- required evidence is retained
- Critical and High defects are resolved
- unresolved Medium defects have an explicit approved launch decision
- blocked criteria have documented resolution plans and do not conceal missing core validation
- not-applicable criteria have approved rationale
- approved exceptions satisfy the complete exception contract
- required automated checks pass
- required manual, keyboard, and screen-reader validation is complete
- privacy and provider checks are complete where relevant
- public claims match verified behavior
- completion is formally approved and recorded

**Not implemented**, **Not yet executable**, and **In validation** are not completion-supporting statuses. **Blocked** does not count as passed. Lint, type checking, build success, or documentation completion alone cannot establish feature completion.

#### Ownership and Handoff

- Section 4.5 owns validation strategy, traceability, environments, evidence formats, statuses, severity, retest, exceptions, completion rules, and launch-record requirements.
- Section 5 owns architecture-level unit and integration tests, persistence parsing, migration, storage-failure, reset, and progress hardening tests.
- Section 6 owns reference-implementation QA, prompt-artifact persistence, exact AI-feedback linkage, stale-feedback invalidation, Reverse Build connection, initial privacy-notice integration, and reference accessibility validation.
- Reverse Build v2 implementation owns execution and evidence for applicable `RB2-*` criteria.
- Module 4 implementation owns execution and evidence for applicable `M4SIM-*` criteria.
- Learner-artifact architecture and rollout own execution and evidence for applicable `LAP-*` criteria.
- Privacy, deployment, and provider verification own technical, editorial, infrastructure, provider, and governance evidence for applicable `PDF-*` criteria.
- Legal or organizational review owns formal policy and jurisdictional questions outside product-validation authority.
- Final launch governance owns the consolidated launch-validation record, unresolved-risk decision, and final launch approval.

#### Current Executability

The approved brief classifies all 265 feature criteria by dependencies including:

- currently testable existing behavior
- documentation or governance checks
- Section 5 implementation
- Section 6 implementation
- Reverse Build v2 implementation
- Module 4 implementation
- learner-artifact rollout
- disclosure UI
- deployed-preview or production-equivalent environment
- OpenAI project-setting verification
- deployment logging and infrastructure review
- legal or organizational review

Most target-state `RB2-*`, `M4SIM-*`, `LAP-*`, and disclosure-UI-dependent `PDF-*` criteria remain **Not implemented** or **Not yet executable** and therefore cannot be passed through Section 4.5 approval.

#### Approved-Boundary Alignment

The validation contract preserves:

- Design Practice → AI Review → Reverse Build → Reflection
- strict Reflection exclusion from Reverse Build
- deterministic Module 4 behavior independent of AI
- repository-authoritative simulation state
- one current artifact per module with no attempt history
- independent prompt entries
- exact response-to-feedback association and stale-feedback invalidation
- latest-only replacement
- separate progress, module-artifact, and Reflection domains
- local-browser persistence without accounts or cloud synchronization
- disclosure before or at AI transmission
- provider defaults separate from deployment verification
- open access
- no diagnosis, scoring, personalization, or unsupported universal claims

Section 4.5 governs validation and evidence. It does not alter approved product meaning.

#### `VE-*` Governance Criteria

- The brief defines 29 unique binary `VE-*` criteria.
- The criteria cover inventory, traceability, automated and manual mapping, environments, route coverage, browser and responsive coverage, accessibility, AI regression, persistence, privacy, evidence history, severity, exceptions, completion, hierarchy, alignment, and product honesty.
- Every `VE-*` criterion permits a pass-or-fail determination.
- No duplicate `VE-*` identifiers were found.
- The `VE-*` criteria remain to be executed later where applicable; their existence does not mean they passed.

#### Non-Goals

Section 4.5 approval does not:

- execute the 265 feature criteria
- mark any acceptance criterion passed
- implement tests, CI, scripts, or browser automation
- implement product features or fix current defects
- certify WCAG conformance
- certify privacy or legal compliance
- approve provider settings
- complete deployment-logging verification
- implement Reverse Build v2, Module 4, persistence, or disclosure UI
- create feature evidence records or the final launch-validation record prematurely
- complete Phase 4
- begin Section 5

#### Remediation Summary

- `VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` was created and corrected.
- `ai-feedback-regression/README.md` was created as documentation-only scaffolding.
- `docs/README.md` was updated to place both files in the documentation hierarchy.
- The initial incomplete brief was audited and repaired.
- Exactly 35 numbered primary sections are present.
- Sections 26–35 were restored and completed.
- All 265 feature criteria are inventoried and classified.
- Twenty-nine unique `VE-*` criteria were added.
- No full validation pass was executed.
- No criterion was marked passed.
- No application, test, CI, script, checklist, or approved Section 4.1–4.4 brief was modified during remediation.

#### Validation

The following passed:

- `npm run lint`
- `npx tsc --noEmit`
- `git diff --check`
- 35-section sequence check
- seven-of-seven Section 4.5 requirement crosswalk
- 265-criterion count: 36 `RB2-*`, 69 `M4SIM-*`, 80 `LAP-*`, and 80 `PDF-*`
- zero duplicate feature criteria
- zero unmapped criterion prefixes
- 29 unique `VE-*` criteria
- automated and manual mapping coverage review
- current-executability classification review
- launch-record completeness review
- execution-status consistency review
- Critical/High/Medium/Low severity review
- retest and evidence-history reviews
- exception-field review
- completion-rule safety review
- ownership and explicit-non-goals reviews
- Approved-Boundary Alignment review
- route and viewport specificity review
- AI regression future-tense review
- documentation-hierarchy review
- protected-file and checklist-isolation review

#### Continuing Governance Considerations

- The approved brief is the controlling Section 4.5 validation-and-evidence specification.
- Criteria, tests, and retained evidence remain separate artifacts.
- No feature may be called complete from documentation, lint, type checking, or build success alone.
- Manual accessibility verification remains mandatory.
- Blocked and unimplemented criteria remain visible.
- Evidence history remains append-oriented.
- Provider, model, endpoint, prompt contract, parser, storage, architecture, disclosure, or public-copy changes trigger the applicable regression and governance review.
- Final launch requires a consolidated launch-validation record.
- Changes to validation statuses, severity, completion rules, evidence formats, or `VE-*` criteria require explicit governance approval.

#### Approval Rationale

> Section 4.5 is approved because Future of ID now has an authoritative and testable validation-and-evidence specification governing all 265 approved feature criteria. The brief defines automated and manual validation mapping, current executability, required environments and accessibility coverage, evidence records, AI regression governance, pass and failure definitions, defect severity, retesting, append-oriented history, exception controls, safe completion rules, launch-validation records, and 29 binary governance criteria without claiming that unimplemented features have passed or that full validation has already occurred.

## 4.6 Implementation-control requirements

Each implementation work order must:

- [x] identify the relevant source-of-truth documents
- [x] identify affected files and components
- [x] preserve content and logic separation
- [x] use reusable components
- [x] avoid one-off hardcoded module logic where a reusable model is appropriate
- [x] explain architectural decisions
- [x] include validation requirements
- [x] prohibit unrelated visual or architectural changes
- [x] require a final change summary
- [x] require build and test results

### Section 4.6 Approval Record

- **Status:** Approved
- **Approval date:** July 13, 2026
- **Approved by:** Bradley Pierce

#### Decision

- `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md` is complete and approved.
- The standard becomes the controlling Section 4.6 implementation-control specification.
- Material implementation work requires an approved work order before coding begins.
- Draft, Under Review, Blocked, Superseded, and Cancelled work orders do not authorize implementation.
- Work orders execute approved contracts and cannot silently redefine product meaning, architecture boundaries, acceptance criteria, or validation meaning.
- Implementation completion, validation completion, acceptance completion, and final approval remain distinct states.
- Section 4.6 approval authorizes implementation governance only and does not begin Section 5.
- No `RB2-*`, `M4SIM-*`, `LAP-*`, `PDF-*`, `VE-*`, or `IWO-*` criterion was executed or marked passed through this approval.
- No product feature is approved as implemented or complete through this approval.
- Phase 4 remains open until its completion evidence is separately reviewed and approved.

#### Evidence Reviewed

Approval was based on:

- creation and corrective completion of `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md`
- alignment of `docs/SYSTEM-INSTRUCTIONS.md`
- alignment of `docs/COPILOT-INSTRUCTIONS.md`
- alignment of `docs/README.md`
- coverage of all ten Section 4.6 requirements
- exactly 35 required numbered primary sections
- a mandatory reusable work-order template spanning planning, implementation, validation, reporting, evidence, and closure
- a consolidated work-order evidence record
- complete blocking, scope-amendment, result-reporting, validation-state, closure, and non-goal contracts
- explicit approved-boundary alignment for Sections 4.1–4.5
- 56 unique binary `IWO-*` acceptance criteria
- correction of stale JSON/MDX guidance
- correction of stale route guidance
- correction of contributor authority and conflict-resolution rules
- prohibition of implementation under Draft, Under Review, Blocked, Superseded, or Cancelled work orders
- honest reporting requirements for Passed, Failed, Blocked, Not run, and Not applicable through approved governance
- explicit treatment of unavailable tests as unavailable rather than passing

#### Controlling Sources and Criteria

Every material implementation work order must identify:

- exact controlling file paths
- relevant sections and criteria
- authority level and role of each source
- the conflict-resolution rule
- applicable `RB2-*`, `M4SIM-*`, `LAP-*`, `PDF-*`, `VE-*`, and `IWO-*` criteria
- implementation responsibility
- current executability
- validation method
- required evidence

Advisory, historical, draft, and superseded sources cannot override approved controlling sources.

#### Scope and Affected-File Governance

Every material implementation work order must define:

- an observable objective
- current observable behavior
- approved target behavior
- required changes
- permitted supporting changes
- prohibited changes
- explicit non-goals
- an initial affected-file inventory and each file's expected responsibility
- the scope-amendment process
- the final affected-file inventory

Unrelated visual, content, routing, architecture, dependency, formatting, renaming, cleanup, and speculative-feature changes are prohibited unless separately approved.

#### Architecture and Reuse Governance

Implementation work orders must preserve:

- content and logic separation
- structured TypeScript as the current content approach
- MDX as an optional future direction rather than a current mandate
- reusable components, services, hooks, types, and utilities
- data-driven module architecture
- justified module-specific behavior only where appropriate
- persistence outside presentation components
- repository-authoritative identifiers and state
- approved AI service and contract boundaries
- documentation of architecture alternatives and trade-offs
- ADR evaluation and creation when required

Nested experience and reverse-engineering routes remain optional future possibilities rather than required current routes.

#### Data, AI, Privacy, Accessibility, and Public-Claim Impact

Applicable work orders must separately document:

- **Data and persistence:** data read, written, transmitted, cleared, reconstructed, and versioned; authoritative identifiers; persistence domain; reset scope; migrations; malformed-data handling; and failure behavior.
- **AI:** route and provider; request and output contracts; server reconstruction; optionality; failure behavior; disclosure and provider-verification dependencies; non-diagnostic and non-personalization boundaries; and deterministic state independence from AI unless expressly authorized by a controlling source.
- **Privacy and disclosure:** local-storage effects; learner-text transmission; Reflection effects; shared-computer risks; reset and deletion language; required notices; provider or deployment verification; and legal or organizational dependencies.
- **Accessibility:** keyboard behavior; focus; semantic structure; announcements; errors; selected states; non-color indicators; mobile behavior; zoom and reflow; reduced motion; exact browser and assistive-technology coverage; and explicit manual-validation scenarios.
- **Public claims:** newly supported claims; claims requiring qualification; claims prohibited until implementation and validation; affected public surfaces; required claim audits; provider-verification dependencies; and any required legal or organizational review.

Implementation does not automatically authorize public-copy changes, and target behavior must not be presented as current before implementation and validation.

#### Blocking and Scope-Amendment Governance

Implementation must pause and the work order must become Blocked when applicable controlling sources conflict materially, a required decision is missing, approved criteria would be violated, approved product meaning would be redefined, material privacy or security risk remains unresolved, required provider or deployment facts are unavailable, a required environment or dependency is unavailable, scope expansion requires approval, an approved brief must be reopened, a Critical defect is discovered, or required validation cannot be executed safely.

Blocked work must report the reason, affected sources or criteria, current risk, work completed, files touched, required decision or dependency, owner, next action, and rollback need. Blocked work cannot be reported complete or resumed without resolution or explicit governance approval.

#### Validation, Evidence, and Result Reporting

Every work order must define applicable:

- criterion identifiers
- automated and manual checks
- commands and working directories
- environments, routes, browsers, operating systems, viewports, zoom, keyboard, assistive technologies, and reduced-motion coverage
- expected results
- evidence locations and owners
- failure, privacy, provider, and public-claim checks

Results must distinguish Passed, Failed, Blocked, Not run, and Not applicable through approved governance. Lint and TypeScript checks are not tests, unavailable test infrastructure cannot be reported as passing, and failed or blocked checks cannot be omitted.

The consolidated work-order evidence record must link approval, controlling sources, criteria, initial and final scope, approved amendments, architecture decisions, validation plans, command and manual results, accessibility and privacy evidence, public-claim review, defects, retests, completion reporting, validation status, and the final reviewer decision.

#### Completion and Closure Governance

- Implementation Complete — Validation Pending does not mean acceptance or final approval.
- Failed validation returns work to remediation or Blocked status.
- Blocked validation remains visible.
- Acceptance completion requires execution of applicable criteria and retained evidence.
- Complete and Approved requires every closure condition and a recorded reviewer decision.
- Command status, criterion status, defect severity, validation status, acceptance status, and work-order status remain distinct.
- Unimplemented or not-yet-executable criteria cannot support successful closure.

#### Approved Section 4.1–4.5 Boundaries

Future work orders must preserve, as applicable:

- Design Practice → AI Review → Reverse Build → Reflection
- Reflection exclusion from Reverse Build
- deterministic Module 4 behavior independent of AI
- repository-authoritative Module 4 state
- one current artifact per module
- independent prompt entries
- latest-only replacement
- exact learner-response and AI-feedback association
- separate course-progress, module-artifact, and Reflection domains
- browser-local persistence
- AI disclosure before or at transmission
- provider defaults separated from deployment-specific verification
- open access
- no accounts, cloud synchronization, scoring, diagnosis, personalization, external validation, or unsupported universal claims

Section 4.6 governs implementation control and cannot silently reinterpret or replace approved product contracts.

#### Remediation Summary

- `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md` was created, structurally audited, corrected, and finalized.
- `docs/SYSTEM-INSTRUCTIONS.md`, `docs/COPILOT-INSTRUCTIONS.md`, and `docs/README.md` were aligned with the approved standard.
- The standard contains exactly 35 required numbered primary sections.
- The mandatory template supports planning through final closure.
- The consolidated work-order evidence record is defined.
- Final corrective work completed Section 35 non-goals, deterministic AI-state governance, browser and assistive-technology coverage, explicit manual scenarios, and the `IWO-SOURCE-02` authority reference.
- The standard defines 56 unique binary `IWO-*` criteria.
- No application, test, CI, script, route, API, component, content, type, hook, service, persistence, provider-setting, or legal-policy file changed during the final approval pass.
- No implementation work began and no criterion was executed or marked passed.

#### Validation

The following passed during Section 4.6 remediation and final correction:

- `npm run lint`
- `npx tsc --noEmit`
- `git diff --check`
- exactly 35 numbered primary sections
- 35-section required-title review
- mandatory-template completeness review
- blocking-condition review
- status and closure-state review
- result-table and honest-test-language review
- work-order evidence-record completeness review
- approved-boundary alignment review
- contributor authority-hierarchy review
- work-order status prohibition review
- public-claim and AI-impact review
- browser and manual-validation coverage review
- 56-criterion count and uniqueness review
- all ten Section 4.6 requirements crosswalk
- contributor-instruction and documentation-hierarchy review
- protected-file and checklist-isolation review

#### Continuing Governance Considerations

- The approved standard controls future material implementation work.
- Work orders require approval before coding and must remain traceable to controlling sources and criteria.
- Product briefs continue to control product meaning; Section 4.5 continues to control validation meaning.
- Scope expansion, contract changes, and unresolved material conflicts require explicit approval or blocking.
- Work-order evidence must remain reviewable, and failed, blocked, not-run, and unavailable checks must remain visible.
- Public claims must remain aligned with observable and validated behavior.
- Changes to work-order statuses, authority, closure rules, evidence formats, or `IWO-*` criteria require explicit governance approval.
- Phase 4 completion evidence remains a separate approval gate.

#### Approval Rationale

> Section 4.6 is approved because Future of ID now has an authoritative implementation-control standard that converts approved product and validation specifications into bounded, traceable, and reviewable work orders. The standard governs source authority, acceptance criteria, scope, affected files, architecture, reuse, data, AI, privacy, accessibility, public claims, blocking, validation, evidence, honest result reporting, and final closure through a mandatory template and 56 unique binary criteria without beginning implementation, executing criteria, approving product features, or completing Phase 4.

### Phase 4 completion evidence

- [x] Reverse Build v2 brief approved.
- [x] Module 4 simulation brief approved.
- [x] Learner-artifact and persistence brief approved.
- [x] Privacy and data-flow brief approved.
- [x] Module 4 AI-contract decisions approved.
- [x] Validation brief approved.
- [x] Acceptance criteria are specific enough that completion can be tested rather than assumed.

### Phase 4 Completion Record

- **Phase status:** Phase 4 — Complete and Approved
- **Status:** Complete and Approved
- **Approval date:** July 13, 2026
- **Approved by:** Bradley Pierce

#### Decision

Phase 4 launch-readiness implementation briefs, validation governance, and implementation-control requirements are complete and approved. Sections 4.1–4.6 and all seven Phase 4 completion-evidence requirements have been individually reviewed and formally approved. The six controlling specifications are coherent, testable, and represented in the source-of-truth hierarchy. The prior Section 5.1 persistence-domain conflict was corrected before this completion decision.

Phase 4 completion approves specifications and governance. It does not claim completed feature implementation, executed validation, deployment verification, provider configuration, or legal review. Section 5 remains open and may begin only through an approved implementation work order.

#### Approved Section Records

- Section 4.1 — Reverse Build v2 brief
- Section 4.2 — Module 4 simulation brief
- Section 4.3 — Learner-artifact and persistence brief
- Section 4.4 — Privacy and data-flow brief
- Section 4.5 — Validation and evidence brief
- Section 4.6 — Implementation-control requirements

#### Approved Controlling Specifications

- `docs/experience/REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md`
- `docs/experience/MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md`
- `docs/experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md`
- `docs/experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md`
- `docs/validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md`
- `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md`

Each source governs its approved scope and cannot be silently redefined by later implementation work.

#### Reverse Build v2 Contract

The approved Reverse Build v2 brief defines:

- reconnection to the learner's current Design Practice artifact
- association with AI Review for the exact current learner response
- authored-versus-dynamic content boundaries
- multiple-prompt behavior
- empty, partial, unavailable, failed, stale, and malformed states
- privacy and accessibility requirements
- supported and prohibited product claims
- binary `RB2-*` acceptance criteria
- strict exclusion of Reflection content and state

The approved instructional sequence is:

**Design Practice → AI Review → Reverse Build → Reflection**

#### Module 4 Simulation Contract

The approved Module 4 brief defines:

- one bounded professional scenario
- three first-choice options with distinct consequences
- three dependent second decisions
- six deterministic pathways and final states
- repository-authoritative identifiers and state
- learner rationale and optional refinement
- bounded, optional AI Review
- Reverse Build reconstruction
- privacy, accessibility, failure, and mobile behavior
- binary `M4SIM-*` acceptance criteria

Deterministic Module 4 state remains independent of AI. AI may review learner reasoning but cannot determine authoritative choices, pathways, consequences, or final state.

#### Learner-Artifact and Persistence Contract

The approved learner-artifact and persistence brief defines:

- one current learner artifact per module
- independent prompt entries
- latest-response replacement rather than attempt history
- exact learner-response and AI-feedback association
- stale-feedback invalidation
- Module 4 structured artifact state
- separate Reflection persistence
- course-progress hardening
- reset and clearing boundaries
- schema versions, migrations, stale data, malformed data, and storage failures
- binary `LAP-*` acceptance criteria

#### Three Persistence Domains

The approved architecture preserves three separate persistence domains:

- **Course progress:** stores completion markers and approved progress state only.
- **Module learner artifacts:** store current Design Practice and simulation state only.
- **Reflection:** stores the current Reflection response and associated Reflection-feedback state in a separate domain.

Each domain must remain independently readable, writable, versioned, validated, resettable, and clearable. Reflection remains outside Reverse Build. Clearing one domain must not silently clear another, and course completion is not evidence that learner work exists. The architecture introduces no attempt history, longitudinal tracking, learner timeline, portfolio management, account, cloud persistence, or synchronization.

#### Section 5.1 Conflict Resolution

Phase 4 completion followed a focused checklist correction resolving the prior Section 5.1 persistence-domain conflict. Section 5.1 now:

- excludes Reflection response, feedback, status, reset, and clearing state from module learner artifacts
- defines Reflection as a separate versioned persistence domain
- preserves independent domain read, write, versioning, validation, reset, and clearing boundaries
- preserves strict Reverse Build exclusion from Reflection
- makes timestamps conditional on documented technical necessity
- adds binary domain-boundary requirements
- aligns with the approved Section 4.3 contract

No contradictory persistence-domain language remains in the revised Section 5.1 planning requirements.

#### Conditional Timestamp Governance

- Timestamps are not mandatory by default.
- A timestamp may be added only when a documented product, migration, validation, stale-state, conflict-resolution, or display requirement needs it.
- Every timestamp requires a stated purpose and data-minimization rationale.
- Timestamps must not create attempt history, longitudinal tracking, learner timelines, or analytics profiles.

#### Privacy and Data-Flow Contract

The approved privacy and data-flow brief defines:

- current and approved-future data inventories
- browser-local versus AI-transmitted data
- current application-retention boundaries
- infrastructure and logging uncertainty
- provider defaults separated from deployment-specific facts
- disclosure before or at AI submission
- Reflection-specific privacy treatment
- shared-computer and private-browsing warnings
- reset, clearing, and deletion terminology
- prohibited privacy, retention, training, anonymity, and legal claims
- binary `PDF-*` acceptance criteria

Provider behavior, deployed-project settings, and legal conclusions remain subject to later verification and review; Phase 4 does not represent them as verified.

#### Validation and Evidence Contract

The approved validation and evidence brief defines:

- criterion-level automated and manual validation mapping
- current executability classifications
- required environments, routes, browsers, viewports, zoom, keyboard, screen-reader, reduced-motion, privacy, provider, and public-claim coverage
- evidence-record requirements and append-oriented evidence history
- AI regression governance
- pass, failure, blocked, and not-yet-executable meanings
- Critical, High, Medium, and Low defect severity
- retesting, exceptions, ownership, and completion rules
- consolidated launch-validation records
- binary `VE-*` acceptance criteria

Criteria, tests, and retained evidence remain separate artifacts. Documentation, lint, type checking, or build success alone cannot establish feature completion, and manual accessibility verification remains mandatory.

#### Implementation Work Order Contract

The approved Implementation Work Order Standard defines:

- source and acceptance-criterion traceability
- observable objectives and current-versus-target behavior
- authorized scope, affected files, explicit non-goals, and scope amendments
- content and logic separation, reuse, hardcoding controls, architecture decisions, and ADR triggers
- data, persistence, AI, privacy, accessibility, and public-claim impact reviews
- blocking conditions and honest implementation-status rules
- validation plans, result reporting, evidence records, and final closure
- a mandatory work-order template
- binary `IWO-*` acceptance criteria

Material implementation cannot begin from a Draft, Under Review, Blocked, Superseded, or Cancelled work order. Unresolved material source conflicts must block implementation. Implementation, validation, acceptance, and final approval remain separate states.

#### Approved Acceptance-Criteria Inventory

| Criterion family | Approved criteria | Controlling scope |
|---|---:|---|
| `RB2-*` | 36 | Reverse Build v2 |
| `M4SIM-*` | 69 | Module 4 simulation |
| `LAP-*` | 80 | Learner artifacts and persistence |
| `PDF-*` | 80 | Privacy and data flow |
| `VE-*` | 29 | Validation and evidence governance |
| `IWO-*` | 56 | Implementation work orders |
| **Total** | **350** | **Approved Phase 4 criteria** |

The criteria inventories are unique, binary, and testable within their approved scopes. This completion record does not mark any criterion passed and does not create implementation or validation evidence.

#### Current-versus-Target Integrity

At Phase 4 completion:

- all six controlling sources remain approved target specifications or implementation-governance standards
- Reverse Build v2 remains unimplemented
- the Module 4 simulation remains unimplemented
- learner-artifact and Reflection persistence remain unimplemented
- learner-facing privacy disclosures remain unimplemented
- the full validation program remains unexecuted
- Section 5 and all later implementation phases remain open
- no implementation work order has begun

These future implementation, validation, deployment, provider-verification, disclosure, and legal-review responsibilities remain visible and do not invalidate completion of the Phase 4 specification gate.

#### Governance and Implementation Readiness

- Section 5 may begin only after this formal Phase 4 approval and through an approved implementation work order.
- The work order must cite the applicable approved Phase 4 specifications, acceptance criteria, and validation requirements.
- Unresolved source conflicts must block implementation rather than be resolved through unsupported contributor preference.
- Section 5 cannot redefine the three-domain persistence contract, Reflection boundary, deterministic Module 4 state, privacy boundaries, or validation meaning.
- Work orders execute approved contracts; any material contract change requires explicit governance approval.
- Implementation completion, validation completion, acceptance completion, and final approval remain separate states.

#### Approval-Pass Validation

The Phase 4 completion update was supported by:

- `npm run lint`
- `npx tsc --noEmit`
- `git diff --check`
- seven-of-seven Phase 4 completion-evidence review
- Section 4.1–4.6 approval-record review
- 350-criterion count and uniqueness review
- Section 5.1 three-domain compatibility review
- current-versus-target integrity review
- isolated checklist and protected-file scope review

These checks verify documentation integrity for this approval update; they do not execute feature acceptance criteria or the full validation program.

#### Continuing Governance Considerations

- The six controlling sources retain authority within their approved scopes.
- Later implementation must preserve the three persistence domains, strict Reflection boundary, deterministic Module 4 state, open access, and boundaries against accounts, cloud synchronization, scoring, diagnosis, analytics, and personalization.
- Provider and deployment facts must be verified before any dependent claim or launch approval.
- Manual accessibility verification and criterion-level evidence remain mandatory.
- Blocked, failed, not-run, unavailable, and not-yet-executable work must remain visible.
- Any material change to approved product contracts, criteria, validation meaning, or implementation-control governance requires explicit approval.

#### Phase 4 Approval Rationale

> Phase 4 is approved because Future of ID now has six coherent and authoritative specifications governing Reverse Build v2, the Module 4 simulation, learner artifacts and persistence, privacy and data flow, validation and evidence, and implementation control. The prior Section 5.1 persistence-domain conflict has been corrected, all seven phase completion-evidence requirements are satisfied, and 350 binary acceptance and governance criteria make later completion testable rather than assumed. This approval completes the specification and governance gate without claiming implementation, validation, deployment verification, provider configuration, or legal review.

---

# 5. Shared Learner-Artifact Architecture

Build one reusable learner-artifact system before independently modifying multiple modules.

For this launch, the system stores one current artifact per module. It does not store attempt history.

## 5.1 Data model

### Module learner artifact domain

Define a versioned module learner artifact capable of representing only approved Design Practice and simulation work:

- [x] authoritative module identifier or slug
- [x] module-artifact schema version
- [x] a current Design Practice entry for each module prompt, keyed by an authoritative interaction identifier
- [x] the interaction type for each entry: written response or branching simulation
- [x] the authoritative scenario or practice-context identifier
- [x] the learner’s latest written response for each written prompt
- [x] the AI Review state and feedback associated with the exact current response or validated simulation state
- [x] bounded AI feedback fields required by the applicable approved interaction contract
- [x] Module 4’s validated decisions, pathway, consequences, final state, and learner rationale at the approved structural-model and injected-authority boundary; concrete Module 4 state integration remains Section 7 work
- [x] original and revised rationale only where the approved interaction explicitly requires both
- [x] current, partial, unavailable, stale, malformed, or cleared artifact states
- [x] metadata only when technically required and documented under the timestamp rules below; schema version 1 intentionally contains no timestamps

The module learner artifact must not contain:

- [x] the learner’s Reflection response
- [x] Reflection AI feedback or AI-feedback state
- [x] Reflection status
- [x] Reflection reset or clearing state

### Reflection persistence domain

Define a separate versioned Reflection persistence domain capable of representing:

- [x] authoritative module identifier
- [x] Reflection schema version
- [x] the learner’s current Reflection response after Reverse Build at the persistence-model boundary; learner-facing Reflection integration remains open
- [x] Reflection AI-feedback state at the persistence-model boundary
- [x] Reflection feedback associated with the exact current Reflection response when available at the persistence-model boundary
- [x] stale-feedback invalidation when the Reflection response is revised
- [x] current, unavailable, malformed, stale, or cleared Reflection state
- [x] independent Reflection reset and clearing behavior at the service/API boundary
- [x] local-browser persistence at the service/API boundary
- [x] no Reflection attempt history

Require that:

- [ ] Reflection is written only through the Reflection experience
  - **Open dependency:** The separate Reflection store/hook contract exists, but learner-facing Reflection persistence integration remains assigned to a later section.
- [ ] Reverse Build cannot read, receive, display, summarize, transmit, or infer from Reflection
  - **Architecture result:** Reverse Build-facing module-artifact exports structurally exclude Reflection. Runtime Reverse Build v2 verification remains Section 6 work.
- [x] clearing module Design Practice or simulation work does not silently clear Reflection
- [x] clearing Reflection does not silently clear course progress or module learner artifacts
- [ ] Reflection does not automatically resurface in dashboards, Reverse Build, other modules, or unrelated product areas
  - **Architecture result:** No aggregate reader or current resurfacing integration exists; later rendered integrations still require runtime evidence.
- [x] Reflection remains independently versioned and validated

### Three-domain persistence architecture

Preserve three distinct persistence domains:

- [x] course progress stores only completion markers and approved progress state
- [x] module learner artifacts store only current Design Practice and simulation work
- [x] Reflection stores only the current Reflection response and associated Reflection-feedback state

The implementation must provide separate boundaries for each domain:

- [x] independent read behavior
- [x] independent write behavior
- [x] independent schema versioning
- [x] independent validation and malformed-data isolation
- [x] independent reset behavior
- [x] independent clear behavior

Course completion must not be treated as evidence that a module learner artifact or Reflection exists. Module learner work and Reflection must not be required for course completion or open access.

### Conditional timestamp governance

Timestamps may be included only when a documented product, validation, migration, stale-state, conflict-resolution, or display requirement needs them.

Every proposed timestamp must document. For schema version 1, no timestamp was proposed or approved, so these governance checks are satisfied as not applicable to the implemented schema:

- [x] the exact field — no timestamp field exists in schema version 1
- [x] its product or technical purpose — no timestamp purpose was required
- [x] whether it is required or optional — no timestamp was approved
- [x] how it supports observable behavior — approved observable behavior does not depend on time metadata
- [x] its data-minimization rationale — omitting timestamps is the approved minimum-data decision
- [x] whether the behavior can be implemented without it — the approved architecture implements the behavior without timestamps

Timestamps must not create or imply:

- [x] attempt history
- [x] longitudinal tracking or learner timelines
- [x] analytics profiles
- [x] unnecessary retention metadata

### Section 5 domain-boundary acceptance requirements

- [x] Course progress, module learner artifacts, and Reflection are separate persistence domains.
- [x] Each persistence domain is independently readable.
- [x] Each persistence domain is independently writable.
- [x] Each persistence domain is independently versioned and validated.
- [x] Each persistence domain has independent reset and clearing behavior.
- [x] Reverse Build-facing module-artifact exports cannot access Reflection; runtime Reverse Build v2 verification remains Section 6 work.
- [x] Resetting or clearing module learner artifacts does not silently clear Reflection.
- [x] Resetting or clearing Reflection does not silently clear module learner artifacts or course progress.
- [x] Resetting course progress does not silently clear module learner artifacts or Reflection.
- [x] Timestamps are included only when technically justified and documented; schema version 1 includes none.
- [x] The architecture introduces no attempt history, learner-visible version history, longitudinal history, portfolio, analytics profile, account, cloud persistence, or cross-device synchronization.
- [x] Independent prompt entries use latest-response replacement and preserve exact response and AI-feedback association at the architecture/service boundary.
- [x] Module 4 identifier and deterministic-state contracts remain repository-authoritative and independent of AI; concrete Section 7 integration remains open.
- [x] The architecture preserves Design Practice → AI Review → Reverse Build → Reflection, browser-local persistence, open access, and boundaries against scoring, diagnosis, analytics, and personalization.

## 5.2 Architecture

- [x] Create shared typed artifact models.
- [x] Create shared artifact-management services and hooks.
- [x] Keep artifact logic separate from presentation components.
- [x] Keep module-specific instructional language in structured content; persistence stores only validated identifiers and bounded learner/feedback fields.
- [x] Support written-response artifacts at the architecture/service boundary.
- [x] Support branching-decision artifacts at the architecture/service boundary.
- [x] Support partially completed artifacts.
- [x] Support revised responses.
- [x] Update the current prompt entry and invalidate its prior feedback when a learner revises a response at the architecture/service boundary.
- [x] Prevent feedback from an earlier response from being accepted as current for a later revision; rendered feature verification remains assigned later.
- [x] Support current-artifact replacement or updating without creating an archive.
- [x] Prevent malformed stored data from breaking a module.
- [x] Add schema-version handling.
- [x] Add safe parsing.
- [x] Add graceful degradation when browser storage is unavailable.
- [x] Treat stale, unsupported, or incomplete stored data as unavailable when it cannot be migrated safely.
- [x] Prevent one module from reading another module’s artifact; rendered cross-module behavior remains subject to later integration regression.
- [x] Do not add account, authentication, database, or cloud persistence requirements.

## 5.3 Existing course-progress hardening

- [x] Add safe parsing to the existing course-progress store.
- [x] Catch failures from browser-storage reads and writes.
- [x] Handle malformed, stale, incomplete, and unsupported progress data without breaking navigation or module access.
- [x] Define and implement learner-controlled progress reset behavior.
- [x] Preserve same-tab and cross-tab update behavior without allowing synchronization failures to break the experience.
- [x] Keep all modules available when progress persistence fails or is cleared.

## 5.4 Learner trust and control

- [ ] Clearly explain that saved progress and learner artifacts are persisted locally in the current browser.
  - **Current result:** Course-progress disclosure is implemented and validated. Learner-artifact and Reflection disclosure remains dependent on their later learner-facing integrations.
- [x] Do not imply that work is connected to an account.
- [x] Do not imply that work is synchronized across devices.
- [ ] Provide a learner-facing way to clear stored module work.
  - **Architecture result:** The scoped service API and preservation tests pass; the learner-facing control remains assigned to a later integration.
- [ ] Provide a learner-facing way to reset the active practice.
  - **Architecture result:** The scoped service API and preservation tests pass; the learner-facing control remains assigned to a later integration.
- [x] Provide the approved way to reset course-progress data.
- [ ] Explain when learner input is transmitted for AI processing.
  - **Open dependency:** Contextual AI-processing disclosures remain assigned to later feature/privacy integration.
- [ ] Explain what the Future of ID application itself retains across all applicable learner-artifact and Reflection surfaces.
  - **Current result:** Current progress scope is disclosed; later artifact and Reflection retention disclosures remain open.
- [x] Do not use provider-retention language unless it has been verified from current authoritative sources; Section 5 added no unverified provider claim.
- [x] Do not claim that work remains only in the browser when AI feedback is requested.
- [ ] Persist Reflection after Reverse Build according to the approved artifact model.
  - **Architecture result:** The separate model/store/hook is complete; learner-facing Reflection persistence remains assigned later.
- [ ] Do not display Reflection inside Reverse Build.
  - **Architecture result:** Reverse Build-facing exports structurally exclude Reflection; rendered Reverse Build v2 verification remains Section 6 work.
- [ ] Avoid unexpectedly resurfacing sensitive personal reflection in later learner-facing integrations.
  - **Architecture result:** No aggregate reader or current resurfacing behavior exists; later integrations require privacy/runtime evidence.
- [ ] Handle shared-computer use responsibly on future learner-artifact and Reflection surfaces.
  - **Current result:** Current progress disclosure is bounded; future artifact/Reflection shared-computer guidance remains open.
- [ ] Ensure the completed learner-facing storage and disclosure experience is consistent with Module 7’s trust principles.
  - **Open dependency:** Requires the later learner-facing controls and disclosures before final review.

## 5.5 Artifact and progress behavior

Test:

- [x] first artifact save at the architecture/store level; rendered Design Practice integration remains later
- [x] saved artifact read/update at the architecture/store level; rendered Design Practice integration remains later
- [x] revised artifact replacement and stale-feedback invalidation at the architecture/store level
- [x] partial artifact states at the architecture/store level
- [x] AI review failure and restored-pending recovery states at the architecture/store level; rendered AI Review integration remains later
- [x] empty or absent artifact behavior at the architecture/store level
- [x] malformed stored artifact isolation
- [x] outdated or unsupported schema handling
- [x] cleared browser-storage behavior for authorized stores/current progress surfaces
- [x] storage blocked by the browser for authorized stores/current progress surfaces
- [x] multiple module-artifact isolation at the architecture/store level
- [x] multiple Design Practice prompts within one module artifact at the architecture/store level
- [ ] refresh during the learner-facing artifact or Reflection experience
  - **Current result:** Course-progress refresh persistence passed manually; learner-facing Design Practice and Reflection refresh behavior remains assigned later.
- [x] course-progress read failure
- [x] course-progress write failure
- [x] malformed course-progress data
- [ ] learner-initiated module-work reset
  - **Architecture result:** Module reset/clear APIs, cache invalidation, failure handling, and domain-preservation tests pass; the learner-facing control remains open.
- [x] learner-initiated course-progress reset

### Phase 5 completion evidence

- [x] Artifact architecture is reusable.
- [x] Artifact behavior is documented.
- [x] No module-specific content is hardcoded into the storage system.
- [ ] Learner control, local-persistence disclosure, and AI-processing disclosure are implemented accurately across all required learner-facing surfaces.
  - **Open dependency:** Module-artifact/Reflection controls and local/AI contextual disclosures remain assigned to Sections 6–8 and later privacy rollout.
- [x] Course progress and module access remain usable when persistence fails.
- [ ] Required automated and manual persistence test cases pass and are recorded in the approved launch-validation record.
  - **Current result:** The bounded `IWO-5-001` automated suite and Bradley's available macOS/VoiceOver scenarios passed. Windows/NVDA, physical mobile, deployed-preview, later-feature, and final launch-validation-record dependencies remain open.

### Bounded Section 5 Closure Record

- **Work-order status:** Complete and Approved
- **Closure decision:** Section 5 Shared Learner-Artifact Architecture Complete and Approved with documented external blockers
- **Approval date:** July 15, 2026
- **Approved by:** Bradley Pierce
- **Implementation commit:** `03542c78fbea090b092b9e7aa8f15a165f49c5db`
- **Evidence commit:** `8fedeb8ff51afab949226e471bedfcdcee2e5d5b`
- **Closure commit:** `3f9263c8f07eb0baf13a939ff806d5d0e27ade3a`
- **Approved baseline:** `72fd487a8840be512e39a488fda2012030ede7d8`
- **Work order:** `IWO-5-001`
- **Amendment:** `IWO-5-001-A1`

The bounded architecture work is approved. Broader Phase 5 remains incomplete. Later learner-facing Design Practice and Reflection persistence, Reverse Build v2, Module 4, rendered feature-specific AI association, learner-facing clearing/reset controls, and contextual local-storage and AI-transmission disclosures remain open under Sections 6–8 or later privacy/validation work.

Windows/NVDA, physical iOS/Android, deployed-preview, provider, and infrastructure validation remain Blocked and do not inherit Passed status from the available macOS/VoiceOver evidence. The pre-existing Next.js/PostCSS advisories remain a separately governed repository-level security and launch dependency requiring an authorized remediation work item and launch-risk decision.

Section 5 closure does not equal broader Phase 5 completion, full accessibility conformance, security approval, provider verification, production readiness, or public-launch approval.

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
| Capability positioning                          | 2026-07-12      | `30e0fbddb4c87d4bba1705a708604894c173acfa` | Bradley Pierce         | Phase 3 Completion Record in Section 3; `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md`; `docs/README.md`   | Phase 3 capability-system positioning, pathway rationale, documentation governance, and evidence governance completed and approved. |
| Implementation briefs                           | 2026-07-13      | `72fd487a8840be512e39a488fda2012030ede7d8` | Bradley Pierce         | Phase 4 Completion Record in Section 4; `docs/experience/REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md`; `docs/experience/MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md`; `docs/experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md`; `docs/experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md`; `docs/validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md`; `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md` | Six implementation, privacy, validation, and work-order specifications completed and approved without claiming feature implementation. |
| Section 5 bounded architecture work order       | 2026-07-15      | `3f9263c8f07eb0baf13a939ff806d5d0e27ade3a` | Bradley Pierce         | `docs/SECTION_5_SHARED_LEARNER_ARTIFACT_ARCHITECTURE_WORK_ORDER.md`; `docs/validation/work-orders/IWO-5-001.md` | `IWO-5-001` Complete and Approved with documented external blockers; this row does not complete broader Phase 5. |
| Learner-artifact and progress persistence       |                 |              |                        | `docs/validation/learner-artifact-and-persistence-validation-record.md`                                      | Broader Phase 5 remains open pending later learner-facing integrations, disclosures, external validation, and the approved launch-validation record. |
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
