import ManyPost from '@/components/many-post/ManyPost'
import SideBar from '@/components/side-bar/SideBar'
import { FC, Suspense } from 'react'
import styles from './Blog.module.scss'
import Search from './search/Search'
import { Post } from '@/shared/interfaces/post.interface'
import { Tag } from '@/shared/interfaces/tag.interface'
import dynamic from 'next/dynamic'

const More = dynamic(() => import("../../components/more/More"));

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
			<More/>
		</div>
	)
}
export default Blog
