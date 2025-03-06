import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import Footer from "./components/Footer";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";

const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "700"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Harjot Singh",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          let storedTheme = localStorage.getItem("theme");
          if (!storedTheme || storedTheme === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        })();
      `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.className} bg-white dark:bg-background antialiased w-full max-w-[70.5rem] mx-auto px-4 text-sm md:text-base `}
      >
        <NavbarWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
