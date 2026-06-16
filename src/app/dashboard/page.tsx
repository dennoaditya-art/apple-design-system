"use client"

import { StatsCard } from "@/components/dashboard-stats-card"
import { LineChart } from "@/components/dashboard-line-chart"
import { BarChart } from "@/components/dashboard-bar-chart"

const MONTHLY_REVENUE = [
  { label: "Jan", value: 24000 },
  { label: "Feb", value: 31000 },
  { label: "Mar", value: 28000 },
  { label: "Apr", value: 35000 },
  { label: "May", value: 42000 },
  { label: "Jun", value: 38000 },
  { label: "Jul", value: 45000 },
  { label: "Aug", value: 52000 },
]

const WEEKLY_SALES = [
  { label: "Mon", value: 65, color: "#2997ff" },
  { label: "Tue", value: 48, color: "#2997ff" },
  { label: "Wed", value: 72, color: "#2997ff" },
  { label: "Thu", value: 55, color: "#2997ff" },
  { label: "Fri", value: 88, color: "#2997ff" },
  { label: "Sat", value: 94, color: "#2997ff" },
  { label: "Sun", value: 42, color: "#2997ff" },
]

const RECENT_ORDERS = [
  { id: "#ORD-001", customer: "Alice Johnson", product: "iPhone 16 Pro", amount: "$1,199", status: "Completed" as const },
  { id: "#ORD-002", customer: "Bob Smith", product: "MacBook Pro 14\"", amount: "$2,499", status: "Processing" as const },
  { id: "#ORD-003", customer: "Carol Davis", product: "AirPods Pro 2", amount: "$249", status: "Completed" as const },
  { id: "#ORD-004", customer: "David Lee", product: "iPad Pro", amount: "$999", status: "Pending" as const },
  { id: "#ORD-005", customer: "Eve Wilson", product: "Apple Watch Ultra 2", amount: "$799", status: "Completed" as const },
]

const STATUS_STYLES: Record<string, string> = {
  Completed: "bg-green-50 text-green-700 border-green-200",
  Processing: "bg-apple-blue/10 text-apple-blue border-apple-blue/20",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
}

const TOP_PRODUCTS = [
  { name: "iPhone 16 Pro", revenue: "$52,400", units: 44, trend: "up" as const },
  { name: "MacBook Pro 14\"", revenue: "$37,485", units: 15, trend: "up" as const },
  { name: "AirPods Pro 2", revenue: "$12,450", units: 50, trend: "up" as const },
  { name: "iPad Pro", revenue: "$8,991", units: 9, trend: "down" as const },
  { name: "Apple Watch Ultra 2", revenue: "$7,192", units: 9, trend: "up" as const },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$184,250"
          change="+12.5%"
          trend="up"
          index={0}
          icon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 17H17" />
              <path d="M3 13L7 9L10 12L17 5" />
              <path d="M13 5H17V9" />
            </svg>
          }
        />
        <StatsCard
          title="Active Users"
          value="2,847"
          change="+8.2%"
          trend="up"
          index={1}
          icon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="7" cy="5" r="3" />
              <path d="M1 16C1 13 3.5 11 7 11C10.5 11 13 13 13 16" />
              <circle cx="13" cy="6" r="2" />
              <path d="M17 16C17 14 15.5 12.5 13 12" />
            </svg>
          }
        />
        <StatsCard
          title="Total Orders"
          value="1,892"
          change="+23.1%"
          trend="up"
          index={2}
          icon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 5H15L14 16H4L3 5Z" />
              <path d="M6 5V4C6 2.5 7 1 9 1C11 1 12 2.5 12 4V5" />
            </svg>
          }
        />
        <StatsCard
          title="Conversion Rate"
          value="3.42%"
          change="-0.8%"
          trend="down"
          index={3}
          icon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 1V17" />
              <path d="M13 5L9 1L5 5" />
              <path d="M5 13L9 17L13 13" />
            </svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-[12px] bg-paper p-6 shadow-sm lg:col-span-2">
          <h3 className="font-sf-pro-text text-[15px] font-semibold leading-[1.47] text-graphite">Monthly Revenue</h3>
          <p className="mt-0.5 font-sf-pro-text text-[13px] leading-[1.38] text-fog">Total revenue over the last 8 months</p>
          <div className="mt-4">
            <LineChart data={MONTHLY_REVENUE} height={220} />
          </div>
        </div>
        <div className="rounded-[12px] bg-paper p-6 shadow-sm">
          <h3 className="font-sf-pro-text text-[15px] font-semibold leading-[1.47] text-graphite">Weekly Sales</h3>
          <p className="mt-0.5 font-sf-pro-text text-[13px] leading-[1.38] text-fog">Sales by day this week</p>
          <div className="mt-4">
            <BarChart data={WEEKLY_SALES} height={180} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-[12px] bg-paper shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-bone px-6 py-4">
            <h3 className="font-sf-pro-text text-[15px] font-semibold leading-[1.47] text-graphite">Recent Orders</h3>
            <button
              type="button"
              className="font-sf-pro-text text-[13px] font-semibold leading-[1.38] text-apple-blue transition-colors hover:text-deep-link-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
            >
              View all
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-bone">
                  <th className="px-6 py-3 text-left font-sf-pro-text text-[11px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">Order</th>
                  <th className="px-6 py-3 text-left font-sf-pro-text text-[11px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">Customer</th>
                  <th className="px-6 py-3 text-left font-sf-pro-text text-[11px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">Product</th>
                  <th className="px-6 py-3 text-left font-sf-pro-text text-[11px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">Amount</th>
                  <th className="px-6 py-3 text-left font-sf-pro-text text-[11px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">Status</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_ORDERS.map((order) => (
                  <tr key={order.id} className="border-b border-bone/50 last:border-0">
                    <td className="px-6 py-3.5 font-sf-pro-text text-[14px] font-semibold leading-[1.43] text-graphite">{order.id}</td>
                    <td className="px-6 py-3.5 font-sf-pro-text text-[14px] leading-[1.43] text-graphite">{order.customer}</td>
                    <td className="px-6 py-3.5 font-sf-pro-text text-[14px] leading-[1.43] text-fog">{order.product}</td>
                    <td className="px-6 py-3.5 font-sf-pro-text text-[14px] leading-[1.43] text-graphite">{order.amount}</td>
                    <td className="px-6 py-3.5">
                      <span className={`inline-block rounded-[6px] border px-2.5 py-1 font-sf-pro-text text-[11px] font-semibold leading-[1.33] ${STATUS_STYLES[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[12px] bg-paper shadow-sm">
          <div className="border-b border-bone px-6 py-4">
            <h3 className="font-sf-pro-text text-[15px] font-semibold leading-[1.47] text-graphite">Top Products</h3>
          </div>
          <div className="divide-y divide-bone/50">
            {TOP_PRODUCTS.map((product) => (
              <div key={product.name} className="flex items-center justify-between px-6 py-3.5">
                <div>
                  <p className="font-sf-pro-text text-[14px] font-semibold leading-[1.43] text-graphite">{product.name}</p>
                  <p className="font-sf-pro-text text-[12px] leading-[1.33] text-fog">{product.units} units sold</p>
                </div>
                <div className="text-right">
                  <p className="font-sf-pro-text text-[14px] font-semibold leading-[1.43] text-graphite">{product.revenue}</p>
                  <span className={`font-sf-pro-text text-[11px] font-semibold leading-[1.33] ${product.trend === "up" ? "text-green-600" : "text-red-500"}`}>
                    {product.trend === "up" ? "↑" : "↓"} {(product.units * 0.03 + 2).toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
