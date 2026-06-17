import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-cloud px-5 text-center">
      <h1 className="font-sf-pro-display md:text-[56px] text-[36px] font-bold leading-[1.07] tracking-[-1.23px] text-graphite">
        404
      </h1>
      <p className="mt-3 font-sf-pro-text text-[21px] font-light leading-[1.38] tracking-[-0.11px] text-fog">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-[980px] bg-button-blue px-[15px] py-[8px] font-sf-pro-text text-[17px] leading-[1.47] tracking-[-0.05px] text-paper transition-all hover:bg-deep-link-blue"
      >
        Go home
      </Link>
    </main>
  )
}
