import Image from "next/image";
import {
  MediaRenderer,
  TransactionButton,
  useActiveAccount,
} from "thirdweb/react";
import { DirectListing } from "thirdweb/extensions/marketplace";
import { ThirdwebContract } from "thirdweb";
import { buyFromListing } from "thirdweb/extensions/marketplace";
import { toEther } from "thirdweb/utils";
import { Button } from "./button";

interface NftCardProps {
  nft: DirectListing;
  contract?: ThirdwebContract;
  onBuy?: (listingId: bigint) => void;
  onCancel?: (listingId: bigint) => void;
  showActions?: boolean;
  isLoading?: boolean;
}

export default function NftCard({ 
  nft, 
  contract, 
  onBuy, 
  onCancel, 
  showActions = true,
  isLoading = false 
}: NftCardProps) {
  const account = useActiveAccount();
  const address = account?.address;
  
  const isOwner = address && nft.creatorAddress.toLowerCase() === address.toLowerCase();
  const canBuy = !isOwner && showActions && contract && address;

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden group transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
      <div className="relative aspect-square">
        <MediaRenderer
          client={(contract as ThirdwebContract).client}
          src={nft.asset.metadata.image}
          className="object-cover group-hover:scale-105 transition-transform duration-300 !w-full !h-full"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 mb-1">
          {nft.asset.metadata.description}
        </p>
        <h3 className="text-lg font-bold truncate">
          {nft.asset.metadata.name}
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-300">Price</p>

          <p className="text-lg font-semibold text-primary">
            {nft.currencyValuePerToken.displayValue}{" "}
            {nft.currencyValuePerToken.symbol}
          </p>
        </div>
        <div className="mt-4 space-y-2">
          {/* Owner badge */}
          {isOwner && (
            <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              Your Listing
            </div>
          )}
          
          {/* Action buttons */}
          {canBuy && (
            <TransactionButton
              transaction={() => {
                if (!contract) throw new Error("Contract not available");

                return buyFromListing({
                  contract: contract,
                  listingId: nft.id,
                  quantity: BigInt("1"),
                  recipient: address || "",
                });
              }}
              onTransactionSent={(result) => {
                console.log("Transaction sent:", result.transactionHash);
                onBuy?.(nft.id);
              }}
              onTransactionConfirmed={(receipt) => {
                console.log("Transaction confirmed:", receipt.transactionHash);
                alert("Successfully purchased NFT!");
              }}
              onError={(error) => {
                console.error("Transaction error:", error);
                alert(`Error: ${error.message}`);
              }}
              disabled={isLoading}
              className="w-full bg-primary/80 hover:bg-primary text-white py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : "Buy Now"}
            </TransactionButton>
          )}
          
          {/* Cancel listing button for owners */}
          {isOwner && onCancel && (
            <Button
              onClick={() => onCancel(nft.id)}
              disabled={isLoading}
              variant="outline"
              className="w-full"
            >
              {isLoading ? "Loading..." : "Cancel Listing"}
            </Button>
          )}
          
          {/* No wallet connected */}
          {!address && showActions && (
            <div className="text-center text-sm text-gray-500">
              Connect wallet to buy
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
