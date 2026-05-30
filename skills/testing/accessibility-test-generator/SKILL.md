# Accessibility Test Generator

## Skill Name

Accessibility Test Generator

## Description

Generate focused accessibility regression tests using Playwright, axe, component tests, or repository-specific tooling.

## When To Use

- A feature needs automated accessibility checks in addition to manual review.
- A bug fix should prevent regressions in labels, roles, focus, contrast, or keyboard behavior.
- A design system component needs accessibility coverage.
- A team wants practical tests without over-relying on automated scanners.

## Inputs Required

- Target page, component, user flow, or accessibility bug.
- Existing test framework, fixtures, axe setup, and run command.
- Expected accessible names, roles, states, focus behavior, and error behavior.
- Manual accessibility findings that need durable coverage.

## Step-by-Step Workflow

1. Inspect existing testing patterns and accessibility helper setup.
2. Choose the right level: unit, component, Playwright, axe scan, keyboard scenario, or manual checklist.
3. Write tests around user-visible accessibility contracts such as roles, names, focus, keyboard, and error association.
4. Use automated scanners as a supplement, not the only assertion.
5. Run focused tests or provide exact commands and limitations.

## Output Format

- Accessibility regression tests or implementation-ready test plan.
- Explanation of what accessibility behavior is covered and what remains manual.
- Run command and follow-up recommendations.

## Success Criteria

- Tests fail when important accessibility contracts regress.
- Assertions use roles, labels, focus, and visible behavior rather than implementation details.
- Automated checks are scoped and stable.
- Manual-only risks are clearly documented.

## Common Mistakes

- Adding a broad axe scan and assuming accessibility is covered.
- Testing ARIA attributes without testing resulting behavior.
- Using brittle selectors instead of accessible queries.
- Skipping keyboard and focus behavior for interactive components.

## Example Usage

Use this skill to add tests for a modal form covering accessible name, focus trap, validation errors, axe scan, and return focus.
