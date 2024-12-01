import { useProfile } from '@/hooks/useProfile'
import postReactionService from '@/services/post-reaction-service/post-reaction.service'
import { Post } from '@/shared/interfaces/post.interface'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'

export const useActionPost = (post: Post) => {
	const { profile, globalReState } = useProfile()

	const [isLike, setIsLike] = useState<boolean>(
		profile?.likes.some(like => like.id === post.id)
	)
	const [isDislike, setIsDislike] = useState<boolean>(
		profile?.dislikes.some(dis => dis.id === post.id)
	)
	const [isFavorite, setIsFavorite] = useState<boolean>(
		profile?.favorites.some(fav => fav.id === post.id)
	)
	useEffect(() => {
		setIsLike(profile?.likes.some(like => like.id === post.id))
		setIsDislike(profile?.dislikes.some(dislike => dislike.id === post.id))
		setIsFavorite(profile?.favorites.some(favorite => favorite.id === post.id))
	}, [profile])

	const { mutate: mutateLike } = useMutation({
		mutationFn: () => postReactionService.toggleLike(post.id),
		onSuccess: () => globalReState()
	})
	const { mutate: mutateDislike } = useMutation({
		mutationFn: () => postReactionService.toggleDislike(post.id),
		onSuccess: () => globalReState()
	})
	const { mutate: mutateFavorite } = useMutation({
		mutationFn: () => postReactionService.toggleFavorite(post.id),
		onSuccess: () => globalReState()
	})

	return useMemo(
		() => ({
			isLike,
			isDislike,
			isFavorite,
			mutateLike,
			mutateDislike,
			mutateFavorite
		}),
		[
			isLike,
			isDislike,
			isFavorite,
			profile,
			mutateLike,
			mutateDislike,
			mutateFavorite
		]
	)
}
