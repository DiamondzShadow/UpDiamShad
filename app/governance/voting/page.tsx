import { ArrowLeft, Shield, Users, Vote, Scale, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GovernanceVotingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/governance" className="flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Governance
      </Link>

      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Governance Voting System</h1>
        <p className="text-gray-400">
          Learn how voting works in the Diamondz Shadow governance system and how to participate even if you don't have
          enough tokens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Voting Mechanics</h2>
          <p className="text-gray-400 mb-6">
            The Diamondz Shadow governance system uses a token-weighted voting mechanism with quadratic voting to
            balance influence.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                <Vote className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Token-Weighted Voting</h3>
                <p className="text-sm text-gray-400">
                  Your voting power is proportional to the square root of your token holdings, reducing the influence of
                  large token holders while still rewarding stake.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                <Users className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Quorum Requirements</h3>
                <p className="text-sm text-gray-400">
                  For a proposal to pass, it must receive votes from at least 10% of the total token supply and have
                  majority approval.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                <Shield className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Execution Security</h3>
                <p className="text-sm text-gray-400">
                  Approved proposals are executed through a timelock mechanism, allowing for a security period before
                  changes take effect.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Token Delegation System</h2>
          <p className="text-gray-400 mb-6">
            Don't have enough tokens to vote? You can request delegation from other token holders or from the
            blockchain's dedicated delegate.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                <Users className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Requesting Delegation</h3>
                <p className="text-sm text-gray-400">
                  If you don't have the minimum 10,000 SDM tokens required to vote, you can request delegation from
                  token holders or the blockchain's dedicated delegate.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                <Scale className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Blockchain Delegate</h3>
                <p className="text-sm text-gray-400">
                  The blockchain maintains a dedicated delegate with a weight of 2, which can tip the favor in case of a
                  stalemate between validators over delegated token receivers.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                <Award className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Delegation Criteria</h3>
                <p className="text-sm text-gray-400">
                  Delegation requests are evaluated based on the requester's contribution to the ecosystem, the merit of
                  their voting intentions, and their history of participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Delegation Request Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">01</span>
            </div>
            <h3 className="font-bold mb-2">Submit Request</h3>
            <p className="text-sm text-gray-400">
              Submit a delegation request through the governance portal, explaining your voting intentions and why you
              deserve delegation.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">02</span>
            </div>
            <h3 className="font-bold mb-2">Validator Review</h3>
            <p className="text-sm text-gray-400">
              Validators review your request and decide whether to delegate their voting power to you for the specific
              proposal.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">03</span>
            </div>
            <h3 className="font-bold mb-2">Blockchain Delegate</h3>
            <p className="text-sm text-gray-400">
              If validators are in a stalemate, the blockchain's dedicated delegate (weight of 2) will review and make
              the final decision.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4">
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mb-3">
              <span className="text-white font-mono">04</span>
            </div>
            <h3 className="font-bold mb-2">Vote Execution</h3>
            <p className="text-sm text-gray-400">
              If approved, you'll receive delegated voting power for the specific proposal and can cast your vote
              accordingly.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Delegation Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Eligibility Criteria</h3>
            <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
              <li>Must have a verified account on the platform</li>
              <li>Must have been active in the ecosystem for at least 30 days</li>
              <li>Must provide a clear rationale for voting intentions</li>
              <li>Must not have a history of malicious behavior</li>
            </ul>
          </div>

          <div className="bg-black/40 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Delegation Limitations</h3>
            <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
              <li>Delegation is proposal-specific and expires after the vote</li>
              <li>A single address can only receive delegation for up to 3 active proposals</li>
              <li>Delegated voting power cannot exceed 5% of total supply</li>
              <li>Delegation can be revoked if misused or if voting intentions change</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/governance">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Governance
          </Button>
        </Link>
      </div>
    </div>
  )
}
