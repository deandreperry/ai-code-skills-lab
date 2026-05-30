# Visual Regression Review Examples

## Sample Prompt

```text
Use the Visual Regression Review skill.
Inputs:
- Before and after screenshots, visual diff output, Storybook snapshots, or affected routes.
- Expected design changes, release scope, and acceptance criteria.
- Known rendering noise sources such as fonts, animations, time, or data variance.
```

## Example Scenario

Use this skill to review Storybook visual diffs after updating button tokens, form spacing, and dark-mode colors.

## Expected Output

- Visual regression review with classified findings and severity.
- Annotated list of likely causes and reproduction targets.
- Recommendations for accepting, fixing, or stabilizing snapshots.
