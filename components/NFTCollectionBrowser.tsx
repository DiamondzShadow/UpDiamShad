'use client';

import { useState, useEffect } from 'react';
import { useActiveAccount } from 'thirdweb/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  detectUserCollections, 
  validateNFTContract, 
  getSuggestedCollections,
  type NFTCollection 
} from '../lib/nft-detection';
import { Wallet, Search, ExternalLink, RefreshCw } from 'lucide-react';

interface NFTCollectionBrowserProps {
  onSelectCollection: (address: string) => void;
  selectedAddress?: string;
}

export function NFTCollectionBrowser({ onSelectCollection, selectedAddress }: NFTCollectionBrowserProps) {
  const account = useActiveAccount();
  const [userCollections, setUserCollections] = useState<NFTCollection[]>([]);
  const [searchAddress, setSearchAddress] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    name?: string;
    symbol?: string;
    error?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const suggestedCollections = getSuggestedCollections();

  // Load user's collections on account change
  useEffect(() => {
    if (account) {
      loadUserCollections();
    } else {
      setUserCollections([]);
    }
  }, [account]);

  const loadUserCollections = async () => {
    if (!account) return;
    
    setIsLoading(true);
    try {
      const collections = await detectUserCollections(account);
      setUserCollections(collections);
    } catch (error) {
      console.error('Failed to load user collections:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddressSearch = async () => {
    if (!searchAddress.trim()) return;
    
    setIsValidating(true);
    setValidationResult(null);
    
    try {
      const result = await validateNFTContract(searchAddress.trim());
      setValidationResult(result);
      
      if (result.isValid) {
        onSelectCollection(searchAddress.trim());
      }
    } catch (error) {
      setValidationResult({
        isValid: false,
        error: 'Failed to validate contract'
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handleCollectionSelect = (address: string) => {
    onSelectCollection(address);
    setSearchAddress(address);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Browse NFT Collections</h3>
        <p className="text-sm text-gray-600">
          Find and select an NFT collection to list your tokens from
        </p>
      </div>

      {/* Search by Address */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search by Contract Address
          </CardTitle>
          <CardDescription>
            Enter a specific NFT contract address to validate and select
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="0x742C4B3F72CBf76D2DC072f0EBc76d7c49E4F8f3"
              value={searchAddress}
              onChange={(e) => setSearchAddress(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleAddressSearch} 
              disabled={isValidating || !searchAddress.trim()}
            >
              {isValidating ? 'Validating...' : 'Validate'}
            </Button>
          </div>
          
          {validationResult && (
            <div className={`mt-3 p-3 rounded ${
              validationResult.isValid 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              {validationResult.isValid ? (
                <div>
                  <p className="text-sm text-green-800">
                    ✅ Valid NFT contract found!
                  </p>
                  {validationResult.name && (
                    <p className="text-xs text-green-600 mt-1">
                      {validationResult.name} ({validationResult.symbol})
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-sm text-red-800">
                  ❌ {validationResult.error}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* User's Collections */}
      {account && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  Your NFT Collections
                </CardTitle>
                <CardDescription>
                  Collections where you own NFTs
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={loadUserCollections}
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-sm text-gray-600">Loading your collections...</p>
              </div>
            ) : userCollections.length > 0 ? (
              <div className="space-y-2">
                {userCollections.map((collection) => (
                  <div
                    key={collection.address}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedAddress === collection.address
                        ? 'border-primary bg-primary/5'
                        : 'hover:border-gray-300'
                    }`}
                    onClick={() => handleCollectionSelect(collection.address)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-sm">
                          {collection.name || 'Unknown Collection'}
                        </p>
                        <p className="text-xs text-gray-500 font-mono">
                          {collection.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">
                          {collection.balance} NFT{collection.balance !== 1 ? 's' : ''}
                        </Badge>
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <Wallet className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">No NFT collections found</p>
                <p className="text-xs text-gray-500">
                  Collections will appear here once you own NFTs
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Suggested Collections */}
      {suggestedCollections.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Popular Collections</CardTitle>
            <CardDescription>
              Verified and popular NFT collections on Diamondz
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {suggestedCollections.map((collection) => (
                <div
                  key={collection.address}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedAddress === collection.address
                      ? 'border-primary bg-primary/5'
                      : 'hover:border-gray-300'
                  }`}
                  onClick={() => handleCollectionSelect(collection.address)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{collection.name}</p>
                      <p className="text-xs text-gray-600">{collection.description}</p>
                      <p className="text-xs text-gray-500 font-mono mt-1">
                        {collection.address}
                      </p>
                    </div>
                    <Badge variant="outline">Verified</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {!account && (
        <div className="text-center py-8">
          <Wallet className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Connect Your Wallet</h3>
          <p className="text-gray-600">
            Connect your wallet to see your NFT collections and browse available options
          </p>
        </div>
      )}
    </div>
  );
}
