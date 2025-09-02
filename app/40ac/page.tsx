export default function FortyAcPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-500/10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
            40ac
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-World Asset Tokenization Platform
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Turn physical assets into tradeable digital tokens. From real estate to commodities, 40ac makes RWA
            tokenization accessible and compliant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all">
              Tokenize Assets
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
              Browse RWAs
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose 40ac?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-400 text-xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliant Tokenization</h3>
              <p className="text-gray-400">
                Full regulatory compliance for real estate, commodities, and other physical assets.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-cyan-400 text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Liquidity</h3>
              <p className="text-gray-400">Trade fractionalized real-world assets 24/7 with instant settlement.</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-400 text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Transparent</h3>
              <p className="text-gray-400">Blockchain-verified ownership with full audit trails and transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Tokenize Your Assets?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join the future of asset ownership and trading on Diamond zChain.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-cyan-600 transition-all">
            Get Started with 40ac
          </button>
        </div>
      </section>
    </div>
  )
}
