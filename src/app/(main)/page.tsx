"use client";

import ProjectBox from "@/components/ProjectBox";
import TypewriterText from "@/components/TypewriterText";
import WorkEducation from "@/components/WorkEducation";
import downloadResume from "@/hooks/downloadResume";
import { ArrowRight, FileUser, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// home page of the portfolio yo
export default function Home() {
  return (
    <>
      <section
        id="greeting"
        className="md:mt-10 mt-8 flex flex-col md:flex-row justify-center items-center"
      >
        <div
          id="greetingText"
          className="flex flex-col md:w-[800px] h-full max-sm:order-2 max-sm:mt-10 max-sm:text-center"
        >
          <TypewriterText
            text="hi bowen here.👋"
            loop={false}
            className="text-xl md:text-4xl"
            speed={10}
          />
          <TypewriterText
            text="23yo software engineer from Malaysia 🇲🇾"
            className="mt-2 max-sm:text-sm"
            loop={false}
            speed={10}
          />
          <TypewriterText
            text="Fullstack by trade, I solve problems with code and deploy solutions with spite."
            className="mt-4 max-sm:text-sm"
            loop={false}
            speed={10}
          />
          <div
            id="greetingSocials"
            className="mt-4 flex gap-4 items-center max-sm:justify-center"
          >
            <button
              className="flex px-4 py-2 rounded-xs cursor-pointer border-1 border-zhen-highlight hover:bg-zhen-highlight text-xs font-bold justify-center items-center gap-2"
              onClick={downloadResume}
            >
              Resume
              <FileUser strokeWidth={1.5} size={16} />
            </button>
            <a
              href="https://www.linkedin.com/in/bowen-chong-xian-zhen-821657180/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Linkedin
                strokeWidth={1.5}
                className="text-foreground/50 hover:text-foreground cursor-pointer"
                size={18}
              />
            </a>
            <a
              href="https://www.github.com/yamazhen"
              target="_blank"
              rel="noopener noreferer"
            >
              <Github
                strokeWidth={1.5}
                className="text-foreground/50 hover:text-foreground cursor-pointer"
                size={18}
              />
            </a>
            <a href="mailto:bowxyt@gmail.com">
              <Mail
                strokeWidth={1.5}
                className="text-foreground/50 hover:text-foreground cursor-pointer"
                size={18}
              />
            </a>
          </div>
        </div>
        <div id="greetingImage" className="md:ml-4 w-64">
          <Image
            src="/img/me.JPG"
            alt="Picture Of Me"
            width={350}
            height={350}
            className="rounded-xl object-cover object-center"
          />
        </div>
      </section>
      <section className="my-10">
        <WorkEducation />
      </section>
      <section className="my-16">
        <div className="flex justify-between items-center">
          <h1>featured projects</h1>
          <Link
            href={"/projects"}
            className="flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground"
          >
            view more
            <ArrowRight strokeWidth={1.5} size={16} />
          </Link>
        </div>
        <ProjectBox />
      </section>
    </>
  );
}
