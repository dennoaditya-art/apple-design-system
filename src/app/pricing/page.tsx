import { StickyNav } from "@/components/sticky-nav"
import { FooterSection } from "@/components/footer-section"
import type { Metadata } from "next"
import { TopNotificationBar } from "@/components/top-notification-bar"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose the right Nova Store plan for your needs. Free tier available, Pro for power users.",
  openGraph: { title: "Pricing | Nova Store", description: "Choose the right Nova Store plan." },
}
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
