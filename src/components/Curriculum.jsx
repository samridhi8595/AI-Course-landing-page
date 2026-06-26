import React from "react";
import { curriculum } from "../data/curriculum";

const Curriculum = () => {
  return (
    
    <section id="curriculum" className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">
              The Curriculum
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Zero to Prompt-Engineer
            </h2>
            <p className="mt-4 text-muted-foreground">
              Three focused modules designed to take you from curious beginner to confident power
              user in four weeks.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {curriculum.map((m, i) => (
              <article
                key={m.title}
                className="rounded-3xl border border-border bg-secondary/50 p-8 transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-card shadow-sm">
                  <div className={`size-5 rounded-sm ${m.accent}`} />
                </div>
                <p className="mb-2 font-mono text-xs font-medium text-muted-foreground">
                  Module 0{i + 1}
                </p>
                <h3 className="font-display text-xl font-bold">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    
  )
}

export default Curriculum;