import type { Metadata } from "next"
import { TopNotificationBar } from "@/components/top-notification-bar"

export const metadata: Metadata = {
  title: "Tablets",
  description: "Browse tablets at Nova Store. Tablet Pro and Tablet Air with stunning displays and powerful performance.",
}
import { StickyNav } from "@/components/sticky-nav"
import { TabletHero } from "@/components/tablet-hero"
import { ProductActionGrid } from "@/components/product-action-grid"
import { ColoredProductSection } from "@/components/colored-product-section"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

export default function TabletPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <TabletHero as="h1" />
        <Reveal delay={0.1}>
          <ProductActionGrid />
        </Reveal>
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
