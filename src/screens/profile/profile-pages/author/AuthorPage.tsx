'use client'

import ScrollLayout from '@/components/scroll-layout/ScrollLayout'
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
	return (
		<div className={styles.authorPage}>
			<Banner />
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
