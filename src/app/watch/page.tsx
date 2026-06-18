import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { WatchHero } from "@/components/watch-hero"
import { LifestyleShowcase } from "@/components/lifestyle-showcase"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"

export default function WatchPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <WatchHero as="h1" />
        <Reveal delay={0.1}>
          <section className="flex flex-col items-center justify-center bg-paper px-5 py-[80px] text-center">
            <h2 className="font-font-heading md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-ink">
              Why Wear a Smartwatch
            </h2>
            <p className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-ink">
              The ultimate device for a healthy life.
            </p>
            <div className="mt-5">
              <PillButton variant="filled" href="/store">Learn more</PillButton>
            </div>
          </section>
        </Reveal>
        <Reveal delay={0.1}>
          <LifestyleShowcase />
        </Reveal>
        <Reveal delay={0.1}>
          <MediaCardGrid />
        </Reveal>
      </main>
      <FooterSection />
    </>
  )
}
