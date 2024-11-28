import postReactionService from '@/services/post-reaction-service/post-reaction.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetReactions = () => {
	const { data: likePost } = useQuery({
		queryKey: ['likedPost'],
		queryFn: () => postReactionService.getLikedPosts()
	})
	const { data: favoritePost } = useQuery({
		queryKey: ['favoritePost'],
		queryFn: () => postReactionService.getFavoritePosts()
	})
	return useMemo(() => ({ likePost, favoritePost }), [likePost, favoritePost])
}
