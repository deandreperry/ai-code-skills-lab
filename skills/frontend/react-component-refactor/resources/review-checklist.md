# React Component Refactor Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm path to the component and any colocated tests, stories, styles, and hooks.
- [ ] Confirm framework context such as React version, routing, state management, and styling approach.
- [ ] Confirm known constraints, public APIs, and behavior that must not change.
- [ ] Confirm preferred testing command or acceptance workflow.

## Execution

- [ ] Map the component responsibilities, external contracts, state boundaries, effects, and rendering branches.
- [ ] Identify the smallest safe refactor units, then separate pure rendering, data derivation, event handlers, and side effects.
- [ ] Preserve public props and user-visible behavior unless an intentional API change is requested.
- [ ] Improve TypeScript types, naming, accessibility attributes, and test seams as part of the refactor.
- [ ] Run or recommend focused tests, explain residual risk, and document follow-up opportunities separately from the completed change.

## Completion

- [ ] The component is easier to scan and reason about without broad rewrites.
- [ ] Existing consumers continue to work without accidental prop or DOM changes.
- [ ] Critical user flows and accessibility semantics are preserved or improved.
- [ ] Tests, stories, or manual checks cover the changed behavior.
