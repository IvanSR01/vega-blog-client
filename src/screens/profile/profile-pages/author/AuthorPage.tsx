'use client'
import { FC } from 'react'
import styles from './AuthorPage.module.scss'
import Banner from '@/components/banner/Banner'
import ManyPost from '@/components/many-post/ManyPost'
import ScrollLayout from '@/components/scroll-layout/ScrollLayout'
import { useRouter } from 'next/navigation'
import { useProfile } from '@/hooks/useProfile'
import { useAuthorPost } from './useAuthorPost'
import Loader from '@/components/loader/Loader'
// todo: Fix link
const AuthorPage: FC = () => {
	const { push } = useRouter()
	const { profile } = useProfile()
	const { data, isLoading } = useAuthorPost()
	return (
		<div className={styles.authorPage}>
			<Banner profile={profile} />
			<div className={styles.content}>
				<ScrollLayout>
					<div className={styles.buttons}>
						<button
							className={styles.crudButton}
							onClick={() => push('/profile/new-post')}
						>
							Add post
						</button>
					</div>
				</ScrollLayout>
				{isLoading ? (
					<div className={styles.containerLoader}>
						<Loader/>
					</div>
				) : (
					<ManyPost title='You posts' posts={data || []} />
				)}
			</div>
		</div>
	)
}
export default AuthorPage
