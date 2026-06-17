"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const SIDEBAR_LINKS = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="1" width="7" height="7" rx="1.5" />
        <rect x="10" y="1" width="7" height="4" rx="1.5" />
        <rect x="10" y="7" width="7" height="10" rx="1.5" />
        <rect x="1" y="10" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 17L6 10L10 13L17 1" />
        <path d="M13 1H17V5" />
      </svg>
    ),
  },
  {
    label: "Orders",
    href: "/dashboard/orders",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 5H15L14 16H4L3 5Z" />
        <path d="M6 5V4C6 2.5 7 1 9 1C11 1 12 2.5 12 4V5" />
      </svg>
    ),
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="7" cy="5" r="3" />
        <circle cx="14" cy="6" r="2" />
        <path d="M1 16C1 13 3.5 11 7 11C10.5 11 13 13 13 16" />
        <path d="M12 12C14.5 12 17 14 17 16" />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="9" r="2.5" />
        <path d="M9 1V3M9 15V17M1 9H3M15 9H17M3.5 3.5L5 5M13 13L14.5 14.5M3.5 14.5L5 13M13 5L14.5 3.5" />
      </svg>
    ),
  },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-[100dvh] bg-cloud">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 border-r border-bone bg-paper transition-transform md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[60px] items-center gap-3 border-b border-bone px-5">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-apple-blue text-paper">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                  <rect x="1" y="1" width="5" height="5" rx="1" />
                  <rect x="8" y="1" width="5" height="5" rx="1" />
                  <rect x="1" y="8" width="5" height="5" rx="1" />
                  <rect x="8" y="8" width="5" height="5" rx="1" />
                </svg>
              </div>
              <span className="font-sf-pro-display text-[17px] font-semibold leading-[1.24] tracking-[-0.3px] text-graphite">
                Dashboard
              </span>
            </Link>
          </div>
          <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Dashboard navigation">
            {SIDEBAR_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 font-sf-pro-text text-[14px] leading-[1.43] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${
                    isActive
                      ? "bg-cloud font-semibold text-graphite"
                      : "text-fog hover:bg-cloud/50 hover:text-graphite"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <div className="border-t border-bone p-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 font-sf-pro-text text-[13px] leading-[1.38] text-fog transition-colors hover:bg-cloud hover:text-graphite"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 7H13M7 1V13" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="flex flex-1 flex-col">
        <header className="flex h-[60px] items-center gap-4 border-b border-bone bg-paper px-6">
          <button
            type="button"
            aria-label="Toggle sidebar"
            onClick={() => setSidebarOpen((v) => !v)}
            className="p-3 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M3 5H17M3 10H17M3 15H17" />
            </svg>
          </button>
          <div className="flex flex-1 items-center justify-between">
            <h1 className="font-sf-pro-display text-[20px] font-semibold leading-[1.2] tracking-[-0.3px] text-graphite">
              Overview
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-fog">
                  <circle cx="7" cy="7" r="4.5" />
                  <path d="M10.5 10.5L14 14" />
                </svg>
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-[200px] rounded-md bg-cloud py-2 pl-9 pr-3 font-sf-pro-text text-[13px] text-graphite outline-none placeholder:text-fog focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
                  aria-label="Search dashboard"
                />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cloud text-fog" aria-label="Notifications">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 1C5.5 1 4 3.5 4 5.5V8L2.5 11H13.5L12 8V5.5C12 3.5 10.5 1 8 1Z" />
                  <path d="M6 11C6 12 7 13 8 13C9 13 10 12 10 11" />
                </svg>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-apple-blue text-[12px] font-semibold text-paper" aria-label="Profile">
                A
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
