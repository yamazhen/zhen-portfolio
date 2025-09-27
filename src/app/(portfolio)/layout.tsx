import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Nav from "@/components/Nav";
import GridBackground from "@/components/GridBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

export default function PortfolioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AppProvider>
			<CustomCursor />
			<main>
				<Nav />
				<GridBackground className="max-md:px-6 max-lg:px-30 lg:px-[150px]">
					{children}
					<Footer />
				</GridBackground>
			</main>
		</AppProvider>
	);
}
