import type { Metadata } from 'next'
import '../src/styles/globals.css'

export const metadata: Metadata = {
  title: 'KATA UI Library',
  description: 'A modern React component library with mono and colorful design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-kata antialiased">
        {children}
      </body>
    </html>
  )
}
