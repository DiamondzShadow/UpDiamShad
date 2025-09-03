"use client"

import { Globe, RefreshCw, AlertTriangle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const mockNFTs = [
  {
    id: "1",
    name: "Diamond Beat #001",
    description: "Exclusive music NFT from Diamondz Digital Music collection",
    image: "/placeholder.svg?height=300&width=300&text=Diamond+Beat+001",
    price: "0.1 ETH",
    creator: "DiamondBeats",
    collection: "Diamondz Digital Music",
  },
  {
    id: "2",
    name: "Scam Hunter Badge",
    description: "Rare achievement badge from Scam Mercenaries game",
    image: "/placeholder.svg?height=300&width=300&text=Scam+Hunter+Badge",
    price: "0.05 ETH",
    creator: "ScamMercs",
    collection: "Game Achievements",
  },
  {
    id: "3",
    name: "40ac Property Token",
    description: "Real estate tokenization from 40ac RWA platform",
    image: "/placeholder.svg?height=300&width=300&text=40ac+Property",
    price: "1.5 ETH",
    creator: "40acRWA",
    collection: "Real Estate",
  },
]

export default function NftGalleryPage() {
  const [nfts, setNfts] = useState(mockNFTs)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("browse")

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const tabs = [
    { id: "browse", label: "Browse NFTs", icon: "🛒" },
    { id: "collections", label: "Collections", icon: "🎨" },
    { id: "about", label: "About", icon: "📝" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">NFT Showcase</h1>
          <p className="text-gray-300">
            Explore exclusive NFTs from the Diamondz ecosystem including music, gaming, and RWA collections.
          </p>
          <p className="text-sm text-gray-400 mt-2">Featured collections: {nfts.length} items</p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={handleRefresh}
            disabled={isLoading}
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <div className="flex items-center gap-2 text-sm text-gray-300 border border-gray-600 rounded-full px-4 py-2">
            <Globe className="h-4 w-4" />
            <span>Diamondz Chain</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 bg-black p-1 rounded-lg border border-gray-800">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variant="ghost"
            className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all bg-transparent ${
              activeTab === tab.id
                ? "border border-white text-white shadow-md bg-black"
                : "text-gray-400 hover:text-white hover:border hover:border-gray-400 bg-black border border-transparent"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Info Card */}
      <Card className="mb-6 p-4 bg-blue-900/20 border-blue-600/50">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <h3 className="text-blue-400 font-medium mb-1">NFT Marketplace Coming Soon</h3>
            <p className="text-blue-300 text-sm mb-2">
              Full marketplace functionality with minting, trading, and staking will be available soon.
            </p>
            <Link href="/join-community">
              <Button size="sm" variant="outline" className="border-blue-600 text-blue-400 bg-transparent">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Tab Content */}
      <div className="bg-black p-6 rounded-lg shadow-md border border-gray-800">
        {activeTab === "browse" && (
          <div>
            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                <p className="text-white">Loading NFTs...</p>
              </div>
            )}

            {/* NFT Grid */}
            {!isLoading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {nfts.map((nft) => (
                  <Card key={nft.id} className="bg-gray-900 border-gray-700 overflow-hidden">
                    <div className="aspect-square bg-gray-800 flex items-center justify-center">
                      <img
                        src={nft.image || "/placeholder.svg"}
                        alt={nft.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-1">{nft.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{nft.description}</p>
                      <div className="flex justify-between items-center mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {nft.collection}
                        </Badge>
                        <span className="text-sm font-medium text-white">{nft.price}</span>
                      </div>
                      <p className="text-xs text-gray-500">by {nft.creator}</p>
                      <Button className="w-full mt-3" disabled>
                        Coming Soon
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "collections" && (
          <div className="text-center py-8">
            <h3 className="text-lg font-medium text-white mb-4">Featured Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gray-900 border-gray-700">
                <h4 className="font-semibold text-white mb-2">Diamondz Digital Music</h4>
                <p className="text-gray-400 text-sm">Exclusive music NFTs with staking rewards</p>
              </Card>
              <Card className="p-6 bg-gray-900 border-gray-700">
                <h4 className="font-semibold text-white mb-2">Scam Mercenaries</h4>
                <p className="text-gray-400 text-sm">Game achievement badges and items</p>
              </Card>
              <Card className="p-6 bg-gray-900 border-gray-700">
                <h4 className="font-semibold text-white mb-2">40ac RWA</h4>
                <p className="text-gray-400 text-sm">Real estate tokenization platform</p>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="text-center py-8">
            <h3 className="text-lg font-medium text-white mb-4">About Diamondz NFTs</h3>
            <div className="max-w-2xl mx-auto text-gray-300 space-y-4">
              <p>Diamondz Chain hosts a diverse ecosystem of NFTs spanning music, gaming, and real-world assets.</p>
              <p>
                Each collection serves a unique purpose in our ecosystem, from music NFTs that can be staked for DAO
                governance tokens to game items that enhance your Scam Mercenaries experience.
              </p>
              <Link href="/governance">
                <Button className="mt-4">Learn About DAO Staking</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
