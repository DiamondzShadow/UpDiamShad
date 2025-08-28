import { Button } from "@/components/ui/button"
import Link from "next/link"
import WhitePaperSection from "@/components/white-paper-section"
import FeatureCard from "@/components/feature-card"
import GeometricShapes from "@/components/geometric-shapes"
import {
  Code,
  Shield,
  Zap,
  Users,
  Globe,
  Coins,
  ExternalLink,
  Copy,
  Trophy,
  Layers,
  Database,
  Network,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <GeometricShapes className="absolute inset-0 z-0" />

      {/* New blockchain-focused hero section replacing Wave System as primary focus */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Diamondz Shadow Ecosystem
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionizing game and movie development through blockchain technology and community governance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Link href="https://github.com/DiamondzShadow" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 bg-transparent"
            >
              <Link href="/ecosystem">Explore Architecture</Link>
            </Button>
          </div>

          {/* Added blockchain infrastructure highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-800/30 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
              <Layers className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Layer 3 Blockchain</h3>
              <p className="text-gray-400 text-sm">
                Custom Arbitrum Orbit chain optimized for gaming and entertainment applications
              </p>
            </div>
            <div className="bg-slate-800/30 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
              <Database className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Smart Contract Suite</h3>
              <p className="text-gray-400 text-sm">
                Advanced contracts for governance, tokenization, and creator economies
              </p>
            </div>
            <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <Network className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">Multi-Chain Integration</h3>
              <p className="text-gray-400 text-sm">
                Seamless interoperability with Ethereum, Arbitrum, and other networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repositioned token information as blockchain foundation */}
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

      {/* Repositioned platform features as core blockchain capabilities */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Blockchain Infrastructure
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Enterprise-grade blockchain technology powering the next generation of decentralized applications
          </p>
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

      <section className="relative z-10 py-16 px-4 bg-gradient-to-r from-slate-900/50 to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Wavz Creator Economy Platform
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            The world's first fraud-proof creator economy combining social verification, onchain rewards, and gamified
            progression
          </p>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-800/20 border border-blue-500/30 rounded-lg p-8 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">🌊 What Makes Wavz Revolutionary</h3>
              <p className="text-gray-300 max-w-3xl mx-auto mb-6">
                Unlike traditional creator platforms that take 30-50% of earnings, Wavz creators keep 90%+ of their
                revenue while earning verified Sparks through authentic engagement across all social platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">✅</span>
                </div>
                <h4 className="font-semibold mb-1 text-green-400">Fraud-Proof Verification</h4>
                <p className="text-gray-400 text-sm">InsightIQ integration prevents bot farms and fake engagement</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🌊</span>
                </div>
                <h4 className="font-semibold mb-1 text-blue-400">Cross-Platform Wavz</h4>
                <p className="text-gray-400 text-sm">YouTube, TikTok, Instagram, Twitter - all platforms count</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-1 text-purple-400">Instant Spark Rewards</h4>
                <p className="text-gray-400 text-sm">Real-time conversion of engagement to onchain value</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🏆</span>
                </div>
                <h4 className="font-semibold mb-1 text-orange-400">Level Progression</h4>
                <p className="text-gray-400 text-sm">Ripple → Wave Rider → Tsunami → Diamondz Creator</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold mb-4 text-center text-cyan-400">Create Your Wavz Account</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    1
                  </div>
                  <h5 className="font-semibold mb-2 text-cyan-400">Connect Social Accounts</h5>
                  <p className="text-gray-400 text-sm">
                    Link YouTube, TikTok, Instagram, Twitter through InsightIQ verification for fraud-proof
                    authentication
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    2
                  </div>
                  <h5 className="font-semibold mb-2 text-blue-400">Start Earning Sparks</h5>
                  <p className="text-gray-400 text-sm">
                    Your verified engagement automatically converts to Sparks - no manual claiming required
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                    3
                  </div>
                  <h5 className="font-semibold mb-2 text-purple-400">Level Up & Earn</h5>
                  <p className="text-gray-400 text-sm">
                    Progress through creator levels to unlock higher rewards, exclusive features, and premium benefits
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 mr-4">
                <Trophy className="mr-2 h-4 w-4" />
                Create Wavz Account
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
              >
                <Link href="/creators">Learn More About Wavz</Link>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Built on Diamondz Shadow Blockchain</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Wavz is powered by our custom Layer 3 blockchain infrastructure, ensuring fast transactions, low fees, and
              seamless cross-chain compatibility for the ultimate creator experience.
            </p>
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
