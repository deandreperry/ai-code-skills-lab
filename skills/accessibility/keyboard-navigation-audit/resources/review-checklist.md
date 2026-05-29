# Keyboard Navigation Audit Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm target page, component, or user flow.
- [ ] Confirm expected interaction patterns for custom controls.
- [ ] Confirm known browser support and any design system primitives in use.
- [ ] Confirm existing tests or accessibility tooling.

## Execution

- [ ] Start from the browser address bar and complete the critical flow using only keyboard input.
- [ ] Record focus order, visible focus, activation keys, escape behavior, and return-focus behavior.
- [ ] Check composite widgets against expected interaction patterns and avoid unnecessary custom keyboard models.
- [ ] Identify traps, unreachable controls, hidden focusable elements, and focus loss after route or state changes.
- [ ] Recommend fixes using native elements first, then ARIA patterns when a true composite widget is required.

## Completion

- [ ] All critical tasks can be completed without a pointer.
- [ ] Focus is visible, logical, and never lost.
- [ ] Dialogs, menus, and overlays support escape and return focus.
- [ ] Custom widgets follow predictable keyboard conventions.
