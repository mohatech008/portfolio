"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "spotlight relative overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-indigo-400/40",
        className
      )}
    >
      <div className="spotlight-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
      <div className="relative">{children}</div>
    </div>
  );
}