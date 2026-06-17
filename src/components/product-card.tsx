"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { springs } from "@/lib/motion"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="overflow-hidden rounded-xl bg-paper shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
      <Link href={`/${product.category}`} className="block">
        <div className="relative w-full overflow-hidden bg-cloud" style={{ paddingBottom: "100%" }}>
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 280px"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
          <p className="font-font-body text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">
            {product.category === "phones"
              ? "Phones"
              : product.category === "laptops"
                ? "Laptops"
                : product.category === "tablets"
                  ? "Tablets"
                  : product.category === "watches"
                    ? "Watches"
                    : product.category === "audio"
                      ? "Audio"
                      : "Accessories"}
          </p>
          <h3 className="mt-0.5 font-font-body text-[15px] font-semibold leading-[1.24] text-graphite hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="mt-0.5 font-font-body text-[13px] font-light leading-[1.38] text-fog line-clamp-1">
            {product.tagline}
          </p>
          <p className="mt-1 font-font-body text-[15px] font-normal leading-[1.24] text-graphite">
            {product.price}
          </p>
          <motion.button
            type="button"
            onClick={() => addItem(product)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springs.snappy}
            className="mt-3 w-full rounded-full bg-accent-solid px-[15px] py-[8px] font-font-body text-[14px] leading-[1.47] text-paper transition-all hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Add to Bag
          </motion.button>
        </div>
      </div>
  )
}
