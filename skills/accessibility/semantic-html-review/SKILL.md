# Semantic HTML Review

## Skill Name

Semantic HTML Review

## Description

Review markup for correct native semantics, heading structure, landmarks, interactive elements, lists, tables, and meaningful document structure.

## When To Use

- A page uses generic divs and spans for meaningful controls or structure.
- A custom component needs semantic review before becoming a design system primitive.
- Screen reader output is confusing despite visual design looking correct.
- A team wants to reduce ARIA complexity by using better HTML.

## Inputs Required

- Rendered markup, component source, or target URL.
- Expected content hierarchy, user tasks, and interaction model.
- Design constraints and existing component primitives.
- Accessibility bugs or screen reader observations when available.

## Step-by-Step Workflow

1. Inspect headings, landmarks, sections, lists, tables, forms, buttons, links, and media alternatives.
2. Compare visual purpose to native semantic purpose and identify mismatches.
3. Replace unnecessary ARIA with native elements where possible.
4. Check that interactive elements have correct roles, names, states, and keyboard behavior.
5. Document changes with user impact and regression checks.

## Output Format

- Semantic HTML findings with code-level recommendations.
- Before and after examples for important markup changes.
- Checklist for headings, landmarks, controls, forms, tables, and media.

## Success Criteria

- The DOM communicates page structure and interaction purpose without relying on visual layout.
- Native elements are used wherever they match the intended behavior.
- ARIA is minimal, correct, and supported by the component behavior.
- Screen reader and keyboard users receive a coherent experience.

## Common Mistakes

- Using `div` with click handlers instead of buttons or links.
- Skipping heading levels for visual size reasons.
- Adding roles that conflict with native element semantics.
- Treating icons as labels without accessible text.

## Example Usage

Use this skill on a marketing/pricing page to review headings, cards, call-to-action links, comparison tables, and FAQ disclosure controls.
