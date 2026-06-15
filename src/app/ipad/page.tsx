import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { ProductHero } from "@/components/product-hero"
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
        <ProductHero
          productName="iPad Pro"
          subtitle="The ultimate iPad experience."
          imageSrc="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&q=80"
          imageAlt="iPad Pro with Magic Keyboard on desk"
          priority
        />
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
