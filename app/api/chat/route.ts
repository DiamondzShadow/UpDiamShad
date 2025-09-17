import { streamText } from "ai"
import { createThirdwebAI } from "@thirdweb-dev/ai-sdk-provider"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = await streamText({
    model: createThirdwebAI({
      clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
      // Enable blockchain tools for DAO interactions
      tools: ["sign_transaction", "sign_swap", "wallet_analysis"],
    }),
    messages,
    system: `You are the Diamondz Shadow AI assistant. You can help users interact with:
    
    - DAO Governance: Vote on proposals, check voting power, view proposal details
    - Music NFT Staking: Stake/unstake music NFTs to earn DAO tokens
    - Contract Interactions: Help with Diamond zChain contract operations
    
    Contract Addresses:
    - DAO: 0xAD436B7CF855571F3d805E666C2a7d58cdD3486A
    - Staking: 0x9d89BCbd1d81413a8f6b15d7aBF8508A8a0F92a6
    - DAO Token: 0xBD20960E95673Ff7de09B47cB33581ED2CDc63a9
    - Music NFTs: 0x37FFAd37b84d099afb43B6E01038843f26cD9F05
    
    When users ask about DAO operations, guide them through the process and offer to help execute transactions.`,
  })

  return result.toDataStreamResponse()
}
