# QA Checklist

## Accessibility

- [ ] Tab order is logical through nav, sections, and footer
- [ ] Focus ring is visible on all interactive controls
- [ ] Skip link jumps to main content
- [ ] Contact form labels are announced by screen readers
- [ ] Reduced motion preference is respected

## Interactions

- [ ] Project brief toggles expand/collapse correctly
- [ ] Hero and CTA hover animations feel smooth
- [ ] Form status messages render after submit

## Content Integrity

- [ ] Profile summary matches latest CV
- [ ] Metrics and project impact numbers are verified
- [ ] Certification years are accurate

## API Checks

- [ ] GET /api/health returns valid JSON
- [ ] POST /api/contact handles valid payload
- [ ] POST /api/contact rejects invalid email
