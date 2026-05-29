# Semantic HTML Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm rendered markup, component source, or target URL.
- [ ] Confirm expected content hierarchy, user tasks, and interaction model.
- [ ] Confirm design constraints and existing component primitives.
- [ ] Confirm accessibility bugs or screen reader observations when available.

## Execution

- [ ] Inspect headings, landmarks, sections, lists, tables, forms, buttons, links, and media alternatives.
- [ ] Compare visual purpose to native semantic purpose and identify mismatches.
- [ ] Replace unnecessary ARIA with native elements where possible.
- [ ] Check that interactive elements have correct roles, names, states, and keyboard behavior.
- [ ] Document changes with user impact and regression checks.

## Completion

- [ ] The DOM communicates page structure and interaction purpose without relying on visual layout.
- [ ] Native elements are used wherever they match the intended behavior.
- [ ] ARIA is minimal, correct, and supported by the component behavior.
- [ ] Screen reader and keyboard users receive a coherent experience.
