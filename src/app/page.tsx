import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { IPhoneHero } from "@/components/iphone-hero"
import { MacBookHero } from "@/components/macbook-hero"
import { IPhoneShowcase } from "@/components/iphone-showcase"
import { HorizontalPan } from "@/components/horizontal-pan"
import type { PanPanel } from "@/components/horizontal-pan"

const IPHONE_PANELS: PanPanel[] = [
  {
    src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    alt: "iPhone 16 Pro front view",
    title: "Titanium design",
    description: "Grade 5 titanium — same alloy used on Mars rovers.",
    eyebrow: "iPhone 16 Pro",
  },
  {
    src: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
    alt: "iPhone 16 Pro angle view",
    title: "Camera Control",
    description: "A new way to quickly launch the camera and snap photos.",
    eyebrow: "iPhone 16 Pro",
  },
  {
    src: "https://images.unsplash.com/photo-1726732946451-98690db97aae?w=800&q=80",
    alt: "iPhone 16 color options",
    title: "A18 chip",
    description: "3nm technology powers Apple Intelligence at blazing speed.",
    eyebrow: "iPhone 16 Pro",
  },
]
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

        <HorizontalPan panels={IPHONE_PANELS} />
      </main>
      <FooterSection />
    </>
  )
}
