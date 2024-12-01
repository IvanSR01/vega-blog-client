'use client'
import { useProfile } from '@/hooks/useProfile'
import { Post } from '@/shared/interfaces/post.interface'
import { FC } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import styles from './AuthorTools.module.scss'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/hooks/useAction'
import { setPost } from '@/store/slice/update-post.slice'

interface Props {
	post: Post
}

const AuthorTools: FC<Props> = ({ post }) => {
	const { profile } = useProfile()
	const isAuthor = post?.author.id == profile?.id
	const { push } = useRouter()
	const dispatch = useAppDispatch()
	return (
		<div className={styles.tools}>
			{isAuthor && (
				<button
					onClick={() => {
						dispatch(setPost(post))
						push(`/profile/update-post/`)
					}}
					className={styles.crudButton}
				>
					<FaEdit />
				</button>
			)}
			{isAuthor && (
				<button className={styles.crudButton}>
					<FaTrash />
				</button>
			)}
		</div>
	)
}
export default AuthorTools
