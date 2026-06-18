import Image from "next/image"
import { PillButton } from "@/components/pill-button"

interface ProductHeroProps {
  productName: string
  subtitle: string
  bgClass?: string
  imageSrc?: string
  imageAlt?: string
  priority?: boolean
  learnHref?: string
  buyHref?: string
}

export function ProductHero({ productName, subtitle, bgClass = "bg-fog", imageSrc, imageAlt, priority, learnHref, buyHref }: ProductHeroProps) {
  return (
    <section className={`flex flex-col items-center justify-center px-5 py-[80px] text-center ${bgClass}`}>
      <h1 className="font-font-heading md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-ink">
        {productName}
      </h1>
      <p className="mt-3 max-w-[640px] font-font-body text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-ink">
        {subtitle}
      </p>
      <div className="mt-5 flex items-center gap-3">
        <PillButton variant="filled" href={learnHref}>Learn more</PillButton>
        <PillButton variant="outlined" href={buyHref}>Buy</PillButton>
      </div>
      {imageSrc && (
        <div className="relative mt-10 w-full max-w-[65vw] shadow-xl" style={{ aspectRatio: "4 / 3" }}>
          <Image src={imageSrc} alt={imageAlt || productName} fill sizes="65vw" className="object-contain transition-transform duration-700 hover:scale-[1.02]" priority={priority} />
        </div>
      )}
    </section>
  )
}
ProductHero.displayName = "ProductHero"
