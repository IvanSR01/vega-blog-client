import ManyPost from '@/components/many-post/ManyPost'
import SideBar from '@/components/side-bar/SideBar'
import { Post } from '@/shared/interfaces/post.interface'
import dynamic from 'next/dynamic'
import { FC } from 'react'


const MorePost = dynamic(() => import('./MorePost'))

interface Props {
	posts: Post[]
}

const Blog: FC<Props> = ({ posts }) => {
	return (
		<>
			<SideBar>
				<ManyPost title='Blog' baseGridColumn='repeat(1, 1fr)' posts={posts} />
			</SideBar>
			<MorePost />
		</>
	)
}
export default Blog
