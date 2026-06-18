import Link from "next/link"

const FOOTER_LINKS: { group: string; links: { label: string; href: string }[] }[] = [
  {
    group: "Shop and Learn",
    links: [
      { label: "Store", href: "/store" },
      { label: "Laptops", href: "/laptops" },
      { label: "Tablets", href: "/tablets" },
      { label: "Phones", href: "/phones" },
      { label: "Watches", href: "/watches" },
      { label: "Audio", href: "/audio" },
      { label: "Entertainment", href: "/entertainment" },
      { label: "Accessories", href: "/store" },
    ],
  },
  {
    group: "Account",
    links: [
      { label: "My Account", href: "/dashboard" },
      { label: "Order Status", href: "/dashboard/orders" },
      { label: "Wishlist", href: "/store" },
    ],
  },
  {
    group: "Nova Store",
    links: [
      { label: "Find a Store", href: "/store" },
      { label: "Customer Support", href: "/store" },
      { label: "Shipping Info", href: "/store" },
      { label: "Returns & Exchanges", href: "/store" },
      { label: "Gift Cards", href: "/store" },
    ],
  },
  {
    group: "About Nova",
    links: [
      { label: "Newsroom", href: "/entertainment" },
      { label: "Careers", href: "/labs" },
      { label: "Investors", href: "/dashboard" },
      { label: "Sustainability", href: "/labs" },
      { label: "Privacy Policy", href: "/" },
    ],
  },
]

export function FooterSection() {
  return (
    <footer className="bg-fog px-5 py-[48px]">
      <div className="mx-auto max-w-[980px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {FOOTER_LINKS.map((group) => (
            <div key={group.group}>
              <h4 className="mb-2 font-font-body text-[12px] font-semibold leading-[1.33] text-ink">
                {group.group}
              </h4>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-font-body text-[12px] font-normal leading-[1.33] text-graphite transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-graphite/10 pt-4 text-center">
          <p className="font-font-body text-[12px] font-normal leading-[1.33] text-ash">
            Copyright &copy; {new Date().getFullYear()} Nova Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
FooterSection.displayName = "FooterSection"
