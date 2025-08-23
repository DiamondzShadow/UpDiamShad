import { FileText, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhitePaperPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <FileText className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Diamondz Shadow Documentation</h1>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Official White Paper</h2>
        <p className="text-gray-400 mb-6">
          Access the complete Diamondz Shadow white paper and technical documentation on our GitHub repository.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/DiamondzShadow/White-Paper/tree/main/white%20paper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:w-auto">
              <FileText className="w-4 h-4 mr-2" />
              View White Paper
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>

          <a href="https://github.com/DiamondzShadow" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              <Github className="w-4 h-4 mr-2" />
              GitHub Repository
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Technical Documentation</h3>
          <p className="text-gray-400 text-sm">
            Comprehensive technical specifications, architecture details, and implementation guides.
          </p>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Project Updates</h3>
          <p className="text-gray-400 text-sm">
            Latest development progress, roadmap updates, and community announcements.
          </p>
        </div>
      </div>
    </div>
  )
}
