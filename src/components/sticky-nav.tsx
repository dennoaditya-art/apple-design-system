"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useCallback, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SlidePanel } from "@/components/slide-panel"
import { SearchPanel } from "@/components/search-panel"
import { BagPanel } from "@/components/bag-panel"

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
]

export function StickyNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [bagOpen, setBagOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

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

  useEffect(() => {
    if (!menuOpen) return

    const panel = menuRef.current
    if (!panel) return

    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length > 0) {
      focusable[0].focus()
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMenu()
        return
      }

      if (e.key !== "Tab") return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen, closeMenu])

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
                className={`px-2 font-normal leading-[1.33] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${isActive ? "text-graphite" : "text-graphite/70"}`}
              >
                <span className="relative">
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-[13px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-graphite"
                    />
                  )}
                </span>
              </Link>
            )
          })}
        </motion.div>

        <div className="flex items-center gap-5">
          <button aria-label="Search" onClick={() => setSearchOpen(true)} className="transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue">
            <motion.svg
              width="16"
              height="44"
              viewBox="0 0 16 44"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              style={{ scale: iconScale, transformOrigin: "center" }}
            >
              <circle cx="7" cy="14" r="5.5" />
              <path d="M11 18L14 21" strokeLinecap="round" />
            </motion.svg>
          </button>
          <button aria-label="Bag" onClick={() => setBagOpen(true)} className="transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue">
            <motion.svg
              width="16"
              height="44"
              viewBox="0 0 16 44"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              style={{ scale: iconScale, transformOrigin: "center" }}
            >
              <path d="M4 14V10C4 7.8 5.5 6 8 6C10.5 6 12 7.8 12 10V14" strokeLinecap="round" />
              <rect x="2" y="14" width="12" height="12" rx="1.5" />
            </motion.svg>
          </button>
          <button
            ref={hamburgerRef}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-panel"
            className="flex items-center md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              style={{ scale: iconScale, transformOrigin: "center" }}
            >
              {menuOpen ? (
                <path d="M4 4L14 14M14 4L4 14" strokeLinecap="round" />
              ) : (
                <path d="M2 4H16M2 9H16M2 14H16" strokeLinecap="round" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden" onClick={closeMenu} aria-hidden="true" />
          <div
            ref={menuRef}
            id="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
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
          </div>
        </>
      )}
      <SlidePanel open={searchOpen} onClose={() => setSearchOpen(false)} title="Search">
        <SearchPanel />
      </SlidePanel>
      <SlidePanel open={bagOpen} onClose={() => setBagOpen(false)} title="Bag">
        <BagPanel />
      </SlidePanel>
    </motion.nav>
  )
}
