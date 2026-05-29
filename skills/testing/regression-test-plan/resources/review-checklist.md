# Regression Test Plan Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm change summary, affected files, user flows, and known risk areas.
- [ ] Confirm existing test pyramid and available tooling.
- [ ] Confirm production incidents, support tickets, or bug reproduction steps.
- [ ] Confirm release constraints and acceptance criteria.

## Execution

- [ ] Identify the user-visible behaviors and failure modes introduced or affected by the change.
- [ ] Map each risk to the cheapest reliable test level: unit, component, integration, E2E, visual, or manual.
- [ ] Define test data, environments, assertions, and ownership for each scenario.
- [ ] Prioritize must-run tests separately from nice-to-have coverage.
- [ ] Produce a plan that can be executed by engineering, QA, or an AI coding agent.

## Completion

- [ ] The plan focuses on behavior that could realistically regress.
- [ ] High-risk flows have clear pass or fail criteria.
- [ ] Automated coverage is proposed where it provides durable value.
- [ ] Manual QA is scoped and not used as a substitute for all automation.
