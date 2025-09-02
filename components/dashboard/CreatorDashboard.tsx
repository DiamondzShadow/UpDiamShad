"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Eye, 
  Heart,
  MessageCircle,
  DollarSign,
  Plus,
  Settings,
  BarChart3,
  Zap,
  Star,
  Activity
} from "lucide-react";
import SocialMediaManager from "@/components/SocialMediaManager";

export default function CreatorDashboard() {
  const { user } = useAuth();
  const [isSocialMediaModalOpen, setIsSocialMediaModalOpen] = useState(false);

  if (!user) return null;

  const { wavzProfile } = user;
  const creatorStats = wavzProfile.creatorStats || {
    totalPosts: 0,
    totalViews: 0,
    totalLikes: 0,
    totalComments: 0,
    engagementRate: 0,
    fanCount: 0,
    monthlyEarnings: 0
  };

  // Level names for creators
  const levelNames = {
    1: 'Rookie Creator',
    2: 'Verified Voice', 
    3: 'Community Builder',
    4: 'Chain Influencer',
    5: 'Diamondz Creator'
  };

  const levelThresholds = [0, 1000, 5000, 25000, 100000];
  const currentLevelMin = levelThresholds[wavzProfile.level - 1];
  const nextLevelMin = levelThresholds[wavzProfile.level] || levelThresholds[levelThresholds.length - 1];
  const sparksToNext = wavzProfile.level < 5 ? nextLevelMin - wavzProfile.sparks : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Creator Dashboard
            </h1>
            <p className="text-gray-400">
              Welcome back, <span className="text-white">{user.displayName}</span>
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={() => setIsSocialMediaModalOpen(true)}
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              <Activity className="h-4 w-4 mr-2" />
              Connect Socials
            </Button>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Level Progress */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-2xl border border-purple-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500 rounded-lg">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Level {wavzProfile.level} - {levelNames[wavzProfile.level as keyof typeof levelNames]}
                </h3>
                <p className="text-gray-300">
                  {wavzProfile.sparks.toLocaleString()} Sparks
                  {wavzProfile.level < 5 && ` • ${sparksToNext.toLocaleString()} to next level`}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white mb-1">
                {wavzProfile.levelProgress}%
              </div>
              <div className="text-sm text-gray-400">Progress</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${wavzProfile.levelProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-400" />
            </div>
            <span className="text-xs text-gray-400">SPARKS</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {wavzProfile.sparks.toLocaleString()}
          </div>
          <p className="text-xs text-gray-400">
            +{Math.floor(Math.random() * 50) + 10} this week
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
            <span className="text-xs text-gray-400">FANS</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {creatorStats.fanCount.toLocaleString()}
          </div>
          <p className="text-xs text-gray-400">
            +{Math.floor(Math.random() * 20) + 5} this week
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <span className="text-xs text-gray-400">ENGAGEMENT</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {(creatorStats.engagementRate * 100).toFixed(1)}%
          </div>
          <p className="text-xs text-gray-400">
            +{(Math.random() * 2).toFixed(1)}% this week
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <DollarSign className="h-5 w-5 text-yellow-400" />
            </div>
            <span className="text-xs text-gray-400">EARNINGS</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            ${creatorStats.monthlyEarnings.toLocaleString()}
          </div>
          <p className="text-xs text-gray-400">
            This month
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Content Performance */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Content Performance</h3>
            <Button size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Eye className="h-4 w-4 text-gray-400" />
                <span className="text-white">Total Views</span>
              </div>
              <span className="font-semibold text-white">
                {creatorStats.totalViews.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-white">Total Likes</span>
              </div>
              <span className="font-semibold text-white">
                {creatorStats.totalLikes.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <span className="text-white">Total Comments</span>
              </div>
              <span className="font-semibold text-white">
                {creatorStats.totalComments.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <Zap className="h-4 w-4 text-purple-400" />
                <span className="text-white">Posts Created</span>
              </div>
              <span className="font-semibold text-white">
                {creatorStats.totalPosts.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Proofs & Rewards */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-6">Proof Activity</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-white">Proof of Post (PoP)</h4>
                <span className="text-purple-400 font-semibold">
                  {wavzProfile.proofStats.proofOfPost}
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Earn Sparks by creating engaging content
              </p>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-white">Proof of Hold (PoH)</h4>
                <span className="text-blue-400 font-semibold">
                  {wavzProfile.proofStats.proofOfHold}
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Sparks from fans holding your NFTs
              </p>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-white">Proof of Use (PoU)</h4>
                <span className="text-green-400 font-semibold">
                  {wavzProfile.proofStats.proofOfUse}
                </span>
              </div>
              <p className="text-sm text-gray-400">
                On-chain activities and interactions
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Create New Content
            </Button>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-6">Achievements & Badges</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {wavzProfile.badges.length > 0 ? (
            wavzProfile.badges.map((badge, index) => (
              <div key={index} className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <p className="text-xs text-white font-medium">{badge}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400 mb-4">No badges earned yet</p>
              <p className="text-sm text-gray-500">
                Keep creating content and engaging with fans to earn your first badge!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Social Media Manager Modal */}
      <SocialMediaManager 
        isOpen={isSocialMediaModalOpen} 
        onClose={() => setIsSocialMediaModalOpen(false)} 
      />
    </div>
  );
}