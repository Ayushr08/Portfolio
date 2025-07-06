import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayush Raj',
  description: 'Created by Ayush Raj',
  generator: 'Ayush Raj',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
