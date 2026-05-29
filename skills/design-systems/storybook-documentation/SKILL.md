# Storybook Documentation

## Skill Name

Storybook Documentation

## Description

Create or improve Storybook stories and docs that communicate component behavior, variants, accessibility, and usage guidance.

## When To Use

- A component library has incomplete, outdated, or demo-only stories.
- Teams need reliable examples for variants, states, and composition.
- Design system docs should support engineering handoff and QA.
- A component requires accessibility, interaction, or visual regression coverage.

## Inputs Required

- Component source, existing stories, docs pages, design specs, and usage examples.
- Supported Storybook version and add-ons.
- Variant matrix, states, accessibility requirements, and known edge cases.
- Testing goals such as interaction tests or visual snapshots.

## Step-by-Step Workflow

1. Inventory the component API, variants, states, slots, and common usage patterns.
2. Create stories that demonstrate real product usage rather than decorative demos.
3. Add controls, docs, accessibility notes, interaction examples, and edge states.
4. Keep story names and organization consistent with the design system taxonomy.
5. Verify stories render, avoid brittle mocks, and support regression testing when possible.

## Output Format

- Storybook stories and documentation plan or implementation.
- Variant and state coverage matrix.
- Notes for accessibility checks, interaction tests, and visual review.

## Success Criteria

- Consumers can understand when and how to use the component.
- Stories cover default, variant, state, error, loading, disabled, and edge content cases as relevant.
- Accessibility expectations are visible and testable.
- Stories remain maintainable as the component evolves.

## Common Mistakes

- Writing stories that only mirror visual design screenshots.
- Leaving required providers or mocks hidden from consumers.
- Skipping failure, loading, empty, and long-content states.
- Using random data that makes visual regression unstable.

## Example Usage

Use this skill to add Storybook coverage for a `Combobox` component including keyboard behavior, async loading, errors, and long options.
