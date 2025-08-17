"use client";

import { AppState, Theme, Page, CareerMode } from "@/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AppContext = createContext<AppState | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>("dark")
	const [page, setPage] = useState<Page>("home")
	const [careerMode, setCareerMode] = useState<CareerMode>("exp")
	const [hamburgerExpand, setHamburgerExpand] = useState<boolean>(false)

	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme])

	return (
		<AppContext.Provider value={{ theme, setTheme, page, setPage, careerMode, setCareerMode, hamburgerExpand, setHamburgerExpand }}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => useContext(AppContext)!
