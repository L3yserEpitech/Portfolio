import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Jules | Web3 Fullstack Developer",
  description: "Portfolio of a Web3 Fullstack Developer & Epitech Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
