"use client"

import { useState } from "react"

const QUICK_LINKS = ["iPhone 16 Pro", "MacBook Pro", "iPad Air", "Apple Watch", "AirPods Pro"]

export function SearchPanel() {
  const [query, setQuery] = useState("")

  return (
    <div>
      <div className="relative">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-fog"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="5.5" />
          <path d="M12 12L15.5 15.5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-[10px] border border-bone bg-cloud py-3 pl-10 pr-4 font-sf-pro-text text-[15px] text-graphite outline-none transition-colors placeholder:text-fog focus:border-apple-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
          aria-label="Search products"
        />
      </div>

      {query ? (
        <p className="mt-6 font-sf-pro-text text-[14px] font-light leading-[1.43] text-fog">
          No results for &ldquo;{query}&rdquo;
        </p>
      ) : (
        <div className="mt-8">
          <h3 className="mb-3 font-sf-pro-text text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">
            Quick links
          </h3>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => setQuery(link)}
                  className="w-full rounded-[8px] px-3 py-2 text-left font-sf-pro-text text-[15px] text-graphite transition-colors hover:bg-cloud focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
