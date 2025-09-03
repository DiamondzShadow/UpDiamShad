import { getMarketplaceContract, getNFTContract, client } from "./contracts";
import { 
  getAllListings,
  createListing,
  buyFromListing,
  DirectListing,
  DirectListingV3
} from "thirdweb/extensions/marketplace";
import { 
  mintTo,
  isApprovedForAll,
  setApprovalForAll
} from "thirdweb/extensions/erc721";
import { upload } from "thirdweb/storage";
import { Account } from "thirdweb/wallets";
import { prepareContractCall, sendTransaction } from "thirdweb";

// Types
export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string;
  }>;
}

export interface MintNFTParams {
  name: string;
  description: string;
  imageFile: File;
  attributes?: Array<{ trait_type: string; value: string }>;
}

export interface ListNFTParams {
  nftContractAddress: string;
  tokenId: string;
  pricePerToken: string;
  startDate?: Date;
  endDate?: Date;
}

export interface MarketplaceError extends Error {
  code?: string;
  reason?: string;
}

// Marketplace Operations
export class MarketplaceAPI {
  private marketplaceContract = getMarketplaceContract();
  private nftContract = getNFTContract();

  async mintNFT(params: MintNFTParams, account: Account): Promise<{ tokenId: string; transactionHash: string }> {
    try {
      // 1. Upload image to IPFS
      const imageUri = await upload({
        client,
        files: [params.imageFile],
      });

      // 2. Create metadata
      const metadata: NFTMetadata = {
        name: params.name,
        description: params.description,
        image: imageUri,
        attributes: params.attributes || [],
      };

      // 3. Upload metadata to IPFS
      const metadataUri = await upload({
        client,
        files: [JSON.stringify(metadata)],
      });

      // 4. Mint NFT
      const transaction = mintTo({
        contract: this.nftContract,
        to: account.address,
        nft: {
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
          attributes: metadata.attributes,
        },
      });

      const result = await sendTransaction({
        transaction,
        account,
      });

      // Extract token ID from transaction logs (this may need adjustment based on your contract)
      const tokenId = "0"; // You'll need to parse this from transaction logs or events

      return {
        tokenId,
        transactionHash: result.transactionHash,
      };
    } catch (error) {
      throw this.handleError(error, "Failed to mint NFT");
    }
  }

  async listNFT(params: ListNFTParams, account: Account): Promise<{ listingId: string; transactionHash: string }> {
    try {
      const marketplaceAddress = this.marketplaceContract.address;
      const nftContract = getNFTContract(); // Use the NFT contract from params if different

      // 1. Check if marketplace is approved
      const isApproved = await isApprovedForAll({
        contract: nftContract,
        owner: account.address,
        operator: marketplaceAddress,
      });

      // 2. Approve marketplace if not already approved
      if (!isApproved) {
        const approveTransaction = setApprovalForAll({
          contract: nftContract,
          operator: marketplaceAddress,
          approved: true,
        });

        await sendTransaction({
          transaction: approveTransaction,
          account,
        });
      }

      // 3. Create listing
      const listingParams: DirectListingV3 = {
        assetContract: params.nftContractAddress,
        tokenId: BigInt(params.tokenId),
        quantity: BigInt(1),
        currency: "0x0000000000000000000000000000000000000000", // Native token
        pricePerToken: params.pricePerToken,
        startTimestamp: params.startDate || new Date(),
        endTimestamp: params.endDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days default
        reserved: false,
      };

      const transaction = createListing({
        contract: this.marketplaceContract,
        listing: listingParams,
      });

      const result = await sendTransaction({
        transaction,
        account,
      });

      // Extract listing ID from transaction logs
      const listingId = "0"; // Parse from transaction events

      return {
        listingId,
        transactionHash: result.transactionHash,
      };
    } catch (error) {
      throw this.handleError(error, "Failed to list NFT");
    }
  }

  async buyNFT(listingId: bigint, quantity: bigint, account: Account): Promise<{ transactionHash: string }> {
    try {
      const transaction = buyFromListing({
        contract: this.marketplaceContract,
        listingId,
        quantity,
        recipient: account.address,
      });

      const result = await sendTransaction({
        transaction,
        account,
      });

      return {
        transactionHash: result.transactionHash,
      };
    } catch (error) {
      throw this.handleError(error, "Failed to purchase NFT");
    }
  }

  async getAllListings(): Promise<DirectListing[]> {
    try {
      const listings = await getAllListings({
        contract: this.marketplaceContract,
        start: 0,
        count: 100, // Adjust as needed
      });
      return listings;
    } catch (error) {
      throw this.handleError(error, "Failed to fetch listings");
    }
  }

  async getUserListings(userAddress: string): Promise<DirectListing[]> {
    try {
      const allListings = await this.getAllListings();
      return allListings.filter(
        (listing) => listing.creatorAddress.toLowerCase() === userAddress.toLowerCase()
      );
    } catch (error) {
      throw this.handleError(error, "Failed to fetch user listings");
    }
  }

  private handleError(error: unknown, message: string): MarketplaceError {
    console.error(message, error);
    
    const marketplaceError = new Error(message) as MarketplaceError;
    
    if (error instanceof Error) {
      marketplaceError.message = `${message}: ${error.message}`;
      marketplaceError.cause = error;
    }
    
    return marketplaceError;
  }
}

// Export singleton instance
export const marketplaceAPI = new MarketplaceAPI();
