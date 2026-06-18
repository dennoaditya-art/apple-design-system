# Nova Store — Premium Next.js E-Commerce UI Template

A production-grade, Apple-inspired e-commerce frontend built with **Next.js 16**, **Tailwind CSS v4**, **Motion**, and **GSAP**. Includes 20+ fully built pages, a complete product catalog, dashboard, cart, auth flow, and cinematic scroll animations.

## Pages (33 routes)

- **Storefront**: Home, Store, Phones, Laptops, Tablets, Watches, Audio, TV, Entertainment, AirPods, iPad, iPhone, Mac
- **Marketing**: About, Pricing, Support (FAQ), Studio, Labs, Playground, Motion Lab
- **Auth**: Login, Register, Reset Password
- **Dashboard**: Overview, Analytics, Orders, Customers, Settings

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animations | Motion (React) + GSAP ScrollTrigger |
| Icons | Phosphor Icons |
| Fonts | Geist (sans), JetBrains Mono (mono) |

## Features

- **Apple-grade polish** — refined typography, micro-interactions, cinematic hero sections
- **GSAP Horizontal Pan** — scroll-driven product showcase with parallax depth
- **Full product catalog** — 17 products across 6 categories with dynamic search
- **Dashboard** — analytics, orders management, customer list, settings
- **Auth flow** — login, register, password reset pages
- **Cart system** — client-side cart with React context + localStorage
- **Responsive** — mobile-first with hamburger nav, touch-friendly targets
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, reduced-motion support
- **Loading/Error states** — every route has loading.tsx + error.tsx
- **SEO** — sitemap.xml + robots.txt included

## Quick Start

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
npm run typecheck # TypeScript check
```

## Customization

Edit `src/app/globals.css` → `@theme inline` block to change the brand palette:

```css
@theme inline {
  --color-accent: #2997ff;      /* Primary brand color */
  --color-accent-hover: #0071e3;
  --color-ink: #1d1d1f;         /* Text color */
  --color-paper: #ffffff;       /* Background */
  --color-fog: #f5f5f7;         /* Surface */
  --color-silver: #d2d2d7;      /* Border */
  --color-graphite: #86868b;    /* Muted text */
}
```

## Deployment

Optimized for Vercel — push to GitHub, connect repo, done.

```bash
npm run build
npm run start
```

## What's Included

- Complete source code (TypeScript, no minified blobs)
- MIT License — use for personal or commercial projects
- Dark mode support (system preference)
- Fully responsive, WCAG 2.2 AA compliant
- Zero-config Vercel deployment

---

Built with care for premium shopping experiences.
