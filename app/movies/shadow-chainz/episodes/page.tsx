import { ArrowLeft, Play, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ShadowChainzEpisodesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/movies/shadow-chainz" className="flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Shadow Chainz
      </Link>

      <h1 className="text-3xl font-bold mb-6">Shadow Chainz: Complete Episode Guide</h1>
      <p className="text-gray-400 mb-8">
        Follow Jay's journey from street hustler to crypto visionary across all 15 episodes of this gritty drama series.
      </p>

      <div className="space-y-8">
        {/* Season 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">Season 1</h2>

          <div className="space-y-6">
            <div className="border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 1: "The Spark"</h3>
                <span className="bg-green-900/20 text-green-500 px-2 py-1 rounded text-xs">Released</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  45 Minutes
                </div>
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Released: March 15, 2023
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                In the gritty streets of NYC, Jay sits at his cluttered desk, eyes locked on his laptop screen as he
                reads about blockchain technology. Despite skepticism from his friends at the basketball court, Jay sees
                potential in cryptocurrency as a way out of the hood's traditional hustles. Alone on his rooftop that
                night, Jay makes a decision that will change everything: "The world wasn't ready for what I was about to
                do... but neither was the hood."
              </p>

              <div className="bg-black/40 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2 text-sm">Key Scenes</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Jay researching cryptocurrency articles</li>
                  <li>• Basketball court conversation with skeptical friends</li>
                  <li>• Jay's internal struggle with his vision</li>
                  <li>• Rooftop moment of decision</li>
                </ul>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                <Play className="w-4 h-4 mr-2" />
                Watch Episode
              </Button>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 2: "The Plan"</h3>
                <span className="bg-green-900/20 text-green-500 px-2 py-1 rounded text-xs">Released</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  48 Minutes
                </div>
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Released: March 22, 2023
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                Jay's research intensifies as his younger sister Lisa reminds him about overdue rent. Meeting with Dante
                in the park, Jay tries to sell him on the crypto project, but Dante remains skeptical, tempting Jay to
                return to street hustling. Back home, Jay faces mounting financial pressure as he calculates the $50,000
                needed to launch his coin. A confrontation with his mother about rent money pushes Jay to make a crucial
                decision about his future.
              </p>

              <div className="bg-black/40 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2 text-sm">Key Scenes</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Lisa confronting Jay about rent</li>
                  <li>• Park bench conversation with Dante</li>
                  <li>• Jay calculating project costs</li>
                  <li>• Tense confrontation with Jay's mother</li>
                  <li>• Jay's night walk through the neighborhood</li>
                </ul>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                <Play className="w-4 h-4 mr-2" />
                Watch Episode
              </Button>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 bg-primary/5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 3: "The Pitch"</h3>
                <span className="bg-blue-900/20 text-blue-500 px-2 py-1 rounded text-xs">Current</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  52 Minutes
                </div>
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Released: March 29, 2023
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                Jay gathers his crew—Dante, Mike, Kiki, and Ronny—at the park to pitch his cryptocurrency vision.
                Despite jokes and skepticism, Jay passionately explains how they could create their own token, giving
                the hood ownership and economic power. When Kiki questions crowdfunding, Dante reveals that Ronny has
                been asking questions about the project. Jay focuses his pitch directly on Ronny, comparing crypto's
                legitimacy to the dangers of street hustling. Though Ronny sees potential, he needs guarantees that Jay
                can't provide.
              </p>

              <div className="bg-black/40 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2 text-sm">Scene Excerpt</h4>
                <div className="text-xs text-gray-400 font-mono overflow-x-auto whitespace-pre-line">
                  <p>
                    <span className="text-gray-500">JAY</span>
                    <br />
                    <span className="italic">(serious tone)</span>
                    <br />
                    "Look, I know it's a gamble, slime. But so is everything out here. How many times you had to look
                    over your shoulder just to get by? This crypto thing? It's clean. It's legit. And we control it. No
                    cops, no middlemen. Just us Brodee"
                  </p>
                  <p className="mt-2">
                    <span className="text-gray-500">RONNY</span>
                    <br />
                    <span className="italic">(mulling it over, still cautious)</span>
                    <br />
                    "You really think people from the hood is gonna trust it? You think we can pull enough of these
                    idiots together for this? Thats real hopeful of you dawg. Its day to day out here."
                  </p>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                <Play className="w-4 h-4 mr-2" />
                Watch Episode
              </Button>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 4: "Unexpected Help"</h3>
                <span className="bg-yellow-900/20 text-yellow-500 px-2 py-1 rounded text-xs">In Production</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  50 Minutes
                </div>
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Coming: April 5, 2023
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                Ronny approaches Jay at the park, offering to help with the crypto project despite his reservations. Jay
                meets with Lucas, a tech-savvy old acquaintance, at his high-tech loft to pitch the cryptocurrency idea.
                Impressed by Jay's preparation, Lucas agrees to help but insists on a partnership with a proper business
                plan. Later, Ronny expresses continued doubts to Jay, agreeing to help part-time while maintaining his
                street hustle.
              </p>

              <div className="bg-black/40 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2 text-sm">Coming Soon</h4>
                <p className="text-sm text-gray-400">
                  This episode introduces Lucas, a key technical partner who will help bring Jay's vision to life, while
                  exploring Ronny's cautious commitment to the project.
                </p>
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 5: "Doubt & Decisions"</h3>
                <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Estimated: 55 Minutes
                </div>
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Coming: April 12, 2023
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                Jay and Ronny argue about the risks of the cryptocurrency project while local hustlers Rico and Ty watch
                from a distance. Rico and Ty confront Jay about his crypto venture, demanding a cut of the action. Jay
                stands his ground, explaining that cryptocurrency isn't like street hustling, but Rico makes it clear
                that he expects to be involved.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 6: "The Launch"</h3>
                <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Estimated: 50 Minutes
                </div>
                <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Coming: April 19, 2023
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                Jay, Ronny, Kiki, and Dante prepare for the pre-sale launch of their cryptocurrency. Technical glitches
                create tension as Lucas works to fix the payment gateway. After the successful launch, Rico and Ty
                confront Jay's crew at the park, demanding their cut of the project. Despite Jay's resistance, Rico
                makes it clear that he won't back down.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 7: "The Slip-Up"</h3>
                <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
              </div>

              <p className="text-gray-400 mb-6">
                Tasha, Nia, and Monique gather to analyze Jay's crypto project. When Monique accidentally drops a paper
                with crypto terms, Ty finds it and realizes Jay's project might be bigger than Rico thought. Ty faces a
                decision about whether to tell Jay or Rico about his discovery.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 8: "Caught Between"</h3>
                <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
              </div>

              <p className="text-gray-400 mb-6">
                Ty confronts Jay with evidence that Tasha's crew is digging into his project. Tasha learns that Ty is
                asking questions about her, creating tension. Jay calls for an urgent meeting with his team, while Ty
                must decide where his loyalties lie.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 9: "Suspicious Followers"</h3>
                <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
              </div>

              <p className="text-gray-400 mb-6">
                Lucas discovers suspicious followers on the project's GitHub page, identifying Monique and Nia as
                potential scammers. He warns Jay about the threat they pose, and they prepare to protect their code from
                being stolen.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Episode 10: "Too Close for Comfort"</h3>
                <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded text-xs">Coming Soon</span>
              </div>

              <p className="text-gray-400 mb-6">
                Rico confronts Tasha about her interest in Jay's project, creating tension. Tasha confesses to her crew
                that Rico knows about their activities. Meanwhile, Jay and Lucas implement stronger security measures to
                protect their project.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2">Upcoming Episodes</h2>

          <div className="space-y-4">
            <div className="p-4 border border-gray-800 rounded-lg">
              <h3 className="font-bold">Episode 11: "Under Surveillance"</h3>
              <p className="text-sm text-gray-400">
                Lucas locks down the project's code while Rico assigns Ty to spy on Tasha's crew. Jay and Dante discuss
                the growing threats to their project.
              </p>
            </div>

            <div className="p-4 border border-gray-800 rounded-lg">
              <h3 className="font-bold">Episode 12: "The Blockchain Hustle"</h3>
              <p className="text-sm text-gray-400">
                Jay and Dante devise a plan to use Rico's lack of technical knowledge against him, creating a decoy
                blockchain system to keep him distracted.
              </p>
            </div>

            <div className="p-4 border border-gray-800 rounded-lg">
              <h3 className="font-bold">Episode 13: "Close Calls"</h3>
              <p className="text-sm text-gray-400">
                Lucas discovers increased activity on the GitHub page as suspicions grow. Rico becomes paranoid about
                the lack of payouts, while Tasha's crew realizes Jay's blockchain transactions are looping in circles.
              </p>
            </div>

            <div className="p-4 border border-gray-800 rounded-lg">
              <h3 className="font-bold">Episode 14: "New Players, New Games"</h3>
              <p className="text-sm text-gray-400">
                Jay receives interest from overseas investors, adding a new dimension to the project. Meanwhile, Monique
                begins to see potential in Jay's vision beyond just scamming, creating tension within Tasha's crew.
              </p>
            </div>

            <div className="p-4 border border-gray-800 rounded-lg">
              <h3 className="font-bold">Episode 15: "Unseen Moves: Part 1"</h3>
              <p className="text-sm text-gray-400">
                Tasha finds herself caught between loyalty to Rico and curiosity about Jay's project. Jay meets with
                Monique, unsure if she's genuinely interested or setting a trap, while tensions rise on all sides.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/movies/shadow-chainz">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shadow Chainz
          </Button>
        </Link>
      </div>
    </div>
  )
}
