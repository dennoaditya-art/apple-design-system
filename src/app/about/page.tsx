import { StickyNav } from "@/components/sticky-nav"
import { FooterSection } from "@/components/footer-section"
import type { Metadata } from "next"
import { TopNotificationBar } from "@/components/top-notification-bar"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Nova Store — our mission, values, and passion for delivering premium technology experiences.",
  openGraph: { title: "About | Nova Store", description: "Learn about Nova Store and our mission." },
}
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"

export default function AboutPage() {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main className="pb-[120px]">
        <AboutHero />
        <AboutStory />
      </main>
      <FooterSection />
    </>
  )
}
