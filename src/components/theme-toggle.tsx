"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { springs } from "@/lib/motion"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex items-center justify-center p-2 opacity-0 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue min-h-[44px] min-w-[44px]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" />
      </button>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center p-2 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue min-h-[44px] min-w-[44px]"
    >
      {prefersReduced ? (
        isDark ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )
      ) : (
        <AnimatePresence mode="wait">
          <motion.svg
            key={isDark ? "moon" : "sun"}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={springs.snappy}
          >
            {isDark ? (
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            ) : (
              <circle cx="12" cy="12" r="5" />
            )}
            {!isDark && (
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            )}
          </motion.svg>
        </AnimatePresence>
      )}
    </button>
  )
}
