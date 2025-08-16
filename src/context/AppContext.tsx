"use client";

import { AppState, Theme, Page } from "@/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AppContext = createContext<AppState | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>("dark")
	const [page, setPage] = useState<Page>("home")

	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme])

	return (
		<AppContext.Provider value={{ theme, setTheme, page, setPage }}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => useContext(AppContext)!
