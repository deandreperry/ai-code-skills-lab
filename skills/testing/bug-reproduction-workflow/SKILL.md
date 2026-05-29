# Bug Reproduction Workflow

## Skill Name

Bug Reproduction Workflow

## Description

Turn vague bug reports into reproducible steps, minimal failing cases, root-cause hypotheses, and focused verification plans.

## When To Use

- A bug is reported with incomplete or inconsistent reproduction details.
- A fix should start from a failing test or clear reproduction.
- A team needs to separate product behavior, environment issues, and code defects.
- Support or QA reports need engineering-ready triage.

## Inputs Required

- Bug report, screenshots, logs, environment details, and affected user segment.
- Expected behavior, actual behavior, and frequency.
- Relevant routes, feature flags, data conditions, and recent changes.
- Available local setup, test accounts, or staging access.

## Step-by-Step Workflow

1. Normalize the report into environment, data, steps, expected result, actual result, and observed frequency.
2. Search for related code paths, recent changes, logs, and test coverage.
3. Build the smallest reliable reproduction path and note any unknowns.
4. Create a failing test or explicit manual verification script when automation is not feasible.
5. Summarize likely root causes, fix boundaries, and confirmation criteria.

## Output Format

- Reproduction record with exact steps, data, environment, and evidence.
- Minimal failing test or recommended test case.
- Triage notes with hypotheses, affected scope, and verification plan.

## Success Criteria

- Another engineer can reproduce or understand why reproduction is blocked.
- The workflow distinguishes confirmed facts from hypotheses.
- A fix can be validated against the original failure mode.
- The report avoids scope creep into unrelated cleanup.

## Common Mistakes

- Starting with a fix before confirming the bug.
- Assuming screenshots show the full state needed to reproduce.
- Ignoring feature flags, permissions, locale, time zone, and data shape.
- Closing the loop without verifying the original scenario.

## Example Usage

Use this skill on a flaky checkout discount bug to capture exact cart state, account flags, browser, steps, and a failing Playwright scenario.
