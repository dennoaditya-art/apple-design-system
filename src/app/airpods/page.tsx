import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { ProductHero } from "@/components/product-hero"
import { ProductLineup } from "@/components/product-lineup"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

export default function AirPodsPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <ProductHero
          productName="AirPods Pro 2"
          subtitle="Sound the way it was meant to be."
          imageSrc="https://images.unsplash.com/photo-1631172220668-5675a45f19fc?w=1200&q=80"
          imageAlt="AirPods Pro 2 with charging case"
          priority
        />
        <Reveal delay={0.1}>
          <section className="flex flex-col items-center justify-center bg-cloud px-5 py-[80px] text-center">
            <h2 className="font-sf-pro-display text-[40px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
              A magical experience.
            </h2>
            <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
              Adaptive Audio. Personalized Volume. Conversation Awareness.
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
          <FeaturedMediaCard />
        </Reveal>
        <Reveal delay={0.1}>
          <MediaCardGrid />
        </Reveal>
      </main>
      <FooterSection />
    </>
  )
}
