"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthWithNotifications } from "@/hooks/useAuthWithNotifications";
import { LoginCredentials, SignupCredentials } from "@/lib/auth";
import SocialMediaManager from "./SocialMediaManager";
import { WalletManager } from "./WalletManager";
import {
  User,
  Mail,
  Lock,
  Wallet,
  ExternalLink,
  Settings,
  LogOut,
  Eye,
  EyeOff,
  Loader2,
  Activity,
  Youtube,
  Instagram,
  Twitter,
  Music,
  BarChart3,
} from "lucide-react";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccountModal({ isOpen, onClose }: AccountModalProps) {
  const router = useRouter();
  const {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    setIsWalletManagerOpen,
  } = useAuthWithNotifications();
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSocialMediaModalOpen, setIsSocialMediaModalOpen] = useState(false);

  // Form states
  const [loginForm, setLoginForm] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState<
    SignupCredentials & { confirmPassword: string }
  >({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login(loginForm);
    if (response.success) {
      onClose();
      setLoginForm({ email: "", password: "" });
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (signupForm.password !== signupForm.confirmPassword) {
      // This will be handled by notifications
      return;
    }

    const { confirmPassword, ...credentials } = signupForm;
    const response = await signup(credentials);
    if (response.success) {
      onClose();
      setSignupForm({
        email: "",
        displayName: "",
        password: "",
        confirmPassword: "",
      });

      // Navigate to onboarding/role selection instead of closing modal
      router.push("/onboarding");
    }
  };

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  // Authenticated user profile view
  if (isAuthenticated && user) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-black border-gray-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Profile
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Profile Section */}
            <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">{user.displayName}</h3>
                  <p className="text-sm text-gray-400">@{user.username}</p>
                  {user.wavzProfile?.role && (
                    <div className="flex items-center gap-1 mt-1">
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.wavzProfile.role === "creator"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {user.wavzProfile.role === "creator"
                          ? "🎨 Creator"
                          : "💎 Fan"}
                      </div>
                    </div>
                  )}
                </div>
                {user.wavzProfile && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-yellow-400">
                      ⚡ {user.wavzProfile.sparks || 0} Sparks
                    </div>
                    <div className="text-xs text-gray-400">
                      Level {user.wavzProfile.level || 1}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                {user.abstractWallet?.address && (
                  <div className="flex items-center gap-2 text-gray-300">
                    <Wallet className="h-4 w-4" />
                    <span className="font-mono text-xs">
                      {user.abstractWallet.address.slice(0, 6)}...
                      {user.abstractWallet.address.slice(-4)}
                    </span>
                  </div>
                )}
              </div>

              {/* Wavz Profile Progress */}
              {user.wavzProfile && user.wavzProfile.levelProgress > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-800">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>Level Progress</span>
                    <span>{user.wavzProfile.levelProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${user.wavzProfile.levelProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Connected Services */}
            <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white">Connected Services</h4>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsSocialMediaModalOpen(true)}
                  className="border-gray-700 text-gray-300 hover:text-white"
                >
                  <Activity className="h-3 w-3 mr-1" />
                  Manage
                </Button>
              </div>
              <div className="space-y-3">
                {/* Social Media Analytics */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Social Media Analytics</span>
                  </div>
                  <span
                    className="text-xs text-blue-400 cursor-pointer"
                    onClick={() => setIsSocialMediaModalOpen(true)}
                  >
                    {user.insightIQ?.connectedAccounts?.length || 0} connected
                  </span>
                </div>

                {/* Show connected platforms */}
                {user.insightIQ?.connectedAccounts &&
                  user.insightIQ.connectedAccounts.length > 0 && (
                    <div className="flex items-center gap-2 ml-6">
                      {user.insightIQ.connectedAccounts.map(
                        (account, index) => {
                          const platformIcons = {
                            youtube: Youtube,
                            instagram: Instagram,
                            twitter: Twitter,
                            tiktok: Music,
                          };
                          const Icon = platformIcons[account.platform];
                          const colors = {
                            youtube: "text-red-500",
                            instagram: "text-pink-500",
                            twitter: "text-blue-500",
                            tiktok: "text-black",
                          };
                          return (
                            <Icon
                              key={index}
                              className={`h-3 w-3 ${colors[account.platform]}`}
                              // title={`@${account.username}`}
                            />
                          );
                        }
                      )}
                    </div>
                  )}

                {/* Wallet Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-purple-400" />
                    <span className="text-sm">Crypto Wallets</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsWalletManagerOpen(true)}
                    className="text-xs px-2 py-1 h-6 border-gray-600 text-gray-300 hover:text-white"
                  >
                    {user.abstractWallet?.address ? "1 connected" : "Connect"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                onClick={() => {
                  onClose();
                  router.push("/dashboard");
                }}
              >
                <BarChart3 className="h-5 w-5 mr-2" />
                Open Dashboard
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-700 text-gray-300 hover:text-white"
                onClick={handleLogout}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <LogOut className="h-4 w-4 mr-2" />
                )}
                Sign Out
              </Button>
            </div>
          </div>
        </DialogContent>

        {/* Social Media Manager Modal */}
        <SocialMediaManager
          isOpen={isSocialMediaModalOpen}
          onClose={() => setIsSocialMediaModalOpen(false)}
        />

        {/* Wallet Manager Modal */}
        <WalletManager />
      </Dialog>
    );
  }

  // Unauthenticated login/signup view
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-gray-800 text-white max-w-md">
        <DialogHeader>
          <DialogTitle>Account Access</DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900 border border-gray-800">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password"
                    value={loginForm.password}
                    onChange={(e) =>
                      setLoginForm((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
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

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Lock className="h-4 w-4 mr-2" />
                )}
                Sign In
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-gray-400">Or</span>
              </div>
            </div>
          </TabsContent>

          {/* Signup Tab */}
          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="your@email.com"
                  value={signupForm.email}
                  onChange={(e) =>
                    setSignupForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-displayName">Display Name</Label>
                <Input
                  id="signup-displayName"
                  type="text"
                  placeholder="Your display name"
                  value={signupForm.displayName}
                  onChange={(e) =>
                    setSignupForm((prev) => ({
                      ...prev,
                      displayName: e.target.value,
                    }))
                  }
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={signupForm.password}
                    onChange={(e) =>
                      setSignupForm((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
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
                <Label htmlFor="signup-confirm-password">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="signup-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={signupForm.confirmPassword}
                    onChange={(e) =>
                      setSignupForm((prev) => ({
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

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-gray-400">Or</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default AccountModal;
