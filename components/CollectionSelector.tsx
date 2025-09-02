'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CONTRACT_ADDRESSES } from '../lib/contracts';
import { Badge } from './ui/badge';
import { CheckCircle, Users, Wallet } from 'lucide-react';

interface CollectionOption {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface CollectionSelectorProps {
  selectedCollection: string;
  customAddress?: string;
  onCollectionChange: (collectionType: string, address?: string) => void;
  showTitle?: boolean;
}

export function CollectionSelector({
  selectedCollection,
  customAddress = '',
  onCollectionChange,
  showTitle = true
}: CollectionSelectorProps) {
  const [customInput, setCustomInput] = useState(customAddress);
  const [isValidating, setIsValidating] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const collectionOptions: CollectionOption[] = [
    {
      id: 'updiamshad',
      label: 'UpDiamShad Collection',
      description: 'Use our official NFT collection for minting new NFTs',
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      id: 'custom',
      label: 'My Collection',
      description: 'Use your own existing NFT collection contract',
      icon: <Wallet className="h-5 w-5 text-blue-500" />
    }
  ];

  const handleCollectionChange = (value: string) => {
    if (value === 'updiamshad') {
      onCollectionChange('updiamshad', CONTRACT_ADDRESSES.NFT_COLLECTION);
    } else if (value === 'custom') {
      onCollectionChange('custom', customInput || '');
    }
  };

  const handleCustomAddressChange = (address: string) => {
    setCustomInput(address);
    setValidationError(null);
    
    if (selectedCollection === 'custom') {
      onCollectionChange('custom', address);
    }
  };

  const validateAddress = async (address: string) => {
    if (!address) {
      setValidationError('Address is required');
      return false;
    }

    // Basic address validation
    if (!address.startsWith('0x') || address.length !== 42) {
      setValidationError('Invalid address format');
      return false;
    }

    setValidationError(null);
    return true;
  };

  const isOfficialCollection = !CONTRACT_ADDRESSES.NFT_COLLECTION.includes('...');

  return (
    <div className="space-y-4">
      {showTitle && (
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Choose NFT Collection</h3>
          <p className="text-sm text-gray-600">
            Select which NFT collection you want to use for minting or listing
          </p>
        </div>
      )}

      <RadioGroup
        value={selectedCollection}
        onValueChange={handleCollectionChange}
        className="space-y-3"
      >
        {collectionOptions.map((option) => (
          <div key={option.id}>
            <Label
              htmlFor={option.id}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <RadioGroupItem value={option.id} id={option.id} />
              <Card className={`flex-1 transition-all duration-200 ${
                selectedCollection === option.id 
                  ? 'border-primary bg-primary/5' 
                  : 'hover:border-gray-300'
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    {option.icon}
                    <div className="flex-1">
                      <CardTitle className="text-base">{option.label}</CardTitle>
                      <CardDescription className="text-sm">
                        {option.description}
                      </CardDescription>
                    </div>
                    {option.id === 'updiamshad' && isOfficialCollection && (
                      <Badge variant="secondary">Recommended</Badge>
                    )}
                  </div>
                </CardHeader>
                
                {option.id === 'updiamshad' && (
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>Official collection with built-in features</span>
                      </div>
                      {isOfficialCollection ? (
                        <div className="p-2 bg-green-50 border border-green-200 rounded text-xs">
                          <span className="text-green-800 font-mono">
                            {CONTRACT_ADDRESSES.NFT_COLLECTION}
                          </span>
                        </div>
                      ) : (
                        <div className="p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
                          <span className="text-yellow-800">
                            Contract needs to be deployed first
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            </Label>

            {option.id === 'custom' && selectedCollection === 'custom' && (
              <div className="ml-6 mt-3 space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="custom-address">Contract Address</Label>
                  <Input
                    id="custom-address"
                    type="text"
                    placeholder="0x742C4B3F72CBf76D2DC072f0EBc76d7c49E4F8f3"
                    value={customInput}
                    onChange={(e) => handleCustomAddressChange(e.target.value)}
                    className={validationError ? 'border-red-500' : ''}
                  />
                  {validationError && (
                    <p className="text-sm text-red-600">{validationError}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    Enter the contract address of your existing NFT collection
                  </p>
                </div>

                {customInput && !validationError && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Make sure you own NFTs in this collection 
                      and that it's compatible with ERC721 standard.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </RadioGroup>

      {selectedCollection === 'updiamshad' && !isOfficialCollection && (
        <div className="p-4 bg-orange-50 border border-orange-200 rounded">
          <h4 className="font-medium text-orange-800 mb-2">Setup Required</h4>
          <p className="text-sm text-orange-700 mb-3">
            The official UpDiamShad NFT collection hasn't been deployed yet. 
            You can either:
          </p>
          <ul className="text-sm text-orange-700 space-y-1 ml-4">
            <li>• Deploy the contract using the provided scripts</li>
            <li>• Use your own existing NFT collection instead</li>
          </ul>
        </div>
      )}
    </div>
  );
}