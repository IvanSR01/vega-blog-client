import ManyPost from '@/components/many-post/ManyPost'
import SideBar from '@/components/side-bar/SideBar'
import { Post } from '@/shared/interfaces/post.interface'
import { Tag } from '@/shared/interfaces/tag.interface'
import dynamic from 'next/dynamic'
import { FC, Suspense } from 'react'
import styles from './Blog.module.scss'
import Search from './search/Search'

const MorePost = dynamic(() => import('./MorePost'))

interface Props {
	tags: Tag[]
	posts: Post[]
}

const Blog: FC<Props> = ({ tags, posts }) => {
	return (
		<div className={styles.blog}>
			<Suspense>
				<Search tags={tags} />
			</Suspense>
			<SideBar>
				<ManyPost title='Blog' baseGridColumn='repeat(1, 1fr)' posts={posts} />
			</SideBar>
			<MorePost />
		</div>
	)
}
export default Blog
