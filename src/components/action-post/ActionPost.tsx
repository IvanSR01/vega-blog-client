import { FC } from 'react'
import styles from './ActionPost.module.scss'
import { MdStarOutline } from 'react-icons/md'
import clsx from 'clsx'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { Post } from '@/shared/interfaces/post.interface'
import { useActionPost } from './useActionPost'

interface Props {
	post: Post
}

const ActionPost: FC<Props> = ({ post }) => {
	const {
		isDisliked,
		isLiked,
		isFavorited,
		handleToggleLike,
		handleToggleDislike,
		handleToggleFavorite
	} = useActionPost(post as Post)

	return (
		<div className={styles.buttons}>
			<button
				className={clsx(styles.crudButton, {
					[styles.active]: isFavorited
				})}
				onClick={() => handleToggleFavorite()}
			>
				<MdStarOutline />
			</button>
			<button
				className={clsx(styles.crudButton, {
					[styles.active]: isLiked
				})}
				onClick={() => handleToggleLike()}
			>
				<BsArrowUp />
			</button>
			<button
				className={clsx(styles.crudButton, {
					[styles.active]: isDisliked
				})}
				onClick={() => handleToggleDislike()}
			>
				<BsArrowDown />
			</button>
		</div>
	)
}
export default ActionPost
