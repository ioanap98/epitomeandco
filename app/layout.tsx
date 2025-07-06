import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

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
    url: "https://yourdomain.com",          // ← swap in your real URL
    type: "website",
    images: [
      {
        url: "/images/og-hero.jpg",          // ← a representative hero image
        width: 1200,
        height: 630,
        alt: "Hero shot: clean portfolio web design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Simple Portfolio Websites for Creatives & Small Brands | Epitome & Co",
    description:
      "Clean, responsive one-page or multi-page sites with subtle animations and reliable launch support.",
    images: ["/images/og-hero.jpg"],
    creator: "@ioacreatives",              // ← your Twitter handle, if you have one
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
