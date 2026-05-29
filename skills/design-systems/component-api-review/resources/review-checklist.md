# Component API Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm component source, prop types, stories, docs, and usage examples.
- [ ] Confirm known consumer pain points, design variants, and accessibility requirements.
- [ ] Confirm compatibility constraints and release process.
- [ ] Confirm framework and styling conventions.

## Execution

- [ ] Inspect the component contract, variants, controlled/uncontrolled behavior, slots, composition model, and escape hatches.
- [ ] Review accessibility defaults, semantic output, keyboard behavior, and labeling requirements.
- [ ] Compare API shape with existing design system conventions and consumer usage patterns.
- [ ] Recommend simplification, stronger types, deprecations, and migration helpers.
- [ ] Define test and documentation updates needed to make the API trustworthy.

## Completion

- [ ] The API is intuitive for common cases and flexible for legitimate edge cases.
- [ ] Accessibility is built into the default usage path.
- [ ] Type definitions prevent invalid combinations where practical.
- [ ] Breaking changes are avoided or clearly planned.
