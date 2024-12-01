/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useError } from '@/hooks/useError'
import { useUpload } from '@/hooks/useUpload'
import { CreatePostDto, UpdatePostDto } from '@/services/post-service/post.dto'
import postService from '@/services/post-service/post.service'
import { FileResponse } from '@/shared/types/file.type'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

export const useManagePost = (postId?: number) => {
	const [post, setPost] = useState<CreatePostDto | UpdatePostDto>({
		title: '',
		content: '',
		cover: '',
		tag: '',
		...(postId && { id: postId })
	})

	const changeData = (key: string, value: string) =>
		setPost(prev => ({ ...prev, [key]: value }))

	const saveCover = (file: FileResponse | null) =>
		changeData('cover', file ? `/${file?.path.replaceAll('\\', '/')}` : '')

	const { upload } = useUpload(saveCover)

	const clearData = () =>
		setPost({
			title: '',
			content: '',
			cover: '',
			tag: '',
			...(postId && { id: postId })
		})

	const { mutate } = useMutation({
		mutationFn: () => {
			if (postId) {
				return postService.updatePost(post as UpdatePostDto)
			} else {
				return postService.createPost(post as CreatePostDto)
			}
		},
		onSuccess: () => {
			toast.success(
				postId ? 'Post updated successfully' : 'Post created successfully'
			)
			if (!postId) clearData()
		},
		onError: err => toast.error(useError(err))
	})

	const data = useQuery({
		queryKey: ['post', postId],
		queryFn: () => postService.getPostById(postId!),
		enabled: !!postId
	}).data

	useEffect(() => {
		if (data) {
			setPost({ ...data, tag: data.tag.name })
		}
	}, [data])

	return useMemo(
		() => ({ post, changeData, clearData, mutate, upload }),
		[post, changeData, clearData, mutate, upload]
	)
}
