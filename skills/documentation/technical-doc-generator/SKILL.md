# Technical Doc Generator

## Skill Name

Technical Doc Generator

## Description

Generate technical documentation for features, systems, APIs, components, workflows, or internal tooling from real code and product context.

## When To Use

- A feature or system exists but lacks useful documentation.
- A team needs implementation notes before handing off maintenance.
- An API, workflow, or integration requires contributor-facing guidance.
- Docs should be created from the current codebase rather than from memory.

## Inputs Required

- Code paths, feature description, diagrams, API contracts, and related tickets.
- Target audience and expected depth.
- Existing documentation style and location.
- Known caveats, operational steps, and verification commands.

## Step-by-Step Workflow

1. Inspect the relevant code, tests, configuration, and existing docs before drafting.
2. Define the audience, document purpose, and scope boundaries.
3. Explain concepts, architecture, data flow, usage, configuration, testing, and troubleshooting as appropriate.
4. Use examples and command snippets that match the repository.
5. Call out limitations, ownership, and update triggers so the doc stays useful.

## Output Format

- Technical documentation page or structured draft.
- Optional diagrams, examples, and command reference.
- Documentation gaps or source questions that need confirmation.

## Success Criteria

- The document helps the target audience complete real tasks.
- Examples are accurate and grounded in current code.
- The level of detail matches the audience.
- The doc has a clear owner, location, and maintenance signal.

## Common Mistakes

- Writing generic explanations without reading the code.
- Mixing user docs, implementation notes, and runbooks without structure.
- Including commands that have not been verified or inferred from the repo.
- Ignoring failure modes and troubleshooting.

## Example Usage

Use this skill to document a payment integration, including data flow, environment variables, webhook handling, tests, and operational checks.
