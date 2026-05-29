# Frontend Architecture Review

## Skill Name

Frontend Architecture Review

## Description

Review a frontend codebase for architectural clarity, module boundaries, data flow, state management, routing, and long-term maintainability.

## When To Use

- A team inherited a frontend app and needs a senior-level technical assessment.
- A feature area is slowing down delivery because patterns are inconsistent.
- The app is preparing for scale, migration, or a major product expansion.
- Engineering leadership needs prioritized risks instead of a generic code review.

## Inputs Required

- Repository structure, package manager, framework, and build tooling.
- Key routes, domains, feature areas, and ownership boundaries.
- Known pain points such as slow builds, duplicated state, brittle tests, or unclear dependencies.
- Constraints around timelines, staffing, and migration appetite.

## Step-by-Step Workflow

1. Inspect the folder structure, dependency graph, routing model, state ownership, and shared utility patterns.
2. Trace two or three representative user flows from entry point to data fetching, rendering, mutation, and error handling.
3. Identify architectural strengths before listing risks so recommendations are grounded and fair.
4. Group findings by impact, effort, and blast radius, then distinguish tactical fixes from strategic changes.
5. Produce an incremental roadmap that reduces risk while respecting existing product delivery.

## Output Format

- Architecture review report with findings ordered by severity and business impact.
- Annotated recommendations for module boundaries, state, routing, testing, and build health.
- A phased improvement plan with low-risk starting points.

## Success Criteria

- Recommendations are specific to the repository rather than generic framework advice.
- The report separates defects, risks, tradeoffs, and preferences.
- The team can act on the first phase without pausing product work.
- No recommendation requires a rewrite unless the evidence clearly supports it.

## Common Mistakes

- Judging architecture by folder names alone.
- Suggesting a new framework before understanding current constraints.
- Mixing stylistic preferences with high-severity risks.
- Ignoring the cost of migration and team familiarity.

## Example Usage

Use this skill before a dashboard rebuild to evaluate routing, server state, component boundaries, and design system adoption across the existing app.
