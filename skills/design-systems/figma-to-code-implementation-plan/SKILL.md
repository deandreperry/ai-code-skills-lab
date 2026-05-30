# Figma To Code Implementation Plan

## Skill Name

Figma To Code Implementation Plan

## Description

Translate design specs, screenshots, or Figma handoff notes into a practical frontend implementation plan with components, states, tokens, and tests.

## When To Use

- A design needs to become a coded feature or component.
- Engineers need an implementation breakdown before coding.
- A team wants to align design intent with existing components and architecture.
- A design includes multiple states, breakpoints, or design system dependencies.

## Inputs Required

- Design frames, screenshots, prototype notes, or exported specs.
- Target codebase structure, framework, design system, and styling approach.
- Acceptance criteria, responsive requirements, and data/API constraints.
- Existing components, tokens, and patterns that should be reused.

## Step-by-Step Workflow

1. Break the design into layout regions, reusable components, content, states, and interactions.
2. Map each element to existing components, tokens, or required new work.
3. Identify data dependencies, API integration points, loading/error/empty states, and permissions.
4. Plan implementation steps with tests, accessibility checks, and review points.
5. Call out design ambiguities and engineering risks before implementation begins.

## Output Format

- Implementation plan with component breakdown, file targets, and build sequence.
- State, token, accessibility, and testing checklist.
- Open questions and risk notes for design or product clarification.

## Success Criteria

- The plan bridges design intent and existing code patterns.
- Implementation can proceed in small, reviewable increments.
- States, responsiveness, and accessibility are planned up front.
- The plan avoids unnecessary new abstractions or dependencies.

## Common Mistakes

- Translating designs into one large component.
- Ignoring existing design system primitives.
- Planning only the happy path visible in the frame.
- Treating pixel measurements as tokens without checking system conventions.

## Example Usage

Use this skill to turn a Figma settings redesign into a React implementation plan with components, routes, states, and tests.
