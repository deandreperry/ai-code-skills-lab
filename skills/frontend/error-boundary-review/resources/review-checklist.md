# Error Boundary Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm app routes, error boundary components, logging setup, and data fetching patterns.
- [ ] Confirm known production errors, support reports, or monitoring dashboards.
- [ ] Confirm user flows that must recover safely from failure.
- [ ] Confirm framework conventions such as React, Next.js, Remix, or router-level error APIs.

## Execution

- [ ] Map where failures can occur: render, data loading, mutations, lazy imports, permissions, and third-party widgets.
- [ ] Review boundary placement, fallback content, retry behavior, navigation recovery, and reset conditions.
- [ ] Check logging, error metadata, privacy handling, and observability integration.
- [ ] Evaluate accessibility and UX of error states, including focus and actionable copy.
- [ ] Recommend boundary structure, tests, and monitoring improvements.

## Completion

- [ ] Critical failures show useful fallback UI instead of blank screens.
- [ ] Users have a clear recovery path when possible.
- [ ] Errors are logged with enough context and without sensitive data.
- [ ] Boundary placement limits blast radius without hiding systemic failures.
