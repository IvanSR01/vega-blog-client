/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useAppSelector } from '@/hooks/useAction'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'


const ManagePost = dynamic(
	() => import('@/screens/profile/profile-pages/manage-post/ManagePost'),
	{
		ssr: false
	}
)

const page: FC = () => {
	const { post } = useAppSelector(state => state.post)

	const { push } = useRouter()

	useEffect(() => {
		if (!post) push('/profile/new-post')
	}, [])

	return <ManagePost postId={post?.id} />
}
export default page
