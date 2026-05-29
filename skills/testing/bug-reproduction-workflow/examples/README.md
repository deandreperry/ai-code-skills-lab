# Bug Reproduction Workflow Examples

## Sample Prompt

```text
Use the Bug Reproduction Workflow skill.
Inputs:
- Bug report, screenshots, logs, environment details, and affected user segment.
- Expected behavior, actual behavior, and frequency.
- Relevant routes, feature flags, data conditions, and recent changes.
```

## Example Scenario

Use this skill on a flaky checkout discount bug to capture exact cart state, account flags, browser, steps, and a failing Playwright scenario.

## Expected Output

- Reproduction record with exact steps, data, environment, and evidence.
- Minimal failing test or recommended test case.
- Triage notes with hypotheses, affected scope, and verification plan.
