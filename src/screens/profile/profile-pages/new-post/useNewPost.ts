/* eslint-disable react-hooks/rules-of-hooks */
import { useError } from '@/hooks/useError'
import { useUpload } from '@/hooks/useUpload'
import { CreatePostDto } from '@/services/post-service/post.dto'
import postService from '@/services/post-service/post.service'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

export const useNewPost = () => {
	const [post, setPost] = useState<CreatePostDto>({
		title: '',
		content: '',
		cover: '',
		tag: ''
	})
	const { file: image, upload } = useUpload()

	useEffect(() => {
		if (image) {
			changeData('cover', `/${image.path.replaceAll('\\', '/')}`)
		}
	}, [image])

	const changeData = (key: string, value: string) =>
		setPost(prev => ({ ...prev, [key]: value }))

	const clearData = () =>
		setPost({ title: '', content: '', cover: '', tag: '' })

	const { mutate } = useMutation({
		mutationFn: () => postService.createPost(post),
		onSuccess: () => {
			toast.success('Post created successfully')
			clearData()
		},
		onError: err => toast.error(useError(err))
	})

	return useMemo(
		() => ({ post, changeData, clearData, mutate, upload }),
		[post, changeData, clearData, mutate, upload]
	)
}
