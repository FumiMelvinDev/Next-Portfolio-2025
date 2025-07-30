import Link from "next/link";
import React from "react";

type Project = {
  title: string;
  description: string;
  github: string;
  url?: string;
};

const projectslist: Project[] = [
  {
    title: "Nextjs AI Notes App",
    description:
      "Nextjs notes taking app powered by Google Gemini and supabase, which helps you search for information related to your notes.",
    github: "https://github.com/FumiMelvinDev/NextJs_AI_NotesApp",
    url: "https://next-js-ai-notes-app-zejl-zeta.vercel.app/",
  },
  {
    title: "Flutter Quotes Generator",
    description:
      "An amazing Flutter quote generator with the abality to share quotes directly to social media platforms.",
    github: " https://github.com/FumiMelvinDev/flutter_quotes_app",
  },
  {
    title: "Flutter AI Notes App",
    description:
      "Flutter notes taking app powered by Google Gemini and supabase, which helps you search for information related to your notes. This is my favourite project because it helped me realized that with a proper blueprint I can make anything.",
    github: "https://github.com/FumiMelvinDev/Flutter-AI-Notes-App",
  },
  {
    title: " Flutter Currency Converter",
    description:
      "Android Currency Converter using Flutter. Real-time Exchange Rates: Access live exchange rates directly from Open Exchange Rates API, ensuring precision and reliability in currency conversion.",
    github: " https://github.com/FumiMelvinDev/flutter_currency_converter",
  },
];

function Projects() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-custom-800">
        Some of the noteworthy projects I have built:
      </h2>
      {projectslist.map((project) => (
        <div key={project.title} className="">
          <h3>{project.title}</h3>
          <p className="body-2 text-custom-700">{project.description}</p>
          <Link href={project.github} className="text-blue-500 hover:underline">
            View on GitHub
          </Link>
          {project.url && (
            <Link href={project.url} className="text-blue-500 hover:underline">
              View Live
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
