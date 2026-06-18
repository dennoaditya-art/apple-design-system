"use client"

export default function CustomersPage() {
  const CUSTOMERS = [
    { name: "Alice Johnson", email: "alice@example.com", orders: 12, spent: "$14,388", status: "Active" as const },
    { name: "Bob Smith", email: "bob@example.com", orders: 8, spent: "$9,992", status: "Active" as const },
    { name: "Carol Davis", email: "carol@example.com", orders: 5, spent: "$3,745", status: "Active" as const },
    { name: "David Lee", email: "david@example.com", orders: 3, spent: "$2,247", status: "Inactive" as const },
    { name: "Eve Wilson", email: "eve@example.com", orders: 15, spent: "$21,485", status: "Active" as const },
  ]

  return (
    <div className="rounded-xl bg-paper shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-silver">
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Name</th>
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Email</th>
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Orders</th>
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Total Spent</th>
              <th className="px-6 py-3 text-left font-font-body text-[11px] font-semibold uppercase tracking-[0.08px] text-graphite">Status</th>
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS.map((c) => (
              <tr key={c.email} className="border-b border-silver/50 last:border-0">
                <td className="px-6 py-3.5 font-font-body text-[14px] font-semibold text-ink">{c.name}</td>
                <td className="px-6 py-3.5 font-font-body text-[14px] text-graphite">{c.email}</td>
                <td className="px-6 py-3.5 font-font-body text-[14px] text-ink">{c.orders}</td>
                <td className="px-6 py-3.5 font-font-body text-[14px] text-ink">{c.spent}</td>
                <td className="px-6 py-3.5">
                  <span className={`inline-block rounded-sm border px-2.5 py-1 font-font-body text-[11px] font-semibold leading-[1.33] ${c.status === "Active" ? "bg-green-50 text-green-700 border-green-200" : "bg-gray-50 text-gray-500 border-gray-200"}`}>
                    {c.status}
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
