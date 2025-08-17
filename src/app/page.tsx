"use client";

import CareerBox from "@/components/CareerBox";
import HomeProjectBox from "@/components/HomeProjectBox";
import PageSection from "@/components/PageSection";
import Typewriter from "@/components/Typewriter";
import { Github, Linkedin, LucideMail } from "lucide-react";
import Image from "next/image";

export default function Home() {
	const age = new Date().getFullYear() - 2002;

	return (
		<>
			<PageSection first>
				<div className="flex items-center gap-6 max-md:flex-col">
					<div className="flex flex-col gap-8 max-md:gap-2 order-1">
						<small className="max-md:text-xs"><span className="text-accent">~/portfolio</span> $ cat intro.txt</small>
						<Typewriter text="hi, bowen here. 👋" className="text-accent max-md:text-base text-5xl font-bold whitespace-nowrap" />
						<p className="text-muted max-md:text-xs">{age}yo software engineer from Malaysia</p>
						<p className="max-md:text-sm">Fullstack by trade, I solve problems with code and deploy solutions with spite.</p>
						<div className="flex items-center gap-4 text-sm max-md:text-xs">
							<button className="text-background bg-accent hover:bg-accent-dim max-md:px-3 max-md:py-1.5 transition-all duration-500 rounded-sm px-6 py-3 hover:shadow-accent-dim/50 hover:shadow-[0_0_30px] cursor-pointer">Resume</button>
							<button className="border border-border bg-background px-6 py-3 rounded-sm max-md:px-3 max-md:py-1.5 hover:border-accent glass-hover duration-500 transition-colors cursor-pointer">Projects</button>
							<Github strokeWidth={1} className="text-muted hover:text-accent transition-colors duration-500 cursor-pointer max-md:h-4 max-md:w-4" />
							<Linkedin strokeWidth={1} className="text-muted hover:text-accent transition-colors duration-500 cursor-pointer max-md:h-4 max-md:w-4" />
							<LucideMail strokeWidth={1} className="text-muted hover:text-accent transition-colors duration-500 cursor-pointer max-md:h-4 max-md:w-4" />
						</div>
					</div>
					<div className="flex items-center">
						<Image src="/img/me.JPG" alt="picture of me" width={500} height={500} className="rounded-xl" />
					</div>
				</div>
			</PageSection>
			<PageSection className="max-md:mb-20">
				<h2 className="font-bold text-2xl max-md:mt-20 mb-10 section-title max-md:text-base">featured projects</h2>
				<div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
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
