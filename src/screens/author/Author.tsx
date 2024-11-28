import { FC } from 'react'
import styles from './Author.module.scss'
import ManyPost from '@/components/many-post/ManyPost'
import SideBar from '@/components/side-bar/SideBar'
import Banner from '@/components/banner/Banner'
import { User } from '@/shared/interfaces/user.interface'
import { Post } from '@/shared/interfaces/post.interface'

interface Props {
	user: User | undefined
	posts: Post[]
}

const Author: FC<Props> = ({ user, posts }) => {
	return (
		<div className={styles.authorPage}>
			<Banner profile={user} />
			<SideBar>
				<ManyPost
					title={`Latest posts ${user?.firstName} ${user?.middleName || ''} ${user?.lastName}`}
					baseGridColumn='repeat(1, 1fr)'
					posts={posts}
				/>
			</SideBar>
		</div>
	)
}
export default Author
