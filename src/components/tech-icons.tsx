import type { ComponentType, CSSProperties } from "react";
import { Webhook } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiSupabase,
  SiPostgresql,
  SiResend,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

export type IconComponent = ComponentType<{
  className?: string;
  style?: CSSProperties;
}>;
export const techIcons: Record<string, { Icon: IconComponent; color?: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { Icon: SiFramer },
  Supabase: { Icon: SiSupabase, color: "#3FCF8E" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  "REST APIs": { Icon: Webhook, color: "#A78BFA" },
  Resend: { Icon: SiResend },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub },
  Vercel: { Icon: SiVercel },
  Netlify: { Icon: SiNetlify, color: "#00C7B7" },
};