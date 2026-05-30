# Screen Reader Flow Review

## Skill Name

Screen Reader Flow Review

## Description

Review the screen reader experience for user flows, including landmarks, headings, names, descriptions, announcements, and interaction feedback.

## When To Use

- A flow is technically keyboard-accessible but confusing when spoken.
- Dynamic updates, validation, dialogs, or route changes need announcement review.
- A product team needs accessibility findings beyond automated checks.
- Designers and engineers need to understand the non-visual experience.

## Inputs Required

- Target page, component, or user flow.
- Expected user task and sequence of interactions.
- Markup or component source, screenshots, and known accessibility bugs.
- Assistive technology expectations or available manual testing notes.

## Step-by-Step Workflow

1. Map the flow from a screen reader user perspective, including orientation, navigation, action, feedback, and recovery.
2. Review landmarks, headings, accessible names, descriptions, roles, states, and relationships.
3. Check announcements for route changes, validation errors, loading, success, dialogs, and async updates.
4. Identify noisy, missing, misleading, or duplicated spoken information.
5. Recommend semantic, focus, and live-region changes that improve orientation without over-announcing.

## Output Format

- Screen reader flow review with expected and actual spoken experience.
- Findings with severity, affected step, and recommended remediation.
- Retesting checklist for headings, names, announcements, and focus.

## Success Criteria

- Users can understand where they are, what changed, and what action is available.
- Announcements are timely, useful, and not excessive.
- Semantic structure supports efficient navigation.
- Recommendations use native semantics before ARIA workarounds.

## Common Mistakes

- Assuming passing automated checks means the spoken flow is good.
- Adding live regions for every visual change.
- Leaving duplicated labels or vague button names.
- Forgetting route changes, modal transitions, and validation summaries.

## Example Usage

Use this skill to review a multi-step checkout flow with form errors, loading states, modal confirmations, and success messages.
