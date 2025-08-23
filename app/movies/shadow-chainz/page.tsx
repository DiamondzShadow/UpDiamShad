import { ArrowLeft, Calendar, Film, Clock, Star, Users, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ShadowChainzPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/movies" className="flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Productions
      </Link>

      <div className="border border-gray-800 rounded-lg overflow-hidden mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="h-80 bg-gradient-to-br from-gray-900 to-black">
            <div
              className="absolute inset-0 bg-center opacity-30"
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/kVSYnmNL/can-you-make-this-a-black-and-white-logo-like-a-blockchain-logo-and-add-the-words-diamondzchain-wri.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "soft-light",
                filter: "blur(1px)",
              }}
            ></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-7xl font-bold tracking-tighter text-center text-white/90 drop-shadow-lg">
                SHADOW CHAINZ
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 z-20 flex items-center">
            <div className="bg-primary/80 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
              <Star className="h-3 w-3 mr-1" />
              Featured Production
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
              <Film className="h-3 w-3 mr-1" />
              Drama Series
            </div>
            <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              15 Episodes
            </div>
            <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              Q2 2025
            </div>
            <div className="bg-purple-900/20 text-purple-500 px-3 py-1 rounded-full text-xs flex items-center">
              <Users className="h-3 w-3 mr-1" />
              Casting
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">Shadow Chainz</h1>
          <p className="text-gray-400 mb-6">
            A gritty drama series following Jay, a young tech visionary from the hood who's trying to build a
            cryptocurrency empire while navigating the challenges of street life, family expectations, and the
            skepticism of his community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Synopsis</h2>
              <p className="text-gray-400 text-sm mb-4">
                In the gritty streets of NYC, Jay stands at the crossroads of two worlds: the familiar streets where
                quick money flows through traditional hustles, and the revolutionary potential of blockchain technology
                that could transform his community forever.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                As financial pressures mount at home and his mother questions his choices, Jay must convince his
                skeptical friends that his vision for a community-owned cryptocurrency could be their ticket to
                legitimate success. But the pull of the streets is strong, and not everyone is ready to trade the
                certainty of today's hustle for the promise of tomorrow's technology.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                When local hustler Rico and his crew catch wind of Jay's growing project, they demand a piece of the
                action. Meanwhile, a group of tech-savvy scammers led by Tasha begin plotting to steal Jay's project
                code. Caught between street threats and digital deception, Jay must navigate a dangerous game of
                loyalty, ambition, and survival.
              </p>
              <p className="text-gray-400 text-sm">
                "Shadow Chainz" explores themes of innovation, community, loyalty, and the struggle to break cycles of
                economic hardship through the lens of Web3 technology, all while delivering a gritty, authentic street
                drama.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Production Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Production ID:</span>
                  <span className="font-mono">DSM-001</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Budget:</span>
                  <span>250,000 SDM</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Current Stage:</span>
                  <span>Casting</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Casting Timeline:</span>
                  <span>April 2025</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Governance Approval:</span>
                  <span>78%</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Contributors:</span>
                  <span>1,245</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Contract Address:</span>
                  <span className="font-mono text-xs">0x8F3...7A2b</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">Episode Guide</h2>

            <div className="space-y-6">
              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 1: "The Vision"</h3>
                  <span className="bg-purple-900/20 text-purple-500 px-2 py-1 rounded text-xs">Casting</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Jay first conceives the idea for a community-owned cryptocurrency while witnessing the economic
                  struggles of his neighborhood.
                </p>
                <div className="bg-black/40 p-3 rounded-lg">
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold text-primary">Production Update:</span> Casting in progress. Follow
                    our Twitch channel for behind-the-scenes content.
                  </p>
                </div>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 2: "The Struggle"</h3>
                  <span className="bg-purple-900/20 text-purple-500 px-2 py-1 rounded text-xs">Casting</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  As Jay develops his crypto concept, he faces financial pressure at home and temptation to return to
                  street hustling.
                </p>
                <div className="bg-black/40 p-3 rounded-lg">
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold text-primary">Production Update:</span> Casting in progress. Follow
                    our Twitch channel for behind-the-scenes content.
                  </p>
                </div>
              </div>

              <div className="border border-gray-800 rounded-lg p-4 bg-primary/5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 3: "The Pitch"</h3>
                  <span className="bg-blue-900/20 text-blue-500 px-2 py-1 rounded text-xs">Current</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Jay gathers his crew to pitch his cryptocurrency vision, facing resistance and doubt from his friends
                  who are comfortable with traditional hustles.
                </p>

                <div className="bg-black/40 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2 text-sm">Scene Excerpt</h4>
                  <div className="text-xs text-gray-400 font-mono overflow-x-auto whitespace-pre-line">
                    <p>
                      <span className="text-gray-500">JAY</span>
                      <br />
                      <span className="italic">(excited)</span>
                      <br />
                      "Look, if we launch this token, it's like we're building a new hustle for the hood. No middlemen,
                      no banks. Just us. We can even cut in the hood, let them buy in cheap."
                    </p>
                    <p className="mt-2">
                      <span className="text-gray-500">DANTE</span>
                      <br />
                      <span className="italic">(leaning back, skeptical)</span>
                      <br />
                      "Bruh, you're talkin' too fast. People out here ain't trying to hear about no crypto. You think
                      goons on the block gonna trade they cash for some digital money they can't even hold?"
                    </p>
                    <p className="mt-2">
                      <span className="text-gray-500">JAY</span>
                      <br />
                      "But that's the point! We put them on, we help them understand. We show them how to make the money
                      work for them."
                    </p>
                  </div>
                </div>

                <div className="bg-black/40 p-3 rounded-lg">
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold text-primary">Production Update:</span> Casting in progress. Follow
                    our Twitch channel for behind-the-scenes content.
                  </p>
                </div>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 4: "The Build"</h3>
                  <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  With key allies on board, Jay begins the technical development of his token while navigating the
                  complexities of the crypto world.
                </p>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 5: "The Launch"</h3>
                  <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  The team prepares for their token launch, facing technical challenges and unexpected competition.
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link href="/movies/shadow-chainz/episodes">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white">View All 15 Episodes</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">Key Characters</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Jay</h3>
                <p className="text-sm text-gray-400 mb-2">
                  A visionary from the hood with tech ambitions, determined to create a cryptocurrency that could change
                  his community's economic future.
                </p>
                <div className="text-xs text-gray-500">
                  "I'm trying to do something bigger than that. This ain't just about the quick cash."
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Dante</h3>
                <p className="text-sm text-gray-400 mb-2">
                  Jay's close friend who's skeptical of the crypto project but remains loyal, straddling the line
                  between street life and Jay's vision.
                </p>
                <div className="text-xs text-gray-500">
                  "I'm just telling you, Jay... it's hard to convince people when you're still figuring it out
                  yourself."
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Ronny</h3>
                <p className="text-sm text-gray-400 mb-2">
                  A calculated hustler who sees potential in Jay's idea but struggles to fully commit, torn between
                  street money and tech innovation.
                </p>
                <div className="text-xs text-gray-500">
                  "I get the vision. I can see it going big... but I've also seen people lose big dreaming on shit like
                  this."
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Rico</h3>
                <p className="text-sm text-gray-400 mb-2">
                  A powerful street hustler who sees Jay's project as a threat to his control and demands a piece of the
                  action.
                </p>
                <div className="text-xs text-gray-500">
                  "I don't slip. I'm just waitin'. Let Jay get his little shine. When the time is right, I'ma take
                  everything he built."
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Lucas</h3>
                <p className="text-sm text-gray-400 mb-2">
                  A tech-savvy old acquaintance who partners with Jay, bringing the technical expertise needed to build
                  the cryptocurrency.
                </p>
                <div className="text-xs text-gray-500">
                  "If I put my name on this, I need to see the whole plan laid out. It can't be hood."
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Tasha</h3>
                <p className="text-sm text-gray-400 mb-2">
                  Rico's girlfriend who leads a crew of tech-savvy scammers looking to steal Jay's project code for
                  their own gain.
                </p>
                <div className="text-xs text-gray-500">
                  "If this dude Rico finds out we lost our control... we might need to start packing."
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">Casting Opportunities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Open Roles</h3>
                <p className="text-sm text-gray-400 mb-4">
                  We're currently casting for the following roles. Token holders can vote on casting decisions.
                </p>
                <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                  <li>Jay (Lead, Male, 20-28)</li>
                  <li>Dante (Supporting, Male, 25-35)</li>
                  <li>Ronny (Supporting, Male, 25-35)</li>
                  <li>Rico (Supporting, Male, 30-45)</li>
                  <li>Tasha (Supporting, Female, 25-35)</li>
                  <li>Lucas (Supporting, Male, 28-40)</li>
                </ul>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Production Updates</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Casting is currently in progress. Stay tuned to our Twitch channel for live casting announcements and
                  behind-the-scenes content.
                </p>
                <div className="flex gap-2">
                  <Link href="https://www.twitch.tv/diamondzshadow" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#6441a5] hover:bg-[#7d5bbe] text-white rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Follow on Twitch
                    </Button>
                  </Link>
                  <Link href="/movies/shadow-chainz/episodes">
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      <ArrowRight className="h-3 w-3 mr-1" />
                      View All Episodes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
