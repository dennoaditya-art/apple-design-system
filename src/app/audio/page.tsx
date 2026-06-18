import type { Metadata } from "next"
import { TopNotificationBar } from "@/components/top-notification-bar"

export const metadata: Metadata = {
  title: "Audio",
  description: "Discover premium audio at Nova Store. Earbuds Pro 2, Headphones Max, and more — sound the way it was meant to be.",
  openGraph: { title: "Audio | Nova Store", description: "Discover premium audio at Nova Store." },
}
import { StickyNav } from "@/components/sticky-nav"
import { AudioHero } from "@/components/audio-hero"
import { AudioFeatureGrid } from "@/components/audio-feature-grid"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"

export default function AudioPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <AudioHero as="h1" />
        <Reveal delay={0.1}>
          <section className="flex flex-col items-center justify-center bg-fog px-5 py-[80px] text-center">
            <h2 className="font-font-heading md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-ink">
              A magical experience.
            </h2>
            <p className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-ink">
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
