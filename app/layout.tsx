import './globals.css'

import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'

import { ThemeProvider } from '@/app/_components/theme-provider/index'

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700'],
})

const DmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '600', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Weather app',
  description:
    'Responsive weather app for location-based forecasts, unit selection, and theme switching.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#181825" />
        <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
      </head>
      <body
        className={`${BricolageGrotesque.className} ${DmSans.className} bg-background antialiased dark:bg-neutral-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
