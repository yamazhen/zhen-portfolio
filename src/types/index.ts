export type Theme = "light" | "dark";
export type Page = "home" | "contact" | "projects";
export type CareerMode = "EXPERIENCE" | "EDUCATION";

export interface Career {
	id: number;
	type: CareerMode;
	title: string;
	institution: string;
	start_date: string;
	end_date: string | null;
	descriptions: string[];
	extra: string[];
	display_order: number;
}

export const CareerModeSelect = {
	EXPERIENCE: "Experience",
	EDUCATION: "Education",
};

export * from "./context";
