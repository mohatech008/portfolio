"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

type Kind = "kw" | "var" | "str" | "bool";
const colors: Record<Kind, string> = {
  kw: "text-violet-600 dark:text-violet-400",
  var: "text-sky-600 dark:text-sky-400",
  str: "text-emerald-600 dark:text-emerald-400",
  bool: "text-amber-600 dark:text-amber-400",
};

const lines: [string, Kind?][][] = [
  [["const ", "kw"], ["engineer", "var"], [" = {"]],
  [["  role", "var"], [": "], ['"Full-Stack Engineer"', "str"], [","]],
  [["  stack", "var"], [": ["]],
  [["    "], ['"React"', "str"], [", "], ['"Next.js"', "str"], [","]],
  [["    "], ['"TypeScript"', "str"], [", "], ['"Supabase"', "str"], [","]],
  [["  ],"]],
  [["  shipped", "var"], [": ["]],
  [["    "], ['"ADE Association"', "str"], [","]],
  [["    "], ['"Enkaj"', "str"], [","]],
  [["  ],"]],
  [["  openToWork", "var"], [": "], ["true", "bool"], [","]],
  [["};"]],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] max-w-full -translate-x-1/2"
      />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.1 }}
        className="mx-auto max-w-4xl px-6 pb-20 pt-32 text-center sm:pt-40"
      >
        <motion.a
          variants={fadeUp}
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-500/20 dark:text-indigo-300"
        >
          <Sparkles className="h-3.5 w-3.5" />
          2 live products shipped
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-lg font-medium text-muted-foreground"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-1 text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="mt-3 bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text pb-2 text-3xl font-semibold tracking-tight text-transparent sm:text-5xl"
        >
          {siteConfig.role}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {siteConfig.intro}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className={cn(buttonVariants({ size: "lg" }), "shadow-lg shadow-indigo-500/20")}
          >
            View my work <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            <Mail className="h-4 w-4" /> Get in touch
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-16 max-w-xl overflow-hidden rounded-xl border border-border bg-card/80 text-left shadow-2xl shadow-indigo-500/10 backdrop-blur"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">profile.ts</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 sm:p-5 sm:text-[13px]">
            <code>
              {lines.map((line, i) => (
                <div key={i} className="whitespace-pre">
                  {line.map(([text, kind], j) => (
                    <span key={j} className={kind ? colors[kind] : "text-muted-foreground"}>
                      {text}
                    </span>
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </motion.div>
      </motion.div>
    </section>
  );
}