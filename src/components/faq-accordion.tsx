"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { Plus, Minus } from "@phosphor-icons/react"
import { Reveal } from "@/components/reveal"

const FAQS = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes, you can try Nova completely free for 14 days. No credit card required. You'll get full access to all features so you can see if it's right for you.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Absolutely. There are no long-term contracts. If you decide to cancel, you'll retain access until the end of your current billing period.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards including Visa, Mastercard, and American Express. We also support PayPal and Apple Pay in select regions.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. All data is encrypted at rest and in transit. We maintain strict access controls and undergo regular third-party security audits.",
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer: "Yes, we are proud to support non-profits and educational institutions with a 50% discount on all plans. Please contact our support team to apply.",
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const prefersReduced = useReducedMotion()

  return (
    <section className="px-5 pb-[120px]">
      <div className="mx-auto max-w-[980px]">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:gap-20">
            <div className="md:w-1/3">
              <h2 className="font-font-heading text-[28px] font-semibold leading-[1.14] tracking-[-0.28px] text-ink">
                Frequently asked questions
              </h2>
            </div>
            
            <div className="md:w-2/3">
              <div className="divide-y divide-bone border-t border-silver">
                {FAQS.map((faq, index) => {
                  const isOpen = openIndex === index

                  return (
                    <div key={index} className="py-6">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                        aria-expanded={isOpen}
                      >
                        <span className="font-font-body text-[17px] font-semibold text-ink">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fog text-ink">
                          {isOpen ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
                        </span>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            animate={prefersReduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                            exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pt-4 font-font-body text-[17px] leading-[1.47] text-graphite">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
