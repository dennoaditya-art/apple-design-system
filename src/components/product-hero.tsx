import Image from "next/image"
import { PillButton } from "@/components/pill-button"

interface ProductHeroProps {
  productName: string
  subtitle: string
  bgClass?: string
  imageSrc?: string
  imageAlt?: string
  priority?: boolean
}

export function ProductHero({ productName, subtitle, bgClass = "bg-cloud", imageSrc, imageAlt, priority }: ProductHeroProps) {
  return (
    <section className={`flex flex-col items-center justify-center px-5 py-[80px] text-center ${bgClass}`}>
      <h1 className="font-sf-pro-display text-[56px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
        {productName}
      </h1>
      <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
        {subtitle}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <PillButton variant="filled">Learn more</PillButton>
        <PillButton variant="outlined">Buy</PillButton>
      </div>
      {imageSrc && (
        <div className="relative mt-10 w-full max-w-[65vw] shadow-xl" style={{ aspectRatio: "4 / 3" }}>
          <Image src={imageSrc} alt={imageAlt || productName} fill sizes="65vw" className="object-contain transition-transform duration-700 hover:scale-[1.02]" priority={priority} />
        </div>
      )}
    </section>
  )
}
