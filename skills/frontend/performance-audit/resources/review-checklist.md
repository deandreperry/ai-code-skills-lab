# Performance Audit Review Checklist

Use this checklist while executing the skill.

## Preparation

- [ ] Confirm target URL, route, or component scope.
- [ ] Confirm performance budgets, device assumptions, and target regions when available.
- [ ] Confirm build command, test command, and profiling tools available in the repo.
- [ ] Confirm recent regressions, analytics, Lighthouse reports, or browser traces.

## Execution

- [ ] Establish the performance question and identify the user journey, device class, and success metrics.
- [ ] Inspect bundle composition, network waterfalls, asset strategy, rendering patterns, and hydration behavior.
- [ ] Look for high-impact issues such as render loops, layout thrashing, unoptimized media, blocking scripts, and oversized client bundles.
- [ ] Prioritize improvements by user impact, confidence, and implementation risk.
- [ ] Verify fixes with available tooling or provide exact measurement steps when local reproduction is not possible.

## Completion

- [ ] Recommendations target real bottlenecks, not cosmetic micro-optimizations.
- [ ] Each fix includes a way to measure improvement.
- [ ] The plan includes both quick wins and structural opportunities when needed.
- [ ] Accessibility and functionality are preserved while improving speed.
