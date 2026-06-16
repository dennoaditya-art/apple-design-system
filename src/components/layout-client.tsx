"use client"

import { CartProvider } from "@/lib/cart-context"
import { ThemeProvider } from "@/lib/theme-context"
import { ToastProvider } from "@/components/toast"
import { PageTransition } from "@/components/page-transition"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CartProvider>
        <ToastProvider>
          <PageTransition>{children}</PageTransition>
        </ToastProvider>
      </CartProvider>
    </ThemeProvider>
  )
}
