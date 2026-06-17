"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

const GALLERY = [
  {
    title: "Typography as Object",
    subtitle: "Where letterforms become sculpture",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    theme: "light" as const,
  },
  {
    title: "Darkroom Portraiture",
    subtitle: "Light emerging from shadow",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&q=80",
    theme: "dark" as const,
  },
  {
    title: "Architectural Rhythm",
    subtitle: "Repetition, light, and negative space",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
    theme: "light" as const,
  },
  {
    title: "Organic Geometry",
    subtitle: "Nature meets structure",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    theme: "dark" as const,
  },
]

function GalleryFrame({
  item,
  index,
}: {
  item: (typeof GALLERY)[number]
  index: number
}) {
  const prefersReduced = useReducedMotion()
  const isDark = item.theme === "dark"

  return (
    <section
      className={`relative flex min-h-0 md:min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-20 ${
        isDark ? "text-white" : "text-graphite"
      }`}
      style={{ backgroundColor: isDark ? "#000" : "#fff" }}
    >
      <div className="relative w-full max-w-[1200px]">
        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <p
            className="mb-2 font-font-body text-[13px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: isDark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.65)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </p>
          {index === 0 ? (
            <h1
              className={`font-font-heading text-[32px] font-bold leading-[1.1] tracking-[-0.6px] md:text-[56px] ${
                isDark ? "text-white" : "text-graphite"
              }`}
            >
              {item.title}
            </h1>
          ) : (
            <h2
              className={`font-font-heading text-[32px] font-bold leading-[1.1] tracking-[-0.6px] md:text-[56px] ${
                isDark ? "text-white" : "text-graphite"
              }`}
            >
              {item.title}
            </h2>
          )}
          <p
            className="mt-2 max-w-[480px] font-font-body text-[17px] font-light leading-[1.47]"
            style={{ color: isDark ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.65)" }}
          >
            {item.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={prefersReduced ? undefined : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] w-full overflow-hidden shadow-xl"
          style={{ borderRadius: isDark ? "4px" : "4px" }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        </motion.div>
      </div>
    </section>
  )
}

export default function StudioPage() {
  return (
    <main>
      {GALLERY.map((item, i) => (
        <GalleryFrame key={item.title} item={item} index={i} />
      ))}
      <footer
        className="flex flex-col items-center justify-center gap-4 bg-black px-6 py-16 text-center text-white"
      >
        <p className="font-font-body text-[14px] font-light leading-[1.43] opacity-60">
          Studio &mdash; A gallery of light and shadow
        </p>
        <Link
          href="/"
          className="font-font-body text-[14px] font-normal leading-[1.43] opacity-60 transition-opacity hover:opacity-100"
        >
          &larr; Back to home
        </Link>
      </footer>
    </main>
  )
}
