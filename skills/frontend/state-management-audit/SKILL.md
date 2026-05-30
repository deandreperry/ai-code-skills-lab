# State Management Audit

## Skill Name

State Management Audit

## Description

Audit frontend state ownership, server/client boundaries, caching, derived data, persistence, synchronization, and update complexity.

## When To Use

- A frontend app has duplicated, stale, or hard-to-debug state.
- Components pass state through too many layers or rely on global stores unnecessarily.
- Server state, form state, URL state, and UI state are mixed together.
- A team is considering a state management migration or simplification.

## Inputs Required

- Relevant components, stores, hooks, routes, and data fetching code.
- Framework, server state library, form library, and routing model.
- Known bugs involving stale data, race conditions, persistence, or synchronization.
- Performance, testing, and migration constraints.

## Step-by-Step Workflow

1. Inventory state sources and classify them as server, URL, form, local UI, global UI, persisted, or derived state.
2. Trace representative flows where state is created, updated, synchronized, and cleared.
3. Identify duplication, invalidation gaps, unnecessary global state, and fragile derived data.
4. Evaluate type safety, testability, performance, and developer ergonomics.
5. Recommend incremental simplifications and migration steps with clear ownership boundaries.

## Output Format

- State management audit with state inventory and ownership map.
- Findings for duplication, stale state, synchronization, and complexity risks.
- Prioritized refactor plan with verification guidance.

## Success Criteria

- State ownership is clear and aligned with user behavior.
- Server, URL, form, and UI state have appropriate boundaries.
- Recommendations reduce bugs without forcing a broad rewrite.
- The team can test and reason about important state transitions.

## Common Mistakes

- Moving everything into a global store for convenience.
- Duplicating server data in local state without invalidation rules.
- Ignoring URL state for shareable filters and navigation.
- Combining form drafts with persisted domain data too early.

## Example Usage

Use this skill to audit a dashboard where filters, selected rows, server data, modals, and form drafts interact unpredictably.
