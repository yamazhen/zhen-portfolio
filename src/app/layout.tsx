import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Nav from "@/components/Nav";
import GridBackground from "@/components/GridBackground";
import CustomCursor from "@/components/CustomCursor";

const jetBrains = JetBrains_Mono({
	variable: "--font-jetbrains",
	subsets: ["latin"],
	weight: "400",
})

export const metadata: Metadata = {
	title: "Zhen",
	description: "Bowen's Portfolio Site",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${jetBrains.variable} antialiased`}
			>
				<AppProvider>
					<CustomCursor />
					<main>
						<Nav />
						<GridBackground className="max-lg:px-6 lg:px-[150px]">
							{children}
						</GridBackground>
					</main>
				</AppProvider>
			</body>
		</html>
	);
}
