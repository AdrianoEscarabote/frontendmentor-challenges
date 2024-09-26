import type { Metadata } from "next"
import "./globals.css"
import { DM_Sans } from "next/font/google"
import Head from "next/head"

const DmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Mentor | Bento grid",
  description:
    "Bento grid – This is the solution for a challenge from the Frontend Mentor platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={DmSans.className}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="bg-[#F5F5F5]">{children}</body>
    </html>
  )
}
