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
		mutateLike,
		mutateDislike,
		mutateFavorite,
		isLike,
		isDislike,
		isFavorite
	} = useActionPost(post as Post)

	return (
		<div className={styles.buttons}>
			<button
				className={clsx(styles.crudButton, {
					[styles.active]: isFavorite
				})}
				onClick={() => mutateFavorite()}
			>
				<MdStarOutline />
			</button>
			<button
				className={clsx(styles.crudButton, {
					[styles.active]: isLike
				})}
				onClick={() => mutateLike()}
			>
				<BsArrowUp />
			</button>
			<button
				className={clsx(styles.crudButton, {
					[styles.active]: isDislike
				})}
				onClick={() => mutateDislike()}
			>
				<BsArrowDown />
			</button>
		</div>
	)
}
export default ActionPost
