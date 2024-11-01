import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

export const metadata: Metadata = {
  title: "Base Apparel coming soon page",
  description: "Base Apparel coming soon page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={JosefinSans.className}>{children}</body>
    </html>
  )
}
