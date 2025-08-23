"use client"

import { Youtube, Info, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

interface YouTubeData {
  totalViews: number
  subscribers: number
  videoCount: number
  engagementRate: number
  lastUpdated: string
}

export default function YouTubeAdapterPage() {
  const [youtubeData, setYoutubeData] = useState<YouTubeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(180) // 3 minutes

  const fetchYouTubeData = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/youtube")
      if (!response.ok) {
        throw new Error("Failed to fetch YouTube data")
      }
      const data = await response.json()
      setYoutubeData(data)
      setError(null)
      setCountdown(180) // Reset countdown
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchYouTubeData()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          fetchYouTubeData()
          return 180
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs.toString().padStart(2, "0")}s`
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">YouTube Adapter</h1>
        <p className="text-gray-400">
          Connect YouTube metrics to on-chain token economics through Chainlink oracles and TuB3 node infrastructure.
        </p>
      </div>

      <div className="border border-blue-800 bg-blue-950/30 rounded-lg p-4 mb-12">
        <div className="flex">
          <Info className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-medium text-white mb-2">Mainnet Integration Status</h2>
            <p className="text-sm text-blue-200 mb-3">
              The YouTube Adapter is powered by TuB3 node infrastructure and will feature full Chainlink oracle
              integration at mainnet launch.
            </p>
            <p className="text-sm text-blue-200">Upcoming mainnet features:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-blue-200">
              <li>Native Chainlink oracle integration for secure data feeds</li>
              <li>TuB3 node network for decentralized metric validation</li>
              <li>Real-time YouTube API connectivity with enterprise-grade reliability</li>
              <li>Automated token minting/burning based on verified performance data</li>
              <li>Transparent on-chain verification of all channel metrics</li>
            </ul>
            <div className="mt-3 p-3 bg-blue-900/50 rounded border border-blue-700">
              <p className="text-sm text-blue-100 font-medium">🔗 Chainlink Integration Coming Soon</p>
              <p className="text-xs text-blue-200 mt-1">
                Full oracle network deployment scheduled for mainnet launch, enabling secure off-chain data integration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Diamond Shadow Channel Oracle</h2>
        <p className="text-gray-400 mb-6">
          Live metrics from the official Diamondz Shadow YouTube channel processed through our TuB3 node network.
        </p>

        <div className="border border-purple-800 bg-gradient-to-r from-purple-950/30 to-blue-950/30 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-purple-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Live Oracle Feed</h3>
            </div>
            <div className="flex items-center text-green-400 text-sm">
              <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              {loading ? "Loading..." : error ? "Error" : "Active"}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/40 p-4 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">
                {loading ? "..." : error ? "Error" : formatNumber(youtubeData?.totalViews || 0)}
              </div>
              <div className="text-sm text-gray-400">Total Views</div>
              <div className="text-xs text-green-400 mt-1">Live from YouTube API</div>
            </div>
            <div className="bg-black/40 p-4 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">
                {loading ? "..." : error ? "Error" : formatNumber(youtubeData?.subscribers || 0)}
              </div>
              <div className="text-sm text-gray-400">Subscribers</div>
              <div className="text-xs text-green-400 mt-1">Real-time data</div>
            </div>
            <div className="bg-black/40 p-4 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">
                {loading ? "..." : error ? "Error" : `${youtubeData?.engagementRate || 0}%`}
              </div>
              <div className="text-sm text-gray-400">Engagement Rate</div>
              <div className="text-xs text-blue-400 mt-1">Calculated live</div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-purple-900/30 rounded border border-purple-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-200">Next Oracle Update:</span>
              <span className="text-sm text-white font-mono">{formatTime(countdown)}</span>
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-900/30 rounded border border-red-700">
              <p className="text-sm text-red-200">Error: {error}</p>
              <p className="text-xs text-red-300 mt-1">
                Make sure YOUTUBE_API_KEY and YOUTUBE_CHANNEL_ID are set in your environment variables.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Adapter Overview</h2>
        <p className="text-gray-400 mb-6">
          The YouTube Adapter leverages TuB3 node infrastructure and Chainlink oracles to create a secure bridge between
          YouTube performance metrics and on-chain token economics, ensuring transparent and verifiable content
          monetization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Key Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-white text-xs">1</span>
                </div>
                <span>TuB3 node network for decentralized metric validation</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-white text-xs">2</span>
                </div>
                <span>Chainlink oracle integration for enterprise-grade security</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-white text-xs">3</span>
                </div>
                <span>Algorithmic token minting/burning based on verified performance</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                  <span className="text-white text-xs">4</span>
                </div>
                <span>TuB3 staking rewards distribution tied to channel growth</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Key Parameters</h3>
            <table className="w-full text-sm text-gray-400">
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">View Weight</td>
                  <td className="py-2">0.001 TuB3 per 1000 views</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Subscriber Weight</td>
                  <td className="py-2">0.1 TuB3 per subscriber</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Growth Multiplier</td>
                  <td className="py-2">1.5x for &gt;10% monthly growth</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">TuB3 Reward Rate</td>
                  <td className="py-2">Percentage allocated to staking pool</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">Burn Threshold</td>
                  <td className="py-2">Triggered at &gt;5% subscriber loss</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6">
              <Link href="/blockchain/contracts">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded w-full">
                  <Youtube className="w-4 h-4 mr-2" />
                  View Contract Details
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Live Parameters</h3>
            <table className="w-full text-sm text-gray-400">
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Oracle Update Frequency</td>
                  <td className="py-2">Every 3 minutes</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Data Source</td>
                  <td className="py-2">YouTube Data API v3</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Network</td>
                  <td className="py-2">Arbitrum Orbit (Layer 3)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Oracle Provider</td>
                  <td className="py-2">Chainlink (Coming Soon)</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">Node Infrastructure</td>
                  <td className="py-2">TuB3 Network</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Adapter Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">01</span>
            </div>
            <h3 className="font-bold mb-2">Fetch YouTube Metrics</h3>
            <p className="text-xs text-gray-400">
              Channel views, subscribers, and engagement data retrieved via YouTube API
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">02</span>
            </div>
            <h3 className="font-bold mb-2">Process via Oracle</h3>
            <p className="text-xs text-gray-400">
              Data validated and submitted on-chain through Chainlink oracle network
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">03</span>
            </div>
            <h3 className="font-bold mb-2">Smart Contract Execution</h3>
            <p className="text-xs text-gray-400">Metrics processed by smart contract to determine token actions</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">04</span>
            </div>
            <h3 className="font-bold mb-2">Token Actions</h3>
            <p className="text-xs text-gray-400">Automatic minting when metrics improve, burning when they decline</p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">05</span>
            </div>
            <h3 className="font-bold mb-2">Reward Distribution</h3>
            <p className="text-xs text-gray-400">
              Newly minted tokens distributed to stakers based on contribution score
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <p className="text-gray-400 mb-6">
          Ready to connect your YouTube channel to the Diamondz Shadow ecosystem? Follow these TuB3 node requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">For Content Creators</h3>
            <ol className="text-sm text-gray-400 list-decimal pl-5 space-y-2">
              <li>Connect your wallet to the Diamondz Shadow network</li>
              <li>Set up and run a TuB3 validator node on the network</li>
              <li>Stake a minimum of 2,000 TuB3 tokens for node operation</li>
              <li>Register your YouTube channel through secure verification</li>
              <li>Complete multi-factor authentication and identity verification</li>
              <li>Start earning TuB3 rewards based on your content performance</li>
            </ol>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">For Developers</h3>
            <ol className="text-sm text-gray-400 list-decimal pl-5 space-y-2">
              <li>Explore the contract details and TuB3 node documentation</li>
              <li>Set up your development environment with our RPC endpoint</li>
              <li>Complete KYC verification for Chainlink oracle access</li>
              <li>Use our SDK to integrate with TuB3 node infrastructure</li>
              <li>Run security audits before deploying integrations</li>
              <li>Build new features on top of our YouTube Adapter</li>
            </ol>
          </div>
        </div>

        <div className="bg-black/40 p-4 rounded-lg mb-6">
          <h3 className="font-bold mb-2">Production Network Requirements</h3>
          <p className="text-sm text-gray-400 mb-4">
            Our TuB3 node network ensures high-quality content and ecosystem security through these live requirements:
          </p>
          <ul className="text-sm text-gray-400 list-disc pl-5 space-y-2">
            <li>
              <strong>TuB3 Node Operation:</strong> Active validator nodes required for network participation
            </li>
            <li>
              <strong>Real-time Data Verification:</strong> All metrics verified through live YouTube API calls
            </li>
            <li>
              <strong>Chainlink Oracle Integration:</strong> Enterprise-grade oracle network for mainnet launch
            </li>
            <li>
              <strong>Encrypted Data Transmission:</strong> All metrics transmitted via secure, encrypted channels
            </li>
            <li>
              <strong>Multi-Node Consensus:</strong> Distributed verification across TuB3 network infrastructure
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="/blockchain/interact">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded mr-4">
              <Youtube className="w-4 h-4 mr-2" />
              Connect Your Channel
            </Button>
          </Link>
          <Link href="/blockchain/contracts">
            <Button variant="outline" className="rounded bg-transparent">
              <Youtube className="w-4 h-4 mr-2" />
              View Contract Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
