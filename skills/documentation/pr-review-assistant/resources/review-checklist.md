# PR Review Assistant Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm pR diff, description, linked issues, screenshots, and test results.
- [ ] Confirm repository conventions and relevant AGENTS instructions.
- [ ] Confirm product context and acceptance criteria.
- [ ] Confirm areas where the author specifically wants feedback.

## Execution

- [ ] Read the PR description and diff to understand intent, scope, and affected behavior.
- [ ] Look first for correctness, regressions, accessibility issues, security concerns, and missing tests.
- [ ] Verify whether implementation matches existing patterns and preserves public contracts.
- [ ] Provide concise findings with file and line references when possible.
- [ ] Separate blocking issues, non-blocking suggestions, questions, and positive observations.

## Completion

- [ ] Findings are specific, actionable, and tied to user or maintenance impact.
- [ ] The review avoids nitpicks unless they affect readability or consistency.
- [ ] Missing tests are called out with suggested coverage.
- [ ] The author can respond or fix without guessing what is meant.
