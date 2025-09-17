"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  Github,
  ChevronDown,
  User,
  LogOut,
  Settings,
  Trophy,
  Wallet,
  Loader2,
} from "lucide-react";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/contracts";
import { useAuth } from "@/hooks/useAuth";
import { useLoading } from "@/hooks/useLoading";
import { formatUserDisplayName, getUserVerificationBadge } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();
  const {
    user,
    isAuthenticated,
    logout,
    setIsAuthModalOpen,
    setIsWalletManagerOpen,
  } = useAuth();
  const { setLoading } = useLoading();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Manage body scroll when user menu is open
  useEffect(() => {
    if (isUserMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isUserMenuOpen]);

  const handleDashboardNavigation = async () => {
    setLoading(
      true,
      "Preparing your creator experience...",
      "Loading Dashboard"
    );
    setIsUserMenuOpen(false);

    try {
      await router.push("/dashboard");
    } finally {
      // Keep loading for a brief moment to show the modal
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative h-12 w-auto md:w-48 mr-2">
                <Image
                  src="/nft7.jpg"
                  alt="Diamondz Shadow Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="hidden md:ml-10 md:flex md:space-x-6">
              <Link
                href="/ecosystem"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Architecture
              </Link>
              <Link
                href="/movies"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Productions
              </Link>
              <Link
                href="/nfts"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                NFTs
              </Link>
              <Link
                href="/creators"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Creators
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* GitHub Link */}
            <Link
              href="https://github.com/DiamondzShadow"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </Link>

            {/* Authentication Section */}
            {isAuthenticated && user ? (
              <>
                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {formatUserDisplayName(user).charAt(0).toUpperCase()}
                    </div>
                    <div className="text-left">
                      <div className="text-white text-sm font-medium flex items-center gap-1">
                        {formatUserDisplayName(user)}
                        <span className="text-xs">
                          {getUserVerificationBadge(user.verificationLevel)}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-2 mt-2 w-56 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1" role="menu">
                        <div className="px-4 py-2 border-b border-gray-700">
                          <p className="text-xs text-gray-400">Signed in as</p>
                          <p className="text-sm font-medium text-white">
                            {user.email}
                          </p>
                        </div>
                        <button
                          onClick={handleDashboardNavigation}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                        >
                          <User className="h-4 w-4 mr-2" />
                          Dashboard
                        </button>
                        <button
                          onClick={() => {
                            setIsWalletManagerOpen(true);
                            setIsUserMenuOpen(false);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                        >
                          <Wallet className="h-4 w-4 mr-2" />
                          Wallet Manager
                        </button>
                        <Link
                          href="/settings"
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-800"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => setIsAuthModalOpen(true)}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-gray-800"
                >
                  <User className="h-4 w-4 mr-2" />
                  Get Started
                </Button>
              </div>
            )}
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/ecosystem"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              Architecture
            </Link>
            <Link
              href="/movies"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              Productions
            </Link>
            <Link
              href="/nfts"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              NFTs
            </Link>
            <Link
              href="/governance"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              Governance
            </Link>
            <Link
              href="/creators"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              Creators
            </Link>

            {/* Blockchain section in mobile menu */}
            <div className="border-t border-gray-800 pt-2 mt-2">
              <div className="text-gray-500 px-3 py-1 text-xs uppercase font-bold">
                Blockchain
              </div>
              <Link
                href="/blockchain/contracts"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium pl-6"
              >
                Contract Details
              </Link>
              <Link
                href="/blockchain/interact"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium pl-6"
              >
                Interact with Contracts
              </Link>
              <Link
                href="/integrations/youtube-adapter"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium pl-6"
              >
                YouTube Adapter
              </Link>
            </div>

            <div className="flex items-center space-x-4 px-3 pt-3">
              <Link
                href="https://github.com/DiamondzShadow"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
