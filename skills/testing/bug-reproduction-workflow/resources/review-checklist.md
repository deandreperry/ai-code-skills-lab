# Bug Reproduction Workflow Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm bug report, screenshots, logs, environment details, and affected user segment.
- [ ] Confirm expected behavior, actual behavior, and frequency.
- [ ] Confirm relevant routes, feature flags, data conditions, and recent changes.
- [ ] Confirm available local setup, test accounts, or staging access.

## Execution

- [ ] Normalize the report into environment, data, steps, expected result, actual result, and observed frequency.
- [ ] Search for related code paths, recent changes, logs, and test coverage.
- [ ] Build the smallest reliable reproduction path and note any unknowns.
- [ ] Create a failing test or explicit manual verification script when automation is not feasible.
- [ ] Summarize likely root causes, fix boundaries, and confirmation criteria.

## Completion

- [ ] Another engineer can reproduce or understand why reproduction is blocked.
- [ ] The workflow distinguishes confirmed facts from hypotheses.
- [ ] A fix can be validated against the original failure mode.
- [ ] The report avoids scope creep into unrelated cleanup.
