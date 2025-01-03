/* eslint-disable react-hooks/rules-of-hooks */
import { useAppDispatch } from '@/hooks/useAction'
import { useError } from '@/hooks/useError'
import { useProfile } from '@/hooks/useProfile'
import postService from '@/services/post-service/post.service'
import { LINKS } from '@/shared/constants/links'
import { Post } from '@/shared/interfaces/post.interface'
import { setPost } from '@/store/slice/update-post.slice'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

interface Props {
	post: Post
}

export const useAuthorTools = ({ post }: Props) => {
	const { profile } = useProfile()
	const isEnabledTools =
		post?.author.id == profile?.id || profile?.role.includes('admin')
	const { push } = useRouter()
	const dispatch = useAppDispatch()

	const { mutate: deletePost } = useMutation({
		mutationFn: () => postService.deletePost(post.id),
		onSuccess: () => {
			toast.success('Post deleted successfully')
		},
		onError: err => toast.error(useError(err))
	})

	const handleUpdatePost = () => {
		dispatch(setPost(post))
		push(LINKS.UPDATE_POST)
	}

	const handleDeletePost = () => {
		const res = confirm('Are you sure you want to delete this post?')

		if (res) deletePost()
	}

	return {
		isEnabledTools,
		handleUpdatePost,
		handleDeletePost
	}
}
