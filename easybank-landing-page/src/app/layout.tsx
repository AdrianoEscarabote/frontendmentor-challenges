import type { Metadata } from "next"
import "./globals.css"
import Head from "next/head"
import { Public_Sans } from "next/font/google"

const PublicSans = Public_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Easybank landing page",
  description:
    "Easybank landing page – This is the solution for a challenge from the Frontend Mentor platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={PublicSans.className}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="relative w-full overflow-x-hidden overflow-y-scroll">
        <div
          className="relative w-full overflow-x-hidden overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
