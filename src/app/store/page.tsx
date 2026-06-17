"use client"

import { useState } from "react"
import { TopNotificationBar } from "@/components/top-notification-bar"
import { StickyNav } from "@/components/sticky-nav"
import { ProductCard } from "@/components/product-card"
import { MediaCardGrid } from "@/components/media-card-grid"
import { FooterSection } from "@/components/footer-section"
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
      <TopNotificationBar />
      <StickyNav />
      <main>
        <section className="flex flex-col items-center justify-center bg-paper px-5 py-[80px] text-center">
          <p className="font-font-body text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">
            Nova Store
          </p>
          <h1 className="mt-1 font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
            Shop the latest products.
          </h1>
          <p className="mt-3 max-w-[560px] font-font-body text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-fog">
            Free delivery and free returns.{" "}
          </p>

          <div className="mt-8 w-full max-w-[400px]">
            <div className="relative">
              <MagnifyingGlass size={18} weight="regular" className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-lg border border-bone bg-cloud py-3 pl-10 pr-4 font-font-body text-[15px] text-graphite outline-none transition-colors placeholder:text-fog focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Search products"
              />
            </div>
          </div>
        </section>

        <section className="bg-cloud px-5 pb-[80px]">
          <div className="mx-auto max-w-[980px]">
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 font-font-body text-[13px] leading-[1.38] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    activeCategory === cat.id
                      ? "bg-graphite text-paper"
                      : "bg-paper text-graphite hover:bg-bone"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="py-16 text-center">
                <p className="font-font-body text-[17px] font-light leading-[1.47] text-fog">
                  No products found for &ldquo;{searchQuery}&rdquo;
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {filtered.map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-paper px-5 py-[80px]">
          <div className="mx-auto max-w-[980px]">
            <MediaCardGrid />
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
