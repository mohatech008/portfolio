"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/site";

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-16 px-6 py-24">
      <div className="mb-12">
        <p className="text-sm font-medium text-indigo-400">Experience</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Where I&apos;ve worked
        </h2>
      </div>

      <ol className="relative space-y-10 border-l border-border pl-8">
        {experience.map((e) => (
          <motion.li
            key={`${e.company}-${e.role}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-400 ring-4 ring-background" />
            <p className="text-xs text-muted-foreground">{e.period}</p>
            <h3 className="mt-1 text-lg font-semibold">
              {e.role} <span className="text-muted-foreground">· {e.company}</span>
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}