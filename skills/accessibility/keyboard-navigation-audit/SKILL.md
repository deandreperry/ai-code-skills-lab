# Keyboard Navigation Audit

## Skill Name

Keyboard Navigation Audit

## Description

Audit keyboard access, focus order, visible focus, shortcuts, traps, roving tabindex patterns, and escape behavior across an interface.

## When To Use

- A page or component cannot be completed without a mouse.
- Menus, dialogs, tabs, grids, or composite widgets need keyboard QA.
- Focus disappears, skips important controls, or gets trapped unexpectedly.
- A team needs keyboard regression checks for a release.

## Inputs Required

- Target page, component, or user flow.
- Expected interaction patterns for custom controls.
- Known browser support and any design system primitives in use.
- Existing tests or accessibility tooling.

## Step-by-Step Workflow

1. Start from the browser address bar and complete the critical flow using only keyboard input.
2. Record focus order, visible focus, activation keys, escape behavior, and return-focus behavior.
3. Check composite widgets against expected interaction patterns and avoid unnecessary custom keyboard models.
4. Identify traps, unreachable controls, hidden focusable elements, and focus loss after route or state changes.
5. Recommend fixes using native elements first, then ARIA patterns when a true composite widget is required.

## Output Format

- Keyboard audit report with reproduction steps and expected behavior.
- Priority list of blockers, major friction, and polish issues.
- Regression checklist or Playwright scenarios for critical flows.

## Success Criteria

- All critical tasks can be completed without a pointer.
- Focus is visible, logical, and never lost.
- Dialogs, menus, and overlays support escape and return focus.
- Custom widgets follow predictable keyboard conventions.

## Common Mistakes

- Only testing Tab and ignoring Enter, Space, Arrow keys, Escape, and Shift+Tab.
- Adding tabindex values that create a brittle custom focus order.
- Leaving hidden controls focusable.
- Using keyboard shortcuts that conflict with browser or assistive technology commands.

## Example Usage

Use this skill to audit a command menu, settings dialog, and tabbed billing page entirely with keyboard input.
