import type { Metadata } from "next";
import "./styles/global.css";

export const metadata: Metadata = {
  title: "Product list with cart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-rose-50 min-h-[1361px]">{children}</body>
    </html>
  );
}
