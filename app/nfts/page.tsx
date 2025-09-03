"use client"

import { Globe, RefreshCw, AlertTriangle, Wallet, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const nftCollections = [
  {
    id: "1",
    name: "Diamond Beat #001",
    description: "Exclusive music NFT from Diamondz Digital Music collection - stakeable for DAO tokens",
    image: "/placeholder.svg?height=300&width=300&text=Diamond+Beat+001",
    price: "0.1 ETH",
    creator: "DiamondBeats",
    collection: "Diamondz Digital Music",
    contract: "0x37FFAd37b84d099afb43B6E01038843f26cD9F05",
    marketplaceUrl: "https://thirdweb.com/diamond-zchain/0x37FFAd37b84d099afb43B6E01038843f26cD9F05",
    stakeable: true,
  },
  {
    id: "2",
    name: "Scam Hunter Badge",
    description: "Rare achievement badge from Scam Mercenaries game - unlocks special abilities",
    image: "/placeholder.svg?height=300&width=300&text=Scam+Hunter+Badge",
    price: "0.05 ETH",
    creator: "ScamMercs",
    collection: "Game Achievements",
    contract: "0x9d89BCbd1d81413a8f6b15d7aBF8508A8a0F92a6",
    marketplaceUrl: "https://thirdweb.com/diamond-zchain",
    stakeable: false,
  },
  {
    id: "3",
    name: "40ac Property Token",
    description: "Real estate tokenization from 40ac RWA platform - represents actual property ownership",
    image: "/placeholder.svg?height=300&width=300&text=40ac+Property",
    price: "1.5 ETH",
    creator: "40acRWA",
    collection: "Real Estate",
    contract: "0xBD20960E95673Ff7de09B47cB33581ED2CDc63a9",
    marketplaceUrl: "https://thirdweb.com/diamond-zchain",
    stakeable: false,
  },
]

export default function NftMarketplacePage() {
  const [nfts, setNfts] = useState(nftCollections)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("browse")

  const handleRefresh = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const handleViewOnMarketplace = (marketplaceUrl: string) => {
    window.open(marketplaceUrl, "_blank")
  }

  const handleStakeNFT = (nftId: string) => {
    // Redirect to governance page for staking
    window.location.href = "/governance"
  }

  const tabs = [
    { id: "browse", label: "Browse NFTs", icon: "🛒" },
    { id: "collections", label: "Collections", icon: "🎨" },
    { id: "staking", label: "Staking", icon: "💎" },
    { id: "about", label: "About", icon: "📝" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">NFT Marketplace</h1>
          <p className="text-gray-300">
            Buy, stake, and trade exclusive NFTs from the Diamondz ecosystem. Music NFTs can be staked for DAO
            governance tokens.
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
            <span>Diamond zChain</span>
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
                      {nft.stakeable && (
                        <Badge variant="outline" className="text-xs text-green-400 border-green-400 mb-2">
                          Stakeable for DAO Tokens
                        </Badge>
                      )}
                      <p className="text-xs text-gray-500 mb-3">by {nft.creator}</p>

                      {/* Marketplace and Staking Buttons */}
                      <div className="space-y-2">
                        <Button
                          className="w-full flex items-center gap-2"
                          onClick={() => handleViewOnMarketplace(nft.marketplaceUrl)}
                        >
                          <ExternalLink className="h-4 w-4" />
                          View on ThirdWeb
                        </Button>
                        {nft.stakeable && (
                          <Button
                            variant="outline"
                            className="w-full flex items-center gap-2 bg-transparent"
                            onClick={() => handleStakeNFT(nft.id)}
                          >
                            <Wallet className="h-4 w-4" />
                            Stake for DAO
                          </Button>
                        )}
                      </div>
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
                <p className="text-gray-400 text-sm mb-3">Exclusive music NFTs with staking rewards</p>
                <Button
                  size="sm"
                  onClick={() =>
                    handleViewOnMarketplace(
                      "https://thirdweb.com/diamond-zchain/0x37FFAd37b84d099afb43B6E01038843f26cD9F05",
                    )
                  }
                >
                  View Collection
                </Button>
              </Card>
              <Card className="p-6 bg-gray-900 border-gray-700">
                <h4 className="font-semibold text-white mb-2">Scam Mercenaries</h4>
                <p className="text-gray-400 text-sm mb-3">Game achievement badges and items</p>
                <Button size="sm" disabled>
                  Coming Soon
                </Button>
              </Card>
              <Card className="p-6 bg-gray-900 border-gray-700">
                <h4 className="font-semibold text-white mb-2">40ac RWA</h4>
                <p className="text-gray-400 text-sm mb-3">Real estate tokenization platform</p>
                <Button size="sm" disabled>
                  Coming Soon
                </Button>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "staking" && (
          <div className="text-center py-8">
            <h3 className="text-lg font-medium text-white mb-4">NFT Staking for DAO Governance</h3>
            <div className="max-w-2xl mx-auto text-gray-300 space-y-4">
              <p>
                Stake your Diamondz Digital Music NFTs to earn DAO governance tokens and participate in ecosystem
                decisions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card className="p-4 bg-gray-900 border-gray-700">
                  <h4 className="text-white font-medium mb-2">Staking Contract</h4>
                  <p className="text-sm text-gray-400">0x9d89BCbd1d81413a8f6b15d7aBF8508A8a0F92a6</p>
                </Card>
                <Card className="p-4 bg-gray-900 border-gray-700">
                  <h4 className="text-white font-medium mb-2">DAO Token</h4>
                  <p className="text-sm text-gray-400">0xBD20960E95673Ff7de09B47cB33581ED2CDc63a9</p>
                </Card>
              </div>
              <Link href="/governance">
                <Button className="mt-4">Go to DAO Governance</Button>
              </Link>
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
