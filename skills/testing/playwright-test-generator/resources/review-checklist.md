# Playwright Test Generator Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm target user journey, route, or bug reproduction steps.
- [ ] Confirm existing Playwright configuration, fixtures, test data, and authentication helpers.
- [ ] Confirm expected assertions and business rules.
- [ ] Confirm local run command and any environment setup.

## Execution

- [ ] Inspect existing Playwright patterns, fixtures, naming, test data strategy, and CI constraints.
- [ ] Translate the user journey into steps based on accessible roles, labels, and visible behavior.
- [ ] Add assertions at meaningful state transitions instead of only checking final URLs.
- [ ] Handle async behavior with Playwright expectations rather than arbitrary waits.
- [ ] Run or provide the exact focused command and document any environment assumptions.

## Completion

- [ ] Tests use stable, user-facing locators where possible.
- [ ] Coverage matches real behavior and avoids excessive implementation coupling.
- [ ] The test fails meaningfully when the user journey breaks.
- [ ] The test is compatible with local and CI execution.
