# Focus Management Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm code for the affected route, overlay, form, or component.
- [ ] Confirm expected user journey and interaction sequence.
- [ ] Confirm design system overlay and focus utilities when available.
- [ ] Confirm known accessibility issues or assistive technology feedback.

## Execution

- [ ] Trace where focus starts, where it moves after each interaction, and where it should return.
- [ ] Check modals, drawers, popovers, route changes, loading states, errors, and destructive confirmations.
- [ ] Prefer native browser behavior when it is correct and add focus management only when state changes require it.
- [ ] Validate focus traps, inert background behavior, escape handling, and announcement strategy.
- [ ] Recommend focused changes and tests that cover open, close, cancel, submit, error, and success states.

## Completion

- [ ] Users can orient themselves after each route or overlay transition.
- [ ] Focus never moves to non-interactive or hidden content unless intentional and useful.
- [ ] Return focus works after closing temporary UI.
- [ ] Assistive technology users receive relevant context without noisy announcements.
