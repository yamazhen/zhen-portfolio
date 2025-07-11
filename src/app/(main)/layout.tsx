import type { Metadata } from "next";
import { JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { AppProvider } from "@/context/AppContext";
import React from "react";
import { Copyright, Github, Linkedin, Mail } from "lucide-react";

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
              <div className="w-[600px]">
                {children}
                <footer className="flex items-center justify-between my-10 text-xs">
                  <div id="footerLeft" className="flex items-center gap-2">
                    <Copyright strokeWidth={1} size={12} />
                    2025 zhen.software | privacy
                  </div>
                  <div id="footerRight" className="flex items-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/bowen-chong-xian-zhen-821657180/"
                      target="_blank"
                      rel="noopener noreferer"
                    >
                      <Linkedin
                        strokeWidth={1.5}
                        className="text-foreground/50 hover:text-foreground cursor-pointer"
                        size={18}
                      />
                    </a>
                    <a
                      href="https://www.github.com/yamazhen"
                      target="_blank"
                      rel="noopener noreferer"
                    >
                      <Github
                        strokeWidth={1.5}
                        className="text-foreground/50 hover:text-foreground cursor-pointer"
                        size={18}
                      />
                    </a>
                    <a href="mailto:bowxyt@gmail.com">
                      <Mail
                        strokeWidth={1.5}
                        className="text-foreground/50 hover:text-foreground cursor-pointer"
                        size={18}
                      />
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
