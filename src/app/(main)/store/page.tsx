"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { PRODUCTS, CATEGORIES } from "@/lib/products"

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = PRODUCTS.filter((p) => {
    const matchCategory = activeCategory === "all" || p.category === activeCategory
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <>
      <section className="flex flex-col items-center justify-center bg-paper px-5 py-[80px] text-center">
        <p className="font-font-body text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-graphite">
          Nova Store
        </p>
        <h1 className="mt-1 font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-ink">
          Shop the latest products.
        </h1>
        <p className="mt-3 max-w-[560px] font-font-body text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-graphite">
          Free delivery and free returns.{" "}
        </p>

        <div className="mt-8 w-full max-w-[400px]">
          <div className="relative">
            <MagnifyingGlass size={18} weight="regular" className="absolute left-3 top-1/2 -translate-y-1/2 text-graphite" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-lg border border-silver bg-fog py-3 pl-10 pr-4 font-font-body text-[15px] text-ink outline-none transition-colors placeholder:text-graphite focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Search products"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 font-font-body text-[13px] font-semibold leading-none transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeCategory === cat.id
                  ? "bg-ink text-paper"
                  : "bg-fog text-ink hover:bg-silver"
              }`}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-fog px-5 py-[80px]">
        <div className="mx-auto max-w-[1200px]">
          {filtered.length === 0 && (
            <p className="text-center font-font-body text-[17px] text-graphite">
              No products found.
            </p>
          )}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-[80px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-8 text-center font-font-heading text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-ink">
            More from Nova
          </h2>
          <MediaCardGrid />
        </div>
      </section>
    </>
  )
}