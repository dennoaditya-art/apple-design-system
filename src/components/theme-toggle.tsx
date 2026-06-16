"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/lib/theme-context"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex items-center opacity-0 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="flex items-center transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
    >
      {theme === "light" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 1V2M8 14V15M2 8H1M15 8H14M3.5 3.5L4.5 4.5M11.5 11.5L12.5 12.5M3.5 12.5L4.5 11.5M11.5 4.5L12.5 3.5" />
          <circle cx="8" cy="8" r="3" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13.5 10.5A6.5 6.5 0 0 1 5.5 2.5 6.5 6.5 0 1 0 13.5 10.5Z" />
        </svg>
      )}
    </button>
  )
}
