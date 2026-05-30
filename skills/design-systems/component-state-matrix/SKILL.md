# Component State Matrix

## Skill Name

Component State Matrix

## Description

Generate a complete component state matrix covering variants, interaction states, async states, validation states, content lengths, and accessibility requirements.

## When To Use

- A component is being designed, implemented, documented, or prepared for release.
- Stories or specs miss hover, focus, disabled, loading, error, empty, or long-content states.
- Designers and developers need agreement on required component coverage.
- QA needs a state matrix for visual, interaction, or accessibility review.

## Inputs Required

- Component name, API, design specs, stories, and intended use cases.
- Variant list, size scale, themes, density modes, and responsive constraints.
- Interaction, validation, async, and permission states.
- Design system conventions and testing expectations.

## Step-by-Step Workflow

1. Identify component purpose, public API, variants, slots, and required user interactions.
2. List state dimensions such as default, hover, active, focus, disabled, loading, error, selected, empty, and long content.
3. Combine state dimensions carefully, avoiding impossible combinations and noting design decisions needed.
4. Add accessibility expectations for names, roles, states, focus, keyboard, contrast, and announcements.
5. Produce a matrix that can drive Figma variants, Storybook stories, tests, and QA checks.

## Output Format

- Component state matrix with required, optional, and invalid states.
- Coverage recommendations for design specs, stories, tests, and documentation.
- Open design or engineering questions for ambiguous states.

## Success Criteria

- The matrix covers real states consumers will encounter.
- Impossible or unsupported states are explicitly identified.
- Accessibility and responsive expectations are included.
- Design, engineering, and QA can use the same artifact.

## Common Mistakes

- Creating every theoretical combination without product relevance.
- Forgetting focus, disabled, loading, and error states.
- Treating content length and responsive behavior as separate from component states.
- Skipping invalid state combinations that types or docs should prevent.

## Example Usage

Use this skill to create a state matrix for a `Select` component with sizes, validation states, loading options, disabled behavior, and long labels.
