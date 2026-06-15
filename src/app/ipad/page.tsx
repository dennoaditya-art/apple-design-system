import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { IPadHero } from "@/components/ipad-hero"
import { ProductLineup } from "@/components/product-lineup"
import { ColoredProductSection } from "@/components/colored-product-section"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

export default function IPadPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <IPadHero as="h1" />
        <ScrollParallax offset={30}>
          <Reveal delay={0.1}>
            <ProductLineup />
          </Reveal>
        </ScrollParallax>
        <ScrollParallax offset={20} opacityRange={[0.85, 0.85]}>
          <Reveal delay={0.1}>
            <ColoredProductSection />
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
