# React Component Refactor Examples

## Sample Prompt

```text
Use the React Component Refactor skill.
Inputs:
- Path to the component and any colocated tests, stories, styles, and hooks.
- Framework context such as React version, routing, state management, and styling approach.
- Known constraints, public APIs, and behavior that must not change.
```

## Example Scenario

Use this skill on `src/features/billing/PlanPicker.tsx` to split pricing logic from rendering, tighten prop types, and keep the checkout flow behavior unchanged.

## Expected Output

- Refactored component code or a patch plan when edits are not requested.
- A short summary of behavior preserved, API changes, and testing performed.
- A list of follow-up refactors that were intentionally deferred.
