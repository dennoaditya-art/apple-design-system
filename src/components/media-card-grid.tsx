import { StaggerGrid, StaggerItem } from "@/components/reveal"

interface ServiceProps {
  name: string
  tagline: string
  icon: React.ReactNode
}

function MusicIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 25V11L23 8V22" />
      <circle cx="7" cy="25" r="3" />
      <circle cx="21" cy="22" r="3" />
    </svg>
  )
}

function ArcadeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="8" width="28" height="16" rx="4" />
      <circle cx="10" cy="16" r="2" fill="currentColor" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <circle cx="22" cy="16" r="2" fill="currentColor" />
      <line x1="10" y1="20" x2="22" y2="20" />
    </svg>
  )
}

function FitnessIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20L8 16L12 20L16 12L20 20L24 16L28 20" />
      <circle cx="16" cy="8" r="2" fill="currentColor" />
    </svg>
  )
}

function NewsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="2" />
      <line x1="8" y1="12" x2="18" y2="12" />
      <line x1="8" y1="16" x2="24" y2="16" />
      <line x1="8" y1="20" x2="18" y2="20" />
      <line x1="8" y1="24" x2="14" y2="24" />
      <circle cx="24" cy="22" r="2" fill="currentColor" />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 22C5.7 22 3 19.3 3 16C3 12.7 5.7 10 9 10C9 6.7 11.7 4 15 4C18.3 4 21 6.7 21 10C24.3 10 27 12.7 27 16C27 19.3 24.3 22 21 22" />
      <path d="M15 14V26" />
      <path d="M11 22L15 26L19 22" />
    </svg>
  )
}

function TVIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="8" width="28" height="18" rx="3" />
      <line x1="12" y1="26" x2="10" y2="30" />
      <line x1="20" y1="26" x2="22" y2="30" />
      <polygon points="13,14 21,17 13,20" fill="currentColor" />
    </svg>
  )
}

function BooksIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6H10C12.2 6 14 7.8 14 10V26C14 24.3 12.7 23 11 23H4V6Z" />
      <path d="M28 6H22C19.8 6 18 7.8 18 10V26C18 24.3 19.3 23 21 23H28V6Z" />
      <line x1="4" y1="23" x2="14" y2="23" />
      <line x1="18" y1="23" x2="28" y2="23" />
    </svg>
  )
}

function MapsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4C11 4 7 8 7 13C7 19.5 16 28 16 28C16 28 25 19.5 25 13C25 8 21 4 16 4Z" />
      <circle cx="16" cy="13" r="3" fill="currentColor" />
    </svg>
  )
}

const SERVICES: ServiceProps[] = [
  {
    name: "Apple Music",
    tagline: "65 million songs. 3 months free.",
    icon: <MusicIcon />,
  },
  {
    name: "Apple Arcade",
    tagline: "Over 200 games. No ads. No in-app purchases.",
    icon: <ArcadeIcon />,
  },
  {
    name: "Apple Fitness+",
    tagline: "Studio workouts from home.",
    icon: <FitnessIcon />,
  },
  {
    name: "Apple News+",
    tagline: "Leading stories. Curated for you.",
    icon: <NewsIcon />,
  },
  {
    name: "iCloud+",
    tagline: "Store, sync, and share securely.",
    icon: <CloudIcon />,
  },
  {
    name: "Apple TV+",
    tagline: "Original stories from the best minds.",
    icon: <TVIcon />,
  },
  {
    name: "Apple Books",
    tagline: "Millions of books. Yours to discover.",
    icon: <BooksIcon />,
  },
  {
    name: "Apple Maps",
    tagline: "Explore the world around you.",
    icon: <MapsIcon />,
  },
]

export function MediaCardGrid() {
  return (
    <section className="bg-cloud px-5 py-[80px]">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-10 text-center">
          <h2 className="font-sf-pro-display md:text-[40px] text-[28px] font-semibold leading-[1.1] tracking-[-0.6px] text-graphite">
            More from Apple
          </h2>
          <p className="mt-2 font-sf-pro-text text-[17px] font-light leading-[1.47] tracking-[-0.05px] text-fog">
            Discover services that power your digital life.
          </p>
        </div>

        <StaggerGrid className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SERVICES.map((service) => (
            <StaggerItem key={service.name}>
              <a
                href="#"
                className="group flex h-full flex-col rounded-[8px] bg-paper p-6 shadow-xl transition-shadow hover:shadow-lg"
              >
                <div className="text-graphite transition-colors group-hover:text-apple-blue">
                  {service.icon}
                </div>
                <h3 className="mt-4 font-sf-pro-text text-[17px] font-semibold leading-[1.24] text-graphite">
                  {service.name}
                </h3>
                <p className="mt-1 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-fog">
                  {service.tagline}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 font-sf-pro-text text-[14px] font-normal leading-[1.43] text-apple-blue transition-all group-hover:translate-x-0.5">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 3.5L9 7L5 10.5" />
                  </svg>
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
