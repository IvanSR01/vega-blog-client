import ManyPost from '@/components/many-post/ManyPost'
import ScrollLayout from '@/components/scroll-layout/ScrollLayout'
import { useSearchQuery } from '@/hooks/useSearchQuery'
import { itemVariants } from '@/shared/motion/variants'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, useState } from 'react'
import { FaCommentDots, FaHeart, FaStar, FaUserFriends } from 'react-icons/fa'

import { useGetReactions } from '../../useGetReactions'
import Following from '../following/Following'
import styles from './UserPageContent.module.scss'

const categories = [
	{ name: 'Favorites', icon: <FaStar /> },
	{ name: 'Following', icon: <FaUserFriends /> },
	{ name: 'Likes', icon: <FaHeart /> },
	{ name: 'Comments', icon: <FaCommentDots /> }
]

const UserPageContent: FC = () => {
	const { searchTerm, handleChangeSearchTerm: handleChangeCategoryTerm } =
		useSearchQuery({
			queryParam: 'category',
			disabledScroll: true,
			timeout: 10
		})
	const [selectCategory, setSelectCategory] = useState<string>(
		searchTerm ? searchTerm : categories[0].name
	)
	const { likePost, favoritePost } = useGetReactions()

	const selectCategoryHandler = (name: string) => {
		setSelectCategory(name)
		handleChangeCategoryTerm(name)
	}

	return (
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
							onClick={() => selectCategoryHandler(item.name)}
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
				{selectCategory === 'Following' && <Following />}
			</AnimatePresence>
		</div>
	)
}
export default UserPageContent
