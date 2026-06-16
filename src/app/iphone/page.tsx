import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { IPhoneHero } from "@/components/iphone-hero"
import { IPhoneShowcase } from "@/components/iphone-showcase"
import { ProductLineup } from "@/components/product-lineup"
import { ProductGallery } from "@/components/product-gallery"
import { FooterSection } from "@/components/footer-section"
import { Reveal } from "@/components/reveal"
import { ScrollParallax } from "@/components/scroll-parallax"

const IPHONE_GALLERY = [
  { src: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80", alt: "iPhone 16 Pro front view in natural lighting" },
  { src: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80", alt: "iPhone 16 Pro angle view showing titanium frame" },
  { src: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80", alt: "iPhone 16 Pro side profile" },
]

export default function IPhonePage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>
        <IPhoneHero />
        <Reveal delay={0.1}>
          <section className="bg-paper px-5 py-[80px]">
            <div className="mx-auto max-w-[980px]">
              <h2 className="mb-6 text-center font-sf-pro-display text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-graphite">
                View in detail
              </h2>
              <ProductGallery images={IPHONE_GALLERY} productName="iPhone 16 Pro" />
            </div>
          </section>
        </Reveal>
        <Reveal delay={0.1}>
          <IPhoneShowcase />
        </Reveal>
        <ScrollParallax offset={30}>
          <Reveal delay={0.1}>
            <ProductLineup />
          </Reveal>
        </ScrollParallax>
      </main>
      <FooterSection />
    </>
  )
}
