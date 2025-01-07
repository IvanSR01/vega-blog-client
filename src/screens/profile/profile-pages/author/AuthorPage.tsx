'use client'

import ScrollLayout from '@/components/scroll-layout/ScrollLayout'
import { useProfile } from '@/hooks/useProfile'
import { LINKS } from '@/shared/constants/links'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import styles from './AuthorPage.module.scss'

const Banner = dynamic(() => import('../../../../components/banner/Banner'), {
	ssr: false
})
const AuthorPosts = dynamic(() => import('./author-post/AuthorPosts'))
const AuthorPage: FC = () => {
	const { push } = useRouter()
	const { profile } = useProfile()
	return (
		<div className={styles.authorPage}>
			<Banner profile={profile} />
			<div className={styles.content}>
				<ScrollLayout>
					<div className={styles.buttons}>
						<button
							className={styles.crudButton}
							onClick={() => push(LINKS.NEW_POST)}
						>
							Add post
						</button>
					</div>
				</ScrollLayout>
				<AuthorPosts />
			</div>
		</div>
	)
}
export default AuthorPage
