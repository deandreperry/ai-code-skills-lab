# Accessible Form Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm form component code, target URL, or screenshots.
- [ ] Confirm validation rules, submission behavior, and error states.
- [ ] Confirm design system form primitives and field patterns.
- [ ] Confirm supported browsers, locales, and assistive technology expectations.

## Execution

- [ ] Map each field to its accessible name, description, validation state, and required state.
- [ ] Check field grouping, legends, instructions, autocomplete attributes, input types, and error association.
- [ ] Test keyboard navigation, focus movement after submission, disabled states, and recovery from validation errors.
- [ ] Review custom controls for native behavior parity before adding ARIA.
- [ ] Recommend changes that preserve form data flow and analytics behavior.

## Completion

- [ ] Every field has a durable accessible name and relevant description.
- [ ] Validation errors are discoverable, associated, and recoverable.
- [ ] Keyboard users can complete and submit the form.
- [ ] Custom controls behave like the native controls they replace.
