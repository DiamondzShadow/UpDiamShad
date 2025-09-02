"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useNotifications } from "@/hooks/useNotifications";
import { Loader2 } from "lucide-react";
import OnboardingFlow from "@/components/OnboardingFlow";
import CreatorDashboard from "@/components/dashboard/CreatorDashboard";
import FanDashboard from "@/components/dashboard/FanDashboard";

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { showError } = useNotifications();
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // Check authentication status
    if (!isLoading) {
      if (!isAuthenticated || !user) {
        router.push('/');
        return;
      }
      setIsCheckingAuth(false);
    }
  }, [isAuthenticated, isLoading, user, router]);

  // Show loading while checking authentication
  if (isLoading || isCheckingAuth) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-white" />
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated, this shouldn't happen due to redirect above
  if (!user) {
    return null;
  }

  // If user hasn't completed onboarding, show onboarding flow
  if (!user.wavzProfile.isOnboarded) {
    return (
      <div className="min-h-screen bg-black">
        <OnboardingFlow />
      </div>
    );
  }

  // Show appropriate dashboard based on user role
  return (
    <div className="min-h-screen bg-black">
      {user.wavzProfile.role === 'creator' && <CreatorDashboard />}
      {user.wavzProfile.role === 'fan' && <FanDashboard />}
      {!user.wavzProfile.role && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-gray-400 mb-4">Something went wrong. Please complete onboarding.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="text-blue-400 hover:text-blue-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}