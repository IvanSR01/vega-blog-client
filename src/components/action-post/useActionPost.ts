import { useProfile } from '@/hooks/useProfile'
import postReactionService from '@/services/post-reaction-service/post-reaction.service'
import { LINKS } from '@/shared/constants/links'
import { Post } from '@/shared/interfaces/post.interface'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { startTransition, useCallback, useOptimistic } from 'react'

interface OptimisticState {
	isLiked: boolean
	isDisliked: boolean
	isFavorited: boolean
}

export const useActionPost = (post: Post) => {
	const { profile, globalReState } = useProfile()
	const { replace } = useRouter()

	const authRedirect = () => replace(LINKS.AUTH_SING_IN)

	const initialState: OptimisticState = {
		isLiked: profile?.likes?.some(like => like.id === post.id) ?? false,
		isDisliked:
			profile?.dislikes?.some(dislike => dislike.id === post.id) ?? false,
		isFavorited:
			profile?.favorites?.some(favorite => favorite.id === post.id) ?? false
	}

	const [optimisticState, addOptimistic] = useOptimistic<
		OptimisticState,
		Partial<OptimisticState>
	>(
		initialState,
		(state, update) => ({ ...state, ...update }) // Обновление состояния
	)

	const toggleLikeMutation = useMutation({
		mutationFn: () => postReactionService.toggleLike(post.id),
		onSuccess: () => {
			globalReState()
			startTransition(() => {
				addOptimistic({ isLiked: !optimisticState.isLiked })
			})
		},
		onError: () => {
			globalReState()
			startTransition(() => {
				addOptimistic({ isLiked: optimisticState.isLiked })
			})
		}
	})

	const toggleDislikeMutation = useMutation({
		mutationFn: () => postReactionService.toggleDislike(post.id),
		onSuccess: () => {
			globalReState()
			startTransition(() => {
				addOptimistic({ isDisliked: !optimisticState.isDisliked })
			})
		},
		onError: () => {
			globalReState()
			startTransition(() => {
				addOptimistic({ isDisliked: optimisticState.isDisliked })
			})
		}
	})

	const toggleFavoriteMutation = useMutation({
		mutationFn: () => postReactionService.toggleFavorite(post.id),
		onSuccess: () => {
			globalReState()
			startTransition(() => {
				addOptimistic({ isFavorited: !optimisticState.isFavorited })
			})
		},
		onError: () => {
			globalReState()
			startTransition(() => {
				addOptimistic({ isFavorited: optimisticState.isFavorited })
			})
		}
	})

	const handleToggleLike = useCallback(() => {
		if (!profile) return authRedirect()
		toggleLikeMutation.mutate()
	}, [profile, toggleLikeMutation, authRedirect])

	const handleToggleDislike = useCallback(() => {
		if (!profile) return authRedirect()
		toggleDislikeMutation.mutate()
	}, [profile, toggleDislikeMutation, authRedirect])

	const handleToggleFavorite = useCallback(() => {
		if (!profile) return authRedirect()
		toggleFavoriteMutation.mutate()
	}, [profile, toggleFavoriteMutation, authRedirect])

	return {
		optimisticState,
		handleToggleLike,
		handleToggleDislike,
		handleToggleFavorite
	}
}
