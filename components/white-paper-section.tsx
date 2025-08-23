import { Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhitePaperSection() {
  return (
    <div className="relative border border-gray-800 rounded-xl p-8 mb-16 bg-gradient-to-br from-black to-gray-900">
      <div className="absolute top-4 left-4 bg-black/80 px-2 py-1 rounded-md text-xs font-mono">White Paper</div>

      <div className="max-w-3xl pt-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Diamondz Shadow Protocol: The Future of Blockchain Technology
        </h2>

        <p className="text-gray-400 mb-6">
          Our comprehensive white paper outlines the technical architecture, tokenomics, and governance model of the
          Diamondz Shadow blockchain. Discover how our Solidity-based platform is revolutionizing the blockchain space.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline" className="rounded-full px-6 bg-transparent">
            <a href="https://github.com/DiamondzShadow" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
