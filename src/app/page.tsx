import Link from "next/link"
import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { MacBookHero } from "@/components/macbook-hero"
import { ProductLineup } from "@/components/product-lineup"
import { ColoredProductSection } from "@/components/colored-product-section"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

const PAGES = [
  { name: "iPhone 16 Pro", href: "/iphone", desc: "Product hero with video-like animation" },
  { name: "MacBook Pro", href: "/mac", desc: "3D laptop opening animation" },
  { name: "iPad Pro", href: "/ipad", desc: "Product showcase with lineup" },
  { name: "Apple Watch", href: "/watch", desc: "Feature-driven product page" },
  { name: "AirPods Pro", href: "/airpods", desc: "Entertainment-focused layout" },
  { name: "Store", href: "/store", desc: "Product grid and service cards" },
  { name: "Apple TV+", href: "/tv", desc: "Media cards and poster grid" },
]

const COMPONENTS = [
  { name: "StickyNav", desc: "Scroll shrink, active dot, mobile menu with focus trap" },
  { name: "IPhoneHero", desc: "Rise+spin entrance, Ken Burns zoom, floating idle" },
  { name: "MacBookHero", desc: "3D perspective tilt, screen light-up, glossy overlay" },
  { name: "ProductLineup", desc: "Bento grid layout with featured + supporting items" },
  { name: "ProductGallery", desc: "Multi-image crossfade viewer with thumbnails" },
  { name: "FeaturedMediaCard", desc: "Hero 2:1 card + poster thumbnail grid" },
  { name: "MediaCardGrid", desc: "Apple Services icon grid (8 services)" },
  { name: "CursorGlow", desc: "Radial gradient following mouse cursor" },
  { name: "ScrollParallax", desc: "Subtle parallax movement on scroll" },
  { name: "SlidePanel", desc: "Search & Bag slide-over with keyboard trap" },
  { name: "PageTransition", desc: "Fade + slide route transitions" },
  { name: "Reveal", desc: "Scroll-triggered entrance animations" },
]

export default function Home() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-paper px-5 pb-0 pt-[120px] text-center">
          <Reveal delay={0.1}>
            <p className="font-sf-pro-text text-[14px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">
              Design System Showcase
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="mt-2 font-sf-pro-display md:text-[64px] text-[36px] font-bold leading-[1.05] tracking-[-1.5px] text-graphite">
              Apple Design System
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-fog">
              A premium reference implementation inspired by Apple&apos;s design language — rebuilt with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex items-center gap-3">
              <PillButton variant="filled">Explore components</PillButton>
              <PillButton variant="outlined">View on GitHub</PillButton>
            </div>
          </Reveal>
        </section>

        <Reveal delay={0.1}>
          <section className="bg-cloud px-5 py-[100px]">
            <div className="mx-auto max-w-[980px]">
              <p className="font-sf-pro-text text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">
                Pages
              </p>
              <h2 className="mt-1 font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
                Seven fully designed product pages
              </h2>
              <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {PAGES.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="group rounded-[12px] bg-paper p-5 shadow-sm transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
                  >
                    <h3 className="font-sf-pro-text text-[15px] font-semibold leading-[1.24] text-graphite transition-colors group-hover:text-apple-blue">
                      {page.name}
                    </h3>
                    <p className="mt-0.5 font-sf-pro-text text-[13px] font-light leading-[1.38] text-fog">
                      {page.desc}
                    </p>
                    <span className="mt-2 inline-block font-sf-pro-text text-[13px] font-normal leading-[1.38] text-apple-blue transition-all group-hover:translate-x-0.5">
                      View page &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <ScrollParallax offset={30}>
          <ProductLineup />
        </ScrollParallax>

        <Reveal delay={0.1}>
          <section className="bg-paper px-5 py-[100px]">
            <div className="mx-auto max-w-[980px]">
              <p className="font-sf-pro-text text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">
                Components
              </p>
              <h2 className="mt-1 font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
                20+ reusable UI components
              </h2>
              <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {COMPONENTS.map((comp) => (
                  <div
                    key={comp.name}
                    className="rounded-[12px] border border-bone bg-paper p-5 transition-shadow hover:shadow-sm"
                  >
                    <h3 className="font-sf-pro-text text-[15px] font-semibold leading-[1.24] text-graphite">
                      {comp.name}
                    </h3>
                    <p className="mt-0.5 font-sf-pro-text text-[13px] font-light leading-[1.38] text-fog">
                      {comp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <MacBookHero />

        <ScrollParallax offset={20} opacityRange={[0.85, 0.85]}>
          <ColoredProductSection />
        </ScrollParallax>

        <ScrollParallax offset={25}>
          <FeaturedMediaCard />
        </ScrollParallax>

        <ScrollParallax offset={25}>
          <MediaCardGrid />
        </ScrollParallax>

        <section className="bg-graphite px-5 py-[100px] text-center">
          <Reveal delay={0.1}>
            <h2 className="font-sf-pro-display md:text-[48px] text-[32px] font-bold leading-[1.08] tracking-[-0.96px] text-paper">
              Ready to use this design system?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-[560px] font-sf-pro-text text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-paper/70">
              Clone the repository, install dependencies, and start building.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="https://github.com/dennoaditya-art/apple-design-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-[980px] bg-paper px-[15px] py-[8px] font-sf-pro-text text-[17px] leading-[1.47] tracking-[-0.05px] text-graphite transition-all hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              >
                View on GitHub
              </a>
              <PillButton variant="filled" className="border-paper bg-paper text-graphite hover:opacity-80">
                Live demo
              </PillButton>
            </div>
          </Reveal>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
