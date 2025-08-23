import { ArrowLeft, Calendar, Film, Clock, Star, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IcePrincePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/movies" className="flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Productions
      </Link>

      <div className="border border-gray-800 rounded-lg overflow-hidden mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="h-80 bg-gradient-to-br from-gray-900 via-cyan-950/20 to-black">
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

          <h1 className="text-3xl font-bold mb-4">Ice Prince</h1>
          <p className="text-gray-400 mb-6">
            A gritty short-form street drama following the intertwined lives of hustlers, musicians, and dancers in the
            urban underground. When money goes missing and loyalties are tested, a complex web of betrayal and ambition
            unfolds across the city.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Synopsis</h2>
              <p className="text-gray-400 text-sm mb-4">
                In the heart of the city, Kitare, a talented young musician with a complicated relationship with his
                father Afamefuna, navigates the dangerous waters of street life while pursuing his artistic dreams.
                Meanwhile, Hassin and his crew are on a mission to recover stolen money, setting them on a collision
                course with Durty, a slippery hustler who's always one step ahead.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                As their paths intertwine with exotic dancers, kingpins, and street-level dealers, alliances form and
                break with deadly consequences. When Kitare discovers his father may be involved with the missing money,
                he must choose between family loyalty and street justice.
              </p>
              <p className="text-gray-400 text-sm">
                "Ice Prince" is a raw, unflinching look at urban life, delivered in a compact, high-intensity format
                that explores themes of ambition, betrayal, family ties, and the universal desire to rise above one's
                circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Production Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Production ID:</span>
                  <span className="font-mono">DSM-004</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Budget:</span>
                  <span>120,000 SDM</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Current Stage:</span>
                  <span>Development</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Format:</span>
                  <span>Short Episodes (6-11 minutes)</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Release Schedule:</span>
                  <span>Bi-weekly until climax (Ep 15)</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Governance Approval:</span>
                  <span>Voting in Progress</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Contributors:</span>
                  <span>412</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Contract Address:</span>
                  <span className="font-mono text-xs">0x7D2...9F4c</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">Episode Guide</h2>

            <div className="space-y-6">
              <div className="border border-gray-800 rounded-lg p-4 bg-primary/5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 1: "The Setup" (8 min)</h3>
                  <span className="bg-cyan-900/20 text-cyan-500 px-2 py-1 rounded text-xs">In Development</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  We're introduced to Kitare, a talented young musician with a strained relationship with his father,
                  and Hassin, a hustler whose money has been stolen. As their stories begin to unfold, we meet a cast of
                  characters whose lives will soon intertwine in unexpected ways.
                </p>

                <div className="bg-black/40 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2 text-sm">Scene Excerpt</h4>
                  <div className="text-xs text-gray-400 font-mono overflow-x-auto whitespace-pre-line">
                    <p>
                      <span className="text-gray-500">KITARE</span>
                      <br />
                      <span className="italic">(To microphone)</span>
                      <br />
                      "O bai, we gotta do this shit fast my lame ass dad tryna get me to hang with him. The beat is in
                      your inbox."
                    </p>
                    <p className="mt-2">
                      <span className="text-gray-500">SAM</span>
                      <br />
                      <span className="italic">(To KITARE)</span>
                      <br />
                      "Copy.."
                    </p>
                    <p className="mt-2">
                      <span className="text-gray-500">KITARE</span>
                      <br />
                      "Turn me up!"
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 2: "Family Ties" (7 min)</h3>
                  <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Kitare's relationship with his father Afamefuna grows more complicated as he discovers hints of his
                  father's criminal connections. Meanwhile, Hassin and his crew get closer to tracking down their stolen
                  money.
                </p>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 3: "The Hunt" (9 min)</h3>
                  <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Voodoo is enlisted to help track down Durty, while Dagne contemplates her future beyond the club.
                  Tensions rise as multiple parties close in on their targets.
                </p>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 4: "Crossroads" (11 min)</h3>
                  <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  As paths begin to cross, alliances form and break. Kitare must make a difficult choice between loyalty
                  to his friends and his complicated relationship with his father.
                </p>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 5: "Confrontation" (6 min)</h3>
                  <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  The crew puts their plan into action as they close in on Durty. Meanwhile, Afamefuna makes a dangerous
                  move that puts everyone at risk.
                </p>
              </div>

              <div className="border border-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Episode 6: "Reckoning" (10 min)</h3>
                  <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  The season finale brings all storylines to a head as Kitare confronts his father, Hassin faces Durty,
                  and everyone must deal with the consequences of their choices.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">Release Schedule</h2>

            <div className="bg-black/40 p-6 rounded-lg mb-8">
              <h3 className="font-bold mb-4">Bi-Weekly Release Strategy</h3>
              <p className="text-gray-400 mb-4">
                "Ice Prince" follows a bi-weekly release schedule, with new episodes dropping every two weeks until the
                climactic 15th episode. This approach allows for:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <span>Consistent audience engagement over a 30-week period</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-white text-xs">2</span>
                  </div>
                  <span>Community discussion and theory development between episodes</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-white text-xs">3</span>
                  </div>
                  <span>Governance voting on plot developments for upcoming episodes</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gray-800 flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-white text-xs">4</span>
                  </div>
                  <span>Building tension toward the climactic 15th episode</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-800 rounded-lg p-4">
                <h3 className="font-bold mb-2">Episodes 1-5</h3>
                <p className="text-sm text-gray-400">
                  Setting the stage and introducing key characters and conflicts. Released bi-weekly starting Q3 2025.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-4">
                <h3 className="font-bold mb-2">Episodes 6-10</h3>
                <p className="text-sm text-gray-400">
                  Deepening conflicts and raising stakes as alliances shift and betrayals occur. Continuing bi-weekly
                  release.
                </p>
              </div>
              <div className="border border-gray-800 rounded-lg p-4">
                <h3 className="font-bold mb-2">Episodes 11-15</h3>
                <p className="text-sm text-gray-400">
                  Building to the climactic finale with increasing tension and dramatic confrontations. Final episode
                  features extended runtime.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">Key Characters</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Kitare</h3>
                <p className="text-sm text-gray-400 mb-2">
                  A talented young musician trying to balance his artistic ambitions with the realities of street life
                  and his complicated relationship with his father.
                </p>
                <div className="text-xs text-gray-500">
                  "Yeah, thats ayte. Listen Dad its been cool but I gotta life ya know? I got my own path to travel and
                  all that."
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Hassin</h3>
                <p className="text-sm text-gray-400 mb-2">
                  A street-smart hustler on a mission to recover stolen money, willing to use any means necessary to get
                  what's his.
                </p>
                <div className="text-xs text-gray-500">
                  "We found him, BABIR taped an Iphone to his car and once we activated find my Iphone it led us right
                  to him."
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Afamefuna</h3>
                <p className="text-sm text-gray-400 mb-2">
                  Kitare's estranged father with mysterious criminal connections who's trying to reconnect with his son
                  while pursuing his own dangerous agenda.
                </p>
                <div className="text-xs text-gray-500">
                  "I told you I know more about this lifestyle that you wanna live than you know."
                </div>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Durty</h3>
                <p className="text-sm text-gray-400 mb-2">
                  A slippery hustler who's always one step ahead, now being hunted by multiple parties for his role in
                  stealing money.
                </p>
                <div className="text-xs text-gray-500">
                  "I said what I said. Lebron ain't never gonna pass Jordan. Show me where his rings are?"
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">Short Format Innovation</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Mobile-First Distribution</h3>
                <p className="text-sm text-gray-400">
                  Optimized for vertical viewing on mobile devices with special attention to visual storytelling that
                  works in the short-form format.
                </p>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Micro-Funding Model</h3>
                <p className="text-sm text-gray-400">
                  Each episode is funded individually through micro-contributions, allowing for rapid production and
                  release cycles.
                </p>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Interactive Endings</h3>
                <p className="text-sm text-gray-400">
                  Token holders can vote on alternative endings for each episode, creating a truly interactive
                  storytelling experience.
                </p>
              </div>

              <div className="bg-black/40 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Social Media Integration</h3>
                <p className="text-sm text-gray-400">
                  Episodes are designed to be shared across social platforms with embedded blockchain verification of
                  ownership.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Development Updates</h2>

              <div className="bg-black/40 p-6 rounded-lg">
                <p className="text-gray-400 mb-4">
                  <span className="font-semibold text-cyan-500">Current Status:</span> Script development is in
                  progress. Pre-production will begin once casting is complete. Stay tuned to our Twitch channel for
                  development updates and behind-the-scenes content.
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
        </div>
      </div>
    </div>
  )
}
