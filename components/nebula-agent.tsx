"use client"
import { useState } from "react"

// Map supported chain slugs and readable names
const SUPPORTED_CHAINS = [
  { slug: "ethereum", label: "Ethereum" },
  { slug: "arbitrum", label: "Arbitrum One" },
  { slug: "base", label: "Base" },
  { slug: "optimism", label: "Optimism" },
  { slug: "polygon", label: "Polygon" },
  { slug: "diamondz", label: "Diamond zChain", id: 150179125 },
]

export function NebulaChatAgent() {
  const [chain, setChain] = useState("arbitrum") // Default to Arbitrum for Diamondz Shadow
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [input, setInput] = useState("")
  const [reply, setReply] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function sendChat() {
    if (!input.trim()) return
    setLoading(true)
    setError(null)

    const userMsg = { sender: "user", text: input }
    const nextMsgs = [...messages, userMsg]
    setInput("")
    setReply(null)

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        body: JSON.stringify({ messages: nextMsgs, chain }),
        headers: { "Content-Type": "application/json" },
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.reply || `Server error: ${res.status}`)
      }

      setMessages([...nextMsgs, { sender: "agent", text: data.reply }])
      setReply(data.reply)
    } catch (err: any) {
      setError(err.message || "Failed to connect to Shadow Agent")
      setMessages([
        ...nextMsgs,
        { sender: "agent", text: "I'm experiencing technical difficulties. Please try again." },
      ])
    }

    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-900/50 border border-gray-800 rounded-lg p-6">
      <ChainSelector chain={chain} setChain={setChain} />

      {error && (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
          <div className="text-red-400 text-sm font-medium">Connection Error:</div>
          <div className="text-red-300 text-sm mt-1">{error}</div>
          <div className="text-red-200 text-xs mt-2">
            Check your NEXT_PUBLIC_THIRDWEB_CLIENT_ID or contact support if this persists.
          </div>
        </div>
      )}

      <div className="min-h-64 border border-gray-700 rounded-lg p-4 mb-4 bg-gray-950/50 overflow-y-auto max-h-96">
        {messages.length === 0 ? (
          <div className="text-gray-500 text-center py-8">
            Ask me anything about blockchain, DeFi, NFTs, or Diamondz Shadow ecosystem!
          </div>
        ) : (
          messages.map((m, idx) => (
            <div key={idx} className="mb-3">
              <div className={`font-semibold ${m.sender === "user" ? "text-blue-400" : "text-purple-400"}`}>
                {m.sender === "user" ? "You" : "Shadow Agent"}:
              </div>
              <div className="text-gray-200 mt-1">{m.text}</div>
            </div>
          ))
        )}
        {loading && <div className="text-gray-400">Processing...</div>}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask any blockchain/DeFi/NFT question or intent…"
          disabled={loading}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendChat()
          }}
        />
        <button
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 px-4 py-2 rounded text-white font-medium"
          onClick={sendChat}
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  )
}

function ChainSelector({ chain, setChain }: { chain: string; setChain: (c: string) => void }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300 mb-2">Target Chain:</label>
      <select
        value={chain}
        onChange={(e) => setChain(e.target.value)}
        className="bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
      >
        {SUPPORTED_CHAINS.map((c) => (
          <option value={c.slug} key={c.slug}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function NebulaAgentWrapper() {
  return <NebulaChatAgent />
}
