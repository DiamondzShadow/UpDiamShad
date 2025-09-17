'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useMarketplace } from '../hooks/useMarketplace';
import { MintFormData } from './marketplace/types';
import { useActiveAccount } from 'thirdweb/react';
import { CollectionSelector } from './CollectionSelector';
import { CONTRACT_ADDRESSES } from '../lib/contracts';

interface MintNFTFormProps {
  onSuccess?: (result: { tokenId: string; transactionHash: string }) => void;
}

export function MintNFTForm({ onSuccess }: MintNFTFormProps) {
  const account = useActiveAccount();
  const { mintNFT, isMinting, error, clearError } = useMarketplace();

  const [selectedCollection, setSelectedCollection] = useState('updiamshad');
  const [collectionAddress, setCollectionAddress] = useState(CONTRACT_ADDRESSES.NFT_COLLECTION);
  const [formData, setFormData] = useState<MintFormData>({
    name: '',
    description: '',
    imageFile: null,
    attributes: [],
  });
  
  const [success, setSuccess] = useState<string | null>(null);
  const [newAttribute, setNewAttribute] = useState({ trait_type: '', value: '' });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, imageFile: e.target.files![0] }));
    }
  };

  const addAttribute = () => {
    if (newAttribute.trait_type && newAttribute.value) {
      setFormData(prev => ({
        ...prev,
        attributes: [...prev.attributes, { ...newAttribute }]
      }));
      setNewAttribute({ trait_type: '', value: '' });
    }
  };

  const removeAttribute = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attributes: prev.attributes.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!account) {
      return;
    }

    if (!formData.imageFile) {
      return;
    }

    clearError();
    setSuccess(null);

    try {
      const result = await mintNFT({
        name: formData.name,
        description: formData.description,
        imageFile: formData.imageFile,
        attributes: formData.attributes,
      });

      if (result) {
        setSuccess(`Successfully minted NFT! Transaction: ${result.transactionHash}`);
        setFormData({ name: '', description: '', imageFile: null, attributes: [] });
        onSuccess?.(result);
        
        // Clear file input
        const fileInput = document.getElementById('nft-image') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      }
    } catch (err) {
      console.error('Mint failed:', err);
    }
  };

  const isFormValid = formData.name && formData.description && formData.imageFile && account;

  const handleCollectionChange = (collectionType: string, address?: string) => {
    setSelectedCollection(collectionType);
    setCollectionAddress(address || '');
  };

  const canMint = selectedCollection === 'updiamshad' && !CONTRACT_ADDRESSES.NFT_COLLECTION.includes('...');

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold">Mint Your Own NFT</h2>
      
      <CollectionSelector 
        selectedCollection={selectedCollection}
        customAddress={collectionAddress}
        onCollectionChange={handleCollectionChange}
        showTitle={false}
      />
      
      {!account && (
        <div className="p-3 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-yellow-800">Please connect your wallet to mint NFTs</p>
        </div>
      )}
      
      {selectedCollection === 'custom' && (
        <div className="p-3 bg-blue-100 border border-blue-400 rounded">
          <p className="text-blue-800">
            <strong>Note:</strong> Minting from custom collections is not supported yet. 
            This feature will be available once your collection contract supports minting.
          </p>
        </div>
      )}
      
      {!canMint && selectedCollection === 'updiamshad' && (
        <div className="p-3 bg-orange-100 border border-orange-400 rounded">
          <p className="text-orange-800">
            <strong>Setup Required:</strong> Please deploy the UpDiamShad NFT collection first 
            using the provided smart contracts in the /nft-contracts folder.
          </p>
        </div>
      )}
      
      <div>
        <label htmlFor="nft-name" className="block text-sm font-medium text-gray-700">
          NFT Name
        </label>
        <Input
          id="nft-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="My Awesome NFT"
          className="mt-1 block w-full"
          required
        />
      </div>
      
      <div>
        <label htmlFor="nft-description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <Input
          id="nft-description"
          type="text"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          placeholder="A unique digital collectible"
          className="mt-1 block w-full"
          required
        />
      </div>
      
      <div>
        <label htmlFor="nft-image" className="block text-sm font-medium text-gray-700">
          Image
        </label>
        <Input
          id="nft-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full"
          required
        />
        {formData.imageFile && (
          <p className="text-sm text-green-600 mt-1">File selected: {formData.imageFile.name}</p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Attributes (Optional)
        </label>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Trait Type (e.g., Color)"
              value={newAttribute.trait_type}
              onChange={(e) => setNewAttribute(prev => ({ ...prev, trait_type: e.target.value }))}
              className="flex-1"
            />
            <Input
              type="text"
              placeholder="Value (e.g., Blue)"
              value={newAttribute.value}
              onChange={(e) => setNewAttribute(prev => ({ ...prev, value: e.target.value }))}
              className="flex-1"
            />
            <Button type="button" onClick={addAttribute} disabled={!newAttribute.trait_type || !newAttribute.value}>
              Add
            </Button>
          </div>
          
          {formData.attributes.length > 0 && (
            <div className="space-y-1">
              {formData.attributes.map((attr, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                  <span className="text-sm">{attr.trait_type}: {attr.value}</span>
                  <Button type="button" variant="destructive" size="sm" onClick={() => removeAttribute(index)}>
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Button 
        type="submit" 
        disabled={!isFormValid || isMinting || !canMint || selectedCollection === 'custom'} 
        className="w-full"
      >
        {isMinting ? 'Minting...' : 
         selectedCollection === 'custom' ? 'Custom Collection Minting Not Supported' :
         !canMint ? 'Collection Not Deployed' : 'Mint NFT'}
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
