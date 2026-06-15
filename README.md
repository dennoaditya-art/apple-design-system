# Apple Design System

A premium design system reference implementation inspired by Apple's design language. Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

[![Vercel](https://img.shields.io/badge/Live-Vercel-000?logo=vercel)](https://apple-design-system.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## Screenshots

| Desktop Home | Desktop iPhone |
|---|---|
| ![Home](https://apple-design-system.vercel.app/screenshots/home.png) | ![iPhone](https://apple-design-system.vercel.app/screenshots/iphone.png) |

| Desktop Mac | Mobile Home |
|---|---|
| ![Mac](https://apple-design-system.vercel.app/screenshots/mac.png) | ![Mobile](https://apple-design-system.vercel.app/screenshots/mobile.png) |

---

## Features

### Pages
- **Home** — Full component showcase with Apple-style hero, product lineup, and service grid
- **iPhone** — iPhone 16 Pro hero with video-like animation, product gallery, and showcase
- **Mac** — MacBook Pro hero with 3D laptop opening animation and product gallery
- **iPad** — iPad Pro hero with product lineup and colored sections
- **Watch** — Apple Watch Ultra 2 hero with feature sections
- **AirPods** — AirPods Pro 2 hero with entertainment cards
- **Store** — Store landing with product grid and service cards
- **TV** — Apple TV+ hero with media cards and poster grid

### Components
- **StickyNav** — Apple.com-style navigation with scroll shrink, active dot indicator, mobile hamburger menu with keyboard trap
- **IPhoneHero** — Rise+spin entrance, Ken Burns zoom, floating idle, ambient light sweep
- **MacBookHero** — 3D perspective tilt-up, screen light-up effect, glossy overlay
- **ProductLineup** — Bento grid layout with featured product and supporting items
- **ProductGallery** — Multi-image viewer with crossfade animation and thumbnails
- **FeaturedMediaCard** — Hero 2:1 card + poster thumbnail grid
- **MediaCardGrid** — Apple Services icon grid (Music, Arcade, Fitness+, etc.)
- **ColoredProductSection** — Themed product section with graphite CTAs
- **CursorGlow** — Apple-blue radial gradient following mouse cursor
- **ScrollParallax** — Subtle parallax movement on scroll for visual sections
- **PageTransition** — Fade + slide route transitions via AnimatePresence
- **BackToTop** — Floating button appearing on scroll
- **SearchPanel / BagPanel** — Slide-over panels with keyboard trap and focus management
- **Reveal / StaggerGrid** — Scroll-triggered entrance animations

### Design System
- **Palette**: Graphite (#1d1d1f), Apple Blue (#2997ff), Deep Link Blue (#0066cc), Button Blue (#0071e3), Cloud (#f5f5f7), Paper (#ffffff), Bone (#e2e2e5)
- **Typography**: SF Pro Display / SF Pro Text with Inter font fallback, negative letter-spacing at large sizes
- **Buttons**: Pill-shaped (980px border-radius), filled (#0071e3) or outlined, graphite variants for colored sections
- **Navigation**: 44px sticky nav, backdrop blur, 8 category links, search/bag icons with slide-over panels
- **Animations**: Framer Motion, scroll-triggered reveals, parallax, page transitions, reduced-motion support

### Accessibility
- Semantic HTML with ARIA roles (`aria-label`, `aria-current`, `aria-expanded`, `aria-modal`)
- Keyboard navigation with visible focus-visible outlines
- Focus trap in mobile menu and slide-over panels
- Skip-to-content ready structure
- WCAG 2.2 AA compliant color contrast
- `prefers-reduced-motion` support across all animations

### Performance & SEO
- Static site generation (all pages prerendered)
- Responsive images with `next/image`, `fill`, and `sizes`
- `placeholder="blur"` for all images
- JSON-LD structured data (Organization + WebSite schema)
- Sitemap.xml + robots.txt
- Dark mode via `prefers-color-scheme`

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) (strict mode) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion v12](https://www.framer.com/motion/) |
| Linting | ESLint + typescript-eslint (strict ruleset) |
| Package Manager | npm |
| Deployment | [Vercel](https://vercel.com) |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/dennoaditya-art/apple-design-system.git
cd apple-design-system

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/               # App Router pages & layouts
│   ├── (auth)/        # Auth pages (placeholder)
│   ├── ipad/          # iPad product page
│   ├── iphone/        # iPhone product page
│   ├── mac/           # Mac product page
│   ├── watch/         # Watch product page
│   ├── airpods/       # AirPods product page
│   ├── store/         # Store landing page
│   ├── tv/            # Apple TV+ page
│   └── api/           # API routes
├── components/        # Shared UI components
│   ├── back-to-top.tsx
│   ├── bag-panel.tsx
│   ├── colored-product-section.tsx
│   ├── cursor-glow.tsx
│   ├── featured-media-card.tsx
│   ├── footer-section.tsx
│   ├── iphone-hero.tsx
│   ├── iphone-showcase.tsx
│   ├── macbook-hero.tsx
│   ├── media-card-grid.tsx
│   ├── page-transition.tsx
│   ├── pill-button.tsx
│   ├── product-gallery.tsx
│   ├── product-hero.tsx
│   ├── product-lineup.tsx
│   ├── reveal.tsx
│   ├── scroll-parallax.tsx
│   ├── search-panel.tsx
│   ├── slide-panel.tsx
│   ├── sticky-nav.tsx
│   └── top-notification-bar.tsx
├── lib/               # Utility functions
├── hooks/             # Custom React hooks
└── types/             # Shared TypeScript types
```

---

## Commands

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run lint         # Run ESLint
npm start            # Start production server
```

---

## License

MIT

---

## Credits

- Design inspiration from [Apple.com](https://apple.com)
- Product photography from [Unsplash](https://unsplash.com)
- Built with [Next.js](https://nextjs.org) by [dennoaditya-art](https://github.com/dennoaditya-art)
