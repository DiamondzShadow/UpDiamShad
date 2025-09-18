"use client"

import { useEffect, useMemo, useState } from "react"
import { createThirdwebClient, getContract, defineChain } from "thirdweb"
import { ConnectButton, useActiveAccount } from "thirdweb/react"

// === CONFIG ===
// Your Thirdweb client ID (already configured)
const client = createThirdwebClient({ clientId: "5a25f41eddec1fb56418abe1ecef5dc2" })

// zsLab Testnet definition
const zsLabTestnet = defineChain({
  id: 150179125,
  name: "zsLab Testnet",
  nativeCurrency: { name: "zsLab", symbol: "ZSL", decimals: 18 },
  rpc: "https://rpc-testnet.Diamondz.baby",
})

// Contracts
const NFT_ADDRESS = "0x37FFAd37b84d099afb43B6E01038843f26cD9F05" // Music MFT
const STAKE_ADDRESS = "0x9d89BCbd1d81413a8f6b15d7aBF8508A8a0F92a6" // Staking
const DAO_TOKEN_ADDRESS = "0xBD20960E95673Ff7de09B47cB33581ED2CDc63a9" // DAO token
const DAO_GOV_ADDRESS = "0xAD436B7CF855571F3d805E666C2a7d58cdD3486A" // Governance

// === UTILS ===
function StatCard({ label, value }) {
  return (
    <div className="stat">
      <p className="label">{label}</p>
      <h2>{value ?? <span className="skel" />}</h2>
      <style jsx>{`
        .stat { padding: 1rem; border-radius: 12px; background: #111; color: #fff; text-align: center; }
        .label { font-size: 0.9rem; opacity: 0.7; }
        .skel { display:inline-block; width:40px; height:20px; background:#333; border-radius:6px; }
      `}</style>
    </div>
  )
}

function ProposalCard({ proposal, onVote }) {
  return (
    <div className="proposal">
      <h3>{proposal.title}</h3>
      <div className="bar">
        <div className="for" style={{ width: `${proposal.forPct}%` }} />
        <div className="against" style={{ width: `${proposal.againstPct}%` }} />
      </div>
      <p>
        For: {proposal.forVotes} | Against: {proposal.againstVotes}
      </p>
      <div className="actions">
        <button onClick={() => onVote(proposal.id, true)}>Vote For</button>
        <button onClick={() => onVote(proposal.id, false)}>Vote Against</button>
      </div>
      <style jsx>{`
        .proposal { background:#1a1a1a; padding:1rem; border-radius:10px; margin-bottom:1rem; }
        .bar { display:flex; height:8px; margin:0.5rem 0; border-radius:4px; overflow:hidden; background:#333; }
        .for { background:#4caf50; }
        .against { background:#f44336; }
        .actions button { margin-right:0.5rem; padding:0.5rem 1rem; }
      `}</style>
    </div>
  )
}

function StakingCard({ stakedCount, onStake, onUnstake }) {
  return (
    <div className="staking">
      <h3>Your Staked NFTs</h3>
      <p>{stakedCount}</p>
      <div className="actions">
        <button onClick={onStake}>Stake</button>
        <button onClick={onUnstake}>Unstake</button>
      </div>
      <style jsx>{`
        .staking { background:#1a1a1a; padding:1rem; border-radius:10px; margin-bottom:1rem; }
        .actions button { margin-right:0.5rem; padding:0.5rem 1rem; }
      `}</style>
    </div>
  )
}

// === MAIN PAGE ===
export default function Governance() {
  const account = useActiveAccount()
  const address = account?.address

  const [nftCount, setNftCount] = useState(0)
  const [stakedCount, setStakedCount] = useState(0)
  const [daoBalance, setDaoBalance] = useState(0)
  const [proposals, setProposals] = useState([])

  // Contracts
  const nftContract = useMemo(() => getContract({ client, chain: zsLabTestnet, address: NFT_ADDRESS }), [])
  const stakeContract = useMemo(() => getContract({ client, chain: zsLabTestnet, address: STAKE_ADDRESS }), [])
  const daoTokenContract = useMemo(() => getContract({ client, chain: zsLabTestnet, address: DAO_TOKEN_ADDRESS }), [])
  const daoGovContract = useMemo(() => getContract({ client, chain: zsLabTestnet, address: DAO_GOV_ADDRESS }), [])

  // Load user data
  useEffect(() => {
    if (!address) return
    ;(async () => {
      try {
        const bal = await daoTokenContract.call("function balanceOf(address) view returns (uint256)", [address])
        setDaoBalance(Number(bal))

        const staked = await stakeContract.call("function balanceOf(address) view returns (uint256)", [address])
        setStakedCount(Number(staked))

        const nfts = await nftContract.call("function balanceOf(address) view returns (uint256)", [address])
        setNftCount(Number(nfts))

        // Load proposals (simplified, adapt ABI to your governance contract)
        const count = await daoGovContract.call("function proposalCount() view returns (uint256)")
        const list = []
        for (let i = 0; i < Number(count); i++) {
          const p = await daoGovContract.call(
            "function proposals(uint256) view returns (uint256 id,string title,uint256 forVotes,uint256 againstVotes)",
            [i],
          )
          list.push({
            id: Number(p[0]),
            title: p[1],
            forVotes: Number(p[2]),
            againstVotes: Number(p[3]),
            forPct: (Number(p[2]) / (Number(p[2]) + Number(p[3]) || 1)) * 100,
            againstPct: (Number(p[3]) / (Number(p[2]) + Number(p[3]) || 1)) * 100,
          })
        }
        setProposals(list)
      } catch (e) {
        console.error("Load failed", e)
      }
    })()
  }, [address])

  const handleVote = async (id, support) => {
    try {
      await daoGovContract.send("function castVote(uint256,bool)", [id, support])
      alert("Vote submitted!")
    } catch (e) {
      console.error(e)
      alert("Vote failed.")
    }
  }

  const handleStake = async () => {
    try {
      await stakeContract.send("function stake(uint256)", [nftCount])
      alert("Staked successfully!")
    } catch (e) {
      console.error(e)
      alert("Staking failed.")
    }
  }

  const handleUnstake = async () => {
    try {
      await stakeContract.send("function unstake(uint256)", [stakedCount])
      alert("Unstaked successfully!")
    } catch (e) {
      console.error(e)
      alert("Unstaking failed.")
    }
  }

  return (
    <div className="gov">
      <header>
        <h1>Diamondz DAO – For the People</h1>
        <p>Stake. Earn. Vote. Shape the zsLab Chain.</p>
        <ConnectButton client={client} chain={zsLabTestnet} />
      </header>

      {address ? (
        <>
          <section className="stats">
            <StatCard label="Your NFTs" value={nftCount} />
            <StatCard label="Staked NFTs" value={stakedCount} />
            <StatCard label="DAO Balance" value={daoBalance} />
          </section>

          <section className="staking">
            <StakingCard stakedCount={stakedCount} onStake={handleStake} onUnstake={handleUnstake} />
          </section>

          <section className="dao">
            <h2>Live Proposals</h2>
            {daoBalance > 0 ? (
              proposals.map((p) => <ProposalCard key={p.id} proposal={p} onVote={handleVote} />)
            ) : (
              <p>You need DAO tokens to view and vote on proposals.</p>
            )}
          </section>
        </>
      ) : (
        <p className="connectPrompt">Connect your wallet to participate.</p>
      )}

      <style jsx>{`
        .gov { max-width:800px; margin:0 auto; padding:2rem; font-family:sans-serif; }
        header { text-align:center; margin-bottom:2rem; }
        header h1 { font-size:2rem; background:linear-gradient(90deg,#ff0080,#7928ca); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .stats { display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:1rem; margin-bottom:2rem; }
        .staking { display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:1rem; margin-bottom:2rem; }
        .dao { margin-top:2rem; }
        .connectPrompt { text-align:center; margin-top:2rem; font-style:italic; }
      `}</style>
    </div>
  )
}
