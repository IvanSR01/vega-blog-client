import type { Metadata } from 'next'

export const mainSeo: Metadata = {
	title: 'Vega Blog - Insights and Stories',
	description:
		'Welcome to Vega Blog! Dive into articles on technology, programming, and personal growth. Stay inspired and informed.',
	keywords: [
		'Vega Blog',
		'technology',
		'programming',
		'personal growth',
		'articles',
		'insights'
	],
	authors: [{ name: 'Ivan Nelson', url: 'https://github.com/IvanSR01' }],
	openGraph: {
		title: 'Vega Blog - Insights and Stories',
		description:
			'Explore engaging articles on technology, programming, and personal development. Your daily dose of inspiration and knowledge.',
		url: 'https://nelson-ivan.projects.com',
		siteName: 'Vega Blog',
		images: [
			{
				url: '/light.png',
				width: 1200,
				height: 630,
				alt: 'Vega Blog - Insights and Stories'
			}
		],
		locale: 'en_US',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true
	},
	manifest: '/manifest.json'
}
