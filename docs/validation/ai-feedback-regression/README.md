# AI Feedback Regression Evidence

## Purpose

This directory is the authoritative evidence location for exact AI validation inputs, observed structured outputs, verdicts, reasons, tuning changes, and rerun evidence under Section 4.5.

The directory currently defines the evidence contract only. Its existence does not mean regression testing has been executed or passed. The historical `../scenario-engine-validation-log.md` remains useful context but does not replace case-level evidence required here.

## Record Naming

Use a dated Markdown record:

`YYYY-MM-DD-<engine-or-feature>-<case-set>.md`

If a rerun requires a separate record, link both records and preserve the earlier result. Do not overwrite failed evidence.

## Required Record Structure

Each case must identify:

- case identifier and category
- related acceptance-criterion identifiers
- implementation commit or build
- environment
- date and reviewer
- endpoint and model
- prompt or contract version without exposing hidden prompt content
- input category and exact non-sensitive test input
- expected feedback characteristics
- observed structured output
- pass/fail result and reason
- defect reference where applicable
- tuning change, if any
- retest or rerun reference
- uncertainty or limitation

Representative categories are defined in `../VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` and include strong, weak, vague-but-meaningful, boundary, invalid, malformed-output, provider-failure, module-specific, Reflection-specific, and future validated Module 4 pathway cases.

## Data Boundaries

Do not store:

- API keys or secrets
- confidential learner or workplace data
- production learner conversations
- personal data
- chain of thought
- hidden system prompts
- unnecessary full provider payloads

Store only the minimum evidence required to reproduce and review the validation decision.

