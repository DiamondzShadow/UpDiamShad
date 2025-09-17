"use client"

import { Globe, RefreshCw, AlertTriangle, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface MockNFT {
  id: string
  name: string
  description: string
  image: string
  price: string
  creator: string
  collection: string
}

export default function NftGalleryPage() {
  const [nfts, setNfts] = useState<MockNFT[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("browse")

  const mockNFTs: MockNFT[] = [
    {
      id: "1",
      name: "Diamondz Digital Music #001",
      description: "Exclusive music NFT from the Diamondz collection",
      image: "/abstract-music-album-cover-purple.png",
      price: "0.1 ETH",
      creator: "DiamondzChain",
      collection: "Digital Music",
    },
    {
      id: "2",
      name: "Scam Mercenaries Avatar #042",
      description: "Rare character from the Scam Mercenaries game",
      image: "/abstract-music-album-cover-purple.png",
      price: "0.05 ETH",
      creator: "ScamMercs",
      collection: "Game Assets",
    },
    {
      id: "3",
      name: "40ac RWA Token #007",
      description: "Real-world asset backed NFT",
      image: "/abstract-music-album-cover-purple.png",
      price: "0.25 ETH",
      creator: "40ac",
      collection: "RWA Tokens",
    },
  ]

  useEffect(() => {
    const loadNFTs = () => {
      setIsLoading(true)
      setTimeout(() => {
        setNfts(mockNFTs)
        setIsLoading(false)
      }, 1000)
    }
    loadNFTs()
  }, [])

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      setNfts(mockNFTs)
      setIsLoading(false)
    }, 1000)
  }

  const tabs = [
    { id: "browse", label: "Browse & Buy", icon: "🛒" },
    { id: "mint", label: "Mint NFT", icon: "🎨" },
    { id: "list", label: "List NFT", icon: "📝" },
    { id: "my-listings", label: "My Listings", icon: "👤" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">NFT Marketplace</h1>
          <p className="text-gray-300">Browse, mint, list, and trade exclusive NFTs on the Diamondz ecosystem.</p>
          <p className="text-sm text-gray-400 mt-2">Total listings: {nfts.length}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Card className="p-4 bg-gray-800/50 border-gray-700 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="min-w-0">
                  <div className="text-sm font-medium text-white">Marketplace Preview</div>
                  <div className="text-xs text-yellow-400 flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    <span>Coming Soon</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="https://thirdweb.com/diamond-zchain/0x37FFAd37b84d099afb43B6E01038843f26cD9F05"
                  target="_blank"
                >
                  <Button size="sm" variant="outline" className="border-gray-600 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Buy Music NFTs
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

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

      {/* Development Notice */}
      <Card className="mb-6 p-4 bg-blue-900/20 border-blue-600/50">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <h3 className="text-blue-400 font-medium mb-1">Marketplace Preview</h3>
            <p className="text-blue-300 text-sm mb-2">
              Full marketplace functionality is in development. You can currently purchase Music NFTs directly from our
              ThirdWeb contract.
            </p>
            <Link href="https://thirdweb.com/diamond-zchain/0x37FFAd37b84d099afb43B6E01038843f26cD9F05" target="_blank">
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-500">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit ThirdWeb Marketplace
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
                    <div className="aspect-square relative">
                      <img
                        src={nft.image || "/placeholder.svg"}
                        alt={nft.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-purple-600">{nft.collection}</Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-1">{nft.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{nft.description}</p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-500">by {nft.creator}</span>
                        <span className="font-bold text-green-400">{nft.price}</span>
                      </div>
                      <Link
                        href="https://thirdweb.com/diamond-zchain/0x37FFAd37b84d099afb43B6E01038843f26cD9F05"
                        target="_blank"
                      >
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Buy on ThirdWeb
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "mint" && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-white mb-4">Mint NFT</h3>
            <p className="text-gray-400 mb-6">NFT minting functionality coming soon</p>
            <Link href="/join-community">
              <Button className="bg-purple-600 hover:bg-purple-700">Join Community for Updates</Button>
            </Link>
          </div>
        )}

        {activeTab === "list" && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-white mb-4">List NFT</h3>
            <p className="text-gray-400 mb-6">NFT listing functionality coming soon</p>
            <Link href="/join-community">
              <Button className="bg-purple-600 hover:bg-purple-700">Join Community for Updates</Button>
            </Link>
          </div>
        )}

        {activeTab === "my-listings" && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-white mb-4">My Listings</h3>
            <p className="text-gray-400 mb-6">Personal listings management coming soon</p>
            <Link href="/governance">
              <Button className="bg-purple-600 hover:bg-purple-700">View DAO Governance</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
