import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { messages, address, chain = "arbitrum" } = await req.json()

    if (!process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID) {
      return NextResponse.json(
        { reply: "Blockchain AI service is not configured. Check NEXT_PUBLIC_THIRDWEB_CLIENT_ID." },
        { status: 500 },
      )
    }

    const nebulaResponse = await fetch("https://api.thirdweb.com/v1/nebula/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
      },
      body: JSON.stringify({
        messages: messages.map((m: any) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
        context: {
          chain: chain,
          address: address || null,
          ecosystem: "diamondz-shadow",
          features: [
            "wallet_analysis",
            "defi_recommendations",
            "trading_insights",
            "onchain_data",
            "token_operations",
            "nft_management",
          ],
        },
      }),
    })

    if (!nebulaResponse.ok) {
      const errorText = await nebulaResponse.text()
      console.error("Nebula API error:", nebulaResponse.status, errorText)

      if (nebulaResponse.status === 404) {
        return NextResponse.json(
          {
            reply:
              "Nebula API is currently unavailable. This may be due to client ID permissions or service restrictions. Please check your thirdweb dashboard for Nebula access.",
          },
          { status: 500 },
        )
      }

      throw new Error(`Nebula API error: ${nebulaResponse.status} - ${errorText}`)
    }

    const nebulaData = await nebulaResponse.json()

    return NextResponse.json({
      reply: nebulaData.message || "Shadow Agent is ready to assist with blockchain operations.",
      calls: nebulaData.calls || [],
    })
  } catch (error: any) {
    console.error("Nebula Agent API error:", error)
    return NextResponse.json({ reply: "Shadow Agent is experiencing difficulties. Please try again." }, { status: 500 })
  }
}
