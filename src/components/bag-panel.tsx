"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"

export function BagPanel() {
  const { items, removeItem, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-bone"
          aria-hidden="true"
        >
          <path d="M12 24V16C12 11 16 7 24 7C32 7 36 11 36 16V24" strokeLinecap="round" />
          <rect x="6" y="24" width="36" height="18" rx="3" />
        </svg>
        <h3 className="mt-4 font-font-body text-[17px] font-semibold leading-[1.47] tracking-[-0.05px] text-ink">
          Your bag is empty.
        </h3>
        <p className="mt-1 font-font-body text-[14px] font-light leading-[1.43] text-graphite">
          Add products to your bag to get started.
        </p>
        <Link
          href="/store"
          className="mt-6 inline-block rounded-full bg-accent-solid px-[15px] py-[8px] font-font-body text-[14px] leading-[1.47] text-paper transition-colors hover:bg-accent-dark"
        >
          Start shopping
        </Link>
      </div>
    )
  }

  const total = items.reduce((sum, i) => sum + parseFloat(i.product.price.replace(/[$,]/g, "")) * i.quantity, 0)

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-3">
        {items.map((item) => (
          <div key={item.product.id} className="flex gap-3 rounded-md bg-fog p-3">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-paper">
              <Image
                src={item.product.imageSrc}
                alt={item.product.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-font-body text-[14px] font-semibold leading-[1.43] text-ink">
                {item.product.name}
              </p>
              <p className="font-font-body text-[12px] font-light leading-[1.33] text-graphite">
                {item.product.price}
              </p>
              <div className="mt-1 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => removeItem(item.product.id)}
                  aria-label={`Remove one ${item.product.name}`}
                  className="font-font-body text-[12px] leading-[1.33] text-accent transition-colors hover:text-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Remove
                </button>
                <span className="font-font-body text-[12px] leading-[1.33] text-graphite">
                  Qty: {item.quantity}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-silver pt-4">
        <div className="flex items-center justify-between">
          <p className="font-font-body text-[15px] font-semibold leading-[1.24] text-ink">
            Total
          </p>
          <p className="font-font-body text-[15px] font-semibold leading-[1.24] text-ink">
            ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </p>
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-full bg-accent-solid px-[15px] py-[8px] font-font-body text-[14px] leading-[1.47] text-paper transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Checkout
        </button>
        <button
          type="button"
          onClick={clearCart}
          className="mt-2 w-full text-center font-font-body text-[12px] leading-[1.33] text-graphite transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Clear bag
        </button>
      </div>
    </div>
  )
}
BagPanel.displayName = "BagPanel"
