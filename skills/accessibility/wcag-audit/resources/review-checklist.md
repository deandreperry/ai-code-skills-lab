# WCAG Audit Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm target URL, component, page, or flow.
- [ ] Confirm supported browsers, assistive technology expectations, and conformance target when known.
- [ ] Confirm design references, screenshots, or known accessibility bugs.
- [ ] Confirm available tooling such as axe, Playwright, Storybook, or browser devtools.

## Execution

- [ ] Define the scope and map the critical user tasks before checking individual criteria.
- [ ] Test semantic structure, headings, landmarks, names, roles, states, keyboard access, focus visibility, errors, contrast, and motion.
- [ ] Use automated tools for coverage but verify important behavior manually.
- [ ] Assign severity based on task impact, frequency, and whether users have a workaround.
- [ ] Provide remediation with code-level examples that fit the existing stack.

## Completion

- [ ] Critical blockers are identified with clear reproduction steps.
- [ ] Findings distinguish automated warnings from verified user impact.
- [ ] Recommendations improve accessibility without breaking product behavior.
- [ ] Retesting criteria are specific and repeatable.
