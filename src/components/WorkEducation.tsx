"use client";

import { useState } from "react";
import Timeline from "./Timeline";

export default function WorkEducation() {
  const [workEducationMode, setWorkEducationMode] = useState<
    "work" | "education"
  >("work");

  const workItems = [
    {
      id: 1,
      company: "Containerverse Sdn. Bhd.",
      position: "Web Developer (Remote)",
      period: "August 2024 - Present",
      logo: "/img/containerverselogo.jpeg",
      description: [
        "Lead the development for a comprehensive HR Management System serving hypermarket company with 200+ employees",
        "Maintained infrastructure, developed new features, and fixed critical bugs for enhanced system reliability",
      ],
    },
    {
      id: 2,
      company: "Alvin Camba",
      position: "Freelance Web Developer (Remote)",
      period: "March 2020",
      logo: "/img/alvincambalogo.png",
      website: "https://alvincamba.com",
      description: [
        "Designed and developed a professional biography website for a U.S. university professor, including a custom CMS for easy content updates",
        "Built responsive and accessible UI using HTML, CSS, JavaScript, and PHP with performance optimization",
      ],
    },
  ];

  const educationItems = [
    {
      id: 1,
      company: "Dongseo University",
      position: "Bachelor of Computer Science",
      period: "February 2023 - June 2025",
      logo: "/img/dsulogo.jpeg",
      description: [
        "Graduated with Outstanding Academic Achievement",
        "Representative of the Computer Science Department in final year",
        "Published two research papers on AI use in Web Development",
      ],
    },
  ];

  return (
    <>
      <div
        id="workEducationTabButtons"
        className="flex w-full gap-2 justify-center bg-zhen-highlight rounded-xs border border-zhen-highlight"
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
        className="mt-2 border border-zhen-highlight px-2 rounded-xs"
      >
        {workEducationMode === "work" ? (
          <Timeline timelineItems={workItems} />
        ) : (
          <Timeline timelineItems={educationItems} />
        )}
      </div>
    </>
  );
}
