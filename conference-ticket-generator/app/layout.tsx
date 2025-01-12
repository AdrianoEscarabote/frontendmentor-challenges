import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const InconsolataClass = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Conference ticket generator",
  description:
    "Conference ticket generator – This is the solution for a challenge from the Frontend Mentor platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InconsolataClass.className} relative bg-orange-500 min-h-screen bg-[url('/images/pattern-lines.svg'),url(/images/background-desktop.png)] bg-no-repeat bg-cover`}
      >
        {children}
      </body>
    </html>
  );
}
