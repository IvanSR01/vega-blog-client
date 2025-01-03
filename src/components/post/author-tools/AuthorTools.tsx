'use client'

import { Post } from '@/shared/interfaces/post.interface'
import { FC } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

import styles from './AuthorTools.module.scss'
import { useAuthorTools } from './useAuthorTools'

interface Props {
	post: Post
}

const AuthorTools: FC<Props> = ({ post }) => {
	const { isEnabledTools, handleUpdatePost, handleDeletePost } = useAuthorTools({
		post
	})
	return (
		<div className={styles.tools}>
			{isEnabledTools && (
				<button onClick={() => handleUpdatePost()} className={styles.crudButton}>
					<FaEdit />
				</button>
			)}
			{isEnabledTools && (
				<button onClick={() => handleDeletePost()} className={styles.crudButton}>
					<FaTrash />
				</button>
			)}
		</div>
	)
}
export default AuthorTools
