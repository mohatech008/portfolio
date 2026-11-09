import { techIcons } from "@/components/tech-icons";

export function TechMarquee() {
  const names = Object.keys(techIcons);
  const loop = [...names, ...names];

  return (
    <section
      aria-label="Technologies I work with"
      className="border-y border-border/60 bg-muted/20 py-6"
    >
      <div className="marquee overflow-hidden">
        <ul className="marquee-track">
          {loop.map((name, i) => {
            const entry = techIcons[name];
            return (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= names.length}
                className="flex shrink-0 items-center gap-2.5 pr-12 text-sm text-muted-foreground"
              >
                <entry.Icon
                  className="h-5 w-5 text-foreground"
                  style={entry.color ? { color: entry.color } : undefined}
                />
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}