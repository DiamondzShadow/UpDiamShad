export async function parseIntent(geminiContent: string, address?: string, geminiTools: any[] = []) {
  const intents: any[] = []

  if (geminiTools && geminiTools.length > 0) {
    for (const part of geminiTools) {
      if (part.functionCall) {
        const { name, args } = part.functionCall

        switch (name) {
          case "approve_token":
            intents.push({
              type: "approve",
              contract: args.contract_address,
              method: "approve",
              args: {
                spender: args.spender,
                amount: args.amount,
              },
            })
            break

          case "transfer_token":
            intents.push({
              type: "transfer",
              contract: args.contract_address,
              method: "transfer",
              args: {
                to: args.to,
                amount: args.amount,
              },
            })
            break

          case "transfer_native":
            intents.push({
              type: "transfer_native",
              contract: null, // Native currency
              method: "transfer",
              args: {
                to: args.to,
                amount: args.amount,
              },
            })
            break

          case "mint_nft":
            intents.push({
              type: "mint_nft",
              contract: args.contract_address,
              method: "mint",
              args: {
                to: args.to,
                tokenUri: args.token_uri || "",
              },
            })
            break

          case "transfer_nft":
            intents.push({
              type: "transfer_nft",
              contract: args.contract_address,
              method: "transferFrom",
              args: {
                from: address || "0x0",
                to: args.to,
                tokenId: args.token_id,
              },
            })
            break

          case "check_balance":
            intents.push({
              type: "check_balance",
              contract: args.contract_address || null,
              method: "balanceOf",
              args: {
                address: args.address,
              },
            })
            break
        }
      }
    }
  }

  if (!intents.length && geminiContent) {
    // Check for token transfer intent
    if (geminiContent.toLowerCase().includes("transfer") || geminiContent.toLowerCase().includes("send")) {
      const amountMatch = geminiContent.match(/(\d+(?:\.\d+)?)\s*(eth|usdc|sdm|zslab)/i)
      const addressMatch = geminiContent.match(/0x[a-fA-F0-9]{40}/)

      if (amountMatch && addressMatch) {
        intents.push({
          type: "transfer",
          contract: "0x602b869eEf1C9F0487F31776bad8Af3C4A173394", // SDM token
          method: "transfer",
          args: {
            to: addressMatch[0],
            amount: amountMatch[1],
          },
        })
      }
    }

    // Check for approval intent
    if (geminiContent.toLowerCase().includes("approve")) {
      intents.push({
        type: "approve",
        contract: "0x602b869eEf1C9F0487F31776bad8Af3C4A173394",
        method: "approve",
        args: {
          spender: "0x1234567890123456789012345678901234567890",
          amount: "1000000",
        },
      })
    }
  }

  return { reply: geminiContent, intents }
}
