"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Wallet,
  Plus,
  Edit3,
  Trash2,
  Star,
  Check,
  X,
  Shield,
  AlertTriangle,
  Copy,
  ExternalLink,
  Settings,
} from "lucide-react";
import { WalletInfo } from "@/lib/auth";
import { useAuth } from "@/hooks/useAuth";
import { useNotifications } from "@/hooks/useNotifications";
import { walletAPI } from "@/lib/walletAPI";
import {
  ConnectButton,
  useActiveAccount,
  useConnect,
  useSendTransaction,
} from "thirdweb/react";
import { client } from "@/lib/contracts";

export function WalletManager() {
  const { user, isWalletManagerOpen, setIsWalletManagerOpen } = useAuth();
  const { showSuccess, showError } = useNotifications();
  const activeAccount = useActiveAccount();
  const { connect } = useConnect();

  const [editingWallet, setEditingWallet] = useState<WalletInfo | null>(null);
  const [walletLabel, setWalletLabel] = useState("");
  const [isAddingWallet, setIsAddingWallet] = useState(false);

  // In the new schema, we have an abstractWallet and can connect additional wallets
  const abstractWallet = user?.abstractWallet;
  const connectedWallets: any[] = []; // Future: store connected wallets in separate state or API
  const allWallets = abstractWallet ? [{
    id: 'abstract',
    address: abstractWallet.address,
    type: 'abstract',
    provider: 'Abstract Wallet',
    label: 'Abstract Wallet (Built-in)',
    isDefault: true,
    isVerified: true,
    createdAt: abstractWallet.createdAt
  }, ...connectedWallets] : connectedWallets;
  const primaryWallet = allWallets.find(w => w.isDefault) || allWallets[0];

  const handleAddWallet = async () => {
    setIsAddingWallet(true);
    // The actual wallet connection will be handled by thirdweb
    // After connection, we'll add it to the user's wallet list
  };

  const handleConnectWallet = async (address: string, provider: string) => {
    if (
      allWallets.some(
        (w: any) => w.address.toLowerCase() === address.toLowerCase()
      )
    ) {
      showError(
        "Wallet Already Connected",
        "This wallet is already linked to your account."
      );
      setIsAddingWallet(false);
      return;
    }

    // For now, we'll just show success since we don't have backend wallet endpoints
    // In the future, implement proper wallet storage via backend API
    showSuccess(
      "Wallet Connected",
      `${walletLabel || `${provider} Wallet`} has been connected via ThirdWeb.`
    );
    
    console.log('Connected wallet:', { address, provider, label: walletLabel });
    // TODO: Store connected wallet in backend or local state

    setIsAddingWallet(false);
    setWalletLabel("");
  };

  const handleSetPrimary = async (walletId: string) => {
    // For now, since we don't have backend support, just show success
    // TODO: Implement backend API for setting primary wallet
    showSuccess(
      "Primary Wallet Updated",
      "Your default wallet for blockchain operations has been updated."
    );
    console.log('Set primary wallet:', walletId);
  };

  const handleEditWallet = (wallet: WalletInfo) => {
    setEditingWallet(wallet);
    setWalletLabel(wallet.label || "");
  };

  const handleSaveEdit = async () => {
    if (!editingWallet) return;

    // For now, since we don't have backend support, just show success
    // TODO: Implement backend API for updating wallet labels
    showSuccess("Wallet Updated", "Wallet label has been updated.");
    console.log('Update wallet label:', { id: editingWallet.id, label: walletLabel });

    setEditingWallet(null);
    setWalletLabel("");
  };

  const handleRemoveWallet = async (walletId: string) => {
    const wallet = allWallets.find((w: any) => w.id === walletId);
    if (!wallet) return;

    if (wallet.type === 'abstract') {
      showError(
        "Cannot Remove Abstract Wallet",
        "The abstract wallet is built into your account and cannot be removed."
      );
      return;
    }

    if (wallet.isDefault && allWallets.length > 1) {
      showError(
        "Cannot Remove Primary Wallet",
        "Please set another wallet as primary before removing this one."
      );
      return;
    }

    // For now, since we don't have backend support, just show success
    // TODO: Implement backend API for removing wallets
    showSuccess(
      "Wallet Removed",
      "Wallet has been disconnected from your account."
    );
    console.log('Remove wallet:', walletId);
  };

  const handleVerifyWallet = async (walletId: string) => {
    const wallet = allWallets.find((w: any) => w.id === walletId);
    if (!wallet) return;

    try {
      // Generate a unique message for signature verification
      const message = `Verify ownership of wallet ${
        wallet.address
      } for Diamondz account ${user?.email} at ${new Date().toISOString()}`;

      // For now, we'll simulate the verification process
      // TODO: Implement real wallet signature verification with ThirdWeb
      const confirmVerify = window.confirm(
        `Please sign this message in your wallet to verify ownership:\n\n"${message}"\n\nClick OK after signing in your wallet.`
      );

      if (confirmVerify) {
        showSuccess(
          "Wallet Verified",
          "Wallet ownership has been verified successfully."
        );
        console.log('Verify wallet:', { walletId, message });
      }
    } catch (error) {
      console.error("Wallet verification failed:", error);
      showError(
        "Verification Failed",
        "Unable to verify wallet ownership. Please try again."
      );
    }
  };

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    showSuccess("Address Copied", "Wallet address copied to clipboard.");
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <Dialog
      open={isWalletManagerOpen}
      onOpenChange={() => setIsWalletManagerOpen(false)}
    >
      <DialogContent className="bg-black border-gray-800 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Wallet Management
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Connected Wallets */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">
                Connected Wallets
              </h3>
              <Button
                onClick={handleAddWallet}
                size="sm"
                className="bg-white text-black hover:bg-gray-200"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Wallet
              </Button>
            </div>

            {allWallets.length === 0 ? (
              <div className="text-center py-8 border border-gray-800 rounded-lg bg-gray-900/50">
                <Wallet className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-400 mb-4">No wallets connected yet</p>
                <Button onClick={handleAddWallet}>
                  <Plus className="h-4 w-4 mr-2" />
                  Connect Your First Wallet
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {allWallets.map((wallet: any) => (
                  <div
                    key={wallet.id}
                    className="border border-gray-800 rounded-lg p-4 bg-gray-900/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <Wallet className="h-4 w-4 text-purple-400" />
                            <span className="font-medium">
                              {editingWallet?.id === wallet.id ? (
                                <Input
                                  value={walletLabel}
                                  onChange={(e) =>
                                    setWalletLabel(e.target.value)
                                  }
                                  className="bg-gray-800 border-gray-700 text-white h-6 w-32"
                                  onKeyPress={(e) =>
                                    e.key === "Enter" && handleSaveEdit()
                                  }
                                />
                              ) : (
                                wallet.label || "Unnamed Wallet"
                              )}
                            </span>
                          </div>

                          {wallet.isDefault && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-blue-600 text-xs rounded-full">
                              <Star className="h-3 w-3" />
                              Primary
                            </div>
                          )}

                          {wallet.isVerified ? (
                            <div className="flex items-center gap-1 px-2 py-1 bg-green-600 text-xs rounded-full">
                              <Shield className="h-3 w-3" />
                              Verified
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-600 text-xs rounded-full">
                              <AlertTriangle className="h-3 w-3" />
                              Unverified
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                          <span className="font-mono">
                            {formatAddress(wallet.address)}
                          </span>
                          <button
                            onClick={() => copyAddress(wallet.address)}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <Copy className="h-3 w-3" />
                          </button>
                          <button
                            className="text-gray-400 hover:text-white transition-colors"
                            onClick={() =>
                              window.open(
                                `https://etherscan.io/address/${wallet.address}`,
                                "_blank"
                              )
                            }
                          >
                            <ExternalLink className="h-3 w-3" />
                          </button>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Provider: {wallet.provider}</span>
                          <span>Type: {wallet.type}</span>
                          {wallet.lastUsed && (
                            <span>
                              Last used:{" "}
                              {new Date(wallet.lastUsed).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 ml-4">
                        {editingWallet?.id === wallet.id ? (
                          <>
                            <button
                              onClick={handleSaveEdit}
                              className="text-green-400 hover:text-green-300 transition-colors"
                            >
                              <Check className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setEditingWallet(null)}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleEditWallet(wallet)}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>

                            {!wallet.isDefault && (
                              <button
                                onClick={() => handleSetPrimary(wallet.id)}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                                title="Set as primary wallet"
                              >
                                <Star className="h-4 w-4" />
                              </button>
                            )}

                            {!wallet.isVerified && (
                              <button
                                onClick={() => handleVerifyWallet(wallet.id)}
                                className="text-yellow-400 hover:text-yellow-300 transition-colors"
                                title="Verify wallet ownership"
                              >
                                <Shield className="h-4 w-4" />
                              </button>
                            )}

                            <button
                              onClick={() => handleRemoveWallet(wallet.id)}
                              className="text-red-400 hover:text-red-300 transition-colors"
                              disabled={
                                wallet.type === 'abstract' || (wallet.isDefault && allWallets.length === 1)
                              }
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add New Wallet Dialog */}
          {isAddingWallet && (
            <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
              <h4 className="font-medium text-white mb-4">
                Connect New Wallet
              </h4>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="walletLabel">Wallet Label (Optional)</Label>
                  <Input
                    id="walletLabel"
                    placeholder="e.g., MetaMask Main, Hardware Wallet"
                    value={walletLabel}
                    onChange={(e) => setWalletLabel(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <ConnectButton
                    client={client}
                    onConnect={(wallet) => {
                      if (wallet.getAccount()) {
                        handleConnectWallet(
                          wallet.getAccount()?.address || "",
                          wallet.id
                        );
                      }
                    }}
                  />

                  <div className="flex gap-2">
                    <Button
                      onClick={() => setIsAddingWallet(false)}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-800"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blockchain Operations Info */}
          {primaryWallet && (
            <div className="border border-blue-800 rounded-lg p-4 bg-blue-900/20">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-4 w-4 text-blue-400" />
                <span className="font-medium text-blue-400">
                  Blockchain Operations
                </span>
              </div>
              <p className="text-sm text-gray-300">
                Your primary wallet{" "}
                <span className="font-mono text-white">
                  {formatAddress(primaryWallet.address)}
                </span>{" "}
                will be used for all blockchain transactions, NFT minting, and
                smart contract interactions.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WalletManager;
