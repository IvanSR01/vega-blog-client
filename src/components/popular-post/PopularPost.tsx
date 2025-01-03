'use client'

import { Post } from '@/shared/interfaces/post.interface'
import { itemVariants, variants } from '@/shared/motion/variants'
import Tag from '@/shared/ui/tag/Tag'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import { addFullUrl } from '@/shared/utils/addFullUrl'
import { formatDate } from '@/shared/utils/formatDate'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './PopularPost.module.scss'
import { LINKS } from '@/shared/constants/links'
import { connectUrl } from '@/shared/utils/connectUrl'

interface Props {
	size?: keyof typeof sizes
	post: Post
	tag: string
}

const sizes = {
	small: styles.small,
	big: styles.big
}

const PopularPost: FC<Props> = ({ size = 'big', post, tag }) => {
	return (
		<motion.div
			variants={variants}
			initial='init'
			animate={'animate'}
			exit={'exit'}
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.2
			}}
			className={clsx(styles.popular, sizes[size])}
		>
			<Link href={connectUrl(LINKS.POST, '/', post?.id.toString())}>
				<Image
					src={addFullUrl(post?.cover || '')}
					loader={() => addFullUrl(post?.cover || '')}
					alt='post'
					width={1600}
					height={1000}
					className={styles.background}
				/>
				<div className={styles.content__popular}>
					<motion.div
						variants={itemVariants}
						initial='init'
						animate={'animate'}
						exit={'exit'}
						viewport={{ once: true, amount: 0.3 }}
						transition={{
							duration: 0.5
						}}
					>
						<Tag>{tag}</Tag>
					</motion.div>
					<motion.div
						variants={itemVariants}
						initial='init'
						animate={'animate'}
						exit={'exit'}
						viewport={{ once: true, amount: 0.3 }}
						transition={{
							duration: 0.5,
							delay: 0.2
						}}
						className={styles.title}
					>
						{post?.title}
					</motion.div>
					{size === 'big' && (
						<motion.div
							variants={itemVariants}
							initial='init'
							animate={'animate'}
							exit={'exit'}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.5,
								delay: 0.4
							}}
							className={styles.detalis}
						>
							<UserAvatar alt='Tom' size='small' />
							<p className={styles.authorName}>
								{post?.author?.firstName} {post?.author?.lastName}
							</p>
							<p className={styles.date}>{formatDate(post?.createdAt)}</p>
						</motion.div>
					)}
				</div>
			</Link>
		</motion.div>
	)
}

export default PopularPost
