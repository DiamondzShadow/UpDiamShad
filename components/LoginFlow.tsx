"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft, 
  Mail, 
  Wallet, 
  ExternalLink, 
  Lock,
  Eye,
  EyeOff,
  Loader2
} from 'lucide-react';
import { useAuthWithNotifications } from '@/hooks/useAuthWithNotifications';

interface LoginFlowProps {
  onBack: () => void;
  onSuccess: () => void;
  onSwitchToSignup?: () => void;
  onClose?: () => void;
}

type LoginMethod = 'email' | 'wallet';
type FlowStep = 'method-select' | 'email-form' | 'wallet-connect';

export function LoginFlow({ onBack, onSuccess, onSwitchToSignup, onClose }: LoginFlowProps) {
  const [step, setStep] = useState<FlowStep>('method-select');
  const [selectedMethod, setSelectedMethod] = useState<LoginMethod | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, isLoading } = useAuthWithNotifications();
  
  // Form states
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleMethodSelect = (method: LoginMethod) => {
    setSelectedMethod(method);
    switch (method) {
      case 'email':
        setStep('email-form');
        break;
      case 'wallet':
        setStep('wallet-connect');
        break;
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await login({
      email: formData.email,
      password: formData.password
    });
    
    if (response.success) {
      onSuccess();
    }
  };

  const handleWalletLogin = async () => {
    // TODO: Implement actual wallet connection and backend authentication
    // For now, redirect user to account creation since wallet-only auth
    // would require backend integration to link wallet to existing account
    console.log('Wallet login - redirect to signup to link wallet');
    setStep('method-select'); // Go back to show email signup option
  };


  // Method Selection Screen
  if (step === 'method-select') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-medium text-white">Sign In</h3>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-xl"
              title="Close"
            >
              ×
            </button>
          )}
        </div>

        <p className="text-gray-400 text-sm">
          Choose your login method
        </p>

        <div className="space-y-3">
          <Button
            onClick={() => handleMethodSelect('email')}
            variant="outline"
            className="w-full justify-start border-gray-700 text-white hover:bg-gray-800 h-14"
          >
            <Mail className="h-5 w-5 mr-3 text-blue-400" />
            <div className="text-left">
              <div className="font-medium">Email & Password</div>
              <div className="text-xs text-gray-400">Sign in with your credentials</div>
            </div>
          </Button>

          <Button
            onClick={() => handleMethodSelect('wallet')}
            variant="outline"
            className="w-full justify-start border-gray-700 text-white hover:bg-gray-800 h-14"
          >
            <Wallet className="h-5 w-5 mr-3 text-purple-400" />
            <div className="text-left">
              <div className="font-medium">Connect Wallet</div>
              <div className="text-xs text-gray-400">Sign in with your wallet</div>
            </div>
          </Button>

        </div>

        {onSwitchToSignup && (
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToSignup}
                className="text-white hover:underline font-medium"
              >
                Sign up
              </button>
            </p>
          </div>
        )}
      </div>
    );
  }

  // Email Form
  if (step === 'email-form') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setStep('method-select')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h3 className="text-lg font-medium text-white">Sign In</h3>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-xl"
              title="Close"
            >
              ×
            </button>
          )}
        </div>

        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="loginEmail">Email Address</Label>
            <Input
              id="loginEmail"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loginPassword">Password</Label>
            <div className="relative">
              <Input
                id="loginPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Forgot password?
            </button>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Lock className="h-4 w-4 mr-2" />
            )}
            Sign In
          </Button>
        </form>
      </div>
    );
  }

  // Wallet Connect Screen
  if (step === 'wallet-connect') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setStep('method-select')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h3 className="text-lg font-medium text-white">Connect Wallet</h3>
        </div>

        <div className="text-center">
          <Wallet className="h-12 w-12 mx-auto mb-4 text-purple-400" />
          <p className="text-gray-400 mb-6">
            Wallet connections are managed after account creation
          </p>
          
          <Button onClick={handleWalletLogin} variant="outline" className="w-full border-gray-700 text-gray-300 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login Options
          </Button>
          
          <p className="text-xs text-gray-500 mt-4">
            Create an account first, then connect multiple wallets in your profile settings.
          </p>
        </div>
      </div>
    );
  }


  return null;
}