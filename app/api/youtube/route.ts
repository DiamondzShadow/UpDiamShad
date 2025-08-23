import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY
    const channelId = process.env.YOUTUBE_CHANNEL_ID

    if (!apiKey || !channelId) {
      return NextResponse.json({ error: "Missing YouTube API key or channel ID" }, { status: 500 })
    }

    // Fetch channel statistics
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,
    )

    if (!channelResponse.ok) {
      throw new Error("Failed to fetch channel data")
    }

    const channelData = await channelResponse.json()

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found")
    }

    const stats = channelData.items[0].statistics

    // Calculate engagement rate (simplified - would need more data for accurate calculation)
    const subscriberCount = Number.parseInt(stats.subscriberCount)
    const viewCount = Number.parseInt(stats.viewCount)
    const videoCount = Number.parseInt(stats.videoCount)

    // Simple engagement calculation: average views per video / subscribers
    const avgViewsPerVideo = viewCount / videoCount
    const engagementRate = ((avgViewsPerVideo / subscriberCount) * 100).toFixed(1)

    return NextResponse.json({
      totalViews: Number.parseInt(stats.viewCount),
      subscribers: Number.parseInt(stats.subscriberCount),
      videoCount: Number.parseInt(stats.videoCount),
      engagementRate: Number.parseFloat(engagementRate),
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("YouTube API error:", error)
    return NextResponse.json({ error: "Failed to fetch YouTube data" }, { status: 500 })
  }
}
