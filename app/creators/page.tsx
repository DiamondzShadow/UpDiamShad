import { Waves, Zap, TrendingUp, Users, Star, Award, Target, BarChart3, Shield, Eye, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CreatorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Wavz Creator Hub & Agent Scoring</h1>
        <p className="text-gray-400">
          Join the Wavz ecosystem where creators earn Sparks through verified contributions and build their reputation
          with AI-powered agent scoring.
        </p>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <div className="flex items-center mb-4">
          <Sparkles className="h-6 w-6 text-purple-400 mr-2" />
          <h2 className="text-2xl font-bold">What Makes Wavz Different</h2>
        </div>
        <p className="text-gray-400 mb-6">
          Wavz isn't just another creator platform - it's a revolutionary ecosystem that combines fraud-proof social
          verification, AI-powered contribution scoring, and blockchain-based rewards to create the most transparent and
          fair creator economy ever built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Fraud-Proof Verification</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <Shield className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>InsightIQ integration prevents bot farms and fake engagement</span>
              </li>
              <li className="flex items-start">
                <Eye className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Real-time authenticity verification across all platforms</span>
              </li>
              <li className="flex items-start">
                <Target className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>AI agents detect and reward genuine human engagement</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Transparent Rewards</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <Zap className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Earn Sparks for every verified contribution across platforms</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Dynamic scoring adjusts rewards based on quality and impact</span>
              </li>
              <li className="flex items-start">
                <Award className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Level progression unlocks exponentially better rewards</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-900/50 rounded-lg p-4">
          <h4 className="font-bold text-blue-300 mb-2">The Wavz Advantage</h4>
          <p className="text-sm text-gray-400">
            While other platforms take 30-50% cuts and rely on opaque algorithms, Wavz creators keep 90%+ of their
            earnings with full transparency into how rewards are calculated. Our AI agents work for you, not against
            you.
          </p>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <div className="flex items-center mb-4">
          <Zap className="h-6 w-6 text-blue-400 mr-2" />
          <h2 className="text-2xl font-bold">Wavz Agent Scoring System</h2>
        </div>
        <p className="text-gray-400 mb-6">
          Our AI-powered agent scoring system evaluates creator contributions across multiple platforms, providing
          transparent reputation tracking and fair reward distribution based on genuine engagement and quality content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 p-4 rounded-lg">
            <Target className="h-6 w-6 text-green-400 mb-3" />
            <h3 className="font-bold mb-2">Multi-Platform Analysis</h3>
            <p className="text-sm text-gray-400">
              AI agents analyze content quality, engagement patterns, and authenticity across YouTube, Twitter, and
              other connected platforms.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <BarChart3 className="h-6 w-6 text-purple-400 mb-3" />
            <h3 className="font-bold mb-2">Dynamic Scoring</h3>
            <p className="text-sm text-gray-400">
              Real-time score adjustments based on content performance, community feedback, and contribution
              consistency.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <Award className="h-6 w-6 text-yellow-400 mb-3" />
            <h3 className="font-bold mb-2">Reward Optimization</h3>
            <p className="text-sm text-gray-400">
              Higher agent scores unlock better Spark multipliers, exclusive opportunities, and priority access to new
              features.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Becoming a Wavz Creator</h2>
        <p className="text-gray-400 mb-6">
          Connect your content platforms and start earning Sparks through the Wavz contribution system with AI-powered
          scoring and fraud-proof verification.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wavz Client Setup</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold">Platform Connection + InsightIQ Verification</h4>
                  <p className="text-sm text-gray-400">
                    Connect your YouTube, Twitter, and other platforms while InsightIQ verifies your account
                    authenticity and establishes fraud-proof identity
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold">Agent Calibration</h4>
                  <p className="text-sm text-gray-400">
                    AI agents analyze your verified content history to establish baseline scoring metrics and detect
                    your unique engagement patterns
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold">Spark Activation</h4>
                  <p className="text-sm text-gray-400">
                    Start earning Sparks through Proof of Post, Proof of Hold, and Proof of Use activities with verified
                    authenticity
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-bold">Level Progression</h4>
                  <p className="text-sm text-gray-400">
                    Progress from Ripple to Diamondz Creator through consistent quality contributions and high
                    authenticity scores
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-950/20 border border-blue-900 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="font-bold text-blue-400">InsightIQ Verification Process</h4>
              </div>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Real-time bot detection and fake engagement filtering</li>
                <li>• Cross-platform identity verification and linking</li>
                <li>• Behavioral pattern analysis for authenticity scoring</li>
                <li>• Continuous monitoring for account security</li>
              </ul>
            </div>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Agent Scoring Factors</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Content Quality</span>
                <span className="text-sm font-mono">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Engagement Rate</span>
                <span className="text-sm font-mono">25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Consistency</span>
                <span className="text-sm font-mono">20%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Community Impact</span>
                <span className="text-sm font-mono">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Platform Diversity</span>
                <span className="text-sm font-mono">10%</span>
              </div>
            </div>

            <div className="mt-4 p-3 border border-gray-700 rounded">
              <p className="text-xs text-gray-400">
                Agent scores update every 24 hours and influence Spark multipliers. Higher scores unlock exclusive
                creator perks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Wavz Level Progression</h2>
        <p className="text-gray-400 mb-6">
          Advance through creator levels by earning Sparks and maintaining high agent scores. Each level unlocks new
          rewards and opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-950/20 border border-blue-900 rounded-lg p-4">
            <Waves className="h-6 w-6 text-blue-400 mb-3" />
            <h3 className="font-bold text-blue-400 mb-2">Creator Levels</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                • <span className="text-gray-300">Ripple</span> - New creators (0-1K Sparks)
              </li>
              <li>
                • <span className="text-blue-300">Wave Rider</span> - Active creators (1K-10K Sparks)
              </li>
              <li>
                • <span className="text-purple-300">Surf Builder</span> - Established creators (10K-50K Sparks)
              </li>
              <li>
                • <span className="text-yellow-300">Tsunami</span> - Elite creators (50K+ Sparks)
              </li>
              <li>
                • <span className="text-pink-300">Diamondz Creator</span> - Top tier (100K+ Sparks + High Agent Score)
              </li>
            </ul>
          </div>

          <div className="bg-green-950/20 border border-green-900 rounded-lg p-4">
            <Star className="h-6 w-6 text-green-400 mb-3" />
            <h3 className="font-bold text-green-400 mb-2">Level Benefits</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Higher Spark multipliers for contributions</li>
              <li>• Exclusive access to premium features</li>
              <li>• Priority support and community recognition</li>
              <li>• Special NFT badges and achievements</li>
              <li>• Revenue sharing opportunities</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-black/40 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Agent Score Ranges</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="h-2 bg-green-500 rounded mb-2"></div>
              <div className="text-sm font-bold text-green-400">90-100</div>
              <div className="text-xs text-gray-400">Elite</div>
            </div>
            <div className="text-center">
              <div className="h-2 bg-blue-500 rounded mb-2"></div>
              <div className="text-sm font-bold text-blue-400">75-89</div>
              <div className="text-xs text-gray-400">Strong</div>
            </div>
            <div className="text-center">
              <div className="h-2 bg-yellow-500 rounded mb-2"></div>
              <div className="text-sm font-bold text-yellow-400">60-74</div>
              <div className="text-xs text-gray-400">Good</div>
            </div>
            <div className="text-center">
              <div className="h-2 bg-gray-500 rounded mb-2"></div>
              <div className="text-sm font-bold text-gray-400">Below 60</div>
              <div className="text-xs text-gray-400">Developing</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-6 w-6 text-purple-400 mr-2" />
          <h2 className="text-2xl font-bold">Platform Integration</h2>
        </div>
        <p className="text-gray-400 mb-6">
          Wavz seamlessly integrates with your existing content platforms, providing unified analytics and reward
          distribution across all your channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 p-4 rounded-lg">
            <BarChart3 className="h-6 w-6 text-green-400 mb-3" />
            <h3 className="font-bold mb-2">Unified Analytics</h3>
            <p className="text-sm text-gray-400">
              Track performance across all platforms with AI-powered insights and contribution scoring in one dashboard.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <Zap className="h-6 w-6 text-blue-400 mb-3" />
            <h3 className="font-bold mb-2">Automated Rewards</h3>
            <p className="text-sm text-gray-400">
              Earn Sparks automatically as you create content, with agent scores optimizing your reward multipliers.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <Users className="h-6 w-6 text-purple-400 mb-3" />
            <h3 className="font-bold mb-2">Community Growth</h3>
            <p className="text-sm text-gray-400">
              Connect with other Wavz creators, collaborate on projects, and build your audience across the ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Ride the Wavz?</h2>
        <p className="text-gray-400 mb-6">
          Join thousands of creators earning 10x more through fraud-proof verification, AI-powered scoring, and
          transparent rewards. Your authentic engagement finally pays what it's worth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded">
            <Waves className="w-4 h-4 mr-2" />
            Start Wavz Verification
          </Button>
          <Button variant="outline" className="rounded bg-transparent">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Creator Dashboard
          </Button>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          No upfront costs • Keep 90%+ of earnings • Fraud-proof verification included
        </div>
      </div>
    </div>
  )
}
