# Visual Regression Review

## Skill Name

Visual Regression Review

## Description

Review screenshots, visual diffs, or UI snapshots to identify meaningful regressions while filtering expected or harmless rendering noise.

## When To Use

- A UI change produces screenshot diffs in review or CI.
- A team needs human judgment on whether visual changes are intentional.
- Design system updates affect many components or themes.
- Visual QA needs findings that engineers can reproduce and fix.

## Inputs Required

- Before and after screenshots, visual diff output, Storybook snapshots, or affected routes.
- Expected design changes, release scope, and acceptance criteria.
- Known rendering noise sources such as fonts, animations, time, or data variance.
- Supported browsers, themes, breakpoints, and density modes.

## Step-by-Step Workflow

1. Compare visual changes against the stated product or design intent.
2. Classify diffs as expected, regression, uncertain, or test-noise.
3. Inspect layout, spacing, typography, color, contrast, clipping, overflow, alignment, and state consistency.
4. Prioritize regressions by user impact and affected surface area.
5. Recommend fixes, snapshot updates, or test stabilization steps.

## Output Format

- Visual regression review with classified findings and severity.
- Annotated list of likely causes and reproduction targets.
- Recommendations for accepting, fixing, or stabilizing snapshots.

## Success Criteria

- Important UI regressions are caught without blocking on harmless noise.
- Findings are tied to visible user impact and implementation targets.
- Expected changes are clearly separated from accidental changes.
- Review output helps improve both UI quality and visual test stability.

## Common Mistakes

- Approving every diff because the feature changed intentionally.
- Blocking on antialiasing or data noise without user impact.
- Ignoring accessibility issues visible in visual diffs such as low contrast or missing focus.
- Updating baselines before understanding the change.

## Example Usage

Use this skill to review Storybook visual diffs after updating button tokens, form spacing, and dark-mode colors.
