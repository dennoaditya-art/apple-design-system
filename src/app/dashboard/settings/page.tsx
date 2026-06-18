"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [analytics, setAnalytics] = useState(true)

  return (
    <div className="max-w-2xl space-y-6">
      <div className="rounded-xl bg-paper p-6 shadow-sm">
        <h3 className="font-font-body text-[15px] font-semibold text-ink">Notifications</h3>
        <p className="mt-0.5 font-font-body text-[13px] text-graphite">Manage your email and push notification preferences.</p>
        <div className="mt-4 space-y-4">
          <label className="flex items-center justify-between rounded-lg bg-fog px-4 py-3">
            <span className="font-font-body text-[14px] text-ink">Order updates</span>
            <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} className="h-[18px] w-[18px] rounded-xs border-2 border-silver bg-fog checked:border-accent-solid checked:bg-accent-solid" />
          </label>
          <label className="flex items-center justify-between rounded-lg bg-fog px-4 py-3">
            <span className="font-font-body text-[14px] text-ink">Analytics reports</span>
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="h-[18px] w-[18px] rounded-xs border-2 border-silver bg-fog checked:border-accent-solid checked:bg-accent-solid" />
          </label>
        </div>
      </div>
      <div className="rounded-xl bg-paper p-6 shadow-sm">
        <h3 className="font-font-body text-[15px] font-semibold text-ink">Store Settings</h3>
        <p className="mt-0.5 font-font-body text-[13px] text-graphite">Configure your store details.</p>
        <div className="mt-4 space-y-3">
          <div>
            <label className="font-font-body text-[13px] font-semibold text-ink">Store name</label>
            <input type="text" defaultValue="Nova Store" className="mt-1 w-full rounded-lg border border-silver bg-fog px-4 py-2.5 font-font-body text-[14px] text-ink outline-none focus:border-accent" />
          </div>
          <div>
            <label className="font-font-body text-[13px] font-semibold text-ink">Currency</label>
            <select className="mt-1 w-full rounded-lg border border-silver bg-fog px-4 py-2.5 font-font-body text-[14px] text-ink outline-none focus:border-accent">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>IDR (Rp)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
