import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const KumbhSans = Kumbh_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce product page",
  description:
    "E-commerce product page - This is the solution for a challenge from the Frontend Mentor platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${KumbhSans.className} antialiased`}>{children}</body>
    </html>
  );
}
