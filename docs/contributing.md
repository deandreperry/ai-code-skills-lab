# Contributing

AI Code Skills Lab should feel trustworthy to senior frontend engineers, UX engineers, design system teams, engineering managers, and technical recruiters. Contributions are welcome when they improve execution quality, clarity, and maintainability.

## Contribution Principles

- Make skills practical enough for an AI coding agent to execute.
- Prefer specific workflows over broad advice.
- Include realistic inputs, outputs, success criteria, and common mistakes.
- Keep examples grounded in real engineering tasks.
- Preserve the professional tone of the catalog.

## Adding A Skill

1. Copy `templates/skill-template` into the appropriate category under `skills/`.
2. Rename the directory using kebab case.
3. Complete `SKILL.md` with all required sections.
4. Add at least one example in `examples/`.
5. Add at least one resource or checklist in `resources/`.
6. Add scripts only when automation improves execution quality.
7. Run `npm run validate` and `npm run index`.

## Review Criteria

A skill is ready when it answers these questions:

- What work does this skill help an agent perform?
- When should the agent use it?
- What inputs are required before the agent starts?
- What step-by-step workflow should the agent follow?
- What should the final output look like?
- How will the user know the work succeeded?
- What mistakes should the agent avoid?

## Documentation Standards

- Use direct, active language.
- Avoid hype, vague claims, and generic best-practice filler.
- Link to related docs instead of duplicating long explanations.
- Keep examples concise but realistic.

## Pull Request Checklist

Before opening a pull request:

```bash
npm run validate
npm run index
```

Confirm that the generated `docs/skills-index.md` is up to date and that no unrelated files were changed.
