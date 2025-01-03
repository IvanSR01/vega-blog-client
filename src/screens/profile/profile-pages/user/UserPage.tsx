'use client'
import { FC, useState } from 'react'
import styles from './UserPage.module.scss'
import clsx from 'clsx'
import { FaStar, FaUserFriends, FaHeart, FaCommentDots } from 'react-icons/fa'
import ScrollLayout from '@/components/scroll-layout/ScrollLayout'
import ManyPost from '@/components/many-post/ManyPost'
import { AnimatePresence, motion } from 'framer-motion'
import { itemVariants } from '@/shared/motion/variants'
import { useGetReactions } from './useGetReactions'
import dynamic from 'next/dynamic'

const categories = [
	{ name: 'Favorites', icon: <FaStar /> },
	{ name: 'Following', icon: <FaUserFriends /> },
	{ name: 'Likes', icon: <FaHeart /> },
	{ name: 'Comments', icon: <FaCommentDots /> }
]

const Banner = dynamic(() => import('../../../../components/banner/Banner'), {
	ssr: false
})

const UserPage: FC = () => {
	const [selectCategory, setSelectCategory] = useState<string>(
		categories[0].name
	)
	const { likePost, favoritePost } = useGetReactions()
	return (
		<div className={styles.userPage}>
			<Banner />
			<div className={styles.content}>
				<ScrollLayout>
					<div className={styles.categories}>
						{categories.map((item, index) => (
							<motion.div
								variants={itemVariants}
								initial='init'
								animate='animate'
								exit='exit'
								transition={{ duration: 0.6, delay: 0.1 * index }}
								className={clsx(styles.category, {
									[styles.active]: item.name === selectCategory
								})}
								key={index}
								onClick={() => setSelectCategory(item.name)}
							>
								<span className={styles.icon}>{item.icon}</span>
								<span>{item.name}</span>
							</motion.div>
						))}
					</div>
				</ScrollLayout>
				<AnimatePresence>
					{selectCategory === 'Favorites' && (
						<ManyPost title={selectCategory} posts={favoritePost || []} />
					)}
					{selectCategory === 'Likes' && (
						<ManyPost title={selectCategory} posts={likePost || []} />
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default UserPage
