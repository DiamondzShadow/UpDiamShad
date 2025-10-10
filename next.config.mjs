let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thirdweb.com',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  webpack: (config, { isServer }) => {
    // Handle thirdweb modules properly
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    // Ensure proper module handling for thirdweb
    config.module.rules.push({
      test: /\.m?js$/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false,
      },
    });

    // Ensure ESM modules are handled correctly
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      layers: true,
    };
    
    // Handle module resolution for thirdweb
    if (!isServer) {
      // Ensure thirdweb modules are properly resolved
      config.resolve = {
        ...config.resolve,
        extensionAlias: {
          '.js': ['.js', '.ts', '.tsx', '.jsx'],
          '.mjs': ['.mjs', '.mts'],
          '.cjs': ['.cjs', '.cts']
        }
      };
    }

    return config;
  },
  transpilePackages: [
    'thirdweb', 
    '@thirdweb-dev/ai-sdk-provider',
    'thirdweb/react',
    'thirdweb/extensions',
    'thirdweb/wallets',
    'thirdweb/utils',
    'thirdweb/storage'
  ],
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
