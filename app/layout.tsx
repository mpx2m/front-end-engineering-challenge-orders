import type { Metadata } from 'next'
import StyledComponentsRegistry from '../lib/registry'
import { Inter } from 'next/font/google'
import 'normalize.css/normalize.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Front-end Engineering Challenge',
  description: 'Onsite Coding Challenge'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
