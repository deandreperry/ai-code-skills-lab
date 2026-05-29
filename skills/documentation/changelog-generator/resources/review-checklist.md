# Changelog Generator Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm commit range, PR list, issue list, diff summary, or existing release notes.
- [ ] Confirm version number, release date, and audience.
- [ ] Confirm changelog format such as Keep a Changelog, GitHub Releases, or internal notes.
- [ ] Confirm breaking changes, migrations, and known issues.

## Execution

- [ ] Collect source changes and group them by user-facing impact, developer impact, fixes, documentation, maintenance, and breaking changes.
- [ ] Verify ambiguous commits against diffs or PR descriptions instead of guessing.
- [ ] Rewrite technical details into concise release language while preserving important migration notes.
- [ ] Call out breaking changes, deprecations, security fixes, and upgrade steps prominently.
- [ ] Keep internal-only noise out of public changelog entries unless it matters to consumers.

## Completion

- [ ] The changelog is accurate, scannable, and audience-appropriate.
- [ ] User-facing changes are separated from internal maintenance.
- [ ] Breaking changes and upgrade actions are hard to miss.
- [ ] The entry can be pasted into the project changelog with minimal editing.
