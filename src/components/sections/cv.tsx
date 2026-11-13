"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function CV() {
  return (
    <section id="cv" className="mx-auto max-w-4xl scroll-mt-16 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:justify-between sm:p-8"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
            <FileText className="h-6 w-6" />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold tracking-tight">
              Want the full picture?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Download my CV for my experience, skills and project details in
              one page.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={siteConfig.cv}
            download="Mohamed Abdi Ahmed_CV.pdf"
            className={buttonVariants({ size: "lg" })}
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
          <a
            href={siteConfig.cv}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            View online <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}