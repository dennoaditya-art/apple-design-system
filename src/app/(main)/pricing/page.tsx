import type { Metadata } from "next"

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
      <PricingHero />
      <PricingCards />
    </>
  )
}