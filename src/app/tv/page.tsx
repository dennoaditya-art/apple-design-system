import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

export default function TVPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <section className="flex flex-col items-center justify-center bg-paper px-5 py-[120px] text-center">
          <h1 className="font-sf-pro-display text-[56px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
            Apple TV+
          </h1>
          <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
            Original stories from the most creative minds in television.
          </p>
        </section>
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
      </main>
      <FooterSection />
    </>
  )
}
