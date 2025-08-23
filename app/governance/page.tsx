import { Users, FileText, Check, ExternalLink, Vote, Clock, Shield, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GovernancePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Governance</h1>
        <p className="text-gray-400">On-chain governance system for the Diamondz Shadow ecosystem.</p>
      </div>

      <div className="border border-blue-800 bg-blue-950/30 rounded-lg p-4 mb-12">
        <div className="flex flex-col md:flex-row">
          <Info className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0 mb-2 md:mb-0" />
          <div>
            <h2 className="text-lg font-medium text-white mb-2">Governance Testnet Information</h2>
            <p className="text-sm text-blue-200 mb-3">
              The governance system is currently deployed on our testnet at address{" "}
              <code className="bg-blue-900/50 px-1 py-0.5 rounded break-all text-xs">
                0x336CC51bb9CDD5000C61F1a4569070327E39ba74
              </code>
              . While the contract is fully functional, the data displayed on this page includes mock proposals and
              statistics for demonstration purposes.
            </p>
            <p className="text-sm text-blue-200">
              At mainnet launch, this page will display live data directly from the blockchain, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-blue-200">
              <li>Real-time governance parameters fetched from the contract</li>
              <li>Actual proposals created by community members</li>
              <li>Live voting statistics and proposal states</li>
              <li>Accurate participation metrics and historical data</li>
            </ul>
            <div className="mt-4">
              <Link
                href="https://explorer-tdiamondz-chain-ilxp72z9o0.t.conduit.xyz/address/0x336CC51bb9CDD5000C61F1a4569070327E39ba74?tab=contract"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-800 hover:bg-blue-700 text-white rounded text-sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Contract on Explorer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Governance Contract</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-400 mb-4">
              The Diamondz Shadow governance system is powered by a VoteERC20 contract that enables token holders to
              propose and vote on changes to the protocol.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Contract Address:</span>
                <a
                  href="https://explorer-tdiamondz-chain-ilxp72z9o0.t.conduit.xyz/address/0x336CC51bb9CDD5000C61F1a4569070327E39ba74?tab=contract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-primary hover:underline text-xs break-all"
                >
                  0x336CC51bb9CDD5000C61F1a4569070327E39ba74
                </a>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Contract Type:</span>
                <span>VoteERC20</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Voting Token:</span>
                <span>SDM Token (ERC20)</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Explorer:</span>
                <a
                  href="https://explorer-tdiamondz-chain-ilxp72z9o0.t.conduit.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  <span>Diamondz Explorer</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
            <Link
              href="https://explorer-tdiamondz-chain-ilxp72z9o0.t.conduit.xyz/address/0x336CC51bb9CDD5000C61F1a4569070327E39ba74?tab=contract"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Contract on Explorer
              </Button>
            </Link>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-3">Governance Parameters</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Voting Delay:</span>
                <span className="font-mono">1 day (7200 blocks)</span>
                {/* MOCK DATA: Will be fetched from contract using votingDelay() function */}
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Voting Period:</span>
                <span className="font-mono">1 week (50400 blocks)</span>
                {/* MOCK DATA: Will be fetched from contract using votingPeriod() function */}
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Proposal Threshold:</span>
                <span className="font-mono">10,000 SDM</span>
                {/* MOCK DATA: Will be fetched from contract using proposalThreshold() function */}
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Quorum:</span>
                <span className="font-mono">10% of total supply</span>
                {/* MOCK DATA: Will be fetched from contract using quorumNumerator() function */}
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Implementation:</span>
                <span className="font-mono">OpenZeppelin Governor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border border-gray-800 rounded-lg p-6">
          <Users className="h-8 w-8 text-gray-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">Token-Based Voting</h2>
          <p className="text-gray-400 text-sm mb-4">
            SDM token holders vote on proposals with voting power proportional to their token holdings.
          </p>
          <div className="bg-black/40 p-3 rounded-md">
            <pre className="text-xs text-gray-300 overflow-x-auto">
              <code>{`// Voting Power Calculation
votingPower = sqrt(tokenBalance)

// Quadratic voting reduces plutocracy
// while maintaining stake-based influence`}</code>
            </pre>
          </div>
        </div>

        <div className="border border-gray-800 rounded-lg p-6">
          <FileText className="h-8 w-8 text-gray-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">Proposal System</h2>
          <p className="text-gray-400 text-sm mb-4">
            Formal on-chain proposal system for protocol changes, funding allocations, and production decisions.
          </p>
          <ul className="text-xs text-gray-400 list-disc pl-5 space-y-1">
            <li>Minimum 10,000 SDM to submit proposal</li>
            <li>1-day voting delay after submission</li>
            <li>1-week voting period</li>
            <li>Quorum requirement: 10% of circulating supply</li>
            <li>Majority threshold: 50% approval</li>
          </ul>
        </div>

        <div className="border border-gray-800 rounded-lg p-6">
          <Check className="h-8 w-8 text-gray-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">Execution</h2>
          <p className="text-gray-400 text-sm mb-4">
            Approved proposals are automatically executed through the governance contract.
          </p>
          <ul className="text-xs text-gray-400 list-disc pl-5 space-y-1">
            <li>Transparent execution tracking</li>
            <li>On-chain execution history</li>
            <li>Multi-signature security</li>
            <li>Timelock for critical changes</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Active Proposals</h2>
        {/* MOCK DATA: This entire table will be populated with live data from getAllProposals() */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-gray-900 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Proposer
                </th>
                <th scope="col" className="px-6 py-3">
                  Votes For
                </th>
                <th scope="col" className="px-6 py-3">
                  Votes Against
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-mono">DSP-007</td>
                <td className="px-6 py-4">Increase Production Budget Cap</td>
                <td className="px-6 py-4">Parameter</td>
                <td className="px-6 py-4 font-mono text-xs">0x7a...3f4d</td>
                <td className="px-6 py-4">62%</td>
                <td className="px-6 py-4">38%</td>
                <td className="px-6 py-4">
                  <span className="bg-green-900/20 text-green-500 px-2 py-1 rounded text-xs">Active</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <Link href="/governance/voting">
                      <Button variant="outline" size="sm" className="h-7 px-2 rounded-sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-mono">DSP-008</td>
                <td className="px-6 py-4">Add New Revenue Stream Integration</td>
                <td className="px-6 py-4">Integration</td>
                <td className="px-6 py-4 font-mono text-xs">0x3b...9e2a</td>
                <td className="px-6 py-4">78%</td>
                <td className="px-6 py-4">22%</td>
                <td className="px-6 py-4">
                  <span className="bg-green-900/20 text-green-500 px-2 py-1 rounded text-xs">Active</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <Link href="/governance/voting">
                      <Button variant="outline" size="sm" className="h-7 px-2 rounded-sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-mono">DSP-009</td>
                <td className="px-6 py-4">Modify Contribution Score Algorithm</td>
                <td className="px-6 py-4">Protocol</td>
                <td className="px-6 py-4 font-mono text-xs">0xf1...5c8b</td>
                <td className="px-6 py-4">45%</td>
                <td className="px-6 py-4">55%</td>
                <td className="px-6 py-4">
                  <span className="bg-green-900/20 text-green-500 px-2 py-1 rounded text-xs">Active</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <Link href="/governance/voting">
                      <Button variant="outline" size="sm" className="h-7 px-2 rounded-sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">VoteERC20 Contract</h2>
          <pre className="text-xs text-gray-300 overflow-x-auto bg-black p-3 rounded-md">
            <code>{`// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

contract VoteERC20 is
  Initializable,
  IThirdwebContract,
  ERC2771ContextUpgradeable,
  GovernorUpgradeable,
  GovernorSettingsUpgradeable,
  GovernorCountingSimpleUpgradeable,
  GovernorVotesUpgradeable,
  GovernorVotesQuorumFractionUpgradeable
{
  // Proposal structure
  struct Proposal {
      uint256 proposalId;
      address proposer;
      address[] targets;
      uint256[] values;
      string[] signatures;
      bytes[] calldatas;
      uint256 startBlock;
      uint256 endBlock;
      string description;
  }

  // Create a proposal
  function propose(
      address[] memory targets,
      uint256[] memory values,
      bytes[] memory calldatas,
      string memory description
  ) public virtual override returns (uint256 proposalId) {
      // Implementation details...
  }

  // Get all proposals
  function getAllProposals() external view returns (Proposal[] memory) {
      // Implementation details...
  }
}`}</code>
          </pre>
        </div>

        <div>
          <div className="border border-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">How Governance Works</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <Vote className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Proposal Creation</h3>
                  <p className="text-sm text-gray-400">
                    Any token holder with at least 10,000 SDM can create a proposal by calling the propose() function
                    with targets, values, calldatas, and a description.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Voting Period</h3>
                  <p className="text-sm text-gray-400">
                    After a 1-day delay, voting begins and remains open for 1 week. Token holders can vote for, against,
                    or abstain.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Execution</h3>
                  <p className="text-sm text-gray-400">
                    If the proposal passes (majority approval and quorum reached), it can be executed on-chain to
                    implement the changes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <Shield className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Security</h3>
                  <p className="text-sm text-gray-400">
                    The governance contract is based on OpenZeppelin's secure and audited Governor contracts, with
                    additional security measures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Governance Statistics</h2>
            {/* MOCK DATA: These statistics will be calculated from on-chain data */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1">Total Proposals</div>
                <div className="text-xl font-bold">42</div>
                {/* Will be calculated from getAllProposals().length */}
              </div>
              <div className="bg-black/40 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1">Participation Rate</div>
                <div className="text-xl font-bold">38.5%</div>
                {/* Will be calculated from voting data across all proposals */}
              </div>
              <div className="bg-black/40 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1">Proposals Passed</div>
                <div className="text-xl font-bold">31</div>
                {/* Will be calculated by filtering proposals by state */}
              </div>
              <div className="bg-black/40 p-3 rounded-md">
                <div className="text-xs text-gray-500 mb-1">Proposals Rejected</div>
                <div className="text-xl font-bold">11</div>
                {/* Will be calculated by filtering proposals by state */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-6">
          Learn more about our governance voting system and token delegation process.
        </p>
        <Link href="/governance/voting">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
            <Vote className="w-4 h-4 mr-2" />
            Voting System Details
          </Button>
        </Link>
      </div>
    </div>
  )
}
