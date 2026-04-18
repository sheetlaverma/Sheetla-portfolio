# Sheetla Portfolio (Next.js + Vercel)

This is a data analyst portfolio for Sheetla Verma inspired by minimalist portfolio layouts.

## Profile Snapshot

- Name: Sheetla Verma
- Role: Data Analyst - 1 Years Experience
- Focus: Revenue analytics, customer behaviour, and ML-driven forecasting
- Email: sheetlaverma71@gmail.com
- LinkedIn: https://www.linkedin.com/in/sheetla-verma/
- Instagram: https://www.instagram.com/atharv_a6/
- GitHub: https://github.com/sheetlaverma
- Repository: https://github.com/sheetlaverma/Sheetla-portfolio.git

## Stack

- Next.js (App Router)
- TypeScript
- CSS (custom, no UI framework)
- Serverless API routes (`/api/contact`, `/api/health`)

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Environment Variables

Copy `.env.example` to `.env.local` and configure values as needed:

- `CONTACT_WEBHOOK_URL` (optional)

## API Endpoints

- `POST /api/contact`
  - Validates name, email, and message
  - Returns JSON success/error response
- `GET /api/health`
  - Health-check endpoint for deployment verification

## Deploy To Vercel

1. Push to your GitHub repo.
2. Import repo in Vercel.
3. Add optional environment variables in Vercel Project Settings.
4. Deploy.

## Checklists

- Deployment checklist: `DEPLOY_CHECKLIST.md`
- QA checklist: `QA_CHECKLIST.md`

## Notes

- Design is reference-inspired, not a direct copy.
- Update personal details in `src/lib/portfolio-data.ts`.
