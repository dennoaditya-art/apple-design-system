import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { IPhoneHero } from "@/components/iphone-hero"
import { MacBookHero } from "@/components/macbook-hero"
import { IPhoneShowcase } from "@/components/iphone-showcase"
import { ProductLineup } from "@/components/product-lineup"
import { ColoredProductSection } from "@/components/colored-product-section"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

export default function Home() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <IPhoneHero />

        <Reveal delay={0.1}>
          <IPhoneShowcase />
        </Reveal>

        <ScrollParallax offset={30}>
          <Reveal delay={0.1}>
            <ProductLineup />
          </Reveal>
        </ScrollParallax>

        <MacBookHero />

        <ScrollParallax offset={20} opacityRange={[0.85, 0.85]}>
          <Reveal delay={0.1}>
            <ColoredProductSection />
          </Reveal>
        </ScrollParallax>

        <ScrollParallax offset={25}>
          <Reveal delay={0.1}>
            <FeaturedMediaCard />
          </Reveal>
        </ScrollParallax>

        <ScrollParallax offset={25}>
          <Reveal delay={0.1}>
            <MediaCardGrid />
          </Reveal>
        </ScrollParallax>

        <Reveal delay={0.1}>
          <section className="flex flex-col items-center justify-center bg-paper px-5 py-[80px] text-center">
            <h2 className="font-sf-pro-display text-[40px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
              Apple at Work
            </h2>
            <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
              Everything you need to get more done.
            </p>
            <div className="mt-5">
              <PillButton variant="filled">Learn more</PillButton>
            </div>
          </section>
        </Reveal>
      </main>
      <FooterSection />
    </>
  )
}
