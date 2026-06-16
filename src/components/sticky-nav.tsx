"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useCallback, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SlidePanel } from "@/components/slide-panel"
import { SearchPanel } from "@/components/search-panel"
import { BagPanel } from "@/components/bag-panel"
import { ThemeToggle } from "@/components/theme-toggle"
import { useCart } from "@/lib/cart-context"
import { springs } from "@/lib/motion"
import { useFocusTrap } from "@/hooks"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: "Store", href: "/store" },
  { label: "Mac", href: "/mac" },
  { label: "iPad", href: "/ipad" },
  { label: "iPhone", href: "/iphone" },
  { label: "Watch", href: "/watch" },
  { label: "Vision", href: "/store" },
  { label: "AirPods", href: "/airpods" },
  { label: "TV & Home", href: "/tv" },
  { label: "Studio", href: "/studio" },
  { label: "Labs", href: "/labs" },
]

export function StickyNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [bagOpen, setBagOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const { itemCount } = useCart()

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    hamburgerRef.current?.focus()
  }, [])

  const { scrollY } = useScroll()
  const navHeight = useTransform(scrollY, [0, 80], [44, 36])
  const bgOpacity = useTransform(scrollY, [0, 80], [0.8, 0.95])
  const iconScale = useTransform(scrollY, [0, 80], [1, 0.82])
  const fontSize = useTransform(scrollY, [0, 80], [12, 11])
  const borderAlpha = useTransform(scrollY, [0, 80], [0, 0.08])

  useFocusTrap({ ref: menuRef, active: menuOpen, onEscape: closeMenu })

  return (
    <motion.nav
      style={{ height: navHeight }}
      className="sticky top-0 z-50 backdrop-blur-xl"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-[rgba(251,251,253,1)]"
      />
      <motion.div
        style={{ opacity: borderAlpha }}
        className="absolute inset-x-0 bottom-0 h-[1px] bg-graphite"
      />
      <div className="relative mx-auto flex h-full max-w-[980px] items-center justify-between px-5 text-graphite">
        <Link href="/" aria-label="Apple" className="flex-shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue">
          <motion.svg
            width="16"
            height="44"
            viewBox="0 0 16 44"
            fill="currentColor"
            aria-hidden="true"
            style={{ scale: iconScale, transformOrigin: "center" }}
          >
            <path d="M13.5 16.5c-1.5 0-2.5.8-3.5 2.4-1 1.6-1.1 3.1-1.1 4.1 0 1.5 1 3.7 2.2 3.7.2 0 .6-.1 1-.4.5-.3 1-.5 1.4-.5.4 0 .9.2 1.4.5.4.3.8.4 1 .4 1.2 0 2.2-2.2 2.2-3.7 0-.6-.1-1.8-.9-2.9-.8-1.1-1.7-1.6-2.6-1.6-.1 0-.2 0-.2.1m-2.1-1.7c.1-1.2.6-2.2 1.4-3.1.8-.8 1.7-1.3 2.7-1.4-.1 1.2-.5 2.1-1.3 3-.8.8-1.8 1.3-2.8 1.5" />
          </motion.svg>
        </Link>

        <motion.div
          className="hidden items-center md:flex"
          style={{ fontSize: fontSize }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-2 font-normal leading-[1.33] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${isActive ? "text-graphite" : "text-graphite/70"}`}
              >
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={springs.snappy}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-[13px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-graphite"
                    />
                  )}
                </motion.span>
              </Link>
            )
          })}
        </motion.div>

        <div className="flex items-center gap-2 md:gap-5">
          <ThemeToggle />
          <button aria-label="Search" onClick={() => setSearchOpen(true)} className="flex items-center justify-center transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue min-h-[44px] min-w-[44px]">
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
              style={{ scale: iconScale }}
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M16 16L21 21" />
            </motion.svg>
          </button>
          <button aria-label="Bag" onClick={() => setBagOpen(true)} className="relative flex items-center justify-center transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue min-h-[44px] min-w-[44px]">
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={springs.snappy}
                className="absolute -right-0 top-0 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-button-blue px-1 font-sf-pro-text text-[10px] font-semibold leading-none text-paper"
              >
                {itemCount}
              </motion.span>
            )}
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ scale: iconScale }}
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </motion.svg>
          </button>
          <button
            ref={hamburgerRef}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-panel"
            className="flex items-center justify-center md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue min-h-[44px] min-w-[44px]"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={springs.snappy}
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <motion.div
            ref={menuRef}
            id="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-[44px] z-50 flex h-[calc(100vh-44px)] w-72 flex-col bg-paper shadow-xl md:hidden"
          >
            <div className="flex-1 overflow-y-auto py-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                    className={`block px-6 py-3 font-sf-pro-text text-[17px] transition-colors hover:bg-cloud focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${isActive ? "font-semibold text-graphite" : "font-normal text-graphite/70"}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </>
      )}
      <SlidePanel open={searchOpen} onClose={() => setSearchOpen(false)} title="Search">
        <SearchPanel onClose={() => setSearchOpen(false)} />
      </SlidePanel>
      <SlidePanel open={bagOpen} onClose={() => setBagOpen(false)} title="Bag">
        <BagPanel />
      </SlidePanel>
      <MobileBottomNav />
    </motion.nav>
  )
}
