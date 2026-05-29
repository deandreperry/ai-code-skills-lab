# AGENTS.md

Repository-wide instructions for AI coding agents working in AI Code Skills Lab.

## Core Principles

- Prefer TypeScript when code examples or automation scripts can reasonably use it, unless the surrounding project uses JavaScript.
- Follow accessibility best practices in every frontend, UX, testing, and documentation change.
- Use semantic HTML and native browser behavior before adding custom ARIA patterns.
- Preserve existing code style, file organization, naming conventions, and documentation tone.
- Avoid unnecessary dependencies. Use the standard library and existing tooling unless a dependency clearly reduces maintenance risk.
- Write maintainable code with small functions, explicit names, and clear boundaries.
- Generate or update documentation when creating new features, scripts, templates, or skill conventions.
- Prefer incremental changes over large rewrites. Keep diffs focused and easy to review.

## Working With Skills

- Treat each `SKILL.md` as an executable workflow, not a blog post.
- Keep the required sections intact: Skill Name, Description, When To Use, Inputs Required, Step-by-Step Workflow, Output Format, Success Criteria, Common Mistakes, and Example Usage.
- Make instructions concrete enough for Codex or Claude Code to follow without extra interpretation.
- Include examples and resources for every skill so users can understand expected usage quickly.
- Use optional scripts only when automation improves consistency or validation.

## Frontend And UX Standards

- Design for keyboard, screen reader, touch, pointer, and browser zoom users.
- Prefer accessible names, roles, states, landmarks, headings, and form relationships that come from correct HTML.
- Verify responsive behavior across narrow, medium, wide, and zoomed layouts when a change affects UI.
- Avoid UI advice that is purely aesthetic unless it improves usability, accessibility, consistency, or business outcomes.

## Code Quality Standards

- Keep validation scripts dependency-free unless the repository adopts a package policy for tooling.
- Favor deterministic output from generation scripts so reviews stay clean.
- Validate skill changes with `npm run validate` before considering work complete.
- Regenerate the skills index with `npm run index` after adding, renaming, or removing skills.

## Documentation Standards

- Write concise, professional documentation for senior engineering audiences.
- Link to local docs instead of duplicating long explanations.
- Keep examples realistic and implementation-oriented.
- Document assumptions, inputs, and verification steps when providing guidance.

## Pull Request Readiness

Before finishing a change, confirm:

- Required files and sections are present.
- Generated indexes are up to date.
- Documentation reflects the current repository shape.
- New examples are realistic and executable by an AI coding agent.
- No unrelated formatting churn or broad rewrites were introduced.
