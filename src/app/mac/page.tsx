import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { LaptopHero } from "@/components/laptop-hero"
import { ProductSpecGrid } from "@/components/product-spec-grid"
import { ProductGallery } from "@/components/product-gallery"
import { HorizontalPan } from "@/components/horizontal-pan"
import type { PanPanel } from "@/components/horizontal-pan"
import { ColoredProductSection } from "@/components/colored-product-section"
import { FooterSection } from "@/components/footer-section"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

const LAPTOP_GALLERY = [
  { src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80", alt: "Laptop Pro on desk" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80", alt: "Laptop Pro open display" },
  { src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80", alt: "Laptop Pro angled view" },
]

const LAPTOP_PANELS: PanPanel[] = [
  {
    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    alt: "Laptop Pro chip",
    title: "Pro Chip",
    description: "Up to 16-core CPU and 40-core GPU. Pro performance beyond imagination.",
    eyebrow: "Laptop Pro",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    alt: "Laptop Pro display",
    title: "Pro Display XDR",
    description: "Extreme dynamic range with 1600 nits peak brightness. Pro reference modes.",
    eyebrow: "Laptop Pro",
  },
  {
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    alt: "Laptop Pro battery",
    title: "All-day battery",
    description: "Up to 24 hours. The most power-efficient pro laptop ever.",
    eyebrow: "Laptop Pro",
  },
]

export default function LaptopPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <LaptopHero as="h1" />
        <Reveal delay={0.1}>
          <section className="bg-paper px-5 py-[80px]">
            <div className="mx-auto max-w-[980px]">
              <h2 className="mb-6 text-center font-font-heading text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-ink">
                View in detail
              </h2>
              <ProductGallery images={LAPTOP_GALLERY} productName="Laptop Pro" />
            </div>
          </section>
        </Reveal>
        <ScrollParallax offset={30}>
          <Reveal delay={0.1}>
            <ProductSpecGrid />
          </Reveal>
        </ScrollParallax>
        <ScrollParallax offset={20} opacityRange={[0.85, 0.85]}>
          <Reveal delay={0.1}>
            <ColoredProductSection />
          </Reveal>
        </ScrollParallax>

        <HorizontalPan panels={LAPTOP_PANELS} bgClass="bg-ink" />
      </main>
      <FooterSection />
    </>
  )
}
