"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import Image from "next/image";
const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="relative mx-auto flex h-12 max-w-3xl items-center justify-between rounded-full border border-border/60 bg-background/70 pl-5 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight">
  <Image
    src="/profile.jpeg"
    alt={siteConfig.name}
    width={28}
    height={28}
    className="h-7 w-7 rounded-full object-cover ring-2 ring-indigo-400/40"
  />
  <span>
    {siteConfig.name.split(" ")[0]}
    <span className="text-indigo-400">.dev</span>
  </span>
</a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={siteConfig.cv}
            download="Mohamed-Abdi-Ahmed-CV.pdf"
            className={buttonVariants({ size: "sm" }) + " rounded-full"}
          >
            CV
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full sm:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-14 rounded-2xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl sm:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}