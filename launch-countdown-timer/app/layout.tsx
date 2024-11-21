import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const RedHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Launch countdown timer",
  description:
    "Launch countdown timer - This is the solution for a challenge from the Frontend Mentor platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RedHatText.className} antialiased`}>{children}</body>
    </html>
  );
}
