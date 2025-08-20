import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="max-w-7xl px-10 md:px-20 lg:px-32">
      <Header />
      <div className="flex flex-col space-y-10">
        <Hero />
        <About />
        <Skills />
        <RecentProjects />
      </div>
    </main>
  );
}
