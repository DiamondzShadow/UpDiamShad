"use client"

import { useState } from "react"
import { Music, ShoppingCart, Wallet, Star, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MusicNFT {
  id: number
  title: string
  artist: string
  price: string
  image: string
  duration: string
  genre: string
  isPlaying?: boolean
}

function MusicNFTCard({
  nft,
  onPlay,
  onMint,
}: { nft: MusicNFT; onPlay: (id: number) => void; onMint: (id: number) => void }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors">
      <div className="relative mb-4">
        <img
          src={nft.image || "/placeholder.svg"}
          alt={nft.title}
          className="w-full h-48 object-cover rounded-lg bg-gradient-to-br from-purple-900 to-blue-900"
        />
        <button
          onClick={() => onPlay(nft.id)}
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg"
        >
          {nft.isPlaying ? <Pause className="w-12 h-12 text-white" /> : <Play className="w-12 h-12 text-white" />}
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <h3 className="text-xl font-bold text-white">{nft.title}</h3>
        <p className="text-gray-400">by {nft.artist}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{nft.duration}</span>
          <span>{nft.genre}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-400">{nft.price} DMDZ</div>
        <Button onClick={() => onMint(nft.id)} className="bg-purple-600 hover:bg-purple-700 text-white">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Mint NFT
        </Button>
      </div>
    </div>
  )
}

export default function MusicMarketplace() {
  const [playingId, setPlayingId] = useState<number | null>(null)
  const [musicNFTs] = useState<MusicNFT[]>([
    {
      id: 1,
      title: "Digital Dreams",
      artist: "CryptoBeats",
      price: "150",
      image: "/abstract-music-album-cover-purple.png",
      duration: "3:42",
      genre: "Electronic",
    },
    {
      id: 2,
      title: "Blockchain Symphony",
      artist: "DecentralizedSound",
      price: "200",
      image: "/abstract-music-album-cover-purple.png",
      duration: "4:15",
      genre: "Ambient",
    },
    {
      id: 3,
      title: "NFT Anthem",
      artist: "TokenTunes",
      price: "175",
      image: "/abstract-music-album-cover-purple.png",
      duration: "3:28",
      genre: "Pop",
    },
    {
      id: 4,
      title: "Metaverse Melody",
      artist: "VirtualVibes",
      price: "225",
      image: "/abstract-music-album-cover-purple.png",
      duration: "5:03",
      genre: "Synthwave",
    },
    {
      id: 5,
      title: "DAO Beats",
      artist: "GovernanceGroove",
      price: "180",
      image: "/abstract-music-album-cover-purple.png",
      duration: "3:55",
      genre: "Hip-Hop",
    },
    {
      id: 6,
      title: "Smart Contract Sounds",
      artist: "CodeComposer",
      price: "195",
      image: "/abstract-music-album-cover-purple.png",
      duration: "4:22",
      genre: "Techno",
    },
  ])

  const handlePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id)
  }

  const handleMint = (id: number) => {
    const nft = musicNFTs.find((n) => n.id === id)
    alert(`Minting "${nft?.title}" for ${nft?.price} DMDZ tokens. Wallet connection required.`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Music NFT Marketplace
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Discover, collect, and stake exclusive music NFTs on Diamond zChain. Each NFT can be staked in the DAO to earn
          governance tokens.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Wallet className="w-5 h-5 mr-2" />
            Connect Wallet to Buy
          </Button>
          <Link href="/governance">
            <Button variant="outline" className="border-gray-600 hover:bg-gray-800 bg-transparent">
              <Star className="w-5 h-5 mr-2" />
              Stake NFTs in DAO
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">247</div>
          <div className="text-gray-400">Total Music NFTs</div>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">89</div>
          <div className="text-gray-400">Active Artists</div>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">1,234</div>
          <div className="text-gray-400">NFTs Staked</div>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-2">45.2K</div>
          <div className="text-gray-400">DMDZ Earned</div>
        </div>
      </div>

      {/* Contract Info */}
      <div className="bg-gradient-to-r from-purple-950/30 to-blue-950/30 border border-purple-900/50 rounded-lg p-6 mb-12">
        <div className="flex items-center mb-4">
          <Music className="w-6 h-6 text-purple-400 mr-3" />
          <h2 className="text-2xl font-bold">Live on Diamond zChain</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Music NFTs are minted through our verified smart contract on Diamond zChain testnet. Each NFT represents
          ownership of unique digital music content.
        </p>
        <div className="bg-black/40 p-4 rounded-lg">
          <div className="text-sm text-gray-400 mb-2">Contract Address:</div>
          <div className="font-mono text-purple-400 break-all">0x37FFAd37b84d099afb43B6E01038843f26cD9F05</div>
        </div>
      </div>

      {/* Music NFT Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Music NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicNFTs.map((nft) => (
            <MusicNFTCard
              key={nft.id}
              nft={{ ...nft, isPlaying: playingId === nft.id }}
              onPlay={handlePlay}
              onMint={handleMint}
            />
          ))}
        </div>
      </div>

      {/* DAO Integration */}
      <div className="bg-gradient-to-r from-green-950/30 to-blue-950/30 border border-green-900/50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stake Your Music NFTs</h2>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          After purchasing music NFTs, stake them in the Diamondz DAO to earn governance tokens and participate in
          protocol decisions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black/40 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-400 mb-2">1. Buy NFTs</div>
            <div className="text-gray-400">Purchase music NFTs from the marketplace</div>
          </div>
          <div className="bg-black/40 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-400 mb-2">2. Stake in DAO</div>
            <div className="text-gray-400">Stake your NFTs to earn DMDZ tokens</div>
          </div>
          <div className="bg-black/40 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-400 mb-2">3. Govern</div>
            <div className="text-gray-400">Vote on proposals and shape the protocol</div>
          </div>
        </div>
        <Link href="/governance">
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">
            <Star className="w-5 h-5 mr-2" />
            Go to DAO Governance
          </Button>
        </Link>
      </div>
    </div>
  )
}
