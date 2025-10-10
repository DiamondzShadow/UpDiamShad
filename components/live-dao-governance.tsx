"use client"

import { useState, useEffect } from "react"
import { useActiveAccount, ConnectButton } from "thirdweb/react"
import { getContract } from "thirdweb"
import { ethers } from "ethers"

// Contract Addresses (zsLab testnet)
const NFT_ADDRESS = "0x37FFAd37b84d099afb43B6E01038843f26cD9F05"
const STAKE_ADDRESS = "0x9d89BCbd1d81413a8f6b15d7aBF8508A8a0F92a6"
const DAO_TOKEN_ADDRESS = "0xBD20960E95673Ff7de09B47cB33581ED2CDc63a9"
const DAO_GOV_ADDRESS = "0xAD436B7CF855571F3d805E666C2a7d58cdD3486A"

// Styling
const cardStyle = {
  background: "linear-gradient(145deg, #f0f0ff, #ffffff)",
  padding: "1.5rem",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  transition: "transform 0.2s",
}
const ctaButtonStyle = {
  padding: "0.9rem 2rem",
  fontSize: "1rem",
  cursor: "pointer",
  background: "linear-gradient(90deg, #6C63FF, #8360c3)",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(108,99,255,0.5)",
  transition: "transform 0.2s",
}

export default function GovernancePage() {
  const account = useActiveAccount()
  const address = account?.address
  const [userNFTs, setUserNFTs] = useState([])
  const [stakedNFTs, setStakedNFTs] = useState(0)
  const [earnedTokens, setEarnedTokens] = useState(0)
  const [daoBalance, setDaoBalance] = useState(0)
  const [proposals, setProposals] = useState([])
  const [loading, setLoading] = useState(false)

  // Contracts
  const nftContract = getContract({
    client: { clientId: "5a25f41eddec1fb56418abe1ecef5dc2" },
    chain: { id: 150179125 },
    address: NFT_ADDRESS,
  })

  const stakeContract = getContract({
    client: { clientId: "5a25f41eddec1fb56418abe1ecef5dc2" },
    chain: { id: 150179125 },
    address: STAKE_ADDRESS,
  })

  const daoTokenContract = getContract({
    client: { clientId: "5a25f41eddec1fb56418abe1ecef5dc2" },
    chain: { id: 150179125 },
    address: DAO_TOKEN_ADDRESS,
  })

  const daoGovContract = getContract({
    client: { clientId: "5a25f41eddec1fb56418abe1ecef5dc2" },
    chain: { id: 150179125 },
    address: DAO_GOV_ADDRESS,
  })

  // Load user data
  const loadUserData = async () => {
    if (!address) return
    setLoading(true)
    try {
      const ownedNFTs = await nftContract.getOwned(address)
      const staked = await stakeContract.read("stakedOf", [address])
      const earned = await stakeContract.read("earned", [address])
      const daoBal = await daoTokenContract.balanceOf(address)

      // Live proposals
      const proposalCount = await daoGovContract.read("proposalCount")
      const liveProposals = []
      for (let i = 0; i < Number(proposalCount); i++) {
        const p = await daoGovContract.read("proposals", [i])
        liveProposals.push({
          id: i,
          title: p.description,
          votesFor: ethers.formatUnits(p.forVotes, 18),
          votesAgainst: ethers.formatUnits(p.againstVotes, 18),
        })
      }

      setUserNFTs(ownedNFTs)
      setStakedNFTs(staked.toString())
      setEarnedTokens(earned.toString())
      setDaoBalance(Number(daoBal))
      setProposals(liveProposals)
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadUserData()
  }, [address])

  // Stake NFT
  const stakeNFT = async (tokenId) => {
    try {
      await stakeContract.write("stake", [tokenId])
      alert(`NFT #${tokenId} staked!`)
      loadUserData()
    } catch (err) {
      console.error(err)
      alert("Failed to stake NFT.")
    }
  }

  // Vote on proposal
  const voteProposal = async (proposalId, vote) => {
    if (daoBalance === 0) return alert("You need DAO tokens to vote!")
    try {
      await daoGovContract.write("castVote", [proposalId, vote])
      alert(`Voted on proposal #${proposalId}`)
      loadUserData()
    } catch (err) {
      console.error(err)
      alert("Failed to vote.")
    }
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "0 auto", padding: "3rem" }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          background: "linear-gradient(135deg,#8360c3,#6c63ff)",
          padding: "3rem",
          borderRadius: "16px",
          color: "#fff",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Diamondz DAO – For the People</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
          Stake NFTs, earn DAO tokens, and vote on chain proposals in zsLab DAO.
        </p>
        {!address && <ConnectButton />}
      </section>

      {/* Stats Dashboard */}
      {address && (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div style={cardStyle}>
            Your NFTs<p>{loading ? "..." : userNFTs.length}</p>
          </div>
          <div style={cardStyle}>
            NFTs Staked<p>{loading ? "..." : stakedNFTs}</p>
          </div>
          <div style={cardStyle}>
            zsLab Earned<p>{loading ? "..." : earnedTokens}</p>
          </div>
          <div style={cardStyle}>
            DAO Token Balance<p>{loading ? "..." : daoBalance}</p>
          </div>
        </section>
      )}

      {/* NFT Staking */}
      {address && (
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Your NFTs</h2>
          {loading ? (
            <p>Loading NFTs...</p>
          ) : userNFTs.length === 0 ? (
            <p>You have no NFTs to stake.</p>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {userNFTs.map((nft) => (
                <div
                  key={nft.metadata.id}
                  style={cardStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src={nft.metadata.image || "/abstract-music-album-cover-purple.png"}
                    alt={nft.metadata.name}
                    style={{ width: "150px", borderRadius: "8px", marginBottom: "0.5rem" }}
                  />
                  <p>
                    <strong>{nft.metadata.name}</strong>
                  </p>
                  <button style={ctaButtonStyle} onClick={() => stakeNFT(nft.metadata.id)}>
                    Stake NFT
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Live DAO Proposals */}
      {address && daoBalance > 0 && (
        <section>
          <h2 style={{ marginBottom: "1rem" }}>Active DAO Proposals</h2>
          {loading ? (
            <p>Loading proposals...</p>
          ) : proposals.length === 0 ? (
            <p>No active proposals.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {proposals.map((p) => (
                <div key={p.id} style={cardStyle}>
                  <h3>{p.title}</h3>
                  <p>
                    Votes For: {p.votesFor} | Votes Against: {p.votesAgainst}
                  </p>
                  <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
                    <button style={ctaButtonStyle} onClick={() => voteProposal(p.id, 1)}>
                      Vote Yes
                    </button>
                    <button style={ctaButtonStyle} onClick={() => voteProposal(p.id, 0)}>
                      Vote No
                    </button>
                  </div>
                  <div style={{ marginTop: "0.5rem", background: "#ddd", borderRadius: "4px", overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${(Number(p.votesFor) / (Number(p.votesFor) + Number(p.votesAgainst) + 1)) * 100}%`,
                        background: "linear-gradient(90deg,#6C63FF,#8360c3)",
                        height: "8px",
                        transition: "width 0.5s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  )
}
