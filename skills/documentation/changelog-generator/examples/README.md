# Changelog Generator Examples

## Sample Prompt

```text
Use the Changelog Generator skill.
Inputs:
- Commit range, PR list, issue list, diff summary, or existing release notes.
- Version number, release date, and audience.
- Changelog format such as Keep a Changelog, GitHub Releases, or internal notes.
```

## Example Scenario

Use this skill to generate a `CHANGELOG.md` section from the last 20 PRs before publishing version 1.4.0.

## Expected Output

- Changelog entry for the target version or date range.
- Breaking change and migration notes when applicable.
- Unverified items or questions that require maintainer confirmation.
