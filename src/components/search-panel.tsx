"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { PRODUCTS } from "@/lib/products"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

export function SearchPanel({ onClose }: { onClose?: () => void }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const { addItem } = useCart()

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    setResults(
      PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    )
  }, [query])

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
          className="absolute left-3 top-1/2 -translate-y-1/2 text-graphite"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="5.5" />
          <path d="M12 12L15.5 15.5" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${PRODUCTS.length} products...`}
          className="w-full rounded-lg border border-silver bg-fog py-3 pl-10 pr-4 font-font-body text-[15px] text-ink outline-none transition-colors placeholder:text-graphite focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Search products"
        />
      </div>

      {query && results.length === 0 && (
        <p className="mt-6 font-font-body text-[14px] font-light leading-[1.43] text-graphite">
          No results for &ldquo;{query}&rdquo;
        </p>
      )}

      {results.length > 0 && (
        <ul className="mt-4 space-y-2">
          {results.slice(0, 6).map((product) => (
            <li key={product.id}>
              <Link
                href={`/${product.category}`}
                onClick={onClose}
                className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-fog focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm bg-fog">
                  <Image
                    src={product.imageSrc}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-font-body text-[14px] font-semibold leading-[1.43] text-ink">
                    {product.name}
                  </p>
                  <p className="truncate font-font-body text-[12px] font-light leading-[1.33] text-graphite">
                    {product.price}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    addItem(product)
                  }}
                  aria-label={`Add ${product.name} to bag`}
                  className="shrink-0 rounded-full bg-accent-solid px-3 py-1 font-font-body text-[12px] leading-[1.33] text-paper transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Add
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {!query && (
        <div className="mt-8">
          <h3 className="mb-3 font-font-body text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-graphite">
            Popular products
          </h3>
          <div className="space-y-2">
            {PRODUCTS.slice(0, 5).map((product) => (
              <Link
                key={product.id}
                href={`/${product.category}`}
                onClick={onClose}
                className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-fog focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm bg-fog">
                  <Image
                    src={product.imageSrc}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-font-body text-[14px] font-semibold leading-[1.43] text-ink">
                    {product.name}
                  </p>
                  <p className="font-font-body text-[12px] font-light leading-[1.33] text-graphite">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
SearchPanel.displayName = "SearchPanel"
