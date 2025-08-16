import { Page, Theme } from ".";

export type AppState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	page: Page;
	setPage: (page: Page) => void;
}
