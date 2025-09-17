import { useState, useCallback } from "react";
import { useActiveAccount } from "thirdweb/react";
import { marketplaceAPI, MintNFTParams, ListNFTParams, MarketplaceError } from "../lib/marketplace";
import { DirectListing } from "thirdweb/extensions/marketplace";

export interface UseMarketplaceReturn {
  // State
  isLoading: boolean;
  error: string | null;
  
  // Mint NFT
  mintNFT: (params: MintNFTParams) => Promise<{ tokenId: string; transactionHash: string } | null>;
  isMinting: boolean;
  
  // List NFT
  listNFT: (params: ListNFTParams) => Promise<{ listingId: string; transactionHash: string } | null>;
  isListing: boolean;
  
  // Buy NFT
  buyNFT: (listingId: bigint, quantity?: bigint) => Promise<{ transactionHash: string } | null>;
  isBuying: boolean;
  
  // Fetch listings
  fetchAllListings: () => Promise<DirectListing[]>;
  fetchUserListings: (userAddress?: string) => Promise<DirectListing[]>;
  isFetching: boolean;
  
  // Utilities
  clearError: () => void;
}

export function useMarketplace(): UseMarketplaceReturn {
  const account = useActiveAccount();
  
  // General state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Operation-specific loading states
  const [isMinting, setIsMinting] = useState(false);
  const [isListing, setIsListing] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const handleError = useCallback((err: unknown, defaultMessage: string) => {
    console.error(err);
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError(defaultMessage);
    }
  }, []);

  const mintNFT = useCallback(async (params: MintNFTParams) => {
    if (!account) {
      setError("Please connect your wallet");
      return null;
    }

    setIsMinting(true);
    setError(null);

    try {
      const result = await marketplaceAPI.mintNFT(params, account);
      return result;
    } catch (err) {
      handleError(err, "Failed to mint NFT");
      return null;
    } finally {
      setIsMinting(false);
    }
  }, [account, handleError]);

  const listNFT = useCallback(async (params: ListNFTParams) => {
    if (!account) {
      setError("Please connect your wallet");
      return null;
    }

    setIsListing(true);
    setError(null);

    try {
      const result = await marketplaceAPI.listNFT(params, account);
      return result;
    } catch (err) {
      handleError(err, "Failed to list NFT");
      return null;
    } finally {
      setIsListing(false);
    }
  }, [account, handleError]);

  const buyNFT = useCallback(async (listingId: bigint, quantity: bigint = BigInt(1)) => {
    if (!account) {
      setError("Please connect your wallet");
      return null;
    }

    setIsBuying(true);
    setError(null);

    try {
      const result = await marketplaceAPI.buyNFT(listingId, quantity, account);
      return result;
    } catch (err) {
      handleError(err, "Failed to purchase NFT");
      return null;
    } finally {
      setIsBuying(false);
    }
  }, [account, handleError]);

  const fetchAllListings = useCallback(async () => {
    setIsFetching(true);
    setError(null);

    try {
      const listings = await marketplaceAPI.getAllListings();
      return listings;
    } catch (err) {
      handleError(err, "Failed to fetch listings");
      return [];
    } finally {
      setIsFetching(false);
    }
  }, [handleError]);

  const fetchUserListings = useCallback(async (userAddress?: string) => {
    const address = userAddress || account?.address;
    
    if (!address) {
      setError("User address is required");
      return [];
    }

    setIsFetching(true);
    setError(null);

    try {
      const listings = await marketplaceAPI.getUserListings(address);
      return listings;
    } catch (err) {
      handleError(err, "Failed to fetch user listings");
      return [];
    } finally {
      setIsFetching(false);
    }
  }, [account?.address, handleError]);

  return {
    isLoading,
    error,
    mintNFT,
    isMinting,
    listNFT,
    isListing,
    buyNFT,
    isBuying,
    fetchAllListings,
    fetchUserListings,
    isFetching,
    clearError,
  };
}
