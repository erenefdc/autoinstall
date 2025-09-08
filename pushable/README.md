
# paxx.dev — Next.js + Tailwind starter (Vercel-ready)

This repo is a small personal website template that shows a hero, social links, and a live Discord presence card via Lanyard.

## Included
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion animations
- next-themes dark/light toggle
- Live Discord presence proxied through `/api/lanyard`
- `.env.example` showing the environment variables you should set in Vercel

## Quick start (local)
1. Copy `.env.example` to `.env.local` and edit values if needed.
2. Install deps: `npm i`
3. Run dev server: `npm run dev` (http://localhost:3000)

## Deploy to Vercel
1. Push to GitHub/GitLab/Bitbucket.
2. Import the repository into Vercel.
3. In Vercel Project Settings → Environment Variables, add values from `.env.example` (for Production/Preview/Development as you like).
4. Deploy.

## Environment variables (.env.example)
- `NEXT_PUBLIC_DISCORD_USER_ID` — your Discord user id (public)
- `NEXT_PUBLIC_DISCORD_INVITE` — server invite or profile link (optional)
- `NEXT_PUBLIC_INTRO` — the intro line shown on the hero (public)
- `NEXT_PUBLIC_GITHUB` — link to your GitHub profile
- `NEXT_PUBLIC_EMAIL` — contact email used by the mailto button

---
Made for paxx — enjoy! 🚀
