import type React from "react"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})


// app/page.tsx (or app/layout.tsx)

// app/page.tsx

export const metadata = {
  title: 'Epitome & Co | Portfolio Websites for Small Brands & Creators',
  description: 'Helping small brands & creators stand out online with simple, stylish portfolio websites—thoughtful design, client-focused, growth-oriented, and fast & reliable.',
  keywords: [
    'portfolio website design',
    'small brand web design',
    'creator portfolio sites',
    'freelance web developer UK',
    'custom portfolio website',
    'Epitome & Co'
  ],
  authors: [{ name: 'Epitome & Co', url: 'https://epitomeandco.com' }],
  creator: 'Epitome & Co',
  metadataBase: new URL('https://epitomeandco.com'),
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png'
  },
  openGraph: {
    title: 'Epitome & Co | Portfolio Websites for Small Brands & Creators',
    description: 'Stand out online with a custom portfolio site from Epitome & Co—helping creators and small brands showcase their work with simple, stylish, high-performing designs.',
    url: 'https://epitomeandco.com',
    siteName: 'Epitome & Co',
    images: [
      {
        url: 'https://epitomecreatives.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Screenshot of a clean, stylish portfolio website by Epitome & Co',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epitome & Co | Stand Out Online with Stylish Portfolio Websites',
    description: 'Custom portfolio websites for small brands & creators—thoughtful design, interactive elements, and reliable performance.'  
  },
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}
