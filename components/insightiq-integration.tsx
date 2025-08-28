"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function InsightIQIntegration() {
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([])
  const [sparksData, setSparksData] = useState({
    totalSparks: 0,
    currentLevel: "Ripple",
    nextLevel: "Wave Rider",
    progress: 0,
    wavz: 0,
    anchors: 0,
    currents: 0,
  })
  const [contractData, setContractData] = useState({
    badgeNFT: "0x8737E98653E18C8bAAC7160726089E0157aB689D",
    pocm: "0x0549eEaDce43A27119Cb6a1b8eEf086F798F4695",
    campaigns: "0x76139E70491FF2490E9A99E648159cc89898133C",
    rewardsVault: "0x48A6184D26B183A741f45523f79405FdDAfA8E40",
  })

  const platforms = [
    { name: "TikTok", icon: "🎵", connected: connectedPlatforms.includes("tiktok") },
    { name: "YouTube", icon: "📺", connected: connectedPlatforms.includes("youtube") },
    { name: "X (Twitter)", icon: "🐦", connected: connectedPlatforms.includes("twitter") },
    { name: "Instagram", icon: "📸", connected: connectedPlatforms.includes("instagram") },
  ]

  const connectPlatform = async (platform: string) => {
    // Simulate InsightIQ Connect SDK flow
    setConnectedPlatforms((prev) => [...prev, platform.toLowerCase()])

    // Simulate webhook data processing and Spark calculation
    setTimeout(() => {
      setSparksData((prev) => ({
        ...prev,
        totalSparks: prev.totalSparks + Math.floor(Math.random() * 100) + 50,
        wavz: prev.wavz + Math.floor(Math.random() * 20) + 10,
        anchors: prev.anchors + Math.floor(Math.random() * 5) + 2,
        currents: prev.currents + Math.floor(Math.random() * 15) + 5,
        progress: Math.min(prev.progress + 15, 100),
      }))
    }, 2000)
  }

  const levels = ["Ripple", "Wave Rider", "Surf Builder", "Tsunami", "Maelstrom", "Diamondz Creator"]

  return (
    <div className="space-y-6">
      {/* InsightIQ Connection Status */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">IQ</span>
            </div>
            InsightIQ Social Verification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="text-center">
                <Button
                  variant={platform.connected ? "default" : "outline"}
                  className={`w-full mb-2 ${platform.connected ? "bg-green-600 hover:bg-green-700" : ""}`}
                  onClick={() => connectPlatform(platform.name)}
                  disabled={platform.connected}
                >
                  <span className="mr-2">{platform.icon}</span>
                  {platform.connected ? "Connected" : "Connect"}
                </Button>
                <p className="text-sm text-gray-600">{platform.name}</p>
              </div>
            ))}
          </div>

          {connectedPlatforms.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ Fraud-Proof Verification Active</p>
              <p className="text-green-600 text-sm">
                Your social activity is now being verified and converted to Sparks
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Live Contract Data */}
      <Card>
        <CardHeader>
          <CardTitle>Live Onchain Progression</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Current Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Total Sparks</span>
                  <Badge variant="secondary">{sparksData.totalSparks.toLocaleString()}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Wavz (Social Signals)</span>
                  <Badge variant="outline">{sparksData.wavz}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Anchors (Holders)</span>
                  <Badge variant="outline">{sparksData.anchors}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Currents (Onchain)</span>
                  <Badge variant="outline">{sparksData.currents}</Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Level Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Current: {sparksData.currentLevel}</span>
                  <span className="text-sm">Next: {sparksData.nextLevel}</span>
                </div>
                <Progress value={sparksData.progress} className="h-3" />
                <p className="text-xs text-gray-600">{100 - sparksData.progress}% to next level</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Smart Contract Addresses */}
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle>Live Smart Contracts (Arbitrum)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">BadgeNFT (Identity)</p>
              <code className="text-xs bg-gray-100 p-1 rounded block mt-1">{contractData.badgeNFT}</code>
            </div>
            <div>
              <p className="font-medium">PoCM (Sparks/XP)</p>
              <code className="text-xs bg-gray-100 p-1 rounded block mt-1">{contractData.pocm}</code>
            </div>
            <div>
              <p className="font-medium">Campaigns (Missions)</p>
              <code className="text-xs bg-gray-100 p-1 rounded block mt-1">{contractData.campaigns}</code>
            </div>
            <div>
              <p className="font-medium">RewardsVault (Tokens)</p>
              <code className="text-xs bg-gray-100 p-1 rounded block mt-1">{contractData.rewardsVault}</code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
