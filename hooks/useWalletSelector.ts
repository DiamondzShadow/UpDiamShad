"use client";

import { useState, useCallback } from 'react';
import { WalletInfo } from '@/lib/auth';
import { useAuth } from '@/hooks/useAuth';
import { useNotifications } from '@/hooks/useNotifications';

interface WalletSelectorOptions {
  title?: string;
  description?: string;
  showOnlyVerified?: boolean;
  requirePrimaryWallet?: boolean;
}

export function useWalletSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<WalletSelectorOptions>({});
  const [resolvePromise, setResolvePromise] = useState<((wallet: WalletInfo | null) => void) | null>(null);
  
  const { user } = useAuth();
  const { showError, showSuccess } = useNotifications();

  const selectWallet = useCallback((options: WalletSelectorOptions = {}): Promise<WalletInfo | null> => {
    return new Promise((resolve) => {
      const wallets = user?.wallets || [];
      
      // If requirePrimaryWallet is true, return primary wallet immediately
      if (options.requirePrimaryWallet) {
        const primaryWallet = wallets.find(w => w.isDefault) || wallets[0];
        if (primaryWallet) {
          resolve(primaryWallet);
          return;
        } else {
          showError('No Primary Wallet', 'Please set a primary wallet in your wallet manager.');
          resolve(null);
          return;
        }
      }

      // If only one wallet and no special requirements, return it
      const filteredWallets = options.showOnlyVerified 
        ? wallets.filter(w => w.isVerified)
        : wallets;

      if (filteredWallets.length === 0) {
        showError(
          'No Wallets Available', 
          options.showOnlyVerified 
            ? 'Please verify a wallet to continue with this operation.'
            : 'Please connect a wallet to continue.'
        );
        resolve(null);
        return;
      }

      if (filteredWallets.length === 1) {
        resolve(filteredWallets[0]);
        return;
      }

      // Multiple wallets available, show selector
      setOptions(options);
      setResolvePromise(() => resolve);
      setIsOpen(true);
    });
  }, [user, showError]);

  const handleSelectWallet = useCallback((wallet: WalletInfo) => {
    if (resolvePromise) {
      resolvePromise(wallet);
      setResolvePromise(null);
    }
    setIsOpen(false);
  }, [resolvePromise]);

  const handleClose = useCallback(() => {
    if (resolvePromise) {
      resolvePromise(null);
      setResolvePromise(null);
    }
    setIsOpen(false);
  }, [resolvePromise]);

  // Convenience methods for common use cases
  const selectWalletForTransaction = useCallback(() => {
    return selectWallet({
      title: "Select Wallet for Transaction",
      description: "Choose which wallet you'd like to use for this blockchain transaction.",
      showOnlyVerified: true
    });
  }, [selectWallet]);

  const selectWalletForSigning = useCallback(() => {
    return selectWallet({
      title: "Select Wallet for Signing",
      description: "Choose which wallet you'd like to use to sign this message.",
      showOnlyVerified: false
    });
  }, [selectWallet]);

  const selectPrimaryWallet = useCallback(() => {
    return selectWallet({
      requirePrimaryWallet: true
    });
  }, [selectWallet]);

  const selectAnyWallet = useCallback((title?: string, description?: string) => {
    return selectWallet({
      title,
      description,
      showOnlyVerified: false
    });
  }, [selectWallet]);

  const selectVerifiedWallet = useCallback((title?: string, description?: string) => {
    return selectWallet({
      title,
      description,
      showOnlyVerified: true
    });
  }, [selectWallet]);

  return {
    // Core functionality
    selectWallet,
    isOpen,
    options,
    handleSelectWallet,
    handleClose,
    
    // Convenience methods
    selectWalletForTransaction,
    selectWalletForSigning,
    selectPrimaryWallet,
    selectAnyWallet,
    selectVerifiedWallet,
    
    // Wallet info
    userWallets: user?.wallets || [],
    primaryWallet: user?.wallets?.find(w => w.isDefault) || user?.wallets?.[0],
    verifiedWallets: user?.wallets?.filter(w => w.isVerified) || []
  };
}

export default useWalletSelector;