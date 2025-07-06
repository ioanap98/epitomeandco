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
  title: "Helping Small Brands & Creators Stand Out Online | Epitome & Co",
  description:
    "Simple & stylish portfolio websites built for creatives and small brands. Let’s craft a custom one-page or multi-page showcase that truly represents your work.",
  robots: "index, follow",
  openGraph: {
    title:
      "Helping Small Brands & Creators Stand Out Online | Epitome & Co",
    description:
      "Custom portfolio websites designed with clean layouts, subtle animations, and aftercare guidance to help your brand shine.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",           // favicon for browsers
    shortcut: "/logo.png",       // legacy “shortcut icon”
    apple: "/logo.png",          // iOS home-screen icon
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
    </html>
  )
}
