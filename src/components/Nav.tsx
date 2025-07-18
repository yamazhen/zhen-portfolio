"use client";

import { useAppContext } from "@/context/AppContext";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

function Nav() {
  const { setCurrentPage, theme, setTheme } = useAppContext();
  return (
    <nav className="h-16 flex items-center justify-center fixed w-full bg-background/50 backdrop-blur z-50 max-md:px-4">
      <div className="flex justify-between md:w-[600px] w-full">
        <Link
          className="font-jetbrains text-2xl italic"
          href={"/"}
          onClick={() => setCurrentPage("home")}
        >
          zhen
        </Link>
        <div className="flex gap-4 text-foreground/50 items-center">
          <Link
            className="hover:text-foreground"
            href={"/projects"}
            onClick={() => setCurrentPage("projects")}
          >
            projects
          </Link>
          <Link
            className="hover:text-foreground"
            href={"/contact"}
            onClick={() => setCurrentPage("contact")}
          >
            contact
          </Link>
          {theme === "dark" ? (
            <Moon
              size={18}
              strokeWidth={1.5}
              className="text-blue-500 hover:text-blue-500/75 cursor-pointer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <Sun
              size={18}
              strokeWidth={1.5}
              className="text-orange-300/80 hover:text-orange-300 cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
