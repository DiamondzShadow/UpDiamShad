import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import AnnouncementBanner from "@/components/announcement-banner"
import TestnetDisclaimer from "@/components/testnet-disclaimer"
import { ThirdwebProvider } from "thirdweb/react"
import { createThirdwebClient } from "thirdweb"

const inter = Inter({ subsets: ["latin"] })

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "",
})

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
        <ThirdwebProvider client={client}>
          <AnnouncementBanner />
          <TestnetDisclaimer />
          <Navbar />
          <main>{children}</main>
        </ThirdwebProvider>
      </body>
    </html>
  )
}
