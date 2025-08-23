import { ArrowRight, Calendar, Film, Clock, Star, Users, ExternalLink, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MoviesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Upcoming Productions</h1>
        <p className="text-gray-400">Current and upcoming productions managed through the Diamondz Shadow ecosystem.</p>
      </div>

      <div className="border border-blue-800 bg-blue-950/30 rounded-lg p-4 mb-12">
        <div className="flex">
          <Info className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-medium text-white mb-2">Productions Testnet Information</h2>
            <p className="text-sm text-blue-200 mb-3">
              The productions displayed on this page are conceptual examples to demonstrate how the Diamondz Shadow
              ecosystem will support content creation and distribution.
            </p>
            <p className="text-sm text-blue-200">At mainnet launch, this page will feature:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-blue-200">
              <li>Actual production proposals submitted by community members</li>
              <li>Real-time funding status backed by on-chain transactions</li>
              <li>Authentic governance voting results for each production</li>
              <li>Verifiable milestone tracking and fund distribution</li>
              <li>Direct links to produced content as it becomes available</li>
            </ul>
            <p className="text-sm text-blue-200 mt-3">
              While we're in testnet, we encourage you to follow our{" "}
              <a
                href="https://www.twitch.tv/diamondzshadow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                Twitch channel
              </a>{" "}
              for behind-the-scenes updates on our actual production plans.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Production - Shadow Chainz */}
      <div className="border border-gray-800 rounded-lg overflow-hidden mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="h-64 bg-gradient-to-br from-gray-900 to-black">
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
              <div className="text-6xl font-bold tracking-tighter text-center text-white/90 drop-shadow-lg">
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
            <div className="bg-green-900/20 text-green-500 px-3 py-1 rounded-full text-xs flex items-center">
              <Users className="h-3 w-3 mr-1" />
              Community Funded
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2">Shadow Chainz</h2>
          <p className="text-gray-400 mb-6">
            A gritty drama series following Jay, a young tech visionary from the hood who's trying to build a
            cryptocurrency empire while navigating the challenges of street life, family expectations, and the
            skepticism of his community. As local hustler Rico and a crew of tech-savvy scammers led by Tasha close in
            on his project, Jay must outmaneuver enemies on all sides while staying true to his vision.
          </p>

          <div className="border-t border-gray-800 pt-6 mt-6">
            <h3 className="font-bold mb-4">Episode 3: "The Pitch"</h3>
            <div className="bg-black/40 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-400 italic">
                "Jay gathers his crew to pitch his cryptocurrency vision, facing resistance and doubt from his friends
                who are comfortable with traditional hustles. As financial pressures mount at home, Jay must convince
                key players like Ronny that his digital currency could be their ticket out of the streets."
              </p>
            </div>

            <div className="bg-black/40 p-4 rounded-lg mb-6">
              <h4 className="font-bold mb-2 text-sm">Scene Excerpt</h4>
              <div className="text-xs text-gray-400 font-mono overflow-x-auto whitespace-pre-line">
                <p>
                  <span className="text-gray-500">JAY</span>
                  <br />
                  <span className="italic">(excited)</span>
                  <br />
                  "Look, if we launch this token, it's like we're building a new hustle for the hood. No middlemen, no
                  banks. Just us. We can even cut in the hood, let them buy in cheap."
                </p>
                <p className="mt-2">
                  <span className="text-gray-500">DANTE</span>
                  <br />
                  <span className="italic">(leaning back, skeptical)</span>
                  <br />
                  "Bruh, you're talkin' too fast. People out here ain't trying to hear about no crypto. You think goons
                  on the block gonna trade they cash for some digital money they can't even hold?"
                </p>
                <p className="mt-2">
                  <span className="text-gray-500">JAY</span>
                  <br />
                  "But that's the point! We put them on, we help them understand. We show them how to make the money
                  work for them."
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-black/40 p-4 rounded-lg w-full">
                <p className="text-sm text-gray-400 mb-3">
                  <span className="font-semibold text-primary">Production Update:</span> Casting is currently in
                  progress. Stay tuned to our Twitch channel for live casting announcements and behind-the-scenes
                  content.
                </p>
                <Link href="https://www.twitch.tv/diamondzshadow" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#6441a5] hover:bg-[#7d5bbe] text-white rounded-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Follow on Twitch
                  </Button>
                </Link>
              </div>
              <Link href="/movies/shadow-chainz">
                <Button variant="outline" className="rounded-full bg-transparent">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  View Production Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ice Prince */}
      <div className="border border-gray-800 rounded-lg overflow-hidden mb-12 mt-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="h-64 bg-gradient-to-br from-gray-900 via-cyan-950/20 to-black">
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
              <div className="text-6xl font-bold tracking-tighter text-center text-white/90 drop-shadow-lg">
                ICE PRINCE
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 z-20 flex items-center">
            <div className="bg-cyan-600/80 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
              <Star className="h-3 w-3 mr-1" />
              Short Format Series
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
              <Film className="h-3 w-3 mr-1" />
              Crime Drama
            </div>
            <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              15 Episodes (6-11 min)
            </div>
            <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              Q3 2025
            </div>
            <div className="bg-yellow-900/20 text-yellow-500 px-3 py-1 rounded-full text-xs flex items-center">
              <Users className="h-3 w-3 mr-1" />
              In Development
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2">Ice Prince</h2>
          <p className="text-gray-400 mb-6">
            A gritty short-form street drama following the intertwined lives of hustlers, musicians, and dancers in the
            urban underground. When money goes missing and loyalties are tested, a complex web of betrayal and ambition
            unfolds across the city in fifteen compact, high-intensity episodes released bi-weekly until the climactic
            finale.
          </p>

          <div className="border-t border-gray-800 pt-6 mt-6">
            <h3 className="font-bold mb-4">Episode 1: "The Setup" (8 min)</h3>
            <div className="bg-black/40 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-400 italic">
                "We're introduced to Kitare, a talented young musician with a strained relationship with his father, and
                Hassin, a hustler whose money has been stolen. As their stories begin to unfold, we meet a cast of
                characters whose lives will soon intertwine in unexpected ways."
              </p>
            </div>

            <div className="bg-black/40 p-4 rounded-lg mb-6">
              <h4 className="font-bold mb-2 text-sm">Scene Excerpt</h4>
              <div className="text-xs text-gray-400 font-mono overflow-x-auto whitespace-pre-line">
                <p>
                  <span className="text-gray-500">KITARE</span>
                  <br />
                  <span className="italic">(To microphone)</span>
                  <br />
                  "O bai, we gotta do this shit fast my lame ass dad tryna get me to hang with him. The beat is in your
                  inbox."
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-black/40 p-4 rounded-lg w-full">
                <p className="text-sm text-gray-400 mb-3">
                  <span className="font-semibold text-cyan-500">Development Update:</span> Script development is in
                  progress. Pre-production will begin once casting is complete. Follow our Twitch for development
                  updates.
                </p>
                <Link href="https://www.twitch.tv/diamondzshadow" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#6441a5] hover:bg-[#7d5bbe] text-white rounded-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Follow on Twitch
                  </Button>
                </Link>
              </div>
              <Link href="/movies/ice-prince">
                <Button variant="outline" className="rounded-full bg-transparent">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  View Production Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Production Pipeline</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-gray-900 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Stage
                </th>
                <th scope="col" className="px-6 py-3">
                  Budget (SDM)
                </th>
                <th scope="col" className="px-6 py-3">
                  Votes
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-mono">DSM-001</td>
                <td className="px-6 py-4">Shadow Chainz</td>
                <td className="px-6 py-4">Casting</td>
                <td className="px-6 py-4">250,000</td>
                <td className="px-6 py-4">78% Approval</td>
                <td className="px-6 py-4">
                  <span className="bg-purple-900/20 text-purple-500 px-2 py-1 rounded text-xs">Casting</span>
                </td>
                <td className="px-6 py-4">
                  <Link href="/movies/shadow-chainz">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">
                      View Details
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-mono">DSM-004</td>
                <td className="px-6 py-4">Ice Prince</td>
                <td className="px-6 py-4">Development</td>
                <td className="px-6 py-4">120,000</td>
                <td className="px-6 py-4">Voting in Progress</td>
                <td className="px-6 py-4">
                  <span className="bg-cyan-900/20 text-cyan-500 px-2 py-1 rounded text-xs">New</span>
                </td>
                <td className="px-6 py-4">
                  <Link href="/movies/ice-prince">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">
                      View Details
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-mono">DSM-003</td>
                <td className="px-6 py-4">Crypto Kings</td>
                <td className="px-6 py-4">Script Development</td>
                <td className="px-6 py-4">180,000</td>
                <td className="px-6 py-4">65% Approval</td>
                <td className="px-6 py-4">
                  <span className="bg-green-900/20 text-green-500 px-2 py-1 rounded text-xs">Active</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-500 text-xs">Coming Soon</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Submit Production Proposal</h2>
        <p className="text-gray-400 text-sm mb-4">
          To submit a new production proposal, prepare the following information and submit it through the MovieFactory
          contract.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-sm mb-2">Required Information</h3>
            <ul className="text-xs text-gray-400 list-disc pl-5 space-y-1">
              <li>Production title and synopsis</li>
              <li>Budget breakdown and total funding request</li>
              <li>Production timeline with milestones</li>
              <li>Team composition and experience</li>
              <li>Distribution strategy</li>
              <li>Revenue projections</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-2">Submission Process</h3>
            <ol className="text-xs text-gray-400 list-decimal pl-5 space-y-1">
              <li>Connect wallet to the Diamondz Shadow dApp</li>
              <li>Navigate to Productions &gt; Submit Proposal</li>
              <li>Complete the proposal form with required details</li>
              <li>Submit transaction (requires gas fee)</li>
              <li>Proposal enters voting period (14 days)</li>
              <li>If approved, production contract is created</li>
            </ol>
          </div>
        </div>
        <div className="mt-6 bg-black/40 p-4 rounded-lg">
          <p className="text-sm text-gray-400 mb-3">
            <span className="font-semibold text-primary">Note:</span> Proposal submissions will be enabled once mainnet
            launches. In the meantime, follow our Twitch channel for updates on current productions.
          </p>
          <Link href="https://www.twitch.tv/diamondzshadow" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#6441a5] hover:bg-[#7d5bbe] text-white rounded-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              Follow on Twitch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
