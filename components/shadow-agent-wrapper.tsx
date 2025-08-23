"use client"

import { WalletProvider } from "thirdweb/react"
import { createThirdwebClient } from "thirdweb"
import ShadowAgentCore from "./shadow-agent-core"

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "demo-client-id",
})

export default function ShadowAgent() {
  if (!process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID) {
    return (
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
        <h3 className="text-red-400 font-semibold mb-2">Shadow Agent - Configuration Required</h3>
        <p className="text-gray-400">
          ThirdWeb client configuration is required. Please set up your environment variables.
        </p>
      </div>
    )
  }

  return (
    <WalletProvider id="inApp">
      <ShadowAgentCore client={client} />
    </WalletProvider>
  )
}
