# Focus Management Review

## Skill Name

Focus Management Review

## Description

Review focus behavior for route changes, dialogs, drawers, toasts, validation, dynamic content, and async UI updates.

## When To Use

- Focus is lost after navigation, modal open, modal close, or async updates.
- A single-page app needs better focus restoration and screen reader orientation.
- A design system is adding overlays, popovers, or command menus.
- Validation or save flows need accessible focus placement.

## Inputs Required

- Code for the affected route, overlay, form, or component.
- Expected user journey and interaction sequence.
- Design system overlay and focus utilities when available.
- Known accessibility issues or assistive technology feedback.

## Step-by-Step Workflow

1. Trace where focus starts, where it moves after each interaction, and where it should return.
2. Check modals, drawers, popovers, route changes, loading states, errors, and destructive confirmations.
3. Prefer native browser behavior when it is correct and add focus management only when state changes require it.
4. Validate focus traps, inert background behavior, escape handling, and announcement strategy.
5. Recommend focused changes and tests that cover open, close, cancel, submit, error, and success states.

## Output Format

- Focus behavior map for the reviewed flow.
- Findings with expected focus target, actual focus target, and remediation.
- Test checklist for focus restoration and dynamic UI changes.

## Success Criteria

- Users can orient themselves after each route or overlay transition.
- Focus never moves to non-interactive or hidden content unless intentional and useful.
- Return focus works after closing temporary UI.
- Assistive technology users receive relevant context without noisy announcements.

## Common Mistakes

- Forcing focus on every render.
- Sending focus to the top of the page after small inline changes.
- Trapping focus without an escape path.
- Using live regions when focus placement would solve the issue more clearly.

## Example Usage

Use this skill to review a React drawer workflow where opening, submitting, showing errors, and closing must preserve user orientation.
