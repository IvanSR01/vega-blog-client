import FullScreenLoader from '@/components/full-screen-loader/FullScreenLoader'
import AppProvider from '@/providers/AppProvider'
import { mainSeo } from '@/shared/seo/main.seo'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Suspense } from 'react'

import './globals.scss'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export const metadata: Metadata = mainSeo

export const revalidate = 60

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Suspense fallback={<FullScreenLoader />}>
					<AppProvider>{children}</AppProvider>
				</Suspense>
			</body>
		</html>
	)
}
