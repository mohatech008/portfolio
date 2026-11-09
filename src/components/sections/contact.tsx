import { ArrowUpRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-16 px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgb(99_102_241/0.15),transparent_70%)]"
        />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I&apos;m open to full-stack and frontend roles, freelance projects
            and collaborations. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className={buttonVariants({ size: "lg" })}
            >
              <Mail className="mr-2 h-4 w-4" /> {siteConfig.email}
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              LinkedIn <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}