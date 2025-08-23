const ALLOWLIST = [
  "0x602b869eEf1C9F0487F31776bad8Af3C4A173394", // SDM token contract
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
]

const MAX_TRANSFER_AMOUNT = "1000000" // 1M tokens max

export async function validateOnchainCalls(intents: any[]) {
  return intents.filter((call) => {
    // Validate contract is whitelisted
    if (!ALLOWLIST.includes(call.contract)) {
      console.warn(`Contract ${call.contract} not in allowlist`)
      return false
    }

    // Validate transfer amounts
    if (call.method === "transfer" && Number(call.args.amount) > Number(MAX_TRANSFER_AMOUNT)) {
      console.warn(`Transfer amount ${call.args.amount} exceeds maximum`)
      return false
    }

    // Validate method is allowed
    const allowedMethods = ["transfer", "approve", "transferFrom"]
    if (!allowedMethods.includes(call.method)) {
      console.warn(`Method ${call.method} not allowed`)
      return false
    }

    return true
  })
}
