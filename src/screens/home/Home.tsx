import PopularPosts from '@/components/popular-posts/PopularPosts'
import { LINKS } from '@/shared/constants/links'
import { Post } from '@/shared/interfaces/post.interface'
import { Tag } from '@/shared/interfaces/tag.interface'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Home.module.scss'
import QuoteOfTheWeek from './quote-of-the-week/QuoteOfTheWeek'

const ManyPost = dynamic(() => import('@/components/many-post/ManyPost'))
const More = dynamic(() => import('../../components/more/More'))
const Tags = dynamic(() => import('@/components/popular-tags/PopularTags'))

interface Props {
	mostViewedPosts: Post[]
	posts: Post[]
	tags: Tag[]
}

const Home: FC<Props> = ({ mostViewedPosts, posts, tags }) => {
	return (
		<div className={styles.home}>
			<PopularPosts posts={mostViewedPosts} />
			<Tags tags={tags} />
			<QuoteOfTheWeek
				quote='Success is not final, failure is not fatal: It is the courage to continue that counts.'
				author='Winston Churchill'
			/>
			<ManyPost title='Latest' posts={posts} />
			<Link href={LINKS.BLOG}>
				<More />
			</Link>
		</div>
	)
}

export default Home
