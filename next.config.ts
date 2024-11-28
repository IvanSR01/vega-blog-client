import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const pwa = withPWA({
	dest: 'public',
	register: true,
	skipWaiting: true,
})

const nextConfig: NextConfig = {
	/* config options here */ env: {
		NEST_PUBLIC_API_URL: process.env.NEST_PUBLIC_API_URL
	}
}

export default pwa(nextConfig as any)
