import { useState, useEffect } from 'react';
import { useActiveAccount, useActiveWallet, useWalletBalance } from 'thirdweb/react';
import { useAuth } from './useAuth';
import { client, diamondzChain } from '@/lib/contracts';

export interface IntegratedWalletData {
  // User account info
  userId?: string;
  email?: string;
  username?: string;
  isAuthenticated: boolean;
  
  // Wallet connection info
  walletAddress?: string;
  walletBalance?: string;
  isWalletConnected: boolean;
  walletType: 'abstract' | 'connected' | 'none';
  
  // Combined state
  isFullyConnected: boolean;
  canPerformTransactions: boolean;
}

export interface IntegratedWalletActions {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  refreshBalance: () => Promise<void>;
  switchToAuthenticatedWallet: () => Promise<void>;
}

/**
 * Hook that combines authentication state with wallet connection
 * Provides a unified interface for both traditional auth and Web3 wallet connectivity
 */
export function useIntegratedWallet(): IntegratedWalletData & IntegratedWalletActions {
  const { user, isAuthenticated } = useAuth();
  const thirdwebAccount = useActiveAccount();
  const thirdwebWallet = useActiveWallet();
  const { data: balance, refetch: refetchBalance } = useWalletBalance({
    client,
    chain: diamondzChain,
    address: thirdwebAccount?.address
  });

  const [walletState, setWalletState] = useState<{
    preferredWalletType: 'abstract' | 'connected';
    isBalanceLoading: boolean;
  }>({
    preferredWalletType: 'abstract',
    isBalanceLoading: false
  });

  // Determine which wallet address to use
  const getActiveWalletAddress = (): string | undefined => {
    // Priority 1: If user is authenticated and has abstract wallet, use that
    if (isAuthenticated && user?.walletInfo?.address && walletState.preferredWalletType === 'abstract') {
      return user.walletInfo.address;
    }
    
    // Priority 2: If ThirdWeb wallet is connected, use that
    if (thirdwebAccount?.address) {
      return thirdwebAccount.address;
    }
    
    // Priority 3: Fall back to authenticated user's wallet
    if (isAuthenticated && user?.walletInfo?.address) {
      return user.walletInfo.address;
    }
    
    return undefined;
  };

  // Determine wallet type
  const getWalletType = (): 'abstract' | 'connected' | 'none' => {
    const activeAddress = getActiveWalletAddress();
    
    if (!activeAddress) return 'none';
    
    if (isAuthenticated && user?.walletInfo?.address === activeAddress) {
      return user.walletInfo.type as 'abstract' | 'connected';
    }
    
    if (thirdwebAccount?.address === activeAddress) {
      return 'connected';
    }
    
    return 'none';
  };

  const walletAddress = getActiveWalletAddress();
  const walletType = getWalletType();
  const isWalletConnected = !!walletAddress;
  const isFullyConnected = isAuthenticated && isWalletConnected;
  const canPerformTransactions = isWalletConnected && (thirdwebWallet || walletType === 'abstract');

  // Actions
  const connectWallet = async (): Promise<void> => {
    try {
      // This would trigger the ThirdWeb connect modal
      // The actual connection is handled by ThirdWeb's ConnectButton
      console.log('Triggering wallet connection...');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      throw error;
    }
  };

  const disconnectWallet = async (): Promise<void> => {
    try {
      // This would disconnect the ThirdWeb wallet
      if (thirdwebWallet) {
        await thirdwebWallet.disconnect();
      }
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      throw error;
    }
  };

  const refreshBalance = async (): Promise<void> => {
    try {
      setWalletState(prev => ({ ...prev, isBalanceLoading: true }));
      if (refetchBalance) {
        await refetchBalance();
      }
    } catch (error) {
      console.error('Failed to refresh balance:', error);
    } finally {
      setWalletState(prev => ({ ...prev, isBalanceLoading: false }));
    }
  };

  const switchToAuthenticatedWallet = async (): Promise<void> => {
    if (isAuthenticated && user?.walletInfo?.address) {
      setWalletState(prev => ({ ...prev, preferredWalletType: 'abstract' }));
    }
  };

  // Auto-refresh balance when wallet changes
  useEffect(() => {
    if (walletAddress) {
      refreshBalance();
    }
  }, [walletAddress]);

  const walletData: IntegratedWalletData = {
    // User account info
    userId: user?.id,
    email: user?.email,
    username: user?.username,
    isAuthenticated,
    
    // Wallet connection info
    walletAddress,
    walletBalance: balance?.displayValue || '0',
    isWalletConnected,
    walletType,
    
    // Combined state
    isFullyConnected,
    canPerformTransactions
  };

  const walletActions: IntegratedWalletActions = {
    connectWallet,
    disconnectWallet,
    refreshBalance,
    switchToAuthenticatedWallet
  };

  return {
    ...walletData,
    ...walletActions
  };
}

/**
 * Hook for checking if user can perform specific actions
 */
export function useWalletPermissions() {
  const wallet = useIntegratedWallet();

  return {
    canMintNFT: wallet.canPerformTransactions,
    canListNFT: wallet.canPerformTransactions,
    canBuyNFT: wallet.canPerformTransactions,
    canJoinCampaign: wallet.isAuthenticated,
    canCreateCampaign: wallet.isAuthenticated && wallet.canPerformTransactions,
    canVote: wallet.isAuthenticated && wallet.canPerformTransactions,
    
    getPermissionMessage: (action: string): string => {
      if (!wallet.isAuthenticated) {
        return `Please sign in to ${action}`;
      }
      if (!wallet.isWalletConnected) {
        return `Please connect your wallet to ${action}`;
      }
      if (!wallet.canPerformTransactions) {
        return `Wallet connection required to ${action}`;
      }
      return '';
    }
  };
}

/**
 * Utility hook for wallet connection status
 */
export function useWalletConnectionStatus() {
  const wallet = useIntegratedWallet();
  
  const getConnectionStatus = () => {
    if (wallet.isFullyConnected) {
      return {
        status: 'fully-connected' as const,
        message: 'Account and wallet connected',
        color: 'text-green-500',
        action: null
      };
    }
    
    if (wallet.isAuthenticated && !wallet.isWalletConnected) {
      return {
        status: 'account-only' as const,
        message: 'Account connected, wallet needed for transactions',
        color: 'text-yellow-500',
        action: 'Connect Wallet'
      };
    }
    
    if (!wallet.isAuthenticated && wallet.isWalletConnected) {
      return {
        status: 'wallet-only' as const,
        message: 'Wallet connected, sign in for full features',
        color: 'text-blue-500',
        action: 'Sign In'
      };
    }
    
    return {
      status: 'disconnected' as const,
      message: 'Connect account and wallet to get started',
      color: 'text-gray-500',
      action: 'Get Started'
    };
  };
  
  return {
    ...wallet,
    connectionStatus: getConnectionStatus()
  };
}