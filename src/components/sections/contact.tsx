import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const whatsappNumber = siteConfig.phone.replace(/\D/g, ""); // "+254712345678" -> "254712345678"

const methods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    Icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Chat with me",
    href: `https://wa.me/${whatsappNumber}`,
    Icon: FaWhatsapp,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(99_102_241/0.15),transparent_70%)]"
        />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I&apos;m open to full-stack and frontend roles, freelance projects
            and collaborations. Reach me the way that suits you best.
          </p>

          <ul className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            {methods.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:border-indigo-400/50 hover:bg-muted/50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}