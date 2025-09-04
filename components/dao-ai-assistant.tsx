"use client"

import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Send, Bot, User } from "lucide-react"

export function DaoAiAssistant() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  return (
    <Card className="bg-gray-900/50 border-gray-800 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">DAO AI Assistant</h3>
      </div>

      <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-gray-400 text-center py-8">
            <Bot className="w-12 h-12 mx-auto mb-2 text-purple-400" />
            <p>Ask me about DAO governance, staking Music NFTs, or Diamond zChain operations!</p>
            <div className="mt-4 text-sm space-y-1">
              <p>Try: "How do I vote on proposal DIP-001?"</p>
              <p>Try: "Stake my Music NFT to earn DAO tokens"</p>
              <p>Try: "What's my current voting power?"</p>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex gap-2 max-w-[80%] ${
                  message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"
                } rounded-lg p-3`}
              >
                {message.role === "assistant" && <Bot className="w-4 h-4 mt-0.5 text-purple-400" />}
                {message.role === "user" && <User className="w-4 h-4 mt-0.5" />}
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="bg-gray-800 text-gray-100 rounded-lg p-3 flex gap-2">
              <Bot className="w-4 h-4 mt-0.5 text-purple-400 animate-pulse" />
              <div>Thinking...</div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about DAO governance, staking, or blockchain operations..."
          className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </Card>
  )
}
