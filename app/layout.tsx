import './globals.css'

import {Work_Sans} from 'next/font/google'

export const metadata = {
  title: 'Air BnB Clone',
  description: 'Air BnB Clone built with Next.js and Tailwind CSS',
}

const font = Work_Sans({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >{children}</body>
    </html>
  )
}
