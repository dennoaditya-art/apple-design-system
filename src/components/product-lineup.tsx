"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { StaggerGrid, StaggerItem } from "@/components/reveal"
import { easings, durations } from "@/lib/motion"
import { DeviceMobile, Headphones, Watch, CaretRight } from "@phosphor-icons/react"

interface ItemProps {
  name: string
  tagline: string
  price: string
  imageSrc: string
}

const FEATURED: ItemProps = {
  name: "UltraPhone X",
  tagline: "Built for next-gen intelligence.",
  price: "From $999",
  imageSrc: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
}

const SIDE_ITEMS: ItemProps[] = [
  {
    name: "Phone S",
    tagline: "Powerful. Practical. Playful.",
    price: "From $799",
    imageSrc: "https://images.unsplash.com/photo-1726732946451-98690db97aae?w=600&q=80",
  },
  {
    name: "Tablet Pro",
    tagline: "The ultimate tablet experience.",
    price: "From $999",
    imageSrc: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
  },
]

interface LinkItemProps {
  name: string
  href: string
  icon: React.ReactNode
}

const LINK_ITEMS: LinkItemProps[] = [
  { name: "Watch Ultra 2", href: "/watches", icon: <Watch size={24} weight="regular" /> },
  { name: "Earbuds Pro 2", href: "/audio", icon: <Headphones size={24} weight="regular" /> },
  { name: "Phone S Plus", href: "/phones", icon: <DeviceMobile size={24} weight="regular" /> },
]

export function ProductLineup() {
  const prefersReduced = useReducedMotion()
  return (
    <section className="bg-fog px-5 py-[80px]">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-10 overflow-hidden">
          <motion.h2
            initial={prefersReduced ? undefined : { opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={prefersReduced ? { duration: 0 } : { duration: durations.hero, ease: easings.dramatic }}
            className="text-center font-font-heading md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-ink"
          >
            Meet the latest phone lineup.
          </motion.h2>
          <motion.p
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={prefersReduced ? { duration: 0 } : { duration: durations.slow, ease: easings.easeOut, delay: 0.15 }}
            className="mt-2 text-center font-font-body text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-graphite"
          >
            Explore the full lineup of phones, tablets, laptops, and more.
          </motion.p>
        </div>

        <StaggerGrid className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <StaggerItem className="md:row-span-2">
            <Link href="/phones" className="group relative block h-full overflow-hidden rounded-md bg-paper shadow-xl">
              <div className="relative h-full" style={{ minHeight: "500px" }}>
                <Image
                  src={FEATURED.imageSrc}
                  alt={FEATURED.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-font-heading md:text-[28px] text-[22px] font-semibold leading-[1.14] tracking-[-0.28px] text-paper">
                  {FEATURED.name}
                </h3>
                <p className="mt-1 font-font-body text-[14px] font-light leading-[1.43] text-paper/80">
                  {FEATURED.tagline}
                </p>
                <p className="mt-0.5 font-font-body text-[14px] font-normal leading-[1.43] text-paper/60">
                  {FEATURED.price}
                </p>
              </div>
            </Link>
          </StaggerItem>

          {SIDE_ITEMS.map((item) => (
            <StaggerItem key={item.name}>
              <Link href="/phones" className="group relative block overflow-hidden rounded-md bg-paper shadow-xl">
                <div className="relative" style={{ aspectRatio: "3 / 2" }}>
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-font-body text-[17px] font-semibold leading-[1.24] text-paper">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 font-font-body text-[12px] font-light leading-[1.33] text-paper/80">
                    {item.tagline}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <div className="mt-4">
          <StaggerGrid>
            <StaggerItem>
              <Link href="/laptops" className="group flex items-center justify-between rounded-md bg-paper p-6 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99] active:transition-transform active:duration-75">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xs">
                    <Image
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&q=80"
                      alt="Laptop Air"
                      fill
                      sizes="96px"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div>
                    <h3 className="font-font-body text-[17px] font-semibold leading-[1.24] text-ink">
                      Laptop Air
                    </h3>
                    <p className="mt-0.5 font-font-body text-[14px] font-normal leading-[1.43] text-steel">
                      Supercharged performance.
                    </p>
                    <p className="font-font-body text-[14px] font-normal leading-[1.43] text-graphite">
                      From $1,099
                    </p>
                  </div>
                </div>
                <span className="shrink-0 font-font-body text-[14px] font-normal leading-[1.43] text-accent transition-all group-hover:translate-x-1">
                  Learn more <CaretRight size={14} weight="bold" className="inline" />
                </span>
              </Link>
            </StaggerItem>
          </StaggerGrid>
        </div>

        <div className="mt-4">
          <StaggerGrid className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {LINK_ITEMS.map((item) => (
              <StaggerItem key={item.name}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between rounded-md bg-paper px-5 py-4 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] active:transition-transform active:duration-75"
                >
                  <span className="flex items-center gap-3 font-font-body text-[14px] font-semibold leading-[1.43] text-ink">
                    {item.icon}
                    {item.name}
                  </span>
                  <CaretRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  )
}
ProductLineup.displayName = "ProductLineup"
