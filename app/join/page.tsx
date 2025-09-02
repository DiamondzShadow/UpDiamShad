import { Button } from "@/components/ui/button"
import Link from "next/link"
import GeometricShapes from "@/components/geometric-shapes"
import { Users, Github, Twitter } from "lucide-react"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <GeometricShapes className="absolute inset-0 z-0" />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Join the Diamondz Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with creators, builders, and players shaping the future of onchain communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/30 border border-purple-500/30 rounded-lg p-8 backdrop-blur-sm">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Discord Community</h3>
              <p className="text-gray-300 mb-6">
                Join our Discord to connect with other creators, get support, and stay updated on the latest
                developments.
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 w-full">
                <a href="https://discord.gg/jeJfn266Rk" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
            </div>

            <div className="bg-slate-800/30 border border-blue-500/30 rounded-lg p-8 backdrop-blur-sm">
              <Twitter className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Follow Updates</h3>
              <p className="text-gray-300 mb-6">
                Stay connected on Twitter for announcements, community highlights, and ecosystem updates.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
                <a href="https://x.com/DiamondzShadoM" target="_blank" rel="noopener noreferrer">
                  Follow on Twitter
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/20 border border-cyan-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Ready to Build?</h2>
            <p className="text-gray-300 mb-6">
              Explore our ecosystem and start your journey as a creator, player, or builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/creators">Start with Wavz</Link>
              </Button>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/scam-mercenaries">Join the Fight</Link>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/40ac">Explore 40ac</Link>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">Questions? Reach out to our community or check our documentation.</p>
            <Button asChild variant="outline" className="border-gray-500/50 text-gray-400 bg-transparent">
              <a href="https://github.com/DiamondzShadow" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
