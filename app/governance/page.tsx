"use client"

import { useState } from "react"

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg">
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <h2 className="text-2xl font-semibold text-gray-900">{value}</h2>
    </div>
  )
}

function ProposalCard({
  proposal,
  canVote,
}: {
  proposal: any
  canVote: boolean
}) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg mb-4">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{proposal.title}</h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Active</span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Support: {proposal.forVotes.toLocaleString()} votes</span>
          <span>Against: {proposal.againstVotes.toLocaleString()} votes</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gray-800 h-2 rounded-full" style={{ width: `${proposal.forPct}%` }} />
        </div>
      </div>

      {canVote ? (
        <div className="flex gap-3">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
            Support
          </button>
          <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded text-sm font-medium transition-colors">
            Against
          </button>
        </div>
      ) : (
        <div className="text-gray-500 text-sm bg-gray-50 p-3 rounded">
          Voting requires DAO governance tokens from staking Music NFTs
        </div>
      )}
    </div>
  )
}

export default function Governance() {
  const [proposals] = useState<any[]>([
    {
      id: 1,
      title: "DZP-001: Upgrade Music NFT Staking Rewards Algorithm",
      forVotes: 2847,
      againstVotes: 521,
      forPct: 84.5,
      againstPct: 15.5,
    },
    {
      id: 2,
      title: "DZP-002: Implement Diamond zChain Bridge to Ethereum Mainnet",
      forVotes: 2234,
      againstVotes: 1156,
      forPct: 65.9,
      againstPct: 34.1,
    },
    {
      id: 3,
      title: "DZP-003: Expand Diamondz Digital Music Collection Royalty Distribution",
      forVotes: 1967,
      againstVotes: 1834,
      forPct: 51.7,
      againstPct: 48.3,
    },
    {
      id: 4,
      title: "DZP-004: Launch Scam Mercenaries Game Rewards Integration",
      forVotes: 1543,
      againstVotes: 892,
      forPct: 63.4,
      againstPct: 36.6,
    },
  ])

  const contracts = {
    musicNFT: "0x37FFAd37b84d099afb43B6E01038843f26cD9F05",
    stakes: "0x9d89BCbd1d81413a8f6b15d7aBF8508A8a0F92a6",
    daoToken: "0xBD20960E95673Ff7de09B47cB33581ED2CDc63a9",
    dao: "0xAD436B7CF855571F3d805E666C2a7d58cdD3486A",
  }

  const userStats = {
    stakedNFTs: 0,
    daoTokenBalance: 0,
    canVote: false,
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 min-h-screen">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Diamondz DAO Governance</h1>
        <p className="text-lg text-gray-600">Participate in protocol governance through Music NFT staking</p>
      </header>

      <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Governance System Status</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800 font-medium mb-2">Development Phase</p>
            <p className="text-yellow-700 text-sm">
              Staking portals and governance functionality are currently in development. Music NFTs are available for
              purchase, but staking and voting features will be activated soon.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Governance Participation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">How to Participate (Coming Soon)</h3>
            <ol className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">1</span>
                Purchase Music NFTs from Diamondz Digital Music
              </li>
              <li className="flex items-start">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">2</span>
                Stake NFTs in Diamond zChain Stakes contract
              </li>
              <li className="flex items-start">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">3</span>
                Receive governance tokens automatically
              </li>
              <li className="flex items-start">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">4</span>
                Vote on proposals using your tokens
              </li>
            </ol>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3">Your Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Staked NFTs</span>
                <span className="font-medium">{userStats.stakedNFTs}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Governance Tokens</span>
                <span className="font-medium">{userStats.daoTokenBalance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Voting Status</span>
                <span className={`font-medium ${userStats.canVote ? "text-green-600" : "text-gray-400"}`}>
                  {userStats.canVote ? "Eligible" : "Not Eligible"}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href={`https://thirdweb.com/diamond-zchain/${contracts.musicNFT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Get Music NFTs
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Proposed Governance Framework</h2>
          <span className="text-sm text-gray-500">Preview</span>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-sm">
            <strong>Preview:</strong> These are example proposals that demonstrate the governance framework once staking
            is live.
          </p>
        </div>

        {proposals.map((p) => (
          <ProposalCard key={p.id} proposal={p} canVote={userStats.canVote} />
        ))}
      </section>
    </div>
  )
}
