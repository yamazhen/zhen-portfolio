"use client";

import { DivideCircle } from "lucide-react";
import { useState } from "react";

export default function WorkEducation() {
  const [workEducationMode, setWorkEducationMode] = useState<
    "work" | "education"
  >("work");

  return (
    <>
      <div
        id="workEducationTabButtons"
        className="flex w-full gap-2 justify-center bg-foreground/10 rounded-xs p-1"
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
        className="mt-2 border-3 border-foreground/10 p-2"
      >
        {workEducationMode === "work" ? (
          <div className="timeline">Work</div>
        ) : (
          <div className="timeline">Education</div>
        )}
      </div>
    </>
  );
}
