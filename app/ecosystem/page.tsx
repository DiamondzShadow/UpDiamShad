import { Code, Database, Shield, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EcosystemPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Technical Architecture</h1>
        <p className="text-gray-400">
          Detailed overview of the Diamondz Shadow blockchain architecture and implementation.
        </p>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Layer 3 Implementation</h2>
        <p className="text-gray-400 mb-6">
          Diamondz Shadow is built as a Layer 3 blockchain with AnyTrust data availability, settling on Arbitrum for
          enhanced scalability and reduced costs while maintaining security.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 p-4 rounded-lg">
            <Shield className="h-6 w-6 text-gray-400 mb-3" />
            <h3 className="font-bold mb-2">Trust Layer</h3>
            <p className="text-sm text-gray-400">
              Security and trust infrastructure provided by{" "}
              <a
                href="https://www.hirulelabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Hirule Labs
              </a>
              , specializing in blockchain security solutions.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <Database className="h-6 w-6 text-gray-400 mb-3" />
            <h3 className="font-bold mb-2">Data Availability</h3>
            <p className="text-sm text-gray-400">
              AnyTrust data availability layer ensuring efficient data posting with reduced costs and high throughput.
            </p>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <Code className="h-6 w-6 text-gray-400 mb-3" />
            <h3 className="font-bold mb-2">Settlement Layer</h3>
            <p className="text-sm text-gray-400">
              Settles on Arbitrum for fast finality and cost-effective transaction processing with EVM compatibility.
            </p>
          </div>
        </div>
      </div>

      {/* YouTube Adapter Section */}
      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <div className="flex items-center mb-4">
          <Youtube className="h-6 w-6 text-gray-400 mr-2" />
          <h2 className="text-2xl font-bold">YouTube Adapter</h2>
        </div>
        <p className="text-gray-400 mb-6">
          The YouTube Adapter is a core component that connects real-world YouTube metrics to on-chain token economics
          through Chainlink oracles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Key Features</h3>
            <ul className="space-y-2 text-sm text-gray-400 list-disc pl-5">
              <li>Automated YouTube metrics collection via API</li>
              <li>Chainlink oracle integration for secure data feeds</li>
              <li>Algorithmic token minting/burning based on performance</li>
              <li>Staking rewards distribution tied to channel growth</li>
              <li>Configurable parameters for different channel types</li>
            </ul>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Workflow</h3>
            <ol className="space-y-2 text-sm text-gray-400 list-decimal pl-5">
              <li>Fetch YouTube metrics (views, subscribers, engagement)</li>
              <li>Process data through Chainlink oracle network</li>
              <li>Execute smart contract to determine token actions</li>
              <li>Mint tokens when metrics improve, burn when they decline</li>
              <li>Distribute rewards to stakers based on contribution score</li>
            </ol>
          </div>
        </div>

        <Link href="/integrations/youtube-adapter">
          <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded">
            View Full YouTube Adapter Documentation
          </Button>
        </Link>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Proof of Contribution</h2>
        <div className="bg-black/40 p-6 rounded-lg mb-6">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`// Proof of Contribution Consensus Algorithm
1. Contribution Metrics Collection
   - Content creation
   - Governance participation
   - Community engagement
   - Technical contributions

2. Contribution Score Calculation
   score = Σ(metric_i * weight_i) for all metrics i

3. Validator Selection
   probability_of_selection ∝ contribution_score

4. Block Production
   - Selected validator produces block
   - Block includes transactions and state transitions
   - Block is submitted to L1 for verification

5. Reward Distribution
   rewards = base_reward * (contribution_score / total_contribution_score)`}</code>
          </pre>
        </div>

        <p className="text-gray-400 mb-6">
          The Proof of Contribution consensus mechanism rewards users based on their contributions to the ecosystem
          rather than computational power or token holdings. This ensures that value flows to those who actively
          participate in and improve the ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-800 rounded-lg p-4">
            <h3 className="font-bold mb-2">Advantages</h3>
            <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
              <li>Energy efficient compared to Proof of Work</li>
              <li>More inclusive than pure Proof of Stake</li>
              <li>Aligns incentives with ecosystem growth</li>
              <li>Resistant to wealth concentration</li>
              <li>Encourages active participation</li>
            </ul>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <h3 className="font-bold mb-2">Implementation Challenges</h3>
            <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
              <li>Objective measurement of contributions</li>
              <li>Sybil resistance in contribution tracking</li>
              <li>Balancing different contribution types</li>
              <li>Preventing gaming of the system</li>
              <li>Maintaining decentralization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Smart Contract Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="border border-gray-800 rounded-lg p-4 mb-6">
              <h3 className="font-bold mb-2">Core Contracts</h3>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                <li>
                  <code>zsLabToken.sol</code> - ERC-20 implementation
                </li>
                <li>
                  <code>Governance.sol</code> - Voting and proposal system
                </li>
                <li>
                  <code>MovieFactory.sol</code> - Production management
                </li>
                <li>
                  <code>RevenueDistributor.sol</code> - Revenue tracking
                </li>
                <li>
                  <code>ContributionTracker.sol</code> - PoC implementation
                </li>
                <li>
                  <code>NFTMarketplace.sol</code> - NFT minting and trading
                </li>
                <li>
                  <code>YouTubeAdapter.sol</code> - YouTube metrics integration
                </li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="font-bold mb-2">Contract Interactions</h3>
              <p className="text-sm text-gray-400 mb-2">
                The contracts interact through a modular architecture with clear separation of concerns:
              </p>
              <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                <li>Governance controls MovieFactory parameters</li>
                <li>MovieFactory creates Production contracts</li>
                <li>Production contracts interact with RevenueDistributor</li>
                <li>ContributionTracker monitors all on-chain activity</li>
                <li>NFTMarketplace links to Production contracts</li>
                <li>YouTubeAdapter feeds metrics to RevenueDistributor</li>
              </ul>
            </div>
          </div>

          <div className="bg-black rounded-md p-4">
            <pre className="text-sm text-gray-300 overflow-x-auto h-full">
              <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract zsLabToken is ERC20, Ownable {
    // Token parameters
    uint256 public constant MAX_SUPPLY = 5_000_000_000 * 10**18;
    
    // Contribution tracking
    mapping(address => uint256) public contributionScores;
    
    constructor() ERC20("Diamondz Shadow", "zsLab") {
        // Initial distribution
        _mint(msg.sender, 4_000_000_000 * 10**18);
    }
    
    // Mint new tokens based on contributions
    function mintForContribution(
        address contributor, 
        uint256 amount
    ) external onlyOwner {
        require(
            totalSupply() + amount <= MAX_SUPPLY, 
            "Exceeds max supply"
        );
        _mint(contributor, amount);
    }
    
    // Update contribution score
    function updateContributionScore(
        address contributor, 
        uint256 newScore
    ) external onlyOwner {
        contributionScores[contributor] = newScore;
    }
    
    // Additional functions for governance, staking, etc.
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-2">Blockchain Parameters</h3>
            <table className="w-full text-sm text-gray-400">
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Block Time</td>
                  <td className="py-2">2 seconds</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Transaction Throughput</td>
                  <td className="py-2">~1,000 TPS</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Gas Model</td>
                  <td className="py-2">EIP-1559 compatible</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Finality</td>
                  <td className="py-2">250ms</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">State Growth</td>
                  <td className="py-2">Pruned history</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">Explorer</td>
                  <td className="py-2">
                    <a
                      href="https://diamondz-zslab-testnet.tryethernal.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Testnet Explorer
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-bold mb-2">Token Economics</h3>
            <table className="w-full text-sm text-gray-400">
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Token Standard</td>
                  <td className="py-2">ERC-20</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Total Supply</td>
                  <td className="py-2">5,000,000,000 SDM</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Minted Supply</td>
                  <td className="py-2">4,000,000,000 SDM</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 font-mono">Proof of Contribution</td>
                  <td className="py-2">1,000,000,000 SDM</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">Utility</td>
                  <td className="py-2">Governance, Staking, Payments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
