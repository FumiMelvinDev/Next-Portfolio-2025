import type { Metadata } from "next";
import About from "@/components/about";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

export default function Home() {
  return (
    <main>
      <div className="flex flex-col space-y-10">
        <Hero />
        <About />
        <Skills />
        <RecentProjects />
      </div>
    </main>
  );
}
