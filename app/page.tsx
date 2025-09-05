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
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              The Creator Chain
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Built for creators. Fueled by fans. Proven by games and RWAs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
            >
              <Link
                href="/creators"
                title="Turn your posts into sparks of momentum."
              >
                Explore Wavz
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              <Link
                href="/scam-mercenaries"
                title="Lock and load — the chain-powered battlefield awaits."
              >
                Join the Fight
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent"
            >
              <Link
                href="/40ac"
                title="Step into the future of land as liquid digital assets."
              >
                Discover 40ac
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-200">
            Where Communities, Games, and Real-World Assets Go Onchain.
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

          <p className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto font-medium mt-12">
            Not just another blockchain. A progression system for creators + a home for tokenized worlds.
          </p>
        </div>
      </section>

      {/* Ecosystem Use Cases */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            Ecosystem Use Cases
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Show you're bigger than just 1 protocol
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <Users className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                🌊 Tokenized Communities
              </h3>
              <p className="text-gray-400 text-sm">(via Wavz)</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/20">
              <Gamepad2 className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Tokenized Games
              </h3>
              <p className="text-gray-400 text-sm">
                (Scam Mercenaries + future titles)
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/20">
              <Building className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Tokenized Real-World Assets
              </h3>
              <p className="text-gray-400 text-sm">(40ac)</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <Sparkles className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Sponsored Protocols
              </h3>
              <p className="text-gray-400 text-sm">+ Chain Collabs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Build on Diamondz Chain
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Zap className="h-6 w-6 text-yellow-400" />
            <p className="text-xl text-gray-300">
              Your spark matters. Whether you're a creator, player, or builder —
              Diamondz Chain rewards contribution.
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

      {/* Flagship Protocol: Wavz */}
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

      {/* Documentation & Resources */}
      <section className="relative z-10 px-4 py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Developer Resources</h2>
            <p className="text-xl text-gray-300">Everything you need to build on Diamondz Chain</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="text-purple-400 mb-4">
                <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">White Paper</h3>
              <p className="text-gray-400 mb-6">Technical architecture, tokenomics, and governance model</p>
              <Button variant="outline" size="sm" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                <Link
                  href="https://github.com/DiamondzShadow/White-Paper/tree/main/white%20paper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Read Paper <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>

            <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all">
              <div className="text-orange-400 mb-4">
                <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">GitHub</h3>
              <p className="text-gray-400 mb-6">Open source code, smart contracts, and development tools</p>
              <Button variant="outline" size="sm" className="border-orange-500 text-orange-400 hover:bg-orange-500/10">
                <Link
                  href="https://github.com/DiamondzShadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Code <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>

            <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="text-blue-400 mb-4">
                <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Block Explorer</h3>
              <p className="text-gray-400 mb-6">Explore transactions, contracts, and network activity</p>
              <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                <Link
                  href="https://diamondz-zslab-testnet.tryethernal.com/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Explore Chain <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>
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
                    href="https://diamondz-zslab-testnet.tryethernal.com/overview"
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
