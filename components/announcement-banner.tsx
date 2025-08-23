"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gray-800 text-white py-2 px-4 text-center relative">
      <p className="text-sm font-medium">
        Technical documentation available —
        <a
          href="https://github.com/DiamondzShadow/White-Paper"
          className="underline ml-1 font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
