const FOOTER_LINKS = [
  {
    group: "Shop and Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "Accessories"],
  },
  {
    group: "Account",
    links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  },
  {
    group: "Apple Store",
    links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Certified Refurbished"],
  },
  {
    group: "About Apple",
    links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events"],
  },
]

export function FooterSection() {
  return (
    <footer className="bg-cloud px-5 py-[48px]">
      <div className="mx-auto max-w-[980px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {FOOTER_LINKS.map((group) => (
            <div key={group.group}>
              <h4 className="mb-2 font-sf-pro-text text-[12px] font-semibold leading-[1.33] text-graphite">{group.group}</h4>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-sf-pro-text text-[12px] font-normal leading-[1.33] text-fog transition-colors hover:text-graphite">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-graphite/10 pt-4 text-center">
          <p className="font-sf-pro-text text-[12px] font-normal leading-[1.33] text-ash">
            Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
