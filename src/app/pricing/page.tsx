import { StickyNav } from "@/components/sticky-nav"
import { FooterSection } from "@/components/footer-section"
import { TopNotificationBar } from "@/components/top-notification-bar"
import { PricingHero } from "@/components/pricing-hero"
import { PricingCards } from "@/components/pricing-cards"

export default function PricingPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main className="pb-[120px]">
        <PricingHero />
        <PricingCards />
      </main>
      <FooterSection />
    </>
  )
}
