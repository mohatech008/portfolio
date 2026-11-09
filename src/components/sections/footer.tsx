import { siteConfig } from "@/data/site";
import { CurrentYear } from "@/components/current-year";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground">
        <p>
          © <CurrentYear /> {siteConfig.name}
        </p>
        <p>Built with Next.js, TypeScript and Tailwind CSS</p>
      </div>
    </footer>
  );
}