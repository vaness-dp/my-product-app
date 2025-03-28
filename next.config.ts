import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
	basePath: '/my-product-app',
	assetPrefix: '/my-product-app/',
	trailingSlash: true
}

export default nextConfig
