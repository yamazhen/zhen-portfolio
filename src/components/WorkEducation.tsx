"use client";

import Image from "next/image";
import { useState } from "react";

export default function WorkEducation() {
  const [workEducationMode, setWorkEducationMode] = useState<
    "work" | "education"
  >("work");

  return (
    <>
      <div
        id="workEducationTabButtons"
        className="flex w-full gap-2 justify-center bg-zhen-highlight rounded-xs p-1"
      >
        <button
          className={`w-full cursor-pointer ${workEducationMode === "work" ? "bg-background" : ""}`}
          onClick={() => setWorkEducationMode("work")}
        >
          Work
        </button>
        <button
          className={`w-full cursor-pointer ${workEducationMode === "education" ? "bg-background" : ""}`}
          onClick={() => setWorkEducationMode("education")}
        >
          Education
        </button>
      </div>
      <div
        id="workEducationContent"
        className="mt-2 border-3 border-zhen-highlight px-2"
      >
        {workEducationMode === "work" ? (
          <div className="timeline">
            <div className="timeline-item my-8">
              <Image
                src="/img/containerverselogo.jpeg"
                alt="Test"
                width={50}
                height={50}
                className="rounded-full h-[50px] w-[50px] object-cover border-2 border-zhen-highlight"
              />
              <div className="flex flex-col text-xs">
                <small className="text-foreground/75">
                  August 2024 - Present
                </small>
                <h3 className="text-sm">Containerverse Sdn. Bhd.</h3>
                <small className="text-foreground/75 mb-1">
                  Web Developer (Remote)
                </small>
                <ul className="text-foreground/90 list-disc pl-4">
                  <li>
                    Lead the development for a comprehensive HR Management
                    System serving hypermarket company with 200+ employees
                  </li>
                  <li>
                    Maintained infrastructure, developed new features, and fixed
                    critical bugs for enhanced system reliability
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item mb-8">
              <Image
                src="/img/alvincambalogo.png"
                alt="Test"
                width={50}
                height={50}
                className="rounded-full h-[50px] w-[50px] object-cover border-2 border-zhen-highlight"
              />
              <div className="flex flex-col text-xs">
                <small className="text-foreground/75">March 2020</small>
                <h3 className="text-sm">
                  Alvin Camba{" "}
                  <a
                    href="https://alvincamba.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-foreground"
                  >
                    <small>alvincamba.com</small>
                  </a>
                </h3>
                <small className="text-foreground/75 mb-1">
                  Freelance Web Developer (Remote)
                </small>
                <ul className="text-foreground/90 list-disc pl-4">
                  <li>
                    Designed and developed a professional biography website for
                    a U.S. university professor, including a custom CMS for easy
                    content updates
                  </li>
                  <li>
                    Built responsive and accessible UI using HTML, CSS,
                    JavaScript, and PHP with performance optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="timeline">
            <div className="timeline-item my-8">
              <Image
                src="/img/dsulogo.jpeg"
                alt="Test"
                width={50}
                height={50}
                className="rounded-full h-[50px] w-[50px] object-cover border-2 border-zhen-highlight"
              />
              <div className="flex flex-col text-xs">
                <small className="text-foreground/75">
                  February 2023 - June 2025
                </small>
                <h3 className="text-sm">Dongseo University</h3>
                <small className="text-foreground/75 mb-1">
                  Bachelor of Computer Science
                </small>
                <ul className="text-foreground/90 list-disc pl-4">
                  <li>Graduated with Outstanding Academic Achievement</li>
                  <li>
                    Representative of the Computer Science Department in final
                    year
                  </li>
                  <li>
                    Published two research papers on AI use in Web Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
