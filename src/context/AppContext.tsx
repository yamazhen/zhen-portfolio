"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Pages = "home" | "about" | "projects" | "contact";
type Theme = "light" | "dark";

type AppState = {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Pages>("home");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <AppContext.Provider
      value={{ currentPage, setCurrentPage, theme, setTheme }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
