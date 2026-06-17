import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { MacBookHero } from "@/components/macbook-hero"
import { ProductSpecGrid } from "@/components/product-spec-grid"
import { ProductGallery } from "@/components/product-gallery"
import { ColoredProductSection } from "@/components/colored-product-section"
import { FooterSection } from "@/components/footer-section"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

const MAC_GALLERY = [
  { src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80", alt: "MacBook Pro with M4 Max on desk" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80", alt: "MacBook Pro open showing Liquid Retina display" },
  { src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80", alt: "MacBook Pro angled view highlighting Space Black finish" },
]

export default function MacPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <MacBookHero as="h1" />
        <Reveal delay={0.1}>
          <section className="bg-paper px-5 py-[80px]">
            <div className="mx-auto max-w-[980px]">
              <h2 className="mb-6 text-center font-sf-pro-display text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-graphite">
                View in detail
              </h2>
              <ProductGallery images={MAC_GALLERY} productName="MacBook Pro" />
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
      </main>
      <FooterSection />
    </>
  )
}
