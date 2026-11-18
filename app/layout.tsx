
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Annapandi | Software Developer Portfolio",
  description:
    "Rahul Annapandi — IT graduate, software developer and AI enthusiast. Explore projects, skills, education and technical work.",
  keywords: [
    "Rahul Annapandi",
    "Software Developer",
    "Python Developer",
    "IT Graduate",
    "AI",
    "Machine Learning",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
