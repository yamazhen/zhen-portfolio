"use client";

import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProjectBox() {
  const projects = [
    {
      id: 1,
      image: "/img/soma.png",
      name: "Soma",
      description:
        "A desktop study app with note-taking, quizzes, and flashcards, powered by a fine-tuned AI to generate materials from user input.",
      techStack: [
        "Electron",
        "React",
        "TailwindCSS",
        "PostgreSQL",
        "FastAPI",
        "Express",
        "Fastify",
        "TypeScript",
        "Python",
        "unsloth",
        "Jupyter",
        "Turbo",
        "Docker",
        "Memcached",
        "Kubernetes",
      ],
      source: [
        {
          name: "Source (Electron)",
          url: "https://github.com/yamazhen/soma-electron",
        },
        {
          name: "Source (Server)",
          url: "https://github.com/yamazhen/soma-server",
        },
        {
          name: "Source (AI)",
          url: "https://github.com/yamazhen/soma-ai",
        },
      ],
    },
    {
      id: 2,
      image: "/img/hivemind.png",
      name: "Hivemind",
      description:
        "A web app replicating Reddit's core features: posting, commenting, and voting.",
      techStack: ["JavaScript", "React", "Express", "MongoDB", "TailwindCSS"],
      source: [
        {
          name: "Source",
          url: "https://github.com/yamazhen/hivemind",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-10">
      {projects.map((project) => {
        return (
          <div
            className="border border-zhen-highlight rounded-xs p-4 flex flex-col"
            key={`p${project.id}`}
          >
            <Link href={"/projects"}>
              <Image
                src={project.image}
                alt={`${project.name} showcase`}
                width={1000}
                height={100}
                className="rounded-sm mb-4 self-center cursor-pointer"
              />
              <h1 className="text-sm mb-1 cursor-pointer">{project.name}</h1>
              <p className="text-xs text-foreground/75 cursor-pointer">{project.description}</p>
            </Link>
            <div className="flex items-center flex-wrap mt-8 text-[10px] gap-1">
              {project.techStack.map((tech, idx) => {
                return (
                  <div
                    key={`p${project.id}-t${idx}`}
                    className="bg-zhen-highlight rounded-sm px-1 py-0.5"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center flex-wrap mt-4 text-[10px] gap-2 text-background">
              {project.source.map((src, idx) => {
                return (
                  <button
                    key={`p${project.id}-s${idx}`}
                    onClick={() => window.open(src.url, '_blank')}
                    className="bg-foreground rounded-xs px-2 py-1 flex items-center gap-1 cursor-pointer hover:opacity-80"
                  >
                    <Github strokeWidth={1.5} size={14} />
                    {src.name}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectBox;
