import { NextResponse } from "next/server"

// Function to fetch channel metrics using YouTube API v3
async function fetchChannelMetrics(channelId: string) {
  // Use the official YouTube API v3 endpoint
  const apiUrl = `https://www.googleapis.com/youtube/v3/channels`

  // Create URL with parameters
  const url = new URL(apiUrl)
  url.searchParams.append("key", process.env.YOUTUBE_API_KEY!)
  url.searchParams.append("id", channelId)
  url.searchParams.append("part", "statistics")

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`YouTube API error: ${response.status}`)
  }

  const data = await response.json()

  // Check if channel exists and has statistics
  if (!data.items || data.items.length === 0) {
    throw new Error("Channel not found or no statistics available")
  }

  const statistics = data.items[0].statistics

  return {
    viewCount: Number.parseInt(statistics.viewCount, 10),
    subscriberCount: Number.parseInt(statistics.subscriberCount, 10),
    videoCount: Number.parseInt(statistics.videoCount, 10),
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const channelId = searchParams.get("channelId")

  // Only allow the official Diamondz Shadow channel ID (redacted for security)
  if (channelId !== process.env.AUTHORIZED_CHANNEL_ID) {
    return NextResponse.json({ error: "Only authorized channels can access this endpoint" }, { status: 403 })
  }

  if (!process.env.YOUTUBE_API_KEY) {
    return NextResponse.json({ error: "YouTube API key not configured" }, { status: 500 })
  }

  try {
    const metrics = await fetchChannelMetrics(channelId)

    // Log the request for monitoring (with redacted information)
    console.log(
      `YouTube metrics fetched for channel ${channelId?.substring(0, 4)}*** from ${
        request.headers.get("x-forwarded-for")?.substring(0, 3) || "unknown"
      }***`,
    )

    return NextResponse.json(metrics)
  } catch (error) {
    console.error("Error fetching YouTube metrics:", error)
    return NextResponse.json({ error: "Failed to fetch YouTube metrics" }, { status: 500 })
  }
}
