import { StickyNav } from "@/components/sticky-nav"
import { FooterSection } from "@/components/footer-section"
import { TopNotificationBar } from "@/components/top-notification-bar"
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
