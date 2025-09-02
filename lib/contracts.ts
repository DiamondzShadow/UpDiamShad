import { createThirdwebClient, getContract } from "thirdweb"
import { defineChain } from "thirdweb/chains"

// Diamond zChain definition
export const diamondZChain = defineChain(150179125)

// Create the ThirdWeb client
export const client = createThirdwebClient({
  clientId: "5a25f41eddec1fb56418abe1ecef5dc2",
})

// Contract addresses on Diamond zChain
export const CONTRACT_ADDRESSES = {
  DAO_MINE: "0x9d89BCbd1d81413a8f6b15d7aBF8508A8a0F92a6",
  STAKES: "0xBD20960E95673Ff7de09B47cB33581ED2CDc63a9",
  DIGITAL_MUSIC: "0x37FFAd37b84d099afb43B6E01038843f26cD9F05",
} as const

// Get contract instances
export const getDaoMineContract = () =>
  getContract({
    client,
    chain: diamondZChain,
    address: CONTRACT_ADDRESSES.DAO_MINE,
  })

export const getStakesContract = () =>
  getContract({
    client,
    chain: diamondZChain,
    address: CONTRACT_ADDRESSES.STAKES,
  })

export const getDigitalMusicContract = () =>
  getContract({
    client,
    chain: diamondZChain,
    address: CONTRACT_ADDRESSES.DIGITAL_MUSIC,
  })
