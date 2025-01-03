/* eslint-disable react-hooks/exhaustive-deps */
import { useProfile } from '@/hooks/useProfile'
import postReactionService from '@/services/post-reaction-service/post-reaction.service'
import { LINKS } from '@/shared/constants/links'
import { Post } from '@/shared/interfaces/post.interface'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export const useActionPost = (post: Post) => {
	const { profile, globalReState } = useProfile()
	const { replace } = useRouter()
	const [isLiked, setIsLiked] = useState<boolean>(false)
	const [isDisliked, setIsDisliked] = useState<boolean>(false)
	const [isFavorited, setIsFavorited] = useState<boolean>(false)

	useEffect(() => {
		setIsLiked(profile?.likes?.some(like => like.id === post.id) ?? false)
		setIsDisliked(
			profile?.dislikes?.some(dislike => dislike.id === post.id) ?? false
		)
		setIsFavorited(
			profile?.favorites?.some(favorite => favorite.id === post.id) ?? false
		)
	}, [profile])

	const { mutate: toggleLike } = useMutation({
		mutationFn: () => postReactionService.toggleLike(post.id),
		onSuccess: () => globalReState()
	})
	const { mutate: toggleDislike } = useMutation({
		mutationFn: () => postReactionService.toggleDislike(post.id),
		onSuccess: () => globalReState()
	})
	const { mutate: toggleFavorite } = useMutation({
		mutationKey: ['post-favorite', post.id],
		mutationFn: () => postReactionService.toggleFavorite(post.id),
		onSuccess: () => globalReState()
	})

	const authRedirect = () => replace(LINKS.AUTH_SING_IN)

	const handleToggleLike = () => {
		if (!profile) return authRedirect()
		return toggleLike()
	}

	const handleToggleDislike = () => {
		if (!profile) return authRedirect()
		return toggleDislike()
	}

	const handleToggleFavorite = () => {
		if (!profile) return authRedirect()
		return toggleFavorite()
	}

	return useMemo(
		() => ({
			isLiked,
			isDisliked,
			isFavorited,
			handleToggleLike,
			handleToggleDislike,
			handleToggleFavorite
		}),
		[
			isLiked,
			isDisliked,
			isFavorited,
			handleToggleLike,
			handleToggleDislike,
			handleToggleFavorite
		]
	)
}
