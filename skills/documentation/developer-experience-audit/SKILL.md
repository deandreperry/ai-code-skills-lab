# Developer Experience Audit

## Skill Name

Developer Experience Audit

## Description

Audit repository developer experience including setup, scripts, docs, error messages, local workflows, tests, examples, and contribution paths.

## When To Use

- New contributors struggle to install, run, test, or understand a project.
- A repo needs a senior-level DX review before sharing with teams or candidates.
- Scripts, docs, examples, and errors are inconsistent or outdated.
- Engineering managers want to reduce onboarding and contribution friction.

## Inputs Required

- Repository structure, README, docs, package scripts, setup files, and CI workflow.
- Target contributor profile and expected first tasks.
- Known setup failures, support questions, or onboarding feedback.
- Required local tools, secrets, fixtures, and verification commands.

## Step-by-Step Workflow

1. Walk the repository as a new contributor from clone to first verified change.
2. Review setup, scripts, environment variables, docs, examples, tests, linting, and CI alignment.
3. Identify confusing commands, missing prerequisites, slow feedback loops, and unclear errors.
4. Evaluate whether docs explain contribution paths and architectural conventions.
5. Recommend quick wins and structural DX improvements with priority and effort.

## Output Format

- Developer experience audit with findings and severity.
- Improvement plan for setup, scripts, docs, errors, examples, and CI.
- Suggested first-contribution workflow and verification checklist.

## Success Criteria

- A contributor can understand and verify the project with minimal outside help.
- Commands and docs match the actual repository behavior.
- Pain points are prioritized by onboarding and maintenance impact.
- Recommendations improve speed and confidence without unnecessary tooling.

## Common Mistakes

- Auditing docs without running or inspecting commands.
- Suggesting new tooling before fixing unclear existing workflows.
- Ignoring error messages and failure recovery.
- Optimizing for maintainers while forgetting first-time contributors.

## Example Usage

Use this skill to audit an open-source frontend repo before sharing it with design system contributors and technical recruiters.
