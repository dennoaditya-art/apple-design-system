import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { LayoutClient } from "@/components/layout-client"
import { CursorGlow } from "@/components/cursor-glow"
import { BackToTop } from "@/components/back-to-top"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Apple Design System",
  description: "A reference implementation of the Apple design system",
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
        name: "Apple Design System",
        description: "A reference implementation of the Apple design system",
        url: "https://apple-design-system.vercel.app",
      },
      {
        "@type": "WebSite",
        name: "Apple Design System",
        url: "https://apple-design-system.vercel.app",
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
      <body className={`${inter.variable} pb-[50px] md:pb-0`}>
        <LayoutClient>{children}</LayoutClient>
        <CursorGlow />
        <BackToTop />
      </body>
    </html>
  )
}
