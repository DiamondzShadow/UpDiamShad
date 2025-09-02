import { Button } from "@/components/ui/button"
import Link from "next/link"
import WhitePaperSection from "@/components/white-paper-section"
import GeometricShapes from "@/components/geometric-shapes"
import { Code, Globe, Gamepad2, Sparkles, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <GeometricShapes className="absolute inset-0 z-0" />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              The Creator Chain. Where Communities, Games, and Real-World Assets Go Onchain.
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
              <Link href="/creators" title="Turn your posts into sparks of momentum.">
                Explore Wavz
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              <Link href="/scam-mercenaries" title="Lock and load — the chain-powered battlefield awaits.">
                Join the Fight
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent"
            >
              <Link href="/40ac" title="Step into the future of land as liquid digital assets.">
                Discover 40ac
              </Link>
            </Button>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">
              Not just another blockchain. A progression system for creators + a home for tokenized worlds.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="text-center">
                <p className="text-gray-400">High-performance chain for creator economies.</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">Supports games (Scam Mercenaries), RWAs (40ac), and protocols (Wavz).</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">
                  Tokenization infra that makes cPoints, Sparks, Levels, and Shards possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/20 border border-cyan-500/30 rounded-lg p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-cyan-400">Flagship Protocol: Wavz</h2>
              <p className="text-xl text-cyan-300 mb-6">"Ride the Wave of Proofs."</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="font-semibold mb-2 text-cyan-400">cPoints</h3>
                <p className="text-sm text-gray-300">Earned through Proofs of Contribution (posts, holds, use).</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2 text-blue-400">Sparks</h3>
                <p className="text-sm text-gray-300">Progression fuel, unlock levels + perks.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2 text-purple-400">Levels + Badges</h3>
                <p className="text-sm text-gray-300">Show off reputation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="font-semibold mb-2 text-green-400">Shards</h3>
                <p className="text-sm text-gray-300">Special onchain rewards + collectibles.</p>
              </div>
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/creators" title="Your content. Your creds. On-chain.">
                  Start with Wavz
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 to-red-800/20 border border-orange-500/30 rounded-lg p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-orange-400">Flagship Game: Scam Mercenaries</h2>
              <p className="text-xl text-orange-300 mb-6">"A play-to-earn shooter built on Diamondz Chain."</p>
            </div>
            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Players earn NFTs, shards, and Wavz-linked rewards through gameplay. A living example of how tokenized
              progression + gaming merge.
            </p>
            <div className="text-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/scam-mercenaries" title="Your skills. Your loot. On-chain.">
                  Join the Fight
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border border-green-500/30 rounded-lg p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-green-400">Flagship RWA: 40ac</h2>
              <p className="text-xl text-green-300 mb-6">"Bringing Real World Assets Onchain."</p>
            </div>
            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              A decentralized land project showing how Diamondz Chain bridges the gap between physical and digital
              ownership.
            </p>
            <div className="text-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/40ac" title="Own more than tokens — own the future.">
                  Explore 40ac
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 px-4 bg-gradient-to-r from-slate-900/50 to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ecosystem Use Cases
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Show you're bigger than just 1 protocol</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm text-center">
              <span className="text-3xl mb-4 block">🌊</span>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">Tokenized Communities</h3>
              <p className="text-gray-400 text-sm">(via Wavz)</p>
            </div>
            <div className="bg-slate-800/30 border border-orange-500/50 rounded-lg p-6 backdrop-blur-sm text-center">
              <Gamepad2 className="h-8 w-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Tokenized Games</h3>
              <p className="text-gray-400 text-sm">(Scam Mercenaries + future titles)</p>
            </div>
            <div className="bg-slate-800/30 border border-green-500/50 rounded-lg p-6 backdrop-blur-sm text-center">
              <Globe className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-green-400">Tokenized Real-World Assets</h3>
              <p className="text-gray-400 text-sm">(40ac)</p>
            </div>
            <div className="bg-slate-800/30 border border-purple-500/50 rounded-lg p-6 backdrop-blur-sm text-center">
              <Code className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Sponsored Protocols</h3>
              <p className="text-gray-400 text-sm">+ Chain Collabs</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-purple-500/50 text-purple-400 bg-transparent">
              <Link href="/join" title="Plug into our SDKs and launch faster.">
                Build on Diamondz Chain
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl mb-6 block">⚡</span>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Your spark matters. Whether you're a creator, player, or builder — Diamondz Chain rewards contribution.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/creators" title="Claim your momentum.">
                Explore Wavz
              </Link>
            </Button>
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/scam-mercenaries" title="Lock and load — the chain-powered battlefield awaits.">
                Join the Fight
              </Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/40ac" title="Own more than tokens — own the future.">
                Discover 40ac
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-purple-500/50 text-purple-400 bg-transparent">
              <Link href="/join" title="Every spark counts. Begin yours now.">
                Join Community
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* White Paper Section */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <WhitePaperSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/80 border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/governance" className="text-gray-400 hover:text-white transition-colors">
                    DAO
                  </Link>
                </li>
                <li>
                  <Link href="/creators" className="text-gray-400 hover:text-white transition-colors">
                    Creators
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/productions" className="text-gray-400 hover:text-white transition-colors">
                    Productions
                  </Link>
                </li>
                <li>
                  <Link href="/creators" className="text-gray-400 hover:text-white transition-colors">
                    Wavz
                  </Link>
                </li>
                <li>
                  <Link href="/scam-mercenaries" className="text-gray-400 hover:text-white transition-colors">
                    Scam Mercenaries
                  </Link>
                </li>
                <li>
                  <Link href="/40ac" className="text-gray-400 hover:text-white transition-colors">
                    40ac
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Resources</h3>
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
                    View on GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/governance" className="text-gray-400 hover:text-white transition-colors">
                    Voting
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
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Diamondz Shadow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
