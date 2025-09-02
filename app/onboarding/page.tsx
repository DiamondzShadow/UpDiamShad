"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import OnboardingFlow from '@/components/OnboardingFlow';

export default function OnboardingPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not authenticated, redirect to home
    if (!isLoading && !isAuthenticated) {
      router.push('/');
      return;
    }

    // If user is authenticated and already onboarded, redirect to dashboard
    if (!isLoading && isAuthenticated && user?.wavzProfile?.isOnboarded) {
      router.push('/dashboard');
      return;
    }
  }, [user, isAuthenticated, isLoading, router]);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Show onboarding if user is authenticated but not onboarded
  if (isAuthenticated && user && !user.wavzProfile?.isOnboarded) {
    return (
      <div className="min-h-screen bg-black">
        <OnboardingFlow />
      </div>
    );
  }

  // Fallback (should not reach here due to useEffect redirects)
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white">Redirecting...</div>
    </div>
  );
}