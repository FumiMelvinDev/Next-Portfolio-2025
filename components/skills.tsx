import Image from "next/image";
import React from "react";

interface Skill {
  id: number;
  name: string;
  icon: string;
}

function Skills() {
  const skills: Skill[] = [
    { id: 1, name: "JavaScript", icon: "javascript" },
    { id: 2, name: "TypeScript", icon: "typescript" },
    { id: 3, name: "Node.js", icon: "nodejs" },
    { id: 4, name: "React.js", icon: "react" },
    { id: 5, name: "Next.js", icon: "nextjs" },
    { id: 6, name: "Express", icon: "express" },
    { id: 7, name: "Flutter", icon: "flutter" },
    { id: 8, name: "MongoDB", icon: "mongodb" },
    { id: 9, name: "PostgreSQL", icon: "postgresql" },
    { id: 10, name: "Prisma", icon: "prisma" },
    { id: 11, name: "Angular", icon: "angular" },
    { id: 12, name: "HTML5", icon: "html5" },
    { id: 13, name: "Tailwind CSS", icon: "tailwindcss" },
    { id: 14, name: "Git", icon: "git" },
    { id: 15, name: "Supabase", icon: "supabase" },
    { id: 16, name: "Firebase", icon: "firebase" },
    { id: 17, name: "C#", icon: "csharp" },
    { id: 18, name: "Blazor", icon: "blazor" },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-custom-800">
        The skills, tools and technologies I am really good at:
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center space-y-1">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/" +
                skill.icon +
                "/" +
                skill.icon +
                "-original.svg"
              }
              alt={skill.name}
              width={48}
              height={48}
            />
            <span className="text-custom-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
