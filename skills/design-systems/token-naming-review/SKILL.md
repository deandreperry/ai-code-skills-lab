# Token Naming Review

## Skill Name

Token Naming Review

## Description

Review design token names for clarity, scalability, semantic meaning, theming support, and cross-platform consistency.

## When To Use

- A token set is growing and names are becoming inconsistent.
- Design and engineering disagree on primitive, semantic, or component token layers.
- A theme system needs names that work across light, dark, brand, or density modes.
- A team needs governance rules before publishing tokens.

## Inputs Required

- Current token files, naming conventions, and theme examples.
- Product domains, brand modes, supported platforms, and component library scope.
- Examples of confusing, duplicated, or disputed token names.
- Consumer expectations for CSS, JSON, TypeScript, Figma, or native platforms.

## Step-by-Step Workflow

1. Classify tokens into primitive, semantic, component, and state layers.
2. Identify names tied too tightly to values, themes, implementation details, or one component.
3. Evaluate hierarchy, ordering, prefixes, state names, and discoverability.
4. Propose naming rules with examples and migration mapping.
5. Call out tokens that need design decisions rather than mechanical renaming.

## Output Format

- Naming review report with rename recommendations and rationale.
- Token naming guidelines suitable for contribution docs.
- Migration table from current names to proposed names.

## Success Criteria

- Names communicate intent across themes and platforms.
- The structure makes future tokens predictable.
- Renames are prioritized by impact and migration cost.
- Design decisions are separated from syntax cleanup.

## Common Mistakes

- Using visual values such as blue or 8px in semantic token names.
- Creating deep hierarchies that are hard to remember.
- Renaming tokens without a deprecation plan.
- Ignoring state, density, and platform differences.

## Example Usage

Use this skill to review tokens like `color.blue.500`, `primaryBg`, and `buttonMain` and propose a durable naming taxonomy.
