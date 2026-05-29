# Getting Started

AI Code Skills Lab is a catalog of execution-ready skills for AI coding agents. Each skill is a compact operating procedure that tells an agent when to use the skill, what inputs it needs, how to work, what to output, and how success should be judged.

## Prerequisites

- Node.js 18 or newer for repository validation scripts.
- An AI coding agent that can consume local skill instructions or project-level guidance.
- A target codebase or product surface for the selected skill.

## Install And Validate

```bash
git clone https://github.com/deandreperry/ai-code-skills-lab.git
cd ai-code-skills-lab
npm install
npm run validate
```

## Choose A Skill

Start by selecting the category closest to the work:

- `skills/frontend` for React, architecture, performance, responsive behavior, and onboarding.
- `skills/accessibility` for WCAG, forms, keyboard, focus, and semantic HTML.
- `skills/design-systems` for tokens, component APIs, Storybook, and system health.
- `skills/testing` for Playwright, component tests, regression plans, bug reproduction, and QA.
- `skills/documentation` for READMEs, changelogs, PR reviews, ADRs, and technical docs.
- `skills/ux` for UX audits, heuristic evaluations, conversion, information architecture, and user flows.

## Run A Skill With An Agent

Give the agent the skill name and the inputs listed in the skill file.

```text
Use the Responsive Design Audit skill.
Inputs: pages in src/app/settings, supported viewport range 320px to 1440px, browser zoom up to 200%, known issue with long organization names overflowing cards.
```

## Keep Skills Close To The Work

For best results, provide the agent with:

- Relevant file paths.
- Existing commands for linting, testing, and building.
- Known constraints, product goals, and acceptance criteria.
- Screenshots, bug reports, analytics, or customer feedback when available.

## Validate Changes

After editing or adding skills, run:

```bash
npm run validate
npm run index
```

The validation script checks required files, required sections, and basic catalog consistency.
