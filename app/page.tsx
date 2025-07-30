import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="max-w-7xl px-40">
      <Header />
      <div className="flex flex-col space-y-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
