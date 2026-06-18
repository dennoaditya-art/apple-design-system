"use client"

import { STATUS_STYLES } from "@/lib/orders"

export default function OrdersPage() {
  const ORDERS = [
    { id: "#ORD-001", customer: "Alice Johnson", product: "UltraPhone X", amount: "$1,199", date: "12 Jun 2026", status: "Completed" as const },
    { id: "#ORD-002", customer: "Bob Smith", product: "Laptop Pro 14\"", amount: "$2,499", date: "11 Jun 2026", status: "Processing" as const },
    { id: "#ORD-003", customer: "Carol Davis", product: "Earbuds Pro 2", amount: "$249", date: "10 Jun 2026", status: "Completed" as const },
    { id: "#ORD-004", customer: "David Lee", product: "Tablet Pro", amount: "$999", date: "09 Jun 2026", status: "Pending" as const },
    { id: "#ORD-005", customer: "Eve Wilson", product: "Watch Ultra 2", amount: "$799", date: "08 Jun 2026", status: "Completed" as const },
    { id: "#ORD-006", customer: "Frank Brown", product: "UltraPhone X Plus", amount: "$1,399", date: "07 Jun 2026", status: "Processing" as const },
    { id: "#ORD-007", customer: "Grace Kim", product: "Laptop Air", amount: "$1,099", date: "06 Jun 2026", status: "Completed" as const },
  ]

  return (
    <div className="rounded-xl bg-paper shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-silver">
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Order</th>
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Customer</th>
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Product</th>
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Amount</th>
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Date</th>
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Status</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((order) => (
              <tr key={order.id} className="border-b border-silver/50 last:border-0">
                <td className="px-6 py-3.5 font-font-body text-[14px] font-semibold text-ink">{order.id}</td>
                <td className="px-6 py-3.5 font-font-body text-[14px] text-ink">{order.customer}</td>
                <td className="px-6 py-3.5 font-font-body text-[14px] text-graphite">{order.product}</td>
                <td className="px-6 py-3.5 font-font-body text-[14px] text-ink">{order.amount}</td>
                <td className="px-6 py-3.5 font-font-body text-[14px] text-graphite">{order.date}</td>
                <td className="px-6 py-3.5">
                  <span className={`inline-block rounded-sm border px-2.5 py-1 font-font-body text-[11px] font-semibold leading-[1.33] ${STATUS_STYLES[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
