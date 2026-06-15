"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { StaggerGrid, StaggerItem } from "@/components/reveal"

interface ItemProps {
  name: string
  tagline: string
  price: string
  imageSrc: string
}

const FEATURED: ItemProps = {
  name: "iPhone 16 Pro",
  tagline: "Built for Apple Intelligence.",
  price: "From $999",
  imageSrc: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
}

const SIDE_ITEMS: ItemProps[] = [
  {
    name: "iPhone 16",
    tagline: "Powerful. Practical. Playful.",
    price: "From $799",
    imageSrc: "https://images.unsplash.com/photo-1726732946451-98690db97aae?w=600&q=80",
  },
  {
    name: "iPad Pro",
    tagline: "The ultimate iPad experience.",
    price: "From $999",
    imageSrc: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
  },
]

interface LinkItemProps {
  name: string
  href: string
  icon: React.ReactNode
}

function WatchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="4" />
      <circle cx="12" cy="13" r="4" />
      <line x1="12" y1="9" x2="12" y2="12" />
      <line x1="12" y1="13" x2="14" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  )
}

function AirPodsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 6.5C7 4.5 8.5 3 10 3C11.5 3 13 4.5 13 6.5V12" />
      <path d="M17 6.5C17 4.5 15.5 3 14 3C12.5 3 11 4.5 11 6.5V12" />
      <path d="M7 12V16C7 18 8.5 19 10 19" />
      <path d="M17 12V16C17 18 15.5 19 14 19" />
      <path d="M10 19V22" />
      <path d="M14 19V22" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  )
}

const LINK_ITEMS: LinkItemProps[] = [
  { name: "Apple Watch Ultra 2", href: "/store", icon: <WatchIcon /> },
  { name: "AirPods Pro 2", href: "/store", icon: <AirPodsIcon /> },
  { name: "iPhone 16 Plus", href: "/iphone", icon: <PhoneIcon /> },
]

export function ProductLineup() {
  return (
    <section className="bg-cloud px-5 py-[80px]">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-10 overflow-hidden">
          <motion.h2
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center font-sf-pro-display text-[40px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite"
          >
            Meet the latest iPhone lineup.
          </motion.h2>
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-2 text-center font-sf-pro-text text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-fog"
          >
            Explore the full lineup of iPhone, iPad, Mac, and more.
          </motion.p>
        </div>

        <StaggerGrid className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <StaggerItem className="md:row-span-2">
            <Link href="/iphone" className="group relative block h-full overflow-hidden rounded-[8px] bg-paper shadow-xl">
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
                <h3 className="font-sf-pro-display text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-paper">
                  {FEATURED.name}
                </h3>
                <p className="mt-1 font-sf-pro-text text-[14px] font-light leading-[1.43] text-paper/80">
                  {FEATURED.tagline}
                </p>
                <p className="mt-0.5 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-paper/60">
                  {FEATURED.price}
                </p>
              </div>
            </Link>
          </StaggerItem>

          {SIDE_ITEMS.map((item) => (
            <StaggerItem key={item.name}>
              <Link href="/iphone" className="group relative block overflow-hidden rounded-[8px] bg-paper shadow-xl">
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
                  <h3 className="font-sf-pro-text text-[17px] font-semibold leading-[1.24] text-paper">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 font-sf-pro-text text-[12px] font-light leading-[1.33] text-paper/80">
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
              <Link href="/mac" className="group flex items-center justify-between rounded-[8px] bg-paper p-6 shadow-xl transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-[4px]">
                    <Image
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&q=80"
                      alt="MacBook Air"
                      fill
                      sizes="96px"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div>
                    <h3 className="font-sf-pro-text text-[17px] font-semibold leading-[1.24] text-graphite">
                      MacBook Air
                    </h3>
                    <p className="mt-0.5 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-steel">
                      Supercharged by M4.
                    </p>
                    <p className="font-sf-pro-text text-[14px] font-normal leading-[1.43] text-fog">
                      From $1,099
                    </p>
                  </div>
                </div>
                <span className="shrink-0 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-apple-blue transition-all group-hover:translate-x-1">
                  Learn more &rarr;
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
                  className="flex items-center justify-between rounded-[8px] bg-paper px-5 py-4 shadow-xl transition-all hover:shadow-lg"
                >
                  <span className="flex items-center gap-3 font-sf-pro-text text-[14px] font-semibold leading-[1.43] text-graphite">
                    {item.icon}
                    {item.name}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 4L10 8L6 12" />
                  </svg>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  )
}
