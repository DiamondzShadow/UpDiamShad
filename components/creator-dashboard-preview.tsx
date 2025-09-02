"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function CreatorDashboardPreview() {
  const [sparks] = useState(3247)
  const [level] = useState(2) // Wave Rider
  const [wavz] = useState(1250)
  const [anchors] = useState(89)
  const [currents] = useState(23)

  const levels = [
    { name: "Ripple", threshold: 0, color: "bg-blue-500" },
    { name: "Wave Rider", threshold: 1000, color: "bg-cyan-500" },
    { name: "Surf Builder", threshold: 5000, color: "bg-teal-500" },
    { name: "Tsunami", threshold: 25000, color: "bg-emerald-500" },
    { name: "Diamondz Creator", threshold: 100000, color: "bg-purple-500" },
  ]

  const currentLevel = levels[level]
  const nextLevel = levels[level + 1]
  const progressToNext = nextLevel
    ? ((sparks - currentLevel.threshold) / (nextLevel.threshold - currentLevel.threshold)) * 100
    : 100

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Creator Dashboard Preview
          </h2>
          <p className="text-xl text-slate-300">Track your Sparks, monitor your wave progression, and claim rewards</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Level Status Card */}
          <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${currentLevel.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{level + 1}</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">{currentLevel.name}</CardTitle>
                    <p className="text-slate-400">Level {level + 1} Creator</p>
                  </div>
                </div>
                <Badge className="bg-cyan-500/20 text-cyan-300 text-lg px-4 py-2">
                  {sparks.toLocaleString()} Sparks
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Progress to {nextLevel?.name || "Max Level"}</span>
                  <span>{Math.round(progressToNext)}%</span>
                </div>
                <Progress value={progressToNext} className="h-3" />
              </div>
              {nextLevel && (
                <p className="text-slate-300">
                  {(nextLevel.threshold - sparks).toLocaleString()} more Sparks to reach {nextLevel.name}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Contribution Breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-slate-800/50 border-blue-500/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <span className="text-2xl">🌊</span>
                  Wavz (Posts)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">{wavz.toLocaleString()}</div>
                <p className="text-slate-400 text-sm">From 47 posts this month</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Likes</span>
                    <span className="text-blue-400">2,340</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Comments</span>
                    <span className="text-blue-400">156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Shares</span>
                    <span className="text-blue-400">89</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-emerald-500/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-emerald-400 flex items-center gap-2">
                  <span className="text-2xl">⚓</span>
                  Anchors (Holders)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">{anchors}</div>
                <p className="text-slate-400 text-sm">Fans holding your NFTs</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">New this week</span>
                    <span className="text-emerald-400">+12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Long-term holders</span>
                    <span className="text-emerald-400">67</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Multiplier bonus</span>
                    <span className="text-emerald-400">+15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Currents (Onchain)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">{currents}</div>
                <p className="text-slate-400 text-sm">Onchain actions this month</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Stakes</span>
                    <span className="text-purple-400">8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Mints</span>
                    <span className="text-purple-400">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Interactions</span>
                    <span className="text-purple-400">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Rewards */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                Recent Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">AI</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Level Up Bonus</p>
                      <p className="text-slate-400 text-sm">Reached Wave Rider status</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400">+50 SDM</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">NFT</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Badge Evolution</p>
                      <p className="text-slate-400 text-sm">Wave Rider badge unlocked</p>
                    </div>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-400">Claimed</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">⚡</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Anchor Bonus</p>
                      <p className="text-slate-400 text-sm">10+ new holders milestone</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400">+25 TuB3</Badge>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  Launch Full Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
