'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useMarketplace } from '../hooks/useMarketplace';
import { ListFormData } from './marketplace/types';
import { useActiveAccount } from 'thirdweb/react';
import { CONTRACT_ADDRESSES } from '../lib/contracts';
import { CollectionSelector } from './CollectionSelector';

interface ListNFTFormProps {
  onSuccess?: (result: { listingId: string; transactionHash: string }) => void;
}

export function ListNFTForm({ onSuccess }: ListNFTFormProps) {
  const account = useActiveAccount();
  const { listNFT, isListing, error, clearError } = useMarketplace();

  const [selectedCollection, setSelectedCollection] = useState('updiamshad');
  const [collectionAddress, setCollectionAddress] = useState(CONTRACT_ADDRESSES.NFT_COLLECTION);
  const [formData, setFormData] = useState<ListFormData>({
    nftContractAddress: CONTRACT_ADDRESSES.NFT_COLLECTION,
    tokenId: '',
    pricePerToken: '',
    duration: 30, // 30 days default
  });
  
  const [success, setSuccess] = useState<string | null>(null);

  const handleCollectionChange = (collectionType: string, address?: string) => {
    setSelectedCollection(collectionType);
    const newAddress = address || '';
    setCollectionAddress(newAddress);
    setFormData(prev => ({ ...prev, nftContractAddress: newAddress }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!account) {
      return;
    }

    clearError();
    setSuccess(null);

    try {
      const endDate = new Date(Date.now() + formData.duration * 24 * 60 * 60 * 1000);
      
      const result = await listNFT({
        nftContractAddress: formData.nftContractAddress,
        tokenId: formData.tokenId,
        pricePerToken: formData.pricePerToken,
        startDate: new Date(),
        endDate,
      });

      if (result) {
        setSuccess(`Successfully listed NFT! Transaction: ${result.transactionHash}`);
        setFormData(prev => ({ ...prev, tokenId: '', pricePerToken: '' }));
        onSuccess?.(result);
      }
    } catch (err) {
      console.error('List failed:', err);
    }
  };

  const isFormValid = formData.nftContractAddress && 
    formData.tokenId && 
    formData.pricePerToken && 
    account &&
    !formData.nftContractAddress.includes('...');

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold">List Your NFT for Sale</h2>
      
      <CollectionSelector 
        selectedCollection={selectedCollection}
        customAddress={collectionAddress}
        onCollectionChange={handleCollectionChange}
        showTitle={false}
      />
      
      {!account && (
        <div className="p-3 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-yellow-800">Please connect your wallet to list NFTs</p>
        </div>
      )}
      
      {selectedCollection === 'custom' && (
        <div>
          <label htmlFor="nft-contract-address" className="block text-sm font-medium text-gray-700">
            NFT Contract Address
          </label>
          <Input
            id="nft-contract-address"
            type="text"
            value={formData.nftContractAddress}
            onChange={(e) => setFormData(prev => ({ ...prev, nftContractAddress: e.target.value }))}
            placeholder="0x..."
            className="mt-1 block w-full"
            required
          />
          <p className="text-xs text-gray-500 mt-1">The contract address of your NFT collection</p>
        </div>
      )}
      
      {selectedCollection === 'updiamshad' && (
        <div className="p-3 bg-green-50 border border-green-200 rounded">
          <p className="text-sm text-green-800">
            <strong>Using UpDiamShad Collection:</strong> {formData.nftContractAddress || 'Not deployed yet'}
          </p>
        </div>
      )}
      
      <div>
        <label htmlFor="token-id" className="block text-sm font-medium text-gray-700">
          Token ID
        </label>
        <Input
          id="token-id"
          type="text"
          value={formData.tokenId}
          onChange={(e) => setFormData(prev => ({ ...prev, tokenId: e.target.value }))}
          placeholder="123"
          className="mt-1 block w-full"
          required
        />
        <p className="text-xs text-gray-500 mt-1">The unique ID of your NFT</p>
      </div>
      
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price (in ETH)
        </label>
        <Input
          id="price"
          type="number"
          value={formData.pricePerToken}
          onChange={(e) => setFormData(prev => ({ ...prev, pricePerToken: e.target.value }))}
          placeholder="0.1"
          step="0.001"
          min="0"
          className="mt-1 block w-full"
          required
        />
        <p className="text-xs text-gray-500 mt-1">Price per NFT in the native token</p>
      </div>
      
      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
          Listing Duration (days)
        </label>
        <Input
          id="duration"
          type="number"
          value={formData.duration}
          onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) || 30 }))}
          placeholder="30"
          min="1"
          max="365"
          className="mt-1 block w-full"
        />
        <p className="text-xs text-gray-500 mt-1">How long the listing will be active</p>
      </div>
      
      <Button type="submit" disabled={!isFormValid || isListing} className="w-full">
        {isListing ? 'Listing...' : 'List NFT'}
      </Button>
      
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 rounded">
          <p className="text-red-800">{error}</p>
        </div>
      )}
      
      {success && (
        <div className="p-3 bg-green-100 border border-green-400 rounded">
          <p className="text-green-800">{success}</p>
        </div>
      )}
    </form>
  );
}
