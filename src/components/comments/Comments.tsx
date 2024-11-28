/* eslint-disable react-hooks/rules-of-hooks */
import { useProfile } from '@/hooks/useProfile'
import { Comment } from '@/shared/interfaces/comment.interface'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import { formatDate } from '@/shared/utils/formatDate'
import { FC, useState } from 'react'
import styles from './Comments.module.scss'
import { useMutation, useQuery } from '@tanstack/react-query'
import commentService from '@/services/comment-service/comment.service'
import { toast } from 'react-toastify'
import { useError } from '@/hooks/useError'

interface Props {
	comments: Comment[]
	postId: number
}

const Comments: FC<Props> = ({ comments, postId }) => {
	const { profile, globalReState } = useProfile()
	const [newPostContent, setNewPostContent] = useState<string>('')
	const { data, refetch } = useQuery({
		queryKey: ['comments'],
		queryFn: () => commentService.getCommentsByPostId(postId),
		initialData: comments
	})
	const { mutate } = useMutation({
		mutationFn: () =>
			commentService.createComment({ content: newPostContent, postId }),
		onError: err => toast.error(useError(err)),
		onSuccess: () => {
			setNewPostContent('')
			refetch()
			globalReState()
			toast.success('Comment created successfully')
		}
	})
	return (
		<div className={styles.comments} id='comments'>
			<h2>Comments ({comments.length})</h2>
			<div className={styles.commentForm}>
				{!profile && (
					<div className={styles.noAuth}>
						Please <a href='sign in'>sign in</a> to leave a comment
					</div>
				)}
				<UserAvatar alt='Current User' size='medium' />
				<textarea
					placeholder='Add a comment...'
					disabled={!profile}
					value={newPostContent}
					onChange={(e: any) => setNewPostContent(e.target?.value)}
				/>
				<button
					onClick={() => mutate()}
					className={styles.button}
					disabled={!profile}
				>
					Post
				</button>
			</div>
			<ul className={styles.commentList}>
				{data && data.length ? (
					<>
						{data?.map(comment => (
							<li key={comment.id} className={styles.comment}>
								<UserAvatar
									alt={comment?.author.firstName}
									src={comment?.author.avatar}
									size='medium'
								/>
								<div className={styles.commentContent}>
									<div className={styles.commentHeader}>
										<span className={styles.author}>
											{comment?.author?.firstName} {comment?.author?.middleName}{' '}
											{comment?.author?.lastName}
										</span>
										<span className={styles.timestamp}>
											{formatDate(comment?.createAt)}
										</span>
									</div>
									<p>{comment.content}</p>
								</div>
							</li>
						))}
					</>
				) : (
					<div className={styles.commentsListsEmpty}>Comments non</div>
				)}
			</ul>
		</div>
	)
}

export default Comments
