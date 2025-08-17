"use client";

import CareerBox from "@/components/CareerBox";
import HomeProjectBox from "@/components/HomeProjectBox";
import PageSection from "@/components/PageSection";
import Typewriter from "@/components/Typewriter";
import { Github, Linkedin, LucideMail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const age = new Date().getFullYear() - 2002;

	return (
		<>
			<PageSection first>
				<div className="flex items-center gap-6 max-lg:flex-col py-8 max-lg:items-start">
					<div className="flex flex-col gap-8 max-lg:gap-4 max-md:gap-2 max-lg:order-1">
						<small className="max-lg:text-xs"><span className="text-accent">~/portfolio</span> $ cat intro.txt</small>
						<Typewriter text="hi, bowen here. 👋" className="text-accent max-lg:text-4xl max-md:text-base text-5xl font-bold whitespace-nowrap" />
						<p className="text-muted max-md:text-xs">{age}yo software engineer from Malaysia</p>
						<p className="max-lg:text-sm">Fullstack by trade, I solve problems with code and deploy solutions with spite.</p>
						<div className="flex items-center gap-4 text-sm max-md:text-xs">
							<a href="/file/resume.pdf" download className="text-background bg-accent hover:bg-accent-dim max-md:px-3 max-md:py-1.5 transition-all duration-500 rounded-sm px-6 py-3 hover:shadow-accent-dim/50 hover:shadow-[0_0_30px] cursor-pointer">Resume</a>
							<Link href={"/projects"} className="border border-border bg-background px-6 py-3 rounded-sm max-md:px-3 max-md:py-1.5 hover:border-accent glass-hover duration-500 transition-colors cursor-pointer">Projects</Link>
							<a href="https://github.com/yamazhen" target="_blank" rel="noopener noreferrer"><Github strokeWidth={1} className="text-muted hover:text-accent transition-colors duration-500 cursor-pointer max-md:h-4 max-md:w-4" /></a>
							<a href="https://linkedin.com/in/yamazhen" target="_blank" rel="noopener noreferrer"><Linkedin strokeWidth={1} className="text-muted hover:text-accent transition-colors duration-500 cursor-pointer max-md:h-4 max-md:w-4" /></a>
							<a href="mailto:bowxyt@gmail.com"><LucideMail strokeWidth={1} className="text-muted hover:text-accent transition-colors duration-500 cursor-pointer max-md:h-4 max-md:w-4" /></a>
						</div>
					</div>
					<div className="flex items-center w-full h-full justify-start">
						<Image src="/img/me.JPG" alt="picture of me" width={1000} height={1000} className="rounded-xl md:h-64 md:w-64 lg:w-full lg:h-full" />
					</div>
				</div>
			</PageSection>
			<PageSection className="max-lg:mb-20">
				<h2 className="font-bold text-2xl max-lg:mt-20 mb-10 section-title max-lg:text-base">featured projects</h2>
				<div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10">
					<HomeProjectBox />
				</div>
			</PageSection>
			<PageSection className="mb-20">
				<small className="mb-8"><span className="text-accent">~/career</span> $ ls experience/ education/</small>
				<h2 className="font-bold text-2xl mb-16 section-title">experience &amp; education</h2>
				<CareerBox />
			</PageSection>
		</>
	)
}
