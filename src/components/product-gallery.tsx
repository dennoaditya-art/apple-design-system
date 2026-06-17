"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

interface GalleryImage {
  src: string
  alt: string
}

interface ProductGalleryProps {
  images: GalleryImage[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  if (images.length === 0) return null
  const prefersReduced = useReducedMotion()
  const [active, setActive] = useState(0)

  return (
    <div className="mx-auto max-w-[600px]">
      <div className="relative overflow-hidden rounded-[8px] shadow-xl" style={{ aspectRatio: "4 / 5" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={prefersReduced ? undefined : { opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              sizes="(max-width: 600px) 100vw, 600px"
              className="object-cover"
              priority={active === 0}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-center gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View ${img.alt}`}
            className={`relative h-16 w-16 overflow-hidden rounded-[6px] border-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue ${
              i === active
                ? "border-button-blue opacity-100 shadow-md"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="64px"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </button>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="font-sf-pro-text text-[14px] font-light leading-[1.43] text-fog">
          {productName} · {active + 1} of {images.length}
        </p>
      </div>
    </div>
  )
}
