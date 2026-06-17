const FOOTER_LINKS = [
  {
    group: "Shop and Learn",
    links: ["Store", "Laptops", "Tablets", "Phones", "Watches", "Audio", "Entertainment", "Accessories"],
  },
  {
    group: "Account",
    links: ["My Account", "Order Status", "Wishlist"],
  },
  {
    group: "Nova Store",
    links: ["Find a Store", "Customer Support", "Shipping Info", "Returns & Exchanges", "Gift Cards"],
  },
  {
    group: "About Nova",
    links: ["Newsroom", "Careers", "Investors", "Sustainability", "Privacy Policy"],
  },
]

export function FooterSection() {
  return (
    <footer className="bg-cloud px-5 py-[48px]">
      <div className="mx-auto max-w-[980px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {FOOTER_LINKS.map((group) => (
            <div key={group.group}>
              <h4 className="mb-2 font-font-body text-[12px] font-semibold leading-[1.33] text-graphite">{group.group}</h4>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-font-body text-[12px] font-normal leading-[1.33] text-fog transition-colors hover:text-graphite">
                      {link}
                    </a>
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
