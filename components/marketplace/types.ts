import { DirectListing } from "thirdweb/extensions/marketplace";

// Common marketplace interfaces
export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string;
  }>;
}

export interface MarketplaceNFT extends DirectListing {
  // Additional UI-specific fields can be added here
  isOwner?: boolean;
  isPurchasable?: boolean;
}

// Component Props
export interface NFTCardProps {
  nft: DirectListing;
  onBuy?: (listingId: bigint) => void;
  onCancel?: (listingId: bigint) => void;
  showActions?: boolean;
  isLoading?: boolean;
}

export interface MarketplaceGridProps {
  nfts: DirectListing[];
  isLoading?: boolean;
  emptyMessage?: string;
  onBuy?: (listingId: bigint) => void;
  onCancel?: (listingId: bigint) => void;
}

// Form interfaces
export interface MintFormData {
  name: string;
  description: string;
  imageFile: File | null;
  attributes: Array<{ trait_type: string; value: string }>;
}

export interface ListFormData {
  nftContractAddress: string;
  tokenId: string;
  pricePerToken: string;
  duration: number; // in days
}

// Status types for UI feedback
export type TransactionStatus = 'idle' | 'preparing' | 'pending' | 'success' | 'error';

export interface TransactionState {
  status: TransactionStatus;
  hash?: string;
  error?: string;
}
