'use client'

import { FC, PropsWithChildren, Suspense } from 'react'

import styles from './AdminLayout.module.scss'
import { CheckRole } from './CheckRole'
import BackLink from '@/components/back-link/BackLink'
import Tabs from './tabs/Tabs'

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
	return CheckRole({
		children: (
			<div className={styles.layout}>
				<div className={styles.admin}>
					<div className={styles.heading}>
						<BackLink href='/profile/user'>Profile</BackLink>
						<h1>Admin</h1>
					</div>
					<Suspense>
						<Tabs/>
					</Suspense>
					{children}
				</div>
			</div>
		)
	})
}
export default AdminLayout
