# Visual Regression Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm before and after screenshots, visual diff output, Storybook snapshots, or affected routes.
- [ ] Confirm expected design changes, release scope, and acceptance criteria.
- [ ] Confirm known rendering noise sources such as fonts, animations, time, or data variance.
- [ ] Confirm supported browsers, themes, breakpoints, and density modes.

## Execution

- [ ] Compare visual changes against the stated product or design intent.
- [ ] Classify diffs as expected, regression, uncertain, or test-noise.
- [ ] Inspect layout, spacing, typography, color, contrast, clipping, overflow, alignment, and state consistency.
- [ ] Prioritize regressions by user impact and affected surface area.
- [ ] Recommend fixes, snapshot updates, or test stabilization steps.

## Completion

- [ ] Important UI regressions are caught without blocking on harmless noise.
- [ ] Findings are tied to visible user impact and implementation targets.
- [ ] Expected changes are clearly separated from accidental changes.
- [ ] Review output helps improve both UI quality and visual test stability.
