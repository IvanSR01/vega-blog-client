import { FC } from 'react'

import styles from './AuthorPosts.module.scss'
import { useAuthorPost } from './useAuthorPost'
import Loader from '@/components/loader/Loader'
import ManyPost from '@/components/many-post/ManyPost'

const AuthorPosts: FC = () => {
	const { data, isLoading } = useAuthorPost()

	return (
		<>
			{isLoading ? (
				<div className={styles.containerLoader}>
					<Loader />
				</div>
			) : (
				<ManyPost title='You posts' posts={data || []} />
			)}
		</>
	)
}
export default AuthorPosts
