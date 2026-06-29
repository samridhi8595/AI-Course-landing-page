import React from 'react'

const Pricing = () => {
  return (
    <>
            {/* Pricing / Final CTA */}
      <section id="pricing" className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#1E293B] p-12 text-center text-[#F8FAFC] md:p-24">
          <div className="relative z-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#F8FAFC]/60">
              Spring cohort · April 15
            </p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Ready to upgrade your career?
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-[#F8FAFC]/70 md:text-xl">
              One payment. Lifetime access. Limited to 100 students per cohort for high-touch
              mentorship and weekly live Q&amp;A.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-2xl bg-[#5B4BFF] px-10 py-5 text-xl font-bold text-[#FFFFFF] shadow-[#5B4BFF] transition-transform hover:scale-105"
              >
                Secure My Spot — $299
              </a>
            </div>
            <p className="mt-8 text-sm text-[#F8FAFC]/50">
              7-day money-back guarantee. No questions asked.
            </p>
          </div>
          <div className="absolute right-0 top-0 -z-0 h-full w-1/2 rotate-12 bg-[#5B4BFF]/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 -z-0 h-full w-1/3 -rotate-12 bg-[#38BDF8]/10 blur-[100px]" />
        </div>
      </section>
    </>
  )
}

export default Pricing
