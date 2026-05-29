# Responsive Design Audit

## Skill Name

Responsive Design Audit

## Description

Audit responsive behavior across breakpoints, input methods, and content lengths so interfaces remain usable, legible, and stable.

## When To Use

- A layout breaks on mobile, tablet, ultrawide, or zoomed desktop views.
- Components rely on fixed widths, fragile positioning, or clipped content.
- The product must support localization, dynamic content, or browser zoom.
- A team needs a QA checklist before shipping a responsive interface.

## Inputs Required

- Target pages, components, or flows.
- Supported viewport range, browser matrix, and zoom expectations.
- Known content edge cases such as long names, empty states, tables, or dense controls.
- Screenshots, design references, or bug reports when available.

## Step-by-Step Workflow

1. Identify the layout model, critical breakpoints, container constraints, and fixed-format UI elements.
2. Check navigation, forms, tables, media, dialogs, and repeated cards at mobile, tablet, desktop, and zoomed states.
3. Test long content, empty content, reduced width, orientation changes, and touch targets.
4. Recommend CSS changes that use fluid constraints, container queries, responsive grids, and stable dimensions where appropriate.
5. Summarize failures with reproduction steps and priority based on user impact.

## Output Format

- Responsive audit report with viewport-specific findings.
- Prioritized fix list with CSS or component-level guidance.
- QA matrix for regression checks across breakpoints and content states.

## Success Criteria

- No critical workflow is blocked at supported viewport sizes.
- Text remains readable and contained without overlap or clipping.
- Interactive targets are reachable by touch, pointer, and keyboard.
- Layout changes are stable and consistent with the existing design system.

## Common Mistakes

- Only checking one narrow mobile width.
- Hiding important functionality on small screens without an alternative.
- Fixing overflow with arbitrary font scaling.
- Ignoring browser zoom and dynamic content.

## Example Usage

Use this skill on an analytics table and filter sidebar to produce mobile, tablet, and desktop fixes that keep controls usable.
