"use client"

import { CartProvider } from "@/lib/cart-context"
import { PageTransition } from "@/components/page-transition"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <PageTransition>{children}</PageTransition>
    </CartProvider>
  )
}
