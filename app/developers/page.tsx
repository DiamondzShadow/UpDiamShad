import { Code, BookOpen, FileCode, Terminal, Youtube, Package, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DevelopersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Build on Diamondz Shadow</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Develop secure and scalable decentralized applications using Solidity on the Diamondz Shadow blockchain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <Code className="h-8 w-8 text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-2">Smart Contracts</h2>
          <p className="text-gray-400 mb-4">
            Build and deploy smart contracts using Solidity, the industry-standard language for blockchain development.
          </p>
          <pre className="bg-black p-4 rounded-md text-sm overflow-x-auto mb-4">
            <code className="text-gray-300">
              {`// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract DiamondShadow {
  string public greeting = "Hello from Diamondz Shadow!";
  
  function setGreeting(string memory _greeting) public {
      greeting = _greeting;
  }
  
  function getGreeting() public view returns (string memory) {
      return greeting;
  }
}`}
            </code>
          </pre>
          <Link href="/white-paper">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
              <FileCode className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
          </Link>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <Terminal className="h-8 w-8 text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-2">Developer Tools</h2>
          <p className="text-gray-400 mb-4">
            Access a comprehensive suite of tools for building, testing, and deploying your dApps on Diamondz Shadow.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                <Code className="h-3 w-3 text-primary" />
              </div>
              <span>Shadow IDE - Integrated development environment for Solidity</span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                <Code className="h-3 w-3 text-primary" />
              </div>
              <span>Shadow CLI - Command-line interface for deploying contracts</span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                <Code className="h-3 w-3 text-primary" />
              </div>
              <span>Shadow SDK - Software development kit for building dApps</span>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                <Code className="h-3 w-3 text-primary" />
              </div>
              <span>Shadow Testnet - Test your dApps before deploying to mainnet</span>
            </li>
          </ul>
          <p className="text-gray-400 text-sm italic">Tools will be available after mainnet launch</p>
        </div>
      </div>

      {/* Testnet Specifications - NEW SECTION */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-4">Testnet Specifications</h2>
        <p className="text-gray-400 mb-6">Connect to our testnet to start building and testing your applications:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-primary">Network Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Network Name:</span>
                <span className="font-mono text-sm">Diamondz - zLab testnet</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Chain ID:</span>
                <span className="font-mono text-sm">150179125</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Network Type:</span>
                <span className="font-mono text-sm">Arbitrum Orbit</span>
              </div>
            </div>
          </div>

          <div className="bg-black/50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4 text-primary">RPC Configuration</h3>
            <div className="space-y-3">
              <div>
                <span className="text-gray-400 block mb-1">RPC URL:</span>
                <code className="bg-black p-2 rounded text-xs block break-all">https://rpc-testnet.diamondz.baby</code>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Currency Symbol:</span>
                <span className="font-mono text-sm">zsLab</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Adapter Developer Tools - NEW SECTION */}
      <div className="border border-gray-800 rounded-lg p-6 mb-16">
        <div className="flex items-center mb-4">
          <Youtube className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-2xl font-bold">YouTube Adapter Developer Tools</h2>
          <div className="ml-3 bg-yellow-900/20 text-yellow-500 px-2 py-1 rounded text-xs">BETA</div>
        </div>

        <p className="text-gray-400 mb-6">
          Integrate your applications with the Diamondz Shadow YouTube Adapter using our specialized developer tools.
          These tools are currently in beta and pending verification on our marketplace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-black/40 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Terminal className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-bold">YouTube Adapter CLI</h3>
              <div className="ml-3 bg-blue-900/20 text-blue-500 px-2 py-1 rounded text-xs">Pending Verification</div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Command-line interface for interacting with the YouTube Adapter contract. Manage channel connections,
              verify metrics, and monitor rewards directly from your terminal.
            </p>
            <pre className="bg-black p-3 rounded-md text-xs overflow-x-auto mb-4">
              <code className="text-gray-300">
                {`# Install the CLI
npm install -g @diamondz-shadow/youtube-cli

# Connect your YouTube channel
youtube-adapter connect --channel-id YOUR_CHANNEL_ID --wallet YOUR_WALLET

# Check metrics and rewards
youtube-adapter metrics --channel-id YOUR_CHANNEL_ID`}
              </code>
            </pre>
            <div className="flex items-center text-xs text-gray-500 mb-4">
              <Shield className="h-3 w-3 mr-1" />
              <span>Security audit in progress. Use at your own risk until verified.</span>
            </div>
            <p className="text-xs text-gray-400 italic">Beta CLI will be available after verification</p>
          </div>

          <div className="bg-black/40 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Package className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-bold">YouTube Adapter SDK</h3>
              <div className="ml-3 bg-blue-900/20 text-blue-500 px-2 py-1 rounded text-xs">Pending Verification</div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              JavaScript/TypeScript SDK for integrating YouTube Adapter functionality into your applications. Provides
              typed interfaces and helper methods for all adapter features.
            </p>
            <pre className="bg-black p-3 rounded-md text-xs overflow-x-auto mb-4">
              <code className="text-gray-300">
                {`// Install the SDK
npm install @diamondz-shadow/youtube-sdk

// Import and initialize
import { YouTubeAdapter } from '@diamondz-shadow/youtube-sdk';

const adapter = new YouTubeAdapter({
  rpcUrl: 'https://rpc-testnet.diamondz.baby',
  privateKey: process.env.PRIVATE_KEY // Your wallet's private key (keep secure!)
});

// IMPORTANT: Never hardcode private keys or commit them to repositories
// Store them securely in environment variables or a vault service
`}
              </code>
            </pre>
            <div className="flex items-center text-xs text-gray-500 mb-4">
              <Shield className="h-3 w-3 mr-1" />
              <span>Security audit in progress. Use at your own risk until verified.</span>
            </div>
            <p className="text-xs text-gray-400 italic">Beta SDK will be available after verification</p>
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Important Notice for Developers</h3>
          <p className="text-sm text-gray-400 mb-3">
            Both the CLI and SDK are currently in beta and pending verification on our marketplace. Once approved, the
            following benefits will be available:
          </p>
          <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
            <li>Fully audited code with security guarantees</li>
            <li>Official support and documentation</li>
            <li>Production-ready reliability</li>
            <li>Automatic updates and vulnerability patches</li>
            <li>Access to premium features like batch processing and advanced analytics</li>
          </ul>
          <div className="mt-4">
            <Link href="/integrations/youtube-adapter">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                <Shield className="w-4 h-4 mr-2" />
                Learn More About YouTube Adapter
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <p className="text-gray-400 mb-6">Follow these steps to start building on Diamondz Shadow:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/50 p-4 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Set Up Your Environment</h3>
            <p className="text-sm text-gray-400">
              Install the Shadow CLI and SDK to prepare your development environment.
            </p>
          </div>

          <div className="bg-black/50 p-4 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Write Your Smart Contract</h3>
            <p className="text-sm text-gray-400">Create your smart contract using Solidity and the Shadow IDE.</p>
          </div>

          <div className="bg-black/50 p-4 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Deploy and Test</h3>
            <p className="text-sm text-gray-400">
              Deploy your contract to the Shadow Testnet and test its functionality.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Build?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Join our developer community and start building the next generation of decentralized applications on Diamondz
          Shadow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blockchain/contracts">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
              <Terminal className="w-4 h-4 mr-2" />
              View Contracts
            </Button>
          </Link>
          <Link href="/white-paper">
            <Button variant="outline" className="rounded-full bg-transparent">
              <BookOpen className="w-4 h-4 mr-2" />
              Read Documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
