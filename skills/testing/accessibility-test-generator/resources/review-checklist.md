# Accessibility Test Generator Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm target page, component, user flow, or accessibility bug.
- [ ] Confirm existing test framework, fixtures, axe setup, and run command.
- [ ] Confirm expected accessible names, roles, states, focus behavior, and error behavior.
- [ ] Confirm manual accessibility findings that need durable coverage.

## Execution

- [ ] Inspect existing testing patterns and accessibility helper setup.
- [ ] Choose the right level: unit, component, Playwright, axe scan, keyboard scenario, or manual checklist.
- [ ] Write tests around user-visible accessibility contracts such as roles, names, focus, keyboard, and error association.
- [ ] Use automated scanners as a supplement, not the only assertion.
- [ ] Run focused tests or provide exact commands and limitations.

## Completion

- [ ] Tests fail when important accessibility contracts regress.
- [ ] Assertions use roles, labels, focus, and visible behavior rather than implementation details.
- [ ] Automated checks are scoped and stable.
- [ ] Manual-only risks are clearly documented.
