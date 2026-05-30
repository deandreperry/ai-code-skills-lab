# Design System Release Notes

## Skill Name

Design System Release Notes

## Description

Generate clear release notes for design system component, token, documentation, accessibility, and breaking changes.

## When To Use

- A design system release needs notes for product teams and consumers.
- Token or component changes require migration guidance.
- Consumers need to understand visual, API, accessibility, and behavior impact.
- A team wants consistent release communication across design and engineering.

## Inputs Required

- Commit range, PR list, changelog draft, package version, or diff summary.
- Audience such as designers, frontend engineers, QA, or product teams.
- Component, token, theme, documentation, and migration changes.
- Breaking changes, deprecations, known issues, and upgrade steps.

## Step-by-Step Workflow

1. Group changes by components, tokens, themes, docs, accessibility, fixes, and breaking changes.
2. Translate implementation details into consumer impact and migration actions.
3. Call out visual changes, API changes, token renames, and required code updates.
4. Include examples or before/after notes when they reduce ambiguity.
5. Flag unclear changes that need maintainer confirmation.

## Output Format

- Design system release notes with sections for highlights, changes, fixes, breaking changes, and migration.
- Consumer impact summary for designers and developers.
- Known issues and follow-up actions.

## Success Criteria

- Consumers understand what changed and whether they need to act.
- Breaking changes and migration steps are explicit.
- Design and engineering impacts are both represented.
- Release notes are accurate and not overloaded with internal noise.

## Common Mistakes

- Publishing generic changelogs that omit consumer impact.
- Hiding token renames or visual changes under maintenance.
- Writing only for engineers when designers also consume the system.
- Skipping known issues and upgrade caveats.

## Example Usage

Use this skill to write release notes for a design system update that changes color tokens, button APIs, Storybook docs, and accessibility fixes.
