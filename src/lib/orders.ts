export interface Order {
  id: string
  customer: string
  product: string
  amount: string
  status: "Completed" | "Processing" | "Pending"
  date?: string
}

export const STATUS_STYLES: Record<Order["status"], string> = {
  Completed: "bg-green-50 text-green-700 border-green-200",
  Processing: "bg-accent/10 text-accent border-accent/20",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
}
