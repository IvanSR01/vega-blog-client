'use client'

import { Post } from '@/shared/interfaces/post.interface'
import { variants } from '@/shared/motion/variants'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularPost from '../popular-post/PopularPost'
import styles from './PopularPosts.module.scss'

interface Props {
	posts: Post[]
}

const MobilPopularPost = dynamic(
	() => import('../popular-posts/mobil-popular-post/MobilPopularPost')
)

const PopularPosts: FC<Props> = ({ posts }) => {
	return (
		<motion.div
			variants={variants}
			initial='init'
			animate='animate'
			exit='exit'
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.2
			}}
			className={styles.wrapper}
		>
			{posts && posts.length > 0 ? (
				<>
					<div className={styles.items}>
						{posts[0] && (
							<PopularPost post={posts[0]} tag={posts[0].tag.name} />
						)}
						{posts[1] && (
							<div className={styles.col}>
								{posts.slice(1, 5).map(post => (
									<PopularPost
										size='small'
										key={post.id}
										post={post}
										tag={post.tag.name}
									/>
								))}
							</div>
						)}
					</div>

					<MobilPopularPost posts={posts} />
				</>
			) : (
				<div className={styles.notFound}>Posts not-found</div>
			)}
		</motion.div>
	)
}

export default PopularPosts
