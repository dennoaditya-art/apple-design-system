"use client"

import { StatsCard } from "@/components/dashboard-stats-card"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard title="Page Views" value="84,291" change="+15.3%" trend="up" index={0} icon={
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <rect x="1" y="1" width="16" height="16" rx="2" /><path d="M1 6H17" />
          </svg>
        } />
        <StatsCard title="Bounce Rate" value="32.1%" change="-2.4%" trend="up" index={1} icon={
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M1 17L6 10L10 13L17 1" /><path d="M13 1H17V5" />
          </svg>
        } />
        <StatsCard title="Avg. Session" value="4m 32s" change="+8.7%" trend="up" index={2} icon={
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <circle cx="9" cy="9" r="7" /><path d="M9 5V9L12 11" />
          </svg>
        } />
      </div>
      <div className="rounded-xl bg-paper p-8 shadow-sm text-center">
        <p className="font-font-body text-[15px] text-graphite">Detailed analytics coming soon.</p>
      </div>
    </div>
  )
}
