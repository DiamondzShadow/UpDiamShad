import { Button } from "@/components/ui/button"
import Link from "next/link"
import WhitePaperSection from "@/components/white-paper-section"
import FeatureCard from "@/components/feature-card"
import GeometricShapes from "@/components/geometric-shapes"
import { Code, Shield, Zap, Users, Globe, Coins, ExternalLink, Copy } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <GeometricShapes className="absolute inset-0 z-0" />

      {/* Hero Section */}
      <section className="relative z-10 py-12 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Diamondz Shadow Ecosystem
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Revolutionizing game and movie development through blockchain technology and community governance.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="outline" asChild className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
            <Link href="https://github.com/DiamondzShadow" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Arbitrum Token Information section */}
      <section className="relative z-10 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-400">Diamondz Shadow Game + Movies Token</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-400">Token Name</label>
                  <p className="text-white font-mono">Diamondz Shadow Game + Movies</p>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Network</label>
                  <p className="text-white">Arbitrum One</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-400">Contract Address</label>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-mono text-sm">0x602b869eEf1C9F0487F31776bad8Af3C4A173394</p>
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                  >
                    <Link
                      href="https://arbiscan.io/token/0x602b869eEf1C9F0487F31776bad8Af3C4A173394"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View on Arbiscan <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Smart Contracts"
              description="Advanced Solidity-based smart contracts powering our ecosystem"
              icon={<Code className="h-5 w-5 text-purple-400" />}
            />
            <FeatureCard
              title="Security First"
              description="Multi-layered security protocols protecting your assets"
              icon={<Shield className="h-5 w-5 text-blue-400" />}
            />
            <FeatureCard
              title="High Performance"
              description="Lightning-fast transactions with minimal gas fees"
              icon={<Zap className="h-5 w-5 text-yellow-400" />}
            />
            <FeatureCard
              title="Community Governance"
              description="Decentralized decision-making through token-based voting"
              icon={<Users className="h-5 w-5 text-green-400" />}
            />
            <FeatureCard
              title="Cross-Chain"
              description="Seamless interoperability across multiple blockchains"
              icon={<Globe className="h-5 w-5 text-cyan-400" />}
            />
            <FeatureCard
              title="DeFi Integration"
              description="Native DeFi protocols for lending, staking, and yield farming"
              icon={<Coins className="h-5 w-5 text-orange-400" />}
            />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/ecosystem" className="block">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Architecture</h3>
                <p className="text-gray-400">Explore our blockchain ecosystem and technical architecture</p>
              </div>
            </Link>

            <Link href="/movies" className="block">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Productions</h3>
                <p className="text-gray-400">Discover our entertainment content and media productions</p>
              </div>
            </Link>

            <Link href="/governance" className="block">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/20">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Governance</h3>
                <p className="text-gray-400">Participate in community decisions and protocol governance</p>
              </div>
            </Link>

            <Link href="/developers" className="block">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-yellow-500/50 transition-all hover:shadow-lg hover:shadow-yellow-500/20">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Developers</h3>
                <p className="text-gray-400">Build on our platform with comprehensive developer tools</p>
              </div>
            </Link>

            <Link href="/blockchain/contracts" className="block">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Smart Contracts</h3>
                <p className="text-gray-400">Interact with our deployed smart contracts</p>
              </div>
            </Link>

            <Link href="/solutions" className="block">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/20">
                <h3 className="text-xl font-semibold mb-2 text-orange-400">Solutions</h3>
                <p className="text-gray-400">Discover our comprehensive blockchain solutions</p>
              </div>
            </Link>
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
                  <Link href="/ecosystem" className="text-gray-400 hover:text-white transition-colors">
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/governance" className="text-gray-400 hover:text-white transition-colors">
                    Governance
                  </Link>
                </li>
                <li>
                  <Link href="/developers" className="text-gray-400 hover:text-white transition-colors">
                    Developers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/movies" className="text-gray-400 hover:text-white transition-colors">
                    Productions
                  </Link>
                </li>
                <li>
                  <Link href="/blockchain/contracts" className="text-gray-400 hover:text-white transition-colors">
                    Smart Contracts
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                    Solutions
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
                <li>
                  <Link href="/blockchain/interact" className="text-gray-400 hover:text-white transition-colors">
                    Blockchain Tools
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
                  <Link
                    href="/integrations/youtube-adapter"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    YouTube Adapter
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
