# QA Checklist Generator

## Skill Name

QA Checklist Generator

## Description

Generate concise, risk-based QA checklists for features, releases, bug fixes, and design system changes.

## When To Use

- A team needs manual QA coverage before shipping.
- A feature touches many states, roles, devices, or edge cases.
- QA notes need to be readable by engineers, designers, and product managers.
- A release checklist should complement automated tests.

## Inputs Required

- Feature description, acceptance criteria, designs, and user flows.
- Affected roles, permissions, devices, browsers, and locales.
- Known risks, dependencies, and existing automated coverage.
- Release timeline and environments available for testing.

## Step-by-Step Workflow

1. Identify core user tasks, permissions, state transitions, and failure modes.
2. Group checks by workflow, state, platform, accessibility, analytics, and regression risk as relevant.
3. Make each checklist item observable and pass/fail oriented.
4. Separate smoke checks, full regression checks, and exploratory prompts.
5. Include setup data and environment notes so the checklist can be executed reliably.

## Output Format

- QA checklist with priorities, setup notes, and pass/fail checks.
- Coverage notes showing what automated tests already cover.
- Recommended follow-up tests for durable regression protection.

## Success Criteria

- The checklist is short enough to use but broad enough to catch likely issues.
- Each item has a clear expected result.
- Critical accessibility, responsive, and error states are included.
- Manual effort is focused where automation is weak or unavailable.

## Common Mistakes

- Writing vague items like "verify page works".
- Duplicating automated tests without adding human judgment value.
- Skipping permissions, empty states, loading states, and error recovery.
- Forgetting setup data and environment assumptions.

## Example Usage

Use this skill to generate a QA checklist for launching a new dashboard filter experience across desktop, mobile, admin, and read-only users.
