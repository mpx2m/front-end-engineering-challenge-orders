import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import { StoreProvider } from '@/lib/store/provider'
import { Inter } from 'next/font/google'
import 'normalize.css/normalize.css'
import './globals.css'
import DashBoardLayout from './_components/dashboard-layout'
import SocketLayer from './_components/socket-layer'

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
        <StyledComponentsRegistry>
          <StoreProvider>
            <DashBoardLayout>
              <SocketLayer>{children}</SocketLayer>
            </DashBoardLayout>
          </StoreProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
