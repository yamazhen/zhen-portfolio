import { ArrowRight, Github, Globe } from "lucide-react";
import Link from "next/link";

type ProjectSourceType = "github" | "website"

interface ProjectSource {
	name: string
	type: ProjectSourceType
	url: string
}

interface Project {
	id: number
	name: string
	description: string
	techStack: string[]
	source: ProjectSource[]
}

export default function HomeProjectBox() {
	const projects: Project[] = [
		{
			id: 1,
			name: "Soma",
			description: "A desktop study app with note-taking, quizzes, and flashcards, powered by a fine-tuned AI to generate materials from user input.",
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
					type: "github",
					url: "https://github.com/yamazhen/soma-electron",
				},
				{
					name: "Source (Server)",
					type: "github",
					url: "https://github.com/yamazhen/soma-server",
				},
				{
					name: "Source (AI)",
					type: "github",
					url: "https://github.com/yamazhen/soma-ai",
				},
			],
		},
		{
			id: 2,
			name: "Hivemind",
			description:
				"A web app replicating Reddit's core features: posting, commenting, and voting.",
			techStack: ["JavaScript", "React", "Express", "MongoDB", "TailwindCSS"],
			source: [
				{
					name: "Source",
					type: "github",
					url: "https://github.com/yamazhen/hivemind",
				},
			],
		}
	]

	return <>
		{projects.map(project => {
			return (
				<Link key={`p${project.id}`} href={"/projects"} className="bg-border/50 rounded-sm border-hover-animate transition-all duration-500 p-8 flex flex-col gap-6 hover:-translate-y-1" >
					<h1 className="font-bold text-lg max-md:text-base">{project.name}</h1>
					<p className="text-muted text-sm max-md:text-xs">{project.description}</p>
					<div className="flex items-center gap-2 text-xs flex-wrap max-md:text-[10px]">
						{project.techStack.map((tech, idx) => {
							return (
								<button key={`p${project.id}-t${idx}`} className="bg-border max-md:px-1.5 px-3 py-1.5 rounded-sm border border-border hover:border-accent hover:bg-accent/20 duration-500 transition-colors">{tech}</button>
							)
						})}
					</div>
					<div className="flex items-center gap-4 text-xs flex-wrap max-md:text-[10px]">
						{project.source.map((src, idx) => {
							return (
								<div key={`p${project.id}-s${idx}`} className="flex items-center gap-2 text-accent transition-colors duration-300 border-accent border max-md:px-2 px-3 py-1.5 rounded-sm bg-accent/10 glass-hover">
									{src.type === "github" ? (
										<Github strokeWidth={1.5} size={15} />
									) : (
										<Globe strokeWidth={1.5} size={15} />
									)}
									{src.name}
								</div>
							)
						})}
					</div>
				</Link >
			)
		})}
	</>
}
