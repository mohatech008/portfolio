"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Code2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SpotlightCard } from "@/components/spotlight-card";
import { techIcons } from "@/components/tech-icons";
import { projects, type Project } from "@/data/site";

function BrowserFrame({ p }: { p: Project }) {
  const host = p.live?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? p.title;

  const frame = (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-indigo-500/5 transition-transform duration-300 group-hover:-translate-y-1">
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <div className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
          {host}
        </div>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-fuchsia-500/20">
        {p.image ? (
          <Image
            src={p.image}
            alt={`${p.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1 text-center">
            <span className="text-3xl font-semibold tracking-tight sm:text-5xl">
              {p.title}
            </span>
            <span className="text-sm text-muted-foreground">{p.subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );

  return p.live ? (
    <a href={p.live} target="_blank" rel="noreferrer" className="group block">
      {frame}
    </a>
  ) : (
    <div className="group">{frame}</div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-medium text-indigo-400">Selected work</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Products I&apos;ve built and shipped
        </h2>
        <p className="mt-4 text-muted-foreground">
          Each project is a case study: the problem, the solution and the
          technology behind it.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="p-6 sm:p-8">
              <header className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-muted-foreground">{p.subtitle}</p>
                </div>
                <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-300">
                  {p.role}
                </span>
              </header>

              <div className="mt-8">
                <BrowserFrame p={p} />
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      The problem
                    </h4>
                    <p className="mt-2 leading-relaxed">{p.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                      The solution
                    </h4>
                    <p className="mt-2 leading-relaxed">{p.solution}</p>
                  </div>

                  {p.contribution && (
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                        My contribution
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {p.contribution.map((c) => (
                          <li key={c} className="flex gap-2 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Key features
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => {
                    const entry = techIcons[s];
                    return (
                      <li
                        key={s}
                        className="flex items-center gap-1.5 rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {entry && (
                          <entry.Icon
                            className="h-3.5 w-3.5 text-foreground"
                            style={entry.color ? { color: entry.color } : undefined}
                          />
                        )}
                        {s}
                      </li>
                    );
                  })}
                </ul>

                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      <Code2 className="h-4 w-4" /> Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({ size: "sm" })}
                    >
                      Live site <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </footer>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}