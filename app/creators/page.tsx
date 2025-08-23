import { Shield, AlertTriangle, CheckCircle, Users, Youtube, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CreatorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Creator Profiles & Trust Scoring</h1>
        <p className="text-gray-400">
          Build your onchain reputation with Hirule Labs trust infrastructure and community-verified profiles.
        </p>
      </div>

      {/* Trust Score Overview */}
      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <div className="flex items-center mb-4">
          <Shield className="h-6 w-6 text-green-400 mr-2" />
          <h2 className="text-2xl font-bold">Hirule Labs Trust Infrastructure</h2>
        </div>
        <p className="text-gray-400 mb-6">
          Every creator profile includes an onchain trust score powered by{" "}
          <a
            href="https://www.hirulelabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Hirule Labs
          </a>
          , providing transparent reputation tracking and community protection against shady practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 p-4 rounded-lg">
            <CheckCircle className="h-6 w-6 text-green-400 mb-3" />
            <h3 className="font-bold mb-2">Trust Score Calculation</h3>
            <p className="text-sm text-gray-400">
              Real-time scoring based on content authenticity, community engagement, financial transparency, and
              historical behavior patterns.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-yellow-400 mb-3" />
            <h3 className="font-bold mb-2">Community Alerts</h3>
            <p className="text-sm text-gray-400">
              Automatic notifications when trust scores drop below thresholds, alerting the community to potential risks
              or suspicious activities.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <Users className="h-6 w-6 text-blue-400 mb-3" />
            <h3 className="font-bold mb-2">Decentralized Verification</h3>
            <p className="text-sm text-gray-400">
              Multiple validator nodes verify creator actions and contributions, ensuring trust scores reflect genuine
              community consensus.
            </p>
          </div>
        </div>
      </div>

      {/* Creator Profile Setup */}
      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Creating Your Creator Profile</h2>
        <p className="text-gray-400 mb-6">
          Establish your onchain presence with a verified creator profile that builds trust and unlocks ecosystem
          rewards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Profile Setup Process</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold">Identity Verification</h4>
                  <p className="text-sm text-gray-400">Complete KYC through Hirule Labs secure verification system</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold">Stake Requirements</h4>
                  <p className="text-sm text-gray-400">Stake minimum 2,000 SDM tokens to activate creator profile</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold">Content Verification</h4>
                  <p className="text-sm text-gray-400">Link and verify your YouTube channel or content platforms</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-bold">Trust Score Initialization</h4>
                  <p className="text-sm text-gray-400">
                    Hirule Labs generates your initial trust score based on verification data
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Trust Score Factors</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Content Authenticity</span>
                <span className="text-sm font-mono">25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Community Engagement</span>
                <span className="text-sm font-mono">20%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Financial Transparency</span>
                <span className="text-sm font-mono">20%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Platform Compliance</span>
                <span className="text-sm font-mono">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Historical Behavior</span>
                <span className="text-sm font-mono">10%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Validator Consensus</span>
                <span className="text-sm font-mono">10%</span>
              </div>
            </div>

            <div className="mt-4 p-3 border border-gray-700 rounded">
              <p className="text-xs text-gray-400">
                Trust scores are updated in real-time and stored immutably onchain. Scores below 60% trigger community
                alerts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Protection */}
      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Community Protection System</h2>
        <p className="text-gray-400 mb-6">
          Our trust scoring system actively protects the community by identifying and alerting about potentially harmful
          actors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-950/20 border border-red-900 rounded-lg p-4">
            <AlertTriangle className="h-6 w-6 text-red-400 mb-3" />
            <h3 className="font-bold text-red-400 mb-2">Low Trust Score Alerts</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Automatic notifications when creator trust drops below 60%</li>
              <li>• Community-wide alerts for scores below 40%</li>
              <li>• Detailed breakdown of trust score factors</li>
              <li>• Historical trust score tracking and trends</li>
            </ul>
          </div>

          <div className="bg-yellow-950/20 border border-yellow-900 rounded-lg p-4">
            <Shield className="h-6 w-6 text-yellow-400 mb-3" />
            <h3 className="font-bold text-yellow-400 mb-2">Shady Practice Detection</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AI-powered content authenticity verification</li>
              <li>• Suspicious financial transaction monitoring</li>
              <li>• Community reporting and validation system</li>
              <li>• Cross-platform behavior analysis</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-black/40 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Trust Score Ranges</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="h-2 bg-green-500 rounded mb-2"></div>
              <div className="text-sm font-bold text-green-400">85-100%</div>
              <div className="text-xs text-gray-400">Excellent</div>
            </div>
            <div className="text-center">
              <div className="h-2 bg-blue-500 rounded mb-2"></div>
              <div className="text-sm font-bold text-blue-400">70-84%</div>
              <div className="text-xs text-gray-400">Good</div>
            </div>
            <div className="text-center">
              <div className="h-2 bg-yellow-500 rounded mb-2"></div>
              <div className="text-sm font-bold text-yellow-400">60-69%</div>
              <div className="text-xs text-gray-400">Caution</div>
            </div>
            <div className="text-center">
              <div className="h-2 bg-red-500 rounded mb-2"></div>
              <div className="text-sm font-bold text-red-400">Below 60%</div>
              <div className="text-xs text-gray-400">High Risk</div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration with YouTube Adapter */}
      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <div className="flex items-center mb-4">
          <Youtube className="h-6 w-6 text-red-400 mr-2" />
          <h2 className="text-2xl font-bold">YouTube Integration</h2>
        </div>
        <p className="text-gray-400 mb-6">
          Creator profiles seamlessly integrate with our YouTube Adapter, combining content metrics with trust scoring
          for comprehensive creator evaluation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 p-4 rounded-lg">
            <TrendingUp className="h-6 w-6 text-green-400 mb-3" />
            <h3 className="font-bold mb-2">Performance Tracking</h3>
            <p className="text-sm text-gray-400">
              Real-time YouTube metrics combined with trust scores provide complete creator performance overview.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <Shield className="h-6 w-6 text-blue-400 mb-3" />
            <h3 className="font-bold mb-2">Content Verification</h3>
            <p className="text-sm text-gray-400">
              Hirule Labs verifies content authenticity and flags potential violations or suspicious patterns.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <Users className="h-6 w-6 text-purple-400 mb-3" />
            <h3 className="font-bold mb-2">Reward Distribution</h3>
            <p className="text-sm text-gray-400">
              Trust scores influence reward distribution, ensuring high-quality creators receive proportional benefits.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/integrations/youtube-adapter">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded mr-4">
              <Youtube className="w-4 h-4 mr-2" />
              Explore YouTube Integration
            </Button>
          </Link>
          <a href="https://www.hirulelabs.com/security" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded bg-transparent">
              <Shield className="w-4 h-4 mr-2" />
              Learn About Hirule Labs Security
            </Button>
          </a>
        </div>
      </div>

      {/* Get Started */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Build Your Creator Profile?</h2>
        <p className="text-gray-400 mb-6">
          Join the Diamondz Shadow ecosystem and establish your onchain reputation with transparent trust scoring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blockchain/interact">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded">
              <CheckCircle className="w-4 h-4 mr-2" />
              Create Creator Profile
            </Button>
          </Link>
          <a href="https://www.hirulelabs.com/solutions" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded bg-transparent">
              <Shield className="w-4 h-4 mr-2" />
              View Hirule Labs Solutions
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
