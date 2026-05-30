# State Management Audit Examples

## Sample Prompt

```text
Use the State Management Audit skill.
Inputs:
- Relevant components, stores, hooks, routes, and data fetching code.
- Framework, server state library, form library, and routing model.
- Known bugs involving stale data, race conditions, persistence, or synchronization.
```

## Example Scenario

Use this skill to audit a dashboard where filters, selected rows, server data, modals, and form drafts interact unpredictably.

## Expected Output

- State management audit with state inventory and ownership map.
- Findings for duplication, stale state, synchronization, and complexity risks.
- Prioritized refactor plan with verification guidance.
