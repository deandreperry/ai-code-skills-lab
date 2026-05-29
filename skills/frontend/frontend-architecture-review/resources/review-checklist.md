# Frontend Architecture Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm repository structure, package manager, framework, and build tooling.
- [ ] Confirm key routes, domains, feature areas, and ownership boundaries.
- [ ] Confirm known pain points such as slow builds, duplicated state, brittle tests, or unclear dependencies.
- [ ] Confirm constraints around timelines, staffing, and migration appetite.

## Execution

- [ ] Inspect the folder structure, dependency graph, routing model, state ownership, and shared utility patterns.
- [ ] Trace two or three representative user flows from entry point to data fetching, rendering, mutation, and error handling.
- [ ] Identify architectural strengths before listing risks so recommendations are grounded and fair.
- [ ] Group findings by impact, effort, and blast radius, then distinguish tactical fixes from strategic changes.
- [ ] Produce an incremental roadmap that reduces risk while respecting existing product delivery.

## Completion

- [ ] Recommendations are specific to the repository rather than generic framework advice.
- [ ] The report separates defects, risks, tradeoffs, and preferences.
- [ ] The team can act on the first phase without pausing product work.
- [ ] No recommendation requires a rewrite unless the evidence clearly supports it.
