import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Age calculator app",
  description:
    "Age calculator app – This is the solution for a challenge from the Frontend Mentor platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={PoppinsFont.className}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="bg-off-white">{children}</body>
    </html>
  )
}
