# Codebase Onboarding Guide

## Skill Name

Codebase Onboarding Guide

## Description

Generate a practical onboarding guide that helps engineers understand a frontend codebase, run it locally, and make their first safe change.

## When To Use

- A new engineer or AI agent needs to contribute to an unfamiliar repo.
- Existing setup notes are outdated, scattered, or incomplete.
- A team wants a repeatable handoff guide for contractors or new hires.
- A codebase has hidden conventions that are not obvious from the README.

## Inputs Required

- Repository tree, package scripts, environment variables, and setup requirements.
- Framework, deployment target, testing stack, and major dependencies.
- Domain overview and key user journeys when available.
- Team conventions for branches, commits, reviews, and releases.

## Step-by-Step Workflow

1. Inspect package metadata, docs, app entry points, routing, feature folders, and test setup.
2. Identify the fastest path to install, run, test, lint, and build the project.
3. Explain the architecture in terms of practical contribution paths rather than abstract theory.
4. Document common tasks such as adding a route, component, test, API call, or design token.
5. Call out risks, missing documentation, and the best first issues for a new contributor.

## Output Format

- Onboarding guide with setup, architecture overview, workflows, conventions, and troubleshooting.
- Command reference for local development and verification.
- Suggested first contribution path with files to inspect.

## Success Criteria

- A new contributor can get the app running without tribal knowledge.
- The guide reflects the actual repository rather than idealized conventions.
- Risky areas and ownership boundaries are visible.
- The document is concise enough to be maintained.

## Common Mistakes

- Copying package scripts without explaining when to use them.
- Documenting every file instead of the contribution path.
- Inventing conventions that the repo does not follow.
- Ignoring environment setup and common failure modes.

## Example Usage

Use this skill after cloning a frontend monorepo to create a `docs/onboarding.md` that explains setup, structure, and first-change workflow.
