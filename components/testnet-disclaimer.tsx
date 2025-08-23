"use client"

import { useState } from "react"
import { Info, X, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function TestnetDisclaimer() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed) return null

  return (
    <div className="bg-blue-950/80 border-b border-blue-800 text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <div className="font-medium flex items-center">
                <span>Testnet Environment: Mock Data in Use</span>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="ml-2 text-xs text-blue-300 hover:text-blue-200 underline"
                >
                  {isExpanded ? "Show Less" : "Learn More"}
                </button>
              </div>

              {!isExpanded ? (
                <p className="text-sm text-blue-200 mt-1">
                  This website is currently running on testnet with simulated data. All features will be fully
                  functional with live data when we launch on mainnet.
                </p>
              ) : (
                <div className="text-sm text-blue-200 mt-2 space-y-3">
                  <p>
                    The Diamondz Shadow platform is currently in testnet phase. To provide a complete preview of
                    functionality, we're using mock data throughout the site. Here's how different sections will
                    transition to live data at mainnet:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-blue-900/30 p-3 rounded-md">
                      <h4 className="font-medium mb-1">Governance</h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs">
                        <li>Proposal data will be fetched directly from the VoteERC20 contract</li>
                        <li>Voting statistics will be calculated from on-chain events</li>
                        <li>Governance parameters will reflect actual contract settings</li>
                      </ul>
                    </div>

                    <div className="bg-blue-900/30 p-3 rounded-md">
                      <h4 className="font-medium mb-1">Productions</h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs">
                        <li>Production data will be stored and retrieved from IPFS</li>
                        <li>Funding status will reflect actual token allocations</li>
                        <li>Voting and contribution metrics will be calculated in real-time</li>
                      </ul>
                    </div>

                    <div className="bg-blue-900/30 p-3 rounded-md">
                      <h4 className="font-medium mb-1">YouTube Adapter</h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs">
                        <li>Channel metrics will be fetched from actual YouTube channels</li>
                        <li>Token minting/burning will occur based on real performance</li>
                        <li>Rewards will be distributed to actual contributors</li>
                      </ul>
                    </div>

                    <div className="bg-blue-900/30 p-3 rounded-md">
                      <h4 className="font-medium mb-1">Blockchain Interactions</h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs">
                        <li>Contract interactions will execute on the mainnet blockchain</li>
                        <li>Wallet connections will manage real assets</li>
                        <li>Transaction history will reflect actual on-chain activity</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    Our commitment to transparency means we're showing you exactly how the platform will work, using
                    simulated data that closely mirrors what you'll see at launch. All contract addresses, RPC
                    endpoints, and blockchain interactions are real and deployed on our testnet.
                  </p>

                  <div className="flex items-center space-x-4 mt-2">
                    <Link href="/white-paper" className="text-blue-300 hover:text-blue-200 flex items-center">
                      <span>Read our White Paper</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                    <Link
                      href="https://explorer-tdiamondz-chain-ilxp72z9o0.t.conduit.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 flex items-center"
                    >
                      <span>Explore our Testnet</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsDismissed(true)}
            className="text-blue-300 hover:text-blue-200 flex-shrink-0"
            aria-label="Dismiss"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
