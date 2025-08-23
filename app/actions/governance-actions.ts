"use server"

import { ethers } from "ethers"

// ABI for the VoteERC20 contract (simplified for this example)
const governanceAbi = [
  "function votingDelay() view returns (uint256)",
  "function votingPeriod() view returns (uint256)",
  "function proposalThreshold() view returns (uint256)",
  "function quorumNumerator() view returns (uint256)",
  "function getAllProposals() view returns (tuple(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 startBlock, uint256 endBlock, string description)[])",
  "function state(uint256 proposalId) view returns (uint8)",
  "function getVotes(address account, uint256 blockNumber) view returns (uint256)",
]

// Contract address
const CONTRACT_ADDRESS = "0x336CC51bb9CDD5000C61F1a4569070327E39ba74"

// RPC URL
const RPC_URL = "https://rpc-tdiamondz-chain-ilxp72z9o0.t.conduit.xyz"

// Function to get a provider and contract instance
function getContract() {
  const provider = new ethers.JsonRpcProvider(RPC_URL)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)
  return new ethers.Contract(CONTRACT_ADDRESS, governanceAbi, wallet)
}

// Get governance parameters
export async function getGovernanceParameters() {
  try {
    const contract = getContract()

    const [votingDelay, votingPeriod, proposalThreshold, quorumNumerator] = await Promise.all([
      contract.votingDelay(),
      contract.votingPeriod(),
      contract.proposalThreshold(),
      contract.quorumNumerator(),
    ])

    // Convert block numbers to approximate time
    const blockTimeInSeconds = 12 // Assuming 12 seconds per block
    const votingDelayInDays = Math.round((Number(votingDelay) * blockTimeInSeconds) / (24 * 60 * 60))
    const votingPeriodInDays = Math.round((Number(votingPeriod) * blockTimeInSeconds) / (24 * 60 * 60))

    return {
      votingDelay: `${votingDelayInDays} day${votingDelayInDays !== 1 ? "s" : ""} (${votingDelay} blocks)`,
      votingPeriod: `${votingPeriodInDays} day${votingPeriodInDays !== 1 ? "s" : ""} (${votingPeriod} blocks)`,
      proposalThreshold: ethers.formatEther(proposalThreshold) + " SDM",
      quorumPercentage: Number(quorumNumerator) / 100 + "%",
    }
  } catch (error) {
    console.error("Error fetching governance parameters:", error)
    return null
  }
}

// Get all proposals
export async function getAllProposals() {
  try {
    const contract = getContract()
    const proposals = await contract.getAllProposals()

    // Process proposals to add additional information
    const processedProposals = await Promise.all(
      proposals.map(async (proposal: any) => {
        const state = await contract.state(proposal.proposalId)

        // Map state numbers to human-readable status
        const statusMap: { [key: number]: { text: string; class: string } } = {
          0: { text: "Pending", class: "bg-yellow-900/20 text-yellow-500" },
          1: { text: "Active", class: "bg-green-900/20 text-green-500" },
          2: { text: "Canceled", class: "bg-gray-800 text-gray-400" },
          3: { text: "Defeated", class: "bg-red-900/20 text-red-500" },
          4: { text: "Succeeded", class: "bg-blue-900/20 text-blue-500" },
          5: { text: "Queued", class: "bg-purple-900/20 text-purple-500" },
          6: { text: "Expired", class: "bg-orange-900/20 text-orange-500" },
          7: { text: "Executed", class: "bg-green-900/20 text-green-500" },
        }

        return {
          ...proposal,
          status: statusMap[state] || { text: "Unknown", class: "bg-gray-800 text-gray-400" },
          // Add more processed data as needed
        }
      }),
    )

    return processedProposals
  } catch (error) {
    console.error("Error fetching proposals:", error)
    return []
  }
}

// Get governance statistics
export async function getGovernanceStats() {
  try {
    const proposals = await getAllProposals()

    // Calculate statistics
    const totalProposals = proposals.length

    const passedProposals = proposals.filter(
      (p: any) => p.status.text === "Succeeded" || p.status.text === "Queued" || p.status.text === "Executed",
    ).length

    const rejectedProposals = proposals.filter(
      (p: any) => p.status.text === "Defeated" || p.status.text === "Canceled" || p.status.text === "Expired",
    ).length

    // Participation rate would require more complex calculation with voting data
    // This is a simplified placeholder
    const participationRate = "38.5%"

    return {
      totalProposals,
      participationRate,
      passedProposals,
      rejectedProposals,
    }
  } catch (error) {
    console.error("Error calculating governance stats:", error)
    return {
      totalProposals: 0,
      participationRate: "0%",
      passedProposals: 0,
      rejectedProposals: 0,
    }
  }
}
