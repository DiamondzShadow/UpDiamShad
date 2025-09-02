"use client";

import { ConnectButton } from "thirdweb/react";
import NftCard from "@/components/ui/nft-card";
import { Globe, RefreshCw, Wallet, User, AlertTriangle } from "lucide-react";
import { DirectListing } from "thirdweb/extensions/marketplace";
import { useEffect, useState } from "react";
import { useMarketplace } from "@/hooks/useMarketplace";
import { client, diamondzChain, getMarketplaceContract } from "@/lib/contracts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MintNFTForm } from "@/components/MintNFTForm";
import { ListNFTForm } from "@/components/ListNFTForm";
import { MyListingsTab } from "@/components/MyListingsTab";
import { useAuth } from "@/hooks/useAuth";
import { useIntegratedWallet, useWalletConnectionStatus } from "@/hooks/useIntegratedWallet";
import { formatUserDisplayName } from "@/lib/auth";
import Link from "next/link";

const contract = getMarketplaceContract();

export default function NftGalleryPage() {
  const { user, isAuthenticated } = useAuth();
  const wallet = useIntegratedWallet();
  const { connectionStatus } = useWalletConnectionStatus();
  const { fetchAllListings, buyNFT, isFetching, isBuying, error, clearError } =
    useMarketplace();
  const [nfts, setNfts] = useState<DirectListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [buyingListingId, setBuyingListingId] = useState<bigint | null>(null);
  const [activeTab, setActiveTab] = useState("browse");

  const loadListings = async () => {
    setIsLoading(true);
    clearError();
    try {
      const listings = await fetchAllListings();
      setNfts(listings);
    } catch (err) {
      console.error("Failed to load listings:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadListings();
  }, [fetchAllListings]);

  const handleBuy = async (listingId: bigint) => {
    setBuyingListingId(listingId);
    try {
      const result = await buyNFT(listingId);
      if (result) {
        await loadListings();
      }
    } catch (err) {
      console.error("Purchase failed:", err);
    } finally {
      setBuyingListingId(null);
    }
  };

  const handleRefresh = () => {
    loadListings();
  };

  const handleMintSuccess = (result: {
    tokenId: string;
    transactionHash: string;
  }) => {
    console.log("NFT minted successfully:", result);
    // Optionally refresh listings or switch to browse tab
    loadListings();
  };

  const handleListSuccess = (result: {
    listingId: string;
    transactionHash: string;
  }) => {
    console.log("NFT listed successfully:", result);
    // Refresh listings and switch to my listings tab
    loadListings();
    setActiveTab("my-listings");
  };

  const handleMyListingsRefresh = () => {
    loadListings();
  };

  const isLoadingState = isLoading || isFetching;

  const tabs = [
    { id: "browse", label: "Browse & Buy", icon: "🛒" },
    { id: "mint", label: "Mint NFT", icon: "🎨" },
    { id: "list", label: "List NFT", icon: "📝" },
    { id: "my-listings", label: "My Listings", icon: "👤" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">NFT Marketplace</h1>
          <p className="text-gray-300">
            Browse, mint, list, and trade exclusive NFTs on the Diamondz
            ecosystem.
          </p>
          {activeTab === "browse" && (
            <p className="text-sm text-gray-400 mt-2">
              Total listings: {nfts.length}
            </p>
          )}
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Connection Status Card */}
          <Card className="p-4 bg-gray-800/50 border-gray-700 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-3 h-3 rounded-full ${connectionStatus.color.replace('text-', 'bg-')}`} />
                <div className="min-w-0">
                  <div className="text-sm font-medium text-white">
                    {isAuthenticated && user ? (
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="truncate">{formatUserDisplayName(user)}</span>
                      </div>
                    ) : (
                      "Guest User"
                    )}
                  </div>
                  <div className={`text-xs ${connectionStatus.color} flex items-center gap-1`}>
                    {wallet.isWalletConnected ? (
                      <>
                        <Wallet className="h-3 w-3" />
                        <span className="font-mono">
                          {wallet.walletAddress?.slice(0, 6)}...{wallet.walletAddress?.slice(-4)}
                        </span>
                      </>
                    ) : (
                      connectionStatus.message
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {!isAuthenticated && (
                  <Link href="/auth/login">
                    <Button size="sm" variant="outline" className="border-gray-600">
                      Sign In
                    </Button>
                  </Link>
                )}
                <ConnectButton client={client} />
              </div>
            </div>
          </Card>

          <div className="flex items-center gap-4">
            {activeTab === "browse" && (
              <Button
                onClick={handleRefresh}
                disabled={isLoadingState}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RefreshCw
                  className={`h-4 w-4 ${isLoadingState ? "animate-spin" : ""}`}
                />
                Refresh
              </Button>
            )}
            <div className="flex items-center gap-2 text-sm text-gray-300 border border-gray-600 rounded-full px-4 py-2">
              <Globe className="h-4 w-4" />
              <span>Diamondz Chain</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 bg-black p-1 rounded-lg border border-gray-800">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variant="ghost"
            className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all bg-transparent ${
              activeTab === tab.id
                ? "border border-white text-white shadow-md bg-black"
                : "text-gray-400 hover:text-white hover:border hover:border-gray-400 bg-black border border-transparent"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Connection Warning */}
      {!wallet.isFullyConnected && (
        <Card className="mb-6 p-4 bg-yellow-900/20 border-yellow-600/50">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div>
              <h3 className="text-yellow-400 font-medium mb-1">Limited Functionality</h3>
              <p className="text-yellow-300 text-sm mb-2">{connectionStatus.message}</p>
              <div className="flex gap-2">
                {!isAuthenticated && (
                  <Link href="/auth/signup">
                    <Button size="sm" variant="outline" className="border-yellow-600 text-yellow-400">
                      Create Account
                    </Button>
                  </Link>
                )}
                {!wallet.isWalletConnected && (
                  <Button size="sm" onClick={wallet.connectWallet} className="bg-yellow-600 text-black hover:bg-yellow-500">
                    Connect Wallet
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Tab Content */}
      <div className="bg-black p-6 rounded-lg shadow-md border border-gray-800">
        {activeTab === "browse" && (
          <div>
            {/* Loading State */}
            {isLoadingState && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                <p className="text-white">Loading NFTs...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-8">
                <div className="p-4 bg-red-900 border border-red-600 rounded mb-4">
                  <p className="text-red-200">Error loading NFTs: {error}</p>
                  <p className="text-sm text-red-300 mt-2">
                    Please check your wallet connection and network settings.
                  </p>
                </div>
                <Button onClick={handleRefresh} className="bg-white text-black hover:bg-gray-200">Try Again</Button>
              </div>
            )}

            {/* Empty State */}
            {!isLoadingState && !error && nfts.length === 0 && (
              <div className="text-center py-8">
                <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-medium text-white mb-2">
                    No NFTs Available
                  </h3>
                  <p className="text-gray-300 mb-4">
                    There are currently no NFTs listed in the marketplace.
                  </p>
                  <Button onClick={handleRefresh} className="bg-white text-black hover:bg-gray-200">Refresh</Button>
                </div>
              </div>
            )}

            {/* NFT Grid */}
            {!isLoadingState && !error && nfts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {nfts.map((nft: DirectListing) => (
                  <NftCard
                    key={nft.id.toString()}
                    nft={nft}
                    contract={contract}
                    onBuy={handleBuy}
                    isLoading={buyingListingId === nft.id && isBuying}
                    showActions={true}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "mint" && <MintNFTForm onSuccess={handleMintSuccess} />}

        {activeTab === "list" && <ListNFTForm onSuccess={handleListSuccess} />}

        {activeTab === "my-listings" && (
          <MyListingsTab onRefresh={handleMyListingsRefresh} />
        )}
      </div>
    </div>
  );
}
