"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Github } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative h-12 w-48 mr-2">
                <Image
                  src="https://i.ibb.co/kVSYnmNL/can-you-make-this-a-black-and-white-logo-like-a-blockchain-logo-and-add-the-words-diamondzchain-wri.png"
                  alt="Diamondz Shadow Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="hidden md:ml-10 md:flex md:space-x-6">
              <Link href="/ecosystem" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Architecture
              </Link>
              <Link href="/movies" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Productions
              </Link>
              <Link href="/governance" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                DAO
              </Link>
              <Link href="/creators" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Creators
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="https://github.com/DiamondzShadow"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/ecosystem" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Architecture
            </Link>
            <Link href="/movies" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Productions
            </Link>
            <Link href="/governance" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              DAO
            </Link>
            <Link href="/creators" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Creators
            </Link>

            <div className="pt-4 flex items-center space-x-4 px-3">
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
  )
}
