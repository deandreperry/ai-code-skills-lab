# Performance Audit

## Skill Name

Performance Audit

## Description

Audit frontend runtime and loading performance, then produce practical fixes for Core Web Vitals, rendering cost, bundle size, and perceived speed.

## When To Use

- A page feels slow or metrics show regressions in LCP, CLS, INP, or TTFB.
- A release added heavy dependencies, expensive rendering, or large media.
- A team needs a performance plan before launch.
- A product surface must work better on mobile networks and lower-powered devices.

## Inputs Required

- Target URL, route, or component scope.
- Performance budgets, device assumptions, and target regions when available.
- Build command, test command, and profiling tools available in the repo.
- Recent regressions, analytics, Lighthouse reports, or browser traces.

## Step-by-Step Workflow

1. Establish the performance question and identify the user journey, device class, and success metrics.
2. Inspect bundle composition, network waterfalls, asset strategy, rendering patterns, and hydration behavior.
3. Look for high-impact issues such as render loops, layout thrashing, unoptimized media, blocking scripts, and oversized client bundles.
4. Prioritize improvements by user impact, confidence, and implementation risk.
5. Verify fixes with available tooling or provide exact measurement steps when local reproduction is not possible.

## Output Format

- Performance findings with evidence and likely user impact.
- Prioritized remediation plan with code-level recommendations.
- Measurement notes showing tools used, assumptions, and remaining unknowns.

## Success Criteria

- Recommendations target real bottlenecks, not cosmetic micro-optimizations.
- Each fix includes a way to measure improvement.
- The plan includes both quick wins and structural opportunities when needed.
- Accessibility and functionality are preserved while improving speed.

## Common Mistakes

- Optimizing without a baseline measurement.
- Treating Lighthouse as the only source of truth.
- Reducing JavaScript while accidentally harming keyboard or screen reader behavior.
- Ignoring image, font, and third-party script costs.

## Example Usage

Use this skill on a slow product listing page to identify image loading, bundle splitting, filter rendering, and interaction latency improvements.
