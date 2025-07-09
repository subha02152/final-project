import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neesh Interior & Exterior - Professional Design Solutions",
  description:
    "Transform your spaces with Neesh Interior & Exterior. Specializing in false ceiling, toughened glass, aluminium fabrication, SS railing works, plywood cupboards, and exterior elevation services.",
  keywords:
    "interior design, exterior design, false ceiling, toughened glass, aluminium fabrication, stainless steel railing, plywood cupboards, exterior elevation, Mumbai interior designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
