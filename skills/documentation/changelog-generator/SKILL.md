# Changelog Generator

## Skill Name

Changelog Generator

## Description

Generate accurate changelog entries from commits, pull requests, diffs, or release notes with clear categories and user impact.

## When To Use

- A release needs a polished changelog before publication.
- A project has commits but no readable summary of changes.
- Stakeholders need impact-oriented release notes.
- A team wants consistent changelog categories and style.

## Inputs Required

- Commit range, PR list, issue list, diff summary, or existing release notes.
- Version number, release date, and audience.
- Changelog format such as Keep a Changelog, GitHub Releases, or internal notes.
- Breaking changes, migrations, and known issues.

## Step-by-Step Workflow

1. Collect source changes and group them by user-facing impact, developer impact, fixes, documentation, maintenance, and breaking changes.
2. Verify ambiguous commits against diffs or PR descriptions instead of guessing.
3. Rewrite technical details into concise release language while preserving important migration notes.
4. Call out breaking changes, deprecations, security fixes, and upgrade steps prominently.
5. Keep internal-only noise out of public changelog entries unless it matters to consumers.

## Output Format

- Changelog entry for the target version or date range.
- Breaking change and migration notes when applicable.
- Unverified items or questions that require maintainer confirmation.

## Success Criteria

- The changelog is accurate, scannable, and audience-appropriate.
- User-facing changes are separated from internal maintenance.
- Breaking changes and upgrade actions are hard to miss.
- The entry can be pasted into the project changelog with minimal editing.

## Common Mistakes

- Summarizing commit messages without checking meaning.
- Hiding breaking changes under generic improvements.
- Including every chore commit in public notes.
- Using inconsistent categories across releases.

## Example Usage

Use this skill to generate a `CHANGELOG.md` section from the last 20 PRs before publishing version 1.4.0.
