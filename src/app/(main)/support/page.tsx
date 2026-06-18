import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support",
  description: "Get help and support for Nova Store products. Browse FAQs, guides, and contact our support team.",
  openGraph: { title: "Support | Nova Store", description: "Get help and support for Nova Store products." },
}
import { SupportHero } from "@/components/support-hero"
import { FaqAccordion } from "@/components/faq-accordion"

export default function SupportPage() {
  return (
    <>
      <SupportHero />
      <FaqAccordion />
    </>
  )
}