"use client"

import { Waves, Zap, BarChart3, Sparkles, Play, CheckCircle, TrendingUp, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CreatorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-white">Ride the Wavz. Prove Your Contribution.</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Wavz turns engagement, loyalty, and on-chain actions into Sparks, cPoints, and reputation levels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-3 text-lg"
            onClick={() => window.open("/join-community", "_self")}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Start Earning
          </Button>
          <Button
            variant="outline"
            className="rounded-lg px-8 py-3 text-lg bg-transparent border-gray-600 hover:bg-gray-800"
            onClick={() => window.open("/governance", "_self")}
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            See Levels
          </Button>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Proofs {">"} Empty Points.</h2>

        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-lg text-gray-300 mb-6 text-center">
            Engagement isn't about farming likes — it's about proof. Wavz is the first system that translates real
            contributions into measurable, tradable signals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold text-blue-300 mb-2">Creators</h3>
              <p className="text-sm text-gray-400">Get credit for the waves they make</p>
            </div>
            <div className="text-center p-4">
              <Sparkles className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold text-purple-300 mb-2">Fans</h3>
              <p className="text-sm text-gray-400">Get recognition for the support they show</p>
            </div>
            <div className="text-center p-4">
              <BarChart3 className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-bold text-green-300 mb-2">Projects</h3>
              <p className="text-sm text-gray-400">Instantly judge creator ecosystem health</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2"
            onClick={() => window.open("/join-community", "_self")}
          >
            Learn How Proofs Work
          </Button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The Mechanics of Wavz</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-300">Proof of Post (PoP)</h3>
            <p className="text-sm text-gray-400">Likes, views, and shares become cPoints</p>
          </div>

          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-300">Proof of Hold (PoH)</h3>
            <p className="text-sm text-gray-400">Fans holding creator NFTs/tokens boost their Wavz</p>
          </div>

          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-green-300">Proof of Use (PoU)</h3>
            <p className="text-sm text-gray-400">On-chain actions (mints, staking, missions) add Sparks</p>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="rounded-lg px-6 py-2 bg-transparent border-gray-600 hover:bg-gray-800"
            onClick={() => window.open("/scam-mercenaries", "_self")}
          >
            See Proofs in Action
          </Button>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">From Sparks to Status</h2>

        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-lg text-gray-300 mb-6 text-center">
            Every cPoint pushes you forward. As you climb, your Wavz evolve — visually, reputationally, and
            economically.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Creator Levels</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Rookie → Verified → Builder → Influencer → Diamondz Tier</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Fan Levels</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Rookie Fan → Superfan → Backer → Whale Ally → Chain OG</div>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-green-300 mb-3">Levels unlock:</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Higher multipliers on rewards</li>
              <li>• Exclusive NFT badge evolutions</li>
              <li>• Access to gated campaigns + revenue pools</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-6 py-2"
            onClick={() => window.open("/governance", "_self")}
          >
            View Full Level Ladder
          </Button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The Signal That Projects Watch</h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-6">
            Wavz gives projects a clear lens into community health. Instead of empty follower counts, they see:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/40 p-4 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Engagement backed by proof</p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Fans aligned with creators</p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Momentum tracked on-chain</p>
            </div>
          </div>

          <p className="text-gray-400 mb-6">
            This makes it easier for brands, protocols, and ecosystems to know who to back next.
          </p>

          <Button
            variant="outline"
            className="rounded-lg px-6 py-2 bg-transparent border-gray-600 hover:bg-gray-800"
            onClick={() => window.open("/40ac", "_self")}
          >
            Why Wavz Beats Metrics
          </Button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-900/50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Catch the Next Wave</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether you create, support, or build, your actions echo here. Wavz isn't about farming — it's about proving.
          And proof is what the future of creator economies runs on.
        </p>

        <Button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg px-8 py-3 text-lg"
          onClick={() => window.open("/join-community", "_self")}
        >
          <Waves className="w-5 h-5 mr-2" />
          Start Your Wavz Journey
        </Button>
      </div>
    </div>
  )
}
