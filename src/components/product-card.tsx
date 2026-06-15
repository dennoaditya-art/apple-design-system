"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="group overflow-hidden rounded-[12px] bg-paper shadow-sm transition-all hover:shadow-md">
      <Link href={`/${product.category}`} className="block">
        <div className="relative overflow-hidden bg-cloud" style={{ aspectRatio: "1 / 1" }}>
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 280px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="font-sf-pro-text text-[12px] font-semibold uppercase leading-[1.33] tracking-[0.08px] text-fog">
          {product.category === "iphone"
            ? "iPhone"
            : product.category === "mac"
              ? "Mac"
              : product.category === "ipad"
                ? "iPad"
                : product.category === "watch"
                  ? "Watch"
                  : product.category === "airpods"
                    ? "AirPods"
                    : "Accessories"}
        </p>
        <h3 className="mt-0.5 font-sf-pro-text text-[15px] font-semibold leading-[1.24] text-graphite">
          <Link href={`/${product.category}`} className="hover:text-apple-blue transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="mt-0.5 font-sf-pro-text text-[13px] font-light leading-[1.38] text-fog line-clamp-1">
          {product.tagline}
        </p>
        <p className="mt-1 font-sf-pro-text text-[15px] font-normal leading-[1.24] text-graphite">
          {product.price}
        </p>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="mt-3 w-full rounded-[980px] bg-button-blue px-[15px] py-[8px] font-sf-pro-text text-[14px] leading-[1.47] text-paper transition-all hover:bg-deep-link-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
        >
          Add to Bag
        </button>
      </div>
    </div>
  )
}
