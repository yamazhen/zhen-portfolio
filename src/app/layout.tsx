import { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({
	variable: "--font-jetbrains",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Zhen",
	description: "Bowen's Portfolio Site",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${jetBrains.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
