export type Theme = "light" | "dark"
export type Page = "home" | "contact" | "projects"
export type CareerMode = "exp" | "edu"

export interface Career {
	id: number;
	type: CareerMode;
	title: string;
	institution: string;
	start_date: string;
	end_date: string;
	descriptions: string[];
	extra: string[];
}


export * from "./context"
