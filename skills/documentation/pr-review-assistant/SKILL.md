# PR Review Assistant

## Skill Name

PR Review Assistant

## Description

Review pull requests with a senior engineering lens focused on defects, regressions, accessibility, tests, maintainability, and documentation.

## When To Use

- A PR needs careful review before merge.
- The change touches shared UI, design system code, tests, or production workflows.
- A reviewer wants actionable comments rather than style-only feedback.
- A team needs risk assessment and missing test coverage called out.

## Inputs Required

- PR diff, description, linked issues, screenshots, and test results.
- Repository conventions and relevant AGENTS instructions.
- Product context and acceptance criteria.
- Areas where the author specifically wants feedback.

## Step-by-Step Workflow

1. Read the PR description and diff to understand intent, scope, and affected behavior.
2. Look first for correctness, regressions, accessibility issues, security concerns, and missing tests.
3. Verify whether implementation matches existing patterns and preserves public contracts.
4. Provide concise findings with file and line references when possible.
5. Separate blocking issues, non-blocking suggestions, questions, and positive observations.

## Output Format

- Review findings ordered by severity.
- Open questions or assumptions.
- Short summary of change quality and test coverage.
- Suggested comments ready to post when useful.

## Success Criteria

- Findings are specific, actionable, and tied to user or maintenance impact.
- The review avoids nitpicks unless they affect readability or consistency.
- Missing tests are called out with suggested coverage.
- The author can respond or fix without guessing what is meant.

## Common Mistakes

- Reviewing only formatting while missing behavior changes.
- Leaving vague comments without reproduction or suggested direction.
- Blocking on personal preference that conflicts with local style.
- Forgetting accessibility and edge states in UI changes.

## Example Usage

Use this skill to review a PR that changes a reusable date picker and adds Playwright coverage for booking flows.
