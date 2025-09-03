"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNotifications } from "@/hooks/useNotifications";
import { 
  Sparkles, 
  Users, 
  Trophy, 
  Heart, 
  ChevronRight, 
  Loader2,
  Star,
  Zap
} from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3009';

export default function OnboardingFlow() {
  const { user, refreshUser } = useAuth();
  const { showSuccess, showError } = useNotifications();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'creator' | 'fan' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRoleSelection = async () => {
    if (!selectedRole) {
      showError("Selection Required", "Please choose your role to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_BASE_URL}/api/onboarding/role`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ role: selectedRole })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showSuccess(
          "Welcome to Diamondz!", 
          `You're now set up as a ${selectedRole}! You've earned your first Sparks.`
        );
        
        // Refresh user data to get updated profile
        await refreshUser();
        
        // Redirect to appropriate dashboard
        router.push('/dashboard');
      } else {
        showError("Setup Failed", data.message || "Failed to complete onboarding.");
      }
    } catch (error) {
      console.error('Onboarding failed:', error);
      showError("Setup Failed", "Unable to complete onboarding. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Sparkles className="h-16 w-16 text-purple-400 animate-pulse" />
            <div className="absolute -top-1 -right-1">
              <Zap className="h-6 w-6 text-yellow-400" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to the <span className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Wavz</span> Economy
        </h1>
        <p className="text-xl text-gray-300 mb-2">
          Choose your path in the creator economy revolution
        </p>
        <p className="text-gray-400">
          Earn <span className="text-purple-400 font-semibold">Sparks</span> (cPoints) through your contributions and level up!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Creator Option */}
        <div 
          className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer group ${
            selectedRole === 'creator'
              ? 'border-purple-500 bg-purple-500/10 scale-105'
              : 'border-gray-700 bg-gray-900/50 hover:border-purple-400 hover:bg-gray-800/50'
          }`}
          onClick={() => setSelectedRole('creator')}
        >
          <div className="text-center">
            <div className="mb-6">
              <Trophy className={`h-16 w-16 mx-auto ${selectedRole === 'creator' ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-400'} transition-colors`} />
            </div>
            
            <h3 className={`text-2xl font-bold mb-4 ${selectedRole === 'creator' ? 'text-white' : 'text-gray-300'}`}>
              I'm a Creator
            </h3>
            
            <p className="text-gray-400 mb-6">
              Share content, build your audience, and earn rewards for your creativity and engagement.
            </p>

            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-300">Earn Sparks through <strong>Proof of Post</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-300">Level up: Rookie → Verified → Builder → Influencer → Diamond</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-300">Connect social accounts for analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-300">Earn from fan support & NFT sales</span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-purple-500/20 rounded-lg">
              <p className="text-sm text-purple-300">
                🎁 <strong>Starting bonus:</strong> 100 Sparks
              </p>
            </div>
          </div>

          {selectedRole === 'creator' && (
            <div className="absolute -top-2 -right-2">
              <div className="bg-purple-500 text-white rounded-full p-2">
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          )}
        </div>

        {/* Fan Option */}
        <div 
          className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer group ${
            selectedRole === 'fan'
              ? 'border-blue-500 bg-blue-500/10 scale-105'
              : 'border-gray-700 bg-gray-900/50 hover:border-blue-400 hover:bg-gray-800/50'
          }`}
          onClick={() => setSelectedRole('fan')}
        >
          <div className="text-center">
            <div className="mb-6">
              <Heart className={`h-16 w-16 mx-auto ${selectedRole === 'fan' ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-400'} transition-colors`} />
            </div>
            
            <h3 className={`text-2xl font-bold mb-4 ${selectedRole === 'fan' ? 'text-white' : 'text-gray-300'}`}>
              I'm a Fan
            </h3>
            
            <p className="text-gray-400 mb-6">
              Support your favorite creators, collect NFTs, and get rewarded for your loyalty.
            </p>

            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Earn Sparks through <strong>Proof of Support</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Level up: Rookie → Superfan → Backer → Whale → Chain OG</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Hold NFTs for continuous rewards</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Get exclusive access & perks</span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-300">
                🎁 <strong>Starting bonus:</strong> 50 Sparks
              </p>
            </div>
          </div>

          {selectedRole === 'fan' && (
            <div className="absolute -top-2 -right-2">
              <div className="bg-blue-500 text-white rounded-full p-2">
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={handleRoleSelection}
          disabled={!selectedRole || isSubmitting}
          size="lg"
          className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Setting up your profile...
            </>
          ) : (
            <>
              Continue to Dashboard
              <ChevronRight className="h-5 w-5 ml-2" />
            </>
          )}
        </Button>
        
        {selectedRole && (
          <p className="text-sm text-gray-400 mt-4">
            You chose: <span className="text-white font-medium">{selectedRole === 'creator' ? 'Creator' : 'Fan'}</span>
            {' • '}Don't worry, you can always support creators or create content regardless of your primary role.
          </p>
        )}
      </div>
    </div>
  );
}
