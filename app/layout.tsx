'use client'

import './globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from 'next/font/google'
import TopBar from '@/components/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MediClear',
  description: 'Empowering individuals to better understand their health reports',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <TopBar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
