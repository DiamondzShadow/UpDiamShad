"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  Wallet, 
  Check, 
  Star, 
  Shield, 
  AlertTriangle,
  ChevronDown,
  Zap
} from 'lucide-react';
import { WalletInfo } from '@/lib/auth';
import { useAuth } from '@/hooks/useAuth';
import { useNotifications } from '@/hooks/useNotifications';

interface WalletSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWallet: (wallet: WalletInfo) => void;
  title?: string;
  description?: string;
  showOnlyVerified?: boolean;
}

export function WalletSelector({ 
  isOpen, 
  onClose, 
  onSelectWallet,
  title = "Select Wallet for Transaction",
  description = "Choose which wallet you'd like to use for this blockchain operation.",
  showOnlyVerified = false
}: WalletSelectorProps) {
  const { user } = useAuth();
  const { showWarning } = useNotifications();

  const wallets = user?.wallets || [];
  const filteredWallets = showOnlyVerified 
    ? wallets.filter(w => w.isVerified) 
    : wallets;

  const handleSelectWallet = (wallet: WalletInfo) => {
    if (showOnlyVerified && !wallet.isVerified) {
      showWarning(
        'Unverified Wallet',
        'This wallet needs to be verified before it can be used for blockchain operations.'
      );
      return;
    }

    onSelectWallet(wallet);
    onClose();
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getWalletTypeIcon = (type: string) => {
    switch (type) {
      case 'connected':
        return <Wallet className="h-4 w-4 text-blue-400" />;
      case 'abstract':
        return <Zap className="h-4 w-4 text-purple-400" />;
      case 'external':
        return <Wallet className="h-4 w-4 text-green-400" />;
      default:
        return <Wallet className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-gray-800 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-gray-400 text-sm">
            {description}
          </p>

          {filteredWallets.length === 0 ? (
            <div className="text-center py-8 border border-gray-800 rounded-lg bg-gray-900/50">
              <Wallet className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400 mb-2">
                {showOnlyVerified ? 'No verified wallets available' : 'No wallets connected'}
              </p>
              <p className="text-gray-500 text-sm">
                {showOnlyVerified 
                  ? 'Please verify a wallet to use for blockchain operations.'
                  : 'Connect a wallet to get started with blockchain operations.'
                }
              </p>
            </div>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {filteredWallets.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => handleSelectWallet(wallet)}
                  className="w-full p-3 border border-gray-800 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getWalletTypeIcon(wallet.type)}
                      <span className="font-medium text-white">
                        {wallet.label || 'Unnamed Wallet'}
                      </span>
                      
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
                    
                    <ChevronDown className="h-4 w-4 text-gray-400 rotate-270" />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono text-gray-300">
                      {formatAddress(wallet.address)}
                    </span>
                    <span className="text-gray-500 text-xs capitalize">
                      {wallet.provider}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {showOnlyVerified && wallets.some(w => !w.isVerified) && (
            <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-yellow-400 text-sm font-medium">
                    Some wallets are hidden
                  </p>
                  <p className="text-yellow-300 text-xs">
                    Unverified wallets are not shown. Verify them in Wallet Manager to use for transactions.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gray-600 text-white hover:bg-gray-800"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WalletSelector;