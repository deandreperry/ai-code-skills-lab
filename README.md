# AI Code Skills Lab

A curated collection of professional AI coding skills for Codex and Claude Code focused on frontend engineering, UX, accessibility, design systems, testing, documentation, and code quality.

AI Code Skills Lab is designed like an internal enablement product for serious engineering teams. Each skill gives an AI coding agent a repeatable workflow, clear inputs, expected outputs, success criteria, and common failure modes so the agent can perform useful work consistently instead of improvising from a vague prompt.

## Why Agent Skills Matter

AI coding agents are strongest when they have explicit operating procedures. A well-written skill turns team judgment into reusable execution context: how to review a pull request, how to audit accessibility, how to generate Playwright tests, how to document architecture decisions, and how to protect product quality while moving quickly.

This repository helps teams:

- Standardize high-value engineering and UX workflows.
- Reduce prompt drift across agents and contributors.
- Encode senior review heuristics into reusable instructions.
- Improve accessibility, testing, documentation, and frontend quality.
- Build a shared language for AI-assisted engineering work.

## Repository Architecture

```text
ai-code-skills-lab/
|-- README.md
|-- AGENTS.md
|-- LICENSE
|-- docs/
|   |-- getting-started.md
|   |-- contributing.md
|   |-- skill-format.md
|   |-- roadmap.md
|   `-- skills-index.md
|-- skills/
|   |-- frontend/
|   |-- accessibility/
|   |-- design-systems/
|   |-- testing/
|   |-- documentation/
|   `-- ux/
|-- templates/
|   |-- skill-template/
|   `-- examples/
`-- scripts/
    |-- validate-skill.js
    `-- generate-index.js
```

The catalog currently includes **50 production-ready skills** across six categories. The original minimum target was 25 skills; this repository now includes a broader designer-and-developer skill set for product-quality AI-assisted work.

## Skill Categories

| Category | Focus | Included Skills |
| --- | --- | ---: |
| Frontend | React, architecture, performance, responsive behavior, forms, APIs, state, resilience | 9 |
| Accessibility | WCAG, forms, keyboard, focus, semantic HTML, contrast, screen readers | 7 |
| Design Systems | Tokens, component APIs, Storybook, states, handoff, visual QA, typography, governance | 10 |
| Testing | Playwright, component tests, accessibility tests, visual regression, regression planning, QA | 7 |
| Documentation | README, changelog, PR review, ADRs, release notes, DX, technical docs | 7 |
| UX | UX audits, heuristics, conversion, IA, user flows, onboarding, copy, navigation, settings, states | 10 |

## Featured Skills

- **React Component Refactor**: Break down complex React components while preserving behavior, accessibility, and type safety.
- **WCAG Audit**: Convert accessibility issues into prioritized engineering work with clear remediation guidance.
- **Design System Health Audit**: Evaluate component quality, token maturity, adoption, documentation, and governance.
- **Design Handoff Review**: Find missing states, tokens, responsive rules, assets, and accessibility notes before implementation starts.
- **Figma To Code Implementation Plan**: Translate design intent into incremental frontend work with components, states, tests, and risks.
- **Playwright Test Generator**: Create stable end-to-end tests with accessible locators and meaningful assertions.
- **Accessibility Test Generator**: Add durable tests for roles, labels, focus, keyboard behavior, and automated scanner coverage.
- **PR Review Assistant**: Review pull requests with attention to defects, regressions, tests, accessibility, and maintainability.
- **Empty State Review**: Improve empty, loading, error, first-use, and zero-result states across product workflows.
- **User Flow Analysis**: Map product flows, edge states, friction, and measurement opportunities.

## Installation

Clone the repository and run the validation scripts:

```bash
git clone https://github.com/deandreperry/ai-code-skills-lab.git
cd ai-code-skills-lab
npm install
npm run validate
npm run index
```

To use a skill with an AI coding agent, copy or symlink the desired skill directory into the agent's configured skills location, or reference the skill content directly in your project instructions.

Example:

```bash
# Example only: adjust the destination for your local agent setup.
mkdir -p ~/.codex/skills
cp -R skills/testing/playwright-test-generator ~/.codex/skills/
```

## Usage Examples

Ask an agent to use a skill by name and provide the required inputs:

```text
Use the Playwright Test Generator skill to add coverage for the signup flow.
Inputs: route /signup, existing tests in tests/e2e, command npm run test:e2e, expected behavior is validation errors followed by successful account creation.
```

```text
Use the WCAG Audit skill to review the checkout flow.
Inputs: pages in src/app/checkout, supported browsers Chrome and Safari, focus on keyboard navigation, form errors, dialogs, and contrast.
```

```text
Use the Frontend Architecture Review skill to assess the dashboard app.
Inputs: src/app, src/features, package.json scripts, known pain points around duplicated state and slow tests.
```

## Skill Format

Every skill follows the same structure:

- `SKILL.md` with complete execution instructions.
- `examples/` with sample prompts and expected outputs.
- `resources/` with checklists, rubrics, or supporting references.
- `scripts/` for optional automation or placeholders for future utilities.

See [docs/skill-format.md](docs/skill-format.md) for the full authoring contract.

## Quality Bar

Skills in this repository are expected to be realistic, executable, and useful to professional teams. A skill should help an agent do the work, not merely describe the topic. Good skills include concrete inputs, decision points, verification steps, and clear success criteria.

## Contributing

Contributions should preserve the catalog's professional tone and operational quality. Before opening a pull request:

```bash
npm run validate
npm run index
```

Read [docs/contributing.md](docs/contributing.md) for contribution standards and review expectations.

## Roadmap

The roadmap focuses on deeper examples, reusable scripts, quality scoring, and integration guidance for different AI coding environments. See [docs/roadmap.md](docs/roadmap.md).

## License

MIT. See [LICENSE](LICENSE).
