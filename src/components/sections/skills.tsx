"use client";

import { motion } from "framer-motion";
import { techIcons } from "@/components/tech-icons";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-medium text-indigo-400">Toolbox</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Technologies I work with
        </h2>
      </div>

      <div className="space-y-10">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {g.title}
            </h3>

            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {g.items.map((name, i) => {
                const entry = techIcons[name];
                return (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 transition-colors hover:border-indigo-400/50 hover:bg-muted/50"
                  >
                    {entry && (
                      <entry.Icon
                        className="h-8 w-8 text-foreground transition-transform duration-200 group-hover:scale-110"
                        style={entry.color ? { color: entry.color } : undefined}
                      />
                    )}
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {name}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}