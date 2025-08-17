import { CareerMode, Page, Theme } from ".";

export type AppState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	page: Page;
	setPage: (page: Page) => void;
	careerMode: CareerMode;
	setCareerMode: (careerMode: CareerMode) => void;
	hamburgerExpand: boolean;
	setHamburgerExpand: (expand: boolean) => void;
}
