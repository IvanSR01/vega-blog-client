import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const pwa = withPWA({
	dest: 'public/workers',
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
	},
	sassOptions: {
		silenceDeprecations: ['legacy-js-api']
	},
	rewrites: async () => [
		{
			source: '/api/:path*',
			destination: `http://localhost:4200/api/:path*`
		},
		{
			source: '/uploads/:path*',
			destination: `http://localhost:4200/uploads/:path*`
		}
	]
}

export default pwa(nextConfig as any)
