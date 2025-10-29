declare module 'next-pwa' {
  import type { NextConfig } from 'next'

  interface PWAOptions {
    dest?: string
    disable?: boolean
    register?: boolean
    skipWaiting?: boolean
    runtimeCaching?: any[]
    fallbacks?: Record<string, string>
    buildExcludes?: (RegExp | string)[]
  }

  const withPWA: (options?: PWAOptions) => (nextConfig?: NextConfig) => NextConfig
  export default withPWA
}
