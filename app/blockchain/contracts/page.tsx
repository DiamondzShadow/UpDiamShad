"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CopyButton from "@/components/copy-button"

export default function ContractsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Diamondz Shadow Contracts</h1>
        <p className="text-gray-400">
          Technical details and addresses for the smart contracts deployed on the Diamondz Shadow chain.
        </p>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Chain Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Chain Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Slug:</span>
                <code className="bg-gray-800 px-2 py-0.5 rounded text-sm">Diamondz - zLab testnet</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Chain ID:</span>
                <code className="bg-gray-800 px-2 py-0.5 rounded text-sm">150179125</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Framework:</span>
                <span>Arbitrum Orbit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Currency Symbol:</span>
                <span>zsLab</span>
              </div>
            </div>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">RPC Endpoint</h3>
            <div className="text-sm text-gray-400 break-all">
              <a
                href="https://rpc-testnet.diamondz.baby"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://rpc-testnet.diamondz.baby
              </a>
            </div>
            <div className="mt-4">
              <CopyButton text="https://rpc-testnet.diamondz.baby" label="Copy RPC URL" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Contract Addresses</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-gray-900 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Contract
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-medium">YouTube Adapter</td>
                <td className="px-6 py-4 font-mono text-xs">0xD08e5d2BcB7c9921063C11718d35c5b35e8f489c</td>
                <td className="px-6 py-4">
                  <CopyButton text="0xD08e5d2BcB7c9921063C11718d35c5b35e8f489c" />
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-medium">YouTube Oracle</td>
                <td className="px-6 py-4 font-mono text-xs">0x5b07a733eB9D670b997CbfF1d0af56fC9154EA60</td>
                <td className="px-6 py-4">
                  <CopyButton text="0x5b07a733eB9D670b997CbfF1d0af56fC9154EA60" />
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-medium">Token (tDIAM)</td>
                <td className="px-6 py-4 font-mono text-xs">0x0e5BDba7B52f7ed1245DaCC9E1105792856ca3df</td>
                <td className="px-6 py-4">
                  <CopyButton text="0x0e5BDba7B52f7ed1245DaCC9E1105792856ca3df" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Wallet Addresses</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-gray-900 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-6 py-4 font-medium">Deployer/Admin</td>
                <td className="px-6 py-4 font-mono text-xs">0x943F795b9F06E63b11adeb1fF3784247e2F6641C</td>
                <td className="px-6 py-4">
                  <CopyButton text="0x943F795b9F06E63b11adeb1fF3784247e2F6641C" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
        <div className="border border-gray-800 rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">YouTube Adapter Contract</h3>
          <p className="text-gray-400 text-sm mb-4">Connects YouTube contributions to on-chain rewards</p>
          <h4 className="font-bold text-sm mb-2">Key Functions:</h4>
          <ul className="text-xs md:text-sm text-gray-400 list-disc pl-4 md:pl-5 space-y-1 mb-4">
            <li>
              <code>linkChannel</code>: Links a YouTube channel to a wallet address
            </li>
            <li>
              <code>verifyContribution</code>: Verifies and rewards contributions
            </li>
            <li>
              <code>getUserContributions</code>: Gets user contribution counts
            </li>
            <li>
              <code>getUserTotalRewards</code>: Gets total rewards earned by a user
            </li>
          </ul>
          <div className="mt-4">
            <CopyButton
              text="0xD08e5d2BcB7c9921063C11718d35c5b35e8f489c"
              variant="outline"
              fullWidth={true}
              codeIcon={true}
              label="Copy Contract Address"
            />
          </div>
        </div>

        <div className="border border-gray-800 rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">YouTube Oracle Contract</h3>
          <p className="text-gray-400 text-sm mb-4">Verifies YouTube data and sends it to the adapter</p>
          <h4 className="font-bold text-sm mb-2">Key Functions:</h4>
          <ul className="text-xs md:text-sm text-gray-400 list-disc pl-4 md:pl-5 space-y-1 mb-4">
            <li>
              <code>processContribution</code>: Processes YouTube contributions
            </li>
            <li>
              <code>updateThreshold</code>: Updates verification thresholds
            </li>
            <li>
              <code>updateAdapter</code>: Updates the YouTube adapter address
            </li>
          </ul>
          <div className="mt-4">
            <CopyButton
              text="0x5b07a733eB9D670b997CbfF1d0af56fC9154EA60"
              variant="outline"
              fullWidth={true}
              codeIcon={true}
              label="Copy Contract Address"
            />
          </div>
        </div>

        <div className="border border-gray-800 rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Token Contract (tDIAM)</h3>
          <p className="text-gray-400 text-sm mb-4">ERC20 token used for rewards</p>
          <h4 className="font-bold text-sm mb-2">Key Functions:</h4>
          <ul className="text-xs md:text-sm text-gray-400 list-disc pl-4 md:pl-5 space-y-1 mb-4">
            <li>Standard ERC20 functions (transfer, balanceOf, etc.)</li>
            <li>
              <code>mint</code>: Creates new tokens (MINTER_ROLE only)
            </li>
            <li>
              <code>burn</code>: Destroys tokens (BURNER_ROLE only)
            </li>
          </ul>
          <div className="mt-4">
            <CopyButton
              text="0x0e5BDba7B52f7ed1245DaCC9E1105792856ca3df"
              variant="outline"
              fullWidth={true}
              codeIcon={true}
              label="Copy Contract Address"
            />
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Contract Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="text-sm text-gray-400 list-disc pl-5 space-y-3">
              <li>
                <strong className="text-white">ORACLE_ROLE</strong>: Granted to the Oracle contract to call the Adapter
              </li>
              <li>
                <strong className="text-white">ADMIN_ROLE</strong>: Granted to the deployer address
              </li>
              <li>
                <strong className="text-white">MINTER_ROLE</strong>: Ability to mint new tokens
              </li>
              <li>
                <strong className="text-white">BURNER_ROLE</strong>: Ability to burn tokens
              </li>
              <li>
                <strong className="text-white">DATA_PROVIDER_ROLE</strong>: Ability to provide data to the Oracle
              </li>
            </ul>
          </div>
          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Other Important Information</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-400">YouTube Channel ID:</span>
                <code className="bg-gray-800 px-2 py-0.5 rounded ml-2">UC***************************</code>
              </div>
              <div>
                <span className="text-gray-400">Dashboard URL:</span>
                <a
                  href="https://diamondzshadowscan.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-2"
                >
                  diamondzshadowscan.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link href="/blockchain/interact">
          <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded mr-4">
            <ExternalLink className="w-4 h-4 mr-2" />
            Interact with Contracts
          </Button>
        </Link>
        <Link href="/integrations/youtube-adapter">
          <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded">
            <ExternalLink className="w-4 h-4 mr-2" />
            Back to YouTube Adapter
          </Button>
        </Link>
      </div>
    </div>
  )
}
