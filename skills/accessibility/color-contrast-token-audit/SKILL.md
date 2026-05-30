# Color Contrast Token Audit

## Skill Name

Color Contrast Token Audit

## Description

Audit color tokens, component states, and UI examples for contrast risks across themes, states, and semantic roles.

## When To Use

- A design system is defining or changing color tokens.
- A product supports light mode, dark mode, brand themes, or status colors.
- Components may have low-contrast text, icons, borders, focus rings, or disabled states.
- Designers and engineers need token-level contrast guidance.

## Inputs Required

- Color token files, theme files, design specs, screenshots, or component examples.
- Target WCAG contrast expectations and supported themes.
- Text, icon, border, status, focus, disabled, and chart color usage.
- Known accessibility bugs or brand constraints.

## Step-by-Step Workflow

1. Inventory foreground/background token pairings across semantic roles and states.
2. Check text, icons, focus indicators, status messaging, borders, and disabled treatments.
3. Evaluate light, dark, brand, hover, active, selected, error, warning, and success states.
4. Identify token pairings that fail or are too fragile for real content.
5. Recommend token changes, semantic pairing rules, and component-level safeguards.

## Output Format

- Contrast audit with passing, failing, and risky token pairings.
- Recommended token changes or pairing rules.
- Component and QA checklist for contrast-sensitive states.

## Success Criteria

- Critical text and controls meet contrast expectations across supported themes.
- Designers and developers know which token pairings are safe.
- Focus, error, and status states remain perceivable.
- Recommendations preserve brand intent where possible.

## Common Mistakes

- Auditing only body text on white backgrounds.
- Ignoring focus rings, icons, placeholders, disabled states, and charts.
- Changing raw colors without updating semantic token guidance.
- Assuming dark mode contrast mirrors light mode.

## Example Usage

Use this skill to audit color tokens for buttons, alerts, form errors, focus rings, and dark-mode navigation.
