# Project Title
SimpleShop — a small demo e-commerce catalog built with Next.js (App Router) and NextAuth.js, backed by a minimal Express.js API.

> A polished, responsive UI with public pages (landing, catalog, product detail) and protected pages (Add Product, Manage Products). Authentication via NextAuth (Google + credentials). Deployable to Vercel (frontend) and any Node host (backend).

---

## Demo
- Live demo: https://your-vercel-url.vercel.app
- GitHub: https://github.com/yourusername/simpleshop

---

## Features
- Landing page with 7 sections:
  - Sticky responsive Navbar (logo, 4+ routes, login/register → user dropdown when logged in)
  - Hero section with CTA
  - 4 additional theme sections (features, top products, testimonials, CTA banner)
  - Uniform card design with hover/focus states
  - Footer with links and social icons
- Auth:
  - NextAuth.js with Google OAuth + credentials (email/password)
  - Protected routes: Add Product, Manage Products (redirect to `/login` if unauthenticated)
- Items:
  - Item List page with search bar and category filter (UI-only filter)
  - Item Details page with large banner, full description, meta info, and back button
- Protected actions:
  - Add Product form (title, short/long desc, price, date, priority, image URL)
  - Manage Products (list, view, delete)
- Clean responsive layout, micro-interactions, accessible markup.

---

## Tech stack
- Frontend: Next.js (App Router), React, Tailwind CSS
- Auth: NextAuth.js (Google + Credentials)
- Backend: Express.js (simple JSON store / in-memory or file-based persistence)
- Styling: Tailwind CSS (mobile-first)
- Optional: Prisma / SQLite (if implementing persistent DB)

---

## Repo structure (example)
