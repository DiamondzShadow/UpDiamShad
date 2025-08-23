"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  useActiveWalletConnectionStatus,
  useActiveAccount,
  useWalletBalance,
  useConnect,
  useDisconnect,
} from "thirdweb/react"
import { createThirdwebClient } from "thirdweb"
import { createWallet, inAppWallet } from "thirdweb/wallets"
import { sendCalls } from "thirdweb/wallets/eip5792"
import { Bot, Send, Wallet, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "demo-client-id",
})

interface Message {
  id: string
  text: string
  sender: "user" | "agent"
  timestamp: Date
}

interface PendingBundle {
  calls: any[]
  description: string
}

export default function ShadowAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Shadow Agent, your advanced AI assistant for the Diamondz Shadow ecosystem. I can help you with wallet operations, token transfers, and onchain interactions. How can I assist you today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [pendingBundle, setPendingBundle] = useState<PendingBundle | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [connectError, setConnectError] = useState<string | null>(null)

  const connectionStatus = useActiveWalletConnectionStatus()
  const account = useActiveAccount()
  const { data: balance } = useWalletBalance({
    address: account?.address,
    client,
  })

  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  const handleConnect = async (walletType: string) => {
    try {
      setConnectError(null)
      let wallet

      switch (walletType) {
        case "metamask":
          wallet = createWallet("io.metamask")
          break
        case "coinbase":
          wallet = createWallet("com.coinbase.wallet")
          break
        case "rainbow":
          wallet = createWallet("me.rainbow")
          break
        case "inapp":
          wallet = inAppWallet()
          break
        default:
          throw new Error("Unsupported wallet type")
      }

      await connect(() => wallet)
    } catch (error: any) {
      console.error("Failed to connect wallet:", error)
      setConnectError(`Failed to connect ${walletType} wallet. Please try again.`)
    }
  }

  const handleDisconnect = async () => {
    try {
      await disconnect()
    } catch (error: any) {
      console.error("Failed to disconnect:", error)
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInputMessage("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const data = await response.json()

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: "agent",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, agentMessage])

      if (data.calls && data.calls.length > 0) {
        setPendingBundle({
          calls: data.calls,
          description: `Execute ${data.calls.length} onchain operation(s)`,
        })
      }
    } catch (error) {
      console.error("Failed to get AI response:", error)
      setError("Failed to connect to AI service. Please try again.")
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I encountered an error. Please try again.",
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleExecuteBundle = async () => {
    if (!pendingBundle || !account) return

    try {
      setIsLoading(true)

      const result = await sendCalls({
        wallet: account,
        client,
        calls: pendingBundle.calls,
        capabilities: {
          paymasterService: {
            url: "/api/paymaster",
          },
        },
      })

      const successMessage: Message = {
        id: Date.now().toString(),
        text: `✅ Onchain operations executed successfully! Transaction ID: ${result.transactionHash || "pending"}`,
        sender: "agent",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, successMessage])
      setPendingBundle(null)
    } catch (error) {
      console.error("Failed to execute bundle:", error)
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "❌ Failed to execute onchain operations. Please try again.",
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  if (!process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID) {
    return (
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-400">
            <AlertCircle className="h-5 w-5" />
            Shadow Agent - Configuration Required
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            ThirdWeb client configuration is required. Please set up your environment variables.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (connectionStatus !== "connected" || !account?.address) {
    return (
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-400">
            <Bot className="h-5 w-5" />
            Shadow Agent - Advanced AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-400">
            Connect your wallet to unlock advanced AI capabilities and onchain interactions
          </p>

          {connectError && (
            <div className="bg-red-900/20 border border-red-600 rounded-lg p-3">
              <p className="text-red-400 text-sm">{connectError}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => handleConnect("metamask")}
              variant="outline"
              className="bg-gray-800 border-gray-700 hover:bg-gray-700"
            >
              <Wallet className="h-4 w-4 mr-2" />
              MetaMask
            </Button>
            <Button
              onClick={() => handleConnect("coinbase")}
              variant="outline"
              className="bg-gray-800 border-gray-700 hover:bg-gray-700"
            >
              <Wallet className="h-4 w-4 mr-2" />
              Coinbase
            </Button>
            <Button
              onClick={() => handleConnect("rainbow")}
              variant="outline"
              className="bg-gray-800 border-gray-700 hover:bg-gray-700"
            >
              <Wallet className="h-4 w-4 mr-2" />
              Rainbow
            </Button>
            <Button
              onClick={() => handleConnect("inapp")}
              variant="outline"
              className="bg-gray-800 border-gray-700 hover:bg-gray-700"
            >
              <Wallet className="h-4 w-4 mr-2" />
              In-App Wallet
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-400">
          <Bot className="h-5 w-5" />
          Shadow Agent - Advanced AI Assistant
          <div className="ml-auto flex items-center gap-2 text-sm text-gray-400">
            <Wallet className="h-4 w-4" />
            {balance ? `${Number.parseFloat(balance.displayValue).toFixed(4)} ${balance.symbol}` : "Loading..."}
            <Button onClick={handleDisconnect} size="sm" variant="outline" className="ml-2 text-xs bg-transparent">
              Disconnect
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <div className="bg-red-900/20 border border-red-600 rounded-lg p-3">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <div className="h-64 overflow-y-auto space-y-3 p-3 bg-black/20 rounded-lg">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user" ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-100"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-gray-100 p-3 rounded-lg">
                <p className="text-sm">Shadow Agent is processing...</p>
              </div>
            </div>
          )}
        </div>

        {pendingBundle && (
          <Card className="bg-yellow-900/20 border-yellow-600">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-yellow-400 text-sm">
                <AlertTriangle className="h-4 w-4" />
                Review Onchain Operations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-300">{pendingBundle.description}</p>
              <pre className="text-xs bg-black/40 p-2 rounded overflow-x-auto">
                {JSON.stringify(pendingBundle.calls, null, 2)}
              </pre>
              <div className="flex gap-2">
                <Button
                  onClick={handleExecuteBundle}
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  Approve & Execute
                </Button>
                <Button onClick={() => setPendingBundle(null)} variant="outline" className="border-gray-600">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask Shadow Agent about transfers, governance, or any blockchain operation..."
            className="bg-gray-800 border-gray-700 text-white"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
