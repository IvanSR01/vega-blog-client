import FullScreenLoader from '@/components/full-screen-loader/FullScreenLoader'
import { FC, PropsWithChildren, Suspense } from 'react'

import styles from './ProfileLayout.module.scss'

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.profile}>
			<Suspense fallback={<FullScreenLoader />}>{children}</Suspense>
		</div>
	)
}

export default ProfileLayout
