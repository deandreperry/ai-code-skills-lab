# React Component Refactor

## Skill Name

React Component Refactor

## Description

Refactor React components into maintainable, typed, accessible units while preserving behavior and the surrounding product experience.

## When To Use

- A component has grown difficult to understand, test, or extend.
- Props, state, effects, and rendering concerns are tangled together.
- A design system migration requires component cleanup without product regressions.
- A team needs a safe refactor plan before changing a high-traffic interface.

## Inputs Required

- Path to the component and any colocated tests, stories, styles, and hooks.
- Framework context such as React version, routing, state management, and styling approach.
- Known constraints, public APIs, and behavior that must not change.
- Preferred testing command or acceptance workflow.

## Step-by-Step Workflow

1. Map the component responsibilities, external contracts, state boundaries, effects, and rendering branches.
2. Identify the smallest safe refactor units, then separate pure rendering, data derivation, event handlers, and side effects.
3. Preserve public props and user-visible behavior unless an intentional API change is requested.
4. Improve TypeScript types, naming, accessibility attributes, and test seams as part of the refactor.
5. Run or recommend focused tests, explain residual risk, and document follow-up opportunities separately from the completed change.

## Output Format

- Refactored component code or a patch plan when edits are not requested.
- A short summary of behavior preserved, API changes, and testing performed.
- A list of follow-up refactors that were intentionally deferred.

## Success Criteria

- The component is easier to scan and reason about without broad rewrites.
- Existing consumers continue to work without accidental prop or DOM changes.
- Critical user flows and accessibility semantics are preserved or improved.
- Tests, stories, or manual checks cover the changed behavior.

## Common Mistakes

- Renaming public props without updating every consumer.
- Moving side effects in a way that changes timing or dependency behavior.
- Extracting too many tiny components before the main responsibility split is clear.
- Treating visual cleanup as a substitute for behavior verification.

## Example Usage

Use this skill on `src/features/billing/PlanPicker.tsx` to split pricing logic from rendering, tighten prop types, and keep the checkout flow behavior unchanged.
