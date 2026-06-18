"use client"

import type { ReactNode } from "react"
import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { FooterSection } from "@/components/footer-section"

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopNotificationBar />
      <StickyNav />
      <main>{children}</main>
      <FooterSection />
    </>
  )
}