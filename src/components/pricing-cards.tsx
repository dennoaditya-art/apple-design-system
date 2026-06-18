"use client"

import { motion } from "motion/react"

import { Check } from "@phosphor-icons/react"
import { StaggerGrid, StaggerItem } from "@/components/reveal"

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals just getting started with Nova.",
    features: ["Up to 3 projects", "Basic analytics", "Community support", "1GB storage"],
    cta: "Get started",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    description: "Everything you need to run your creative business.",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "100GB storage", "Custom domains"],
    cta: "Upgrade to Pro",
    isPopular: true,
  },
]

export function PricingCards() {

  return (
    <section className="px-5 pb-[120px]">
      <div className="mx-auto max-w-[980px]">
        <StaggerGrid className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name} variant={0}>
              <div
                className={`relative flex h-full flex-col p-8 md:p-10 ${
                  plan.isPopular
                    ? "rounded-2xl bg-ink text-paper shadow-2xl"
                    : "rounded-2xl border border-silver bg-transparent text-ink"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-font-body text-[12px] font-semibold tracking-wide text-white">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-font-heading text-[28px] font-semibold leading-[1.14] tracking-[-0.28px]">
                  {plan.name}
                </h3>
                <p className={`mt-2 font-font-body text-[14px] leading-[1.43] ${plan.isPopular ? "text-graphite" : "text-slate"}`}>
                  {plan.description}
                </p>
                
                <div className="mt-8 flex items-baseline gap-1">
                  <span className="font-font-heading text-[44px] font-semibold leading-[1.18] tracking-[-0.7px]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`font-font-body text-[17px] ${plan.isPopular ? "text-graphite" : "text-slate"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <div className="mt-10 mb-8 h-[1px] w-full bg-current opacity-10" />

                <ul className="flex flex-col gap-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check size={18} weight="bold" className={plan.isPopular ? "text-accent" : "text-ink"} />
                      <span className="font-font-body text-[14px] leading-[1.43]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-auto w-full rounded-full px-6 py-4 font-font-body text-[14px] font-semibold transition-colors ${
                    plan.isPopular
                      ? "bg-white text-ink hover:bg-silver"
                      : "bg-ink text-white hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
PricingCards.displayName = "PricingCards"
