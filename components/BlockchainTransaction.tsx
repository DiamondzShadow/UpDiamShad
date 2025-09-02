"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Send, 
  Wallet, 
  Shield, 
  ArrowRight,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { WalletInfo } from '@/lib/auth';
import { useWalletSelector } from '@/hooks/useWalletSelector';
import { useNotifications } from '@/hooks/useNotifications';
import WalletSelector from '@/components/WalletSelector';

interface BlockchainTransactionProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BlockchainTransaction({ isOpen, onClose }: BlockchainTransactionProps) {
  const [selectedWallet, setSelectedWallet] = useState<WalletInfo | null>(null);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const walletSelector = useWalletSelector();
  const { showSuccess, showError } = useNotifications();

  const handleSelectWallet = async () => {
    const wallet = await walletSelector.selectWalletForTransaction();
    if (wallet) {
      setSelectedWallet(wallet);
      showSuccess('Wallet Selected', `Using ${wallet.label} for this transaction.`);
    }
  };

  const handleTransaction = async () => {
    if (!selectedWallet) {
      showError('No Wallet Selected', 'Please select a wallet to proceed with the transaction.');
      return;
    }

    if (!recipientAddress || !amount) {
      showError('Missing Information', 'Please fill in recipient address and amount.');
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate transaction processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showSuccess(
        'Transaction Sent', 
        `Successfully sent ${amount} ETH from ${selectedWallet.label} to ${recipientAddress.slice(0, 6)}...${recipientAddress.slice(-4)}`
      );
      
      // Reset form
      setSelectedWallet(null);
      setRecipientAddress('');
      setAmount('');
      onClose();
    } catch (error) {
      showError('Transaction Failed', 'There was an error processing your transaction. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-black border-gray-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Send Transaction
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Wallet Selection */}
            <div className="space-y-3">
              <Label>Transaction Wallet</Label>
              {selectedWallet ? (
                <div className="p-3 border border-gray-800 rounded-lg bg-gray-900/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wallet className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">
                        {selectedWallet.label}
                      </p>
                      <p className="text-sm text-gray-400 font-mono">
                        {formatAddress(selectedWallet.address)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedWallet.isVerified && (
                      <Shield className="h-4 w-4 text-green-400" />
                    )}
                    <Button
                      onClick={handleSelectWallet}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-800"
                    >
                      Change
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={handleSelectWallet}
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-800 h-12"
                >
                  <Wallet className="h-5 w-5 mr-2" />
                  Select Wallet
                </Button>
              )}
            </div>

            {/* Transaction Details */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient Address</Label>
                <Input
                  id="recipient"
                  placeholder="0x..."
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount (ETH)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Security Notice */}
            {selectedWallet && !selectedWallet.isVerified && (
              <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-yellow-400 text-sm font-medium">
                      Unverified Wallet
                    </p>
                    <p className="text-yellow-300 text-xs">
                      This wallet hasn't been verified. For security, consider verifying it before large transactions.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Transaction Summary */}
            {selectedWallet && recipientAddress && amount && (
              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-3">
                <h4 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Transaction Summary
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">From:</span>
                    <span className="font-mono text-white">
                      {formatAddress(selectedWallet.address)}
                    </span>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">To:</span>
                    <span className="font-mono text-white">
                      {formatAddress(recipientAddress)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Amount:</span>
                    <span className="font-semibold text-white">
                      {amount} ETH
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={onClose}
                variant="outline"
                className="flex-1 border-gray-600 text-white hover:bg-gray-800"
                disabled={isProcessing}
              >
                Cancel
              </Button>
              <Button
                onClick={handleTransaction}
                className="flex-1 bg-white text-black hover:bg-gray-200"
                disabled={!selectedWallet || !recipientAddress || !amount || isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Processing...
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Transaction
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <WalletSelector
        isOpen={walletSelector.isOpen}
        onClose={walletSelector.handleClose}
        onSelectWallet={walletSelector.handleSelectWallet}
        title={walletSelector.options.title}
        description={walletSelector.options.description}
        showOnlyVerified={walletSelector.options.showOnlyVerified}
      />
    </>
  );
}

export default BlockchainTransaction;