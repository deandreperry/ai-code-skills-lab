# Design Token Extractor

## Skill Name

Design Token Extractor

## Description

Extract reusable design tokens from CSS, theme files, component styles, or design references and organize them for engineering use.

## When To Use

- A codebase contains repeated hard-coded colors, spacing, typography, shadows, or radii.
- A team is migrating from ad hoc styles to a token-based design system.
- Design and engineering need a shared inventory of visual decisions.
- A product needs theming support without rewriting every component.

## Inputs Required

- Style files, theme files, component library, or representative screenshots.
- Existing token format or desired output target such as CSS variables, JSON, or TypeScript.
- Brand constraints, naming conventions, and platform requirements.
- Priority surfaces or components to analyze first.

## Step-by-Step Workflow

1. Inventory repeated visual values and group them by semantic role, not just raw value.
2. Separate primitive tokens from semantic tokens and component-specific aliases.
3. Detect near-duplicates that may need consolidation or design review.
4. Recommend naming, scale structure, and migration strategy that match the current stack.
5. Produce token output and a safe adoption plan for the highest-value components.

## Output Format

- Token inventory with primitives, semantic tokens, and component aliases.
- Generated token file or implementation-ready specification.
- Migration notes for replacing hard-coded values incrementally.

## Success Criteria

- Tokens reflect product meaning and are not only color or spacing constants.
- Naming is consistent, discoverable, and extensible.
- Existing visual output can be preserved during migration.
- The result supports future theming and design system governance.

## Common Mistakes

- Naming tokens by current color values instead of semantic purpose.
- Extracting every one-off value into the global system.
- Combining primitive and semantic tokens without clear layers.
- Forgetting hover, focus, disabled, error, and dark-mode states.

## Example Usage

Use this skill to extract CSS variable tokens from a legacy component library and prepare a migration plan for buttons, forms, and cards.
