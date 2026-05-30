# API Integration Review

## Skill Name

API Integration Review

## Description

Review frontend API integration for data contracts, loading states, errors, caching, retries, security boundaries, and maintainability.

## When To Use

- A frontend feature consumes new or changing backend APIs.
- Users see stale, inconsistent, or poorly handled API states.
- A team needs to review error handling, retries, caching, or data transformations.
- An integration is difficult to test or reason about.

## Inputs Required

- Frontend code paths, API contracts, schemas, mocks, or network examples.
- Data fetching library, state management approach, and runtime framework.
- Loading, error, empty, permissions, and retry requirements.
- Security, privacy, analytics, and observability constraints.

## Step-by-Step Workflow

1. Trace the integration from request trigger to response handling, UI rendering, mutation, and invalidation.
2. Review data contracts, type safety, transformation boundaries, error mapping, and loading behavior.
3. Check caching, retries, cancellation, race conditions, stale data, and optimistic updates.
4. Validate that UI states and accessibility feedback match API outcomes.
5. Recommend focused changes, tests, and documentation for durable integration behavior.

## Output Format

- API integration review with findings and risk level.
- Recommendations for data contracts, state handling, errors, caching, and tests.
- Verification checklist for success, failure, empty, stale, and permission states.

## Success Criteria

- The UI handles API success and failure paths predictably.
- Data transformations are typed, explicit, and testable.
- Caching and invalidation behavior is understandable.
- Users receive useful feedback for loading, errors, and recovery.

## Common Mistakes

- Assuming the API always returns complete happy-path data.
- Mixing transport errors, validation errors, and business errors without mapping.
- Forgetting cancellation and race conditions in fast-changing views.
- Testing only mocked success responses.

## Example Usage

Use this skill to review a React dashboard that fetches analytics, updates filters, retries failed requests, and renders partial data.
