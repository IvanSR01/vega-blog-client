'use client'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const ManagePost = dynamic(
	() => import('@/screens/profile/profile-pages/manage-post/ManagePost'),
	{
		ssr: false
	}
)

const page: NextPage = () => {
	return <ManagePost />
}
export default page
