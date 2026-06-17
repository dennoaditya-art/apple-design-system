import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { AirPodsHero } from "@/components/airpods-hero"
import { AudioFeatureGrid } from "@/components/audio-feature-grid"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"

export default function AirPodsPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <AirPodsHero as="h1" />
        <Reveal delay={0.1}>
          <section className="flex flex-col items-center justify-center bg-cloud px-5 py-[80px] text-center">
            <h2 className="font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
              A magical experience.
            </h2>
            <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
              Adaptive Audio. Personalized Volume. Conversation Awareness.
            </p>
            <div className="mt-5">
              <PillButton variant="filled" href="/store">Learn more</PillButton>
            </div>
          </section>
        </Reveal>
        <Reveal delay={0.1}>
          <AudioFeatureGrid />
        </Reveal>
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
