"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Sparkles, 
  Users, 
  Wallet,
  TrendingUp,
  Shield,
  Gift,
  Star,
  Plus,
  Settings,
  Activity,
  Crown,
  Zap,
  Award
} from "lucide-react";

export default function FanDashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const { wavzProfile } = user;
  const fanStats = wavzProfile.fanStats || {
    creatorsSupported: 0,
    totalSpent: 0,
    nftsHeld: 0,
    stakingAmount: 0,
    supportLevel: 'bronze' as const
  };

  // Level names for fans
  const levelNames = {
    1: 'Rookie Fan',
    2: 'Superfan', 
    3: 'Backer',
    4: 'Whale Ally',
    5: 'Chain OG'
  };

  const supportLevelColors = {
    bronze: 'text-amber-600 bg-amber-500/20',
    silver: 'text-gray-400 bg-gray-500/20',
    gold: 'text-yellow-400 bg-yellow-500/20',
    diamond: 'text-blue-400 bg-blue-500/20'
  };

  const levelThresholds = [0, 500, 2500, 10000, 50000];
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
              Fan Dashboard
            </h1>
            <p className="text-gray-400">
              Welcome back, <span className="text-white">{user.displayName}</span>
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Activity className="h-4 w-4 mr-2" />
              Discover Creators
            </Button>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Level Progress */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-2xl border border-blue-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white">
                    Level {wavzProfile.level} - {levelNames[wavzProfile.level as keyof typeof levelNames]}
                  </h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${supportLevelColors[fanStats.supportLevel]}`}>
                    {fanStats.supportLevel.toUpperCase()}
                  </div>
                </div>
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
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${wavzProfile.levelProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>
            <span className="text-xs text-gray-400">SPARKS</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {wavzProfile.sparks.toLocaleString()}
          </div>
          <p className="text-xs text-gray-400">
            +{Math.floor(Math.random() * 30) + 5} this week
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Users className="h-5 w-5 text-purple-400" />
            </div>
            <span className="text-xs text-gray-400">CREATORS</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {fanStats.creatorsSupported}
          </div>
          <p className="text-xs text-gray-400">
            Supported
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Shield className="h-5 w-5 text-green-400" />
            </div>
            <span className="text-xs text-gray-400">NFTS</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {fanStats.nftsHeld}
          </div>
          <p className="text-xs text-gray-400">
            Held
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Wallet className="h-5 w-5 text-yellow-400" />
            </div>
            <span className="text-xs text-gray-400">STAKING</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            ${fanStats.stakingAmount.toLocaleString()}
          </div>
          <p className="text-xs text-gray-400">
            Active
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Supported Creators */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Supported Creators</h3>
            <Button size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
              <Plus className="h-4 w-4 mr-2" />
              Discover More
            </Button>
          </div>

          {fanStats.creatorsSupported > 0 ? (
            <div className="space-y-4">
              {/* Mock creator cards */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">CreatorOne</p>
                    <p className="text-xs text-gray-400">Level 4 • 25K Sparks</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 text-sm font-medium">Supporting</p>
                  <p className="text-xs text-gray-400">2 NFTs held</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400 mb-4">No creators supported yet</p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Discover Creators
              </Button>
            </div>
          )}
        </div>

        {/* Proofs & Rewards */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-6">Support Activity</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-white">Proof of Support (PoS)</h4>
                <span className="text-blue-400 font-semibold">
                  {wavzProfile.proofStats.proofOfSupport}
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Earn Sparks by supporting creators
              </p>
            </div>

            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-white">Proof of Hold (PoH)</h4>
                <span className="text-purple-400 font-semibold">
                  {wavzProfile.proofStats.proofOfHold}
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Continuous rewards for holding NFTs
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
                Platform usage and staking activities
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                <Gift className="h-4 w-4 mr-2" />
                Buy NFT
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Zap className="h-4 w-4 mr-2" />
                Stake Tokens
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Fan Perks */}
      <div className="mt-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30">
        <h3 className="text-xl font-semibold text-white mb-6">Fan Perks & Benefits</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <Award className="h-8 w-8 mb-3 text-blue-400" />
            <h4 className="font-medium text-white mb-2">Exclusive Access</h4>
            <p className="text-sm text-gray-400">
              Get early access to creator drops and exclusive content
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg">
            <TrendingUp className="h-8 w-8 mb-3 text-green-400" />
            <h4 className="font-medium text-white mb-2">Revenue Share</h4>
            <p className="text-sm text-gray-400">
              Earn passive income from creator success
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg">
            <Star className="h-8 w-8 mb-3 text-yellow-400" />
            <h4 className="font-medium text-white mb-2">VIP Status</h4>
            <p className="text-sm text-gray-400">
              Special recognition and voting rights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}