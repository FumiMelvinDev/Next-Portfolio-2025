import type { Metadata } from "next";
import Projects from "@/components/projects";
import { getProjects } from "@/lib/projects";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Projects | ${SITE.title}`,
  description: `A selection of projects by ${SITE.author}.`,
  alternates: { canonical: `${SITE.url}/projects` },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="pt-6">
      <div className="container max-w-3xl">
        <h1 className="title mb-12">Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  );
}
