import React from 'react'
import heroImage from "../assets/hero.jpg";
import avatarSarah from "../assets/avatar-sarah.jpg";
import avatarMarcus from "../assets/avatar-marcus.jpg";

const Hero = () => {
  return (
    <div className='pt-20'>
    {/* Hero */}
      <header className="mx-auto max-w-7xl px-6 pb-10 pt-12 md:pt-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#5B4BFF]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#7C3AED]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5B4BFF] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#5B4BFF]" />
              </span>
              Enrollment open · Spring cohort
            </div>
            <h1 className="font-sans text-5xl font-bold leading-[0.9] tracking-tight text-balance md:text-7xl">
              AI for the <span className="text-[#7C3AED]">rest of us.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#64748B]   md:text-xl">
              Master Large Language Models and generative AI without writing a single line of code.
              Practical skills for creators, managers, and entrepreneurs.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-xl bg-[#7C3AED] px-8 py-4 text-center text-lg font-bold text-[#FFFFFF] shadow-[#7C3AED] transition-all hover:brightness-110"
              >
                Start Learning Now
              </a>
              <a
                href="#curriculum"
                className="rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] px-8 py-4 text-center text-lg font-bold text-[#1E293B] transition-colors hover:bg-[#F1F5F9]"
              >
                View Curriculum
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <img src={avatarSarah} alt="" className="size-8 rounded-full border-2 border-[#F8FAFC] object-cover" />
                <img src={avatarMarcus} alt="" className="size-8 rounded-full border-2 border-[#F8FAFC] object-cover" />
                <div className="grid size-8 place-items-center rounded-full border-2 border-[#F8FAFC] bg-[#1E293B] text-[10px] font-bold text-[#F8FAFC]">
                  +2k
                </div>
              </div>
              <p className="text-sm font-medium text-[#64748B]">
                Join 2,400+ professionals already ahead
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="A workspace with a laptop displaying an abstract AI network"
              width={1200}
              height={1200}
              className="relative z-10 aspect-square w-full rounded-3xl border border-[#E2E8F0] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 -z-10 size-64 rounded-full bg-[#38BDF8]/30 blur-3xl" />
            <div className="absolute -left-6 -top-6 -z-10 size-64 rounded-full bg-[#5B4BFF]/30 blur-3xl" />
          </div>
        </div>
      </header>
      {/* Social proof bar */}
      <section className="border-y border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-display text-lg font-bold tracking-tight text-[#64748B]/70">
            <span>Notion</span>
            <span>Figma</span>
            <span>Stripe</span>
            <span>Shopify</span>
            <span>Linear</span>
          </div>
        </div>
      </section>

      </div>
    
  )
}

export default Hero
