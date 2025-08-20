import About from "@/components/about";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";

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
