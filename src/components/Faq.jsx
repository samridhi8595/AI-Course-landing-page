import React from 'react'
import { faqs } from "../data/faqs";


const Faq = () => {
  return (
    <>
       <section id="faq" className="bg-[#FFFFFF] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight md:text-4xl">
            Frequently asked
          </h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9]/40 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between font-display text-base font-bold">
                  <span>{item.q}</span>
                  <span className="ml-4 text-[#5B4BFF] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#64748B]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
