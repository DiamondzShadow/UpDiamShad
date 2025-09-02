"use client";

import { useEffect } from 'react';
import { useAuthCallback } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

export default function AuthCallbackPage() {
  useAuthCallback();

  useEffect(() => {
    // Handle any additional callback logic here
    const timer = setTimeout(() => {
      // Fallback redirect if auto-redirect doesn't work
      window.location.href = '/';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-white" />
        <h2 className="text-xl font-semibold text-white">Completing authentication...</h2>
        <p className="text-gray-400">Please wait while we redirect you.</p>
      </div>
    </div>
  );
}