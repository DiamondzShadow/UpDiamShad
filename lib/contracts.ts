import { createThirdwebClient, defineChain, getContract } from "thirdweb";
import { ThirdwebContract } from "thirdweb";

// ThirdWeb Client Configuration
export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "demo-client-id",
});

// Diamondz Custom Chain Configuration
export const diamondzChain = defineChain({
  id: 150179125,
  name: "Diamondz",
  rpc: "https://rpc-testnet.diamondz.baby/",
  blockExplorers: [
    {
      name: "Diamondz Explorer",
      url: "https://diamondz-zslab-testnet.tryethernal.com/",
      apiUrl: "https://diamondz-zslab-testnet.tryethernal.com/api",
    },
  ],
  testnet: true,
});

// Contract Addresses (Update with your deployed contract addresses)
export const CONTRACT_ADDRESSES = {
  MARKETPLACE: "0x19EcA4891c8F5828e9B1a995D910eBb1326a6Eab",
  NFT_COLLECTION: "0xABec8F65f90cec61372B2Aa72641921C375a1FDe", // Replace with your NFT contract address
} as const;

// Contract Instances
export const getMarketplaceContract = (): ThirdwebContract => {
  return getContract({
    client,
    chain: diamondzChain,
    address: CONTRACT_ADDRESSES.MARKETPLACE,
  });
};

export const getNFTContract = (): ThirdwebContract => {
  return getContract({
    client,
    chain: diamondzChain,
    address: CONTRACT_ADDRESSES.NFT_COLLECTION,
  });
};

// Contract validation
export const validateContracts = () => {
  const issues: string[] = [];

  if (!process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID) {
    issues.push("Missing NEXT_PUBLIC_THIRDWEB_CLIENT_ID");
  }

  if (CONTRACT_ADDRESSES.NFT_COLLECTION.includes("...")) {
    issues.push("NFT contract address needs to be set");
  }

  if (CONTRACT_ADDRESSES.MARKETPLACE.includes("...")) {
    issues.push("Marketplace contract address needs to be set");
  }

  return issues;
};
