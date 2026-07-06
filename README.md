# Xornettis Solutions

Official Next.js website for Xornettis Solutions, an AI and Digital Solutions company focused on engineering innovative business solutions with modern web technologies and AI integration.

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router
- React 19
- TypeScript 5
- TailwindCSS v4
- ESLint 9 (flat config)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create optimised production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  layout.tsx     # Root layout (fonts, global CSS)
  page.tsx       # Home page
  globals.css    # Global design system styles
_vanilla_backup/ # Original vanilla HTML/CSS/JS prototype
public/          # Static assets
```

## Deploy on Vercel

Import this repository at [vercel.com/new](https://vercel.com/new). Framework is auto-detected as Next.js — no additional configuration required.
