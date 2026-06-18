import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nova Store — Premium Gadgets",
  description: "Discover the latest premium gadgets at Nova Store. Shop phones, laptops, tablets, watches, audio, and more.",
  openGraph: {
    title: "Nova Store — Premium Gadgets",
    description: "Discover the latest premium gadgets at Nova Store.",
  },
}
import { PhoneHero } from "@/components/phone-hero"
import { LaptopHero } from "@/components/laptop-hero"
import { PhoneShowcase } from "@/components/phone-showcase"
import { HorizontalPan } from "@/components/horizontal-pan"
import type { PanPanel } from "@/components/horizontal-pan"

const PHONE_PANELS: PanPanel[] = [
  {
    src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    alt: "UltraPhone X front view",
    title: "Premium design",
    description: "Grade 5 titanium — strong and lightweight.",
    eyebrow: "UltraPhone X",
  },
  {
    src: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
    alt: "UltraPhone X angle view",
    title: "Camera Control",
    description: "A new way to quickly launch the camera and snap photos.",
    eyebrow: "UltraPhone X",
  },
  {
    src: "https://images.unsplash.com/photo-1726732946451-98690db97aae?w=800&q=80",
    alt: "UltraPhone X color options",
    title: "Next-gen chip",
    description: "Cutting-edge 3nm technology powers AI at blazing speed.",
    eyebrow: "UltraPhone X",
  },
]
import { ProductLineup } from "@/components/product-lineup"
import { ColoredProductSection } from "@/components/colored-product-section"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { NewsletterCta } from "@/components/newsletter-cta"
import { ScrollProgressBar, MorphGradient } from "@/components/cinematic"

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <PhoneHero />
      <PhoneShowcase />
      <MorphGradient>
        <ProductLineup />
      </MorphGradient>
      <LaptopHero />
      <ColoredProductSection />
      <FeaturedMediaCard />
      <MediaCardGrid />
      <HorizontalPan panels={PHONE_PANELS} />
      <NewsletterCta />
    </>
  )
}