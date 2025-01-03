'use client'

import FullScreenLoader from '@/components/full-screen-loader/FullScreenLoader'
import dynamic from 'next/dynamic'
import { FC } from 'react'

const UpdateProfile = dynamic(
	() =>
		import('@/screens/profile/profile-pages/update-profile/UpdateProfilePage'),
	{ loading: () => <FullScreenLoader />, ssr: false }
)

const page: FC = () => {
	return <UpdateProfile />
}
export default page
