import Tag from '@/shared/ui/tag/Tag'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Post.module.scss'

import { LINKS } from '@/shared/constants/links'
import { Post as PostType } from '@/shared/interfaces/post.interface'
import { addFullUrl } from '@/shared/utils/addFullUrl'
import { connectUrl } from '@/shared/utils/connectUrl'
import { formatDate } from '@/shared/utils/formatDate'
import ActionPost from '../action-post/ActionPost'
import MiniAuthor from '../mini-author/MiniAuthor'
import AuthorTools from './author-tools/AuthorTools'

interface Props {
	post: PostType | undefined
}

const Post: FC<Props> = ({ post }) => {
	return (
		<div className={styles.post}>
			<AuthorTools post={post as PostType} />
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
					<ActionPost post={post as PostType} />
				</div>
				<div className={styles.title}>
					<Link href={connectUrl(LINKS.POST, '/', post?.id.toString() || '')}>
						{post?.title}
					</Link>
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
