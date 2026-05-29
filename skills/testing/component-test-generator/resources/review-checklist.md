# Component Test Generator Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm component source, existing tests, stories, and public API.
- [ ] Confirm testing framework such as Vitest, Jest, React Testing Library, Cypress, or Playwright component tests.
- [ ] Confirm critical states, interactions, and accessibility expectations.
- [ ] Confirm mocking, providers, and fixture conventions.

## Execution

- [ ] Inspect existing test style, helpers, providers, and query conventions.
- [ ] Identify behavior worth testing from the public API and user perspective.
- [ ] Write tests for default rendering, key variants, interactions, disabled/error/loading states, and accessible names as relevant.
- [ ] Mock only external boundaries and avoid asserting private implementation details.
- [ ] Run focused tests or document the command and any missing setup.

## Completion

- [ ] Tests describe behavior consumers rely on.
- [ ] Queries reflect how users and assistive technology find elements.
- [ ] Tests are deterministic and easy to debug.
- [ ] Coverage supports refactoring without locking in internal structure.
