'use client'

import { useProfile } from '@/hooks/useProfile'

import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from './UserPage.module.scss'
import UserPageContent from './user-page-components/user-page-content/UserPageContent'



const Banner = dynamic(() => import('../../../../components/banner/Banner'), {
	ssr: false
})

const UserPage: FC = () => {

	const { profile } = useProfile()
	return (
		<div className={styles.userPage}>
			<Banner profile={profile} />
			<UserPageContent/>
		</div>
	)
}

export default UserPage
