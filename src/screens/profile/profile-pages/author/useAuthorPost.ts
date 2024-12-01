import { useProfile } from '@/hooks/useProfile'
import postService from '@/services/post-service/post.service'
import { useQuery } from '@tanstack/react-query'

export const useAuthorPost = () => {
	const { profile } = useProfile()

	return useQuery({
		queryKey: ['authorPost'],
		queryFn: () => postService.getPostsByAuthor(profile?.id)
	})
}
