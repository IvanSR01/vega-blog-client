'use client'

import { useProfile } from '@/hooks/useProfile'
import Button from '@/shared/ui/button/Button'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import clsx from 'clsx'
import { FC } from 'react'
import { FaBan } from 'react-icons/fa'

import styles from './Admin.module.scss'

const Admin: FC = () => {
	const { profile } = useProfile()
	return (
		<div className={styles.usersAdminPage}>
			<div className={styles.items}>
				<div className={styles.titleRow}>
					<div className={styles.user}>
						<div className={styles.info}>
							Avatar
							<div className={styles.mainInfo}>
								<p className={styles.slug}>Email</p>
								<h4 className={styles.name}>Full name</h4>
							</div>
							<div className={styles.other}>Posts</div>
							<div className={styles.other}>Followers</div>
							<div className={styles.other}>Youtube</div>
							<div className={styles.other}>Twitter</div>
							<div className={styles.other}>Facebook</div>
							<div className={styles.other}>Instagram</div>
						</div>
						<div className={clsx(styles.status)}>Status</div>
						<div className={styles.actions}>Actions</div>
					</div>
				</div>
				{[...Array(20)].map((_, index) => (
					<div className={styles.user} key={index}>
						<div className={styles.info}>
							<UserAvatar
								// src=''
								size='medium'
							/>
							<div className={styles.mainInfo}>
								<p className={styles.slug}>{profile?.email}</p>
								<h4 className={styles.name}>
									{profile?.firstName} {profile?.middleName} {profile?.lastName}
								</h4>
							</div>
							<div className={styles.other}>0</div>
							<div className={styles.other}>0</div>
							<div className={styles.other}>Yes</div>
							<div className={styles.other}>Yes</div>
							<div className={styles.other}>Yes</div>
							<div className={styles.other}>Yes</div>
						</div>
						<div className={clsx(styles.status, styles.active)}>Active</div>
						<div className={styles.actions}>
							<Button className={styles.actionButton}>
								<FaBan />
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default Admin
