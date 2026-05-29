# Component Test Generator

## Skill Name

Component Test Generator

## Description

Generate focused component tests that verify rendering, interactions, accessibility contracts, and edge states without overfitting implementation details.

## When To Use

- A component has important behavior but weak or missing tests.
- A refactor needs safety around props, state, and user interactions.
- A design system primitive requires published behavior guarantees.
- A bug can be reproduced at component level without full browser orchestration.

## Inputs Required

- Component source, existing tests, stories, and public API.
- Testing framework such as Vitest, Jest, React Testing Library, Cypress, or Playwright component tests.
- Critical states, interactions, and accessibility expectations.
- Mocking, providers, and fixture conventions.

## Step-by-Step Workflow

1. Inspect existing test style, helpers, providers, and query conventions.
2. Identify behavior worth testing from the public API and user perspective.
3. Write tests for default rendering, key variants, interactions, disabled/error/loading states, and accessible names as relevant.
4. Mock only external boundaries and avoid asserting private implementation details.
5. Run focused tests or document the command and any missing setup.

## Output Format

- Component tests aligned with repository conventions.
- Coverage notes explaining behavior and edge cases included.
- Follow-up recommendations for stories, docs, or E2E coverage when needed.

## Success Criteria

- Tests describe behavior consumers rely on.
- Queries reflect how users and assistive technology find elements.
- Tests are deterministic and easy to debug.
- Coverage supports refactoring without locking in internal structure.

## Common Mistakes

- Snapshotting large markup trees as the primary assertion.
- Testing internal state variables instead of visible outcomes.
- Mocking the component under test too heavily.
- Ignoring accessibility names and keyboard behavior.

## Example Usage

Use this skill to add tests for a `DateRangePicker` covering keyboard selection, validation messages, disabled dates, and formatted output.
