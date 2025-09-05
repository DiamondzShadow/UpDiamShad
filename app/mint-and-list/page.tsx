"use client";

import { MintNFTForm } from "../../components/MintNFTForm";
import { ListNFTForm } from "../../components/ListNFTForm";
import { MyListingsTab } from "../../components/MyListingsTab";
import { NFTCollectionBrowser } from "../../components/NFTCollectionBrowser";
import { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/contracts";
import { Button } from "@/components/ui/button";

export default function MintAndListPage() {
  const [activeTab, setActiveTab] = useState("mint");
  
  const handleMintSuccess = (result: { tokenId: string; transactionHash: string }) => {
    console.log('NFT minted successfully:', result);
    // Optionally switch to list tab or show success message
  };
  
  const handleListSuccess = (result: { listingId: string; transactionHash: string }) => {
    console.log('NFT listed successfully:', result);
    // Optionally switch to my listings tab
    setActiveTab("my-listings");
  };
  
  const handleRefresh = () => {
    // Force refresh of listings if needed
    console.log('Refreshing listings...');
  };

  const tabs = [
    { id: "mint", label: "Mint NFT", icon: "🎨" },
    { id: "list", label: "List NFT", icon: "📝" },
    { id: "browse", label: "Browse Collections", icon: "🔍" },
    { id: "my-listings", label: "My Listings", icon: "👤" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            NFT Minting & Marketplace
          </h1>
          <p className="text-gray-600">
            Create, list, and manage your NFTs on the Diamondz marketplace.
          </p>
        </div>
        <ConnectButton client={client} />
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variant={activeTab === tab.id ? "default" : "ghost"}
            className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all ${
              activeTab === tab.id
                ? "bg-primary text-white shadow-md"
                : "text-gray-600 hover:text-gray-900 hover:bg-white"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-lg shadow-md border">
        {activeTab === "mint" && (
          <MintNFTForm onSuccess={handleMintSuccess} />
        )}
        {activeTab === "list" && (
          <ListNFTForm onSuccess={handleListSuccess} />
        )}
        {activeTab === "browse" && (
          <NFTCollectionBrowser 
            onSelectCollection={(address) => {
              console.log('Selected collection:', address);
              // You could auto-switch to list tab and pre-fill the address
            }}
          />
        )}
        {activeTab === "my-listings" && (
          <MyListingsTab onRefresh={handleRefresh} />
        )}
      </div>

      {/* Help Section */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-medium text-blue-900 mb-2">Getting Started</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Connect your wallet to start minting and trading NFTs</li>
          <li>• Mint your own NFTs using the UpDiamShad collection or your own</li>
          <li>• Browse and validate existing NFT collections</li>
          <li>• List your NFTs for sale on the marketplace</li>
          <li>• Manage all your active listings in one place</li>
        </ul>
      </div>
    </div>
  );
}
