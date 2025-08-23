"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Youtube, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ContractInteractionPage() {
  const [walletAddress, setWalletAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState<null | {
    contributions: number
    rewards: string
  }>(null)

  const simulateContractCall = async () => {
    if (!walletAddress || !/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      setError("Please enter a valid Ethereum wallet address")
      return
    }

    setLoading(true)
    setError("")

    try {
      // This is a simulation - in a real app, we would call the actual contract
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate some random data for demonstration
      const contributions = Math.floor(Math.random() * 50) + 1
      const rewards = (Math.random() * 1000).toFixed(2)

      setResult({
        contributions,
        rewards,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while fetching data")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Contract Interaction</h1>
        <p className="text-gray-400">
          Interact with the Diamondz Shadow contracts on the blockchain. Check your contributions and rewards.
        </p>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-bold mb-4">Check Your Contributions</h2>
        <p className="text-gray-400 mb-6">
          Enter your wallet address to check your YouTube contributions and earned rewards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            placeholder="Enter your wallet address (0x...)"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="bg-black/40 border-gray-800"
          />
          <Button
            onClick={simulateContractCall}
            disabled={loading}
            className="bg-gray-800 hover:bg-gray-700 text-white"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <Youtube className="w-4 h-4 mr-2" />
                Check Contributions
              </>
            )}
          </Button>
        </div>

        {error && <div className="bg-red-900/20 border border-red-900 text-red-400 p-4 rounded-md mb-6">{error}</div>}

        {result && (
          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-4">Your Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-gray-400 text-sm mb-1">Total Contributions</div>
                <div className="text-2xl font-bold">{result.contributions}</div>
              </div>
              <div className="border border-gray-800 rounded-lg p-4 text-center">
                <div className="text-gray-400 text-sm mb-1">Total Rewards (tDIAM)</div>
                <div className="text-2xl font-bold">{result.rewards}</div>
              </div>
            </div>

            <div className="mt-6 p-4 border border-gray-800 rounded-lg bg-black/20">
              <h4 className="font-bold mb-2">What's Next?</h4>
              <p className="text-sm text-gray-400 mb-4">
                You can use your tDIAM tokens to participate in governance, stake for rewards, or contribute to
                productions.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/governance">
                  <Button variant="outline" size="sm" className="text-xs">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Governance Portal
                  </Button>
                </Link>
                <Link href="/movies">
                  <Button variant="outline" size="sm" className="text-xs">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Production Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Contract Details</h2>
        <p className="text-gray-400 mb-6">View detailed information about the contracts and their functions.</p>
        <Link href="/blockchain/contracts">
          <Button className="bg-gray-800 hover:bg-gray-700 text-white">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Contract Details
          </Button>
        </Link>
      </div>
    </div>
  )
}
