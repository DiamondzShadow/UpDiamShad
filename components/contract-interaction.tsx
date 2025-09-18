"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Wallet, Activity } from "lucide-react"

interface ContractInteractionProps {
  title: string
  description: string
  address: string
  explorerUrl: string
}

export function ContractInteraction({ title, description, address, explorerUrl }: ContractInteractionProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleConnect = async () => {
    setIsLoading(true)
    // Simulate connection process
    setTimeout(() => {
      setIsConnected(true)
      setIsLoading(false)
    }, 1500)
  }

  const handleInteract = () => {
    console.log(`Interacting with ${title} contract at ${address}`)
    alert(`Contract interaction initiated for ${title}`)
  }

  return (
    <Card className="border-purple-200 dark:border-purple-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-purple-600 dark:text-purple-400">{title}</CardTitle>
          <Badge variant="outline" className="text-green-600 border-green-600">
            Live
          </Badge>
        </div>
        <CardDescription className="text-gray-600 dark:text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Contract Address:</p>
          <p className="font-mono text-sm break-all">{address}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {!isConnected ? (
            <Button
              onClick={handleConnect}
              disabled={isLoading}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isLoading ? "Connecting..." : "Connect Wallet"}
            </Button>
          ) : (
            <Button onClick={handleInteract} className="bg-green-600 hover:bg-green-700 text-white">
              <Activity className="w-4 h-4 mr-2" />
              Interact with Contract
            </Button>
          )}

          <Button variant="outline" asChild>
            <a href={explorerUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Explorer
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
