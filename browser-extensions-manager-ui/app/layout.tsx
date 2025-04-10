import "./globals.css"

import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"

const geistSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Browser extensions manager UI",
  description:
    "Browser extensions manager UI – This is the solution for a challenge from the Frontend Mentor platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
        style={{ backgroundImage: `var(--color-gradient)` }}
      >
        {children}
      </body>
    </html>
  )
}
