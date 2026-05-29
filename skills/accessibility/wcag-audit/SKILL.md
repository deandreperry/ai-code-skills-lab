# WCAG Audit

## Skill Name

WCAG Audit

## Description

Audit an interface against WCAG-aligned accessibility expectations with practical findings, reproduction steps, and remediation guidance.

## When To Use

- A feature needs accessibility review before launch.
- A product has known screen reader, keyboard, color, or form issues.
- A team needs to prioritize accessibility debt across a surface area.
- An audit must translate WCAG concerns into engineering tasks.

## Inputs Required

- Target URL, component, page, or flow.
- Supported browsers, assistive technology expectations, and conformance target when known.
- Design references, screenshots, or known accessibility bugs.
- Available tooling such as axe, Playwright, Storybook, or browser devtools.

## Step-by-Step Workflow

1. Define the scope and map the critical user tasks before checking individual criteria.
2. Test semantic structure, headings, landmarks, names, roles, states, keyboard access, focus visibility, errors, contrast, and motion.
3. Use automated tools for coverage but verify important behavior manually.
4. Assign severity based on task impact, frequency, and whether users have a workaround.
5. Provide remediation with code-level examples that fit the existing stack.

## Output Format

- Accessibility audit report with severity, evidence, affected users, and remediation.
- Issue list mapped to components, pages, or user tasks.
- Verification checklist for retesting fixes.

## Success Criteria

- Critical blockers are identified with clear reproduction steps.
- Findings distinguish automated warnings from verified user impact.
- Recommendations improve accessibility without breaking product behavior.
- Retesting criteria are specific and repeatable.

## Common Mistakes

- Reporting every automated warning with equal severity.
- Treating color contrast as the whole audit.
- Ignoring keyboard-only and screen reader flows.
- Fixing ARIA labels while leaving broken semantics in place.

## Example Usage

Use this skill on a checkout flow to audit keyboard navigation, form errors, live regions, focus order, contrast, and dialog behavior.
