import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { ProductLineup } from "@/components/product-lineup"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { PillButton } from "@/components/pill-button"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

export default function StorePage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <section className="flex flex-col items-center justify-center bg-paper px-5 py-[120px] text-center">
          <h1 className="font-sf-pro-display md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
            Store
          </h1>
          <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
            The best way to buy the products you love.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <PillButton variant="filled">Shop iPhone</PillButton>
            <PillButton variant="outlined">Shop Mac</PillButton>
          </div>
        </section>
        <ScrollParallax offset={30}>
          <Reveal delay={0.1}>
            <ProductLineup />
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
