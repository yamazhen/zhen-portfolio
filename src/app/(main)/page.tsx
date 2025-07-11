"use client";

import TypewriterText from "@/components/TypewriterText";
import WorkEducation from "@/components/WorkEducation";
import downloadResume from "@/hooks/downloadResume";
import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

// home page of the portfolio yo
export default function Home() {
  return (
    <>
      <section id="greeting" className="mt-10 flex justify-center items-center">
        <div id="greetingText" className="flex flex-col w-[800px] h-full">
          <TypewriterText
            text="Hi zhen here.👋"
            loop={false}
            className="text-4xl"
            speed={50}
          />
          <TypewriterText
            text="23yo software engineer from Malaysia 🇲🇾"
            className="mt-2"
            loop={false}
            speed={20}
          />
          <TypewriterText
            text="Fullstack by trade, I solve problems with code and deploy solutions with spite."
            className="mt-4"
            loop={false}
            speed={10}
          />
          <div id="greetingSocials" className="mt-4 flex gap-4 items-center">
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
        <div id="greetingImage" className="ml-4">
          <Image
            src="/img/me.jpg"
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
    </>
  );
}
