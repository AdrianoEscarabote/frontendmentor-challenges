import type { Metadata } from "next"
import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"
import Head from "next/head"

const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mortgage repayment calculator",
  description:
    "Mortgage repayment calculator – This is the solution for a challenge from the Frontend Mentor platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={PlusJakartaSans.className}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="flex items-center justify-center min-h-screen bg-slate100">{children}</body>
    </html>
  )
}
