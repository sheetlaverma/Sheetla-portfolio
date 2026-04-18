# Sheetla Portfolio (Next.js + Vercel)

This is a full-stack portfolio for Sheetla Verma inspired by minimalist portfolio layouts.

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

## Notes

- Design is reference-inspired, not a direct copy.
- Update personal details in `src/lib/portfolio-data.ts`.
