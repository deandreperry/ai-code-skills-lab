# Regression Test Plan

## Skill Name

Regression Test Plan

## Description

Create a targeted regression test plan that protects important behavior after bug fixes, refactors, migrations, or releases.

## When To Use

- A bug fix needs durable coverage at the right test level.
- A release changes shared components, routing, auth, checkout, or data fetching.
- QA needs a focused plan instead of a broad manual sweep.
- A migration needs risk-based validation across affected surfaces.

## Inputs Required

- Change summary, affected files, user flows, and known risk areas.
- Existing test pyramid and available tooling.
- Production incidents, support tickets, or bug reproduction steps.
- Release constraints and acceptance criteria.

## Step-by-Step Workflow

1. Identify the user-visible behaviors and failure modes introduced or affected by the change.
2. Map each risk to the cheapest reliable test level: unit, component, integration, E2E, visual, or manual.
3. Define test data, environments, assertions, and ownership for each scenario.
4. Prioritize must-run tests separately from nice-to-have coverage.
5. Produce a plan that can be executed by engineering, QA, or an AI coding agent.

## Output Format

- Regression test plan with scenarios, levels, priority, and owners.
- Suggested automated tests and manual checks.
- Release confidence notes and known residual risk.

## Success Criteria

- The plan focuses on behavior that could realistically regress.
- High-risk flows have clear pass or fail criteria.
- Automated coverage is proposed where it provides durable value.
- Manual QA is scoped and not used as a substitute for all automation.

## Common Mistakes

- Listing every possible page without prioritization.
- Choosing E2E tests for logic that belongs in unit or component tests.
- Forgetting negative, empty, loading, and error states.
- Leaving assertions vague or subjective.

## Example Usage

Use this skill after a pricing refactor to plan tests for plan selection, discounts, checkout handoff, and billing error recovery.
