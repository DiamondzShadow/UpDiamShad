"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const levels = [
  { name: "Ripple", threshold: 0, color: "bg-blue-500", sparks: "0-1K" },
  { name: "Wave Rider", threshold: 1000, color: "bg-cyan-500", sparks: "1K-5K" },
  { name: "Surf Builder", threshold: 5000, color: "bg-teal-500", sparks: "5K-25K" },
  { name: "Tsunami", threshold: 25000, color: "bg-emerald-500", sparks: "25K-100K" },
  { name: "Diamondz Creator", threshold: 100000, color: "bg-purple-500", sparks: "100K+" },
]

export default function WaveSystemHero() {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [sparks, setSparks] = useState(0)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transform -skew-y-1 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-24 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform skew-y-1 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">🌊 PoCM Wave System</Badge>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent mb-6">
            Ride Your Wavz
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Transform your content into <span className="text-cyan-400 font-semibold">Sparks</span>, level up through{" "}
            <span className="text-blue-400 font-semibold">Tidal Titles</span>, and unlock legendary creator rewards in
            the gamified economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg"
            >
              🚀 Start Your Wave Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg bg-transparent"
            >
              📊 View Creator Dashboard
            </Button>
          </div>
        </div>

        {/* Wave Contribution System */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-800/50 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Wavz</h3>
              <p className="text-slate-300 mb-4">
                Your posts send ripples through the network. Likes, comments, and shares amplify your Wavz into Sparks.
              </p>
              <Badge className="bg-blue-500/20 text-blue-300">Proof of Post</Badge>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-emerald-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚓</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Anchors</h3>
              <p className="text-slate-300 mb-4">
                Your audience holds your NFTs, stabilizing your wave and boosting your Sparks with multiplier bonuses.
              </p>
              <Badge className="bg-emerald-500/20 text-emerald-300">Proof of Hold</Badge>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Currents</h3>
              <p className="text-slate-300 mb-4">
                Onchain actions create currents that amplify your Wavz. Stake, mint, and interact to gain momentum.
              </p>
              <Badge className="bg-purple-500/20 text-purple-300">Proof of Use</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Level Progression Showcase */}
        <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tidal Title Progression
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {levels.map((level, index) => (
                <div
                  key={level.name}
                  className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    index === currentLevel
                      ? "border-cyan-400 bg-cyan-500/10"
                      : "border-slate-600 bg-slate-700/30 hover:border-slate-500"
                  }`}
                  onClick={() => setCurrentLevel(index)}
                >
                  <div
                    className={`w-12 h-12 ${level.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-white text-center">{level.name}</h3>
                  <p className="text-xs text-slate-400 text-center">{level.sparks} Sparks</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Current: {levels[currentLevel].name}</h3>
              <p className="text-slate-300 mb-4">
                {currentLevel === 0 &&
                  "Start your journey as a Ripple. Every creator begins here with their first Wavz."}
                {currentLevel === 1 && "Wave Rider unlocks mini AI drops and early campaign notifications."}
                {currentLevel === 2 && "Surf Builder gains access to gated campaigns and bonus Sparks from Anchors."}
                {currentLevel === 3 && "Tsunami creators earn revenue share pools and larger AI drops."}
                {currentLevel === 4 &&
                  "Diamondz Creator - the legendary tier with max multipliers and exclusive campaigns."}
              </p>
              <Progress value={(currentLevel + 1) * 20} className="w-full max-w-md mx-auto" />
            </div>
          </CardContent>
        </Card>

        {/* Quick Start Guide */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Start Earning Sparks in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Connect & Verify</h3>
              <p className="text-slate-300">
                Link your social accounts through InsightIQ for fraud-proof verification across platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Create & Engage</h3>
              <p className="text-slate-300">
                Post content, build your audience, and watch your Wavz convert into Sparks automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Level Up & Earn</h3>
              <p className="text-slate-300">
                Climb Tidal Titles, unlock evolving NFT badges, and earn AI-powered rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
