"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Youtube,
  Instagram,
  Twitter,
  Music,
  Plus,
  Trash2,
  TrendingUp,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Share,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Activity,
  Loader2,
  Zap,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useNotifications } from "@/hooks/useNotifications";
import {
  insightIQAPI,
  ConnectedAccount,
  InsightIQStatus,
  AccountMetrics,
} from "@/lib/insightiqAPI";

// Extend the Window interface to include PhylloConnect
declare global {
  interface Window {
    PhylloConnect?: {
      initialize: (config: PhylloConfig) => PhylloConnectInstance;
    };
  }
}

interface PhylloConfig {
  clientDisplayName: string;
  environment: "sandbox" | "staging" | "production";
  userId: string;
  token: string;
  singleAccount?: boolean;
  redirect?: boolean;
}

interface PhylloConnectInstance {
  on: (event: string, callback: (...args: any[]) => void) => void;
  open: () => void;
}

interface SocialMediaManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SocialMediaManager({
  isOpen,
  onClose,
}: SocialMediaManagerProps) {
  const { user } = useAuth();
  const { showSuccess, showError, showInfo } = useNotifications();

  const [status, setStatus] = useState<InsightIQStatus | null>(null);
  const [accounts, setAccounts] = useState<ConnectedAccount[]>([]);
  const [selectedAccount, setSelectedAccount] =
    useState<ConnectedAccount | null>(null);
  const [metrics, setMetrics] = useState<AccountMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [phylloConnect, setPhylloConnect] =
    useState<PhylloConnectInstance | null>(null);

  const platformIcons = {
    youtube: Youtube,
    instagram: Instagram,
    twitter: Twitter,
    tiktok: Music,
    twitch: Music,
  };

  const platformColors = {
    youtube: "text-red-500",
    instagram: "text-pink-500",
    twitter: "text-blue-500",
    tiktok: "text-black",
    twitch: "text-purple-500",
  };

  // Map Phyllo workplatformId to our platform names
  const phylloToPlatformMap: Record<string, keyof typeof platformIcons> = {
    instagram: "instagram",
    youtube: "youtube",
    tiktok: "tiktok",
    twitter: "twitter",
    twitch: "twitch",
    // Add more mappings as needed
  };

  // Convert Phyllo workplatformId to our platform name
  const mapPhylloPlatform = (
    workplatformId: string
  ): keyof typeof platformIcons => {
    return phylloToPlatformMap[workplatformId.toLowerCase()] || "instagram";
  };

  // Load Phyllo Connect SDK
  useEffect(() => {
    const loadPhylloSDK = () => {
      // Check if SDK is already loaded
      if (window.PhylloConnect) {
        setSdkLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdn.getphyllo.com/connect/v2/phyllo-connect.js";
      script.onload = () => {
        console.log("Phyllo Connect SDK loaded successfully");
        setSdkLoaded(true);
      };
      script.onerror = () => {
        console.error("Failed to load Phyllo Connect SDK");
        showError(
          "SDK Loading Error",
          "Failed to load the Connect SDK. Please refresh the page."
        );
      };
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    };

    loadPhylloSDK();
  }, []);

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [statusRes, accountsRes] = await Promise.all([
        insightIQAPI.getStatus(),
        insightIQAPI.getConnectedAccounts(),
      ]);

      if (statusRes.success && statusRes.data) {
        setStatus(statusRes.data);
      }

      if (accountsRes.success && accountsRes.data) {
        setAccounts(accountsRes.data.connectedAccounts);
      }
    } catch (error) {
      console.error("Failed to load data:", error);
      showError("Load Failed", "Unable to load social media data.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateUser = async () => {
    // Since InsightIQ integration is now created during signup,
    // this should not be needed. Show info to user.
    showInfo(
      "Integration Ready",
      "Your InsightIQ integration was automatically set up when you created your account."
    );
    loadData(); // Refresh data to show current status
  };

  const handleConnectPlatform = async () => {
    console.log(
      user?.insightIQ?.isConnected,
      user,
      insightIQAPI.createUser,
      "make we check"
    );
    if (!user?.insightIQ?.isConnected || !user.insightIQ.userId) {
      showError(
        "Setup Required",
        "InsightIQ integration is not available for your account."
      );
      return;
    }

    if (!sdkLoaded || !window.PhylloConnect) {
      showError("SDK Not Ready", "Please wait for the Connect SDK to load.");
      return;
    }

    setIsConnecting(true);

    try {
      console.log("Creating SDK token for user:", user.insightIQ.userId);

      // Get or generate SDK token
      const tokenResponse = await insightIQAPI.generateSDKToken([
        "IDENTITY",
        "ENGAGEMENT",
      ]);

      if (!tokenResponse.success || !tokenResponse.data) {
        showError(
          "Connection Failed",
          tokenResponse.message || "Failed to get connection token."
        );
        setIsConnecting(false);
        return;
      }

      const { sdk_token, user_id } = tokenResponse.data;

      if (!sdk_token || !user_id) {
        showError(
          "Invalid Token",
          "Failed to get valid connection credentials."
        );
        setIsConnecting(false);
        return;
      }

      // Configure Phyllo Connect SDK
      const config: PhylloConfig = {
        clientDisplayName: "Diamondz Chain",
        environment: "staging", // Change to "production" when ready
        userId: user_id,
        token: sdk_token,
        singleAccount: false,
        redirect: false,
      };

      console.log("Initializing Phyllo Connect with config:", {
        ...config,
        token: "***",
      });

      // Initialize Phyllo Connect
      const connectSDK = window.PhylloConnect.initialize(config);
      setPhylloConnect(connectSDK);

      // Set up event handlers
      connectSDK.on(
        "accountConnected",
        async (accountId: string, workplatformId: string, userId: string) => {
          console.log("Account connected:", {
            accountId,
            workplatformId,
            userId,
          });

          showSuccess(
            "Platform Connected!",
            "Account connected successfully. Refreshing data..."
          );

          // Force refresh accounts data from InsightIQ API
          setTimeout(async () => {
            await loadData();
            setIsConnecting(false);
          }, 2000); // Give InsightIQ API time to process the new connection
        }
      );

      connectSDK.on(
        "accountDisconnected",
        (accountId: string, workplatformId: string, userId: string) => {
          console.log("Account disconnected:", {
            accountId,
            workplatformId,
            userId,
          });
          showInfo("Platform Disconnected", "Account has been disconnected.");
          loadData(); // Refresh data
        }
      );

      connectSDK.on("tokenExpired", (userId: string) => {
        console.log("Token expired for user:", userId);
        showError(
          "Session Expired",
          "Your session has expired. Please try connecting again."
        );
        setIsConnecting(false);
      });

      connectSDK.on("exit", (reason: string, userId: string) => {
        console.log("SDK exited:", { reason, userId });
        setIsConnecting(false);
      });

      connectSDK.on(
        "connectionFailure",
        (reason: string, workplatformId: string, userId: string) => {
          console.log("Connection failed:", { reason, workplatformId, userId });
          showError(
            "Connection Failed",
            `Failed to connect platform: ${reason}`
          );
          setIsConnecting(false);
        }
      );

      // Open the Connect SDK
      showInfo(
        "Opening Connect",
        "Please select and authorize your social media accounts."
      );
      connectSDK.open();

      // Set a timeout to reset loading state if nothing happens
      setTimeout(() => {
        if (isConnecting) {
          setIsConnecting(false);
        }
      }, 30000);
    } catch (error) {
      console.error("Connect SDK error:", error);
      showError(
        "Connection Error",
        "Failed to initialize platform connection. Please try again."
      );
      setIsConnecting(false);
    }
  };

  const handleViewMetrics = async (account: ConnectedAccount) => {
    setSelectedAccount(account);
    setIsLoading(true);

    try {
      const response = await insightIQAPI.getAccountMetrics(account.accountId);
      if (response.success && response.data) {
        setMetrics(response.data);
      } else {
        showError("Metrics Failed", response.message);
        setSelectedAccount(null);
      }
    } catch (error) {
      showError("Metrics Failed", "Unable to load account metrics.");
      setSelectedAccount(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisconnectAccount = async (account: ConnectedAccount) => {
    const confirmed = window.confirm(
      `Are you sure you want to disconnect your ${account.platform} account (@${account.username})?`
    );

    if (!confirmed) return;

    try {
      // Try to disconnect via API first (which should handle Phyllo disconnection)
      const response = await insightIQAPI.disconnectAccount(account.accountId);
      if (response.success) {
        showSuccess(
          "Account Disconnected",
          `${account.platform} account has been disconnected.`
        );
        loadData(); // Refresh data
      } else {
        showError("Disconnect Failed", response.message);
      }
    } catch (error) {
      console.error("Disconnect error:", error);
      showError("Disconnect Failed", "Unable to disconnect account.");
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  // Metrics View
  if (selectedAccount && metrics) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-black border-gray-800 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Analytics - @{selectedAccount.username}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
              {React.createElement(platformIcons[selectedAccount.platform], {
                className: `h-8 w-8 ${
                  platformColors[selectedAccount.platform]
                }`,
              })}
              <div>
                <h3 className="font-medium">
                  {selectedAccount.displayName || selectedAccount.username}
                </h3>
                <p className="text-sm text-gray-400">
                  @{selectedAccount.username} • {selectedAccount.platform}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <Users className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl font-bold">
                  {formatNumber(metrics.metrics.followers)}
                </div>
                <div className="text-xs text-gray-400">Followers</div>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <Eye className="h-6 w-6 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold">
                  {formatNumber(metrics.metrics.total_views)}
                </div>
                <div className="text-xs text-gray-400">Views</div>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <Heart className="h-6 w-6 mx-auto mb-2 text-red-400" />
                <div className="text-2xl font-bold">
                  {formatNumber(metrics.metrics.total_likes)}
                </div>
                <div className="text-xs text-gray-400">Likes</div>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <TrendingUp className="h-6 w-6 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold">
                  {(metrics.metrics.engagement_rate * 100).toFixed(1)}%
                </div>
                <div className="text-xs text-gray-400">Engagement</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-900 p-3 rounded-lg text-center">
                <MessageCircle className="h-5 w-5 mx-auto mb-1 text-yellow-400" />
                <div className="text-lg font-semibold">
                  {formatNumber(metrics.metrics.total_comments)}
                </div>
                <div className="text-xs text-gray-400">Comments</div>
              </div>

              <div className="bg-gray-900 p-3 rounded-lg text-center">
                <Share className="h-5 w-5 mx-auto mb-1 text-indigo-400" />
                <div className="text-lg font-semibold">
                  {formatNumber(metrics.metrics.total_shares)}
                </div>
                <div className="text-xs text-gray-400">Shares</div>
              </div>

              <div className="bg-gray-900 p-3 rounded-lg text-center">
                <ExternalLink className="h-5 w-5 mx-auto mb-1 text-gray-400" />
                <div className="text-lg font-semibold">
                  {formatNumber(metrics.metrics.total_posts)}
                </div>
                <div className="text-xs text-gray-400">Posts</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => setSelectedAccount(null)}
                variant="outline"
                className="flex-1 border-gray-700 text-white hover:bg-gray-800"
              >
                Back to Accounts
              </Button>
              <Button
                onClick={() => handleViewMetrics(selectedAccount)}
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Data period: {metrics.period} • Updated:{" "}
              {new Date(metrics.updated_at).toLocaleDateString()}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Main View
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-gray-800 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Social Media Analytics
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Setup Section */}
          {!user?.insightIQ?.isConnected ? (
            <div className="text-center py-8 border border-gray-800 rounded-lg bg-gray-900/50">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-medium text-white mb-2">
                Set Up Social Media Analytics
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Connect your social media accounts to track analytics and boost
                your Spark score.
              </p>
              <Button onClick={handleCreateUser} disabled={isLoading}>
                {isLoading ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Plus className="h-4 w-4 mr-2" />
                )}
                Set Up Analytics
              </Button>
            </div>
          ) : (
            <>
              {/* Status Section */}
              <div className="flex items-center gap-3 p-3 bg-green-900/20 border border-green-700 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-sm text-white">Analytics Ready</p>
                  <p className="text-xs text-gray-400">
                    {accounts.length} account{accounts.length !== 1 ? "s" : ""}{" "}
                    connected
                  </p>
                </div>
              </div>

              {/* SDK Loading Status */}
              {!sdkLoaded && (
                <div className="flex items-center gap-3 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <Loader2 className="h-5 w-5 text-blue-400 animate-spin" />
                  <div>
                    <p className="text-sm text-white">Loading Connect SDK...</p>
                    <p className="text-xs text-gray-400">
                      Please wait while we prepare the connection interface
                    </p>
                  </div>
                </div>
              )}

              {/* Supported Platforms Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <p className="text-sm text-gray-400">
                    Secure platform connections:
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge
                    variant="secondary"
                    className="bg-gray-800 text-gray-300 border-gray-700"
                  >
                    Instagram
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-800 text-gray-300 border-gray-700"
                  >
                    YouTube
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-800 text-gray-300 border-gray-700"
                  >
                    TikTok
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-800 text-gray-300 border-gray-700"
                  >
                    Twitter
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-gray-800 text-gray-300 border-gray-700"
                  >
                    Twitch
                  </Badge>
                </div>
              </div>

              {/* Connected Accounts */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">
                    Connected Accounts
                  </h3>
                  <Button
                    onClick={handleConnectPlatform}
                    size="sm"
                    disabled={isConnecting || !sdkLoaded}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    {isConnecting ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : !sdkLoaded ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Plus className="h-4 w-4 mr-2" />
                    )}
                    {isConnecting
                      ? "Connecting..."
                      : !sdkLoaded
                      ? "Loading..."
                      : "Connect Account"}
                  </Button>
                </div>

                {accounts.length === 0 ? (
                  <div className="text-center py-8 border border-gray-800 rounded-lg bg-gray-900/50">
                    {!sdkLoaded ? (
                      <>
                        <Loader2 className="h-8 w-8 mx-auto mb-3 text-blue-400 animate-spin" />
                        <p className="text-gray-400 mb-3">
                          Preparing secure connection...
                        </p>
                        <p className="text-xs text-gray-500">
                          Loading Phyllo Connect SDK...
                        </p>
                      </>
                    ) : (
                      <>
                        <Zap className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                        <p className="text-gray-400 mb-2">
                          Connect your social media accounts
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          Track analytics and earn Sparks for your activity
                        </p>
                        <div className="flex items-center justify-center gap-1 mb-4">
                          <Shield className="h-3 w-3 text-green-400" />
                          <p className="text-xs text-green-400">
                            Secure • No passwords stored
                          </p>
                        </div>
                      </>
                    )}
                    <Button
                      onClick={handleConnectPlatform}
                      size="sm"
                      disabled={isConnecting || !sdkLoaded}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      {isConnecting ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : !sdkLoaded ? (
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Plus className="h-4 w-4 mr-2" />
                      )}
                      {isConnecting
                        ? "Connecting..."
                        : !sdkLoaded
                        ? "Loading SDK..."
                        : "Connect Your First Account"}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {accounts.map((account) => {
                      const Icon = platformIcons[account.platform];
                      return (
                        <div
                          key={account.accountId}
                          className="flex items-center justify-between p-3 border border-gray-800 rounded-lg bg-gray-900/50"
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              className={`h-6 w-6 ${
                                platformColors[account.platform]
                              }`}
                            />
                            <div>
                              <p className="font-medium text-white">
                                @{account.username}
                              </p>
                              <p className="text-sm text-gray-400">
                                {account.followerCount
                                  ? `${formatNumber(
                                      account.followerCount
                                    )} followers`
                                  : account.platform}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => handleViewMetrics(account)}
                              size="sm"
                              variant="outline"
                              className="border-gray-700 text-white hover:bg-gray-800"
                            >
                              <TrendingUp className="h-4 w-4" />
                            </Button>
                            <Button
                              onClick={() => handleDisconnectAccount(account)}
                              size="sm"
                              variant="outline"
                              className="border-gray-700 text-red-400 hover:bg-red-900/20"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          )}

          {isLoading && (
            <div className="flex items-center justify-center py-4">
              <RefreshCw className="h-5 w-5 animate-spin mr-2" />
              <span className="text-gray-400">Loading...</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SocialMediaManager;
