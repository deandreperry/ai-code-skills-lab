# Skill Format

Every skill in AI Code Skills Lab follows the same contract so agents can consume skills consistently.

## Required Structure

```text
skills/<category>/<skill-slug>/
|-- SKILL.md
|-- examples/
|-- resources/
`-- scripts/
```

The `scripts/` directory may contain automation, but it should still exist with a README when no automation is needed yet.

## Required SKILL.md Sections

Each `SKILL.md` must include these sections:

1. Skill Name
2. Description
3. When To Use
4. Inputs Required
5. Step-by-Step Workflow
6. Output Format
7. Success Criteria
8. Common Mistakes
9. Example Usage

## Writing Effective Skills

A strong skill is operational. It should tell an agent exactly how to approach the task, what evidence to gather, how to prioritize decisions, and how to present the result.

Use concrete language:

- Prefer "inspect existing Playwright fixtures before writing tests" over "write good tests".
- Prefer "assign severity based on task impact and workaround availability" over "prioritize issues".
- Prefer "use accessible role and label locators" over "use stable selectors".

## Examples Directory

The `examples/` directory should include sample prompts, scenarios, or expected output shapes. Examples help users invoke a skill correctly and help maintainers understand the intended execution level.

## Resources Directory

The `resources/` directory should include checklists, rubrics, reference notes, or templates that support consistent execution.

## Scripts Directory

Add scripts when automation materially improves quality. Examples include extracting token inventories, generating checklist scaffolds, or validating documentation shape. Keep scripts small, documented, and easy to run.
