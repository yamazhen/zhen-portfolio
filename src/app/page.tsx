"use client";

import PageSection from "@/components/PageSection";
import Typewriter from "@/components/Typewriter";
import { Github, Linkedin, LucideMail } from "lucide-react";
import Image from "next/image";

export default function Home() {
	const age = new Date().getFullYear() - 2002;

	return (
		<>
			<PageSection first>
				<div className="flex items-center gap-10">
					<div className="flex flex-col gap-8">
						<small><span className="text-accent">~/portfolio</span> $ cat intro.txt</small>
						<Typewriter text="hi, bowen here. 👋" className="text-accent text-5xl font-bold" />
						<p className="text-muted">{age}yo software engineer from Malaysia</p>
						<p>Fullstack by trade, I solve problems with code and deploy solutions with spite. Currently building the future one commit at a time.</p>
						<div className="flex items-center gap-4 text-sm">
							<button className="text-background bg-accent hover:bg-accent-dim transition-all duration-500 rounded-sm px-6 py-3 hover:shadow-accent-dim/50 hover:shadow-[0_0_30px] cursor-pointer">Resume</button>
							<button className="border border-border bg-background px-6 py-3 rounded-sm hover:border-accent glass-hover duration-500 transition-colors cursor-pointer">Projects</button>
							<Github strokeWidth={1} className="text-muted hover:text-accent transition-colors duration-500 cursor-pointer" />
							<Linkedin strokeWidth={1} className="text-muted hover:text-accent transition-colors duration-500 cursor-pointer" />
							<LucideMail strokeWidth={1} className="text-muted hover:text-accent transition-colors duration-500 cursor-pointer" />
						</div>
					</div>
					<div className="flex items-center">
						<Image src="/img/me.JPG" alt="picture of me" width={600} height={600} className="rounded-xl" />
					</div>
				</div>
			</PageSection>
			<PageSection>
				featured projects
			</PageSection>
		</>
	)
}
