'use client'

import { Post as PostType } from '@/shared/interfaces/post.interface'
import { itemVariants } from '@/shared/motion/variants'
import { motion } from 'framer-motion'
import { FC } from 'react'

import Post from '../post/Post'
import styles from './ManyPost.module.scss'

interface ManyPostProps {
	title: string
	baseGridColumn?: string
	posts: PostType[]
}

const ManyPost: FC<ManyPostProps> = ({ title, baseGridColumn, posts }) => {
	return (
		<div className={styles.manyPost}>
			{posts && posts.length > 0 ? (
				<>
					<motion.h3
						variants={itemVariants}
						initial='init'
						animate={'animate'}
						exit={'exit'}
						viewport={{ once: true, amount: 0.3 }}
						transition={{
							duration: 0.5,
							delay: 0.2
						}}
					>
						{title}
					</motion.h3>
					<div
						className={styles.items}
						style={{ gridTemplateColumns: baseGridColumn }}
					>
						{posts.map((post, index) => (
							<motion.div
								variants={itemVariants}
								initial='init'
								animate={'animate'}
								exit={'exit'}
								viewport={{ once: true, amount: 0.3 }}
								transition={{
									duration: 0.5,
									delay: 0.2 + 0.2 * (index > 5 ? 5 : index)
								}}
								key={index}
							>
								<Post post={post} />
							</motion.div>
						))}
					</div>
				</>
			) : (
				<div className={styles.notFound}>Posts not found</div>
			)}
		</div>
	)
}
export default ManyPost
