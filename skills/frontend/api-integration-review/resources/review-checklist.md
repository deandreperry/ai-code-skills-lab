# API Integration Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm frontend code paths, API contracts, schemas, mocks, or network examples.
- [ ] Confirm data fetching library, state management approach, and runtime framework.
- [ ] Confirm loading, error, empty, permissions, and retry requirements.
- [ ] Confirm security, privacy, analytics, and observability constraints.

## Execution

- [ ] Trace the integration from request trigger to response handling, UI rendering, mutation, and invalidation.
- [ ] Review data contracts, type safety, transformation boundaries, error mapping, and loading behavior.
- [ ] Check caching, retries, cancellation, race conditions, stale data, and optimistic updates.
- [ ] Validate that UI states and accessibility feedback match API outcomes.
- [ ] Recommend focused changes, tests, and documentation for durable integration behavior.

## Completion

- [ ] The UI handles API success and failure paths predictably.
- [ ] Data transformations are typed, explicit, and testable.
- [ ] Caching and invalidation behavior is understandable.
- [ ] Users receive useful feedback for loading, errors, and recovery.
