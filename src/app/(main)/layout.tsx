import type { Metadata } from "next";
import { JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { AppProvider } from "@/context/AppContext";
import React from "react";
import Footer from "@/components/Footer";

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: "400",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Yamazhen",
  description: "yamazhen is my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains.variable} ${orbitron.variable} antialiased`}
      >
        <AppProvider>
          <main>
            <Nav />
            <span className="block h-16" />
            <div className="w-full flex justify-center">
              <div className="w-full md:w-[600px] max-md:px-8">{children}</div>
            </div>
            <Footer />
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
