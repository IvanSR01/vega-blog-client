import { Post } from '@/shared/interfaces/post.interface'
import clsx from 'clsx'
import { FC } from 'react'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { MdStarOutline } from 'react-icons/md'

import styles from './ActionPost.module.scss'
import { useActionPost } from './useActionPost'

interface Props {
	post: Post
}

const ActionPost: FC<Props> = ({ post }) => {
	const {
		optimisticState,
		handleToggleLike,
		handleToggleDislike,
		handleToggleFavorite
	} = useActionPost(post as Post)

	return (
		<div className={styles.buttons}>
			<button
				className={clsx(styles.actionButton, {
					[styles.active]: optimisticState.isFavorited
				})}
				onClick={() => handleToggleFavorite()}
			>
				<MdStarOutline />
			</button>
			<button
				className={clsx(styles.actionButton, {
					[styles.active]: optimisticState.isLiked
				})}
				onClick={() => handleToggleLike()}
			>
				<BsArrowUp />
			</button>
			<button
				className={clsx(styles.actionButton, {
					[styles.active]: optimisticState.isDisliked
				})}
				onClick={() => handleToggleDislike()}
			>
				<BsArrowDown />
			</button>
		</div>
	)
}
export default ActionPost
