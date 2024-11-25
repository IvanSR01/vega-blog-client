'use client'
import { FC, useState } from 'react'
import styles from './UserPage.module.scss'
import Banner from '../../../../components/banner/Banner'
import clsx from 'clsx'
import { FaStar, FaUserFriends, FaHeart, FaCommentDots } from 'react-icons/fa'
import ScrollLayout from '@/components/scroll-layout/ScrollLayout'
import ManyPost from '@/components/many-post/ManyPost'
import { motion } from 'framer-motion'
import { itemVariants } from '@/shared/motion/variants'
const categories = [
	{ name: 'Favorites', icon: <FaStar /> },
	{ name: 'Following', icon: <FaUserFriends /> },
	{ name: 'Likes', icon: <FaHeart /> },
	{ name: 'Comments', icon: <FaCommentDots /> }
]

const UserPage: FC = () => {
	const [selectCategory, setSelectCategory] = useState<string>(
		categories[0].name
	)

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
				<ManyPost title={selectCategory} />
			</div>
		</div>
	)
}

export default UserPage
