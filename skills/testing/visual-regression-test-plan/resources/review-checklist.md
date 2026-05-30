# Visual Regression Test Plan Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm target components, pages, stories, or flows.
- [ ] Confirm visual testing tool such as Storybook, Chromatic, Playwright, Percy, or custom snapshots.
- [ ] Confirm supported themes, breakpoints, browsers, and dynamic content constraints.
- [ ] Confirm known high-risk visual areas and existing test noise.

## Execution

- [ ] Identify the UI surfaces where visual regressions would matter most.
- [ ] Choose coverage level: component stories, route screenshots, state matrices, or targeted flow captures.
- [ ] Stabilize data, fonts, animations, time, viewport, and network dependencies.
- [ ] Define baseline update rules and review responsibilities.
- [ ] Produce a prioritized test plan with commands, scope, and maintenance guidance.

## Completion

- [ ] Coverage catches meaningful visual regressions with manageable noise.
- [ ] Dynamic inputs are controlled or excluded intentionally.
- [ ] Important themes, states, and responsive layouts are represented.
- [ ] The team knows when to update baselines and when to investigate.
