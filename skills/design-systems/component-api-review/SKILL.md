# Component API Review

## Skill Name

Component API Review

## Description

Review design system component APIs for usability, composability, accessibility, type safety, and long-term compatibility.

## When To Use

- A shared component is difficult to use or has too many props.
- A team is preparing a component for design system publication.
- API changes are needed but backwards compatibility matters.
- Consumers are building inconsistent workarounds around a component.

## Inputs Required

- Component source, prop types, stories, docs, and usage examples.
- Known consumer pain points, design variants, and accessibility requirements.
- Compatibility constraints and release process.
- Framework and styling conventions.

## Step-by-Step Workflow

1. Inspect the component contract, variants, controlled/uncontrolled behavior, slots, composition model, and escape hatches.
2. Review accessibility defaults, semantic output, keyboard behavior, and labeling requirements.
3. Compare API shape with existing design system conventions and consumer usage patterns.
4. Recommend simplification, stronger types, deprecations, and migration helpers.
5. Define test and documentation updates needed to make the API trustworthy.

## Output Format

- Component API review with strengths, risks, and recommended changes.
- Proposed prop or composition model with migration notes.
- Documentation and test checklist for publishing.

## Success Criteria

- The API is intuitive for common cases and flexible for legitimate edge cases.
- Accessibility is built into the default usage path.
- Type definitions prevent invalid combinations where practical.
- Breaking changes are avoided or clearly planned.

## Common Mistakes

- Adding props for every visual edge case.
- Making accessible usage optional or undocumented.
- Breaking existing consumers for a cleaner theoretical API.
- Hiding complexity in untyped escape hatches.

## Example Usage

Use this skill to evaluate a `Modal` component API before publishing it as a design system primitive.
