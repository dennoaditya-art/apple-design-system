import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Phones",
  description: "Explore the latest smartphones at Nova Store. UltraPhone X, Phone S, and more — titanium design, pro camera system.",
  openGraph: { title: "Phones | Nova Store", description: "Explore the latest smartphones at Nova Store." },
}
import { PhoneHero } from "@/components/phone-hero"
import { PhoneShowcase } from "@/components/phone-showcase"
import { StickyStack } from "@/components/sticky-stack"
import { HorizontalPan } from "@/components/horizontal-pan"
import type { PanPanel } from "@/components/horizontal-pan"
import { ProductLineup } from "@/components/product-lineup"
import { ProductGallery } from "@/components/product-gallery"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

const PHONE_GALLERY = [
  { src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80", alt: "UltraPhone X front view" },
  { src: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80", alt: "UltraPhone X angle view" },
  { src: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80", alt: "UltraPhone X side profile" },
]

const PHONE_PANELS: PanPanel[] = [
  {
    src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    alt: "UltraPhone X titanium design",
    title: "Premium design",
    description: "Grade 5 titanium — strong, lightweight, corrosion-resistant.",
    eyebrow: "UltraPhone X",
  },
  {
    src: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
    alt: "UltraPhone X camera system",
    title: "Pro camera system",
    description: "48 MP main camera with 5x optical zoom. ProRAW and Log encoding.",
    eyebrow: "UltraPhone X",
  },
  {
    src: "https://images.unsplash.com/photo-1726732946451-98690db97aae?w=800&q=80",
    alt: "UltraPhone X chip",
    title: "Next-gen processor",
    description: "Cutting-edge 3nm chip. Powerful Neural Engine for AI tasks.",
    eyebrow: "UltraPhone X",
  },
]

export default function PhonesPage() {
  return (
    <>
      <PhoneHero />
      <Reveal delay={0.1}>
        <section className="bg-paper px-5 py-[80px]">
          <div className="mx-auto max-w-[980px]">
            <h2 className="mb-6 text-center font-font-heading text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-ink">
              View in detail
            </h2>
            <ProductGallery images={PHONE_GALLERY} productName="UltraPhone X" />
          </div>
        </section>
      </Reveal>
      <Reveal delay={0.1}>
        <PhoneShowcase />
      </Reveal>
      <StickyStack />
      <HorizontalPan panels={PHONE_PANELS} />
      <ScrollParallax offset={30}>
        <Reveal delay={0.1}>
          <ProductLineup />
        </Reveal>
      </ScrollParallax>
    </>
  )
}