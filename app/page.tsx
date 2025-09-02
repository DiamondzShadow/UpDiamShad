import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhitePaperSection from "@/components/white-paper-section";
import GeometricShapes from "@/components/geometric-shapes";
import { NebulaChatAgent } from "@/components/nebula-agent";
import {
  Zap,
  Trophy,
  Coins,
  ExternalLink,
  Gamepad2,
  Users,
  Building,
  Sparkles,
  Heart,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <GeometricShapes className="absolute inset-0 z-0" />

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          The Creator Chain
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto font-medium">
          Where Communities, Games, and Real-World Assets Go Onchain.
        </p>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Built for creators. Fueled by fans. Proven by games and RWAs.
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4"
          >
            <Link href="/wavz" className="flex items-center gap-2">
              Explore Wavz
              <Sparkles className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-400 hover:bg-orange-500/10 px-8 py-4 font-semibold"
          >
            <Link href="/scam-mercenaries" className="flex items-center gap-2">
              Join the Fight
              <Gamepad2 className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 font-semibold"
          >
            <Link href="/40ac" className="flex items-center gap-2">
              Discover 40ac
              <Building className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-200">
            Not just another blockchain. <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              A progression system for creators + a home for tokenized worlds.
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">High-performance chain for creator economies.</h3>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <Gamepad2 className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Supports games (Scam Mercenaries), RWAs (40ac), and protocols (Wavz).</h3>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <Sparkles className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Tokenization infra that makes cPoints, Sparks, Levels, and Shards possible.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Wavz Protocol Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Flagship Protocol: Wavz
            </h2>
            <p className="text-xl text-gray-300 italic">"Ride the Wave of Proofs."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-500/30 rounded-xl p-6 text-center">
              <Coins className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">cPoints</h3>
              <p className="text-gray-300 text-sm">Earned through Proofs of Contribution (posts, holds, use).</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 border border-yellow-500/30 rounded-xl p-6 text-center">
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">⚡ Sparks</h3>
              <p className="text-gray-300 text-sm">Progression fuel, unlock levels + perks.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border border-blue-500/30 rounded-xl p-6 text-center">
              <Trophy className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Levels + Badges</h3>
              <p className="text-gray-300 text-sm">Show off reputation.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 border border-cyan-500/30 rounded-xl p-6 text-center">
              <Star className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">💎 Shards</h3>
              <p className="text-gray-300 text-sm">Special onchain rewards + collectibles.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
            >
              <Link href="/wavz">Start with Wavz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Scam Mercenaries */}
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gamepad2 className="h-8 w-8 text-orange-400" />
                <h3 className="text-2xl font-bold text-white">Flagship Game: Scam Mercenaries</h3>
              </div>
              <p className="text-lg text-gray-300 italic mb-4">"A play-to-earn shooter built on Diamondz Chain."</p>
              <p className="text-gray-300 mb-6">
                Players earn NFTs, shards, and Wavz-linked rewards through gameplay. A living example of how tokenized progression + gaming merge.
              </p>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-400 hover:bg-orange-500/10"
              >
                <Link href="/scam-mercenaries">Join the Fight</Link>
              </Button>
            </div>

            {/* 40ac */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building className="h-8 w-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Flagship RWA: 40ac</h3>
              </div>
              <p className="text-lg text-gray-300 italic mb-4">"Bringing Real World Assets Onchain."</p>
              <p className="text-gray-300 mb-6">
                A decentralized land project showing how Diamondz Chain bridges the gap between physical and digital ownership.
              </p>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10"
              >
                <Link href="/40ac">Explore 40ac</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Use Cases */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Ecosystem Use Cases</h2>
          <p className="text-center text-gray-400 mb-12">Show you're bigger than just 1 protocol</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <Users className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">🌊 Tokenized Communities</h3>
              <p className="text-gray-400 text-sm">(via Wavz)</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/20">
              <Gamepad2 className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Tokenized Games</h3>
              <p className="text-gray-400 text-sm">(Scam Mercenaries + future titles)</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/20">
              <Building className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Tokenized Real-World Assets</h3>
              <p className="text-gray-400 text-sm">(40ac)</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <Sparkles className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Sponsored Protocols</h3>
              <p className="text-gray-400 text-sm">+ Chain Collabs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Build on Diamondz Chain</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Zap className="h-6 w-6 text-yellow-400" />
            <p className="text-xl text-gray-300">
              Your spark matters. Whether you're a creator, player, or builder — Diamondz Chain rewards contribution.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Link href="/wavz">Explore Wavz</Link>
            </Button>
            <Button
              size="lg" 
              variant="outline"
              className="border-orange-500 text-orange-400 hover:bg-orange-500/10"
            >
              <Link href="/scam-mercenaries">Join the Fight</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10"
            >
              <Link href="/40ac">Discover 40ac</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-500/10"
            >
              <Link href="/community">Join Community</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Shadow Agent AI Assistant section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI Shadow Agent
          </h2>
          <div className="max-w-4xl mx-auto">
            <NebulaChatAgent />
          </div>
        </div>
      </section>

      {/* White Paper Section */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">White Paper</h2>
            <h3 className="text-xl font-semibold mb-6 text-gray-300">
              Diamondz Shadow Protocol: The Future of Blockchain Technology
            </h3>
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
              Our comprehensive white paper outlines the technical architecture, tokenomics, and governance model of the Diamondz Shadow blockchain. Discover how our Solidity-based platform is revolutionizing the blockchain space.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
            >
              <Link
                href="https://github.com/DiamondzShadow/White-Paper/tree/main/white%20paper"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Read White Paper <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/80 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">
                Platform
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/ecosystem"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wavz"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Wavz Protocol
                  </Link>
                </li>
                <li>
                  <Link
                    href="/developers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Developers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/scam-mercenaries"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Scam Mercenaries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/40ac"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    40ac RWA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nfts"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    NFTs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/DiamondzShadow/White-Paper/tree/main/white%20paper"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    White Paper
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/DiamondzShadow"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/creators"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    For Creators
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">
                Community
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/community"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Join Community
                  </Link>
                </li>
                <li>
                  <a
                    href="https://explorer-tdiamondz-chain-ilxp72z9o0.t.conduit.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Block Explorer
                  </a>
                </li>
                <li>
                  <Link
                    href="/movies"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Productions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Diamondz Chain. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}