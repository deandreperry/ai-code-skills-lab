# Form Architecture Review

## Skill Name

Form Architecture Review

## Description

Review complex frontend form architecture for validation, state ownership, accessibility, submission, error recovery, performance, and maintainability.

## When To Use

- A form has many fields, steps, conditional sections, or validation rules.
- Form state is hard to test, reuse, or reason about.
- Submission, autosave, server validation, or draft behavior is unreliable.
- Designers and developers need alignment on form behavior before implementation.

## Inputs Required

- Form components, schema, validation rules, state management, and submission code.
- User flow, field inventory, conditional logic, and acceptance criteria.
- Accessibility requirements, error display rules, and focus behavior.
- API contracts, autosave, draft, or persistence expectations.

## Step-by-Step Workflow

1. Map field groups, validation timing, dependencies, state ownership, and submission lifecycle.
2. Review client validation, server validation, error mapping, dirty state, autosave, and reset behavior.
3. Check accessibility for labels, descriptions, groups, errors, focus, keyboard, and announcements.
4. Identify performance risks from large forms, rerenders, and expensive validation.
5. Recommend architecture, tests, and documentation for maintainable form behavior.

## Output Format

- Form architecture review with risks and recommended structure.
- Field/state/validation map for implementation or refactor planning.
- Test checklist for validation, submission, accessibility, and edge cases.

## Success Criteria

- Form behavior is predictable across editing, validation, submission, and recovery.
- State ownership and validation boundaries are clear.
- Users can complete the form with keyboard and assistive technology.
- The architecture supports future fields without becoming brittle.

## Common Mistakes

- Mixing display state, draft data, and persisted data without boundaries.
- Showing server errors without associating them to fields or summaries.
- Validating too aggressively before users can finish entering data.
- Ignoring conditional fields and multi-step persistence.

## Example Usage

Use this skill to review a multi-step onboarding form with conditional company details, autosave, server validation, and final submission.
