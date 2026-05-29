# Architecture Decision Record

## Skill Name

Architecture Decision Record

## Description

Create concise architecture decision records that capture context, decision, alternatives, consequences, and follow-up actions.

## When To Use

- A team is making a decision with long-term technical consequences.
- A migration, dependency, pattern, or platform choice needs a written rationale.
- Past decisions are being relitigated because context was lost.
- Leadership needs a record of tradeoffs and expected outcomes.

## Inputs Required

- Decision topic, context, constraints, options considered, and stakeholders.
- Technical requirements, non-goals, risks, and timelines.
- Evidence such as prototypes, incidents, performance data, or team constraints.
- ADR format or repository documentation convention.

## Step-by-Step Workflow

1. Clarify the decision being made and separate it from implementation tasks.
2. Document context, constraints, options, evaluation criteria, and non-goals.
3. State the decision directly and explain why rejected alternatives were not chosen.
4. Capture consequences, risks, rollout plan, and review triggers.
5. Keep the ADR factual, dated, and easy to update when circumstances change.

## Output Format

- ADR document with status, context, decision, alternatives, consequences, and follow-up.
- Decision summary suitable for PR or planning discussion.
- Open questions when the decision is not ready.

## Success Criteria

- Future readers understand why the decision made sense at the time.
- Tradeoffs are explicit rather than hidden in implementation details.
- Alternatives are represented fairly.
- The ADR is short enough that the team will maintain it.

## Common Mistakes

- Writing an implementation plan without an actual decision.
- Presenting only the chosen option.
- Omitting constraints that shaped the outcome.
- Using vague status or no date.

## Example Usage

Use this skill to write an ADR for adopting server components, including alternatives, risks, migration plan, and review criteria.
