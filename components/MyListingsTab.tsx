'use client';

import { useEffect, useState } from 'react';
import { DirectListing } from 'thirdweb/extensions/marketplace';
import NftCard from './ui/nft-card';
import { Button } from './ui/button';
import { useMarketplace } from '../hooks/useMarketplace';
import { useActiveAccount } from 'thirdweb/react';
import { getMarketplaceContract } from '../lib/contracts';

interface MyListingsTabProps {
  onRefresh?: () => void;
}

export function MyListingsTab({ onRefresh }: MyListingsTabProps) {
  const account = useActiveAccount();
  const { fetchUserListings, isFetching, error } = useMarketplace();

  const [myListings, setMyListings] = useState<DirectListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadUserListings = async () => {
    if (!account?.address) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const listings = await fetchUserListings(account.address);
      setMyListings(listings);
    } catch (err) {
      console.error('Failed to load user listings:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUserListings();
  }, [account?.address, fetchUserListings]);

  const handleRefresh = () => {
    loadUserListings();
    onRefresh?.();
  };

  if (!account) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Please connect your wallet to view your listings</p>
      </div>
    );
  }

  if (isLoading || isFetching) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
        <p>Loading your listings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="p-4 bg-red-100 border border-red-400 rounded mb-4">
          <p className="text-red-800">Error: {error}</p>
        </div>
        <Button onClick={handleRefresh}>Try Again</Button>
      </div>
    );
  }

  if (myListings.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Listings</h3>
          <p className="text-gray-600 mb-4">You haven't listed any NFTs for sale yet.</p>
          <Button onClick={handleRefresh}>Refresh</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Your Listings ({myListings.length})</h3>
        <Button onClick={handleRefresh} disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myListings.map((listing: DirectListing) => (
          <NftCard
            key={listing.id.toString()}
            nft={listing}
            contract={getMarketplaceContract()}
            showActions={false}
          />
        ))}
      </div>
    </div>
  );
}
