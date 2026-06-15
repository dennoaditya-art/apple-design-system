import Image from "next/image"
import { PillButton } from "@/components/pill-button"

export function ColoredProductSection() {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-[80px] text-center" style={{ backgroundColor: "var(--color-bone, #e2e2e5)" }}>
      <h2 className="font-sf-pro-display md:text-[56px] text-[36px] font-semibold leading-[1.07] tracking-[-1.23px] text-graphite">
        iPad Air
      </h2>
      <p className="mt-3 max-w-[640px] font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-graphite">
        Supercharged by M3.
      </p>
      <div className="mt-5 flex items-center gap-3">
        <PillButton variant="filled">Learn more</PillButton>
        <PillButton variant="outlined" className="border-graphite text-graphite hover:border-graphite hover:text-graphite">Buy</PillButton>
      </div>
      <div className="relative mt-10 w-full max-w-[65vw] shadow-xl" style={{ aspectRatio: "4 / 3" }}>
        <Image
          src="https://images.unsplash.com/photo-1682426526490-667d4912b8de?w=1000&q=80"
          alt="iPad Air"
          fill
          sizes="65vw"
          className="object-contain"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </div>
    </section>
  )
}
