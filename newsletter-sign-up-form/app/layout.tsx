import type { Metadata } from "next"
import "./globals.css"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Newsletter sign-up form",
  description:
    "Newsletter Sign-Up Form – This is the solution for a challenge from the Frontend Mentor platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="flex min-h-screen items-center justify-center bg-charcoal-grey">
        {children}
      </body>
    </html>
  )
}
