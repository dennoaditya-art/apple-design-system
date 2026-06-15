import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { ProductHero } from "@/components/product-hero"
import { ProductLineup } from "@/components/product-lineup"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

export default function WatchPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <ProductHero
          productName="Apple Watch Ultra 2"
          subtitle="Adventure awaits."
          imageSrc="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1200&q=80"
          imageAlt="Apple Watch Ultra 2 on wrist"
          priority
        />
        <Reveal delay={0.1}>
          <section className="flex flex-col items-center justify-center bg-paper px-5 py-[80px] text-center">
            <h2 className="font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
              Why Apple Watch
            </h2>
            <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
              The ultimate device for a healthy life.
            </p>
            <div className="mt-5">
              <PillButton variant="filled">Learn more</PillButton>
            </div>
          </section>
        </Reveal>
        <ScrollParallax offset={30}>
          <Reveal delay={0.1}>
            <ProductLineup />
          </Reveal>
        </ScrollParallax>
        <Reveal delay={0.1}>
          <MediaCardGrid />
        </Reveal>
      </main>
      <FooterSection />
    </>
  )
}
