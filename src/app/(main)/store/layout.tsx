import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Store",
  description: "Browse and shop the latest gadgets, phones, laptops, tablets, and accessories at Nova Store.",
  openGraph: { title: "Store | Nova Store", description: "Browse and shop the latest gadgets at Nova Store." },
}

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}