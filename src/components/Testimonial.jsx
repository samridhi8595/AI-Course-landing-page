import React from 'react'
import { testimonials } from "../data/testimonials";

const Testimonial = () => {
  return (
    <>
    {/* Testimonials */}
      <section id="testimonials" className="px-6 py-24 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#5B4BFF]">
                Student Stories
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Don't take our word for it.
              </h2>
              <p className="mt-6 text-lg text-[#64748B]">
                Our graduates save an average of 12 hours per week by automating repetitive work
                tasks — and finally feel confident around AI.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className={`rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-6 shadow-[#FFFFFF] ${t.offset ? "sm:mt-8" : ""}`}
                >
                  <blockquote className="text-lg font-medium italic leading-snug text-[#1E293B]">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="size-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-[#64748B]">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
   </>   
  )
}

export default Testimonial
