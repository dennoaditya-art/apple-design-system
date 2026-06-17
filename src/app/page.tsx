import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { IPhoneHero } from "@/components/iphone-hero"
import { MacBookHero } from "@/components/macbook-hero"
import { IPhoneShowcase } from "@/components/iphone-showcase"
import { HorizontalPan } from "@/components/horizontal-pan"
import { ProductLineup } from "@/components/product-lineup"
import { ColoredProductSection } from "@/components/colored-product-section"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { ScrollProgressBar, MorphGradient } from "@/components/cinematic"

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <TopNotificationBar />
      <StickyNav />
      <main>
        <IPhoneHero />

        <IPhoneShowcase />

        <MorphGradient>
          <ProductLineup />
        </MorphGradient>

        <MacBookHero />

        <ColoredProductSection />

        <FeaturedMediaCard />

        <MediaCardGrid />

        <HorizontalPan />
      </main>
      <FooterSection />
    </>
  )
}
