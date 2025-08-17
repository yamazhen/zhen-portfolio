"use client"

import { useAppContext } from "@/context/AppContext"
import { Menu, Moon, Sun } from "lucide-react";
import Link from "next/link"

function Nav() {
	const { setPage, page, setTheme, theme, setHamburgerExpand, hamburgerExpand } = useAppContext();

	return (
		<nav className="border-b border-b-border font-bold h-16 flex items-center justify-between max-lg:px-6 lg:px-[150px] fixed w-full bg-background select-none z-10">
			<Link href={"/"} className="text-accent cursor-pointer">&gt; zhen.software</Link>
			<div className="flex items-center gap-2 sm:gap-8 text-sm text-muted">
				<div className={`flex items-center gap-8 transition-all duration-300 ${hamburgerExpand ? "max-sm:flex max-sm:flex-col max-sm:absolute max-sm:top-16 max-sm:left-0 max-sm: w-full max-sm:bg-background max-sm:border-b max-sm:border-border max-sm:py-4 max-sm:px-6 max-sm:z-20" : "max-sm:hidden"}`}>
					<Link onClick={() => setPage("home")} href={"/"} className={`nav-link ${page === "home" ? "active" : ""}`}>home</Link>
					<Link onClick={() => setPage("projects")} href={"/projects"} className={`nav-link ${page === "projects" ? "active" : ""}`}>projects</Link>
					<Link onClick={() => setPage("contact")} href={"/contact"} className={`nav-link ${page === "contact" ? "active" : ""}`}>contact</Link>
				</div>
				<div
					className="border border-border p-2 rounded-sm hover:border-accent hover:text-accent transition-colors duration-500 cursor-pointer active:border-border active:text-accent"
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				>
					{theme === "dark" ? (
						<Sun strokeWidth={1.5} size={16} />
					) : (
						<Moon strokeWidth={1.5} size={16} />
					)}
				</div>
				<div className="hover:text-accent transition-colors duration-500 border-background hover:border-accent active:border-accent active:text-accent border p-2 rounded-sm sm:hidden">
					<Menu strokeWidth={1.5} size={16} onClick={() => setHamburgerExpand(hamburgerExpand ? false : true)} />
				</div>
			</div>
		</nav>
	)
}

export default Nav
