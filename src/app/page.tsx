import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { CV } from "@/components/sections/cv";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Projects />
        <Skills />
        <Experience />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}