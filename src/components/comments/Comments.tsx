/* eslint-disable react-hooks/rules-of-hooks */
import { useError } from '@/hooks/useError'
import { useProfile } from '@/hooks/useProfile'
import commentService from '@/services/comment-service/comment.service'
import { LINKS } from '@/shared/constants/links'
import { Comment } from '@/shared/interfaces/comment.interface'
import UserAvatar from '@/shared/ui/user-avatar/UserAvatar'
import { connectUrl } from '@/shared/utils/connectUrl'
import { formatDate } from '@/shared/utils/formatDate'
import { useMutation, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'

import styles from './Comments.module.scss'

interface Props {
	comments: Comment[]
	postId: number
}

const Comments: FC<Props> = ({ comments, postId }) => {
	const { profile, globalReState } = useProfile()
	const [commentContent, setCommentContent] = useState<string>('')
	const { data, refetch } = useQuery({
		queryKey: ['comments'],
		queryFn: () => commentService.getCommentsByPostId(postId),
		initialData: comments
	})
	const { mutate } = useMutation({
		mutationFn: () =>
			commentService.createComment({ content: commentContent, postId }),
		onError: err => toast.error(useError(err)),
		onSuccess: () => {
			setCommentContent('')
			refetch()
			globalReState()
			toast.success('Comment created successfully')
		}
	})
	const createComment = () => {
		if (!commentContent) return toast.warning('Please write something first')
		mutate()
	}
	return (
		<div className={styles.comments} id='comments'>
			<h2>Comments ({comments.length})</h2>
			<div className={styles.commentForm}>
				{!profile && (
					<div className={styles.noAuth}>
						Please <Link href={LINKS.AUTH_SING_IN}>sign in</Link> to leave a
						comment
					</div>
				)}
				<UserAvatar alt='Current User' size='medium' />
				<textarea
					placeholder='Add a comment...'
					disabled={!profile}
					value={commentContent}
					onChange={(e: any) => setCommentContent(e.target?.value)}
				/>
				<button
					onClick={() => createComment()}
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
										<Link
											href={connectUrl(
												LINKS.AUTHOR_ID,
												'/',
												comment?.author?.id.toString() || ''
											)}
										>
											<span className={styles.author}>
												{comment?.author?.firstName}{' '}
												{comment?.author?.middleName}{' '}
												{comment?.author?.lastName}
											</span>
										</Link>
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
					<div className={styles.commentsListsEmpty}>
						There are no comments yet.
					</div>
				)}
			</ul>
		</div>
	)
}

export default Comments
