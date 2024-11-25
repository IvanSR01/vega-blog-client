import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */ env: {
		NEST_PUBLIC_API_URL: process.env.NEST_PUBLIC_API_URL
	}
}

export default nextConfig
