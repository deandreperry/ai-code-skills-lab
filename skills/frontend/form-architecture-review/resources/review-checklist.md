# Form Architecture Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm form components, schema, validation rules, state management, and submission code.
- [ ] Confirm user flow, field inventory, conditional logic, and acceptance criteria.
- [ ] Confirm accessibility requirements, error display rules, and focus behavior.
- [ ] Confirm aPI contracts, autosave, draft, or persistence expectations.

## Execution

- [ ] Map field groups, validation timing, dependencies, state ownership, and submission lifecycle.
- [ ] Review client validation, server validation, error mapping, dirty state, autosave, and reset behavior.
- [ ] Check accessibility for labels, descriptions, groups, errors, focus, keyboard, and announcements.
- [ ] Identify performance risks from large forms, rerenders, and expensive validation.
- [ ] Recommend architecture, tests, and documentation for maintainable form behavior.

## Completion

- [ ] Form behavior is predictable across editing, validation, submission, and recovery.
- [ ] State ownership and validation boundaries are clear.
- [ ] Users can complete the form with keyboard and assistive technology.
- [ ] The architecture supports future fields without becoming brittle.
