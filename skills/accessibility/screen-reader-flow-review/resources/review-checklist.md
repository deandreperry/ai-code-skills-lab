# Screen Reader Flow Review Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm target page, component, or user flow.
- [ ] Confirm expected user task and sequence of interactions.
- [ ] Confirm markup or component source, screenshots, and known accessibility bugs.
- [ ] Confirm assistive technology expectations or available manual testing notes.

## Execution

- [ ] Map the flow from a screen reader user perspective, including orientation, navigation, action, feedback, and recovery.
- [ ] Review landmarks, headings, accessible names, descriptions, roles, states, and relationships.
- [ ] Check announcements for route changes, validation errors, loading, success, dialogs, and async updates.
- [ ] Identify noisy, missing, misleading, or duplicated spoken information.
- [ ] Recommend semantic, focus, and live-region changes that improve orientation without over-announcing.

## Completion

- [ ] Users can understand where they are, what changed, and what action is available.
- [ ] Announcements are timely, useful, and not excessive.
- [ ] Semantic structure supports efficient navigation.
- [ ] Recommendations use native semantics before ARIA workarounds.
