# Playwright Test Generator

## Skill Name

Playwright Test Generator

## Description

Generate maintainable Playwright end-to-end tests for critical user journeys using accessible locators and stable assertions.

## When To Use

- A product flow needs end-to-end coverage before release.
- Existing tests are brittle, selector-heavy, or hard to debug.
- A bug should be protected by a browser-level regression test.
- A team needs test coverage for routing, forms, dialogs, auth, or checkout flows.

## Inputs Required

- Target user journey, route, or bug reproduction steps.
- Existing Playwright configuration, fixtures, test data, and authentication helpers.
- Expected assertions and business rules.
- Local run command and any environment setup.

## Step-by-Step Workflow

1. Inspect existing Playwright patterns, fixtures, naming, test data strategy, and CI constraints.
2. Translate the user journey into steps based on accessible roles, labels, and visible behavior.
3. Add assertions at meaningful state transitions instead of only checking final URLs.
4. Handle async behavior with Playwright expectations rather than arbitrary waits.
5. Run or provide the exact focused command and document any environment assumptions.

## Output Format

- Playwright test file or patch aligned with existing test conventions.
- Short explanation of covered scenario and assertions.
- Run command plus any data, auth, or environment notes.

## Success Criteria

- Tests use stable, user-facing locators where possible.
- Coverage matches real behavior and avoids excessive implementation coupling.
- The test fails meaningfully when the user journey breaks.
- The test is compatible with local and CI execution.

## Common Mistakes

- Using brittle CSS selectors when roles or labels are available.
- Adding `waitForTimeout` instead of waiting for a real condition.
- Testing too many unrelated paths in one scenario.
- Depending on mutable production data.

## Example Usage

Use this skill to generate a Playwright test for a signup flow with validation errors, successful submission, and post-submit navigation.
