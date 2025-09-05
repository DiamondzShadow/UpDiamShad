"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Mail,
  Wallet,
  ExternalLink,
  User,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { useAuthWithNotifications } from "@/hooks/useAuthWithNotifications";

interface SignupFlowProps {
  onBack: () => void;
  onSuccess: () => void;
  onSwitchToLogin?: () => void;
}

type SignupMethod = "manual" | "wallet";
type FlowStep =
  | "method-select"
  | "manual-form"
  | "wallet-connect"
  | "insightiq-connect"
  | "link-additional";

export function SignupFlow({ onBack, onSuccess, onSwitchToLogin }: SignupFlowProps) {
  const [step, setStep] = useState<FlowStep>("method-select");
  const [selectedMethod, setSelectedMethod] = useState<SignupMethod | null>(
    null
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { signup, isLoading } = useAuthWithNotifications();

  // Form states
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const handleMethodSelect = (method: SignupMethod) => {
    setSelectedMethod(method);
    switch (method) {
      case "manual":
        setStep("manual-form");
        break;
      case "wallet":
        setStep("wallet-connect");
        break;
      // case 'insightiq':
      //   setStep('insightiq-connect');
      //   break;
    }
  };

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // This will be handled by notifications
      return;
    }

    const response = await signup({
      email: formData.email,
      displayName: formData.username,
      password: formData.password,
    });

    if (response.success) {
      setStep("link-additional");
    }
  };

  const handleWalletSignup = () => {
    // Implement wallet-based signup
    console.log("Wallet signup");
    setStep("link-additional");
  };

  // Method Selection Screen
  if (step === "method-select") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h3 className="text-lg font-medium text-white">Create Account</h3>
        </div>

        <p className="text-gray-400 text-sm">
          Choose your preferred signup method
        </p>

        <div className="space-y-3">
          <Button
            onClick={() => handleMethodSelect("manual")}
            variant="outline"
            className="w-full justify-start border-gray-700 text-white hover:bg-gray-800 h-14"
          >
            <Mail className="h-5 w-5 mr-3 text-blue-400" />
            <div className="text-left">
              <div className="font-medium">Email & Password</div>
              <div className="text-xs text-gray-400">
                Create account manually
              </div>
            </div>
          </Button>

          <Button
            onClick={() => handleMethodSelect("wallet")}
            variant="outline"
            className="w-full justify-start border-gray-700 text-white hover:bg-gray-800 h-14"
          >
            <Wallet className="h-5 w-5 mr-3 text-purple-400" />
            <div className="text-left">
              <div className="font-medium">Connect Wallet</div>
              <div className="text-xs text-gray-400">
                Sign up with your wallet
              </div>
            </div>
          </Button>

          {/* <Button
            onClick={() => handleMethodSelect('insightiq')}
            variant="outline"
            className="w-full justify-start border-gray-700 text-white hover:bg-gray-800 h-14"
          >
            <ExternalLink className="h-5 w-5 mr-3 text-green-400" />
            <div className="text-left">
              <div className="font-medium">InsightIQ Account</div>
              <div className="text-xs text-gray-400">Sign up with InsightIQ</div>
            </div>
          </Button> */}
        </div>

        {onSwitchToLogin && (
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-white hover:underline font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        )}
      </div>
    );
  }

  // Manual Form
  if (step === "manual-form") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setStep("method-select")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h3 className="text-lg font-medium text-white">Account Details</h3>
        </div>

        <form onSubmit={handleManualSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                }
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="johndoe"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
              className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <User className="h-4 w-4 mr-2" />
            )}
            Create Account
          </Button>
        </form>
      </div>
    );
  }

  // Wallet Connect Screen
  if (step === "wallet-connect") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setStep("method-select")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h3 className="text-lg font-medium text-white">Connect Wallet</h3>
        </div>

        <div className="text-center">
          <Wallet className="h-12 w-12 mx-auto mb-4 text-purple-400" />
          <p className="text-gray-400 mb-6">
            Connect your wallet to create your Diamondz account
          </p>

          <Button onClick={handleWalletSignup} className="w-full">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </div>
    );
  }

  // InsightIQ Connect Screen
  if (step === "insightiq-connect") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setStep("method-select")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h3 className="text-lg font-medium text-white">Connect InsightIQ</h3>
        </div>

        <div className="text-center">
          <ExternalLink className="h-12 w-12 mx-auto mb-4 text-green-400" />
          <p className="text-gray-400 mb-6">
            Connect your InsightIQ account to get started
          </p>

          {/* <Button onClick={handleInsightIQSignup} className="w-full">
            <ExternalLink className="h-4 w-4 mr-2" />
            Connect InsightIQ
          </Button> */}
        </div>
      </div>
    );
  }

  // Link Additional Services
  if (step === "link-additional") {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-400" />
          <h3 className="text-lg font-medium text-white mb-2">
            Account Created!
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Would you like to connect additional services to your account?
          </p>
        </div>

        <div className="space-y-3">
          {selectedMethod !== "wallet" && (
            <Button
              variant="outline"
              className="w-full border-gray-700 text-white hover:bg-gray-800"
            >
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          )}

          {/* {selectedMethod !== 'insightiq' && (
            <Button
              variant="outline"
              className="w-full border-gray-700 text-white hover:bg-gray-800"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Connect InsightIQ
            </Button>
          )} */}

          <Button onClick={onSuccess} className="w-full">
            Continue to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
