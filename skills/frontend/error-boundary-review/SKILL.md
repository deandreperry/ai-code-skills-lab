# Error Boundary Review

## Skill Name

Error Boundary Review

## Description

Review frontend error boundaries, fallback UI, recovery paths, logging, and user-facing failure handling for resilient product experiences.

## When To Use

- A React app or route needs graceful handling for render and async failures.
- Users encounter blank screens or confusing crash states.
- A team is adding route-level, feature-level, or component-level error boundaries.
- Observability and user recovery need to improve after frontend failures.

## Inputs Required

- App routes, error boundary components, logging setup, and data fetching patterns.
- Known production errors, support reports, or monitoring dashboards.
- User flows that must recover safely from failure.
- Framework conventions such as React, Next.js, Remix, or router-level error APIs.

## Step-by-Step Workflow

1. Map where failures can occur: render, data loading, mutations, lazy imports, permissions, and third-party widgets.
2. Review boundary placement, fallback content, retry behavior, navigation recovery, and reset conditions.
3. Check logging, error metadata, privacy handling, and observability integration.
4. Evaluate accessibility and UX of error states, including focus and actionable copy.
5. Recommend boundary structure, tests, and monitoring improvements.

## Output Format

- Error boundary review with coverage map and gaps.
- Recommended fallback UI, recovery behavior, and logging changes.
- Test plan for render errors, async failures, retry, reset, and navigation.

## Success Criteria

- Critical failures show useful fallback UI instead of blank screens.
- Users have a clear recovery path when possible.
- Errors are logged with enough context and without sensitive data.
- Boundary placement limits blast radius without hiding systemic failures.

## Common Mistakes

- Catching errors so broadly that debugging becomes harder.
- Showing generic fallback copy with no recovery action.
- Logging sensitive user or request data.
- Forgetting to reset boundaries after navigation or retry.

## Example Usage

Use this skill to review route-level error handling for a Next.js account settings area with async data and third-party integrations.
