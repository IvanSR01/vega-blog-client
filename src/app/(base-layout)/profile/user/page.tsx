'use client'

import FullScreenLoader from '@/components/full-screen-loader/FullScreenLoader'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const UserProfile = dynamic(
	() => import('@/screens/profile/profile-pages/user/UserPage'),
	{ loading: () => <FullScreenLoader /> }
)

const page: NextPage = () => {
	return <UserProfile />
}
export default page
