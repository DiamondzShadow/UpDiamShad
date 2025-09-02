"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Gamepad2, Building, Code, MessageCircle } from "lucide-react"

export default function JoinCommunity() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-purple-500/30 text-purple-400">
            Join the Movement
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Your Spark <span className="text-purple-400">Starts Here</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
            Creators, fans, gamers, builders — Diamondz is the chain that rewards your moves.
          </p>
        </div>
      </section>

      {/* Community Paths */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Path</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Creators */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-xl">Creators</CardTitle>
                <CardDescription className="text-gray-400">Turn your content into cPoints</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• Proof-of-Contribution rewards</li>
                  <li>• Sparks from every post</li>
                  <li>• Level progression system</li>
                  <li>• Community-driven growth</li>
                </ul>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => (window.location.href = "/creators")}
                >
                  Mint Your Proof <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Fans */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-xl">Fans</CardTitle>
                <CardDescription className="text-gray-400">Level alongside the voices you back</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• Fan progression system</li>
                  <li>• Support your creators</li>
                  <li>• Earn badges and levels</li>
                  <li>• Community rewards</li>
                </ul>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => (window.location.href = "/creators")}
                >
                  Collect & Support <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Builders */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-colors">
              <CardHeader>
                <Code className="w-12 h-12 text-green-400 mb-4" />
                <CardTitle className="text-xl">Builders</CardTitle>
                <CardDescription className="text-gray-400">Our docs and SDKs get you shipping faster</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• EVM-compatible chain</li>
                  <li>• Developer documentation</li>
                  <li>• SDK access</li>
                  <li>• Technical support</li>
                </ul>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open("https://github.com/diamondz-chain/docs", "_blank")}
                >
                  Launch on Diamondz <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Gamers */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <Gamepad2 className="w-12 h-12 text-orange-400 mb-4" />
                <CardTitle className="text-xl">Gamers</CardTitle>
                <CardDescription className="text-gray-400">Get updates and alpha drops</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• Scam Mercenaries updates</li>
                  <li>• Early access opportunities</li>
                  <li>• Alpha testing invites</li>
                  <li>• Gaming community access</li>
                </ul>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={() => (window.location.href = "/scam-mercenaries")}
                >
                  Track Scam Mercs <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* RWA Investors */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-pink-500/50 transition-colors md:col-span-2 lg:col-span-1">
              <CardHeader>
                <Building className="w-12 h-12 text-pink-400 mb-4" />
                <CardTitle className="text-xl">RWA Investors</CardTitle>
                <CardDescription className="text-gray-400">Explore tokenized real-world assets</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>• 40ac land tokenization</li>
                  <li>• Fractional ownership</li>
                  <li>• Real asset backing</li>
                  <li>• Investment opportunities</li>
                </ul>
                <Button
                  className="w-full bg-pink-600 hover:bg-pink-700"
                  onClick={() => (window.location.href = "/40ac")}
                >
                  Discover 40ac <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="border-gray-700 hover:border-purple-500 bg-transparent"
              onClick={() => window.open("https://discord.gg/diamondz", "_blank")}
            >
              Discord
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 hover:border-blue-500 bg-transparent"
              onClick={() => window.open("https://twitter.com/diamondz_chain", "_blank")}
            >
              Twitter
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 hover:border-red-500 bg-transparent"
              onClick={() => window.open("https://youtube.com/@diamondz_chain", "_blank")}
            >
              YouTube
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 hover:border-green-500 bg-transparent"
              onClick={() => (window.location.href = "mailto:info@diamondz.io?subject=General Inquiry")}
            >
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
