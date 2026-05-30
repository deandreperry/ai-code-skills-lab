# Component State Matrix Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm component name, API, design specs, stories, and intended use cases.
- [ ] Confirm variant list, size scale, themes, density modes, and responsive constraints.
- [ ] Confirm interaction, validation, async, and permission states.
- [ ] Confirm design system conventions and testing expectations.

## Execution

- [ ] Identify component purpose, public API, variants, slots, and required user interactions.
- [ ] List state dimensions such as default, hover, active, focus, disabled, loading, error, selected, empty, and long content.
- [ ] Combine state dimensions carefully, avoiding impossible combinations and noting design decisions needed.
- [ ] Add accessibility expectations for names, roles, states, focus, keyboard, contrast, and announcements.
- [ ] Produce a matrix that can drive Figma variants, Storybook stories, tests, and QA checks.

## Completion

- [ ] The matrix covers real states consumers will encounter.
- [ ] Impossible or unsupported states are explicitly identified.
- [ ] Accessibility and responsive expectations are included.
- [ ] Design, engineering, and QA can use the same artifact.
