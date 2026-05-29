# Accessible Form Review

## Skill Name

Accessible Form Review

## Description

Review forms for labels, grouping, validation, error recovery, keyboard behavior, autocomplete, and assistive technology support.

## When To Use

- A form has validation, error summary, or screen reader issues.
- A team is building checkout, signup, onboarding, account, or settings flows.
- Inputs are visually styled in a way that may break native semantics.
- Form completion rates or support tickets suggest usability problems.

## Inputs Required

- Form component code, target URL, or screenshots.
- Validation rules, submission behavior, and error states.
- Design system form primitives and field patterns.
- Supported browsers, locales, and assistive technology expectations.

## Step-by-Step Workflow

1. Map each field to its accessible name, description, validation state, and required state.
2. Check field grouping, legends, instructions, autocomplete attributes, input types, and error association.
3. Test keyboard navigation, focus movement after submission, disabled states, and recovery from validation errors.
4. Review custom controls for native behavior parity before adding ARIA.
5. Recommend changes that preserve form data flow and analytics behavior.

## Output Format

- Accessible form review with field-level findings.
- Remediation checklist covering labels, errors, focus, grouping, and submission.
- Suggested test cases for validation and assistive technology flows.

## Success Criteria

- Every field has a durable accessible name and relevant description.
- Validation errors are discoverable, associated, and recoverable.
- Keyboard users can complete and submit the form.
- Custom controls behave like the native controls they replace.

## Common Mistakes

- Using placeholder text as the only label.
- Announcing errors visually but not programmatically.
- Moving focus unpredictably after every field change.
- Disabling submit buttons without explaining unmet requirements.

## Example Usage

Use this skill on an enterprise signup form to ensure field labels, error summaries, autocomplete hints, and focus behavior support completion.
