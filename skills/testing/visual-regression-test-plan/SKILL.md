# Visual Regression Test Plan

## Skill Name

Visual Regression Test Plan

## Description

Plan stable visual regression coverage for components, pages, themes, and responsive states without creating noisy screenshot tests.

## When To Use

- A team wants screenshot or visual diff coverage for UI changes.
- Design system or token updates need visual protection.
- Existing visual tests are flaky or too broad.
- A release needs confidence across themes, breakpoints, and important states.

## Inputs Required

- Target components, pages, stories, or flows.
- Visual testing tool such as Storybook, Chromatic, Playwright, Percy, or custom snapshots.
- Supported themes, breakpoints, browsers, and dynamic content constraints.
- Known high-risk visual areas and existing test noise.

## Step-by-Step Workflow

1. Identify the UI surfaces where visual regressions would matter most.
2. Choose coverage level: component stories, route screenshots, state matrices, or targeted flow captures.
3. Stabilize data, fonts, animations, time, viewport, and network dependencies.
4. Define baseline update rules and review responsibilities.
5. Produce a prioritized test plan with commands, scope, and maintenance guidance.

## Output Format

- Visual regression test plan with scenarios, states, viewports, and priority.
- Stability checklist for deterministic screenshots.
- Baseline review and update policy.

## Success Criteria

- Coverage catches meaningful visual regressions with manageable noise.
- Dynamic inputs are controlled or excluded intentionally.
- Important themes, states, and responsive layouts are represented.
- The team knows when to update baselines and when to investigate.

## Common Mistakes

- Screenshotting entire apps with unstable data.
- Ignoring hover, focus, error, loading, and long-content states.
- Running visual tests without a baseline review process.
- Treating every pixel diff as equal severity.

## Example Usage

Use this skill to plan Playwright screenshot coverage for a component library across light mode, dark mode, mobile, and error states.
