import Tag from '@/shared/ui/tag/Tag'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import styles from './Post.module.scss'

import { Post as PostType } from '@/shared/interfaces/post.interface'
import { addFullUrl } from '@/shared/utils/addFullUrl'
import clsx from 'clsx'
import { MdStarOutline } from 'react-icons/md'
import MiniAuthor from '../mini-author/MiniAuthor'
import AuthorTools from './author-tools/AuthorTools'
import { useActionPost } from './useActionPost'
import { formatDate } from '@/shared/utils/formatDate'

interface Props {
	post: PostType | undefined
}

const Post: FC<Props> = ({ post }) => {
	const {
		mutateLike,
		mutateDislike,
		mutateFavorite,
		isLike,
		isDislike,
		isFavorite
	} = useActionPost(post as PostType)
	return (
		<div className={styles.post}>
			<AuthorTools />
			<Image
				src={addFullUrl(post?.cover || '')}
				loader={() => addFullUrl(post?.cover || '')}
				alt='post'
				width={1600}
				height={1000}
				className={styles.postImage}
			/>

			<div className={styles.detalis}>
				<div className={styles.heading}>
					<Tag isAltStyle>{post?.tag?.name}</Tag>
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
				</div>
				<div className={styles.title}>
					<Link href={`/post/${post?.id}`}>{post?.title}</Link>
				</div>
				<div className={styles.content}>
					<MiniAuthor author={post?.author} />
					<p className={styles.date}>
						{formatDate(post?.createdAt || new Date())}
					</p>
				</div>
			</div>
		</div>
	)
}
export default Post
