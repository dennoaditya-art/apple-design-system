import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LayoutClient } from "@/components/layout-client"
import { CursorGlow } from "@/components/cursor-glow"
import { BackToTop } from "@/components/back-to-top"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Nova Store — Premium Gadgets",
  description: "Discover the latest gadgets, phones, laptops, tablets, and more at Nova Store.",
  icons: {
    icon: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Nova Store",
        description: "Premium gadget store",
        url: "https://nova-store.vercel.app",
      },
      {
        "@type": "WebSite",
        name: "Nova Store",
        url: "https://nova-store.vercel.app",
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} pb-[50px] md:pb-0`}>
        <LayoutClient>{children}</LayoutClient>
        <CursorGlow />
        <BackToTop />
      </body>
    </html>
  )
}
