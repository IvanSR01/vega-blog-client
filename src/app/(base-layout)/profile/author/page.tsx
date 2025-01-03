'use client'

import FullScreenLoader from '@/components/full-screen-loader/FullScreenLoader'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const AuthorProfile = dynamic(
	() => import('@/screens/profile/profile-pages/author/AuthorPage'),
	{ ssr: false, loading: () => <FullScreenLoader /> }
)

const page: NextPage = () => {
	return <AuthorProfile />
}
export default page
