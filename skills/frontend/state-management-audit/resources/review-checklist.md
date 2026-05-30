# State Management Audit Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm relevant components, stores, hooks, routes, and data fetching code.
- [ ] Confirm framework, server state library, form library, and routing model.
- [ ] Confirm known bugs involving stale data, race conditions, persistence, or synchronization.
- [ ] Confirm performance, testing, and migration constraints.

## Execution

- [ ] Inventory state sources and classify them as server, URL, form, local UI, global UI, persisted, or derived state.
- [ ] Trace representative flows where state is created, updated, synchronized, and cleared.
- [ ] Identify duplication, invalidation gaps, unnecessary global state, and fragile derived data.
- [ ] Evaluate type safety, testability, performance, and developer ergonomics.
- [ ] Recommend incremental simplifications and migration steps with clear ownership boundaries.

## Completion

- [ ] State ownership is clear and aligned with user behavior.
- [ ] Server, URL, form, and UI state have appropriate boundaries.
- [ ] Recommendations reduce bugs without forcing a broad rewrite.
- [ ] The team can test and reason about important state transitions.
