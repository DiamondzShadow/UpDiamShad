import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import AnnouncementBanner from "@/components/announcement-banner";
import { ThirdwebClientProvider } from "@/components/ThirdwebClientProvider";
import { AuthProvider } from "@/hooks/useAuth";
import { NotificationProvider } from "@/hooks/useNotifications";
import { LoadingProvider } from "@/hooks/useLoading";
import { NotificationContainer } from "@/components/NotificationContainer";
import LoadingModal from "@/components/LoadingModal";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import WalletManager from "@/components/WalletManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diamondz Shadow | Web3 Technology",
  description:
    "A blockchain platform enabling secure and scalable decentralized applications",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <NotificationProvider>
          <LoadingProvider>
            <AuthProvider>
              <ThirdwebClientProvider>
                <AnnouncementBanner />
                <Navbar />
                <main>{children}</main>
                <AuthModal />
                <WalletManager />
                <NotificationContainer />
                <LoadingModal />
              </ThirdwebClientProvider>
            </AuthProvider>
          </LoadingProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
