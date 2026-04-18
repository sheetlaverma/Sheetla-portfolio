# Deploy Checklist (Vercel)

## Pre-Deploy

- [ ] Update production URL in metadata files
- [ ] Confirm social links and email in src/lib/portfolio-data.ts
- [ ] Ensure CONTACT_WEBHOOK_URL is set only if needed
- [ ] Run npm install locally
- [ ] Run npm run build locally

## Vercel Setup

- [ ] Import repository from GitHub
- [ ] Framework preset: Next.js
- [ ] Configure environment variables:
  - [ ] CONTACT_WEBHOOK_URL (optional)
- [ ] Trigger deployment

## Post-Deploy Validation

- [ ] Homepage loads without console errors
- [ ] /api/health returns status ok
- [ ] Contact form submission returns success
- [ ] Mobile navigation and sections render properly
- [ ] Keyboard navigation and skip link work
- [ ] Lighthouse accessibility score is acceptable

## Ongoing Maintenance

- [ ] Review dependencies monthly
- [ ] Update projects/certifications quarterly
- [ ] Recheck links and contact form after updates
