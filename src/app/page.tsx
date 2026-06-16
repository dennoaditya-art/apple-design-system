import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { IPhoneHero } from "@/components/iphone-hero"
import { MacBookHero } from "@/components/macbook-hero"
import { IPhoneShowcase } from "@/components/iphone-showcase"
import { ProductLineup } from "@/components/product-lineup"
import { ColoredProductSection } from "@/components/colored-product-section"
import { FeaturedMediaCard } from "@/components/featured-media-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
import { PillButton } from "@/components/pill-button"
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

        <section className="flex flex-col items-center justify-center bg-paper px-5 py-[80px] text-center">
          <h2 className="font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
            Apple at Work
          </h2>
          <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
            Everything you need to get more done.
          </p>
          <div className="mt-5">
            <PillButton variant="filled" href="/store">Learn more</PillButton>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
