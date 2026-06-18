import { StickyNav } from "@/components/sticky-nav"
import { FooterSection } from "@/components/footer-section"
import { TopNotificationBar } from "@/components/top-notification-bar"
import { SupportHero } from "@/components/support-hero"
import { FaqAccordion } from "@/components/faq-accordion"

export default function SupportPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main className="pb-[120px]">
        <SupportHero />
        <FaqAccordion />
      </main>
      <FooterSection />
    </>
  )
}
