import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

export default function EntertainmentPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <section className="flex flex-col items-center justify-center bg-paper px-5 py-[60px] text-center md:py-[120px]">
          <h1 className="font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-ink">
            Stream+
          </h1>
          <p className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-ink">
            Original stories from the most creative minds.
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
