import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "500",
})

export const metadata: Metadata = {
  title: "Interactive Card Details Form",
  description:
    "Interactive Card Details Form - This is the solution for a challenge from the Frontend Mentor platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${SpaceGrotesk.className}`}>{children}</body>
    </html>
  )
}
