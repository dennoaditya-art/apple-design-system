"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { springs } from "@/lib/motion"

const BOTTOM_LINKS = [
  { label: "Store", href: "/store", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
  { label: "Mac", href: "/mac", icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m0 0h16" },
  { label: "iPad", href: "/ipad", icon: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { label: "iPhone", href: "/iphone", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { label: "Watch", href: "/watch", icon: "M12 8V4m0 4a4 4 0 110 8 4 4 0 010-8z" },
]

export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-graphite/10 bg-paper/95 backdrop-blur-xl md:hidden"
      style={{ height: "50px", paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Main navigation"
    >
      {BOTTOM_LINKS.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/store" && pathname.startsWith(link.href))
        return (
          <Link
            key={link.label}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className="relative flex flex-col items-center justify-center gap-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
            style={{ width: "56px", height: "44px" }}
          >
            {isActive && (
              <motion.span
                layoutId="mobile-nav-active"
                className="absolute -top-0.5 left-1/2 h-[3px] w-[20px] -translate-x-1/2 rounded-full bg-graphite"
                transition={springs.snappy}
              />
            )}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isActive ? "text-graphite" : "text-steel"}
              aria-hidden="true"
            >
              <path d={link.icon} />
            </svg>
            <span className={`font-sf-pro-text text-[9px] leading-none ${isActive ? "font-semibold text-graphite" : "font-normal text-steel"}`}>
              {link.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
