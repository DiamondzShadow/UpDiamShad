import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import AnnouncementBanner from "@/components/announcement-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diamondz Shadow | Web3 Technology",
  description: "A blockchain platform enabling secure and scalable decentralized applications",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <AnnouncementBanner />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
