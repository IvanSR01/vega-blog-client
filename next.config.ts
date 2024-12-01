import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const pwa = withPWA({
	dest: 'public',
	register: true,
	skipWaiting: true
})

const nextConfig: NextConfig = {
	/* config options here */ env: {
		NEST_PUBLIC_API_URL: process.env.NEST_PUBLIC_API_URL,
		EMAIL_USERNAME: process.env.EMAIL_USERNAME,
		EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
		EMAIL_RECIPIENT: process.env.EMAIL_RECIPIENT,
		EMAIL_SERVICE: process.env.EMAIL_SERVICE
	},
	typescript: {
		ignoreBuildErrors: true
	}
}

export default pwa(nextConfig as any)
