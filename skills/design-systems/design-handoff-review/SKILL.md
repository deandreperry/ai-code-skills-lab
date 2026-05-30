# Design Handoff Review

## Skill Name

Design Handoff Review

## Description

Review design handoff materials for implementation readiness, including states, tokens, layout rules, accessibility notes, assets, and interaction details.

## When To Use

- Designs are ready for engineering review before implementation starts.
- A handoff lacks responsive specs, states, tokens, assets, or accessibility requirements.
- Engineers need to estimate or implement a design with fewer assumptions.
- Designers want feedback on what is missing from a production-ready spec.

## Inputs Required

- Figma frames, screenshots, specs, prototype links, or design export notes.
- Target platform, component library, and design system constraints.
- User flows, acceptance criteria, and supported breakpoints.
- Known engineering constraints, data dependencies, and edge cases.

## Step-by-Step Workflow

1. Map the intended user flow and implementation surface from the design materials.
2. Check states, variants, responsive rules, content behavior, tokens, assets, and interaction details.
3. Review accessibility requirements including semantics, focus, contrast, labels, keyboard, and motion.
4. Identify ambiguity that could cause inconsistent implementation or rework.
5. Return a handoff readiness assessment with questions and required additions.

## Output Format

- Design handoff review with ready, missing, and ambiguous items.
- Implementation questions grouped by design, product, and engineering owner.
- Checklist for states, tokens, responsive behavior, accessibility, assets, and QA.

## Success Criteria

- Engineers can implement without inventing important product or design behavior.
- Designers receive specific, actionable gaps to resolve.
- Accessibility and responsive requirements are visible before coding.
- Handoff questions are prioritized by implementation risk.

## Common Mistakes

- Assuming static desktop frames are enough for implementation.
- Ignoring empty, error, loading, permission, and long-content states.
- Letting engineers infer tokens and spacing from pixels alone.
- Treating accessibility as a post-implementation QA task.

## Example Usage

Use this skill to review Figma handoff for a new billing dashboard before frontend implementation begins.
