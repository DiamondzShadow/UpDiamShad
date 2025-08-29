import { ExternalLink, Vote, Shield, Pickaxe, TrendingUp, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GovernancePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="border border-yellow-800 bg-yellow-950/20 rounded-lg p-4 mb-8">
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-yellow-400 mr-2" />
          <span className="text-yellow-300 font-semibold">Testnet Environment</span>
        </div>
        <p className="text-yellow-200 text-sm mt-2">
          These contracts are deployed on Diamond zChain testnet for development and testing purposes.
        </p>
      </div>

      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">DAO Governance</h1>
        <p className="text-gray-400">
          Purchase NFTs → Stake them → Earn governance tokens → Vote in DAO governance on Diamond zChain.
        </p>
      </div>

      <div className="border border-purple-800 bg-purple-950/20 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-300">How DAO Participation Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-green-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Music className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">1. Purchase NFT</h3>
            <p className="text-sm text-gray-400">Buy a Diamondz Digital Music NFT from the collection</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">2. Stake NFT</h3>
            <p className="text-sm text-gray-400">Stake your NFT in the Diamond zChain Stakes contract</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Pickaxe className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">3. Earn Tokens</h3>
            <p className="text-sm text-gray-400">Receive governance tokens from the Mine contract</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Vote className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">4. Vote in DAO</h3>
            <p className="text-sm text-gray-400">Use governance tokens to vote on proposals</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border border-green-800 bg-green-950/30 rounded-lg p-6">
          <Music className="h-8 w-8 text-green-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">Diamondz Digital Music</h2>
          <p className="text-gray-400 text-sm mb-4">
            Purchase music NFTs to gain access to DAO governance through staking.
          </p>
          <div className="bg-black/40 p-3 rounded-md mb-4">
            <div className="text-xs text-gray-500 mb-1">Contract Address</div>
            <div className="font-mono text-xs break-all text-green-300">0x37FFAd37b84d099afb43B6E01038843f26cD9F05</div>
          </div>
          <Link
            href="https://thirdweb.com/diamond-zchain/0x37FFAd37b84d099afb43B6E01038843f26cD9F05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-800 hover:bg-green-700 text-white rounded text-sm w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on ThirdWeb
            </Button>
          </Link>
        </div>

        <div className="border border-blue-800 bg-blue-950/30 rounded-lg p-6">
          <TrendingUp className="h-8 w-8 text-blue-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">Diamond zChain Stakes</h2>
          <p className="text-gray-400 text-sm mb-4">Stake your music NFTs to earn governance tokens continuously.</p>
          <div className="bg-black/40 p-3 rounded-md mb-4">
            <div className="text-xs text-gray-500 mb-1">Contract Address</div>
            <div className="font-mono text-xs break-all text-blue-300">0xBD20960E95673Ff7de09B47cB33581ED2CDc63a9</div>
          </div>
          <Link
            href="https://thirdweb.com/diamond-zchain/0xBD20960E95673Ff7de09B47cB33581ED2CDc63a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-800 hover:bg-blue-700 text-white rounded text-sm w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on ThirdWeb
            </Button>
          </Link>
        </div>

        <div className="border border-purple-800 bg-purple-950/30 rounded-lg p-6">
          <Pickaxe className="h-8 w-8 text-purple-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">DAO isLab Diamondz Mine</h2>
          <p className="text-gray-400 text-sm mb-4">
            Distributes governance tokens to NFT stakers based on contribution.
          </p>
          <div className="bg-black/40 p-3 rounded-md mb-4">
            <div className="text-xs text-gray-500 mb-1">Contract Address</div>
            <div className="font-mono text-xs break-all text-purple-300">
              0x9d89BCbd1d81413a8f6b15d7aBF8508A8a0F92a6
            </div>
          </div>
          <Link
            href="https://thirdweb.com/diamond-zchain/0x9d89BCbd1d81413a8f6b15d7aBF8508A8a0F92a6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-purple-800 hover:bg-purple-700 text-white rounded text-sm w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on ThirdWeb
            </Button>
          </Link>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Live DAO Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400 mb-4">
              The Diamondz Shadow DAO operates through three interconnected smart contracts on Diamond zChain testnet,
              enabling NFT-based governance where music NFT holders stake their assets to earn governance tokens.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Network:</span>
                <span className="text-primary">Diamond zChain (Chain ID: 150179125)</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Environment:</span>
                <span>Testnet</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Active Contracts:</span>
                <span>3 Live Contracts</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Explorer:</span>
                <a
                  href="https://thirdweb.com/diamond-zchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  <span>ThirdWeb Explorer</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-3">Contract Features</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Mining Rewards:</span>
                <span className="font-mono text-purple-300">Active</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">NFT Staking:</span>
                <span className="font-mono text-blue-300">Live</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Music NFTs:</span>
                <span className="font-mono text-green-300">Deployed</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Framework:</span>
                <span className="font-mono">ThirdWeb</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="font-mono text-yellow-300">Testnet</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">
          Explore the testnet DAO contracts on Diamond zChain and participate in the NFT-based governance system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://thirdweb.com/diamond-zchain" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Contracts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
