"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Youtube, Loader2, Lock, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function YouTubeAdapterDemo() {
  // Pre-fill with the Diamondz Shadow channel ID
  const [channelId, setChannelId] = useState("UC***************************")
  const [metrics, setMetrics] = useState<null | {
    viewCount: number
    subscriberCount: number
    videoCount: number
  }>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Fetch metrics on component mount
  useEffect(() => {
    fetchMetrics()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMetrics = async () => {
    if (!channelId) {
      setError("Please enter a YouTube channel ID")
      return
    }

    // Validate that only the official channel ID is used
    if (channelId !== "UC***************************") {
      setError("Only the official Diamondz Shadow channel is authorized for this demo")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch(`/api/youtube-metrics?channelId=${channelId}`)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch metrics")
      }

      const data = await response.json()
      setMetrics(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="border border-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Official Diamondz Shadow Channel Metrics</h2>
      <p className="text-gray-400 mb-6">
        This demo shows real-time metrics for the official Diamondz Shadow YouTube channel and how they impact token
        economics.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Input
            value={channelId}
            onChange={(e) => setChannelId(e.target.value)}
            className="bg-black/40 border-gray-800 pr-10"
            disabled
          />
          <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        <Button onClick={fetchMetrics} disabled={loading} className="bg-gray-800 hover:bg-gray-700 text-white">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <Youtube className="w-4 h-4 mr-2" />
              Refresh Metrics
            </>
          )}
        </Button>
      </div>

      {error && <div className="bg-red-900/20 border border-red-900 text-red-400 p-4 rounded-md mb-6">{error}</div>}

      {metrics && (
        <div className="bg-black/40 p-4 rounded-lg">
          <h3 className="font-bold mb-4">Channel Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-gray-400 text-sm mb-1">Total Views</div>
              <div className="text-2xl font-bold">{metrics.viewCount.toLocaleString()}</div>
            </div>
            <div className="border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-gray-400 text-sm mb-1">Subscribers</div>
              <div className="text-2xl font-bold">{metrics.subscriberCount.toLocaleString()}</div>
            </div>
            <div className="border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-gray-400 text-sm mb-1">Videos</div>
              <div className="text-2xl font-bold">{metrics.videoCount.toLocaleString()}</div>
            </div>
          </div>

          <div className="mt-6 p-4 border border-gray-800 rounded-lg bg-black/20">
            <h4 className="font-bold mb-2">Token Economics Impact</h4>
            <div className="text-sm text-gray-400">
              <p className="mb-2">Based on these metrics, the YouTube Adapter would:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Generate {((metrics.viewCount / 1000) * 0.001).toFixed(2)} tokens from views</li>
                <li>Generate {(metrics.subscriberCount * 0.1).toFixed(2)} tokens from subscribers</li>
                <li>Apply growth multipliers based on historical data</li>
                <li>Distribute tokens to stakers and contributors</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 border border-gray-800 rounded-lg bg-black/20">
            <h4 className="font-bold mb-2">Adapter Status</h4>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-400">Connected to YouTube API (IP: ***.***.**.***)</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">Last updated: {new Date().toLocaleString()}</div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link href="/blockchain/contracts">
              <Button variant="outline" size="sm" className="mr-2">
                <ExternalLink className="w-3 h-3 mr-2" />
                View Contract Details
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                window.open("https://diamondzshadowscan.net", "_blank")
              }}
            >
              <ExternalLink className="w-3 h-3 mr-2" />
              Open Block Explorer
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
